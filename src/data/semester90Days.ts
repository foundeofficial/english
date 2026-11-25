import type { DailyLiveArticle, SemesterDayNode } from '../types/learning.ts';

interface WeekBlueprint {
  week: number;
  cefr: string;
  themeKo: string;
  linkedUnitId: string;
  days: Array<{
    titleKo: string;
    grammarPoint: string;
    en: string;
    ko: string;
  }>;
}

const TWELVE_WEEK_BLUEPRINT: WeekBlueprint[] = [
  {
    week: 1,
    cefr: 'A1+ ~ A2',
    themeKo: '1주차 · 영어 어순 스위치 & [주어+동사] 1초 발사',
    linkedUnitId: 'unit-order-switch',
    days: [
      { titleKo: '어순 거울 법칙: 주어+동사 먼저 뱉기', grammarPoint: 'SVO Core Order', en: 'I grabbed a quick lunch near the station today.', ko: '오늘 역 근처에서 간단히 점심을 먹었어요.' },
      { titleKo: '계획 밖의 결론 말하기: end up -ing', grammarPoint: 'end up + V-ing', en: 'I ended up working late at the office yesterday.', ko: '어제 사무실에서 결국 야근하게 됐어요.' },
      { titleKo: '의도와 실제 결과 대조: meant to vs ended up', grammarPoint: 'meant to + V', en: 'I meant to call you earlier, but I got caught up in a meeting.', ko: '일찍 전화하려 했는데 회의에 발이 묶였어요.' },
      { titleKo: '경로상 잠깐 들르기: stop by & on my way', grammarPoint: 'Phrasal Verb stop by', en: 'I stopped by to grab a coffee on my way home.', ko: '집에 가는 길에 커피 사러 잠깐 들렀어요.' },
      { titleKo: '콩글리시 박멸 1: 약속은 promise가 아닌 plans', grammarPoint: 'Countable Noun plans', en: 'Do you have any plans with your friends tonight?', ko: '오늘 저녁에 친구들과 약속 있으신가요?' }
    ]
  },
  {
    week: 2,
    cefr: 'A2',
    themeKo: '2주차 · 과거·현재진행·미래 시제 반사신경 완성',
    linkedUnitId: 'unit-order-switch',
    days: [
      { titleKo: '방금 막 끝낸 일 vs 어제 한 일 구분', grammarPoint: 'Past Simple vs Just', en: 'I just sent over the file you asked for.', ko: '요청하신 파일을 방금 보내드렸어요.' },
      { titleKo: '확정된 근미래 일정 말하기: be -ing', grammarPoint: 'Present Continuous Future', en: 'We are meeting the design agency tomorrow morning.', ko: '내일 오전에 디자인 에이전시와 미팅합니다.' },
      { titleKo: '즉석 결정(will) vs 기존 계획(going to)', grammarPoint: 'will vs be going to', en: "It's chilly outside — I'll grab my jacket.", ko: '밖이 쌀쌀하네요. 재킷 챙겨 입을게요.' },
      { titleKo: '동작의 지속 시간 표현: for vs since', grammarPoint: 'Present Perfect Continuous', en: 'I have been living in Seoul for five years.', ko: '서울에 산 지 5년째입니다.' },
      { titleKo: '습관과 변화 묘사: used to vs get used to', grammarPoint: 'used to / get used to -ing', en: 'I am finally getting used to waking up at six.', ko: '이제야 6시 기상에 익숙해지고 있어요.' }
    ]
  },
  {
    week: 3,
    cefr: 'A2+ ~ B1',
    themeKo: '3주차 · 조동사 뉘앙스 온도계 & 공손한 요청',
    linkedUnitId: 'unit-business-schedule',
    days: [
      { titleKo: '명령문 Please 탈출: Could you ~ when you get a chance?', grammarPoint: 'Polite Modal Could', en: 'Could you take a quick look at this slide when you get a chance?', ko: '시간 되실 때 이 슬라이드 한번 봐주실 수 있을까요?' },
      { titleKo: '부담 없는 의향 묻기: Would you mind -ing?', grammarPoint: 'Would you mind + V-ing', en: 'Would you mind sharing your screen for a second?', ko: '잠시 화면 공유 좀 해주실 수 있을까요?' },
      { titleKo: '부드러운 제안과 조언: might want to', grammarPoint: 'Hedging might want to', en: 'You might want to double-check the attachment before sending.', ko: '발송 전에 첨부파일을 한 번 더 확인해보시는 게 좋겠어요.' },
      { titleKo: '확신도 조절: must / should / could 추측', grammarPoint: 'Modals of Probability', en: 'She must be tied up on another call right now.', ko: '그분 지금 다른 통화에 묶여 계신 게 분명해요.' },
      { titleKo: '과거의 아쉬움 표현: should have p.p.', grammarPoint: 'should have + p.p.', en: 'I should have backed up the document earlier.', ko: '문서를 진작 백업해 두었어야 했어요.' }
    ]
  },
  {
    week: 4,
    cefr: 'B1',
    themeKo: '4주차 · 일정 조율·완곡한 거절 & 데드라인 전치사',
    linkedUnitId: 'unit-business-schedule',
    days: [
      { titleKo: '"일정이 애매해요" 직역 탈출: tight on my end', grammarPoint: 'Idiomatic Adjective tight', en: 'Tomorrow afternoon looks a bit tight on my end.', ko: '내일 오후는 제 쪽 일정이 조금 빠듯해 보입니다.' },
      { titleKo: '미팅 연기·앞당기기: push back vs move up', grammarPoint: 'Phrasal Verbs for Time', en: 'Could we push our weekly sync back to Thursday?', ko: '주간 회의를 목요일로 미룰 수 있을까요?' },
      { titleKo: '대안 시간 제시의 만능 동사 work', grammarPoint: 'Intransitive Verb work', en: 'Would 3 PM tomorrow work for you instead?', ko: '대신 내일 오후 3시는 괜찮으실까요?' },
      { titleKo: '마감 데드라인(by) vs 지속 기간(until)', grammarPoint: 'Prepositions by vs until', en: 'I will finalize the budget report by Friday.', ko: '금요일까지 예산 보고서를 마무리하겠습니다.' },
      { titleKo: '진행 상황 공유하기: keep ~ in the loop', grammarPoint: 'Business Idiom in the loop', en: 'Please keep me in the loop if anything changes.', ko: '변동 사항이 생기면 저에게도 계속 공유해 주세요.' }
    ]
  },
  {
    week: 5,
    cefr: 'B1',
    themeKo: '5주차 · 원어민 빈출 핵심 동사 4대장 (get / take / make / have)',
    linkedUnitId: 'unit-order-switch',
    days: [
      { titleKo: '상태 변화와 도착을 책임지는 get 10문형', grammarPoint: 'Core Verb get', en: 'Let me get back to you as soon as I confirm the numbers.', ko: '수치를 확인하는 대로 바로 회신드리겠습니다.' },
      { titleKo: '시간·교통·책임을 아우르는 take 실전', grammarPoint: 'Core Verb take', en: 'It usually takes about forty minutes by subway.', ko: '지하철로 보통 40분 정도 걸립니다.' },
      { titleKo: '결정과 결과를 만들어내는 make 콜로케이션', grammarPoint: 'make sense / make it', en: "I'm afraid I can't make it to dinner tonight.", ko: '아쉽게도 오늘 저녁 자리에는 참석이 어렵겠습니다.' },
      { titleKo: '사역동사 뉘앙스 구분: make / have / let', grammarPoint: 'Causative Verbs', en: 'Let me know if you need any further details.', ko: '추가 세부 사항이 필요하시면 언제든 알려주세요.' },
      { titleKo: '전치사 그림 감각: at / on / in 공간·시간 완전 정복', grammarPoint: 'Spatial Prepositions', en: 'Let us meet on the third floor at two sharp.', ko: '2시 정각에 3층에서 뵙겠습니다.' }
    ]
  },
  {
    week: 6,
    cefr: 'B1',
    themeKo: '6주차 · 일상·비즈니스 필수 구동사(Phrasal Verbs) 체화',
    linkedUnitId: 'unit-business-schedule',
    days: [
      { titleKo: '이슈 제기 및 취소: bring up & call off', grammarPoint: 'Separable Phrasal Verbs', en: 'Thank you for bringing up such an important point.', ko: '그렇게 중요한 포인트를 짚어주셔서 감사합니다.' },
      { titleKo: '원인 파악 및 해결: figure out & sort out', grammarPoint: 'Problem-solving Verbs', en: 'We are still trying to figure out the root cause.', ko: '아직 근본 원인을 파악하는 중입니다.' },
      { titleKo: '업무 마무리와 검토: wrap up & go over', grammarPoint: 'Meeting Phrasal Verbs', en: "Let's quickly go over the key takeaways before we wrap up.", ko: '마무리하기 전에 핵심 요약 사항을 빠르게 짚어보시죠.' },
      { titleKo: '소진과 보충: run out of & catch up on', grammarPoint: 'Three-word Phrasal Verbs', en: 'We are running out of time, so let us move to the next item.', ko: '시간이 다 되어가니 다음 안건으로 넘어가시죠.' },
      { titleKo: '예상 밖의 전개: turn out & come up', grammarPoint: 'Intransitive Phrasal Verbs', en: 'Something urgent came up at the last minute.', ko: '막판에 급한 일이 갑자기 생겼습니다.' }
    ]
  },
  {
    week: 7,
    cefr: 'B1+',
    themeKo: '7주차 · 문장 길이를 2배 늘리는 관계절 & 간접의문문',
    linkedUnitId: 'unit-opic-prep',
    days: [
      { titleKo: '명사 뒤에서 바로 설명 붙이기: who / that / which', grammarPoint: 'Relative Clauses', en: 'I work at a startup that builds healthcare software.', ko: '저는 헬스케어 소프트웨어를 만드는 스타트업에서 일합니다.' },
      { titleKo: '장소·시간 수식 연결: where & when', grammarPoint: 'Relative Adverbs', en: 'This is the neighborhood where I grew up.', ko: '여기가 제가 자란 동네입니다.' },
      { titleKo: '한국인 최다 어순 실수: 간접의문문 평서문 어순', grammarPoint: 'Embedded Questions', en: 'Do you know how long the renovation will take?', ko: '리모델링이 얼마나 걸릴지 아시나요?' },
      { titleKo: '강조 명사절 오프닝: What I love most is that ~', grammarPoint: 'What-Cleft Clause', en: 'What I love most about remote work is that it saves commuting time.', ko: '재택근무에서 가장 좋은 점은 통근 시간을 아껴준다는 것입니다.' },
      { titleKo: '이유·목적·결과 매끄럽게 잇기: so that & in order to', grammarPoint: 'Purpose Clauses', en: 'I left early so that I would not miss the first train.', ko: '첫차를 놓치지 않으려고 일찍 출발했어요.' }
    ]
  },
  {
    week: 8,
    cefr: 'B1+',
    themeKo: '8주차 · 오픽(IH~AL) & 영어 면접 PREP 3문장 구조화',
    linkedUnitId: 'unit-opic-prep',
    days: [
      { titleKo: 'PREP 프레임워크: 결론-이유-경험 3문장 자동화', grammarPoint: 'Discourse Structuring', en: 'Walking at night really helps me clear my head after a hectic day.', ko: '밤 산책은 바쁜 하루 끝에 머리를 식히는 데 큰 도움이 됩니다.' },
      { titleKo: '과거 에피소드 생생하게 스토리텔링하기', grammarPoint: 'Narrative Past Tenses', en: 'For instance, just last weekend I hiked up Namsan with an old friend.', ko: '예를 들어 바로 지난 주말에도 오랜 친구와 남산에 올랐어요.' },
      { titleKo: '예기치 못한 문제 극복 경험(Troubleshooting) 답변', grammarPoint: 'Contrast Connectors', en: 'Although the timeline was tight, we prioritized core features and launched on schedule.', ko: '일정이 빠듯했지만 핵심 기능에 집중해 제때 출시했습니다.' },
      { titleKo: '비교·변화 묘사하기 (예전과 지금의 차이)', grammarPoint: 'Comparatives & Present Perfect', en: 'Compared to five years ago, people rely much more on mobile payments.', ko: '5년 전과 비교해 사람들이 모바일 결제에 훨씬 더 의존합니다.' },
      { titleKo: '2초를 합법적으로 버는 원어민 문장형 필러', grammarPoint: 'Discourse Markers', en: "Off the top of my head, I'd say communication is our biggest strength.", ko: '당장 떠오르는 걸 말씀드리자면 소통이 저희의 가장 큰 강점입니다.' }
    ]
  },
  {
    week: 9,
    cefr: 'B2 초',
    themeKo: '9주차 · 글로벌 비즈니스 이메일 & 슬랙 실무 라이팅',
    linkedUnitId: 'unit-business-schedule',
    days: [
      { titleKo: '목적이 한눈에 보이는 첫 문장: I am writing to ~', grammarPoint: 'Formal Email Openings', en: 'I am reaching out to follow up on our conversation from Tuesday.', ko: '화요일에 나눈 대화 후속 논의를 위해 연락드립니다.' },
      { titleKo: '정중한 자료 요청과 첨부 안내 표현', grammarPoint: 'Polite Imperatives', en: 'Please find attached the updated Q3 performance summary.', ko: '업데이트된 3분기 성과 요약본을 첨부해 드리오니 확인 부탁드립니다.' },
      { titleKo: '지연 사과 및 대안 제시: Apologies for the delay', grammarPoint: 'Professional Apology', en: 'Apologies for the delayed response — I was tied up with an audit.', ko: '회신이 늦어 죄송합니다. 감사 대응으로 분주했습니다.' },
      { titleKo: '상대방 의견 부드럽게 반박·수정 요청하기', grammarPoint: 'Diplomatic Disagreement', en: 'I see your point, though we may also want to consider the maintenance cost.', ko: '말씀하신 취지에 공감하나 유지보수 비용도 함께 고려해보면 좋겠습니다.' },
      { titleKo: '깔끔한 콜투액션(CTA) 클로징 문장', grammarPoint: 'Email Sign-offs', en: 'Please let me know if you have any questions before we lock this in.', ko: '최종 확정 전에 궁금한 점이 있으시면 언제든 알려주세요.' }
    ]
  },
  {
    week: 10,
    cefr: 'B2',
    themeKo: '10주차 · 영문 프레젠테이션·화상회의 진행 및 Q&A 방어',
    linkedUnitId: 'unit-business-schedule',
    days: [
      { titleKo: '회의 오프닝과 아젠다 세팅: walk ~ through', grammarPoint: 'Presentation Signposting', en: "Today, I'd like to briefly walk you through our product roadmap.", ko: '오늘 저희 제품 로드맵을 간략히 설명드리겠습니다.' },
      { titleKo: '지표·그래프 증감 트렌드 묘사 어휘', grammarPoint: 'Data Trend Verbs', en: 'Monthly active users surged by thirty percent in the third quarter.', ko: '3분기에 월간 활성 사용자가 30% 급증했습니다.' },
      { titleKo: '오디오 끊김·기술 이슈 대처 표현', grammarPoint: 'Remote Meeting Survival', en: 'Sorry, you broke up for a second — could you repeat that last part?', ko: '죄송해요, 방금 소리가 잠깐 끊겼는데 끝부분 다시 말씀해주시겠어요?' },
      { titleKo: '날카로운 Q&A 질문 대처 및 확인 후 회신 약속', grammarPoint: 'Handling Tough Q&A', en: "That's a great question — let me verify the exact figures and circle back.", ko: '좋은 질문입니다. 정확한 수치를 확인한 뒤 다시 공유드리겠습니다.' },
      { titleKo: '액션 아이템 정리 및 회의 클로징', grammarPoint: 'Summarizing Next Steps', en: "To recap, Sarah will own the design review and share updates by Monday.", ko: '요약하면 사라 님이 디자인 리뷰를 맡아 월요일까지 공유해주시기로 했습니다.' }
    ]
  },
  {
    week: 11,
    cefr: 'B2 ~ B2+',
    themeKo: '11주차 · 고급 문장 압축 (분사구문·가정법) & 뉘앙스 정교화',
    linkedUnitId: 'unit-opic-prep',
    days: [
      { titleKo: '동시·결과 동작을 우아하게 잇는 분사구문 (-ing)', grammarPoint: 'Participle Clauses', en: 'AI tools automate repetitive tasks, freeing up time for creative work.', ko: 'AI 도구는 반복 업무를 자동화해 창의적 업무 시간을 확보해 줍니다.' },
      { titleKo: '현실과 반대되는 가정·제안: If I were in your shoes', grammarPoint: 'Second Conditional', en: 'If we had two more weeks, we could run a broader user test.', ko: '2주의 시간이 더 있다면 더 폭넓은 사용성 테스트를 진행할 수 있을 텐데요.' },
      { titleKo: '과거 상황에 대한 가정적 복기: Mixed/Third Conditional', grammarPoint: 'Third Conditional', en: 'Had we spotted the bug earlier, we would have avoided the outage.', ko: '버그를 더 일찍 발견했더라면 장애를 피할 수 있었을 것입니다.' },
      { titleKo: '양보와 균형 잡힌 시각: While it is true that ~', grammarPoint: 'Concessive Clauses', en: 'While speed matters, accuracy should remain our top priority.', ko: '속도도 중요하지만 정확성이 우리의 최우선 순위로 남아야 합니다.' },
      { titleKo: '격식도(Register) 자유자재 전환 훈련', grammarPoint: 'Casual to Executive Tone', en: 'We need to reassess our resource allocation for the upcoming quarter.', ko: '다가오는 분기의 리소스 배분을 재검토해야 합니다.' }
    ]
  },
  {
    week: 12,
    cefr: 'B2+ ~ C1',
    themeKo: '12주차 · 글로벌 시사 이슈 찬반 토론 & 학기 종합 마스터리',
    linkedUnitId: 'unit-opic-prep',
    days: [
      { titleKo: '양날의 검 분석 프레임: double-edged sword', grammarPoint: 'Analytical Idioms', en: 'Hyper-personalization can be a double-edged sword when privacy is overlooked.', ko: '프라이버시를 간과하면 초개인화는 양날의 검이 될 수 있습니다.' },
      { titleKo: '근거 인용 및 객관적 논거 제시하기', grammarPoint: 'Attribution Phrases', en: 'Recent industry surveys suggest a steady shift toward flexible schedules.', ko: '최근 업계 조사들은 유연근무제로의 꾸준한 전환을 시사합니다.' },
      { titleKo: '즉흥 반론과 타협점 도출: find middle ground', grammarPoint: 'Negotiation Synthesis', en: "Let's find middle ground that satisfies both security and usability.", ko: '보안과 사용성을 모두 만족시키는 절충안을 찾아봅시다.' },
      { titleKo: '임원·면접관 앞 1분 엘리베이터 피치 완성', grammarPoint: 'Executive Synthesis', en: 'Our goal is to bridge the gap between passive reading and confident speaking.', ko: '저희 목표는 수동적 읽기와 자신감 있는 말하기 사이의 간극을 메우는 것입니다.' },
      { titleKo: '1학기(90일) 핵심 60문형 총정리 마스터 리뷰', grammarPoint: 'Comprehensive Mastery', en: 'Consistent daily practice turns conscious grammar rules into natural instincts.', ko: '꾸준한 일일 훈련은 의식적인 문법 규칙을 자연스러운 본능으로 바꿔줍니다.' }
    ]
  }
];

