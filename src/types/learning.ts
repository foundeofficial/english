export type TrackCategory =
  | 'all'
  | 'foundation'
  | 'school-csat'
  | 'daily-order'
  | 'business'
  | 'opic-speaking'
  | 'trend-news';

export type AcademyDivisionId =
  | 'foundation'
  | 'school-csat'
  | 'career-opic'
  | 'global-biz';

export type ActiveTab =
  | 'today'
  | 'syllabus'
  | 'vocab-quiz'
  | 'sprint'
  | 'deep-class'
  | 'workbook'
  | 'creator-studio'
  | 'vault'
  | 'report-card';

export type DifficultyOffset = -1 | 0 | 1;
export type PedagogyStyle = 'deductive-grammar' | 'inductive-speaking';
export type DailyCapacity = 5 | 10 | 20;
export type KoreanScaffold = 'high' | 'balanced' | 'immersion';

export interface LearnerCalibration {
  baseKLevel: number; // 1 (Pre-A1) to 12 (C1)
  difficultyOffset: DifficultyOffset;
  pedagogyStyle: PedagogyStyle;
  dailyCapacity: DailyCapacity;
  koreanScaffold: KoreanScaffold;
}

export interface FiveSkillRadar {
  vocabulary: number; // 1-12
  grammar: number; // 1-12
  listening: number; // 1-12
  speaking: number; // 1-12
  writing: number; // 1-12
}

export interface LearnerPersonaPreset {
  id: string;
  nameKo: string;
  roleLabel: string;
  division: AcademyDivisionId;
  radar: FiveSkillRadar;
  calibration: LearnerCalibration;
}

export interface VocabItem {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaningKo: string;
  englishDef: string;
  confusingPairTip: string;
  exampleEn: string;
  exampleKo: string;
  division: AcademyDivisionId;
  kLevel: number;
}

export interface MultiLevelVariant {
  kLevelLabel: string;
  cefr: string;
  headlineEn: string;
  passageEn: string;
  structuralSlashEn: string;
  translationKo: string;
  englishOnlyDefinition: string;
  keyCollocations: Array<{ en: string; ko: string; enDef: string }>;
  discussionQuestionEn: string;
}

export interface DailyLiveArticle {
  id: string;
  publishedDate: string;
  categoryKo: string;
  topicTitleKo: string;
  variants: {
    easy: MultiLevelVariant;
    standard: MultiLevelVariant;
    challenge: MultiLevelVariant;
  };
}

export type SemesterDayType = 'regular-lesson' | 'weekly-exam' | 'monthly-mock' | 'flow-sitcom';

export interface SemesterDayNode {
  day: number; // 1..90
  week: number; // 1..12
  dayInWeek: number;
  dayType: SemesterDayType;
  cefr: string;
  titleKo: string;
  grammarPoint: string;
  coreSentenceEn: string;
  coreSentenceKo: string;
  linkedUnitId: string;
  qaAccuracyScore: number;
}

export interface FlowSitcomShot {
  shotNumber: number;
  cameraSpec: string;
  character: string;
  dialogueEn: string;
  dialogueKo: string;
}

export interface ExamQuestion {
  id: string;
  number: number;
  questionType: 'multiple-choice' | 'sentence-rewrite';
  grammarTag: string;
  promptKo: string;
  promptEn: string;
  options?: string[];
  correctAnswer: string;
  explanationKo: string;
  twinVariant: {
    promptKo: string;
    promptEn: string;
    correctAnswer: string;
    explanationKo: string;
  };
}

export interface NuanceCard {
  expression: string;
  koreanMeaning: string;
  englishDefinition: string;
  structuralFormula: string;
  konglishTrap: string;
  nativeNuance: string;
  casualExample: string;
  politeExample: string;
  levelVariants: {
    easy: string;
    standard: string;
    challenge: string;
  };
}

export interface SprintQuestion {
  id: string;
  type: 'chunk-order' | 'fill-blank' | 'speak-prompt';
  koreanPrompt: string;
  englishPromptHint: string;
  koreanChunksGuide: string[];
  targetEnglish: string;
  chunks?: string[];
  blankSentence?: { before: string; answer: string; after: string; hint: string };
  acceptableKeywords?: string[];
  nuanceExplanation: string;
}

