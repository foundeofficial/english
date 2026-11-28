import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Volume2,
  X
} from 'lucide-react';
import type { MasteryStage } from '../types/academy.ts';
import type { AppPersistState, SpacedReviewCard } from '../types/course.ts';
import { buildAdaptiveDailySession } from '../utils/dailySessionEngine.ts';
import { playCorrectChime, playFanfare, playSoftMiss } from '../utils/soundFx.ts';
import { speakEnglish } from '../utils/speech.ts';
import {
  evaluateSpeechOrDictation,
  isEquivalentEnglishAnswer
} from '../utils/speechScoring.ts';
import { VoiceRecorderCompare } from './VoiceRecorderCompare.tsx';

interface DailyGuidedSessionOverlayProps {
  state: AppPersistState;
  stage: MasteryStage;
  sessionIndex: number;
  learnerName: string;
  onCompleteSession: (scorePct: number, earnedXp: number, missedCards: SpacedReviewCard[]) => void;
  onClose: () => void;
}

export function DailyGuidedSessionOverlay({
  state,
  stage,
  sessionIndex,
  learnerName,
  onCompleteSession,
  onClose
}: DailyGuidedSessionOverlayProps) {
  // Freeze initial sessionIndex so incrementing guidedSessionsCompleted on Phase 5 keeps this session stable
  const [lockedIndex] = useState(sessionIndex);
  const plan = useMemo(
    () => buildAdaptiveDailySession(state, stage, lockedIndex),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [stage, lockedIndex]
  );

  const [phase, setPhase] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [outputInput, setOutputInput] = useState('');
  const [outputChecked, setOutputChecked] = useState<null | {
    correct: boolean;
    accuracyPct: number;
    tokens: Array<{ word: string; status: 'matched' | 'close' | 'missed' }>;
  }>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizResult, setQuizResult] = useState<null | {
    correctCount: number;
    total: number;
    scorePct: number;
  }>(null);

  const handleCheckOutput = () => {
    if (!outputInput.trim()) return;
    const exact = isEquivalentEnglishAnswer(
      outputInput,
      plan.outputTask.targetEn,
      plan.outputTask.acceptableAlts
    );
    const diff = evaluateSpeechOrDictation(outputInput, plan.outputTask.targetEn, 92);
    const correct = exact || diff.accuracyPct >= 95;
    setOutputChecked({
      correct,
      accuracyPct: correct ? 100 : diff.accuracyPct,
      tokens: diff.tokens
    });
    if (correct) {
      playCorrectChime();
      speakEnglish(plan.outputTask.targetEn, 0.94);
    } else {
      playSoftMiss();
    }
  };

  const handleFinishSession = () => {
    const today = new Date().toISOString().slice(0, 10);
    let correctCount = 0;
    const missed: SpacedReviewCard[] = [];

    plan.finalQuizzes.forEach((q, idx) => {
      if (quizAnswers[idx] === q.answer) {
        correctCount += 1;
      } else {
        missed.push({
          id: `guided-miss-${stage}-${lockedIndex}-${idx}`,
          promptKo: `[자동수업 #${plan.sessionNumber}] ${q.qKo}`,
          targetEn: q.answer,
          noteKo: q.noteKo,
          sourceLabel: `15분 자동수업 #${plan.sessionNumber}`,
          intervalDays: 1,
          dueDate: today,
          reviewCount: 0,
          mastered: false
        });
      }
    });

    if (outputChecked && !outputChecked.correct) {
      missed.push({
        id: `guided-out-${stage}-${lockedIndex}`,
        promptKo: `[자동수업 영작] ${plan.outputTask.promptKo}`,
        targetEn: plan.outputTask.targetEn,
        noteKo: plan.outputTask.explanationKo,
        sourceLabel: `15분 자동수업 #${plan.sessionNumber}`,
        intervalDays: 1,
        dueDate: today,
        reviewCount: 0,
        mastered: false
      });
    }

    const total = plan.finalQuizzes.length;
    const scorePct = Math.round((correctCount / total) * 100);
    setQuizResult({ correctCount, total, scorePct });
    playFanfare();
    onCompleteSession(scorePct, 120, missed);
    setPhase(5);
  };

  const progressPct = phase === 5 ? 100 : phase * 25;

  return (
    <div
      className="modal-backdrop guided-overlay-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="오늘의 15분 자동 완전학습 세션"
    >
      <div className="modal-panel modal-panel-wide guided-session-panel">
        <div className="section-label-between" style={{ gap: '8px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span className="pill-tag pill-brand">{plan.stageTitleKo}</span>
            <span className="pill-tag pill-subtle">Session #{plan.sessionNumber} · 매일 새로운 커리큘럼</span>
            <span style={{ fontSize: '0.84rem', fontWeight: 750, color: 'var(--text-sub)' }}>
              {phase <= 4 ? `단계 ${phase} / 4` : '완주 완료!'}
            </span>
          </div>
          <button
            id="close-guided-session-btn"
            type="button"
            className="icon-close-btn"
            onClick={onClose}
            aria-label="세션 닫기"
          >
            <X size={18} />
          </button>
        </div>

        <p style={{ fontSize: '0.84rem', color: 'var(--brand)', fontWeight: 700, marginBottom: '8px' }}>
          오늘의 테마: {plan.sessionThemeKo}
        </p>

        <div className="skill-bar-track" style={{ height: '7px', marginBottom: '20px' }}>
          <div className="skill-bar-fill" style={{ width: `${progressPct}%` }} />
        </div>

        {/* PHASE 1: ADAPTIVE WARMUP + SRS REVIEW SPOTLIGHT */}
        {phase === 1 && (
          <div className="stack-md">
            <div>
              <span className="pill-tag pill-amber">Phase 1 · 2분 귀트임 워밍업 &amp; 오답 복습</span>
              <h2 style={{ fontSize: '1.34rem', marginTop: '8px' }}>
                오늘의 핵심 소리·문장 3개를 귀로 먼저 열어보세요
              </h2>
            </div>

            {plan.srsReviewSpotlight.length > 0 && (
              <div className="srs-spotlight-box">
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--coral)' }}>
                  🧠 망각방지 SM-2 우선 복습 ({plan.srsReviewSpotlight.length}카드 자동 소환)
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
                  {plan.srsReviewSpotlight.map((card, i) => (
                    <div key={i} className="section-label-between" style={{ gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.84rem', color: 'var(--text-body)' }}>
                        <strong>{card.promptKo}</strong> →{' '}
                        <span style={{ fontFamily: 'var(--font-en)', fontWeight: 750, color: 'var(--brand)' }}>
                          {card.targetEn}
                        </span>
                      </span>
                      <button
                        type="button"
                        className="inline-audio-btn"
                        onClick={() => speakEnglish(card.targetEn, 0.94)}
                      >
                        <Volume2 size={13} /> 듣기
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="stack-sm">
              {plan.warmupItems.map((item, idx) => (
                <div key={idx} className="foundation-sentence-row">
                  <span className="foundation-sentence-num">0{idx + 1}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'var(--font-en)', fontSize: '1.1rem', fontWeight: 800 }}>
                      {item.en}
                    </p>
                    <p style={{ fontSize: '0.88rem', color: 'var(--brand)', fontWeight: 700, marginTop: '2px' }}>
                      {item.ko}
                    </p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-sub)', marginTop: '2px' }}>
                      💡 {item.tipKo}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn-outline"
                    style={{ padding: '7px 12px', fontSize: '0.82rem' }}
                    onClick={() => speakEnglish(item.en, 0.92)}
                  >
                    <Volume2 size={14} /> 듣기
                  </button>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
              <button
                id="guided-next-phase-2"
                type="button"
                className="btn-solid-brand"
                onClick={() => setPhase(2)}
              >
                Phase 2 · 핵심 원리 배우기 <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* PHASE 2: CORE CONCEPT */}
        {phase === 2 && (
          <div className="stack-md">
            <div>
              <span className="pill-tag pill-coral">{plan.coreConcept.badge}</span>
              <h2 style={{ fontSize: '1.34rem', marginTop: '8px' }}>
                {plan.coreConcept.headlineKo}
              </h2>
            </div>

            <div className="grammar-formula-pill" style={{ fontSize: '1.05rem', textAlign: 'center' }}>
              {plan.coreConcept.formulaEn}
            </div>

            <div className="trap-vs-insight-grid">
              <div className="trap-card-box">
                <strong style={{ color: 'var(--danger)' }}>❌ 흔한 실수 / 한국식 함정</strong>
                <p style={{ marginTop: '6px', fontSize: '0.9rem' }}>
                  {plan.coreConcept.wrongVsRight.wrong}
                </p>
              </div>
              <div className="insight-card-box">
                <strong style={{ color: 'var(--ok)' }}>⭕ 원어민·1등급 정답 공식</strong>
                <p style={{ marginTop: '6px', fontSize: '0.9rem' }}>
                  {plan.coreConcept.wrongVsRight.right}
                </p>
              </div>
            </div>

            <div className="coach-callout-box">
              <strong>💡 핵심 직관 1줄 정리:</strong> {plan.coreConcept.intuitionKo}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
              <button type="button" className="btn-outline" onClick={() => setPhase(1)}>
                ← 이전
              </button>
              <button
                id="guided-next-phase-3"
                type="button"
                className="btn-solid-brand"
                onClick={() => setPhase(3)}
              >
                Phase 3 · 직접 영작 &amp; 발음 비교 <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* PHASE 3: HANDS-ON OUTPUT + WORD DIFF + LIVE VOICE A/B COMPARE */}
        {phase === 3 && (
          <div className="stack-md">
            <div>
              <span className="pill-tag pill-brand">Phase 3 · 직접 문장 출력 &amp; 내 발음 A/B 비교</span>
              <h2 style={{ fontSize: '1.26rem', marginTop: '8px' }}>
                {plan.outputTask.promptKo}
              </h2>
            </div>

            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 750, color: 'var(--text-sub)' }}>
                제시어 블록 (클릭하면 입력창에 자동 추가됩니다):
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                {plan.outputTask.hintChips.map((chip, idx) => (
                  <button
                    key={`${chip}-${idx}`}
                    type="button"
                    className="day-switch-chip"
                    style={{ fontFamily: 'var(--font-en)' }}
                    onClick={() =>
                      setOutputInput((prev) => (prev.trim() ? `${prev.trim()} ${chip}` : chip))
                    }
                  >
                    + {chip}
                  </button>
                ))}
              </div>
            </div>

            <input
              id="guided-output-input"
              type="text"
              className="input-clean"
              style={{ width: '100%', fontFamily: 'var(--font-en)', fontSize: '1.04rem', padding: '12px 14px' }}
              value={outputInput}
              onChange={(e) => setOutputInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCheckOutput();
              }}
              placeholder="영어 문장을 완성해 입력해 보세요..."
            />

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                id="guided-check-output-btn"
                type="button"
                className="btn-solid-coral"
                disabled={!outputInput.trim()}
                onClick={handleCheckOutput}
              >
                <Sparkles size={15} /> 내 문장 즉시 채점
              </button>
              <button
                type="button"
                className="btn-outline"
                onClick={() => {
                  setOutputInput('');
                  setOutputChecked(null);
                }}
              >
                <RotateCcw size={14} /> 초기화
              </button>
            </div>

            {outputChecked && (
              <div className={`feedback-banner ${outputChecked.correct ? 'ok' : 'warn'}`} style={{ flexDirection: 'column', alignItems: 'stretch', gap: '8px' }}>
                <strong>
                  {outputChecked.correct
                    ? '✓ 완벽합니다! 어순과 핵심 표현을 정확히 출력했습니다!'
                    : `일치율 ${outputChecked.accuracyPct}% — 빨간 단어를 확인하고 다시 말해 보세요!`}
                </strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {outputChecked.tokens.map((tk, i) => (
                    <span key={`${tk.word}-${i}`} className={`diff-word-pill ${tk.status}`}>
                      {tk.word}
                    </span>
                  ))}
                </div>
                <p style={{ fontFamily: 'var(--font-en)', fontWeight: 750 }}>
                  모범 문장: {plan.outputTask.targetEn}
                </p>
                <p style={{ fontSize: '0.86rem' }}>💡 {plan.outputTask.explanationKo}</p>
              </div>
            )}

            <VoiceRecorderCompare targetEnglish={plan.outputTask.targetEn} compact />

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
              <button type="button" className="btn-outline" onClick={() => setPhase(2)}>
                ← 이전
              </button>
              <button
                id="guided-next-phase-4"
                type="button"
                className="btn-solid-brand"
                onClick={() => setPhase(4)}
              >
                Phase 4 · 3문항 최종 확인 <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* PHASE 4: DYNAMIC 3-QUESTION MASTERY CHECK */}
        {phase === 4 && (
          <div className="stack-md">
            <div>
              <span className="pill-tag pill-coral">Phase 4 · 3문항 최종 확인</span>
              <h2 style={{ fontSize: '1.32rem', marginTop: '8px' }}>
                오늘의 Session #{plan.sessionNumber} 핵심을 3문항으로 완벽하게 굳히세요!
              </h2>
            </div>

            {plan.finalQuizzes.map((q, qIdx) => (
              <div key={qIdx} className="quiz-card-clean">
                <p style={{ fontWeight: 750, marginBottom: '6px' }}>{q.qKo}</p>
                {q.stimulusEn && (
                  <p style={{ fontFamily: 'var(--font-en)', fontSize: '0.94rem', color: 'var(--brand)', fontWeight: 650, marginBottom: '10px' }}>
                    “{q.stimulusEn}”
                  </p>
                )}
                <div className="choice-stack">
                  {q.options.map((opt, oIdx) => (
                    <button
                      key={opt}
                      id={`guided-q-${qIdx}-${oIdx}`}
                      type="button"
                      className={`option-choice-btn ${quizAnswers[qIdx] === opt ? 'selected' : ''}`}
                      onClick={() =>
                        setQuizAnswers((prev) => ({ ...prev, [qIdx]: opt }))
                      }
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
              <button type="button" className="btn-outline" onClick={() => setPhase(3)}>
                ← 이전
              </button>
              <button
                id="guided-complete-session-btn"
                type="button"
                className="btn-solid-brand"
                disabled={Object.keys(quizAnswers).length < plan.finalQuizzes.length}
                onClick={handleFinishSession}
              >
                <CheckCircle2 size={16} /> Session #{plan.sessionNumber} 완료 &amp; +120 XP 받기!
              </button>
            </div>
          </div>
        )}

        {/* PHASE 5: COMPLETION CELEBRATION */}
        {phase === 5 && quizResult && (
          <div style={{ textAlign: 'center', padding: '16px 8px' }}>
            <Award size={46} style={{ color: 'var(--brand)', marginBottom: '10px' }} />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span className="pill-tag pill-coral">+120 XP 획득 · Session #{plan.sessionNumber} 완주!</span>
              <span className="pill-tag pill-brand">
                확인 퀴즈 {quizResult.correctCount} / {quizResult.total} ({quizResult.scorePct}점)
              </span>
            </div>
            <h2 style={{ fontSize: '1.58rem', marginTop: '12px' }}>
              {learnerName} 님, 오늘의 15분 자동 수업을 완벽하게 끝냈습니다!
            </h2>
            <p style={{ color: 'var(--text-sub)', marginTop: '8px', lineHeight: 1.55 }}>
              다음 번에 다시 열면 <strong>Session #{plan.sessionNumber + 1}의 완전히 새로운 커리큘럼</strong>이 자동으로 이어집니다.
              틀린 문항은 SM-2 오답 복습함에 즉시 등록되었습니다!
            </p>
            <button
              id="guided-done-close-btn"
              type="button"
              className="btn-solid-brand"
              style={{ marginTop: '20px', padding: '12px 28px' }}
              onClick={onClose}
            >
              로드맵으로 돌아가기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
