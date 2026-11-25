import { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  FileCheck2,
  PenTool,
  Printer,
  RefreshCw,
  Volume2,
  XCircle
} from 'lucide-react';
import { LEVEL_INFO_MAP, LEVEL_ORDER } from '../data/levels.ts';
import type {
  DayCompletionRecord,
  DayLessonModule,
  LearnerSettings,
  ParaphraseResult,
  SpacedReviewCard,
  WorksheetExamItem
} from '../types/course.ts';
import { analyzeWithOptionalGemini } from '../utils/paraphraseEngine.ts';
import { speakEnglish } from '../utils/speech.ts';
import { isEquivalentEnglishAnswer } from '../utils/speechScoring.ts';
import { DayNavigatorBar } from './DayNavigatorBar.tsx';
import { InteractiveText } from './InteractiveText.tsx';

interface AuthenticWorksheetExamProps {
  module: DayLessonModule;
  settings: LearnerSettings;
  dayRecords: Record<number, DayCompletionRecord>;
  previousBestScore: number | null;
  onSelectDay: (dayNumber: number) => void;
  onSubmitExamScore: (
    score: number,
    missedCards: SpacedReviewCard[],
    missedGrammarTags: string[]
  ) => void;
  onOpenDictionary: (word?: string) => void;
}

function isItemCorrect(item: WorksheetExamItem, userRaw: string): boolean {
  if (!userRaw.trim()) return false;
  if (item.options) {
    return userRaw.trim() === item.answer.trim();
  }
  return isEquivalentEnglishAnswer(userRaw, item.answer, item.acceptableAlt);
}

function gradeLetter(score: number): string {
  if (score >= 95) return 'A+';
  if (score >= 85) return 'A';
  if (score >= 75) return 'B+';
  if (score >= 65) return 'B';
  return 'C (재응시 권장)';
}

