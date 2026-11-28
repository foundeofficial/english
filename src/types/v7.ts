import type { MasteryStage } from './academy.ts';

export interface PatternReflexVariation {
  id: string;
  koreanCue: string;
  targetEn: string;
  acceptableAlts?: string[];
  chunkBlocks: string[];
  tipKo: string;
}

export interface PatternReflexSet {
  id: string;
  stage: MasteryStage;
  cefr: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  patternEn: string;
  patternKo: string;
  usageNuanceKo: string;
  variations: PatternReflexVariation[]; // 6 rapid-fire variations per pattern
}

export interface CsatLogicClue {
  phrase: string;
  clueType: 'connector' | 'reference' | 'article' | 'contrast';
  explanationKo: string;
}

export interface CsatOrderingItem {
  id: string;
  numberLabel: string; // e.g., '수능 36번 유형 · 과학'
  topicKo: string;
  difficulty: '고2 모의' | '고3 평가원' | '수능 킬러';
  givenBoxEn: string;
  givenBoxKo: string;
  paragraphs: {
    A: { textEn: string; textKo: string };
    B: { textEn: string; textKo: string };
    C: { textEn: string; textKo: string };
  };
  correctOrder: ['A' | 'B' | 'C', 'A' | 'B' | 'C', 'A' | 'B' | 'C'];
  clues: CsatLogicClue[];
  explanationKo: string;
}

export interface CsatInsertionItem {
  id: string;
  numberLabel: string; // e.g., '수능 38번 유형 · 심리학'
  topicKo: string;
  difficulty: '고2 모의' | '고3 평가원' | '수능 킬러';
  targetSentenceEn: string;
  targetSentenceKo: string;
  /**
   * 6 text segments separated by 5 clickable slots:
   * seg[0] [①] seg[1] [②] seg[2] [③] seg[3] [④] seg[4] [⑤] seg[5]
   */
  segmentsEn: [string, string, string, string, string, string];
  passageKo: string;
  correctSlot: 1 | 2 | 3 | 4 | 5;
  clues: CsatLogicClue[];
  explanationKo: string;
}
