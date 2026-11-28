import { useState } from 'react';
import {
  CheckCircle2,
  Eye,
  EyeOff,
  RotateCcw,
  Sparkles,
  Volume2
} from 'lucide-react';
import {
  CSAT_INSERTION_10,
  CSAT_ORDERING_10
} from '../data/csatKillerDrills.ts';
import type { SpacedReviewCard } from '../types/course.ts';
import type { CsatLogicClue } from '../types/v7.ts';
import { playCorrectChime, playSoftMiss, playTick } from '../utils/soundFx.ts';
import { speakEnglish } from '../utils/speech.ts';

interface CsatKillerTrainerProps {
  csatKillerSolvedIds: string[];
  onSolveKillerItem: (
    itemId: string,
    isCorrect: boolean,
    missedCard?: SpacedReviewCard,
    missedTag?: string
  ) => void;
}

const CLUE_LABELS: Record<CsatLogicClue['clueType'], { labelKo: string; cls: string }> = {
  connector: { labelKo: '연결사', cls: 'clue-connector' },
  reference: { labelKo: '지시어/대명사', cls: 'clue-reference' },
  article: { labelKo: '관사/재진술', cls: 'clue-article' },
  contrast: { labelKo: '역접/대조', cls: 'clue-contrast' }
};

const SLOT_MARKERS: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: '①',
  2: '②',
  3: '③',
  4: '④',
  5: '⑤'
};

function renderHighlightedClues(text: string, clues: CsatLogicClue[], showClues: boolean) {
  if (!showClues || clues.length === 0) return text;
  // Highlight first exact occurrence of each clue phrase cleanly
  const segments: Array<{ text: string; clueType?: CsatLogicClue['clueType'] }> = [{ text }];
  for (const clue of clues) {
    if (!clue.phrase.trim()) continue;
    const lowerPhrase = clue.phrase.toLowerCase();
    for (let i = 0; i < segments.length; i += 1) {
      const seg = segments[i];
      if (seg.clueType) continue;
      const idx = seg.text.toLowerCase().indexOf(lowerPhrase);
      if (idx >= 0) {
        const before = seg.text.slice(0, idx);
        const match = seg.text.slice(idx, idx + clue.phrase.length);
        const after = seg.text.slice(idx + clue.phrase.length);
        const replacement: typeof segments = [];
        if (before) replacement.push({ text: before });
        replacement.push({ text: match, clueType: clue.clueType });
        if (after) replacement.push({ text: after });
        segments.splice(i, 1, ...replacement);
        break;
      }
    }
  }

  return segments.map((seg, idx) =>
    seg.clueType ? (
      <mark key={idx} className={`csat-clue-mark ${CLUE_LABELS[seg.clueType].cls}`}>
        {seg.text}
      </mark>
    ) : (
      <span key={idx}>{seg.text}</span>
    )
  );
}

