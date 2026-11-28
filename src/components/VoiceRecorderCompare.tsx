import { useEffect, useRef, useState } from 'react';
import { Mic, Play, Repeat, Square, Volume2 } from 'lucide-react';
import { speakEnglish, stopSpeaking } from '../utils/speech.ts';

interface VoiceRecorderCompareProps {
  targetEnglish: string;
  speechRate?: number;
  compact?: boolean;
}

/**
 * Real-time microphone energy waveform (<canvas> + AnalyserNode) paired with
 * MediaRecorder playback so learners can directly A/B compare native speech vs
 * their own recorded voice.
 */
export function VoiceRecorderCompare({
  targetEnglish,
  speechRate = 0.94,
  compact = false
}: VoiceRecorderCompareProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const [micError, setMicError] = useState<string | null>(null);
  const [abPlaying, setAbPlaying] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const rafRef = useRef<number | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const urlRef = useRef<string | null>(null);

  const cleanupRecordingHandles = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (streamRef.current) {
      for (const t of streamRef.current.getTracks()) t.stop();
      streamRef.current = null;
    }
    if (audioCtxRef.current) {
      void audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      cleanupRecordingHandles();
      if (urlRef.current) URL.revokeObjectURL(urlRef.current);
      stopSpeaking();
    };
  }, []);

  const drawIdleWave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barCount = 28;
    const gap = canvas.width / barCount;
    ctx.fillStyle = '#c9dfd5';
    for (let i = 0; i < barCount; i += 1) {
      const h = 4 + ((i * 7) % 5);
      const y = (canvas.height - h) / 2;
      ctx.fillRect(i * gap + 2, y, Math.max(2, gap - 4), h);
    }
  };

  useEffect(() => {
    if (!isRecording) drawIdleWave();
  }, [isRecording, recordedUrl]);

  const handleStartRecording = async () => {
    setMicError(null);
    stopSpeaking();
    if (
      typeof navigator === 'undefined' ||
      !navigator.mediaDevices ||
      !navigator.mediaDevices.getUserMedia ||
      typeof MediaRecorder === 'undefined'
    ) {
      setMicError('현재 브라우저에서 마이크 녹음을 지원하지 않습니다 (Chrome/Safari/Edge 권장).');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const AudioCtxCtor =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxCtor) {
        const audioCtx = new AudioCtxCtor();
        audioCtxRef.current = audioCtx;
        const source = audioCtx.createMediaStreamSource(stream);
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 64;
        source.connect(analyser);
        const data = new Uint8Array(analyser.frequencyBinCount);

        const renderFrame = () => {
          const canvas = canvasRef.current;
          if (!canvas) return;
          const ctx = canvas.getContext('2d');
          if (!ctx) return;
          analyser.getByteFrequencyData(data);
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const bars = Math.min(28, data.length);
          const step = canvas.width / bars;
          for (let i = 0; i < bars; i += 1) {
            const norm = data[i] / 255;
            const h = Math.max(5, norm * (canvas.height - 6));
            const y = (canvas.height - h) / 2;
            ctx.fillStyle = norm > 0.45 ? '#e25c3c' : '#185443';
            ctx.fillRect(i * step + 2, y, Math.max(3, step - 4), h);
          }
          rafRef.current = requestAnimationFrame(renderFrame);
        };
        rafRef.current = requestAnimationFrame(renderFrame);
      }

      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (ev) => {
        if (ev.data.size > 0) chunksRef.current.push(ev.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || 'audio/webm' });
        if (urlRef.current) URL.revokeObjectURL(urlRef.current);
        const nextUrl = URL.createObjectURL(blob);
        urlRef.current = nextUrl;
        setRecordedUrl(nextUrl);
        cleanupRecordingHandles();
      };
      mediaRecorderRef.current = recorder;
      recorder.start();
      setIsRecording(true);
    } catch {
      setMicError('마이크 권한을 허용하면 실시간 음성 파형과 원어민 A/B 비교 녹음을 사용할 수 있습니다.');
      cleanupRecordingHandles();
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    } else {
      cleanupRecordingHandles();
    }
    setIsRecording(false);
  };

  const handlePlayMyVoice = () => {
    if (!recordedUrl) return;
    stopSpeaking();
    if (!audioPlayerRef.current) audioPlayerRef.current = new Audio();
    audioPlayerRef.current.src = recordedUrl;
    void audioPlayerRef.current.play().catch(() => {});
  };

  const handlePlayABCompare = () => {
    if (!recordedUrl) {
      speakEnglish(targetEnglish, speechRate);
      return;
    }
    setAbPlaying(true);
    speakEnglish(targetEnglish, speechRate, () => {
      window.setTimeout(() => {
        if (!audioPlayerRef.current) audioPlayerRef.current = new Audio();
        audioPlayerRef.current.src = recordedUrl;
        audioPlayerRef.current.onended = () => setAbPlaying(false);
        void audioPlayerRef.current.play().catch(() => setAbPlaying(false));
      }, 280);
    });
  };

  return (
    <div className={`voice-compare-strip ${compact ? 'compact' : ''}`}>
      <div className="voice-compare-left">
        <canvas
          ref={canvasRef}
          width={180}
          height={34}
          className="voice-wave-canvas"
          aria-label="실시간 음성 파형 모니터"
        />
        <span className="voice-wave-caption">
          {isRecording
            ? '● 녹음 중 · 또렷하게 말해 보세요'
            : recordedUrl
              ? '✓ 내 목소리 녹음 완료 · A/B 비교 가능'
              : '내 발음 녹음 & 원어민 A/B 억양 비교'}
        </span>
      </div>

      <div className="voice-compare-actions">
        {!isRecording ? (
          <button
            type="button"
            className="inline-audio-btn"
            onClick={() => void handleStartRecording()}
          >
            <Mic size={13} /> 내 발음 녹음
          </button>
        ) : (
          <button
            type="button"
            className="inline-audio-btn recording"
            onClick={handleStopRecording}
          >
            <Square size={13} /> 녹음 멈추기
          </button>
        )}

        <button
          type="button"
          className="inline-audio-btn"
          onClick={() => speakEnglish(targetEnglish, speechRate)}
        >
          <Volume2 size={13} /> 원어민
        </button>

        {recordedUrl && (
          <>
            <button
              type="button"
              className="inline-audio-btn"
              onClick={handlePlayMyVoice}
            >
              <Play size={13} /> 내 목소리
            </button>
            <button
              type="button"
              className="inline-audio-btn brand-highlight"
              disabled={abPlaying}
              onClick={handlePlayABCompare}
            >
              <Repeat size={13} /> {abPlaying ? 'A/B 비교 재생 중...' : '원어민→내 발음 비교'}
            </button>
          </>
        )}
      </div>

      {micError && (
        <p style={{ width: '100%', fontSize: '0.78rem', color: 'var(--coral)', marginTop: '4px' }}>
          {micError}
        </p>
      )}
    </div>
  );
}
