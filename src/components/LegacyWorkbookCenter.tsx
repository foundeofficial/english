import React, { useState } from 'react';
import {
  BookOpenCheck,
  Camera,
  CheckCircle2,
  CopyPlus,
  FileSpreadsheet,
  Printer,
  RotateCcw,
  Sparkles,
  Upload
} from 'lucide-react';
import type {
  CurriculumUnit,
  ExamAttemptRecord,
  LearnerCalibration,
  ReviewItem
} from '../types/learning';
import { analyzeAndParaphrase } from '../utils/paraphraseEngine';

interface LegacyWorkbookCenterProps {
  units: CurriculumUnit[];
  unit: CurriculumUnit;
  calibration: LearnerCalibration;
  examHistory: ExamAttemptRecord[];
  onSelectUnit: (unit: CurriculumUnit) => void;
  onRecordExamResult: (
    record: ExamAttemptRecord,
    wrongReviewItems: Omit<ReviewItem, 'id' | 'stage' | 'dueToday'>[]
  ) => void;
  onAddHandwritingReview: (item: Omit<ReviewItem, 'id' | 'stage' | 'dueToday'>) => void;
}

type SubView = 'worksheet' | 'exam' | 'twin-clinic' | 'ocr-bridge';

const normalize = (s: string) =>
  s
    .toLowerCase()
    .replace(/[.,!?'"’]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

export const LegacyWorkbookCenter: React.FC<LegacyWorkbookCenterProps> = ({
  units,
  unit,
  calibration,
  examHistory,
  onSelectUnit,
  onRecordExamResult,
  onAddHandwritingReview
}) => {
  const [subView, setSubView] = useState<SubView>('worksheet');

  // Kumon-style Daily Worksheet State
  const [wsInputs, setWsInputs] = useState<Record<string, string>>({});
  const [wsShowAnswers, setWsShowAnswers] = useState(false);

  // Unit Exam State
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>({});
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [lastScore, setLastScore] = useState<number | null>(null);
  const [wrongExamIds, setWrongExamIds] = useState<string[]>([]);

  // Twin Questions Clinic State
  const [twinAnswers, setTwinAnswers] = useState<Record<string, string>>({});
  const [twinChecked, setTwinChecked] = useState<Record<string, boolean>>({});

  // Paper-to-App Handwriting Vision Grading State
  const [uploadedPreviewUrl, setUploadedPreviewUrl] = useState<string | null>(null);
  const [handwrittenSampleText, setHandwrittenSampleText] = useState(
    '1) Yesterday I had many works so I ended up stay late.\n2) Please send the report until Friday.'
  );
  const [ocrGradingResults, setOcrGradingResults] = useState<
    Array<{ line: string; fix: string; note: string; native: string }>
  >([]);
  const [ocrSavedBanner, setOcrSavedBanner] = useState(false);

  const variantKey =
    calibration.difficultyOffset === -1
      ? 'easy'
      : calibration.difficultyOffset === 1
      ? 'challenge'
      : 'standard';

  const handleSubmitExam = (e: React.FormEvent) => {
    e.preventDefault();
    let correctCount = 0;
    const wrongIds: string[] = [];
    const reviewQueue: Omit<ReviewItem, 'id' | 'stage' | 'dueToday'>[] = [];

    for (const q of unit.examQuestions) {
      const userAns = examAnswers[q.id] ?? '';
      const isOk = normalize(userAns) === normalize(q.correctAnswer);
      if (isOk) {
        correctCount += 1;
      } else {
        wrongIds.push(q.id);
        reviewQueue.push({
          koreanPrompt: `[단원평가 오답] ${q.promptKo}`,
          targetEnglish: q.correctAnswer,
          explanationKo: q.explanationKo,
          sourceMode: 'exam-clinic'
        });
      }
    }

    const scorePercent = Math.round(
      (correctCount / Math.max(1, unit.examQuestions.length)) * 100
    );
    const passed = scorePercent >= 80;

    setExamSubmitted(true);
    setLastScore(scorePercent);
    setWrongExamIds(wrongIds);

    onRecordExamResult(
      {
        id: `exam-${Date.now()}`,
        unitId: unit.id,
        unitTitle: unit.title,
        takenAt: new Date().toLocaleDateString('ko-KR'),
        scorePercent,
        passed,
        wrongQuestionIds: wrongIds
      },
      reviewQueue
    );
  };

  const handleResetExam = () => {
    setExamAnswers({});
    setExamSubmitted(false);
    setLastScore(null);
    setWrongExamIds([]);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUploadedPreviewUrl(url);
    setOcrSavedBanner(false);
  };

  const handleRunVisionGrading = () => {
    const lines = handwrittenSampleText
      .split('\n')
      .map((l) => l.replace(/^\d+[.)]\s*/, '').trim())
      .filter(Boolean);

    const graded = lines.map((line) => {
      let modifiedLine = line;
      let extraNote = '';
      if (/ended up stay\b/i.test(modifiedLine)) {
        modifiedLine = modifiedLine.replace(/ended up stay\b/gi, 'ended up staying');
        extraNote = "'end up' 뒤에는 반드시 동명사(-ing) 형태인 'staying'을 써야 합니다. ";
      }
      const p = analyzeAndParaphrase(modifiedLine, '종이 학습지 손글씨 Vision 채점');
      return {
        line,
        fix: p.grammarFix,
        note: extraNote + p.tutorExplanationKo,
        native: p.businessNative
      };
    });

    setOcrGradingResults(graded);
    setOcrSavedBanner(false);
  };

  const handleSyncOcrToVault = () => {
    ocrGradingResults.forEach((item) => {
      onAddHandwritingReview({
        koreanPrompt: `[손글씨 학습지 교정] "${item.line}"`,
        targetEnglish: item.fix,
        explanationKo: item.note,
        sourceMode: 'handwriting-ocr'
      });
    });
    setOcrSavedBanner(true);
  };

  const twinTargetQuestions =
    wrongExamIds.length > 0
      ? unit.examQuestions.filter((q) => wrongExamIds.includes(q.id))
      : unit.examQuestions;

  return (
    <div>
      {/* Header & Unit Selector (Hidden in Print Mode) */}
      <section className="hero-intro no-print">
        <div>
          <h1>레거시 교재 · 구몬식 학습지 · 단원평가 문제지 센터</h1>
          <p className="hero-desc">
            눈으로만 터치하는 앱의 한계를 넘어 <strong>개념 원리서, 단계별 서술형 학습지(A4 인쇄/PDF 지원), 단원평가 시험지, 쌍둥이 변형 오답 프린트, 손글씨 AI 채점</strong>으로 완전학습을 구현합니다.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <select
            id="workbook-unit-selector"
            aria-label="학습지 단원 선택"
            value={unit.id}
            onChange={(e) => {
              const found = units.find((u) => u.id === e.target.value);
              if (found) {
                onSelectUnit(found);
                handleResetExam();
              }
            }}
            style={{
              padding: '9px 12px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-default)',
              background: 'var(--bg-surface)',
              fontSize: '0.85rem',
              fontWeight: 650
            }}
          >
            {units.map((u) => (
              <option key={u.id} value={u.id}>
                [{u.level}] {u.title.slice(0, 30)}...
              </option>
            ))}
          </select>

          <button
            id="print-worksheet-pdf-btn"
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => window.print()}
          >
            <Printer size={15} /> A4 학습지·시험지 인쇄 / PDF 저장
          </button>
        </div>
      </section>

      {/* Sub Navigation Tabs */}
      <div className="period-stepper no-print" role="tablist">
        <button
          id="wb-tab-worksheet"
          type="button"
          className={`period-step-btn ${subView === 'worksheet' ? 'active' : ''}`}
          onClick={() => setSubView('worksheet')}
        >
          <span className="period-step-label">BOOK 1 · TEXTBOOK &amp; DRILL</span>
          <span className="period-step-name">개념 원리서 &amp; 구몬식 일일 학습지</span>
        </button>

        <button
          id="wb-tab-exam"
          type="button"
          className={`period-step-btn ${subView === 'exam' ? 'active' : ''}`}
          onClick={() => setSubView('exam')}
        >
          <span className="period-step-label">BOOK 2 · UNIT EXAM (PASS 80점)</span>
          <span className="period-step-name">학원식 단원평가 시험지 &amp; 성적표</span>
        </button>

        <button
          id="wb-tab-twin"
          type="button"
          className={`period-step-btn ${subView === 'twin-clinic' ? 'active' : ''}`}
          onClick={() => setSubView('twin-clinic')}
        >
          <span className="period-step-label">BOOK 3 · TWIN CLINIC</span>
          <span className="period-step-name">나만의 쌍둥이 변형 오답 프린트</span>
        </button>

        <button
          id="wb-tab-ocr"
          type="button"
          className={`period-step-btn ${subView === 'ocr-bridge' ? 'active' : ''}`}
          onClick={() => setSubView('ocr-bridge')}
        >
          <span className="period-step-label">PAPER ↔ APP · GEMINI VISION</span>
          <span className="period-step-name">종이 학습지 손글씨 촬영 AI 채점</span>
        </button>
      </div>

      {/* Print-Only Formal Academy Paper Header */}
      <div className="print-only-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #111', paddingBottom: '8px', marginBottom: '16px' }}>
          <div>
            <strong>코어브릿지(KoreBridge) 정규 영어 학습지 · 단원평가 시험지</strong>
            <div style={{ fontSize: '0.85rem' }}>단원명: {unit.title} ({unit.level})</div>
          </div>
          <div style={{ fontSize: '0.85rem', textAlign: 'right' }}>
            성명: ________________ &nbsp; 학습일: 2026. ____. ____ &nbsp; 점수: ______ / 100
          </div>
        </div>
      </div>

      {/* =========================================================
          SUBVIEW 1: Concept Textbook & Kumon-style Daily Worksheet
          ========================================================= */}
      {subView === 'worksheet' && (
        <div className="studio-split-layout">
          {/* Concept Reference Textbook */}
          <section className="side-panel-card">
            <span className="tag tag-forest">📘 단원 개념 원리서 (Textbook)</span>
            <h2 style={{ fontSize: '1.22rem', marginTop: '8px' }}>{unit.nuanceCard.expression}</h2>
            <p style={{ color: 'var(--accent-primary)', fontWeight: 700, marginTop: '4px' }}>
              핵심 뜻: {unit.nuanceCard.koreanMeaning}
            </p>

            {unit.visualAssetPath && (
              <figure style={{ margin: '14px 0', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
                <img
                  src={unit.visualAssetPath}
                  alt={`${unit.title} 시각 연상 학습 도해`}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <figcaption style={{ padding: '8px 12px', fontSize: '0.78rem', background: 'var(--bg-canvas)', color: 'var(--ink-muted)' }}>
                  Gemini / Imagen 생성 시각 맥락 일러스트 — 번역 없이 이미지로 동사·전치사 궤적을 체화하세요.
                </figcaption>
              </figure>
            )}

            <div className="paraphrase-doc-card" style={{ marginTop: '12px' }}>
              <div>
                <span className="tier-label">문장 구조 공식 (학원 원리파 가이드)</span>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', fontWeight: 700, marginTop: '3px' }}>
                  {unit.nuanceCard.structuralFormula}
                </p>
              </div>
              <div>
                <span className="tier-label">내 현재 난이도({variantKey.toUpperCase()}) 맞춤 예문</span>
                <p className="tier-native" style={{ marginTop: '3px' }}>
                  “{unit.nuanceCard.levelVariants[variantKey]}”
                </p>
              </div>
              <div>
                <span className="tier-label">한국인 직역 주의보</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)' }}>
                  {unit.nuanceCard.konglishTrap}
                </p>
              </div>
            </div>
          </section>

          {/* Kumon-style Step-by-Step Writing Worksheet */}
          <section className="side-panel-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <span className="tag tag-warm">📝 구몬·눈높이식 단계별 쓰기 학습지</span>
                <h2 style={{ fontSize: '1.16rem', marginTop: '6px' }}>
                  손과 타이핑으로 문장 전체를 끝까지 써보세요
                </h2>
              </div>
              <button
                id="ws-toggle-answers-btn"
                type="button"
                className="btn btn-secondary btn-sm no-print"
                onClick={() => setWsShowAnswers((v) => !v)}
              >
                <BookOpenCheck size={14} /> {wsShowAnswers ? '해설지 접기' : '정답·해설 대조하기'}
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {unit.sprintQuestions.map((q, idx) => {
                const val = wsInputs[q.id] ?? '';
                const matched = normalize(val) === normalize(q.targetEnglish);
                return (
                  <div key={q.id} className="dictation-line">
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                      STEP {idx + 1} · 한영 완전 문장 인출 쓰기
                    </div>
                    <p style={{ fontWeight: 700, marginTop: '4px' }}>
                      {idx + 1}. {q.koreanPrompt}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', marginTop: '2px' }}>
                      어순 힌트: {q.koreanChunksGuide.join(' / ')}
                    </p>
                    <input
                      id={`ws-write-input-${q.id}`}
                      type="text"
                      className="text-input"
                      style={{ marginTop: '8px', background: 'var(--bg-surface)' }}
                      value={val}
                      onChange={(e) =>
                        setWsInputs((prev) => ({ ...prev, [q.id]: e.target.value }))
                      }
                      placeholder="여기에 대소문자와 마침표까지 완전한 영어 문장으로 써보세요..."
                    />
                    {wsShowAnswers && (
                      <div style={{ marginTop: '8px', fontSize: '0.85rem' }}>
                        <strong style={{ color: matched ? 'var(--status-success)' : 'var(--accent-primary)' }}>
                          {val.trim() ? (matched ? '⭕ 정확히 일치합니다! ' : '✏️ 모범 답안 비교: ') : '모범 답안: '}
                          {q.targetEnglish}
                        </strong>
                        <p style={{ color: 'var(--ink-secondary)', marginTop: '2px' }}>
                          해설: {q.nuanceExplanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* =========================================================
          SUBVIEW 2: Academy Unit Exam Paper & Mastery Report Card
          ========================================================= */}
      {subView === 'exam' && (
        <div className="studio-split-layout">
          <form className="side-panel-card" onSubmit={handleSubmitExam}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <span className="tag tag-warm">💯 학원식 단원평가 문제지 (통과 기준: 80점 이상)</span>
                <h2 style={{ fontSize: '1.18rem', marginTop: '6px' }}>
                  {unit.title} — 성취도 검증 평가
                </h2>
              </div>
              {examSubmitted && (
                <button
                  id="exam-retry-btn"
                  type="button"
                  className="btn btn-ghost btn-sm no-print"
                  onClick={handleResetExam}
                >
                  <RotateCcw size={14} /> 시험 다시 응시
                </button>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {unit.examQuestions.map((q) => {
                const chosen = examAnswers[q.id] ?? '';
                const isRight = normalize(chosen) === normalize(q.correctAnswer);

                return (
                  <div key={q.id} className="dictation-line">
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
                      <span>문항 {q.number} · [{q.grammarTag}]</span>
                      <span>배점 {Math.round(100 / unit.examQuestions.length)}점</span>
                    </div>
                    <p style={{ fontWeight: 700, marginTop: '6px' }}>{q.promptKo}</p>
                    <p style={{ fontFamily: 'var(--font-en-display)', fontSize: '0.97rem', marginTop: '4px', color: 'var(--ink-secondary)' }}>
                      {q.promptEn}
                    </p>

                    {q.questionType === 'multiple-choice' && q.options ? (
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px', marginTop: '12px' }}>
                        {q.options.map((opt, oIdx) => (
                          <label
                            key={oIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '10px 12px',
                              borderRadius: 'var(--radius-sm)',
                              border: '1px solid var(--border-default)',
                              background: chosen === opt ? 'var(--accent-primary-soft)' : 'var(--bg-surface)',
                              cursor: examSubmitted ? 'default' : 'pointer',
                              fontSize: '0.9rem'
                            }}
                          >
                            <input
                              type="radio"
                              name={q.id}
                              value={opt}
                              checked={chosen === opt}
                              disabled={examSubmitted}
                              onChange={() =>
                                setExamAnswers((prev) => ({ ...prev, [q.id]: opt }))
                              }
                            />
                            <span>
                              ({oIdx + 1}) {opt}
                            </span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <input
                        id={`exam-rewrite-${q.id}`}
                        type="text"
                        className="text-input"
                        style={{ marginTop: '10px', background: 'var(--bg-surface)' }}
                        value={chosen}
                        disabled={examSubmitted}
                        onChange={(e) =>
                          setExamAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                        }
                        placeholder="서술형 정답 문장을 입력하세요..."
                      />
                    )}

                    {examSubmitted && (
                      <div
                        style={{
                          marginTop: '12px',
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-sm)',
                          background: isRight ? 'var(--status-success-soft)' : 'var(--status-error-soft)',
                          fontSize: '0.85rem'
                        }}
                      >
                        <strong>
                          {isRight ? '⭕ 정답입니다!' : `❌ 오답 (정답: ${q.correctAnswer})`}
                        </strong>
                        <p style={{ marginTop: '3px', color: 'var(--ink-secondary)' }}>
                          해설: {q.explanationKo}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!examSubmitted && (
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }} className="no-print">
                <button id="submit-unit-exam-btn" type="submit" className="btn btn-primary btn-lg">
                  <FileSpreadsheet size={16} /> 답안지 제출 및 채점하기
                </button>
              </div>
            )}
          </form>

          {/* Right: Academic Report Card & Mastery Prescription */}
          <aside className="side-panel-card no-print">
            <span className="tag tag-forest">학업성취도 성적표 (Report Card)</span>
            <h3 style={{ fontSize: '1.12rem', marginTop: '8px' }}>단원 완전학습 판정 및 담임 처방</h3>

            {lastScore !== null ? (
              <div
                style={{
                  marginTop: '14px',
                  padding: '18px',
                  borderRadius: 'var(--radius-lg)',
                  background: lastScore >= 80 ? 'var(--status-success-soft)' : 'var(--accent-warm-soft)'
                }}
              >
                <div style={{ fontSize: '2rem', fontWeight: 800 }}>{lastScore}점 / 100점</div>
                <strong style={{ display: 'block', marginTop: '4px' }}>
                  {lastScore >= 80
                    ? '🎉 PASS! 단원 목표 성취도를 완벽히 통과했습니다.'
                    : '📌 보충 클리닉 처방: 틀린 문항을 쌍둥이 변형 프린트로 완벽히 다잡으세요!'}
                </strong>
                <p style={{ fontSize: '0.86rem', color: 'var(--ink-secondary)', marginTop: '6px' }}>
                  틀린 문항({wrongExamIds.length}건)은 망각곡선 복습금고(D+1)에 자동 등록되었습니다.
                </p>

                <button
                  id="go-twin-clinic-btn"
                  type="button"
                  className="btn btn-primary btn-sm"
                  style={{ marginTop: '12px' }}
                  onClick={() => setSubView('twin-clinic')}
                >
                  <CopyPlus size={14} /> 나만의 쌍둥이 변형 오답 프린트 풀기 →
                </button>
              </div>
            ) : (
              <p style={{ fontSize: '0.89rem', color: 'var(--ink-secondary)', marginTop: '10px' }}>
                좌측 단원평가 문항을 풀고 제출하시면 즉시 채점 성적표와 취약 문법 보충용 쌍둥이 변형 문제가 생성됩니다.
              </p>
            )}

            {examHistory.length > 0 && (
              <div style={{ marginTop: '20px' }}>
                <strong style={{ fontSize: '0.9rem' }}>최근 응시 성적 기록</strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                  {examHistory.slice(0, 5).map((rec) => (
                    <div
                      key={rec.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '9px 12px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-canvas)',
                        fontSize: '0.83rem'
                      }}
                    >
                      <span>{rec.unitTitle.slice(0, 22)}... ({rec.takenAt})</span>
                      <strong style={{ color: rec.passed ? 'var(--status-success)' : 'var(--accent-warm)' }}>
                        {rec.scorePercent}점 ({rec.passed ? 'PASS' : '재검증'})
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      )}

      {/* =========================================================
          SUBVIEW 3: Personalized Twin-Question Clinic Sheet
          ========================================================= */}
      {subView === 'twin-clinic' && (
        <section className="side-panel-card">
          <span className="tag tag-amber">📕 개인 맞춤 쌍둥이 변형 오답 프린트 (Twin Questions)</span>
          <h2 style={{ fontSize: '1.2rem', marginTop: '8px' }}>
            틀린 문제의 문법 뼈대는 그대로, 주어와 상황만 새롭게 바꾼 과외 변형 문제지
          </h2>
          <p style={{ fontSize: '0.89rem', color: 'var(--ink-secondary)', marginTop: '4px', marginBottom: '18px' }}>
            답을 외워서 맞히는 착시를 막기 위해 동일 문법 원리를 새로운 문장에 직접 적용해 봅니다.
          </p>

          <div className="unit-list">
            {twinTargetQuestions.map((q, idx) => {
              const ans = twinAnswers[q.id] ?? '';
              const checked = Boolean(twinChecked[q.id]);
              const ok = normalize(ans) === normalize(q.twinVariant.correctAnswer);

              return (
                <div key={q.id} className="dictation-line">
                  <span className="tag tag-neutral">변형 클리닉 #{idx + 1} · {q.grammarTag}</span>
                  <p style={{ fontWeight: 700, marginTop: '8px' }}>{q.twinVariant.promptKo}</p>
                  <p style={{ fontFamily: 'var(--font-en-display)', color: 'var(--ink-secondary)', marginTop: '4px' }}>
                    {q.twinVariant.promptEn}
                  </p>

                  <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
                    <input
                      id={`twin-input-${q.id}`}
                      type="text"
                      className="text-input"
                      style={{ flex: 1, minWidth: '220px', background: 'var(--bg-surface)' }}
                      value={ans}
                      onChange={(e) =>
                        setTwinAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                      }
                      placeholder="변형 문제의 정답 단어 또는 문장을 입력하세요..."
                    />
                    <button
                      id={`twin-check-${q.id}`}
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() =>
                        setTwinChecked((prev) => ({ ...prev, [q.id]: true }))
                      }
                    >
                      확인
                    </button>
                  </div>

                  {checked && (
                    <div style={{ marginTop: '10px', fontSize: '0.86rem' }}>
                      <strong style={{ color: ok ? 'var(--status-success)' : 'var(--status-error)' }}>
                        {ok ? '⭕ 완벽히 체화하셨습니다!' : `❗ 정답: ${q.twinVariant.correctAnswer}`}
                      </strong>
                      <p style={{ color: 'var(--ink-secondary)', marginTop: '2px' }}>
                        {q.twinVariant.explanationKo}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* =========================================================
          SUBVIEW 4: Paper-to-App Handwriting AI Grading (Gemini Vision)
          ========================================================= */}
      {subView === 'ocr-bridge' && (
        <div className="studio-split-layout no-print">
          <section className="side-panel-card">
            <span className="tag tag-forest">
              <Camera size={13} /> Paper-to-App Bridge · Gemini Multimodal Vision
            </span>
            <h2 style={{ fontSize: '1.18rem', marginTop: '8px' }}>
              인쇄해서 손으로 푼 학습지·영작 노트 촬영 AI 빨간펜 채점
            </h2>
            <p style={{ fontSize: '0.89rem', color: 'var(--ink-secondary)', marginTop: '4px', marginBottom: '14px' }}>
              종이 학습지나 아이패드 손글씨 답안 이미지를 올리거나 손글씨 인식 텍스트를 검수하면, 스펠링·어형·콩글리시 오류를 첨삭해 웹앱 복습금고로 동기화합니다.
            </p>

            <label
              htmlFor="handwriting-photo-upload"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                border: '1.5px dashed var(--border-strong)',
                background: 'var(--bg-canvas)',
                cursor: 'pointer',
                fontWeight: 650,
                fontSize: '0.9rem',
                marginBottom: '14px'
              }}
            >
              <Upload size={16} /> 종이 학습지 촬영 사진 업로드 (선택)
              <input
                id="handwriting-photo-upload"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileUpload}
              />
            </label>

            {uploadedPreviewUrl && (
              <div style={{ marginBottom: '12px' }}>
                <img
                  src={uploadedPreviewUrl}
                  alt="업로드된 손글씨 학습지 미리보기"
                  style={{ maxHeight: '180px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)' }}
                />
              </div>
            )}

            <label htmlFor="ocr-extracted-textarea" style={{ fontSize: '0.84rem', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              인식된 손글씨 영작 답안 (또는 직접 수정·입력하여 테스트):
            </label>
            <textarea
              id="ocr-extracted-textarea"
              className="textarea-field"
              value={handwrittenSampleText}
              onChange={(e) => setHandwrittenSampleText(e.target.value)}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
              <button
                id="run-ocr-grading-btn"
                type="button"
                className="btn btn-primary"
                onClick={handleRunVisionGrading}
              >
                <Sparkles size={16} /> 빨간펜 AI 첨삭 채점 실행
              </button>
            </div>
          </section>

          <aside className="side-panel-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '1.08rem' }}>빨간펜 손글씨 첨삭 결과</h3>
              {ocrGradingResults.length > 0 && (
                <button
                  id="sync-ocr-to-vault-btn"
                  type="button"
                  className="btn btn-secondary btn-sm"
                  disabled={ocrSavedBanner}
                  onClick={handleSyncOcrToVault}
                >
                  <CheckCircle2 size={14} />
                  <span>{ocrSavedBanner ? '복습금고 동기화 완료!' : '오답 전체 복습금고에 등록'}</span>
                </button>
              )}
            </div>

            {ocrGradingResults.length === 0 ? (
              <p style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)' }}>
                좌측의 <strong>빨간펜 AI 첨삭 채점 실행</strong> 버튼을 눌러 손글씨 답안의 불가산 명사·동명사·전치사 오류 검출 결과를 확인해보세요.
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {ocrGradingResults.map((res, idx) => (
                  <div key={idx} className="paraphrase-doc-card">
                    <span className="tier-label">답안 #{idx + 1} 원본</span>
                    <p className="tier-mine">{res.line}</p>
                    <span className="tier-label">빨간펜 교정본</span>
                    <p className="tier-fix">{res.fix}</p>
                    <p style={{ fontSize: '0.83rem', color: 'var(--ink-secondary)' }}>{res.note}</p>
                    <span className="tier-label">원어민 실전 추천</span>
                    <p className="tier-native" style={{ fontSize: '0.95rem' }}>{res.native}</p>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
};
