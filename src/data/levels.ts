import type { LevelTier } from '../types/course.ts';

export interface LevelInfo {
  id: LevelTier;
  lvNumber: number;
  shortLabel: string;
  cefrCode: string;
  titleKo: string;
  taglineKo: string;
  descKo: string;
  defaultSpeechRate: number;
  recommendedStartDay: number;
  pillTone: 'brand' | 'subtle' | 'amber' | 'coral';
}

export const LEVEL_ORDER: LevelTier[] = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

export const LEVEL_INFO_MAP: Record<LevelTier, LevelInfo> = {
  a1: {
    id: 'a1',
    lvNumber: 1,
    shortLabel: 'Lv.1 입문 (A1)',
    cefrCode: 'CEFR A1',
    titleKo: 'Lv.1 입문 · 왕초보 어순 뼈대',
    taglineKo: '기초 120문장 & [주어+동사] 직관 발화',
    descKo: '영어 문장이 입에서 안 떨어지는 입문자용. 짧은 필수 생활문장과 기본 어순부터 0.85x 속도로 천천히 체화합니다.',
    defaultSpeechRate: 0.85,
    recommendedStartDay: 1,
    pillTone: 'subtle'
  },
  a2: {
    id: 'a2',
    lvNumber: 2,
    shortLabel: 'Lv.2 초급 (A2)',
    cefrCode: 'CEFR A2',
    titleKo: 'Lv.2 초급 · 일상·여행 생존 회화',
    taglineKo: '필수 구동사 & 카페·공항·일상 대화',
    descKo: '기본 문장은 읽히지만 말문이 막히는 분용. 일상·여행 상황과 핵심 구동사를 자연스럽게 연결합니다.',
    defaultSpeechRate: 0.92,
    recommendedStartDay: 3,
    pillTone: 'brand'
  },
  b1: {
    id: 'b1',
    lvNumber: 3,
    shortLabel: 'Lv.3 중하급 (B1)',
    cefrCode: 'CEFR B1',
    titleKo: 'Lv.3 중하급 · 원어민 리듬 & 스몰토크',
    taglineKo: '콩글리시 탈출 & 오피스 입문 패턴',
    descKo: '의사소통은 되지만 교과서처럼 딱딱한 영어를 쓰는 분용. 원어민 구동사·시제·화상회의 기초를 익힙니다.',
    defaultSpeechRate: 0.97,
    recommendedStartDay: 9,
    pillTone: 'brand'
  },
  b2: {
    id: 'b2',
    lvNumber: 4,
    shortLabel: 'Lv.4 중상급 (B2)',
    cefrCode: 'CEFR B2',
    titleKo: 'Lv.4 중상급 · 글로벌 오피스 실무',
    taglineKo: '회의·이메일·피드백·프레젠테이션',
    descKo: '직장·대학에서 영어로 회의하고 이메일·발표를 주도해야 하는 분용. 전문적인 톤과 완곡한 조율 표현을 다룹니다.',
    defaultSpeechRate: 1.02,
    recommendedStartDay: 15,
    pillTone: 'amber'
  },
  c1: {
    id: 'c1',
    lvNumber: 5,
    shortLabel: 'Lv.5 고급 (C1)',
    cefrCode: 'CEFR C1',
    titleKo: 'Lv.5 고급 · 협상·면접 & 시사 논증',
    taglineKo: '가정법 리스크 조율·STAR 면접·BBC 토론',
    descKo: '복잡한 이해관계를 조율하고 영어 면접·임원 보고·시사 토론에서 논리적 설득력을 갖추려는 학습자용입니다.',
    defaultSpeechRate: 1.06,
    recommendedStartDay: 21,
    pillTone: 'coral'
  },
  c2: {
    id: 'c2',
    lvNumber: 6,
    shortLabel: 'Lv.6 마스터 (C2)',
    cefrCode: 'CEFR C2',
    titleKo: 'Lv.6 마스터 · 원어민 수사 & 에세이',
    taglineKo: '전술적 공감·고급 관용구·TED 연설 수준',
    descKo: '원어민 수준의 뉘앙스 제어, 고속 스피치 청취, 설득 심리학과 정교한 논설·수사 표현을 완성합니다.',
    defaultSpeechRate: 1.12,
    recommendedStartDay: 28,
    pillTone: 'coral'
  }
};

