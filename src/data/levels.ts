import type { MasteryStage } from '../types/academy.ts';
import type { LevelTier, MainRoute } from '../types/course.ts';

export interface MasteryStageInfo {
  id: MasteryStage;
  stageNum: number;
  badge: string;
  shortLabel: string;
  schoolAgeLabel: string;
  cefrRange: string;
  titleKo: string;
  descKo: string;
  keyOutcomesKo: string[];
  recommendedRoute: MainRoute;
  recommendedLevelTier: LevelTier;
  recommendedStartDay: number;
  coverImage: string;
  pillTone: 'brand' | 'subtle' | 'amber' | 'coral';
}

export const MASTERY_STAGE_ORDER: MasteryStage[] = [
  'stage0',
  'stage1',
  'stage2',
  'stage3',
  'stage4'
];

export const MASTERY_STAGE_MAP: Record<MasteryStage, MasteryStageInfo> = {
  stage0: {
    id: 'stage0',
    stageNum: 0,
    badge: 'Stage 0 · 유치원·왕초보',
    shortLabel: 'Stage 0 파닉스',
    schoolAgeLabel: '유치원 ~ 초등 저학년 · 알파벳 완전 입문',
    cefrRange: 'Pre-A1',
    titleKo: '알파벳 음가 · 파닉스 · 한국인 발음 교정',
    descKo:
      '영어를 처음 시작해도 OK! A~Z 소리, CVC 소리 합치기, 매직-E, R/L·F/V·TH 미니멀페어 귀트임과 필수 사이트워드 60개로 영어 읽기의 문을 엽니다.',
    keyOutcomesKo: [
      'A~Z 26자 음가 & 입모양·혀 위치 교정',
      'CVC 블렌딩 & Magic-E 장모음 규칙 체화',
      'R/L · F/V · TH 한국인 취약 발음 귀트임 게임',
      '기초 필수 사이트워드 60단어 마스터'
    ],
    recommendedRoute: 'foundation',
    recommendedLevelTier: 'a1',
    recommendedStartDay: 1,
    coverImage: 'assets/stage_phonics_studio.jpg',
    pillTone: 'brand'
  },
  stage1: {
    id: 'stage1',
    stageNum: 1,
    badge: 'Stage 1 · 초등 기초 완성',
    shortLabel: 'Stage 1 초등기초',
    schoolAgeLabel: '초등 3~6학년 · 영어 어순 뼈대',
    cefrRange: 'CEFR A1',
    titleKo: '초등 필수 10강 · 100문장 어순 블록 조립',
    descKo:
      'be동사, 일반동사, 부정문·의문문, 현재진행·과거·미래, 6하원칙, 전치사까지 한국어 어순을 영어 어순(S+V+O)으로 자연스럽게 뒤집는 10강 집중 과정입니다.',
    keyOutcomesKo: [
      '초등 필수 10개 핵심 문형 & 100문장 직독직해',
      '색상 블록(주어·동사·목적어) 어순 조립 50문제',
      '유치원·초등 실전 롤플레이 3편 (인사·주문·길묻기)',
      '초등 핵심 영문법 5단원 (5형식·관사·전치사)'
    ],
    recommendedRoute: 'foundation',
    recommendedLevelTier: 'a1',
    recommendedStartDay: 1,
    coverImage: 'assets/stage_global_roleplay.jpg',
    pillTone: 'brand'
  },
  stage2: {
    id: 'stage2',
    stageNum: 2,
    badge: 'Stage 2 · 중학·실전회화',
    shortLabel: 'Stage 2 중학·회화',
    schoolAgeLabel: '중학교 1~3학년 · 해외여행·일상 회화',
    cefrRange: 'CEFR A2–B1',
    titleKo: '비주얼 영문법 핵심 & 30일 유튜브·쉐도잉 회화',
    descKo:
      '12시제 타임라인, 실시간 문장변환기(평서·부정·의문·수동태), to부정사/동명사/수동태/비교급을 시각적으로 이해하고 Day 01~12 시트콤·쉐도잉·여행 롤플레이로 입을 엽니다.',
    keyOutcomesKo: [
      '12시제 직관 타임라인 & 실시간 문장 변환기',
      '중학 필수 문법 7단원 + 80문항 개념 드릴',
      'Day 01~12 유튜브 A–B 반복 · 마이크 쉐도잉 · 딕테이션',
      '카페·공항·레스토랑 멀티턴 롤플레이 & 450단어장'
    ],
    recommendedRoute: 'lecture',
    recommendedLevelTier: 'b1',
    recommendedStartDay: 1,
    coverImage: 'assets/scene_cafe_detour.jpg',
    pillTone: 'amber'
  },
  stage3: {
    id: 'stage3',
    stageNum: 3,
    badge: 'Stage 3 · 고등 내신·수능 1등급',
    shortLabel: 'Stage 3 고등·수능',
    schoolAgeLabel: '고등학교 1~3학년 · 수능·내신·토플',
    cefrRange: 'CEFR B2–C1',
    titleKo: '고등 킬러 구문독해 · 수능 5대 유형 · 에세이 첨삭',
    descKo:
      '관계사·분사구문·가정법·도치 등 고등 킬러 문법을 정복하고, 10개 분야 아카데믹 지문의 S/V/O/M 구문 X-Ray 해부, 수능 빈칸·순서·삽입 30문항, 영작 에세이 루브릭 첨삭까지 완주합니다.',
    keyOutcomesKo: [
      '고등·수능 킬러 문법 8단원 (관계사·분사·도치·가정법)',
      '10대 학문 분야 구문 X-Ray 독해 & 수능 30문항',
      '4축 자동 루브릭 에세이 첨삭 & 학술 연결어 칩',
      '고등 동아리 면접 · 영어 찬반 토론 롤플레이 3편'
    ],
    recommendedRoute: 'academy',
    recommendedLevelTier: 'b2',
    recommendedStartDay: 13,
    coverImage: 'assets/stage_highschool_academic.jpg',
    pillTone: 'coral'
  },
  stage4: {
    id: 'stage4',
    stageNum: 4,
    badge: 'Stage 4 · 글로벌 비즈니스·C2',
    shortLabel: 'Stage 4 글로벌 C2',
    schoolAgeLabel: '대학·성인 글로벌 실무 · 원어민 수준',
    cefrRange: 'CEFR C1–C2',
    titleKo: '글로벌 오피스 · 협상 · TED/BBC 시사 마스터',
    descKo:
      'Day 13~30 글로벌 화상회의, 이메일, 리스크 협상, STAR 영어면접, BBC·TED 논증 스피치와 임원진 Q&A 멀티턴 롤플레이로 전 세계 어디서나 통하는 영어를 완성합니다.',
    keyOutcomesKo: [
      'Day 13~30 실무·협상·시사 심화 인강 & 950 시험 문항',
      '미국·영국·호주 억양 쉐도잉 & 블라인드 딕테이션',
      '프로젝트 협상 · 클레임 대응 · 임원 Q&A 롤플레이',
      '전 구간 통합 취약점 클리닉 & A4 성장 성적표'
    ],
    recommendedRoute: 'lecture',
    recommendedLevelTier: 'c1',
    recommendedStartDay: 19,
    coverImage: 'assets/scene_boardroom_pitch.jpg',
    pillTone: 'coral'
  }
};

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
  defaultStage: MasteryStage;
  pillTone: 'brand' | 'subtle' | 'amber' | 'coral';
}

