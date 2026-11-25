import { useEffect, useRef, useState } from 'react';
import {
  BookmarkPlus,
  CheckCircle2,
  Ear,
  Mic,
  Play,
  RotateCcw,
  Square,
  Volume2
} from 'lucide-react';
import type { AccentPreference, DialogueTurn, SpacedReviewCard } from '../types/course.ts';
import {
  ACCENT_LABELS,
  isAudioRecordingSupported,
  isSpeechRecognitionSupported,
  speakEnglish,
  startSpeechRecognition,
  startVoiceRecorder,
  stopSpeaking
} from '../utils/speech.ts';
import {
  evaluateSpeechOrDictation,
  type SpeechEvaluationResult
} from '../utils/speechScoring.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface ShadowingDictationLabProps {
  dayNumber: number;
  mode: 'shadowing' | 'dictation';
  dialogue: DialogueTurn[];
  defaultRate: number;
  accent: AccentPreference;
  silentMode: boolean;
  onRecordShadowingScore: (accuracyPct: number, spokenDelta: number) => void;
  onRecordDictationScore: (accuracyPct: number) => void;
  onAddReviewCard: (card: SpacedReviewCard) => void;
  onOpenDictionary: (word?: string) => void;
}

export function ShadowingDictationLab({
  dayNumber,
  mode,
  dialogue,
  defaultRate,
  accent,
  silentMode,
  onRecordShadowingScore,
  onRecordDictationScore,
  onAddReviewCard,
  onOpenDictionary
}: ShadowingDictationLabProps) {
  const [idx, setIdx] = useState(0);
  const [rate, setRate] = useState(defaultRate);
  const [selectedAccent, setSelectedAccent] = useState<AccentPreference>(accent);

  // Shadowing states
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [micError, setMicError] = useState<string | null>(null);
  const [shadowResult, setShadowResult] = useState<SpeechEvaluationResult | null>(null);
  const [shadowScores, setShadowScores] = useState<Record<string, number>>({});

  // Dictation states
  const [dictationInput, setDictationInput] = useState('');
  const [showHintWords, setShowHintWords] = useState(false);
  const [dictResult, setDictResult] = useState<SpeechEvaluationResult | null>(null);
  const [dictScores, setDictScores] = useState<Record<string, number>>({});
  const [reviewToast, setReviewToast] = useState<string | null>(null);

  const stopRecogRef = useRef<(() => void) | null>(null);
  const stopAudioRecRef = useRef<(() => void) | null>(null);
  const selfAudioRef = useRef<HTMLAudioElement | null>(null);
  const prevUrlRef = useRef<string | null>(null);

  const currentTurn = dialogue[idx] ?? dialogue[0];
  const dayPad = String(dayNumber).padStart(2, '0');

  useEffect(() => {
    return () => {
      stopSpeaking();
      stopRecogRef.current?.();
      stopAudioRecRef.current?.();
      if (prevUrlRef.current) {
        URL.revokeObjectURL(prevUrlRef.current);
      }
    };
  }, []);

  const resetLineState = (nextIndex: number) => {
    stopSpeaking();
    stopRecogRef.current?.();
    stopAudioRecRef.current?.();
    setIsRecording(false);
    setIdx(nextIndex);
    setTranscript('');
    setMicError(null);
    setShadowResult(null);
    setDictationInput('');
    setShowHintWords(false);
    setDictResult(null);
    setReviewToast(null);
    if (prevUrlRef.current) {
      URL.revokeObjectURL(prevUrlRef.current);
      prevUrlRef.current = null;
    }
    setRecordedAudioUrl(null);
  };

  const handlePlayNative = (overrideRate?: number) => {
    if (!currentTurn) return;
    speakEnglish(
      currentTurn.english,
      overrideRate ?? rate,
      undefined,
      currentTurn.voicePitch,
      selectedAccent
    );
  };

  const handleStartOrStopShadowing = async () => {
    if (isRecording) {
      stopRecogRef.current?.();
      stopAudioRecRef.current?.();
      setIsRecording(false);
      return;
    }

    stopSpeaking();
    setMicError(null);
    setShadowResult(null);
    setTranscript('');
    if (prevUrlRef.current) {
      URL.revokeObjectURL(prevUrlRef.current);
      prevUrlRef.current = null;
      setRecordedAudioUrl(null);
    }

    setIsRecording(true);

    // 1) Start MediaRecorder if available so user can compare their own voice playback
    if (isAudioRecordingSupported()) {
      const stopAudio = await startVoiceRecorder(
        (blobUrl) => {
          prevUrlRef.current = blobUrl;
          setRecordedAudioUrl(blobUrl);
        },
        () => {
          // Graceful fallback if audio recorder unavailable
        }
      );
      stopAudioRecRef.current = stopAudio;
    }

    // 2) Start SpeechRecognition for live word-level scoring
    if (isSpeechRecognitionSupported()) {
      stopRecogRef.current = startSpeechRecognition(
        (spoken) => {
          setTranscript(spoken);
          stopAudioRecRef.current?.();
          setIsRecording(false);
          const evalRes = evaluateSpeechOrDictation(spoken, currentTurn.english, 80);
          setShadowResult(evalRes);
          setShadowScores((prev) => ({
            ...prev,
            [currentTurn.id]: Math.max(prev[currentTurn.id] ?? 0, evalRes.accuracyPct)
          }));
          onRecordShadowingScore(evalRes.accuracyPct, 1);
        },
        (err) => {
          setMicError(err);
          stopAudioRecRef.current?.();
          setIsRecording(false);
        },
        () => {
          stopAudioRecRef.current?.();
          setIsRecording(false);
        },
        selectedAccent
      );
    } else if (!isAudioRecordingSupported()) {
      setIsRecording(false);
      setMicError('현재 브라우저에서는 마이크 기능을 지원하지 않습니다. 아래 텍스트 입력으로 발음/어순 검증을 체험해 보세요.');
    }
  };

  const handlePlayMyVoice = () => {
    if (!recordedAudioUrl) return;
    if (!selfAudioRef.current) {
      selfAudioRef.current = new Audio();
    }
    selfAudioRef.current.src = recordedAudioUrl;
    void selfAudioRef.current.play().catch(() => {});
  };

  const handleEvaluateManualShadow = () => {
    if (!transcript.trim()) return;
    const evalRes = evaluateSpeechOrDictation(transcript, currentTurn.english, 80);
    setShadowResult(evalRes);
    setShadowScores((prev) => ({
      ...prev,
      [currentTurn.id]: Math.max(prev[currentTurn.id] ?? 0, evalRes.accuracyPct)
    }));
    onRecordShadowingScore(evalRes.accuracyPct, 1);
  };

  const handleGradeDictation = () => {
    if (!dictationInput.trim()) return;
    const evalRes = evaluateSpeechOrDictation(dictationInput, currentTurn.english, 85);
    setDictResult(evalRes);
    const nextScores = {
      ...dictScores,
      [currentTurn.id]: Math.max(dictScores[currentTurn.id] ?? 0, evalRes.accuracyPct)
    };
    setDictScores(nextScores);
    const avg = Math.round(
      Object.values(nextScores).reduce((a, b) => a + b, 0) / Object.keys(nextScores).length
    );
    onRecordDictationScore(avg);
  };

  const handleAddMissedToReview = (evalRes: SpeechEvaluationResult) => {
    onAddReviewCard({
      id: `rev-${mode}-${currentTurn.id}-${Date.now()}`,
      promptKo: `[${mode === 'shadowing' ? '쉐도잉' : '딕테이션'} 약점 문장] ${currentTurn.korean}`,
      targetEn: currentTurn.english,
      noteKo: `${evalRes.coachingTipKo} (${currentTurn.noteKo})`,
      sourceLabel: `Day ${dayPad} ${mode === 'shadowing' ? '쉐도잉' : '딕테이션'}`,
      intervalDays: 1,
      mastered: false
    });
    setReviewToast('이 문장을 에빙하우스 오답 복습함(D+1)에 저장했습니다!');
    window.setTimeout(() => setReviewToast(null), 2400);
  };

  const wordHints = currentTurn.english
    .split(/\s+/)
    .map((w) => (w.length <= 2 ? w : `${w[0]}${'_'.repeat(Math.min(4, w.length - 1))}`))
    .join(' ');

  const activeResult = mode === 'shadowing' ? shadowResult : dictResult;

  return (
    <section className="lecture-two-col" aria-label={mode === 'shadowing' ? '실시간 쉐도잉 발음 스튜디오' : '실전 리스닝 딕테이션 랩'}>
      {/* LEFT STAGE */}
      <div className="surface-card lab-main-card">
        <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span className={`pill-tag ${mode === 'shadowing' ? 'pill-coral' : 'pill-brand'}`}>
              {mode === 'shadowing' ? '🎙️ 실시간 쉐도잉 & 발음 채점' : '🎧 실전 블라인드 받아쓰기 (딕테이션)'}
            </span>
            <span className="pill-tag pill-subtle">
              문장 {idx + 1} / {dialogue.length} · {currentTurn.speaker}
            </span>
          </div>

          {/* ACCENT + SPEED CONTROLS */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
            {(['en-US', 'en-GB', 'en-AU'] as AccentPreference[]).map((ac) => (
              <button
                key={ac}
                type="button"
                className={`day-switch-chip ${selectedAccent === ac ? 'active' : ''}`}
                style={{ padding: '4px 9px', fontSize: '0.76rem' }}
                onClick={() => setSelectedAccent(ac)}
              >
                {ACCENT_LABELS[ac]}
              </button>
            ))}
          </div>
        </div>

        {/* AUDIO PLAYBACK DECK */}
        <div className="lab-audio-deck">
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              id={`lab-play-native-${mode}`}
              type="button"
              className="btn-solid-brand"
              style={{ padding: '10px 18px' }}
              onClick={() => handlePlayNative()}
              disabled={silentMode}
            >
              <Volume2 size={17} />
              <span>원어민 음성 듣기 ({rate}x)</span>
            </button>

            <button
              type="button"
              className="btn-outline"
              style={{ padding: '10px 14px', fontSize: '0.86rem' }}
              onClick={() => handlePlayNative(0.75)}
              disabled={silentMode}
            >
              <Ear size={15} /> 느리게 (0.75x)
            </button>

            <div style={{ display: 'flex', gap: '4px' }}>
              {[0.85, 1.0, 1.15].map((spd) => (
                <button
                  key={spd}
                  type="button"
                  className={`day-switch-chip ${Math.abs(rate - spd) < 0.04 ? 'active' : ''}`}
                  style={{ padding: '6px 10px', fontSize: '0.8rem' }}
                  onClick={() => setRate(spd)}
                >
                  {spd}x
                </button>
              ))}
            </div>
          </div>

          {silentMode && (
            <p style={{ fontSize: '0.82rem', color: 'var(--amber)', marginTop: '8px', fontWeight: 650 }}>
              묵음 모드가 켜져 있습니다. 상단 설정에서 묵음 모드를 끄면 원어민 음성을 바로 들을 수 있습니다.
            </p>
          )}
        </div>

        {/* MODE A: SHADOWING STUDIO */}
        {mode === 'shadowing' && (
          <div style={{ marginTop: '18px' }}>
            <div className="lab-target-sentence-box">
              <span style={{ fontSize: '0.78rem', fontWeight: 750, color: 'var(--brand)' }}>
                따라 말할 목표 문장 (단어 클릭 시 사전 검색)
              </span>
              <p className="lab-target-en">
                <InteractiveText text={currentTurn.slashBroken} onLookupWord={onOpenDictionary} />
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-sub)', marginTop: '6px' }}>
                {currentTurn.korean}
              </p>
            </div>

            <div className="lab-record-actions">
              <button
                id="shadowing-mic-toggle-btn"
                type="button"
                className={isRecording ? 'btn-solid-coral pulse-recording' : 'btn-solid-coral'}
                onClick={() => void handleStartOrStopShadowing()}
              >
                {isRecording ? <Square size={16} /> : <Mic size={17} />}
                <span>{isRecording ? '녹음 종료 & 발음 채점하기' : '마이크로 따라 말하기 시작'}</span>
              </button>

              {recordedAudioUrl && (
                <button
                  id="shadowing-play-mine-btn"
                  type="button"
                  className="btn-outline"
                  onClick={handlePlayMyVoice}
                >
                  <Play size={15} /> 내 녹음 다시 듣기 (원어민과 비교)
                </button>
              )}
            </div>

            {micError && (
              <p style={{ fontSize: '0.84rem', color: 'var(--danger)', marginTop: '10px', fontWeight: 600 }}>
                {micError}
              </p>
            )}

            <div style={{ marginTop: '14px' }}>
              <label htmlFor="shadowing-transcript-input" className="field-label" style={{ fontSize: '0.82rem' }}>
                음성 인식 결과 (마이크가 없다면 직접 발화 내용을 입력해 채점 체험 가능)
              </label>
              <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                <input
                  id="shadowing-transcript-input"
                  type="text"
                  className="input-clean"
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                  placeholder="마이크로 말하면 자동 입력됩니다..."
                />
                <button
                  id="shadowing-manual-eval-btn"
                  type="button"
                  className="btn-outline"
                  style={{ whiteSpace: 'nowrap' }}
                  disabled={!transcript.trim()}
                  onClick={handleEvaluateManualShadow}
                >
                  정확도 채점
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODE B: BLIND DICTATION LAB */}
        {mode === 'dictation' && (
          <div style={{ marginTop: '18px' }}>
            <div className="lab-target-sentence-box">
              <div className="section-label-between" style={{ marginBottom: '6px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 750, color: 'var(--brand)' }}>
                  우리말 의미 힌트 (원어민 음성을 듣고 그대로 영어로 받아적으세요)
                </span>
                <button
                  id="dictation-toggle-hint-btn"
                  type="button"
                  className="text-action-btn"
                  onClick={() => setShowHintWords((v) => !v)}
                >
                  {showHintWords ? '첫 글자 힌트 숨기기' : '첫 글자 힌트 보기'}
                </button>
              </div>
              <p style={{ fontWeight: 750, fontSize: '1.05rem', color: 'var(--text-strong)' }}>
                “{currentTurn.korean}”
              </p>
              {showHintWords && (
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--brand)', marginTop: '8px' }}>
                  힌트: {wordHints}
                </p>
              )}
            </div>

            <div style={{ marginTop: '14px' }}>
              <label htmlFor="dictation-answer-input" className="field-label">
                들리는 영어 문장을 그대로 받아쓰세요 (축약형 I&apos;ll ↔ I will 모두 정답 인정)
              </label>
              <textarea
                id="dictation-answer-input"
                rows={3}
                className="input-clean"
                value={dictationInput}
                onChange={(e) => setDictationInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleGradeDictation();
                  }
                }}
                placeholder="원어민 음성을 듣고 들리는 대로 입력하세요 (Enter로 즉시 채점)"
              />

              <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                <button
                  id="dictation-grade-btn"
                  type="button"
                  className="btn-solid-brand"
                  disabled={!dictationInput.trim()}
                  onClick={handleGradeDictation}
                >
                  <CheckCircle2 size={16} /> 단어별 정밀 채점하기
                </button>
                <button
                  id="dictation-reset-btn"
                  type="button"
                  className="btn-outline"
                  onClick={() => {
                    setDictationInput('');
                    setDictResult(null);
                  }}
                >
                  <RotateCcw size={15} /> 다시 듣기 &amp; 쓰기
                </button>
              </div>
            </div>
          </div>
        )}

        {/* WORD-BY-WORD DIFF & PRONUNCIATION / LISTENING DIAGNOSIS */}
        {activeResult && (
          <div className={`lab-result-panel ${activeResult.passed ? 'ok' : 'warn'}`}>
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <span className={`pill-tag ${activeResult.passed ? 'pill-brand' : 'pill-coral'}`}>
                  {mode === 'shadowing' ? '쉐도잉 발음 정확도' : '딕테이션 청취 정확도'}:{' '}
                  {activeResult.accuracyPct}% ({activeResult.matchedCount}/{activeResult.totalTargetWords}단어)
                </span>
              </div>
              <button
                id="lab-save-weak-card-btn"
                type="button"
                className="inline-audio-btn"
                onClick={() => handleAddMissedToReview(activeResult)}
              >
                <BookmarkPlus size={14} /> 복습함(D+1)에 저장
              </button>
            </div>

            {/* WORD DIFF TOKENS */}
            <div className="word-diff-cloud" aria-label="단어별 정밀 비교 결과">
              {activeResult.tokens.map((tok, tIdx) => (
                <button
                  key={`${tIdx}-${tok.word}`}
                  type="button"
                  className={`diff-token ${tok.status}`}
                  title={
                    tok.status === 'matched'
                      ? '정확히 일치함 (클릭 시 사전)'
                      : tok.status === 'close'
                        ? `유사 철자/발음 (입력: ${tok.userSaid})`
                        : '누락된 단어 — 클릭해서 발음·뜻 확인'
                  }
                  onClick={() => onOpenDictionary(tok.word)}
                >
                  {tok.word}
                </button>
              ))}
            </div>

            <div className="diff-legend-row">
              <span><i className="legend-dot matched" /> 정확 일치</span>
              <span><i className="legend-dot close" /> 철자·발음 근접</span>
              <span><i className="legend-dot missed" /> 놓친 단어 (클릭 시 사전)</span>
            </div>

            <p style={{ marginTop: '10px', fontSize: '0.9rem', fontWeight: 650, color: 'var(--text-strong)' }}>
              💡 코칭 피드백: {activeResult.coachingTipKo}
            </p>
            <p style={{ marginTop: '6px', fontFamily: 'var(--font-en)', fontSize: '0.9rem', color: 'var(--text-sub)' }}>
              원문: {currentTurn.english}
            </p>

            {reviewToast && (
              <p style={{ marginTop: '8px', fontSize: '0.84rem', color: 'var(--ok)', fontWeight: 700 }}>
                ✓ {reviewToast}
              </p>
            )}
          </div>
        )}

        {/* NEXT / PREV LINE FOOTER */}
        <div className="section-label-between" style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid var(--line-light)' }}>
          <button
            type="button"
            className="btn-outline"
            disabled={idx === 0}
            onClick={() => resetLineState(Math.max(0, idx - 1))}
          >
            ← 이전 문장
          </button>
          <button
            type="button"
            className="btn-solid-brand"
            disabled={idx >= dialogue.length - 1}
            onClick={() => resetLineState(Math.min(dialogue.length - 1, idx + 1))}
          >
            다음 문장 훈련 →
          </button>
        </div>
      </div>

      {/* RIGHT SIDE: TURN PROGRESS CHECKLIST */}
      <div className="script-panel-card">
        <div className="section-label-between" style={{ marginBottom: '12px' }}>
          <h3 style={{ fontSize: '1.08rem' }}>
            Day {dayPad} {mode === 'shadowing' ? '쉐도잉' : '딕테이션'} 트랙 ({dialogue.length}문장)
          </h3>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>
            완료 {Object.keys(mode === 'shadowing' ? shadowScores : dictScores).length}/{dialogue.length}
          </span>
        </div>

        <div className="script-turn-list">
          {dialogue.map((turn, tIdx) => {
            const score = (mode === 'shadowing' ? shadowScores : dictScores)[turn.id];
            const active = tIdx === idx;
            return (
              <button
                key={turn.id}
                type="button"
                className={`script-turn-row ${active ? 'active' : ''}`}
                onClick={() => resetLineState(tIdx)}
              >
                <div className="section-label-between" style={{ width: '100%' }}>
                  <span className="script-speaker-name">
                    #{tIdx + 1} · {turn.speaker}
                  </span>
                  {score !== undefined ? (
                    <span className={`pill-tag ${score >= 82 ? 'pill-brand' : 'pill-coral'}`} style={{ fontSize: '0.72rem' }}>
                      {score}%
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>대기</span>
                  )}
                </div>
                <p className="script-ko-line" style={{ marginTop: '4px' }}>
                  {mode === 'dictation' && score === undefined
                    ? `🎧 ${turn.korean}`
                    : turn.english}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
