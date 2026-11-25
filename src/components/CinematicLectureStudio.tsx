import { useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  BookmarkPlus,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageSquareText,
  Mic,
  Pause,
  Play,
  RotateCcw,
  Send,
  Subtitles,
  Volume2
} from 'lucide-react';
import { WEEK1_MODULES } from '../data/week1MasterCourse.ts';
import type {
  DayLessonModule,
  LearnerSettings,
  ParaphraseResult,
  SpacedReviewCard
} from '../types/course.ts';
import { analyzeWithOptionalGemini } from '../utils/paraphraseEngine.ts';
import {
  isSpeechRecognitionSupported,
  speakEnglish,
  startSpeechRecognition,
  stopSpeaking
} from '../utils/speech.ts';

interface CinematicLectureStudioProps {
  module: DayLessonModule;
  settings: LearnerSettings;
  lectureCompleted: boolean;
  savedNote: string;
  savedParaphrases: ParaphraseResult[];
  onSelectDay: (dayNumber: number) => void;
  onMarkLectureComplete: () => void;
  onSaveNote: (note: string) => void;
  onSaveParaphrase: (item: ParaphraseResult, reviewCard?: SpacedReviewCard) => void;
}

type StudioTab = 'sitcom' | 'chalkboard' | 'tutor';
type SubtitleMode = 'both' | 'en' | 'off';

