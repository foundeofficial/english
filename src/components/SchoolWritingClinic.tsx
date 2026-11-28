import { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  PenTool,
  RotateCcw,
  Sparkles,
  Volume2
} from 'lucide-react';
import {
  CONDITIONAL_WRITING_30,
  ERROR_CORRECTION_30
} from '../data/writingClinicData.ts';
import type { SpacedReviewCard } from '../types/course.ts';
import type { ConditionalWritingItem, ErrorCorrectionItem } from '../types/v6.ts';
import { playCorrectChime, playSoftMiss } from '../utils/soundFx.ts';
import { speakEnglish } from '../utils/speech.ts';
import {
  evaluateSpeechOrDictation,
  isEquivalentEnglishAnswer,
  normalizeForComparison
} from '../utils/speechScoring.ts';

interface SchoolWritingClinicProps {
  writingClinicSolvedIds: string[];
  onSolveWritingItem: (
    itemId: string,
    isCorrect: boolean,
    missedCard?: SpacedReviewCard,
    missedTag?: string
  ) => void;
}

export function SchoolWritingClinic({
  writingClinicSolvedIds,
  onSolveWritingItem
}: SchoolWritingClinicProps) {
  const [clinicMode, setClinicMode] = useState<'conditional' | 'error-fix'>('conditional');
  const [levelFilter, setLevelFilter] = useState<'all' | 'middle' | 'high'>('all');

  // Conditional Writing states
  const [cwIdx, setCwIdx] = useState(0);
  const [cwInput, setCwInput] = useState('');
  const [cwChecked, setCwChecked] = useState<null | {
    correct: boolean;
    accuracyPct: number;
    tokens: Array<{ word: string; status: 'matched' | 'close' | 'missed' }>;
  }>(null);

  // Spot & Fix Error states
  const [ecIdx, setEcIdx] = useState(0);
  const [pickedMarker, setPickedMarker] = useState<string | null>(null);
  const [fixInput, setFixInput] = useState('');
  const [ecChecked, setEcChecked] = useState<null | {
    spotCorrect: boolean;
    fixCorrect: boolean;
  }>(null);

  const visibleCw: ConditionalWritingItem[] =
    levelFilter === 'all'
      ? CONDITIONAL_WRITING_30
      : CONDITIONAL_WRITING_30.filter((i) => i.schoolLevel === levelFilter);

  const visibleEc: ErrorCorrectionItem[] =
    levelFilter === 'all'
      ? ERROR_CORRECTION_30
      : ERROR_CORRECTION_30.filter((i) => i.schoolLevel === levelFilter);

  const activeCw = visibleCw[Math.min(cwIdx, visibleCw.length - 1)] ?? CONDITIONAL_WRITING_30[0];
  const activeEc = visibleEc[Math.min(ecIdx, visibleEc.length - 1)] ?? ERROR_CORRECTION_30[0];

  const handleGradeConditional = () => {
    if (!activeCw || !cwInput.trim()) return;
    const isExact = isEquivalentEnglishAnswer(cwInput, activeCw.answerEn, activeCw.acceptableAlts);
    const diff = evaluateSpeechOrDictation(cwInput, activeCw.answerEn, 95);
    const correct = isExact || diff.accuracyPct >= 96;

    setCwChecked({
      correct,
      accuracyPct: correct ? 100 : diff.accuracyPct,
      tokens: diff.tokens
    });

    if (correct) {
      playCorrectChime();
      speakEnglish(activeCw.answerEn, 0.94);
      onSolveWritingItem(activeCw.id, true);
    } else {
      playSoftMiss();
      const today = new Date().toISOString().slice(0, 10);
      onSolveWritingItem(
        activeCw.id,
        false,
        {
          id: `cw-miss-${activeCw.id}-${writingClinicSolvedIds.length}`,
          promptKo: `[서술형 조건영작] ${activeCw.koreanPrompt}`,
          targetEn: activeCw.answerEn,
          noteKo: activeCw.explanationKo,
          sourceLabel: `내신 서술형 · ${activeCw.gradeBadge}`,
          intervalDays: 1,
          dueDate: today,
          reviewCount: 0,
          mastered: false
        },
        activeCw.grammarTag
      );
    }
  };

  const handleGradeErrorFix = () => {
    if (!activeEc || !pickedMarker || !fixInput.trim()) return;
    const errorSeg = activeEc.segments.find((s) => s.isError);
    const spotCorrect = errorSeg?.marker === pickedMarker;

    const normUserFix = normalizeForComparison(fixInput);
    const validFixes = [activeEc.correctFix, ...(activeEc.acceptableFixes ?? [])].map(
      normalizeForComparison
    );
    const fixCorrect = validFixes.includes(normUserFix);
    const fullCorrect = spotCorrect && fixCorrect;

    setEcChecked({ spotCorrect, fixCorrect });
    if (fullCorrect) playCorrectChime();
    else playSoftMiss();

    if (fullCorrect) {
      onSolveWritingItem(activeEc.id, true);
    } else {
      const today = new Date().toISOString().slice(0, 10);
      onSolveWritingItem(
        activeEc.id,
        false,
        {
          id: `ec-miss-${activeEc.id}-${writingClinicSolvedIds.length}`,
          promptKo: `[어법 오류 교정] ${activeEc.koreanMeaning} (틀린 부분: ${activeEc.wrongText})`,
          targetEn: `${activeEc.wrongText} → ${activeEc.correctFix}`,
          noteKo: activeEc.explanationKo,
          sourceLabel: `어법 오류 교정 · ${activeEc.gradeBadge}`,
          intervalDays: 1,
          dueDate: today,
          reviewCount: 0,
          mastered: false
        },
        activeEc.grammarTag
      );
    }
  };

  const cwSolvedCount = CONDITIONAL_WRITING_30.filter((i) =>
    writingClinicSolvedIds.includes(i.id)
  ).length;
  const ecSolvedCount = ERROR_CORRECTION_30.filter((i) =>
    writingClinicSolvedIds.includes(i.id)
  ).length;

  return (
    <section className="stack-lg" aria-label="중·고등 내신 서술형 조건영작 및 어법 오류 교정 클리닉">
      {/* HEADER + MODE SWITCHER */}
      <div className="surface-card">
        <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
          <div>
            <span className="pill-tag pill-coral">한국 중·고등 내신 1등급을 결정짓는 서술형·수행평가 완전 대비</span>
            <h2 style={{ fontSize: '1.34rem', marginTop: '6px' }}>
              내신 서술형 조건영작 (30문항) &amp; 틀린 어법 찾아 고치기 (30문항)
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {(
              [
                ['all', '전체 (60문항)'],
                ['middle', '중학 내신 (30)'],
                ['high', '고등 1등급 (30)']
              ] as const
            ).map(([lv, label]) => (
              <button
                key={lv}
                id={`clinic-level-${lv}`}
                type="button"
                className={`day-switch-chip ${levelFilter === lv ? 'active' : ''}`}
                onClick={() => {
                  setLevelFilter(lv);
                  setCwIdx(0);
                  setEcIdx(0);
                  setCwInput('');
                  setCwChecked(null);
                  setPickedMarker(null);
                  setFixInput('');
                  setEcChecked(null);
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            id="clinic-mode-conditional"
            type="button"
            className={`transform-pill-btn ${clinicMode === 'conditional' ? 'active' : ''}`}
            onClick={() => setClinicMode('conditional')}
          >
            <PenTool size={14} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
            Part A · 서술형 조건영작 ({cwSolvedCount}/30 정복)
          </button>
          <button
            id="clinic-mode-error-fix"
            type="button"
            className={`transform-pill-btn ${clinicMode === 'error-fix' ? 'active' : ''}`}
            onClick={() => setClinicMode('error-fix')}
          >
            <AlertCircle size={14} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
            Part B · 틀린 어법 찾아 고치기 ({ecSolvedCount}/30 정복)
          </button>
        </div>
      </div>

      {/* =======================================================
          PART A: CONDITIONAL SCHOOL WRITING (30 ITEMS)
         ======================================================= */}
      {clinicMode === 'conditional' && activeCw && (
        <div className="surface-card">
          <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="pill-tag pill-brand">{activeCw.gradeBadge}</span>
              <span className="pill-tag pill-amber">{activeCw.grammarPointKo}</span>
              {writingClinicSolvedIds.includes(activeCw.id) && (
                <span className="pill-tag pill-subtle">✓ 정복 완료</span>
              )}
            </div>
            <span style={{ fontSize: '0.86rem', color: 'var(--text-sub)', fontWeight: 700 }}>
              문항 {Math.min(cwIdx, visibleCw.length - 1) + 1} / {visibleCw.length}
            </span>
          </div>

          {/* QUICK NUMBER STRIP */}
          <div className="omr-pills-row" style={{ marginBottom: '16px' }}>
            {visibleCw.map((item, idx) => {
              const solved = writingClinicSolvedIds.includes(item.id);
              const isCur = item.id === activeCw.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`omr-num-pill ${isCur ? 'marked' : solved ? 'correct' : ''}`}
                  onClick={() => {
                    setCwIdx(idx);
                    setCwInput('');
                    setCwChecked(null);
                  }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* KOREAN SCHOOL EXAM BOX */}
          <div className="builder-prompt-box" style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 750, color: 'var(--brand)' }}>
              우리말 뜻을 [조건]과 [제시어]에 맞게 영작하세요 (필요 시 어형 변형)
            </span>
            <p style={{ fontSize: '1.16rem', fontWeight: 800, marginTop: '6px' }}>
              “{activeCw.koreanPrompt}”
            </p>
            <div className="clinic-conditions-box" style={{ marginTop: '12px' }}>
              <strong>[서술형 조건]</strong>
              <ul className="clean-bullet-list">
                {activeCw.conditionsKo.map((cond, i) => (
                  <li key={i}>{cond}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '12px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 750, color: 'var(--text-sub)' }}>
                [제시어 — 클릭하면 답안란에 자동 입력됩니다]
              </span>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
                {activeCw.givenWords.map((w, i) => (
                  <button
                    key={`${w}-${i}`}
                    type="button"
                    className="day-switch-chip"
                    onClick={() =>
                      setCwInput((prev) => `${prev}${prev.endsWith(' ') || !prev ? '' : ' '}${w} `)
                    }
                  >
                    + {w}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <textarea
            id="clinic-conditional-input"
            className="essay-editor-textarea"
            rows={3}
            value={cwInput}
            onChange={(e) => {
              setCwInput(e.target.value);
              setCwChecked(null);
            }}
            placeholder="조건에 맞춰 완전한 영어 문장을 입력하세요..."
          />

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '12px' }}>
            <button
              id="clinic-conditional-grade-btn"
              type="button"
              className="btn-solid-brand"
              disabled={!cwInput.trim()}
              onClick={handleGradeConditional}
            >
              <CheckCircle2 size={16} /> 서술형 즉시 채점 &amp; 단어별 정밀 비교
            </button>
            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                setCwInput('');
                setCwChecked(null);
              }}
            >
              <RotateCcw size={15} /> 초기화
            </button>
            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                setCwIdx((i) => (i + 1) % visibleCw.length);
                setCwInput('');
                setCwChecked(null);
              }}
            >
              다음 서술형 문항 →
            </button>
          </div>

          {cwChecked && (
            <div
              className={`feedback-banner ${cwChecked.correct ? 'ok' : 'warn'}`}
              style={{ marginTop: '16px', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}
            >
              <div className="section-label-between" style={{ width: '100%', flexWrap: 'wrap', gap: '8px' }}>
                <strong>
                  {cwChecked.correct
                    ? '✓ 감점 없는 완벽한 서술형 만점 답안입니다! (+35 XP)'
                    : `일치율 ${cwChecked.accuracyPct}% — 빨간 단어를 점검해 감점을 막아보세요!`}
                </strong>
                <button
                  type="button"
                  className="inline-audio-btn"
                  onClick={() => speakEnglish(activeCw.answerEn, 0.94)}
                >
                  <Volume2 size={14} /> 모범 답안 듣기
                </button>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {cwChecked.tokens.map((tk, i) => (
                  <span
                    key={i}
                    className={`diff-word-pill ${tk.status}`}
                  >
                    {tk.word}
                  </span>
                ))}
              </div>

              <div style={{ fontFamily: 'var(--font-en)', fontWeight: 800, fontSize: '1.04rem', color: 'var(--brand)' }}>
                모범 답안: {activeCw.answerEn}
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>💡 {activeCw.explanationKo}</p>
            </div>
          )}
        </div>
      )}

      {/* =======================================================
          PART B: SPOT & FIX GRAMMAR ERROR (30 ITEMS)
         ======================================================= */}
      {clinicMode === 'error-fix' && activeEc && (
        <div className="surface-card">
          <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="pill-tag pill-coral">{activeEc.gradeBadge}</span>
              <span className="pill-tag pill-brand">{activeEc.grammarPointKo}</span>
              {writingClinicSolvedIds.includes(activeEc.id) && (
                <span className="pill-tag pill-subtle">✓ 정복 완료</span>
              )}
            </div>
            <span style={{ fontSize: '0.86rem', color: 'var(--text-sub)', fontWeight: 700 }}>
              문항 {Math.min(ecIdx, visibleEc.length - 1) + 1} / {visibleEc.length}
            </span>
          </div>

          <div className="omr-pills-row" style={{ marginBottom: '16px' }}>
            {visibleEc.map((item, idx) => {
              const solved = writingClinicSolvedIds.includes(item.id);
              const isCur = item.id === activeEc.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`omr-num-pill ${isCur ? 'marked' : solved ? 'correct' : ''}`}
                  onClick={() => {
                    setEcIdx(idx);
                    setPickedMarker(null);
                    setFixInput('');
                    setEcChecked(null);
                  }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className="builder-prompt-box" style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 750, color: 'var(--coral)' }}>
              STEP 1. 아래 문장에서 어법상 틀린 구간(①~⑤) 하나를 클릭하세요!
            </span>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', marginTop: '4px' }}>
              해석: {activeEc.koreanMeaning}
            </p>

            <div className="error-segments-line" style={{ marginTop: '14px' }}>
              {activeEc.segments.map((seg) => {
                const isPicked = pickedMarker === seg.marker;
                let cls = 'error-seg-btn';
                if (ecChecked) {
                  if (seg.isError) cls += ' is-true-error';
                  else if (isPicked && !seg.isError) cls += ' is-wrong-pick';
                } else if (isPicked) {
                  cls += ' selected';
                }
                return (
                  <button
                    key={seg.marker}
                    id={`error-seg-${seg.marker}`}
                    type="button"
                    className={cls}
                    onClick={() => {
                      if (ecChecked) return;
                      setPickedMarker(seg.marker);
                    }}
                  >
                    <span className="error-seg-marker">{seg.marker}</span>
                    <span>{seg.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ marginTop: '16px' }}>
            <label htmlFor="error-fix-input" className="field-label">
              STEP 2. 선택한 틀린 표현을 올바른 영어로 직접 고쳐 쓰세요 (예: seeing → seen)
            </label>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '8px' }}>
              <input
                id="error-fix-input"
                type="text"
                className="input-clean"
                style={{ flex: 1, minWidth: '220px' }}
                value={fixInput}
                onChange={(e) => setFixInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleGradeErrorFix();
                  }
                }}
                placeholder="바르게 고친 영어 단어·구문 입력..."
              />
              <button
                id="clinic-error-grade-btn"
                type="button"
                className="btn-solid-brand"
                disabled={!pickedMarker || !fixInput.trim()}
                onClick={handleGradeErrorFix}
              >
                <Sparkles size={15} /> 위치·교정 동시 채점
              </button>
              <button
                type="button"
                className="btn-outline"
                onClick={() => {
                  setEcIdx((i) => (i + 1) % visibleEc.length);
                  setPickedMarker(null);
                  setFixInput('');
                  setEcChecked(null);
                }}
              >
                다음 오류 문항 →
              </button>
            </div>
          </div>

          {ecChecked && (
            <div
              className={`feedback-banner ${ecChecked.spotCorrect && ecChecked.fixCorrect ? 'ok' : 'warn'}`}
              style={{ marginTop: '16px', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}
            >
              <strong>
                {ecChecked.spotCorrect && ecChecked.fixCorrect
                  ? '✓ 완벽합니다! 오류 위치와 바른 어법 교정 모두 정확합니다! (+35 XP)'
                  : `위치 판정: ${ecChecked.spotCorrect ? '정확 ✓' : '오답 ✗'} · 교정 답안: ${ecChecked.fixCorrect ? '정확 ✓' : '오답 ✗'}`}
              </strong>
              <div style={{ fontFamily: 'var(--font-en)', fontWeight: 800, color: 'var(--brand)' }}>
                정답: {activeEc.wrongText} → {activeEc.correctFix}
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>💡 {activeEc.explanationKo}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
