import type { DayCatalogMeta, LevelTier, SpacedReviewCard } from '../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from './youtubeLibrary.ts';

export interface WeekThemeMeta {
  weekNumber: 1 | 2 | 3 | 4 | 5;
  shortLabel: string;
  cefrRange: string;
  titleKo: string;
  subtitleKo: string;
  dayRange: [number, number];
}

export const COURSE_METADATA = {
  trackTitle: '1개월(30일) 완성 · Lv.1 입문(A1) ~ Lv.6 마스터(C2) 통합 영어 커리큘럼',
  programSubtitle: '매일 7분 스피킹 스프린트 + 45분 유튜브·시트콤·독해 인강 + A4 시험지 + 실시간 영한사전',
  totalDays: 30,
  totalWeeks: 5,
  totalVocabCount: 450,
  totalYouTubeVideos: 40,
  totalReadingPassages: 30,
  totalSprintDrills: 300,
  totalExamQuestions: 475,
  totalTwinClinicQuestions: 475
};

export const WEEK_THEMES: WeekThemeMeta[] = [
  {
    weekNumber: 1,
    shortLabel: '일상·구동사',
    cefrRange: 'Lv.1–2 (A1–A2)',
    titleKo: 'Week 01 · 한국인 어순 감각 전환 & 일상 필수 구동사',
    subtitleKo: '동선·의도 반전·일정 조율·마감 전치사(by vs until)·3문장 확장까지 기초 뼈대를 완성합니다.',
    dayRange: [1, 6]
  },
  {
    weekNumber: 2,
    shortLabel: '여행·생활',
    cefrRange: 'Lv.2–3 (A2–B1)',
    titleKo: 'Week 02 · 카페·공항·호텔·쇼핑 & 스몰토크 실전 회화',
    subtitleKo: '해외여행과 일상 사교에서 바로 통하는 주문·트러블슈팅·감정·시제 표현을 체화합니다.',
    dayRange: [7, 12]
  },
  {
    weekNumber: 3,
    shortLabel: '오피스·실무',
    cefrRange: 'Lv.3–4 (B1–B2)',
    titleKo: 'Week 03 · 글로벌 직장·화상미팅·이메일·보고 & 피드백',
    subtitleKo: 'Zoom 회의 진행, 영문 이메일, 업무 진척 보고, 완곡한 반론과 예의 바른 거절을 마스터합니다.',
    dayRange: [13, 18]
  },
  {
    weekNumber: 4,
    shortLabel: '발표·협상',
    cefrRange: 'Lv.4–5 (B2–C1)',
    titleKo: 'Week 04 · 프레젠테이션·윈윈 협상·가정법·영어 면접',
    subtitleKo: 'PT 뼈대, 가격/조건 네고, 위기 시뮬레이션 가정법, STAR 면접과 레지스터 전환을 정복합니다.',
    dayRange: [19, 24]
  },
  {
    weekNumber: 5,
    shortLabel: '시사·마스터',
    cefrRange: 'Lv.5–6 (C1–C2)',
    titleKo: 'Week 05 · BBC·TED 시사 토론·설득 심리 & 파이널 졸업고사',
    subtitleKo: 'AI·번아웃·문화 토론, 전술적 공감, 고급 관용구와 30일 파이널 졸업 모의고사로 완성합니다.',
    dayRange: [25, 30]
  }
];

function entry(
  dayNumber: number,
  weekNumber: 1 | 2 | 3 | 4 | 5,
  cefrLevel: LevelTier,
  dayBadge: string,
  categoryLabel: string,
  title: string,
  subtitle: string,
  heroImage: string,
  keyExpression: string,
  isWeeklyReview = false
): DayCatalogMeta {
  const yt = DAY_YOUTUBE_VIDEOS[dayNumber];
  return {
    dayNumber,
    weekNumber,
    cefrLevel,
    isWeeklyReview,
    dayBadge,
    categoryLabel,
    title,
    subtitle,
    heroImage,
    keyExpression,
    youtubeVideoId: yt.videoId,
    youtubeTitle: yt.title,
    vocabCount: 15,
    examCount: isWeeklyReview ? 20 : 15
  };
}

