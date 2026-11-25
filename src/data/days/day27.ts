import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day27Module: DayLessonModule = {
  dayNumber: 27,
  weekNumber: 5,
  cefrLevel: 'c1',
  dayBadge: 'DAY 27 · 글로벌 음식·문화 스몰토크 & 경청',
  categoryLabel: 'C1 글로벌 교양 회화 · 문화 뉘앙스 & 설득력 있는 경청',
  title: '글로벌 음식·문화 차이 스몰토크 & 설득력 있는 경청',
  subtitle:
    '해외 만찬과 글로벌 네트워킹에서 음식 문화(culinary heritage)로 유대감(rapport)을 쌓고, 문화 뉘앙스를 읽으며 능동적 경청(active listening)으로 마음을 얻는 법',
  heroImage: 'assets/scene_restaurant_chat.jpg',
  secondaryImage: 'assets/scene_media_podcast.jpg',
  estimatedSprintMin: 9,
  estimatedLectureMin: 45,
  keyExpression:
    'When you practice active listening and appreciate cultural nuance, even a casual meal can build lasting rapport.',
  keySentenceByTier: {
    a1: 'I like trying local food and listening to new friends from other countries.',
    a2: 'Sharing a meal is a great way to learn about another culture and make friends.',
    b1: 'Talking about food helps people from different cultures find common ground and feel comfortable.',
    b2: 'When you listen carefully and respect cultural differences, a simple business dinner can build strong trust.',
    c1: 'When you practice active listening and appreciate cultural nuance, breaking bread together quickly builds genuine rapport.',
    c2: 'In cross-border relationships, the unspoken norms around a dining table often reveal far more than any briefing slide—provided we listen closely enough to read between the lines.'
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[27],
  readingPassage: {
    titleEn: 'Beyond the Menu: How Food Culture and Active Listening Bridge Global Divides',
    titleKo: '메뉴 너머의 언어: 음식 문화와 능동적 경청은 어떻게 글로벌 장벽을 허무는가',
    genreBadge: 'BBC 스타일 글로벌 문화 에세이 · Cross-Cultural Communication',
    estimatedMin: 6,
    paragraphsEn: [
      'When international teams gather around a dinner table, the food itself is rarely just sustenance—it is a living archive of culinary heritage and unspoken norms. In Korea, sharing side dishes from the center of the table signals warmth and collective trust, whereas in many Western settings, individual plating reflects respect for personal autonomy. Misreading these subtle habits can leave good intentions lost in translation; appreciating them, however, turns an ordinary meal into an instant bridge across cultures.',
      'Navigating a new food culture also teaches humility—the very mindset required for persuasive global leadership. A dish like fermented soybean stew or blue cheese may initially feel like an acquired taste, yet approaching unfamiliar flavors with genuine curiosity resonates deeply with hosts. Rather than rushing to judge what seems strange, seasoned travelers ask open-ended questions about the stories and hospitality traditions behind each recipe, allowing cultural nuance to unfold naturally.',
      'Ultimately, what turns polite small talk into lasting rapport is not clever monologue, but active listening. When you reflect back what struck a chord in someone’s story and stay alert enough to read between the lines, people feel respected rather than merely networked with. In a world where digital deals can feel transactional, taking the time to break bread and truly listen remains the surest way to uncover common ground.'
    ],
    paragraphsSlash: [
      'When international teams gather around a dinner table, / the food itself is rarely just sustenance— / it is a living archive / of culinary heritage and unspoken norms. / In Korea, / sharing side dishes from the center of the table / signals warmth and collective trust, / whereas in many Western settings, / individual plating reflects respect for personal autonomy. / Misreading these subtle habits / can leave good intentions lost in translation; / appreciating them, however, / turns an ordinary meal / into an instant bridge across cultures.',
      'Navigating a new food culture / also teaches humility— / the very mindset required for persuasive global leadership. / A dish like fermented soybean stew or blue cheese / may initially feel like an acquired taste, / yet approaching unfamiliar flavors with genuine curiosity / resonates deeply with hosts. / Rather than rushing to judge what seems strange, / seasoned travelers ask open-ended questions / about the stories and hospitality traditions behind each recipe, / allowing cultural nuance to unfold naturally.',
      'Ultimately, / what turns polite small talk into lasting rapport / is not clever monologue, / but active listening. / When you reflect back / what struck a chord in someone’s story / and stay alert enough to read between the lines, / people feel respected / rather than merely networked with. / In a world where digital deals can feel transactional, / taking the time to break bread and truly listen / remains the surest way / to uncover common ground.'
    ],
    paragraphsKo: [
      '다국적 팀이 식탁에 둘러앉을 때 음식 그 자체는 단순한 끼니에 그치는 법이 거의 없습니다. 음식은 미식 유산과 암묵적 규범이 살아 숨 쉬는 기록 보관소입니다. 한국에서 식탁 가운데 놓인 반찬을 함께 나누어 먹는 것은 따뜻함과 공동체적 신뢰를 뜻하는 반면, 많은 서구권 환경에서는 개별 접시에 담아내는 방식이 개인의 자율성에 대한 존중을 반영합니다. 이런 미묘한 습관을 오독하면 선의가 문화적 오해 속에 사라질 수 있지만, 그 의미를 이해하고 존중하면 평범한 식사가 문화를 잇는 즉각적인 다리가 됩니다.',
      '새로운 음식 문화를 경험하는 일은 또한 설득력 있는 글로벌 리더십에 꼭 필요한 겸손함을 가르쳐 줍니다. 된장찌개나 블루치즈 같은 요리는 처음에는 익숙해져야 맛을 아는 음식처럼 느껴질 수 있지만, 낯선 풍미에 진정성 있는 호기심으로 다가가는 태도는 호스트의 마음에 깊이 울림을 줍니다. 노련한 여행자들은 낯설어 보이는 것을 성급히 판단하는 대신, 각 레시피 뒤에 담긴 이야기와 환대의 전통에 대해 열린 질문을 던지며 문화적 뉘앙스가 자연스럽게 펼쳐지도록 합니다.',
      '궁극적으로 예의 바른 스몰토크를 오래가는 유대감으로 바꾸는 힘은 유창한 독백이 아니라 능동적 경청입니다. 상대의 이야기에서 마음에 와닿은 지점을 되짚어 주고 행간을 읽을 만큼 깨어 있을 때, 사람들은 단순한 인맥 관리 대상이 아니라 존중받는 존재라고 느낍니다. 디지털 거래가 사무적으로 느껴지기 쉬운 세상에서, 함께 식사하며 진심으로 귀 기울이는 시간은 여전히 공통분모를 찾아내는 가장 확실한 길입니다.'
    ],
    keyExpressions: [
      'unspoken norms (말로 하지 않아도 통용되는 암묵적 규범)',
      'lost in translation (언어·문화 차이로 본뜻이 왜곡되거나 사라진)',
      'an acquired taste (처음엔 낯설지만 익숙해질수록 진가를 아는 맛)',
      'resonate deeply with ~ (~의 마음에 깊이 공명하다·와닿다)',
      'read between the lines (말 너머의 행간·숨은 의도를 읽다)',
      'break bread and uncover common ground (함께 식사하며 공통분모를 찾다)'
    ],
    comprehensionQuiz: [
      {
        id: 'd27-rq01',
        questionKo: '1문단에서 한국식 반찬 공유 문화와 서구권 개별 접시(individual plating) 문화를 대조한 의도는?',
        options: [
          '한국 식사 예절이 서구권보다 위생적이지 않음을 지적하기 위해',
          '서로 다른 식사 방식 뒤에 각 문화 고유의 가치관과 암묵적 규범이 담겨 있음을 보여주기 위해',
          '국제 비즈니스 만찬에서는 반드시 뷔페식을 선택해야 함을 주장하기 위해',
          '언어 통역이 완벽하면 식사 문화 차이는 전혀 문제가 되지 않음을 강조하기 위해'
        ],
        answer: '서로 다른 식사 방식 뒤에 각 문화 고유의 가치관과 암묵적 규범이 담겨 있음을 보여주기 위해',
        explanationKo:
          '1문단은 반찬 공유가 warmth/collective trust를, 개별 접시가 personal autonomy에 대한 존중을 반영한다고 설명하며 문화적 암묵적 규범을 대비합니다.'
      },
      {
        id: 'd27-rq02',
        questionKo: '2문단에서 "an acquired taste"가 문맥상 의미하는 바로 가장 적절한 것은?',
        options: [
          '누구나 첫 입에 즉각 반하게 되는 대중적인 맛',
          '처음에는 낯설거나 어렵지만 경험이 쌓이면서 점차 즐기게 되는 맛',
          '비싼 식재료를 써야만 낼 수 있는 고급 미슐랭 요리',
          '외국인 입맛에 맞게 변형된 퓨전 음식'
        ],
        answer: '처음에는 낯설거나 어렵지만 경험이 쌓이면서 점차 즐기게 되는 맛',
        explanationKo:
          '발효 음식(된장찌개)이나 블루치즈처럼 처음엔 낯설지만 시간을 두고 익숙해지며 매력을 알게 되는 맛을 acquired taste라고 합니다.'
      },
      {
        id: 'd27-rq03',
        questionKo: '3문단이 강조하는, 예의 바른 스몰토크를 진정한 유대감(rapport)으로 전환시키는 핵심 요소는?',
        options: [
          '화려한 유머와 빈틈없는 독백으로 식사 분위기를 주도하는 것',
          '능동적 경청을 통해 상대 이야기의 핵심을 되짚고 행간의 의미를 헤아리는 것',
          '식사 도중 곧바로 계약 조건과 수치를 브리핑하는 것',
          '문화 차이에 대한 언급을 철저히 피하고 날씨 이야기만 나누는 것'
        ],
        answer: '능동적 경청을 통해 상대 이야기의 핵심을 되짚고 행간의 의미를 헤아리는 것',
        explanationKo:
          '3문단은 "what turns polite small talk into lasting rapport is not clever monologue, but active listening"이라고 명시합니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd27-v01',
      word: 'cultural nuance',
      phonetic: '/ˈkʌltʃərəl ˈnuːɑːns/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '문화적 뉘앙스, 미묘한 문화적 맥락과 결',
      meaningEn: 'a subtle distinction or unspoken meaning shaped by a particular culture',
      nuanceTipKo: 'cultural difference(단순 차이)보다 말투·예절·거리감 속에 숨은 섬세한 결을 짚을 때 훨씬 세련된 C1 표현입니다.',
      exampleEn: 'Missing a tiny cultural nuance in tone can unintentionally derail a warm negotiation.',
      exampleKo: '어조 속 작은 문화적 뉘앙스를 놓치면 의도치 않게 훈훈하던 협상이 어긋날 수 있습니다.'
    },
    {
      id: 'd27-v02',
      word: 'resonate with',
      phonetic: '/ˈrezəneɪt wɪð/',
      pos: '동사구',
      cefr: 'c1',
      meaningKo: '~의 마음에 깊이 울림을 주다, 강한 공감을 불러일으키다',
      meaningEn: 'to evoke strong emotional agreement, understanding, or personal connection',
      nuanceTipKo: '"That story really resonated with me."는 "그 이야기가 정말 깊이 와닿았어요"라는 최고급 경청 피드백입니다.',
      exampleEn: 'Your point about food preserving family memory really resonated with everyone at the table.',
      exampleKo: '음식이 가족의 기억을 지켜준다는 말씀이 식탁의 모든 분들에게 깊이 와닿았어요.'
    },
    {
      id: 'd27-v03',
      word: 'active listening',
      phonetic: '/ˈæktɪv ˈlɪsənɪŋ/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '능동적 경청 (상대의 말과 감정을 집중해 듣고 핵심을 되짚어 주는 듣기)',
      meaningEn: 'fully concentrating on, understanding, and thoughtfully reflecting what a speaker says',
      nuanceTipKo: '단순히 조용히 기다리는 listening이 아니라, 요점 확인·공감·열린 질문으로 이어지는 설득력 있는 경청 기술입니다.',
      exampleEn: 'Active listening often persuades hesitant partners far more effectively than a polished pitch.',
      exampleKo: '능동적 경청은 매끈한 발표보다 망설이는 파트너를 훨씬 효과적으로 설득하곤 합니다.'
    },
    {
      id: 'd27-v04',
      word: 'culinary heritage',
      phonetic: '/ˈkʌlɪneri ˈherɪtɪdʒ/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '미식 유산, 세대를 이어온 고유한 식문화 전통',
      meaningEn: 'traditional dishes, ingredients, and dining practices passed down through generations',
      nuanceTipKo: 'traditional food 대신 culinary heritage를 쓰면 글로벌 만찬·여행 칼럼에서 교양 수준이 확 올라갑니다.',
      exampleEn: 'Korea’s fermentation techniques are a cornerstone of its rich culinary heritage.',
      exampleKo: '한국의 발효 기술은 풍요로운 미식 유산의 초석입니다.'
    },
    {
      id: 'd27-v05',
      word: 'acquired taste',
      phonetic: '/əˈkwaɪərd ˈteɪst/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '처음엔 낯설지만 익숙해질수록 매력을 느끼게 되는 맛(취향)',
      meaningEn: 'something initially unfamiliar or strong that people come to appreciate over time',
      nuanceTipKo: '외국인에게 청국장·홍어·고수·블루치즈 등을 소개할 때 기분 상하지 않고 우아하게 설명하는 만능 표현입니다!',
      exampleEn: 'Aged kimchi can be an acquired taste at first, yet most visitors grow hooked on its depth.',
      exampleKo: '묵은지는 처음엔 낯선 맛일 수 있지만, 대부분 그 깊은 풍미에 빠져들게 됩니다.'
    },
    {
      id: 'd27-v06',
      word: 'break bread',
      phonetic: '/breɪk ˈbred/',
      pos: '관용구',
      cefr: 'c2',
      meaningKo: '함께 식사를 나누며 격의 없는 유대감을 다지다',
      meaningEn: 'to share a meal together in a spirit of friendship, trust, and hospitality',
      nuanceTipKo: '단순 eat together가 아니라 "식탁을 함께하며 마음을 열다"라는 품격 높은 C2 관용구입니다.',
      exampleEn: 'Breaking bread with our Tokyo partners dissolved months of email tension in one evening.',
      exampleKo: '도쿄 파트너들과 함께 식사를 나누니 몇 달간 이메일로 쌓였던 긴장이 하룻밤 만에 녹아내렸습니다.'
    },
    {
      id: 'd27-v07',
      word: 'bridge the divide',
      phonetic: '/brɪdʒ ðə dɪˈvaɪd/',
      pos: '동사구',
      cefr: 'c1',
      meaningKo: '(문화·세대·의견 간의) 간극을 좁히고 다리를 놓다',
      meaningEn: 'to connect two separated groups or perspectives and foster mutual understanding',
      nuanceTipKo: 'bridge the cultural divide / bridge the gap은 글로벌 협업과 외교·비즈니스 담론의 핵심 연어입니다.',
      exampleEn: 'Curiosity about local customs goes a long way toward bridging the cultural divide.',
      exampleKo: '현지 관습에 대한 호기심은 문화적 간극을 좁히는 데 큰 역할을 합니다.'
    },
    {
      id: 'd27-v08',
      word: 'unspoken norm',
      phonetic: '/ʌnˈspoʊkən ˈnɔːrm/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '불문율, 말로 명시하지 않아도 모두가 따르는 암묵적 규범',
      meaningEn: 'an implicit social rule widely understood without ever being formally stated',
      nuanceTipKo: '식사 예절, 팁 문화, 호칭 등 문화권마다 다른 "눈치·예의"를 정확하게 영어로 옮길 때 최고의 표현입니다.',
      exampleEn: 'Knowing the unspoken norms around tipping saves travelers from awkward moments.',
      exampleKo: '팁 문화에 얽힌 암묵적 규범을 알아두면 여행 중 어색한 순간을 피할 수 있습니다.'
    },
    {
      id: 'd27-v09',
      word: 'hospitality',
      phonetic: '/ˌhɑːspɪˈtæləti/',
      pos: '명사',
      cefr: 'c1',
      meaningKo: '환대, 손님을 정성껏 맞이하고 대접하는 문화·태도',
      meaningEn: 'the warm, generous reception and entertainment of guests or visitors',
      nuanceTipKo: '한국의 "정(情)"과 푸짐한 상차림 문화를 외국인에게 설명할 때 warmth and hospitality 조합이 가장 정확합니다.',
      exampleEn: 'In many Asian cultures, offering guests generous portions is an expression of hospitality.',
      exampleKo: '많은 아시아 문화권에서 손님에게 음식을 넉넉히 권하는 것은 환대의 표현입니다.'
    },
    {
      id: 'd27-v10',
      word: 'authentic',
      phonetic: '/ɔːˈθentɪk/',
      pos: '형용사',
      cefr: 'c1',
      meaningKo: '진정성 있는; (음식·문화가) 현지 본연의 맛과 멋을 살린 정통의',
      meaningEn: 'genuine, true to original tradition, or sincere rather than artificial',
      nuanceTipKo: '음식(authentic local cuisine)과 인간관계(authentic rapport) 양쪽 모두에서 빛나는 필수 형용사입니다.',
      exampleEn: 'We skipped the tourist strip to look for an authentic neighborhood trattoria.',
      exampleKo: '우리는 관광객 거리를 지나쳐 현지 정통 동네 트라토리아를 찾아갔습니다.'
    },
    {
      id: 'd27-v11',
      word: 'strike a chord',
      phonetic: '/straɪk ə ˈkɔːrd/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '(마음의 현을 울리듯) 깊은 공감을 자아내다, 심금을 울리다',
      meaningEn: 'to trigger a strong sense of recognition, sympathy, or emotional resonance',
      nuanceTipKo: 'strike a chord with someone 형태로 resonate with와 번갈아 쓰면 고급 회화 어휘 폭이 확 넓어집니다.',
      exampleEn: 'Her reflection on Sunday family dinners really struck a chord with our Milan clients.',
      exampleKo: '일요일 가족 저녁 식사에 대한 그녀의 회상이 밀라노 고객들의 깊은 공감을 자아냈습니다.'
    },
    {
      id: 'd27-v12',
      word: 'rapport',
      phonetic: '/ræˈpɔːr/',
      pos: '명사',
      cefr: 'c1',
      meaningKo: '라포, 서로 마음이 통하는 친밀한 신뢰 관계·유대감',
      meaningEn: 'a close, harmonious relationship built on mutual understanding and easy communication',
      nuanceTipKo: '프랑스어 유래라 끝의 t는 묵음(/ræˈpɔːr/)입니다! build rapport / establish instant rapport 연어로 외우세요.',
      exampleEn: 'Ten minutes of genuine small talk can build more rapport than twenty formal emails.',
      exampleKo: '진정성 있는 스몰토크 10분이 격식 이메일 스무 통보다 더 깊은 유대감을 쌓아줍니다.'
    },
    {
      id: 'd27-v13',
      word: 'read between the lines',
      phonetic: '/riːd bɪˈtwiːn ðə ˈlaɪnz/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '행간을 읽다, 겉으로 한 말 너머의 숨은 의도와 속내를 파악하다',
      meaningEn: 'to sense an implied meaning or feeling that is not explicitly stated',
      nuanceTipKo: '고맥락 문화(한국·일본·영국식 완곡 화법 등)의 소통 원리를 설명할 때 필수적인 관용구입니다.',
      exampleEn: 'In high-context cultures, effective communicators know how to read between the lines.',
      exampleKo: '고맥락 문화에서는 유능한 소통가일수록 말 너머의 행간을 읽을 줄 압니다.'
    },
    {
      id: 'd27-v14',
      word: 'lost in translation',
      phonetic: '/lɔːst ɪn trænzˈleɪʃən/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '번역·문화 전달 과정에서 본래의 미묘한 뜻과 정서가 사라진',
      meaningEn: 'failing to convey the original subtlety or humor when moved into another language or culture',
      nuanceTipKo: '단순 오역을 넘어 문화적 정서나 유머가 그대로 옮겨지지 않을 때 원어민이 즐겨 쓰는 우아한 표현입니다.',
      exampleEn: 'Some regional idioms lose their warmth and get slightly lost in translation.',
      exampleKo: '일부 지역 관용어는 번역 과정에서 특유의 온기가 조금 사라지곤 합니다.'
    },
    {
      id: 'd27-v15',
      word: 'common ground',
      phonetic: '/ˌkɑːmən ˈɡraʊnd/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '공통분모, 서로 동의하고 연결될 수 있는 공통 기반',
      meaningEn: 'shared interests, values, or beliefs that form a basis for agreement',
      nuanceTipKo: 'find / uncover / establish common ground 연어로 글로벌 스몰토크와 협상 모두에 두루 활용됩니다.',
      exampleEn: 'Comparing favorite street foods is an effortless way to find common ground abroad.',
      exampleKo: '좋아하는 길거리 음식을 비교해 보는 것은 해외에서 공통분모를 찾는 아주 자연스러운 방법입니다.'
    }
  ],
  dialogue: [
    {
      id: 'd27-t01',
      speaker: 'Minjun',
      roleLabel: '서울 파트너십 리드',
      voicePitch: 0.94,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'zoom-in',
      english:
        'Welcome to Seoul, Claire and Marco! Before we dive into the menu, feel free to share everything from the center—in Korean dining culture, sharing side dishes is a core part of hospitality.',
      slashBroken:
        'Welcome to Seoul, / Claire and Marco! / Before we dive into the menu, / feel free to share everything from the center— / in Korean dining culture, / sharing side dishes / is a core part of hospitality.',
      korean:
        '서울에 오신 걸 환영해요, 클레어, 마르코! 메뉴를 고르기 전에 가운데 반찬들은 편하게 나눠 드세요—한국 식문화에서는 반찬을 함께 나누는 게 환대의 핵심이거든요.',
      keyHighlight: 'a core part of hospitality',
      noteKo: '문화 차이를 어색하게 방치하지 않고 먼저 따뜻하게 맥락을 설명해 주면 게스트의 심리적 긴장이 즉시 풀립니다.'
    },
    {
      id: 'd27-t02',
      speaker: 'Marco',
      roleLabel: '밀라노 브랜드 컨설턴트',
      voicePitch: 0.91,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'pan-right',
      english:
        'That actually resonates deeply with Italian culture! Growing up in Milan, Sunday lunch was a three-hour ritual where nobody rushed—breaking bread was how we stayed close as a family.',
      slashBroken:
        'That actually resonates deeply / with Italian culture! / Growing up in Milan, / Sunday lunch was a three-hour ritual / where nobody rushed— / breaking bread was how we stayed close / as a family.',
      korean:
        '그게 사실 이탈리아 문화와도 깊이 통하네요! 밀라노에서 자랄 때 일요일 점심은 아무도 서두르지 않는 세 시간짜리 의식이었거든요—함께 식사하는 게 가족이 가까움을 유지하는 방식이었어요.',
      keyHighlight: 'resonates deeply with ~ ritual where nobody rushed',
      noteKo: 'relatable한 자기 경험을 연결하며 추상적 관계부사 where(a ritual where...)를 자연스럽게 구사했습니다.'
    },
    {
      id: 'd27-t03',
      speaker: 'Claire',
      roleLabel: '런던 클라이언트 디렉터',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'pan-left',
      english:
        'What struck a chord with me is how food carries so many unspoken norms. In London, if someone says a dish is "quite interesting," you sometimes have to read between the lines!',
      slashBroken:
        'What struck a chord with me / is how food carries so many unspoken norms. / In London, / if someone says a dish is "quite interesting," / you sometimes have to / read between the lines!',
      korean:
        '제 마음에 확 와닿은 건 음식이 정말 많은 암묵적 규범을 담고 있다는 점이에요. 런던에선 누가 어떤 요리가 "꽤 흥미롭네"라고 하면 가끔 행간을 읽어야 하거든요!',
      keyHighlight: 'What struck a chord with me ~ unspoken norms ~ read between the lines',
      noteKo: '영국식 완곡 화법을 유머러스하게 곁들이면서 상대의 말을 경청했다는 신호(What struck a chord with me)를 보냈습니다.'
    },
    {
      id: 'd27-t04',
      speaker: 'Minjun',
      roleLabel: '서울 파트너십 리드',
      voicePitch: 0.94,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'zoom-in',
      english:
        'Ha, that is a classic cultural nuance! If I’m hearing you right, Claire, polite understatement in the UK can easily get lost in translation when working with more direct teams.',
      slashBroken:
        'Ha, / that is a classic cultural nuance! / If I’m hearing you right, Claire, / polite understatement in the UK / can easily get lost in translation / when working with more direct teams.',
      korean:
        '하하, 정말 대표적인 문화적 뉘앙스네요! 제가 제대로 이해했다면 클레어, 영국의 정중한 완곡 표현이 좀 더 직설적인 팀과 일할 땐 본뜻이 쉽게 놓쳐질 수 있다는 말씀이시죠?',
      keyHighlight: 'If I’m hearing you right ~ lost in translation',
      noteKo: '능동적 경청의 정석인 재진술(paraphrasing) 패턴 "If I’m hearing you right, ~"로 대화의 깊이를 한 단계 끌어올립니다.'
    },
    {
      id: 'd27-t05',
      speaker: 'Claire',
      roleLabel: '런던 클라이언트 디렉터',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_media_podcast.jpg',
      cameraMotion: 'pan-right',
      english:
        'Exactly—you nailed it. And speaking of authentic flavors, I’ve been eager to try fermented soybean stew tonight, even if you warn me it’s an acquired taste!',
      slashBroken:
        'Exactly— / you nailed it. / And speaking of authentic flavors, / I’ve been eager to try / fermented soybean stew tonight, / even if you warn me / it’s an acquired taste!',
      korean:
        '정확해요, 딱 짚어주셨네요. 그리고 정통 현지 풍미 이야기가 나와서 말인데, 처음엔 낯선 맛일 수 있다고 하셔도 오늘 밤 된장찌개는 꼭 먹어보고 싶었어요!',
      keyHighlight: 'authentic flavors ~ an acquired taste',
      noteKo: 'And speaking of ~ 로 자연스럽게 화제를 식사 메뉴로 되돌리며 호기심과 열린 태도를 보여줍니다.'
    },
    {
      id: 'd27-t06',
      speaker: 'Marco',
      roleLabel: '밀라노 브랜드 컨설턴트',
      voicePitch: 0.91,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'pan-left',
      english:
        'Count me in! Honestly, evenings like this—where we slow down, swap stories, and find common ground over great food—build far stronger rapport than any slide deck ever could.',
      slashBroken:
        'Count me in! / Honestly, evenings like this— / where we slow down, swap stories, / and find common ground over great food— / build far stronger rapport / than any slide deck ever could.',
      korean:
        '저도 끼워주세요! 솔직히 이렇게 속도를 늦추고 이야기를 나누며 맛있는 음식으로 공통분모를 찾는 저녁이 그 어떤 발표 슬라이드보다 훨씬 탄탄한 유대감을 만들어 주네요.',
      keyHighlight: 'find common ground ~ build far stronger rapport',
      noteKo: 'evenings like this—where ...—처럼 삽입절로 감동을 살린 뒤 rapport로 만찬 대화를 완벽히 마무리합니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 설득력 있는 능동적 경청(Active Listening)의 3단 재진술 패턴',
      coreFormula: '① 공감 신호 (That really resonated with me / What struck a chord is...) → ② 핵심 재진술 (If I’m hearing you right, ...) → ③ 열린 확장 질문',
      wrongKonglish: 'Oh, I see. Really? Good. By the way, I want to talk about my topic now.',
      rightNative:
        'What struck a chord with me is your point about family rituals. If I’m hearing you right, slowing down together matters more than the menu itself—how has that shaped your team culture?',
      explanationKo:
        '글로벌 만찬이나 네트워킹에서 한국인이 자주 범하는 실수는 "I see / Oh really?"만 반복하다가 갑자기 내 이야기로 넘어가는 것입니다. 상대 발언의 핵심 키워드를 내 언어로 살짝 바꿔 되짚어 주는(paraphrasing) "If I’m hearing you right, ~" 한 문장만 넣어도 상대는 깊은 존중감과 즉각적인 라포(rapport)를 느낍니다.',
      registerSpectrum: {
        casual: 'Wait, I totally felt that! So you mean the vibe matters way more than fancy food, right?',
        standard: 'That really resonated with me. If I’m hearing you right, shared meals are central to trust there.',
        formal:
          'What particularly struck a chord was your observation on unspoken norms; if I understand you correctly, alignment begins long before formal talks.'
      }
    },
    {
      title: '원리 02 · 문화 일반화(Stereotyping)를 피하는 세련된 완곡 비교 구문',
      coreFormula: 'tend to V / is widely viewed as ~ / whereas in [문화 B], ... / can easily get lost in translation',
      wrongKonglish: 'Korean people always share food and Western people never share because they are selfish.',
      rightNative:
        'In Korea, sharing dishes from the center tends to signal warmth, whereas in many Western settings, individual plating is widely viewed as respecting autonomy.',
      explanationKo:
        '문화 차이를 말할 때 always / never / all Koreans 같은 절대어를 쓰면 고정관념(stereotyping)처럼 들려 교양 회화에서 감점 요인이 됩니다. tend to(~하는 경향이 있다), in many settings(많은 환경에서), is widely viewed as(~로 널리 여겨지다), whereas(반면에)를 활용하면 객관적이고 품격 있는 C1 문화 비교가 완성됩니다.',
      registerSpectrum: {
        casual: 'In Korea people usually share side dishes, while in the West everyone tends to get their own plate.',
        standard: 'Sharing food tends to signal warmth in Korea, whereas individual plating often reflects personal space.',
        formal:
          'Whereas communal dining traditionally conveys collective hospitality in East Asia, individual plating is widely viewed in Western etiquette as honoring autonomy.'
      }
    },
    {
      title: '원리 03 · 추상적 공간·문화·상황을 매끄럽게 수식하는 관계부사 where 확장',
      coreFormula: 'a culture / setting / ritual / world + where + [완전한 절]',
      wrongKonglish: 'Sunday lunch was a ritual which nobody rushed in that time.',
      rightNative:
        'Sunday lunch was a three-hour ritual where nobody rushed, in a world where digital deals often feel transactional.',
      explanationKo:
        '관계부사 where는 물리적 장소(city, cafe)뿐 아니라 culture(문화), tradition(전통), ritual(의식), situation(상황), evening(저녁 시간) 같은 추상적 무대를 수식할 때 원어민이 가장 즐겨 씁니다. 뒤에는 빠진 성분 없는 완전한 문장이 온다는 점만 기억하세요!',
      registerSpectrum: {
        casual: 'I love dinners where everyone puts their phones away and actually talks.',
        standard: 'It is a dining culture where sharing dishes builds quick rapport.',
        formal: 'In an environment where unspoken norms govern trust, cultural literacy becomes decisive.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd27-s01',
      drillType: 'chunk-build',
      promptKo: '능동적 경청을 실천하고 문화적 뉘앙스를 존중하면 가벼운 식사도 깊은 유대감을 쌓아줍니다.',
      promptEnHint: 'When절에 active listening과 cultural nuance를 연결해 조립하세요.',
      targetEn: 'When you practice active listening and appreciate cultural nuance, even a casual meal builds rapport.',
      chunks: [
        'When you practice active listening',
        'and appreciate cultural nuance,',
        'even a casual meal',
        'builds rapport.'
      ],
      explanationKo: 'active listening, cultural nuance, build rapport 세 핵심 연어를 자연스럽게 결합했습니다.'
    },
    {
      id: 'd27-s02',
      drillType: 'konglish-fix',
      promptKo: '"일요일 가족 식사에 대한 그 이야기가 제 마음에 깊이 와닿았어요." — 가장 자연스러운 C1 표현은?',
      promptEnHint: 'touched my mind deeply 같은 직역을 피하세요!',
      targetEn: 'That story about Sunday family dinners really resonated with me.',
      wrongKonglishOption: 'That story about Sunday family dinners really touched my mind deeply.',
      explanationKo: '깊이 와닿고 공명했다는 뉘앙스는 resonated with me 또는 struck a chord with me가 원어민 정석입니다.'
    },
    {
      id: 'd27-s03',
      drillType: 'active-blank',
      promptKo: '영국식 완곡 화법을 들을 때는 가끔 말 너머의 행간을 읽어야 합니다.',
      promptEnHint: '행간을 읽다: read _______ the lines',
      targetEn: 'When listening to British understatement, you sometimes need to read between the lines.',
      blankData: {
        before: 'When listening to British understatement, you sometimes need to read',
        answer: 'between',
        after: 'the lines.',
        firstLetterHint: 'b______ (7글자)'
      },
      explanationKo: 'read between the lines는 글자 그대로 표현되지 않은 숨은 의도를 파악한다는 핵심 관용구입니다.'
    },
    {
      id: 'd27-s04',
      drillType: 'chunk-build',
      promptKo: '된장찌개는 처음엔 낯선 맛일 수 있지만, 곧 그 깊은 풍미에 빠져들게 됩니다.',
      promptEnHint: 'an acquired taste 관용구를 활용해 조립하세요.',
      targetEn: 'Fermented soybean stew can be an acquired taste, yet most visitors grow to love its depth.',
      chunks: [
        'Fermented soybean stew',
        'can be an acquired taste,',
        'yet most visitors',
        'grow to love its depth.'
      ],
      explanationKo: 'an acquired taste는 처음엔 생소하지만 점차 진가를 알게 되는 맛을 우아하게 설명합니다.'
    },
    {
      id: 'd27-s05',
      drillType: 'active-blank',
      promptKo: '문화적 맥락을 놓치면 좋은 의도도 전달 과정에서 본뜻이 쉽게 사라질 수 있습니다.',
      promptEnHint: '번역·문화 전달 중 본뜻을 잃다: lost in ___________',
      targetEn: 'Good intentions can easily get lost in translation across cultures.',
      blankData: {
        before: 'Good intentions can easily get lost in',
        answer: 'translation',
        after: 'across cultures.',
        firstLetterHint: 't__________ (11글자)'
      },
      explanationKo: 'get lost in translation은 언어·문화 차이로 뉘앙스가 증발해 버릴 때 쓰는 관용구입니다.'
    },
    {
      id: 'd27-s06',
      drillType: 'konglish-fix',
      promptKo: '"제가 제대로 이해했다면, 현지 관습을 존중하는 게 협상 전 신뢰를 쌓는 핵심이군요."',
      promptEnHint: '능동적 경청 재진술 오프닝을 고르세요.',
      targetEn: 'If I’m hearing you right, respecting local customs is key to building trust before talks.',
      wrongKonglishOption: 'If my ear listens you correctly, respecting local customs is key to trust.',
      explanationKo: '"If I’m hearing you right, ~"는 원어민이 상대 말을 요약·확인할 때 가장 자주 쓰는 자연스러운 경청 프레임입니다.'
    },
    {
      id: 'd27-s07',
      drillType: 'chunk-build',
      promptKo: '함께 식사를 나누며 진심으로 경청하는 것이 공통분모를 찾는 가장 확실한 길입니다.',
      promptEnHint: 'break bread와 common ground를 연결해 조립하세요.',
      targetEn: 'Breaking bread together and truly listening remains the surest way to find common ground.',
      chunks: [
        'Breaking bread together',
        'and truly listening',
        'remains the surest way',
        'to find common ground.'
      ],
      explanationKo: 'break bread(격의 없이 식사를 나누다)와 find common ground(공통분모를 찾다)의 품격 높은 결합입니다.'
    },
    {
      id: 'd27-s08',
      drillType: 'active-blank',
      promptKo: '일요일 저녁 식사에 대한 그녀의 회상이 모든 고객의 깊은 공감을 자아냈습니다.',
      promptEnHint: '마음의 현을 울리다: struck a _____ with',
      targetEn: 'Her reflection on family dinners really struck a chord with every client.',
      blankData: {
        before: 'Her reflection on family dinners really struck a',
        answer: 'chord',
        after: 'with every client.',
        firstLetterHint: 'c____ (5글자)'
      },
      explanationKo: 'strike a chord with ~ (과거형 struck a chord)는 깊은 공감과 울림을 준다는 관용구입니다.'
    },
    {
      id: 'd27-s09',
      drillType: 'chunk-build',
      promptKo: '디지털 거래가 사무적으로 느껴지는 세상에서는 직접 만나 쌓는 유대감이 더욱 소중합니다.',
      promptEnHint: '추상적 관계부사 where를 활용해 조립하세요.',
      targetEn: 'In a world where digital deals feel transactional, face-to-face rapport matters more than ever.',
      chunks: [
        'In a world where',
        'digital deals feel transactional,',
        'face-to-face rapport',
        'matters more than ever.'
      ],
      explanationKo: 'In a world where + 완전한 절 구조로 시대적 배경을 세련되게 제시합니다.'
    },
    {
      id: 'd27-s10',
      drillType: 'active-blank',
      promptKo: '현지 음식 문화에 진심 어린 호기심을 보이는 것은 문화적 간극을 좁히는 데 큰 도움이 됩니다.',
      promptEnHint: '간극에 다리를 놓다(동사, b로 시작): ______ the cultural divide',
      targetEn: 'Genuine curiosity about local food helps bridge the cultural divide.',
      blankData: {
        before: 'Genuine curiosity about local food helps',
        answer: 'bridge',
        after: 'the cultural divide.',
        firstLetterHint: 'b_____ (6글자)'
      },
      explanationKo: 'bridge는 명사(다리)뿐 아니라 "~의 간극을 이어주다"라는 강력한 C1 동사로 자주 쓰입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd27-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '동사구 resonate with',
      questionKo: '빈칸에 알맞은 동사 과거형(1단어)을 넣어 "그 이야기가 청중의 마음에 깊이 공명했다"를 완성하세요.',
      stimulusEn: 'Her candid story about homesickness deeply __________ with the international audience.',
      answer: 'resonated',
      explanationKo: 'resonate with ~ 는 깊은 감정적 울림과 공감을 일으킨다는 C1 핵심 동사구입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 같은 의미의 관용구 "struck a _____ with"에서 빈칸(1단어)을 쓰세요.',
        stimulusEn: 'His remark about hospitality immediately struck a __________ with our Seoul hosts.',
        answer: 'chord',
        explanationKo: 'strike a chord with ~ (과거 struck a chord) 관용구입니다.'
      }
    },
    {
      id: 'd27-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '명사 rapport',
      questionKo: '빈칸에 알맞은 명사(1단어, r로 시작)를 넣어 "식사를 함께하며 끈끈한 유대감(라포)을 쌓다"를 완성하세요.',
      stimulusEn: 'Sharing a relaxed dinner helped both teams build instant __________.',
      answer: 'rapport',
      explanationKo: 'build rapport는 서로 마음이 통하는 친밀한 신뢰 관계를 구축한다는 필수 비즈니스·교양 어휘입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "함께 식사를 나누며 마음을 열다" 관용구에서 빈칸(1단어)을 쓰세요.',
        stimulusEn: 'Nothing dissolves formal tension faster than taking time to break __________ together.',
        answer: 'bread',
        explanationKo: 'break bread는 격의 없이 식탁을 함께한다는 C2 관용구입니다.'
      }
    },
    {
      id: 'd27-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '관용구 acquired taste',
      questionKo: '빈칸에 알맞은 형용사(1단어)를 넣어 "처음엔 낯설지만 익숙해질수록 즐기는 맛"을 완성하세요.',
      stimulusEn: 'Strong fermented cheeses are often an __________ taste for first-time visitors.',
      answer: 'acquired',
      explanationKo: 'an acquired taste는 경험이 쌓이며 점차 매력을 알게 되는 맛이나 취향을 뜻합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "정통 현지의, 진정성 있는"을 뜻하는 a로 시작하는 형용사(1단어)를 채우세요.',
        stimulusEn: 'We walked two blocks off the main square to find an __________ local bakery.',
        answer: 'authentic',
        explanationKo: '관광객용이 아닌 본연의 정통 맛과 분위기를 authentic으로 표현합니다.'
      }
    },
    {
      id: 'd27-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '명사구 unspoken norms',
      questionKo: '빈칸에 알맞은 형용사(1단어, u로 시작)를 넣어 "말로 하지 않아도 통하는 암묵적 규범"을 완성하세요.',
      stimulusEn: 'Every dining culture carries its own __________ norms around seating and toasting.',
      answer: 'unspoken',
      explanationKo: 'unspoken norms는 공식 규칙은 아니지만 문화 구성원 모두가 공유하는 불문율을 뜻합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "미식 유산"을 뜻하는 명사구에서 c로 시작하는 형용사(1단어)를 쓰세요.',
        stimulusEn: 'Traditional fermentation methods lie at the heart of Korea’s __________ heritage.',
        answer: 'culinary',
        explanationKo: 'culinary heritage는 세대를 이어온 식문화 유산을 뜻합니다.'
      }
    },
    {
      id: 'd27-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '동사구 bridge the divide',
      questionKo: '빈칸에 알맞은 동사(1단어)를 넣어 "문화적 간극을 좁히고 다리를 놓다"를 완성하세요.',
      stimulusEn: 'Open-ended questions and warm curiosity can quickly __________ the cultural divide.',
      answer: 'bridge',
      explanationKo: 'bridge the divide / bridge the gap은 서로 떨어진 문화나 관점을 연결한다는 C1 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "공통분모를 찾다" 연어에서 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Swapping favorite travel dishes is an easy way to find __________ __________.',
        answer: 'common ground',
        explanationKo: 'find common ground는 서로 공감할 기반을 찾는다는 핵심 연어입니다.'
      }
    },
    {
      id: 'd27-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '추상적 관계부사 where',
      questionKo: '다음 빈칸에 어법상 가장 올바른 관계사는?',
      stimulusEn:
        'Sunday lunch in Milan was a leisurely ritual __________ nobody glanced at a watch.',
      options: ['where', 'which', 'what', 'whom'],
      answer: 'where',
      explanationKo: '뒤 절(nobody glanced at a watch)이 빠진 성분 없는 완전한 절이므로 추상적 무대(ritual)를 받는 관계부사 where가 정확합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "문화적 뉘앙스가 신뢰를 좌우하는 환경"에서 빈칸(1단어)을 채우세요.',
        stimulusEn: 'We operate in a global environment __________ cultural nuance shapes trust.',
        answer: 'where',
        explanationKo: 'environment, culture, setting 등 추상적 공간을 수식할 때 관계부사 where를 씁니다.'
      }
    },
    {
      id: 'd27-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '능동적 경청 화법',
      questionKo: '글로벌 만찬에서 파트너의 이야기를 들은 뒤, 능동적 경청(Active Listening)의 모범을 보여주는 최고의 응답은?',
      stimulusEn: '상대의 발언을 존중하고 핵심을 되짚어 주는 C1 응답을 고르세요.',
      options: [
        'If I’m hearing you right, shared meals play a bigger role in trust there than formal meetings—what a great insight.',
        'Yes, I heard you. Anyway, let me explain our Korean price sheet right now.',
        'Your food culture is very weird compared to ours, so let’s talk about business.',
        'Oh really? Nice. I also like eating dinner every day.'
      ],
      answer: 'If I’m hearing you right, shared meals play a bigger role in trust there than formal meetings—what a great insight.',
      explanationKo: 'If I’m hearing you right로 상대의 요점을 재진술하고 가치를 인정하는 것이 설득력 있는 능동적 경청의 정석입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "말 너머의 행간을 읽다" 관용구에서 빈칸(2단어)을 채우세요.',
        stimulusEn: 'In polite high-context conversations, you often have to read __________ __________ lines.',
        answer: 'between the',
        explanationKo: 'read between the lines 관용구입니다.'
      }
    },
    {
      id: 'd27-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '문화 일반화 회피 완곡 표현',
      questionKo: '한국과 서구권의 식문화 차이를 고정관념 없이 가장 객관적이고 품격 있게 비교한 문장은?',
      stimulusEn: '완곡 비교 표현(tend to, whereas, widely viewed as)에 주목하세요.',
      options: [
        'In Korea, sharing side dishes tends to signal warmth, whereas individual plating is widely viewed in the West as respecting personal space.',
        'All Koreans always share every bowl while Western people hate sharing anything.',
        'Korean dining is better than Western dining because Western people eat lonely.',
        'Western culture never has hospitality, but Korea always has hospitality.'
      ],
      answer: 'In Korea, sharing side dishes tends to signal warmth, whereas individual plating is widely viewed in the West as respecting personal space.',
      explanationKo: 'tends to, whereas, is widely viewed as를 사용하면 편견 없는 세련된 C1 비교 문장이 됩니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "손님을 정성껏 맞이하는 환대"를 뜻하는 h로 시작하는 명사(1단어)를 쓰세요.',
        stimulusEn: 'Offering generous portions to guests is a traditional sign of Korean __________.',
        answer: 'hospitality',
        explanationKo: 'hospitality는 따뜻한 대접과 환대의 문화를 가리킵니다.'
      }
    },
    {
      id: 'd27-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '관용구 lost in translation',
      questionKo: '다음 문장의 밑줄 친 "lost in translation"이 의미하는 바로 가장 적절한 것은?',
      stimulusEn: 'Subtle regional humor often gets lost in translation during cross-border video calls.',
      options: [
        '언어와 문화 맥락이 달라지면서 본래의 미묘한 재미나 의도가 제대로 전해지지 않는다',
        '통역사가 회의 도중 오디오 연결이 끊겨 퇴장했다',
        '문서 번역 비용이 예산을 초과해 프로젝트가 중단되었다',
        '외국어 표현이 현지어보다 훨씬 더 선명하게 이해된다'
      ],
      answer: '언어와 문화 맥락이 달라지면서 본래의 미묘한 재미나 의도가 제대로 전해지지 않는다',
      explanationKo: 'get lost in translation은 언어·문화 장벽을 넘으며 본래 뉘앙스나 유머가 희석되는 현상을 뜻합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "미묘한 문화적 뉘앙스"에서 n으로 시작하는 명사(1단어)를 채우세요.',
        stimulusEn: 'Global leaders pay close attention to cultural __________ in tone and timing.',
        answer: 'nuance',
        explanationKo: 'cultural nuance는 말투·관습 속 섬세한 결을 의미합니다.'
      }
    },
    {
      id: 'd27-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'not A, but B 병렬 강조',
      questionKo: '다음 빈칸에 들어갈 어법상·문맥상 가장 자연스러운 연결 구조는?',
      stimulusEn:
        'What turns polite small talk into lasting trust is not clever monologue, __________ active listening.',
      options: ['but', 'whereas', 'unless', 'despite'],
      answer: 'but',
      explanationKo: 'not A, but B(A가 아니라 바로 B) 상관접속사 구조로 핵심 메시지를 선명히 대비합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "능동적 경청"을 뜻하는 2단어 핵심 용어를 쓰세요.',
        stimulusEn: 'Strong cross-cultural rapport begins with __________ __________.',
        answer: 'active listening',
        explanationKo: 'active listening은 집중과 재진술을 동반한 설득적 경청입니다.'
      }
    },
    {
      id: 'd27-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '능동적 경청 What절 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 경청 공감 문장을 완성하세요.',
      stimulusEn: '[ so many unspoken norms. / What struck a chord / is how food carries / with me ]',
      answer: 'What struck a chord with me is how food carries so many unspoken norms.',
      explanationKo: '[주어] What struck a chord with me + [동사] is + [보어절] how food carries so many unspoken norms.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "제 마음에 깊이 와닿은 것은 그들의 따뜻한 환대였습니다." (What really resonated / with me / was their warm hospitality.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'What really resonated with me was their warm hospitality.',
        explanationKo: 'What절 강조 구문과 resonate with를 결합합니다.'
      }
    },
    {
      id: 'd27-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '문화 비교 whereas 배열',
      questionKo: '주어진 청크를 배열하여 세련된 문화 비교 문장을 완성하세요.',
      stimulusEn: '[ individual plating signals autonomy. / Sharing dishes / whereas / tends to signal warmth, ]',
      answer: 'Sharing dishes tends to signal warmth, whereas individual plating signals autonomy.',
      explanationKo: 'tends to(완곡 표현)와 whereas(대조 접속사)로 두 문화의 의미를 균형 있게 대비합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "어떤 팀은 직설적인 반면, 다른 팀은 행간을 읽는다." (Some teams are direct, / whereas others / read between the lines.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Some teams are direct, whereas others read between the lines.',
        explanationKo: 'whereas로 두 소통 스타일을 객관적으로 대조합니다.'
      }
    },
    {
      id: 'd27-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'break bread & rapport 영작',
      questionKo: '우리말 뜻에 맞게 break bread와 rapport를 활용하여 영작하세요.',
      stimulusEn:
        '우리말: 파트너들과 함께 식사를 나누는 것은 그 어떤 슬라이드보다 강한 유대감을 쌓아줍니다.\n(힌트: Breaking bread with partners / builds stronger rapport / than any slide deck.)',
      answer: 'Breaking bread with partners builds stronger rapport than any slide deck.',
      explanationKo: '동명사 주어(Breaking bread with partners)는 단수 동사 builds로 수일치합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "진정성 있는 호기심은 문화적 간극을 좁히는 데 도움이 된다." (Genuine curiosity / helps bridge / the cultural divide.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Genuine curiosity helps bridge the cultural divide.',
        explanationKo: 'help + 동사원형(bridge) 구조로 간결하게 작성합니다.'
      }
    },
    {
      id: 'd27-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시·관계부사 오류 교정',
      questionKo: '다음 문장의 어색한 표현 2곳(touched my mind, ritual which)을 고쳐 자연스러운 C1 문장으로 쓰세요.',
      stimulusEn: '오류 문장: Your story touched my mind because dinner is a ritual which nobody rushes.',
      answer: 'Your story resonated with me because dinner is a ritual where nobody rushes.',
      acceptableAlt: [
        'Your story struck a chord with me because dinner is a ritual where nobody rushes.',
        'Your story resonated with me because dinner is a ritual in which nobody rushes.'
      ],
      explanationKo: 'touched my mind → resonated with me (또는 struck a chord with me), 완전한 절을 받는 ritual which → ritual where(또는 in which)로 교정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: Good intentions can easily lost in translate. (get lost in ~ 관용구로 2곳 교정)',
        stimulusEn: '바른 문장 전체를 작성하세요.',
        answer: 'Good intentions can easily get lost in translation.',
        explanationKo: 'get lost in translation 정확한 관용구 형태를 익힙니다.'
      }
    },
    {
      id: 'd27-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '능동적 경청 재진술 영작',
      questionKo: '우리말 뜻에 맞게 If I’m hearing you right를 사용하여 재진술 문장을 완성하세요.',
      stimulusEn:
        '우리말: 제가 제대로 이해했다면, 정중한 완곡 표현은 때때로 문화 전달 과정에서 본뜻이 사라질 수 있군요.\n(힌트: If I’m hearing you right, / polite understatement / can sometimes get lost in translation.)',
      answer: 'If I’m hearing you right, polite understatement can sometimes get lost in translation.',
      acceptableAlt: [
        "If I'm hearing you right, polite understatement can sometimes get lost in translation."
      ],
      explanationKo: '능동적 경청 오프닝(If I’m hearing you right,)과 lost in translation을 완벽하게 결합했습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "유대감을 쌓는 것은 유창한 독백이 아니라 능동적 경청이다." (What builds rapport / is not clever monologue, / but active listening.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'What builds rapport is not clever monologue, but active listening.',
        explanationKo: 'What절 주어 + not A, but B 강조 구문으로 깔끔하게 영작합니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      'Imagine you are hosting international colleagues for dinner in Korea. How would you introduce one unique dish or unspoken dining norm so it resonates with them rather than feeling overwhelming?',
    openingQuestionKo:
      '해외 동료들을 한국의 저녁 식사에 초대했다고 상상해 보세요. 낯선 음식 하나나 한국 특유의 식사 문화를 상대가 부담 느끼지 않고 공감하도록 어떻게 소개하시겠어요?',
    followUpQuestionEn:
      'That was so warm and insightful! Now suppose your guest shares a food tradition from their home country—how would you respond using active listening to find common ground?',
    followUpQuestionKo:
      '정말 따뜻하고 품격 있는 소개였어요! 이제 상대방이 자기 나라의 음식 전통을 들려줬다고 가정하고, 능동적 경청 표현으로 공통분모를 찾아 화답해 보세요.',
    recommendedChunks: [
      'culinary heritage',
      'an acquired taste',
      'unspoken norms',
      'resonated deeply with me',
      'If I’m hearing you right, ~',
      'build genuine rapport'
    ],
    modelAnswerEn:
      'Welcome! One dish I’d love to introduce from Korea’s culinary heritage is aged kimchi stew—it can be an acquired taste at first, yet sharing side dishes from the center is an unspoken norm that signals warmth and hospitality. What you just shared about Sunday family lunches in Italy really resonated with me; if I’m hearing you right, slowing down to break bread is how both our cultures build genuine rapport.'
  }
};
