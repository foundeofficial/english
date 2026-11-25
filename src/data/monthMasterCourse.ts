import type { DayLessonModule } from '../types/course.ts';
import { WEEK1_MODULES } from './weeks/week1.ts';
import { WEEK2_MODULES } from './weeks/week2.ts';
import { WEEK3_MODULES } from './weeks/week3.ts';
import { WEEK4_MODULES } from './weeks/week4.ts';
import { WEEK5_MODULES } from './weeks/week5.ts';

/**
 * Full 30-day master array used by Node QA verifier and SQLite database seeding.
 * The React frontend uses dynamic code-split loaders in courseLoader.ts so the
 * initial browser bundle stays lean and fast.
 */
export const ALL_30_DAY_MODULES: DayLessonModule[] = [
  ...WEEK1_MODULES,
  ...WEEK2_MODULES,
  ...WEEK3_MODULES,
  ...WEEK4_MODULES,
  ...WEEK5_MODULES
];

export function getModuleByDay(dayNumber: number): DayLessonModule {
  return ALL_30_DAY_MODULES.find((m) => m.dayNumber === dayNumber) ?? WEEK1_MODULES[0];
}
