import type { AccentPreference } from '../types/course.ts';

let preferredAccent: AccentPreference = 'en-US';

export const ACCENT_LABELS: Record<AccentPreference, string> = {
  'en-US': '미국식 (US)',
  'en-GB': '영국식 (UK)',
  'en-AU': '호주식 (AU)'
};

export function setDefaultSpeechAccent(accent: AccentPreference): void {
  preferredAccent = accent;
}

export function getDefaultSpeechAccent(): AccentPreference {
  return preferredAccent;
}

// Warm up voices list asynchronously when browser loads TTS voices
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

export function speakEnglish(
  text: string,
  rate = 1.0,
  onEnd?: () => void,
  pitch = 1.0,
  accentOverride?: AccentPreference
): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onEnd?.();
    return;
  }

  const targetAccent = accentOverride ?? preferredAccent;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = targetAccent;
  utterance.rate = rate;
  utterance.pitch = pitch;

  const voices = window.speechSynthesis.getVoices();
  const enVoices = voices.filter((v) => v.lang.toLowerCase().startsWith('en'));
  const accentVoices = enVoices.filter(
    (v) => v.lang.toLowerCase().replace('_', '-') === targetAccent.toLowerCase()
  );
  const pool = accentVoices.length > 0 ? accentVoices : enVoices;

  let chosenVoice =
    pool.find(
      (v) =>
        v.name.includes('Natural') ||
        v.name.includes('Google') ||
        v.name.includes('Samantha') ||
        v.name.includes('Daniel') ||
        v.name.includes('Karen')
    ) || pool[0];

  if (pitch < 0.96 && pool.length > 1) {
    const maleCandidate = pool.find(
      (v) =>
        v.name.includes('Guy') ||
        v.name.includes('Daniel') ||
        v.name.includes('Alex') ||
        v.name.includes('Arthur') ||
        v.name.includes('Male')
    );
    if (maleCandidate) chosenVoice = maleCandidate;
  }

  if (chosenVoice) {
    utterance.voice = chosenVoice;
  }

  utterance.onend = () => onEnd?.();
  utterance.onerror = () => onEnd?.();

  window.speechSynthesis.speak(utterance);
}

export function speakKorean(text: string, rate = 1.02, onEnd?: () => void): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onEnd?.();
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ko-KR';
  utterance.rate = rate;

  const voices = window.speechSynthesis.getVoices();
  const koVoice =
    voices.find((v) => v.lang.startsWith('ko') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Yuna'))) ||
    voices.find((v) => v.lang.startsWith('ko'));
  if (koVoice) utterance.voice = koVoice;

  utterance.onend = () => onEnd?.();
  utterance.onerror = () => onEnd?.();

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

interface BrowserSpeechRecognition {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === 'undefined') return false;
  const win = window as unknown as Record<string, unknown>;
  return Boolean(win.SpeechRecognition || win.webkitSpeechRecognition);
}

export function startSpeechRecognition(
  onTranscript: (text: string) => void,
  onError: (message: string) => void,
  onEnd?: () => void,
  accentOverride?: AccentPreference
): (() => void) | null {
  if (typeof window === 'undefined') return null;
  const win = window as unknown as {
    SpeechRecognition?: new () => BrowserSpeechRecognition;
    webkitSpeechRecognition?: new () => BrowserSpeechRecognition;
  };
  const RecognitionCtor = win.SpeechRecognition || win.webkitSpeechRecognition;

  if (!RecognitionCtor) {
    onError('현재 브라우저에서는 음성 인식을 지원하지 않아 텍스트/청크 모드로 진행합니다.');
    return null;
  }

  const recognition = new RecognitionCtor();
  recognition.lang = accentOverride ?? preferredAccent;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const transcript = event.results[0]?.[0]?.transcript || '';
    onTranscript(transcript.trim());
  };

  recognition.onerror = (event) => {
    if (event.error === 'not-allowed') {
      onError('마이크 권한이 차단되어 있습니다. 텍스트 입력 또는 묵음 모드를 이용해 주세요.');
    } else {
      onError('음성이 또렷하게 인식되지 않았습니다. 다시 말씀하시거나 직접 입력해 보세요.');
    }
  };

  recognition.onend = () => {
    onEnd?.();
  };

  recognition.start();
  return () => recognition.stop();
}

export function isAudioRecordingSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    Boolean(navigator.mediaDevices?.getUserMedia) &&
    typeof MediaRecorder !== 'undefined'
  );
}

/**
 * Records learner microphone audio into a playable Blob URL so learners can
 * immediately compare their own voice side-by-side against native audio.
 */
export async function startVoiceRecorder(
  onRecordedUrl: (blobUrl: string) => void,
  onError: (msg: string) => void
): Promise<(() => void) | null> {
  if (!isAudioRecordingSupported()) {
    onError('현재 브라우저 환경에서는 음성 녹음을 지원하지 않습니다.');
    return null;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const chunks: BlobPart[] = [];
    const recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (ev) => {
      if (ev.data.size > 0) chunks.push(ev.data);
    };

    recorder.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' });
      const url = URL.createObjectURL(blob);
      onRecordedUrl(url);
    };

    recorder.start();
    return () => {
      if (recorder.state !== 'inactive') {
        recorder.stop();
      } else {
        stream.getTracks().forEach((t) => t.stop());
      }
    };
  } catch {
    onError('마이크 접근 권한이 거부되었거나 마이크 장치를 찾을 수 없습니다.');
    return null;
  }
}