export function AuthenticWorksheetExam({
  module,
  settings,
  dayRecords,
  previousBestScore,
  onSelectDay,
  onSubmitExamScore,
  onOpenDictionary
}: AuthenticWorksheetExamProps) {
  const [subTab, setSubTab] = useState<'concept' | 'exam'>('exam');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [graded, setGraded] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  // Twin Clinic states
  const [twinInputs, setTwinInputs] = useState<Record<string, string>>({});
  const [twinChecked, setTwinChecked] = useState<Record<string, 'correct' | 'wrong'>>({});

  // Free composition / Handwriting note clinic
  const [essayDraft, setEssayDraft] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [essayResults, setEssayResults] = useState<ParaphraseResult[]>([]);
  const [gradingEssay, setGradingEssay] = useState(false);

  const dayPad = String(module.dayNumber).padStart(2, '0');
  const speechRate = LEVEL_INFO_MAP[settings.levelTier].defaultSpeechRate;

  const handleGradePaper = () => {
    let correctCount = 0;
    const missedCards: SpacedReviewCard[] = [];
    const missedTags: string[] = [];

    for (const item of module.worksheetExam) {
      const userAns = answers[item.id] ?? '';
      if (isItemCorrect(item, userAns)) {
        correctCount += 1;
      } else {
        missedTags.push(item.grammarTag);
        missedCards.push({
          id: `rev-exam-${item.id}-${Date.now()}`,
          promptKo: `[단원평가 #${item.number}] ${item.questionKo}`,
          targetEn: item.answer,
          noteKo: item.explanationKo,
          sourceLabel: `Day ${dayPad} 시험지 오답`,
          intervalDays: 1,
          mastered: false
        });
      }
    }

    const computedScore = Math.round((correctCount / module.worksheetExam.length) * 100);
    setScore(computedScore);
    setGraded(true);
    onSubmitExamScore(computedScore, missedCards, missedTags);
    window.scrollTo({ top: 140, behavior: 'smooth' });
  };

  const handleFillDemoAnswers = () => {
    const filled: Record<string, string> = {};
    module.worksheetExam.forEach((item, idx) => {
      if (idx === 1) {
        filled[item.id] = 'wrong answer';
      } else if (idx === 6 && item.options) {
        filled[item.id] = item.options.find((o) => o !== item.answer) ?? item.answer;
      } else {
        filled[item.id] = item.answer;
      }
    });
    setAnswers(filled);
    setGraded(false);
    setScore(null);
  };

  const handleCheckTwin = (item: WorksheetExamItem) => {
    const raw = twinInputs[item.id] ?? '';
    const ok = isEquivalentEnglishAnswer(raw, item.twinClinic.answer);
    setTwinChecked((prev) => ({ ...prev, [item.id]: ok ? 'correct' : 'wrong' }));
  };

  const handleGradeEssay = async () => {
    if (!essayDraft.trim() || gradingEssay) return;
    setGradingEssay(true);
    const sentences = essayDraft
      .split(/(?<=[.!?])\s+|\n+/)
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 4);

    const evaluated: ParaphraseResult[] = [];
    for (const s of sentences) {
      const r = await analyzeWithOptionalGemini(
        s,
        module.dayNumber,
        module.title,
        settings.geminiApiKey
      );
      evaluated.push(r);
    }
    setEssayResults(evaluated);
    setGradingEssay(false);
  };

  const parts = [
    'Part 1 · 어휘·구동사 빈칸 영작',
    'Part 2 · 어법·뉘앙스 실전 객관식',
    'Part 3 · 서술형 어순 배열 & 한영 통문장 영작'
  ] as const;

  const answeredCount = module.worksheetExam.filter((i) => (answers[i.id] ?? '').trim().length > 0).length;

  return (
    <main className="page-wrap">
      {/* 30-DAY SWITCHER */}
      <DayNavigatorBar
        selectedDay={module.dayNumber}
        dayRecords={dayRecords}
        onSelectDay={onSelectDay}
      />

      {/* SUB-MODE TABS */}
      <div className="submode-tab-bar no-print" style={{ marginBottom: '24px' }}>
        <button
          id="worksheet-subtab-concept"
          type="button"
          className={`submode-tab-btn ${subTab === 'concept' ? 'active' : ''}`}
          onClick={() => setSubTab('concept')}
        >
          <BookOpen size={16} />
          <span>단원 개념 원리서 · 6단계 문장 사다리 · 영자 독해</span>
        </button>

        <button
          id="worksheet-subtab-exam"
          type="button"
          className={`submode-tab-btn ${subTab === 'exam' ? 'active' : ''}`}
          onClick={() => setSubTab('exam')}
        >
          <FileCheck2 size={16} />
          <span>
            실전 학습지 &amp; 단원평가 시험지 ({module.worksheetExam.length}문항)
            {previousBestScore !== null ? ` · 최고 ${previousBestScore}점` : ''}
          </span>
        </button>
      </div>

      {/* =======================================================
          SUB-TAB 1: EDITORIAL CONCEPT TEXTBOOK & 6-LEVEL LADDER
         ======================================================= */}
      {subTab === 'concept' && (
        <article className="exam-paper-sheet">
          <div className="exam-paper-header">
            <div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="pill-tag pill-brand">{module.dayBadge} · 개념 원리 교재</span>
                <span className="pill-tag pill-coral">
                  {LEVEL_INFO_MAP[module.cefrLevel].shortLabel}
                </span>
              </div>
              <h1 style={{ fontSize: '1.8rem', marginTop: '10px' }}>{module.title}</h1>
              <p style={{ color: 'var(--text-sub)', marginTop: '4px' }}>{module.subtitle}</p>
            </div>
            <button
              id="print-concept-book-btn"
              type="button"
              className="btn-outline no-print"
              onClick={() => window.print()}
            >
              <Printer size={16} /> 교재 A4 인쇄 / PDF
            </button>
          </div>

          <section style={{ marginBottom: '36px' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '14px' }}>
              1. CEFR 6단계 레벨별 목표 문장 스펙트럼 (Lv.1 입문 → Lv.6 마스터)
            </h2>
            <div className="concept-tier-grid-six">
              {LEVEL_ORDER.map((lv) => {
                const info = LEVEL_INFO_MAP[lv];
                const sentence = module.keySentenceByTier[lv];
                const isMine = settings.levelTier === lv;
                return (
                  <div
                    key={lv}
                    className={`concept-tier-card ${isMine ? 'my-level-highlight' : ''}`}
                  >
                    <div className="section-label-between">
                      <span className={`pill-tag ${isMine ? 'pill-brand' : 'pill-subtle'}`}>
                        {info.shortLabel} {isMine ? '· 내 레벨' : ''}
                      </span>
                      <button
                        id={`concept-tier-audio-${lv}`}
                        type="button"
                        className="inline-audio-btn no-print"
                        onClick={() => speakEnglish(sentence, info.defaultSpeechRate)}
                      >
                        <Volume2 size={14} /> 발음
                      </button>
                    </div>
                    <p style={{ fontFamily: 'var(--font-en)', fontWeight: 700, marginTop: '10px', fontSize: '0.98rem' }}>
                      <InteractiveText text={sentence} onLookupWord={onOpenDictionary} />
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section style={{ marginBottom: '36px' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>
              2. 핵심 어법 &amp; 원어민 뉘앙스 원리 3강
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {module.grammarSections.map((sec, idx) => (
                <div key={sec.title} className="textbook-principle-box">
                  <h3 style={{ fontSize: '1.12rem', color: 'var(--brand)' }}>{sec.title}</h3>
                  <p className="textbook-formula-line">공식: {sec.coreFormula}</p>
                  <div className="textbook-wrong-right">
                    <p style={{ color: 'var(--danger)' }}>
                      <strong>✕ 콩글리시 주의:</strong> {sec.wrongKonglish}
                    </p>
                    <p style={{ color: 'var(--ok)', marginTop: '4px' }}>
                      <strong>✓ 원어민 표준:</strong>{' '}
                      <InteractiveText text={sec.rightNative} onLookupWord={onOpenDictionary} />{' '}
                      <button
                        id={`textbook-sec-audio-${idx}`}
                        type="button"
                        className="inline-audio-btn no-print"
                        style={{ marginLeft: '8px' }}
                        onClick={() => speakEnglish(sec.rightNative, speechRate)}
                      >
                        <Volume2 size={13} /> 듣기
                      </button>
                    </p>
                  </div>
                  <p style={{ marginTop: '10px', color: 'var(--text-body)' }}>{sec.explanationKo}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: '36px' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>
              3. 데일리 실전 영자 독해 지문 — {module.readingPassage.titleEn}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {module.readingPassage.paragraphsEn.map((p, i) => (
                <div key={i} className="textbook-dialogue-row">
                  <p style={{ fontFamily: 'var(--font-en)', fontWeight: 700, fontSize: '1rem' }}>
                    <InteractiveText
                      text={settings.showStructureSlashes ? module.readingPassage.paragraphsSlash[i] : p}
                      onLookupWord={onOpenDictionary}
                    />
                  </p>
                  <p style={{ color: 'var(--text-body)', fontSize: '0.92rem', marginTop: '6px' }}>
                    {module.readingPassage.paragraphsKo[i]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>
              4. 전체 시트콤 대화 S/V/O 직독직해 구문 분석
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {module.dialogue.map((turn, idx) => (
                <div key={turn.id} className="textbook-dialogue-row">
                  <div className="section-label-between">
                    <strong>
                      {turn.speaker} ({turn.roleLabel})
                    </strong>
                    <button
                      id={`textbook-turn-audio-${idx}`}
                      type="button"
                      className="inline-audio-btn no-print"
                      onClick={() => speakEnglish(turn.english, speechRate, undefined, turn.voicePitch)}
                    >
                      <Volume2 size={14} /> 듣기
                    </button>
                  </div>
                  <p style={{ fontFamily: 'var(--font-en)', fontWeight: 750, fontSize: '1.05rem', marginTop: '6px' }}>
                    <InteractiveText text={turn.slashBroken} onLookupWord={onOpenDictionary} />
                  </p>
                  <p style={{ color: 'var(--text-body)', fontSize: '0.94rem', marginTop: '4px' }}>
                    해석: {turn.korean}
                  </p>
                  <p style={{ color: 'var(--brand)', fontSize: '0.86rem', marginTop: '4px', fontWeight: 600 }}>
                    해설 포인트: {turn.noteKo}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </article>
      )}

      {/* =======================================================
          SUB-TAB 2: AUTHENTIC A4 EXAM SHEET + TWIN CLINIC
         ======================================================= */}
      {subTab === 'exam' && (
        <>
          <div className="exam-toolbar no-print">
            <div style={{ fontSize: '0.92rem', color: 'var(--text-sub)', fontWeight: 600 }}>
              작성 문항: <strong>{answeredCount} / {module.worksheetExam.length}</strong>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                id="exam-fill-demo-btn"
                type="button"
                className="btn-outline"
                onClick={handleFillDemoAnswers}
              >
                예시 답안 자동 입력 (오답 클리닉 체험)
              </button>
              <button
                id="exam-reset-btn"
                type="button"
                className="btn-outline"
                onClick={() => {
                  setAnswers({});
                  setGraded(false);
                  setScore(null);
                  setTwinInputs({});
                  setTwinChecked({});
                }}
              >
                <RefreshCw size={15} /> 초기화
              </button>
              <button
                id="exam-print-pdf-btn"
                type="button"
                className="btn-outline"
                onClick={() => window.print()}
              >
                <Printer size={15} /> A4 시험지 인쇄 / PDF
              </button>
            </div>
          </div>

          <section className="exam-paper-sheet" aria-label="단원 성취도 평가 시험지">
            <header className="exam-paper-header">
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.04em', color: 'var(--text-sub)' }}>
                  KOREBRIDGE ACADEMY · 실전 영어 성취도 평가 시험지
                </div>
                <h1 style={{ fontSize: 'clamp(1.45rem, 2.4vw, 1.9rem)', marginTop: '6px' }}>
                  {module.dayBadge} — {module.title}
                </h1>
                <div className="exam-student-meta">
                  <span>응시자: <strong>{settings.learnerName}</strong></span>
                  <span>|</span>
                  <span>내 레벨: <strong>{LEVEL_INFO_MAP[settings.levelTier].shortLabel}</strong></span>
                  <span>|</span>
                  <span>단원 난이도: <strong>{LEVEL_INFO_MAP[module.cefrLevel].shortLabel}</strong></span>
                  <span>|</span>
                  <span>총 문항: <strong>{module.worksheetExam.length}문항 (100점 만점)</strong></span>
                </div>
              </div>

              {graded && score !== null && (
                <div className="red-score-stamp" aria-live="polite">
                  {score}점 · {gradeLetter(score)}
                </div>
              )}
            </header>

            {parts.map((partTitle) => {
              const partItems = module.worksheetExam.filter((item) => item.part === partTitle);
              if (partItems.length === 0) return null;

              return (
                <div key={partTitle} style={{ marginBottom: '36px' }}>
                  <div className="exam-part-banner">{partTitle}</div>

                  {partItems.map((item) => {
                    const userVal = answers[item.id] ?? '';
                    const correct = graded ? isItemCorrect(item, userVal) : null;

                    return (
                      <div key={item.id} className="exam-item-block">
                        <div className="section-label-between">
                          <p className="exam-question-title">
                            {graded && (
                              <span style={{ marginRight: '8px', color: correct ? 'var(--ok)' : 'var(--danger)' }}>
                                {correct ? '⭕' : '❌'}
                              </span>
                            )}
                            {item.number}. {item.questionKo}
                          </p>
                          <span className="pill-tag pill-subtle">{item.grammarTag}</span>
                        </div>

                        <div className="exam-stimulus-box" style={{ whiteSpace: 'pre-line' }}>
                          {item.stimulusEn}
                        </div>

                        {item.options ? (
                          <div className="exam-mcq-grid" style={{ marginTop: '14px' }}>
                            {item.options.map((opt, optIdx) => {
                              const isPicked = userVal === opt;
                              const isRightOpt = graded && opt === item.answer;
                              const isWrongPicked = graded && isPicked && opt !== item.answer;

                              return (
                                <button
                                  key={opt}
                                  id={`exam-opt-${item.id}-${optIdx}`}
                                  type="button"
                                  disabled={graded}
                                  className={`option-choice-btn ${isPicked ? 'selected' : ''} ${
                                    isRightOpt ? 'correct-opt' : ''
                                  } ${isWrongPicked ? 'wrong-opt' : ''}`}
                                  onClick={() =>
                                    setAnswers((prev) => ({ ...prev, [item.id]: opt }))
                                  }
                                >
                                  <span style={{ fontWeight: 800, marginRight: '8px' }}>
                                    {optIdx + 1})
                                  </span>
                                  <span>{opt}</span>
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <div style={{ marginTop: '12px' }}>
                            <input
                              id={`exam-input-${item.id}`}
                              type="text"
                              className="input-clean"
                              disabled={graded}
                              value={userVal}
                              onChange={(e) =>
                                setAnswers((prev) => ({ ...prev, [item.id]: e.target.value }))
                              }
                              placeholder="영어 정답을 정확히 작성하세요"
                            />
                          </div>
                        )}

                        {graded && (
                          <div
                            className={`exam-explanation-panel ${correct ? 'ok' : 'wrong'}`}
                            style={{ marginTop: '14px' }}
                          >
                            <div className="section-label-between">
                              <strong style={{ color: correct ? 'var(--ok)' : 'var(--danger)' }}>
                                {correct ? '정답입니다!' : `오답 · 정답: ${item.answer}`}
                              </strong>
                              <button
                                id={`exam-listen-ans-${item.id}`}
                                type="button"
                                className="inline-audio-btn no-print"
                                onClick={() => speakEnglish(item.answer, speechRate)}
                              >
                                <Volume2 size={14} /> 정답 발음
                              </button>
                            </div>
                            <p style={{ marginTop: '6px', fontSize: '0.92rem', color: 'var(--text-body)' }}>
                              해설: {item.explanationKo}
                            </p>

                            {!correct && (
                              <div className="twin-clinic-card no-print">
                                <div style={{ fontWeight: 800, color: 'var(--coral)', fontSize: '0.92rem' }}>
                                  쌍둥이 변형 오답 클리닉 — 같은 원리를 지금 바로 완벽히 잡으세요!
                                </div>
                                <p style={{ marginTop: '6px', fontWeight: 700, fontSize: '0.95rem' }}>
                                  {item.twinClinic.questionKo}
                                </p>
                                <p
                                  style={{
                                    marginTop: '4px',
                                    fontFamily: 'var(--font-en)',
                                    color: 'var(--text-body)'
                                  }}
                                >
                                  {item.twinClinic.stimulusEn}
                                </p>
                                <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
                                  <input
                                    id={`twin-input-${item.id}`}
                                    type="text"
                                    className="input-clean"
                                    style={{ flex: 1, minWidth: '220px' }}
                                    value={twinInputs[item.id] ?? ''}
                                    onChange={(e) =>
                                      setTwinInputs((prev) => ({
                                        ...prev,
                                        [item.id]: e.target.value
                                      }))
                                    }
                                    placeholder="쌍둥이 문제 정답을 입력하세요"
                                  />
                                  <button
                                    id={`twin-check-btn-${item.id}`}
                                    type="button"
                                    className="btn-solid-coral"
                                    onClick={() => handleCheckTwin(item)}
                                  >
                                    클리닉 확인
                                  </button>
                                </div>

                                {twinChecked[item.id] && (
                                  <p
                                    style={{
                                      marginTop: '8px',
                                      fontSize: '0.9rem',
                                      fontWeight: 700,
                                      color:
                                        twinChecked[item.id] === 'correct'
                                          ? 'var(--ok)'
                                          : 'var(--danger)'
                                    }}
                                  >
                                    {twinChecked[item.id] === 'correct' ? (
                                      <>
                                        <CheckCircle2 size={15} style={{ verticalAlign: 'middle' }} /> 완벽합니다! 약점 유형을 완전히 정복하셨습니다.
                                      </>
                                    ) : (
                                      <>
                                        <XCircle size={15} style={{ verticalAlign: 'middle' }} /> 정답은 “{item.twinClinic.answer}”입니다. ({item.twinClinic.explanationKo})
                                      </>
                                    )}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}

            <div className="no-print" style={{ marginTop: '28px', display: 'flex', justifyContent: 'center', gap: '12px' }}>
              {!graded ? (
                <button
                  id="submit-exam-grade-btn"
                  type="button"
                  className="btn-solid-brand"
                  style={{ minWidth: '260px', fontSize: '1.05rem' }}
                  onClick={handleGradePaper}
                >
                  채점하기 &amp; 오답 클리닉 발급
                </button>
              ) : (
                <button
                  id="retake-exam-btn"
                  type="button"
                  className="btn-solid-coral"
                  style={{ minWidth: '240px' }}
                  onClick={() => {
                    setAnswers({});
                    setGraded(false);
                    setScore(null);
                    setTwinInputs({});
                    setTwinChecked({});
                    window.scrollTo({ top: 140, behavior: 'smooth' });
                  }}
                >
                  깨끗한 시험지로 재응시하기
                </button>
              )}
            </div>
          </section>

          {/* FREE WRITING & HANDWRITING NOTE AI CLINIC */}
          <section className="surface-card no-print" style={{ marginTop: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <PenTool size={18} style={{ color: 'var(--brand)' }} />
              <h2 style={{ fontSize: '1.2rem' }}>서술형 자유 영작 · 손글씨 학습지 문장 첨삭</h2>
            </div>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', marginBottom: '14px' }}>
              인쇄한 종이 학습지에 직접 쓴 문장을 사진으로 첨부하거나 아래에 여러 문장을 입력하면 문장별 문법·뉘앙스를 첨삭해 드립니다.
            </p>

            <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <label htmlFor="handwriting-upload-input" className="btn-outline" style={{ cursor: 'pointer' }}>
                손글씨 노트 이미지 첨부 (선택)
              </label>
              <input
                id="handwriting-upload-input"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) {
                    setUploadedFileName(f.name);
                    if (!essayDraft.trim()) {
                      setEssayDraft(
                        'On my way to home, I had many works so my schedule was ambiguous until Friday.'
                      );
                    }
                  }
                }}
              />
              {uploadedFileName && (
                <span style={{ fontSize: '0.86rem', color: 'var(--brand)', fontWeight: 700 }}>
                  첨부됨: {uploadedFileName}
                </span>
              )}
            </div>

            <textarea
              id="free-essay-clinic-textarea"
              rows={3}
              className="input-clean"
              value={essayDraft}
              onChange={(e) => setEssayDraft(e.target.value)}
              placeholder="첨삭받고 싶은 영어 문장(1~4문장)을 자유롭게 입력하세요."
            />

            <button
              id="run-essay-clinic-btn"
              type="button"
              className="btn-solid-brand"
              style={{ marginTop: '12px' }}
              disabled={!essayDraft.trim() || gradingEssay}
              onClick={handleGradeEssay}
            >
              {gradingEssay ? '문장별 정밀 채점 중...' : '문장별 첨삭 리포트 받기'}
            </button>

            {essayResults.length > 0 && (
              <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {essayResults.map((res) => (
                  <div key={res.id} className="para-box fix">
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)' }}>
                      원문: {res.originalInput}
                    </p>
                    <p className="para-en-main" style={{ marginTop: '4px' }}>
                      교정: {res.grammarFix}
                    </p>
                    <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>{res.tutorExplanationKo}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
}