export const LEVEL_ORDER: LevelTier[] = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

export const LEVEL_INFO_MAP: Record<LevelTier, LevelInfo> = {
  a1: {
    id: 'a1',
    lvNumber: 1,
    shortLabel: 'Lv.1 입문 (A1)',
    cefrCode: 'CEFR A1',
    titleKo: 'Lv.1 입문 · 파닉스 & 초등 어순 뼈대',
    taglineKo: '파닉스·사이트워드 & [주어+동사] 직관 발화',
    descKo: '유치원·초등 수준부터 시작하는 입문자용. 알파벳 음가, 기초 100문장과 짧은 생활문장을 0.85x 속도로 천천히 체화합니다.',
    defaultSpeechRate: 0.85,
    recommendedStartDay: 1,
    defaultStage: 'stage0',
    pillTone: 'subtle'
  },
  a2: {
    id: 'a2',
    lvNumber: 2,
    shortLabel: 'Lv.2 초급 (A2)',
    cefrCode: 'CEFR A2',
    titleKo: 'Lv.2 초급 · 초등 완성 & 일상·여행 회화',
    taglineKo: '기초 시제·전치사 & 카페·공항·일상 대화',
    descKo: '기초 문장은 읽히지만 말문이 막히는 분용. 초등 10강 어순 조립과 중학 핵심 구동사·일상 여행 회화를 연결합니다.',
    defaultSpeechRate: 0.92,
    recommendedStartDay: 3,
    defaultStage: 'stage1',
    pillTone: 'brand'
  },
  b1: {
    id: 'b1',
    lvNumber: 3,
    shortLabel: 'Lv.3 중하급 (B1)',
    cefrCode: 'CEFR B1',
    titleKo: 'Lv.3 중하급 · 중학 문법 완성 & 원어민 리듬',
    taglineKo: '12시제·수동태·콩글리시 탈출 & 스몰토크',
    descKo: '의사소통은 되지만 교과서처럼 딱딱한 영어를 쓰는 분용. 비주얼 영문법 핵심과 원어민 구동사·화상회의 기초를 익힙니다.',
    defaultSpeechRate: 0.97,
    recommendedStartDay: 9,
    defaultStage: 'stage2',
    pillTone: 'brand'
  },
  b2: {
    id: 'b2',
    lvNumber: 4,
    shortLabel: 'Lv.4 중상급 (B2)',
    cefrCode: 'CEFR B2',
    titleKo: 'Lv.4 중상급 · 고등 내신·수능 & 실무 영어',
    taglineKo: '고등 구문독해·에세이 & 글로벌 오피스 실무',
    descKo: '고등학교 내신·수능 1등급 독해와 대학·직장 영어 이메일·발표를 주도하려는 학습자용입니다.',
    defaultSpeechRate: 1.02,
    recommendedStartDay: 15,
    defaultStage: 'stage3',
    pillTone: 'amber'
  },
  c1: {
    id: 'c1',
    lvNumber: 5,
    shortLabel: 'Lv.5 고급 (C1)',
    cefrCode: 'CEFR C1',
    titleKo: 'Lv.5 고급 · 아카데믹 논증 · 협상 · 영어 면접',
    taglineKo: '고급 구문·가정법 도치·STAR 면접·BBC 토론',
    descKo: '복잡한 아카데믹 텍스트 분석, 논설 에세이, 영어 면접·임원 보고·시사 토론에서 논리적 설득력을 갖추려는 학습자용입니다.',
    defaultSpeechRate: 1.06,
    recommendedStartDay: 21,
    defaultStage: 'stage4',
    pillTone: 'coral'
  },
  c2: {
    id: 'c2',
    lvNumber: 6,
    shortLabel: 'Lv.6 마스터 (C2)',
    cefrCode: 'CEFR C2',
    titleKo: 'Lv.6 마스터 · 원어민 수사 & 아카데믹·임원 완성',
    taglineKo: '전술적 공감·고급 관용구·TED 연설 수준',
    descKo: '원어민 수준의 뉘앙스 제어, 고속 스피치 청취, 설득 심리학과 정교한 논설·수사 표현을 완성합니다.',
    defaultSpeechRate: 1.12,
    recommendedStartDay: 28,
    defaultStage: 'stage4',
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

export function normalizeMasteryStage(raw: unknown, fallbackLevel: LevelTier): MasteryStage {
  if (
    raw === 'stage0' ||
    raw === 'stage1' ||
    raw === 'stage2' ||
    raw === 'stage3' ||
    raw === 'stage4'
  ) {
    return raw;
  }
  return LEVEL_INFO_MAP[fallbackLevel].defaultStage;
}

export interface DiagnosticQuestion {
  id: string;
  stageTag: string;
  targetCefr: LevelTier;
  questionKo: string;
  options: Array<{
    label: string;
    isCorrect: boolean;
  }>;
}

export const PLACEMENT_DIAGNOSTIC_ITEMS: DiagnosticQuestion[] = [
  {
    id: 'diag-s0',
    stageTag: 'Stage 0 · 파닉스',
    targetCefr: 'a1',
    questionKo: 'Q1 [유치원·파닉스]. 단어 "cap(모자)" 끝에 Magic-E가 붙어 "cape"가 되면 모음 a 소리는 어떻게 바뀔까요?',
    options: [
      { label: '짧은 /æ/(애) 소리에서 긴 알파벳 이름 소리 /eɪ/(에이)로 바뀐다', isCorrect: true },
      { label: 'e 소리 때문에 무조건 /i:/(이) 소리로 바뀐다', isCorrect: false },
      { label: '발음 변화 없이 똑같이 "캡"으로 읽는다', isCorrect: false }
    ]
  },
  {
    id: 'diag-s1',
    stageTag: 'Stage 1 · 초등 어순',
    targetCefr: 'a1',
    questionKo: 'Q2 [초등 기초]. "그녀는 매일 아침 사과를 먹지 않는다." — 영어 어순과 3인칭 단수가 바른 문장은?',
    options: [
      { label: 'She not eats apples every morning.', isCorrect: false },
      { label: "She doesn't eat apples every morning.", isCorrect: true },
      { label: "She doesn't eats apples every morning.", isCorrect: false }
    ]
  },
  {
    id: 'diag-a1',
    stageTag: 'Stage 2 · A1–A2 일상',
    targetCefr: 'a2',
    questionKo: 'Q3 [중학 기초]. "퇴근길에 카페에 잠깐 들렀어요." — 어순·전치사가 바른 문장은?',
    options: [
      { label: 'On my way to home, I visited cafe.', isCorrect: false },
      { label: 'I stopped by a cafe on my way home.', isCorrect: true },
      { label: 'I went stop cafe in my way home.', isCorrect: false }
    ]
  },
  {
    id: 'diag-a2',
    stageTag: 'Stage 2 · 중학 문법',
    targetCefr: 'b1',
    questionKo: 'Q4 [중학 핵심]. "나는 5년 전부터 서울에 살고 있다 (지금도 계속)." — 시제가 가장 정확한 문장은?',
    options: [
      { label: 'I have lived in Seoul for five years.', isCorrect: true },
      { label: 'I lived in Seoul since five years.', isCorrect: false },
      { label: 'I am living in Seoul five years ago.', isCorrect: false }
    ]
  },
  {
    id: 'diag-b1',
    stageTag: 'Stage 2 · B1 회화',
    targetCefr: 'b1',
    questionKo: 'Q5 [실전 회화]. "내일 오전은 일정이 빠듯하네요. 대신 목요일이 괜찮으실까요?"',
    options: [
      { label: 'Tomorrow morning is ambiguous. Is Thursday possible?', isCorrect: false },
      { label: 'Tomorrow morning looks tight on my end. Would Thursday work instead?', isCorrect: true },
      { label: 'Tomorrow morning has a promise. Can we delay Thursday?', isCorrect: false }
    ]
  },
  {
    id: 'diag-b2',
    stageTag: 'Stage 3 · 고등 수능',
    targetCefr: 'b2',
    questionKo: 'Q6 [고등·수능 어법]. 빈칸에 들어갈 분사구문 형태로 바른 것은? "____ from space, the Earth looks like a pale blue dot."',
    options: [
      { label: 'Seeing (우주에서 보면서)', isCorrect: false },
      { label: 'Seen (우주에서 보았을 때 — 수동)', isCorrect: true },
      { label: 'To seeing (보기 위해)', isCorrect: false }
    ]
  },
  {
    id: 'diag-c1',
    stageTag: 'Stage 3–4 · 고등 심화/C1',
    targetCefr: 'c1',
    questionKo: 'Q7 [고등 심화·C1]. "초기 요구사항을 미리 알았더라면 훨씬 빠르게 조율했을 텐데요." (가정법 도치)',
    options: [
      { label: 'If I knew the initial scope earlier, I aligned it faster.', isCorrect: false },
      { label: 'Had we known the initial scope earlier, we would have aligned much faster.', isCorrect: true },
      { label: 'If we would know the scope earlier, we could align fast.', isCorrect: false }
    ]
  },
  {
    id: 'diag-c2',
    stageTag: 'Stage 4 · C2 마스터',
    targetCefr: 'c2',
    questionKo: 'Q8 [C2 아카데믹·비즈니스]. "단기 효율성은 매력적이지만, 장기적 신뢰를 훼손하는 양날의 검이 될 수 있습니다."',
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

export function recommendPlacementFromScore(correctCount: number): {
  stage: MasteryStage;
  levelTier: LevelTier;
} {
  if (correctCount <= 1) return { stage: 'stage0', levelTier: 'a1' };
  if (correctCount === 2) return { stage: 'stage1', levelTier: 'a1' };
  if (correctCount === 3) return { stage: 'stage1', levelTier: 'a2' };
  if (correctCount <= 5) return { stage: 'stage2', levelTier: 'b1' };
  if (correctCount === 6) return { stage: 'stage3', levelTier: 'b2' };
  if (correctCount === 7) return { stage: 'stage4', levelTier: 'c1' };
  return { stage: 'stage4', levelTier: 'c2' };
}

export function recommendLevelFromScore(correctCount: number): LevelTier {
  return recommendPlacementFromScore(correctCount).levelTier;
}