export interface LectureChapter {
  id: string;
  timestamp: string;
  durationMin: number;
  title: string;
  boardFormula: string;
  koreanMisconception: string;
  nativeMindset: string;
  exampleEn: string;
  exampleKo: string;
  instructorScript: string;
}

export interface DictationItem {
  id: string;
  speaker: string;
  fullAudioText: string;
  beforeBlank: string;
  answer: string;
  afterBlank: string;
  koreanTranslation: string;
  listeningTip: string;
}

export interface TutorPromptTurn {
  id: string;
  tutorQuestionEn: string;
  tutorQuestionKo: string;
  followUpProbeEn: string;
  expansionHints: string[];
  sampleModelAnswer: string;
}

export interface CurriculumUnit {
  id: string;
  level: 'Lv.1 Pre-A1' | 'Lv.2 A1+' | 'Lv.5 B1' | 'Lv.6 B1+' | 'Lv.7 B2-' | 'Lv.8 B2';
  kLevelNum: number;
  category: Exclude<TrackCategory, 'all'>;
  categoryLabel: string;
  title: string;
  subtitle: string;
  keySentence: string;
  sprintMinutes: number;
  deepClassMinutes: number;
  instructorName: string;
  visualAssetPath?: string;
  flowSitcomTitle?: string;
  flowSitcomShots?: FlowSitcomShot[];
  nuanceCard: NuanceCard;
  sprintQuestions: SprintQuestion[];
  lectureChapters: LectureChapter[];
  dictationItems: DictationItem[];
  workbookWritingPrompt: {
    situationKo: string;
    guidePoints: string[];
    modelParagraphEn: string;
  };
  examQuestions: ExamQuestion[];
  tutorTurns: TutorPromptTurn[];
}

export interface QAGateResult {
  gateName: string;
  passed: boolean;
  score: number;
  detail: string;
}

export interface UnitQAReport {
  unitId: string;
  unitTitle: string;
  overallScore: number;
  verified: boolean;
  gates: QAGateResult[];
}

export interface ParaphraseResult {
  id: string;
  createdAt: string;
  unitTitle: string;
  originalInput: string;
  grammarFix: string;
  tutorExplanationKo: string;
  casualNative: string;
  businessNative: string;
  latencySec?: number;
}

export type SpacedStage = 'D+1' | 'D+3' | 'D+7' | 'D+14' | 'Mastered';

export interface ReviewItem {
  id: string;
  koreanPrompt: string;
  targetEnglish: string;
  explanationKo: string;
  sourceMode:
    | 'sprint'
    | 'deep-tutor'
    | 'clinic'
    | 'exam-clinic'
    | 'handwriting-ocr'
    | 'vocab-quiz';
  stage: SpacedStage;
  dueToday: boolean;
}

export interface DiagnosticQuestion {
  id: string;
  skill: keyof FiveSkillRadar;
  difficultyKLevel: number;
  questionKo: string;
  options: { label: string; isCorrect: boolean; feedback: string }[];
}

export interface ExamAttemptRecord {
  id: string;
  unitId: string;
  unitTitle: string;
  takenAt: string;
  scorePercent: number;
  passed: boolean;
  wrongQuestionIds: string[];
}

export interface UserProgress {
  activePersonaId: string;
  learnerName: string;
  division: AcademyDivisionId;
  streakDays: number;
  totalOutputSentences: number;
  sprintMinutesToday: number;
  deepMinutesToday: number;
  vocabQuizBestScore: number;
  completedSprintIds: string[];
  completedDeepIds: string[];
  completedSemesterDays: number[];
  masteredVocabIds: string[];
  skillRadar: FiveSkillRadar;
  calibration: LearnerCalibration;
  diagnosed: boolean;
  silentCommuteMode: boolean;
  lectureNotes: Record<string, string>;
  paraphraseHistory: ParaphraseResult[];
  examHistory: ExamAttemptRecord[];
  reviewVault: ReviewItem[];
}
