import { useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Eye,
  FileEdit,
  GitBranch,
  GraduationCap,
  Layers,
  Sparkles,
  Volume2
} from 'lucide-react';
import {
  GRAMMAR_UNITS,
  GRAMMAR_YOUTUBE_VIDEOS,
  TENSE_MATRIX_12,
  TRANSFORMER_SENTENCES
} from '../data/grammarMasterBook.ts';
import {
  ACADEMIC_CONNECTOR_CHIPS,
  ACADEMIC_ESSAY_PROMPTS,
  ACADEMIC_YOUTUBE_VIDEOS,
  HIGH_SCHOOL_PASSAGES
} from '../data/highSchoolPassages.ts';
import type {
  SavedEssayRecord,
  SyntaxRole,
  TransformFormKey
} from '../types/academy.ts';
import type { SpacedReviewCard } from '../types/course.ts';
import {
  evaluateAcademicEssay,
  requestGeminiEssayCritique,
  type EssayEvaluationResult
} from '../utils/essayEvaluator.ts';
import { speakEnglish } from '../utils/speech.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface GrammarAndHighSchoolHubProps {
  grammarMasteredIds: string[];
  highSchoolPassageScores: Record<string, number>;
  savedEssays: SavedEssayRecord[];
  geminiApiKey?: string;
  onMarkGrammarMastered: (unitId: string) => void;
  onRecordHighSchoolScore: (
    passageId: string,
    score: number,
    missedCards: SpacedReviewCard[],
    missedTags: string[]
  ) => void;
  onSaveEssay: (essay: SavedEssayRecord) => void;
  onRecordGrammarMistakes: (missedCards: SpacedReviewCard[], missedTags: string[]) => void;
  onOpenDictionary: (word?: string) => void;
}

type AcademySubTab = 'grammar-units' | 'transformer-tense' | 'csat-reading' | 'essay-lab';

const SYNTAX_ROLE_CLASS: Record<SyntaxRole, string> = {
  S: 'syntax-chip-s',
  Aux: 'syntax-chip-aux',
  V: 'syntax-chip-v',
  O: 'syntax-chip-o',
  C: 'syntax-chip-o',
  M: 'syntax-chip-m',
  CONN: 'syntax-chip-conn',
  PLAIN: 'syntax-chip-plain'
};

const SYNTAX_INLINE_CLASS: Record<SyntaxRole, string> = {
  S: 'xray-s',
  Aux: 'xray-aux',
  V: 'xray-v',
  O: 'xray-o',
  C: 'xray-o',
  M: 'xray-m',
  CONN: 'xray-conn',
  PLAIN: 'xray-plain'
};

const TRANSFORM_BUTTONS: Array<{ key: TransformFormKey; labelKo: string }> = [
  { key: 'affirmative', labelKo: '평서문 (기본)' },
  { key: 'negative', labelKo: '부정문 (Not)' },
  { key: 'question', labelKo: '의문문 (?)' },
  { key: 'past', labelKo: '과거시제' },
  { key: 'future', labelKo: '미래시제' },
  { key: 'perfect', labelKo: '현재완료' },
  { key: 'passive', labelKo: '수동태' }
];

