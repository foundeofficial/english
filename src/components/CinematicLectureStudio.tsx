import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  BookmarkPlus,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileText,
  Headphones,
  MessageSquareText,
  Mic,
  Pause,
  Play,
  RotateCcw,
  Send,
  Subtitles,
  Volume2,
  Video
} from 'lucide-react';
import { LEVEL_INFO_MAP } from '../data/levels.ts';
import type {
  DayCompletionRecord,
  DayLessonModule,
  LearnerSettings,
  ParaphraseResult,
  SpacedReviewCard
} from '../types/course.ts';
import type { SpeakingAttemptRecord } from '../types/v6.ts';
import { analyzeWithOptionalGemini } from '../utils/paraphraseEngine.ts';
import {
  isSpeechRecognitionSupported,
  speakEnglish,
  startSpeechRecognition,
  stopSpeaking
} from '../utils/speech.ts';
import { DayNavigatorBar } from './DayNavigatorBar.tsx';
import { InteractiveText } from './InteractiveText.tsx';
import { RealTalkRoleplayStudio } from './RealTalkRoleplayStudio.tsx';
import { ShadowingDictationLab } from './ShadowingDictationLab.tsx';
import { YouTubeStudyPlayer } from './YouTubeStudyPlayer.tsx';

const StorybookLibraryStudio = lazy(() =>
  import('./StorybookLibraryStudio.tsx').then((m) => ({
    default: m.StorybookLibraryStudio
  }))
);

const SpeakingChallengeLab = lazy(() =>
  import('./SpeakingChallengeLab.tsx').then((m) => ({
    default: m.SpeakingChallengeLab
  }))
);

const AdaptiveClozeAndPatternGym = lazy(() =>
  import('./AdaptiveClozeAndPatternGym.tsx').then((m) => ({
    default: m.AdaptiveClozeAndPatternGym
  }))
);

interface CinematicLectureStudioProps {
  module: DayLessonModule;
  settings: LearnerSettings;
  dayRecords: Record<number, DayCompletionRecord>;
  lectureCompleted: boolean;
  videoWatched: boolean;
  readingCompleted: boolean;
  savedNote: string;
  savedParaphrases: ParaphraseResult[];
  completedRoleplayIds: string[];
  completedStorybookIds: string[];
  speakingAttempts: SpeakingAttemptRecord[];
  vocabEloRating: number;
  clozeSolvedCount: number;
  patternReflexMasteredIds: string[];
  initialTab?: StudioTab;
  initialRoleplaySub?: 'roleplay' | 'speaking' | 'pattern-gym';
  initialGymMode?: 'cloze-elo' | 'pattern-reflex';
  onSelectDay: (dayNumber: number) => void;
  onMarkLectureComplete: () => void;
  onMarkVideoWatched: () => void;
  onMarkReadingComplete: () => void;
  onRecordShadowingScore: (accuracyPct: number, spokenDelta: number) => void;
  onRecordDictationScore: (accuracyPct: number) => void;
  onCompleteRoleplay: (scenarioId: string, spokenTurns: number) => void;
  onCompleteStorybook: (bookId: string) => void;
  onRecordSpeakingAttempt: (attempt: SpeakingAttemptRecord) => void;
  onUpdateClozeElo: (
    nextElo: number,
    isCorrect: boolean,
    missedCard?: SpacedReviewCard
  ) => void;
  onCompletePatternSet: (patternId: string, spokenCount: number) => void;
  onAddReviewCard: (card: SpacedReviewCard) => void;
  onSaveNote: (note: string) => void;
  onSaveParaphrase: (item: ParaphraseResult, reviewCard?: SpacedReviewCard) => void;
  onOpenDictionary: (word?: string) => void;
}

export type StudioTab =
  | 'youtube'
  | 'sitcom'
  | 'chalkboard'
  | 'reading'
  | 'tutor'
  | 'roleplay'
  | 'storybook';
type SitcomSubMode = 'watch' | 'shadowing' | 'dictation';
type SubtitleMode = 'both' | 'en' | 'off';

