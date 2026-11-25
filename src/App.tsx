import { useEffect, useState } from 'react';
import { AuthenticWorksheetExam } from './components/AuthenticWorksheetExam.tsx';
import { CinematicLectureStudio } from './components/CinematicLectureStudio.tsx';
import { DictionaryDrawer } from './components/DictionaryDrawer.tsx';
import { HomeDashboard } from './components/HomeDashboard.tsx';
import { OnboardingSettingsModal } from './components/OnboardingSettingsModal.tsx';
import { SprintFocusOverlay } from './components/SprintFocusOverlay.tsx';
import { TopNavHeader } from './components/TopNavHeader.tsx';
import { VocabAndReviewBook } from './components/VocabAndReviewBook.tsx';
import { INITIAL_REVIEW_CARDS } from './data/courseCatalog.ts';
import {
  buildLoadedLexicon,
  loadDayModule,
  loadFullCourseLexicon
} from './data/courseLoader.ts';
import { day1Module } from './data/days/day1.ts';
import { normalizeLegacyLevelTier } from './data/levels.ts';
import type {
  AppPersistState,
  DayLessonModule,
  LearnerSettings,
  MainRoute,
  ParaphraseResult,
  SavedDictionaryWord,
  SpacedReviewCard
} from './types/course.ts';
import type { CourseLexiconEntry } from './utils/dictionaryApi.ts';

const STORAGE_KEY = 'korebridge_commercial_v4';
const LEGACY_STORAGE_KEY = 'korebridge_commercial_v3';

const DEFAULT_STATE: AppPersistState = {
  onboarded: false,
  streakDays: 3,
  totalSentencesSpoken: 12,
  selectedDay: 1,
  settings: {
    learnerName: '김민준',
    levelTier: 'b1',
    studyPace: 'standard',
    showStructureSlashes: true,
    guideLanguage: 'bilingual',
    silentMode: false,
    geminiApiKey: ''
  },
  dayRecords: {},
  lectureNotes: {},
  masteredVocabIds: ['d1-v01', 'd1-v03', 'd1-v04'],
  savedDictionaryWords: [],
  reviewDeck: INITIAL_REVIEW_CARDS,
  savedParaphrases: []
};

function loadInitialState(): AppPersistState {
  try {
    const raw =
      window.localStorage.getItem(STORAGE_KEY) ??
      window.localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw) as Partial<AppPersistState>;
    const normalizedLevel = normalizeLegacyLevelTier(parsed.settings?.levelTier);
    const clampedDay =
      typeof parsed.selectedDay === 'number' && parsed.selectedDay >= 1 && parsed.selectedDay <= 30
        ? parsed.selectedDay
        : 1;
    return {
      ...DEFAULT_STATE,
      ...parsed,
      selectedDay: clampedDay,
      savedDictionaryWords: Array.isArray(parsed.savedDictionaryWords)
        ? parsed.savedDictionaryWords
        : [],
      settings: {
        ...DEFAULT_STATE.settings,
        ...(parsed.settings ?? {}),
        levelTier: normalizedLevel
      }
    };
  } catch {
    return DEFAULT_STATE;
  }
}

function nextInterval(current: 1 | 3 | 7 | 14 | 30): {
  next: 1 | 3 | 7 | 14 | 30;
  graduated: boolean;
} {
  if (current === 1) return { next: 3, graduated: false };
  if (current === 3) return { next: 7, graduated: false };
  if (current === 7) return { next: 14, graduated: false };
  if (current === 14) return { next: 30, graduated: false };
  return { next: 30, graduated: true };
}

