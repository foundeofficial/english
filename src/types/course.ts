export type MainRoute = 'home' | 'lecture' | 'worksheet' | 'vocab-review';

export type LevelTier = 'basic' | 'standard' | 'advanced';
export type StudyPace = 'light' | 'standard' | 'intensive';
export type GuideLanguage = 'bilingual' | 'english-only';

export interface LearnerSettings {
  learnerName: string;
  levelTier: LevelTier; // 초급 Lv.1 / 중급 표준 Lv.2 / 실무 심화 Lv.3
  studyPace: StudyPace; // 가볍게(5분) / 표준(15분) / 집중(40분)
  showStructureSlashes: boolean; // S/V/O 직독직해 끊어읽기 표시 여부
  guideLanguage: GuideLanguage;
  silentMode: boolean;
  geminiApiKey?: string;
}

export interface VocabEntry {
  id: string;
  word: string;
  phonetic: string;
  pos: string;
  meaningKo: string;
  meaningEn: string;
  nuanceTipKo: string;
  exampleEn: string;
  exampleKo: string;
}

export interface DialogueTurn {
  id: string;
  speaker: 'Chloe' | 'Marcus' | 'Barista' | 'Interviewer';
  roleLabel: string;
  voicePitch: number;
  sceneImage: string;
  cameraMotion: 'zoom-in' | 'pan-right' | 'pan-left';
  english: string;
  slashBroken: string;
  korean: string;
  keyHighlight: string;
  noteKo: string;
}

export interface GrammarSection {
  title: string;
  coreFormula: string;
  wrongKonglish: string;
  rightNative: string;
  explanationKo: string;
  registerSpectrum: {
    casual: string;
    standard: string;
    formal: string;
  };
}

export interface SprintDrillItem {
  id: string;
  drillType: 'chunk-build' | 'active-blank' | 'konglish-fix';
  promptKo: string;
  promptEnHint: string;
  targetEn: string;
  chunks?: string[];
  blankData?: {
    before: string;
    answer: string;
    after: string;
    firstLetterHint: string;
  };
  wrongKonglishOption?: string;
  explanationKo: string;
}

export interface WorksheetExamItem {
  id: string;
  number: number;
  part: 'Part 1 · 어휘·구동사 빈칸 영작' | 'Part 2 · 어법·뉘앙스 실전 객관식' | 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작';
  grammarTag: string;
  questionKo: string;
  stimulusEn: string;
  options?: string[];
  answer: string;
  acceptableAlt?: string[];
  explanationKo: string;
  twinClinic: {
    questionKo: string;
    stimulusEn: string;
    answer: string;
    explanationKo: string;
  };
}

export interface TutorScenario {
  openingQuestionEn: string;
  openingQuestionKo: string;
  followUpQuestionEn: string;
  followUpQuestionKo: string;
  recommendedChunks: string[];
  modelAnswerEn: string;
}

export interface DayLessonModule {
  dayNumber: number; // 1..6
  dayBadge: string;
  categoryLabel: string;
  title: string;
  subtitle: string;
  heroImage: string;
  secondaryImage: string;
  estimatedSprintMin: number;
  estimatedLectureMin: number;
  keyExpression: string;
  keySentenceByTier: {
    basic: string;
    standard: string;
    advanced: string;
  };
  vocabList: VocabEntry[]; // 15 curated words per lesson
  dialogue: DialogueTurn[]; // 6-7 full turns cinematic conversation
  grammarSections: GrammarSection[]; // Deep textbook principles
  sprintDrills: SprintDrillItem[]; // 10 high-density drills
  worksheetExam: WorksheetExamItem[]; // 15-20 authentic exam & worksheet items
  tutorScenario: TutorScenario;
}

export interface SpacedReviewCard {
  id: string;
  promptKo: string;
  targetEn: string;
  noteKo: string;
  sourceLabel: string;
  intervalDays: 1 | 3 | 7 | 14 | 30;
  mastered: boolean;
}

export interface ParaphraseResult {
  id: string;
  createdAt: string;
  dayNumber: number;
  originalInput: string;
  grammarFix: string;
  tutorExplanationKo: string;
  casualNative: string;
  businessNative: string;
}

export interface DayCompletionRecord {
  sprintCompleted: boolean;
  lectureCompleted: boolean;
  examScore: number | null;
  vocabMasteredCount: number;
}

export interface AppPersistState {
  onboarded: boolean;
  streakDays: number;
  totalSentencesSpoken: number;
  selectedDay: number;
  settings: LearnerSettings;
  dayRecords: Record<number, DayCompletionRecord>;
  lectureNotes: Record<number, string>;
  masteredVocabIds: string[];
  reviewDeck: SpacedReviewCard[];
  savedParaphrases: ParaphraseResult[];
}
