import { useEffect, useMemo, useRef, useState } from 'react';
import {
  CheckCircle2,
  Mic,
  RotateCcw,
  Trophy,
  Volume2,
  VolumeX,
  X,
  XCircle
} from 'lucide-react';
import type {
  DayLessonModule,
  SpacedReviewCard,
  SprintDrillItem
} from '../types/course.ts';
import {
  isSpeechRecognitionSupported,
  speakEnglish,
  startSpeechRecognition,
  stopSpeaking
} from '../utils/speech.ts';

interface SprintFocusOverlayProps {
  module: DayLessonModule;
  silentMode: boolean;
  onToggleSilentMode: () => void;
  onCompleteSprint: (spokenCount: number, missedCards: SpacedReviewCard[]) => void;
  onClose: () => void;
}

function normalizeText(str: string): string {
  return str
    .toLowerCase()
    .replace(/[.,!?;:'"’”-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function deterministicShuffle<T>(arr: T[], seedStr: string): T[] {
  const copy = [...arr];
  let seed = 0;
  for (let i = 0; i < seedStr.length; i += 1) {
    seed = (seed * 31 + seedStr.charCodeAt(i)) >>> 0;
  }
  for (let i = copy.length - 1; i > 0; i -= 1) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const j = seed % (i + 1);
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
  }
  return copy;
}

export function SprintFocusOverlay({
  module,
  silentMode,
  onToggleSilentMode,
  onCompleteSprint,
  onClose
}: SprintFocusOverlayProps) {
  const [queue, setQueue] = useState<SprintDrillItem[]>(() => [...module.sprintDrills]);
  const [currentIdx, setCurrentIdx] = useState(0);

  // User answer states
  const [pickedChunkIndices, setPickedChunkIndices] = useState<number[]>([]);
  const [blankInput, setBlankInput] = useState('');
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [micNote, setMicNote] = useState<string | null>(null);

  // Evaluation state
  const [checkedState, setCheckedState] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [latencySec, setLatencySec] = useState<number | null>(null);
  const [firstTryCorrectCount, setFirstTryCorrectCount] = useState(0);
  const [missedAccumulator, setMissedAccumulator] = useState<SpacedReviewCard[]>([]);
  const [finished, setFinished] = useState(false);

  const startTimeRef = useRef<number>(0);
  const stopMicRef = useRef<(() => void) | null>(null);

  const currentDrill = queue[currentIdx];
  const isRetryRound = currentIdx >= module.sprintDrills.length;

  useEffect(() => {
    startTimeRef.current = Date.now();
    return () => {
      stopMicRef.current?.();
      stopSpeaking();
    };
  }, [currentIdx]);

  const shuffledChunks = useMemo(() => {
    if (!currentDrill || currentDrill.drillType !== 'chunk-build' || !currentDrill.chunks) {
      return [];
    }
    return deterministicShuffle(currentDrill.chunks, currentDrill.id);
  }, [currentDrill]);

  const konglishOptions = useMemo(() => {
    if (!currentDrill || currentDrill.drillType !== 'konglish-fix' || !currentDrill.wrongKonglishOption) {
      return [];
    }
    return deterministicShuffle(
      [currentDrill.targetEn, currentDrill.wrongKonglishOption],
      currentDrill.id
    );
  }, [currentDrill]);

  const handleToggleMic = () => {
    if (isListening) {
      stopMicRef.current?.();
      setIsListening(false);
      return;
    }
    setMicNote(null);
    setIsListening(true);
    stopMicRef.current = startSpeechRecognition(
      (spoken) => {
        setVoiceTranscript(spoken);
        setIsListening(false);
      },
      (errMsg) => {
        setMicNote(errMsg);
        setIsListening(false);
      },
      () => setIsListening(false)
    );
  };

  const evaluateCurrentDrill = () => {
    if (!currentDrill || checkedState !== 'idle') return;

    const elapsed = Number(
      (Math.max(0.4, (Date.now() - startTimeRef.current) / 1000)).toFixed(1)
    );
    setLatencySec(elapsed);

    let isCorrect = false;

    if (voiceTranscript.trim()) {
      isCorrect = normalizeText(voiceTranscript) === normalizeText(currentDrill.targetEn);
    } else if (currentDrill.drillType === 'chunk-build') {
      const assembled = pickedChunkIndices.map((idx) => shuffledChunks[idx]).join(' ');
      isCorrect = normalizeText(assembled) === normalizeText(currentDrill.targetEn);
    } else if (currentDrill.drillType === 'active-blank' && currentDrill.blankData) {
      isCorrect =
        normalizeText(blankInput) === normalizeText(currentDrill.blankData.answer) ||
        normalizeText(blankInput) === normalizeText(currentDrill.targetEn);
    } else if (currentDrill.drillType === 'konglish-fix') {
      isCorrect = selectedChoice === currentDrill.targetEn;
    }

    if (isCorrect) {
      setCheckedState('correct');
      if (!isRetryRound) {
        setFirstTryCorrectCount((c) => c + 1);
      }
      if (!silentMode) {
        speakEnglish(currentDrill.targetEn, 0.98);
      }
    } else {
      setCheckedState('wrong');
      // Push to retry queue so learner finishes 100% mastered
      setQueue((prev) => [...prev, currentDrill]);
      if (!isRetryRound) {
        setMissedAccumulator((prev) => [
          ...prev,
          {
            id: `rev-sprint-${currentDrill.id}-${Date.now()}`,
            promptKo: currentDrill.promptKo,
            targetEn: currentDrill.targetEn,
            noteKo: currentDrill.explanationKo,
            sourceLabel: `Day 0${module.dayNumber} 스프린트 오답`,
            intervalDays: 1,
            mastered: false
          }
        ]);
      }
      if (!silentMode) {
        speakEnglish(currentDrill.targetEn, 0.94);
      }
    }
  };

  const handleNext = () => {
    stopMicRef.current?.();
    stopSpeaking();
    if (currentIdx + 1 >= queue.length) {
      setFinished(true);
    } else {
      setPickedChunkIndices([]);
      setBlankInput('');
      setSelectedChoice(null);
      setVoiceTranscript('');
      setMicNote(null);
      setCheckedState('idle');
      setLatencySec(null);
      setCurrentIdx((idx) => idx + 1);
    }
  };

  const canCheck = useMemo(() => {
    if (!currentDrill) return false;
    if (voiceTranscript.trim().length > 0) return true;
    if (currentDrill.drillType === 'chunk-build') {
      return pickedChunkIndices.length === shuffledChunks.length;
    }
    if (currentDrill.drillType === 'active-blank') {
      return blankInput.trim().length > 0;
    }
    if (currentDrill.drillType === 'konglish-fix') {
      return selectedChoice !== null;
    }
    return false;
  }, [currentDrill, voiceTranscript, pickedChunkIndices, shuffledChunks.length, blankInput, selectedChoice]);

  const progressPct = Math.min(100, Math.round(((currentIdx + (finished ? 1 : 0)) / queue.length) * 100));

  if (finished) {
    return (
      <div className="focus-player-overlay" role="dialog" aria-modal="true">
        <div className="focus-stage-container">
          <div className="focus-card" style={{ textAlign: 'center' }}>
            <div className="trophy-circle">
              <Trophy size={36} />
            </div>
            <span className="pill-tag pill-brand" style={{ marginTop: '14px' }}>
              {module.dayBadge} 스프린트 완주
            </span>
            <h1 style={{ fontSize: '1.85rem', marginTop: '12px' }}>
              오늘의 핵심 10문장 어순 반사신경 훈련 완료!
            </h1>
            <p style={{ color: 'var(--text-sub)', marginTop: '10px' }}>
              헷갈렸던 문장까지 오답 루프로 끝까지 완주하셨습니다. 틀렸던 문장은 에빙하우스 오답 복습함(D+1)에 자동 등록되었습니다.
            </p>

            <div className="completion-metrics-grid">
              <div className="metric-box">
                <span className="metric-label">첫 시도 정답률</span>
                <strong>{Math.round((firstTryCorrectCount / module.sprintDrills.length) * 100)}%</strong>
              </div>
              <div className="metric-box">
                <span className="metric-label">완료한 훈련 문장</span>
                <strong>{queue.length}문장</strong>
              </div>
              <div className="metric-box">
                <span className="metric-label">복습함 추가</span>
                <strong>{missedAccumulator.length}개</strong>
              </div>
            </div>

            <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button
                id="finish-sprint-save-btn"
                type="button"
                className="btn-solid-brand"
                onClick={() => onCompleteSprint(module.sprintDrills.length, missedAccumulator)}
              >
                학습 기록 저장 후 돌아가기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="focus-player-overlay" role="dialog" aria-modal="true" aria-label="집중 어순 스프린트">
      <div className="focus-topbar">
        <button
          id="exit-sprint-overlay-btn"
          type="button"
          className="icon-close-btn"
          onClick={onClose}
          aria-label="스프린트 종료"
        >
          <X size={22} />
        </button>

        <div className="focus-progress-rail" aria-label="진행률">
          <div className="focus-progress-bar" style={{ width: `${progressPct}%` }} />
        </div>

        <span style={{ fontWeight: 750, fontSize: '0.9rem', color: 'var(--text-sub)', whiteSpace: 'nowrap' }}>
          {currentIdx + 1} / {queue.length}
        </span>

        <button
          id="sprint-toggle-silent-btn"
          type="button"
          className="settings-trigger-btn"
          onClick={onToggleSilentMode}
        >
          {silentMode ? <VolumeX size={15} /> : <Volume2 size={15} />}
          <span>{silentMode ? '묵음 모드' : '사운드 ON'}</span>
        </button>
      </div>

      <div className="focus-stage-container">
        <div className="focus-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span className={`pill-tag ${isRetryRound ? 'pill-coral' : 'pill-brand'}`}>
              {isRetryRound
                ? '오답 완전 정복 재도전'
                : currentDrill.drillType === 'chunk-build'
                  ? '어순 청크 조립'
                  : currentDrill.drillType === 'active-blank'
                    ? '핵심 구동사·어법 빈칸'
                    : '콩글리시 vs 원어민 판별'}
            </span>

            {!silentMode && isSpeechRecognitionSupported() && checkedState === 'idle' && (
              <button
                id="sprint-voice-mic-btn"
                type="button"
                className={`inline-audio-btn ${isListening ? 'listening' : ''}`}
                onClick={handleToggleMic}
              >
                <Mic size={15} />
                <span>{isListening ? '듣고 있어요... (클릭 시 중지)' : '마이크로 통문장 말하기'}</span>
              </button>
            )}
          </div>

          <h1 className="sprint-prompt-ko">{currentDrill.promptKo}</h1>
          <p style={{ color: 'var(--text-sub)', fontSize: '0.94rem', marginBottom: '22px' }}>
            힌트: {currentDrill.promptEnHint}
          </p>

          {voiceTranscript && (
            <div className="voice-recognized-box">
              <span>인식된 내 발화: <strong>“{voiceTranscript}”</strong></span>
              {checkedState === 'idle' && (
                <button
                  id="clear-voice-transcript-btn"
                  type="button"
                  className="text-action-btn"
                  onClick={() => setVoiceTranscript('')}
                >
                  지우기
                </button>
              )}
            </div>
          )}

          {micNote && (
            <p style={{ color: 'var(--coral)', fontSize: '0.86rem', marginBottom: '12px' }}>{micNote}</p>
          )}

          {/* DRILL TYPE 1: CHUNK BUILD */}
          {currentDrill.drillType === 'chunk-build' && (
            <div>
              <div className="chunk-slot-area" aria-label="내가 조립한 영어 어순">
                {pickedChunkIndices.length === 0 ? (
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                    아래 영어 의미 덩어리(청크)를 원어민 어순대로 눌러 문장을 완성하세요.
                  </span>
                ) : (
                  pickedChunkIndices.map((chunkIdx, pos) => (
                    <button
                      key={`picked-${chunkIdx}-${pos}`}
                      id={`picked-chunk-${pos}`}
                      type="button"
                      className="word-chip picked"
                      disabled={checkedState !== 'idle'}
                      onClick={() =>
                        setPickedChunkIndices((prev) => prev.filter((_, i) => i !== pos))
                      }
                    >
                      {shuffledChunks[chunkIdx]}
                    </button>
                  ))
                )}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                {shuffledChunks.map((chunk, idx) => {
                  const isUsed = pickedChunkIndices.includes(idx);
                  return (
                    <button
                      key={`pool-${idx}-${chunk}`}
                      id={`pool-chunk-${idx}`}
                      type="button"
                      className={`word-chip ${isUsed ? 'ghosted' : ''}`}
                      disabled={isUsed || checkedState !== 'idle'}
                      onClick={() => setPickedChunkIndices((prev) => [...prev, idx])}
                    >
                      {chunk}
                    </button>
                  );
                })}
              </div>

              {pickedChunkIndices.length > 0 && checkedState === 'idle' && (
                <button
                  id="reset-chunks-btn"
                  type="button"
                  className="text-action-btn"
                  onClick={() => setPickedChunkIndices([])}
                >
                  <RotateCcw size={14} /> 다시 배열하기
                </button>
              )}
            </div>
          )}

          {/* DRILL TYPE 2: ACTIVE BLANK */}
          {currentDrill.drillType === 'active-blank' && currentDrill.blankData && (
            <div className="blank-sentence-card">
              <p className="blank-sentence-preview">
                <span>{currentDrill.blankData.before} </span>
                <span className="blank-inline-highlight">
                  {blankInput.trim() || '________'}
                </span>
                <span> {currentDrill.blankData.after}</span>
              </p>

              <label htmlFor="sprint-blank-input" className="field-label" style={{ marginTop: '16px' }}>
                빈칸 정답 입력 (철자 힌트: {currentDrill.blankData.firstLetterHint})
              </label>
              <input
                id="sprint-blank-input"
                type="text"
                className="input-clean"
                value={blankInput}
                disabled={checkedState !== 'idle'}
                onChange={(e) => setBlankInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && canCheck && checkedState === 'idle') {
                    evaluateCurrentDrill();
                  }
                }}
                placeholder="빈칸에 들어갈 영어 표현을 입력하세요"
                autoFocus
              />
            </div>
          )}

          {/* DRILL TYPE 3: KONGLISH FIX */}
          {currentDrill.drillType === 'konglish-fix' && (
            <div className="choice-stack">
              {konglishOptions.map((optionText, idx) => (
                <button
                  key={optionText}
                  id={`konglish-opt-${idx}`}
                  type="button"
                  disabled={checkedState !== 'idle'}
                  className={`option-choice-btn large ${selectedChoice === optionText ? 'selected' : ''}`}
                  onClick={() => setSelectedChoice(optionText)}
                >
                  {optionText}
                </button>
              ))}
            </div>
          )}

          {/* EVALUATION FEEDBACK BANNER */}
          {checkedState !== 'idle' && (
            <div
              className={`feedback-banner ${checkedState === 'correct' ? 'ok' : 'wrong'}`}
              style={{ marginTop: '24px' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', width: '100%' }}>
                {checkedState === 'correct' ? (
                  <CheckCircle2 size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                ) : (
                  <XCircle size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                )}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <strong style={{ fontSize: '1.05rem' }}>
                      {checkedState === 'correct'
                        ? `정확합니다! (${latencySec}초 만에 완성)`
                        : '아깝습니다! 원어민 어순을 소리 내어 확인해보세요 (마지막에 재도전합니다)'}
                    </strong>
                    <button
                      id="sprint-replay-answer-audio-btn"
                      type="button"
                      className="inline-audio-btn"
                      onClick={() => speakEnglish(currentDrill.targetEn, 0.95)}
                    >
                      <Volume2 size={15} /> 발음 다시 듣기
                    </button>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-en)',
                      fontWeight: 750,
                      fontSize: '1.1rem',
                      marginTop: '8px'
                    }}
                  >
                    {currentDrill.targetEn}
                  </p>
                  <p style={{ marginTop: '6px', fontSize: '0.92rem' }}>
                    {currentDrill.explanationKo}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'flex-end' }}>
            {checkedState === 'idle' ? (
              <button
                id="sprint-check-answer-btn"
                type="button"
                className="btn-solid-brand"
                style={{ minWidth: '180px' }}
                disabled={!canCheck}
                onClick={evaluateCurrentDrill}
              >
                정답 확인하기
              </button>
            ) : (
              <button
                id="sprint-next-drill-btn"
                type="button"
                className={checkedState === 'correct' ? 'btn-solid-brand' : 'btn-solid-coral'}
                style={{ minWidth: '180px' }}
                onClick={handleNext}
              >
                다음 문장으로 →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
