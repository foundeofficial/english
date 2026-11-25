import type { DayLessonModule, LevelTier, SpacedReviewCard } from '../types/course.ts';
import { day1Module } from './days/day1.ts';
import { day2Module } from './days/day2.ts';
import { day3Module } from './days/day3.ts';
import { day4Module } from './days/day4.ts';
import { day5Module } from './days/day5.ts';
import { day6Module } from './days/day6.ts';

export const COURSE_METADATA = {
  trackTitle: '성인 · 대학생 · 직장인 실전 회화 & 글로벌 비즈니스 코어 트랙',
  weekTitle: 'Week 01 · 한국인 어순 감각 전환 & 오피스·일상 필수 구동사 마스터리',
  totalVocabCount: 90,
  totalSprintDrills: 60,
  totalExamQuestions: 95,
  totalTwinClinicQuestions: 95
};

export const WEEK1_MODULES: DayLessonModule[] = [
  day1Module,
  day2Module,
  day3Module,
  day4Module,
  day5Module,
  day6Module
];

export function getDayModule(dayNumber: number): DayLessonModule {
  return WEEK1_MODULES.find((m) => m.dayNumber === dayNumber) ?? day1Module;
}

export interface DiagnosticQuestion {
  id: string;
  questionKo: string;
  options: Array<{
    label: string;
    isCorrect: boolean;
    tierWeight: number;
  }>;
}

export const MINI_DIAGNOSTIC_ITEMS: DiagnosticQuestion[] = [
  {
    id: 'diag-1',
    questionKo: 'Q1. "퇴근길에 카페에 잠깐 들렀어요." — 가장 자연스러운 원어민 문장은?',
    options: [
      { label: 'On my way to home, I visited a cafe.', isCorrect: false, tierWeight: 0 },
      { label: 'I stopped by a cafe on my way home.', isCorrect: true, tierWeight: 1 },
      { label: 'I dropped off a cafe in my way home.', isCorrect: false, tierWeight: 0 }
    ]
  },
  {
    id: 'diag-2',
    questionKo: 'Q2. "내일 오전은 일정이 좀 애매하네요. 대신 목요일이 괜찮으실까요?"',
    options: [
      { label: 'Tomorrow morning is ambiguous. Is Thursday possible?', isCorrect: false, tierWeight: 0 },
      { label: 'Tomorrow morning looks tight on my end. Would Thursday work instead?', isCorrect: true, tierWeight: 1 },
      { label: 'Tomorrow morning has a promise. Can we delay Thursday?', isCorrect: false, tierWeight: 0 }
    ]
  },
  {
    id: 'diag-3',
    questionKo: 'Q3. "금요일 퇴근 전까지 그것을 마무리해서 공유드릴게요." (어순·전치사 주의)',
    options: [
      { label: "I'll wrap up it until EOD Friday and share.", isCorrect: false, tierWeight: 0 },
      { label: "I'll wrap it up by EOD Friday and keep you in the loop.", isCorrect: true, tierWeight: 1 },
      { label: "I'll finish until Friday and check your mail.", isCorrect: false, tierWeight: 0 }
    ]
  }
];

export function recommendTierFromScore(correctCount: number): LevelTier {
  if (correctCount <= 1) return 'basic';
  if (correctCount === 2) return 'standard';
  return 'advanced';
}

export const INITIAL_REVIEW_CARDS: SpacedReviewCard[] = [
  {
    id: 'seed-rev-1',
    promptKo: '퇴근길에 커피 한잔 사려고 잠깐 들렀어요.',
    targetEn: 'I stopped by on my way home to grab a coffee.',
    noteKo: 'home 앞에는 전치사 to를 쓰지 않습니다 (on my way home).',
    sourceLabel: 'Day 01 핵심 문장',
    intervalDays: 1,
    mastered: false
  },
  {
    id: 'seed-rev-2',
    promptKo: '정시에 퇴근하려 했는데 결국 야근하게 됐어요.',
    targetEn: 'I meant to leave on time, but I ended up working late.',
    noteKo: 'end up 뒤에는 반드시 동명사(-ing)가 옵니다.',
    sourceLabel: 'Day 02 핵심 문장',
    intervalDays: 3,
    mastered: false
  },
  {
    id: 'seed-rev-3',
    promptKo: '내일은 제 쪽 일정이 좀 빠듯하네요. 대신 목요일 오후가 괜찮으실까요?',
    targetEn: 'Tomorrow looks a bit tight on my end. Would Thursday afternoon work instead?',
    noteKo: '콩글리시 ambiguous 대신 tight on my end를 사용합니다.',
    sourceLabel: 'Day 03 핵심 문장',
    intervalDays: 7,
    mastered: false
  }
];
