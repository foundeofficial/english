import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day26Module: DayLessonModule = {
  dayNumber: 26,
  weekNumber: 5,
  cefrLevel: 'c1',
  dayBadge: 'DAY 26 · 번아웃·워라밸 심층 인터뷰 독해',
  categoryLabel: 'C1 심리·사회 칼럼 · 경계 설정 & 지속 가능한 집중',
  title: '번아웃·워라밸·현대인의 스트레스 심층 인터뷰 독해',
  subtitle:
    '항상 연결된 시대(always-on culture) 속 인지 과부하를 진단하고, 경계 설정(set boundaries)과 회복 탄력성(resilience)을 논리적으로 표현하는 법',
  heroImage: 'assets/scene_media_podcast.jpg',
  secondaryImage: 'assets/scene_late_office.jpg',
  estimatedSprintMin: 9,
  estimatedLectureMin: 45,
  keyExpression:
    "Setting clear boundaries isn't selfish—it's the only sustainable way to keep burnout at bay.",
  keySentenceByTier: {
    a1: 'I work too much, so I need to take a short break.',
    a2: 'Checking work messages late at night makes me feel stressed and tired.',
    b1: 'If I do not set clear boundaries after work, I quickly start feeling burned out.',
    b2: 'Constant notifications take a toll on my focus, so I try to unplug and take a breather every evening.',
    c1: 'Setting clear boundaries is not a sign of disengagement—it is the only sustainable way to keep chronic burnout at bay.',
    c2: 'Rarely do we realize how severely an always-on culture erodes our cognitive bandwidth until we are already running on empty.'
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[26],
  readingPassage: {
    titleEn: 'Always Connected, Rarely Rested: The Anatomy of Modern Burnout',
    titleKo: '늘 연결되어 있지만 좀처럼 쉬지 못하는 시대: 현대 번아웃의 해부',
    genreBadge: '심층 인터뷰 피처 · Psychology & Work Culture',
    estimatedMin: 6,
    paragraphsEn: [
      'A decade ago, leaving the office physically meant leaving work behind. Today, thanks to smartphones and instant messaging, millions of professionals inhabit an always-on culture where a single late-night ping can hijack an entire evening. Organizational psychologists warn that burnout rarely stems from one brutal deadline alone; rather, it creeps up when micro-stressors accumulate without genuine psychological recovery, quietly taking a severe toll on sleep, creativity, and emotional regulation.',
      'What makes modern exhaustion particularly insidious is how often high achievers stretch themselves too thin out of self-inflicted pressure. Even when managers do not demand midnight replies, employees internalize the myth that glorifies overwork as devotion. Yet research consistently shows that cognitive overload destroys the very judgment organizations pay for: once a team starts running on empty, error rates climb while strategic thinking grinds to a halt.',
      'Not only does chronic stress harm individuals, it also undermines organizational resilience. Reversing the trend requires more than wellness slogans—it calls for leaders who visibly set boundaries, encourage staff to take a breather after intense sprints, and normalize unplugging after hours. In an economy driven by deep focus, deliberate rest is not an indulgence; it is the foundation of sustainable performance.'
    ],
    paragraphsSlash: [
      'A decade ago, / leaving the office physically / meant leaving work behind. / Today, thanks to smartphones and instant messaging, / millions of professionals inhabit an always-on culture / where a single late-night ping can hijack an entire evening. / Organizational psychologists warn / that burnout rarely stems from one brutal deadline alone; / rather, it creeps up / when micro-stressors accumulate / without genuine psychological recovery, / quietly taking a severe toll on sleep, creativity, and emotional regulation.',
      'What makes modern exhaustion particularly insidious / is how often high achievers stretch themselves too thin / out of self-inflicted pressure. / Even when managers do not demand midnight replies, / employees internalize the myth / that glorifies overwork as devotion. / Yet research consistently shows / that cognitive overload destroys / the very judgment organizations pay for: / once a team starts running on empty, / error rates climb / while strategic thinking grinds to a halt.',
      'Not only does chronic stress harm individuals, / it also undermines organizational resilience. / Reversing the trend requires more than wellness slogans— / it calls for leaders / who visibly set boundaries, / encourage staff to take a breather after intense sprints, / and normalize unplugging after hours. / In an economy driven by deep focus, / deliberate rest is not an indulgence; / it is the foundation of sustainable performance.'
    ],
    paragraphsKo: [
      '10년 전만 해도 사무실을 물리적으로 나서는 것은 곧 일을 뒤에 두고 온다는 뜻이었습니다. 그러나 오늘날 스마트폰과 실시간 메신저 덕분에 수백만 명의 직장인이 단 한 번의 심야 알림만으로도 저녁 전체를 빼앗기는 ‘상시 연결 문화’ 속에 살고 있습니다. 조직 심리학자들은 번아웃이 단 한 번의 혹독한 마감만으로 생기는 경우는 드물다고 경고합니다. 오히려 진정한 심리적 회복 없이 미세한 스트레스 요인들이 쌓여가며 서서히 엄습해, 수면과 창의력, 감정 조절 능력에 심각한 타격을 입힌다는 것입니다.',
      '현대인의 소진이 특히 교묘하고 위험한 이유는 성취욕이 높은 사람들이 스스로 짊어진 압박감 때문에 너무 무리하게 자신을 소진하는 경우가 잦기 때문입니다. 상사가 자정 답장을 요구하지 않는데도, 직원들은 과로를 헌신으로 미화하는 통념을 내면화합니다. 하지만 연구들은 일관되게 인지 과부하가 바로 조직이 돈을 지불하고 사는 판단력을 파괴한다고 보여줍니다. 팀이 일단 에너지가 바닥난 채 굴러가기 시작하면, 실수율은 치솟고 전략적 사고는 멈춰 서고 맙니다.',
      '만성 스트레스는 개인을 해칠 뿐만 아니라 조직 전체의 회복 탄력성도 약화시킵니다. 이 흐름을 되돌리려면 웰니스 구호 이상이 필요합니다. 리더가 눈에 보이게 명확한 경계를 설정하고, 강도 높은 스프린트 후에는 숨을 고르도록 독려하며, 업무 외 시간의 접속 차단을 일상화해야 합니다. 깊은 집중력이 가치를 만드는 경제에서 의도적인 휴식은 사치가 아니라 지속 가능한 성과의 토대입니다.'
    ],
    keyExpressions: [
      'inhabit an always-on culture (상시 연결 문화 속에 살다)',
      'take a severe toll on ~ (~에 심각한 타격을 주다)',
      'stretch oneself too thin (무리하게 많은 일을 떠안아 지치다)',
      'glorify overwork as devotion (과로를 헌신으로 미화하다)',
      'running on empty (에너지가 바닥난 채 버티다)',
      'Not only does A ~, it also B (A할 뿐만 아니라 B하기도 하다)'
    ],
    comprehensionQuiz: [
      {
        id: 'd26-rq01',
        questionKo: '1문단에서 조직 심리학자들이 설명하는 번아웃의 주요 발생 메커니즘은?',
        options: [
          '단 한 번의 대규모 프로젝트 마감 실패에서 즉각 발생한다',
          '충분한 심리적 회복 없이 미세한 스트레스가 누적되면서 서서히 악화된다',
          '사무실 출근 제도가 사라졌기 때문에 원격 근무자에게만 나타난다',
          '수면 부족보다는 팀원 간 갈등이 유일한 원인이다'
        ],
        answer: '충분한 심리적 회복 없이 미세한 스트레스가 누적되면서 서서히 악화된다',
        explanationKo:
          '1문단의 "it creeps up when micro-stressors accumulate without genuine psychological recovery"가 핵심 근거입니다.'
      },
      {
        id: 'd26-rq02',
        questionKo: '2문단이 언급하는 "self-inflicted pressure(자초한 압박감)"의 구체적 사례로 가장 적절한 것은?',
        options: [
          '회사가 법적 근무시간을 초과하도록 강제 지시하는 상황',
          '상사가 요구하지 않았는데도 과로를 헌신으로 여겨 스스로 자정 답장을 압박하는 태도',
          '신입 사원들이 업무 매뉴얼을 숙지하지 못해 실수하는 상황',
          '동료에게 업무를 과도하게 떠넘기면서 휴식을 취하는 행동'
        ],
        answer: '상사가 요구하지 않았는데도 과로를 헌신으로 여겨 스스로 자정 답장을 압박하는 태도',
        explanationKo:
          '2문단에서 "Even when managers do not demand midnight replies, employees internalize the myth that glorifies overwork as devotion"으로 설명합니다.'
      },
      {
        id: 'd26-rq03',
        questionKo: '3문단이 제시하는 번아웃 극복의 실질적 해법으로 옳은 것은?',
        options: [
          '사내 웰니스 캠페인 슬로건을 정기적으로 이메일로 발송한다',
          '리더가 직접 경계를 설정하고 업무 외 접속 차단과 휴식을 규범화한다',
          '개인에게 스트레스 관리 앱 사용을 의무화하고 야근 수당을 높인다',
          '단기 스프린트 일정을 없애고 모든 마감을 무기한 연장한다'
        ],
        answer: '리더가 직접 경계를 설정하고 업무 외 접속 차단과 휴식을 규범화한다',
        explanationKo:
          '3문단은 웰니스 구호(wellness slogans)만으로는 부족하며 리더가 솔선수범해 경계를 세우고(visibly set boundaries) 접속 차단을 일상화해야 한다고 강조합니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd26-v01',
      word: 'burnout',
      phonetic: '/ˈbɜːrnaʊt/',
      pos: '명사',
      cefr: 'c1',
      meaningKo: '번아웃, 만성 과로로 인한 심신 소진 증후군',
      meaningEn: 'a state of chronic physical and emotional exhaustion caused by prolonged stress',
      nuanceTipKo: '단순 피로(fatigue)와 달리 냉소감·무력감·성취감 저하까지 동반하는 전문 용어입니다. prevent burnout / keep burnout at bay로 자주 씁니다.',
      exampleEn: 'Unchecked overtime eventually pushes even the most passionate teams toward burnout.',
      exampleKo: '통제되지 않는 초과근무는 결국 가장 열정적인 팀조차 번아웃으로 내몹니다.'
    },
    {
      id: 'd26-v02',
      word: 'set boundaries',
      phonetic: '/set ˈbaʊndriz/',
      pos: '연어(Collocation)',
      cefr: 'c1',
      meaningKo: '(일·관계에서 건강한) 경계선을 긋다, 선을 명확히 지키다',
      meaningEn: 'to clearly define limits on what behavior, workload, or hours you will accept',
      nuanceTipKo: '워라밸·심리학 영어에서 압도적 1순위 표현입니다! set firm boundaries / maintain healthy boundaries로 확장해 보세요.',
      exampleEn: 'Learning to set boundaries around evening emails dramatically improved my sleep.',
      exampleKo: '저녁 시간 이메일에 명확한 선을 긋는 법을 배우고 나서 수면의 질이 크게 좋아졌습니다.'
    },
    {
      id: 'd26-v03',
      word: 'take a breather',
      phonetic: '/teɪk ə ˈbriːðər/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '잠시 숨을 고르다, 잠깐 한숨 돌리며 쉬다',
      meaningEn: 'to pause briefly from intense activity in order to rest and recover',
      nuanceTipKo: 'take a break보다 "숨 쉴 틈을 잠시 갖다"라는 생생한 원어민 감각이 살아 있는 표현입니다.',
      exampleEn: 'After wrapping up the product launch, the whole squad deserves to take a breather.',
      exampleKo: '제품 출시를 마쳤으니 팀 전체가 잠시 숨을 고를 자격이 충분합니다.'
    },
    {
      id: 'd26-v04',
      word: 'always-on culture',
      phonetic: '/ˌɔːlweɪz ˈɑːn ˈkʌltʃər/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '상시 연결·24시간 대기 업무 문화',
      meaningEn: 'a workplace norm expecting constant digital availability outside working hours',
      nuanceTipKo: 'BBC·HBR(하버드 비즈니스 리뷰)에서 현대 직장 스트레스 원인을 짚을 때 공식처럼 등장하는 키워드입니다.',
      exampleEn: 'An always-on culture blurs the line between genuine urgency and routine noise.',
      exampleKo: '상시 연결 문화는 진짜 긴급 상황과 일상적 소음 사이의 경계를 흐려놓습니다.'
    },
    {
      id: 'd26-v05',
      word: 'take a toll on',
      phonetic: '/teɪk ə ˈtoʊl ɑːn/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '~에 서서히 큰 악영향·타격을 입히다',
      meaningEn: 'to cause gradual, cumulative harm or suffering to someone or something',
      nuanceTipKo: 'harm이나 damage보다 시간이 지나며 누적되어 대가를 치르게 한다는 뉘앙스가 탁월합니다. take a heavy/severe toll on으로 강조하세요.',
      exampleEn: 'Years of erratic sleep schedules inevitably take a heavy toll on your immune system.',
      exampleKo: '수년간 불규칙한 수면 패턴이 이어지면 결국 면역 체계에 큰 타격을 입히기 마련입니다.'
    },
    {
      id: 'd26-v06',
      word: 'stretch oneself too thin',
      phonetic: '/stretʃ wʌnˈself tuː ˈθɪn/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '너무 많은 일을 벌여 역량이 분산되고 지치다',
      meaningEn: 'to take on too many commitments at once so that quality and energy suffer',
      nuanceTipKo: '반죽을 너무 얇게 밀면 찢어지듯, 한 사람이 감당할 이상으로 일을 떠안은 상태를 절묘하게 묘사합니다. (spread oneself too thin도 동의어!)',
      exampleEn: 'Saying yes to every side project left her stretched far too thin.',
      exampleKo: '모든 사이드 프로젝트에 다 수락하다 보니 그녀는 지나치게 무리해 지쳐 버렸습니다.'
    },
    {
      id: 'd26-v07',
      word: 'keep ~ at bay',
      phonetic: '/kiːp æt ˈbeɪ/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '~이 다가오거나 악화되지 못하게 막아내다, 저지하다',
      meaningEn: 'to prevent a threat, illness, or negative state from getting closer or worse',
      nuanceTipKo: '단순 stop이나 prevent보다 번아웃·불안·질병 같은 만성 위험을 일정 거리 밖으로 밀어내 통제한다는 고급 표현입니다.',
      exampleEn: 'Daily walks and strict offline hours help me keep chronic stress at bay.',
      exampleKo: '매일 하는 산책과 철저한 오프라인 시간 덕분에 만성 스트레스를 막아낼 수 있어요.'
    },
    {
      id: 'd26-v08',
      word: 'cognitive overload',
      phonetic: '/ˈkɑːɡnətɪv ˌoʊvərˈloʊd/',
      pos: '명사구',
      cefr: 'c2',
      meaningKo: '인지 과부하 (처리 한계를 넘어선 정보·알림으로 뇌가 지친 상태)',
      meaningEn: 'a state in which the brain receives more information than it can effectively process',
      nuanceTipKo: '단순히 "머리가 아프다(headache)"가 아니라 멀티태스킹·알림 홍수로 판단력이 마비되는 현상을 정확히 지칭하는 C2 어휘입니다.',
      exampleEn: 'Jumping between twelve Slack channels all day is a recipe for cognitive overload.',
      exampleKo: '하루 종일 슬랙 채널 열두 개를 오가는 것은 인지 과부하로 가는 지름길입니다.'
    },
    {
      id: 'd26-v09',
      word: 'unplug from',
      phonetic: '/ˌʌnˈplʌɡ frʌm/',
      pos: '구동사',
      cefr: 'c1',
      meaningKo: '(디지털 기기·업무 연결에서) 플러그를 뽑듯 완전히 단절하고 쉬다',
      meaningEn: 'to disconnect temporarily from digital devices and work obligations',
      nuanceTipKo: '디지털 디톡스·휴가 중 완전한 휴식을 말할 때 turn off phone보다 훨씬 생생하고 원어민답습니다.',
      exampleEn: 'Try to unplug from work notifications for at least one full day every weekend.',
      exampleKo: '주말마다 최소 하루 온종일은 업무 알림에서 완전히 벗어나 보세요.'
    },
    {
      id: 'd26-v10',
      word: 'running on empty',
      phonetic: '/ˈrʌnɪŋ ɑːn ˈempti/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '(연료가 바닥난 차처럼) 에너지가 고갈된 채 억지로 버티고 있는',
      meaningEn: 'continuing to function despite being completely depleted of energy',
      nuanceTipKo: 'be running on empty 형태로 "이미 체력·멘탈 배터리가 0%인데 관성으로 일하는 상태"를 그림처럼 표현합니다.',
      exampleEn: 'By Thursday afternoon, half the engineering team was clearly running on empty.',
      exampleKo: '목요일 오후쯤 되자 엔지니어링 팀 절반이 명백히 에너지가 바닥난 채 버티고 있었습니다.'
    },
    {
      id: 'd26-v11',
      word: 'sustainable',
      phonetic: '/səˈsteɪnəbl/',
      pos: '형용사',
      cefr: 'c1',
      meaningKo: '지속 가능한 (장기적으로 무리 없이 유지할 수 있는)',
      meaningEn: 'able to be maintained at a steady level without causing exhaustion or collapse',
      nuanceTipKo: '환경 분야뿐 아니라 업무 속도(sustainable pace), 경력(sustainable career)에도 필수적인 C1 형용사입니다.',
      exampleEn: 'Pulling all-nighters may win a sprint, but it is never a sustainable pace.',
      exampleKo: '밤샘 작업으로 단기 스프린트는 이길 수 있어도 결코 지속 가능한 속도는 아닙니다.'
    },
    {
      id: 'd26-v12',
      word: 'self-inflicted',
      phonetic: '/ˌself ɪnˈflɪktɪd/',
      pos: '형용사',
      cefr: 'c2',
      meaningKo: '스스로 자초한, 외부 강요가 아닌 자기 자신에게 가한',
      meaningEn: 'caused by one’s own actions, habits, or perfectionism rather than external forces',
      nuanceTipKo: 'self-inflicted stress / self-inflicted pressure 형태로 완벽주의 직장인의 심리를 정교하게 짚어냅니다.',
      exampleEn: 'Much of our urgency turns out to be self-inflicted rather than client-mandated.',
      exampleKo: '우리가 느끼는 조급함의 상당 부분은 고객 요구가 아니라 스스로 자초한 것임이 드러납니다.'
    },
    {
      id: 'd26-v13',
      word: 'compartmentalize',
      phonetic: '/ˌkɑːmpɑːrtˈmentəlaɪz/',
      pos: '동사',
      cefr: 'c2',
      meaningKo: '(일과 사생활·감정을) 칸막이 치듯 명확히 분리해 관리하다',
      meaningEn: 'to separate different areas of life or emotions so one does not spill into another',
      nuanceTipKo: '심리학 인터뷰에서 워라밸 고수들의 멘탈 관리 비결을 설명할 때 쓰이는 대표적인 C2 동사입니다.',
      exampleEn: 'Remote workers often struggle to compartmentalize office stress from home life.',
      exampleKo: '재택근무자들은 업무 스트레스와 가정생활을 명확히 분리하는 데 어려움을 겪곤 합니다.'
    },
    {
      id: 'd26-v14',
      word: 'resilience',
      phonetic: '/rɪˈzɪljəns/',
      pos: '명사',
      cefr: 'c1',
      meaningKo: '회복 탄력성 (충격·압박을 딛고 다시 일어서는 힘)',
      meaningEn: 'the capacity to recover swiftly from setbacks, pressure, or adversity',
      nuanceTipKo: '단순히 참고 견디는 endurance와 달리, 유연하게 회복해 원래 이상으로 복원되는 힘을 뜻합니다.',
      exampleEn: 'True resilience depends on rhythmic recovery, not nonstop endurance.',
      exampleKo: '진정한 회복 탄력성은 쉼 없는 인내가 아니라 리듬 있는 회복에 달려 있습니다.'
    },
    {
      id: 'd26-v15',
      word: 'glorify overwork',
      phonetic: '/ˈɡlɔːrɪfaɪ ˈoʊvərwɜːrk/',
      pos: '동사구',
      cefr: 'c1',
      meaningKo: '과로를 미화하다, 야근을 훈장처럼 치켜세우다',
      meaningEn: 'to praise or romanticize excessive working hours as a badge of honor',
      nuanceTipKo: '한국과 실리콘밸리 직장 문화를 비평할 때 가장 날카롭게 꽂히는 시사 표현입니다.',
      exampleEn: 'Healthy organizations reward measurable impact rather than glorifying overwork.',
      exampleKo: '건강한 조직은 과로를 미화하기보다 측정 가능한 성과에 보상합니다.'
    }
  ],
  dialogue: [
    {
      id: 'd26-t01',
      speaker: 'Hannah',
      roleLabel: 'BBC 스타일 심리·커리어 팟캐스트 호스트',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_media_podcast.jpg',
      cameraMotion: 'zoom-in',
      english:
        'Dr. Brooks, so many listeners tell us they feel exhausted even on weekends. Why has chronic stress become the default setting for modern professionals?',
      slashBroken:
        'Dr. Brooks, / so many listeners tell us / they feel exhausted even on weekends. / Why has chronic stress become / the default setting / for modern professionals?',
      korean:
        '브룩스 박사님, 정말 많은 청취자분들이 주말에도 지쳐 있다고 호소하세요. 왜 만성 스트레스가 현대 직장인의 기본값처럼 되어버렸을까요?',
      keyHighlight: 'chronic stress ~ the default setting',
      noteKo: 'the default setting(기본 설정값)이라는 IT 은유를 일상에 빌려와 세련된 인터뷰 오프닝을 만들었습니다.'
    },
    {
      id: 'd26-t02',
      speaker: 'Dr. Brooks',
      roleLabel: '조직 심리학자 · 번아웃 연구가',
      voicePitch: 0.91,
      sceneImage: 'assets/scene_late_office.jpg',
      cameraMotion: 'pan-right',
      english:
        'A huge culprit is our always-on culture. Even when your laptop is closed, anticipating a late-night message keeps your nervous system on alert—and over months, that takes a heavy toll on recovery.',
      slashBroken:
        'A huge culprit is / our always-on culture. / Even when your laptop is closed, / anticipating a late-night message / keeps your nervous system on alert— / and over months, / that takes a heavy toll on recovery.',
      korean:
        '가장 큰 주범은 상시 연결 문화입니다. 노트북을 닫아놓더라도 밤늦은 메시지가 올지 모른다는 예감만으로 신경계가 계속 경계 상태에 머물고, 몇 달이 쌓이면 회복력에 큰 타격을 주죠.',
      keyHighlight: 'always-on culture ~ takes a heavy toll on',
      noteKo: 'culprit(주범, 핵심 원인)은 문제 원인을 진단할 때 cause보다 훨씬 생동감 있는 C1 명사입니다.'
    },
    {
      id: 'd26-t03',
      speaker: 'Hannah',
      roleLabel: 'BBC 스타일 심리·커리어 팟캐스트 호스트',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_media_podcast.jpg',
      cameraMotion: 'pan-left',
      english:
        'And I imagine high performers often make it worse themselves—stretching themselves too thin because they worry saying no looks uncommitted?',
      slashBroken:
        'And I imagine / high performers often make it worse themselves— / stretching themselves too thin / because they worry / saying no looks uncommitted?',
      korean:
        '게다가 성과가 뛰어난 분들일수록 거절하면 열정이 없어 보일까 봐 걱정해서 스스로 너무 무리하며 상황을 악화시키는 경우도 많겠죠?',
      keyHighlight: 'stretching themselves too thin',
      noteKo: 'I imagine ~?는 단정 짓지 않고 전문가의 동의를 부드럽게 끌어내는 원어민 인터뷰어 화법입니다.'
    },
    {
      id: 'd26-t04',
      speaker: 'Dr. Brooks',
      roleLabel: '조직 심리학자 · 번아웃 연구가',
      voicePitch: 0.91,
      sceneImage: 'assets/scene_late_office.jpg',
      cameraMotion: 'zoom-in',
      english:
        'Spot on. Much of that pressure is self-inflicted in workplaces that subtly glorify overwork. Yet rarely do people notice cognitive overload until they are already running on empty.',
      slashBroken:
        'Spot on. / Much of that pressure is self-inflicted / in workplaces that subtly glorify overwork. / Yet rarely do people notice cognitive overload / until they are already running on empty.',
      korean:
        '정확합니다. 과로를 은근히 미화하는 직장에선 그런 압박의 상당 부분이 스스로 자초한 것이죠. 그런데 사람들은 이미 에너지가 바닥날 때까지 인지 과부하를 좀처럼 알아채지 못합니다.',
      keyHighlight: 'rarely do people notice ~ running on empty',
      noteKo: '부정어 rarely를 문두로 꺼내 "rarely do people notice"로 도치시키면 경고 메시지에 강력한 무게가 실립니다.'
    },
    {
      id: 'd26-t05',
      speaker: 'Hannah',
      roleLabel: 'BBC 스타일 심리·커리어 팟캐스트 호스트',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_media_podcast.jpg',
      cameraMotion: 'pan-right',
      english:
        'So for someone listening tonight who feels one email away from burnout, what is the single most practical shift they can make tomorrow?',
      slashBroken:
        'So for someone listening tonight / who feels one email away from burnout, / what is the single most practical shift / they can make tomorrow?',
      korean:
        '그렇다면 오늘 방송을 들으며 이메일 한 통만 더 오면 번아웃이 올 것 같은 분들을 위해, 당장 내일 실천할 수 있는 가장 현실적인 변화 하나는 무엇일까요?',
      keyHighlight: 'one email away from burnout',
      noteKo: 'one ~ away from ...(~ 하나만 더 있으면 곧 ...할 지경인)은 심리적 한계를 실감 나게 표현하는 관용 구조입니다.'
    },
    {
      id: 'd26-t06',
      speaker: 'Dr. Brooks',
      roleLabel: '조직 심리학자 · 번아웃 연구가',
      voicePitch: 0.91,
      sceneImage: 'assets/scene_media_podcast.jpg',
      cameraMotion: 'pan-left',
      english:
        'Stop waiting for guilt-free permission to take a breather. Set clear boundaries—silence work alerts after 7 PM and unplug intentionally. Not only does that keep burnout at bay, it actually sharpens your focus the next morning.',
      slashBroken:
        'Stop waiting for guilt-free permission / to take a breather. / Set clear boundaries— / silence work alerts after 7 PM / and unplug intentionally. / Not only does that keep burnout at bay, / it actually sharpens your focus / the next morning.',
      korean:
        '죄책감 없는 허락을 기다리며 숨 고르기를 미루지 마세요. 명확한 경계를 세우세요—저녁 7시 이후엔 업무 알림을 끄고 의도적으로 접속을 끊는 겁니다. 그래야 번아웃을 막을 뿐 아니라, 실제로 다음 날 아침 집중력도 훨씬 날카로워집니다.',
      keyHighlight: 'Set clear boundaries ~ Not only does that keep burnout at bay',
      noteKo: 'Not only does + 주어 + 동사원형 도치 구문으로 휴식의 이중 효과(번아웃 예방 + 집중력 향상)를 강렬하게 마무리했습니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 심층 칼럼·인터뷰의 꽃: 부정어 문두 도치 (Not only / Rarely / Seldom)',
      coreFormula: 'Not only / Rarely / Seldom + 조동사(do/does/did/can) + 주어 + 동사원형',
      wrongKonglish: 'Rarely people notice burnout until it is too late. Not only stress hurts health, it hurts work.',
      rightNative:
        'Rarely do people notice burnout until they are running on empty. Not only does chronic stress hurt health, it also erodes judgment.',
      explanationKo:
        '부정적·제한적 의미의 부사(Rarely, Seldom, Never, Not only, Little)를 강조를 위해 문장 맨 앞으로 꺼내면, 뒤따르는 주어와 동사가 의문문 어순(조동사 + 주어 + 동사원형)으로 도치됩니다! IELTS 라이팅·TED 강연·BBC 칼럼에서 단 한 번만 정확히 써도 즉시 C1–C2 문체로 격상됩니다.',
      registerSpectrum: {
        casual: 'People almost never notice burnout until they completely crash.',
        standard: 'Not only does overwork drain your energy, it also lowers decision quality.',
        formal: 'Seldom does an always-on workplace achieve sustainable excellence without deliberate recovery.'
      }
    },
    {
      title: '원리 02 · 누적 피해와 원인을 정밀하게 그리는 동사 연어 (stem from / take a toll on)',
      coreFormula: 'A stems from B (A는 B에서 비롯되다) / A takes a heavy toll on B (A가 B에 서서히 큰 타격을 입히다)',
      wrongKonglish: 'Burnout comes out from too much stress and makes big bad effect to our sleeping.',
      rightNative:
        'Burnout rarely stems from a single deadline; it takes a severe toll on sleep when micro-stressors accumulate.',
      explanationKo:
        '한국인들이 "안 좋은 영향을 주다"를 늘 "give a bad effect to"로 직역합니다. 원어민은 피로·스트레스·시간이 누적되어 심신을 갉아먹을 때 take a (heavy/severe) toll on을, 근본 원인을 짚을 때 stem from을 씁니다. 동사 하나만 바꿔도 영어의 밀도가 달라집니다.',
      registerSpectrum: {
        casual: 'Checking Slack at midnight really messes up my sleep.',
        standard: 'Constant after-hours alerts take a real toll on mental clarity.',
        formal: 'Chronic cognitive overload stems largely from blurred boundaries and erodes long-term resilience.'
      }
    },
    {
      title: '원리 03 · 경고와 시급한 권고의 고급 구문: It is high time + 과거시제 / can ill afford to',
      coreFormula: 'It is (high) time (that) + 주어 + 과거동사 / 주어 + can ill afford to + 동사원형',
      wrongKonglish: 'It is high time that companies stop to glorify overwork. We cannot afford losing talent.',
      rightNative:
        'It is high time companies stopped glorifying overwork—we can ill afford to lose seasoned talent to burnout.',
      explanationKo:
        '"진작 ~했어야 할 때다"라는 It is high time 뒤에는 현재가 아니라 가정법 과거(동사 과거형)를 쓰는 것이 C1 핵심 문법입니다! 또한 "도저히 ~할 여유가 없다(치명적이다)"를 뜻하는 can ill afford to + 동사원형도 칼럼과 임원 보고에서 매우 품격 있는 표현입니다.',
      registerSpectrum: {
        casual: "It's way past time we stopped treating late nights like a trophy.",
        standard: "It's time our team set clearer boundaries around weekend messages.",
        formal: 'It is high time organizations dismantled always-on norms; they can ill afford to ignore burnout.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd26-s01',
      drillType: 'chunk-build',
      promptKo: '명확한 경계를 설정하는 것이 만성 번아웃을 막아내는 유일한 지속 가능한 방법입니다.',
      promptEnHint: '동명사 주어(Setting clear boundaries)와 keep ~ at bay를 조립하세요.',
      targetEn: 'Setting clear boundaries is the only sustainable way to keep chronic burnout at bay.',
      chunks: [
        'Setting clear boundaries',
        'is the only sustainable way',
        'to keep chronic burnout',
        'at bay.'
      ],
      explanationKo: 'set boundaries, sustainable, keep ~ at bay 세 가지 C1 핵심 표현이 한 문장에 녹아 있습니다.'
    },
    {
      id: 'd26-s02',
      drillType: 'konglish-fix',
      promptKo: '"심야 업무 알림은 수면에 심각한 타격을 줍니다." — 가장 자연스러운 원어민 표현은?',
      promptEnHint: 'give bad effect 콩글리시를 피하세요!',
      targetEn: 'Late-night work alerts take a severe toll on your sleep.',
      wrongKonglishOption: 'Late-night work alerts give a severe bad effect to your sleep.',
      explanationKo: '누적된 악영향을 줄 때는 take a (heavy/severe) toll on ~ 을 사용합니다.'
    },
    {
      id: 'd26-s03',
      drillType: 'active-blank',
      promptKo: '이미 에너지가 바닥날 때까지 사람들은 인지 과부하를 좀처럼 알아채지 못합니다.',
      promptEnHint: '부정어 Rarely 도치 구문! 현재형 복수 주어 people 앞 조동사(2글자)',
      targetEn: 'Rarely do people notice cognitive overload until they are running on empty.',
      blankData: {
        before: 'Rarely',
        answer: 'do',
        after: 'people notice cognitive overload until they are running on empty.',
        firstLetterHint: 'd_ (2글자)'
      },
      explanationKo: '부정어 Rarely가 문두에 오면 일반동사 문장은 do/does/did + 주어 + 동사원형으로 도치됩니다.'
    },
    {
      id: 'd26-s04',
      drillType: 'chunk-build',
      promptKo: '강도 높은 스프린트를 마친 뒤에는 팀이 잠시 숨을 고를 필요가 있습니다.',
      promptEnHint: 'take a breather 관용구를 포함해 조립하세요.',
      targetEn: 'After an intense sprint, the team genuinely needs to take a breather.',
      chunks: ['After an intense sprint,', 'the team genuinely needs', 'to take', 'a breather.'],
      explanationKo: 'take a breather는 숨 가쁜 일정 뒤 잠시 숨을 돌린다는 자연스러운 원어민 표현입니다.'
    },
    {
      id: 'd26-s05',
      drillType: 'active-blank',
      promptKo: '모든 요청을 다 수락하면 결국 너무 무리하게 역량이 분산되어 지치게 됩니다.',
      promptEnHint: 'stretch yourself too ____ (반죽을 너무 얇게 밀듯 무리하다)',
      targetEn: 'Saying yes to every request will leave you stretched too thin.',
      blankData: {
        before: 'Saying yes to every request will leave you stretched too',
        answer: 'thin',
        after: '.',
        firstLetterHint: 't___ (4글자)'
      },
      explanationKo: 'stretch(또는 spread) oneself too thin은 감당 못 할 만큼 일을 벌여 지친 상태를 뜻합니다.'
    },
    {
      id: 'd26-s06',
      drillType: 'konglish-fix',
      promptKo: '"만성 스트레스는 개인을 해칠 뿐만 아니라 팀의 회복 탄력성도 약화시킨다." (도치 문법 주의!)',
      promptEnHint: 'Not only 문두 도치 어순을 확인하세요.',
      targetEn: 'Not only does chronic stress harm individuals, it also undermines team resilience.',
      wrongKonglishOption: 'Not only chronic stress harms individuals, it also undermines team resilience.',
      explanationKo: 'Not only가 문두에 나오면 반드시 조동사 does를 주어 앞으로 빼서 도치해야 합니다.'
    },
    {
      id: 'd26-s07',
      drillType: 'chunk-build',
      promptKo: '주말 중 최소 하루는 업무 알림에서 완전히 플러그를 뽑듯 벗어나 보세요.',
      promptEnHint: 'unplug from 구동사를 넣어 조립하세요.',
      targetEn: 'Try to unplug from work notifications for at least one full day.',
      chunks: ['Try to unplug', 'from work notifications', 'for at least', 'one full day.'],
      explanationKo: 'unplug from ~ 은 디지털 업무 연결에서 의도적으로 단절한다는 핵심 표현입니다.'
    },
    {
      id: 'd26-s08',
      drillType: 'active-blank',
      promptKo: '조직들이 과로를 미화하는 관행을 진작 멈췄어야 할 때입니다.',
      promptEnHint: 'It is high time + 과거동사! stop의 과거형(7글자)',
      targetEn: 'It is high time organizations stopped glorifying overwork.',
      blankData: {
        before: 'It is high time organizations',
        answer: 'stopped',
        after: 'glorifying overwork.',
        firstLetterHint: 's______ (7글자)'
      },
      explanationKo: 'It is high time + 주어 + 과거동사(stopped)는 "진작 ~했어야 한다"는 고급 당위 표현입니다.'
    },
    {
      id: 'd26-s09',
      drillType: 'chunk-build',
      promptKo: '재택근무자들은 종종 업무 스트레스와 사생활을 명확히 분리하는 데 애를 먹습니다.',
      promptEnHint: 'C2 동사 compartmentalize를 중심으로 조립하세요.',
      targetEn: 'Remote workers often struggle to compartmentalize office stress from home life.',
      chunks: [
        'Remote workers often struggle',
        'to compartmentalize',
        'office stress',
        'from home life.'
      ],
      explanationKo: 'compartmentalize A from B는 A와 B 사이에 심리적 칸막이를 쳐서 분리한다는 고급 어휘입니다.'
    },
    {
      id: 'd26-s10',
      drillType: 'active-blank',
      promptKo: '우리가 느끼는 조급함의 상당 부분은 외부 강요가 아니라 스스로 자초한 것입니다.',
      promptEnHint: '스스로 자초한: self-_________ (하이픈 뒤 9글자)',
      targetEn: 'Much of our daily urgency is self-inflicted rather than externally demanded.',
      blankData: {
        before: 'Much of our daily urgency is self-',
        answer: 'inflicted',
        after: 'rather than externally demanded.',
        firstLetterHint: 'i________ (9글자)'
      },
      explanationKo: 'self-inflicted는 완벽주의나 과잉 책임감으로 스스로 압박을 만든 상황을 정확히 짚어줍니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd26-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '관용구 take a toll on',
      questionKo: '빈칸에 알맞은 명사(1단어)를 넣어 "만성 수면 부족은 판단력에 심각한 타격을 입힌다"를 완성하세요.',
      stimulusEn: 'Chronic sleep deprivation inevitably takes a heavy __________ on decision-making.',
      answer: 'toll',
      explanationKo: 'take a heavy/severe toll on ~ (~에 누적된 큰 타격을 주다) 관용구입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "번아웃이 다가오지 못하게 막아내다" 관용구에서 빈칸(1단어)을 채우세요.',
        stimulusEn: 'Clear evening routines help me keep burnout at __________.',
        answer: 'bay',
        explanationKo: 'keep ~ at bay는 위험 요소를 저지해 멀리 둔다는 C1 관용구입니다.'
      }
    },
    {
      id: 'd26-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '연어 set boundaries',
      questionKo: '빈칸에 알맞은 복수 명사(1단어)를 넣어 "건강한 경계를 설정하다"를 완성하세요.',
      stimulusEn: 'Managers should model how to set healthy __________ after working hours.',
      answer: 'boundaries',
      explanationKo: 'set boundaries는 일과 사생활 사이의 명확한 선을 긋는다는 핵심 연어입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "잠시 숨을 고르다" 관용구에서 빈칸(1단어)을 채우세요.',
        stimulusEn: 'Let’s pause for fifteen minutes and take a __________ before the final review.',
        answer: 'breather',
        explanationKo: 'take a breather는 잠깐 한숨 돌리며 휴식한다는 관용구입니다.'
      }
    },
    {
      id: 'd26-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '관용구 running on empty',
      questionKo: '빈칸에 알맞은 형용사(1단어)를 넣어 "에너지가 바닥난 채 버티고 있다"를 완성하세요.',
      stimulusEn: 'After three consecutive launches, our design team was clearly running on __________.',
      answer: 'empty',
      explanationKo: 'be running on empty는 체력·정신적 연료가 완전히 소진된 상태를 뜻합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "너무 많은 일을 떠안아 지치다" 관용구에서 빈칸(1단어)을 쓰세요.',
        stimulusEn: 'Taking on four side projects left him stretched far too __________.',
        answer: 'thin',
        explanationKo: 'stretch oneself too thin 관용구입니다.'
      }
    },
    {
      id: 'd26-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '핵심 동사 unplug',
      questionKo: '빈칸에 알맞은 동사(1단어)를 넣어 "휴가 동안 업무 이메일에서 완전히 벗어나다"를 완성하세요.',
      stimulusEn: 'True recovery happens only when you fully __________ from work emails on vacation.',
      answer: 'unplug',
      explanationKo: 'unplug from ~ 은 디지털 업무 연결을 의도적으로 끊고 쉰다는 핵심 동사입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "일과 사생활을 칸막이 치듯 분리하다" c로 시작하는 동사(1단어)를 쓰세요.',
        stimulusEn: 'Having a dedicated desk helps me __________ work from family time.',
        answer: 'compartmentalize',
        explanationKo: 'compartmentalize A from B는 영역을 심리적·물리적으로 분리한다는 C2 동사입니다.'
      }
    },
    {
      id: 'd26-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '명사 resilience',
      questionKo: '빈칸에 알맞은 명사(1단어)를 넣어 "진정한 회복 탄력성은 규칙적 휴식에서 나온다"를 완성하세요.',
      stimulusEn: 'Long-term organizational __________ depends on rhythmic rest rather than nonstop overtime.',
      answer: 'resilience',
      explanationKo: '충격과 압박을 유연하게 딛고 복원하는 힘은 resilience(회복 탄력성)입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "과로를 미화하다"에서 g로 시작하는 동사(1단어)를 쓰세요.',
        stimulusEn: 'Progressive leaders measure real outcomes instead of choosing to __________ overwork.',
        answer: 'glorify',
        explanationKo: 'glorify overwork는 과로를 훈장처럼 미화한다는 표현입니다.'
      }
    },
    {
      id: 'd26-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '부정어 문두 도치',
      questionKo: '다음 빈칸에 어법상 가장 올바른 어순은?',
      stimulusEn:
        'Not only ____________________ individuals, but it also erodes team creativity.',
      options: [
        'does chronic stress exhaust',
        'chronic stress exhausts',
        'exhausts chronic stress',
        'do chronic stress exhaust'
      ],
      answer: 'does chronic stress exhaust',
      explanationKo: 'Not only가 문두에 오면 단수 주어 chronic stress에 맞춰 does + 주어 + 동사원형(exhaust)으로 도치합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] Rarely 문두 도치: 빈칸에 알맞은 조동사(1단어)를 쓰세요.',
        stimulusEn: 'Rarely __________ burnout result from just a single busy week.',
        answer: 'does',
        explanationKo: '단수 주어 burnout과 일반동사 result이므로 조동사 does로 도치합니다.'
      }
    },
    {
      id: 'd26-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'It is high time 가정법 과거',
      questionKo: '다음 빈칸에 들어갈 어법상 가장 정확한 동사 형태는?',
      stimulusEn: 'It is high time our industry __________ treating midnight replies as dedication.',
      options: ['stopped', 'stops', 'will stop', 'is stopping'],
      answer: 'stopped',
      explanationKo: 'It is (high) time + 주어 뒤에는 현재 사실에 대한 시급한 개선을 촉구하는 가정법 과거형(stopped)을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] It is high time 구문: 괄호 안 set의 올바른 형태(과거형, 1단어)를 쓰세요.',
        stimulusEn: 'It is high time we __________ (set) clear offline hours for the entire team.',
        answer: 'set',
        explanationKo: 'set의 과거형은 불규칙 동일 형태인 set입니다.'
      }
    },
    {
      id: 'd26-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '원인 동사 연어 stem from',
      questionKo: '"번아웃은 주로 회복 없는 만성적 압박에서 비롯된다"를 가장 정확하게 표현한 문장은?',
      stimulusEn: '원인을 나타내는 고급 동사구 선택에 주의하세요.',
      options: [
        'Burnout largely stems from relentless pressure without recovery.',
        'Burnout largely comes out to relentless pressure without recovery.',
        'Burnout largely makes from relentless pressure without recovery.',
        'Burnout largely happens because relentless pressure without recovery.'
      ],
      answer: 'Burnout largely stems from relentless pressure without recovery.',
      explanationKo: 'stem from ~ 은 근본 원인이 ~에서 비롯된다는 격조 높은 C1 동사구입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "인지 과부하"를 뜻하는 명사구에서 c로 시작하는 형용사(1단어)를 쓰세요.',
        stimulusEn: 'Constant context-switching quickly triggers __________ overload.',
        answer: 'cognitive',
        explanationKo: 'cognitive overload는 뇌의 정보 처리 용량이 초과된 상태를 뜻합니다.'
      }
    },
    {
      id: 'd26-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'can ill afford to 구문',
      questionKo: '다음 문장의 밑줄 친 "can ill afford to"가 전달하는 정확한 뉘앙스는?',
      stimulusEn: 'Growing startups can ill afford to lose seasoned engineers to avoidable burnout.',
      options: [
        '도저히 ~할 여유가 없다 (~하면 치명적인 손실이다)',
        '~할 충분한 예산과 여유가 있다',
        '병가 중에 ~을 감당할 수 있다',
        '가끔씩은 ~을 시도해 볼 만하다'
      ],
      answer: '도저히 ~할 여유가 없다 (~하면 치명적인 손실이다)',
      explanationKo: 'can ill afford to V는 "결코 ~할 형편이 못 된다(~하면 큰 타격이다)"라는 격식체 강조 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "결코 번아웃을 무시할 여유가 없다"에서 빈칸(1단어, i로 시작)을 채우세요.',
        stimulusEn: 'Leaders can __________ afford to ignore early warning signs of exhaustion.',
        answer: 'ill',
        explanationKo: 'can ill afford to V 관용 구문입니다.'
      }
    },
    {
      id: 'd26-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '문맥 어휘 구별',
      questionKo: '다음 빈칸에 문맥상 가장 적절한 단어는?',
      stimulusEn:
        'Working 70 hours a week might boost output for one month, but it is simply not a __________ pace.',
      options: ['sustainable', 'self-inflicted', 'obsolete', 'cognitive'],
      answer: 'sustainable',
      explanationKo: '단기적으로는 몰아붙일 수 있어도 장기적으로 무리 없이 유지할 수 없다는 문맥이므로 sustainable(지속 가능한)이 정확합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "스스로 자초한 압박감"을 뜻하는 하이픈 포함 형용사(1단어)를 쓰세요.',
        stimulusEn: 'Half of the stress I felt last quarter was completely __________.',
        answer: 'self-inflicted',
        explanationKo: '외부 강요가 아닌 자기 완벽주의 등에서 비롯된 압박은 self-inflicted입니다.'
      }
    },
    {
      id: 'd26-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Not only 도치 어순 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 부정어 도치 문장을 완성하세요.',
      stimulusEn: '[ harm individuals, / Not only / team resilience. / does chronic stress / it also undermines ]',
      answer: 'Not only does chronic stress harm individuals, it also undermines team resilience.',
      explanationKo: 'Not only + does + 주어(chronic stress) + 동사원형(harm individuals), + it also undermines team resilience.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "충분한 휴식은 번아웃을 막을 뿐 아니라 창의성도 높여준다." (Not only does / adequate rest / prevent burnout, / it also boosts creativity.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Not only does adequate rest prevent burnout, it also boosts creativity.',
        explanationKo: 'Not only does + 단수주어 + 동사원형 도치 구조를 적용합니다.'
      }
    },
    {
      id: 'd26-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Rarely 도치 어순 배열',
      questionKo: '주어진 청크를 배열하여 현대인의 번아웃 인식을 꼬집는 도치 문장을 완성하세요.',
      stimulusEn: '[ running on empty. / notice burnout / Rarely / until they are / do professionals ]',
      answer: 'Rarely do professionals notice burnout until they are running on empty.',
      explanationKo: 'Rarely + do + 복수 주어(professionals) + 동사원형(notice burnout) + until절 어순입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "우리는 멈춰서 숨을 고르는 일이 좀처럼 없다." (Seldom / do we pause / to take a breather.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Seldom do we pause to take a breather.',
        explanationKo: 'Seldom 문두 도치(Seldom do we + 동사원형)를 완성합니다.'
      }
    },
    {
      id: 'd26-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'keep ~ at bay 통문장 영작',
      questionKo: '우리말 뜻에 맞게 set boundaries와 keep ~ at bay를 사용하여 영작하세요.',
      stimulusEn:
        '우리말: 명확한 경계를 설정하는 것이 번아웃을 막아내는 유일한 지속 가능한 방법입니다.\n(힌트: Setting clear boundaries / is the only sustainable way / to keep burnout at bay.)',
      answer: 'Setting clear boundaries is the only sustainable way to keep burnout at bay.',
      explanationKo: '동명사 주어(단수 취급 is) + the only sustainable way to V 구조를 완벽하게 연결합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "업무 후 접속을 끊는 것이 만성 스트레스를 막는 데 도움이 된다." (Unplugging after work / helps keep / chronic stress at bay.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Unplugging after work helps keep chronic stress at bay.',
        explanationKo: 'help + 동사원형(keep) + 목적어 + at bay 구조입니다.'
      }
    },
    {
      id: 'd26-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '도치·연어 오류 교정 서술형',
      questionKo: '다음 문장의 문법·연어 오류 2곳(Not only ~ gives, bad effect to)을 고쳐 자연스러운 문장으로 쓰세요.',
      stimulusEn: '오류 문장: Not only constant pings gives a bad effect to sleep, they also cause cognitive overload.',
      answer: 'Not only do constant pings take a toll on sleep, they also cause cognitive overload.',
      acceptableAlt: [
        'Not only do constant pings take a heavy toll on sleep, they also cause cognitive overload.',
        'Not only do constant pings take a severe toll on sleep, they also cause cognitive overload.'
      ],
      explanationKo: '복수 주어 constant pings이므로 Not only do ~로 도치하고, give a bad effect to는 take a toll on으로 교정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: It is high time managers stop glorifying overwork. (시제 오류 1곳 교정)',
        stimulusEn: '바른 문장 전체를 작성하세요.',
        answer: 'It is high time managers stopped glorifying overwork.',
        explanationKo: 'It is high time + 주어 뒤에는 과거동사 stopped를 씁니다.'
      }
    },
    {
      id: 'd26-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '심층 칼럼 결론 통문장 영작',
      questionKo: '우리말을 not A; it is B 대조 구조로 완성하세요.',
      stimulusEn:
        '우리말: 의도적인 휴식은 사치가 아니라 지속 가능한 성과의 토대입니다.\n(힌트: Deliberate rest / is not an indulgence; / it is the foundation of / sustainable performance.)',
      answer: 'Deliberate rest is not an indulgence; it is the foundation of sustainable performance.',
      acceptableAlt: [
        'Deliberate rest is not an indulgence—it is the foundation of sustainable performance.'
      ],
      explanationKo: '세미콜론(;)이나 대시(—)로 두 절을 대조하면 에디토리얼 특유의 묵직한 설득력이 살아납니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "경계를 긋는 것은 이기적인 일이 아니라 회복 탄력성에 필수적이다." (Setting boundaries / is not selfish; / it is essential for resilience.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Setting boundaries is not selfish; it is essential for resilience.',
        explanationKo: '세미콜론 대조 구조로 핵심 메시지를 선명히 마무리합니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      'Have you ever felt stretched too thin by an always-on culture? How do you set boundaries and unplug before burnout creeps in?',
    openingQuestionKo:
      '상시 연결 문화 속에서 너무 무리해 지쳤던 경험이 있으신가요? 번아웃이 찾아오기 전에 나만의 경계를 세우고 접속을 끊는 비결을 C1 표현으로 들려주세요.',
    followUpQuestionEn:
      'That sounds very intentional. What do you think leaders or organizations should change so people feel safe taking a breather without guilt?',
    followUpQuestionKo:
      '아주 의식적이고 건강한 습관이네요! 구성원들이 죄책감 없이 숨을 고를 수 있도록 리더나 조직 차원에서는 무엇이 바뀌어야 한다고 보시나요?',
    recommendedChunks: [
      'always-on culture',
      'take a heavy toll on',
      'set clear boundaries',
      'keep burnout at bay',
      'take a breather',
      'Not only does ~, it also ...'
    ],
    modelAnswerEn:
      'In an always-on culture, it is surprisingly easy to stretch yourself too thin without noticing. Last year, checking messages past 10 PM took a heavy toll on my sleep, so I started setting firm boundaries and unplugging every evening at eight. Not only does that ritual keep burnout at bay, it also gives me far sharper focus when I return to work the next morning.'
  }
};