export function CinematicLectureStudio({
  module,
  settings,
  lectureCompleted,
  savedNote,
  savedParaphrases,
  onSelectDay,
  onMarkLectureComplete,
  onSaveNote,
  onSaveParaphrase
}: CinematicLectureStudioProps) {
  const [studioTab, setStudioTab] = useState<StudioTab>('sitcom');

  // Sitcom Video Player states
  const [turnIdx, setTurnIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [subtitleMode, setSubtitleMode] = useState<SubtitleMode>('both');
  const [slashView, setSlashView] = useState(settings.showStructureSlashes);

  // Chalkboard Grammar states
  const [slideIdx, setSlideIdx] = useState(0);
  const [noteDraft, setNoteDraft] = useState(savedNote);
  const [noteSavedToast, setNoteSavedToast] = useState(false);

  // 1:1 AI Tutor states
  const [tutorStep, setTutorStep] = useState<1 | 2>(1);
  const [learnerReply, setLearnerReply] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [latestFeedback, setLatestFeedback] = useState<ParaphraseResult | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [addedReviewToast, setAddedReviewToast] = useState<string | null>(null);

  const isPlayingRef = useRef(false);
  const stopMicRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      stopSpeaking();
      stopMicRef.current?.();
    };
  }, []);

  const currentTurn = module.dialogue[turnIdx] ?? module.dialogue[0];
  const currentGrammar = module.grammarSections[slideIdx] ?? module.grammarSections[0];

  const playTurnFromIndex = (idx: number, autoAdvance: boolean) => {
    const target = module.dialogue[idx];
    if (!target) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      return;
    }

    setTurnIdx(idx);

    if (settings.silentMode) {
      if (autoAdvance && isPlayingRef.current) {
        window.setTimeout(() => {
          if (!isPlayingRef.current) return;
          if (idx + 1 < module.dialogue.length) {
            playTurnFromIndex(idx + 1, true);
          } else {
            isPlayingRef.current = false;
            setIsPlaying(false);
          }
        }, 3200);
      }
      return;
    }

    speakEnglish(
      target.english,
      playbackRate,
      () => {
        if (autoAdvance && isPlayingRef.current) {
          if (idx + 1 < module.dialogue.length) {
            window.setTimeout(() => {
              if (isPlayingRef.current) {
                playTurnFromIndex(idx + 1, true);
              }
            }, 420);
          } else {
            isPlayingRef.current = false;
            setIsPlaying(false);
          }
        }
      },
      target.voicePitch
    );
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      stopSpeaking();
      return;
    }
    const startIdx = turnIdx >= module.dialogue.length - 1 && !isPlaying ? 0 : turnIdx;
    isPlayingRef.current = true;
    setIsPlaying(true);
    playTurnFromIndex(startIdx, true);
  };

  const handleSelectLine = (idx: number) => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    setTurnIdx(idx);
    const t = module.dialogue[idx];
    if (t && !settings.silentMode) {
      speakEnglish(t.english, playbackRate, undefined, t.voicePitch);
    }
  };

  const handleSubmitToTutor = async () => {
    if (!learnerReply.trim() || isAnalyzing) return;
    setIsAnalyzing(true);
    const activeQuestion =
      tutorStep === 1
        ? module.tutorScenario.openingQuestionEn
        : module.tutorScenario.followUpQuestionEn;

    const result = await analyzeWithOptionalGemini(
      learnerReply,
      module.dayNumber,
      activeQuestion,
      settings.geminiApiKey
    );

    setLatestFeedback(result);
    onSaveParaphrase(result);
    setIsAnalyzing(false);

    if (!settings.silentMode) {
      speakEnglish(result.grammarFix, 0.97);
    }
  };

  const handleMicForTutor = () => {
    if (isListening) {
      stopMicRef.current?.();
      setIsListening(false);
      return;
    }
    setIsListening(true);
    stopMicRef.current = startSpeechRecognition(
      (text) => {
        setLearnerReply((prev) => (prev ? `${prev} ${text}` : text));
        setIsListening(false);
      },
      () => setIsListening(false),
      () => setIsListening(false)
    );
  };

  const dayParaphrases = savedParaphrases.filter((p) => p.dayNumber === module.dayNumber);

  return (
    <main className="page-wrap">
      {/* DAY SELECTOR BAR */}
      <div className="day-pill-switcher" role="tablist" aria-label="강의 단원 선택">
        {WEEK1_MODULES.map((m) => (
          <button
            key={m.dayNumber}
            id={`lecture-day-switch-${m.dayNumber}`}
            type="button"
            className={`day-switch-chip ${m.dayNumber === module.dayNumber ? 'active' : ''}`}
            onClick={() => onSelectDay(m.dayNumber)}
          >
            Day 0{m.dayNumber}
          </button>
        ))}
      </div>

      {/* STUDIO HEADER */}
      <div className="studio-header-row">
        <div>
          <span className="pill-tag pill-brand">{module.dayBadge}</span>
          <h1 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginTop: '8px' }}>
            {module.title}
          </h1>
          <p style={{ color: 'var(--text-sub)', marginTop: '6px' }}>{module.subtitle}</p>
        </div>

        <button
          id="mark-lecture-completed-btn"
          type="button"
          className={lectureCompleted ? 'btn-outline' : 'btn-solid-brand'}
          onClick={onMarkLectureComplete}
        >
          <CheckCircle2 size={18} />
          <span>{lectureCompleted ? '인강 수강 완료됨' : '오늘 인강 수강 완료 체크'}</span>
        </button>
      </div>

      {/* 3-MODE SUB NAVIGATION */}
      <div className="submode-tab-bar" role="tablist" aria-label="스튜디오 학습 단계">
        <button
          id="studio-tab-sitcom"
          type="button"
          className={`submode-tab-btn ${studioTab === 'sitcom' ? 'active' : ''}`}
          onClick={() => {
            stopSpeaking();
            setIsPlaying(false);
            isPlayingRef.current = false;
            setStudioTab('sitcom');
          }}
        >
          <Play size={16} />
          <span>1교시 · 시트콤 스토리 영상 ({module.dialogue.length}턴)</span>
        </button>

        <button
          id="studio-tab-chalkboard"
          type="button"
          className={`submode-tab-btn ${studioTab === 'chalkboard' ? 'active' : ''}`}
          onClick={() => {
            stopSpeaking();
            setIsPlaying(false);
            isPlayingRef.current = false;
            setStudioTab('chalkboard');
          }}
        >
          <BookOpen size={16} />
          <span>2교시 · 원리 칠판 강의 &amp; 필기 ({module.grammarSections.length}강)</span>
        </button>

        <button
          id="studio-tab-tutor"
          type="button"
          className={`submode-tab-btn ${studioTab === 'tutor' ? 'active' : ''}`}
          onClick={() => {
            stopSpeaking();
            setIsPlaying(false);
            isPlayingRef.current = false;
            setStudioTab('tutor');
          }}
        >
          <MessageSquareText size={16} />
          <span>3교시 · 1:1 원어민 과외 &amp; 3단 첨삭</span>
        </button>
      </div>

      {/* =======================================================
          TAB 1: CINEMATIC SITCOM VIDEO PLAYER & INTERACTIVE SCRIPT
         ======================================================= */}
      {studioTab === 'sitcom' && (
        <section className="lecture-two-col" aria-label="시트콤 스토리 영상 플레이어">
          <div className="cinema-player-shell">
            <div className="cinema-viewport">
              <img
                key={`${currentTurn.id}-${isPlaying ? 'play' : 'idle'}`}
                src={currentTurn.sceneImage}
                alt={`${currentTurn.speaker} 대화 장면`}
                className={`cinema-scene-img ${
                  isPlaying
                    ? currentTurn.cameraMotion === 'zoom-in'
                      ? 'playing-zoom'
                      : 'playing-pan'
                    : ''
                }`}
              />

              <div className="cinema-top-badges">
                <span className="cinema-speaker-pill">
                  {currentTurn.speaker} · {currentTurn.roleLabel}
                </span>
                <span className="cinema-turn-counter">
                  SCENE {turnIdx + 1} / {module.dialogue.length}
                </span>
              </div>

              {subtitleMode !== 'off' && (
                <div className="cinema-subtitle-overlay">
                  <p className="cinema-sub-en">
                    {slashView ? currentTurn.slashBroken : currentTurn.english}
                  </p>
                  {subtitleMode === 'both' && (
                    <p className="cinema-sub-ko">{currentTurn.korean}</p>
                  )}
                </div>
              )}
            </div>

            <div className="cinema-controls">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  id="cinema-play-pause-btn"
                  type="button"
                  className="btn-solid-coral"
                  style={{ padding: '10px 20px' }}
                  onClick={handleTogglePlay}
                >
                  {isPlaying ? <Pause size={17} /> : <Play size={17} />}
                  <span>{isPlaying ? '일시정지' : '연속 재생'}</span>
                </button>

                <button
                  id="cinema-prev-turn-btn"
                  type="button"
                  className="cinema-ctrl-btn"
                  disabled={turnIdx === 0}
                  onClick={() => handleSelectLine(Math.max(0, turnIdx - 1))}
                  aria-label="이전 대사"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  id="cinema-next-turn-btn"
                  type="button"
                  className="cinema-ctrl-btn"
                  disabled={turnIdx >= module.dialogue.length - 1}
                  onClick={() =>
                    handleSelectLine(Math.min(module.dialogue.length - 1, turnIdx + 1))
                  }
                  aria-label="다음 대사"
                >
                  <ChevronRight size={18} />
                </button>

                <button
                  id="cinema-replay-line-btn"
                  type="button"
                  className="cinema-ctrl-btn"
                  onClick={() => handleSelectLine(turnIdx)}
                  title="현재 대사 다시 듣기"
                >
                  <RotateCcw size={16} />
                  <span>한 문장 반복</span>
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  id="cinema-toggle-slashes-btn"
                  type="button"
                  className={`cinema-ctrl-btn ${slashView ? 'active' : ''}`}
                  onClick={() => setSlashView((v) => !v)}
                >
                  <span>직독직해(/) {slashView ? 'ON' : 'OFF'}</span>
                </button>

                <button
                  id="cinema-cycle-subtitle-btn"
                  type="button"
                  className="cinema-ctrl-btn"
                  onClick={() =>
                    setSubtitleMode((m) =>
                      m === 'both' ? 'en' : m === 'en' ? 'off' : 'both'
                    )
                  }
                >
                  <Subtitles size={15} />
                  <span>
                    자막: {subtitleMode === 'both' ? '한+영' : subtitleMode === 'en' ? '영어만' : '무자막'}
                  </span>
                </button>

                {[0.85, 1.0, 1.15].map((spd) => (
                  <button
                    key={spd}
                    id={`cinema-speed-${spd}`}
                    type="button"
                    className={`cinema-ctrl-btn ${playbackRate === spd ? 'active' : ''}`}
                    onClick={() => setPlaybackRate(spd)}
                  >
                    {spd}x
                  </button>
                ))}
              </div>
            </div>

            <div className="cinema-coach-note-bar">
              <span className="pill-tag pill-amber">핵심 포인트 · {currentTurn.keyHighlight}</span>
              <p style={{ marginTop: '8px', fontSize: '0.94rem', color: 'rgba(255,255,255,0.9)' }}>
                {currentTurn.noteKo}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: CLICKABLE FULL TRANSCRIPT */}
          <div className="script-panel-card">
            <div className="section-label-between" style={{ marginBottom: '14px' }}>
              <h2 style={{ fontSize: '1.15rem' }}>전체 대화 스크립트 (문장 클릭 시 즉시 재생)</h2>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-sub)' }}>
                총 {module.dialogue.length}턴
              </span>
            </div>

            <div className="script-turn-list">
              {module.dialogue.map((turn, idx) => {
                const active = idx === turnIdx;
                return (
                  <button
                    key={turn.id}
                    id={`script-turn-btn-${idx}`}
                    type="button"
                    className={`script-turn-row ${active ? 'active' : ''}`}
                    onClick={() => handleSelectLine(idx)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px' }}>
                      <span className="script-speaker-name">
                        {turn.speaker} <small>({turn.roleLabel})</small>
                      </span>
                      <Volume2 size={15} style={{ color: active ? 'var(--brand)' : 'var(--text-muted)' }} />
                    </div>
                    <p className="script-en-line">
                      {slashView ? turn.slashBroken : turn.english}
                    </p>
                    <p className="script-ko-line">{turn.korean}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* =======================================================
          TAB 2: CHALKBOARD GRAMMAR SLIDES & PERSONAL LECTURE NOTE
         ======================================================= */}
      {studioTab === 'chalkboard' && (
        <section className="lecture-two-col" aria-label="원리 칠판 강의 및 필기">
          <div className="chalkboard-card">
            <div className="section-label-between">
              <span className="pill-tag pill-amber">
                핵심 원리 슬라이드 {slideIdx + 1} / {module.grammarSections.length}
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  id="prev-grammar-slide-btn"
                  type="button"
                  className="cinema-ctrl-btn"
                  disabled={slideIdx === 0}
                  onClick={() => setSlideIdx((s) => Math.max(0, s - 1))}
                >
                  <ChevronLeft size={16} /> 이전 원리
                </button>
                <button
                  id="next-grammar-slide-btn"
                  type="button"
                  className="cinema-ctrl-btn"
                  disabled={slideIdx >= module.grammarSections.length - 1}
                  onClick={() =>
                    setSlideIdx((s) => Math.min(module.grammarSections.length - 1, s + 1))
                  }
                >
                  다음 원리 <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <h2 style={{ color: '#fff', fontSize: '1.42rem', marginTop: '16px' }}>
              {currentGrammar.title}
            </h2>

            <div className="chalk-formula-box">
              <span className="chalk-formula-label">핵심 어순 공식</span>
              <p className="chalk-formula-text">{currentGrammar.coreFormula}</p>
            </div>

            <div className="chalk-compare-grid">
              <div className="chalk-compare-item wrong">
                <span className="compare-badge wrong">한국식 직역 콩글리시 (주의)</span>
                <p style={{ fontFamily: 'var(--font-en)', marginTop: '8px', fontWeight: 600 }}>
                  {currentGrammar.wrongKonglish}
                </p>
              </div>

              <div className="chalk-compare-item right">
                <div className="section-label-between">
                  <span className="compare-badge right">원어민 핵심 표준 문장</span>
                  <button
                    id="listen-grammar-right-btn"
                    type="button"
                    className="cinema-ctrl-btn"
                    onClick={() => speakEnglish(currentGrammar.rightNative, 0.96)}
                  >
                    <Volume2 size={14} /> 듣기
                  </button>
                </div>
                <p style={{ fontFamily: 'var(--font-en)', marginTop: '8px', fontWeight: 750, fontSize: '1.08rem' }}>
                  {currentGrammar.rightNative}
                </p>
              </div>
            </div>

            <p className="chalk-explanation-p">{currentGrammar.explanationKo}</p>

            <div className="register-spectrum-box">
              <h3 style={{ color: '#fff', fontSize: '1rem', marginBottom: '12px' }}>
                상황·격식별 3단계 온도차 스펙트럼
              </h3>
              <div className="register-rows">
                {(
                  [
                    ['캐주얼 (친한 동료·친구)', currentGrammar.registerSpectrum.casual],
                    ['실전 표준 (일반 오피스·일상)', currentGrammar.registerSpectrum.standard],
                    ['비즈니스 격식 (임원·고객사)', currentGrammar.registerSpectrum.formal]
                  ] as const
                ).map(([label, sentence], idx) => (
                  <div key={label} className="register-row-item">
                    <div>
                      <span className="register-level-tag">{label}</span>
                      <p style={{ fontFamily: 'var(--font-en)', fontWeight: 650, marginTop: '4px' }}>
                        {sentence}
                      </p>
                    </div>
                    <button
                      id={`listen-register-${idx}`}
                      type="button"
                      className="cinema-ctrl-btn"
                      onClick={() => speakEnglish(sentence, 0.96)}
                    >
                      <Volume2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: VISUAL CONCEPT DIAGRAM + LECTURE NOTEBOOK */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="surface-card">
              <h3 style={{ fontSize: '1.05rem', marginBottom: '10px' }}>
                시각 이미지로 각인하는 공간·동선 개념도
              </h3>
              <img
                src={module.secondaryImage}
                alt="공간 전치사 및 동선 개념 일러스트"
                style={{ width: '100%', borderRadius: '12px', display: 'block' }}
              />
            </div>

            <div className="surface-card">
              <div className="section-label-between" style={{ marginBottom: '10px' }}>
                <label htmlFor="lecture-personal-note" style={{ fontWeight: 800, fontSize: '1.05rem' }}>
                  나만의 강의 필기 노트 (Day 0{module.dayNumber})
                </label>
                {noteSavedToast && (
                  <span style={{ fontSize: '0.82rem', color: 'var(--ok)', fontWeight: 700 }}>
                    저장되었습니다!
                  </span>
                )}
              </div>
              <textarea
                id="lecture-personal-note"
                rows={6}
                className="input-clean"
                value={noteDraft}
                onChange={(e) => setNoteDraft(e.target.value)}
                placeholder="오늘 배운 구동사나 내 실제 업무·일상에 적용할 문장을 자유롭게 메모해 두세요."
              />
              <button
                id="save-lecture-note-btn"
                type="button"
                className="btn-solid-brand"
                style={{ marginTop: '12px', width: '100%' }}
                onClick={() => {
                  onSaveNote(noteDraft);
                  setNoteSavedToast(true);
                  window.setTimeout(() => setNoteSavedToast(false), 2200);
                }}
              >
                필기 노트 저장하기
              </button>
            </div>
          </div>
        </section>
      )}

      {/* =======================================================
          TAB 3: 1:1 AI NATIVE TUTOR & 3-TIER RINGLE PARAPHRASING
         ======================================================= */}
      {studioTab === 'tutor' && (
        <section className="lecture-two-col" aria-label="1:1 원어민 과외 및 3단 패러프레이징">
          <div className="surface-card">
            <div className="section-label-between" style={{ marginBottom: '14px' }}>
              <span className="pill-tag pill-brand">
                1:1 실전 롤플레이 · 질문 {tutorStep} / 2
              </span>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  id="tutor-step-1-btn"
                  type="button"
                  className={`day-switch-chip ${tutorStep === 1 ? 'active' : ''}`}
                  onClick={() => setTutorStep(1)}
                >
                  오프닝 질문
                </button>
                <button
                  id="tutor-step-2-btn"
                  type="button"
                  className={`day-switch-chip ${tutorStep === 2 ? 'active' : ''}`}
                  onClick={() => setTutorStep(2)}
                >
                  심화 꼬리질문
                </button>
              </div>
            </div>

            <div className="tutor-prompt-bubble">
              <div className="section-label-between">
                <strong style={{ color: 'var(--brand)' }}>Tutor Chloe (북미 원어민 코치)</strong>
                <button
                  id="tutor-listen-question-btn"
                  type="button"
                  className="inline-audio-btn"
                  onClick={() =>
                    speakEnglish(
                      tutorStep === 1
                        ? module.tutorScenario.openingQuestionEn
                        : module.tutorScenario.followUpQuestionEn,
                      0.96
                    )
                  }
                >
                  <Volume2 size={15} /> 질문 듣기
                </button>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-en)',
                  fontSize: '1.14rem',
                  fontWeight: 750,
                  marginTop: '10px'
                }}
              >
                “
                {tutorStep === 1
                  ? module.tutorScenario.openingQuestionEn
                  : module.tutorScenario.followUpQuestionEn}
                ”
              </p>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', marginTop: '6px' }}>
                {tutorStep === 1
                  ? module.tutorScenario.openingQuestionKo
                  : module.tutorScenario.followUpQuestionKo}
              </p>
            </div>

            <div style={{ marginTop: '18px' }}>
              <span className="field-label">추천 핵심 청크 (클릭하면 내 답변창에 바로 입력됩니다)</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                {module.tutorScenario.recommendedChunks.map((chunk, idx) => (
                  <button
                    key={chunk}
                    id={`insert-tutor-chunk-${idx}`}
                    type="button"
                    className="chunk-helper-chip"
                    onClick={() =>
                      setLearnerReply((prev) =>
                        prev ? `${prev} ${chunk.replace(/~/g, '')}` : chunk.replace(/~/g, '')
                      )
                    }
                  >
                    + {chunk}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '18px' }}>
              <div className="section-label-between" style={{ marginBottom: '8px' }}>
                <label htmlFor="tutor-reply-textarea" className="field-label" style={{ margin: 0 }}>
                  내 답변 작성 (영어 문장, 서툰 콩글리시, 한국어 키워드 모두 환영!)
                </label>
                {isSpeechRecognitionSupported() && (
                  <button
                    id="tutor-mic-input-btn"
                    type="button"
                    className={`inline-audio-btn ${isListening ? 'listening' : ''}`}
                    onClick={handleMicForTutor}
                  >
                    <Mic size={14} />
                    <span>{isListening ? '음성 인식 중...' : '마이크로 답하기'}</span>
                  </button>
                )}
              </div>

              <textarea
                id="tutor-reply-textarea"
                rows={4}
                className="input-clean"
                value={learnerReply}
                onChange={(e) => setLearnerReply(e.target.value)}
                placeholder="예: I stopped by a cafe on my way to home to drink iced latte."
              />

              <div style={{ marginTop: '12px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  id="submit-tutor-paraphrase-btn"
                  type="button"
                  className="btn-solid-brand"
                  disabled={!learnerReply.trim() || isAnalyzing}
                  onClick={handleSubmitToTutor}
                >
                  <Send size={16} />
                  <span>{isAnalyzing ? '원어민 3단 첨삭 중...' : '1:1 3단 패러프레이징 첨삭 받기'}</span>
                </button>

                <button
                  id="fill-sample-konglish-btn"
                  type="button"
                  className="btn-outline"
                  onClick={() =>
                    setLearnerReply(
                      module.grammarSections[0]?.wrongKonglish ??
                        'On my way to home, I visited cafe.'
                    )
                  }
                >
                  콩글리시 예시 문장 넣어보기
                </button>
              </div>
            </div>

            <details className="model-answer-drawer" style={{ marginTop: '20px' }}>
              <summary>원어민 모범 만점 답변 예시 보기</summary>
              <div style={{ marginTop: '10px' }}>
                <p style={{ fontFamily: 'var(--font-en)', fontWeight: 700 }}>
                  {module.tutorScenario.modelAnswerEn}
                </p>
                <button
                  id="listen-tutor-model-answer-btn"
                  type="button"
                  className="inline-audio-btn"
                  style={{ marginTop: '8px' }}
                  onClick={() => speakEnglish(module.tutorScenario.modelAnswerEn, 0.96)}
                >
                  <Volume2 size={14} /> 모범 답변 원어민 음성 듣기
                </button>
              </div>
            </details>
          </div>

          {/* RIGHT SIDE: 3-TIER PARAPHRASING CLINIC RESULT */}
          <div className="surface-card">
            <h2 style={{ fontSize: '1.2rem', marginBottom: '14px' }}>
              링글식 3단계 원어민 패러프레이징 리포트
            </h2>

            {addedReviewToast && (
              <div className="feedback-banner ok" style={{ marginBottom: '14px' }}>
                <CheckCircle2 size={17} />
                <span>{addedReviewToast}</span>
              </div>
            )}

            {latestFeedback ? (
              <div className="paraphrase-result-stack">
                <div className="para-box original">
                  <span className="para-tag">내가 말한 원본 문장</span>
                  <p style={{ marginTop: '6px', color: 'var(--text-body)' }}>
                    “{latestFeedback.originalInput}”
                  </p>
                </div>

                <div className="para-box fix">
                  <div className="section-label-between">
                    <span className="para-tag brand">① 문법 · 콩글리시 즉시 교정</span>
                    <button
                      id="listen-para-fix-btn"
                      type="button"
                      className="inline-audio-btn"
                      onClick={() => speakEnglish(latestFeedback.grammarFix, 0.96)}
                    >
                      <Volume2 size={14} /> 듣기
                    </button>
                  </div>
                  <p className="para-en-main">{latestFeedback.grammarFix}</p>
                  <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'var(--text-body)' }}>
                    {latestFeedback.tutorExplanationKo}
                  </p>
                </div>

                <div className="para-box casual">
                  <div className="section-label-between">
                    <span className="para-tag coral">② 친한 동료 · 친구 캐주얼 원어민 표현</span>
                    <button
                      id="listen-para-casual-btn"
                      type="button"
                      className="inline-audio-btn"
                      onClick={() => speakEnglish(latestFeedback.casualNative, 0.98)}
                    >
                      <Volume2 size={14} /> 듣기
                    </button>
                  </div>
                  <p className="para-en-main">{latestFeedback.casualNative}</p>
                </div>

                <div className="para-box business">
                  <div className="section-label-between">
                    <span className="para-tag amber">③ 글로벌 미팅 · 이메일 격식 표현</span>
                    <button
                      id="listen-para-business-btn"
                      type="button"
                      className="inline-audio-btn"
                      onClick={() => speakEnglish(latestFeedback.businessNative, 0.96)}
                    >
                      <Volume2 size={14} /> 듣기
                    </button>
                  </div>
                  <p className="para-en-main">{latestFeedback.businessNative}</p>
                </div>

                <button
                  id="save-para-to-review-deck-btn"
                  type="button"
                  className="btn-outline"
                  style={{ width: '100%' }}
                  onClick={() => {
                    const card: SpacedReviewCard = {
                      id: `rev-para-${Date.now()}`,
                      promptKo: `[내 표현 업그레이드] ${latestFeedback.originalInput}`,
                      targetEn: latestFeedback.businessNative,
                      noteKo: latestFeedback.tutorExplanationKo,
                      sourceLabel: `Day 0${module.dayNumber} 1:1 과외 첨삭`,
                      intervalDays: 1,
                      mastered: false
                    };
                    onSaveParaphrase(latestFeedback, card);
                    setAddedReviewToast('에빙하우스 오답·복습함(D+1)에 저장되었습니다!');
                    window.setTimeout(() => setAddedReviewToast(null), 2500);
                  }}
                >
                  <BookmarkPlus size={16} /> 이 교정 문장을 내 복습함(D+1)에 추가하기
                </button>
              </div>
            ) : (
              <div className="empty-state-box">
                <p style={{ fontWeight: 700, color: 'var(--text-strong)' }}>
                  왼쪽에서 Chloe 튜터의 질문에 답해보세요!
                </p>
                <p style={{ marginTop: '6px', fontSize: '0.9rem', color: 'var(--text-sub)' }}>
                  완벽한 영어가 아니어도 괜찮습니다. 내 문장의 의도는 그대로 살리면서 ① 문법 교정본, ② 일상 캐주얼 표현, ③ 비즈니스 고급 표현 3단계로 즉시 업그레이드해 드립니다.
                </p>
              </div>
            )}

            {dayParaphrases.length > 0 && (
              <div style={{ marginTop: '24px' }}>
                <h3 style={{ fontSize: '0.96rem', color: 'var(--text-sub)', marginBottom: '10px' }}>
                  이번 단원 누적 첨삭 노트 ({dayParaphrases.length}건)
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {dayParaphrases.slice(0, 3).map((item) => (
                    <div key={item.id} className="history-mini-card">
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {item.createdAt} · 원문: {item.originalInput}
                      </span>
                      <p style={{ fontFamily: 'var(--font-en)', fontWeight: 700, fontSize: '0.92rem', marginTop: '2px' }}>
                        → {item.grammarFix}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
