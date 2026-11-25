import type { DayLessonModule } from '../../types/course.ts';
import { day1Module } from '../days/day1.ts';
import { day2Module } from '../days/day2.ts';
import { day3Module } from '../days/day3.ts';
import { day4Module } from '../days/day4.ts';
import { day5Module } from '../days/day5.ts';
import { day6Module } from '../days/day6.ts';

export const WEEK1_MODULES: DayLessonModule[] = [
  day1Module,
  day2Module,
  day3Module,
  day4Module,
  day5Module,
  day6Module
];
