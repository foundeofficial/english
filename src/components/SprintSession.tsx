import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  HelpCircle,
  Mic,
  MicOff,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX
} from 'lucide-react';
import type { CurriculumUnit, ReviewItem, SprintQuestion } from '../types/learning';
import {
  isSpeechRecognitionSupported,
  speakEnglish,
  startSpeechRecognition
} from '../utils/speech';

interface SprintSessionProps {
  units: CurriculumUnit[];
  unit: CurriculumUnit;
  silentMode: boolean;
  onSelectUnit: (unit: CurriculumUnit) => void;
  onToggleSilentMode: () => void;
  onCompleteSprint: (
    unitId: string,
    minutesSpent: number,
    outputCount: number,
    wrongItems: Omit<ReviewItem, 'id' | 'stage' | 'dueToday'>[]
  ) => void;
  onSwitchToDeepClass: (unit: CurriculumUnit) => void;
  onBackHome: () => void;
}

export const SprintSession: React.FC<SprintSessionProps> = ({
  units,
  unit,
  silentMode,
  onSelectUnit,
  onToggleSilentMode,
  onCompleteSprint,
  onSwitchToDeepClass,
  onBackHome
}) => {
  const [phase, setPhase] = useState<'nuance-intro' | 'drill' | 'summary'>('nuance-intro');
  const [queue, setQueue] = useState<SprintQuestion[]>(unit.sprintQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChunkIndices, setSelectedChunkIndices] = useState<number[]>([]);
  const [blankInput, setBlankInput] = useState('');
  const [spokenInput, setSpokenInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [micMessage, setMicMessage] = useState('');
  const [feedback, setFeedback] = useState<{
    isCorrect: boolean;
    userAnswer: string;
  } | null>(null);

  const [elapsedSec, setElapsedSec] = useState(0);
  const [latencies, setLatencies] = useState<number[]>([]);
  const [mistakesToReview, setMistakesToReview] = useState<
    Omit<ReviewItem, 'id' | 'stage' | 'dueToday'>[]
  >([]);
  const questionStartRef = useRef<number>(Date.now());
  const stopRecRef = useRef<(() => void) | null>(null);

  // Reset when unit changes
  useEffect(() => {
    setPhase('nuance-intro');
    setQueue(unit.sprintQuestions);
    setCurrentIndex(0);
    setSelectedChunkIndices([]);
    setBlankInput('');
    setSpokenInput('');
    setFeedback(null);
    setElapsedSec(0);
    setLatencies([]);
    setMistakesToReview([]);
  }, [unit]);

  useEffect(() => {
    if (phase === 'summary') return;
    const timer = window.setInterval(() => {
      setElapsedSec((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  const currentQuestion = queue[currentIndex];

  // Deterministic shuffled chunk indices per question
  const shuffledPool = useMemo(() => {
    if (!currentQuestion?.chunks) return [];
    return currentQuestion.chunks
      .map((text, originalIdx) => ({
        text,
        originalIdx,
        sortKey: (text.length * 13 + originalIdx * 7) % 29
      }))
      .sort((a, b) => a.sortKey - b.sortKey);
  }, [currentQuestion]);

  const resetQuestionInputs = () => {
    setSelectedChunkIndices([]);
    setBlankInput('');
    setSpokenInput('');
    setShowHint(false);
    setMicMessage('');
    setFeedback(null);
    questionStartRef.current = Date.now();
  };

  const effectiveType =
    currentQuestion?.type === 'speak-prompt' && silentMode
      ? 'chunk-order'
      : currentQuestion?.type;

  const normalize = (str: string) =>
    str
      .toLowerCase()
      .replace(/[.,!?'"’]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const handleCheckAnswer = () => {
    if (!currentQuestion || feedback) return;

    const responseSec = Math.max(
      0.8,
      Number(((Date.now() - questionStartRef.current) / 1000).toFixed(1))
    );
    setLatencies((prev) => [...prev, responseSec]);

    let userAnswer = '';
    let isCorrect = false;

    if (effectiveType === 'chunk-order' && currentQuestion.chunks) {
      userAnswer = selectedChunkIndices
        .map((poolIdx) => shuffledPool[poolIdx]?.text ?? '')
        .join(' ');
      isCorrect = normalize(userAnswer) === normalize(currentQuestion.targetEnglish);
    } else if (effectiveType === 'fill-blank' && currentQuestion.blankSentence) {
      userAnswer = blankInput.trim();
      isCorrect =
        normalize(userAnswer) === normalize(currentQuestion.blankSentence.answer);
    } else if (effectiveType === 'speak-prompt') {
      userAnswer = spokenInput.trim();
      const normUser = normalize(userAnswer);
      const normTarget = normalize(currentQuestion.targetEnglish);
      const keywordMatch =
        currentQuestion.acceptableKeywords?.every((kw) =>
          normUser.includes(normalize(kw))
        ) ?? false;
      isCorrect = normUser === normTarget || keywordMatch;
    }

    setFeedback({ isCorrect, userAnswer: userAnswer || '(미입력)' });

    if (!silentMode) {
      speakEnglish(currentQuestion.targetEnglish, 0.96);
    }

    if (!isCorrect) {
      // Queue again at end of sprint (Duolingo-style mistake clear loop)
      setQueue((prev) => [...prev, currentQuestion]);
      setMistakesToReview((prev) => {
        if (prev.some((m) => m.targetEnglish === currentQuestion.targetEnglish)) {
          return prev;
        }
        return [
          ...prev,
          {
            koreanPrompt: currentQuestion.koreanPrompt,
            targetEnglish: currentQuestion.targetEnglish,
            explanationKo: currentQuestion.nuanceExplanation,
            sourceMode: 'sprint'
          }
        ];
      });
    }
  };

  const handleNextStep = () => {
    if (currentIndex + 1 < queue.length) {
      setCurrentIndex((prev) => prev + 1);
      resetQuestionInputs();
    } else {
      const minutes = Math.max(5, Math.round(elapsedSec / 60) || unit.sprintMinutes);
      onCompleteSprint(unit.id, minutes, queue.length, mistakesToReview);
      setPhase('summary');
    }
  };

  const handleToggleMic = () => {
    if (isListening) {
      stopRecRef.current?.();
      setIsListening(false);
      return;
    }

    setMicMessage('');
    setIsListening(true);
    const stopFn = startSpeechRecognition(
      (transcript) => {
        setSpokenInput(transcript);
        setIsListening(false);
      },
      (errMsg) => {
        setMicMessage(errMsg);
        setIsListening(false);
      },
      () => setIsListening(false)
    );

    if (!stopFn) {
      setIsListening(false);
    } else {
      stopRecRef.current = stopFn;
    }
  };

  const progressPercent =
    phase === 'nuance-intro'
      ? 12
      : phase === 'summary'
      ? 100
      : Math.min(96, Math.round(((currentIndex + (feedback ? 1 : 0.3)) / queue.length) * 100));

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const avgLatency =
    latencies.length > 0
      ? (latencies.reduce((acc, v) => acc + v, 0) / latencies.length).toFixed(1)
      : '1.8';

  return (
    <div className="sprint-wrapper">
      <div className="sprint-topbar">
        <button id="sprint-back-btn" type="button" className="btn btn-ghost btn-sm" onClick={onBackHome}>
          <ArrowLeft size={16} /> 홈으로
        </button>

        <select
          id="sprint-unit-selector"
          aria-label="스프린트 학습 유닛 변경"
          value={unit.id}
          onChange={(e) => {
            const found = units.find((u) => u.id === e.target.value);
            if (found) onSelectUnit(found);
          }}
          style={{
            padding: '7px 12px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            background: 'var(--bg-surface)',
            fontSize: '0.84rem',
            fontWeight: 600,
            maxWidth: '280px'
          }}
        >
          {units.map((u) => (
            <option key={u.id} value={u.id}>
              [{u.level}] {u.title.slice(0, 26)}...
            </option>
          ))}
        </select>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="mono-duration">⏱ {formatTimer(elapsedSec)}</span>
          <button
            id="sprint-toggle-silent-btn"
            type="button"
            className={`mode-switch-pill ${silentMode ? 'silent-active' : ''}`}
            onClick={onToggleSilentMode}
          >
            {silentMode ? <VolumeX size={15} /> : <Volume2 size={15} />}
            <span>{silentMode ? '지하철 묵음' : '스피킹 모드'}</span>
          </button>
        </div>
      </div>

      <div className="progress-track" role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      {/* PHASE 1: 1-Minute Nuance & Konglish Intro Card */}
      {phase === 'nuance-intro' && (
        <section className="sprint-stage-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
            <span className="tag tag-warm">Step 1 · 1분 핵심 뉘앙스 스캔</span>
            <span className="mono-duration">목표 시간 {unit.sprintMinutes}분</span>
          </div>

          <h1 style={{ fontSize: '1.45rem', marginTop: '14px' }}>{unit.nuanceCard.expression}</h1>
          <p style={{ fontSize: '1.02rem', fontWeight: 650, color: 'var(--accent-primary)', marginTop: '4px' }}>
            의미: {unit.nuanceCard.koreanMeaning}
          </p>

          <div
            style={{
              marginTop: '18px',
              padding: '14px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--status-error-soft)',
              fontSize: '0.9rem'
            }}
          >
            <strong>한국인 단골 직역 함정</strong>
            <p style={{ marginTop: '4px', color: 'var(--ink-secondary)' }}>{unit.nuanceCard.konglishTrap}</p>
          </div>

          <div
            style={{
              marginTop: '12px',
              padding: '14px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-canvas)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.91rem'
            }}
          >
            <strong>원어민 사고 포인트</strong>
            <p style={{ marginTop: '4px', color: 'var(--ink-secondary)' }}>{unit.nuanceCard.nativeNuance}</p>
          </div>

          <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', padding: '12px 14px', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div>
                <span className="tag tag-neutral" style={{ marginBottom: '4px' }}>Casual 일상</span>
                <p style={{ fontFamily: 'var(--font-serif-en)', fontSize: '1.03rem', fontWeight: 600 }}>
                  {unit.nuanceCard.casualExample}
                </p>
              </div>
              {!silentMode && (
                <button
                  id="sprint-nuance-audio-casual"
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => speakEnglish(unit.nuanceCard.casualExample, 0.95)}
                >
                  <Volume2 size={15} /> 듣기
                </button>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', padding: '12px 14px', background: 'var(--accent-primary-soft)', borderRadius: 'var(--radius-md)' }}>
              <div>
                <span className="tag tag-forest" style={{ marginBottom: '4px' }}>Polite 비즈니스</span>
                <p style={{ fontFamily: 'var(--font-serif-en)', fontSize: '1.03rem', fontWeight: 600 }}>
                  {unit.nuanceCard.politeExample}
                </p>
              </div>
              {!silentMode && (
                <button
                  id="sprint-nuance-audio-polite"
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => speakEnglish(unit.nuanceCard.politeExample, 0.95)}
                >
                  <Volume2 size={15} /> 듣기
                </button>
              )}
            </div>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              id="sprint-start-drill-btn"
              type="button"
              className="btn btn-warm btn-lg"
              onClick={() => {
                setPhase('drill');
                resetQuestionInputs();
              }}
            >
              <span>1초 순발력 드릴 시작 ({queue.length}문항)</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      )}

      {/* PHASE 2: Interactive Drill (Chunk Order / Fill Blank / Speak or Silent Switch) */}
      {phase === 'drill' && currentQuestion && (
        <section className="sprint-stage-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
            <span className="tag tag-forest">
              {currentIndex >= unit.sprintQuestions.length
                ? '복습 클리어 라운드 (틀린 문장 재도전)'
                : `문항 ${currentIndex + 1} / ${queue.length}`}
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--ink-muted)' }}>
              {effectiveType === 'chunk-order' && '원어민 어순대로 블록을 터치하세요'}
              {effectiveType === 'fill-blank' && '핵심 어휘·전치사 빈칸을 완성하세요'}
              {effectiveType === 'speak-prompt' && '소리 내어 말하거나 영어로 직접 입력해보세요'}
            </span>
          </div>

          <h1 className="prompt-korean">{currentQuestion.koreanPrompt}</h1>

          <div className="chunk-guide-row" aria-label="원어민 어순 사고 가이드">
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-primary)', alignSelf: 'center' }}>
              영어 어순 스위치:
            </span>
            {currentQuestion.koreanChunksGuide.map((guide, idx) => (
              <span key={idx} className="chunk-guide-item">
                {idx + 1}. {guide}
              </span>
            ))}
          </div>

          {/* Question Type 1: Chunk Ordering */}
          {effectiveType === 'chunk-order' && (
            <>
              <div className="answer-dropzone" aria-label="내가 조립한 영어 문장">
                {selectedChunkIndices.length === 0 ? (
                  <span style={{ color: 'var(--ink-muted)', fontSize: '0.9rem' }}>
                    아래 영어 청크 블록을 원어민 사고 순서대로 클릭하세요...
                  </span>
                ) : (
                  selectedChunkIndices.map((poolIdx, orderIdx) => (
                    <button
                      key={`${poolIdx}-${orderIdx}`}
                      id={`selected-chunk-${orderIdx}`}
                      type="button"
                      className="chunk-token selected"
                      disabled={Boolean(feedback)}
                      onClick={() =>
                        setSelectedChunkIndices((prev) =>
                          prev.filter((_, i) => i !== orderIdx)
                        )
                      }
                    >
                      {shuffledPool[poolIdx]?.text}
                    </button>
                  ))
                )}
              </div>

              <div className="chunk-bank">
                {shuffledPool.map((item, poolIdx) => {
                  const isUsed = selectedChunkIndices.includes(poolIdx);
                  return (
                    <button
                      key={item.originalIdx}
                      id={`pool-chunk-${poolIdx}`}
                      type="button"
                      className={`chunk-token ${isUsed ? 'used' : ''}`}
                      disabled={isUsed || Boolean(feedback)}
                      onClick={() =>
                        setSelectedChunkIndices((prev) => [...prev, poolIdx])
                      }
                    >
                      {item.text}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* Question Type 2: Malhaeboka-style Active Recall Blank */}
          {effectiveType === 'fill-blank' && currentQuestion.blankSentence && (
            <div style={{ margin: '20px 0' }}>
              <div
                style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-canvas)',
                  border: '1px solid var(--border-default)',
                  fontSize: '1.12rem',
                  fontFamily: 'var(--font-en-display)',
                  fontWeight: 600,
                  lineHeight: 1.8
                }}
              >
                <span>{currentQuestion.blankSentence.before} </span>
                <input
                  id="sprint-blank-input"
                  type="text"
                  className="inline-blank-input"
                  value={blankInput}
                  disabled={Boolean(feedback)}
                  onChange={(e) => setBlankInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && blankInput.trim()) handleCheckAnswer();
                  }}
                  placeholder="빈칸 입력"
                  autoComplete="off"
                />
                <span> {currentQuestion.blankSentence.after}</span>
              </div>

              <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  id="sprint-hint-btn"
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => setShowHint((prev) => !prev)}
                >
                  <HelpCircle size={15} /> 힌트 보기
                </button>
                {showHint && (
                  <span style={{ fontSize: '0.86rem', color: 'var(--accent-amber)', fontWeight: 600 }}>
                    {currentQuestion.blankSentence.hint}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Question Type 3: Speak-style Prompt */}
          {effectiveType === 'speak-prompt' && (
            <div style={{ margin: '18px 0' }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <button
                  id="sprint-mic-btn"
                  type="button"
                  className={`btn ${isListening ? 'btn-warm' : 'btn-secondary'}`}
                  disabled={Boolean(feedback)}
                  onClick={handleToggleMic}
                >
                  {isListening ? <MicOff size={16} /> : <Mic size={16} />}
                  <span>
                    {isListening
                      ? '듣고 있습니다... (클릭 시 종료)'
                      : isSpeechRecognitionSupported()
                      ? '마이크로 영어 문장 말하기'
                      : '음성 입력 (키보드 입력 겸용)'}
                  </span>
                </button>
                <button
                  id="sprint-switch-silent-inline"
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={onToggleSilentMode}
                >
                  말하기 힘든 곳인가요? 청크 터치 모드로 전환
                </button>
              </div>

              {micMessage && (
                <p style={{ fontSize: '0.83rem', color: 'var(--accent-amber)', marginBottom: '8px' }}>
                  {micMessage}
                </p>
              )}

              <input
                id="sprint-speak-text-input"
                type="text"
                className="text-input"
                value={spokenInput}
                disabled={Boolean(feedback)}
                onChange={(e) => setSpokenInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && spokenInput.trim()) handleCheckAnswer();
                }}
                placeholder="마이크로 발화하거나 영어 문장을 직접 타이핑해보세요..."
              />
            </div>
          )}

          {/* Action / Feedback Footer */}
          {!feedback ? (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
              <button
                id="sprint-reset-input-btn"
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={resetQuestionInputs}
              >
                <RotateCcw size={14} /> 다시 조합
              </button>
              <button
                id="sprint-submit-answer-btn"
                type="button"
                className="btn btn-primary btn-lg"
                disabled={
                  (effectiveType === 'chunk-order' && selectedChunkIndices.length === 0) ||
                  (effectiveType === 'fill-blank' && !blankInput.trim()) ||
                  (effectiveType === 'speak-prompt' && !spokenInput.trim())
                }
                onClick={handleCheckAnswer}
              >
                정답 확인하기
              </button>
            </div>
          ) : (
            <div className={`feedback-banner ${feedback.isCorrect ? 'correct' : 'wrong'}`}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
                <strong style={{ fontSize: '1.03rem' }}>
                  {feedback.isCorrect
                    ? '정확합니다! 원어민 어순 감각이 살아있어요.'
                    : '아쉽습니다! 이 문장은 잠시 후 한 번 더 복습하고 망각곡선 금고(D+1)에 넣을게요.'}
                </strong>
                <button
                  id="sprint-replay-native-audio"
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => speakEnglish(currentQuestion.targetEnglish, 0.94)}
                >
                  <Volume2 size={14} /> 원어민 발음 듣기
                </button>
              </div>

              <p style={{ fontFamily: 'var(--font-en-display)', fontSize: '1.06rem', fontWeight: 700 }}>
                정답: {currentQuestion.targetEnglish}
              </p>

              <div className="nuance-tip-box">
                <strong>한국어 뉘앙스 해설:</strong> {currentQuestion.nuanceExplanation}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px' }}>
                <button
                  id="sprint-next-question-btn"
                  type="button"
                  className="btn btn-primary"
                  onClick={handleNextStep}
                >
                  <span>{currentIndex + 1 < queue.length ? '다음 문항으로' : '스프린트 결과 보기'}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* PHASE 3: Sprint Completion Summary */}
      {phase === 'summary' && (
        <section className="sprint-stage-card" style={{ textAlign: 'center' }}>
          <span className="tag tag-warm" style={{ marginBottom: '10px' }}>
            <Sparkles size={14} /> 오늘의 데일리 스프린트 완주!
          </span>
          <h1 style={{ fontSize: '1.65rem' }}>연속 학습 스트릭과 영어 어순 회로를 지켰습니다</h1>
          <p style={{ color: 'var(--ink-secondary)', marginTop: '8px', maxWidth: '520px', marginInline: 'auto' }}>
            짧지만 밀도 높은 5~10분 인출 훈련을 마쳤습니다. 여유가 있으시다면 같은 주제의{' '}
            <strong>{unit.deepClassMinutes}분 정규 원리 인강 &amp; 1:1 과외실</strong>로 넘어가 문장을 더 깊게 확장해보세요.
          </p>

          <div className="stats-strip" style={{ marginTop: '24px', textAlign: 'left' }}>
            <div className="stat-tile">
              <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>완료한 아웃풋</span>
              <div className="stat-value">{queue.length}문장</div>
            </div>
            <div className="stat-tile">
              <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>평균 어순 반응속도</span>
              <div className="stat-value">{avgLatency}초</div>
            </div>
            <div className="stat-tile">
              <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>복습장 자동 등록</span>
              <div className="stat-value">{mistakesToReview.length}건</div>
            </div>
            <div className="stat-tile">
              <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>학습 모드</span>
              <div className="stat-value" style={{ fontSize: '1.15rem', marginTop: '10px' }}>
                {silentMode ? '지하철 묵음' : '스피킹 발화'}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '12px' }}>
            <button
              id="summary-back-home-btn"
              type="button"
              className="btn btn-secondary"
              onClick={onBackHome}
            >
              <CheckCircle2 size={16} /> 투데이 홈으로 돌아가기
            </button>
            <button
              id="summary-go-deep-btn"
              type="button"
              className="btn btn-primary"
              onClick={() => onSwitchToDeepClass(unit)}
            >
              <GraduationCap size={16} />
              <span>이어서 {unit.deepClassMinutes}분 인강·과외 심화 수강하기</span>
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
