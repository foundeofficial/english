export function speakEnglish(text: string, rate = 1.0, onEnd?: () => void): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onEnd?.();
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate;
  utterance.pitch = 1.0;

  const voices = window.speechSynthesis.getVoices();
  const preferredVoice =
    voices.find((v) => v.lang === 'en-US' && (v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Natural'))) ||
    voices.find((v) => v.lang.startsWith('en-US')) ||
    voices.find((v) => v.lang.startsWith('en'));

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

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
  onEnd?: () => void
): (() => void) | null {
  if (typeof window === 'undefined') return null;
  const win = window as unknown as {
    SpeechRecognition?: new () => BrowserSpeechRecognition;
    webkitSpeechRecognition?: new () => BrowserSpeechRecognition;
  };
  const RecognitionCtor = win.SpeechRecognition || win.webkitSpeechRecognition;

  if (!RecognitionCtor) {
    onError('현재 브라우저 환경에서는 실시간 마이크 인식을 지원하지 않아 키보드/청크 입력으로 진행합니다.');
    return null;
  }

  const recognition = new RecognitionCtor();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const transcript = event.results[0]?.[0]?.transcript || '';
    onTranscript(transcript.trim());
  };

  recognition.onerror = (event) => {
    if (event.error === 'not-allowed') {
      onError('마이크 권한이 허용되지 않았습니다. 우측 상단 지하철 묵음 모드 또는 텍스트 입력을 활용해보세요.');
    } else {
      onError('음성이 명확히 인식되지 않았습니다. 다시 말씀하시거나 텍스트로 입력해보세요.');
    }
  };

  recognition.onend = () => {
    onEnd?.();
  };

  recognition.start();
  return () => recognition.stop();
}
