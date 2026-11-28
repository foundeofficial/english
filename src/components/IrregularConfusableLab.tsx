import { useState } from 'react';
import {
  CheckCircle2,
  Flame,
  RotateCcw,
  Sparkles,
  Volume2,
  Zap
} from 'lucide-react';
import {
  CONFUSABLE_PAIRS_50,
  IRREGULAR_VERBS_80
} from '../data/verbAndConfusableBank.ts';
import type { IrregularVerbItem } from '../types/v6.ts';
import { playComboChime, playSoftMiss } from '../utils/soundFx.ts';
import { speakEnglish } from '../utils/speech.ts';

interface IrregularConfusableLabProps {
  irregularMasteredIds: string[];
  confusableSolvedIds: string[];
  onMasterIrregularVerb: (verbId: string) => void;
  onSolveConfusablePair: (pairId: string) => void;
}

export function IrregularConfusableLab({
  irregularMasteredIds,
  confusableSolvedIds,
  onMasterIrregularVerb,
  onSolveConfusablePair
}: IrregularConfusableLabProps) {
  const [subMode, setSubMode] = useState<'irregular-table' | 'irregular-drill' | 'confusables'>(
    'irregular-drill'
  );
  const [patternFilter, setPatternFilter] = useState<'all' | IrregularVerbItem['pattern']>('all');
  const [confTier, setConfTier] = useState<'all' | 'middle' | 'high-csat'>('all');

  // Irregular 3-Form Drill state
  const [drillIdx, setDrillIdx] = useState(0);
  const [pastInput, setPastInput] = useState('');
  const [ppInput, setPpInput] = useState('');
  const [drillResult, setDrillResult] = useState<'idle' | 'ok' | 'wrong'>('idle');
  const [drillStreak, setDrillStreak] = useState(0);

  // Confusable inline quiz state
  const [confPickedMap, setConfPickedMap] = useState<Record<string, string>>({});

  const visibleVerbs =
    patternFilter === 'all'
      ? IRREGULAR_VERBS_80
      : IRREGULAR_VERBS_80.filter((v) => v.pattern === patternFilter);

  const activeVerb = visibleVerbs[drillIdx % visibleVerbs.length] ?? IRREGULAR_VERBS_80[0];

  const visibleConfusables =
    confTier === 'all'
      ? CONFUSABLE_PAIRS_50
      : CONFUSABLE_PAIRS_50.filter((c) => c.tier === confTier);

  const checkVerbMatch = (userRaw: string, target: string) => {
    const clean = userRaw.trim().toLowerCase();
    const candidates = target
      .toLowerCase()
      .split('/')
      .map((s) => s.trim());
    return candidates.includes(clean);
  };

  const handleCheckIrregular = () => {
    if (!activeVerb || !pastInput.trim() || !ppInput.trim()) return;
    const pastOk = checkVerbMatch(pastInput, activeVerb.past);
    const ppOk = checkVerbMatch(ppInput, activeVerb.pp);
    if (pastOk && ppOk) {
      const nextStreak = drillStreak + 1;
      setDrillResult('ok');
      setDrillStreak(nextStreak);
      playComboChime(nextStreak);
      speakEnglish(`${activeVerb.base}, ${activeVerb.past}, ${activeVerb.pp}`, 0.92);
      onMasterIrregularVerb(activeVerb.id);
    } else {
      setDrillResult('wrong');
      setDrillStreak(0);
      playSoftMiss();
    }
  };

  const handleNextIrregular = () => {
    setDrillIdx((i) => (i + 1) % visibleVerbs.length);
    setPastInput('');
    setPpInput('');
    setDrillResult('idle');
  };

  return (
    <section className="stack-lg" aria-label="불규칙 동사 80선 3단 변화 & 수능 혼동 어휘 50쌍">
      {/* SUBMODE SWITCHER */}
      <div className="cellophane-bar" style={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            id="ic-mode-drill"
            type="button"
            className={`day-switch-chip ${subMode === 'irregular-drill' ? 'active' : ''}`}
            onClick={() => setSubMode('irregular-drill')}
          >
            <Zap size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
            불규칙 동사 3단 변화 타임어택 ({irregularMasteredIds.length}/80)
          </button>
          <button
            id="ic-mode-table"
            type="button"
            className={`day-switch-chip ${subMode === 'irregular-table' ? 'active' : ''}`}
            onClick={() => setSubMode('irregular-table')}
          >
            📋 불규칙 동사 80선 패턴 도감
          </button>
          <button
            id="ic-mode-confusables"
            type="button"
            className={`day-switch-chip ${subMode === 'confusables' ? 'active' : ''}`}
            onClick={() => setSubMode('confusables')}
          >
            <Sparkles size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
            수능·내신 혼동 어휘 50쌍 클리닉 ({confusableSolvedIds.length}/50)
          </button>
        </div>

        {subMode === 'irregular-drill' && (
          <span className="pill-tag pill-coral">
            <Flame size={13} /> 연속 정답 {drillStreak}콤보
          </span>
        )}
      </div>

      {/* MODE 1: IRREGULAR VERB 3-FORM INTERACTIVE DRILL */}
      {subMode === 'irregular-drill' && activeVerb && (
        <div className="sm2-flashcard-stage">
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '14px' }}>
            {(['all', 'AAA', 'ABA', 'ABB', 'ABC'] as const).map((pt) => (
              <button
                key={pt}
                type="button"
                className={`day-switch-chip ${patternFilter === pt ? 'active' : ''}`}
                onClick={() => {
                  setPatternFilter(pt);
                  setDrillIdx(0);
                  setPastInput('');
                  setPpInput('');
                  setDrillResult('idle');
                }}
              >
                {pt === 'all' ? '전체 80동사' : `${pt}형`}
              </button>
            ))}
          </div>

          <div className="sm2-card-face">
            <div className="section-label-between" style={{ marginBottom: '10px' }}>
              <span className="pill-tag pill-brand">
                {activeVerb.pattern} 패턴 · {(drillIdx % visibleVerbs.length) + 1} / {visibleVerbs.length}
              </span>
              <button
                type="button"
                className="inline-audio-btn"
                onClick={() => speakEnglish(activeVerb.base, 0.9)}
              >
                <Volume2 size={14} /> 원형 발음
              </button>
            </div>

            <h3 style={{ fontFamily: 'var(--font-en)', fontSize: '2.2rem', fontWeight: 800 }}>
              {activeVerb.base}
            </h3>
            <p style={{ color: 'var(--brand)', fontWeight: 750, fontSize: '1.08rem', marginTop: '4px' }}>
              {activeVerb.meaningKo}
            </p>

            <div className="verb-drill-inputs-grid" style={{ marginTop: '20px' }}>
              <div style={{ textAlign: 'left' }}>
                <label htmlFor="verb-past-input" className="field-label">
                  과거형 (Past)
                </label>
                <input
                  id="verb-past-input"
                  type="text"
                  className="input-clean"
                  value={pastInput}
                  onChange={(e) => {
                    setPastInput(e.target.value);
                    setDrillResult('idle');
                  }}
                  placeholder="예: went"
                />
              </div>
              <div style={{ textAlign: 'left' }}>
                <label htmlFor="verb-pp-input" className="field-label">
                  과거분사 (p.p.)
                </label>
                <input
                  id="verb-pp-input"
                  type="text"
                  className="input-clean"
                  value={ppInput}
                  onChange={(e) => {
                    setPpInput(e.target.value);
                    setDrillResult('idle');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleCheckIrregular();
                    }
                  }}
                  placeholder="예: gone"
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '18px', flexWrap: 'wrap' }}>
              <button
                id="check-irregular-btn"
                type="button"
                className="btn-solid-brand"
                disabled={!pastInput.trim() || !ppInput.trim()}
                onClick={handleCheckIrregular}
              >
                3단 변화 채점하기
              </button>
              <button
                id="next-irregular-btn"
                type="button"
                className="btn-outline"
                onClick={handleNextIrregular}
              >
                다음 동사 →
              </button>
              <button
                type="button"
                className="btn-outline"
                onClick={() => {
                  setPastInput(activeVerb.past);
                  setPpInput(activeVerb.pp);
                }}
              >
                <RotateCcw size={14} /> 정답 힌트 보기
              </button>
            </div>

            {drillResult !== 'idle' && (
              <div
                className={`feedback-banner ${drillResult === 'ok' ? 'ok' : 'warn'}`}
                style={{ marginTop: '16px', textAlign: 'left' }}
              >
                <div>
                  <strong>
                    {drillResult === 'ok'
                      ? `✓ 완벽! ${activeVerb.base} – ${activeVerb.past} – ${activeVerb.pp} (+10 XP)`
                      : `아쉬워요! 정답: ${activeVerb.base} – ${activeVerb.past} – ${activeVerb.pp}`}
                  </strong>
                  <p style={{ fontSize: '0.88rem', marginTop: '4px' }}>💡 {activeVerb.memoryTipKo}</p>
                  <p style={{ fontFamily: 'var(--font-en)', fontSize: '0.88rem', marginTop: '4px', fontWeight: 700 }}>
                    “{activeVerb.exampleEn}” ({activeVerb.exampleKo})
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODE 2: IRREGULAR VERB 80 MASTER TABLE */}
      {subMode === 'irregular-table' && (
        <div className="surface-card">
          <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
            <div>
              <h2 style={{ fontSize: '1.26rem' }}>초·중·고등 필수 불규칙 동사 80선 패턴별 총정리</h2>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.88rem', marginTop: '3px' }}>
                각 행을 클릭하면 3단 변화(원형 – 과거 – 과거분사) 원어민 발음이 이어서 재생됩니다.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {(['all', 'AAA', 'ABA', 'ABB', 'ABC'] as const).map((pt) => (
                <button
                  key={pt}
                  type="button"
                  className={`day-switch-chip ${patternFilter === pt ? 'active' : ''}`}
                  onClick={() => setPatternFilter(pt)}
                >
                  {pt === 'all' ? '전체 80' : `${pt}형`}
                </button>
              ))}
            </div>
          </div>

          <div className="tense-matrix-table-wrap">
            <table className="tense-matrix-table" style={{ textAlign: 'left' }}>
              <thead>
                <tr>
                  <th>패턴</th>
                  <th>원형 (Base)</th>
                  <th>과거 (Past)</th>
                  <th>과거분사 (p.p.)</th>
                  <th>뜻</th>
                  <th>암기 포인트</th>
                  <th>발음</th>
                </tr>
              </thead>
              <tbody>
                {visibleVerbs.map((v) => {
                  const done = irregularMasteredIds.includes(v.id);
                  return (
                    <tr key={v.id} style={{ background: done ? 'var(--ok-soft)' : 'var(--bg-page)' }}>
                      <td style={{ padding: '8px' }}>
                        <span className="pill-tag pill-subtle" style={{ fontSize: '0.72rem' }}>
                          {v.pattern}
                        </span>
                      </td>
                      <td style={{ padding: '8px', fontFamily: 'var(--font-en)', fontWeight: 800 }}>
                        {v.base}
                      </td>
                      <td style={{ padding: '8px', fontFamily: 'var(--font-en)', fontWeight: 700, color: 'var(--brand)' }}>
                        {v.past}
                      </td>
                      <td style={{ padding: '8px', fontFamily: 'var(--font-en)', fontWeight: 700, color: 'var(--coral)' }}>
                        {v.pp}
                      </td>
                      <td style={{ padding: '8px', fontSize: '0.88rem', fontWeight: 650 }}>{v.meaningKo}</td>
                      <td style={{ padding: '8px', fontSize: '0.82rem', color: 'var(--text-sub)' }}>
                        {v.memoryTipKo}
                      </td>
                      <td style={{ padding: '8px' }}>
                        <button
                          type="button"
                          className="inline-audio-btn"
                          onClick={() => speakEnglish(`${v.base}, ${v.past}, ${v.pp}`, 0.9)}
                        >
                          <Volume2 size={13} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODE 3: 50 CONFUSABLE WORD PAIRS & CONTEXT QUIZ */}
      {subMode === 'confusables' && (
        <div className="stack-md">
          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <span className="pill-tag pill-coral">affect vs effect · adapt vs adopt · lie vs lay 완벽 정복</span>
                <h2 style={{ fontSize: '1.28rem', marginTop: '6px' }}>
                  한국인이 평생 헷갈리는 수능·내신 혼동 어휘 50쌍 실전 클리닉
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {(
                  [
                    ['all', '전체 50쌍'],
                    ['middle', '중학 필수 20쌍'],
                    ['high-csat', '고등·수능 킬러 30쌍']
                  ] as const
                ).map(([k, label]) => (
                  <button
                    key={k}
                    type="button"
                    className={`day-switch-chip ${confTier === k ? 'active' : ''}`}
                    onClick={() => setConfTier(k)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="connected-speech-grid">
            {visibleConfusables.map((pair) => {
              const picked = confPickedMap[pair.id];
              const isCorrect = picked === pair.quizAnswer;
              const isSolved = confusableSolvedIds.includes(pair.id);
              return (
                <article key={pair.id} className={`sight-word-card ${isSolved ? 'mastered' : ''}`}>
                  <div className="section-label-between" style={{ gap: '6px' }}>
                    <span className={`pill-tag ${pair.tier === 'high-csat' ? 'pill-coral' : 'pill-brand'}`} style={{ fontSize: '0.72rem' }}>
                      {pair.tier === 'high-csat' ? '고등·수능 킬러' : '중학 필수'}
                    </span>
                    {isSolved && (
                      <span style={{ fontSize: '0.74rem', fontWeight: 750, color: 'var(--ok)' }}>
                        <CheckCircle2 size={13} style={{ verticalAlign: 'middle' }} /> 정복됨
                      </span>
                    )}
                  </div>

                  <div className="confusable-vs-bar" style={{ marginTop: '10px' }}>
                    <button
                      type="button"
                      className="confusable-word-chip"
                      onClick={() => speakEnglish(pair.wordA, 0.9)}
                    >
                      <strong>{pair.wordA}</strong>
                      <small>{pair.meaningAKo}</small>
                    </button>
                    <span style={{ fontWeight: 800, color: 'var(--coral)', fontSize: '0.82rem' }}>VS</span>
                    <button
                      type="button"
                      className="confusable-word-chip"
                      onClick={() => speakEnglish(pair.wordB, 0.9)}
                    >
                      <strong>{pair.wordB}</strong>
                      <small>{pair.meaningBKo}</small>
                    </button>
                  </div>

                  <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', marginTop: '8px', lineHeight: 1.5 }}>
                    💡 {pair.contrastTipKo}
                  </p>

                  <div className="vocab-example-box" style={{ marginTop: '10px' }}>
                    <p style={{ fontFamily: 'var(--font-en)', fontSize: '0.9rem', fontWeight: 700 }}>
                      {pair.quizSentence}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-sub)', marginTop: '2px' }}>
                      {pair.quizMeaningKo}
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '8px' }}>
                      {[pair.wordA, pair.wordB].map((opt) => {
                        let cls = 'option-choice-btn';
                        if (picked) {
                          if (opt === pair.quizAnswer) cls += ' correct-ans';
                          else if (opt === picked) cls += ' wrong-ans';
                        }
                        return (
                          <button
                            key={opt}
                            id={`conf-opt-${pair.id}-${opt}`}
                            type="button"
                            className={cls}
                            style={{ padding: '7px 8px', textAlign: 'center', fontFamily: 'var(--font-en)', fontWeight: 750 }}
                            onClick={() => {
                              setConfPickedMap((prev) => ({ ...prev, [pair.id]: opt }));
                              if (opt === pair.quizAnswer) {
                                speakEnglish(pair.quizSentence.replace('_____', pair.quizAnswer), 0.94);
                                onSolveConfusablePair(pair.id);
                              }
                            }}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {picked && (
                      <p style={{ fontSize: '0.8rem', marginTop: '6px', color: isCorrect ? 'var(--ok)' : 'var(--danger)', fontWeight: 650 }}>
                        {isCorrect ? '✓ 정답! ' : `✗ 정답은 "${pair.quizAnswer}" — `}
                        {pair.quizExplanationKo}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
