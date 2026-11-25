export type MasteryStage = 'stage0' | 'stage1' | 'stage2' | 'stage3' | 'stage4';

export type SyntaxRole = 'S' | 'Aux' | 'V' | 'O' | 'C' | 'M' | 'CONN' | 'PLAIN';

export interface PhonicsLetterItem {
  id: string;
  letter: string;
  lowercase: string;
  isVowel: boolean;
  ipa: string;
  koreanSoundHint: string;
  mouthTipKo: string;
  exampleWords: Array<{
    word: string;
    meaningKo: string;
    emoji: string;
  }>;
}

export interface PhonicsBlendingItem {
  id: string;
  parts: string[];
  word: string;
  ipa: string;
  meaningKo: string;
  emoji: string;
  sampleSentenceEn: string;
  sampleSentenceKo: string;
}

export interface MagicEPair {
  id: string;
  shortWord: string;
  shortIpa: string;
  shortMeaningKo: string;
  longWord: string;
  longIpa: string;
  longMeaningKo: string;
  tipKo: string;
}

export interface PhonicsDigraphItem {
  id: string;
  pattern: string;
  category: 'consonant-digraph' | 'vowel-team' | 'r-controlled';
  ipa: string;
  soundCueKo: string;
  mouthTipKo: string;
  words: Array<{
    word: string;
    meaningKo: string;
    highlight: string;
  }>;
}

export interface MinimalPairItem {
  id: string;
  contrastLabel: string;
  wordA: string;
  ipaA: string;
  meaningAKo: string;
  wordB: string;
  ipaB: string;
  meaningBKo: string;
  koreanTrapTipKo: string;
  sentenceA: string;
  sentenceB: string;
}

export interface SightWordItem {
  id: string;
  word: string;
  tier: 'kinder' | 'elem-low' | 'elem-mid' | 'elem-high';
  meaningKo: string;
  sentenceEn: string;
  sentenceKo: string;
}

export interface CuratedExtraVideo {
  videoId: string;
  title: string;
  channel: string;
  badgeKo: string;
  summaryKo: string;
}

export interface FoundationWordBlock {
  text: string;
  role: 'S' | 'V' | 'O' | 'M';
  labelKo: string;
}

export interface FoundationSentence {
  id: string;
  english: string;
  literalOrderKo: string;
  naturalKo: string;
  patternHighlight: string;
}

export interface FoundationBuilderPuzzle {
  id: string;
  promptKo: string;
  targetEn: string;
  blocks: FoundationWordBlock[];
  explanationKo: string;
}

export interface FoundationUnit {
  id: string;
  unitNumber: number;
  badge: string;
  titleKo: string;
  subtitleKo: string;
  corePatternEn: string;
  koreanOrderDemo: string[];
  englishOrderDemo: FoundationWordBlock[];
  koreanBridgeTip: string;
  sentences: FoundationSentence[];
  builderPuzzles: FoundationBuilderPuzzle[];
}

export interface GrammarFormulaBlock {
  text: string;
  role: SyntaxRole;
  labelKo: string;
}

export interface GrammarQuizItem {
  id: string;
  questionKo: string;
  stimulusEn: string;
  options: string[];
  answer: string;
  explanationKo: string;
  grammarTag: string;
}

export interface GrammarMasterUnit {
  id: string;
  unitNumber: number;
  schoolStage: 'elementary' | 'middle' | 'high';
  stageLabelKo: string;
  titleKo: string;
  subtitleKo: string;
  coreFormula: string;
  formulaBlocks: GrammarFormulaBlock[];
  koreanTrapKo: string;
  nativeInsightKo: string;
  examples: Array<{
    en: string;
    ko: string;
    highlight: string;
  }>;
  quiz: GrammarQuizItem[];
}

export type TransformFormKey =
  | 'affirmative'
  | 'negative'
  | 'question'
  | 'past'
  | 'future'
  | 'perfect'
  | 'passive';

export interface TransformedSentenceView {
  fullEn: string;
  korean: string;
  ruleNoteKo: string;
  blocks: GrammarFormulaBlock[];
}

export interface SentenceTransformerItem {
  id: string;
  titleKo: string;
  levelLabel: string;
  forms: Record<TransformFormKey, TransformedSentenceView>;
}

export interface TenseCellItem {
  id: string;
  timeAxis: 'past' | 'present' | 'future';
  aspectAxis: 'simple' | 'progressive' | 'perfect' | 'perfect-progressive';
  nameEn: string;
  nameKo: string;
  formula: string;
  nuanceKo: string;
  exampleEn: string;
  exampleKo: string;
  koreanTrapKo: string;
  timelineMarker: {
    startPct: number;
    endPct: number;
    isRange: boolean;
    isOngoing: boolean;
  };
}

export interface SyntaxSegment {
  text: string;
  role: SyntaxRole;
  labelKo?: string;
}

export interface HighSchoolSentence {
  id: string;
  english: string;
  slashBroken: string;
  korean: string;
  segments: SyntaxSegment[];
}

export interface CSATQuestion {
  id: string;
  questionType:
    | '빈칸 추론'
    | '주제·요지'
    | '글의 순서 (A-B-C)'
    | '문장 삽입'
    | '어법성 판단'
    | '요약문 완성';
  questionKo: string;
  stimulusBox?: string;
  options: string[];
  answer: string;
  explanationKo: string;
  grammarTag: string;
}

export interface HighSchoolPassage {
  id: string;
  number: number;
  cefrLevel: 'b2' | 'c1';
  csatGradeTag: string;
  topicBadge: string;
  titleEn: string;
  titleKo: string;
  estimatedMin: number;
  sentences: HighSchoolSentence[];
  syntaxNotes: Array<{
    expression: string;
    grammarPointKo: string;
    explanationKo: string;
  }>;
  keyVocab: Array<{
    word: string;
    phonetic: string;
    meaningKo: string;
  }>;
  questions: CSATQuestion[];
}

export interface AcademicEssayPrompt {
  id: string;
  levelBadge: string;
  topicKo: string;
  promptEn: string;
  promptKo: string;
  thesisStarter: string;
  bodyStarter: string;
  conclusionStarter: string;
  targetVocab: string[];
  modelEssayEn: string;
  modelEssayKo: string;
}

export interface SavedEssayRecord {
  id: string;
  promptId: string;
  topicKo: string;
  createdAt: string;
  essayText: string;
  wordCount: number;
  totalScore: number;
  bandLabel: string;
  feedbackSummaryKo: string;
}

export interface RoleplayTurn {
  id: string;
  partnerLineEn: string;
  partnerLineKo: string;
  partnerMoodKo: string;
  learnerMissionKo: string;
  hintChips: Array<{
    tierLabel: string;
    textEn: string;
    meaningKo: string;
  }>;
  targetKeywords: string[];
  nativeRecastEn: string;
  recastTipKo: string;
}

export interface RoleplayScenario {
  id: string;
  stage: MasteryStage;
  stageLabelKo: string;
  titleKo: string;
  settingKo: string;
  partnerName: string;
  partnerRoleKo: string;
  coverImage: string;
  difficultyBadge: string;
  turns: RoleplayTurn[];
}
