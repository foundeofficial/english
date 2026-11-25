import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day9Module: DayLessonModule = {
  dayNumber: 9,
  weekNumber: 2,
  cefrLevel: 'b1',
  isWeeklyReview: false,
  dayBadge: 'DAY 09 · 호텔 체크인 & 현지 길 묻기',
  categoryLabel: '해외 숙박·교통 B1 실전 대응',
  title: '숙박 연장하고 무료 조식도 가능할까요?',
  subtitle: '예약 확인·룸 업그레이드·레이트 체크아웃 요청부터 시내 대중교통과 도보 길 묻기까지 간접의문문으로 품격 있게 소통하는 법',
  heroImage: 'assets/scene_airport_travel.jpg',
  secondaryImage: 'assets/scene_cafe_detour.jpg',
  estimatedSprintMin: 8,
  estimatedLectureMin: 40,
  keyExpression: 'extend my stay / get around / complimentary',
  keySentenceByTier: {
    a1: 'I have a hotel reservation under Kim. Is breakfast free?',
    a2: 'I have a reservation under Yuna Kim. Is breakfast complimentary, and how do I get around downtown?',
    b1: 'Would it be possible to extend my stay by one night, and could you tell me how to get around by subway?',
    b2: 'I was wondering if any complimentary room upgrades are available and whether the art museum is within walking distance.',
    c1: 'If occupancy allows, might I request a complimentary late check-out or extend my stay through Sunday evening?',
    c2: 'Given my conference schedule downtown, could you advise on the most efficient transit route to get around and whether an extra night can be accommodated at the same rate?'
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[9],
  readingPassage: {
    titleEn: 'Making the Most of Hotel Front Desk Conversations',
    titleKo: '호텔 프런트 데스크 3분 대화로 여행의 품격을 바꾸는 법',
    genreBadge: '스마트 트래블 칼럼 · Lv.3 중하급',
    estimatedMin: 6,
    paragraphsEn: [
      'A five-minute conversation at the hotel front desk can upgrade your entire trip—literally. When checking in, lead clearly with "I have a reservation under..." followed by your last name. Instead of bluntly asking for "free things," polite travelers ask whether breakfast, Wi-Fi, or a higher-floor room is complimentary.',
      'Plans often shift once you settle into a new city. If you decide to stay an extra night or catch an evening flight home, ask early whether you can extend your stay or arrange a late check-out. Even when a hotel is fully booked, the front desk is almost always happy to store your luggage securely while you explore.',
      'Before heading out, take thirty seconds to ask the concierge for the best way to get around. Local staff immediately know which attractions are within walking distance and where to transfer on the subway. Framing your request as an indirect question—"Could you tell me where I should get off?"—sounds far warmer and more polished than a blunt command.'
    ],
    paragraphsSlash: [
      'A five-minute conversation / at the hotel front desk / can upgrade your entire trip—literally. / When checking in, / lead clearly with "I have a reservation under..." / followed by your last name. / Instead of bluntly asking for "free things," / polite travelers ask / whether breakfast, Wi-Fi, or a higher-floor room / is complimentary.',
      'Plans often shift / once you settle into a new city. / If you decide to stay an extra night / or catch an evening flight home, / ask early whether you can extend your stay / or arrange a late check-out. / Even when a hotel is fully booked, / the front desk is almost always happy / to store your luggage securely / while you explore.',
      'Before heading out, / take thirty seconds to ask the concierge / for the best way to get around. / Local staff immediately know / which attractions are within walking distance / and where to transfer on the subway. / Framing your request as an indirect question— / "Could you tell me where I should get off?"— / sounds far warmer and more polished / than a blunt command.'
    ],
    paragraphsKo: [
      '호텔 프런트 데스크에서의 짧은 5분 대화가 말 그대로 여행 전체의 등급을 바꿀 수 있습니다. 체크인할 때는 "I have a reservation under..." 뒤에 성을 또박또박 붙여 명쾌하게 시작하세요. 무뚝뚝하게 "공짜(free)인가요?"라고 묻기보다, 세련된 여행자는 조식·와이파이·고층 객실이 무료 제공(complimentary)되는지 부드럽게 묻습니다.',
      '낯선 도시에 자리를 잡고 나면 일정이 바뀌는 일도 흔합니다. 하룻밤 더 머물거나 저녁 비행기를 타기로 했다면 숙박을 연장(extend your stay)하거나 레이트 체크아웃을 신청할 수 있는지 미리 문의하세요. 만실일 때조차 프런트 데스크는 여행객이 시내를 둘러보는 동안 짐을 안전하게 보관(store your luggage)해 주는 경우가 대부분입니다.',
      '밖으로 나서기 전, 컨시어지에게 시내를 돌아다니는(get around) 가장 좋은 방법을 30초만 물어보세요. 현지 직원은 어느 명소가 도보 거리(within walking distance)에 있고 지하철을 어디서 갈아타야(transfer) 하는지 단번에 알려 줍니다. "어디서 내려야 하는지 알려 주시겠어요?"처럼 간접의문문으로 질문을 감싸면 단도직입적인 질문보다 훨씬 따뜻하고 세련된 인상을 줍니다.'
    ],
    keyExpressions: ['under the name ~', 'complimentary', 'extend your stay', 'store your luggage', 'get around', 'within walking distance'],
    comprehensionQuiz: [
      {
        id: 'd9-rq01',
        questionKo: '글에서 호텔 프런트에 조식이나 편의 서비스가 무료인지 물을 때 "free"보다 권장하는 세련된 형용사는?',
        options: ['available', 'complimentary', 'polished', 'direct'],
        answer: 'complimentary',
        explanationKo: '첫 문단 "Instead of bluntly asking for \'free things,\' polite travelers ask whether ... is complimentary."가 정답 근거입니다.'
      },
      {
        id: 'd9-rq02',
        questionKo: '호텔이 만실이라 레이트 체크아웃이 불가능할 때에도 프런트 데스크에서 흔히 도와주는 서비스는?',
        options: [
          '무료 공항 리무진 택시 제공',
          '관광하는 동안 여행객의 짐을 안전하게 보관해 주기',
          '인근 레스토랑 식사권 자동 발급',
          '지하철 무료 승차권 지급'
        ],
        answer: '관광하는 동안 여행객의 짐을 안전하게 보관해 주기',
        explanationKo: '둘째 문단 "the front desk is almost always happy to store your luggage securely while you explore"를 확인하세요.'
      },
      {
        id: 'd9-rq03',
        questionKo: '현지에서 길을 묻거나 하차역을 확인할 때 본문이 추천하는 공손한 문장 구조는?',
        options: [
          '명령문 (Tell me the exit now.)',
          '간접의문문 (Could you tell me where I should get off?)',
          '수동태 감탄문 (How far it was walked!)',
          '단답형 명사구 (Subway transfer where?)'
        ],
        answer: '간접의문문 (Could you tell me where I should get off?)',
        explanationKo: '셋째 문단에서 간접의문문으로 질문을 감싸면 훨씬 따뜻하고 세련되게 들린다고 설명합니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd9-v01',
      word: 'extend my stay',
      phonetic: '/ɪkˈstend maɪ steɪ/',
      pos: '동사구',
      cefr: 'b1',
      meaningKo: '숙박(체류)을 연장하다',
      meaningEn: 'add one or more extra nights to an existing hotel booking',
      nuanceTipKo: '연장 기간을 붙일 때는 전치사 by를 씁니다! (extend my stay by two nights)',
      exampleEn: 'Would it be possible to extend my stay by one extra night?',
      exampleKo: '숙박을 하룻밤 더 연장할 수 있을까요?'
    },
    {
      id: 'd9-v02',
      word: 'get around',
      phonetic: '/ɡet əˈraʊnd/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(시내·현지 여기저기를) 이동하다, 돌아다니다',
      meaningEn: 'travel from place to place within a city or area',
      nuanceTipKo: '단순 move보다 도시 내부를 지하철·버스·도보로 이동하는 생활 교통 감각을 완벽히 담아냅니다.',
      exampleEn: "What's the easiest way to get around downtown without a car?",
      exampleKo: '차 없이 시내를 돌아다니는 가장 편한 방법이 뭔가요?'
    },
    {
      id: 'd9-v03',
      word: 'complimentary',
      phonetic: '/ˌkɑːmpləˈmentri/',
      pos: '형용사',
      cefr: 'b1',
      meaningKo: '무료로 제공되는, 서비스로 포함된',
      meaningEn: 'provided free of charge as a courtesy by a hotel or airline',
      nuanceTipKo: '철자 주의! i가 들어간 complimentary는 "무료의", e가 들어간 complementary는 "상호 보완적인"이라는 다른 단어입니다.',
      exampleEn: 'Breakfast is complimentary for all guests from 6:30 to 10 AM.',
      exampleKo: '조식은 오전 6시 30분부터 10시까지 모든 투숙객에게 무료로 제공됩니다.'
    },
    {
      id: 'd9-v04',
      word: 'under the name ~',
      phonetic: '/ˈʌndər ðə neɪm/',
      pos: '전치사구',
      cefr: 'a2',
      meaningKo: '~ 이름으로 (예약된)',
      meaningEn: 'registered in a booking system using a specific person’s name',
      nuanceTipKo: '호텔·식당 예약 확인 시 "by my name"이 아니라 반드시 전치사 under를 써서 "under Yuna Kim"이라고 말합니다.',
      exampleEn: 'Hi, I have a three-night reservation under the name Yuna Kim.',
      exampleKo: '안녕하세요, 김유나 이름으로 3박 예약되어 있습니다.'
    },
    {
      id: 'd9-v05',
      word: 'room upgrade',
      phonetic: '/ruːm ˈʌpɡreɪd/',
      pos: '명사구',
      cefr: 'b1',
      meaningKo: '객실 업그레이드',
      meaningEn: 'moving to a larger or better hotel room than originally booked',
      nuanceTipKo: '부담스럽지 않게 물으려면 "Are any complimentary room upgrades available today?"처럼 가용성부터 질문하세요.',
      exampleEn: 'Since we are celebrating our anniversary, any chance of a room upgrade?',
      exampleKo: '기념일 여행 중인데 혹시 객실 업그레이드 가능할까요?'
    },
    {
      id: 'd9-v06',
      word: 'late check-out',
      phonetic: '/leɪt ˈtʃek aʊt/',
      pos: '명사구',
      cefr: 'a2',
      meaningKo: '늦은 체크아웃 (퇴실 시간 연장)',
      meaningEn: 'permission to leave your hotel room later than the standard time',
      nuanceTipKo: '오후 비행기일 때 체크인 시점에 미리 "Could I request a late check-out?"이라고 물어보면 성공률이 높습니다.',
      exampleEn: 'Is it possible to get a late check-out until 2 PM tomorrow?',
      exampleKo: '내일 오후 2시까지 레이트 체크아웃이 가능할까요?'
    },
    {
      id: 'd9-v07',
      word: 'store my luggage',
      phonetic: '/stɔːr maɪ ˈlʌɡɪdʒ/',
      pos: '동사구',
      cefr: 'b1',
      meaningKo: '짐을 맡겨 두다, 보관하다',
      meaningEn: 'leave bags safely with hotel staff before check-in or after check-out',
      nuanceTipKo: 'hold my bags 또는 store my luggage 둘 다 자연스러우며, 프런트에서 보관표(claim ticket)를 줍니다.',
      exampleEn: 'Could I store my luggage here until my room is ready?',
      exampleKo: '방이 준비될 때까지 여기 짐을 좀 맡겨 둘 수 있을까요?'
    },
    {
      id: 'd9-v08',
      word: 'amenities',
      phonetic: '/əˈmenətiz/',
      pos: '명사 (주로 복수)',
      cefr: 'b1',
      meaningKo: '편의시설, 객실 비품 (헬스장·수영장·어메니티)',
      meaningEn: 'useful features or facilities provided for hotel guests',
      nuanceTipKo: '칫솔·샴푸 같은 객실 비품뿐 아니라 피트니스 센터·라운지 등 호텔 부대시설 전체를 아우릅니다.',
      exampleEn: 'What amenities are located on the fifth floor?',
      exampleKo: '5층에는 어떤 편의시설이 있나요?'
    },
    {
      id: 'd9-v09',
      word: 'front desk',
      phonetic: '/frʌnt desk/',
      pos: '명사구',
      cefr: 'a2',
      meaningKo: '호텔 프런트 데스크, 안내 데스크',
      meaningEn: 'the main reception counter in a hotel lobby',
      nuanceTipKo: '미국에서는 front desk, 영국·유럽에서는 reception을 주로 사용합니다.',
      exampleEn: 'Just dial zero from your room to reach the front desk anytime.',
      exampleKo: '언제든 객실 전화에서 0번을 누르시면 프런트 데스크로 연결됩니다.'
    },
    {
      id: 'd9-v10',
      word: 'within walking distance',
      phonetic: '/wɪˈðɪn ˈwɔːkɪŋ ˈdɪstəns/',
      pos: '전치사구',
      cefr: 'b1',
      meaningKo: '걸어서 갈 수 있는 거리에',
      meaningEn: 'close enough to reach easily on foot',
      nuanceTipKo: '"Can I walk?"보다 훨씬 세련되고 정확한 거리 확인 표현입니다. 앞 동사는 be동사를 씁니다.',
      exampleEn: 'Is the Art Institute within walking distance from the hotel?',
      exampleKo: '시카고 미술관은 호텔에서 걸어서 갈 수 있는 거리인가요?'
    },
    {
      id: 'd9-v11',
      word: 'transfer to ~',
      phonetic: '/trænsˈfɜːr tuː/',
      pos: '동사구',
      cefr: 'b1',
      meaningKo: '(다른 지하철·버스 노선으로) 갈아타다, 환승하다',
      meaningEn: 'change from one transit line or vehicle to another',
      nuanceTipKo: 'transfer to the Blue Line처럼 갈아탈 노선명 앞에 전치사 to를 붙입니다.',
      exampleEn: 'Take the Red Line two stops and transfer to the Blue Line at Jackson.',
      exampleKo: '레드 라인을 타고 두 정거장 가서 잭슨 역에서 블루 라인으로 갈아타세요.'
    },
    {
      id: 'd9-v12',
      word: 'get off at ~',
      phonetic: '/ɡet ɔːf æt/',
      pos: '구동사',
      cefr: 'a2',
      meaningKo: '(버스·지하철에서) ~ 역/정류장에서 내리다',
      meaningEn: 'exit a bus, train, or subway at a specific stop',
      nuanceTipKo: '대중교통(버스·지하철·기차)에서 내릴 땐 get off, 승용차·택시에서 내릴 땐 get out of를 씁니다!',
      exampleEn: 'Could you tell me which stop I should get off at for the riverwalk?',
      exampleKo: '리버워크에 가려면 어느 역에서 내려야 하는지 알려 주시겠어요?'
    },
    {
      id: 'd9-v13',
      word: 'incidentals',
      phonetic: '/ˌɪnsɪˈdentlz/',
      pos: '명사 (복수)',
      cefr: 'b2',
      meaningKo: '부대비용 (미니바·룸서비스 등 보증금 대상)',
      meaningEn: 'extra hotel charges such as minibar items or room service',
      nuanceTipKo: '체크인할 때 직원이 "May I have a credit card for incidentals?"라고 하면 이미 방값을 냈어도 보증용 카드를 달라는 뜻입니다!',
      exampleEn: 'We just need a card on file for incidentals—nothing will be charged today.',
      exampleKo: '부대비용 보증용 카드만 등록해 두면 됩니다—오늘 결제되는 금액은 없어요.'
    },
    {
      id: 'd9-v14',
      word: 'head straight down',
      phonetic: '/hed streɪt daʊn/',
      pos: '구동사 구문',
      cefr: 'a2',
      meaningKo: '(길을 따라) 쭉 직진해서 내려가다',
      meaningEn: 'walk or drive directly along a street without turning',
      nuanceTipKo: '길 안내를 들을 때 go straight보다 현지인이 훨씬 자주 쓰는 생생한 표현입니다.',
      exampleEn: 'Head straight down Michigan Avenue for three blocks and turn left.',
      exampleKo: '미시간 애비뉴를 따라 세 블록 쭉 직진한 뒤 왼쪽으로 도세요.'
    },
    {
      id: 'd9-v15',
      word: 'turn in',
      phonetic: '/tɜːrn ɪn/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(카드키·서류 등을) 반납하다, 제출하다',
      meaningEn: 'hand back an item such as a key card or form to staff',
      nuanceTipKo: '대명사 어순 주의! "turn it in" (O) / "turn in it" (X). 체크아웃 시 카드키 반납에 자주 씁니다.',
      exampleEn: 'You can simply turn your key cards in at the front desk when you check out.',
      exampleKo: '체크아웃하실 때 프런트 데스크에 카드키만 반납하시면 됩니다.'
    }
  ],
  dialogue: [
    {
      id: 'd9-t01',
      speaker: 'Daniel',
      roleLabel: '호텔 프런트 직원',
      voicePitch: 0.93,
      sceneImage: 'assets/scene_airport_travel.jpg',
      cameraMotion: 'zoom-in',
      english: 'Good afternoon! Welcome to The Lakeview Hotel. Are you checking in with us today?',
      slashBroken: 'Good afternoon! / Welcome to The Lakeview Hotel. / Are you checking in / with us today?',
      korean: '안녕하세요! 레이크뷰 호텔에 오신 것을 환영합니다. 오늘 체크인하시나요?',
      keyHighlight: 'checking in with us',
      noteKo: '호텔 프런트의 전형적인 첫인사입니다. 바로 예약자 성함을 말해 주면 수속이 빨라집니다.'
    },
    {
      id: 'd9-t02',
      speaker: 'Yuna',
      roleLabel: '출장객 (한국인)',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_airport_travel.jpg',
      cameraMotion: 'pan-right',
      english: 'Yes! I have a three-night reservation under the name Yuna Kim. Also, is breakfast complimentary with my booking?',
      slashBroken: 'Yes! / I have a three-night reservation / under the name Yuna Kim. / Also, is breakfast complimentary / with my booking?',
      korean: '네! 김유나 이름으로 3박 예약되어 있습니다. 그리고 제 예약에 조식이 무료로 포함되어 있나요?',
      keyHighlight: 'under the name',
      noteKo: 'under the name ~으로 예약을 확인하고, free 대신 품격 있는 complimentary로 조식 포함 여부를 묻습니다.'
    },
    {
      id: 'd9-t03',
      speaker: 'Daniel',
      roleLabel: '호텔 프런트 직원',
      voicePitch: 0.93,
      sceneImage: 'assets/scene_airport_travel.jpg',
      cameraMotion: 'zoom-in',
      english: 'I see your booking right here, Ms. Kim! Yes, our breakfast buffet and gym are complimentary. May I have a credit card for incidentals?',
      slashBroken: 'I see your booking right here, Ms. Kim! / Yes, our breakfast buffet and gym / are complimentary. / May I have a credit card / for incidentals?',
      korean: '김 님 예약 바로 확인되었습니다! 네, 조식 뷔페와 헬스장이 무료로 제공됩니다. 부대비용 보증용 신용카드 하나 주시겠어요?',
      keyHighlight: 'for incidentals',
      noteKo: '선결제 예약이어도 호텔에서는 항상 "for incidentals(보증용)" 카드를 요청하므로 당황하지 마세요!'
    },
    {
      id: 'd9-t04',
      speaker: 'Yuna',
      roleLabel: '출장객 (한국인)',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_cafe_detour.jpg',
      cameraMotion: 'pan-left',
      english: "Sure, here you go. By the way, I might want to extend my stay by one night—and are any higher-floor room upgrades available?",
      slashBroken: 'Sure, here you go. / By the way, / I might want to extend my stay / by one night— / and are any higher-floor room upgrades available?',
      korean: '네, 여기 있습니다. 그런데 혹시 숙박을 하룻밤 연장하고 싶을 수도 있고요—고층 객실 업그레이드도 가능한가요?',
      keyHighlight: 'extend my stay by one night',
      noteKo: 'extend my stay by + 기간(one night) + are any ~ available?로 정중하고 자연스럽게 가능성을 타진합니다.'
    },
    {
      id: 'd9-t05',
      speaker: 'Daniel',
      roleLabel: '호텔 프런트 직원',
      voicePitch: 0.93,
      sceneImage: 'assets/scene_airport_travel.jpg',
      cameraMotion: 'zoom-in',
      english: "You're in luck! I can give you a complimentary upgrade to a lake-view room on the 14th floor. Just let us know by Friday morning if you decide to extend.",
      slashBroken: "You're in luck! / I can give you a complimentary upgrade / to a lake-view room on the 14th floor. / Just let us know by Friday morning / if you decide to extend.",
      korean: '운이 좋으시네요! 14층 호수 전망 객실로 무료 업그레이드해 드릴 수 있어요. 연장하시기로 결정하시면 금요일 오전까지만 알려 주세요.',
      keyHighlight: 'a complimentary upgrade',
      noteKo: '공손하게 가용 여부를 물었을 때 원어민 직원이 흔히 쓰는 반가운 대답 "You\'re in luck!"을 귀에 익혀 두세요.'
    },
    {
      id: 'd9-t06',
      speaker: 'Yuna',
      roleLabel: '출장객 (한국인)',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_cafe_detour.jpg',
      cameraMotion: 'pan-right',
      english: "That's wonderful, thank you so much! One quick question—could you tell me the easiest way to get around to the Art Institute?",
      slashBroken: "That's wonderful, / thank you so much! / One quick question— / could you tell me the easiest way / to get around to the Art Institute?",
      korean: '정말 멋지네요, 너무 감사합니다! 짧은 질문 하나만요—미술관 쪽으로 이동하는 가장 편한 방법을 알려 주실 수 있나요?',
      keyHighlight: 'to get around',
      noteKo: '추가 질문을 자연스럽게 꺼내는 쿠션 "One quick question—"을 붙이면 대화가 매끄럽게 이어집니다.'
    },
    {
      id: 'd9-t07',
      speaker: 'Daniel',
      roleLabel: '호텔 프런트 직원',
      voicePitch: 0.93,
      sceneImage: 'assets/scene_cafe_detour.jpg',
      cameraMotion: 'zoom-in',
      english: "It's actually within walking distance—just head straight down Michigan Avenue for ten minutes, or hop on Bus 147 and get off at Monroe Street.",
      slashBroken: "It's actually within walking distance— / just head straight down Michigan Avenue / for ten minutes, / or hop on Bus 147 / and get off at Monroe Street.",
      korean: '사실 걸어서 갈 수 있는 거리예요—미시간 애비뉴를 따라 10분만 쭉 직진하시거나, 147번 버스를 타시고 먼로 스트리트에서 내리시면 됩니다.',
      keyHighlight: 'within walking distance',
      noteKo: 'hop on(버스를 가볍게 타다) → get off at(특정 정류장에서 내리다) 세트를 통째로 익혀 두세요.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 간접의문문 어순 마스터: Could you tell me [의문사 + 주어 + 동사]?',
      coreFormula: 'Could you tell me + where the station is? (평서문 어순!) ↔ where is the station? (X)',
      wrongKonglish: 'Could you tell me where is the subway station and how can I get there?',
      rightNative: 'Could you tell me where the subway station is and how I can get there?',
      explanationKo:
        '낯선 사람이나 호텔 직원에게 "Where is ~?"라고 직설적으로 묻기보다 "Could you tell me ~?"나 "Do you know ~?"를 앞에 붙이면 공손함이 2배 올라갑니다. 단, 이때 한국인이 가장 많이 틀리는 포인트가 바로 어순! 이미 앞부분(Could you tell me)이 의문문이므로, 뒤 절은 반드시 [의문사 + 주어 + 동사]의 평서문 어순으로 써야 합니다.',
      registerSpectrum: {
        casual: 'Hey, do you know where the nearest subway stop is?',
        standard: 'Could you tell me which stop I should get off at for the museum?',
        formal: 'Would you mind letting me know whether a late check-out is available tomorrow?'
      }
    },
    {
      title: '원리 02 · 호텔 품격 어휘 공식: complimentary · under the name · by + 기간',
      coreFormula: 'under the name [성함] / is [항목] complimentary? / extend my stay by [기간]',
      wrongKonglish: 'I reserved by my name Kim. Is breakfast free? I want to extend one night.',
      rightNative: 'I have a reservation under the name Kim. Is breakfast complimentary? I want to extend my stay by one night.',
      explanationKo:
        '호텔·레스토랑·항공처럼 환대(hospitality) 산업에서는 단어 선택 하나로 대우가 달라집니다. ① 예약자명 앞 전치사는 by가 아닌 under, ② 서비스 무료 제공은 free보다 complimentary, ③ 기간 연장은 extend my stay + by + 기간(by one night / by two days) 공식을 정확히 기억하세요.',
      registerSpectrum: {
        casual: "I'm booked under Kim—can I add one more night?",
        standard: 'I have a reservation under Kim, and I would like to extend my stay by one night.',
        formal: 'My reservation is listed under Kim; would it be possible to extend my stay by an additional night?'
      }
    },
    {
      title: '원리 03 · 대중교통 vs 승용차 구동사 구별: get on/off vs get in/out of',
      coreFormula: '버스·지하철·기차·비행기 → get on / get off ↔ 승용차·택시 → get in / get out of',
      wrongKonglish: 'Get out of the subway at City Hall and get in Bus 147.',
      rightNative: 'Get off the subway at City Hall and get on Bus 147.',
      explanationKo:
        '원어민은 탈것 안에서 서서 걸어 다닐 수 있는 공간(버스, 지하철, 기차, 비행기, 배)은 바닥 위에 올라탄다는 느낌으로 get on / get off를 씁니다. 반대로 허리를 숙여 좁은 실내로 들어가 앉는 승용차나 택시는 get in / get out of를 씁니다. 이미지로 기억하면 평생 헷갈리지 않습니다!',
      registerSpectrum: {
        casual: 'Hop on the Blue Line and get off at Jackson.',
        standard: 'Take the subway two stops, transfer to the Blue Line, and get off at Jackson.',
        formal: 'Proceed to the Blue Line platform and disembark at Jackson Station.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd9-s01',
      drillType: 'chunk-build',
      promptKo: '김유나 이름으로 3박 예약되어 있습니다.',
      promptEnHint: '전치사 under를 사용해 예약자명을 뒤에 연결하세요.',
      targetEn: 'I have a three-night reservation under the name Yuna Kim.',
      chunks: ['I have', 'a three-night reservation', 'under the name', 'Yuna Kim.'],
      explanationKo: '예약자 이름 앞에는 by가 아니라 under(under the name ~)를 사용합니다.'
    },
    {
      id: 'd9-s02',
      drillType: 'konglish-fix',
      promptKo: '"가장 가까운 지하철역이 어디인지 알려 주시겠어요?" — 간접의문문 어순이 정확한 문장은?',
      promptEnHint: 'Could you tell me 뒤의 [주어 + 동사] 평서문 어순을 확인하세요.',
      targetEn: 'Could you tell me where the nearest subway station is?',
      wrongKonglishOption: 'Could you tell me where is the nearest subway station?',
      explanationKo: '간접의문문에서는 where + 주어(the nearest subway station) + 동사(is) 어순으로 씁니다.'
    },
    {
      id: 'd9-s03',
      drillType: 'active-blank',
      promptKo: '숙박을 하룻밤 더 연장할 수 있을까요?',
      promptEnHint: '"숙박을 연장하다" 동사구(3단어)를 넣으세요.',
      targetEn: 'Would it be possible to extend my stay by one night?',
      blankData: {
        before: 'Would it be possible to',
        answer: 'extend my stay',
        after: 'by one night?',
        firstLetterHint: 'e_____ m_ s___ (3단어)'
      },
      explanationKo: 'extend my stay by + 기간(one night) 패턴은 호텔 연장 요청의 정석입니다.'
    },
    {
      id: 'd9-s04',
      drillType: 'chunk-build',
      promptKo: '차 없이 시내를 돌아다니는 가장 편한 방법이 뭔가요?',
      promptEnHint: '돌아다니다 구동사 get around를 활용하세요.',
      targetEn: "What's the easiest way to get around downtown without a car?",
      chunks: ["What's the easiest way", 'to get around', 'downtown', 'without a car?'],
      explanationKo: 'get around는 도시 시내 곳곳을 이동하고 돌아다니는 뉘앙스에 딱 맞습니다.'
    },
    {
      id: 'd9-s05',
      drillType: 'konglish-fix',
      promptKo: '"시청역에서 지하철에서 내려서 147번 버스를 타세요." — 구동사가 바른 문장은?',
      promptEnHint: '지하철·버스 같은 대중교통에는 get on / get off를 씁니다.',
      targetEn: 'Get off the subway at City Hall and get on Bus 147.',
      wrongKonglishOption: 'Get out of the subway at City Hall and get in Bus 147.',
      explanationKo: '지하철과 버스는 get on/off, 택시와 승용차는 get in/out of를 씁니다.'
    },
    {
      id: 'd9-s06',
      drillType: 'active-blank',
      promptKo: '제 예약에 조식이 무료로 포함되어 있나요?',
      promptEnHint: '호텔에서 free 대신 쓰는 고급 형용사(13글자, i 철자 주의)를 넣으세요.',
      targetEn: 'Is breakfast complimentary with my booking?',
      blankData: {
        before: 'Is breakfast',
        answer: 'complimentary',
        after: 'with my booking?',
        firstLetterHint: 'c (13글자, 무료의)'
      },
      explanationKo: 'complimentary(i)는 "무료로 제공되는"이라는 호텔·항공사 필수 어휘입니다.'
    },
    {
      id: 'd9-s07',
      drillType: 'chunk-build',
      promptKo: '미술관은 호텔에서 걸어서 갈 수 있는 거리인가요?',
      promptEnHint: 'within walking distance 표현을 활용하세요.',
      targetEn: 'Is the art museum within walking distance from the hotel?',
      chunks: ['Is the art museum', 'within walking distance', 'from', 'the hotel?'],
      explanationKo: 'be within walking distance (from ~)는 도보 이동 가능 여부를 묻는 세련된 표현입니다.'
    },
    {
      id: 'd9-s08',
      drillType: 'active-blank',
      promptKo: '방이 준비될 때까지 여기 짐을 맡겨 둘 수 있을까요?',
      promptEnHint: '짐을 맡겨 보관하다는 동사(1단어)를 넣으세요.',
      targetEn: 'Could I store my luggage here until my room is ready?',
      blankData: {
        before: 'Could I',
        answer: 'store',
        after: 'my luggage here until my room is ready?',
        firstLetterHint: 's (5글자)'
      },
      explanationKo: 'store my luggage(또는 hold my luggage)는 체크인 전/체크아웃 후 짐 보관을 요청할 때 씁니다.'
    },
    {
      id: 'd9-s09',
      drillType: 'konglish-fix',
      promptKo: '"체크아웃할 때 프런트에 카드키를 반납할게요." — 대명사 어순이 정확한 문장은?',
      promptEnHint: 'turn in 사이에 대명사 it을 넣어야 합니다.',
      targetEn: "I'll turn it in at the front desk when I check out.",
      wrongKonglishOption: "I'll turn in it at the front desk when I check out.",
      explanationKo: '구동사 turn in의 목적어가 대명사 it이면 반드시 가운데에 넣어 turn it in으로 씁니다.'
    },
    {
      id: 'd9-s10',
      drillType: 'chunk-build',
      promptKo: '내일 오후 2시까지 레이트 체크아웃을 요청할 수 있을까요?',
      promptEnHint: 'late check-out과 until 2 PM을 연결하세요.',
      targetEn: 'Could I request a late check-out until 2 PM tomorrow?',
      chunks: ['Could I request', 'a late check-out', 'until 2 PM', 'tomorrow?'],
      explanationKo: 'Could I request a late check-out until [시간]?은 해외 호텔에서 매우 자주 쓰이는 실전 요청문입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd9-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '호텔 숙박 연장 extend my stay',
      questionKo: '빈칸에 알맞은 동사(1단어)와 전치사(1단어)를 순서대로 써서 "숙박을 이틀 연장하고 싶다"를 완성하세요.',
      stimulusEn: 'I would like to __________ my stay __________ two nights. (빈칸 2단어를 공백 구분)',
      answer: 'extend by',
      explanationKo: '숙박 연장은 extend one\'s stay + by + 기간(two nights) 구조를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "숙박을 하룻밤 연장할 수 있을까요?" 빈칸(3단어)을 채우세요.',
        stimulusEn: 'Is it possible to __________ __________ __________ by one night?',
        answer: 'extend my stay',
        explanationKo: 'extend my stay를 덩어리로 입에 붙여 두세요.'
      }
    },
    {
      id: 'd9-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '시내 이동 구동사 get around',
      questionKo: '빈칸에 알맞은 구동사(2단어)를 넣어 "대중교통으로 시내를 돌아다니기 편하다"를 완성하세요.',
      stimulusEn: 'It is very easy to __________ __________ Chicago by subway.',
      answer: 'get around',
      explanationKo: '도시 안에서 여기저기 이동하는 것은 get around를 사용합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "시내를 돌아다니는 가장 좋은 방법이 뭔가요?" 빈칸(2단어)을 채우세요.',
        stimulusEn: "What's the best way to __________ __________ downtown?",
        answer: 'get around',
        explanationKo: 'to부정사 뒤이므로 동사원형 get around를 씁니다.'
      }
    },
    {
      id: 'd9-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '무료 제공 형용사 complimentary',
      questionKo: '빈칸에 알맞은 형용사(1단어, 철자 주의)를 넣어 "조식과 와이파이는 무료 제공된다"를 완성하세요.',
      stimulusEn: 'Both Wi-Fi and morning coffee in the lobby are __________ for hotel guests.',
      answer: 'complimentary',
      explanationKo: '호텔 무료 서비스는 i가 들어간 complimentary로 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "무료 객실 업그레이드가 가능한가요?" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Are any complimentary __________ __________ available today?',
        answer: 'room upgrades',
        explanationKo: 'any 뒤이므로 복수형 room upgrades가 자연스럽습니다.'
      }
    },
    {
      id: 'd9-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '도보 거리 within walking distance',
      questionKo: '빈칸에 알맞은 3단어를 써서 "그 박물관은 걸어서 갈 수 있는 거리에 있다"를 완성하세요.',
      stimulusEn: 'The museum is __________ __________ __________ from our hotel.',
      answer: 'within walking distance',
      explanationKo: '도보로 이동 가능한 거리는 within walking distance입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "역이 걸어서 갈 수 있는 거리인가요?" 빈칸 전치사(1단어)를 채우세요.',
        stimulusEn: 'Is the train station __________ walking distance?',
        answer: 'within',
        explanationKo: 'within walking distance의 전치사는 in이 아니라 within을 씁니다.'
      }
    },
    {
      id: 'd9-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '지하철 환승 transfer to',
      questionKo: '빈칸에 알맞은 동사(1단어)를 넣어 "잭슨 역에서 블루 라인으로 갈아타세요"를 완성하세요.',
      stimulusEn: 'Take the Red Line two stops and __________ to the Blue Line at Jackson.',
      answer: 'transfer',
      explanationKo: '노선 환승은 transfer to + 노선명 형태로 표현합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "박물관에 가려면 어느 역에서 내려야 하나요?" 빈칸 구동사(2단어)를 쓰세요.',
        stimulusEn: 'Which stop should I __________ __________ at for the museum?',
        answer: 'get off',
        explanationKo: '대중교통에서 내릴 때는 get off at [역명]을 사용합니다.'
      }
    },
    {
      id: 'd9-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '간접의문문 어순',
      questionKo: '다음 중 간접의문문 어순이 문법적으로 가장 정확한 문장은?',
      stimulusEn: '상황: 호텔 컨시어지에게 지하철역 위치와 가는 법을 정중히 묻는 상황',
      options: [
        'Could you tell me where is the nearest subway station?',
        'Could you tell me how can I get to the museum?',
        'Could you tell me where the nearest subway station is?',
        'Do you know what time does breakfast start?'
      ],
      answer: 'Could you tell me where the nearest subway station is?',
      explanationKo: '간접의문문은 [의문사 + 주어 + 동사] 어순이어야 하므로 where the nearest subway station is가 유일한 정답입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "조식이 몇 시에 시작하는지 알려 주시겠어요?" 빈칸(3단어)을 올바른 어순으로 채우세요.',
        stimulusEn: 'Could you tell me what time __________ __________? (breakfast / starts 활용, 2단어)',
        answer: 'breakfast starts',
        explanationKo: '조동사 does 없이 평서문 어순인 breakfast starts로 씁니다.'
      }
    },
    {
      id: 'd9-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '호텔 보증금 어휘 incidentals',
      questionKo: '체크인할 때 직원이 "May I have a credit card for incidentals?"라고 묻는 의도로 가장 정확한 것은?',
      stimulusEn: '상황: 이미 온라인으로 3박 숙박비를 전액 선결제한 상태',
      options: [
        '숙박비가 결제되지 않았으니 방값을 현장에서 다시 내라는 뜻',
        '미니바·룸서비스 등 추가 부대비용 발생 시를 대비한 보증용 카드를 요청하는 것',
        '호텔 멤버십 연회비를 자동 결제하겠다는 안내',
        '택시 요금을 대신 결제할 카드를 달라는 요청'
      ],
      answer: '미니바·룸서비스 등 추가 부대비용 발생 시를 대비한 보증용 카드를 요청하는 것',
      explanationKo: 'incidentals는 룸서비스·미니바·파손 등 부대비용을 뜻하며, 체크아웃 시 사용한 금액이 없으면 보증 승인은 자동 취소됩니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "부대비용 보증용 카드가 필요하신가요?" 빈칸(1단어)을 채우세요.',
        stimulusEn: 'Do you need a credit card on file for __________?',
        answer: 'incidentals',
        explanationKo: '항상 복수형 incidentals로 사용합니다.'
      }
    },
    {
      id: 'd9-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '예약 확인 전치사 under',
      questionKo: '호텔 프런트에서 내 이름으로 예약이 되어 있다고 말할 때 가장 자연스러운 문장은?',
      stimulusEn: '예약자 이름 앞의 전치사 선택에 주의하세요.',
      options: [
        'I have a reservation by the name Minjun Park.',
        'I have a reservation under the name Minjun Park.',
        'I have a reservation with the name Minjun Park.',
        'I have a reservation at the name Minjun Park.'
      ],
      answer: 'I have a reservation under the name Minjun Park.',
      explanationKo: '예약 장부에 특정 이름 아래(under) 등록되어 있다는 이미지로 under the name ~을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "박민준 이름으로 예약했습니다" 빈칸 전치사(1단어)를 쓰세요.',
        stimulusEn: 'I have a two-night reservation __________ Park.',
        answer: 'under',
        explanationKo: 'under [성함]만 써도 매우 자연스럽습니다.'
      }
    },
    {
      id: 'd9-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '교통수단 승하차 구동사',
      questionKo: '다음 중 대중교통 및 택시 승하차 표현이 모두 어법상 바른 문장은?',
      stimulusEn: '버스·지하철(on/off) vs 택시·승용차(in/out of) 구별을 적용하세요.',
      options: [
        'Get in the bus and get out of at Monroe Street.',
        'Get on the taxi and get off at the hotel entrance.',
        'Get on Bus 147 and get off at Monroe Street.',
        'Get out of the subway and get in Bus 147.'
      ],
      answer: 'Get on Bus 147 and get off at Monroe Street.',
      explanationKo: '버스는 올라타고 내리는 공간이므로 get on / get off가 정확합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "호텔 입구에서 택시에서 내렸어요" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'I got __________ __________ the taxi at the hotel entrance.',
        answer: 'out of',
        explanationKo: '택시·승용차에서 내릴 때는 get out of를 씁니다.'
      }
    },
    {
      id: 'd9-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '혼동 어휘 complimentary vs complementary',
      questionKo: '빈칸에 들어갈 "무료 제공되는"이라는 뜻의 단어로 철자가 정확한 것은?',
      stimulusEn: 'The hotel offers a __________ airport shuttle every thirty minutes.',
      options: ['complementary', 'complimentary', 'complimenting', 'complementing'],
      answer: 'complimentary',
      explanationKo: 'complimentary(i)가 "무료의/칭찬하는", complementary(e)는 "상호 보완적인"입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "호텔 5층에는 어떤 편의시설이 있나요?" 빈칸(1단어, 복수형)을 채우세요.',
        stimulusEn: 'What __________ does the hotel offer on the fifth floor?',
        answer: 'amenities',
        explanationKo: '호텔 편의시설·비품은 amenities라고 합니다.'
      }
    },
    {
      id: 'd9-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '숙박 연장 정중 요청 배열',
      questionKo: '주어진 청크를 올바른 어순으로 배열하여 문장을 완성하세요.',
      stimulusEn: '[ by one night? / to extend my stay / Would it be / possible ]',
      answer: 'Would it be possible to extend my stay by one night?',
      explanationKo: 'Would it be possible to + 동사원형(extend my stay) + 기간(by one night)? 어순입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "오후 2시까지 레이트 체크아웃이 가능할까요?"를 영작하세요.',
        stimulusEn: '힌트: Would it be possible / to get / a late check-out / until 2 PM?',
        answer: 'Would it be possible to get a late check-out until 2 PM?',
        explanationKo: 'Would it be possible to ~?는 호텔 요청에서 가장 세련된 만능 틀입니다.'
      }
    },
    {
      id: 'd9-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '간접의문문 길 묻기 배열',
      questionKo: '주어진 청크를 올바른 간접의문문 어순으로 배열하여 문장을 완성하세요.',
      stimulusEn: '[ I should get off at / Could you tell me / for the museum? / which stop ]',
      answer: 'Could you tell me which stop I should get off at for the museum?',
      explanationKo: 'Could you tell me + 의문사구(which stop) + 주어(I) + 동사(should get off at) + 목적(for the museum)?',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "지하철역이 어디에 있는지 알려 주시겠어요?"를 영작하세요.',
        stimulusEn: '힌트: Could you tell me / where / the subway station / is?',
        answer: 'Could you tell me where the subway station is?',
        explanationKo: 'where the subway station is 평서문 어순을 꼭 지키세요.'
      }
    },
    {
      id: 'd9-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '짐 보관 요청 통문장',
      questionKo: '우리말 뜻에 맞게 주어진 단어를 모두 활용하여 문장을 완성하세요.',
      stimulusEn: '우리말: 제 방이 준비될 때까지 여기 짐을 맡겨 둘 수 있을까요? (Could I / store / my luggage / here / until my room is ready)',
      answer: 'Could I store my luggage here until my room is ready?',
      acceptableAlt: ['Could I store my bags here until my room is ready?'],
      explanationKo: 'Could I store my luggage here + until [절] 어순으로 완성합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "체크아웃 후에 짐을 맡겨 둘 수 있을까요?"를 영작하세요.',
        stimulusEn: '힌트: Could I / store my luggage / here / after check-out?',
        answer: 'Could I store my luggage here after check-out?',
        explanationKo: 'after check-out을 뒤에 붙여 간편하게 응용할 수 있습니다.'
      }
    },
    {
      id: 'd9-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '간접의문문·전치사 오류 교정',
      questionKo: '다음 문장의 어법 오류 2곳을 모두 고쳐 자연스러운 문장으로 다시 쓰세요.',
      stimulusEn: '오류 문장: Do you know how can I get around, and is the park in walking distance?',
      answer: 'Do you know how I can get around, and is the park within walking distance?',
      explanationKo: '① 간접의문문 어순 how can I → how I can, ② 도보 거리 전치사 in walking distance → within walking distance로 교정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 다음 오류 문장을 바르게 고쳐 쓰세요: Could you tell me where is the front desk?',
        stimulusEn: '간접의문문 어순을 올바르게 수정하세요.',
        answer: 'Could you tell me where the front desk is?',
        explanationKo: '의문사 where 뒤에 주어(the front desk) + 동사(is) 순서로 씁니다.'
      }
    },
    {
      id: 'd9-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '실전 한영 통문장 영작',
      questionKo: '다음 우리말을 오늘 배운 표현(head straight down)을 사용해 자연스럽게 영작하세요.',
      stimulusEn: '우리말: 미시간 애비뉴를 따라 세 블록 쭉 직진한 뒤 왼쪽으로 도세요. (힌트: Head straight down / Michigan Avenue / for three blocks / and turn left.)',
      answer: 'Head straight down Michigan Avenue for three blocks and turn left.',
      explanationKo: 'Head straight down [도로명] + for [거리/블록] + and turn left/right는 현지 길 안내의 황금 패턴입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "차 없이 시내를 돌아다니는 가장 편한 방법이 뭔가요?"를 영작하세요.',
        stimulusEn: "힌트: What's / the easiest way / to get around downtown / without a car?",
        answer: "What's the easiest way to get around downtown without a car?",
        explanationKo: "What's the easiest way to get around ~? 패턴을 통째로 외워 두세요."
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn: 'Welcome to The Lakeview Hotel! Are you checking in today? What name is your reservation under?',
    openingQuestionKo: '레이크뷰 호텔에 오신 것을 환영합니다! 오늘 체크인하시나요? 어떤 성함으로 예약하셨나요?',
    followUpQuestionEn: 'Great, I found your booking! Do you have any special requests for your stay, or would you like tips on getting around the city?',
    followUpQuestionKo: '좋습니다, 예약 확인되었습니다! 숙박 중 특별히 요청하실 사항이나 시내 이동 관련해서 궁금한 점이 있으신가요?',
    recommendedChunks: ['under the name ~', 'complimentary', 'extend my stay', 'within walking distance', 'Could you tell me ~?'],
    modelAnswerEn:
      'I have a reservation under Yuna Kim. Is breakfast complimentary, and would it be possible to request a late check-out? Also, could you tell me if the museum is within walking distance?'
  }
};