export default function App() {
  const [state, setState] = useState<AppPersistState>(loadInitialState);
  const [activeRoute, setActiveRoute] = useState<MainRoute>('home');
  const [sprintOpen, setSprintOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(!state.onboarded);

  // Lazy-loaded active Day module (Day 1 preloaded for 0ms first paint)
  const [currentModule, setCurrentModule] = useState<DayLessonModule>(day1Module);
  const [loadingDay, setLoadingDay] = useState(false);

  // Global Live English-Korean Dictionary Drawer states
  const [dictOpen, setDictOpen] = useState(false);
  const [dictInitialQuery, setDictInitialQuery] = useState('');
  const [dictSessionKey, setDictSessionKey] = useState(0);
  const [courseLexicon, setCourseLexicon] = useState<CourseLexiconEntry[]>(() =>
    buildLoadedLexicon()
  );

  useEffect(() => {
    let cancelled = false;
    void loadDayModule(state.selectedDay).then((mod) => {
      if (cancelled) return;
      setCurrentModule(mod);
      setLoadingDay(false);
      setCourseLexicon(buildLoadedLexicon());
    });
    return () => {
      cancelled = true;
    };
  }, [state.selectedDay]);

  // Global '/' shortcut to open Dictionary Drawer when not typing in an input
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      e.preventDefault();
      setDictInitialQuery('');
      setDictSessionKey((k) => k + 1);
      setDictOpen(true);
      void loadFullCourseLexicon().then((entries) => setCourseLexicon(entries));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage quota errors
    }

    if (import.meta.env.DEV) {
      fetch('/api/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state })
      }).catch(() => {});
    }
  }, [state]);

  const currentDayRec = state.dayRecords[currentModule.dayNumber] ?? {
    sprintCompleted: false,
    lectureCompleted: false,
    videoWatched: false,
    readingCompleted: false,
    examScore: null,
    vocabMasteredCount: 0
  };

  const handleOpenDictionary = (word = '') => {
    setDictInitialQuery(word);
    setDictSessionKey((k) => k + 1);
    setDictOpen(true);
    void loadFullCourseLexicon().then((entries) => setCourseLexicon(entries));
  };

  const handleSaveSettings = (nextSettings: LearnerSettings) => {
    setState((prev) => ({
      ...prev,
      onboarded: true,
      settings: nextSettings
    }));
    setSettingsModalOpen(false);
  };

  const handleSelectDay = (dayNumber: number) => {
    if (dayNumber !== currentModule.dayNumber) {
      setLoadingDay(true);
    }
    setState((prev) => ({ ...prev, selectedDay: dayNumber }));
  };

  const handleCompleteSprint = (spokenCount: number, missedCards: SpacedReviewCard[]) => {
    setState((prev) => {
      const prevRec = prev.dayRecords[currentModule.dayNumber] ?? {
        sprintCompleted: false,
        lectureCompleted: false,
        videoWatched: false,
        readingCompleted: false,
        examScore: null,
        vocabMasteredCount: 0
      };

      return {
        ...prev,
        streakDays: prevRec.sprintCompleted ? prev.streakDays : prev.streakDays + 1,
        totalSentencesSpoken: prev.totalSentencesSpoken + spokenCount,
        dayRecords: {
          ...prev.dayRecords,
          [currentModule.dayNumber]: {
            ...prevRec,
            sprintCompleted: true
          }
        },
        reviewDeck: [...missedCards, ...prev.reviewDeck]
      };
    });
    setSprintOpen(false);
  };

  const handleMarkLectureComplete = () => {
    setState((prev) => {
      const prevRec = prev.dayRecords[currentModule.dayNumber] ?? {
        sprintCompleted: false,
        lectureCompleted: false,
        videoWatched: false,
        readingCompleted: false,
        examScore: null,
        vocabMasteredCount: 0
      };
      return {
        ...prev,
        dayRecords: {
          ...prev.dayRecords,
          [currentModule.dayNumber]: {
            ...prevRec,
            lectureCompleted: !prevRec.lectureCompleted
          }
        }
      };
    });
  };

  const handleMarkVideoWatched = () => {
    setState((prev) => {
      const prevRec = prev.dayRecords[currentModule.dayNumber] ?? {
        sprintCompleted: false,
        lectureCompleted: false,
        videoWatched: false,
        readingCompleted: false,
        examScore: null,
        vocabMasteredCount: 0
      };
      return {
        ...prev,
        dayRecords: {
          ...prev.dayRecords,
          [currentModule.dayNumber]: {
            ...prevRec,
            videoWatched: !prevRec.videoWatched
          }
        }
      };
    });
  };

  const handleMarkReadingComplete = () => {
    setState((prev) => {
      const prevRec = prev.dayRecords[currentModule.dayNumber] ?? {
        sprintCompleted: false,
        lectureCompleted: false,
        videoWatched: false,
        readingCompleted: false,
        examScore: null,
        vocabMasteredCount: 0
      };
      return {
        ...prev,
        dayRecords: {
          ...prev.dayRecords,
          [currentModule.dayNumber]: {
            ...prevRec,
            readingCompleted: true
          }
        }
      };
    });
  };

  const handleSaveNote = (note: string) => {
    setState((prev) => ({
      ...prev,
      lectureNotes: {
        ...prev.lectureNotes,
        [currentModule.dayNumber]: note
      }
    }));
  };

  const handleSaveParaphrase = (item: ParaphraseResult, reviewCard?: SpacedReviewCard) => {
    setState((prev) => {
      const alreadyExists = prev.savedParaphrases.some((p) => p.id === item.id);
      return {
        ...prev,
        totalSentencesSpoken: alreadyExists
          ? prev.totalSentencesSpoken
          : prev.totalSentencesSpoken + 1,
        savedParaphrases: alreadyExists
          ? prev.savedParaphrases
          : [item, ...prev.savedParaphrases],
        reviewDeck: reviewCard ? [reviewCard, ...prev.reviewDeck] : prev.reviewDeck
      };
    });
  };

  const handleSubmitExamScore = (score: number, missedCards: SpacedReviewCard[]) => {
    setState((prev) => {
      const prevRec = prev.dayRecords[currentModule.dayNumber] ?? {
        sprintCompleted: false,
        lectureCompleted: false,
        videoWatched: false,
        readingCompleted: false,
        examScore: null,
        vocabMasteredCount: 0
      };
      const best =
        prevRec.examScore !== null ? Math.max(prevRec.examScore, score) : score;

      return {
        ...prev,
        dayRecords: {
          ...prev.dayRecords,
          [currentModule.dayNumber]: {
            ...prevRec,
            examScore: best
          }
        },
        reviewDeck: [...missedCards, ...prev.reviewDeck]
      };
    });
  };

  const handleToggleVocabMastered = (vocabId: string) => {
    setState((prev) => {
      const exists = prev.masteredVocabIds.includes(vocabId);
      const nextIds = exists
        ? prev.masteredVocabIds.filter((id) => id !== vocabId)
        : [...prev.masteredVocabIds, vocabId];
      return {
        ...prev,
        masteredVocabIds: nextIds
      };
    });
  };

  const handleSaveDictionaryWord = (word: SavedDictionaryWord) => {
    setState((prev) => {
      if (prev.savedDictionaryWords.some((w) => w.word.toLowerCase() === word.word.toLowerCase())) {
        return prev;
      }
      return {
        ...prev,
        savedDictionaryWords: [word, ...prev.savedDictionaryWords]
      };
    });
  };

  const handleRemoveSavedDictionaryWord = (wordId: string) => {
    setState((prev) => ({
      ...prev,
      savedDictionaryWords: prev.savedDictionaryWords.filter((w) => w.id !== wordId)
    }));
  };

  const handleAddReviewCard = (card: SpacedReviewCard) => {
    setState((prev) => ({
      ...prev,
      reviewDeck: [card, ...prev.reviewDeck]
    }));
  };

  const handlePromoteReviewCard = (cardId: string) => {
    setState((prev) => ({
      ...prev,
      reviewDeck: prev.reviewDeck.map((c) => {
        if (c.id !== cardId) return c;
        const { next, graduated } = nextInterval(c.intervalDays);
        return {
          ...c,
          intervalDays: next,
          mastered: graduated
        };
      })
    }));
  };

  const reviewDueCount = state.reviewDeck.filter((c) => !c.mastered).length;

  return (
    <div>
      <TopNavHeader
        activeRoute={activeRoute}
        onNavigate={(route) => {
          setActiveRoute(route);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        streakDays={state.streakDays}
        reviewDueCount={reviewDueCount}
        settings={state.settings}
        onOpenSettings={() => setSettingsModalOpen(true)}
        onOpenDictionary={handleOpenDictionary}
      />

      {loadingDay && (
        <div className="day-loading-ribbon no-print" role="status">
          Day {String(state.selectedDay).padStart(2, '0')} 커리큘럼 데이터를 불러오는 중...
        </div>
      )}

      {activeRoute === 'home' && (
        <HomeDashboard
          state={state}
          currentModule={currentModule}
          onSelectDay={handleSelectDay}
          onStartSprint={() => setSprintOpen(true)}
          onNavigate={(route) => {
            setActiveRoute(route);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenDictionary={handleOpenDictionary}
        />
      )}

      {activeRoute === 'lecture' && (
        <CinematicLectureStudio
          key={`lecture-${currentModule.dayNumber}-${state.settings.showStructureSlashes}-${state.settings.levelTier}`}
          module={currentModule}
          settings={state.settings}
          dayRecords={state.dayRecords}
          lectureCompleted={currentDayRec.lectureCompleted}
          videoWatched={Boolean(currentDayRec.videoWatched)}
          readingCompleted={Boolean(currentDayRec.readingCompleted)}
          savedNote={state.lectureNotes[currentModule.dayNumber] ?? ''}
          savedParaphrases={state.savedParaphrases}
          onSelectDay={handleSelectDay}
          onMarkLectureComplete={handleMarkLectureComplete}
          onMarkVideoWatched={handleMarkVideoWatched}
          onMarkReadingComplete={handleMarkReadingComplete}
          onSaveNote={handleSaveNote}
          onSaveParaphrase={handleSaveParaphrase}
          onOpenDictionary={handleOpenDictionary}
        />
      )}

      {activeRoute === 'worksheet' && (
        <AuthenticWorksheetExam
          key={`worksheet-${currentModule.dayNumber}`}
          module={currentModule}
          settings={state.settings}
          dayRecords={state.dayRecords}
          previousBestScore={currentDayRec.examScore}
          onSelectDay={handleSelectDay}
          onSubmitExamScore={handleSubmitExamScore}
          onOpenDictionary={handleOpenDictionary}
        />
      )}

      {activeRoute === 'vocab-review' && (
        <VocabAndReviewBook
          key={`vocab-${currentModule.dayNumber}`}
          module={currentModule}
          dayRecords={state.dayRecords}
          masteredVocabIds={state.masteredVocabIds}
          savedDictionaryWords={state.savedDictionaryWords}
          reviewDeck={state.reviewDeck}
          onSelectDay={handleSelectDay}
          onToggleVocabMastered={handleToggleVocabMastered}
          onRemoveSavedDictionaryWord={handleRemoveSavedDictionaryWord}
          onPromoteReviewCard={handlePromoteReviewCard}
          onOpenDictionary={handleOpenDictionary}
        />
      )}

      {sprintOpen && (
        <SprintFocusOverlay
          key={`sprint-${currentModule.dayNumber}`}
          module={currentModule}
          silentMode={state.settings.silentMode}
          onToggleSilentMode={() =>
            setState((prev) => ({
              ...prev,
              settings: { ...prev.settings, silentMode: !prev.settings.silentMode }
            }))
          }
          onCompleteSprint={handleCompleteSprint}
          onClose={() => setSprintOpen(false)}
        />
      )}

      <DictionaryDrawer
        key={`dict-${dictSessionKey}`}
        isOpen={dictOpen}
        initialQuery={dictInitialQuery}
        localLexicon={courseLexicon}
        savedWords={state.savedDictionaryWords}
        onClose={() => setDictOpen(false)}
        onSaveWord={handleSaveDictionaryWord}
        onAddReviewCard={handleAddReviewCard}
        onJumpToDay={(day) => {
          handleSelectDay(day);
          setActiveRoute('lecture');
        }}
      />

      <OnboardingSettingsModal
        key={`settings-${settingsModalOpen ? 'open' : 'closed'}-${state.settings.levelTier}`}
        isOpen={settingsModalOpen}
        isFirstVisit={!state.onboarded}
        settings={state.settings}
        onSave={handleSaveSettings}
        onClose={() => setSettingsModalOpen(false)}
      />
    </div>
  );
}
