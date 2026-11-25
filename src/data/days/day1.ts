import type { DayLessonModule } from '../../types/course.ts';

export const day1Module: DayLessonModule = {
  dayNumber: 1,
  dayBadge: 'DAY 01 · 동선 & 구동사 코어',
  categoryLabel: '일상·오피스 스몰토크 필수 패턴',
  title: '퇴근길에 잠깐 들렀어요',
  subtitle: '한국어 부사구부터 떠올리는 습관을 끊고 [주어 + 핵심 구동사]를 1초 만에 발사하는 법',
  heroImage: '/assets/scene_cafe_detour.jpg',
  secondaryImage: '/assets/visual_preposition_card.jpg',
  estimatedSprintMin: 7,
  estimatedLectureMin: 35,
  keyExpression: 'stop by ~ on my way home',
  keySentenceByTier: {
    basic: 'I stopped by a cafe on my way home.',
    standard: 'I just stopped by to grab an iced latte on my way home from work.',
    advanced: 'I figured I would swing by on my way back to drop off these samples and grab a quick coffee.'
  },
  vocabList: [
    {
      id: 'd1-v01',
      word: 'stop by',
      phonetic: '/stɑːp baɪ/',
      pos: '구동사',
      meaningKo: '(가는 길에) 잠깐 들르다',
      meaningEn: 'visit briefly while going somewhere else',
      nuanceTipKo: '거창한 방문(visit)이 아니라 동선 중간에 5~15분 가볍게 들를 때 가장 자연스러운 1순위 표현입니다.',
      exampleEn: 'Can you stop by my desk before you leave?',
      exampleKo: '퇴근하기 전에 제 자리에 잠깐 들러주실 수 있나요?'
    },
    {
      id: 'd1-v02',
      word: 'swing by',
      phonetic: '/swɪŋ baɪ/',
      pos: '구동사',
      meaningKo: '휙 잠깐 들르다 (캐주얼)',
      meaningEn: 'drop in casually and quickly',
      nuanceTipKo: 'stop by보다 더 경쾌하고 친근한 느낌으로, 동료나 친구 사이에서 정말 자주 씁니다.',
      exampleEn: "I'll swing by the bakery after my workout.",
      exampleKo: '운동 끝나고 빵집에 잠깐 들를게.'
    },
    {
      id: 'd1-v03',
      word: 'grab a coffee',
      phonetic: '/ɡræb ə ˈkɔːfi/',
      pos: '연어(Collocation)',
      meaningKo: '커피 한잔 가볍게 사다(마시다)',
      meaningEn: 'quickly buy or drink a cup of coffee',
      nuanceTipKo: 'buy/drink 대신 grab을 쓰면 "시간 많이 안 뺏고 가볍게 테이크아웃하거나 마시다"라는 원어민 리듬이 살아납니다.',
      exampleEn: 'Do you want to grab a quick coffee downstairs?',
      exampleKo: '아래층에서 잠깐 커피 한잔 하실래요?'
    },
    {
      id: 'd1-v04',
      word: 'on my way home',
      phonetic: '/ɑːn maɪ weɪ hoʊm/',
      pos: '전치사구',
      meaningKo: '집에 가는 길에 (퇴근길에)',
      meaningEn: 'while traveling back home',
      nuanceTipKo: 'home은 부사 역할을 하므로 절대로 on my way to home처럼 to를 붙이지 않습니다!',
      exampleEn: 'I listened to a podcast on my way home.',
      exampleKo: '집에 가는 길에 팟캐스트를 들었어요.'
    },
    {
      id: 'd1-v05',
      word: 'on my way to work',
      phonetic: '/ɑːn maɪ weɪ tə wɜːrk/',
      pos: '전치사구',
      meaningKo: '출근하는 길에',
      meaningEn: 'while commuting to the office',
      nuanceTipKo: 'work, school, the station 같은 명사 앞에는 방향 전치사 to를 꼭 살려줍니다.',
      exampleEn: 'Subway Line 2 was packed on my way to work.',
      exampleKo: '출근길에 지하철 2호선이 꽉 찼었어요.'
    },
    {
      id: 'd1-v06',
      word: 'drop off',
      phonetic: '/drɑːp ɔːf/',
      pos: '구동사',
      meaningKo: '(물건·사람을) 내려놓다, 맡기고 가다',
      meaningEn: 'take someone or something to a place and leave it there',
      nuanceTipKo: '세탁물을 맡기거나 서류를 전달하고 바로 떠날 때 leave보다 훨씬 생동감 있습니다.',
      exampleEn: 'I need to drop off my dry cleaning before 7 PM.',
      exampleKo: '7시 전에 세탁물을 맡겨야 해요.'
    },
    {
      id: 'd1-v07',
      word: 'pick up',
      phonetic: '/pɪk ʌp/',
      pos: '구동사',
      meaningKo: '(주문한 것·사람을) 찾아가다, 태우러 가다',
      meaningEn: 'collect an item or person on your route',
      nuanceTipKo: 'drop off의 정반대 짝꿍! 모바일 오더 음료 수령이나 장보기에도 폭넓게 쓰입니다.',
      exampleEn: 'Could you pick up some milk on your way back?',
      exampleKo: '돌아오는 길에 우유 좀 사다 줄래요?'
    },
    {
      id: 'd1-v08',
      word: 'run errands',
      phonetic: '/rʌn ˈerəndz/',
      pos: '연어(Collocation)',
      meaningKo: '(은행·우체국·마트 등) 자잘한 볼일을 보다',
      meaningEn: 'go out to do routine daily tasks',
      nuanceTipKo: '한국어 "볼일 좀 보고 올게"에 정확히 대응하는 표현입니다. 동사는 do보다 run을 압도적으로 많이 씁니다.',
      exampleEn: 'I spent Saturday morning running errands.',
      exampleKo: '토요일 오전 내내 밀린 볼일을 봤어요.'
    },
    {
      id: 'd1-v09',
      word: 'for here or to go',
      phonetic: '/fɔːr hɪr ɔːr tə ɡoʊ/',
      pos: '실전 구문',
      meaningKo: '매장에서 드시나요, 포장하시나요?',
      meaningEn: 'dining in the store or taking away',
      nuanceTipKo: '한국식 콩글리시 "take out" 대신 미국·캐나다 매장에서는 "To go, please"라고 답하는 것이 자연스럽습니다.',
      exampleEn: "Just an iced Americano to go, please.",
      exampleKo: '아이스 아메리카노 한 잔 테이크아웃으로 주세요.'
    },
    {
      id: 'd1-v10',
      word: 'head out',
      phonetic: '/hed aʊt/',
      pos: '구동사',
      meaningKo: '(밖으로/퇴근하러) 출발하다, 나가다',
      meaningEn: 'leave a place to go somewhere',
      nuanceTipKo: 'go out보다 목적지를 향해 슬슬 자리에서 일어나는 뉘앙스가 자연스럽게 담깁니다.',
      exampleEn: "I'm about to head out. Need anything?",
      exampleKo: '이제 막 나가려는데, 필요한 거 있으세요?'
    },
    {
      id: 'd1-v11',
      word: 'make a quick detour',
      phonetic: '/meɪk ə kwɪk ˈdiːtʊr/',
      pos: '연어(Collocation)',
      meaningKo: '잠깐 우회하다, 살짝 돌아가다',
      meaningEn: 'take a brief indirect route to visit a place',
      nuanceTipKo: '원래 경로에서 살짝 빠져 어딘가 들렀다 갈 때 지적인 느낌을 주는 표현입니다.',
      exampleEn: 'We made a quick detour to see the sunset.',
      exampleKo: '노을을 보려고 잠깐 길을 돌아갔어요.'
    },
    {
      id: 'd1-v12',
      word: 'just around the corner',
      phonetic: '/dʒʌst əˈraʊnd ðə ˈkɔːrnər/',
      pos: '전치사구',
      meaningKo: '바로 모퉁이 돌면 있는 (아주 가까운)',
      meaningEn: 'very close nearby;即将 다가오는',
      nuanceTipKo: '물리적 거리("바로 코앞")뿐 아니라 시기("연말이 코앞이다")에도 그대로 씁니다.',
      exampleEn: 'There is a great pharmacy just around the corner.',
      exampleKo: '모퉁이만 돌면 바로 좋은 약국이 하나 있어요.'
    },
    {
      id: 'd1-v13',
      word: 'beat the rush',
      phonetic: '/biːt ðə rʌʃ/',
      pos: '관용구',
      meaningKo: '혼잡한 시간대(러시아워)를 피하다',
      meaningEn: 'leave early to avoid heavy crowds or traffic',
      nuanceTipKo: 'avoid traffic보다 훨씬 원어민다운 생생한 동사 beat 활용 표현입니다.',
      exampleEn: "Let's leave at 5:30 to beat the evening rush.",
      exampleKo: '퇴근길 혼잡을 피하려면 5시 반에 출발합시다.'
    },
    {
      id: 'd1-v14',
      word: 'grab a bite',
      phonetic: '/ɡræb ə baɪt/',
      pos: '관용구',
      meaningKo: '간단히 요기하다, 가볍게 식사하다',
      meaningEn: 'get something quick to eat',
      nuanceTipKo: '거창한 저녁 식사 약속이 아니라 부담 없이 간단히 뭐 좀 먹자고 제안할 때 최고입니다.',
      exampleEn: 'Want to grab a quick bite before the movie?',
      exampleKo: '영화 보기 전에 간단히 뭐 좀 먹을래?'
    },
    {
      id: 'd1-v15',
      word: 'call it a day',
      phonetic: '/kɔːl ɪt ə deɪ/',
      pos: '관용구',
      meaningKo: '오늘 일과를 마무리하다 (퇴근하다)',
      meaningEn: 'decide to stop working for the day',
      nuanceTipKo: '오피스 미팅이나 작업을 기분 좋게 마무리하며 "오늘은 여기까지 하죠!" 할 때 쓰는 필수 숙어입니다.',
      exampleEn: "We finished the main deck—let's call it a day.",
      exampleKo: '메인 발표자료 다 끝냈으니 오늘은 이만 퇴근하죠.'
    }
  ],
  dialogue: [
    {
      id: 'd1-t1',
      speaker: 'Marcus',
      roleLabel: '동료 디자이너',
      voicePitch: 0.92,
      sceneImage: '/assets/scene_cafe_detour.jpg',
      cameraMotion: 'zoom-in',
      english: "Hey Chloe! Fancy seeing you here. Don't you live on the other side of town?",
      slashBroken: "Hey Chloe! / Fancy seeing you here. / Don't you live / on the other side of town?",
      korean: '어, 클로이! 여기서 다 보네. 동네 반대편에 살지 않아?',
      keyHighlight: 'Fancy seeing you here',
      noteKo: '예상치 못한 장소에서 반가운 지인을 마주쳤을 때 "여기서 다 보네!"라는 자연스러운 인사말입니다.'
    },
    {
      id: 'd1-t2',
      speaker: 'Chloe',
      roleLabel: '프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: '/assets/scene_cafe_detour.jpg',
      cameraMotion: 'pan-right',
      english: 'Haha, I do! I just stopped by on my way home to pick up some coffee beans.',
      slashBroken: 'Haha, I do! / I just stopped by / on my way home / to pick up some coffee beans.',
      korean: '하하, 맞아! 그냥 퇴근하는 길에 원두 좀 사려고 잠깐 들렀어.',
      keyHighlight: 'stopped by on my way home',
      noteKo: '[주어+동사] "I just stopped by"를 먼저 던지고, 동선(on my way home)과 목적(to pick up~)을 뒤에 이어 붙입니다.'
    },
    {
      id: 'd1-t3',
      speaker: 'Marcus',
      roleLabel: '동료 디자이너',
      voicePitch: 0.92,
      sceneImage: '/assets/visual_preposition_card.jpg',
      cameraMotion: 'zoom-in',
      english: 'Nice move. Their espresso roast is unbeatable. Are you heading straight home now?',
      slashBroken: 'Nice move. / Their espresso roast is unbeatable. / Are you heading straight home now?',
      korean: '잘했네. 여기 에스프레소 원두가 최고지. 이제 바로 집으로 가는 길이야?',
      keyHighlight: 'heading straight home',
      noteKo: 'head straight home에서도 home 앞에 전치사 to를 쓰지 않는 점에 주목하세요.'
    },
    {
      id: 'd1-t4',
      speaker: 'Chloe',
      roleLabel: '프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: '/assets/scene_cafe_detour.jpg',
      cameraMotion: 'pan-left',
      english: 'Almost! I still need to drop off a package at the post office around the corner.',
      slashBroken: 'Almost! / I still need to drop off a package / at the post office / around the corner.',
      korean: '거의! 모퉁이 돌면 있는 우체국에 소포 하나만 맡기고 가야 해.',
      keyHighlight: 'drop off a package',
      noteKo: '소포나 세탁물을 맡기고 금방 나올 때는 leave 대신 구동사 drop off가 찰떡입니다.'
    },
    {
      id: 'd1-t5',
      speaker: 'Barista',
      roleLabel: '카페 바리스타',
      voicePitch: 1.02,
      sceneImage: '/assets/scene_cafe_detour.jpg',
      cameraMotion: 'zoom-in',
      english: 'One iced oat latte and one bag of house blend, to go for Chloe!',
      slashBroken: 'One iced oat latte / and one bag of house blend, / to go / for Chloe!',
      korean: '클로이 님, 포장 주문하신 아이스 오트 라떼 한 잔이랑 하우스 블렌드 원두 한 봉지 나왔습니다!',
      keyHighlight: 'to go',
      noteKo: '매장 밖으로 가져가는 포장은 "for take-out"보다 간결한 "to go"가 표준입니다.'
    },
    {
      id: 'd1-t6',
      speaker: 'Chloe',
      roleLabel: '프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: '/assets/scene_cafe_detour.jpg',
      cameraMotion: 'pan-right',
      english: "That's me! Let's grab lunch near the office tomorrow, Marcus. Have a good evening!",
      slashBroken: "That's me! / Let's grab lunch / near the office tomorrow, Marcus. / Have a good evening!",
      korean: '제 거네요! 마커스, 내일 회사 근처에서 가볍게 점심 먹자. 좋은 저녁 보내!',
      keyHighlight: "Let's grab lunch",
      noteKo: '내일 식사 약속을 가볍게 잡을 때도 eat lunch 대신 grab lunch를 쓰면 훨씬 세련됩니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 한국어 역순 탈출: [누가 + 무엇을 했다]부터 1초 발사하기',
      coreFormula: 'I stopped by [들른 곳] + on my way [최종 목적지] + to [목적]',
      wrongKonglish: 'On my way to home from company, for buying coffee, I visited a cafe briefly.',
      rightNative: 'I stopped by a cafe on my way home from work to grab a coffee.',
      explanationKo:
        '한국어는 "회사에서 퇴근해서 집에 가는 길에(배경) + 커피 사려고(목적) + 카페에 잠깐 들렀어요(결론 동사)" 순으로 말합니다. 영어로 똑같이 배경부터 나열하면 문장이 꼬이고 회화 반응 속도가 3초 이상 늦어집니다. 무조건 [I stopped by a cafe]를 1초 만에 먼저 뱉은 뒤, 동선(on my way home)과 이유(to grab a coffee)를 블록처럼 뒤에 조립하세요.',
      registerSpectrum: {
        casual: 'I swung by a cafe on my way home to grab a coffee.',
        standard: 'I stopped by a cafe on my way home from work.',
        formal: 'I briefly stopped by the branch office on my way back.'
      }
    },
    {
      title: '원리 02 · 한국인 단골 실수 1위: on my way home vs. on my way to + 명사',
      coreFormula: 'on my way home / there / back (전치사 to 삭제!) ↔ on my way to work / the station',
      wrongKonglish: 'I called my mom on my way to home.',
      rightNative: 'I called my mom on my way home.',
      explanationKo:
        'home, there, downtown, back, upstairs 같은 단어는 그 자체에 "~로(방향)"라는 부사 의미가 이미 들어 있습니다. 따라서 앞에 전치사 to를 쓰면 의미가 중복되어 어색한 문법 오류가 됩니다. 반면 work(직장), school, the airport 같은 일반 명사 앞에는 반드시 to를 붙여야 합니다.',
      registerSpectrum: {
        casual: "I'm on my way home right now!",
        standard: 'I picked up dinner on my way home from the gym.',
        formal: 'I will review the document on my way to the airport.'
      }
    },
    {
      title: '원리 03 · 동선 위 3대 만능 구동사: stop by · drop off · pick up',
      coreFormula: 'stop by (사람·장소에 들르다) / drop off (맡기고 가다) / pick up (찾아·사서 가다)',
      wrongKonglish: 'I need to leave my clothes at the laundry and bring my coffee.',
      rightNative: 'I need to drop off my laundry and pick up my coffee.',
      explanationKo:
        '원어민의 일상 회화 80%는 어려운 한자어 동사(visit, deliver, collect) 대신 짧은 구동사로 굴러갑니다. 동선 위에서 몸만 들르면 stop by, 무언가 내려놓고 떠나면 drop off, 무언가 챙겨서 나오면 pick up — 이 세 가지만 입에 붙여도 하루 일과 표현력이 확 달라집니다.',
      registerSpectrum: {
        casual: 'Can you pick me up at Exit 4?',
        standard: 'Let me drop off these files at your desk first.',
        formal: 'Please feel free to stop by Booth B12 during the conference.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd1-s01',
      drillType: 'chunk-build',
      promptKo: '퇴근길에 카페에 잠깐 들렀어요.',
      promptEnHint: '[주어+동사]부터 먼저 뱉고 퇴근길 동선을 뒤에 붙이세요.',
      targetEn: 'I stopped by a cafe on my way home.',
      chunks: ['I stopped by', 'a cafe', 'on my way', 'home.'],
      explanationKo: 'home은 부사이므로 to 없이 on my way home으로 바로 연결합니다.'
    },
    {
      id: 'd1-s02',
      drillType: 'konglish-fix',
      promptKo: '"집에 가는 길에 엄마한테 전화했어." — 원어민 어법에 맞는 문장은?',
      promptEnHint: 'home 앞의 전치사 유무를 확인하세요.',
      targetEn: 'I called my mom on my way home.',
      wrongKonglishOption: 'I called my mom on my way to home.',
      explanationKo: 'home 앞에는 방향 전치사 to를 절대 쓰지 않습니다.'
    },
    {
      id: 'd1-s03',
      drillType: 'active-blank',
      promptKo: '출근길에 커피 한 잔 가볍게 사 마셨어요.',
      promptEnHint: 'buy/drink 대신 가볍게 챙긴다는 동사(과거형)를 써보세요.',
      targetEn: 'I grabbed a coffee on my way to work.',
      blankData: {
        before: 'I',
        answer: 'grabbed',
        after: 'a coffee on my way to work.',
        firstLetterHint: 'g (과거형 7글자)'
      },
      explanationKo: 'grab의 과거형은 자음 b를 한 번 더 써서 grabbed가 됩니다.'
    },
    {
      id: 'd1-s04',
      drillType: 'chunk-build',
      promptKo: '퇴근하기 전에 제 자리에 잠깐 들러주실 수 있나요?',
      promptEnHint: '정중한 요청 Can you ~ 로 시작하세요.',
      targetEn: 'Can you stop by my desk before you leave?',
      chunks: ['Can you', 'stop by', 'my desk', 'before you leave?'],
      explanationKo: '오피스에서 동료를 잠깐 부를 때 가장 자연스러운 표현입니다.'
    },
    {
      id: 'd1-s05',
      drillType: 'konglish-fix',
      promptKo: '"아이스 아메리카노 한 잔 포장(테이크아웃)으로 주세요."',
      promptEnHint: '매장 주문 시 포장 표현을 고르세요.',
      targetEn: 'One iced Americano to go, please.',
      wrongKonglishOption: 'One iced Americano take out, please.',
      explanationKo: '미국·캐나다 카페에서 포장 주문은 명사구 뒤에 "to go"를 붙입니다.'
    },
    {
      id: 'd1-s06',
      drillType: 'active-blank',
      promptKo: '7시 전에 세탁소에 세탁물을 맡기고 가야 해요.',
      promptEnHint: '물건을 내려놓고 떠난다는 구동사(2단어)를 넣으세요.',
      targetEn: 'I need to drop off my dry cleaning before 7.',
      blankData: {
        before: 'I need to',
        answer: 'drop off',
        after: 'my dry cleaning before 7.',
        firstLetterHint: 'd___ o__'
      },
      explanationKo: '세탁물·소포·서류를 맡기고 올 때는 drop off가 정답입니다.'
    },
    {
      id: 'd1-s07',
      drillType: 'chunk-build',
      promptKo: '돌아오시는 길에 우유 좀 사다 주실래요?',
      promptEnHint: '챙겨 오다 구동사 pick up을 활용하세요.',
      targetEn: 'Could you pick up some milk on your way back?',
      chunks: ['Could you', 'pick up', 'some milk', 'on your way back?'],
      explanationKo: 'back 역시 부사이므로 on your way back에 to를 붙이지 않습니다.'
    },
    {
      id: 'd1-s08',
      drillType: 'active-blank',
      promptKo: '토요일 오전에 밀린 자잘한 볼일들을 봤어요.',
      promptEnHint: 'errands와 짝을 이루는 동사(원형 기준)를 넣으세요.',
      targetEn: 'I had to run some errands on Saturday morning.',
      blankData: {
        before: 'I had to',
        answer: 'run',
        after: 'some errands on Saturday morning.',
        firstLetterHint: 'r (3글자)'
      },
      explanationKo: '"볼일을 보다"는 do errands보다 run errands 연어를 압도적으로 많이 씁니다.'
    },
    {
      id: 'd1-s09',
      drillType: 'konglish-fix',
      promptKo: '"오늘 업무는 여기까지 하고 이만 퇴근하죠!"',
      promptEnHint: '일과 마무리를 뜻하는 원어민 숙어를 고르세요.',
      targetEn: "Let's call it a day!",
      wrongKonglishOption: "Let's finish today's day!",
      explanationKo: "call it a day는 '오늘 하루 일과는 이걸로 충분하다(마치자)'라는 필수 오피스 관용구입니다."
    },
    {
      id: 'd1-s10',
      drillType: 'chunk-build',
      promptKo: '퇴근길 혼잡을 피하려고 5시 반에 출발했어요.',
      promptEnHint: '혼잡을 이기다(피하다) beat the rush를 뒤에 연결하세요.',
      targetEn: 'I left at 5:30 to beat the evening rush.',
      chunks: ['I left', 'at 5:30', 'to beat', 'the evening rush.'],
      explanationKo: 'beat the rush는 출퇴근 러시아워나 점심 줄을 피할 때 쓰는 고급 표현입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd1-ex01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '동선 구동사 stop by',
      questionKo: '빈칸에 알맞은 구동사(2단어, 과거형)를 써서 "퇴근길에 약국에 잠깐 들렀다"는 문장을 완성하세요.',
      stimulusEn: 'I __________ __________ the pharmacy on my way home.',
      answer: 'stopped by',
      acceptableAlt: ['swung by'],
      explanationKo: '과거 시점이므로 stop의 단모음+단자음 규칙에 따라 p를 두 번 쓴 stopped by(또는 swung by)가 정답입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "출근길에 은행에 잠깐 들렀다"가 되도록 빈칸(2단어)을 채우세요.',
        stimulusEn: 'I __________ __________ the bank on my way to work.',
        answer: 'stopped by',
        explanationKo: '시제가 과거이므로 stopped by를 사용합니다.'
      }
    },
    {
      id: 'd1-ex02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '구동사 drop off',
      questionKo: '빈칸에 알맞은 구동사(2단어)를 넣어 "우체국에 소포를 맡기고 가야 한다"는 문장을 완성하세요.',
      stimulusEn: 'I need to __________ __________ this package at the post office.',
      answer: 'drop off',
      explanationKo: '물건이나 사람을 특정 장소에 내려놓고 떠날 때는 drop off를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "경비실에 열쇠를 맡기고 가겠다"가 되도록 빈칸(2단어)을 채우세요.',
        stimulusEn: 'I will __________ __________ the keys at the security desk.',
        answer: 'drop off',
        explanationKo: '조동사 will 뒤이므로 동사원형 drop off를 씁니다.'
      }
    },
    {
      id: 'd1-ex03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '연어 grab a bite',
      questionKo: '빈칸에 알맞은 동사(1단어)를 넣어 "영화 전에 간단히 요기하자"는 문장을 완성하세요.',
      stimulusEn: "Let's __________ a quick bite before the movie starts.",
      answer: 'grab',
      explanationKo: '가볍고 빠르게 식사나 음료를 해결할 때 grab a bite / grab a coffee를 사용합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "아래층에서 커피 한 잔 가볍게 하실래요?"가 되도록 빈칸(1단어)을 채우세요.',
        stimulusEn: 'Would you like to __________ a coffee downstairs?',
        answer: 'grab',
        explanationKo: 'to부정사 뒤이므로 동사원형 grab을 씁니다.'
      }
    },
    {
      id: 'd1-ex04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '연어 run errands',
      questionKo: '빈칸에 알맞은 동사(1단어, -ing 형태)를 넣어 "주말 오전을 자잘한 볼일을 보며 보냈다"는 문장을 완성하세요.',
      stimulusEn: 'I spent Sunday morning __________ errands around town.',
      answer: 'running',
      explanationKo: 'spend + 시간 + -ing 구문과 run errands 연어가 결합되어 running이 됩니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "점심시간에 볼일을 좀 봐야 한다"가 되도록 빈칸(1단어)을 채우세요.',
        stimulusEn: 'I have to __________ a few errands during lunch.',
        answer: 'run',
        explanationKo: 'have to 뒤에는 동사원형 run이 옵니다.'
      }
    },
    {
      id: 'd1-ex05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '오피스 관용구 call it a day',
      questionKo: '빈칸에 알맞은 단어(1단어)를 넣어 "오늘은 이만 업무를 마무리하자"는 표현을 완성하세요.',
      stimulusEn: "We've covered everything on the agenda, so let's call it a __________.",
      answer: 'day',
      explanationKo: 'call it a day는 하루 일과를 마치고 퇴근하자는 대표적인 관용구입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "피곤해 보이는데 오늘은 이만 마무리하는 게 어때요?" 빈칸(1단어)을 채우세요.',
        stimulusEn: 'You look exhausted—why don’t we __________ it a day?',
        answer: 'call',
        explanationKo: "why don't we + 동사원형 구문이므로 call이 들어갑니다."
      }
    },
    {
      id: 'd1-ex06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '부사 home 어법',
      questionKo: '다음 중 어법상 가장 자연스러운 문장을 고르세요.',
      stimulusEn: '상황: 지하철을 타고 집으로 돌아가는 길에 동료의 메시지를 확인함',
      options: [
        'I saw your message on my way to home.',
        'I saw your message on my way home.',
        'I saw your message in my way to home.',
        'I saw your message at my way home.'
      ],
      answer: 'I saw your message on my way home.',
      explanationKo: '이동 동선 위는 전치사 on을 쓰며(in my way는 "길을 가로막는 방해물"이라는 뜻!), 부사 home 앞에는 to를 쓰지 않습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "지금 바로 집으로 가는 길이에요"를 바르게 영작하세요.',
        stimulusEn: "I'm __________ __________ __________ __________ right now. (4단어)",
        answer: 'on my way home',
        explanationKo: 'on my way home (to 없이 4단어)으로 씁니다.'
      }
    },
    {
      id: 'd1-ex07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'on my way vs in my way 구별',
      questionKo: '밑줄 친 표현의 의미가 나머지 셋과 완전히 다른(부정적 의미인) 문장은?',
      stimulusEn: '전치사 on과 in의 뉘앙스 차이에 유의하여 고르세요.',
      options: [
        'She bought flowers on her way to the hospital.',
        'That big box is right in my way—could you move it?',
        'I will call you on my way to the airport.',
        'He grabbed a bagel on his way to work.'
      ],
      answer: 'That big box is right in my way—could you move it?',
      explanationKo: 'on one’s way는 "~로 가는 도중에"이지만, in one’s way는 "지나가는 길을 막아서 방해가 되는"이라는 전혀 다른 뜻입니다!',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "공항으로 가는 길에 전화할게요"에서 빈칸 전치사(2단어)를 채우세요.',
        stimulusEn: 'I will call you __________ my way __________ the airport. (빈칸 단어를 순서대로 공백 구분)',
        answer: 'on to',
        explanationKo: 'on my way to + 명사(the airport) 구조입니다.'
      }
    },
    {
      id: 'd1-ex08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '매장 테이크아웃 표현',
      questionKo: '미국 현지 카페에서 바리스타가 "For here or to go?"라고 물었을 때 가장 자연스러운 대답은?',
      stimulusEn: '상황: 사무실로 들고 갈 아이스 라떼를 포장 주문하려는 상황',
      options: [
        'I will do take out, please.',
        'To go, please.',
        'Carry out cup, please.',
        'Outside drinking, please.'
      ],
      answer: 'To go, please.',
      explanationKo: '"For here, please(매장이요)" 또는 "To go, please(포장이요)"가 가장 간결하고 정확한 현지 응답입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "매장에서 마실게요"를 바리스타에게 3단어로 답해보세요.',
        stimulusEn: 'Barista: For here or to go? → You: "__________ __________, please." (2단어 빈칸)',
        answer: 'For here',
        explanationKo: '매장 취식은 For here, please라고 답합니다.'
      }
    },
    {
      id: 'd1-ex09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '구동사 대명사 어순 규칙',
      questionKo: '다음 중 구동사 pick up의 대명사 어순이 문법적으로 **틀린** 문장은?',
      stimulusEn: '타동사+부사 구동사에서 대명사(it/them/him)의 위치를 확인하세요.',
      options: [
        'I picked up the coffee on my way here.',
        'I picked the coffee up on my way here.',
        'I picked it up on my way here.',
        'I picked up it on my way here.'
      ],
      answer: 'I picked up it on my way here.',
      explanationKo: '핵심 어법! 목적어가 it, them, me 같은 대명사일 때는 반드시 구동사 한가운데(pick it up, drop them off)에 넣어야 합니다. pick up it은 틀린 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "제가 그것을 맡기고 갈게요"에서 (drop / off / it)을 바른 어순(3단어)으로 배열하세요.',
        stimulusEn: 'I will __________ __________ __________ at the front desk.',
        answer: 'drop it off',
        explanationKo: '대명사 it은 반드시 drop과 off 사이에 위치해야 합니다.'
      }
    },
    {
      id: 'd1-ex10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '혼잡 회피 관용구',
      questionKo: '"점심시간 붐비는 인파를 피하려고 11시 반에 일찍 밥 먹으러 갔다"에 가장 알맞은 표현은?',
      stimulusEn: 'We went out for lunch at 11:30 to ____________________.',
      options: [
        'beat the lunch rush',
        'win the lunch crowd',
        'hit the busy road',
        'make a quick detour'
      ],
      answer: 'beat the lunch rush',
      explanationKo: '붐비는 시간대보다 한발 앞서 피한다는 뜻으로 beat the (morning/lunch/evening) rush를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "교통 체증/러시아워를 피하다"가 되도록 빈칸 동사(1단어)를 쓰세요.',
        stimulusEn: 'Leave ten minutes early to __________ the rush.',
        answer: 'beat',
        explanationKo: 'beat the rush 연어를 기억하세요.'
      }
    },
    {
      id: 'd1-ex11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '서술형 통문장 배열',
      questionKo: '주어진 청크를 올바른 영어 어순으로 배열하여 완전한 문장을 작성하세요.',
      stimulusEn: '[ a cafe / I / on my way home / stopped by / to grab a latte. ]',
      answer: 'I stopped by a cafe on my way home to grab a latte.',
      acceptableAlt: ['On my way home, I stopped by a cafe to grab a latte.'],
      explanationKo: '[주어+동사] I stopped by a cafe + [동선] on my way home + [목적] to grab a latte 순서로 조립합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "출근길에 베이글을 사려고 빵집에 잠깐 들렀어요." 통문장으로 영작하세요.',
        stimulusEn: '힌트: stopped by / a bakery / on my way to work / to grab a bagel',
        answer: 'I stopped by a bakery on my way to work to grab a bagel.',
        explanationKo: 'work는 명사이므로 on my way to work로 to를 꼭 챙깁니다.'
      }
    },
    {
      id: 'd1-ex12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '정중한 오피스 요청문',
      questionKo: '우리말 뜻에 맞게 주어진 단어들을 모두 활용하여 문장을 완성하세요.',
      stimulusEn: '우리말: 퇴근하기 전에 제 자리에 잠깐 들러주실 수 있나요? (Can you / stop by / my desk / before you leave)',
      answer: 'Can you stop by my desk before you leave?',
      acceptableAlt: ['Could you stop by my desk before you leave?'],
      explanationKo: 'Can you stop by [장소] before you leave? 패턴은 실무에서 매일 쓰이는 필수 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "회의 시작 전에 3층에 잠깐 들러주실 수 있나요?" (Can you / stop by / the 3rd floor / before the meeting)',
        stimulusEn: '영문 전체를 작성하세요 (물음표 포함).',
        answer: 'Can you stop by the 3rd floor before the meeting?',
        explanationKo: 'stop by + 장소 + 시간 부사절/구 어순을 유지합니다.'
      }
    },
    {
      id: 'd1-ex13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'drop off + around the corner 결합',
      questionKo: '주어진 표현을 올바른 순서로 배열하여 문장을 완성하세요.',
      stimulusEn: '[ around the corner. / I need to / a package / drop off / at the post office ]',
      answer: 'I need to drop off a package at the post office around the corner.',
      explanationKo: '[의무+행동] I need to drop off a package + [장소] at the post office + [상세 위치] around the corner.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "모퉁이 돌면 바로 약국이 하나 있어요." (There is / a pharmacy / just around the corner.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'There is a pharmacy just around the corner.',
        explanationKo: '주변 시설 위치를 알려줄 때 가장 자연스러운 문장입니다.'
      }
    },
    {
      id: 'd1-ex14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시 교정 서술형',
      questionKo: '다음 콩글리시 문장의 문법·어휘 오류 2곳을 모두 고쳐 자연스러운 영어 문장으로 다시 쓰세요.',
      stimulusEn: '오류 문장: Could you pick up it on your way to home?',
      answer: 'Could you pick it up on your way home?',
      explanationKo: '① 대명사 목적어 it은 구동사 사이에(pick it up), ② 부사 home 앞의 전치사 to는 삭제(on your way home)해야 완벽한 문장이 됩니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 다음 오류 문장을 바르게 고쳐 다시 쓰세요: I dropped off them on my way to back.',
        stimulusEn: '오류 2곳(대명사 위치, 부사 back 앞 전치사)을 교정하세요.',
        answer: 'I dropped them off on my way back.',
        explanationKo: 'dropped them off + on my way back으로 교정합니다.'
      }
    },
    {
      id: 'd1-ex15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '실전 한영 통문장 영작',
      questionKo: '다음 우리말을 오늘 배운 핵심 표현(grab lunch)을 사용하여 자연스러운 영어로 영작하세요.',
      stimulusEn: '우리말: 내일 회사 근처에서 가볍게 점심 먹자! (힌트: Let’s / grab lunch / near the office / tomorrow.)',
      answer: "Let's grab lunch near the office tomorrow.",
      acceptableAlt: ["Let's grab lunch near the office tomorrow!"],
      explanationKo: "Let's grab lunch + 장소(near the office) + 시간(tomorrow) 어순으로 완성합니다.",
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "오늘 저녁에 역 근처에서 간단히 요기하자!" (Let’s / grab a bite / near the station / tonight.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "Let's grab a bite near the station tonight.",
        explanationKo: '식사보다 더 가벼운 요기는 grab a bite로 표현합니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "Hey! Did you go straight home yesterday evening, or did you stop by anywhere on your way back?",
    openingQuestionKo: '어제 저녁엔 바로 귀가하셨나요, 아니면 퇴근길에 어디 잠깐 들르신 곳이 있나요?',
    followUpQuestionEn:
      'Nice! What do you usually like to grab when you stop by a cafe or convenience store after work?',
    followUpQuestionKo: '좋네요! 퇴근 후 카페나 편의점에 들르면 주로 무엇을 가볍게 사시는 편인가요?',
    recommendedChunks: ['I stopped by ~', 'on my way home', 'to grab ~', 'drop off ~', 'run some errands'],
    modelAnswerEn:
      'Actually, I stopped by a bakery on my way home to grab some fresh bread, and then I dropped off my dry cleaning around the corner.'
  }
};
