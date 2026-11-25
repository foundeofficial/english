import { useEffect, useMemo, useState } from 'react';
import {
  ACADEMY_DIVISIONS,
  CORE_VOCAB_DECK,
  LEARNER_PERSONA_PRESETS
} from './data/academyDivisions';
import {
  DIAGNOSTIC_QUESTIONS,
  INITIAL_REVIEW_ITEMS
} from './data/curriculum';
import { ALL_90_DAY_UNITS } from './data/full90DayUnits';
import { DAILY_LIVE_ARTICLES, SEMESTER_90_DAYS } from './data/semester90Days';
import type {
  AcademyDivisionId,
  ActiveTab,
  CurriculumUnit,
  DailyLiveArticle,
  ExamAttemptRecord,
  FiveSkillRadar,
  LearnerCalibration,
  LearnerPersonaPreset,
  ParaphraseResult,
  ReviewItem,
  SpacedStage,
  UserProgress
} from './types/learning';
import { HeaderNav } from './components/HeaderNav';
import { CalibrationBar } from './components/CalibrationBar';
import { TodayHub } from './components/TodayHub';
import { SemesterSyllabusView } from './components/SemesterSyllabusView';
import { VocabPopQuizView } from './components/VocabPopQuizView';
import { SprintSession } from './components/SprintSession';
import { DeepClassStudio } from './components/DeepClassStudio';
import { LegacyWorkbookCenter } from './components/LegacyWorkbookCenter';
import { CreatorFlowStudio } from './components/CreatorFlowStudio';
import { ReviewVaultView } from './components/ReviewVaultView';
import { AcademicReportCardView } from './components/AcademicReportCardView';

const STORAGE_KEY = 'korebridge_complete_v1';

const DEFAULT_PERSONA = LEARNER_PERSONA_PRESETS[0];

const DEFAULT_PROGRESS: UserProgress = {
  activePersonaId: DEFAULT_PERSONA.id,
  learnerName: DEFAULT_PERSONA.nameKo,
  division: DEFAULT_PERSONA.division,
  streakDays: 6,
  totalOutputSentences: 94,
  sprintMinutesToday: 0,
  deepMinutesToday: 0,
  vocabQuizBestScore: 88,
  completedSprintIds: [],
  completedDeepIds: [],
  completedSemesterDays: [1, 2, 3, 4, 5, 6],
  masteredVocabIds: ['voc-1', 'voc-7'],
  skillRadar: DEFAULT_PERSONA.radar,
  calibration: DEFAULT_PERSONA.calibration,
  diagnosed: true,
  silentCommuteMode: false,
  lectureNotes: {},
  paraphraseHistory: [],
  examHistory: [],
  reviewVault: INITIAL_REVIEW_ITEMS
};

const STAGE_NEXT: Record<SpacedStage, SpacedStage> = {
  'D+1': 'D+3',
  'D+3': 'D+7',
  'D+7': 'D+14',
  'D+14': 'Mastered',
  Mastered: 'Mastered'
};

