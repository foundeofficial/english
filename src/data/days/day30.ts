import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day30Module: DayLessonModule = {
  dayNumber: 30,
  weekNumber: 5,
  cefrLevel: 'c2',
  isWeeklyReview: true,
  dayBadge: 'DAY 30 · 30일 완성 1개월 파이널 졸업 모의고사',
  categoryLabel: '30일 통합 마스터리 · A1~C2 전 영역 최종 종합 평가 (20문항)',
  title: '30일 완성 1개월 파이널 졸업 모의고사: A1~C2 전 영역 통합 마스터',
  subtitle:
    'Day 01의 일상 동선·어순 뼈대(A1)부터 여행·오피스 실무(B1–B2), 시사 토론·전술적 공감·TED 설득 수사(C1–C2)까지 30일 전 과정을 하나로 통합 검증하는 20문항 파이널 졸업 에디션',
  heroImage: 'assets/scene_boardroom_pitch.jpg',
  secondaryImage: 'assets/scene_media_podcast.jpg',
  estimatedSprintMin: 12,
  estimatedLectureMin: 55,
  keyExpression:
    'True mastery is not reciting isolated rules—it is shifting seamlessly from everyday warmth to executive persuasion with poise.',
  keySentenceByTier: {
    a1: 'I practiced English every day for thirty days, and now I can speak with confidence.',
    a2: 'I stopped by a cafe every morning to study, and my daily habit really paid off.',
    b1: 'Looking back on this month, setting clear daily habits helped me speak far more naturally in meetings.',
    b2: 'By combining practical phrasal verbs with structured presentations, I can now advocate clearly for my team’s priorities.',
    c1: 'Had I stuck to passive memorization instead of active drills, I would never have built the fluency to negotiate and debate under pressure.',
    c2: 'Far from being an overnight leap, commanding a global room with poise is the compound effect of thirty days spent bridging everyday nuance, tactical empathy, and executive persuasion.'
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[30],
  readingPassage: {
    titleEn: 'From First Words to Executive Persuasion: The Architecture of Lasting Fluency',
    titleKo: '첫 문장에서 임원 설득까지: 평생 무너지지 않는 영어 유창성의 설계도',
    genreBadge: '30일 파이널 피날레 매니페스토 · TED-Style Capstone Essay',
    estimatedMin: 7,
    paragraphsEn: [
      'Thirty days ago, you began with the simplest building blocks of authentic English: stopping by a cafe on your way home, describing plans that went sideways, and coordinating busy schedules without stiff Konglish. On the surface, those everyday phrasal verbs might look worlds apart from pitching a global boardroom or debating AI ethics on a podcast. Yet seasoned communicators recognize a deeper truth: executive presence is never built by abandoning simple verbs—it is built by mastering register shifting, knowing instinctively when casual warmth builds rapport and when formal precision anchors an argument.',
      'Across Weeks 3 and 4, that foundation expanded into the high-stakes arenas of global work: running seamless video calls, pushing back diplomatically when bandwidth runs tight, simulating risks through inverted conditionals, and structuring interviews so every answer lands in sixty seconds. Notice the compound effect at work. When your core syntax becomes automatic, your cognitive bandwidth is finally freed to focus on what successful negotiators do differently—reframing an individual request into a shared value proposition that benefits every stakeholder in the room.',
      'Finally, in Week 5, you crossed the threshold from fluent speaker to persuasive strategist—balancing BBC-style debate, safeguarding focus against burnout, reading cultural nuance across dining tables, and disarming deadlocks through tactical empathy. Compelling as a graduation milestone feels today, true fluency under pressure is not a finish line; it is a living practice. Walk into your next meeting, dinner, or keynote with quiet poise: synthesize the facts, listen deeply, reframe the ask around shared value, and deliver a call to action that nobody can ignore.'
    ],
    paragraphsSlash: [
      'Thirty days ago, / you began with the simplest building blocks of authentic English: / stopping by a cafe on your way home, / describing plans that went sideways, / and coordinating busy schedules without stiff Konglish. / On the surface, / those everyday phrasal verbs might look worlds apart / from pitching a global boardroom / or debating AI ethics on a podcast. / Yet seasoned communicators recognize a deeper truth: / executive presence is never built / by abandoning simple verbs— / it is built by mastering register shifting, / knowing instinctively when casual warmth builds rapport / and when formal precision anchors an argument.',
      'Across Weeks 3 and 4, / that foundation expanded / into the high-stakes arenas of global work: / running seamless video calls, / pushing back diplomatically when bandwidth runs tight, / simulating risks through inverted conditionals, / and structuring interviews / so every answer lands in sixty seconds. / Notice the compound effect at work. / When your core syntax becomes automatic, / your cognitive bandwidth is finally freed / to focus on what successful negotiators do differently— / reframing an individual request / into a shared value proposition / that benefits every stakeholder in the room.',
      'Finally, in Week 5, / you crossed the threshold / from fluent speaker to persuasive strategist— / balancing BBC-style debate, / safeguarding focus against burnout, / reading cultural nuance across dining tables, / and disarming deadlocks through tactical empathy. / Compelling as a graduation milestone feels today, / true fluency under pressure is not a finish line; / it is a living practice. / Walk into your next meeting, dinner, or keynote with quiet poise: / synthesize the facts, listen deeply, / reframe the ask around shared value, / and deliver a call to action / that nobody can ignore.'
    ],
    paragraphsKo: [
      '30일 전, 여러분은 진짜 영어의 가장 단순한 주춧돌에서 출발했습니다. 퇴근길에 카페에 잠깐 들르는 표현, 계획대로 안 풀린 하루를 말하는 법, 어색한 콩글리시 없이 바쁜 일정을 조율하는 법이었죠. 겉보기에는 이런 일상 구동사가 글로벌 이사회 발표나 팟캐스트 AI 윤리 토론과는 전혀 다른 세계처럼 보일 수 있습니다. 그러나 노련한 소통가들은 더 깊은 진실을 알고 있습니다. 임원급 존재감(executive presence)은 결코 쉬운 동사를 버려서 만들어지지 않습니다. 친근한 온기가 라포를 쌓는 순간과 격식 있는 정밀함이 논거를 단단히 고정하는 순간을 본능적으로 구분하는 ‘레지스터 전환(register shifting)’을 마스터할 때 비로소 완성됩니다.',
      '3주차와 4주차를 거치며 그 토대는 글로벌 실무의 중대한 무대로 확장되었습니다. 매끄러운 화상회의 진행, 업무 여력이 빠듯할 때의 외교적 일정 조율, 도치 가정법을 활용한 리스크 시뮬레이션, 그리고 60초 안에 핵심이 꽂히는 면접 구조화까지 익혔습니다. 여기서 작동하는 복리 효과(compound effect)에 주목하세요. 기본 어순과 문장 뼈대가 자동화되면 비로소 인지적 여력이 해방되어, 성공적인 협상가들이 남다르게 실천하는 본질—개인의 요구를 회의실의 모든 이해관계자에게 이익이 되는 공동 가치 제안으로 재구성하는 일—에 집중할 수 있게 됩니다.',
      '마침내 5주차에 들어 여러분은 유창한 화자에서 설득하는 전략가로 문턱을 넘어섰습니다. BBC 스타일의 균형 논증, 번아웃에 맞선 집중력 보호, 식탁 너머의 문화적 뉘앙스 읽기, 그리고 전술적 공감으로 교착 상태를 무장해제하는 기술까지 체득했습니다. 오늘 이 졸업 이정표가 아무리 벅차게 느껴질지라도, 압박 속 진정한 유창성은 결승선이 아니라 살아 숨 쉬는 실천입니다. 다음 회의와 만찬, 기조연설 무대에 차분한 품격(poise)으로 걸어 들어가세요. 사실을 통합하고, 깊이 경청하며, 공동 가치를 중심으로 요청을 재구성해 누구도 외면할 수 없는 행동 촉구(call to action)를 전하시기 바랍니다.'
    ],
    keyExpressions: [
      'mastering register shifting (상황별 어조·격식 전환을 마스터하기)',
      'anchor an argument (논거를 탄탄히 고정·뒷받침하다)',
      'the compound effect at work (작동 중인 누적 복리 효과)',
      'reframe an individual request into a shared value proposition (개인 요구를 공동 가치 제안으로 재구성하다)',
      'Compelling as a graduation milestone feels today (오늘 이 졸업 이정표가 아무리 감격스러울지라도)',
      'deliver a call to action with quiet poise (차분한 품격으로 행동 촉구를 전하다)'
    ],
    comprehensionQuiz: [
      {
        id: 'd30-rq01',
        questionKo: '1문단이 설명하는 "임원급 존재감(executive presence)"의 진정한 토대는 무엇인가?',
        options: [
          '쉬운 일상 구동사를 완전히 버리고 라틴계 장문 어휘만 사용하는 것',
          '친근한 온기와 격식 있는 정밀함을 상황에 맞게 자유자재로 오가는 레지스터 전환 능력',
          '발표 도중 청중의 질문을 차단하고 준비된 대본만 빠르게 읽는 것',
          '원어민 억양을 흉내 내기 위해 복잡한 문법을 모두 생략하는 것'
        ],
        answer: '친근한 온기와 격식 있는 정밀함을 상황에 맞게 자유자재로 오가는 레지스터 전환 능력',
        explanationKo:
          '1문단은 "executive presence is never built by abandoning simple verbs—it is built by mastering register shifting"이라고 강조합니다.'
      },
      {
        id: 'd30-rq02',
        questionKo: '2문단에 따르면 기본 어순과 문장 구조가 자동화될 때 발생하는 "복리 효과(compound effect)"의 핵심 결과는?',
        options: [
          '단어 암기 시간이 완전히 사라져 더 이상 공부가 필요 없어진다',
          '인지적 여력이 확보되어 개인 요구를 공동 가치 제안으로 재구성하는 고급 협상에 집중할 수 있다',
          '화상회의나 이메일 대신 모든 업무를 구두로만 처리할 수 있게 된다',
          '가정법이나 조건문을 쓰지 않고도 모든 리스크를 완벽히 제거할 수 있다'
        ],
        answer: '인지적 여력이 확보되어 개인 요구를 공동 가치 제안으로 재구성하는 고급 협상에 집중할 수 있다',
        explanationKo:
          '2문단의 "your cognitive bandwidth is finally freed to focus on... reframing an individual request into a shared value proposition"이 정확한 근거입니다.'
      },
      {
        id: 'd30-rq03',
        questionKo: '3문단이 30일 졸업생에게 전하는 궁극적 메시지(결론)로 가장 알맞은 것은?',
        options: [
          '30일 과정이 끝났으므로 이제 영어 학습을 완전히 종료해도 된다',
          '졸업 이정표는 끝이 아니라 살아 숨 쉬는 실천의 시작이며, 경청과 공동 가치 프레이밍으로 실전 무대를 주도하라',
          'C2 단계에 도달하면 일상 스몰토크보다 학술 에세이 작성에만 전념해야 한다',
          '압박감이 큰 협상 자리에서는 감정을 배제하고 오직 수치 데이터만 제시해야 한다'
        ],
        answer: '졸업 이정표는 끝이 아니라 살아 숨 쉬는 실천의 시작이며, 경청과 공동 가치 프레이밍으로 실전 무대를 주도하라',
        explanationKo:
          '3문단은 "true fluency under pressure is not a finish line; it is a living practice"라며 실전 무대에서의 poise, 경청, 재구성, 행동 촉구를 강조합니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd30-v01',
      word: 'advocate for',
      phonetic: '/ˈædvəkeɪt fɔːr/',
      pos: '동사구',
      cefr: 'c1',
      meaningKo: '(팀·가치·제안을) 당당하고 논리적으로 대변·옹호하다',
      meaningEn: 'to publicly support, champion, or argue strongly on behalf of a cause, team, or proposal',
      nuanceTipKo: 'TED 강연과 글로벌 리더십에서 "자기 몫과 팀의 가치를 당당히 주장하다(advocate for what matters)"로 핵심 쓰임새를 가집니다.',
      exampleEn: 'Effective leaders advocate for their team’s bandwidth as fiercely as they pursue revenue.',
      exampleKo: '유능한 리더는 매출을 추구하는 것만큼이나 치열하게 팀의 업무 여력을 대변합니다.'
    },
    {
      id: 'd30-v02',
      word: 'value proposition',
      phonetic: '/ˈvæljuː ˌprɑːpəˈzɪʃən/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '가치 제안 (상대가 이 선택을 통해 얻게 될 핵심 효용과 차별적 이익)',
      meaningEn: 'a clear statement of the tangible benefit and unique value an offer delivers to stakeholders',
      nuanceTipKo: '단순한 "내 요구(my ask)"를 "우리 모두의 이익(shared value proposition)"으로 바꿀 때 협상 승률이 급상승합니다.',
      exampleEn: 'Reframing the salary request around a shared value proposition won immediate executive backing.',
      exampleKo: '연봉 협상 요청을 공동 가치 제안으로 재구성하자 즉시 임원진의 지지를 얻어냈습니다.'
    },
    {
      id: 'd30-v03',
      word: 'register shifting',
      phonetic: '/ˈredʒɪstər ˈʃɪftɪŋ/',
      pos: '명사구',
      cefr: 'c2',
      meaningKo: '레지스터(어조·격식) 전환 (상황과 청중에 맞춰 구어·표준·격식체를 자유자재로 바꾸는 능력)',
      meaningEn: 'the seamless adjustment of tone, vocabulary, and formality to suit different social or professional contexts',
      nuanceTipKo: '30일 코스의 핵심 철학! 카페 스몰토크(Casual)와 이사회 발표(Formal)의 옷을 자연스럽게 갈아입는 C2 역량입니다.',
      exampleEn: 'Effortless register shifting lets you joke warmly over lunch and command a boardroom at two.',
      exampleKo: '자유자재의 레지스터 전환 능력을 갖추면 점심엔 유쾌히 농담하다가 2시 이사회에선 좌중을 압도할 수 있습니다.'
    },
    {
      id: 'd30-v04',
      word: 'executive presence',
      phonetic: '/ɪɡˈzekjətɪv ˈprezəns/',
      pos: '명사구',
      cefr: 'c2',
      meaningKo: '임원급 존재감 (차분한 확신·명료한 전달력·신뢰를 주는 리더십 아우라)',
      meaningEn: 'the poised confidence, clarity, and gravitas that inspire trust and authority in leadership settings',
      nuanceTipKo: '목소리를 키우거나 빨리 말하는 것이 아니라, 흔들림 없는 구조와 침착한 멈춤에서 나오는 신뢰감입니다.',
      exampleEn: 'Executive presence shows most clearly when a leader stays calm during hostile Q&A.',
      exampleKo: '임원급 존재감은 리더가 날카로운 질의응답 속에서도 침착함을 유지할 때 가장 뚜렷하게 드러납니다.'
    },
    {
      id: 'd30-v05',
      word: 'command the room',
      phonetic: '/kəˈmænd ðə ˈruːm/',
      pos: '관용구',
      cefr: 'c2',
      meaningKo: '(압도적 전달력과 품격으로) 회의실·청중의 집중을 단숨에 장악하다',
      meaningEn: 'to naturally capture and hold the full attention and respect of everyone present',
      nuanceTipKo: '발표·면접·키노트에서 최고의 찬사! "She walked in and immediately commanded the room."',
      exampleEn: 'With a crisp opening story and steady eye contact, Jiwon commanded the room within thirty seconds.',
      exampleKo: '깔끔한 오프닝 스토리와 흔들림 없는 눈 맞춤으로 지원은 30초 만에 회의실을 장악했습니다.'
    },
    {
      id: 'd30-v06',
      word: 'articulate',
      phonetic: '/ɑːrˈtɪkjəleɪt/',
      pos: '동사/형용사',
      cefr: 'c1',
      meaningKo: '(복잡한 생각·전략을) 또렷하고 논리 정연하게 언어화하다; 조리 있는',
      meaningEn: 'to express complex ideas clearly and effectively; well-spoken and coherent',
      nuanceTipKo: '동사 발음은 /-leɪt/, 형용사 발음은 /-lət/으로 끝소리가 살짝 다릅니다! articulate a vision 연어로 꼭 기억하세요.',
      exampleEn: 'Being able to articulate trade-offs clearly sets senior strategists apart.',
      exampleKo: '장단점의 절충을 또렷하게 언어화할 수 있는 능력이 시니어 전략가를 돋보이게 합니다.'
    },
    {
      id: 'd30-v07',
      word: 'anchor an argument',
      phonetic: '/ˈæŋkər ən ˈɑːrɡjumənt/',
      pos: '동사구',
      cefr: 'c2',
      meaningKo: '(핵심 근거·데이터에) 주장의 닻을 단단히 내려 흔들리지 않게 고정하다',
      meaningEn: 'to ground a persuasive claim firmly in concrete evidence, shared values, or core principles',
      nuanceTipKo: '배가 닻(anchor)을 내리듯 내 설득의 중심축을 단단한 데이터나 공동 가치에 고정한다는 고급 은유입니다.',
      exampleEn: 'Anchor your argument in measurable customer outcomes before discussing implementation costs.',
      exampleKo: '구축 비용을 논하기 전에 측정 가능한 고객 성과에 주장의 닻을 단단히 내리세요.'
    },
    {
      id: 'd30-v08',
      word: 'call to action',
      phonetic: '/ˌkɔːl tuː ˈækʃən/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '행동 촉구 (발표·협상·에세이 말미에 청중의 구체적 결단과 실행을 이끄는 마무리)',
      meaningEn: 'a clear, compelling closing appeal urging the audience to take a specific next step',
      nuanceTipKo: 'TED 강연과 임원 PT에서 "Thank you for listening"으로 밋밋하게 끝내지 말고 선명한 call to action으로 닫으세요!',
      exampleEn: 'Every persuasive pitch should close with a concrete, time-bound call to action.',
      exampleKo: '설득력 있는 모든 발표는 구체적이고 기한이 명시된 행동 촉구로 마무리되어야 합니다.'
    },
    {
      id: 'd30-v09',
      word: 'synthesize',
      phonetic: '/ˈsɪnθəsaɪz/',
      pos: '동사',
      cefr: 'c1',
      meaningKo: '(흩어진 정보·관점들을) 하나의 명쾌한 통찰로 종합·통합하다',
      meaningEn: 'to combine diverse inputs, perspectives, or data points into a coherent whole',
      nuanceTipKo: '단순 요약(summarize)보다 한 차원 높아, 여러 이해관계자의 의견을 엮어 새 통찰을 만들어내는 C1–C2 핵심 동사입니다.',
      exampleEn: 'In just two minutes, he synthesized five conflicting viewpoints into one actionable roadmap.',
      exampleKo: '불과 2분 만에 그는 상충하던 다섯 가지 관점을 하나의 실행 로드맵으로 통합해 냈습니다.'
    },
    {
      id: 'd30-v10',
      word: 'bridge theory and practice',
      phonetic: '/brɪdʒ ˈθɪri ænd ˈpræktɪs/',
      pos: '동사구',
      cefr: 'c2',
      meaningKo: '이론과 실전을 매끄럽게 잇다, 배운 원리를 현장에 살아 숨 쉬게 적용하다',
      meaningEn: 'to connect conceptual frameworks smoothly with real-world execution',
      nuanceTipKo: '문법·어휘 지식을 실제 스피킹·협상 성과로 전환하는 30일 학습의 목표를 한마디로 요약하는 명품 표현입니다.',
      exampleEn: 'Active roleplay is the surest way to bridge theory and practice in language acquisition.',
      exampleKo: '능동적 롤플레이는 언어 습득에서 이론과 실전을 잇는 가장 확실한 길입니다.'
    },
    {
      id: 'd30-v11',
      word: 'win-win outcome',
      phonetic: '/ˌwɪn ˈwɪn ˈaʊtkʌm/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '상호 이익을 얻는 윈윈 결과',
      meaningEn: 'a resolution in which every participating party gains meaningful, durable value',
      nuanceTipKo: '제로섬 흥정(zero-sum haggling)과 대조되는 글로벌 협상의 궁극적 지향점입니다.',
      exampleEn: 'Sharing risk transparently across both teams unlocked a genuine win-win outcome.',
      exampleKo: '양 팀이 리스크를 투명하게 분담하자 진정한 윈윈 결과가 열렸습니다.'
    },
    {
      id: 'd30-v12',
      word: 'poise',
      phonetic: '/pɔɪz/',
      pos: '명사',
      cefr: 'c2',
      meaningKo: '침착하고 우아한 태도, 압박 속에서도 흔들리지 않는 품격과 평정심',
      meaningEn: 'graceful composure, self-assurance, and balanced calm under pressure',
      nuanceTipKo: 'confidence(자신감)에 우아한 절제와 평정심까지 더한 최고급 C2 명사입니다. with quiet poise(차분한 품격으로).',
      exampleEn: 'Handling an unexpected technical glitch with poise earned her instant credibility.',
      exampleKo: '예기치 못한 기술 오류를 침착한 품격으로 넘긴 덕분에 그녀는 즉각적인 신뢰를 얻었습니다.'
    },
    {
      id: 'd30-v13',
      word: 'milestone',
      phonetic: '/ˈmaɪlstoʊn/',
      pos: '명사',
      cefr: 'c1',
      meaningKo: '이정표, 여정에서 성취를 확인하는 중대한 전환점',
      meaningEn: 'a significant achievement or turning point marking clear progress along a journey',
      nuanceTipKo: '프로젝트 단계(project milestone)와 개인 성장의 성취(graduation milestone) 모두에 쓰이는 핵심 어휘입니다.',
      exampleEn: 'Completing thirty consecutive days of active output is a milestone worth celebrating.',
      exampleKo: '30일 연속 능동적 발화 훈련을 완주한 것은 축하할 만한 값진 이정표입니다.'
    },
    {
      id: 'd30-v14',
      word: 'compound effect',
      phonetic: '/ˈkɑːmpaʊnd ɪˈfekt/',
      pos: '명사구',
      cefr: 'c2',
      meaningKo: '복리 효과 (작은 습관이 매일 누적되어 폭발적인 실력 격차를 만드는 현상)',
      meaningEn: 'the exponential payoff generated when small, consistent habits accumulate over time',
      nuanceTipKo: '금융의 복리(compound interest)를 학습·커리어 성장에 확장한 C2 핵심 표현입니다.',
      exampleEn: 'Fifteen minutes of deliberate shadowing a day creates an extraordinary compound effect.',
      exampleKo: '하루 15분의 의도적 쉐도잉은 놀라운 복리 효과를 만들어 냅니다.'
    },
    {
      id: 'd30-v15',
      word: 'fluency under pressure',
      phonetic: '/ˈfluːənsi ˈʌndər ˈpreʃər/',
      pos: '명사구',
      cefr: 'c2',
      meaningKo: '압박 속 유창성 (긴장되는 면접·협상·돌발 질문에서도 무너지지 않는 실전 영어력)',
      meaningEn: 'the ability to think, listen, and communicate persuasively even in high-stakes, stressful moments',
      nuanceTipKo: '조용한 방에서 외운 문장이 아니라, 실시간 압박 상황에서도 무너지지 않는 진정한 졸업 기준입니다.',
      exampleEn: 'Timed drills and simulated Q&A are what ultimately forge true fluency under pressure.',
      exampleKo: '시간제한 드릴과 실전 모의 질의응답이야말로 궁극적으로 압박 속 진정한 유창성을 단련합니다.'
    }
  ],
  dialogue: [
    {
      id: 'd30-t01',
      speaker: 'Marcus',
      roleLabel: '글로벌 서밋 모더레이터',
      voicePitch: 0.91,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english:
        'Jiwon, welcome to the executive review panel! Before we dive into your Asia-Pacific proposal, how has your week in London been treating you?',
      slashBroken:
        'Jiwon, / welcome to the executive review panel! / Before we dive into your Asia-Pacific proposal, / how has your week in London / been treating you?',
      korean:
        '지원 님, 임원 리뷰 패널에 오신 걸 환영합니다! 아시아태평양 제안서로 들어가기 전에, 이번 주 런던 일정은 어떠셨나요?',
      keyHighlight: 'how has your week ~ been treating you?',
      noteKo: 'A2–B1 스몰토크의 따뜻한 오프닝에서 시작해 곧바로 C2 임원 설득으로 넘어가는 레지스터 전환의 실전 무대입니다.'
    },
    {
      id: 'd30-t02',
      speaker: 'Jiwon',
      roleLabel: '30일 마스터 졸업생 · 글로벌 전략 리드',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-right',
      english:
        'Wonderful, Marcus—I even stopped by a tiny neighborhood roastery on my way over this morning to clear my head. That said, I’m eager to walk you through how we can turn our regional pilot into a shared win-win outcome.',
      slashBroken:
        'Wonderful, Marcus— / I even stopped by a tiny neighborhood roastery / on my way over this morning / to clear my head. / That said, / I’m eager to walk you through / how we can turn our regional pilot / into a shared win-win outcome.',
      korean:
        '정말 좋았어요, 마커스. 오늘 아침 오는 길에도 머리 좀 식히려고 동네 작은 로스터리에 잠깐 들렀거든요. 그럼 본론으로 들어가서, 지역 파일럿을 어떻게 공동의 윈윈 성과로 바꿀 수 있을지 안내해 드리겠습니다.',
      keyHighlight: 'stopped by ~ on my way ~ clear my head (Week 1) → walk you through ~ win-win outcome (Week 4–5)',
      noteKo: 'Day 1의 stop by/on my way와 Day 5의 clear my head로 따뜻한 라포를 연 직후, That said로 단숨에 임원 발표 레지스터로 전환했습니다!'
    },
    {
      id: 'd30-t03',
      speaker: 'Rachel',
      roleLabel: '글로벌 CFO · 패널 심사위원',
      voicePitch: 1.02,
      sceneImage: 'assets/scene_media_podcast.jpg',
      cameraMotion: 'pan-left',
      english:
        'Compelling as your growth slide looks, Jiwon, let me play devil’s advocate: our engineering bandwidth is already tight, and we can ill afford to stretch the team too thin before Q4.',
      slashBroken:
        'Compelling as your growth slide looks, Jiwon, / let me play devil’s advocate: / our engineering bandwidth is already tight, / and we can ill afford / to stretch the team too thin / before Q4.',
      korean:
        '성장 슬라이드가 아무리 설득력 있어 보이더라도 지원 님, 잠시 반대 입장에서 짚어볼게요. 엔지니어링 여력이 이미 빠듯해서 4분기 전에 팀을 무리하게 소진할 여유가 도저히 없습니다.',
      keyHighlight: 'Compelling as ~ play devil’s advocate ~ can ill afford to stretch ~ too thin',
      noteKo: 'Week 3(bandwidth/tight), Week 5 Day 26(can ill afford/stretch too thin), Day 29(Compelling as/devil’s advocate)가 응축된 고난도 압박 질문입니다.'
    },
    {
      id: 'd30-t04',
      speaker: 'Jiwon',
      roleLabel: '30일 마스터 졸업생 · 글로벌 전략 리드',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english:
        'You hit the nail on the head, Rachel—it sounds like protecting core engineering from burnout is your top priority. Had we launched all five markets at once last quarter, we would have paid a heavy price.',
      slashBroken:
        'You hit the nail on the head, Rachel— / it sounds like protecting core engineering from burnout / is your top priority. / Had we launched all five markets at once last quarter, / we would have paid a heavy price.',
      korean:
        '정곡을 찌르셨어요, 레이철—핵심 엔지니어링 팀을 번아웃으로부터 지키는 것이 최우선 과제이신 것처럼 들리네요. 지난 분기에 다섯 시장을 한꺼번에 출시했더라면 큰 대가를 치렀을 겁니다.',
      keyHighlight: 'hit the nail on the head + It sounds like (Tactical Empathy) + Had we launched (도치 가정법)',
      noteKo: '압박 질문을 전술적 공감(It sounds like)으로 무장해제하고, Week 4의 과거 가정법 도치(Had we launched ~ would have)로 리스크 인식을 입증했습니다!'
    },
    {
      id: 'd30-t05',
      speaker: 'Jiwon',
      roleLabel: '30일 마스터 졸업생 · 글로벌 전략 리드',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-right',
      english:
        'That is precisely why we reframed the rollout: rather than expanding at the expense of team resilience, AI automation streamlines localization while a phased Seoul-Singapore launch anchors our value proposition, albeit with one clear caveat on QA gates.',
      slashBroken:
        'That is precisely why / we reframed the rollout: / rather than expanding at the expense of team resilience, / AI automation streamlines localization / while a phased Seoul-Singapore launch / anchors our value proposition, / albeit with one clear caveat on QA gates.',
      korean:
        '바로 그래서 출시 계획을 재구성했습니다. 팀의 회복 탄력성을 희생하며 확장하는 대신, AI 자동화가 현지화를 간소화하고 서울·싱가포르 단계적 출시가 가치 제안을 단단히 뒷받침합니다—물론 QA 검증 관문에 대한 명확한 단서를 전제로요.',
      keyHighlight: 'reframed ~ at the expense of ~ streamlines ~ anchors our value proposition ~ albeit with one clear caveat',
      noteKo: 'Day 25~29의 핵심 C1–C2 무기를 단 한 호흡의 유려한 설득 구조로 통합한 마스터피스 발언입니다.'
    },
    {
      id: 'd30-t06',
      speaker: 'Rachel',
      roleLabel: '글로벌 CFO · 패널 심사위원',
      voicePitch: 1.02,
      sceneImage: 'assets/scene_media_podcast.jpg',
      cameraMotion: 'pan-left',
      english:
        'That actually resonates deeply with what the board wants to see. How can we align our Q3 budget milestones so your squad can move forward without running on empty?',
      slashBroken:
        'That actually resonates deeply / with what the board wants to see. / How can we align our Q3 budget milestones / so your squad can move forward / without running on empty?',
      korean:
        '그 접근은 이사회가 보고 싶어 하는 방향과 정말 깊이 통하네요. 팀이 소진되지 않으면서 전진할 수 있도록 3분기 예산 마일스톤을 어떻게 맞추면 좋을까요?',
      keyHighlight: 'resonates deeply with ~ align milestones ~ without running on empty',
      noteKo: '까다롭던 CFO가 방어심을 풀고 스스로 협력 질문("How can we align ~?")을 던지는 완벽한 설득 전환점입니다.'
    },
    {
      id: 'd30-t07',
      speaker: 'Jiwon',
      roleLabel: '30일 마스터 졸업생 · 글로벌 전략 리드',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english:
        'Not only can we lock in those milestones by EOD Friday, we will keep every stakeholder in the loop weekly. If we green-light Phase One today, we turn a cautious pilot into our strongest growth engine this year.',
      slashBroken:
        'Not only can we lock in those milestones by EOD Friday, / we will keep every stakeholder in the loop weekly. / If we green-light Phase One today, / we turn a cautious pilot / into our strongest growth engine this year.',
      korean:
        '금요일 퇴근 전까지 그 마일스톤을 확정할 수 있을 뿐 아니라, 모든 이해관계자께 매주 진행 상황을 공유드리겠습니다. 오늘 1단계를 승인해 주시면, 신중한 파일럿을 올해 가장 강력한 성장 엔진으로 만들어 내겠습니다.',
      keyHighlight: 'Not only can we ~ by EOD Friday ~ keep in the loop ~ Call to Action',
      noteKo: 'Day 26 부정어 도치(Not only can we), Day 4/18 오피스 표현(by EOD Friday / keep in the loop / green-light), Day 30 Call to Action까지 30일 전 과정의 결정체입니다!'
    }
  ],
  grammarSections: [
    {
      title: '파이널 총정리 01 · A1→C2 6단계 문장 진화 매트릭스 & 레지스터 전환 마스터',
      coreFormula: 'A1 기본 어순(S+V+O) → B1–B2 구동사·완곡 조율 → C1 양보·가정법 도치 → C2 전술적 공감·수사적 프레이밍',
      wrongKonglish: 'I always use only big difficult words even in cafe, or only baby short words in boardroom.',
      rightNative:
        'Casual: "Let’s catch up over coffee!" → Business (B2): "I’ll wrap this up by EOD Friday." → Executive (C2): "Only by anchoring our ask in shared value can we forge a durable win-win outcome."',
      explanationKo:
        '지난 30일 동안 쌓아 올린 A1~C2 6단계는 계단처럼 아래를 버리고 올라가는 것이 아니라, 겹겹이 쌓이는 다층 무기입니다. 카페·만찬에서는 Week 1–2의 따뜻한 구동사(stop by, catch up, break bread)로 라포를 열고, 회의·협상·발표에서는 Week 3–5의 완곡 조율·도치·전술적 공감으로 논거를 장악하는 레지스터 전환(register shifting)이 진정한 C2 마스터의 기준입니다.',
      registerSpectrum: {
        casual: 'Thanks for hopping on! Let’s sort out the schedule so nobody gets burned out.',
        standard: 'While the timeline looks tight on our end, phasing the rollout keeps quality on track.',
        formal:
          'Far from conceding speed, anchoring a phased rollout in shared value safeguards both quality and team resilience.'
      }
    },
    {
      title: '파이널 총정리 02 · 한국인이 실전에서 무너지는 5대 결정적 어법 최종 방어선',
      coreFormula: '① on my way home (to X) / ② wrap it up by (until X) / ③ end up -ing / ④ Had we known ~ would have / ⑤ Not only + 도치 & Only by -ing + 도치',
      wrongKonglish: 'On my way to home, I ended up to work until Friday; if I knew earlier, I had fixed it, and not only it hurts time.',
      rightNative:
        'On my way home, I ended up finishing the deck by Friday; had I spotted the gap earlier, I would have flagged it—not only did the review save time, it built lasting trust.',
      explanationKo:
        '30일 파이널 졸업 시험 전 반드시 머릿속에 못 박아야 할 5대 철칙입니다. ① `home` 앞 `to` 금지 ② 마감 완료 시점은 `until`이 아닌 `by` + 대명사 목적어는 구동사 가운데(`wrap it up`) ③ `end up`·`make a habit of`·`Far from` 뒤는 반드시 동명사(-ing) ④ 과거 가정법 도치는 `Had S + p.p., S + would have p.p.` ⑤ `Not only`·`Rarely`·`Only by -ing` 문두 배치 시 주절 도치 필수!',
      registerSpectrum: {
        casual: 'I meant to leave early, but I ended up wrapping it up by seven on my way home.',
        standard: 'Had we aligned on priorities earlier, we would have avoided pushing the launch back.',
        formal:
          'Not only did early alignment prevent costly rework, but only by sustaining clear boundaries can teams deliver consistently.'
      }
    },
    {
      title: '파이널 총정리 03 · TED 스타일 설득 피날레 3단 공식 (Reframe → Shared Value → Call to Action)',
      coreFormula: '① 전술적 공감·양보(It sounds like / Compelling as) → ② 공동 가치 재구성(Reframe around shared value) → ③ 구체적 행동 촉구(Call to Action)',
      wrongKonglish: 'Please give me budget because I want to succeed. Thank you for listening my presentation.',
      rightNative:
        'It sounds like mitigating Q4 risk is paramount; by reframing this budget into a phased pilot with clear QA caveats, we protect bandwidth while unlocking Asia-Pacific growth—let’s green-light Phase One today.',
      explanationKo:
        'TED 강연자 Kathryn Valentine이 강조하듯, 성공적인 협상가와 발표자는 "내가 원하는 것(my ask)"을 구걸하지 않습니다. 상대의 우려를 전술적 공감으로 먼저 수용한 뒤, 요청을 조직 전체의 공동 가치 제안(shared value proposition)으로 재구성하고, 기한이 선명한 행동 촉구(call to action)로 품격 있게(with poise) 마무리합니다.',
      registerSpectrum: {
        casual: 'If we try a small pilot first, both teams win—let’s kick it off Monday!',
        standard: 'Approving Phase One today protects team capacity while giving us early market data.',
        formal:
          'Anchoring this phased rollout in shared accountability turns a cautious pilot into a durable growth engine—let us green-light Phase One today.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd30-s01',
      drillType: 'konglish-fix',
      promptKo: '[Week 1 A1–A2 복습] "퇴근길에 카페에 잠깐 들렀어요." — 전치사·동사 오류가 없는 문장은?',
      promptEnHint: 'home 앞 전치사 to 금지와 stop by 구동사를 확인하세요!',
      targetEn: 'I stopped by a neighborhood cafe on my way home.',
      wrongKonglishOption: 'I visited stop a neighborhood cafe on my way to home.',
      explanationKo: 'on my way home(to 금지)과 stop by(잠깐 들르다)는 30일 여정의 첫 기본기입니다.'
    },
    {
      id: 'd30-s02',
      drillType: 'active-blank',
      promptKo: '[Week 1–2 A2–B1 복습] "일찍 자려고 했는데 결국 밤늦게까지 자료를 다듬게 됐어요."',
      promptEnHint: 'end up 뒤 동명사! polish의 -ing 형태(9글자)',
      targetEn: 'I meant to sleep early, but I ended up polishing the deck late at night.',
      blankData: {
        before: 'I meant to sleep early, but I ended up',
        answer: 'polishing',
        after: 'the deck late at night.',
        firstLetterHint: 'p________ (9글자)'
      },
      explanationKo: 'mean to V(~하려 했다)와 end up -ing(결국 ~하게 되다)의 핵심 대비 구조입니다.'
    },
    {
      id: 'd30-s03',
      drillType: 'konglish-fix',
      promptKo: '[Week 3 B2 복습] "금요일 퇴근 전까지 그것을 마무리해서 진행 상황을 계속 공유드릴게요."',
      promptEnHint: '대명사 어순(wrap it up)과 마감 전치사(by)를 확인하세요!',
      targetEn: "I'll wrap it up by EOD Friday and keep you in the loop.",
      wrongKonglishOption: "I'll wrap up it until EOD Friday and share you.",
      explanationKo: '대명사 it은 반드시 구동사 사이(wrap it up)에, 마감 완료 시점은 by를 씁니다.'
    },
    {
      id: 'd30-s04',
      drillType: 'chunk-build',
      promptKo: '[Week 4 C1 복습] "초기 범위를 미리 알았더라면 훨씬 빠르게 조율했을 텐데요." (과거 가정법 도치)',
      promptEnHint: 'If 생략 도치 Had we known으로 시작해 조립하세요!',
      targetEn: 'Had we known the initial scope earlier, we would have aligned much faster.',
      chunks: ['Had we known', 'the initial scope earlier,', 'we would have aligned', 'much faster.'],
      explanationKo: 'Had + S + p.p., S + would have p.p. 과거 가정법 도치는 C1 리스크 회고의 필수 무기입니다.'
    },
    {
      id: 'd30-s05',
      drillType: 'active-blank',
      promptKo: '[Week 5 Day 25 복습] "정책 입안자들은 혁신과 근로자 보호 사이에서 균형을 잡아야 합니다."',
      promptEnHint: '균형을 잡다 연어: ______ a balance (6글자)',
      targetEn: 'Policymakers must strike a balance between innovation and worker protection.',
      blankData: {
        before: 'Policymakers must',
        answer: 'strike',
        after: 'a balance between innovation and worker protection.',
        firstLetterHint: 's_____ (6글자)'
      },
      explanationKo: 'make a balance 대신 strike a balance between A and B를 씁니다.'
    },
    {
      id: 'd30-s06',
      drillType: 'chunk-build',
      promptKo: '[Week 5 Day 26 복습] "만성 번아웃은 건강을 해칠 뿐 아니라 조직의 회복 탄력성도 약화시킵니다."',
      promptEnHint: 'Not only does 도치 어순으로 조립하세요!',
      targetEn: 'Not only does chronic burnout harm health, it also undermines organizational resilience.',
      chunks: [
        'Not only does chronic burnout',
        'harm health,',
        'it also undermines',
        'organizational resilience.'
      ],
      explanationKo: 'Not only 문두 도치(does + 주어 + 동사원형)를 완벽히 체화합니다.'
    },
    {
      id: 'd30-s07',
      drillType: 'active-blank',
      promptKo: '[Week 5 Day 27 복습] "함께 식사를 나누며 능동적으로 경청하는 것이 깊은 유대감을 쌓아줍니다."',
      promptEnHint: '친밀한 신뢰 관계·라포(7글자, r로 시작, 끝 t 묵음)',
      targetEn: 'Breaking bread and practicing active listening builds genuine rapport.',
      blankData: {
        before: 'Breaking bread and practicing active listening builds genuine',
        answer: 'rapport',
        after: '.',
        firstLetterHint: 'r______ (7글자)'
      },
      explanationKo: 'build genuine rapport는 글로벌 교양·비즈니스 네트워킹의 핵심 목표입니다.'
    },
    {
      id: 'd30-s08',
      drillType: 'chunk-build',
      promptKo: '[Week 5 Day 28 복습] "오직 전술적 공감으로 방어심을 무장해제시킴으로써만 교착 상태를 깰 수 있습니다."',
      promptEnHint: 'Only by -ing 도치(can we)로 조립하세요!',
      targetEn: 'Only by disarming defensiveness through tactical empathy can we break a deadlock.',
      chunks: [
        'Only by disarming defensiveness',
        'through tactical empathy',
        'can we break',
        'a deadlock.'
      ],
      explanationKo: 'Only by -ing 문두 배치 시 주절 도치(can we break)가 필수입니다.'
    },
    {
      id: 'd30-s09',
      drillType: 'konglish-fix',
      promptKo: '[Week 5 Day 29 복습] "그 전략이 아무리 설득력 있어 보여도, 중요한 단서 하나를 짚어야 합니다."',
      promptEnHint: '형용사 문두 양보 도치(Compelling as ~)와 caveat을 확인하세요!',
      targetEn: 'Compelling as that strategy may appear, we must note one crucial caveat.',
      wrongKonglishOption: 'As compelling that strategy appears, we must say one important warning condition.',
      explanationKo: 'Compelling as + 주어 + 동사 어순과 명사 caveat으로 C2 품격을 완성합니다.'
    },
    {
      id: 'd30-s10',
      drillType: 'chunk-build',
      promptKo: '[Day 30 피날레] "개인의 요청을 공동 가치 제안으로 재구성하면 압박 속에서도 설득력을 얻습니다."',
      promptEnHint: 'Reframing ~ into a shared value proposition 구조를 조립하세요.',
      targetEn: 'Reframing your request into a shared value proposition earns trust under pressure.',
      chunks: [
        'Reframing your request',
        'into a shared value proposition',
        'earns trust',
        'under pressure.'
      ],
      explanationKo: '동명사 주어(단수 동사 earns)와 TED 협상 핵심 공식(shared value proposition)의 결정판입니다.'
    }
  ],
  worksheetExam: [
    // Part 1: 7 items (A1 -> C2 progression)
    {
      id: 'd30-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[A1–A2] 동선 구동사 & 전치사',
      questionKo: '빈칸에 알맞은 전치사(1단어)를 넣어 "집으로 돌아가는 길에 약국에 잠깐 들렀다"를 완성하세요.',
      stimulusEn: 'I stopped __________ a pharmacy on my way home to pick up cold medicine.',
      answer: 'by',
      explanationKo: 'stop by + 장소는 "지나가는 길에 잠깐 들르다"라는 Week 1 필수 구동사입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "일찍 퇴근하려 했는데 결국 보고서를 끝내게 됐다"에서 괄호 안 finish를 알맞게 변형하세요.',
        stimulusEn: 'I meant to leave at six, but I ended up __________ (finish) the quarterly report.',
        answer: 'finishing',
        explanationKo: 'end up 뒤에는 반드시 동명사(finishing)가 옵니다.'
      }
    },
    {
      id: 'd30-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[B1] 일정 조율 & 마감 표현',
      questionKo: '빈칸에 알맞은 전치사(1단어)를 넣어 "금요일 퇴근 전(마감 시점)까지 초안을 완료하겠다"를 완성하세요.',
      stimulusEn: 'Our team will wrap up the final proposal __________ EOD Friday.',
      answer: 'by',
      explanationKo: '단발성 완료 마감 기한은 계속 지속을 뜻하는 until이 아니라 by를 사용합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "제 쪽 일정이 좀 빠듯하네요"에서 t로 시작하는 형용사(1단어)를 쓰세요.',
        stimulusEn: 'Thursday morning looks a bit __________ on my end—could we meet at 3 PM instead?',
        answer: 'tight',
        explanationKo: '일정이 빠듯할 때는 ambiguous가 아니라 tight on my end를 씁니다.'
      }
    },
    {
      id: 'd30-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[B2] 오피스 협업 이디엄',
      questionKo: '빈칸에 알맞은 명사(1단어)를 넣어 "진행 상황을 계속 공유해 드리다"를 완성하세요.',
      stimulusEn: 'I will keep all regional stakeholders in the __________ as testing progresses.',
      answer: 'loop',
      explanationKo: 'keep someone in the loop는 정보를 빠뜨리지 않고 계속 공유한다는 Week 3 핵심 비즈니스 이디엄입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "팀의 업무 여력·수용 용량"을 뜻하는 b로 시작하는 명사(1단어)를 쓰세요.',
        stimulusEn: 'We do not have enough engineering __________ to absorb another rush request this sprint.',
        answer: 'bandwidth',
        explanationKo: 'bandwidth는 오피스 영어에서 시간·인력 여력을 가리키는 필수 어휘입니다.'
      }
    },
    {
      id: 'd30-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[C1] AI 시사 토론 연어',
      questionKo: '빈칸에 알맞은 동사(1단어)를 넣어 "AI는 인간의 판단을 대체하기보다 증강해야 한다"를 완성하세요.',
      stimulusEn: 'Ethical workplace tools should __________ human creativity rather than replace it.',
      answer: 'augment',
      explanationKo: 'augment는 기존 역량을 한층 보강·증강한다는 Day 25 핵심 동사입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "혁신과 고용 안정 사이의 균형을 맞추다" 연어에서 동사(1단어)를 쓰세요.',
        stimulusEn: 'Forward-looking regulations must __________ a balance between speed and safety.',
        answer: 'strike',
        explanationKo: 'strike a balance between A and B 연어입니다.'
      }
    },
    {
      id: 'd30-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[C1] 번아웃 & 문화 경청 연어',
      questionKo: '빈칸에 알맞은 명사(1단어)를 넣어 "상시 연결 문화가 수면과 집중력에 큰 타격을 입힌다"를 완성하세요.',
      stimulusEn: 'An always-on culture quietly takes a heavy __________ on deep cognitive recovery.',
      answer: 'toll',
      explanationKo: 'take a heavy toll on ~ 은 누적된 심각한 악영향을 미친다는 Day 26 핵심 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "상대의 이야기가 내 마음에 깊이 공명했다" 동사 과거형(1단어, r로 시작)을 쓰세요.',
        stimulusEn: 'Her candid story about culinary heritage deeply __________ with everyone at dinner.',
        answer: 'resonated',
        explanationKo: 'resonate with ~ (깊이 공명하다·와닿다) 표현입니다.'
      }
    },
    {
      id: 'd30-e06',
      number: 6,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[C2] 전술적 공감 & 수사 어휘',
      questionKo: '빈칸에 알맞은 동사(1단어, d로 시작)를 넣어 "감정 라벨링으로 상대의 방어심을 무장해제시키다"를 완성하세요.',
      stimulusEn: 'Calmly vocalizing your counterpart’s worries is the fastest way to __________ defensiveness.',
      answer: 'disarm',
      explanationKo: 'disarm defensiveness는 전술적 공감의 핵심 효과를 표현하는 Day 28 C2 연어입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "중요한 단서(주의사항) 하나를 전제로"에서 c로 시작하는 명사(1단어)를 쓰세요.',
        stimulusEn: 'I endorse the phased launch with one crucial __________ regarding compliance.',
        answer: 'caveat',
        explanationKo: 'caveat은 논리적 전제 조건과 단서를 뜻하는 Day 29 C2 명사입니다.'
      }
    },
    {
      id: 'd30-e07',
      number: 7,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[C2] 파이널 임원 설득 어휘',
      questionKo: '빈칸에 알맞은 명사(1단어, p로 시작)를 넣어 "예기치 못한 질문에도 차분한 품격과 평정심으로 대응하다"를 완성하세요.',
      stimulusEn: 'Answering skeptical board questions with quiet __________ instantly elevates your credibility.',
      answer: 'poise',
      explanationKo: 'poise는 압박 상황에서도 흐트러지지 않는 우아한 침착함과 품격을 뜻하는 Day 30 C2 핵심 명사입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "흩어진 다섯 가지 의견을 하나의 실행안으로 통합하다" 동사(1단어, s로 시작)를 쓰세요.',
        stimulusEn: 'Great moderators can quickly __________ conflicting opinions into a clear roadmap.',
        answer: 'synthesize',
        explanationKo: 'synthesize는 다양한 관점과 데이터를 통합해 명쾌한 통찰로 엮어낸다는 C1–C2 동사입니다.'
      }
    },
    // Part 2: 7 items (A1 -> C2 comprehensive grammar & nuance MCQ)
    {
      id: 'd30-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[A2–B1] 구동사 목적어 어순 & 콩글리시 교정',
      questionKo: '다음 중 어법과 원어민 연어가 **모두 완벽한** 문장은?',
      stimulusEn: 'Week 1~2 핵심 어순·전치사·콩글리시 규칙을 점검하세요.',
      options: [
        "I'll wrap it up by 5 PM and go for a walk to clear my head.",
        "I'll wrap up it until 5 PM and do healing by the river.",
        'On my way to home, I ended up to buy two coffees.',
        'What I love most are walking after a much hectic day.'
      ],
      answer: "I'll wrap it up by 5 PM and go for a walk to clear my head.",
      explanationKo: 'wrap it up(대명사 가운데), by 5 PM(마감), go for a walk, clear my head 모두 완벽합니다. 나머지 보기는 wrap up it/until/do healing/to home/ended up to/What절 복수동사 오류가 있습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "힐링하다" 콩글리시 대신 "긴장과 피로를 풀다"를 뜻하는 u로 시작하는 동사(1단어)를 쓰세요.',
        stimulusEn: 'Listening to acoustic jazz is my go-to way to __________ after a hectic week.',
        answer: 'unwind',
        explanationKo: 'unwind는 하루의 긴장과 피로를 푼다는 세련된 원어민 동사입니다.'
      }
    },
    {
      id: 'd30-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[B2] 완곡한 회의 반론 & 레지스터 선택',
      questionKo: '글로벌 임원 회의에서 동료 제안의 리스크를 정중하면서도 프로페셔널하게 짚어내는 최고의 표현은?',
      stimulusEn: 'B2–C1 오피스 매너와 레지스터 적절성을 기준으로 고르세요.',
      options: [
        'I see the appeal of launching early; that said, have we considered the QA bottleneck it could trigger?',
        'Your idea is completely unrealistic and makes zero sense for Q4.',
        'I totally disagree with you because we cannot do it.',
        'Maybe your plan is bad, so let’s just postpone it forever.'
      ],
      answer: 'I see the appeal of launching early; that said, have we considered the QA bottleneck it could trigger?',
      explanationKo: '상대 아이디어의 장점을 인정(I see the appeal)한 뒤 완곡한 전환(that said)과 열린 질문(have we considered ~)으로 반론하는 것이 글로벌 오피스 정석입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 격식 동사 postpone을 자연스러운 구어체 구동사(2단어: put ___)로 바꾸세요.',
        stimulusEn: 'We may have to __________ __________ the regional launch until testing concludes.',
        answer: 'put off',
        explanationKo: 'postpone(격식) ↔ put off(자연스러운 구동사) 레지스터 대응입니다.'
      }
    },
    {
      id: 'd30-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[C1] 과거 가정법 도치(Inverted Third Conditional)',
      questionKo: '다음 빈칸에 들어가 "사전에 현지 규제를 검토했더라면 출시 지연을 피했을 텐데"를 완성하는 가장 정확한 어법은?',
      stimulusEn:
        '____________________ local regulations earlier, we would have avoided the six-week delay.',
      options: ['Had we reviewed', 'If we would review', 'Were we reviewed', 'Have we reviewed'],
      answer: 'Had we reviewed',
      explanationKo: '과거 사실의 반대 가정(If we had reviewed ~, we would have avoided ~)에서 If를 생략하면 Had we reviewed로 도치됩니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 3차 가정법 주절: 괄호 안 avoid를 알맞은 완료형(3단어: would have avoided)으로 완성하세요.',
        stimulusEn: 'Had they set clearer boundaries, they ____________________ (avoid) severe burnout.',
        answer: 'would have avoided',
        explanationKo: 'Had + S + p.p., S + would have + p.p. 시제 호응입니다.'
      }
    },
    {
      id: 'd30-e11',
      number: 11,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[C1] 부정어 도치 & 시급성 가정법',
      questionKo: '다음 중 고급 문법(도치·가정법)이 **오류 없이** 정확히 적용된 문장은?',
      stimulusEn: 'Day 26 핵심 문법 규칙을 정밀하게 확인하세요.',
      options: [
        'Not only does chronic stress drain focus, it also erodes team trust.',
        'Rarely professionals notice cognitive overload until they collapse.',
        'It is high time our industry stops glorifying late-night emails.',
        'Not only constant pings harm sleep, they also hurt morale.'
      ],
      answer: 'Not only does chronic stress drain focus, it also erodes team trust.',
      explanationKo: 'Not only does + 단수 주어 + 동사원형 도치가 완벽합니다. 나머지는 Rarely do professionals, stopped(과거형), Not only do constant pings가 되어야 맞습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "우리 조직이 과로 미화를 진작 멈췄어야 할 때다"에서 괄호 안 stop의 바른 형태(1단어)를 쓰세요.',
        stimulusEn: 'It is high time our organization __________ (stop) glorifying overwork.',
        answer: 'stopped',
        explanationKo: 'It is high time + 주어 + 과거동사(stopped) 규칙입니다.'
      }
    },
    {
      id: 'd30-e12',
      number: 12,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[C1–C2] 능동적 경청 & 전술적 공감 화법',
      questionKo: '협상 상대가 "예산이 동결되어 30% 할인이 안 되면 계약을 접겠다"며 압박할 때, 전술적 공감과 조율된 질문을 가장 완벽하게 결합한 응답은?',
      stimulusEn: '방어심을 무장해제하고 공동 문제 해결로 이끄는 C2 응답을 고르세요.',
      options: [
        'It sounds like the budget freeze puts you in a tough spot—how am I supposed to maintain full security coverage if we cut the fee by 30 percent?',
        'Why did your CFO freeze the budget without informing us first? That is unfair.',
        'I think you are being overly emotional, so let’s just split the difference at 15 percent.',
        'No, our price is final; take it or leave it before Friday.'
      ],
      answer: 'It sounds like the budget freeze puts you in a tough spot—how am I supposed to maintain full security coverage if we cut the fee by 30 percent?',
      explanationKo: '감정 라벨링(It sounds like ~)으로 방어심을 녹인 직후 조율된 질문(How am I supposed to ~?)으로 상대가 현실적 대안을 고민하게 만드는 Day 28 최고급 공식입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "단순히 반반 타협하다" 관용구(3단어)를 빈칸에 채우세요.',
        stimulusEn: 'Creative trade-offs beat lazily trying to ____________________.',
        answer: 'split the difference',
        explanationKo: 'split the difference 관용구입니다.'
      }
    },
    {
      id: 'd30-e13',
      number: 13,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[C2] 형용사 문두 양보 도치 & albeit 제약',
      questionKo: '다음 빈칸 (A)와 (B)에 들어갈 표현이 어법상 모두 올바르게 짝지어진 것은?',
      stimulusEn:
        '__________(A)__________ the pilot looks on paper, scaling across Asia will take discipline, __________(B)__________ steadily.',
      options: [
        '(A) Compelling as — (B) albeit',
        '(A) As compelling — (B) albeit it moves',
        '(A) Compelling although — (B) despite',
        '(A) Though compelling — (B) whereas'
      ],
      answer: '(A) Compelling as — (B) albeit',
      explanationKo: '(A)는 형용사 문두 양보 도치(Compelling as + 주어 + 동사), (B)는 부사(steadily)만 간결히 받는 albeit이 완벽합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "결국 본질적으로 ~로 귀결되다" 구동사에서 빈칸(2단어: boils down)을 채우세요.',
        stimulusEn: 'Fluency under pressure ultimately __________ __________ to deliberate daily practice.',
        answer: 'boils down',
        explanationKo: 'boil down to ~ 표현입니다.'
      }
    },
    {
      id: 'd30-e14',
      number: 14,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[C2] TED 설득 프레임 & 공동 가치 제안',
      questionKo: '임원진에게 신규 프로젝트 승인을 요청할 때, TED 스타일의 "공동 가치 제안(Shared Value Proposition) + 행동 촉구(Call to Action)"를 가장 훌륭히 구현한 마무리 멘트는?',
      stimulusEn: '개인적 요구를 조직 전체의 이익으로 재구성한 C2 피날레를 고르세요.',
      options: [
        'Green-lighting Phase One today protects engineering bandwidth while unlocking Asia-Pacific growth—let us lock in the kickoff date before we adjourn.',
        'I really worked hard on these slides, so please approve my budget so I can get promoted.',
        'Anyway, that is the end of my deck. Thank you very much for listening to my speech.',
        'If you reject this plan today, our whole company will become completely obsolete tomorrow.'
      ],
      answer: 'Green-lighting Phase One today protects engineering bandwidth while unlocking Asia-Pacific growth—let us lock in the kickoff date before we adjourn.',
      explanationKo: '이해관계자의 우려 해소(protects bandwidth) + 공동 성장 가치(unlocking growth) + 명확한 행동 촉구(lock in the kickoff date) 3박자가 완벽합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "팀과 가치를 당당히 대변·옹호하다" 동사구(2단어: advocate ___)를 채우세요.',
        stimulusEn: 'Confident leaders __________ __________ what matters without burning bridges.',
        answer: 'advocate for',
        explanationKo: 'advocate for ~ 는 자신의 팀이나 핵심 가치를 설득력 있게 옹호한다는 C1–C2 표현입니다.'
      }
    },
    // Part 3: 6 items (C1-C2 integrated writing & full mastery synthesis)
    {
      id: 'd30-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Week 5 C1] While 양보절 + at the expense of 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 균형 잡힌 시사 논증 문장을 완성하세요.',
      stimulusEn: '[ human trust. / While automation / it must not come / streamlines workflows, / at the expense of ]',
      answer: 'While automation streamlines workflows, it must not come at the expense of human trust.',
      explanationKo: 'While 양보절(장점 인정) + 주절(must not come at the expense of ~)로 균형 논증을 완성합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "성장은 팀의 회복 탄력성을 희생시키며 와서는 안 된다." (Growth / should not come / at the expense of / team resilience.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Growth should not come at the expense of team resilience.',
        explanationKo: 'come at the expense of N 구조를 정착시킵니다.'
      }
    },
    {
      id: 'd30-e16',
      number: 16,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Week 5 C2] Only by -ing 문두 도치 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 전술적 공감 도치 문장을 완성하세요.',
      stimulusEn: '[ a durable win-win outcome. / Only by / can we forge / reframing the ask around shared value ]',
      answer: 'Only by reframing the ask around shared value can we forge a durable win-win outcome.',
      explanationKo: 'Only by + 동명사구 + 도치 주절(can we forge ~) 어순이 핵심입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "오직 깊이 경청함으로써만 우리는 문화적 간극을 좁힐 수 있다." (Only by / listening deeply / can we bridge / the cultural divide.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Only by listening deeply can we bridge the cultural divide.',
        explanationKo: 'Only by -ing + can we 도치 어순을 복습합니다.'
      }
    },
    {
      id: 'd30-e17',
      number: 17,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Week 4–5 C1–C2] 과거 가정법 도치 통문장 영작',
      questionKo: '우리말 뜻에 맞게 Had we ~ 도치 가정법으로 완성하세요.',
      stimulusEn:
        '우리말: 우리가 일찍 경계를 설정했더라면, 팀 전체가 번아웃을 피했을 텐데요.\n(힌트: Had we set / clearer boundaries earlier, / the whole team / would have avoided burnout.)',
      answer: 'Had we set clearer boundaries earlier, the whole team would have avoided burnout.',
      explanationKo: 'Week 4의 도치 가정법(Had we set)과 Week 5의 번아웃 어휘(clearer boundaries, burnout)를 통합한 실전 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "우리가 이면의 동기를 미리 알았더라면 훨씬 빠르게 합의했을 텐데." (Had we known / their underlying motive, / we would have agreed / much faster.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Had we known their underlying motive, we would have agreed much faster.',
        explanationKo: 'Had we known ~ would have p.p. 도치 가정법을 완벽히 구사합니다.'
      }
    },
    {
      id: 'd30-e18',
      number: 18,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[A1~C2 통합] 복합 오류 종합 교정 서술형',
      questionKo: '다음 문장에 숨어 있는 A2~C2 핵심 오류 3곳(make a balance, Not only ~ hurts, albeit it is)을 모두 고쳐 완벽한 문장으로 쓰세요.',
      stimulusEn:
        '오류 문장: We must make a balance because not only burnout hurts focus, it also erodes trust, albeit it is gradually.',
      answer:
        'We must strike a balance because not only does burnout hurt focus, it also erodes trust, albeit gradually.',
      acceptableAlt: [
        'We must find a balance because not only does burnout hurt focus, it also erodes trust, albeit gradually.'
      ],
      explanationKo: '① make a balance → strike a balance ② not only burnout hurts → not only does burnout hurt (도치!) ③ albeit it is gradually → albeit gradually(주어+동사 제거!).',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: Far from be weak, only by listening closely we can command the room. (2곳 교정)',
        stimulusEn: '바른 문장 전체를 작성하세요.',
        answer: 'Far from being weak, only by listening closely can we command the room.',
        explanationKo: 'Far from being + Only by -ing can we 두 가지 C2 필수 규칙을 동시 교정합니다.'
      }
    },
    {
      id: 'd30-e19',
      number: 19,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Week 5 C2] 형용사 문두 양보 도치 통문장 영작',
      questionKo: '우리말 뜻에 맞게 Compelling as ~ 도치 구문과 caveat을 활용하여 영작하세요.',
      stimulusEn:
        '우리말: 그 제안이 아무리 설득력 있어 보이더라도, 우리는 한 가지 중요한 단서를 짚고 넘어가야 합니다.\n(힌트: Compelling as / the proposal may appear, / we must address / one crucial caveat.)',
      answer: 'Compelling as the proposal may appear, we must address one crucial caveat.',
      acceptableAlt: [
        'Compelling as the proposal appears, we must address one crucial caveat.',
        'Compelling though the proposal may appear, we must address one crucial caveat.'
      ],
      explanationKo: '형용사 문두 양보 도치(Compelling as ~)와 C2 명사 caveat으로 논설·임원 보고의 품격을 완성합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 졸업 이정표가 아무리 벅차더라도, 유창성은 살아 숨 쉬는 실천이다." (Compelling as / this milestone feels, / fluency is / a living practice.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Compelling as this milestone feels, fluency is a living practice.',
        explanationKo: 'Compelling as + S + V 양보 도치를 적용합니다.'
      }
    },
    {
      id: 'd30-e20',
      number: 20,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Day 30 파이널 피날레] 30일 졸업 종합 에세이 문장 영작',
      questionKo: '우리말 뜻에 맞게 Far from being과 compound effect를 활용하여 30일 마스터 졸업 문장을 완성하세요.',
      stimulusEn:
        '우리말: 하룻밤의 기적과는 거리가 멀게, 압박 속 진정한 유창성은 꾸준한 매일의 훈련이 만든 복리 효과입니다.\n(힌트: Far from being / an overnight miracle, / true fluency under pressure / is the compound effect of / daily practice.)',
      answer:
        'Far from being an overnight miracle, true fluency under pressure is the compound effect of daily practice.',
      acceptableAlt: [
        'Far from being an overnight miracle, true fluency under pressure is the compound effect of consistent daily practice.'
      ],
      explanationKo: '30일 완성 코스의 마지막 20번 문항! Far from being A, B is the compound effect of C로 C2 졸업 마침표를 완벽하게 찍었습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "진정한 마스터리는 일상적 온기에서 임원급 설득으로 매끄럽게 전환하는 것이다." (True mastery is / shifting seamlessly / from everyday warmth / to executive persuasion.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'True mastery is shifting seamlessly from everyday warmth to executive persuasion.',
        explanationKo: 'register shifting 철학을 한 문장으로 깔끔하게 영작합니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      'Congratulations on reaching Day 30! For your graduation capstone, deliver a 3–4 sentence executive speech or personal reflection explaining how your English journey—or a project you care about—turns daily discipline into lasting impact. Try blending at least one C1–C2 structure (While / Had I / Not only / Compelling as / Far from being).',
    openingQuestionKo:
      'Day 30 졸업 무대에 오르신 것을 진심으로 축하합니다! 파이널 캡스톤으로 지난 30일의 영어 성장기 또는 본인이 열정을 쏟는 프로젝트를 주제로, C1–C2 고급 구조(While / Had I / Not only / Compelling as / Far from being)를 1개 이상 녹여 3~4문장 파이널 스피치를 발표해 보세요.',
    followUpQuestionEn:
      'What a poised, memorable speech! To wrap up like a true TED speaker, give me one crisp closing Call to Action—what is the very next real-world conversation, presentation, or milestone you are going to command in English?',
    followUpQuestionKo:
      '품격 있고 인상 깊은 스피치였어요! 진정한 TED 연사처럼 마무리하기 위해, 앞으로 영어로 당당히 주도해 나갈 다음 실전 대화·발표·이정표를 선명한 한 문장 행동 촉구(Call to Action)로 선언해 주세요!',
    recommendedChunks: [
      'Far from being ~,',
      'the compound effect of',
      'register shifting',
      'reframe the ask around shared value',
      'Not only did ~, it also ...',
      'fluency under pressure'
    ],
    modelAnswerEn:
      'Far from being an overnight leap, achieving fluency under pressure has been the compound effect of thirty days of deliberate active output. Not only did these daily drills help me ditch stiff Konglish and master register shifting, they also taught me to disarm tough conversations with tactical empathy and reframe requests around shared value. Walking into next week’s global partner summit with quiet poise, my call to action is simple: listen deeply, anchor every argument in mutual trust, and command the room.'
  }
};