export function CinematicLectureStudio({
  module,
  settings,
  dayRecords,
  lectureCompleted,
  videoWatched,
  readingCompleted,
  savedNote,
  savedParaphrases,
  completedRoleplayIds,
  completedStorybookIds,
  speakingAttempts,
  vocabEloRating,
  clozeSolvedCount,
  patternReflexMasteredIds,
  initialTab,
  initialRoleplaySub,
  initialGymMode,
  onSelectDay,
  onMarkLectureComplete,
  onMarkVideoWatched,
  onMarkReadingComplete,
  onRecordShadowingScore,
  onRecordDictationScore,
  onCompleteRoleplay,
  onCompleteStorybook,
  onRecordSpeakingAttempt,
  onUpdateClozeElo,
  onCompletePatternSet,
  onAddReviewCard,
  onSaveNote,
  onSaveParaphrase,
  onOpenDictionary
}: CinematicLectureStudioProps) {
  const [studioTab, setStudioTab] = useState<StudioTab>(initialTab ?? 'youtube');
  const [sitcomSubMode, setSitcomSubMode] = useState<SitcomSubMode>('watch');
  const [roleplaySubMode, setRoleplaySubMode] = useState<'roleplay' | 'speaking' | 'pattern-gym'>(
    initialRoleplaySub ?? 'roleplay'
  );

  const defaultRate = LEVEL_INFO_MAP[settings.levelTier].defaultSpeechRate;

  // Sitcom Video Player states
  const [turnIdx, setTurnIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(defaultRate);
  const [subtitleMode, setSubtitleMode] = useState<SubtitleMode>('both');
  const [slashView, setSlashView] = useState(settings.showStructureSlashes);

  // Chalkboard Grammar states
  const [slideIdx, setSlideIdx] = useState(0);
  const [noteDraft, setNoteDraft] = useState(savedNote);
  const [noteSavedToast, setNoteSavedToast] = useState(false);

  // Reading Passage states
  const [readingSlash, setReadingSlash] = useState(settings.showStructureSlashes);
  const [showReadingKo, setShowReadingKo] = useState(true);
  const [readingAnswers, setReadingAnswers] = useState<Record<string, string>>({});
  const [readingGraded, setReadingGraded] = useState(false);

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

  const switchStudioTab = (next: StudioTab) => {
    stopSpeaking();
    setIsPlaying(false);
    isPlayingRef.current = false;
    setStudioTab(next);
  };

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
      speakEnglish(result.grammarFix, defaultRate);
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

  const readingCorrectCount = readingGraded
    ? module.readingPassage.comprehensionQuiz.filter((q) => readingAnswers[q.id] === q.answer).length
    : 0;

  const dayParaphrases = savedParaphrases.filter((p) => p.dayNumber === module.dayNumber);
  const dayPad = String(module.dayNumber).padStart(2, '0');

  return (
    <main className="page-wrap">
      {/* 30-DAY WEEK & DAY SWITCHER */}
      <DayNavigatorBar
        selectedDay={module.dayNumber}
        dayRecords={dayRecords}
        onSelectDay={onSelectDay}
      />

      {/* STUDIO HEADER */}
      <div className="studio-header-row">
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <span className="pill-tag pill-brand">{module.dayBadge}</span>
            <span className="pill-tag pill-coral">
              {LEVEL_INFO_MAP[module.cefrLevel].shortLabel}
            </span>
          </div>
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
          <span>{lectureCompleted ? '오늘 인강 완주됨' : '오늘 인강 완주 체크'}</span>
        </button>
      </div>

      {/* 5-SESSION DEEP STUDY SUB NAVIGATION */}
      <div className="submode-tab-bar" role="tablist" aria-label="스튜디오 학습 단계">
        <button
          id="studio-tab-youtube"
          type="button"
          className={`submode-tab-btn ${studioTab === 'youtube' ? 'active' : ''}`}
          onClick={() => switchStudioTab('youtube')}
        >
          <Video size={15} />
          <span>1. 유튜브 인강 {videoWatched ? '✓' : ''}</span>
        </button>

        <button
          id="studio-tab-sitcom"
          type="button"
          className={`submode-tab-btn ${studioTab === 'sitcom' ? 'active' : ''}`}
          onClick={() => switchStudioTab('sitcom')}
        >
          <Play size={15} />
          <span>2. 시트콤·쉐도잉</span>
        </button>

        <button
          id="studio-tab-reading"
          type="button"
          className={`submode-tab-btn ${studioTab === 'reading' ? 'active' : ''}`}
          onClick={() => switchStudioTab('reading')}
        >
          <FileText size={15} />
          <span>3. 영자 독해 {readingCompleted ? '✓' : ''}</span>
        </button>

        <button
          id="studio-tab-chalkboard"
          type="button"
          className={`submode-tab-btn ${studioTab === 'chalkboard' ? 'active' : ''}`}
          onClick={() => switchStudioTab('chalkboard')}
        >
          <BookOpen size={15} />
          <span>4. 원리 칠판</span>
        </button>

        <button
          id="studio-tab-tutor"
          type="button"
          className={`submode-tab-btn ${studioTab === 'tutor' ? 'active' : ''}`}
          onClick={() => switchStudioTab('tutor')}
        >
          <MessageSquareText size={15} />
          <span>5. 1:1 과외</span>
        </button>

        <button
          id="studio-tab-roleplay"
          type="button"
          className={`submode-tab-btn ${studioTab === 'roleplay' ? 'active' : ''}`}
          onClick={() => switchStudioTab('roleplay')}
        >
          <Mic size={15} />
          <span>6. 프리토킹 ({completedRoleplayIds.length}/12)</span>
        </button>

        <button
          id="studio-tab-storybook"
          type="button"
          className={`submode-tab-btn ${studioTab === 'storybook' ? 'active' : ''}`}
          onClick={() => switchStudioTab('storybook')}
        >
          <Headphones size={15} />
          <span>7. 영어 원서 ({completedStorybookIds.length}/12)</span>
        </button>
      </div>

      {/* =======================================================
          TAB 1: REAL EMBEDDED YOUTUBE EDUCATIONAL VIDEO STUDIO
         ======================================================= */}
      {studioTab === 'youtube' && (
        <YouTubeStudyPlayer
          key={`yt-${module.dayNumber}`}
          dayNumber={module.dayNumber}
          recommendedVideo={module.youtubeVideo}
          learnerLevel={settings.levelTier}
          videoWatched={videoWatched}
          savedNote={savedNote}
          onMarkVideoWatched={onMarkVideoWatched}
          onSaveNote={onSaveNote}
          onOpenDictionary={onOpenDictionary}
        />
      )}

      {/* =======================================================
          TAB 2: CINEMATIC SITCOM + SHADOWING LAB + DICTATION LAB
         ======================================================= */}
      {studioTab === 'sitcom' && (
        <div>
          <div className="sitcom-mode-bar" role="tablist" aria-label="2교시 훈련 모드 선택">
            <button
              id="sitcom-mode-watch"
              type="button"
              className={`day-switch-chip ${sitcomSubMode === 'watch' ? 'active' : ''}`}
              onClick={() => {
                stopSpeaking();
                setSitcomSubMode('watch');
              }}
            >
              🎬 시트콤 스토리 &amp; 자막 감상
            </button>
            <button
              id="sitcom-mode-shadowing"
              type="button"
              className={`day-switch-chip ${sitcomSubMode === 'shadowing' ? 'active' : ''}`}
              onClick={() => {
                stopSpeaking();
                setIsPlaying(false);
                isPlayingRef.current = false;
                setSitcomSubMode('shadowing');
              }}
            >
              🎙️ 실시간 쉐도잉 · 발음 채점 &amp; 내 목소리 비교
            </button>
            <button
              id="sitcom-mode-dictation"
              type="button"
              className={`day-switch-chip ${sitcomSubMode === 'dictation' ? 'active' : ''}`}
              onClick={() => {
                stopSpeaking();
                setIsPlaying(false);
                isPlayingRef.current = false;
                setSitcomSubMode('dictation');
              }}
            >
              🎧 블라인드 받아쓰기 (딕테이션)
            </button>
          </div>

          {(sitcomSubMode === 'shadowing' || sitcomSubMode === 'dictation') && (
            <ShadowingDictationLab
              key={`lab-${module.dayNumber}-${sitcomSubMode}`}
              dayNumber={module.dayNumber}
              mode={sitcomSubMode}
              dialogue={module.dialogue}
              defaultRate={defaultRate}
              accent={settings.accent}
              silentMode={settings.silentMode}
              onRecordShadowingScore={onRecordShadowingScore}
              onRecordDictationScore={onRecordDictationScore}
              onAddReviewCard={onAddReviewCard}
              onOpenDictionary={onOpenDictionary}
            />
          )}

          {sitcomSubMode === 'watch' && (
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
                    <InteractiveText
                      text={slashView ? currentTurn.slashBroken : currentTurn.english}
                      onLookupWord={onOpenDictionary}
                    />
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

                {[0.8, 0.95, 1.05, 1.15].map((spd) => (
                  <button
                    key={spd}
                    id={`cinema-speed-${spd}`}
                    type="button"
                    className={`cinema-ctrl-btn ${Math.abs(playbackRate - spd) < 0.04 ? 'active' : ''}`}
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

          {/* RIGHT SIDE: CLICKABLE FULL TRANSCRIPT WITH DICTIONARY LOOKUP */}
          <div className="script-panel-card">
            <div className="section-label-between" style={{ marginBottom: '14px' }}>
              <h2 style={{ fontSize: '1.1rem' }}>전체 대화 스크립트 (단어 클릭 시 사전 검색)</h2>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-sub)' }}>
                총 {module.dialogue.length}턴
              </span>
            </div>

            <div className="script-turn-list">
              {module.dialogue.map((turn, idx) => {
                const active = idx === turnIdx;
                return (
                  <div
                    key={turn.id}
                    id={`script-turn-btn-${idx}`}
                    role="button"
                    tabIndex={0}
                    className={`script-turn-row ${active ? 'active' : ''}`}
                    onClick={() => handleSelectLine(idx)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSelectLine(idx);
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px' }}>
                      <span className="script-speaker-name">
                        {turn.speaker} <small>({turn.roleLabel})</small>
                      </span>
                      <Volume2 size={15} style={{ color: active ? 'var(--brand)' : 'var(--text-muted)' }} />
                    </div>
                    <p className="script-en-line">
                      <InteractiveText
                        text={slashView ? turn.slashBroken : turn.english}
                        onLookupWord={onOpenDictionary}
                      />
                    </p>
                    <p className="script-ko-line">{turn.korean}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
          )}
        </div>
      )}

      {/* =======================================================
          TAB 3: DAILY AUTHENTIC READING PASSAGE + COMPREHENSION QUIZ
         ======================================================= */}
      {studioTab === 'reading' && (
        <section className="lecture-two-col" aria-label="데일리 영자 독해 및 이해도 퀴즈">
          <article className="reading-article-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                <span className="pill-tag pill-brand">{module.readingPassage.genreBadge}</span>
                <span className="pill-tag pill-subtle">
                  약 {module.readingPassage.estimatedMin}분 정독 · 모르는 단어 클릭 시 영한사전 열림
                </span>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <button
                  id="reading-toggle-slash-btn"
                  type="button"
                  className={`day-switch-chip ${readingSlash ? 'active' : ''}`}
                  onClick={() => setReadingSlash((v) => !v)}
                >
                  직독직해(/) {readingSlash ? 'ON' : 'OFF'}
                </button>
                <button
                  id="reading-toggle-ko-btn"
                  type="button"
                  className={`day-switch-chip ${showReadingKo ? 'active' : ''}`}
                  onClick={() => setShowReadingKo((v) => !v)}
                >
                  우리말 해석 {showReadingKo ? '표시' : '숨김'}
                </button>
                <button
                  id="reading-listen-full-btn"
                  type="button"
                  className="inline-audio-btn"
                  onClick={() =>
                    speakEnglish(module.readingPassage.paragraphsEn.join(' '), playbackRate)
                  }
                >
                  <Volume2 size={14} /> 지문 전체 듣기
                </button>
              </div>
            </div>

            <h2 style={{ fontFamily: 'var(--font-book)', fontSize: '1.65rem', lineHeight: 1.3 }}>
              {module.readingPassage.titleEn}
            </h2>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.96rem', marginTop: '4px', marginBottom: '20px' }}>
              {module.readingPassage.titleKo}
            </p>

            <div className="reading-paragraphs-stack">
              {module.readingPassage.paragraphsEn.map((paraEn, idx) => (
                <div key={idx} className="reading-para-block">
                  <div className="section-label-between" style={{ marginBottom: '6px' }}>
                    <span className="reading-para-num">Paragraph {idx + 1}</span>
                    <button
                      type="button"
                      className="inline-audio-btn"
                      onClick={() => speakEnglish(paraEn, playbackRate)}
                    >
                      <Volume2 size={13} /> 문단 듣기
                    </button>
                  </div>
                  <p className="reading-en-text">
                    <InteractiveText
                      text={readingSlash ? module.readingPassage.paragraphsSlash[idx] : paraEn}
                      onLookupWord={onOpenDictionary}
                    />
                  </p>
                  {showReadingKo && (
                    <p className="reading-ko-text">{module.readingPassage.paragraphsKo[idx]}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="reading-expr-strip">
              <span style={{ fontSize: '0.84rem', fontWeight: 750, color: 'var(--brand)' }}>
                지문 핵심 표현 (클릭 시 영한사전 조회):
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                {module.readingPassage.keyExpressions.map((expr) => (
                  <button
                    key={expr}
                    type="button"
                    className="dict-mini-chip"
                    onClick={() => onOpenDictionary(expr.replace(/~/g, '').trim())}
                  >
                    {expr}
                  </button>
                ))}
              </div>
            </div>
          </article>

          {/* RIGHT SIDE: 3-QUESTION READING COMPREHENSION QUIZ */}
          <div className="surface-card">
            <div className="section-label-between" style={{ marginBottom: '14px' }}>
              <div>
                <span className="pill-tag pill-coral">독해 이해도 체크</span>
                <h3 style={{ fontSize: '1.18rem', marginTop: '6px' }}>
                  지문 핵심 확인 퀴즈 ({module.readingPassage.comprehensionQuiz.length}문항)
                </h3>
              </div>
              {readingGraded && (
                <span className="pill-tag pill-brand" style={{ fontSize: '0.9rem' }}>
                  {readingCorrectCount} / {module.readingPassage.comprehensionQuiz.length} 정답
                </span>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {module.readingPassage.comprehensionQuiz.map((q, qIdx) => {
                const picked = readingAnswers[q.id] ?? '';
                const isOk = readingGraded && picked === q.answer;
                return (
                  <div key={q.id} className="reading-quiz-item">
                    <p style={{ fontWeight: 750, fontSize: '0.95rem', marginBottom: '10px' }}>
                      Q{qIdx + 1}. {q.questionKo}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      {q.options.map((opt) => {
                        const selected = picked === opt;
                        const rightOpt = readingGraded && opt === q.answer;
                        const wrongOpt = readingGraded && selected && opt !== q.answer;
                        return (
                          <button
                            key={opt}
                            type="button"
                            disabled={readingGraded}
                            className={`option-choice-btn ${selected ? 'selected' : ''} ${
                              rightOpt ? 'correct-opt' : ''
                            } ${wrongOpt ? 'wrong-opt' : ''}`}
                            onClick={() =>
                              setReadingAnswers((prev) => ({ ...prev, [q.id]: opt }))
                            }
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {readingGraded && (
                      <p
                        style={{
                          marginTop: '8px',
                          fontSize: '0.85rem',
                          color: isOk ? 'var(--ok)' : 'var(--danger)',
                          fontWeight: 650
                        }}
                      >
                        {isOk ? '⭕ 정답! ' : `❌ 정답: ${q.answer} — `}
                        {q.explanationKo}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
              {!readingGraded ? (
                <button
                  id="grade-reading-quiz-btn"
                  type="button"
                  className="btn-solid-brand"
                  style={{ width: '100%' }}
                  disabled={
                    Object.keys(readingAnswers).length <
                    module.readingPassage.comprehensionQuiz.length
                  }
                  onClick={() => {
                    setReadingGraded(true);
                    if (!readingCompleted) onMarkReadingComplete();
                  }}
                >
                  독해 퀴즈 채점 &amp; 독해 완료 기록
                </button>
              ) : (
                <button
                  id="reset-reading-quiz-btn"
                  type="button"
                  className="btn-outline"
                  style={{ width: '100%' }}
                  onClick={() => {
                    setReadingAnswers({});
                    setReadingGraded(false);
                  }}
                >
                  독해 퀴즈 다시 풀기
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =======================================================
          TAB 4: CHALKBOARD GRAMMAR SLIDES & PERSONAL LECTURE NOTE
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
                    onClick={() => speakEnglish(currentGrammar.rightNative, playbackRate)}
                  >
                    <Volume2 size={14} /> 듣기
                  </button>
                </div>
                <p style={{ fontFamily: 'var(--font-en)', marginTop: '8px', fontWeight: 750, fontSize: '1.08rem' }}>
                  <InteractiveText
                    text={currentGrammar.rightNative}
                    onLookupWord={onOpenDictionary}
                  />
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
                        <InteractiveText text={sentence} onLookupWord={onOpenDictionary} />
                      </p>
                    </div>
                    <button
                      id={`listen-register-${idx}`}
                      type="button"
                      className="cinema-ctrl-btn"
                      onClick={() => speakEnglish(sentence, playbackRate)}
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
                장면 이미지 &amp; 상황 연상 카드
              </h3>
              <img
                src={module.secondaryImage}
                alt="상황 개념 일러스트"
                style={{ width: '100%', borderRadius: '12px', display: 'block' }}
              />
            </div>

            <div className="surface-card">
              <div className="section-label-between" style={{ marginBottom: '10px' }}>
                <label htmlFor="lecture-personal-note" style={{ fontWeight: 800, fontSize: '1.05rem' }}>
                  나만의 강의 필기 노트 (Day {dayPad})
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
          TAB 5: 1:1 AI NATIVE TUTOR & 3-TIER RINGLE PARAPHRASING
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
                      playbackRate
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
                <InteractiveText
                  text={
                    tutorStep === 1
                      ? module.tutorScenario.openingQuestionEn
                      : module.tutorScenario.followUpQuestionEn
                  }
                  onLookupWord={onOpenDictionary}
                />
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
                  <InteractiveText
                    text={module.tutorScenario.modelAnswerEn}
                    onLookupWord={onOpenDictionary}
                  />
                </p>
                <button
                  id="listen-tutor-model-answer-btn"
                  type="button"
                  className="inline-audio-btn"
                  style={{ marginTop: '8px' }}
                  onClick={() => speakEnglish(module.tutorScenario.modelAnswerEn, playbackRate)}
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
                      onClick={() => speakEnglish(latestFeedback.grammarFix, playbackRate)}
                    >
                      <Volume2 size={14} /> 듣기
                    </button>
                  </div>
                  <p className="para-en-main">
                    <InteractiveText
                      text={latestFeedback.grammarFix}
                      onLookupWord={onOpenDictionary}
                    />
                  </p>
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
                      onClick={() => speakEnglish(latestFeedback.casualNative, playbackRate)}
                    >
                      <Volume2 size={14} /> 듣기
                    </button>
                  </div>
                  <p className="para-en-main">
                    <InteractiveText
                      text={latestFeedback.casualNative}
                      onLookupWord={onOpenDictionary}
                    />
                  </p>
                </div>

                <div className="para-box business">
                  <div className="section-label-between">
                    <span className="para-tag amber">③ 글로벌 미팅 · 이메일 격식 표현</span>
                    <button
                      id="listen-para-business-btn"
                      type="button"
                      className="inline-audio-btn"
                      onClick={() => speakEnglish(latestFeedback.businessNative, playbackRate)}
                    >
                      <Volume2 size={14} /> 듣기
                    </button>
                  </div>
                  <p className="para-en-main">
                    <InteractiveText
                      text={latestFeedback.businessNative}
                      onLookupWord={onOpenDictionary}
                    />
                  </p>
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
                      sourceLabel: `Day ${dayPad} 1:1 과외 첨삭`,
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

      {/* =======================================================
          TAB 6: MULTI-TURN REALTALK ROLEPLAY + 1-MIN SPEAKING + ELO/PATTERN GYM
         ======================================================= */}
      {studioTab === 'roleplay' && (
        <div>
          <div className="sitcom-submode-bar" role="tablist" aria-label="스피킹 훈련 모드">
            <button
              id="roleplay-sub-5turn"
              type="button"
              role="tab"
              aria-selected={roleplaySubMode === 'roleplay'}
              className={`sitcom-sub-btn ${roleplaySubMode === 'roleplay' ? 'active' : ''}`}
              onClick={() => setRoleplaySubMode('roleplay')}
            >
              <MessageSquareText size={15} />
              <span>5턴 AI 롤플레이 (12편)</span>
            </button>
            <button
              id="roleplay-sub-1min-speaking"
              type="button"
              role="tab"
              aria-selected={roleplaySubMode === 'speaking'}
              className={`sitcom-sub-btn ${roleplaySubMode === 'speaking' ? 'active' : ''}`}
              onClick={() => setRoleplaySubMode('speaking')}
            >
              <Mic size={15} />
              <span>1분 스피킹 챌린지 (16주제)</span>
            </button>
            <button
              id="roleplay-sub-pattern-gym"
              type="button"
              role="tab"
              aria-selected={roleplaySubMode === 'pattern-gym'}
              className={`sitcom-sub-btn ${roleplaySubMode === 'pattern-gym' ? 'active' : ''}`}
              onClick={() => setRoleplaySubMode('pattern-gym')}
            >
              <Play size={15} />
              <span>⚡ ELO 빈칸 · 2초 반사훈련 ({vocabEloRating})</span>
            </button>
          </div>

          {roleplaySubMode === 'roleplay' && (
            <RealTalkRoleplayStudio
              completedRoleplayIds={completedRoleplayIds}
              onCompleteRoleplay={onCompleteRoleplay}
              onAddReviewCard={onAddReviewCard}
              onOpenDictionary={onOpenDictionary}
            />
          )}

          {roleplaySubMode === 'speaking' && (
            <Suspense
              fallback={
                <div className="surface-card" style={{ textAlign: 'center', padding: '40px' }}>
                  1분 실전 스피킹 챌린지 스튜디오를 여는 중...
                </div>
              }
            >
              <SpeakingChallengeLab
                speakingAttempts={speakingAttempts}
                onRecordSpeakingAttempt={onRecordSpeakingAttempt}
                onOpenDictionary={onOpenDictionary}
              />
            </Suspense>
          )}

          {roleplaySubMode === 'pattern-gym' && (
            <Suspense
              fallback={
                <div className="surface-card" style={{ textAlign: 'center', padding: '40px' }}>
                  말해보카식 ELO 빈칸 &amp; 스픽식 2초 반사훈련 엔진을 불러오는 중...
                </div>
              }
            >
              <AdaptiveClozeAndPatternGym
                vocabEloRating={vocabEloRating}
                clozeSolvedCount={clozeSolvedCount}
                patternReflexMasteredIds={patternReflexMasteredIds}
                initialMode={initialGymMode ?? 'cloze-elo'}
                onUpdateClozeElo={onUpdateClozeElo}
                onCompletePatternSet={onCompletePatternSet}
                onOpenDictionary={onOpenDictionary}
              />
            </Suspense>
          )}
        </div>
      )}

      {/* =======================================================
          TAB 7: GRADED ENGLISH STORYBOOK & AUDIOBOOK LIBRARY (12 BOOKS)
         ======================================================= */}
      {studioTab === 'storybook' && (
        <Suspense
          fallback={
            <div className="surface-card" style={{ textAlign: 'center', padding: '40px' }}>
              영어 원서 스토리북 도서관을 여는 중...
            </div>
          }
        >
          <StorybookLibraryStudio
            completedStorybookIds={completedStorybookIds}
            onCompleteStorybook={onCompleteStorybook}
            onAddReviewCard={onAddReviewCard}
            onOpenDictionary={onOpenDictionary}
          />
        </Suspense>
      )}
    </main>
  );
}
