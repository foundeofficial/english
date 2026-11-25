import type { YouTubeLessonVideo } from '../types/course.ts';

/**
 * 100% verified, live, embed-permitted YouTube educational English videos
 * mapped across Day 1 ~ Day 30 and CEFR Lv.1 (A1) ~ Lv.6 (C2).
 */
export const DAY_YOUTUBE_VIDEOS: Record<number, YouTubeLessonVideo> = {
  1: {
    videoId: 'nFuHmEHyDZI',
    title: '아주 쉬운 필수 영어회화 기초편 120문장 반복 훈련',
    channel: 'Language Academia [ 랭귀지 아카데미아 ]',
    levelTier: 'a1',
    categoryKo: '기초 필수 회화 · 반복 쉐도잉',
    durationLabel: '기초 집중 반복',
    koreanSummary:
      '왕초보도 바로 입을 열 수 있도록 가장 빈도 높은 생활 영어 120문장을 천천히·자연스럽게 반복해 주는 기초 핵심 강의입니다. Day 1의 동선·일상 구동사와 함께 워밍업하기에 최적입니다.',
    chapters: [
      { labelKo: '기초 인사·안부 패턴 워밍업', startSec: 0, focusExpression: 'How is it going? / Good to see you' },
      { labelKo: '일상 행동 & 요청 표현', startSec: 180, focusExpression: 'Can you help me? / Just a second' },
      { labelKo: '이동·외출 필수 문장', startSec: 420, focusExpression: 'On my way / Let’s go together' }
    ],
    studyMissionKo: [
      '영상 속 문장을 들을 때 눈을 감고 주어+동사 리듬을 그대로 따라 말해보세요.',
      '모르는 단어가 나오면 우측 [영한사전]에서 바로 검색해 내 단어장에 저장하세요.',
      '오늘 배운 stop by / on my way home 패턴과 비슷한 문장을 3개 이상 필기하세요.'
    ]
  },
  2: {
    videoId: 'OGHo7apPWIY',
    title: '왕초보를 위한 영어회화 강의 — 기본적인 문장 구성하기',
    channel: '라이브 아카데미 토들러',
    levelTier: 'a1',
    categoryKo: '어순 뼈대 · 핵심 강의',
    durationLabel: '원리 설명 강의',
    koreanSummary:
      '한국어 어순과 영어 어순이 결정적으로 달라지는 지점을 아주 쉽게 풀어주는 명강의입니다. Day 2의 [의도(meant to) → 결과(ended up)] 문장 확장 원리를 이해하는 데 큰 도움이 됩니다.',
    chapters: [
      { labelKo: '영어 문장의 핵심 뼈대 잡기', startSec: 0, focusExpression: 'Subject + Core Verb first' },
      { labelKo: '시간·장소 정보 뒤에 붙이기', startSec: 210, focusExpression: 'Verb + Object + Place + Time' },
      { labelKo: '실전 예문 말하기 훈련', startSec: 450, focusExpression: 'I meant to ~ / I had to ~' }
    ],
    studyMissionKo: [
      '한국어 문장을 영어로 바꿀 때 “누가 + 뭘 했는지”부터 먼저 입으로 뱉는 연습을 하세요.',
      '강사가 제시하는 예문을 1초 멈춤 후 직접 영작해 본 뒤 정답과 비교하세요.'
    ]
  },
  3: {
    videoId: 'DuKmyTdsilM',
    title: '짧고 쉬운 생활영어 필수 문장 30개 집중 리스닝',
    channel: '엄마도영어한다',
    levelTier: 'a2',
    categoryKo: '생활 필수 · 시간/약속 표현',
    durationLabel: '생활 30문장',
    koreanSummary:
      '"I’m running late", "How long will it take?" 등 약속·일정·시간 조율에서 매일 나오는 짧은 원어민 문장 30개를 3회 반복 구조로 체화하는 영상입니다.',
    chapters: [
      { labelKo: '약속·지각·도움 요청', startSec: 0, focusExpression: "I'm running late / Could you help me?" },
      { labelKo: '소요 시간 & 일정 묻기', startSec: 160, focusExpression: 'How long will it take?' },
      { labelKo: '외출·방향·부탁 패턴', startSec: 320, focusExpression: 'Where is the exit? / Let me check' }
    ],
    studyMissionKo: [
      '시간·약속 관련 표현 5개를 골라 본인 스케줄에 맞게 단어를 바꿔 말해보세요.',
      'Day 3의 "tight on my end"와 결합해 일정 조율 미니 대화를 만들어 보세요.'
    ]
  },
  4: {
    videoId: 'DArF9XXqV1s',
    title: '원어민이 매일 사용하는 실생활 영어표현 100문장',
    channel: 'Language Academia [ 랭귀지 아카데미아 ]',
    levelTier: 'a2',
    categoryKo: '원어민 빈출 표현 · 쉐도잉',
    durationLabel: '실생활 100문장',
    koreanSummary:
      '직역으로는 절대 나오지 않는 원어민 필수 생활 표현 100개를 집중 반복합니다. Day 4의 마감·공유·부탁 구동사 감각을 귀에 익히는 데 좋습니다.',
    chapters: [
      { labelKo: '입에 붙는 원어민 반응 표현', startSec: 0, focusExpression: 'Put yourself in my shoes / That’s it' },
      { labelKo: '일상 부탁 & 진행 확인', startSec: 240, focusExpression: 'Keep me posted / Count me in' },
      { labelKo: '마무리 & 감사 인사 패턴', startSec: 520, focusExpression: 'I appreciate it / Sounds like a plan' }
    ],
    studyMissionKo: [
      '영상 재생 속도를 조절하며 원어민 억양(강세 위치)을 그대로 흉내 내 보세요.',
      '처음 들은 관용 표현 3개를 노트에 적고 우측 사전으로 뜻을 확인하세요.'
    ]
  },
  5: {
    videoId: 'Y5FKFv-H3VM',
    title: '생활 영어 회화 패턴 15개 듣고 따라하기',
    channel: '라이브 아카데미 토들러',
    levelTier: 'a2',
    categoryKo: '핵심 패턴 · 입트영 훈련',
    durationLabel: '패턴 15선',
    koreanSummary:
      '주말 근황, 피곤함, 취미, 예전과 달라진 점을 말할 때 원어민이 입에 달고 사는 생활 회화 패턴 15개를 반복 연습합니다.',
    chapters: [
      { labelKo: '요즘 근황 & 취미 말하기', startSec: 0, focusExpression: 'Have you been ~ lately?' },
      { labelKo: '예전과 달라진 점 표현하기', startSec: 210, focusExpression: "It's not what it used to be" },
      { labelKo: '주말 휴식 & 재충전 대화', startSec: 420, focusExpression: 'Catch up on sleep / Wind down' }
    ],
    studyMissionKo: [
      '각 패턴당 내 주말 이야기로 응용 문장을 1개씩 소리 내어 만들어 보세요.',
      'Day 5의 recharge, wind down 표현과 묶어서 3문장 주말 일기를 써보세요.'
    ]
  },
  6: {
    videoId: 'R8ZjHdusEG0',
    title: '짧고 쉬운 기초 영어회화 100문장 2탄 총복습',
    channel: 'Language Academia [ 랭귀지 아카데미아 ]',
    levelTier: 'a2',
    categoryKo: 'Week 1 총복습 · 리스닝',
    durationLabel: '1주차 복습 100문장',
    koreanSummary:
      '1주차 동안 배운 동선·시간·일정·주말·감사 표현을 한 번에 귀로 점검하는 총복습용 리스닝 100문장입니다.',
    chapters: [
      { labelKo: '일상 대화 워밍업 (1~35)', startSec: 0, focusExpression: 'Don’t let it pass by / I owe you one' },
      { labelKo: '시간·약속·가격 표현 (36~70)', startSec: 300, focusExpression: 'Reasonable price / Make it on time' },
      { labelKo: '감정·반응 마무리 (71~100)', startSec: 600, focusExpression: 'It makes sense / Fair enough' }
    ],
    studyMissionKo: [
      '자막을 가리고 먼저 귀로만 들은 뒤, 뜻이 바로 떠오르지 않은 문장만 체크하세요.',
      '시청 후 [학습지 & 시험지] 탭에서 Day 06 1주차 종합평가 20문항에 도전하세요!'
    ]
  },
  7: {
    videoId: 'HgYgHHvNzAo',
    title: '영어가 무서운 어른들을 위한 초간단 카페 영어회화 20문장',
    channel: '영어회화 영어해결',
    levelTier: 'a2',
    categoryKo: '카페·식당 주문 실전',
    durationLabel: '카페 20문장',
    koreanSummary:
      '해외 카페에서 음료 커스터마이징, 자리 문의, 픽업, 와이파이 요청까지 바로 써먹는 초실전 20문장을 4회 반복으로 완벽 암기합니다.',
    chapters: [
      { labelKo: '입장 & 좌석 확인', startSec: 0, focusExpression: 'Can I put my bag here? / Have a seat' },
      { labelKo: '음료 주문 & 옵션 요청', startSec: 150, focusExpression: 'Less ice / Oat milk instead' },
      { labelKo: '픽업 & 결제 마무리', startSec: 300, focusExpression: 'Your coffee is ready / Keep the change' }
    ],
    studyMissionKo: [
      '평소 본인이 카페에서 시키는 최애 음료를 영어로 1문장 주문해 보세요.',
      'for here / to go, on the side, go easy on 표현을 소리 내어 3회 반복하세요.'
    ]
  },
  8: {
    videoId: 'quLUfpQQmMA',
    title: '왕초보 여행 영어회화 100문장 — 공항·기내·호텔·식당',
    channel: '바로 쓰는 생활영어',
    levelTier: 'a2',
    categoryKo: '공항·기내·입국심사',
    durationLabel: '여행 100문장',
    koreanSummary:
      '공항 체크인 카운터, 보안검색, 기내 서비스, 입국 심사에서 실제로 듣게 되는 질문과 답변을 상황별로 반복 연습합니다.',
    chapters: [
      { labelKo: '공항 체크인 & 수하물 위탁', startSec: 0, focusExpression: 'Window or aisle seat? / Carry-on' },
      { labelKo: '기내 요청 & 환승 안내', startSec: 260, focusExpression: 'Connecting flight / Boarding gate' },
      { labelKo: '입국심사 & 수하물 찾기', startSec: 520, focusExpression: 'Purpose of visit / Baggage claim' }
    ],
    studyMissionKo: [
      '공항 직원이 묻는 질문 3가지에 본인 여행 일정으로 즉답하는 연습을 하세요.',
      'layover, boarding pass, customs 단어를 사전에서 발음까지 확인하세요.'
    ]
  },
  9: {
    videoId: 'aDrJOqQoZOo',
    title: '상황별 영어 표현 모음집 — 호텔 체크인·공항·길 묻기',
    channel: 'Ethan_Everyday_English',
    levelTier: 'b1',
    categoryKo: '호텔·교통·현지 대응',
    durationLabel: '상황별 BEST5',
    koreanSummary:
      '호텔 체크인, 조식 문의, 방 변경 요청, 현지 교통 길 묻기까지 여행 중 마주치는 핵심 대화 흐름을 자연스러운 원어민 대화로 익힙니다.',
    chapters: [
      { labelKo: '호텔 체크인 & 예약 확인', startSec: 0, focusExpression: 'I have a reservation under ~' },
      { labelKo: '룸 컨디션 & 추가 요청', startSec: 180, focusExpression: 'Late check-out / Extra towels' },
      { labelKo: '길 묻기 & 대중교통 이용', startSec: 360, focusExpression: 'How do I get to ~?' }
    ],
    studyMissionKo: [
      '호텔에서 레이트 체크아웃과 짐 보관을 정중하게 부탁하는 문장을 직접 말해보세요.',
      'dialogue 속 complimentary, extend my stay 표현을 필기 노트에 정리하세요.'
    ]
  },
  10: {
    videoId: 'yeiOuVtRPnc',
    title: '해외에서 바로 쓰는 여행·쇼핑·교환 실전 영어 회화',
    channel: '대구영어회화 마이애미어학원',
    levelTier: 'b1',
    categoryKo: '쇼핑·교환·환불·컴플레인',
    durationLabel: '실전 8분 집중',
    koreanSummary:
      '해외 매장에서 사이즈 찾기, 할인 적용, 선물 포장, 영수증·환불 요청까지 실제 매장 대화 그대로 연습하는 실전 회화 영상입니다.',
    chapters: [
      { labelKo: '결제·할인·영수증 대화', startSec: 0, focusExpression: 'With the discount / Cash or card?' },
      { labelKo: '선물 포장 & 태그 제거 요청', startSec: 140, focusExpression: 'Gift wrap / Take the price tag off' },
      { labelKo: '교환·환불 정중하게 요청하기', startSec: 280, focusExpression: 'Gift receipt / Exchange for another size' }
    ],
    studyMissionKo: [
      '제품에 하자가 있거나 사이즈가 안 맞을 때 교환을 요청하는 2문장을 영작해 보세요.',
      'try it on, complimentary, receipt 발음(묵음 p 주의!)을 사전으로 확인하세요.'
    ]
  },
  11: {
    videoId: 'KrmjWSmn4w0',
    title: 'be + getting — 감정·상태 변화를 말하는 핵심 영어 패턴',
    channel: '라이브 아카데미 토들러',
    levelTier: 'b1',
    categoryKo: '스몰토크 · 감정/상태 변화',
    durationLabel: '핵심 패턴 집중',
    koreanSummary:
      '원어민 일상 대화에서 “점점 ~해지고 있어(피곤해져, 배고파져, 지겨워져, 늦어져)”를 표현하는 가장 자연스러운 패턴 `be getting + 형용사`를 대화 예문으로 훈련합니다.',
    chapters: [
      { labelKo: '날씨·시간 변화 스몰토크', startSec: 0, focusExpression: "It's getting late / getting humid" },
      { labelKo: '감정·컨디션 자연스럽게 말하기', startSec: 180, focusExpression: "I'm getting tired / getting hungry" },
      { labelKo: '상황 악화·변화 뉘앙스', startSec: 360, focusExpression: 'Things are getting out of hand' }
    ],
    studyMissionKo: [
      '오늘 내 기분·컨디션 변화를 "I’m getting ~" 패턴으로 3문장 만들어 보세요.',
      '영상 속 원어민 맞장구 표현(good call, I know right)을 노트에 메모하세요.'
    ]
  },
  12: {
    videoId: 'oGM94udL8MM',
    title: '50 Important Phrasal Verbs in English for Daily Conversation',
    channel: 'Speak English With Vanessa',
    levelTier: 'b1',
    categoryKo: 'Week 2 총복습 · 핵심 구동사 50',
    durationLabel: '원어민 구동사 마스터',
    koreanSummary:
      '미국 원어민 강사 Vanessa가 일상과 직장 어디서나 쓰이는 핵심 구동사 50개를 실제 예문과 명확한 미국식 발음으로 정리해 주는 대표 강의입니다.',
    chapters: [
      { labelKo: '일상 이동·만남 구동사', startSec: 0, focusExpression: 'catch up / run into / drop by' },
      { labelKo: '감정·관계·약속 구동사', startSec: 420, focusExpression: 'let down / follow through / look up to' },
      { labelKo: '문제 해결 & 마무리 구동사', startSec: 840, focusExpression: 'figure out / sort out / work out' }
    ],
    studyMissionKo: [
      '원어민 영어 설명을 그대로 들으며 문맥으로 뜻을 추측해 보세요.',
      '시청 후 Day 12 [2주차 종합평가 20문항]을 풀어 Week 2 실력을 점검하세요!'
    ]
  },
  13: {
    videoId: 'McGYM-Rq0Rg',
    title: '화상 미팅·세미나의 기본 틀을 잡아줄 뼈대 표현 6개',
    channel: '구슬쌤',
    levelTier: 'b1',
    categoryKo: '화상 미팅 · 오프닝/진행',
    durationLabel: '화상회의 핵심 6표현',
    koreanSummary:
      'Zoom/Teams 글로벌 화상회의 시작 인사, 화면 공유 확인, 오디오 끊김 대처, 회의 마무리까지 즉시 실무에 투입할 수 있는 뼈대 표현을 배웁니다.',
    chapters: [
      { labelKo: '회의 오프닝 & 출석 확인', startSec: 0, focusExpression: 'Thanks for hopping on / Can everyone hear me?' },
      { labelKo: '화면 공유 & 아젠다 전환', startSec: 180, focusExpression: 'Let me share my screen / Move on to' },
      { labelKo: '연결 문제 대처 & 마무리', startSec: 360, focusExpression: "You're breaking up / Wrap up" }
    ],
    studyMissionKo: [
      '내일 실제 화상회의가 있다고 가정하고 30초 오프닝 멘트를 소리 내어 연습하세요.',
      'Day 13의 1:1 과외 탭에서 회의 연결 장애 대응 문장을 직접 첨삭받아 보세요.'
    ]
  },
  14: {
    videoId: '-pBXxukloK4',
    title: '미국 회사에서 습관처럼 자주 썼던 실전 비즈니스 표현 7개',
    channel: '구슬쌤',
    levelTier: 'b1',
    categoryKo: '영문 이메일 · 협업 루틴',
    durationLabel: '미국 오피스 7표현',
    koreanSummary:
      '미국 현지 직장인들이 이메일과 슬랙(Slack)에서 매일 습관처럼 쓰는 핵심 비즈니스 표현 7개를 실제 문맥과 함께 익힙니다.',
    chapters: [
      { labelKo: '이메일·슬랙 회신 팔로업', startSec: 0, focusExpression: 'Circle back / Touch base' },
      { labelKo: '진행 상황 확인 & 리마인드', startSec: 180, focusExpression: 'Just following up / Heads-up' },
      { labelKo: '협업 요청 & 감사 마무리', startSec: 360, focusExpression: 'At your earliest convenience' }
    ],
    studyMissionKo: [
      '동료에게 자료 확인을 정중하게 재촉하는 3줄 영문 이메일을 노트에 작성해 보세요.',
      'circle back, touch base, heads-up의 뉘앙스 차이를 구분해 암기하세요.'
    ]
  },
  15: {
    videoId: 'WEDvuTDF9hY',
    title: '미국 회사에서 자주 쓰는 비즈니스 영어 표현 50개 총정리',
    channel: '구슬쌤',
    levelTier: 'b2',
    categoryKo: '업무 보고 · 일정/우선순위',
    durationLabel: '비즈니스 50표현',
    koreanSummary:
      '프로젝트 진척 보고, 일정 지연 공지, 병목(bottleneck) 보고, 우선순위 조정 등 실무 현장에서 매일 마주하는 비즈니스 핵심 표현 50개를 총정리합니다.',
    chapters: [
      { labelKo: '업무 상태·진행률 보고', startSec: 0, focusExpression: 'On track / Behind schedule' },
      { labelKo: '이슈 공유 & 일정 재조정', startSec: 420, focusExpression: 'Push back / Bottleneck / Bandwidth' },
      { labelKo: '책임 분담 & 후속 조치', startSec: 840, focusExpression: 'Take ownership / Action items' }
    ],
    studyMissionKo: [
      '내 직무에서 당장 쓸 수 있는 표현 5개를 별표로 필기해 두세요.',
      'bandwidth, on track, push back을 넣어 주간 업무 보고 3문장을 만들어 보세요.'
    ]
  },
  16: {
    videoId: 'uuZpvGgJ77w',
    title: '영어 미팅 걱정을 확 줄여줄 쪽집게 회의 표현 45개',
    channel: '구슬쌤',
    levelTier: 'b2',
    categoryKo: '회의 참여 · 동의/반론/끼어들기',
    durationLabel: '영어 회의 45표현',
    koreanSummary:
      '영어 회의에서 타이밍을 놓쳐 침묵하게 되는 한국인을 위해, 자연스럽게 끼어들기·동의하기·완곡하게 반론하기 표현 45개를 상황별로 정리합니다.',
    chapters: [
      { labelKo: '정중하게 발언권 얻기', startSec: 0, focusExpression: 'May I jump in here? / To add to that' },
      { labelKo: '동의하며 내 의견 얹기', startSec: 360, focusExpression: 'Building on what you said' },
      { labelKo: '상대 기분 상하지 않게 반론하기', startSec: 720, focusExpression: "I see your point, however..." }
    ],
    studyMissionKo: [
      '"I disagree" 대신 완곡하게 반론하는 표현 2가지를 완벽히 외우세요.',
      'Day 16의 시트콤 회의 대화와 비교하며 톤 차이를 느껴보세요.'
    ]
  },
  17: {
    videoId: 'Zai0kdsmX-8',
    title: '지금 당장 쓸 수 있는 예의 바른 영어 매너 표현 5개',
    channel: '구슬쌤',
    levelTier: 'b2',
    categoryKo: '피드백 · 완곡한 거절/매너',
    durationLabel: '예의 바른 영어 매너',
    koreanSummary:
      '직설적인 표현으로 오해받기 쉬운 한국인을 위해, 타협·피드백·거절·부탁 상황에서 신뢰감을 높여주는 예의 바른 원어민 매너 표현을 배웁니다.',
    chapters: [
      { labelKo: '부드러운 제안 & 피드백 오프닝', startSec: 0, focusExpression: 'Have you considered ~?' },
      { labelKo: '타협점 찾기 & 완곡한 거절', startSec: 180, focusExpression: 'Meet me halfway / At capacity' },
      { labelKo: '배려 있는 마무리 멘트', startSec: 340, focusExpression: 'No rush / Whenever you get a chance' }
    ],
    studyMissionKo: [
      '무리한 업무 요청을 정중하게 거절하면서 대안을 제시하는 2문장을 만들어 보세요.',
      'Day 17 [3교시 독해]의 피드백 이메일 구조와 함께 비교 학습하세요.'
    ]
  },
  18: {
    videoId: 'QEQCBSj2SIQ',
    title: '회사에서 영어를 쓴다면 무조건 알아야 할 핵심 이디엄 4개',
    channel: '구슬쌤',
    levelTier: 'b2',
    categoryKo: 'Week 3 총복습 · 비즈니스 이디엄',
    durationLabel: '오피스 이디엄 정복',
    koreanSummary:
      '글로벌 회의와 슬랙에서 매일 튀어나오는 핵심 비즈니스 이디엄을 정확한 뉘앙스로 정리하며 Week 3 오피스 영어 전체를 복습합니다.',
    chapters: [
      { labelKo: '회의 핵심 이디엄 이해하기', startSec: 0, focusExpression: 'On the same page / Ballpark figure' },
      { labelKo: '의사결정·협업 이디엄', startSec: 200, focusExpression: 'Green light / Touch base' },
      { labelKo: '실전 예문 쉐도잉', startSec: 380, focusExpression: 'Move the needle / Think outside the box' }
    ],
    studyMissionKo: [
      '영상 속 이디엄을 단어 뜻 그대로가 아닌 상황 이미지로 연결해 암기하세요.',
      '시청 후 Day 18 [3주차 종합평가 20문항]을 완료하세요!'
    ]
  },
  19: {
    videoId: 'hXHMOIP5hIg',
    title: '진짜 써먹을 수 있는 영어 프레젠테이션·회의 뼈대 표현 12개',
    channel: '구슬쌤',
    levelTier: 'b2',
    categoryKo: '영어 프레젠테이션 · 발표 구조',
    durationLabel: 'PT 뼈대 12표현',
    koreanSummary:
      '영어 발표의 도입-전개-그래프 설명-질의응답(Q&A)-결론 요약까지 발표 전체의 뼈대를 잡아주는 12개 핵심 표현을 익힙니다.',
    chapters: [
      { labelKo: '발표 오프닝 & 목차 안내', startSec: 0, focusExpression: "Today I'll walk you through..." },
      { labelKo: '데이터·슬라이드 강조 전환', startSec: 220, focusExpression: 'As you can see from the chart' },
      { labelKo: '핵심 요약 & Q&A 초대', startSec: 420, focusExpression: 'The key takeaway is / Open the floor' }
    ],
    studyMissionKo: [
      '본인이 최근에 한 프로젝트나 관심 주제를 4문장 미니 PT 오프닝으로 만들어 보세요.',
      'walk you through, key takeaway, bottom line을 억양까지 살려 발화하세요.'
    ]
  },
  20: {
    videoId: 't0QFQszyU9g',
    title: '네고를 시작해 볼까? 협상할 때 쓰는 실전 비즈니스 영어',
    channel: '반숙영어',
    levelTier: 'b2',
    categoryKo: '가격·조건 협상 · 네고 표현',
    durationLabel: '실전 협상 반복 훈련',
    koreanSummary:
      '윈윈 협상 오프닝부터 "가격 협상의 여지가 없다(no room to negotiate)", 조건 교환까지 실전 비즈니스 네고 표현을 집중 반복 훈련합니다.',
    chapters: [
      { labelKo: '윈윈 협상 오프닝 표현', startSec: 0, focusExpression: 'Both sides can benefit from this' },
      { labelKo: '한계선 긋기 & 조건 제시', startSec: 200, focusExpression: 'No room to negotiate / On condition that' },
      { labelKo: '반복 스피킹 훈련', startSec: 400, focusExpression: 'Meet halfway / Counteroffer' }
    ],
    studyMissionKo: [
      '납기일이나 단가를 조율할 때 쓰는 조건부 제안 문장(If you can ~, we could ~)을 2개 작성하세요.',
      'Day 20의 시트콤 협상 대화와 함께 대사 쉐도잉을 진행하세요.'
    ]
  },
  21: {
    videoId: 'rs8gEcviTYQ',
    title: 'Mastering Conditionals: Negotiating and Problem-Solving in the Workplace',
    channel: 'Definition Discovery',
    levelTier: 'c1',
    categoryKo: '가정법 실전 · 리스크 시뮬레이션',
    durationLabel: '비즈니스 가정법 완전정복',
    koreanSummary:
      '단순 문법 암기를 넘어, 1·2·3차 가정법(First / Second / Third Conditional)을 실제 직장 협상과 위기 대응 커뮤니케이션 무기로 쓰는 법을 영어로 배웁니다.',
    chapters: [
      { labelKo: '1차 조건문 — 현실적 대안 협상', startSec: 0, focusExpression: 'If we align early, we will...' },
      { labelKo: '2차 가정법 — 정중한 제안과 시뮬레이션', startSec: 150, focusExpression: 'If I were in your position, I would...' },
      { labelKo: '3차 과거 가정법 — 사후 회고(Post-mortem)', startSec: 300, focusExpression: 'If we had anticipated..., we would have...' }
    ],
    studyMissionKo: [
      '1차/2차/3차 가정법의 시제 공식을 칠판 강의와 대조하며 예문 1개씩 영작하세요.',
      '도치 고급 표현 "Had we known ~"을 입으로 5회 반복하세요.'
    ]
  },
  22: {
    videoId: 'rpFmRq5KeJs',
    title: 'The 60 Seconds That Make or Break a Conversation | Chris Fenning',
    channel: 'TEDx Talks',
    levelTier: 'c1',
    categoryKo: '영어 면접 · 첫 1분 핵심 구조화',
    durationLabel: 'TEDx 커뮤니케이션 명강',
    koreanSummary:
      '영어 면접이나 임원 보고의 성패를 가르는 “첫 60초(Topic · Intent · Point)” 프레임워크를 TEDx 강연으로 배우며 고급 리스닝을 훈련합니다.',
    chapters: [
      { labelKo: '왜 첫 1분이 대화를 결정하는가', startSec: 0, focusExpression: 'Context before detail' },
      { labelKo: 'Topic · Intent · Point 공식', startSec: 260, focusExpression: 'What is my topic, intent, and point?' },
      { labelKo: '면접·보고 실전 적용 예시', startSec: 520, focusExpression: 'Clarity over confusion' }
    ],
    studyMissionKo: [
      '자기소개나 면접 답변을 [Topic → Intent → Point] 순서로 3문장 압축해 보세요.',
      '영상 속 생소한 고급 어휘는 우측 [영한사전]으로 바로 찾아 저장하세요.'
    ]
  },
  23: {
    videoId: 'RuaX9qQEIjk',
    title: 'Switch These 10 Formal Verbs to 10 Natural Phrasal Verbs',
    channel: 'Speak English With Vanessa',
    levelTier: 'c1',
    categoryKo: '레지스터 전환 · 격식 vs 원어민 구어',
    durationLabel: '격식↔구어 10쌍 전환',
    koreanSummary:
      '교과서식 딱딱한 라틴계 격식 동사(postpone, cancel, tolerate 등)와 실제 원어민이 쓰는 자연스러운 구동사(put off, call off, put up with)의 뉘앙스 차이를 정확히 비교합니다.',
    chapters: [
      { labelKo: '격식 동사 vs 구동사 1~5', startSec: 0, focusExpression: 'postpone → put off / cancel → call off' },
      { labelKo: '격식 동사 vs 구동사 6~10', startSec: 320, focusExpression: 'tolerate → put up with / investigate → look into' },
      { labelKo: '상황별 어조(Register) 선택 전략', startSec: 600, focusExpression: 'Written report vs Spoken meeting' }
    ],
    studyMissionKo: [
      '같은 뜻이라도 이메일(격식)과 슬랙/구두 미팅(구동사)에 다르게 쓰는 쌍을 5개 정리하세요.',
      'Day 23의 3단 레지스터 스펙트럼(Casual / Standard / Formal)과 대조하세요.'
    ]
  },
  24: {
    videoId: 'Z3HJCQJ2Lmo',
    title: '3 Steps to Getting What You Want in a Negotiation | TED',
    channel: 'TED',
    levelTier: 'c1',
    categoryKo: 'Week 4 총복습 · TED 협상 전략',
    durationLabel: 'TED 공식 시리즈',
    koreanSummary:
      '상대방의 입장(putting yourself in their shoes)과 리스크를 먼저 파악하고 당당함과 배려의 균형을 잡는 TED 공식 협상 3단계 영상으로 Week 4를 마무리합니다.',
    chapters: [
      { labelKo: '1단계: 상대의 압박과 리스크 파악', startSec: 0, focusExpression: 'Anticipate needs and ripple effects' },
      { labelKo: '2단계: 자기 주장과 배려의 균형', startSec: 130, focusExpression: 'Balance assertiveness with concern' },
      { labelKo: '3단계: 질문으로 윈윈 기회 열기', startSec: 250, focusExpression: 'Ask why and why not' }
    ],
    studyMissionKo: [
      '영상 속 설득 문장("I’m asking for this because I know it enables...")을 직접 따라 말하세요.',
      '시청 후 Day 24 [4주차 종합평가 20문항]으로 발표·협상·면접 파트를 총점검하세요!'
    ]
  },
  25: {
    videoId: 's1HxJVusR2w',
    title: 'What is the future of work? | BBC 6 Minute English',
    channel: 'BBC Learning English',
    levelTier: 'c1',
    categoryKo: 'BBC 시사 리스닝 · AI와 미래 일자리',
    durationLabel: 'BBC 6분 영어',
    koreanSummary:
      'BBC Learning English의 대표 시사 토론 프로그램입니다. AI와 자동화가 바꿀 미래 일자리, 리스킬링, 원격근무에 대한 고급 영국/국제 영어 어휘 6개를 6분 안에 집중 학습합니다.',
    chapters: [
      { labelKo: '도입 질문 & 배경 토론', startSec: 0, focusExpression: 'Automation & future of work' },
      { labelKo: '전문가 인터뷰 청취', startSec: 140, focusExpression: 'Upskill / Adaptability / Disruption' },
      { labelKo: '핵심 시사 어휘 6개 총정리', startSec: 290, focusExpression: 'Vocabulary recap' }
    ],
    studyMissionKo: [
      'BBC 진행자가 마지막에 정리해 주는 핵심 어휘 6개를 받아쓰기하듯 노트에 적어보세요.',
      'AI가 내 직업에 미칠 영향에 대한 찬반 의견을 1:1 과외 탭에서 3문장으로 발표하세요.'
    ]
  },
  26: {
    videoId: 'QdE63sYqwd8',
    title: 'Why are we all so stressed? | BBC 6 Minute English',
    channel: 'BBC Learning English',
    levelTier: 'c1',
    categoryKo: 'BBC 시사 리스닝 · 번아웃과 워라밸',
    durationLabel: 'BBC 6분 영어',
    koreanSummary:
      '현대 직장인의 만성 스트레스와 번아웃, 경계 설정(setting boundaries)을 다루는 BBC 6 Minute English 에피소드입니다. 심리·사회 주제 토론 표현을 확장합니다.',
    chapters: [
      { labelKo: '현대인의 스트레스 퀴즈 도입', startSec: 0, focusExpression: 'Chronic stress / Burnout' },
      { labelKo: '심리 전문가 인터뷰 핵심', startSec: 150, focusExpression: 'Overwhelmed / Cope with pressure' },
      { labelKo: '어휘 리뷰 & 표현 정리', startSec: 300, focusExpression: 'Take a breather / Unwind' }
    ],
    studyMissionKo: [
      '스트레스를 해소하는 나만의 루틴을 BBC 어휘를 활용해 영어로 설명해 보세요.',
      'Day 26 [3교시 영자 독해] 칼럼을 읽으며 영국식·미국식 표현 차이를 살펴보세요.'
    ]
  },
  27: {
    videoId: '5kr5ADrMeYU',
    title: 'Learning a new food culture | BBC 6 Minute English',
    channel: 'BBC Learning English',
    levelTier: 'c1',
    categoryKo: 'BBC 문화 토론 · 음식과 글로벌 에티켓',
    durationLabel: 'BBC 6분 영어',
    koreanSummary:
      '새로운 음식 문화를 통해 타문화를 이해하는 글로벌 네트워킹·교양 주제의 BBC 에피소드입니다. 해외 출장·만찬 자리에서 품격 있는 대화를 나누는 어휘를 익힙니다.',
    chapters: [
      { labelKo: '음식과 문화 정체성 도입', startSec: 0, focusExpression: 'Culinary heritage / Food culture' },
      { labelKo: '인터뷰 청취 & 뉘앙스 파악', startSec: 150, focusExpression: 'Acquired taste / Authentic' },
      { labelKo: '핵심 문화 표현 요약', startSec: 300, focusExpression: 'Resonate with / Bridge cultures' }
    ],
    studyMissionKo: [
      '외국인 동료에게 한국 음식 문화를 소개하는 4문장 설명을 만들어 보세요.',
      '영상 속 생소한 형용사를 사전에서 유의어(Datamuse)까지 함께 확장하세요.'
    ]
  },
  28: {
    videoId: 'MjhDkNmtjy0',
    title: 'Never Split The Difference | Chris Voss | TEDx',
    channel: 'TEDx Talks',
    levelTier: 'c2',
    categoryKo: '고급 설득 심리 · 전술적 공감',
    durationLabel: 'TEDx 전설의 협상 강연',
    koreanSummary:
      '전 FBI 수석 인질 협상가 Chris Voss의 전설적인 강연입니다. 상대의 감정에 이름을 붙이고(labeling) 거울처럼 되비추는(mirroring) 전술적 공감의 고급 영어 수사를 체득합니다.',
    chapters: [
      { labelKo: '왜 단순 타협은 실패하는가', startSec: 0, focusExpression: 'Never split the difference' },
      { labelKo: '전술적 공감(Tactical Empathy)', startSec: 300, focusExpression: 'Make the other side feel heard' },
      { labelKo: '상대를 적으로부터 파트너로 바꾸기', startSec: 650, focusExpression: 'Turn adversaries into counterparts' }
    ],
    studyMissionKo: [
      '강연자의 억양, 멈춤(pause), 강조 리듬을 주목하며 핵심 문장 3개를 쉐도잉하세요.',
      'tactical empathy, counterpart, dispute의 고급 용례를 사전에 저장하세요.'
    ]
  },
  29: {
    videoId: 'ULc3rl5IzO8',
    title: 'Advanced English Conversation: Vocabulary, Phrasal Verbs & Fluency',
    channel: 'Speak English With Vanessa',
    levelTier: 'c2',
    categoryKo: 'C2 고급 회화 · 원어민 속도 청취',
    durationLabel: '고급 원어민 실전 대화',
    koreanSummary:
      '원어민 자연 속도(1.0x~1.15x)의 실제 고급 회화를 들으며 연음, 고급 관용구, 자연스러운 화제 전환과 수사적 양보(concession) 기술을 마스터합니다.',
    chapters: [
      { labelKo: '원어민 자연 속도 대화 청취', startSec: 0, focusExpression: 'Connected speech & linking' },
      { labelKo: '고급 구동사·관용구 해부', startSec: 360, focusExpression: 'Nuanced idioms in context' },
      { labelKo: '유창성 & 억양 마무리 훈련', startSec: 720, focusExpression: 'Stress-timed English rhythm' }
    ],
    studyMissionKo: [
      '처음 3분은 자막 없이 듣고, 두 번째에 핵심 키워드를 받아적어 비교하세요.',
      'Day 29의 논설 에세이 독해와 함께 C2 표현 3개를 직접 작문해 보세요.'
    ]
  },
  30: {
    videoId: 'kryWR7QNBkc',
    title: 'What Successful Negotiators Do Differently | Kathryn Valentine | TED',
    channel: 'TED',
    levelTier: 'c2',
    categoryKo: '1개월 파이널 마스터 · TED 설득 공식',
    durationLabel: '30일 완성 피날레 TED',
    koreanSummary:
      '30일 마스터 코스의 대미를 장식하는 TED 강연입니다. 원하는 것을 얻어내는 설득의 프레임과 자신감 있는 고급 스피치 구조를 익힌 뒤, 최종 졸업 모의고사에 도전합니다.',
    chapters: [
      { labelKo: '성공적인 협상가의 사고방식', startSec: 0, focusExpression: 'Reframe the ask' },
      { labelKo: '데이터와 공동 가치로 설득하기', startSec: 260, focusExpression: 'Shared value proposition' },
      { labelKo: '결론 & 행동 촉구(Call to Action)', startSec: 520, focusExpression: 'Advocate for what matters' }
    ],
    studyMissionKo: [
      '30일 동안 쌓은 나의 영어 성장 스토리를 5문장 영어로 정리해 1:1 과외 첨삭을 받아보세요.',
      '마지막으로 [학습지 & 시험지] 탭에서 Day 30 1개월 파이널 졸업 모의고사(20문항)를 완료하세요!'
    ]
  }
};

