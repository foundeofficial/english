export function speakEnglish(
  text: string,
  rate = 1.0,
  onEnd?: () => void,
  pitch = 1.0
): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onEnd?.();
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate;
  utterance.pitch = pitch;

  const voices = window.speechSynthesis.getVoices();
  const enVoices = voices.filter((v) => v.lang.startsWith('en'));

  let preferredVoice =
    enVoices.find(
      (v) =>
        v.lang === 'en-US' &&
        (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha'))
    ) ||
    enVoices.find((v) => v.lang.startsWith('en-US')) ||
    enVoices[0];

  if (pitch < 0.96 && enVoices.length > 1) {
    const maleCandidate = enVoices.find(
      (v) =>
        v.name.includes('Guy') ||
        v.name.includes('Daniel') ||
        v.name.includes('Alex') ||
        v.name.includes('Male')
    );
    if (maleCandidate) preferredVoice = maleCandidate;
  }

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
    onError('현재 브라우저에서는 음성 인식을 지원하지 않아 텍스트/청크 모드로 진행합니다.');
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
