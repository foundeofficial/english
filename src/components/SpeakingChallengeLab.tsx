import { useEffect, useRef, useState } from 'react';
import {
  Award,
  CheckCircle2,
  Clock,
  Mic,
  Play,
  RotateCcw,
  Square,
  Volume2
} from 'lucide-react';
import { SPEAKING_PROMPTS_16 } from '../data/speakingPrompts.ts';
import type { MasteryStage } from '../types/academy.ts';
import type { SpeakingAttemptRecord, SpeakingPromptItem } from '../types/v6.ts';
import {
  isSpeechRecognitionSupported,
  speakEnglish,
  startSpeechRecognition
} from '../utils/speech.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface SpeakingChallengeLabProps {
  speakingAttempts: SpeakingAttemptRecord[];
  onRecordSpeakingAttempt: (attempt: SpeakingAttemptRecord) => void;
  onOpenDictionary: (word?: string) => void;
}

type ChallengePhase = 'ready' | 'prep' | 'speaking' | 'result';

interface SpeakingEval {
  wordCount: number;
  wpm: number;
  usedExpressions: string[];
  fillerCount: number;
  score: number;
  estimatedBand: string;
  coachingKo: string;
}

function evaluateSpeakingPerformance(
  transcript: string,
  elapsedSec: number,
  prompt: SpeakingPromptItem
): SpeakingEval {
  const words = transcript
    .trim()
    .toLowerCase()
    .replace(/[^a-z'\s-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  const wordCount = words.length;
  const effectiveSec = Math.max(10, elapsedSec);
  const wpm = Math.round((wordCount / effectiveSec) * 60);

  const lower = transcript.toLowerCase();
  const usedExpressions = prompt.keyExpressions.filter((expr) => {
    const stem = expr.toLowerCase().split(/\s+/)[0].replace(/[^a-z]/g, '');
    return stem.length >= 3 && lower.includes(stem);
  });

  const fillerMatches = lower.match(/\b(um|uh|err|hmm|like)\b/g) ?? [];
  const fillerCount = fillerMatches.length;

  const uniqueRatio = wordCount > 0 ? new Set(words).size / wordCount : 0;

  let score = 42;
  if (wordCount >= 80) score += 28;
  else if (wordCount >= 50) score += 22;
  else if (wordCount >= 25) score += 14;
  else if (wordCount >= 10) score += 8;

  score += Math.min(18, usedExpressions.length * 5);
  if (wpm >= 90 && wpm <= 165) score += 10;
  else if (wpm >= 60) score += 5;

  if (uniqueRatio >= 0.55 && wordCount >= 25) score += 5;
  score = Math.max(35, Math.min(100, score - Math.min(8, fillerCount * 2)));

  let estimatedBand = 'OPIc IL · CEFR A2';
  if (score >= 88) estimatedBand = 'OPIc AL · CEFR C1';
  else if (score >= 76) estimatedBand = 'OPIc IH · CEFR B2';
  else if (score >= 62) estimatedBand = 'OPIc IM2 · CEFR B1';

  let coachingKo =
    '훌륭합니다! 3단 구조(결론→이유/예시→마무리)를 유지하며 목표 표현을 1~2개 더 녹여내면 원어민 수준에 한 발 더 다가갑니다.';
  if (wordCount < 25) {
    coachingKo =
      '발화량이 아직 짧습니다. 아래 [3단계 아이디어 구조]의 ②번 구체적 예시를 2문장 더 덧붙여 50단어 이상에 도전해 보세요!';
  } else if (wpm < 80) {
    coachingKo =
      '내용은 좋지만 말하는 속도가 다소 느립니다. 모범 답안을 1번 듣고 끊어 말하기 리듬을 익힌 뒤 바로 재도전해 보세요.';
  } else if (score >= 85) {
    coachingKo =
      '유창성(WPM)·어휘 다양성·핵심 표현 활용 모두 최상위권입니다! 실제 수행평가·OPIc·면접에서도 자신 있게 통과할 실력입니다.';
  }

  return {
    wordCount,
    wpm,
    usedExpressions,
    fillerCount,
    score,
    estimatedBand,
    coachingKo
  };
}

export function SpeakingChallengeLab({
  speakingAttempts,
  onRecordSpeakingAttempt,
  onOpenDictionary
}: SpeakingChallengeLabProps) {
  const [stageFilter, setStageFilter] = useState<'all' | MasteryStage>('all');
  const [selectedId, setSelectedId] = useState(SPEAKING_PROMPTS_16[0]?.id ?? 'sp-01');
  const [phase, setPhase] = useState<ChallengePhase>('ready');
  const [countdown, setCountdown] = useState(15);
  const [spokenSec, setSpokenSec] = useState(0);
  const [transcript, setTranscript] = useState('');
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const [micNote, setMicNote] = useState<string | null>(null);
  const [evalResult, setEvalResult] = useState<SpeakingEval | null>(null);
  const [showModel, setShowModel] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const stopAsrRef = useRef<(() => void) | null>(null);

  const visiblePrompts =
    stageFilter === 'all'
      ? SPEAKING_PROMPTS_16
      : SPEAKING_PROMPTS_16.filter((p) => p.stage === stageFilter);

  const activePrompt =
    SPEAKING_PROMPTS_16.find((p) => p.id === selectedId) ?? SPEAKING_PROMPTS_16[0];

  const stopRecordingTools = () => {
    stopAsrRef.current?.();
    stopAsrRef.current = null;
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try {
        mediaRecorderRef.current.stop();
      } catch {
        // ignore
      }
    }
  };

  useEffect(() => {
    return () => {
      stopRecordingTools();
      if (recordedUrl) URL.revokeObjectURL(recordedUrl);
    };
  }, [recordedUrl]);

  useEffect(() => {
    if (phase !== 'prep' && phase !== 'speaking') return;
    const timer = window.setInterval(() => {
      if (phase === 'prep') {
        setCountdown((prev) => {
          if (prev <= 1) {
            setPhase('speaking');
            setCountdown(activePrompt.speakSec);
            return activePrompt.speakSec;
          }
          return prev - 1;
        });
      } else if (phase === 'speaking') {
        setSpokenSec((s) => s + 1);
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase, activePrompt.speakSec]);

  const startLiveRecording = async () => {
    setMicNote(null);
    // Optional MediaRecorder for voice playback
    if (typeof navigator !== 'undefined' && navigator.mediaDevices?.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        chunksRef.current = [];
        recorder.ondataavailable = (ev) => {
          if (ev.data.size > 0) chunksRef.current.push(ev.data);
        };
        recorder.onstop = () => {
          const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
          if (recordedUrl) URL.revokeObjectURL(recordedUrl);
          setRecordedUrl(URL.createObjectURL(blob));
          stream.getTracks().forEach((t) => t.stop());
        };
        recorder.start();
        mediaRecorderRef.current = recorder;
      } catch {
        setMicNote('마이크 권한이 없어도 아래 입력창에 영어를 타이핑해 유창성 분석을 받을 수 있습니다.');
      }
    }

    if (isSpeechRecognitionSupported()) {
      stopAsrRef.current = startSpeechRecognition(
        (text) => {
          setTranscript((prev) => `${prev ? `${prev} ` : ''}${text}`);
        },
        (err) => setMicNote(err)
      );
    }
  };

  const handleBeginPrep = () => {
    stopRecordingTools();
    setTranscript('');
    setEvalResult(null);
    setSpokenSec(0);
    setCountdown(activePrompt.prepSec);
    setPhase('prep');
  };

  const handleStartSpeakingNow = () => {
    setCountdown(activePrompt.speakSec);
    setSpokenSec(0);
    setPhase('speaking');
    void startLiveRecording();
  };

  const handleFinishSpeaking = () => {
    stopRecordingTools();
    if (!transcript.trim()) {
      setMicNote('최소 1문장 이상 말하거나 입력한 뒤 분석을 완료해 주세요!');
      return;
    }
    const ev = evaluateSpeakingPerformance(transcript, Math.max(15, spokenSec), activePrompt);
    setEvalResult(ev);
    setPhase('result');
    onRecordSpeakingAttempt({
      id: `spk-${activePrompt.id}-${speakingAttempts.length + 1}`,
      promptId: activePrompt.id,
      titleKo: activePrompt.titleKo,
      date: new Date().toISOString().slice(0, 10),
      wordCount: ev.wordCount,
      wpm: ev.wpm,
      estimatedBand: ev.estimatedBand,
      score: ev.score
    });
  };

  return (
    <section className="stack-lg" aria-label="실전 1분 스피킹 챌린지">
      {/* TOPIC SELECTOR */}
      <div className="surface-card">
        <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
          <div>
            <span className="pill-tag pill-coral">초등·중·고 수행평가 · 영어 면접 · OPIc AL · TOEFL 스피킹</span>
            <h2 style={{ fontSize: '1.34rem', marginTop: '6px' }}>
              실전 1분 스피킹 챌린지 &amp; 내 목소리 WPM 유창성 분석실 (16주제)
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {(
              [
                ['all', '전체 16주제'],
                ['stage1', '초등 수행평가'],
                ['stage2', '중학·OPIc 입문'],
                ['stage3', '고등·TOEFL'],
                ['stage4', '글로벌 OPIc AL']
              ] as const
            ).map(([st, label]) => (
              <button
                key={st}
                id={`spk-filter-${st}`}
                type="button"
                className={`day-switch-chip ${stageFilter === st ? 'active' : ''}`}
                onClick={() => setStageFilter(st)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="foundation-unit-strip">
          {visiblePrompts.map((pr, idx) => {
            const done = speakingAttempts.some((a) => a.promptId === pr.id);
            const active = pr.id === activePrompt.id;
            return (
              <button
                key={pr.id}
                id={`spk-topic-${pr.id}`}
                type="button"
                className={`foundation-unit-pill ${active ? 'active' : ''} ${done ? 'done' : ''}`}
                onClick={() => {
                  stopRecordingTools();
                  setSelectedId(pr.id);
                  setPhase('ready');
                  setEvalResult(null);
                  setTranscript('');
                  setShowModel(false);
                }}
              >
                <span>
                  #{String(idx + 1).padStart(2, '0')} · {pr.cefrBadge}
                </span>
                <small>{pr.titleKo}</small>
              </button>
            );
          })}
        </div>
      </div>

      {/* ACTIVE SPEAKING ARENA */}
      {activePrompt && (
        <div className="surface-card">
          <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
            <div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="pill-tag pill-brand">{activePrompt.categoryBadge}</span>
                <span className="pill-tag pill-amber">
                  준비 {activePrompt.prepSec}초 · 발화 {activePrompt.speakSec}초
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-en)', fontSize: '1.28rem', marginTop: '8px' }}>
                {activePrompt.promptEn}
              </h3>
              <p style={{ color: 'var(--text-sub)', marginTop: '4px' }}>{activePrompt.promptKo}</p>
            </div>

            <button
              type="button"
              className="inline-audio-btn"
              onClick={() => speakEnglish(activePrompt.promptEn, 0.94)}
            >
              <Volume2 size={14} /> 질문 원어민 음성 듣기
            </button>
          </div>

          {/* 3-STEP OUTLINE + TARGET KEY EXPRESSIONS */}
          <div className="trap-vs-insight-grid" style={{ marginBottom: '16px' }}>
            <div className="insight-card-box">
              <strong style={{ color: 'var(--brand)' }}>🧠 1분 스피킹 3단 논리 뼈대</strong>
              <div className="stack-sm" style={{ marginTop: '8px', fontSize: '0.88rem' }}>
                {activePrompt.outlineStepsKo.map((st, i) => (
                  <div key={i}>{st}</div>
                ))}
              </div>
            </div>
            <div className="insight-card-box">
              <strong style={{ color: 'var(--coral)' }}>✨ 점수 올리는 추천 핵심 표현 5선</strong>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '10px' }}>
                {activePrompt.keyExpressions.map((exp) => {
                  const used = transcript
                    .toLowerCase()
                    .includes(exp.toLowerCase().split(' ')[0]);
                  return (
                    <button
                      key={exp}
                      type="button"
                      className={`essay-vocab-chip ${used ? 'used' : ''}`}
                      onClick={() => {
                        speakEnglish(exp, 0.92);
                        if (phase === 'speaking') {
                          setTranscript((prev) => `${prev ? `${prev} ` : ''}${exp} `);
                        }
                      }}
                    >
                      {used ? '✓ ' : '🔊 '}
                      {exp}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CONTROLS & TIMER */}
          <div className="speaking-control-bar">
            {phase === 'ready' && (
              <>
                <button
                  id="spk-start-prep-btn"
                  type="button"
                  className="btn-solid-brand"
                  onClick={handleBeginPrep}
                >
                  <Clock size={16} /> 15초 준비 타이머 시작
                </button>
                <button
                  id="spk-start-now-btn"
                  type="button"
                  className="btn-solid-coral"
                  onClick={handleStartSpeakingNow}
                >
                  <Mic size={16} /> 바로 1분 스피킹 녹음 시작
                </button>
              </>
            )}

            {phase === 'prep' && (
              <>
                <span className="pill-tag pill-amber" style={{ fontSize: '0.96rem', padding: '8px 14px' }}>
                  ⏱ 준비 시간 {countdown}초 남음 — 3단 뼈대를 머릿속에 정리하세요!
                </span>
                <button
                  type="button"
                  className="btn-solid-coral"
                  onClick={handleStartSpeakingNow}
                >
                  <Play size={15} /> 지금 바로 발화 시작
                </button>
              </>
            )}

            {phase === 'speaking' && (
              <>
                <span className="pill-tag pill-coral" style={{ fontSize: '0.96rem', padding: '8px 14px' }}>
                  🔴 실전 발화 진행 중 · 남은 시간 {countdown}초 (경과 {spokenSec}초)
                </span>
                <button
                  id="spk-finish-btn"
                  type="button"
                  className="btn-solid-brand"
                  onClick={handleFinishSpeaking}
                >
                  <Square size={15} /> 발화 종료 &amp; WPM 유창성 즉시 분석
                </button>
              </>
            )}

            {phase === 'result' && (
              <button
                type="button"
                className="btn-outline"
                onClick={handleBeginPrep}
              >
                <RotateCcw size={15} /> 다시 도전하기
              </button>
            )}

            <button
              id="spk-toggle-model-btn"
              type="button"
              className="btn-outline"
              onClick={() => setShowModel((v) => !v)}
            >
              <Award size={15} /> {showModel ? 'Band-AL 모범 답안 접기' : 'Band-AL 모범 답안 비교'}
            </button>
          </div>

          {micNote && (
            <p style={{ fontSize: '0.84rem', color: 'var(--brand)', marginTop: '10px', fontWeight: 650 }}>
              💡 {micNote}
            </p>
          )}

          {/* LIVE TRANSCRIPT / SILENT TYPING AREA */}
          {(phase === 'speaking' || phase === 'result') && (
            <div style={{ marginTop: '14px' }}>
              <label htmlFor="spk-transcript-textarea" className="field-label">
                내 스피킹 발화 텍스트 (마이크 음성 자동 인식 · 묵음 환경에서는 직접 타이핑 가능)
              </label>
              <textarea
                id="spk-transcript-textarea"
                className="essay-editor-textarea"
                rows={4}
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                placeholder="마이크로 영어를 말하면 자동으로 텍스트가 기록되며, 직접 영어를 입력해 유창성·핵심표현 분석을 받을 수도 있습니다."
              />
            </div>
          )}

          {/* EVALUATION SCORECARD */}
          {phase === 'result' && evalResult && (
            <div className="essay-rubric-card" style={{ marginTop: '18px' }}>
              <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <span className="pill-tag pill-coral">{evalResult.estimatedBand}</span>
                  <h3 style={{ fontSize: '1.42rem', marginTop: '6px' }}>
                    실전 스피킹 종합 점수: {evalResult.score} / 100점 (+90 XP)
                  </h3>
                </div>
                {recordedUrl && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>내 녹음 듣기:</span>
                    <audio controls src={recordedUrl} style={{ height: '34px' }} />
                  </div>
                )}
              </div>

              <div className="rubric-axes-grid" style={{ marginTop: '14px' }}>
                <div className="rubric-axis-box">
                  <small style={{ color: 'var(--text-sub)' }}>말하기 속도 (WPM)</small>
                  <strong style={{ display: 'block', fontSize: '1.25rem', color: 'var(--brand)', marginTop: '4px' }}>
                    {evalResult.wpm} WPM
                  </strong>
                  <small style={{ color: 'var(--text-muted)' }}>권장 100~150 WPM</small>
                </div>
                <div className="rubric-axis-box">
                  <small style={{ color: 'var(--text-sub)' }}>총 발화 단어 수</small>
                  <strong style={{ display: 'block', fontSize: '1.25rem', color: 'var(--brand)', marginTop: '4px' }}>
                    {evalResult.wordCount}단어
                  </strong>
                  <small style={{ color: 'var(--text-muted)' }}>1분 목표 70~120단어</small>
                </div>
                <div className="rubric-axis-box">
                  <small style={{ color: 'var(--text-sub)' }}>추천 표현 활용</small>
                  <strong style={{ display: 'block', fontSize: '1.25rem', color: 'var(--ok)', marginTop: '4px' }}>
                    {evalResult.usedExpressions.length} / {activePrompt.keyExpressions.length}개
                  </strong>
                  <small style={{ color: 'var(--text-muted)' }}>핵심 청크 적중</small>
                </div>
                <div className="rubric-axis-box">
                  <small style={{ color: 'var(--text-sub)' }}>필러(um/uh) 횟수</small>
                  <strong style={{ display: 'block', fontSize: '1.25rem', color: evalResult.fillerCount > 2 ? 'var(--coral)' : 'var(--ok)', marginTop: '4px' }}>
                    {evalResult.fillerCount}회
                  </strong>
                  <small style={{ color: 'var(--text-muted)' }}>적을수록 유창함</small>
                </div>
              </div>

              <div className="coach-callout-box" style={{ marginTop: '14px' }}>
                <strong>
                  <CheckCircle2 size={15} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                  유창성 코칭 피드백
                </strong>
                <p style={{ marginTop: '4px' }}>{evalResult.coachingKo}</p>
              </div>
            </div>
          )}

          {showModel && (
            <div className="insight-card-box" style={{ marginTop: '18px' }}>
              <div className="section-label-between" style={{ marginBottom: '8px' }}>
                <strong style={{ color: 'var(--brand)' }}>🏆 Band-AL 원어민 1분 모범 답안</strong>
                <button
                  type="button"
                  className="inline-audio-btn"
                  onClick={() => speakEnglish(activePrompt.modelAnswerEn, 0.96)}
                >
                  <Volume2 size={14} /> 원어민 속도 듣기
                </button>
              </div>
              <p style={{ fontFamily: 'var(--font-book)', fontSize: '1.02rem', lineHeight: 1.8 }}>
                <InteractiveText text={activePrompt.modelAnswerEn} onLookupWord={onOpenDictionary} />
              </p>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.88rem', marginTop: '8px', lineHeight: 1.65 }}>
                🇰🇷 {activePrompt.modelAnswerKo}
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
