import type { DayLessonModule } from '../types/course.ts';

export interface ModuleQAResult {
  dayNumber: number;
  title: string;
  passed: boolean;
  vocabCount: number;
  dialogueTurns: number;
  sprintCount: number;
  examCount: number;
  twinCount: number;
  issues: string[];
}

export function validateWeekModule(mod: DayLessonModule): ModuleQAResult {
  const issues: string[] = [];

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

  const minExam = mod.dayNumber === 6 ? 20 : 15;
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
    title: mod.title,
    passed: issues.length === 0,
    vocabCount: mod.vocabList.length,
    dialogueTurns: mod.dialogue.length,
    sprintCount: mod.sprintDrills.length,
    examCount: mod.worksheetExam.length,
    twinCount,
    issues
  };
}