export function CsatKillerTrainer({
  csatKillerSolvedIds,
  onSolveKillerItem
}: CsatKillerTrainerProps) {
  const [mode, setMode] = useState<'ordering' | 'insertion'>('ordering');
  const [ordIdx, setOrdIdx] = useState(0);
  const [pickedOrder, setPickedOrder] = useState<Array<'A' | 'B' | 'C'>>([]);
  const [ordGraded, setOrdGraded] = useState<boolean | null>(null);
  const [showKo, setShowKo] = useState(false);

  const [insIdx, setInsIdx] = useState(0);
  const [pickedSlot, setPickedSlot] = useState<1 | 2 | 3 | 4 | 5 | null>(null);
  const [insGraded, setInsGraded] = useState<boolean | null>(null);

  const activeOrd = CSAT_ORDERING_10[Math.min(ordIdx, CSAT_ORDERING_10.length - 1)];
  const activeIns = CSAT_INSERTION_10[Math.min(insIdx, CSAT_INSERTION_10.length - 1)];

  const solvedOrdCount = CSAT_ORDERING_10.filter((i) => csatKillerSolvedIds.includes(i.id)).length;
  const solvedInsCount = CSAT_INSERTION_10.filter((i) => csatKillerSolvedIds.includes(i.id)).length;

  const handleToggleOrderCard = (letter: 'A' | 'B' | 'C') => {
    if (ordGraded !== null) return;
    playTick(760);
    setPickedOrder((prev) =>
      prev.includes(letter) ? prev.filter((x) => x !== letter) : [...prev, letter]
    );
  };

  const handleGradeOrdering = () => {
    if (pickedOrder.length !== 3) return;
    const isCorrect =
      pickedOrder[0] === activeOrd.correctOrder[0] &&
      pickedOrder[1] === activeOrd.correctOrder[1] &&
      pickedOrder[2] === activeOrd.correctOrder[2];
    setOrdGraded(isCorrect);
    if (isCorrect) {
      playCorrectChime();
      onSolveKillerItem(activeOrd.id, true);
    } else {
      playSoftMiss();
      const today = new Date().toISOString().slice(0, 10);
      onSolveKillerItem(
        activeOrd.id,
        false,
        {
          id: `csat-ord-${activeOrd.id}-${csatKillerSolvedIds.length}`,
          promptKo: `[수능 순서배열] ${activeOrd.topicKo} (${activeOrd.numberLabel})`,
          targetEn: `정답 순서: (${activeOrd.correctOrder.join(') - (')})`,
          noteKo: activeOrd.explanationKo,
          sourceLabel: '수능 킬러 순서배열',
          intervalDays: 1,
          dueDate: today,
          reviewCount: 0,
          mastered: false
        },
        '수능 글의 순서 (A-B-C)'
      );
    }
  };

  const handleGradeInsertion = () => {
    if (pickedSlot === null) return;
    const isCorrect = pickedSlot === activeIns.correctSlot;
    setInsGraded(isCorrect);
    if (isCorrect) {
      playCorrectChime();
      onSolveKillerItem(activeIns.id, true);
    } else {
      playSoftMiss();
      const today = new Date().toISOString().slice(0, 10);
      onSolveKillerItem(
        activeIns.id,
        false,
        {
          id: `csat-ins-${activeIns.id}-${csatKillerSolvedIds.length}`,
          promptKo: `[수능 문장삽입] ${activeIns.topicKo} (${activeIns.numberLabel})`,
          targetEn: `정답 위치: ${SLOT_MARKERS[activeIns.correctSlot]} · ${activeIns.targetSentenceEn}`,
          noteKo: activeIns.explanationKo,
          sourceLabel: '수능 킬러 문장삽입',
          intervalDays: 1,
          dueDate: today,
          reviewCount: 0,
          mastered: false
        },
        '수능 문장 삽입 (①-⑤)'
      );
    }
  };

  return (
    <section className="stack-lg" aria-label="수능 영어 1등급 킬러 순서배열 및 문장삽입 트레이너">
      <div className="surface-card">
        <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <span className="pill-tag pill-coral">수능 영어 1등급 결정타 · 36~39번 킬러 유형</span>
            <h2 style={{ fontSize: '1.36rem', marginTop: '8px' }}>
              수능 순서 배열 (A–B–C) 10문항 &amp; 문장 삽입 (①–⑤) 10문항 X-Ray
            </h2>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginTop: '4px' }}>
              지시어(This/Such)·연결사(However/Therefore)·관사(a→the) 논리 단서를 컬러 하이라이트로 꿰뚫어 1등급 킬러 문항의 정답률을 극대화하세요.
            </p>
          </div>
          <button
            type="button"
            className="btn-outline"
            style={{ padding: '7px 12px', fontSize: '0.82rem' }}
            onClick={() => setShowKo((v) => !v)}
          >
            {showKo ? <EyeOff size={14} /> : <Eye size={14} />}
            {showKo ? '우리말 해석 숨기기' : '우리말 해석 보기'}
          </button>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '14px' }}>
          <button
            id="csat-killer-mode-ordering"
            type="button"
            className={`transform-pill-btn ${mode === 'ordering' ? 'active' : ''}`}
            onClick={() => setMode('ordering')}
          >
            Part 1 · 글의 순서 배열 (A–B–C) ({solvedOrdCount}/10 정복)
          </button>
          <button
            id="csat-killer-mode-insertion"
            type="button"
            className={`transform-pill-btn ${mode === 'insertion' ? 'active' : ''}`}
            onClick={() => setMode('insertion')}
          >
            Part 2 · 주어진 문장 삽입 (①–⑤) ({solvedInsCount}/10 정복)
          </button>
        </div>
      </div>

      {/* =======================================================
          PART 1: CSAT 36-37 ORDERING (A)-(B)-(C)
         ======================================================= */}
      {mode === 'ordering' && activeOrd && (
        <div className="surface-card">
          <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span className="pill-tag pill-brand">{activeOrd.numberLabel}</span>
              <span className="pill-tag pill-amber">{activeOrd.difficulty}</span>
              <span className="pill-tag pill-subtle">{activeOrd.topicKo}</span>
            </div>
            <div className="omr-pills-row">
              {CSAT_ORDERING_10.map((it, i) => (
                <button
                  key={it.id}
                  type="button"
                  className={`omr-num-pill ${i === ordIdx ? 'marked' : csatKillerSolvedIds.includes(it.id) ? 'correct' : ''}`}
                  onClick={() => {
                    setOrdIdx(i);
                    setPickedOrder([]);
                    setOrdGraded(null);
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* GIVEN BOX */}
          <div className="csat-given-box">
            <div className="section-label-between" style={{ marginBottom: '6px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand)' }}>
                [주어진 글 — 이 글 다음에 이어질 순서를 아래 (A), (B), (C) 클릭으로 배열하세요]
              </span>
              <button
                type="button"
                className="inline-audio-btn"
                onClick={() => speakEnglish(activeOrd.givenBoxEn, 0.94)}
              >
                <Volume2 size={13} /> 듣기
              </button>
            </div>
            <p style={{ fontFamily: 'var(--font-en)', fontSize: '1.01rem', lineHeight: 1.65 }}>
              {renderHighlightedClues(activeOrd.givenBoxEn, activeOrd.clues, ordGraded !== null)}
            </p>
            {(showKo || ordGraded !== null) && (
              <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', marginTop: '6px' }}>
                {activeOrd.givenBoxKo}
              </p>
            )}
          </div>

          {/* LIVE SELECTED ORDER CHAIN */}
          <div className="csat-order-chain-bar">
            <span style={{ fontSize: '0.84rem', fontWeight: 750, color: 'var(--text-sub)' }}>
              내가 선택한 순서:
            </span>
            {[0, 1, 2].map((pos) => (
              <span key={pos} className={`csat-order-slot ${pickedOrder[pos] ? 'filled' : ''}`}>
                {pickedOrder[pos] ? `(${pickedOrder[pos]})` : `${pos + 1}번째`}
              </span>
            ))}
            {pickedOrder.length > 0 && ordGraded === null && (
              <button
                type="button"
                className="inline-audio-btn"
                onClick={() => setPickedOrder([])}
              >
                <RotateCcw size={13} /> 순서 비우기
              </button>
            )}
          </div>

          {/* CLICKABLE (A), (B), (C) PARAGRAPHS */}
          <div className="stack-sm" style={{ marginTop: '12px' }}>
            {(['A', 'B', 'C'] as const).map((letter) => {
              const para = activeOrd.paragraphs[letter];
              const orderRank = pickedOrder.indexOf(letter);
              return (
                <button
                  key={letter}
                  id={`csat-ord-card-${letter}`}
                  type="button"
                  className={`csat-para-card ${orderRank >= 0 ? 'selected' : ''}`}
                  onClick={() => handleToggleOrderCard(letter)}
                >
                  <div className="section-label-between" style={{ marginBottom: '6px' }}>
                    <strong style={{ fontFamily: 'var(--font-en)', color: 'var(--brand)', fontSize: '1.02rem' }}>
                      ({letter})
                    </strong>
                    {orderRank >= 0 && (
                      <span className="pill-tag pill-coral">{orderRank + 1}번째 선택됨</span>
                    )}
                  </div>
                  <p style={{ fontFamily: 'var(--font-en)', fontSize: '0.96rem', lineHeight: 1.62, textAlign: 'left' }}>
                    {renderHighlightedClues(para.textEn, activeOrd.clues, ordGraded !== null)}
                  </p>
                  {(showKo || ordGraded !== null) && (
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-sub)', marginTop: '6px', textAlign: 'left' }}>
                      {para.textKo}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '14px' }}>
            <button
              id="csat-ord-grade-btn"
              type="button"
              className="btn-solid-brand"
              disabled={pickedOrder.length !== 3 || ordGraded !== null}
              onClick={handleGradeOrdering}
            >
              <CheckCircle2 size={16} /> 순서 채점 &amp; 논리 단서 X-Ray 보기
            </button>
            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                setOrdIdx((ordIdx + 1) % CSAT_ORDERING_10.length);
                setPickedOrder([]);
                setOrdGraded(null);
              }}
            >
              다음 순서배열 문항 →
            </button>
          </div>

          {ordGraded !== null && (
            <div
              className={`feedback-banner ${ordGraded ? 'ok' : 'warn'}`}
              style={{ marginTop: '16px', flexDirection: 'column', alignItems: 'stretch', gap: '10px' }}
            >
              <strong>
                {ordGraded
                  ? `✓ 정답입니다! (${activeOrd.correctOrder.join(') – (')}) 논리 고리를 정확히 잡았습니다! (+40 XP)`
                  : `아쉽습니다! 정답 순서는 (${activeOrd.correctOrder.join(') – (')})입니다. 아래 핵심 단서를 확인하세요!`}
              </strong>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>💡 {activeOrd.explanationKo}</p>
              <div className="csat-clues-legend">
                {activeOrd.clues.map((c, idx) => (
                  <div key={idx} className="csat-clue-chip-row">
                    <span className={`csat-clue-mark ${CLUE_LABELS[c.clueType].cls}`}>
                      [{CLUE_LABELS[c.clueType].labelKo}] {c.phrase}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-body)' }}>
                      {c.explanationKo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* =======================================================
          PART 2: CSAT 38-39 SENTENCE INSERTION (①-⑤)
         ======================================================= */}
      {mode === 'insertion' && activeIns && (
        <div className="surface-card">
          <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span className="pill-tag pill-coral">{activeIns.numberLabel}</span>
              <span className="pill-tag pill-amber">{activeIns.difficulty}</span>
              <span className="pill-tag pill-subtle">{activeIns.topicKo}</span>
            </div>
            <div className="omr-pills-row">
              {CSAT_INSERTION_10.map((it, i) => (
                <button
                  key={it.id}
                  type="button"
                  className={`omr-num-pill ${i === insIdx ? 'marked' : csatKillerSolvedIds.includes(it.id) ? 'correct' : ''}`}
                  onClick={() => {
                    setInsIdx(i);
                    setPickedSlot(null);
                    setInsGraded(null);
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="csat-given-box">
            <div className="section-label-between" style={{ marginBottom: '6px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--coral)' }}>
                [주어진 문장 — 아래 본문의 ①~⑤ 중 논리적 단절이 생기는 자리에 클릭해 끼워 넣으세요]
              </span>
              <button
                type="button"
                className="inline-audio-btn"
                onClick={() => speakEnglish(activeIns.targetSentenceEn, 0.94)}
              >
                <Volume2 size={13} /> 듣기
              </button>
            </div>
            <p style={{ fontFamily: 'var(--font-en)', fontSize: '1.04rem', fontWeight: 750, lineHeight: 1.6 }}>
              {renderHighlightedClues(activeIns.targetSentenceEn, activeIns.clues, insGraded !== null)}
            </p>
            {(showKo || insGraded !== null) && (
              <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', marginTop: '6px' }}>
                {activeIns.targetSentenceKo}
              </p>
            )}
          </div>

          {/* INTERACTIVE PASSAGE WITH CLICKABLE ①..⑤ SLOTS */}
          <div className="csat-insertion-passage">
            {activeIns.segmentsEn.map((seg, idx) => {
              const slotNum = (idx + 1) as 1 | 2 | 3 | 4 | 5;
              const isPicked = pickedSlot === slotNum;
              const isTrueSlot = activeIns.correctSlot === slotNum;
              let slotCls = 'csat-slot-btn';
              if (insGraded !== null) {
                if (isTrueSlot) slotCls += ' true-slot';
                else if (isPicked && !isTrueSlot) slotCls += ' wrong-slot';
              } else if (isPicked) {
                slotCls += ' selected';
              }

              return (
                <span key={idx}>
                  <span style={{ fontFamily: 'var(--font-en)' }}>
                    {renderHighlightedClues(seg, activeIns.clues, insGraded !== null)}
                  </span>{' '}
                  {idx < 5 && (
                    <>
                      <button
                        id={`csat-ins-slot-${slotNum}`}
                        type="button"
                        className={slotCls}
                        onClick={() => {
                          if (insGraded !== null) return;
                          playTick(760);
                          setPickedSlot(slotNum);
                        }}
                      >
                        {SLOT_MARKERS[slotNum]}
                      </button>{' '}
                      {isPicked && insGraded === null && (
                        <span className="csat-inline-preview">
                          ↳ {activeIns.targetSentenceEn}
                        </span>
                      )}
                    </>
                  )}
                </span>
              );
            })}
          </div>

          {(showKo || insGraded !== null) && (
            <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', marginTop: '10px', lineHeight: 1.6 }}>
              <strong>전체 해석:</strong> {activeIns.passageKo}
            </p>
          )}

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '14px' }}>
            <button
              id="csat-ins-grade-btn"
              type="button"
              className="btn-solid-brand"
              disabled={pickedSlot === null || insGraded !== null}
              onClick={handleGradeInsertion}
            >
              <Sparkles size={15} /> 문장 삽입 채점 &amp; 단절 지점 분석
            </button>
            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                setInsIdx((insIdx + 1) % CSAT_INSERTION_10.length);
                setPickedSlot(null);
                setInsGraded(null);
              }}
            >
              다음 문장삽입 문항 →
            </button>
          </div>

          {insGraded !== null && (
            <div
              className={`feedback-banner ${insGraded ? 'ok' : 'warn'}`}
              style={{ marginTop: '16px', flexDirection: 'column', alignItems: 'stretch', gap: '10px' }}
            >
              <strong>
                {insGraded
                  ? `✓ 완벽합니다! ${SLOT_MARKERS[activeIns.correctSlot]}번 단절 지점을 정확히 찾아냈습니다! (+40 XP)`
                  : `아쉽습니다! 정답 위치는 ${SLOT_MARKERS[activeIns.correctSlot]}번입니다. 아래 논리 단절 분석을 확인하세요!`}
              </strong>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>💡 {activeIns.explanationKo}</p>
              <div className="csat-clues-legend">
                {activeIns.clues.map((c, idx) => (
                  <div key={idx} className="csat-clue-chip-row">
                    <span className={`csat-clue-mark ${CLUE_LABELS[c.clueType].cls}`}>
                      [{CLUE_LABELS[c.clueType].labelKo}] {c.phrase}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-body)' }}>
                      {c.explanationKo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
