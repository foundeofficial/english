import type { MasteryStage } from './academy.ts';

export interface ConditionalWritingItem {
  id: string;
  schoolLevel: 'middle' | 'high';
  gradeBadge: string;
  grammarPointKo: string;
  koreanPrompt: string;
  conditionsKo: string[];
  givenWords: string[];
  answerEn: string;
  acceptableAlts?: string[];
  explanationKo: string;
  grammarTag: string;
}

export interface ErrorCorrectionSegment {
  marker: '①' | '②' | '③' | '④' | '⑤';
  text: string;
  isError: boolean;
}

export interface ErrorCorrectionItem {
  id: string;
  schoolLevel: 'middle' | 'high';
  gradeBadge: string;
  grammarPointKo: string;
  koreanMeaning: string;
  segments: ErrorCorrectionSegment[];
  wrongText: string;
  correctFix: string;
  acceptableFixes?: string[];
  explanationKo: string;
  grammarTag: string;
}

export interface IrregularVerbItem {
  id: string;
  pattern: 'AAA' | 'ABB' | 'ABA' | 'ABC';
  base: string;
  past: string;
  pp: string;
  meaningKo: string;
  memoryTipKo: string;
  exampleEn: string;
  exampleKo: string;
}

export interface ConfusablePairItem {
  id: string;
  tier: 'middle' | 'high-csat';
  wordA: string;
  meaningAKo: string;
  wordB: string;
  meaningBKo: string;
  contrastTipKo: string;
  quizSentence: string; // contains _____
  quizMeaningKo: string;
  quizAnswer: string;
  quizExplanationKo: string;
}

export interface SpeakingPromptItem {
  id: string;
  stage: MasteryStage;
  categoryBadge: string;
  cefrBadge: string;
  titleKo: string;
  promptEn: string;
  promptKo: string;
  prepSec: number;
  speakSec: number;
  outlineStepsKo: [string, string, string];
  keyExpressions: string[];
  modelAnswerEn: string;
  modelAnswerKo: string;
}

export interface SpeakingAttemptRecord {
  id: string;
  promptId: string;
  titleKo: string;
  date: string;
  wordCount: number;
  wpm: number;
  estimatedBand: string;
  score: number;
}
