import type { DayLessonModule } from '../../types/course.ts';

export const day2Module: DayLessonModule = {
  dayNumber: 2,
  dayBadge: 'DAY 02 · 의도 vs 결과 반전',
  categoryLabel: '일상·업무 근황 토크 핵심 시제',
  title: '일찍 가려 했는데 결국 야근했어요',
  subtitle: '원래 계획(meant to / was going to)과 예상 밖 결말(ended up -ing)을 한 호흡에 대조하는 법',
  heroImage: 'assets/scene_late_office.jpg',
  secondaryImage: 'assets/visual_preposition_card.jpg',
  estimatedSprintMin: 7,
  estimatedLectureMin: 38,
  keyExpression: 'I meant to ~, but I ended up -ing',
  keySentenceByTier: {
    basic: 'I wanted to leave early, but I ended up working late.',
    standard: 'I meant to leave on time, but an urgent issue came up and I ended up staying late.',
    advanced: 'I was originally planning to head out at six, only to get tied up with a client request and end up working past nine.'
  },
  vocabList: [
    {
      id: 'd2-v01',
      word: 'meant to',
      phonetic: '/ment tuː/',
      pos: '핵심 구문',
      meaningKo: '원래 ~하려고 했었다 (못 지킨 의도)',
      meaningEn: 'intended to do something, but failed to do it',
      nuanceTipKo: '사과하거나 아쉬운 변명을 할 때 "I forgot"만 쓰기보다 "I meant to text you earlier(진작 연락하려 했는데)"라고 하면 훨씬 정중합니다.',
      exampleEn: 'Sorry! I meant to reply to your message this morning.',
      exampleKo: '죄송해요! 오늘 아침에 답장드리려고 했었어요.'
    },
    {
      id: 'd2-v02',
      word: 'end up -ing',
      phonetic: '/end ʌp/',
      pos: '구동사 구문',
      meaningKo: '결국 (예상과 달리) ~하게 되다',
      meaningEn: 'finally be in a particular situation or do something unplanned',
      nuanceTipKo: '뒤에 to부정사가 아니라 반드시 동명사(-ing)나 장소·명사구가 온다는 점이 시험과 회화 핵심입니다!',
      exampleEn: 'We missed the last train and ended up taking a taxi.',
      exampleKo: '막차를 놓쳐서 결국 택시를 타게 됐어요.'
    },
    {
      id: 'd2-v03',
      word: 'come up',
      phonetic: '/kʌm ʌp/',
      pos: '구동사',
      meaningKo: '(예기치 않은 일·이슈가) 갑자기 생기다',
      meaningEn: 'happen unexpectedly',
      nuanceTipKo: '약속을 못 지키거나 일정이 꼬였을 때 "Something urgent came up(급한 일이 생겼어요)"은 만능 구원투수 문장입니다.',
      exampleEn: 'An unexpected bug came up right before launch.',
      exampleKo: '출시 직전에 예상치 못한 버그가 불거졌어요.'
    },
    {
      id: 'd2-v04',
      word: 'work late',
      phonetic: '/wɜːrk leɪt/',
      pos: '연어(Collocation)',
      meaningKo: '야근하다, 늦게까지 일하다',
      meaningEn: 'stay at work beyond regular hours',
      nuanceTipKo: '한국어 "야근"을 night work(야간 교대근무)로 직역하면 오해가 생깁니다! 일반 직장인의 야근은 work late 또는 stay late at work입니다.',
      exampleEn: 'I had to work late three days in a row.',
      exampleKo: '사흘 연속으로 야근해야 했어요.'
    },
    {
      id: 'd2-v05',
      word: 'be swamped with',
      phonetic: '/biː swɑːmpt wɪð/',
      pos: '관용구',
      meaningKo: '(업무 등에) 파묻혀 정신없이 바쁘다',
      meaningEn: 'be overwhelmed with too much work',
      nuanceTipKo: '"I am very busy"만 반복하지 말고 "I\'ve been swamped with work"를 쓰면 생생한 실무 영어가 됩니다.',
      exampleEn: "I've been swamped with quarter-end reports all week.",
      exampleKo: '일주일 내내 분기 마감 보고서에 파묻혀 지냈어요.'
    },
    {
      id: 'd2-v06',
      word: 'be tied up with',
      phonetic: '/biː taɪd ʌp wɪð/',
      pos: '관용구',
      meaningKo: '~에 발이 묶여 있다 (다른 일을 못 하는 상태)',
      meaningEn: 'be occupied with something so you cannot do anything else',
      nuanceTipKo: '회의나 급한 건 때문에 전화를 못 받았을 때 정중하게 이유를 밝히기 아주 좋습니다.',
      exampleEn: 'Sorry I missed your call—I was tied up in a client meeting.',
      exampleKo: '전화 못 받아서 죄송해요. 클라이언트 미팅에 묶여 있었어요.'
    },
    {
      id: 'd2-v07',
      word: 'on time',
      phonetic: '/ɑːn taɪm/',
      pos: '전치사구',
      meaningKo: '정각에, 제시간에 (정시 퇴근할 때도 사용)',
      meaningEn: 'at the scheduled or expected time',
      nuanceTipKo: '"칼퇴하다"는 leave work right on time이라고 표현하면 정확합니다.',
      exampleEn: 'Hopefully, everyone can leave on time this Friday.',
      exampleKo: '이번 금요일엔 다들 정시에 퇴근할 수 있으면 좋겠네요.'
    },
    {
      id: 'd2-v08',
      word: 'in time',
      phonetic: '/ɪn taɪm/',
      pos: '전치사구',
      meaningKo: '늦지 않게, 제때에 (마감·기차 출발 전 여유 있게)',
      meaningEn: 'early enough before a deadline or event',
      nuanceTipKo: 'on time은 정각 딱 맞춰, in time은 늦지 않게 아슬아슬/충분히 맞췄다는 뜻입니다.',
      exampleEn: 'We got to the gate just in time for boarding.',
      exampleKo: '탑승 시간에 딱 늦지 않게 게이트에 도착했어요.'
    },
    {
      id: 'd2-v09',
      word: 'was going to',
      phonetic: '/wəz ˈɡoʊɪŋ tuː/',
      pos: '조동사 구문',
      meaningKo: '~하려고 했었는데 (계획 변경 암시)',
      meaningEn: 'planned to do something in the past',
      nuanceTipKo: '과거진행 미래(was/were going to + 동사원형)는 회화에서 "원래 그러려고 했는데 못 했다"는 복선을 깔아줍니다.',
      exampleEn: 'I was going to cook at home, but I ordered delivery instead.',
      exampleKo: '집에서 요리해 먹으려고 했는데 대신 배달을 시켰어요.'
    },
    {
      id: 'd2-v10',
      word: 'at the last minute',
      phonetic: '/æt ðə læst ˈmɪnɪt/',
      pos: '전치사구',
      meaningKo: '막판에, 마지막 순간에',
      meaningEn: 'just before it is too late or right before an event',
      nuanceTipKo: '일정 취소나 수정 요청이 직전에 들어왔을 때 필수 부사구입니다.',
      exampleEn: 'The client changed the design specs at the last minute.',
      exampleKo: '클라이언트가 막판에 디자인 사양을 바꿨어요.'
    },
    {
      id: 'd2-v11',
      word: 'pull an all-nighter',
      phonetic: '/pʊl ən ˈɔːlˌnaɪtər/',
      pos: '관용구',
      meaningKo: '(공부·업무로) 밤을 꼬박 새우다',
      meaningEn: 'stay awake all night working or studying',
      nuanceTipKo: '대학생 시험 기간이나 직장인 마감 철야를 말할 때 가장 자연스러운 관용 표현입니다.',
      exampleEn: 'I’m too old to pull an all-nighter before presentations.',
      exampleKo: '이제 발표 전에 밤을 꼬박 새우는 건 체력적으로 무리네요.'
    },
    {
      id: 'd2-v12',
      word: 'lose track of time',
      phonetic: '/luːz træk əv taɪm/',
      pos: '관용구',
      meaningKo: '시간 가는 줄 모르다',
      meaningEn: 'become unaware of what time it is because you are absorbed',
      nuanceTipKo: '집중해서 일하거나 수다를 떨다가 시계를 보니 훌쩍 늦었을 때 씁니다.',
      exampleEn: 'We started chatting and completely lost track of time.',
      exampleKo: '수다를 떨다 보니 시간 가는 줄 완전히 몰랐어요.'
    },
    {
      id: 'd2-v13',
      word: 'burn the midnight oil',
      phonetic: '/bɜːrn ðə ˈmɪdnaɪt ɔɪl/',
      pos: '관용구',
      meaningKo: '밤늦게까지 열심히 일하다/공부하다',
      meaningEn: 'work or study late into the night',
      nuanceTipKo: '야근 중인 동료를 격려하거나 묘사할 때 재치 있게 쓸 수 있는 표현입니다.',
      exampleEn: 'Looks like the engineering team is burning the midnight oil again.',
      exampleKo: '개발팀이 오늘도 밤늦게까지 불태우고 있나 보네요.'
    },
    {
      id: 'd2-v14',
      word: 'make up for',
      phonetic: '/meɪk ʌp fɔːr/',
      pos: '구동사',
      meaningKo: '(놓친 시간·실수를) 만회하다, 보상하다',
      meaningEn: 'compensate for something lost or missed',
      nuanceTipKo: '야근이나 약속 취소 후 "주말에 푹 쉬며 보충해야지 / 다음번엔 내가 밥 살게" 할 때 유용합니다.',
      exampleEn: 'Let me buy you dinner next week to make up for canceling.',
      exampleKo: '약속 취소한 거 만회할 겸 다음 주에 제가 저녁 살게요.'
    },
    {
      id: 'd2-v15',
      word: 'a blessing in disguise',
      phonetic: '/ə ˈblesɪŋ ɪn dɪsˈɡaɪz/',
      pos: '관용구',
      meaningKo: '전화위복 (처음엔 나빠 보였지만 결과적으로 다행인 일)',
      meaningEn: 'something that seems bad at first but turns out good',
      nuanceTipKo: '예상 밖의 결과(end up)가 오히려 좋은 쪽으로 풀렸을 때 스토리를 멋지게 마무리해 줍니다.',
      exampleEn: 'Missing that flight turned out to be a blessing in disguise.',
      exampleKo: '그 비행기를 놓친 게 결과적으로 전화위복이 되었어요.'
    }
  ],
  dialogue: [
    {
      id: 'd2-t1',
      speaker: 'Marcus',
      roleLabel: '동료 디자이너',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_late_office.jpg',
      cameraMotion: 'zoom-in',
      english: 'Chloe, are you still at your desk? I thought you were going to hit the gym at six!',
      slashBroken: 'Chloe, / are you still at your desk? / I thought / you were going to hit the gym at six!',
      korean: '클로이, 아직도 자리에 있어? 6시에 헬스장 간다고 하지 않았어?',
      keyHighlight: 'were going to hit the gym',
      noteKo: 'hit the gym은 go to the gym보다 경쾌한 일상 회화 표현이며, were going to로 원래 계획을 짚어줍니다.'
    },
    {
      id: 'd2-t2',
      speaker: 'Chloe',
      roleLabel: '프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_late_office.jpg',
      cameraMotion: 'pan-right',
      english: 'Tell me about it! I meant to leave right on time, but an urgent payment bug came up.',
      slashBroken: 'Tell me about it! / I meant to leave right on time, / but an urgent payment bug / came up.',
      korean: '내 말이! 딱 정시에 퇴근하려고 했는데, 급한 결제 오류 건이 갑자기 터졌지 뭐야.',
      keyHighlight: 'meant to leave ~ came up',
      noteKo: '"Tell me about it!"은 "내 말이 그 말이야!(완전 공감)"라는 감탄사입니다.'
    },
    {
      id: 'd2-t3',
      speaker: 'Marcus',
      roleLabel: '동료 디자이너',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_late_office.jpg',
      cameraMotion: 'pan-left',
      english: 'Oh no, at the last minute? Did you manage to figure out what caused it?',
      slashBroken: 'Oh no, / at the last minute? / Did you manage to figure out / what caused it?',
      korean: '저런, 퇴근 직전 막판에? 원인이 뭔지는 겨우 알아냈어?',
      keyHighlight: 'at the last minute',
      noteKo: 'manage to + 동사원형은 "쉽지 않았지만 가까스로 해내다"라는 뉘앙스를 더해줍니다.'
    },
    {
      id: 'd2-t4',
      speaker: 'Chloe',
      roleLabel: '프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_late_office.jpg',
      cameraMotion: 'zoom-in',
      english: 'Thankfully, yes. Still, I ended up working two extra hours and missed my class.',
      slashBroken: 'Thankfully, yes. / Still, / I ended up working two extra hours / and missed my class.',
      korean: '다행히 해결은 했어. 그래도 결국 두 시간이나 추가 야근을 하게 돼서 운동 수업은 놓쳤어.',
      keyHighlight: 'ended up working',
      noteKo: 'end up 뒤에는 반드시 동명사(-ing)를 연결하여 예상치 못한 최종 결말을 보여줍니다.'
    },
    {
      id: 'd2-t5',
      speaker: 'Marcus',
      roleLabel: '동료 디자이너',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_cafe_detour.jpg',
      cameraMotion: 'pan-right',
      english: "I've been swamped all day too. Actually, I was going to cook, but I'm way too tired.",
      slashBroken: "I've been swamped all day too. / Actually, I was going to cook, / but I'm way too tired.",
      korean: '나도 오늘 하루 종일 일에 파묻혀 있었어. 사실 집에서 요리하려 했는데 너무 지쳤네.',
      keyHighlight: "I've been swamped",
      noteKo: '하루 종일 지금까지 바쁜 상태가 이어졌으므로 현재완료(have been swamped)가 자연스럽습니다.'
    },
    {
      id: 'd2-t6',
      speaker: 'Chloe',
      roleLabel: '프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_late_office.jpg',
      cameraMotion: 'zoom-in',
      english: "Same here! Let's pack up now and grab some warm pho downstairs before heading home.",
      slashBroken: "Same here! / Let's pack up now / and grab some warm pho downstairs / before heading home.",
      korean: '나도! 이제 짐 챙겨서 퇴근하기 전에 아래층에서 따뜻한 쌀국수나 한 그릇 먹고 가자.',
      keyHighlight: "Let's pack up",
      noteKo: 'pack up은 노트북과 가방을 챙겨 자리를 정리할 때 쓰는 실전 구동사입니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 의도와 결과의 황금 공식: [I meant to V] + [but ended up V-ing]',
      coreFormula: 'I meant to + 동사원형 (원래 의도) , but I ended up + 동명사(-ing) (결말)',
      wrongKonglish: 'I intended leave early, but finally I worked night work.',
      rightNative: 'I meant to leave early, but I ended up working late.',
      explanationKo:
        '일상 대화의 절반은 "원래 A하려 했는데 어쩌다 보니 B하게 됐다"는 스토리텔링입니다. 의도를 말할 땐 무거운 intended 대신 meant to 또는 was going to를 쓰고, 결말에는 부사 finally 대신 동사구 ended up -ing를 쓰면 원어민 특유의 리듬감 있는 반전 문장이 완성됩니다.',
      registerSpectrum: {
        casual: 'I was gonna sleep early, but I ended up binge-watching Netflix.',
        standard: 'I meant to leave on time, but I ended up working late.',
        formal: 'We originally planned to launch in May, but ended up postponing it to June.'
      }
    },
    {
      title: '원리 02 · 한국인이 가장 많이 틀리는 야근·업무량 콩글리시 교정',
      coreFormula: 'work late / stay late (야근하다) & a lot of work / swamped with work (많은 업무)',
      wrongKonglish: 'Because of many works, I did night work yesterday.',
      rightNative: 'I was swamped with work, so I had to work late yesterday.',
      explanationKo:
        '① "업무"를 뜻하는 work는 셀 수 없는 불가산 명사이므로 many works라고 쓰면 큰 실수입니다(works는 공장/예술작품). ② night work는 밤낮이 바뀐 야간 교대근무를 뜻하므로, 직장인이 퇴근 시간을 넘겨 일하는 야근은 반드시 work late 또는 work overtime으로 표현하세요.',
      registerSpectrum: {
        casual: 'I had a ton of work, so I stayed late yesterday.',
        standard: 'I had a lot of work, so I ended up working late.',
        formal: 'Due to a heavy workload, I stayed past regular hours to finalize the report.'
      }
    },
    {
      title: '원리 03 · 핑계도 세련되게: 사람이 아닌 "상황(Something)"을 주어로 세우기',
      coreFormula: 'Something urgent came up. / An issue came up at the last minute.',
      wrongKonglish: 'Suddenly urgent thing happened to me, so I could not go.',
      rightNative: 'Something urgent came up at the last minute, so I couldn’t make it.',
      explanationKo:
        '갑작스러운 사정을 설명할 때 happen보다 훨씬 자연스러운 구동사가 come up(불쑥 생기다/수면 위로 올라오다)입니다. 또한 형용사는 -thing 뒤에서 수식하므로 urgent something이 아니라 something urgent 어순이 되어야 합니다.',
      registerSpectrum: {
        casual: 'Sorry, something came up! Rain check?',
        standard: 'An urgent issue came up right before I left.',
        formal: 'Apologies, an unexpected client matter just came up on my end.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd2-s01',
      drillType: 'chunk-build',
      promptKo: '일찍 퇴근하려 했는데 결국 야근하게 됐어요.',
      promptEnHint: 'meant to + 동사원형, ended up + -ing 대조 구조를 조립하세요.',
      targetEn: 'I meant to leave early, but I ended up working late.',
      chunks: ['I meant to', 'leave early,', 'but I ended up', 'working late.'],
      explanationKo: '의도(meant to leave)와 예상 밖 결과(ended up working)가 완벽한 대구를 이룹니다.'
    },
    {
      id: 'd2-s02',
      drillType: 'active-blank',
      promptKo: '막차를 놓쳐서 결국 택시를 타게 됐어요.',
      promptEnHint: 'ended up 뒤에 올 take의 알맞은 형태를 쓰세요.',
      targetEn: 'We missed the last train and ended up taking a taxi.',
      blankData: {
        before: 'We missed the last train and ended up',
        answer: 'taking',
        after: 'a taxi.',
        firstLetterHint: 't_____ (-ing 형태)'
      },
      explanationKo: 'end up 뒤에는 동명사(-ing)가 옵니다. e로 끝나는 동사 take는 e를 빼고 taking!'
    },
    {
      id: 'd2-s03',
      drillType: 'konglish-fix',
      promptKo: '"어제 일이 너무 많아서 야근했어요." — 바른 문장은?',
      promptEnHint: '불가산 명사 work와 야근 표현을 점검하세요.',
      targetEn: 'I had a lot of work yesterday, so I worked late.',
      wrongKonglishOption: 'I had many works yesterday, so I did night work.',
      explanationKo: 'work는 불가산 명사(a lot of work)이며, 야근은 work late입니다.'
    },
    {
      id: 'd2-s04',
      drillType: 'chunk-build',
      promptKo: '오늘 아침에 답장드리려고 했었는데 깜빡했어요.',
      promptEnHint: '아쉬운 의도 I meant to ~ 로 시작하세요.',
      targetEn: 'I meant to reply this morning, but it slipped my mind.',
      chunks: ['I meant to', 'reply this morning,', 'but it', 'slipped my mind.'],
      explanationKo: 'it slipped my mind는 I forgot보다 훨씬 부드럽고 세련된 표현입니다.'
    },
    {
      id: 'd2-s05',
      drillType: 'active-blank',
      promptKo: '퇴근 직전에 급한 일이 갑자기 생겼어요.',
      promptEnHint: '이슈가 불거지다 구동사(과거형 2단어)를 넣으세요.',
      targetEn: 'Something urgent came up right before I left.',
      blankData: {
        before: 'Something urgent',
        answer: 'came up',
        after: 'right before I left.',
        firstLetterHint: 'c___ u_'
      },
      explanationKo: '예상치 못한 일이 생겼을 땐 come up의 과거형 came up을 씁니다.'
    },
    {
      id: 'd2-s06',
      drillType: 'konglish-fix',
      promptKo: '"이번 주 내내 업무에 파묻혀 정신없이 바빴어요."',
      promptEnHint: '늪에 빠진 듯 바쁘다는 관용구를 고르세요.',
      targetEn: "I've been swamped with work all week.",
      wrongKonglishOption: "I've been drowned with many works all week.",
      explanationKo: 'be swamped with work가 실무에서 가장 널리 쓰이는 관용 표현입니다.'
    },
    {
      id: 'd2-s07',
      drillType: 'chunk-build',
      promptKo: '집에서 요리해 먹으려 했는데 대신 배달 음식을 시켰어요.',
      promptEnHint: '과거 계획 I was going to ~ 로 시작하세요.',
      targetEn: 'I was going to cook at home, but I ordered delivery instead.',
      chunks: ['I was going to', 'cook at home,', 'but I ordered', 'delivery instead.'],
      explanationKo: 'was going to + 동사원형은 실행하지 못한 원래 계획을 자연스럽게 표현합니다.'
    },
    {
      id: 'd2-s08',
      drillType: 'active-blank',
      promptKo: '전화 못 받아서 죄송해요, 클라이언트 미팅에 묶여 있었어요.',
      promptEnHint: '발이 묶여 바쁘다 be ____ up in 구문을 완성하세요.',
      targetEn: 'Sorry I missed your call—I was tied up in a client meeting.',
      blankData: {
        before: 'Sorry I missed your call—I was',
        answer: 'tied',
        after: 'up in a client meeting.',
        firstLetterHint: 't___ (4글자)'
      },
      explanationKo: 'be tied up in/with ~는 다른 용무를 볼 수 없을 만큼 붙잡혀 있을 때 씁니다.'
    },
    {
      id: 'd2-s09',
      drillType: 'konglish-fix',
      promptKo: '"수다를 떨다 보니 시간 가는 줄 완전히 몰랐어요."',
      promptEnHint: '시간의 흐름을 놓치다는 관용구를 확인하세요.',
      targetEn: 'We started chatting and completely lost track of time.',
      wrongKonglishOption: 'We started chatting and completely forgot time going.',
      explanationKo: 'lose track of time(과거형 lost track of time)이 정확한 원어민 숙어입니다.'
    },
    {
      id: 'd2-s10',
      drillType: 'chunk-build',
      promptKo: '클라이언트가 막판에 디자인 요청사항을 바꿨어요.',
      promptEnHint: '막판에 = at the last minute를 문미에 배치하세요.',
      targetEn: 'The client changed the design request at the last minute.',
      chunks: ['The client', 'changed', 'the design request', 'at the last minute.'],
      explanationKo: 'at the last minute는 일정·기획 변경 상황에서 매우 유용한 부사구입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd2-ex01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: 'end up + 동명사',
      questionKo: '괄호 안 동사 stay를 어법에 맞게 변형하여 "결국 밤 10시까지 회사에 남게 됐다"는 문장을 완성하세요.',
      stimulusEn: 'I meant to leave at six, but I ended up __________ (stay) until 10 PM.',
      answer: 'staying',
      explanationKo: 'end up 뒤에는 반드시 동명사(-ing)가 와야 하므로 staying이 정답입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 괄호 안 동사 pay를 알맞게 변형하여 빈칸을 채우세요.',
        stimulusEn: 'We lost the receipt and ended up __________ (pay) full price.',
        answer: 'paying',
        explanationKo: 'end up + 동명사 규칙에 따라 paying을 씁니다.'
      }
    },
    {
      id: 'd2-ex02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '의도 표현 meant to',
      questionKo: '빈칸에 알맞은 과거형 동사(1단어)를 넣어 "어제 전화드리려고 했었는데(못 드렸다)"는 문장을 완성하세요.',
      stimulusEn: 'I __________ to call you yesterday, but my phone battery died.',
      answer: 'meant',
      explanationKo: 'mean의 과거형 meant를 써서 지키지 못한 본래 의도(meant to + 동사원형)를 나타냅니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 파일도 같이 첨부하려고 했었는데 깜빡했네요" 빈칸(1단어)을 채우세요.',
        stimulusEn: 'Oops, I __________ to attach the spreadsheet as well.',
        answer: 'meant',
        explanationKo: '실수 후 정중히 의도를 밝힐 때 I meant to ~ 가 가장 자연스럽습니다.'
      }
    },
    {
      id: 'd2-ex03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '돌발 이슈 come up',
      questionKo: '빈칸에 알맞은 구동사(과거형 2단어)를 넣어 "가족에게 급한 일이 생겼다"는 문장을 완성하세요.',
      stimulusEn: 'I had to cancel my trip because a family emergency __________ __________.',
      answer: 'came up',
      explanationKo: '예기치 않은 사건이나 급한 용무가 발생했을 때 come up(과거형 came up)을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "혹시 진행 중 문제가 생기면 바로 알려주세요" (현재시제 2단어)',
        stimulusEn: 'Please let me know right away if any issue __________ __________.',
        answer: 'comes up',
        explanationKo: '단수 주어 any issue에 맞춰 3인칭 단수형 comes up을 씁니다.'
      }
    },
    {
      id: 'd2-ex04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '업무 과부하 swamped',
      questionKo: '빈칸에 알맞은 과거분사형 형용사(1단어)를 넣어 "신규 프로젝트로 정신없이 바쁘다"는 문장을 완성하세요.',
      stimulusEn: "Sorry for the late response—I've been __________ with the new product launch.",
      answer: 'swamped',
      acceptableAlt: ['tied'],
      explanationKo: 'be swamped with ~는 업무에 파묻혀 눈코 뜰 새 없이 바쁜 상태를 나타냅니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "인터뷰 일정에 발이 묶여 있었다"가 되도록 빈칸(2단어)을 채우세요.',
        stimulusEn: 'I was __________ __________ in interviews all afternoon.',
        answer: 'tied up',
        explanationKo: 'be tied up in ~ 구문입니다.'
      }
    },
    {
      id: 'd2-ex05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '시간 감각 관용구',
      questionKo: '빈칸에 알맞은 명사(1단어)를 넣어 "코딩하다가 시간 가는 줄 몰랐다"는 문장을 완성하세요.',
      stimulusEn: 'I got so absorbed in coding that I completely lost __________ of time.',
      answer: 'track',
      explanationKo: 'lose track of time은 몰입하느라 시간 흐름을 놓쳤다는 필수 숙어입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "발표 준비로 밤을 꼬박 새웠다" 빈칸(1단어)을 채우세요.',
        stimulusEn: 'I had to __________ an all-nighter to finish the slides.',
        answer: 'pull',
        explanationKo: '밤을 새우다는 pull an all-nighter 연어를 씁니다.'
      }
    },
    {
      id: 'd2-ex06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '-thing 수식 어순',
      questionKo: '다음 중 어법상 **올바른** 문장을 고르세요.',
      stimulusEn: '상황: 급한 용무가 생겨 모임에 못 가게 되었음을 알리는 메시지',
      options: [
        'Sorry, urgent something came up!',
        'Sorry, something urgent came up!',
        'Sorry, something urgently came up!',
        'Sorry, an urgent came up!'
      ],
      answer: 'Sorry, something urgent came up!',
      explanationKo: 'something, anything, nothing처럼 -thing으로 끝나는 대명사는 형용사가 반드시 뒤에서 수식합니다(something urgent).',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "특별한 무언가"를 뜻하도록 (special / something)을 바른 순서(2단어)로 쓰세요.',
        stimulusEn: 'We prepared __________ __________ for your birthday.',
        answer: 'something special',
        explanationKo: '대명사 something 뒤에 형용사 special이 옵니다.'
      }
    },
    {
      id: 'd2-ex07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'on time vs in time 구별',
      questionKo: '빈칸에 들어갈 전치사가 바르게 짝지어진 것을 고르세요.',
      stimulusEn: '(A) Trains in Seoul almost always arrive right ____ time.\n(B) Run! We need to get there ____ time to catch the opening scene.',
      options: [
        '(A) on — (B) in',
        '(A) in — (B) on',
        '(A) at — (B) on',
        '(A) on — (B) at'
      ],
      answer: '(A) on — (B) in',
      explanationKo: '시간표대로 정각에 도착하는 것은 on time, 어떤 일이 시작되기 전에 늦지 않게 도착하는 것은 in time (to V / for N)입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "정시에(칼같이 제시간에) 퇴근하다"가 되도록 전치사(1단어)를 넣으세요.',
        stimulusEn: 'I rarely get to leave work right __________ time on Mondays.',
        answer: 'on',
        explanationKo: '정시 퇴근은 leave work on time입니다.'
      }
    },
    {
      id: 'd2-ex08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '불가산 명사 work & 야근 표현',
      questionKo: '직장인이 "요즘 일이 많아서 자주 야근해요"라고 말할 때 가장 자연스러운 문장은?',
      stimulusEn: '콩글리시 함정(works, night work)을 피해서 선택하세요.',
      options: [
        'I have many works these days, so I often do night work.',
        'I have a heavy workload these days, so I often end up working late.',
        'I have much works lately, so I work at night shift.',
        'My works are too many, so I stay night.'
      ],
      answer: 'I have a heavy workload these days, so I often end up working late.',
      explanationKo: 'a heavy workload(또는 a lot of work)와 end up working late의 조합이 가장 격식 있고 자연스럽습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "사흘 연속 야근했다"에서 빈칸(2단어)을 채우세요.',
        stimulusEn: 'I had to __________ __________ three days in a row.',
        answer: 'work late',
        explanationKo: '야근하다는 work late 또는 stay late로 표현합니다.'
      }
    },
    {
      id: 'd2-ex09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'end up 문법 결합',
      questionKo: '다음 중 밑줄 친 end up 뒤의 구조가 문법적으로 **어색한** 문장은?',
      stimulusEn: 'end up 뒤에 올 수 있는 형태(동명사, 전치사구, 형용사)를 점검하세요.',
      options: [
        'We ended up ordering pizza at midnight.',
        'He ended up to cancel the reservation.',
        'How did we end up in the wrong terminal?',
        'Everything ended up fine in the end.'
      ],
      answer: 'He ended up to cancel the reservation.',
      explanationKo: 'end up 뒤에는 동명사(canceling), 전치사구(in ~), 형용사(fine)는 올 수 있지만 to부정사(to cancel)는 올 수 없습니다!',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 위 틀린 문장의 "to cancel"을 어법에 맞는 1단어로 고치세요.',
        stimulusEn: 'He ended up __________ the reservation.',
        answer: 'canceling',
        explanationKo: '동명사 canceling으로 고쳐야 합니다.'
      }
    },
    {
      id: 'd2-ex10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '회화 맞장구 표현',
      questionKo: '동료가 "이번 주 회의가 진짜 끝도 없이 많네!"라고 불평할 때 "내 말이 그 말이야!(완전 공감해)"라는 뜻의 대답은?',
      stimulusEn: 'Colleague: "We have way too many meetings this week!" → You: "____________________"',
      options: [
        'Tell me about it!',
        'Please explain it to me!',
        'Say it again to me!',
        'Let me tell you first!'
      ],
      answer: 'Tell me about it!',
      explanationKo: '"Tell me about it!"은 직역("그것에 대해 말해줘")이 아니라 "안 그래도 내가 겪어봐서 너무 잘 알지, 내 말이!"라는 강한 공감 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 상대방 말에 "저도 마찬가지예요!"라고 짧게 2단어로 맞장구칠 때 쓰는 표현은?',
        stimulusEn: 'A: "I am way too tired to cook tonight." → B: "__________ __________!"',
        answer: 'Same here',
        explanationKo: '"Same here!"는 Me too보다 어른스럽고 자연스러운 공감 표현입니다.'
      }
    },
    {
      id: 'd2-ex11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '의도 vs 결과 통문장 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 완전한 영어 문장을 작성하세요.',
      stimulusEn: '[ working late. / I meant to / on time, / but I ended up / leave ]',
      answer: 'I meant to leave on time, but I ended up working late.',
      explanationKo: '[원래 의도] I meant to leave on time, + [반전 결과] but I ended up working late.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "커피만 한 잔 마시려 했는데 결국 두 시간 동안 수다를 떨었어요." (I meant to / just grab a coffee, / but we ended up / chatting for two hours.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'I meant to just grab a coffee, but we ended up chatting for two hours.',
        explanationKo: 'ended up + 동명사 chatting 구조를 정확히 적용합니다.'
      }
    },
    {
      id: 'd2-ex12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'was going to + instead 결합',
      questionKo: '주어진 청크를 배열하여 "원래 헬스장에 가려 했는데 대신 집에 일찍 갔다"는 문장을 완성하세요.',
      stimulusEn: '[ hit the gym, / instead. / I was going to / went straight home / but I ]',
      answer: 'I was going to hit the gym, but I went straight home instead.',
      explanationKo: '대안 행동을 선택한 뒤 문장 맨 끝에 부사 instead를 붙이면 대비가 아주 선명해집니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "지하철을 타려 했는데 대신 버스를 탔어요." (I was going to / take the subway, / but I took the bus / instead.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'I was going to take the subway, but I took the bus instead.',
        explanationKo: 'was going to V, but + 과거동사 + instead 패턴입니다.'
      }
    },
    {
      id: 'd2-ex13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '비즈니스 부재 사과문',
      questionKo: '우리말 뜻에 맞게 주어진 표현을 활용하여 정중한 비즈니스 사과 문장을 완성하세요.',
      stimulusEn: '우리말: 전화 못 받아서 죄송해요. 클라이언트 미팅에 묶여 있었어요.\n(힌트: Sorry I missed your call, / I was tied up in / a client meeting.)',
      answer: 'Sorry I missed your call, I was tied up in a client meeting.',
      acceptableAlt: [
        'Sorry I missed your call—I was tied up in a client meeting.',
        'Sorry I missed your call. I was tied up in a client meeting.'
      ],
      explanationKo: 'missed your call과 was tied up in ~ 의 결합은 실무 전화·슬랙 메시지의 정석입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "답장이 늦어 죄송해요, 오늘 하루 종일 업무에 파묻혀 있었어요." (Sorry for the late reply, / I was swamped with work / all day.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Sorry for the late reply, I was swamped with work all day.',
        explanationKo: 'Sorry for the late reply + I was swamped with work all day.'
      }
    },
    {
      id: 'd2-ex14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시 교정 서술형',
      questionKo: '다음 콩글리시 문장의 오류 2곳을 바르게 고쳐 완전한 문장으로 다시 쓰세요.',
      stimulusEn: '오류 문장: Urgent something came up, so I ended up to stay late.',
      answer: 'Something urgent came up, so I ended up staying late.',
      explanationKo: '① Urgent something → Something urgent (후치 수식), ② ended up to stay → ended up staying (동명사 목적어).',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 다음 오류 문장을 바르게 고쳐 쓰세요: I had many works, so I ended up to miss dinner.',
        stimulusEn: '오류 2곳(many works, to miss)을 교정하세요.',
        answer: 'I had a lot of work, so I ended up missing dinner.',
        explanationKo: '불가산 명사 a lot of work와 동명사 missing으로 고칩니다.'
      }
    },
    {
      id: 'd2-ex15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '만회 제안 영작',
      questionKo: '다음 우리말을 make up for를 활용하여 영작하세요.',
      stimulusEn: '우리말: 약속 취소한 것을 만회하기 위해 다음 주에 제가 저녁 살게요.\n(힌트: Let me buy you dinner / next week / to make up for / canceling.)',
      answer: 'Let me buy you dinner next week to make up for canceling.',
      explanationKo: '전치사 for 뒤에는 동명사 canceling이 오며, Let me buy you ~ 는 기분 좋게 대접하겠다는 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "늦은 것을 만회하기 위해 제가 커피 살게요." (Let me grab you a coffee / to make up for / being late.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Let me grab you a coffee to make up for being late.',
        explanationKo: '전치사 for 뒤에 동명사구 being late를 연결합니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      'Think about your past week—was there a day when you meant to finish early or relax, but something came up and changed your plans?',
    openingQuestionKo: '지난 한 주를 떠올려 볼까요? 일찍 끝내거나 쉬려고 했는데, 갑자기 일이 생겨 계획이 바뀐 날이 있었나요?',
    followUpQuestionEn:
      'How did you end up spending that evening instead, and how are you going to make up for that lost rest this weekend?',
    followUpQuestionKo: '결국 그날 저녁을 어떻게 보내게 되셨나요? 그리고 이번 주말엔 놓친 휴식을 어떻게 보충하실 계획인가요?',
    recommendedChunks: ['I meant to ~', 'something came up', 'ended up -ing', 'swamped with work', 'make up for ~'],
    modelAnswerEn:
      'On Wednesday, I meant to leave on time and watch a movie, but an urgent report came up and I ended up working until nine. I plan to sleep in this Saturday to make up for it!'
  }
};