export const COURSE_CATALOG: DayCatalogMeta[] = [
  entry(1, 1, "a1", "DAY 01 · 동선 & 구동사 코어", "일상·오피스 스몰토크 필수 패턴", "퇴근길에 잠깐 들렀어요", "한국어 부사구부터 떠올리는 습관을 끊고 [주어 + 핵심 구동사]를 1초 만에 발사하는 법", "assets/scene_cafe_detour.jpg", "stop by ~ on my way home", false),
  entry(2, 1, "a1", "DAY 02 · 의도 vs 결과 반전", "일상·업무 근황 토크 핵심 시제", "일찍 가려 했는데 결국 야근했어요", "원래 계획(meant to / was going to)과 예상 밖 결말(ended up -ing)을 한 호흡에 대조하는 법", "assets/scene_late_office.jpg", "I meant to ~, but I ended up -ing", false),
  entry(3, 1, "a2", "DAY 03 · 완곡한 거절 & 일정 조율", "비즈니스 & 실전 커뮤니케이션 매너", "내일은 일정이 좀 애매하네요", "직설적인 No 없이 상대의 기분을 배려하며 프로답게 시간을 미루고 역제안하는 기술", "assets/office_sitcom_scene.jpg", "Tomorrow looks a bit tight — would ~ work instead?", false),
  entry(4, 1, "a2", "DAY 04 · 마감 기한 & 글로벌 협업 싱크", "실무 이메일 · 화상회의 필수 영어", "금요일까지 마무리해서 공유드릴게요", "치명적인 마감 전치사 실수(by vs until)를 완벽히 잡고 신뢰감을 주는 업무 보고 문장 만들기", "assets/scene_video_call.jpg", "wrap ~ up by Friday and keep you in the loop", false),
  entry(5, 1, "a2", "DAY 05 · 단답형 탈출 3문장 확장법", "오픽 IH·AL & 인터뷰·스몰토크 확장 기술", "단답형 Yes/No 탈출: 3문장 스토리 확장", "질문을 받으면 어색하게 한마디로 끊기던 대화를 [핵심 포인트 → 이유 → 생생한 예시]로 매끄럽게 이어가는 법", "assets/scene_riverside_walk.jpg", "What I love most is that it helps me clear my head", false),
  entry(6, 1, "a2", "DAY 06 · WEEK 1 주간 종합 성취도 평가", "Week 1 총정리 리허설 & 20문항 실전 모의고사", "Week 1 실전 통합 리허설 & 종합 모의고사", "Day 01~05에서 배운 75개 핵심 구동사·전치사·비즈니스 조율·3문장 확장법을 하나의 실전 스토리와 20문항 평가로 완전 체화", "assets/office_sitcom_scene.jpg", "Week 1 Complete Mastery: Fluency × Nuance × Accuracy", true),
  entry(7, 2, "a2", "DAY 07 · 카페·식당 주문 & 커스텀", "생존 여행·일상 외식 필수 패턴", "얼음은 적게, 소스는 따로 주세요", "직설적인 \"Give me~\"를 벗어나 음료·식사 커스텀 요청, 알레르기 안내, 결제까지 현지인처럼 매끄럽게 주문하는 법", "assets/scene_cafe_detour.jpg", "go easy on ~ / on the side / grab a bite", false),
  entry(8, 2, "a2", "DAY 08 · 공항 체크인·환승·수하물", "해외여행·출장 공항 트러블슈팅", "환승 시간 짧은데 짐은 바로 연결되나요?", "좌석 지정과 수하물 위탁부터 촉박한 환승(layover), 게이트 변경, 지연·분실 수하물 대응까지 공항 전 과정을 침착하게 돌파하는 법", "assets/scene_airport_travel.jpg", "check in / layover / boarding gate", false),
  entry(9, 2, "b1", "DAY 09 · 호텔 체크인 & 현지 길 묻기", "해외 숙박·교통 B1 실전 대응", "숙박 연장하고 무료 조식도 가능할까요?", "예약 확인·룸 업그레이드·레이트 체크아웃 요청부터 시내 대중교통과 도보 길 묻기까지 간접의문문으로 품격 있게 소통하는 법", "assets/scene_airport_travel.jpg", "extend my stay / get around / complimentary", false),
  entry(10, 2, "b1", "DAY 10 · 쇼핑·교환·환불 & 정중한 컴플레인", "해외 매장 쇼핑 & 문제 해결 B1", "입어봐도 될까요? 한 치수 큰 걸로 교환하고 싶어요", "피팅룸·재고 문의부터 영수증(묵음 p)·전액 환불·제품 하자 대응까지 감정 상하지 않고 원하는 해결책을 얻어내는 정중한 컴플레인 전략", "assets/scene_restaurant_chat.jpg", "try it on / exchange / receipt / refund", false),
  entry(11, 2, "b1", "DAY 11 · 주말·취미·감정 스몰토크", "관계 형성·원어민 리액션 B1", "요즘 러닝에 푹 빠졌어, 날씨가 점점 좋아지네", "단답형 \"Yes/No\"로 대화가 끊기는 습관을 깨고 취미(be into)·근황(catch up)·상태 변화(it’s getting ~)로 10분 이상 자연스럽게 대화를 이어가는 법", "assets/scene_restaurant_chat.jpg", "be into ~ / catch up with ~ / it's getting ~", false),
  entry(12, 2, "b1", "DAY 12 · WEEK 2 주간 종합 성취도 평가", "Week 2 총정리 리허설 & 20문항 실전 모의고사", "Week 2 실전 통합 리허설 & 2주차 종합평가", "Day 07~11의 카페·공항·호텔·쇼핑·스몰토크 75개 표현과 핵심 문제 해결 구동사를 하나의 시애틀 출장 스토리와 20문항 종합평가로 완전 마스터", "assets/scene_riverside_walk.jpg", "Week 2 Complete Mastery: Travel × Shopping × Small Talk", true),
  entry(13, 3, "b1", "DAY 13 · 화상 미팅 오프닝 & 연결 대처", "Week 3 오피스 실무 · 화상회의 진행 & 트러블슈팅", "화면 공유가 잘 보이시나요?", "Zoom·Teams 글로벌 화상회의 오프닝부터 화면 공유, 오디오 끊김·음소거 대처, 아젠다 전환까지 당황하지 않고 리드하는 핵심 공식", "assets/scene_video_call.jpg", "Let me share my screen — can everyone see this clearly?", false),
  entry(14, 3, "b1", "DAY 14 · 영문 이메일 구조 & 회신 요청", "Week 3 오피스 실무 · 영문 이메일 & 협업 팔로업", "첨부 파일 확인 부탁드립니다", "콩글리시 직역 이메일에서 벗어나, 미국 오피스 표준 구조로 첨부 안내·리마인드·회신 요청을 간결하고 세련되게 쓰는 법", "assets/office_sitcom_scene.jpg", "Please find the deck attached, and I'll circle back by Friday.", false),
  entry(15, 3, "b2", "DAY 15 · 업무 진행 보고 & 마감 지연 대응", "Week 3 오피스 실무 · 프로젝트 현황 보고 & 우선순위 조율", "일정은 순조롭지만 병목이 하나 생겼습니다", "진행률 보고부터 우선순위(Priority) 재정렬, 예상치 못한 병목(Bottleneck)과 마감 지연(Push back)을 신뢰를 잃지 않고 보고하는 실무 공식", "assets/scene_late_office.jpg", "We're mostly on track, but we hit a bottleneck and may need to push back the deadline.", false),
  entry(16, 3, "b2", "DAY 16 · 회의 끼어들기·동의·완곡한 반론", "Week 3 오피스 실무 · 영어 회의 발언권 & 설득력 있는 반론", "말씀하신 내용에 한 가지 덧붙여도 될까요?", "영어 회의에서 눈치만 보다 침묵하지 않고, 타이밍 좋게 끼어들어 의견을 얹고(Build on) 기분 상하지 않게 완곡한 반론을 펼치는 고급 토론 기술", "assets/scene_boardroom_pitch.jpg", "I see where you're coming from, and to build on that, I'd suggest another angle.", false),
  entry(17, 3, "b2", "DAY 17 · 건설적 피드백 & 예의 바른 거절", "Week 3 오피스 실무 · 피드백 화법 & 업무 경계 설정", "솔직한 피드백 감사해요, 다만 지금은 여력이 꽉 찼습니다", "감정을 상하지 않게 건설적 피드백(Constructive Feedback)을 주고받고, 업무 과부하(At capacity) 상황에서 프로답게 경계를 지키는 거절 기술", "assets/office_sitcom_scene.jpg", "I really appreciate the heads-up, though I'm currently at capacity this week.", false),
  entry(18, 3, "b2", "DAY 18 · WEEK 3 오피스 실무 종합 성취도 평가", "Week 3 총정리 리허설 & 20문항 오피스 종합평가", "Week 3 실전 통합 리허설 & 3주차 오피스 종합평가", "Day 13~17의 화상회의·이메일·진행 보고·회의 반론·피드백 거절과 글로벌 오피스 핵심 이디엄을 1개의 실전 스토리와 20문항 종합평가로 완전 체화", "assets/scene_boardroom_pitch.jpg", "Week 3 Office Mastery: Remote Calls × Emails × Reports × Debates × Feedback", true),
  entry(19, 4, "b2", "DAY 19 · 영어 프레젠테이션 & 데이터 브리핑", "비즈니스 PT · 차트 시각화 · 핵심 요약", "오늘 핵심 데이터부터 차근차근 안내드리겠습니다", "영어 발표의 도입-차트 해석-결론 요약-Q&A를 원어민 임원 보고 뼈대(walk you through / key takeaway / bottom line)로 장악하기", "assets/scene_boardroom_pitch.jpg", "walk you through ~ / key takeaway / bottom line", false),
  entry(20, 4, "b2", "DAY 20 · 가격·계약 조건 윈윈 협상", "비즈니스 네고 · 절충안 · 조건 교환", "서로 한 발씩 양보해 윈윈 절충안을 찾아보죠", "단순 가격 흥정을 넘어 wiggle room·on the table·meet halfway로 협상 주도권과 신뢰를 동시에 잡는 실전 영어", "assets/scene_boardroom_pitch.jpg", "meet halfway / on the table / wiggle room", false),
  entry(21, 4, "c1", "DAY 21 · 가정법 리스크 시뮬레이션 & 위기 대응", "고급 가정법 · 도치 구문 · 사후 회고(Post-Mortem)", "그 변수를 미리 알았더라면 비상 계획을 가동했을 겁니다", "2·3차 가정법과 C1 도치 구문(Had we known / Were we to)으로 리스크를 선제 예측하고 위기 회고를 프로답게 보고하기", "assets/scene_video_call.jpg", "what if ~ / had we known / contingency plan", false),
  entry(22, 4, "c1", "DAY 22 · 글로벌 영어 면접 STAR 기법 & 강점 어필", "영어 면접 · 행동 질문(STAR) · 이직 사유", "유관 부서를 진두지휘해 수치로 입증된 성과를 냈습니다", "면접 첫 60초와 STAR 기법(spearheaded / cross-functional / measurable impact)으로 글로벌 채용담당자를 사로잡는 C1 답변 전략", "assets/office_sitcom_scene.jpg", "spearheaded / cross-functional / measurable impact", false),
  entry(23, 4, "c1", "DAY 23 · 격식 동사 vs. 원어민 구동사 & 뉘앙스 레이어링", "레지스터 전환 · 격식/구어 제어 · 고급 이디엄", "같은 뜻도 보고서와 회의에서는 어조를 다르게 갈아입습니다", "라틴계 격식 동사(postpone · tolerate)와 원어민 구동사(put off · put up with), 고급 관용구(bring to the table)를 자유자재로 전환하기", "assets/scene_boardroom_pitch.jpg", "bring to the table / at the end of the day / put off vs. postpone", false),
  entry(24, 4, "c1", "DAY 24 · WEEK 4 주간 종합 성취도 평가 (20문항)", "Week 4 통합 리허설 · 발표·협상·가정법·면접·레지스터", "Week 4 실전 통합 리허설 & 4주차 종합평가", "Day 19~23에서 완성한 영어 PT·윈윈 협상·가정법 위기 대응·STAR 면접·레지스터 전환을 하나의 글로벌 서밋 시나리오와 20문항 모의고사로 최종 검증", "assets/scene_boardroom_pitch.jpg", "Week 4 Mastery: Executive Pitch × Negotiation × Conditionals × STAR × Register", true),
  entry(25, 5, "c1", "DAY 25 · BBC 시사 토론 & AI 찬반 논증", "C1 고급 시사 토론 · 자동화·일자리 균형 논증", "AI와 미래 일자리: BBC 스타일 시사 토론과 찬반 논증", "단순 찬반(\"Good / Bad\")을 넘어 양보절(While ~), 양날의 검(double-edged sword), 업스킬링(upskill)으로 입체적 시사 의견을 전개하는 법", "assets/scene_media_podcast.jpg", "While automation streamlines routine work, it remains a double-edged sword unless workers continuously upskill.", false),
  entry(26, 5, "c1", "DAY 26 · 번아웃·워라밸 심층 인터뷰 독해", "C1 심리·사회 칼럼 · 경계 설정 & 지속 가능한 집중", "번아웃·워라밸·현대인의 스트레스 심층 인터뷰 독해", "항상 연결된 시대(always-on culture) 속 인지 과부하를 진단하고, 경계 설정(set boundaries)과 회복 탄력성(resilience)을 논리적으로 표현하는 법", "assets/scene_media_podcast.jpg", "Setting clear boundaries isn't selfish—it's the only sustainable way to keep burnout at bay.", false),
  entry(27, 5, "c1", "DAY 27 · 글로벌 음식·문화 스몰토크 & 경청", "C1 글로벌 교양 회화 · 문화 뉘앙스 & 설득력 있는 경청", "글로벌 음식·문화 차이 스몰토크 & 설득력 있는 경청", "해외 만찬과 글로벌 네트워킹에서 음식 문화(culinary heritage)로 유대감(rapport)을 쌓고, 문화 뉘앙스를 읽으며 능동적 경청(active listening)으로 마음을 얻는 법", "assets/scene_restaurant_chat.jpg", "When you practice active listening and appreciate cultural nuance, even a casual meal can build lasting rapport.", false),
  entry(28, 5, "c2", "DAY 28 · 설득 심리 & 전술적 공감(Tactical Empathy)", "C2 마스터 수사 · 전술적 공감·감정 라벨링·프레임 전환", "설득의 심리학: 전술적 공감(Tactical Empathy)과 고급 수사", "전 FBI 수석 협상가 스타일의 전술적 공감(tactical empathy), 감정 라벨링, 미러링(mirror back), 프레임 전환(reframe)으로 방어심을 녹이고 합의를 이끄는 C2 설득 영어", "assets/scene_media_podcast.jpg", "Tactical empathy is not about conceding your stance—it is about mirroring back concerns so you can reframe the deadlock.", false),
  entry(29, 5, "c2", "DAY 29 · 원어민 고속 스피치·관용구·논설 에세이", "C2 마스터 유창성 · 양보 도치·수사적 프레이밍·관용구 정밀 제어", "원어민 고속 스피치·관용구·논설 에세이 스타일 마스터", "단순히 빨리 말하는 영어를 넘어, 정교한 양보(nuanced concession), 수사적 프레이밍(rhetorical framing), 자연스러운 관용구 감각으로 원어민 고속 대화를 장악하는 법", "assets/scene_media_podcast.jpg", "Compelling as rapid speech may sound, true C2 mastery lies in nuanced concession, rhetorical framing, and idiomatic precision.", false),
  entry(30, 5, "c2", "DAY 30 · 30일 완성 1개월 파이널 졸업 모의고사", "30일 통합 마스터리 · A1~C2 전 영역 최종 종합 평가 (20문항)", "30일 완성 1개월 파이널 졸업 모의고사: A1~C2 전 영역 통합 마스터", "Day 01의 일상 동선·어순 뼈대(A1)부터 여행·오피스 실무(B1–B2), 시사 토론·전술적 공감·TED 설득 수사(C1–C2)까지 30일 전 과정을 하나로 통합 검증하는 20문항 파이널 졸업 에디션", "assets/scene_boardroom_pitch.jpg", "True mastery is not reciting isolated rules—it is shifting seamlessly from everyday warmth to executive persuasion with poise.", true)
];

export function getDayCatalogMeta(dayNumber: number): DayCatalogMeta {
  return COURSE_CATALOG.find((d) => d.dayNumber === dayNumber) ?? COURSE_CATALOG[0];
}

export function getWeekNumberForDay(dayNumber: number): 1 | 2 | 3 | 4 | 5 {
  return getDayCatalogMeta(dayNumber).weekNumber;
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