/**
 * Bonus curated YouTube videos across all 6 levels so learners can watch extra
 * level-matched videos anytime inside the YouTube Video Library!
 */
export const BONUS_YOUTUBE_LIBRARY: YouTubeLessonVideo[] = [
  {
    videoId: 'Ng2tcZaEKMI',
    title: '하루 10문장 문답식 기초 영어회화 — 듣기만 해도 입이 트이는 패턴',
    channel: 'Use English',
    levelTier: 'a1',
    categoryKo: 'Lv.1 입문 · 문답식 반복',
    durationLabel: '문답 10문장',
    koreanSummary: '질문과 대답 세트로 묶어 기초 회화 반사신경을 기르는 A1 입문자 맞춤 영상입니다.',
    chapters: [{ labelKo: '일상 취미·약속 Q&A', startSec: 0, focusExpression: 'When are you free? / What’s your hobby?' }],
    studyMissionKo: ['질문을 들으면 2초 안에 대답을 먼저 내뱉고 원어민 답과 비교하세요.']
  },
  {
    videoId: 'jNL-TJttJfM',
    title: '실생활에서 자주 쓰는 평범하지만 필수적인 영어 표현과 패턴',
    channel: '라이브 아카데미 토들러',
    levelTier: 'a2',
    categoryKo: 'Lv.2 초급 · 일상 핵심 패턴',
    durationLabel: '실생활 패턴',
    koreanSummary: '화려한 숙어보다 실제 원어민이 하루에도 열 번씩 쓰는 평범하고 정확한 패턴을 훈련합니다.',
    chapters: [{ labelKo: '일상 패턴 집중 연습', startSec: 0, focusExpression: 'Is it supposed to be ~?' }],
    studyMissionKo: ['영상 속 핵심 문장 5개를 본인 일상 문장으로 치환해 말해보세요.']
  },
  {
    videoId: 'Cj4rpkPbWt0',
    title: '50 Important Verbs in English for Daily Conversation',
    channel: 'Speak English With Vanessa',
    levelTier: 'a2',
    categoryKo: 'Lv.2 초급 · 필수 동사 50',
    durationLabel: '필수 동사 50선',
    koreanSummary: '일상 회화의 80%를 커버하는 필수 동사 50개를 원어민 예문으로 한 번에 정리합니다.',
    chapters: [{ labelKo: '핵심 동사 50 예문', startSec: 0, focusExpression: 'Core daily verbs in context' }],
    studyMissionKo: ['동사 하나당 짧은 주어+동사+목적어 문장을 즉시 만들어 보세요.']
  },
  {
    videoId: 'DJD6APk3irc',
    title: '혼자서 미드 영어 공부하는 8단계 방법 (암기X, 영어식 사고)',
    channel: '영어식 사고 · 러너블 티처조',
    levelTier: 'b1',
    categoryKo: 'Lv.3 중하급 · 학습법/미드',
    durationLabel: '미드 독학 8단계',
    koreanSummary: '무작정 따라 읽기에서 벗어나 영어식 사고로 미드 장면을 흡수하는 체계적인 8단계 학습법을 알려줍니다.',
    chapters: [{ labelKo: '미드 영어 8단계 학습 전략', startSec: 0, focusExpression: 'Think in English chunks' }],
    studyMissionKo: ['영상의 8단계 중 오늘 KoreBridge 시트콤 강의에 바로 적용할 2단계를 골라 실천하세요.']
  },
  {
    videoId: 'uKoTQ_r5KvM',
    title: '미국인들이 가장 많이 쓰는 실전 영어 표현 50개 총정리 1탄',
    channel: '구슬쌤',
    levelTier: 'b1',
    categoryKo: 'Lv.3 중하급 · 미국인 빈출 50',
    durationLabel: '실전 50표현',
    koreanSummary: '교과서엔 없지만 미국 드라마·일상·직장에서 끊임없이 나오는 빈출 표현 50개를 명쾌하게 설명합니다.',
    chapters: [{ labelKo: '빈출 실전 표현 1~50', startSec: 0, focusExpression: 'High-frequency American expressions' }],
    studyMissionKo: ['가장 와닿는 표현 5개를 노트에 적어두고 이번 주 대화에 써보세요.']
  },
  {
    videoId: '_1px4SyvsrY',
    title: '회사에서 내 표현력을 높여줄 핵심 비즈니스 표현 4개',
    channel: '구슬쌤',
    levelTier: 'b2',
    categoryKo: 'Lv.4 중상급 · 고급 오피스 표현',
    durationLabel: '핵심 4표현 심화',
    koreanSummary: 'at the end of the day, off the table 등 한 마디로 프로페셔널한 인상을 주는 비즈니스 핵심 표현 4개를 해부합니다.',
    chapters: [{ labelKo: '오피스 핵심 표현 4선', startSec: 0, focusExpression: 'at the end of the day / off the table' }],
    studyMissionKo: ['4개 표현을 모두 넣어 짧은 회의 발언 4문장을 작성해 보세요.']
  },
  {
    videoId: 'YAsDeXcYyTg',
    title: 'Scared to speak English? | BBC 6 Minute English',
    channel: 'BBC Learning English',
    levelTier: 'b2',
    categoryKo: 'Lv.4 중상급 · 말하기 자신감',
    durationLabel: 'BBC 6분 영어',
    koreanSummary: '외국어 말하기 울렁증을 극복하는 심리적 전략을 다룬 BBC 6 Minute English 인기 에피소드입니다.',
    chapters: [{ labelKo: '영어 말하기 불안 극복 토론', startSec: 0, focusExpression: 'Language anxiety / Push past fear' }],
    studyMissionKo: ['BBC 진행자의 영국식 발음과 연음을 따라 하며 핵심 단어 6개를 정리하세요.']
  },
  {
    videoId: 'ExysckpNP9I',
    title: '원어민 느낌 팍팍 나는 영어 표현 50개 총정리',
    channel: '구슬쌤',
    levelTier: 'c1',
    categoryKo: 'Lv.5 고급 · 원어민 뉘앙스 50',
    durationLabel: '원어민 표현 50선',
    koreanSummary: 'bring a lot to the table처럼 비즈니스와 일상 모두에서 세련된 인상을 주는 고급 원어민 표현 50개를 압축 정리합니다.',
    chapters: [{ labelKo: '고급 원어민 표현 모음', startSec: 0, focusExpression: 'bring a lot to the table' }],
    studyMissionKo: ['모르는 관용구 5개를 [영한사전]에서 예문과 함께 내 단어장에 추가하세요.']
  },
  {
    videoId: 'Dz623q31ZME',
    title: 'Business English Communication Skills: Negotiating Effectively',
    channel: 'University of Washington IELP',
    levelTier: 'c1',
    categoryKo: 'Lv.5 고급 · 대학 비즈니스 협상',
    durationLabel: '워싱턴대 비즈니스 영어',
    koreanSummary: '미국 워싱턴 대학교 비즈니스 영어 커리큘럼 강의로, 윈-루즈 흥정(haggling)과 장기적 윈-윈 협상 전략의 차이를 체계적으로 다룹니다.',
    chapters: [{ labelKo: 'Win-Win 비즈니스 협상 전략', startSec: 0, focusExpression: 'Haggling vs Win-Win negotiation' }],
    studyMissionKo: ['장기 파트너십 협상에서 중요한 3가지 요소를 영어로 요약해 보세요.']
  },
  {
    videoId: 'saXfavo1OQo',
    title: 'The Power of Listening | William Ury | TEDxSanDiego',
    channel: 'TEDx Talks',
    levelTier: 'c2',
    categoryKo: 'Lv.6 마스터 · 하버드 협상학 경청',
    durationLabel: 'TEDx 명강연',
    koreanSummary: '하버드 협상 프로젝트 공동 창립자 William Ury의 명연설로, 갈등을 해결하는 진정한 경청의 힘과 유려한 C2 연설 수사를 감상할 수 있습니다.',
    chapters: [{ labelKo: '경청이 만드는 협상의 기적', startSec: 0, focusExpression: 'The gift of being heard' }],
    studyMissionKo: ['연설의 마지막 2분 클라이맥스를 쉐도잉하며 호흡과 강세를 익혀보세요.']
  }
];

export const ALL_CURATED_YOUTUBE_VIDEOS: YouTubeLessonVideo[] = [
  ...Object.values(DAY_YOUTUBE_VIDEOS),
  ...BONUS_YOUTUBE_LIBRARY
];

export function extractYouTubeVideoId(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return trimmed;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/,
    /[?&]v=([A-Za-z0-9_-]{11})/
  ];
  for (const re of patterns) {
    const m = trimmed.match(re);
    if (m?.[1]) return m[1];
  }
  return null;
}
