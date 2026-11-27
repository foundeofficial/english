import type { MasteryStage } from './academy.ts';

export interface ConnectedSpeechRule {
  id: string;
  categoryKo: '연음 (Linking)' | 'T 약화 (Flap-T)' | '축약·약화 (Reduction)' | '탈락 (Elision)' | '강세 이동 (Stress)';
  titleKo: string;
  writtenEn: string;
  nativeSoundEn: string;
  koreanPronunciationGuide: string;
  ruleTipKo: string;
  exampleSentenceEn: string;
  exampleSentenceKo: string;
}

export interface StorybookSentence {
  id: string;
  en: string;
  slashBroken: string;
  ko: string;
  keyPhrase?: string;
}

export interface StorybookChapter {
  chapterNumber: number;
  titleEn: string;
  titleKo: string;
  sentences: StorybookSentence[];
}

export interface StorybookQuizItem {
  id: string;
  questionKo: string;
  options: string[];
  answer: string;
  explanationKo: string;
}

export interface GradedStorybook {
  id: string;
  bookNumber: number;
  stage: MasteryStage;
  tierLabelKo: string;
  cefrBadge: string;
  titleEn: string;
  titleKo: string;
  genreKo: string;
  coverImage: string;
  estimatedMin: number;
  koreanBlurb: string;
  keyVocab: Array<{
    word: string;
    meaningKo: string;
  }>;
  chapters: StorybookChapter[];
  quiz: StorybookQuizItem[];
}

export interface ListeningDialogueLine {
  speaker: 'W' | 'M';
  textEn: string;
  textKo: string;
}

export interface MockExamQuestion {
  id: string;
  number: number;
  section: '듣기평가 (Listening)' | '어휘·어법 (Vocab & Grammar)' | '독해·추론 (Reading & CSAT)';
  points: 2 | 3;
  questionKo: string;
  listeningDialogue?: ListeningDialogueLine[];
  passageEn?: string;
  passageKo?: string;
  options: string[];
  answer: string;
  explanationKo: string;
  grammarTag: string;
}

export interface MockExamPaper {
  id: string;
  examNumber: number;
  stage: MasteryStage;
  badge: string;
  titleKo: string;
  subtitleKo: string;
  timeLimitMin: number;
  cefrRange: string;
  questions: MockExamQuestion[];
}

export interface MockExamAttemptRecord {
  id: string;
  examId: string;
  examTitleKo: string;
  takenAt: string;
  score: number; // 0..100
  csatGrade: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  correctCount: number;
  totalQuestions: number;
  elapsedSec: number;
}

export interface ThematicVocabWord {
  id: string;
  pack: 'elem-core' | 'middle-core' | 'high-csat' | 'phrasal-idiom';
  word: string;
  phonetic: string;
  pos: string;
  meaningKo: string;
  nuanceTipKo: string;
  exampleEn: string;
  exampleKo: string;
}

export interface EtymologyRootCard {
  id: string;
  root: string;
  originType: '접두사 (Prefix)' | '핵심 어근 (Root)';
  coreMeaningKo: string;
  visualStoryKo: string;
  derivatives: Array<{
    word: string;
    breakdown: string;
    meaningKo: string;
    exampleEn: string;
  }>;
}