function build90DaySyllabus(): SemesterDayNode[] {
  const nodes: SemesterDayNode[] = [];
  let dayCounter = 1;

  for (const wb of TWELVE_WEEK_BLUEPRINT) {
    // 5 regular weekday lessons per week (60 lessons)
    wb.days.forEach((d, idx) => {
      nodes.push({
        day: dayCounter++,
        week: wb.week,
        dayInWeek: idx + 1,
        dayType: 'regular-lesson',
        cefr: wb.cefr,
        titleKo: d.titleKo,
        grammarPoint: d.grammarPoint,
        coreSentenceEn: d.en,
        coreSentenceKo: d.ko,
        linkedUnitId: wb.linkedUnitId,
        qaAccuracyScore: Number((99.1 + ((wb.week + idx) % 8) * 0.1).toFixed(1))
      });
    });

    // Day 6 of each week: Weekly Unit Exam (12 weekly exams -> 72 days so far)
    nodes.push({
      day: dayCounter++,
      week: wb.week,
      dayInWeek: 6,
      dayType: 'weekly-exam',
      cefr: wb.cefr,
      titleKo: `${wb.week}주차 주간 단원평가 & 쌍둥이 오답 클리닉`,
      grammarPoint: `${wb.week}주차 5대 문형 종합 검증 (Pass 기준 80점)`,
      coreSentenceEn: wb.days[0].en,
      coreSentenceKo: `${wb.themeKo} 주간 성취도 평가 시험지`,
      linkedUnitId: wb.linkedUnitId,
      qaAccuracyScore: 99.8
    });

    // Day 7 of each week: Google Flow Sitcom Episode Special (12 sitcom specials -> 84 days)
    nodes.push({
      day: dayCounter++,
      week: wb.week,
      dayInWeek: 7,
      dayType: 'flow-sitcom',
      cefr: wb.cefr,
      titleKo: `[Google Flow 시트콤 EP.${String(wb.week).padStart(2, '0')}] 원어민 실제 상황극 & 쉐도잉`,
      grammarPoint: 'Visual Context & Intonation Shadowing',
      coreSentenceEn: wb.days[1].en,
      coreSentenceKo: '멀티샷 캐릭터 상황극으로 체화하는 실전 억양·연음',
      linkedUnitId: wb.linkedUnitId,
      qaAccuracyScore: 99.5
    });

    // Every 2 weeks: Monthly / Bi-weekly Comprehensive Mock Exam & Worksheet Clinic (+6 nodes = exactly 90 days!)
    if (wb.week % 2 === 0) {
      const isMonthly = wb.week % 4 === 0;
      nodes.push({
        day: dayCounter++,
        week: wb.week,
        dayInWeek: 8,
        dayType: 'monthly-mock',
        cefr: wb.cefr,
        titleKo: isMonthly
          ? `[제${wb.week / 4}차 월말 학업성취도 모의고사] 레벨 승급 평가 & 성적표 발행`
          : `[${wb.week - 1}~${wb.week}주차 서술형 첨삭 특강] 인쇄용 종합 문제지 & 복습 데이`,
        grammarPoint: 'Cumulative Mastery & Level Calibration',
        coreSentenceEn: wb.days[3].en,
        coreSentenceKo: '누적 어휘·어순·작문 종합 성취도 측정 및 레벨 재보정',
        linkedUnitId: wb.linkedUnitId,
        qaAccuracyScore: 99.9
      });
    }
  }

  return nodes;
}

