import type { DayLessonModule } from '../../types/course.ts';

export const day5Module: DayLessonModule = {
  dayNumber: 5,
  dayBadge: 'DAY 05 · 단답형 탈출 3문장 확장법',
  categoryLabel: '오픽 IH·AL & 인터뷰·스몰토크 확장 기술',
  title: '단답형 Yes/No 탈출: 3문장 스토리 확장',
  subtitle: '질문을 받으면 어색하게 한마디로 끊기던 대화를 [핵심 포인트 → 이유 → 생생한 예시]로 매끄럽게 이어가는 법',
  heroImage: 'assets/scene_riverside_walk.jpg',
  secondaryImage: 'assets/scene_cafe_detour.jpg',
  estimatedSprintMin: 8,
  estimatedLectureMin: 42,
  keyExpression: 'What I love most is that it helps me clear my head',
  keySentenceByTier: {
    basic: 'I like walking by the river because it helps me relax after work.',
    standard: 'What I love most about evening walks is that they help me clear my head after a hectic day.',
    advanced: 'Whenever I feel burned out from staring at screens all day, going for a walk along the river is my go-to way to unwind and clear my head.'
  },
  vocabList: [
    {
      id: 'd5-v01',
      word: 'What I love most is ~',
      phonetic: '/wʌt aɪ lʌv moʊst ɪz/',
      pos: '강조 구문',
      meaningKo: '제가 가장 좋아하는 점은 바로 ~입니다',
      meaningEn: 'the best or favorite aspect for me is ~',
      nuanceTipKo: '밋밋한 "I like ~" 대신 문두에 What절 명사구를 세우면 듣는 사람의 귀가 번쩍 뜨이는 원어민 인트로가 됩니다.',
      exampleEn: 'What I love most about this neighborhood is how quiet it is.',
      exampleKo: '이 동네에서 제가 가장 좋아하는 점은 정말 조용하다는 거예요.'
    },
    {
      id: 'd5-v02',
      word: 'clear my head',
      phonetic: '/klɪr maɪ hed/',
      pos: '관용구',
      meaningKo: '복잡한 머리를 식히다, 잡념을 비우다',
      meaningEn: 'stop worrying and refresh your thoughts',
      nuanceTipKo: '한국인들이 흔히 "refresh my brain"이라고 콩글리시를 만들곤 하는데, 영어권에서는 clear my head를 압도적으로 많이 씁니다!',
      exampleEn: 'A 20-minute walk always helps me clear my head.',
      exampleKo: '20분 정도 산책하면 늘 복잡한 머리를 식히는 데 도움이 돼요.'
    },
    {
      id: 'd5-v03',
      word: 'unwind',
      phonetic: '/ˌʌnˈwaɪnd/',
      pos: '동사',
      meaningKo: '(하루의 긴장·피로를) 풀다, 쉬다',
      meaningEn: 'relax after a period of work or tension',
      nuanceTipKo: '태엽(wind)이 팽팽히 감긴 상태를 풀어준다(un-wind)는 어원! 퇴근 후 휴식을 말할 때 relax보다 훨씬 세련됩니다.',
      exampleEn: 'Listening to jazz is my favorite way to unwind at night.',
      exampleKo: '밤에 재즈를 듣는 것이 제가 제일 좋아하는 피로 해소법이에요.'
    },
    {
      id: 'd5-v04',
      word: 'hectic',
      phonetic: '/ˈhektɪk/',
      pos: '형용사',
      meaningKo: '정신없이 바쁜, 눈코 뜰 새 없는',
      meaningEn: 'full of frantic, nonstop activity',
      nuanceTipKo: 'busy day 대신 hectic day / hectic week를 쓰면 오픽·인터뷰 어휘 점수가 즉각 올라갑니다.',
      exampleEn: 'After a hectic week, I just want to stay in.',
      exampleKo: '정신없이 바쁜 한 주를 보낸 뒤엔 그냥 집에 콕 박혀 있고 싶어요.'
    },
    {
      id: 'd5-v05',
      word: 'go-to',
      phonetic: '/ˈɡoʊ tuː/',
      pos: '형용사',
      meaningKo: '(고민 없이) 늘 즐겨 찾는, 믿고 선택하는 ("최애/단골")',
      meaningEn: 'regularly chosen and relied upon as the best option',
      nuanceTipKo: 'my favorite 대신 my go-to cafe / my go-to stress reliever라고 해보세요. 완전히 현업 원어민 어감입니다.',
      exampleEn: 'Han River Park is my go-to spot whenever I need fresh air.',
      exampleKo: '바깥공기가 필요할 때마다 제가 늘 찾는 단골 장소는 한강공원이에요.'
    },
    {
      id: 'd5-v06',
      word: 'recharge my batteries',
      phonetic: '/ˌriːˈtʃɑːrdʒ maɪ ˈbætəriz/',
      pos: '관용구',
      meaningKo: '에너지를 재충전하다',
      meaningEn: 'rest and regain energy and enthusiasm',
      nuanceTipKo: '한국어 "힐링하다"를 "do healing"으로 쓰면 콩글리시입니다! 영어로는 unwind나 recharge (my batteries)로 표현하세요.',
      exampleEn: 'Weekend hikes really help me recharge my batteries.',
      exampleKo: '주말 등산은 에너지를 재충전하는 데 정말 큰 도움이 됩니다.'
    },
    {
      id: 'd5-v07',
      word: 'for instance',
      phonetic: '/fɔːr ˈɪnstəns/',
      pos: '연결부사구',
      meaningKo: '예를 들어 (구체적 에피소드 연결)',
      meaningEn: 'for example; as a specific illustration',
      nuanceTipKo: '2번째 문장(이유)에서 3번째 문장(실제 경험담)으로 넘어갈 때 말을 자연스럽게 이어주는 최고의 윤활유입니다.',
      exampleEn: 'For instance, just last night I walked two miles along the stream.',
      exampleKo: '예를 들어 바로 어젯밤에도 천변을 따라 2마일이나 걸었거든요.'
    },
    {
      id: 'd5-v08',
      word: 'go for a walk',
      phonetic: '/ɡoʊ fɔːr ə wɔːk/',
      pos: '연어(Collocation)',
      meaningKo: '산책하러 가다',
      meaningEn: 'take a pleasant walk outside for leisure',
      nuanceTipKo: '단순 이동(walk)이 아니라 기분 전환 삼아 걷는 산책은 go for a walk 또는 take a stroll을 씁니다.',
      exampleEn: "The weather is gorgeous—let's go for a walk after lunch.",
      exampleKo: '날씨가 정말 환상적이네요. 점심 먹고 산책하러 가요.'
    },
    {
      id: 'd5-v09',
      word: 'burned out',
      phonetic: '/bɜːrnd aʊt/',
      pos: '형용사구',
      meaningKo: '번아웃이 온, 심신이 소진된',
      meaningEn: 'exhausted physically and mentally from prolonged stress',
      nuanceTipKo: '단순히 잠이 부족한 tired를 넘어 에너지가 고갈된 상태를 설명할 때 정확히 들어맞습니다.',
      exampleEn: 'Taking short breaks keeps me from feeling burned out.',
      exampleKo: '짧게라도 휴식을 챙겨야 번아웃이 오는 걸 막을 수 있어요.'
    },
    {
      id: 'd5-v10',
      word: 'stay in',
      phonetic: '/steɪ ɪn/',
      pos: '구동사',
      meaningKo: '외출하지 않고 집에서 쉬다 ("집콕하다")',
      meaningEn: 'remain at home rather than going out socially',
      nuanceTipKo: 'go out(외출해 놀다)의 정반대 구동사! "집순이/집돌이"인 주말 루틴을 말할 때 필수입니다.',
      exampleEn: 'Do you feel like going out tonight, or would you rather stay in?',
      exampleKo: '오늘 밤에 나가서 놀고 싶어, 아니면 그냥 집에서 쉬고 싶어?'
    },
    {
      id: 'd5-v11',
      word: 'take my mind off ~',
      phonetic: '/teɪk maɪ maɪnd ɔːf/',
      pos: '관용구',
      meaningKo: '~에 대한 걱정·생각을 잠시 잊게 해주다',
      meaningEn: 'stop you from thinking or worrying about something stressful',
      nuanceTipKo: '취미 활동을 왜 좋아하는지 이유를 댈 때 "It takes my mind off work(일 생각을 잊게 해줘요)"라고 쓰면 만점 답변입니다!',
      exampleEn: 'Cooking dinner really takes my mind off work stress.',
      exampleKo: '저녁 요리를 하면 업무 스트레스 생각을 싹 잊게 돼요.'
    },
    {
      id: 'd5-v12',
      word: 'a breath of fresh air',
      phonetic: '/ə breθ əv freʃ er/',
      pos: '관용구',
      meaningKo: '신선한 활력소, 기분 전환',
      meaningEn: 'a refreshing change from routine',
      nuanceTipKo: '실제 상쾌한 바깥공기뿐 아니라 반복되는 일상 속 신선한 변화를 비유할 때도 자주 씁니다.',
      exampleEn: 'Getting away from the city was a real breath of fresh air.',
      exampleKo: '도심을 잠시 벗어난 것이 정말 신선한 활력소가 되었어요.'
    },
    {
      id: 'd5-v13',
      word: 'on top of that',
      phonetic: '/ɑːn tɑːp əv ðæt/',
      pos: '연결부사구',
      meaningKo: '게다가, 그뿐만 아니라 (장점 추가)',
      meaningEn: 'in addition to what was just mentioned',
      nuanceTipKo: '딱딱한 Moreover, Furthermore 대신 구어체 스피킹에서 두 번째 장점을 덧붙일 때 가장 자연스럽습니다.',
      exampleEn: "It's free, and on top of that, I sleep much better afterward.",
      exampleKo: '돈도 안 들고, 게다가 다녀오면 잠도 훨씬 푹 잘 자요.'
    },
    {
      id: 'd5-v14',
      word: 'stare at a screen',
      phonetic: '/ster æt ə skriːn/',
      pos: '연어(Collocation)',
      meaningKo: '모니터/스마트폰 화면을 뚫어져라 쳐다보다',
      meaningEn: 'look fixedly at a computer or phone display for a long time',
      nuanceTipKo: '현대 직장인·학생이 야외 취미를 즐기는 배경 이유로 대기에 가장 공감 가는 표현입니다.',
      exampleEn: 'After staring at a screen for eight hours, my eyes need a rest.',
      exampleKo: '8시간 내내 모니터 화면만 쳐다보고 나면 눈을 쉬게 해줘야 해요.'
    },
    {
      id: 'd5-v15',
      word: 'make a habit of -ing',
      phonetic: '/meɪk ə ˈhæbɪt əv/',
      pos: '관용구',
      meaningKo: '~하는 것을 습관화하다(루틴으로 삼다)',
      meaningEn: 'regularly and intentionally do something as a routine',
      nuanceTipKo: '스피킹 답변의 마지막 3번째 마무리 문장으로 "그래서 요즘 매일 ~하는 습관을 들이고 있어요"라고 맺기 좋습니다.',
      exampleEn: "Lately, I've made a habit of walking 30 minutes after dinner.",
      exampleKo: '요즘은 저녁 식사 후 30분씩 걷는 것을 습관으로 만들고 있어요.'
    }
  ],
  dialogue: [
    {
      id: 'd5-t1',
      speaker: 'Interviewer',
      roleLabel: '글로벌 캐주얼 티타임 호스트',
      voicePitch: 0.94,
      sceneImage: 'assets/scene_riverside_walk.jpg',
      cameraMotion: 'zoom-in',
      english: 'Chloe, your team has been super busy lately! How do you usually unwind after a hectic workday?',
      slashBroken: 'Chloe, / your team has been super busy lately! / How do you usually unwind / after a hectic workday?',
      korean: '클로이, 요즘 팀이 엄청 바빴잖아요! 정신없는 하루 일과를 마친 뒤엔 주로 어떻게 피로를 푸세요?',
      keyHighlight: 'unwind after a hectic workday',
      noteKo: '스몰토크·인터뷰·오픽에서 100% 등장하는 단골 질문입니다. 단답형("I just walk.") 대신 3문장으로 풀어내 보세요!'
    },
    {
      id: 'd5-t2',
      speaker: 'Chloe',
      roleLabel: '프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_riverside_walk.jpg',
      cameraMotion: 'pan-right',
      english: 'My go-to way to unwind is going for an evening walk along the Han River near my apartment.',
      slashBroken: 'My go-to way to unwind / is going for an evening walk / along the Han River / near my apartment.',
      korean: '[1문장: 핵심 결론] 제가 제일 즐겨 찾는 피로 해소법은 집 근처 한강 변을 따라 저녁 산책을 나가는 거예요.',
      keyHighlight: 'My go-to way to unwind',
      noteKo: 'PREP의 P(Point): My go-to way to unwind is ~ 패턴으로 명확하고 세련되게 첫 문장을 엽니다.'
    },
    {
      id: 'd5-t3',
      speaker: 'Chloe',
      roleLabel: '프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_riverside_walk.jpg',
      cameraMotion: 'pan-left',
      english: 'What I love most about it is that the river breeze takes my mind off work and clears my head.',
      slashBroken: 'What I love most about it is that / the river breeze takes my mind off work / and clears my head.',
      korean: '[2문장: 이유·매력] 가장 좋은 점은 강바람을 쐬면 업무 생각을 잠시 잊고 복잡한 머리를 식힐 수 있다는 거예요.',
      keyHighlight: 'What I love most ~ clears my head',
      noteKo: 'PREP의 R(Reason): What I love most about it is that ~ 구문으로 왜 좋은지 감정과 효능을 덧붙입니다.'
    },
    {
      id: 'd5-t4',
      speaker: 'Interviewer',
      roleLabel: '글로벌 캐주얼 티타임 호스트',
      voicePitch: 0.94,
      sceneImage: 'assets/scene_riverside_walk.jpg',
      cameraMotion: 'zoom-in',
      english: 'That sounds amazing, especially after staring at a laptop screen all day! Do you walk alone or with someone?',
      slashBroken: 'That sounds amazing, / especially after staring at a laptop screen all day! / Do you walk alone or with someone?',
      korean: '정말 좋겠네요, 특히 하루 종일 노트북 화면만 쳐다본 뒤에는요! 혼자 걸으시나요, 아니면 누구와 함께 걸으시나요?',
      keyHighlight: 'staring at a laptop screen all day',
      noteKo: '상대방의 이유에 공감하며 자연스럽게 후속 질문(follow-up question)이 이어집니다.'
    },
    {
      id: 'd5-t5',
      speaker: 'Chloe',
      roleLabel: '프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_riverside_walk.jpg',
      cameraMotion: 'pan-right',
      english: 'Mostly on my own with an acoustic playlist! For instance, last night I walked until sunset and felt totally recharged.',
      slashBroken: 'Mostly on my own / with an acoustic playlist! / For instance, last night / I walked until sunset and felt totally recharged.',
      korean: '[3문장: 구체적 에피소드] 주로 어쿠스틱 음악을 들으며 혼자 걸어요! 예를 들어 어젯밤에도 노을 질 때까지 걸었더니 완전히 재충전됐어요.',
      keyHighlight: 'For instance, last night ~',
      noteKo: 'PREP의 E(Example): For instance + 어제/지난주 실제 장면 한 줄을 넣으면 살아 숨 쉬는 원어민 영어가 됩니다.'
    },
    {
      id: 'd5-t6',
      speaker: 'Interviewer',
      roleLabel: '글로벌 캐주얼 티타임 호스트',
      voicePitch: 0.94,
      sceneImage: 'assets/scene_cafe_detour.jpg',
      cameraMotion: 'zoom-in',
      english: 'I should definitely make a habit of doing that too instead of just staying in on my couch!',
      slashBroken: 'I should definitely make a habit of doing that too / instead of just staying in / on my couch!',
      korean: '저도 소파에 누워 집콕만 하지 말고 꼭 그렇게 산책하는 습관을 들여야겠네요!',
      keyHighlight: 'make a habit of ~ staying in',
      noteKo: 'instead of 뒤에도 전치사의 목적어로 동명사(staying in)가 온다는 점을 함께 챙기세요.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 어색한 침묵을 깨는 3문장 PREP 스피킹 엔진',
      coreFormula: '① Point (My go-to ~ is...) → ② Reason (What I love most is that...) → ③ Example (For instance, last week...)',
      wrongKonglish: 'Q: What do you do after work? → A: Um... I walk. Because it is good.',
      rightNative: 'My go-to way to unwind is walking by the river. What I love most is that it clears my head. For instance, I walked an hour last night!',
      explanationKo:
        '영어를 못해서 대화가 끊기는 게 아니라, 단답형으로 마침표를 빨리 찍어버려서 대화가 끊기는 것입니다. 어떤 질문을 받든 [① 내 최애 선택(go-to) → ② 가장 좋은 이유(What I love most) → ③ 어제·지난주 짧은 실례(For instance)] 3문장 템플릿에 얹으면 최소 30초 이상 유창하게 말할 수 있습니다.',
      registerSpectrum: {
        casual: "I love evening walks! They really clear my head after a crazy day.",
        standard: 'My go-to way to unwind is going for a walk because it helps me clear my head.',
        formal: 'I make a habit of taking evening walks to recharge and maintain mental clarity.'
      }
    },
    {
      title: '원리 02 · 한국어 "힐링하다 / 리프레시하다" 콩글리시 완전 정복',
      coreFormula: 'unwind / clear my head / recharge my batteries / take my mind off work',
      wrongKonglish: 'Going to the park gives me many healings and refreshes my brain.',
      rightNative: 'Going to the park helps me unwind, clear my head, and recharge my batteries.',
      explanationKo:
        '영어에서 heal은 "상처·골절·깊은 트라우마가 치유되다"라는 무거운 의학적·심리적 동사입니다! 한국어식 "주말에 카페 가서 힐링했어"를 "I did healing at a cafe"라고 하면 원어민이 "어디 다쳤었어?!"라며 깜짝 놀랍니다. 일상적인 스트레스 해소와 힐링은 반드시 unwind, relax, clear my head, recharge로 표현하세요.',
      registerSpectrum: {
        casual: 'A quiet cafe trip really helped me unwind this weekend.',
        standard: 'Spending time in nature helps me recharge my batteries.',
        formal: 'Taking regular time off is essential to prevent feeling burned out.'
      }
    },
    {
      title: '원리 03 · 문장 첫머리에 힘을 싣는 What 관계대명사 명사절 강조법',
      coreFormula: 'What I love most (about A) + is (that) + 주어 + 동사',
      wrongKonglish: 'The thing which I very like is river wind is cool.',
      rightNative: 'What I love most about it is that the river breeze feels so refreshing.',
      explanationKo:
        '[What + 주어 + 동사]는 그 자체로 "~하는 것"이라는 단수 명사 덩어리 주어가 됩니다. 따라서 바로 뒤에 단수 동사 is를 연결하고, 설명할 내용이 문장이면 접속사 that + 완전한 문장을 이어 붙이면 고급스러운 강조 구문이 손쉽게 완성됩니다.',
      registerSpectrum: {
        casual: 'What I love most is just listening to music while I walk.',
        standard: 'What I love most about this cafe is that it stays quiet at night.',
        formal: 'What we value most in our team culture is open communication.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd5-s01',
      drillType: 'chunk-build',
      promptKo: '제가 가장 좋아하는 피로 해소법은 저녁 산책을 나가는 거예요.',
      promptEnHint: 'My go-to way to unwind is ~ 패턴으로 시작하세요.',
      targetEn: 'My go-to way to unwind is going for an evening walk.',
      chunks: ['My go-to way', 'to unwind', 'is going for', 'an evening walk.'],
      explanationKo: 'go-to(~할 때 늘 찾는 단골 선택)와 unwind(긴장을 풀다)를 결합한 만점 오프닝입니다.'
    },
    {
      id: 'd5-s02',
      drillType: 'konglish-fix',
      promptKo: '"주말 등산으로 제대로 힐링(재충전)했어요!" — 자연스러운 영어는?',
      promptEnHint: 'do healing 콩글리시를 피하세요!',
      targetEn: 'Hiking this weekend really helped me unwind and recharge.',
      wrongKonglishOption: 'Hiking this weekend really made me do healing a lot.',
      explanationKo: '한국어 "힐링하다"는 영어에서 unwind와 recharge (my batteries)로 표현합니다.'
    },
    {
      id: 'd5-s03',
      drillType: 'chunk-build',
      promptKo: '제가 가장 좋아하는 점은 그것이 복잡한 머리를 식혀준다는 거예요.',
      promptEnHint: '강조 주어 What I love most is that ~ 을 조립하세요.',
      targetEn: 'What I love most is that it clears my head.',
      chunks: ['What I love most', 'is that', 'it clears', 'my head.'],
      explanationKo: 'What절은 단수 취급하므로 동사 is를 쓰고, clear my head로 마무리합니다.'
    },
    {
      id: 'd5-s04',
      drillType: 'active-blank',
      promptKo: '정신없이 바쁜 하루 일과를 마친 뒤엔 그냥 집에서 쉬고 싶어요.',
      promptEnHint: '눈코 뜰 새 없이 바쁜(h로 시작하는 형용사)을 넣으세요.',
      targetEn: 'After a hectic workday, I just want to stay in.',
      blankData: {
        before: 'After a',
        answer: 'hectic',
        after: 'workday, I just want to stay in.',
        firstLetterHint: 'h_____ (6글자)'
      },
      explanationKo: 'hectic workday와 stay in(집콕하다)은 함께 쓰기 아주 좋은 짝꿍입니다.'
    },
    {
      id: 'd5-s05',
      drillType: 'active-blank',
      promptKo: '저녁 요리를 하면 업무 스트레스 생각을 싹 잊게 돼요.',
      promptEnHint: 'take my ____ off ~ (생각을 다른 곳으로 돌리다)',
      targetEn: 'Cooking dinner really takes my mind off work stress.',
      blankData: {
        before: 'Cooking dinner really takes my',
        answer: 'mind',
        after: 'off work stress.',
        firstLetterHint: 'm___ (4글자)'
      },
      explanationKo: 'take one’s mind off ~ 는 걱정거리에서 주의를 환기시켜 준다는 핵심 숙어입니다.'
    },
    {
      id: 'd5-s06',
      drillType: 'konglish-fix',
      promptKo: '"하루 종일 모니터 화면을 쳐다본 뒤라 눈이 피곤해요."',
      promptEnHint: '화면을 응시하다는 전치사 결합을 확인하세요.',
      targetEn: 'My eyes are tired after staring at a screen all day.',
      wrongKonglishOption: 'My eyes are tired after staring to a screen all day.',
      explanationKo: 'stare는 반드시 전치사 at과 결합하여 stare at a screen으로 씁니다.'
    },
    {
      id: 'd5-s07',
      drillType: 'chunk-build',
      promptKo: '예를 들어 바로 어젯밤에도 강변을 따라 한 시간 동안 걸었어요.',
      promptEnHint: '예시 연결어 For instance로 문장을 여세요.',
      targetEn: 'For instance, just last night I walked along the river for an hour.',
      chunks: ['For instance,', 'just last night', 'I walked along the river', 'for an hour.'],
      explanationKo: '구체적인 과거 시점(just last night) 에피소드를 한 줄 넣으면 스피킹 설득력이 극대화됩니다.'
    },
    {
      id: 'd5-s08',
      drillType: 'active-blank',
      promptKo: '짧은 휴식을 챙겨야 번아웃이 오는 것을 막을 수 있어요.',
      promptEnHint: '에너지가 다 타버려 소진된(b_____ out)에서 앞 단어를 쓰세요.',
      targetEn: 'Taking short breaks keeps me from feeling burned out.',
      blankData: {
        before: 'Taking short breaks keeps me from feeling',
        answer: 'burned',
        after: 'out.',
        firstLetterHint: 'b_____ (6글자)'
      },
      explanationKo: 'feel burned out은 심신이 지쳐 소진된 번아웃 상태를 뜻합니다.'
    },
    {
      id: 'd5-s09',
      drillType: 'chunk-build',
      promptKo: '돈도 안 들고, 게다가 다녀오면 잠도 훨씬 잘 자요.',
      promptEnHint: '구어체 추가 연결어 on top of that을 넣으세요.',
      targetEn: "It's free, and on top of that, I sleep much better.",
      chunks: ["It's free,", 'and on top of that,', 'I sleep', 'much better.'],
      explanationKo: '비교급 강조 부사 much(more better 금지!)와 on top of that을 자연스럽게 연결합니다.'
    },
    {
      id: 'd5-s10',
      drillType: 'active-blank',
      promptKo: '요즘 저녁 식사 후 30분씩 걷는 습관을 들이고 있어요.',
      promptEnHint: 'make a _____ of -ing (~하는 습관을 들이다)',
      targetEn: "Lately, I've made a habit of walking 30 minutes after dinner.",
      blankData: {
        before: "Lately, I've made a",
        answer: 'habit',
        after: 'of walking 30 minutes after dinner.',
        firstLetterHint: 'h____ (5글자)'
      },
      explanationKo: 'make a habit of + 동명사(-ing)는 일상 루틴을 소개할 때 최고의 마무리 구문입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd5-ex01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '관용구 clear my head',
      questionKo: '빈칸에 알맞은 명사(1단어)를 넣어 "신선한 밤공기가 복잡한 머리를 식히는 데 도움이 된다"를 완성하세요.',
      stimulusEn: 'Stepping outside for fresh night air always helps me clear my __________.',
      answer: 'head',
      acceptableAlt: ['mind'],
      explanationKo: 'clear my head(또는 mind)는 복잡한 잡념을 비우고 머리를 맑게 식힌다는 뜻입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "업무 걱정을 잠시 잊게 해주다"가 되도록 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Playing tennis really takes my __________ __________ work.',
        answer: 'mind off',
        explanationKo: 'take one’s mind off ~ 숙어입니다.'
      }
    },
    {
      id: 'd5-ex02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '피로 해소 unwind',
      questionKo: '빈칸에 알맞은 동사(1단어)를 넣어 "긴 하루 끝에 긴장과 피로를 풀다"를 완성하세요.',
      stimulusEn: 'Drinking warm chamomile tea is how I __________ at the end of a long day.',
      answer: 'unwind',
      acceptableAlt: ['relax'],
      explanationKo: '하루 동안 쌓인 긴장의 태엽을 풀어준다는 뜻의 unwind가 가장 세련된 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "늘 즐겨 찾는 단골 카페"가 되도록 하이픈(-)을 포함한 형용사(1단어)를 쓰세요.',
        stimulusEn: 'This quiet roastery is my __________ cafe for weekend reading.',
        answer: 'go-to',
        explanationKo: '고민 없이 믿고 찾는 최애 선택지를 my go-to + 명사로 표현합니다.'
      }
    },
    {
      id: 'd5-ex03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '형용사 hectic',
      questionKo: '빈칸에 알맞은 형용사(1단어)를 넣어 "정신없이 바빴던 한 주"를 완성하세요.',
      stimulusEn: 'After such a __________ week at the office, I slept until noon on Saturday.',
      answer: 'hectic',
      explanationKo: '눈코 뜰 새 없이 분주한 일정을 묘사할 때 hectic을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "외출하지 않고 집에서 쉬다(집콕하다)" 구동사(2단어)를 넣으세요.',
        stimulusEn: "It's pouring outside, so let's just __________ __________ tonight.",
        answer: 'stay in',
        explanationKo: '외출(go out) 대신 집에 머물며 쉬는 것은 stay in입니다.'
      }
    },
    {
      id: 'd5-ex04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '관용구 recharge batteries',
      questionKo: '빈칸에 알맞은 동사(1단어)를 넣어 "주말 여행이 에너지를 재충전하는 데 도움이 됐다"를 완성하세요.',
      stimulusEn: 'A short trip to Gangneung helped me __________ my batteries.',
      answer: 'recharge',
      explanationKo: 'recharge one’s batteries는 지친 활력을 되찾는다는 대표적인 관용구입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "번아웃이 온(소진된) 느낌이 들다" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Working six weekends in a row left him feeling __________ __________.',
        answer: 'burned out',
        explanationKo: 'feel burned out 구문입니다.'
      }
    },
    {
      id: 'd5-ex05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '습관 형성 make a habit of',
      questionKo: '괄호 안 동사 stretch를 어법에 맞게 변형하여 "아침마다 스트레칭하는 습관을 들였다"를 완성하세요.',
      stimulusEn: 'I have made a habit of __________ (stretch) for ten minutes every morning.',
      answer: 'stretching',
      explanationKo: '전치사 of의 목적어 자리이므로 동명사 stretching이 와야 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] instead of 뒤에 괄호 안 동사 take를 알맞게 변형해 쓰세요.',
        stimulusEn: 'I walked home instead of __________ (take) the crowded bus.',
        answer: 'taking',
        explanationKo: '전치사구 instead of 뒤에도 동명사 taking을 씁니다.'
      }
    },
    {
      id: 'd5-ex06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'What절 주어 수일치',
      questionKo: '다음 빈칸에 들어갈 어법상 가장 올바른 표현은?',
      stimulusEn: '____________________ about evening walks is how peaceful the streets feel.',
      options: [
        'What I love most',
        'That I love most',
        'Which I love most',
        'How I love most thing'
      ],
      answer: 'What I love most',
      explanationKo: '선행사를 포함한 관계대명사 What(~하는 것)이 문장 맨 앞에서 명사절 주어를 이끕니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] What절 주어는 단수 취급합니다. 알맞은 현재형 be동사(1단어)를 넣으세요.',
        stimulusEn: 'What I enjoy most on weekends __________ cooking for friends.',
        answer: 'is',
        explanationKo: 'What절 주어는 단수 동사 is로 받습니다.'
      }
    },
    {
      id: 'd5-ex07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '힐링 콩글리시 교정',
      questionKo: '"주말에 숲속 펜션에 다녀왔더니 제대로 힐링이 되었어요"를 가장 원어민답게 영작한 문장은?',
      stimulusEn: 'healing 동사의 실제 영어 쓰임에 주의하여 고르세요.',
      options: [
        'Staying at a forest cabin gave me big healing.',
        'I did healing very well at a forest cabin this weekend.',
        'Staying at a forest cabin was a breath of fresh air and helped me recharge.',
        'The forest cabin cured my weekend stress disease.'
      ],
      answer: 'Staying at a forest cabin was a breath of fresh air and helped me recharge.',
      explanationKo: 'a breath of fresh air(신선한 기분 전환)와 helped me recharge를 결합하면 최고급 원어민 표현이 됩니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "신선한 활력소/기분 전환"을 뜻하는 관용구에서 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Getting out of town was a breath of __________ __________.',
        answer: 'fresh air',
        explanationKo: 'a breath of fresh air 관용구입니다.'
      }
    },
    {
      id: 'd5-ex08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '비교급 강조 부사',
      questionKo: '다음 빈칸에 들어갈 수 **없는** 단어는?',
      stimulusEn: 'After walking for 30 minutes, I always sleep __________ better at night.',
      options: ['much', 'way', 'far', 'more'],
      answer: 'more',
      explanationKo: 'better는 이미 비교급이므로 앞에 more를 또 붙이면(more better) 문법 오류입니다! 비교급 강조는 much, even, far, a lot, (구어체) way를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 문장 "I feel more better now."에서 more를 대신할 4글자 강조 부사(m으로 시작)를 쓰세요.',
        stimulusEn: 'I feel __________ better now.',
        answer: 'much',
        explanationKo: 'much better가 올바른 표현입니다.'
      }
    },
    {
      id: 'd5-ex09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '담화 연결어 기능',
      questionKo: '앞 문장에서 장점을 말한 뒤, 두 번째 장점을 "게다가, 그뿐만 아니라"라며 구어체로 자연스럽게 덧붙일 때 쓰는 표현은?',
      stimulusEn: "Walking doesn't cost a dime, and ____________________, it boosts my mood.",
      options: [
        'on top of that',
        'at the last minute',
        'on my way home',
        'by the end of day'
      ],
      answer: 'on top of that',
      explanationKo: 'on top of that은 그 위에 하나를 더 얹듯 추가 장점을 덧붙일 때 쓰는 최고의 스피킹 연결어입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 구체적 사례를 들며 "예를 들어"를 뜻하는 2단어 표현(For i_______)을 완성하세요.',
        stimulusEn: '__________ __________, just yesterday I walked five kilometers.',
        answer: 'For instance',
        explanationKo: 'For example과 함께 교차해 쓰기 좋은 For instance입니다.'
      }
    },
    {
      id: 'd5-ex10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '산책 연어 표현',
      questionKo: '"점심 먹고 잠깐 산책하러 갈래요?"를 뜻하는 가장 자연스러운 영어 문장은?',
      stimulusEn: '여가·기분 전환 산책을 나타내는 연어를 고르세요.',
      options: [
        'Do you want to go for a walk after lunch?',
        'Do you want to run errands foot after lunch?',
        'Shall we do walking road after lunch?',
        'Want to step street after lunch?'
      ],
      answer: 'Do you want to go for a walk after lunch?',
      explanationKo: 'go for a walk(또는 take a walk)가 산책하러 가다의 정확한 연어입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "노트북 화면을 뚫어져라 쳐다보다"에서 알맞은 전치사(1단어)를 넣으세요.',
        stimulusEn: 'My neck hurts from staring __________ my laptop screen.',
        answer: 'at',
        explanationKo: '응시 대상을 가리킬 때 stare at을 씁니다.'
      }
    },
    {
      id: 'd5-ex11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'PREP 1문장 go-to 오프닝 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 스피킹 첫 문장을 완성하세요.',
      stimulusEn: '[ going for a walk / My go-to way / along the river. / to unwind / is ]',
      answer: 'My go-to way to unwind is going for a walk along the river.',
      explanationKo: '[주어부] My go-to way to unwind + [동사] is + [보어] going for a walk along the river.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "제가 가장 즐겨 찾는 스트레스 해소법은 재즈 음악을 듣는 거예요." (My go-to way to unwind / is listening to / jazz music.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'My go-to way to unwind is listening to jazz music.',
        explanationKo: '보어 자리에 본인의 실제 취미 동명사구만 넣으면 내 답변이 완성됩니다!'
      }
    },
    {
      id: 'd5-ex12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'What절 강조 구문 배열',
      questionKo: '주어진 청크를 배열하여 이유를 설명하는 두 번째 문장을 완성하세요.',
      stimulusEn: '[ my head. / What I love most / is that / about it / it clears ]',
      answer: 'What I love most about it is that it clears my head.',
      explanationKo: 'What I love most about it + is that + 주어(it) + 동사(clears my head) 구조입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 카페에서 제가 가장 좋아하는 점은 밤에 조용하다는 거예요." (What I love most / about this cafe / is that / it is quiet at night.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'What I love most about this cafe is that it is quiet at night.',
        explanationKo: '장소 묘사 오픽·일상 대화에서 즉시 쓸 수 있는 만능 문장입니다.'
      }
    },
    {
      id: 'd5-ex13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'take my mind off 영작',
      questionKo: '우리말 뜻에 맞게 주어진 단어를 활용하여 문장을 완성하세요.',
      stimulusEn: '우리말: 요리를 하면 업무 스트레스에 대한 생각을 잊게 돼요.\n(힌트: Cooking / really takes my mind off / work stress.)',
      answer: 'Cooking really takes my mind off work stress.',
      explanationKo: '동명사 주어 Cooking은 단수 취급하므로 동사에 -s(takes)를 꼭 붙입니다!',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "달리기를 하면 복잡한 걱정을 잊게 돼요." (Running / takes my mind off / my worries.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Running takes my mind off my worries.',
        explanationKo: '단수 동사 takes 수일치를 유지합니다.'
      }
    },
    {
      id: 'd5-ex14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시 교정 서술형',
      questionKo: '다음 콩글리시 문장의 오류 2곳(more better, do healing)을 고쳐 자연스러운 문장으로 쓰세요.',
      stimulusEn: '오류 문장: Walking makes me feel more better and helps me do healing.',
      answer: 'Walking makes me feel much better and helps me unwind.',
      acceptableAlt: [
        'Walking makes me feel much better and helps me recharge.',
        'Walking makes me feel way better and helps me unwind.'
      ],
      explanationKo: 'more better → much better, do healing → unwind(또는 recharge)로 교정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: What I like most are walking at night. (수일치 오류 1곳 교정)',
        stimulusEn: '바른 문장 전체를 작성하세요.',
        answer: 'What I like most is walking at night.',
        explanationKo: 'What절 주어는 단수 동사 is로 받아야 합니다.'
      }
    },
    {
      id: 'd5-ex15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '루틴 마무리 문장 영작',
      questionKo: '다음 우리말을 make a habit of를 활용하여 자연스러운 현재완료 문장으로 작성하세요.',
      stimulusEn: '우리말: 요즘은 저녁 식사 후 30분씩 걷는 습관을 들이고 있어요.\n(힌트: Lately, / I have made a habit of / walking 30 minutes / after dinner.)',
      answer: 'Lately, I have made a habit of walking 30 minutes after dinner.',
      acceptableAlt: ["Lately, I've made a habit of walking 30 minutes after dinner."],
      explanationKo: 'Lately(최근 들어)와 현재완료(have made a habit of -ing)의 결합이 아주 자연스럽습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "자기 전에 책을 읽는 습관을 들이려고 노력 중이에요." (I am trying to / make a habit of / reading before bed.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'I am trying to make a habit of reading before bed.',
        explanationKo: 'make a habit of + 동명사 reading 구조를 완성합니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "After a hectic week of work or study, what is your go-to way to unwind and clear your head? Try answering in 2–3 full sentences!",
    openingQuestionKo: '정신없이 바쁜 한 주를 보낸 뒤, 가장 즐겨 찾는 나만의 피로 해소법(힐링 루틴)은 무엇인가요? 단답형 대신 2~3문장으로 길게 답해보세요!',
    followUpQuestionEn:
      'That sounds so refreshing! Could you share a quick example from this past week or weekend when you actually did that?',
    followUpQuestionKo: '정말 상쾌하겠네요! 혹시 지난주나 주말에 실제로 그렇게 쉬셨던 구체적인 에피소드 한 줄을 덧붙여 주실 수 있나요?',
    recommendedChunks: [
      'My go-to way to unwind is ~',
      'What I love most is that ~',
      'clear my head',
      'takes my mind off ~',
      'For instance, ~'
    ],
    modelAnswerEn:
      'My go-to way to unwind is visiting a quiet neighborhood cafe on Sunday mornings. What I love most about it is that reading with a warm latte takes my mind off work and clears my head. For instance, last Sunday I read half a novel there and felt completely recharged!'
  }
};
