import type { DayLessonModule } from '../types/course.ts';
import type { CourseLexiconEntry } from '../utils/dictionaryApi.ts';
import { getWeekNumberForDay } from './courseCatalog.ts';

const weekCache = new Map<number, DayLessonModule[]>();

/**
 * Dynamically code-split week loaders so Vite emits 5 clean week chunks
 * and initial page load stays fast (< 250KB).
 */
export async function loadWeekModules(weekNumber: 1 | 2 | 3 | 4 | 5): Promise<DayLessonModule[]> {
  const cached = weekCache.get(weekNumber);
  if (cached) return cached;

  let loaded: DayLessonModule[];
  switch (weekNumber) {
    case 1: {
      const mod = await import('./weeks/week1.ts');
      loaded = mod.WEEK1_MODULES;
      break;
    }
    case 2: {
      const mod = await import('./weeks/week2.ts');
      loaded = mod.WEEK2_MODULES;
      break;
    }
    case 3: {
      const mod = await import('./weeks/week3.ts');
      loaded = mod.WEEK3_MODULES;
      break;
    }
    case 4: {
      const mod = await import('./weeks/week4.ts');
      loaded = mod.WEEK4_MODULES;
      break;
    }
    case 5: {
      const mod = await import('./weeks/week5.ts');
      loaded = mod.WEEK5_MODULES;
      break;
    }
  }

  weekCache.set(weekNumber, loaded);
  return loaded;
}

export async function loadDayModule(dayNumber: number): Promise<DayLessonModule> {
  const weekNum = getWeekNumberForDay(dayNumber);
  const weekMods = await loadWeekModules(weekNum);
  return weekMods.find((m) => m.dayNumber === dayNumber) ?? weekMods[0];
}

export function getCachedDayModule(dayNumber: number): DayLessonModule | null {
  const weekNum = getWeekNumberForDay(dayNumber);
  const weekMods = weekCache.get(weekNum);
  if (!weekMods) return null;
  return weekMods.find((m) => m.dayNumber === dayNumber) ?? null;
}

/**
 * Extracts a searchable local dictionary lexicon from all loaded week modules.
 */
export function buildLoadedLexicon(): CourseLexiconEntry[] {
  const entries: CourseLexiconEntry[] = [];
  for (const mods of weekCache.values()) {
    for (const mod of mods) {
      for (const v of mod.vocabList) {
        entries.push({
          word: v.word,
          phonetic: v.phonetic,
          pos: v.pos,
          meaningKo: v.meaningKo,
          meaningEn: v.meaningEn,
          nuanceTipKo: v.nuanceTipKo,
          exampleEn: v.exampleEn,
          exampleKo: v.exampleKo,
          dayNumber: mod.dayNumber,
          cefr: v.cefr ?? mod.cefrLevel
        });
      }
    }
  }
  return entries;
}

/**
 * Preloads all 5 weeks in background when user opens Dictionary so all 450+ course words
 * become immediately searchable by both English and Korean.
 */
export async function loadFullCourseLexicon(): Promise<CourseLexiconEntry[]> {
  await Promise.all([
    loadWeekModules(1),
    loadWeekModules(2),
    loadWeekModules(3),
    loadWeekModules(4),
    loadWeekModules(5)
  ]);
  return buildLoadedLexicon();
}
