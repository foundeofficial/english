import { useEffect, useState } from 'react';
import { AuthenticWorksheetExam } from './components/AuthenticWorksheetExam.tsx';
import { CinematicLectureStudio } from './components/CinematicLectureStudio.tsx';
import { HomeDashboard } from './components/HomeDashboard.tsx';
import { OnboardingSettingsModal } from './components/OnboardingSettingsModal.tsx';
import { SprintFocusOverlay } from './components/SprintFocusOverlay.tsx';
import { TopNavHeader } from './components/TopNavHeader.tsx';
import { VocabAndReviewBook } from './components/VocabAndReviewBook.tsx';
import { getDayModule, INITIAL_REVIEW_CARDS } from './data/week1MasterCourse.ts';
import type {
  AppPersistState,
  LearnerSettings,
  MainRoute,
  ParaphraseResult,
  SpacedReviewCard
} from './types/course.ts';

const STORAGE_KEY = 'korebridge_commercial_v3';

const DEFAULT_STATE: AppPersistState = {
  onboarded: false,
  streakDays: 3,
  totalSentencesSpoken: 12,
  selectedDay: 1,
  settings: {
    learnerName: '김민준',
    levelTier: 'standard',
    studyPace: 'standard',
    showStructureSlashes: true,
    guideLanguage: 'bilingual',
    silentMode: false,
    geminiApiKey: ''
  },
  dayRecords: {},
  lectureNotes: {},
  masteredVocabIds: ['d1-v01', 'd1-v03', 'd1-v04'],
  reviewDeck: INITIAL_REVIEW_CARDS,
  savedParaphrases: []
};

function loadInitialState(): AppPersistState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw) as Partial<AppPersistState>;
    return {
      ...DEFAULT_STATE,
      ...parsed,
      settings: {
        ...DEFAULT_STATE.settings,
        ...(parsed.settings ?? {})
      }
    };
  } catch {
    return DEFAULT_STATE;
  }
}

function nextInterval(current: 1 | 3 | 7 | 14 | 30): { next: 1 | 3 | 7 | 14 | 30; graduated: boolean } {
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

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage quota errors
    }

    // Best-effort sync with optional Node SQLite backend if running
    if (import.meta.env.DEV) {
      fetch('/api/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state })
      }).catch(() => {});
    }
  }, [state]);

  const currentModule = getDayModule(state.selectedDay);
  const currentDayRec = state.dayRecords[currentModule.dayNumber] ?? {
    sprintCompleted: false,
    lectureCompleted: false,
    examScore: null,
    vocabMasteredCount: 0
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
    setState((prev) => ({ ...prev, selectedDay: dayNumber }));
  };

  const handleCompleteSprint = (spokenCount: number, missedCards: SpacedReviewCard[]) => {
    setState((prev) => {
      const prevRec = prev.dayRecords[currentModule.dayNumber] ?? {
        sprintCompleted: false,
        lectureCompleted: false,
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
      />

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
        />
      )}

      {activeRoute === 'lecture' && (
        <CinematicLectureStudio
          key={`lecture-${currentModule.dayNumber}-${state.settings.showStructureSlashes}`}
          module={currentModule}
          settings={state.settings}
          lectureCompleted={currentDayRec.lectureCompleted}
          savedNote={state.lectureNotes[currentModule.dayNumber] ?? ''}
          savedParaphrases={state.savedParaphrases}
          onSelectDay={handleSelectDay}
          onMarkLectureComplete={handleMarkLectureComplete}
          onSaveNote={handleSaveNote}
          onSaveParaphrase={handleSaveParaphrase}
        />
      )}

      {activeRoute === 'worksheet' && (
        <AuthenticWorksheetExam
          key={`worksheet-${currentModule.dayNumber}`}
          module={currentModule}
          settings={state.settings}
          previousBestScore={currentDayRec.examScore}
          onSelectDay={handleSelectDay}
          onSubmitExamScore={handleSubmitExamScore}
        />
      )}

      {activeRoute === 'vocab-review' && (
        <VocabAndReviewBook
          key={`vocab-${currentModule.dayNumber}`}
          module={currentModule}
          masteredVocabIds={state.masteredVocabIds}
          reviewDeck={state.reviewDeck}
          onSelectDay={handleSelectDay}
          onToggleVocabMastered={handleToggleVocabMastered}
          onPromoteReviewCard={handlePromoteReviewCard}
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

      <OnboardingSettingsModal
        isOpen={settingsModalOpen}
        isFirstVisit={!state.onboarded}
        settings={state.settings}
        onSave={handleSaveSettings}
        onClose={() => setSettingsModalOpen(false)}
      />
    </div>
  );
}