export function GrammarAndHighSchoolHub({
  grammarMasteredIds,
  highSchoolPassageScores,
  savedEssays,
  geminiApiKey,
  onMarkGrammarMastered,
  onRecordHighSchoolScore,
  onSaveEssay,
  onRecordGrammarMistakes,
  onOpenDictionary
}: GrammarAndHighSchoolHubProps) {
  const [subTab, setSubTab] = useState<AcademySubTab>('grammar-units');

  // Tab 1: Visual Grammar 20 Units
  const [stageFilter, setStageFilter] = useState<'all' | 'elementary' | 'middle' | 'high'>('all');
  const [selectedGrammarId, setSelectedGrammarId] = useState(GRAMMAR_UNITS[0]?.id ?? 'g01');
  const [grammarAnswers, setGrammarAnswers] = useState<Record<string, string>>({});
  const [grammarGradedMap, setGrammarGradedMap] = useState<Record<string, boolean>>({});

  // Tab 2: Interactive Sentence Transformer & 12-Tense Matrix
  const [tfIdx, setTfIdx] = useState(0);
  const [tfForm, setTfForm] = useState<TransformFormKey>('affirmative');
  const [selectedTenseId, setSelectedTenseId] = useState(
    TENSE_MATRIX_12.find((t) => t.timeAxis === 'present' && t.aspectAxis === 'perfect')?.id ??
      TENSE_MATRIX_12[0]?.id ??
      ''
  );
  const [activeGrammarVid, setActiveGrammarVid] = useState(
    GRAMMAR_YOUTUBE_VIDEOS[0]?.videoId ?? 'HWjRVkTNoNM'
  );

  // Tab 3: High-School CSAT Reading X-Ray
  const [selectedPassageId, setSelectedPassageId] = useState(HIGH_SCHOOL_PASSAGES[0]?.id ?? 'hs01');
  const [showSyntaxXray, setShowSyntaxXray] = useState(true);
  const [showSlashes, setShowSlashes] = useState(false);
  const [showSentenceKo, setShowSentenceKo] = useState(false);
  const [csatAnswers, setCsatAnswers] = useState<Record<string, string>>({});
  const [csatGradedMap, setCsatGradedMap] = useState<Record<string, boolean>>({});

  // Tab 4: Guided Academic Essay Lab
  const [selectedPromptId, setSelectedPromptId] = useState(ACADEMIC_ESSAY_PROMPTS[0]?.id ?? 'essay-01');
  const [essayDraft, setEssayDraft] = useState('');
  const [essayEval, setEssayEval] = useState<EssayEvaluationResult | null>(null);
  const [aiCritiqueLoading, setAiCritiqueLoading] = useState(false);
  const [showModelEssay, setShowModelEssay] = useState(false);
  const [activeEssayVid, setActiveEssayVid] = useState(
    ACADEMIC_YOUTUBE_VIDEOS[0]?.videoId ?? 'UuOWNNvupik'
  );

  const visibleGrammarUnits =
    stageFilter === 'all'
      ? GRAMMAR_UNITS
      : GRAMMAR_UNITS.filter((u) => u.schoolStage === stageFilter);

  const activeGrammar =
    GRAMMAR_UNITS.find((u) => u.id === selectedGrammarId) ?? GRAMMAR_UNITS[0];
  const isGrammarGraded = Boolean(grammarGradedMap[activeGrammar.id]);

  const activeTransformer = TRANSFORMER_SENTENCES[tfIdx] ?? TRANSFORMER_SENTENCES[0];
  const activeTransformView = activeTransformer?.forms[tfForm];
  const activeTense =
    TENSE_MATRIX_12.find((t) => t.id === selectedTenseId) ?? TENSE_MATRIX_12[0];

  const activePassage =
    HIGH_SCHOOL_PASSAGES.find((p) => p.id === selectedPassageId) ?? HIGH_SCHOOL_PASSAGES[0];
  const isPassageGraded = Boolean(csatGradedMap[activePassage.id]);

  const activePrompt =
    ACADEMIC_ESSAY_PROMPTS.find((p) => p.id === selectedPromptId) ?? ACADEMIC_ESSAY_PROMPTS[0];

  // Grade Grammar Unit Quiz
  const handleGradeGrammarQuiz = () => {
    const stamp = String(grammarMasteredIds.length + Object.keys(grammarAnswers).length);
    const today = new Date().toISOString().slice(0, 10);
    let correct = 0;
    const missedCards: SpacedReviewCard[] = [];
    const missedTags: string[] = [];

    for (const q of activeGrammar.quiz) {
      if (grammarAnswers[q.id] === q.answer) {
        correct += 1;
      } else {
        missedTags.push(q.grammarTag);
        missedCards.push({
          id: `grm-${q.id}-${stamp}`,
          promptKo: q.questionKo,
          targetEn: `${q.stimulusEn} → 정답: ${q.answer}`,
          noteKo: q.explanationKo,
          sourceLabel: `비주얼 영문법 ${activeGrammar.id.toUpperCase()}`,
          intervalDays: 1,
          dueDate: today,
          reviewCount: 0,
          mastered: false
        });
      }
    }

    setGrammarGradedMap((prev) => ({ ...prev, [activeGrammar.id]: true }));
    if (missedCards.length > 0) {
      onRecordGrammarMistakes(missedCards, missedTags);
    }
    if (correct >= 3) {
      onMarkGrammarMastered(activeGrammar.id);
    }
  };

  // Grade CSAT Passage Quiz
  const handleGradeCsatPassage = () => {
    const stamp = String(Object.keys(highSchoolPassageScores).length + Object.keys(csatAnswers).length);
    const today = new Date().toISOString().slice(0, 10);
    let correct = 0;
    const missedCards: SpacedReviewCard[] = [];
    const missedTags: string[] = [];

    for (const q of activePassage.questions) {
      if (csatAnswers[q.id] === q.answer) {
        correct += 1;
      } else {
        missedTags.push(q.grammarTag);
        missedCards.push({
          id: `csat-${q.id}-${stamp}`,
          promptKo: `[${q.questionType}] ${q.questionKo}`,
          targetEn: `정답: ${q.answer}`,
          noteKo: q.explanationKo,
          sourceLabel: `고등 구문독해 #${activePassage.number}`,
          intervalDays: 1,
          dueDate: today,
          reviewCount: 0,
          mastered: false
        });
      }
    }

    const score = Math.round((correct / activePassage.questions.length) * 100);
    setCsatGradedMap((prev) => ({ ...prev, [activePassage.id]: true }));
    onRecordHighSchoolScore(activePassage.id, score, missedCards, missedTags);
  };

  // Evaluate Essay + Save
  const handleEvaluateEssay = async () => {
    if (essayDraft.trim().length < 15) return;
    const baseResult = evaluateAcademicEssay(essayDraft, activePrompt.targetVocab);
    setEssayEval(baseResult);

    let aiNote: string | undefined;
    if (geminiApiKey?.trim()) {
      setAiCritiqueLoading(true);
      const aiResp = await requestGeminiEssayCritique(
        geminiApiKey,
        activePrompt.promptEn,
        essayDraft
      );
      setAiCritiqueLoading(false);
      if (aiResp) {
        aiNote = aiResp;
        setEssayEval({ ...baseResult, aiDeepFeedbackKo: aiResp });
      }
    }

    onSaveEssay({
      id: `essay-rec-${activePrompt.id}-${savedEssays.length + 1}`,
      promptId: activePrompt.id,
      topicKo: activePrompt.topicKo,
      createdAt: new Date().toISOString().slice(0, 10),
      essayText: essayDraft.trim(),
      wordCount: baseResult.wordCount,
      totalScore: baseResult.totalScore,
      bandLabel: baseResult.bandLabel,
      feedbackSummaryKo: aiNote ?? baseResult.strengthsKo[0] ?? baseResult.bandLabel
    });
  };

  const completedPassagesCount = Object.keys(highSchoolPassageScores).length;

  return (
    <main className="page-wrap">
      {/* HERO BANNER */}
      <section className="studio-hero-banner">
        <div className="studio-hero-text">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="pill-tag pill-brand">초등 → 중학 → 고등·수능 전범위 비주얼 영문법</span>
            <span className="pill-tag pill-coral">Stage 3 · 고등 수능 1등급 독해 &amp; 에세이</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.05rem)', marginTop: '10px' }}>
            눈으로 꿰뚫는 비주얼 영문법 &amp; 고등 수능 구문독해 아카데미
          </h1>
          <p style={{ color: 'var(--text-sub)', marginTop: '8px', maxWidth: '640px' }}>
            무작정 외우는 문법은 끝! 초등 5형식부터 고등 분사구문·가정법 도치까지 20강 비주얼 블록·실시간 문장 변환기·12시제 타임라인으로 뼈대를 세우고, 10대 분야 수능 구문독해 X-Ray와 4축 루브릭 에세이로 고등학교 이상 수준을 완벽 정복합니다.
          </p>

          <div className="summary-stat-strip" style={{ marginTop: '14px' }}>
            <div className="mini-stat-chip">
              <span className="mini-stat-label">비주얼 문법 마스터</span>
              <strong>
                {grammarMasteredIds.length} / {GRAMMAR_UNITS.length}강
              </strong>
            </div>
            <div className="mini-stat-chip">
              <span className="mini-stat-label">고등 구문독해 완주</span>
              <strong>
                {completedPassagesCount} / {HIGH_SCHOOL_PASSAGES.length}지문
              </strong>
            </div>
            <div className="mini-stat-chip">
              <span className="mini-stat-label">작성 아카데믹 에세이</span>
              <strong>{savedEssays.length}편</strong>
            </div>
          </div>
        </div>

        <div className="studio-hero-img-box">
          <img src="assets/stage_highschool_academic.jpg" alt="고등 아카데믹 구문독해 및 에세이 스튜디오" />
        </div>
      </section>

      {/* 4 SUB-TABS */}
      <div className="submode-tab-bar" role="tablist" aria-label="영문법 및 고등 아카데미 탭" style={{ marginBottom: '24px' }}>
        <button
          id="acad-tab-grammar"
          type="button"
          className={`submode-tab-btn ${subTab === 'grammar-units' ? 'active' : ''}`}
          onClick={() => setSubTab('grammar-units')}
        >
          <Layers size={16} />
          <span>1. 비주얼 영문법 20강</span>
        </button>
        <button
          id="acad-tab-transformer"
          type="button"
          className={`submode-tab-btn ${subTab === 'transformer-tense' ? 'active' : ''}`}
          onClick={() => setSubTab('transformer-tense')}
        >
          <GitBranch size={16} />
          <span>2. 문장변환기 · 12시제</span>
        </button>
        <button
          id="acad-tab-csat"
          type="button"
          className={`submode-tab-btn ${subTab === 'csat-reading' ? 'active' : ''}`}
          onClick={() => setSubTab('csat-reading')}
        >
          <BookOpen size={16} />
          <span>3. 고등·수능 구문독해 X-Ray</span>
        </button>
        <button
          id="acad-tab-essay"
          type="button"
          className={`submode-tab-btn ${subTab === 'essay-lab' ? 'active' : ''}`}
          onClick={() => setSubTab('essay-lab')}
        >
          <FileEdit size={16} />
          <span>4. 아카데믹 에세이 첨삭</span>
        </button>
      </div>

      {/* =======================================================
          TAB 1: 20-UNIT VISUAL GRAMMAR MASTER BOOK
         ======================================================= */}
      {subTab === 'grammar-units' && activeGrammar && (
        <section className="stack-lg">
          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
              <div>
                <h2 style={{ fontSize: '1.26rem' }}>초등 → 중학 → 고등·수능 20강 비주얼 문법 커리큘럼</h2>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginTop: '4px' }}>
                  각 단원의 시각 공식과 원어민 직관을 읽고 4문항 실전 드릴(총 80문항)을 3개 이상 맞히면 마스터 배지가 부여됩니다.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {(
                  [
                    ['all', '전체 20강'],
                    ['elementary', '초등 핵심 (G01–05)'],
                    ['middle', '중학 핵심 (G06–12)'],
                    ['high', '고등·수능 (G13–20)']
                  ] as const
                ).map(([k, label]) => (
                  <button
                    key={k}
                    id={`grammar-stage-filter-${k}`}
                    type="button"
                    className={`day-switch-chip ${stageFilter === k ? 'active' : ''}`}
                    onClick={() => setStageFilter(k)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grammar-unit-grid">
              {visibleGrammarUnits.map((unit) => {
                const isDone = grammarMasteredIds.includes(unit.id);
                const isSelected = unit.id === activeGrammar.id;
                return (
                  <button
                    key={unit.id}
                    id={`grammar-unit-select-${unit.id}`}
                    type="button"
                    className={`grammar-unit-chip ${isSelected ? 'active' : ''} ${isDone ? 'done' : ''}`}
                    onClick={() => setSelectedGrammarId(unit.id)}
                  >
                    <div className="section-label-between" style={{ width: '100%' }}>
                      <span className="grammar-unit-code">G{String(unit.unitNumber).padStart(2, '0')}</span>
                      <span style={{ fontSize: '0.72rem', opacity: 0.8 }}>{unit.stageLabelKo}</span>
                    </div>
                    <strong style={{ fontSize: '0.88rem', textAlign: 'left', marginTop: '4px' }}>
                      {unit.titleKo}
                    </strong>
                    {isDone && (
                      <span style={{ fontSize: '0.72rem', color: 'var(--ok)', fontWeight: 700, marginTop: '4px' }}>
                        ✓ 마스터 완료
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE GRAMMAR UNIT CONTENT */}
          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="pill-tag pill-brand">
                    Unit G{String(activeGrammar.unitNumber).padStart(2, '0')} · {activeGrammar.stageLabelKo}
                  </span>
                  {grammarMasteredIds.includes(activeGrammar.id) && (
                    <span className="pill-tag pill-amber">✓ 마스터 완료</span>
                  )}
                </div>
                <h2 style={{ fontSize: '1.42rem', marginTop: '8px' }}>{activeGrammar.titleKo}</h2>
                <p style={{ color: 'var(--text-sub)', marginTop: '4px' }}>{activeGrammar.subtitleKo}</p>
              </div>
              <div className="grammar-formula-pill">{activeGrammar.coreFormula}</div>
            </div>

            {/* VISUAL FORMULA BLOCKS */}
            <div className="visual-formula-stage" style={{ marginTop: '18px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 750, color: 'var(--text-sub)', display: 'block', marginBottom: '10px' }}>
                🧩 시각 어순 블록 공식
              </span>
              <div className="order-chip-row">
                {activeGrammar.formulaBlocks.map((blk, i) => (
                  <span key={i} className={`syntax-chip ${SYNTAX_ROLE_CLASS[blk.role]}`}>
                    <strong>{blk.text}</strong>
                    <small>{blk.labelKo}</small>
                  </span>
                ))}
              </div>
            </div>

            {/* TRAP VS NATIVE INSIGHT */}
            <div className="trap-vs-insight-grid" style={{ marginTop: '16px' }}>
              <div className="trap-card-box">
                <strong style={{ color: 'var(--danger)' }}>⚠️ 한국인이 90% 틀리는 함정</strong>
                <p style={{ marginTop: '6px', fontSize: '0.93rem', lineHeight: 1.65 }}>
                  {activeGrammar.koreanTrapKo}
                </p>
              </div>
              <div className="insight-card-box">
                <strong style={{ color: 'var(--brand)' }}>💡 원어민 머릿속 직관 그림</strong>
                <p style={{ marginTop: '6px', fontSize: '0.93rem', lineHeight: 1.65 }}>
                  {activeGrammar.nativeInsightKo}
                </p>
              </div>
            </div>

            {/* 4 EXAMPLES */}
            <h3 style={{ fontSize: '1.12rem', marginTop: '22px', marginBottom: '12px' }}>
              핵심 대표 예문 4선 (단어 클릭 시 영한사전 열림)
            </h3>
            <div className="grammar-example-grid">
              {activeGrammar.examples.map((ex, idx) => (
                <div key={idx} className="grammar-example-card">
                  <div className="section-label-between" style={{ marginBottom: '6px' }}>
                    <span className="pill-tag pill-subtle">포인트: {ex.highlight}</span>
                    <button
                      type="button"
                      className="inline-audio-btn"
                      onClick={() => speakEnglish(ex.en, 0.94)}
                    >
                      <Volume2 size={13} /> 듣기
                    </button>
                  </div>
                  <p style={{ fontFamily: 'var(--font-en)', fontWeight: 750, fontSize: '1rem' }}>
                    <InteractiveText text={ex.en} onLookupWord={onOpenDictionary} />
                  </p>
                  <p style={{ color: 'var(--text-sub)', fontSize: '0.88rem', marginTop: '4px' }}>
                    {ex.ko}
                  </p>
                </div>
              ))}
            </div>

            {/* 4-QUESTION MASTERY QUIZ */}
            <div className="grammar-quiz-panel" style={{ marginTop: '24px' }}>
              <div className="section-label-between" style={{ marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <span className="pill-tag pill-coral">단원 확인 실전 드릴</span>
                  <h3 style={{ fontSize: '1.18rem', marginTop: '6px' }}>
                    G{String(activeGrammar.unitNumber).padStart(2, '0')} 개념 체크 4문항 (3문항 이상 정답 시 마스터!)
                  </h3>
                </div>
                {isGrammarGraded && (
                  <span className="pill-tag pill-brand">
                    채점 결과: {activeGrammar.quiz.filter((q) => grammarAnswers[q.id] === q.answer).length} / {activeGrammar.quiz.length} 정답
                  </span>
                )}
              </div>

              <div className="stack-md">
                {activeGrammar.quiz.map((q, qIdx) => {
                  const picked = grammarAnswers[q.id];
                  const isCorrect = picked === q.answer;
                  return (
                    <div key={q.id} className="quiz-card-clean">
                      <div style={{ fontWeight: 750, marginBottom: '6px' }}>
                        Q{qIdx + 1}. {q.questionKo}
                      </div>
                      <p style={{ fontFamily: 'var(--font-en)', fontSize: '1.02rem', color: 'var(--brand)', fontWeight: 700, marginBottom: '10px' }}>
                        {q.stimulusEn}
                      </p>
                      <div className="quiz-options-grid">
                        {q.options.map((opt) => {
                          const selected = picked === opt;
                          let cls = 'option-choice-btn';
                          if (isGrammarGraded) {
                            if (opt === q.answer) cls += ' correct-ans';
                            else if (selected && opt !== q.answer) cls += ' wrong-ans';
                          } else if (selected) {
                            cls += ' selected';
                          }
                          return (
                            <button
                              key={opt}
                              id={`gquiz-${q.id}-${opt.slice(0, 8)}`}
                              type="button"
                              className={cls}
                              onClick={() => {
                                if (isGrammarGraded) return;
                                setGrammarAnswers((prev) => ({ ...prev, [q.id]: opt }));
                              }}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                      {isGrammarGraded && (
                        <div className={`feedback-banner ${isCorrect ? 'ok' : 'warn'}`} style={{ marginTop: '10px' }}>
                          <div>
                            <strong>{isCorrect ? '✓ 정답!' : `✗ 오답 (정답: ${q.answer})`}</strong>
                            <p style={{ fontSize: '0.88rem', marginTop: '3px' }}>{q.explanationKo}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  id="grade-grammar-quiz-btn"
                  type="button"
                  className="btn-solid-brand"
                  disabled={activeGrammar.quiz.some((q) => !grammarAnswers[q.id])}
                  onClick={handleGradeGrammarQuiz}
                >
                  4문항 즉시 채점 &amp; 취약점 자동 기록
                </button>
                {isGrammarGraded && (
                  <button
                    type="button"
                    className="btn-outline"
                    onClick={() => {
                      setGrammarGradedMap((prev) => ({ ...prev, [activeGrammar.id]: false }));
                      const cleared = { ...grammarAnswers };
                      for (const q of activeGrammar.quiz) delete cleared[q.id];
                      setGrammarAnswers(cleared);
                    }}
                  >
                    다시 풀기
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =======================================================
          TAB 2: LIVE SENTENCE TRANSFORMER + 12-TENSE MATRIX
         ======================================================= */}
      {subTab === 'transformer-tense' && activeTransformer && activeTransformView && activeTense && (
        <section className="stack-lg">
          {/* LIVE SENTENCE TRANSFORMER */}
          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
              <div>
                <span className="pill-tag pill-coral">영어 문장 구조가 한눈에 뚫리는 실험실</span>
                <h2 style={{ fontSize: '1.35rem', marginTop: '6px' }}>
                  실시간 7단 문장 변환기 (평서 · 부정 · 의문 · 과거 · 미래 · 완료 · 수동태)
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {TRANSFORMER_SENTENCES.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`day-switch-chip ${idx === tfIdx ? 'active' : ''}`}
                    onClick={() => setTfIdx(idx)}
                  >
                    #{idx + 1} {item.titleKo}
                  </button>
                ))}
              </div>
            </div>

            <div className="transform-mode-bar">
              {TRANSFORM_BUTTONS.map((btn) => (
                <button
                  key={btn.key}
                  id={`transform-form-${btn.key}`}
                  type="button"
                  className={`transform-pill-btn ${tfForm === btn.key ? 'active' : ''}`}
                  onClick={() => {
                    setTfForm(btn.key);
                    speakEnglish(activeTransformer.forms[btn.key].fullEn, 0.94);
                  }}
                >
                  {btn.labelKo}
                </button>
              ))}
            </div>

            <div className="transformer-stage">
              <div className="order-chip-row" style={{ justifyContent: 'center' }}>
                {activeTransformView.blocks.map((blk, i) => (
                  <span key={`${tfIdx}-${tfForm}-${i}`} className={`syntax-chip syntax-chip-lg ${SYNTAX_ROLE_CLASS[blk.role]}`}>
                    <strong>{blk.text}</strong>
                    <small>{blk.labelKo}</small>
                  </span>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '18px' }}>
                <p style={{ fontFamily: 'var(--font-en)', fontSize: '1.32rem', fontWeight: 800 }}>
                  “<InteractiveText text={activeTransformView.fullEn} onLookupWord={onOpenDictionary} />”
                </p>
                <p style={{ color: 'var(--text-sub)', marginTop: '4px', fontSize: '1rem' }}>
                  {activeTransformView.korean}
                </p>
                <button
                  type="button"
                  className="btn-solid-brand"
                  style={{ marginTop: '12px', padding: '8px 16px', fontSize: '0.88rem' }}
                  onClick={() => speakEnglish(activeTransformView.fullEn, 0.92)}
                >
                  <Volume2 size={15} /> 변환된 문장 원어민 발음 듣기
                </button>
              </div>

              <div className="coach-callout-box" style={{ marginTop: '16px' }}>
                <strong>🔍 변화 원리 포인트</strong>
                <p style={{ marginTop: '4px' }}>{activeTransformView.ruleNoteKo}</p>
              </div>
            </div>
          </div>

          {/* 12-TENSE INTERACTIVE VISUAL TIMELINE MATRIX */}
          <div className="surface-card">
            <span className="pill-tag pill-brand">영어 시제 12종 완벽 정복</span>
            <h2 style={{ fontSize: '1.35rem', marginTop: '6px' }}>
              12시제 직관 매트릭스 &amp; 타임라인 시뮬레이터
            </h2>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginTop: '4px', marginBottom: '16px' }}>
              표의 시제 칸을 클릭하면 타임라인 상의 시간 범위, 공식, 한국인 실수 함정, 원어민 예문을 즉시 비교할 수 있습니다.
            </p>

            <div className="tense-matrix-table-wrap">
              <table className="tense-matrix-table">
                <thead>
                  <tr>
                    <th>시간 \ 양상</th>
                    <th>단순 (Simple)</th>
                    <th>진행 (be + -ing)</th>
                    <th>완료 (have + p.p.)</th>
                    <th>완료진행 (have been -ing)</th>
                  </tr>
                </thead>
                <tbody>
                  {(
                    [
                      ['past', '과거 (Past)'],
                      ['present', '현재 (Present)'],
                      ['future', '미래 (Future)']
                    ] as const
                  ).map(([timeKey, timeLabel]) => (
                    <tr key={timeKey}>
                      <th scope="row">{timeLabel}</th>
                      {(['simple', 'progressive', 'perfect', 'perfect-progressive'] as const).map(
                        (aspectKey) => {
                          const cell = TENSE_MATRIX_12.find(
                            (t) => t.timeAxis === timeKey && t.aspectAxis === aspectKey
                          );
                          if (!cell) return <td key={aspectKey}>-</td>;
                          const isSelected = cell.id === activeTense.id;
                          return (
                            <td key={cell.id}>
                              <button
                                id={`tense-cell-${cell.id}`}
                                type="button"
                                className={`tense-cell-btn ${isSelected ? 'active' : ''}`}
                                onClick={() => {
                                  setSelectedTenseId(cell.id);
                                  speakEnglish(cell.exampleEn, 0.94);
                                }}
                              >
                                <strong>{cell.nameKo}</strong>
                                <span>{cell.formula}</span>
                              </button>
                            </td>
                          );
                        }
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SVG VISUAL TIMELINE FOR SELECTED TENSE */}
            <div className="tense-detail-card" style={{ marginTop: '18px' }}>
              <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <span className="pill-tag pill-coral">{activeTense.nameEn}</span>
                  <h3 style={{ fontSize: '1.25rem', marginTop: '6px' }}>
                    {activeTense.nameKo} · <code>{activeTense.formula}</code>
                  </h3>
                </div>
                <button
                  type="button"
                  className="btn-solid-brand"
                  style={{ padding: '8px 14px', fontSize: '0.86rem' }}
                  onClick={() => speakEnglish(activeTense.exampleEn, 0.92)}
                >
                  <Volume2 size={15} /> 예문 듣기
                </button>
              </div>

              {/* Clean SVG Timeline */}
              <div className="tense-timeline-visual">
                <div className="timeline-axis-line" />
                <div className="timeline-now-marker">
                  <span>NOW (현재)</span>
                </div>
                <div
                  className={`timeline-span-bar ${activeTense.timelineMarker.isOngoing ? 'ongoing' : ''}`}
                  style={{
                    left: `${activeTense.timelineMarker.startPct}%`,
                    width: `${Math.max(4, activeTense.timelineMarker.endPct - activeTense.timelineMarker.startPct)}%`
                  }}
                />
                <div className="timeline-axis-labels">
                  <span>PAST (과거)</span>
                  <span>PRESENT (현재)</span>
                  <span>FUTURE (미래)</span>
                </div>
              </div>

              <p style={{ fontFamily: 'var(--font-en)', fontSize: '1.16rem', fontWeight: 750, marginTop: '14px' }}>
                “<InteractiveText text={activeTense.exampleEn} onLookupWord={onOpenDictionary} />”
              </p>
              <p style={{ color: 'var(--text-sub)', marginTop: '4px' }}>{activeTense.exampleKo}</p>

              <div className="trap-vs-insight-grid" style={{ marginTop: '14px' }}>
                <div className="insight-card-box">
                  <strong>🎯 원어민 시제 뉘앙스</strong>
                  <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>{activeTense.nuanceKo}</p>
                </div>
                <div className="trap-card-box">
                  <strong>⚠️ 한국인 주의 포인트</strong>
                  <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>{activeTense.koreanTrapKo}</p>
                </div>
              </div>
            </div>
          </div>

          {/* VERIFIED 12-TENSE YOUTUBE LESSONS */}
          <div className="surface-card">
            <span className="pill-tag pill-amber">검증된 12시제 집중 유튜브 명강의</span>
            <h3 style={{ fontSize: '1.2rem', marginTop: '6px', marginBottom: '12px' }}>
              원어민 강사의 12시제 핵심 총정리 ({GRAMMAR_YOUTUBE_VIDEOS.length}편)
            </h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
              {GRAMMAR_YOUTUBE_VIDEOS.map((vid) => (
                <button
                  key={vid.videoId}
                  type="button"
                  className={`day-switch-chip ${vid.videoId === activeGrammarVid ? 'active' : ''}`}
                  onClick={() => setActiveGrammarVid(vid.videoId)}
                >
                  {vid.badgeKo} · {vid.channel}
                </button>
              ))}
            </div>
            <div className="yt-iframe-shell" style={{ maxWidth: '720px' }}>
              <iframe
                key={activeGrammarVid}
                src={`https://www.youtube-nocookie.com/embed/${activeGrammarVid}?rel=0&modestbranding=1`}
                title="12시제 영문법 강의"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* =======================================================
          TAB 3: HIGH-SCHOOL / CSAT SYNTAX X-RAY READING LAB
         ======================================================= */}
      {subTab === 'csat-reading' && activePassage && (
        <section className="stack-lg">
          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
              <div>
                <span className="pill-tag pill-coral">Stage 3 · 고등학교 내신 · 수능 1등급 정통 구문독해</span>
                <h2 style={{ fontSize: '1.3rem', marginTop: '6px' }}>
                  15대 학문 분야 아카데믹 지문 &amp; 수능 5대 킬러 유형 (45문항)
                </h2>
              </div>
              <span className="pill-tag pill-brand">
                응시 완료: {completedPassagesCount} / {HIGH_SCHOOL_PASSAGES.length}지문
              </span>
            </div>

            <div className="csat-passage-strip">
              {HIGH_SCHOOL_PASSAGES.map((p) => {
                const best = highSchoolPassageScores[p.id];
                const isSelected = p.id === activePassage.id;
                return (
                  <button
                    key={p.id}
                    id={`csat-select-${p.id}`}
                    type="button"
                    className={`foundation-unit-pill ${isSelected ? 'active' : ''} ${best !== undefined ? 'done' : ''}`}
                    onClick={() => setSelectedPassageId(p.id)}
                  >
                    <span>
                      #{String(p.number).padStart(2, '0')} · {p.topicBadge}
                    </span>
                    <small>{best !== undefined ? `${best}점 ✓` : p.cefrLevel.toUpperCase()}</small>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE PASSAGE X-RAY READER */}
          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="pill-tag pill-coral">{activePassage.csatGradeTag}</span>
                  <span className="pill-tag pill-brand">{activePassage.topicBadge}</span>
                  <span className="pill-tag pill-subtle">CEFR {activePassage.cefrLevel.toUpperCase()}</span>
                </div>
                <h2 style={{ fontSize: '1.42rem', marginTop: '8px', fontFamily: 'var(--font-en)' }}>
                  {activePassage.titleEn}
                </h2>
                <p style={{ color: 'var(--text-sub)', marginTop: '3px' }}>{activePassage.titleKo}</p>
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  id="toggle-syntax-xray-btn"
                  type="button"
                  className={showSyntaxXray ? 'btn-solid-brand' : 'btn-outline'}
                  style={{ padding: '8px 13px', fontSize: '0.84rem' }}
                  onClick={() => setShowSyntaxXray((v) => !v)}
                >
                  <Eye size={15} /> 구문 X-Ray {showSyntaxXray ? 'ON' : 'OFF'}
                </button>
                <button
                  type="button"
                  className={showSlashes ? 'btn-solid-coral' : 'btn-outline'}
                  style={{ padding: '8px 13px', fontSize: '0.84rem' }}
                  onClick={() => setShowSlashes((v) => !v)}
                >
                  직독직해 (/)
                </button>
                <button
                  type="button"
                  className={showSentenceKo ? 'btn-solid-brand' : 'btn-outline'}
                  style={{ padding: '8px 13px', fontSize: '0.84rem' }}
                  onClick={() => setShowSentenceKo((v) => !v)}
                >
                  문장별 해석 {showSentenceKo ? '숨기기' : '보기'}
                </button>
                <button
                  type="button"
                  className="btn-outline"
                  style={{ padding: '8px 13px', fontSize: '0.84rem' }}
                  onClick={() =>
                    speakEnglish(activePassage.sentences.map((s) => s.english).join(' '), 0.96)
                  }
                >
                  <Volume2 size={15} /> 전체 듣기
                </button>
              </div>
            </div>

            {showSyntaxXray && (
              <div className="xray-legend-bar" style={{ marginTop: '14px' }}>
                <span className="xray-legend-pill xray-s">S 주어</span>
                <span className="xray-legend-pill xray-v">V 본동사</span>
                <span className="xray-legend-pill xray-o">O/C 목적어·보어</span>
                <span className="xray-legend-pill xray-m">M 수식어·관계사·분사</span>
                <span className="xray-legend-pill xray-conn">CONN 논리연결어</span>
              </div>
            )}

            <div className="csat-passage-body" style={{ marginTop: '16px' }}>
              {activePassage.sentences.map((sent, idx) => (
                <div key={sent.id} className="csat-sentence-card">
                  <div className="section-label-between" style={{ marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 750, color: 'var(--text-muted)' }}>
                      Sentence {idx + 1}
                    </span>
                    <button
                      type="button"
                      className="inline-audio-btn"
                      onClick={() => speakEnglish(sent.english, 0.95)}
                    >
                      <Volume2 size={13} /> 문장 듣기
                    </button>
                  </div>

                  {showSyntaxXray ? (
                    <p className="csat-xray-line">
                      {sent.segments.map((seg, sIdx) => (
                        <span
                          key={sIdx}
                          className={`xray-seg ${SYNTAX_INLINE_CLASS[seg.role]}`}
                          title={seg.labelKo ?? seg.role}
                        >
                          <InteractiveText text={seg.text} onLookupWord={onOpenDictionary} />
                          {seg.role !== 'PLAIN' && (
                            <sup className="xray-tag-sup">{seg.role}</sup>
                          )}
                        </span>
                      ))}
                    </p>
                  ) : (
                    <p style={{ fontFamily: 'var(--font-book)', fontSize: '1.08rem', lineHeight: 1.8 }}>
                      <InteractiveText
                        text={showSlashes ? sent.slashBroken : sent.english}
                        onLookupWord={onOpenDictionary}
                      />
                    </p>
                  )}

                  {showSlashes && showSyntaxXray && (
                    <p style={{ fontSize: '0.88rem', color: 'var(--brand)', marginTop: '6px', fontFamily: 'var(--font-en)' }}>
                      끊어읽기: {sent.slashBroken}
                    </p>
                  )}

                  {showSentenceKo && (
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-sub)', marginTop: '6px' }}>
                      🇰🇷 {sent.korean}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* SYNTAX NOTES + KEY ACADEMIC VOCAB */}
            <div className="trap-vs-insight-grid" style={{ marginTop: '20px' }}>
              <div className="insight-card-box">
                <strong style={{ color: 'var(--brand)' }}>📐 고등·수능 핵심 구문 해부 노트</strong>
                <div className="stack-sm" style={{ marginTop: '10px' }}>
                  {activePassage.syntaxNotes.map((sn, i) => (
                    <div key={i} className="syntax-note-item">
                      <span className="pill-tag pill-brand" style={{ fontSize: '0.74rem' }}>
                        {sn.grammarPointKo}
                      </span>
                      <div style={{ fontFamily: 'var(--font-en)', fontWeight: 750, marginTop: '4px' }}>
                        {sn.expression}
                      </div>
                      <p style={{ fontSize: '0.86rem', color: 'var(--text-body)', marginTop: '2px' }}>
                        {sn.explanationKo}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="insight-card-box">
                <strong style={{ color: 'var(--coral)' }}>📚 지문 핵심 학술 어휘 (클릭 시 사전)</strong>
                <div className="csat-vocab-grid" style={{ marginTop: '10px' }}>
                  {activePassage.keyVocab.map((kv) => (
                    <button
                      key={kv.word}
                      type="button"
                      className="csat-vocab-pill"
                      onClick={() => {
                        speakEnglish(kv.word, 0.9);
                        onOpenDictionary(kv.word);
                      }}
                    >
                      <strong style={{ fontFamily: 'var(--font-en)' }}>{kv.word}</strong>
                      <small style={{ color: 'var(--text-muted)' }}>{kv.phonetic}</small>
                      <span>{kv.meaningKo}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3 CSAT EXAM QUESTIONS */}
            <div className="grammar-quiz-panel" style={{ marginTop: '24px' }}>
              <div className="section-label-between" style={{ marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <span className="pill-tag pill-coral">수능·모의고사 실전 문제</span>
                  <h3 style={{ fontSize: '1.2rem', marginTop: '6px' }}>
                    지문 #{activePassage.number} 수능 핵심 유형 3문항 테스트
                  </h3>
                </div>
                {isPassageGraded && (
                  <span className="pill-tag pill-brand">
                    점수: {highSchoolPassageScores[activePassage.id] ?? 0}점
                  </span>
                )}
              </div>

              <div className="stack-md">
                {activePassage.questions.map((q, idx) => {
                  const picked = csatAnswers[q.id];
                  const isCorrect = picked === q.answer;
                  return (
                    <div key={q.id} className="quiz-card-clean">
                      <span className="pill-tag pill-amber" style={{ marginBottom: '8px' }}>
                        문항 {idx + 1} · {q.questionType}
                      </span>
                      <p style={{ fontWeight: 750, marginBottom: '8px' }}>{q.questionKo}</p>
                      {q.stimulusBox && (
                        <div className="csat-stimulus-box">{q.stimulusBox}</div>
                      )}
                      <div className="choice-stack" style={{ marginTop: '10px' }}>
                        {q.options.map((opt, oIdx) => {
                          const selected = picked === opt;
                          let cls = 'option-choice-btn';
                          if (isPassageGraded) {
                            if (opt === q.answer) cls += ' correct-ans';
                            else if (selected && opt !== q.answer) cls += ' wrong-ans';
                          } else if (selected) {
                            cls += ' selected';
                          }
                          return (
                            <button
                              key={opt}
                              id={`csat-opt-${q.id}-${oIdx}`}
                              type="button"
                              className={cls}
                              onClick={() => {
                                if (isPassageGraded) return;
                                setCsatAnswers((prev) => ({ ...prev, [q.id]: opt }));
                              }}
                            >
                              {oIdx + 1}. {opt}
                            </button>
                          );
                        })}
                      </div>
                      {isPassageGraded && (
                        <div className={`feedback-banner ${isCorrect ? 'ok' : 'warn'}`} style={{ marginTop: '10px' }}>
                          <div>
                            <strong>{isCorrect ? '✓ 정답입니다!' : `✗ 오답 · 정답: ${q.answer}`}</strong>
                            <p style={{ fontSize: '0.88rem', marginTop: '4px' }}>{q.explanationKo}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  id="grade-csat-passage-btn"
                  type="button"
                  className="btn-solid-brand"
                  disabled={activePassage.questions.some((q) => !csatAnswers[q.id])}
                  onClick={handleGradeCsatPassage}
                >
                  <GraduationCap size={16} /> 수능 3문항 채점 &amp; 오답 복습함 저장
                </button>
                {isPassageGraded && (
                  <button
                    type="button"
                    className="btn-outline"
                    onClick={() => {
                      setCsatGradedMap((prev) => ({ ...prev, [activePassage.id]: false }));
                      const next = { ...csatAnswers };
                      for (const q of activePassage.questions) delete next[q.id];
                      setCsatAnswers(next);
                    }}
                  >
                    다시 풀기
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =======================================================
          TAB 4: GUIDED ACADEMIC ESSAY LAB + 4-AXIS RUBRIC GRADER
         ======================================================= */}
      {subTab === 'essay-lab' && activePrompt && (
        <section className="stack-lg">
          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
              <div>
                <span className="pill-tag pill-brand">고등 논술 · 수행평가 · TOEFL 라이팅 완벽 대비</span>
                <h2 style={{ fontSize: '1.32rem', marginTop: '6px' }}>
                  가이드 영작 에세이 빌더 &amp; 4축 자동 루브릭 첨삭실
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {ACADEMIC_ESSAY_PROMPTS.map((pr, idx) => (
                  <button
                    key={pr.id}
                    id={`essay-prompt-${pr.id}`}
                    type="button"
                    className={`day-switch-chip ${pr.id === activePrompt.id ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedPromptId(pr.id);
                      setEssayEval(null);
                      setShowModelEssay(false);
                    }}
                  >
                    주제 {idx + 1}. {pr.topicKo}
                  </button>
                ))}
              </div>
            </div>

            <div className="builder-prompt-box" style={{ textAlign: 'left' }}>
              <span className="pill-tag pill-coral">{activePrompt.levelBadge}</span>
              <h3 style={{ fontFamily: 'var(--font-en)', fontSize: '1.16rem', marginTop: '8px' }}>
                {activePrompt.promptEn}
              </h3>
              <p style={{ color: 'var(--text-sub)', marginTop: '4px' }}>{activePrompt.promptKo}</p>
            </div>

            {/* TARGET VOCAB LIVE CHECKER */}
            <div style={{ marginTop: '14px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 750, color: 'var(--text-sub)' }}>
                추천 핵심 학술 어휘 (본문에 쓰면 초록색으로 자동 체크됩니다 · 클릭 시 삽입):
              </span>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px' }}>
                {activePrompt.targetVocab.map((w) => {
                  const used = essayDraft.toLowerCase().includes(w.toLowerCase().split(' ')[0]);
                  return (
                    <button
                      key={w}
                      type="button"
                      className={`essay-vocab-chip ${used ? 'used' : ''}`}
                      onClick={() => setEssayDraft((prev) => `${prev}${prev.endsWith(' ') || !prev ? '' : ' '}${w} `)}
                    >
                      {used ? '✓ ' : '+ '}
                      {w}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ACADEMIC CONNECTOR CHIPS */}
            <div style={{ marginTop: '14px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 750, color: 'var(--text-sub)' }}>
                논리 연결어 칩 (클릭하면 에세이 커서에 바로 추가):
              </span>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px' }}>
                {ACADEMIC_CONNECTOR_CHIPS.map((c) => (
                  <button
                    key={c.labelEn}
                    type="button"
                    className="day-switch-chip"
                    onClick={() =>
                      setEssayDraft((prev) => `${prev}${prev.endsWith(' ') || !prev ? '' : ' '}${c.labelEn}, `)
                    }
                  >
                    <strong>{c.labelEn}</strong> <small>({c.meaningKo})</small>
                  </button>
                ))}
              </div>
            </div>

            {/* GUIDED 3-PARAGRAPH TEMPLATE FILLER */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
              <button
                id="insert-essay-scaffold-btn"
                type="button"
                className="btn-outline"
                style={{ padding: '7px 13px', fontSize: '0.84rem' }}
                onClick={() =>
                  setEssayDraft(
                    `${activePrompt.thesisStarter} \n\n${activePrompt.bodyStarter} \n\n${activePrompt.conclusionStarter} `
                  )
                }
              >
                <Sparkles size={14} /> 서론·본론·결론 3문단 뼈대 자동 채우기
              </button>
              <button
                id="toggle-model-essay-btn"
                type="button"
                className="btn-outline"
                style={{ padding: '7px 13px', fontSize: '0.84rem' }}
                onClick={() => setShowModelEssay((v) => !v)}
              >
                <Award size={14} /> {showModelEssay ? '모범 Band-S 에세이 접기' : '모범 Band-S 에세이 보기'}
              </button>
            </div>

            <textarea
              id="academic-essay-textarea"
              className="essay-editor-textarea"
              rows={9}
              value={essayDraft}
              onChange={(e) => setEssayDraft(e.target.value)}
              placeholder="서론(Thesis) → 본론(근거·예시) → 결론(요약) 순으로 80~160단어 영어 에세이를 작성해 보세요. 위의 [3문단 뼈대 자동 채우기] 버튼을 누르면 바로 시작할 수 있습니다!"
            />

            <div className="section-label-between" style={{ marginTop: '12px', flexWrap: 'wrap', gap: '10px' }}>
              <span style={{ fontSize: '0.86rem', color: 'var(--text-sub)' }}>
                현재 분량: <strong>{essayDraft.trim() ? essayDraft.trim().split(/\s+/).length : 0}단어</strong> (권장 90~160단어)
              </span>
              <button
                id="evaluate-essay-btn"
                type="button"
                className="btn-solid-brand"
                disabled={essayDraft.trim().length < 15 || aiCritiqueLoading}
                onClick={() => void handleEvaluateEssay()}
              >
                <FileEdit size={16} />
                {aiCritiqueLoading ? 'AI 심화 첨삭 분석 중...' : '4축 루브릭 즉시 채점 & 포트폴리오 저장'}
              </button>
            </div>

            {showModelEssay && (
              <div className="insight-card-box" style={{ marginTop: '18px' }}>
                <div className="section-label-between" style={{ marginBottom: '8px' }}>
                  <strong style={{ color: 'var(--brand)' }}>🏆 Band-S 모범 에세이 (수능 1등급 / TOEFL High 수준)</strong>
                  <button
                    type="button"
                    className="inline-audio-btn"
                    onClick={() => speakEnglish(activePrompt.modelEssayEn, 0.96)}
                  >
                    <Volume2 size={14} /> 원어민 낭독 듣기
                  </button>
                </div>
                <p style={{ fontFamily: 'var(--font-book)', fontSize: '1.02rem', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                  <InteractiveText text={activePrompt.modelEssayEn} onLookupWord={onOpenDictionary} />
                </p>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginTop: '10px', lineHeight: 1.65 }}>
                  🇰🇷 {activePrompt.modelEssayKo}
                </p>
              </div>
            )}

            {/* 4-AXIS RUBRIC SCORECARD */}
            {essayEval && (
              <div className="essay-rubric-card" style={{ marginTop: '20px' }}>
                <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <span className="pill-tag pill-coral">{essayEval.bandLabel}</span>
                    <h3 style={{ fontSize: '1.35rem', marginTop: '6px' }}>
                      종합 에세이 점수: {essayEval.totalScore} / 100점
                    </h3>
                  </div>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-sub)' }}>
                    {essayEval.paragraphCount}문단 · {essayEval.sentenceCount}문장 · {essayEval.wordCount}단어
                  </span>
                </div>

                <div className="rubric-axes-grid" style={{ marginTop: '14px' }}>
                  {essayEval.axes.map((ax) => (
                    <div key={ax.key} className="rubric-axis-box">
                      <div className="section-label-between">
                        <strong style={{ fontSize: '0.88rem' }}>{ax.labelKo}</strong>
                        <span style={{ color: 'var(--brand)', fontWeight: 800 }}>
                          {ax.score}/{ax.maxScore}
                        </span>
                      </div>
                      <div className="skill-bar-track" style={{ marginTop: '8px' }}>
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${Math.round((ax.score / ax.maxScore) * 100)}%` }}
                        />
                      </div>
                      <small style={{ color: 'var(--text-sub)', display: 'block', marginTop: '6px' }}>
                        {ax.commentKo}
                      </small>
                    </div>
                  ))}
                </div>

                <div className="trap-vs-insight-grid" style={{ marginTop: '16px' }}>
                  <div className="insight-card-box">
                    <strong style={{ color: 'var(--ok)' }}>✓ 잘한 점 (Strengths)</strong>
                    <ul className="clean-bullet-list">
                      {essayEval.strengthsKo.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="trap-card-box">
                    <strong style={{ color: 'var(--coral)' }}>🛠 1등급 업그레이드 제안</strong>
                    <ul className="clean-bullet-list">
                      {essayEval.improvementsKo.length > 0 ? (
                        essayEval.improvementsKo.map((imp, i) => <li key={i}>{imp}</li>)
                      ) : (
                        <li>문법·콩글리시 오류 없이 완벽한 아카데믹 구조로 작성되었습니다!</li>
                      )}
                    </ul>
                  </div>
                </div>

                {essayEval.aiDeepFeedbackKo && (
                  <div className="coach-callout-box" style={{ marginTop: '14px' }}>
                    <strong>🤖 Gemini AI 1:1 심화 에세이 첨삭</strong>
                    <p style={{ marginTop: '6px', whiteSpace: 'pre-line' }}>{essayEval.aiDeepFeedbackKo}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* SAVED ESSAY PORTFOLIO */}
          {savedEssays.length > 0 && (
            <div className="surface-card">
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>
                <CheckCircle2 size={17} style={{ verticalAlign: 'middle', marginRight: '6px', color: 'var(--ok)' }} />
                내 아카데믹 에세이 포트폴리오 ({savedEssays.length}편)
              </h3>
              <div className="stack-sm">
                {savedEssays.slice(0, 5).map((rec) => (
                  <div key={rec.id} className="saved-essay-row">
                    <div>
                      <strong>{rec.topicKo}</strong>{' '}
                      <span className="pill-tag pill-brand" style={{ fontSize: '0.74rem' }}>
                        {rec.totalScore}점 · {rec.bandLabel.split('·')[0].trim()}
                      </span>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-sub)', marginTop: '4px' }}>
                        {rec.createdAt} · {rec.wordCount}단어 · {rec.feedbackSummaryKo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VERIFIED ACADEMIC ESSAY YOUTUBE VIDEOS */}
          <div className="surface-card">
            <span className="pill-tag pill-amber">검증된 옥스퍼드·Scribbr 영어 에세이 작성법 강의</span>
            <h3 style={{ fontSize: '1.18rem', marginTop: '6px', marginBottom: '12px' }}>
              학술 에세이 구조 핵심 특강 ({ACADEMIC_YOUTUBE_VIDEOS.length}편)
            </h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
              {ACADEMIC_YOUTUBE_VIDEOS.map((vid) => (
                <button
                  key={vid.videoId}
                  type="button"
                  className={`day-switch-chip ${vid.videoId === activeEssayVid ? 'active' : ''}`}
                  onClick={() => setActiveEssayVid(vid.videoId)}
                >
                  {vid.badgeKo} · {vid.channel}
                </button>
              ))}
            </div>
            <div className="yt-iframe-shell" style={{ maxWidth: '720px' }}>
              <iframe
                key={activeEssayVid}
                src={`https://www.youtube-nocookie.com/embed/${activeEssayVid}?rel=0&modestbranding=1`}
                title="아카데믹 에세이 작성법 특강"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
