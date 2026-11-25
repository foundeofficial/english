import type { DayLessonModule, LevelTier } from '../types/course.ts';

const REQUIRED_LEVELS: LevelTier[] = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

export interface ModuleQAResult {
  dayNumber: number;
  weekNumber: number;
  cefrLevel: LevelTier;
  title: string;
  passed: boolean;
  vocabCount: number;
  dialogueTurns: number;
  readingParagraphs: number;
  readingQuizCount: number;
  sprintCount: number;
  examCount: number;
  twinCount: number;
  youtubeVideoId: string;
  issues: string[];
}

export function validateWeekModule(mod: DayLessonModule): ModuleQAResult {
  const issues: string[] = [];

  if (mod.dayNumber < 1 || mod.dayNumber > 30) {
    issues.push(`Invalid dayNumber: ${mod.dayNumber}`);
  }
  if (mod.weekNumber < 1 || mod.weekNumber > 5) {
    issues.push(`Invalid weekNumber: ${mod.weekNumber}`);
  }
  if (!REQUIRED_LEVELS.includes(mod.cefrLevel)) {
    issues.push(`Invalid cefrLevel: ${mod.cefrLevel}`);
  }

  for (const lv of REQUIRED_LEVELS) {
    if (!mod.keySentenceByTier?.[lv]?.trim()) {
      issues.push(`Missing keySentenceByTier.${lv}`);
    }
  }

  if (!mod.youtubeVideo || !/^[A-Za-z0-9_-]{11}$/.test(mod.youtubeVideo.videoId)) {
    issues.push(`Invalid or missing YouTube videoId: ${mod.youtubeVideo?.videoId}`);
  }
  if (!mod.youtubeVideo?.chapters?.length) {
    issues.push(`YouTube video missing chapters.`);
  }

  if (!mod.readingPassage || mod.readingPassage.paragraphsEn.length < 3) {
    issues.push(`Reading passage must have at least 3 paragraphs.`);
  } else {
    const pLen = mod.readingPassage.paragraphsEn.length;
    if (mod.readingPassage.paragraphsSlash.length !== pLen) {
      issues.push(`Reading passage paragraphsSlash count mismatch (${mod.readingPassage.paragraphsSlash.length} vs ${pLen}).`);
    }
    if (mod.readingPassage.paragraphsKo.length !== pLen) {
      issues.push(`Reading passage paragraphsKo count mismatch (${mod.readingPassage.paragraphsKo.length} vs ${pLen}).`);
    }
    if (mod.readingPassage.comprehensionQuiz.length < 3) {
      issues.push(`Reading comprehensionQuiz (${mod.readingPassage.comprehensionQuiz.length}) below minimum 3.`);
    }
    for (const rq of mod.readingPassage.comprehensionQuiz) {
      if (!rq.options.includes(rq.answer)) {
        issues.push(`Reading quiz ${rq.id} answer not found in options.`);
      }
    }
  }

  if (mod.vocabList.length < 15) {
    issues.push(`Vocab count (${mod.vocabList.length}) is below commercial minimum 15.`);
  }
  if (mod.dialogue.length < 6) {
    issues.push(`Dialogue turns (${mod.dialogue.length}) is below minimum 6.`);
  }
  if (mod.grammarSections.length < 3) {
    issues.push(`Grammar sections (${mod.grammarSections.length}) is below minimum 3.`);
  }
  if (mod.sprintDrills.length < 10) {
    issues.push(`Sprint drills (${mod.sprintDrills.length}) is below minimum 10.`);
  }

  const isWeeklyExam = mod.dayNumber % 6 === 0;
  const minExam = isWeeklyExam ? 20 : 15;
  if (mod.worksheetExam.length < minExam) {
    issues.push(`Worksheet exam items (${mod.worksheetExam.length}) is below minimum ${minExam}.`);
  }

  let twinCount = 0;
  for (const item of mod.worksheetExam) {
    if (!item.answer.trim()) {
      issues.push(`Exam item ${item.id} has empty answer.`);
    }
    if (item.options && !item.options.includes(item.answer)) {
      issues.push(`Exam multiple-choice item ${item.id} answer not found in options.`);
    }
    if (item.twinClinic && item.twinClinic.answer.trim()) {
      twinCount += 1;
    } else {
      issues.push(`Exam item ${item.id} is missing valid twinClinic variant.`);
    }
  }

  for (const drill of mod.sprintDrills) {
    if (drill.drillType === 'chunk-build' && (!drill.chunks || drill.chunks.length < 3)) {
      issues.push(`Sprint chunk-build ${drill.id} must have at least 3 chunks.`);
    }
    if (drill.drillType === 'active-blank' && !drill.blankData?.answer) {
      issues.push(`Sprint active-blank ${drill.id} missing blankData.answer.`);
    }
    if (drill.drillType === 'konglish-fix' && !drill.wrongKonglishOption) {
      issues.push(`Sprint konglish-fix ${drill.id} missing wrongKonglishOption.`);
    }
  }

  return {
    dayNumber: mod.dayNumber,
    weekNumber: mod.weekNumber,
    cefrLevel: mod.cefrLevel,
    title: mod.title,
    passed: issues.length === 0,
    vocabCount: mod.vocabList.length,
    dialogueTurns: mod.dialogue.length,
    readingParagraphs: mod.readingPassage?.paragraphsEn.length ?? 0,
    readingQuizCount: mod.readingPassage?.comprehensionQuiz.length ?? 0,
    sprintCount: mod.sprintDrills.length,
    examCount: mod.worksheetExam.length,
    twinCount,
    youtubeVideoId: mod.youtubeVideo?.videoId ?? '',
    issues
  };
}