export function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('today');
  const [units, setUnits] = useState<CurriculumUnit[]>(ALL_90_DAY_UNITS);
  const [dailyArticles, setDailyArticles] = useState<DailyLiveArticle[]>(DAILY_LIVE_ARTICLES);
  const [selectedUnit, setSelectedUnit] = useState<CurriculumUnit>(
    ALL_90_DAY_UNITS.find((u) => u.id === 'day-unit-24') ?? ALL_90_DAY_UNITS[0]
  );

  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_PROGRESS,
          ...parsed,
          skillRadar: { ...DEFAULT_PROGRESS.skillRadar, ...(parsed.skillRadar || {}) },
          calibration: { ...DEFAULT_PROGRESS.calibration, ...(parsed.calibration || {}) }
        };
      }
    } catch {
      // Fallback
    }
    return DEFAULT_PROGRESS;
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [uRes, aRes, pRes] = await Promise.all([
          fetch('/api/units'),
          fetch('/api/daily-articles'),
          fetch('/api/progress')
        ]);
        if (cancelled) return;
        if (uRes.ok) {
          const data = (await uRes.json()) as { units?: CurriculumUnit[] };
          if (data.units && data.units.length >= 90) {
            setUnits(data.units);
          }
        }
        if (aRes.ok) {
          const data = (await aRes.json()) as { articles?: DailyLiveArticle[] };
          if (data.articles && data.articles.length > 0) {
            setDailyArticles(data.articles);
          }
        }
        if (pRes.ok) {
          const data = (await pRes.json()) as { progress?: UserProgress | null };
          if (data.progress && data.progress.learnerName) {
            setProgress(data.progress);
          }
        }
      } catch {
        // Static / Offline seamless fallback
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore quota issues
    }
    fetch('/api/progress', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ progress })
    }).catch(() => {});
  }, [progress]);

  // Showcase representative units across all 4 divisions on TodayHub
  const featuredHubUnits = useMemo(() => {
    const showcaseIds = [
      'unit-foundation-starter',
      'unit-school-csat-master',
      'day-unit-02',
      'day-unit-24',
      'day-unit-49',
      'day-unit-76'
    ];
    const picked = showcaseIds
      .map((id) => units.find((u) => u.id === id))
      .filter((u): u is CurriculumUnit => Boolean(u));
    const customOnes = units.filter((u) => u.id.startsWith('custom-'));
    return [...customOnes, ...picked];
  }, [units]);

  const dueReviewCount = progress.reviewVault.filter(
    (item) => item.dueToday && item.stage !== 'Mastered'
  ).length;

  const handleUpdateCalibration = (next: Partial<LearnerCalibration>) => {
    setProgress((prev) => ({
      ...prev,
      calibration: {
        ...prev.calibration,
        ...next
      }
    }));
  };

  const handleSwitchPersona = (preset: LearnerPersonaPreset) => {
    setProgress((prev) => ({
      ...prev,
      activePersonaId: preset.id,
      learnerName: preset.nameKo,
      division: preset.division,
      skillRadar: preset.radar,
      calibration: preset.calibration
    }));
    const divInfo = ACADEMY_DIVISIONS.find((d) => d.id === preset.division);
    if (divInfo) {
      const target = units.find((u) => u.id === divInfo.recommendedUnitId);
      if (target) setSelectedUnit(target);
    }
  };

  const handleChangeDivision = (division: AcademyDivisionId) => {
    setProgress((prev) => ({ ...prev, division }));
    const divInfo = ACADEMY_DIVISIONS.find((d) => d.id === division);
    if (divInfo) {
      const target = units.find((u) => u.id === divInfo.recommendedUnitId);
      if (target) setSelectedUnit(target);
    }
  };

  const handleLaunchUnitMode = (
    unit: CurriculumUnit,
    mode: 'sprint' | 'deep-class' | 'workbook'
  ) => {
    setSelectedUnit(unit);
    setActiveTab(mode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRegisterGeneratedUnit = (
    newUnit: CurriculumUnit,
    launchMode: 'sprint' | 'deep-class' | 'workbook'
  ) => {
    setUnits((prev) =>
      prev.some((u) => u.id === newUnit.id) ? prev : [newUnit, ...prev]
    );
    setSelectedUnit(newUnit);
    setActiveTab(launchMode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleMasteredVocab = (vocabId: string) => {
    setProgress((prev) => {
      const exists = prev.masteredVocabIds.includes(vocabId);
      return {
        ...prev,
        masteredVocabIds: exists
          ? prev.masteredVocabIds.filter((id) => id !== vocabId)
          : [...prev.masteredVocabIds, vocabId]
      };
    });
  };

  const handleCompleteVocabQuiz = (
    scorePercent: number,
    wrongItems: Omit<ReviewItem, 'id' | 'stage' | 'dueToday'>[]
  ) => {
    setProgress((prev) => {
      const existing = new Set(prev.reviewVault.map((v) => v.targetEnglish));
      const added: ReviewItem[] = wrongItems
        .filter((w) => !existing.has(w.targetEnglish))
        .map((w, idx) => ({
          ...w,
          id: `rev-voc-${Date.now()}-${idx}`,
          stage: 'D+1',
          dueToday: true
        }));

      return {
        ...prev,
        vocabQuizBestScore: Math.max(prev.vocabQuizBestScore, scorePercent),
        totalOutputSentences: prev.totalOutputSentences + 4,
        reviewVault: [...added, ...prev.reviewVault]
      };
    });
  };

  const handleGenerateDailyTopic = async (topicKo: string) => {
    try {
      const resp = await fetch('/api/daily-articles/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicKo })
      });
      if (resp.ok) {
        const data = (await resp.json()) as { article: DailyLiveArticle };
        setDailyArticles((prev) => [data.article, ...prev]);
        return;
      }
    } catch {
      // Fallback
    }
  };

  const handleToggleDayComplete = (dayNum: number) => {
    setProgress((prev) => {
      const exists = prev.completedSemesterDays.includes(dayNum);
      return {
        ...prev,
        completedSemesterDays: exists
          ? prev.completedSemesterDays.filter((d) => d !== dayNum)
          : [...prev.completedSemesterDays, dayNum]
      };
    });
  };

  const handleToggleSilentMode = () => {
    setProgress((prev) => ({
      ...prev,
      silentCommuteMode: !prev.silentCommuteMode
    }));
  };

  const handleCompleteSprint = (
    unitId: string,
    minutesSpent: number,
    outputCount: number,
    wrongItems: Omit<ReviewItem, 'id' | 'stage' | 'dueToday'>[]
  ) => {
    setProgress((prev) => {
      const isFirstToday = prev.sprintMinutesToday === 0 && prev.deepMinutesToday === 0;
      const existingTargets = new Set(prev.reviewVault.map((r) => r.targetEnglish));
      const newVaultItems: ReviewItem[] = wrongItems
        .filter((w) => !existingTargets.has(w.targetEnglish))
        .map((w, idx) => ({
          ...w,
          id: `rev-sp-${Date.now()}-${idx}`,
          stage: 'D+1',
          dueToday: true
        }));

      return {
        ...prev,
        streakDays: isFirstToday ? prev.streakDays + 1 : prev.streakDays,
        sprintMinutesToday: prev.sprintMinutesToday + minutesSpent,
        totalOutputSentences: prev.totalOutputSentences + outputCount,
        completedSprintIds: prev.completedSprintIds.includes(unitId)
          ? prev.completedSprintIds
          : [...prev.completedSprintIds, unitId],
        reviewVault: [...newVaultItems, ...prev.reviewVault]
      };
    });
  };

  const handleSaveNote = (unitId: string, note: string) => {
    setProgress((prev) => ({
      ...prev,
      lectureNotes: {
        ...prev.lectureNotes,
        [unitId]: note
      }
    }));
  };

  const handleRecordParaphrase = (result: ParaphraseResult, addToVault: boolean) => {
    setProgress((prev) => {
      const alreadyInHistory = prev.paraphraseHistory.some((p) => p.id === result.id);
      const nextHistory = alreadyInHistory
        ? prev.paraphraseHistory
        : [result, ...prev.paraphraseHistory];

      let nextVault = prev.reviewVault;
      if (
        addToVault &&
        !prev.reviewVault.some((v) => v.targetEnglish === result.businessNative)
      ) {
        const vaultItem: ReviewItem = {
          id: `rev-para-${Date.now()}`,
          koreanPrompt: `내 표현 업그레이드: "${result.originalInput}"`,
          targetEnglish: result.businessNative,
          explanationKo: result.tutorExplanationKo,
          sourceMode: result.unitTitle.includes('클리닉') ? 'clinic' : 'deep-tutor',
          stage: 'D+1',
          dueToday: true
        };
        nextVault = [vaultItem, ...prev.reviewVault];
      }

      return {
        ...prev,
        totalOutputSentences: alreadyInHistory
          ? prev.totalOutputSentences
          : prev.totalOutputSentences + 1,
        paraphraseHistory: nextHistory,
        reviewVault: nextVault
      };
    });
  };

  const handleCompleteDeepClass = (
    unitId: string,
    minutesSpent: number,
    outputCount: number
  ) => {
    setProgress((prev) => {
      const isFirstToday = prev.sprintMinutesToday === 0 && prev.deepMinutesToday === 0;
      return {
        ...prev,
        streakDays: isFirstToday ? prev.streakDays + 1 : prev.streakDays,
        deepMinutesToday: prev.deepMinutesToday + minutesSpent,
        totalOutputSentences: prev.totalOutputSentences + outputCount,
        completedDeepIds: prev.completedDeepIds.includes(unitId)
          ? prev.completedDeepIds
          : [...prev.completedDeepIds, unitId]
      };
    });
  };

  const handleRecordExamResult = (
    record: ExamAttemptRecord,
    wrongReviewItems: Omit<ReviewItem, 'id' | 'stage' | 'dueToday'>[]
  ) => {
    setProgress((prev) => {
      const existingTargets = new Set(prev.reviewVault.map((v) => v.targetEnglish));
      const newItems: ReviewItem[] = wrongReviewItems
        .filter((w) => !existingTargets.has(w.targetEnglish))
        .map((w, idx) => ({
          ...w,
          id: `rev-exam-${Date.now()}-${idx}`,
          stage: 'D+1',
          dueToday: true
        }));

      return {
        ...prev,
        totalOutputSentences: prev.totalOutputSentences + 3,
        examHistory: [record, ...prev.examHistory],
        reviewVault: [...newItems, ...prev.reviewVault]
      };
    });
  };

  const handleAddHandwritingReview = (
    item: Omit<ReviewItem, 'id' | 'stage' | 'dueToday'>
  ) => {
    setProgress((prev) => ({
      ...prev,
      totalOutputSentences: prev.totalOutputSentences + 1,
      reviewVault: [
        {
          ...item,
          id: `rev-ocr-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
          stage: 'D+1',
          dueToday: true
        },
        ...prev.reviewVault
      ]
    }));
  };

  const handleAdvanceReviewStage = (itemId: string, remembered: boolean) => {
    setProgress((prev) => ({
      ...prev,
      totalOutputSentences: prev.totalOutputSentences + 1,
      reviewVault: prev.reviewVault.map((item) => {
        if (item.id !== itemId) return item;
        if (!remembered) {
          return { ...item, stage: 'D+1', dueToday: true };
        }
        return {
          ...item,
          stage: STAGE_NEXT[item.stage],
          dueToday: false
        };
      })
    }));
  };

  const handleSaveDiagnosis = (radar: FiveSkillRadar, recommendedBaseKLevel: number) => {
    setProgress((prev) => ({
      ...prev,
      skillRadar: radar,
      calibration: {
        ...prev.calibration,
        baseKLevel: recommendedBaseKLevel
      },
      diagnosed: true
    }));
  };

  return (
    <div className="app-shell">
      <HeaderNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        progress={progress}
        dueReviewCount={dueReviewCount}
      />

      <main className="container-main">
        <CalibrationBar
          calibration={progress.calibration}
          onChange={handleUpdateCalibration}
        />

        {activeTab === 'today' && (
          <TodayHub
            units={featuredHubUnits}
            selectedUnit={selectedUnit}
            progress={progress}
            dueReviewCount={dueReviewCount}
            onStartSprint={(u) => handleLaunchUnitMode(u, 'sprint')}
            onStartDeepClass={(u) => handleLaunchUnitMode(u, 'deep-class')}
            onNavigateTab={setActiveTab}
            onToggleSilentMode={handleToggleSilentMode}
            onSaveParaphraseToVault={(res) => handleRecordParaphrase(res, true)}
          />
        )}

        {activeTab === 'syllabus' && (
          <SemesterSyllabusView
            days={SEMESTER_90_DAYS}
            dailyArticles={dailyArticles}
            units={units}
            calibration={progress.calibration}
            completedDays={progress.completedSemesterDays}
            onToggleDayComplete={handleToggleDayComplete}
            onLaunchUnitMode={handleLaunchUnitMode}
            onGenerateDailyTopic={handleGenerateDailyTopic}
          />
        )}

        {activeTab === 'vocab-quiz' && (
          <VocabPopQuizView
            vocabDeck={CORE_VOCAB_DECK}
            activeDivision={progress.division}
            calibration={progress.calibration}
            masteredIds={progress.masteredVocabIds}
            bestScore={progress.vocabQuizBestScore}
            onToggleMastered={handleToggleMasteredVocab}
            onCompletePopQuiz={handleCompleteVocabQuiz}
          />
        )}

        {activeTab === 'sprint' && (
          <SprintSession
            units={units}
            unit={selectedUnit}
            silentMode={progress.silentCommuteMode}
            onSelectUnit={setSelectedUnit}
            onToggleSilentMode={handleToggleSilentMode}
            onCompleteSprint={handleCompleteSprint}
            onSwitchToDeepClass={(u) => handleLaunchUnitMode(u, 'deep-class')}
            onBackHome={() => setActiveTab('today')}
          />
        )}

        {activeTab === 'deep-class' && (
          <DeepClassStudio
            units={units}
            unit={selectedUnit}
            progress={progress}
            onSelectUnit={setSelectedUnit}
            onSaveNote={handleSaveNote}
            onRecordParaphrase={handleRecordParaphrase}
            onCompleteDeepClass={handleCompleteDeepClass}
            onBackHome={() => setActiveTab('today')}
          />
        )}

        {activeTab === 'workbook' && (
          <LegacyWorkbookCenter
            units={units}
            unit={selectedUnit}
            calibration={progress.calibration}
            examHistory={progress.examHistory}
            onSelectUnit={setSelectedUnit}
            onRecordExamResult={handleRecordExamResult}
            onAddHandwritingReview={handleAddHandwritingReview}
          />
        )}

        {activeTab === 'creator-studio' && (
          <CreatorFlowStudio
            defaultKLevel={progress.calibration.baseKLevel}
            onRegisterGeneratedUnit={handleRegisterGeneratedUnit}
          />
        )}

        {activeTab === 'vault' && (
          <ReviewVaultView
            units={units}
            progress={progress}
            onAdvanceStage={handleAdvanceReviewStage}
          />
        )}

        {activeTab === 'report-card' && (
          <AcademicReportCardView
            progress={progress}
            questions={DIAGNOSTIC_QUESTIONS}
            units={units}
            onSwitchPersona={handleSwitchPersona}
            onChangeDivision={handleChangeDivision}
            onSaveDiagnosis={handleSaveDiagnosis}
            onUpdateCalibration={handleUpdateCalibration}
            onStartUnitMode={handleLaunchUnitMode}
          />
        )}
      </main>
    </div>
  );
}

export default App;
