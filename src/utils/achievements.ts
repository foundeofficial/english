import type { AppPersistState, MainRoute } from '../types/course.ts';

export interface AchievementBadge {
  id: string;
  titleKo: string;
  descKo: string;
  emoji: string;
  unlocked: boolean;
  progressText: string;
}

export interface DailyQuestItem {
  id: string;
  titleKo: string;
  rewardXp: number;
  done: boolean;
  targetRoute: MainRoute;
  lectureTab?: 'youtube' | 'roleplay' | 'storybook';
}

export function computeAchievementBadges(state: AppPersistState): AchievementBadge[] {
  const phonicsCount = state.phonicsMasteredIds.length;
  const connectedCount = state.connectedSpeechIds?.length ?? 0;
  const foundationCount = state.foundationCompletedIds.length;
  const grammarCount = state.grammarMasteredIds.length;
  const writingCount = state.writingClinicSolvedIds?.length ?? 0;
  const csatCount = Object.keys(state.highSchoolPassageScores ?? {}).length;
  const essayCount = state.savedEssays.length;
  const storybookCount = state.completedStorybookIds?.length ?? 0;
  const roleplayCount = state.completedRoleplayIds.length;
  const speakingCount = state.speakingAttempts?.length ?? 0;
  const mockCount = state.mockExamHistory?.length ?? 0;
  const totalVocab =
    state.masteredVocabIds.length +
    (state.masteredVaultWordIds?.length ?? 0) +
    (state.irregularMasteredIds?.length ?? 0) +
    (state.confusableSolvedIds?.length ?? 0);
  const reviewedCount = state.reviewDeck.filter(
    (c) => c.mastered || (c.reviewCount ?? 0) > 0 || c.intervalDays > 1
  ).length;
  const xp = state.xpPoints ?? 0;

  return [
    {
      id: 'badge-phonics',
      titleKo: '파닉스 탐험가',
      descKo: '알파벳·사이트워드 5개 이상 마스터',
      emoji: '🔤',
      unlocked: phonicsCount >= 5,
      progressText: `${Math.min(5, phonicsCount)}/5`
    },
    {
      id: 'badge-ears',
      titleKo: '원어민 귀트임',
      descKo: '미니멀페어 3연속 또는 연음 3규칙 완료',
      emoji: '👂',
      unlocked: state.minimalPairBestStreak >= 3 || connectedCount >= 3,
      progressText: `연속 ${state.minimalPairBestStreak} · 연음 ${connectedCount}`
    },
    {
      id: 'badge-elem',
      titleKo: '초등 어순 건축가',
      descKo: '초등 기초 10강 중 2강 이상 완주',
      emoji: '🧱',
      unlocked: foundationCount >= 2,
      progressText: `${foundationCount}/10강`
    },
    {
      id: 'badge-grammar',
      titleKo: '비주얼 문법·서술형 마스터',
      descKo: '영문법 3강 또는 내신 서술형·오류 3문항 정답',
      emoji: '📐',
      unlocked: grammarCount >= 3 || writingCount >= 3,
      progressText: `문법 ${grammarCount}/20 · 서술형 ${writingCount}/60`
    },
    {
      id: 'badge-csat',
      titleKo: '수능 구문 X-Ray 분석가',
      descKo: '고등·수능 아카데믹 독해 1지문 이상 완주',
      emoji: '🎯',
      unlocked: csatCount >= 1,
      progressText: `${csatCount}/15지문`
    },
    {
      id: 'badge-essay',
      titleKo: '아카데믹 에세이스트',
      descKo: '4축 루브릭 영어 에세이 1편 이상 작성',
      emoji: '✍️',
      unlocked: essayCount >= 1,
      progressText: `${essayCount}편`
    },
    {
      id: 'badge-storybook',
      titleKo: '영어 원서 다독가',
      descKo: '단계별 영어 원서 스토리북 1권 이상 완독',
      emoji: '📖',
      unlocked: storybookCount >= 1,
      progressText: `${storybookCount}/12권`
    },
    {
      id: 'badge-roleplay',
      titleKo: '프리토킹 · 1분 스피커',
      descKo: '5턴 롤플레이 또는 1분 스피킹 챌린지 1회 완주',
      emoji: '🎙️',
      unlocked: roleplayCount >= 1 || speakingCount >= 1,
      progressText: `롤플레이 ${roleplayCount} · 1분스피킹 ${speakingCount}`
    },
    {
      id: 'badge-mock',
      titleKo: '실전 모의고사 도전자',
      descKo: '타이머 영어 듣기·독해 모의고사 1회 응시',
      emoji: '🏆',
      unlocked: mockCount >= 1,
      progressText: `${mockCount}회 응시`
    },
    {
      id: 'badge-vocab',
      titleKo: '어휘력 폭발',
      descKo: '어휘 금고·불규칙동사·혼동어휘 합산 20개 달성',
      emoji: '📚',
      unlocked: totalVocab >= 20,
      progressText: `${totalVocab}개`
    },
    {
      id: 'badge-srs',
      titleKo: 'SM-2 기억술사',
      descKo: '에빙하우스 복습 카드 인출 성공',
      emoji: '🧠',
      unlocked: reviewedCount >= 1,
      progressText: `${reviewedCount}카드`
    },
    {
      id: 'badge-grand',
      titleKo: '코어브릿지 그랜드 마스터',
      descKo: '누적 학습 경험치 1,000 XP 돌파',
      emoji: '👑',
      unlocked: xp >= 1000,
      progressText: `${xp}/1000 XP`
    }
  ];
}