export function normalizeLegacyLevelTier(raw: unknown): LevelTier {
  if (raw === 'a1' || raw === 'a2' || raw === 'b1' || raw === 'b2' || raw === 'c1' || raw === 'c2') {
    return raw;
  }
  if (raw === 'basic') return 'a2';
  if (raw === 'standard') return 'b1';
  if (raw === 'advanced') return 'b2';
  return 'b1';
}

export interface DiagnosticQuestion {
  id: string;
  targetCefr: LevelTier;
  questionKo: string;
  options: Array<{
    label: string;
    isCorrect: boolean;
  }>;
}

export const PLACEMENT_DIAGNOSTIC_ITEMS: DiagnosticQuestion[] = [
  {
    id: 'diag-a1',
    targetCefr: 'a1',
    questionKo: 'Q1 [A1 입문]. "퇴근길에 카페에 잠깐 들렀어요." — 어순·전치사가 바른 문장은?',
    options: [
      { label: 'On my way to home, I visited cafe.', isCorrect: false },
      { label: 'I stopped by a cafe on my way home.', isCorrect: true },
      { label: 'I went stop cafe in my way home.', isCorrect: false }
    ]
  },
  {
    id: 'diag-a2',
    targetCefr: 'a2',
    questionKo: 'Q2 [A2 초급]. "일찍 자려고 했는데 결국 밤새웠어요." — 자연스러운 문장은?',
    options: [
      { label: 'I meant to go to bed early, but I ended up staying up late.', isCorrect: true },
      { label: 'I wanted sleep early, so I finished to stay late.', isCorrect: false },
      { label: 'I tried sleeping early, but I ended to work night.', isCorrect: false }
    ]
  },
  {
    id: 'diag-b1',
    targetCefr: 'b1',
    questionKo: 'Q3 [B1 중하급]. "내일 오전은 일정이 빠듯하네요. 대신 목요일이 괜찮으실까요?"',
    options: [
      { label: 'Tomorrow morning is ambiguous. Is Thursday possible?', isCorrect: false },
      { label: 'Tomorrow morning looks tight on my end. Would Thursday work instead?', isCorrect: true },
      { label: 'Tomorrow morning has a promise. Can we delay Thursday?', isCorrect: false }
    ]
  },
  {
    id: 'diag-b2',
    targetCefr: 'b2',
    questionKo: 'Q4 [B2 중상급]. "금요일 퇴근 전까지 마무리해서 계속 진행 상황 공유드릴게요."',
    options: [
      { label: "I'll wrap up it until EOD Friday and share you.", isCorrect: false },
      { label: "I'll wrap it up by EOD Friday and keep you in the loop.", isCorrect: true },
      { label: "I'll finish until Friday and give you a check.", isCorrect: false }
    ]
  },
  {
    id: 'diag-c1',
    targetCefr: 'c1',
    questionKo: 'Q5 [C1 고급]. "초기 요구사항을 미리 알았더라면 훨씬 빠르게 조율했을 텐데요." (혼합/과거 가정법)',
    options: [
      { label: 'If I knew the initial scope earlier, I aligned it faster.', isCorrect: false },
      { label: 'Had we known the initial scope earlier, we would have aligned much faster.', isCorrect: true },
      { label: 'If we would know the scope earlier, we could align fast.', isCorrect: false }
    ]
  },
  {
    id: 'diag-c2',
    targetCefr: 'c2',
    questionKo: 'Q6 [C2 마스터]. "단기 효율성은 매력적이지만, 장기적 신뢰를 훼손하는 양날의 검이 될 수 있습니다."',
    options: [
      { label: 'Short-term efficiency is good, so it breaks long trust like two knives.', isCorrect: false },
      {
        label: 'While short-term efficiency is compelling, it can prove a double-edged sword that erodes long-term trust.',
        isCorrect: true
      },
      {
        label: 'Although short efficiency looks nice, it makes damage to trust permanently.',
        isCorrect: false
      }
    ]
  }
];

export function recommendLevelFromScore(correctCount: number): LevelTier {
  if (correctCount <= 1) return 'a1';
  if (correctCount === 2) return 'a2';
  if (correctCount === 3) return 'b1';
  if (correctCount === 4) return 'b2';
  if (correctCount === 5) return 'c1';
  return 'c2';
}
