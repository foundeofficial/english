import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day19Module: DayLessonModule = {
  dayNumber: 19,
  weekNumber: 4,
  cefrLevel: 'b2',
  isWeeklyReview: false,
  dayBadge: 'DAY 19 · 영어 프레젠테이션 & 데이터 브리핑',
  categoryLabel: '비즈니스 PT · 차트 시각화 · 핵심 요약',
  title: '오늘 핵심 데이터부터 차근차근 안내드리겠습니다',
  subtitle: '영어 발표의 도입-차트 해석-결론 요약-Q&A를 원어민 임원 보고 뼈대(walk you through / key takeaway / bottom line)로 장악하기',
  heroImage: 'assets/scene_boardroom_pitch.jpg',
  secondaryImage: 'assets/scene_video_call.jpg',
  estimatedSprintMin: 8,
  estimatedLectureMin: 45,
  keyExpression: 'walk you through ~ / key takeaway / bottom line',
  keySentenceByTier: {
    a1: 'Today I will show you our sales chart and the main result.',
    a2: 'Today I am going to walk you through our Q3 results and share the main point.',
    b1: "Today I'll walk you through our Q3 retention numbers and highlight the key takeaway.",
    b2: "Let me walk you through the Q3 data so you can see the key takeaway at a glance—the bottom line is that onboarding drives retention.",
    c1: "To put these Q3 figures into perspective, I'll walk you through two pivotal trends, though the bottom line remains clear: faster onboarding is our strongest retention lever.",
    c2: "Rather than burying you in raw metrics, I'll walk you through the inflection points that truly move the business—the key takeaway being that early activation dictates long-term revenue."
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[19],
  readingPassage: {
    titleEn: 'Turning Raw Metrics into Executive Decisions: A Q3 Growth Pitch',
    titleKo: '단순 수치를 임원의 의사결정으로 바꾸는 법: 3분기 그로스 발표 스크립트',
    genreBadge: 'Executive Keynote Script · B2',
    estimatedMin: 4,
    paragraphsEn: [
      "Good morning, everyone, and thank you for making time for our Q3 APAC review. Over the next fifteen minutes, I'll walk you through three core areas: our quarterly retention curve, the factors behind our July traffic spike, and our actionable roadmap for Q4. To keep things concise, I've structured each slide so you can grasp the core trend at a glance before we drill down into the underlying drivers.",
      "If you look at the chart on the left, weekly active usage spiked by 34% right after our mobile redesign, then leveled off in late August. To put that plateau into perspective, enterprise accounts typically slow down during summer holidays, yet our paid conversion rate still stood out at 11.4%—nearly double last year's benchmark. What really sheds light on this jump is our cohort breakdown: teams that completed setup within 48 hours were three times more likely to renew.",
      "So what is the key takeaway for leadership today? The bottom line is that acquisition alone will not sustain our momentum unless we streamline first-week onboarding. This underscores why we are proposing a dedicated onboarding squad for Q4. Before I bridge to the budget appendix, I'd love to open the floor for questions—and if any technical details require a deeper dive, we can park them for our afternoon sync."
    ],
    paragraphsSlash: [
      "Good morning, everyone, / and thank you for making time / for our Q3 APAC review. / Over the next fifteen minutes, / I'll walk you through three core areas: / our quarterly retention curve, / the factors behind our July traffic spike, / and our actionable roadmap for Q4. / To keep things concise, / I've structured each slide / so you can grasp the core trend at a glance / before we drill down into the underlying drivers.",
      "If you look at the chart on the left, / weekly active usage spiked by 34% / right after our mobile redesign, / then leveled off in late August. / To put that plateau into perspective, / enterprise accounts typically slow down / during summer holidays, / yet our paid conversion rate still stood out at 11.4%— / nearly double last year's benchmark. / What really sheds light on this jump / is our cohort breakdown: / teams that completed setup within 48 hours / were three times more likely to renew.",
      "So what is the key takeaway / for leadership today? / The bottom line is / that acquisition alone will not sustain our momentum / unless we streamline first-week onboarding. / This underscores why we are proposing / a dedicated onboarding squad for Q4. / Before I bridge to the budget appendix, / I'd love to open the floor for questions— / and if any technical details require a deeper dive, / we can park them for our afternoon sync."
    ],
    paragraphsKo: [
      '여러분 좋은 아침입니다. 3분기 APAC 리뷰를 위해 시간 내어 주셔서 감사합니다. 앞으로 15분 동안 분기 유지율 곡선, 7월 트래픽 급등의 배경 요인, 그리고 4분기 실행 로드맵까지 세 가지 핵심 영역을 차근차근 안내드리겠습니다. 간결한 진행을 위해, 근본 원인을 세부 분석하기 전에 핵심 추세를 한눈에 파악하실 수 있도록 각 슬라이드를 구성했습니다.',
      '왼쪽 차트를 보시면 주간 활성 사용량이 모바일 개편 직후 34% 급등했다가 8월 말에 안정세에 접어들었습니다. 이 정체 구간을 전체 맥락에서 이해하자면, 기업 고객은 보통 여름 휴가철에 활동이 둔화되는데도 유료 전환율은 11.4%로 여전히 두드러졌으며 이는 작년 기준치의 거의 두 배입니다. 이 도약의 원인을 명확히 밝혀주는 것은 코호트 분석입니다. 48시간 이내에 초기 설정을 마친 팀들은 갱신 확률이 세 배나 높았습니다.',
      '그렇다면 오늘 경영진께서 꼭 기억하셔야 할 핵심 시사점은 무엇일까요? 핵심 결론은 첫 주 온보딩을 간소화하지 않으면 신규 유입만으로는 지금의 성장세를 유지할 수 없다는 것입니다. 이는 저희가 4분기 전담 온보딩 스쿼드를 제안하는 이유를 강하게 부각합니다. 예산 부록으로 넘어가기 전에 질의응답을 열어두고자 하며, 더 깊은 분석이 필요한 기술 세부 사항은 오후 싱크 미팅으로 잠시 보류해 두겠습니다.'
    ],
    keyExpressions: [
      'walk someone through ~ : (자료·절차를) 차근차근 안내하다',
      'at a glance : 한눈에 보기에도',
      'drill down into ~ : (데이터·원인을) 깊이 파고들어 분석하다',
      'put ~ into perspective : ~을 전체 맥락·비교 관점에서 이해시키다',
      'key takeaway / the bottom line : 핵심 시사점 / 핵심 결론',
      'open the floor / park a question : Q&A를 열다 / 질문을 잠시 보류하다'
    ],
    comprehensionQuiz: [
      {
        id: 'd19-rq01',
        questionKo: '발표자가 8월 말 사용량 정체(plateau)를 맥락화(put into perspective)하며 강조한 긍정적 지표는 무엇인가요?',
        options: [
          '여름 휴가철에도 유료 전환율이 작년 기준치의 거의 두 배인 11.4%를 기록했다.',
          '모바일 개편 비용이 당초 예산보다 34% 절감되었다.',
          '신규 광고 채널만으로 4분기 목표 매출을 이미 달성했다.',
          '전담 온보딩 팀을 7월에 미리 배치해 이탈률을 0%로 낮췄다.'
        ],
        answer: '여름 휴가철에도 유료 전환율이 작년 기준치의 거의 두 배인 11.4%를 기록했다.',
        explanationKo:
          '2문단에서 여름철 둔화라는 맥락 속에서도 유료 전환율이 11.4%(nearly double last year\'s benchmark)로 두드러졌다고 설명했습니다.'
      },
      {
        id: 'd19-rq02',
        questionKo: '코호트 분석(cohort breakdown)이 밝혀낸 결정적 인사이트(sheds light on)는 무엇인가요?',
        options: [
          '48시간 안에 초기 설정을 마친 팀의 갱신 확률이 3배 더 높았다.',
          '대기업 고객은 모바일보다 데스크톱을 3배 더 선호했다.',
          '할인 프로모션을 받은 고객이 유료 전환 속도가 가장 빨랐다.',
          '아시아 지역 트래픽의 절반이 8월 말에 집중되었다.'
        ],
        answer: '48시간 안에 초기 설정을 마친 팀의 갱신 확률이 3배 더 높았다.',
        explanationKo:
          '"teams that completed setup within 48 hours were three times more likely to renew"가 핵심 인사이트입니다.'
      },
      {
        id: 'd19-rq03',
        questionKo: '발표자가 기술적인 심층 질문이 나올 경우 취하겠다고 제안한 Q&A 진행 방식은?',
        options: [
          '잠시 보류(park)해 두었다가 오후 싱크 미팅에서 자세히 다룬다.',
          '발표 도중 예산 부록을 생략하고 즉시 라이브 데모로 검증한다.',
          '이메일로 질문을 사전에 받은 건만 답변한다.',
          '다음 분기 리뷰 때까지 모든 기술 질문을 연기한다.'
        ],
        answer: '잠시 보류(park)해 두었다가 오후 싱크 미팅에서 자세히 다룬다.',
        explanationKo:
          '마지막 문장의 "we can park them for our afternoon sync"는 발표 시간 관리를 위한 전형적인 원어민 Q&A 운영 기법입니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd19-v01',
      word: 'walk ~ through',
      phonetic: '/wɔːk θruː/',
      pos: '구동사',
      cefr: 'b2',
      meaningKo: '(자료·절차·슬라이드를) 차근차근 안내하며 설명하다',
      meaningEn: 'guide someone step by step through a presentation, process, or document',
      nuanceTipKo: '한국인들이 자주 쓰는 "explain about" 대신 "walk you through the deck"이라고 말하면 발표자가 청중을 이끌어 가는 프로페셔널한 인상을 줍니다.',
      exampleEn: "Let me walk you through the updated launch timeline slide by slide.",
      exampleKo: '업데이트된 출시 일정을 슬라이드별로 차근차근 안내드리겠습니다.'
    },
    {
      id: 'd19-v02',
      word: 'key takeaway',
      phonetic: '/kiː ˈteɪkəweɪ/',
      pos: '명사구',
      cefr: 'b2',
      meaningKo: '핵심 시사점, 발표에서 꼭 챙겨 가야 할 요점',
      meaningEn: 'the most important insight or point to remember from a talk or report',
      nuanceTipKo: '발표가 끝날 때 청중이 머릿속에 포장해(take away) 가져가야 할 핵심 메시지 1~3개를 정리할 때 필수 표현입니다.',
      exampleEn: 'If you remember only one key takeaway today, focus on first-week activation.',
      exampleKo: '오늘 딱 하나의 핵심 시사점만 기억하신다면 첫 주 활성화 지표에 주목해 주세요.'
    },
    {
      id: 'd19-v03',
      word: 'bottom line',
      phonetic: '/ˈbɑːtəm laɪn/',
      pos: '명사구',
      cefr: 'b2',
      meaningKo: '핵심 결론, 요지; (회계상) 최종 순이익',
      meaningEn: 'the most essential fact or conclusion; the final net profit on a balance sheet',
      nuanceTipKo: '임원 보고에서 "The bottom line is (that)..."으로 결론을 명쾌하게 박아 주면 설득력이 극대화됩니다.',
      exampleEn: 'The bottom line is that automation will cut our response time in half.',
      exampleKo: '핵심 결론은 자동화를 도입하면 고객 응대 시간이 절반으로 줄어든다는 것입니다.'
    },
    {
      id: 'd19-v04',
      word: 'at a glance',
      phonetic: '/æt ə ɡlæns/',
      pos: '전치사구',
      cefr: 'b2',
      meaningKo: '한눈에 보기에도, 단번에',
      meaningEn: 'immediately with a quick look, without needing detailed study',
      nuanceTipKo: '대시보드나 요약 슬라이드의 가독성을 강조할 때 "see/grasp ~ at a glance" 연어로 자주 결합합니다.',
      exampleEn: 'This summary dashboard lets executives spot regional gaps at a glance.',
      exampleKo: '이 요약 대시보드를 통해 임원진은 지역별 격차를 한눈에 파악할 수 있습니다.'
    },
    {
      id: 'd19-v05',
      word: 'shed light on',
      phonetic: '/ʃed laɪt ɑːn/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '(원인·복잡한 데이터를) 명확히 밝혀주다, 이해를 돕다',
      meaningEn: 'clarify or provide new insight that makes something easier to understand',
      nuanceTipKo: '어두운 방에 빛(light)을 비추듯, 왜 수치가 변했는지 데이터를 근거로 해설할 때 show보다 훨씬 품격 있는 C1 표현입니다.',
      exampleEn: 'Recent user interviews shed light on why checkout drop-offs increased.',
      exampleKo: '최근 사용자 인터뷰는 결제 이탈률이 왜 증가했는지 명확히 밝혀주었습니다.'
    },
    {
      id: 'd19-v06',
      word: 'spike',
      phonetic: '/spaɪk/',
      pos: '동사 · 명사',
      cefr: 'b2',
      meaningKo: '급등하다, 치솟다; 그래프상의 급격한 상승',
      meaningEn: 'rise sharply and suddenly; a sharp temporary increase on a graph',
      nuanceTipKo: '트래픽, 매출, 문의량이 단기간에 뾰족하게 치솟을 때 increase very much 대신 spike를 쓰면 차트가 눈앞에 그려집니다.',
      exampleEn: 'Mobile sign-ups spiked by 40% immediately after the influencer campaign.',
      exampleKo: '인플루언서 캠페인 직후 모바일 가입자가 40% 급등했습니다.'
    },
    {
      id: 'd19-v07',
      word: 'level off',
      phonetic: '/ˈlevl ɔːf/',
      pos: '구동사',
      cefr: 'b2',
      meaningKo: '(급등·급락 후) 안정세에 접어들다, 수평을 이루다',
      meaningEn: 'stop rising or falling and remain at a steady, flat level',
      nuanceTipKo: '그래프가 오르거나 내리다가 평평해지는 구간을 묘사하는 차트 발표 필수 구동사입니다. 유의어로 plateau가 있습니다.',
      exampleEn: 'After two months of rapid growth, user traffic began to level off.',
      exampleKo: '두 달간의 빠른 성장 이후 사용자 트래픽이 안정세에 접어들기 시작했습니다.'
    },
    {
      id: 'd19-v08',
      word: 'put ~ into perspective',
      phonetic: '/pʊt ˈɪntuː pərˈspektɪv/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '~을 전체 맥락·비교 기준 속에서 객관적으로 이해시키다',
      meaningEn: 'compare something with a broader context so its true scale or meaning is clear',
      nuanceTipKo: '단순 숫자(예: 50만 달러)만 던지지 않고 "To put that into perspective,..."로 비교 대상을 붙여주면 청중의 이해도가 확 올라갑니다.',
      exampleEn: 'To put that cost into perspective, a single hour of downtime costs us twice as much.',
      exampleKo: '그 비용을 전체 맥락에서 보자면, 단 한 시간의 서버 장애 비용이 그 두 배에 달합니다.'
    },
    {
      id: 'd19-v09',
      word: 'drill down into',
      phonetic: '/drɪl daʊn ˈɪntuː/',
      pos: '구동사',
      cefr: 'c1',
      meaningKo: '(세부 데이터·근본 원인을) 더 깊이 파고들어 분석하다',
      meaningEn: 'examine detailed data or sub-categories beneath a high-level summary',
      nuanceTipKo: '전체 요약 슬라이드에서 세부 지역·세그먼트 슬라이드로 넘어갈 때 "Let\'s drill down into the Q3 cohort data"처럼 씁니다.',
      exampleEn: "Let's drill down into the enterprise segment to see what drove renewals.",
      exampleKo: '갱신을 이끈 요인이 무엇인지 기업 고객군을 더 깊이 들여다보겠습니다.'
    },
    {
      id: 'd19-v10',
      word: 'bridge to',
      phonetic: '/brɪdʒ tuː/',
      pos: '동사구',
      cefr: 'b2',
      meaningKo: '(다음 주제·슬라이드로) 자연스럽게 다리를 놓아 넘어가다',
      meaningEn: 'transition smoothly from one topic or section to the next',
      nuanceTipKo: '슬라이드 전환 시 "Next slide please"만 반복하지 말고 "This brings me to / bridges nicely to..."로 논리적 연결고리를 만들어 보세요.',
      exampleEn: 'That retention insight bridges nicely to our Q4 staffing proposal.',
      exampleKo: '방금 말씀드린 유지율 인사이트는 4분기 인력 제안으로 자연스럽게 이어집니다.'
    },
    {
      id: 'd19-v11',
      word: 'stand out',
      phonetic: '/stænd aʊt/',
      pos: '구동사',
      cefr: 'b2',
      meaningKo: '두드러지다, 눈에 띄게 돋보이다',
      meaningEn: 'be noticeably prominent, distinctive, or superior compared to others',
      nuanceTipKo: '복잡한 표나 그래프에서 청중의 시선을 딱 한 지점으로 모을 때 "One number really stands out here"라고 강조합니다.',
      exampleEn: 'Among all regional markets, Seoul stood out with a 92% satisfaction score.',
      exampleKo: '모든 지역 시장 가운데 서울이 92%의 만족도로 가장 두드러졌습니다.'
    },
    {
      id: 'd19-v12',
      word: 'underscore',
      phonetic: '/ˌʌndərˈskɔːr/',
      pos: '동사',
      cefr: 'c1',
      meaningKo: '(중요성·필요성을) 강하게 부각하다, 밑줄 긋듯 강조하다',
      meaningEn: 'emphasize or highlight the importance of a point or finding',
      nuanceTipKo: 'emphasize만 반복하는 대신 C1 임원 발표에서 "This data underscores the urgency of..."처럼 쓰면 문장 품격이 한층 높아집니다.',
      exampleEn: 'These churn metrics underscore the need for faster customer onboarding.',
      exampleKo: '이 이탈 지표들은 더 빠른 고객 온보딩의 필요성을 강하게 부각합니다.'
    },
    {
      id: 'd19-v13',
      word: 'open the floor',
      phonetic: '/ˈoʊpən ðə flɔːr/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '질의응답(Q&A)이나 청중 자유 발언을 시작하다',
      meaningEn: 'invite questions, comments, or discussion from the audience',
      nuanceTipKo: '발표 끝에 어색하게 "Any questions?"만 던지기보다 "I\'d now like to open the floor for questions"라고 마무리하면 훨씬 세련됩니다.',
      exampleEn: "With that summary in place, I'd like to open the floor for your questions.",
      exampleKo: '이상으로 요약을 마치고, 지금부터 여러분의 질문을 받겠습니다.'
    },
    {
      id: 'd19-v14',
      word: 'park (a question)',
      phonetic: '/pɑːrk/',
      pos: '동사',
      cefr: 'c1',
      meaningKo: '(시간·범위 밖 질문을) 일단 보류해 두고 나중에 다루다',
      meaningEn: 'temporarily set aside a topic or question to address it later',
      nuanceTipKo: '발표 흐름을 깨는 지엽적 질문이 나왔을 때 무례하지 않게 시간을 지키는 프로 기술입니다. "Let\'s park that for the follow-up!"',
      exampleEn: "Great question—let's park the pricing breakdown until we finish the product demo.",
      exampleKo: '좋은 질문입니다. 가격 세부 내역은 제품 시연을 마칠 때까지 잠시 보류해 두겠습니다.'
    },
    {
      id: 'd19-v15',
      word: 'actionable',
      phonetic: '/ˈækʃənəbl/',
      pos: '형용사',
      cefr: 'b2',
      meaningKo: '즉시 실행 가능한, 실무에 바로 적용할 수 있는',
      meaningEn: 'practical and concrete enough to be acted upon immediately',
      nuanceTipKo: '단순한 이론이 아니라 바로 액션 아이템으로 옮길 수 있는 인사이트·계획을 말할 때 actionable insights / actionable roadmap으로 자주 씁니다.',
      exampleEn: 'Our goal today is to leave this room with three actionable next steps.',
      exampleKo: '오늘 회의의 목표는 즉시 실행 가능한 세 가지 후속 조치를 정하고 나오는 것입니다.'
    }
  ],
  dialogue: [
    {
      id: 'd19-t01',
      speaker: 'Mina',
      roleLabel: '서울 그로스 리드 (발표자)',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english: "Thanks for joining, everyone. Today I'll walk you through our Q3 retention data and our actionable plan for Q4.",
      slashBroken: "Thanks for joining, everyone. / Today I'll walk you through / our Q3 retention data / and our actionable plan for Q4.",
      korean: '참석해 주셔서 감사합니다, 여러분. 오늘 3분기 유지율 데이터와 4분기 실행 계획을 차근차근 안내드리겠습니다.',
      keyHighlight: 'walk you through ~ / actionable plan',
      noteKo: '발표 오프닝에서 "I will introduce about~" 대신 "Today I\'ll walk you through~"로 시작하면 첫 5초에 신뢰를 얻습니다.'
    },
    {
      id: 'd19-t02',
      speaker: 'Daniel',
      roleLabel: '글로벌 프로덕트 VP',
      voicePitch: 0.9,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-right',
      english: "Sounds good, Mina. Looking at Slide 4, that July spike really stands out—what drove it, and why did it level off in August?",
      slashBroken: 'Sounds good, Mina. / Looking at Slide 4, / that July spike really stands out— / what drove it, / and why did it level off in August?',
      korean: '좋아요, 미나. 4번 슬라이드를 보니 7월 급등세가 정말 두드러지는데, 무엇이 그걸 이끌었고 왜 8월에 안정세로 돌아섰나요?',
      keyHighlight: 'spike / stands out / level off',
      noteKo: '차트 급등(spike), 눈에 띔(stand out), 평탄화(level off)가 한 문장에 매끄럽게 어우러진 원어민 임원 질문입니다.'
    },
    {
      id: 'd19-t03',
      speaker: 'Mina',
      roleLabel: '서울 그로스 리드 (발표자)',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-left',
      english: "Great catch, Daniel. To put August into perspective, B2B logins always dip during summer holidays, yet our paid conversion still doubled.",
      slashBroken: 'Great catch, Daniel. / To put August into perspective, / B2B logins always dip / during summer holidays, / yet our paid conversion still doubled.',
      korean: '예리한 지적이세요, 다니엘. 8월 수치를 전체 맥락에서 보자면, B2B 로그인은 여름 휴가철마다 줄어들지만 유료 전환율은 여전히 두 배로 뛰었습니다.',
      keyHighlight: 'To put ~ into perspective',
      noteKo: '날카로운 질문을 받았을 때 "Great catch"로 인정한 뒤 "To put ~ into perspective"로 맥락을 제시하면 방어적으로 보이지 않습니다.'
    },
    {
      id: 'd19-t04',
      speaker: 'Claire',
      roleLabel: '재무 디렉터 (화상 참석)',
      voicePitch: 1.12,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'zoom-in',
      english: "Could we drill down into the renewal numbers? I want to see what actually sheds light on customer stickiness.",
      slashBroken: 'Could we drill down into / the renewal numbers? / I want to see / what actually sheds light on / customer stickiness.',
      korean: '갱신 수치를 좀 더 깊이 파고들어 볼 수 있을까요? 고객 충성도의 실제 원인을 명확히 보여주는 지표가 궁금합니다.',
      keyHighlight: 'drill down into / sheds light on',
      noteKo: 'stickiness는 고객이 제품에 계속 머무르는 점착성(충성도)을 뜻하는 IT/SaaS 핵심 비즈니스 어휘입니다.'
    },
    {
      id: 'd19-t05',
      speaker: 'Mina',
      roleLabel: '서울 그로스 리드 (발표자)',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-right',
      english: "Absolutely. At a glance, Slide 6 shows that teams who finish setup within 48 hours renew at triple the rate—which underscores why onboarding matters most.",
      slashBroken: 'Absolutely. / At a glance, Slide 6 shows / that teams who finish setup within 48 hours / renew at triple the rate— / which underscores why onboarding matters most.',
      korean: '물론입니다. 6번 슬라이드를 한눈에 보시면, 48시간 이내에 설정을 마친 팀들의 갱신율이 세 배에 달하며 이는 온보딩이 가장 중요한 이유를 강하게 부각합니다.',
      keyHighlight: 'At a glance / underscores',
      noteKo: '계속적 용법의 `, which underscores...`를 쓰면 앞 데이터 전체를 받아 결론의 중요성을 매끄럽게 강조할 수 있습니다.'
    },
    {
      id: 'd19-t06',
      speaker: 'Daniel',
      roleLabel: '글로벌 프로덕트 VP',
      voicePitch: 0.9,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-left',
      english: "So before we review headcount, what's the bottom line you want the board to walk away with?",
      slashBroken: 'So before we review headcount, / what is the bottom line / you want the board / to walk away with?',
      korean: '그럼 인력 계획을 검토하기 전에, 이사회가 꼭 가져갔으면 하는 핵심 결론은 무엇인가요?',
      keyHighlight: 'the bottom line',
      noteKo: 'walk away with ~ 는 회의나 발표가 끝난 뒤 청중이 핵심 메시지로 챙겨 간다는 뜻입니다.'
    },
    {
      id: 'd19-t07',
      speaker: 'Mina',
      roleLabel: '서울 그로스 리드 (발표자)',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english: "The key takeaway is simple: investing in first-week onboarding protects Q4 revenue. Now let's open the floor, and we can park detailed API questions for later.",
      slashBroken: "The key takeaway is simple: / investing in first-week onboarding / protects Q4 revenue. / Now let's open the floor, / and we can park detailed API questions for later.",
      korean: '핵심 시사점은 단순합니다. 첫 주 온보딩에 투자하는 것이 4분기 매출을 지켜냅니다. 이제 질의응답을 열겠으며, 세부 API 질문은 나중을 위해 잠시 보류해 두겠습니다.',
      keyHighlight: 'key takeaway / open the floor / park',
      noteKo: '핵심 한 문장 요약 + Q&A 개시 + 범위 밖 질문 시간 관리(park)까지 완벽한 임원 PT 클로징입니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · PT 오프닝 콩글리시("introduce about") 탈출 & 3단계 안내 공식',
      coreFormula: "Today I'll walk you through [A], [B], and [C] (타동사 + 목적어 직결, about 금지!)",
      wrongKonglish: 'Today I will explain about our Q3 performance and introduce about the next plan.',
      rightNative: "Today I'll walk you through our Q3 performance and outline our actionable roadmap for Q4.",
      explanationKo:
        '한국 학습자들이 영어 발표 첫 문장에서 가장 많이 범하는 오류는 타동사 explain / discuss / introduce 뒤에 전치사 about을 붙이는 것입니다. 원어민은 발표 도입에서 explain about 대신 청중과 함께 슬라이드를 걸어간다는 이미지의 `walk you through [주제]`를 애용합니다. 목차를 제시할 때도 3박자 병렬 구조(Rule of Three)로 명사구를 나열하면 훨씬 명료하게 들립니다.',
      registerSpectrum: {
        casual: "Let's quickly run through what happened in Q3 and what's next.",
        standard: "Today I'll walk you through our Q3 metrics and our Q4 action plan.",
        formal: 'Over the next fifteen minutes, I will walk the committee through our quarterly results and strategic priorities.'
      }
    },
    {
      title: '원리 02 · 차트·데이터 스토리텔링 동사 정밀 구별: 급등·안정·비중',
      coreFormula: 'spike by [수치]% (단기 급등) ↔ level off (안정·평탄화) ↔ stand out at [수치]% (두드러짐)',
      wrongKonglish: 'Traffic went up very sharply by 34% and then became flat without moving.',
      rightNative: 'Traffic spiked by 34% right after launch, then leveled off in late August.',
      explanationKo:
        '데이터 발표에서 go up / go down / become flat 같은 초급 동사만 쓰면 설득력이 떨어집니다. ① 단기간 뾰족하게 치솟을 때는 `spike by + 증가폭` 또는 `spike to + 도달치`를 구별해 쓰세요(by는 변화량, to는 최종 수치!). ② 상승·하락이 멈추고 안정세에 들 때는 `level off`를 씁니다. ③ 수치에 의미를 부여할 때는 `put ~ into perspective(전체 맥락에 비춰 보다)`와 `shed light on(원인을 밝히다)`을 붙여 데이터에 서사를 입히세요.',
      registerSpectrum: {
        casual: 'Sign-ups jumped way up in July, then kind of flattened out.',
        standard: 'Sign-ups spiked by 34% in July before leveling off in August.',
        formal: 'Weekly active usage surged by 34% post-redesign and subsequently stabilized in late August.'
      }
    },
    {
      title: '원리 03 · 결론 먼저 박기(BLUF)와 프로페셔널한 Q&A 시간 제어',
      coreFormula: 'The key takeaway / bottom line is that [핵심 절] → open the floor → park [세부 질문] for later',
      wrongKonglish: 'My final conclusion is onboarding is important. Do you have any question? That is too detail, ask later.',
      rightNative: "The bottom line is that onboarding drives retention. I'd now like to open the floor, and we can park deep technical questions for our follow-up.",
      explanationKo:
        '글로벌 임원 보고는 "Bottom Line Up Front(결론 우선)" 문화를 따릅니다. `The bottom line is that ~`과 `The key takeaway is that ~` 뒤에는 완전한 문장(주어+동사)을 연결해 핵심 메시지를 한 문장으로 각인시키세요. 또한 Q&A에서 회의 목적을 벗어나는 질문이 나올 때 "Too detailed"처럼 직설적으로 자르면 무례하게 들립니다. 대신 `park [that question] for [후속 미팅]`을 쓰면 질문자를 존중하면서도 회의 시간을 완벽히 장악할 수 있습니다.',
      registerSpectrum: {
        casual: "Basically, onboarding is what matters most. Any questions? Let's save the tech stuff for later.",
        standard: "The key takeaway is that onboarding drives retention. Let's open the floor, and we can park deep technical details for this afternoon.",
        formal: 'In summary, the bottom line is that early activation underpins Q4 retention. I would now welcome your questions and suggest we park granular implementation queries for the working session.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd19-s01',
      drillType: 'konglish-fix',
      promptKo: '"오늘 3분기 실적과 4분기 계획을 설명드리겠습니다." — 자연스러운 원어민 오프닝은?',
      promptEnHint: 'explain about 콩글리시를 버리고 walk you through를 선택하세요.',
      targetEn: "Today I'll walk you through our Q3 results and Q4 roadmap.",
      wrongKonglishOption: "Today I'll explain about our Q3 results and introduce about Q4 roadmap.",
      explanationKo: 'explain과 introduce는 타동사라 about을 쓰지 않으며, PT에서는 walk you through가 가장 자연스럽습니다.'
    },
    {
      id: 'd19-s02',
      drillType: 'chunk-build',
      promptKo: '핵심 추세를 한눈에 파악하실 수 있도록 슬라이드를 구성했습니다.',
      promptEnHint: '한눈에 파악하다 grasp the core trend at a glance 청크를 연결하세요.',
      targetEn: 'I structured this slide so you can grasp the trend at a glance.',
      chunks: ['I structured this slide', 'so you can grasp', 'the trend', 'at a glance.'],
      explanationKo: 'so (that) you can ~ at a glance는 요약 슬라이드를 소개할 때 아주 유용한 패턴입니다.'
    },
    {
      id: 'd19-s03',
      drillType: 'active-blank',
      promptKo: '모바일 개편 직후 주간 활성 사용량이 34% 급등했습니다.',
      promptEnHint: '그래프가 뾰족하게 급등했다(과거형 1단어, 6글자)를 입력하세요.',
      targetEn: 'Weekly active usage spiked by 34% right after the redesign.',
      blankData: {
        before: 'Weekly active usage',
        answer: 'spiked',
        after: 'by 34% right after the redesign.',
        firstLetterHint: 's_____ (6글자, 과거형)'
      },
      explanationKo: '수치가 단기간에 급격히 치솟을 때 spike(과거형 spiked) + by [증가율]을 씁니다.'
    },
    {
      id: 'd19-s04',
      drillType: 'chunk-build',
      promptKo: '그 정체 구간을 전체 맥락에서 이해시켜 드리자면, 여름철에는 보통 활동이 줄어듭니다.',
      promptEnHint: 'To put that plateau into perspective 구문을 먼저 배치하세요.',
      targetEn: 'To put that plateau into perspective, enterprise usage dips every summer.',
      chunks: ['To put that plateau', 'into perspective,', 'enterprise usage dips', 'every summer.'],
      explanationKo: '부정적으로 보일 수 있는 수치를 객관적 맥락으로 설명할 때 To put ~ into perspective가 최고입니다.'
    },
    {
      id: 'd19-s05',
      drillType: 'active-blank',
      promptKo: '두 달간의 빠른 성장 이후 트래픽이 안정세에 접어들기 시작했습니다.',
      promptEnHint: '수평을 이루다/안정세에 들다 ____ off (동사 원형 1단어)',
      targetEn: 'After two months of rapid growth, traffic began to level off.',
      blankData: {
        before: 'After two months of rapid growth, traffic began to',
        answer: 'level',
        after: 'off.',
        firstLetterHint: 'l____ (5글자)'
      },
      explanationKo: 'level off는 상승이나 하락이 멈추고 일정한 수준을 유지하는 차트 표현입니다.'
    },
    {
      id: 'd19-s06',
      drillType: 'chunk-build',
      promptKo: '최근 코호트 분석이 왜 갱신율이 뛰었는지 명확히 밝혀줍니다.',
      promptEnHint: '빛을 비춰 원인을 밝히다 sheds light on을 조립하세요.',
      targetEn: 'Our cohort breakdown sheds light on why renewals jumped.',
      chunks: ['Our cohort breakdown', 'sheds light on', 'why renewals', 'jumped.'],
      explanationKo: 'shed light on + 의문사절/명사구는 데이터 인사이트를 제시하는 고급 표현입니다.'
    },
    {
      id: 'd19-s07',
      drillType: 'active-blank',
      promptKo: '핵심 결론은 첫 주 온보딩이 장기 유지율을 좌우한다는 것입니다.',
      promptEnHint: '핵심 결론 = The ______ line (명사 1단어)',
      targetEn: 'The bottom line is that first-week onboarding drives long-term retention.',
      blankData: {
        before: 'The',
        answer: 'bottom',
        after: 'line is that first-week onboarding drives long-term retention.',
        firstLetterHint: 'b_____ (6글자)'
      },
      explanationKo: 'The bottom line is that ~ 은 핵심 요지를 단도직입적으로 강조하는 임원 보고 문구입니다.'
    },
    {
      id: 'd19-s08',
      drillType: 'konglish-fix',
      promptKo: '"세부 기술 질문은 일단 보류하고 오후 싱크 미팅에서 다루겠습니다." — 세련된 Q&A 제어 표현은?',
      promptEnHint: '직설적인 거절 대신 park ~ for later를 고르세요.',
      targetEn: "Let's park the detailed technical questions for our afternoon sync.",
      wrongKonglishOption: "Those technical questions are too detail, so please don't ask now.",
      explanationKo: '회의 흐름을 해치지 않으면서 질문을 미룰 때 park [topic] for [later]를 씁니다.'
    },
    {
      id: 'd19-s09',
      drillType: 'active-blank',
      promptKo: '이 지표들은 더 빠른 온보딩 프로세스의 필요성을 강하게 부각합니다.',
      promptEnHint: '밑줄 긋듯 강조하다 u_________ (복수 주어 현재형 1단어)',
      targetEn: 'These metrics underscore the need for a faster onboarding process.',
      blankData: {
        before: 'These metrics',
        answer: 'underscore',
        after: 'the need for a faster onboarding process.',
        firstLetterHint: 'u_________ (10글자)'
      },
      explanationKo: 'underscore는 데이터나 사건이 어떤 사실의 중요성을 강하게 뒷받침할 때 쓰는 C1 동사입니다.'
    },
    {
      id: 'd19-s10',
      drillType: 'chunk-build',
      promptKo: '예산 부록으로 넘어가기 전에 여러분의 질의응답을 열고자 합니다.',
      promptEnHint: 'open the floor for questions 청크를 마지막에 배치하세요.',
      targetEn: "Before I bridge to the budget, I'd like to open the floor for questions.",
      chunks: ['Before I bridge', 'to the budget,', "I'd like to", 'open the floor for questions.'],
      explanationKo: 'bridge to(자연스럽게 넘어가다)와 open the floor(Q&A를 열다)를 결합한 고급 발표 클로징입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd19-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: 'PT 오프닝 walk ~ through',
      questionKo: '빈칸에 알맞은 단어(2단어)를 넣어 "오늘 3분기 로드맵을 차근차근 안내드리겠습니다"를 완성하세요.',
      stimulusEn: "Today I'll __________ you __________ our Q3 product roadmap.",
      answer: 'walk through',
      acceptableAlt: ['walk, through'],
      explanationKo: 'walk someone through ~ 는 자료나 절차를 단계별로 친절하고 체계적으로 안내한다는 뜻입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 요약 차트는 임원진이 핵심 격차를 한눈에 파악하게 해줍니다" — 빈칸 3단어(a_ _ g_____)는?',
        stimulusEn: 'This summary chart lets executives spot key gaps __________ __________ __________.',
        answer: 'at a glance',
        explanationKo: 'at a glance는 한눈에 즉시 파악할 수 있다는 뜻의 고정 표현입니다.'
      }
    },
    {
      id: 'd19-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '차트 평탄화 level off',
      questionKo: '빈칸에 알맞은 구동사(2단어, 동사원형)를 넣어 "트래픽이 급등한 뒤 8월에 안정세에 접어들기 시작했다"를 완성하세요.',
      stimulusEn: 'After surging in July, user traffic began to __________ __________ in August.',
      answer: 'level off',
      explanationKo: '그래프의 상승·하락이 멈추고 평탄해질 때 level off를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "유료 가입자가 캠페인 직후 30% 급등했다" — 과거형 동사(1단어)는?',
        stimulusEn: 'Paid sign-ups __________ by 30% right after the campaign.',
        answer: 'spiked',
        explanationKo: '단기간 급등은 spike(과거형 spiked) + by [변화폭]으로 표현합니다.'
      }
    },
    {
      id: 'd19-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '세부 데이터 분석 drill down into',
      questionKo: '빈칸에 알맞은 표현(3단어)을 넣어 "기업 고객군을 더 깊이 파고들어 분석해 봅시다"를 완성하세요.',
      stimulusEn: "Let's __________ __________ __________ the enterprise cohort to find the root cause.",
      answer: 'drill down into',
      explanationKo: '요약 수치에서 세부 하위 항목을 파고들 때 drill down into를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 인터뷰 결과가 이탈 원인을 명확히 밝혀주었다" — 빈칸 3단어(s___ l____ o_)는?',
        stimulusEn: 'These interviews __________ __________ __________ why users churned.',
        answer: 'shed light on',
        explanationKo: 'shed는 과거형도 shed입니다(shed-shed-shed). shed light on ~ 은 원인을 밝혀준다는 뜻입니다.'
      }
    },
    {
      id: 'd19-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '핵심 시사점 key takeaway',
      questionKo: '빈칸에 알맞은 명사구(2단어)를 넣어 "오늘 발표의 핵심 시사점은 초기 활성화에 집중하는 것입니다"를 완성하세요.',
      stimulusEn: 'The __________ __________ from today is that early activation drives renewals.',
      answer: 'key takeaway',
      explanationKo: '청중이 꼭 기억하고 가져가야 할 핵심 요점은 key takeaway입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "핵심 결론은 우리가 4분기 온보딩에 투자해야 한다는 것입니다" — 빈칸 2단어(b_____ l___)는?',
        stimulusEn: 'The __________ __________ is that we must invest in Q4 onboarding.',
        answer: 'bottom line',
        explanationKo: 'The bottom line is that ~ 은 최종 핵심 결론을 강조할 때 씁니다.'
      }
    },
    {
      id: 'd19-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: 'Q&A 개시 open the floor',
      questionKo: '빈칸에 알맞은 관용구(3단어)를 넣어 "지금부터 질의응답을 열고자 합니다"를 완성하세요.',
      stimulusEn: "I'd now like to __________ __________ __________ for any questions.",
      answer: 'open the floor',
      explanationKo: '발표 말미에 청중 발언이나 Q&A를 정중히 시작할 때 open the floor를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "세부 가격 논의는 오후 미팅으로 잠시 보류해 두겠습니다" — 빈칸 동사(1단어)는?',
        stimulusEn: "Let's __________ the pricing breakdown for our afternoon meeting.",
        answer: 'park',
        explanationKo: '회의에서 벗어난 질문을 정중히 나중으로 미룰 때 동사 park를 씁니다.'
      }
    },
    {
      id: 'd19-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'PT 오프닝 콩글리시 판별',
      questionKo: '다음 중 영어 프레젠테이션 오프닝 문장으로 어법과 어조가 **가장 자연스러운** 것은?',
      stimulusEn: '타동사 뒤 불필요한 about과 어색한 직역 표현을 걸러내세요.',
      options: [
        'Today I will explain about our annual growth and introduce about three goals.',
        "Today I'll walk you through our annual growth and outline three actionable priorities.",
        'Today I am going to discuss about the chart so you see it in one eye.',
        'Today I want to say you our bottom line about Q3 performance.'
      ],
      answer: "Today I'll walk you through our annual growth and outline three actionable priorities.",
      explanationKo:
        'explain/introduce/discuss 뒤에 about을 쓰면 틀리고, "한눈에"는 in one eye가 아니라 at a glance, say는 간접목적어 you를 바로 받지 못합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "오늘 3가지 핵심 지표를 안내드리겠습니다"에서 walk you 뒤 전치사(1단어)는?',
        stimulusEn: "Today I'll walk you __________ three core metrics.",
        answer: 'through',
        explanationKo: 'walk + 사람 + through + 자료/주제 어순을 기억하세요.'
      }
    },
    {
      id: 'd19-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '차트 전치사 by vs to 구별',
      questionKo: '원래 10%였던 전환율이 15%가 되어 "5%포인트(또는 50%) 급등했다"와 "15%까지 도달했다"를 정확히 표현한 문장은?',
      stimulusEn: '증감폭(by)과 최종 도달 수치(to)의 전치사 차이에 주목하세요.',
      options: [
        'Conversion spiked to 50%, reaching a new high by 15%.',
        'Conversion spiked by 50%, rising to 15% in Q3.',
        'Conversion leveled off by 15% after dropping to rapidly.',
        'Conversion stood out to 15% and spiked until 50%.'
      ],
      answer: 'Conversion spiked by 50%, rising to 15% in Q3.',
      explanationKo:
        '변화 폭(증가량) 앞에는 by, 도달한 최종 수치 앞에는 to를 씁니다. 따라서 spiked by 50%, rising to 15%가 정확합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "주간 사용량이 34%만큼 급등했다" — 빈칸 전치사(1단어)는?',
        stimulusEn: 'Weekly usage spiked __________ 34% after launch.',
        answer: 'by',
        explanationKo: '증가한 폭(34%) 앞에는 전치사 by를 씁니다.'
      }
    },
    {
      id: 'd19-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '맥락화 표현 put into perspective',
      questionKo: '발표 중 "50만 달러 투자 비용이 크게 느껴지실 수 있지만, 장애 1시간 손실이 100만 달러라는 전체 맥락에서 보자면 합리적입니다"를 도입할 때 가장 적절한 문구는?',
      stimulusEn: '____________________, a single hour of downtime costs us twice as much.',
      options: [
        'To put that investment into perspective',
        'To park that investment for the floor',
        'To level off that investment at a glance',
        'To stand out that investment by EOD'
      ],
      answer: 'To put that investment into perspective',
      explanationKo:
        '숫자나 현상을 비교 기준·전체 맥락에 비추어 객관적으로 이해시킬 때 To put ~ into perspective를 사용합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "그 숫자를 전체 맥락에서 이해시키기 위해" — 빈칸 명사(1단어)는?',
        stimulusEn: 'To put those figures into __________, our market grew 20% overall.',
        answer: 'perspective',
        explanationKo: 'put ~ into perspective는 설득력 있는 데이터 발표의 핵심 숙어입니다.'
      }
    },
    {
      id: 'd19-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '강조 동사 underscore 문맥',
      questionKo: '다음 빈칸에 들어가 "이 이탈률 수치는 고객 온보딩 개선의 시급함을 강하게 부각합니다"라는 C1급 문장을 완성하는 동사는?',
      stimulusEn: 'These churn figures __________ the urgency of redesigning our onboarding flow.',
      options: ['underscore', 'level off', 'park', 'bridge'],
      answer: 'underscore',
      explanationKo:
        'underscore는 어떤 사실이나 데이터가 특정 주장의 중요성을 강하게 뒷받침하고 강조할 때 쓰는 고급 타동사입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "모든 지역 중 서울이 가장 두드러졌다" — 과거형 구동사(2단어)는?',
        stimulusEn: 'Among all markets, Seoul __________ __________ with a 92% score.',
        answer: 'stood out',
        explanationKo: 'stand out의 과거형은 stood out입니다.'
      }
    },
    {
      id: 'd19-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'Q&A 범위 밖 질문 대응',
      questionKo: '경영진 대상 전략 PT 도중, 한 참석자가 아주 세부적인 서버 로그 설정 질문을 던졌을 때 시간을 지키며 가장 프로답게 대응한 말은?',
      stimulusEn: '질문자를 존중하면서도 핵심 아젠다 흐름을 유지해야 합니다.',
      options: [
        "That's not related to my slide, so please stop asking technical stuff.",
        "Great question—let's park the server configuration details for our engineering sync right after this.",
        'I do not know about that, so let us close the floor immediately.',
        'The bottom line is that your question is too narrow to walk through.'
      ],
      answer: "Great question—let's park the server configuration details for our engineering sync right after this.",
      explanationKo:
        '"Great question"으로 상대의 기여를 인정하고, "let\'s park ~ for [후속 미팅]"으로 정중히 시간과 범위를 관리하는 것이 최고의 발표 매너입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "즉시 실행 가능한 세 가지 후속 조치"에서 빈칸 형용사(1단어, a_________)는?',
        stimulusEn: 'We need three __________ next steps before Friday.',
        answer: 'actionable',
        explanationKo: '바로 실무에 적용·실행할 수 있다는 뜻의 형용사는 actionable입니다.'
      }
    },
    {
      id: 'd19-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'walk through + key takeaway 배열',
      questionKo: '주어진 청크를 올바르게 배열하여 발표 오프닝 문장을 완성하세요.',
      stimulusEn: "[ our Q3 metrics / Today I'll / and highlight / walk you through / the key takeaway. ]",
      answer: "Today I'll walk you through our Q3 metrics and highlight the key takeaway.",
      acceptableAlt: ['Today I will walk you through our Q3 metrics and highlight the key takeaway.'],
      explanationKo: '주어+동사(I\'ll walk you through) + 목적어(our Q3 metrics) + 병렬 동사구(and highlight the key takeaway) 순서입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 대시보드를 통해 전체 추세를 한눈에 보실 수 있습니다." (This dashboard lets you / see the overall trend / at a glance.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'This dashboard lets you see the overall trend at a glance.',
        explanationKo: 'let + 목적어 + 동사원형 + at a glance 구조입니다.'
      }
    },
    {
      id: 'd19-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '차트 추이 묘사 어순 배열',
      questionKo: '주어진 표현을 배열하여 "7월에 사용량이 급등한 뒤 8월 말에 안정세에 접어들었다"를 완성하세요.',
      stimulusEn: '[ in late August. / Usage spiked / before / by 34% in July / leveling off ]',
      answer: 'Usage spiked by 34% in July before leveling off in late August.',
      explanationKo: '전치사 before 뒤에는 동명사 leveling off가 와야 어법상 완벽합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "코호트 분석이 왜 갱신율이 뛰었는지 명확히 밝혀줍니다." (The cohort analysis / sheds light on / why renewals jumped.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'The cohort analysis sheds light on why renewals jumped.',
        explanationKo: '3인칭 단수 주어이므로 sheds light on으로 수일치에 주의하세요.'
      }
    },
    {
      id: 'd19-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'bottom line 결론 영작',
      questionKo: '우리말 뜻에 맞게 The bottom line is that 구문을 사용하여 문장을 영작하세요.',
      stimulusEn: '우리말: 핵심 결론은 첫 주 온보딩이 장기 유지율을 좌우한다는 것입니다.\n(힌트: The bottom line is that / first-week onboarding / drives long-term retention.)',
      answer: 'The bottom line is that first-week onboarding drives long-term retention.',
      explanationKo: 'The bottom line is that + 완전한 절(S+V+O) 구조로 발표의 요지를 명확히 전달합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 데이터는 전담 온보딩 팀의 필요성을 강하게 부각합니다." (This data underscores / the need for / a dedicated onboarding team.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'This data underscores the need for a dedicated onboarding team.',
        explanationKo: '단수 취급된 This data 뒤에 underscores the need for ~ 를 연결했습니다.'
      }
    },
    {
      id: 'd19-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시 PT 문장 교정',
      questionKo: '다음 콩글리시 발표 문장의 오류 2곳(explain about, in one eye)을 원어민 표현으로 고쳐 완전한 문장으로 다시 쓰세요.',
      stimulusEn: '오류 문장: Let me explain about Slide 3 so you can see the results in one eye.',
      answer: 'Let me walk you through Slide 3 so you can see the results at a glance.',
      acceptableAlt: ['Let me explain Slide 3 so you can see the results at a glance.'],
      explanationKo: 'explain about → walk you through(또는 about 삭제), in one eye → at a glance로 교정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: Let us drill down about the Q3 data. (전치사 about을 올바른 전치사 1단어로 교정해 전체 문장을 쓰세요.)',
        stimulusEn: '바른 문장 전체를 작성하세요.',
        answer: 'Let us drill down into the Q3 data.',
        explanationKo: 'drill down은 전치사 into와 결합해 drill down into ~ 로 씁니다.'
      }
    },
    {
      id: 'd19-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Q&A 개시 및 보류 통문장 영작',
      questionKo: '다음 우리말을 open the floor와 park를 활용해 자연스럽게 영작하세요.',
      stimulusEn: '우리말: 지금부터 질의응답을 열겠으며, 세부 기술 질문은 오후를 위해 잠시 보류해 두겠습니다.\n(힌트: Let us open the floor for questions, / and we can park / technical details for this afternoon.)',
      answer: 'Let us open the floor for questions, and we can park technical details for this afternoon.',
      acceptableAlt: ["Let's open the floor for questions, and we can park technical details for this afternoon."],
      explanationKo: 'open the floor for questions와 park ~ for [시간]을 자연스럽게 연결한 임원 PT 클로징 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 인사이트는 4분기 예산 제안으로 자연스럽게 이어집니다." (This insight bridges nicely to / our Q4 budget proposal.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'This insight bridges nicely to our Q4 budget proposal.',
        explanationKo: '슬라이드 전환 연결 표현 bridge nicely to ~ 를 체화하세요.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "You have 60 seconds in front of the executive board. Walk me through your latest project update and tell me the single key takeaway.",
    openingQuestionKo: '이사회 앞에서 60초 발표 시간이 주어졌습니다. 최근 프로젝트 현황을 차근차근 안내하고, 임원진이 꼭 기억해야 할 단 하나의 핵심 시사점을 말씀해 주세요.',
    followUpQuestionEn:
      "Interesting trend—why did engagement level off last month, and what's the bottom line for our Q4 budget?",
    followUpQuestionKo: '흥미로운 추세네요. 지난달 참여도가 왜 안정세로 접어들었고, 결국 4분기 예산에 대한 핵심 결론은 무엇인가요?',
    recommendedChunks: [
      "Today I'll walk you through ~",
      'To put that into perspective,',
      'spiked by ~ / leveled off',
      'The key takeaway is that ~',
      'The bottom line is that ~'
    ],
    modelAnswerEn:
      "Today I'll walk you through our Q3 retention metrics and our Q4 priority. Usage spiked by 34% after launch before leveling off in August, which sheds light on the importance of early setup. The bottom line is that investing in first-week onboarding is our most actionable lever to protect Q4 revenue."
  }
};