export function computeDailyQuests(state: AppPersistState): DailyQuestItem[] {
  const stage = state.settings.currentStage ?? 'stage2';
  const hasFoundationProgress =
    state.phonicsMasteredIds.length >= 1 ||
    state.foundationCompletedIds.length >= 1 ||
    (state.connectedSpeechIds?.length ?? 0) >= 1 ||
    (state.guidedSessionsCompleted ?? 0) >= 1;
  const hasReadingOrStory =
    (state.completedStorybookIds?.length ?? 0) >= 1 ||
    Object.keys(state.highSchoolPassageScores ?? {}).length >= 1 ||
    (state.writingClinicSolvedIds?.length ?? 0) >= 1 ||
    Object.values(state.dayRecords).some((r) => r.readingCompleted);
  const hasOutputOrExam =
    state.completedRoleplayIds.length >= 1 ||
    (state.speakingAttempts?.length ?? 0) >= 1 ||
    (state.mockExamHistory?.length ?? 0) >= 1 ||
    state.savedEssays.length >= 1 ||
    Object.values(state.dayRecords).some((r) => r.examScore !== null);

  return [
    {
      id: 'quest-1',
      titleKo:
        stage === 'stage0' || stage === 'stage1'
          ? '파닉스·초등 어순 1강 또는 15분 자동 수업 완료'
          : '비주얼 영문법·내신 서술형 또는 15분 자동 수업 완료',
      rewardXp: 50,
      done: hasFoundationProgress || state.grammarMasteredIds.length >= 1,
      targetRoute: stage === 'stage0' || stage === 'stage1' ? 'foundation' : 'academy'
    },
    {
      id: 'quest-2',
      titleKo: '영어 원서 1권 · 고등 구문독해 또는 내신 서술형 1문항 풀기',
      rewardXp: 75,
      done: hasReadingOrStory,
      targetRoute: stage === 'stage3' ? 'academy' : 'lecture',
      lectureTab: stage === 'stage3' ? undefined : 'storybook'
    },
    {
      id: 'quest-3',
      titleKo: '1분 스피킹 챌린지 · 5턴 롤플레이 또는 실전 모의고사 도전',
      rewardXp: 100,
      done: hasOutputOrExam,
      targetRoute: stage === 'stage3' || stage === 'stage4' ? 'worksheet' : 'lecture',
      lectureTab: stage === 'stage3' || stage === 'stage4' ? undefined : 'roleplay'
    }
  ];
}