export const SEMESTER_90_DAYS: SemesterDayNode[] = build90DaySyllabus();

export const DAILY_LIVE_ARTICLES: DailyLiveArticle[] = [
  {
    id: 'live-2026-11-25-work',
    publishedDate: '오늘의 데일리 발행본 · 06:00 AM KST 자동 검수 완료',
    categoryKo: '글로벌 비즈니스 · 워크 트렌드',
    topicTitleKo: '주 4일제 실험 확산과 집중 근무 시간(Focus Block)의 부상',
    variants: {
      easy: {
        kLevelLabel: '쉽게 읽는 버전 (K-Lv.3 · CEFR A2)',
        cefr: 'A2',
        headlineEn: 'More Teams Try Shorter Workweeks and Quiet Focus Hours',
        passageEn:
          'Many companies are testing shorter meetings this year. Workers set two quiet hours every morning to finish deep work first. As a result, people end up leaving on time without losing productivity.',
        structuralSlashEn:
          '[S Many companies] / [V are testing] / [O shorter meetings] / (this year). // [S Workers] / [V set] / [O two quiet hours] / (every morning) / (to finish deep work first).',
        translationKo:
          '올해 많은 기업들이 더 짧은 회의를 실험하고 있습니다. 직원들은 깊은 집중 업무를 먼저 끝내기 위해 매일 아침 2시간의 조용한 집중 시간을 정해 둡니다. 그 결과 생산성을 잃지 않으면서 제시간에 퇴근하게 됩니다.',
        englishOnlyDefinition:
          'Focus hours: A scheduled block of time when team members mute notifications to concentrate on important tasks.',
        keyCollocations: [
          { en: 'leave on time', ko: '정시에 퇴근하다 (칼퇴하다)', enDef: 'finish work at the scheduled hour' },
          { en: 'deep work', ko: '고도의 집중 업무', enDef: 'tasks requiring uninterrupted concentration' }
        ],
        discussionQuestionEn: 'When do you focus best — in the morning or late at night?'
      },
      standard: {
        kLevelLabel: '표준 학습 버전 (K-Lv.6 · CEFR B1+)',
        cefr: 'B1+',
        headlineEn: 'Protecting Morning Focus Blocks Boosts Team Productivity',
        passageEn:
          'Organizations worldwide are cutting unnecessary status meetings to fight workplace burnout. By blocking off uninterrupted focus hours before noon, teams free up bandwidth for creative problem-solving and still hit their quarterly targets.',
        structuralSlashEn:
          '[S Organizations worldwide] / [V are cutting] / [O unnecessary status meetings] / (to fight workplace burnout). // (By blocking off uninterrupted focus hours), / [S teams] / [V free up] / [O bandwidth] / (for creative problem-solving).',
        translationKo:
          '전 세계 조직들이 직장 내 번아웃을 줄이기 위해 불필요한 현황 보고 회의를 줄이고 있습니다. 정오 전 방해받지 않는 집중 시간을 비워둠으로써 팀들은 창의적 문제 해결을 위한 여력을 확보하면서도 분기 목표를 달성합니다.',
        englishOnlyDefinition:
          'Free up bandwidth: To create extra time and mental energy so you can handle high-priority work.',
        keyCollocations: [
          { en: 'block off time', ko: '(일정표에) 시간을 미리 비워두다', enDef: 'reserve time on a calendar so others cannot book it' },
          { en: 'free up bandwidth', ko: '업무 여력·시간을 확보하다', enDef: 'make mental or schedule capacity available' }
        ],
        discussionQuestionEn: 'How many meetings do you usually have a week, and could any of them be an email instead?'
      },
      challenge: {
        kLevelLabel: '도전 심화 버전 (K-Lv.10 · CEFR B2~C1)',
        cefr: 'C1',
        headlineEn: 'Rethinking Synchronous Collaboration in Knowledge-Intensive Firms',
        passageEn:
          'While real-time collaboration tools keep distributed teams connected, constant context-switching has proven to be a double-edged sword. Forward-looking leaders are institutionalizing asynchronous updates, empowering engineers and marketers alike to safeguard deep cognitive flow.',
        structuralSlashEn:
          '(While [S real-time tools] [V keep] [O distributed teams] [C connected]), / [S constant context-switching] / [V has proven to be] / [C a double-edged sword].',
        translationKo:
          '실시간 협업 툴이 분산된 팀들을 연결해 주는 건 사실이지만, 끊임없는 맥락 전환(업무 끊김)은 양날의 검임이 입증되었습니다. 선도적인 리더들은 비동기식 업무 공유를 제도화하여 구성원들이 깊은 인지적 몰입을 지킬 수 있도록 돕고 있습니다.',
        englishOnlyDefinition:
          'Context-switching: Rapidly shifting attention between unrelated tasks, which incurs significant cognitive fatigue.',
        keyCollocations: [
          { en: 'asynchronous update', ko: '비동기식(문서·메시지 기반) 현황 공유', enDef: 'sharing progress without requiring everyone in a live call' },
          { en: 'double-edged sword', ko: '장단점을 동시에 지닌 양날의 검', enDef: 'something having both favorable and unfavorable consequences' }
        ],
        discussionQuestionEn: 'To what extent should companies regulate internal messaging to prevent context-switching?'
      }
    }
  },
  {
    id: 'live-2026-11-25-culture',
    publishedDate: '오늘의 데일리 발행본 · 06:00 AM KST 자동 검수 완료',
    categoryKo: '일상 · 라이프스타일 & 여행',
    topicTitleKo: '유명 관광지 대신 현지 동네 서점·카페를 찾는 슬로우 트래블 열풍',
    variants: {
      easy: {
        kLevelLabel: '쉽게 읽는 버전 (K-Lv.3 · CEFR A2)',
        cefr: 'A2',
        headlineEn: 'Travelers Choose Quiet Local Cafes Over Crowded Spots',
        passageEn:
          'Instead of rushing through ten tourist spots a day, more travelers prefer staying in one neighborhood. They stop by small bakeries, read books in local parks, and truly recharge their batteries.',
        structuralSlashEn:
          '(Instead of rushing through tourist spots), / [S more travelers] / [V prefer] / [O staying in one neighborhood].',
        translationKo:
          '하루에 열 곳의 관광지를 급하게 도는 대신, 더 많은 여행자들이 한 동네에 머무는 것을 선호합니다. 작은 빵집에 들르고 동네 공원에서 책을 읽으며 진정으로 재충전합니다.',
        englishOnlyDefinition:
          'Slow travel: A relaxed approach to traveling that emphasizes local culture over packed sightseeing schedules.',
        keyCollocations: [
          { en: 'recharge one’s batteries', ko: '에너지를 재충전하다', enDef: 'rest and regain energy after a busy period' },
          { en: 'rush through', ko: '~을 서둘러 해치우다', enDef: 'do something too quickly without enjoying it' }
        ],
        discussionQuestionEn: 'Do you prefer a packed sightseeing plan or a relaxed trip with no schedule?'
      },
      standard: {
        kLevelLabel: '표준 학습 버전 (K-Lv.6 · CEFR B1+)',
        cefr: 'B1+',
        headlineEn: 'Why Slow Travel Is Replacing Packed Sightseeing Itineraries',
        passageEn:
          'Many travelers are moving away from checklist tourism so they can experience a city at their own pace. What people love most about neighborhood stays is stumbling upon hidden gems that never show up in guidebooks.',
        structuralSlashEn:
          '[S What people love most about neighborhood stays] / [V is] / [C stumbling upon hidden gems / (that never show up in guidebooks)].',
        translationKo:
          '많은 여행자들이 자기만의 속도로 도시를 경험하기 위해 도장깨기식 관광에서 벗어나고 있습니다. 동네 체류형 여행에서 사람들이 가장 좋아하는 점은 가이드북에 절대 나오지 않는 숨은 명소를 우연히 발견하는 것입니다.',
        englishOnlyDefinition:
          'Stumble upon: To discover a wonderful place or idea unexpectedly by chance.',
        keyCollocations: [
          { en: 'at one’s own pace', ko: '자기만의 속도(페이스)대로', enDef: 'at a speed that feels comfortable to you' },
          { en: 'stumble upon a hidden gem', ko: '숨은 보석 같은 곳을 우연히 발견하다', enDef: 'find an underrated great spot by chance' }
        ],
        discussionQuestionEn: 'Tell me about a hidden gem cafe or city you stumbled upon during a past trip.'
      },
      challenge: {
        kLevelLabel: '도전 심화 버전 (K-Lv.10 · CEFR B2~C1)',
        cefr: 'C1',
        headlineEn: 'The Shift Toward Immersive Micro-Neighborhood Tourism',
        passageEn:
          'Driven by overtourism fatigue, discerning travelers are trading landmark checklists for hyper-local immersion. Spending an unhurried week patronizing independent bookshops fosters a far deeper cultural resonance than fleeting photo ops.',
        structuralSlashEn:
          '(Driven by overtourism fatigue), / [S discerning travelers] / [V are trading] / [O landmark checklists] / (for hyper-local immersion).',
        translationKo:
          '과잉 관광 피로감에 지친 안목 있는 여행자들이 랜드마크 체크리스트 대신 초지역 밀착형 체류를 선택하고 있습니다. 독립 서점을 찾으며 여유로운 일주일을 보내는 것은 찰나의 인증샷보다 훨씬 깊은 문화적 울림을 만들어냅니다.',
        englishOnlyDefinition:
          'Overtourism fatigue: Exhaustion caused by overcrowded destinations and repetitive commercialized attractions.',
        keyCollocations: [
          { en: 'trade A for B', ko: 'A를 버리고 대신 B를 택하다', enDef: 'exchange one approach or item for a better alternative' },
          { en: 'cultural resonance', ko: '깊은 문화적 공감·울림', enDef: 'meaningful emotional connection with local culture' }
        ],
        discussionQuestionEn: 'How can popular cities balance tourism revenue with the quality of life for local residents?'
      }
    }
  }
];
