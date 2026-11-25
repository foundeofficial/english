import type { DayLessonModule } from '../../types/course.ts';

export const day3Module: DayLessonModule = {
  dayNumber: 3,
  dayBadge: 'DAY 03 · 완곡한 거절 & 일정 조율',
  categoryLabel: '비즈니스 & 실전 커뮤니케이션 매너',
  title: '내일은 일정이 좀 애매하네요',
  subtitle: '직설적인 No 없이 상대의 기분을 배려하며 프로답게 시간을 미루고 역제안하는 기술',
  heroImage: 'assets/office_sitcom_scene.jpg',
  secondaryImage: 'assets/scene_video_call.jpg',
  estimatedSprintMin: 7,
  estimatedLectureMin: 40,
  keyExpression: 'Tomorrow looks a bit tight — would ~ work instead?',
  keySentenceByTier: {
    basic: 'Tomorrow is a bit tight for me. Can we do Thursday instead?',
    standard: 'Tomorrow looks a bit tight on my end. Would Thursday afternoon work instead?',
    advanced: 'My calendar is pretty packed tomorrow—could we possibly push our sync back to Thursday at 2 PM instead?'
  },
  vocabList: [
    {
      id: 'd3-v01',
      word: 'tight',
      phonetic: '/taɪt/',
      pos: '형용사',
      meaningKo: '(일정·예산이) 빠듯한, 여유가 없는 ("애매한")',
      meaningEn: 'having very little free time or room to spare',
      nuanceTipKo: '한국어 "내일 일정이 좀 애매해요"를 ambiguous(뜻이 모호한)로 직역하면 콩글리시입니다! 일정이 빠듯할 땐 tight나 tricky가 정답입니다.',
      exampleEn: 'This week is a bit tight, so let’s aim for next Monday.',
      exampleKo: '이번 주는 일정이 좀 빠듯해서 다음 주 월요일로 잡아보죠.'
    },
    {
      id: 'd3-v02',
      word: 'on my end',
      phonetic: '/ɑːn maɪ end/',
      pos: '전치사구',
      meaningKo: '제 쪽(상황/입장)에서는',
      meaningEn: 'from my side or perspective in a shared arrangement',
      nuanceTipKo: '거절이나 상황 설명 끝에 on my end를 붙이면 단정적인 느낌을 덜어내고 훨씬 프로페셔널해집니다.',
      exampleEn: 'Everything looks good on my end—ready whenever you are.',
      exampleKo: '제 쪽에서는 다 문제없습니다. 준비되실 때 시작하시죠.'
    },
    {
      id: 'd3-v03',
      word: 'push ~ back',
      phonetic: '/pʊʃ bæk/',
      pos: '구동사',
      meaningKo: '(일정·회의 시간을) 뒤로 미루다, 늦추다',
      meaningEn: 'move a scheduled time to a later time or date',
      nuanceTipKo: 'delay는 열차 연착 같은 부정적 지연 느낌이 강합니다. 상호 합의로 회의를 늦출 때는 push ~ back이나 reschedule을 쓰세요.',
      exampleEn: 'Could we push our call back by 30 minutes?',
      exampleKo: '통화 시간을 30분만 뒤로 미뤄도 될까요?'
    },
    {
      id: 'd3-v04',
      word: 'move ~ up',
      phonetic: '/muːv ʌp/',
      pos: '구동사',
      meaningKo: '(일정을) 앞당기다',
      meaningEn: 'change a scheduled event to an earlier time',
      nuanceTipKo: 'push back(뒤로 미루다)의 반대말! 달력 위쪽(이른 날짜/시간)으로 끌어올린다는 그림으로 이해하세요.',
      exampleEn: 'Can we move the meeting up to Tuesday morning?',
      exampleKo: '회의를 화요일 오전으로 앞당길 수 있을까요?'
    },
    {
      id: 'd3-v05',
      word: 'work for someone',
      phonetic: '/wɜːrk fɔːr/',
      pos: '동사 구문',
      meaningKo: '(시간·장소·조건이 ~에게) 괜찮다, 맞다',
      meaningEn: 'be convenient or acceptable for someone',
      nuanceTipKo: '"Is 3 PM possible?"보다 "Does 3 PM work for you?"가 10배 더 원어민답고 자연스럽습니다.',
      exampleEn: 'Does Thursday at 2 PM work for everyone?',
      exampleKo: '목요일 오후 2시 다들 시간 괜찮으신가요?'
    },
    {
      id: 'd3-v06',
      word: 'have plans',
      phonetic: '/hæv plænz/',
      pos: '연어(Collocation)',
      meaningKo: '(선약·만남) 약속이 있다',
      meaningEn: 'already have an arrangement to meet someone or do something',
      nuanceTipKo: '친구와 약속 있다고 할 때 have a promise(맹세/서약)를 쓰면 절대 안 됩니다! 복수형 have plans를 외워두세요.',
      exampleEn: 'I already have dinner plans with an old friend tonight.',
      exampleKo: '오늘 저녁엔 오랜 친구와 이미 저녁 약속이 있어요.'
    },
    {
      id: 'd3-v07',
      word: 'a prior commitment',
      phonetic: '/ə ˈpraɪər kəˈmɪtmənt/',
      pos: '명사구',
      meaningKo: '선약 (격식 있는 비즈니스 표현)',
      meaningEn: 'an existing engagement or responsibility made earlier',
      nuanceTipKo: '구체적인 사생활을 밝히지 않고도 정중하게 회식이나 미팅 초대를 거절하는 고급 비즈니스 치트키입니다.',
      exampleEn: 'Unfortunately, I have a prior commitment that evening.',
      exampleKo: '아쉽게도 그날 저녁에는 선약이 있습니다.'
    },
    {
      id: 'd3-v08',
      word: 'take a rain check',
      phonetic: '/teɪk ə reɪn tʃek/',
      pos: '관용구',
      meaningKo: '(아쉽지만) 다음을 기약하다, 다음에 꼭 함께하다',
      meaningEn: 'politely decline an invitation now with the hope of accepting later',
      nuanceTipKo: '우천 취소 야구표(rain check)에서 유래한 표현! 식사·커피 제안을 기분 좋게 다음으로 미룰 때 최고입니다.',
      exampleEn: "I'm swamped today—can I take a rain check on lunch?",
      exampleKo: '오늘은 너무 바빠서 그런데 점심은 다음을 기약해도 될까요?'
    },
    {
      id: 'd3-v09',
      word: 'pencil in',
      phonetic: '/ˈpensl ɪn/',
      pos: '구동사',
      meaningKo: '가계약(임시 일정)으로 일단 잡아두다',
      meaningEn: 'arrange something tentatively, knowing it might change',
      nuanceTipKo: '볼펜이 아닌 연필(pencil)로 적는다는 뜻에서 "일단 가볍게 시간 비워두자"는 뉘앙스를 정확히 전달합니다.',
      exampleEn: "Let's pencil in Friday at 11 AM and confirm on Thursday.",
      exampleKo: '일단 금요일 11시로 가일정을 잡아두고 목요일에 확정하죠.'
    },
    {
      id: 'd3-v10',
      word: 'back-to-back',
      phonetic: '/ˌbæk tə ˈbæk/',
      pos: '형용사/부사',
      meaningKo: '쉬는 틈 없이 연달아 이어지는',
      meaningEn: 'happening one right after another without a break',
      nuanceTipKo: '연속 회의가 잡혀 있어 짬이 안 날 때 "I have back-to-back meetings"라고 쓰면 단번에 상황이 설명됩니다.',
      exampleEn: "I'm in back-to-back meetings from 1 to 5 PM.",
      exampleKo: '오후 1시부터 5시까지 연달아 회의가 잡혀 있어요.'
    },
    {
      id: 'd3-v11',
      word: 'reschedule',
      phonetic: '/ˌriːˈskedʒuːl/',
      pos: '동사',
      meaningKo: '일정을 다시 잡다(변경하다)',
      meaningEn: 'change the time of a planned event',
      nuanceTipKo: 'change the time보다 깔끔하며, 전치사 for와 결합해 reschedule ~ for Friday처럼 새 날짜를 제시합니다.',
      exampleEn: 'Would it be okay if we rescheduled our 1-on-1 for Friday?',
      exampleKo: '우리 1:1 미팅을 금요일로 다시 잡아도 괜찮을까요?'
    },
    {
      id: 'd3-v12',
      word: 'make it',
      phonetic: '/meɪk ɪt/',
      pos: '관용구',
      meaningKo: '(모임·약속 시간에 맞춰) 참석하다, 오다',
      meaningEn: 'be able to attend an event or arrive in time',
      nuanceTipKo: '"Can you come?" 대신 "Can you make it?"을, 못 갈 때는 "I can\'t make it"을 쓰면 훨씬 부드럽습니다.',
      exampleEn: "I'm afraid I won't be able to make it to the workshop.",
      exampleKo: '아쉽게도 워크숍에는 참석하기 어려울 것 같습니다.'
    },
    {
      id: 'd3-v13',
      word: 'wide open',
      phonetic: '/waɪd ˈoʊpən/',
      pos: '형용사구',
      meaningKo: '(특정 요일·시간대 일정이) 텅 비어 여유로운',
      meaningEn: 'completely free with no scheduled events',
      nuanceTipKo: '"아무 때나 다 돼요!"라고 말할 때 "My Friday afternoon is wide open"이라고 하면 명확합니다.',
      exampleEn: 'My afternoon is wide open after 2 PM.',
      exampleKo: '오후 2시 이후로는 일정이 완전히 비어 있어요.'
    },
    {
      id: 'd3-v14',
      word: 'squeeze ~ in',
      phonetic: '/skwiːz ɪn/',
      pos: '구동사',
      meaningKo: '(빡빡한 일정 틈새에) 짬을 내어 끼워 넣다',
      meaningEn: 'manage to find a short slot for someone or something',
      nuanceTipKo: '바쁜 와중에도 상대를 배려해 15분 정도 시간을 내줄 때 쓰는 고마운 표현입니다.',
      exampleEn: 'I can squeeze in a quick 15-minute call before noon.',
      exampleKo: '정오 전에 15분 정도 짧게 통화할 짬은 낼 수 있어요.'
    },
    {
      id: 'd3-v15',
      word: 'lock in',
      phonetic: '/lɑːk ɪn/',
      pos: '구동사',
      meaningKo: '(시간·계획·조건을) 최종 확정 짓다',
      meaningEn: 'finalize and commit to a time or plan',
      nuanceTipKo: 'pencil in(가일정)과 대조되는 표현으로, 캘린더 초대를 보내며 최종 확정할 때 자주 씁니다.',
      exampleEn: "Great, let's lock in Thursday at 3 PM—I'll send the invite.",
      exampleKo: '좋습니다, 목요일 오후 3시로 확정하죠. 캘린더 초대장 보낼게요.'
    }
  ],
  dialogue: [
    {
      id: 'd3-t1',
      speaker: 'Marcus',
      roleLabel: '프로덕트 디자이너',
      voicePitch: 0.92,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'zoom-in',
      english: 'Hey Chloe, do you have half an hour tomorrow morning to review the Q3 roadmap?',
      slashBroken: 'Hey Chloe, / do you have half an hour / tomorrow morning / to review the Q3 roadmap?',
      korean: '클로이, 내일 오전에 3분기 로드맵 같이 검토할 시간 30분 정도 괜찮아?',
      keyHighlight: 'half an hour tomorrow morning',
      noteKo: '30 minutes 대신 일상 대화에서는 half an hour도 매우 자주 쓰입니다.'
    },
    {
      id: 'd3-t2',
      speaker: 'Chloe',
      roleLabel: '프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-right',
      english: "Let me check my calendar... Oh, tomorrow morning looks pretty tight on my end.",
      slashBroken: "Let me check my calendar... / Oh, tomorrow morning looks / pretty tight / on my end.",
      korean: '캘린더 좀 확인해 볼게... 아, 내일 오전은 내 쪽 일정이 꽤 빠듯하네(애매하네).',
      keyHighlight: 'looks pretty tight on my end',
      noteKo: '바로 "No, I can\'t"라고 자르지 않고 "looks pretty tight on my end"로 쿠션을 깔아줍니다.'
    },
    {
      id: 'd3-t3',
      speaker: 'Chloe',
      roleLabel: '프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-left',
      english: "I'm in back-to-back interviews until noon. Could we push it back to Thursday instead?",
      slashBroken: "I'm in back-to-back interviews until noon. / Could we push it back / to Thursday instead?",
      korean: '정오까지 면접이 연달아 잡혀 있거든. 대신 목요일로 좀 미뤄도 될까?',
      keyHighlight: 'push it back to Thursday instead',
      noteKo: '[짧은 이유 설명] + [대안 역제안(instead)]은 비즈니스 거절의 완벽한 2단 콤보입니다.'
    },
    {
      id: 'd3-t4',
      speaker: 'Marcus',
      roleLabel: '프로덕트 디자이너',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'zoom-in',
      english: 'No problem at all! My Thursday afternoon is wide open after 2 PM. What time works best for you?',
      slashBroken: 'No problem at all! / My Thursday afternoon is wide open / after 2 PM. / What time works best for you?',
      korean: '전혀 문제없어! 난 목요일 오후 2시 이후로는 일정이 텅 비어 있어. 몇 시가 제일 편해?',
      keyHighlight: 'What time works best for you?',
      noteKo: '상대에게 가장 편한 시간을 물어볼 때 "What time works best for you?"를 통째로 외워 쓰세요.'
    },
    {
      id: 'd3-t5',
      speaker: 'Chloe',
      roleLabel: '프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-right',
      english: 'How does 2:30 PM sound? That gives me enough time to look over your mockups beforehand.',
      slashBroken: 'How does 2:30 PM sound? / That gives me enough time / to look over your mockups beforehand.',
      korean: '오후 2시 반 어때? 그래야 미팅 전에 네 시안을 미리 살펴볼 시간이 충분할 것 같아.',
      keyHighlight: 'How does 2:30 PM sound?',
      noteKo: '"How does [시간/제안] sound?"는 부드럽게 의견을 묻는 세련된 표현입니다.'
    },
    {
      id: 'd3-t6',
      speaker: 'Marcus',
      roleLabel: '프로덕트 디자이너',
      voicePitch: 0.92,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'zoom-in',
      english: "2:30 works great! Let's lock it in—I'll send over a calendar invite right now.",
      slashBroken: "2:30 works great! / Let's lock it in— / I'll send over a calendar invite right now.",
      korean: '2시 반 아주 좋아! 그렇게 확정하자. 지금 바로 캘린더 초대장 보낼게.',
      keyHighlight: "Let's lock it in",
      noteKo: '대명사 it을 구동사 가운데 넣어 lock it in으로 확정하고 캘린더 초대(calendar invite)로 마무리합니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 프로의 3단 완곡 거절 공식: [완충 쿠션] + [짧은 사유] + [대안 역제안]',
      coreFormula: '[시간] looks a bit tight on my end + (사유) + Would [새 시간] work instead?',
      wrongKonglish: 'Tomorrow is impossible because my schedule is ambiguous. Please delay it.',
      rightNative: 'Tomorrow looks a bit tight on my end. Would Thursday afternoon work instead?',
      explanationKo:
        '영어권 실무에서 "impossible"이나 "cannot"만 툭 던지면 협업 의지가 없는 것처럼 들릴 수 있습니다. ① 내 일정이 빠듯하다는 쿠션(looks a bit tight on my end)을 깔고, ② 대안 시간 뒤에 instead를 붙여 "Would ~ work instead?"라고 역제안하면 거절이 아니라 매끄러운 조율이 됩니다.',
      registerSpectrum: {
        casual: 'Tomorrow is kinda crazy for me—can we do Thursday instead?',
        standard: 'Tomorrow looks a bit tight on my end. Would Thursday afternoon work instead?',
        formal: 'Unfortunately, I have a prior commitment tomorrow. Might Friday morning work for you instead?'
      }
    },
    {
      title: '원리 02 · 한국어 "약속"의 두 얼굴: have plans vs. make a promise',
      coreFormula: 'have plans (만남·일정 약속이 있다) / a prior commitment (비즈니스 선약)',
      wrongKonglish: 'Sorry, I have a promise with my friend tonight.',
      rightNative: 'Sorry, I already have plans with a friend tonight.',
      explanationKo:
        '한국어에서는 "새끼손가락 걸고 한 맹세"도 약속, "저녁 7시에 강남역에서 밥 먹기로 한 일정"도 약속이라고 부릅니다. 하지만 영어에서 promise는 전자(맹세·보증)만을 뜻합니다! 누군가와 만나기로 한 선약은 반드시 복수형 명사 plans(I have plans) 또는 격식체 a prior commitment를 써야 합니다.',
      registerSpectrum: {
        casual: "Ah, I've got dinner plans tonight. Rain check?",
        standard: 'I already have plans with a friend this evening.',
        formal: 'I regret that I have a prior commitment this evening.'
      }
    },
    {
      title: '원리 03 · 캘린더 이동 방향 감각: 앞당기면 move up, 늦추면 push back',
      coreFormula: 'move [일정] up to [이른 시점] ↔ push [일정] back to [늦은 시점]',
      wrongKonglish: 'Can we pull the meeting early or delay it to 4 PM?',
      rightNative: 'Can we move the meeting up to 1 PM, or push it back to 4 PM?',
      explanationKo:
        '종이 달력이나 구글 캘린더 화면을 떠올려 보세요! 위쪽이 오전(이른 날짜), 아래쪽이 오후(나중 날짜)입니다. 그래서 시간을 앞당길 때는 위로 올리는 move ~ up을 쓰고, 뒤로 늦출 때는 뒤로 미는 push ~ back을 씁니다. 목적어가 it이면 반드시 move it up / push it back 어순을 지키세요.',
      registerSpectrum: {
        casual: 'Mind if we push lunch back by 30 minutes?',
        standard: 'Could we push our sync back to 4 PM?',
        formal: 'Would it be possible to reschedule our session for next Tuesday?'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd3-s01',
      drillType: 'chunk-build',
      promptKo: '내일은 제 쪽 일정이 좀 빠듯해(애매해) 보이네요.',
      promptEnHint: 'looks a bit tight + on my end 조합을 만드세요.',
      targetEn: 'Tomorrow looks a bit tight on my end.',
      chunks: ['Tomorrow', 'looks', 'a bit tight', 'on my end.'],
      explanationKo: 'ambiguous 대신 tight를 쓰고 on my end로 부드럽게 마무리합니다.'
    },
    {
      id: 'd3-s02',
      drillType: 'konglish-fix',
      promptKo: '"오늘 저녁에 친구랑 이미 약속이 있어요."',
      promptEnHint: '만남 약속은 promise가 아닙니다!',
      targetEn: 'I already have plans with a friend tonight.',
      wrongKonglishOption: 'I already have a promise with a friend tonight.',
      explanationKo: '일상적인 만남 약속은 복수형 명사 plans(have plans)를 사용합니다.'
    },
    {
      id: 'd3-s03',
      drillType: 'chunk-build',
      promptKo: '대신 목요일 오후는 시간 괜찮으실까요?',
      promptEnHint: 'Would ~ work instead? 패턴으로 역제안하세요.',
      targetEn: 'Would Thursday afternoon work instead?',
      chunks: ['Would', 'Thursday afternoon', 'work', 'instead?'],
      explanationKo: '동사 work("시간이 맞다/괜찮다")를 활용한 최고의 역제안 문장입니다.'
    },
    {
      id: 'd3-s04',
      drillType: 'active-blank',
      promptKo: '우리 통화를 30분만 뒤로 미뤄도 될까요?',
      promptEnHint: 'push our call ____ (뒤로 미루다)에 알맞은 부사를 넣으세요.',
      targetEn: 'Could we push our call back by 30 minutes?',
      blankData: {
        before: 'Could we push our call',
        answer: 'back',
        after: 'by 30 minutes?',
        firstLetterHint: 'b___ (4글자)'
      },
      explanationKo: '일정을 늦출 때는 push ~ back 구동사를 쓰고 시간 차이 앞에는 전치사 by를 붙입니다.'
    },
    {
      id: 'd3-s05',
      drillType: 'active-blank',
      promptKo: '회의를 화요일 오전으로 앞당길 수 있을까요?',
      promptEnHint: '달력 위쪽으로 당기다 move the meeting __ (부사 1단어)',
      targetEn: 'Can we move the meeting up to Tuesday morning?',
      blankData: {
        before: 'Can we move the meeting',
        answer: 'up',
        after: 'to Tuesday morning?',
        firstLetterHint: 'u_ (2글자)'
      },
      explanationKo: '일정을 앞당길 때는 move ~ up을 씁니다.'
    },
    {
      id: 'd3-s06',
      drillType: 'konglish-fix',
      promptKo: '"오후 1시부터 5시까지 연달아(빈틈없이) 회의가 있어요."',
      promptEnHint: '연속 회의를 뜻하는 원어민 형용사를 고르세요.',
      targetEn: 'I have back-to-back meetings from 1 to 5 PM.',
      wrongKonglishOption: 'I have relay nonstop meetings from 1 to 5 PM.',
      explanationKo: '쉬는 시간 없이 연이어 잡힌 회의는 back-to-back meetings라고 표현합니다.'
    },
    {
      id: 'd3-s07',
      drillType: 'chunk-build',
      promptKo: '오늘은 너무 바쁜데 점심은 다음을 기약해도 될까요?',
      promptEnHint: '우천 교환권 관용구 take a rain check를 조립하세요.',
      targetEn: 'Can I take a rain check on lunch today?',
      chunks: ['Can I', 'take a rain check', 'on lunch', 'today?'],
      explanationKo: '상대의 호의를 고맙게 받으면서 다음 기회로 미루는 가장 기분 좋은 표현입니다.'
    },
    {
      id: 'd3-s08',
      drillType: 'active-blank',
      promptKo: '아쉽게도 그날 저녁에는 선약이 있습니다. (비즈니스 격식)',
      promptEnHint: 'prior와 짝을 이루는 격식 명사(c로 시작)를 쓰세요.',
      targetEn: 'Unfortunately, I have a prior commitment that evening.',
      blankData: {
        before: 'Unfortunately, I have a prior',
        answer: 'commitment',
        after: 'that evening.',
        firstLetterHint: 'c_________ (10글자)'
      },
      explanationKo: 'a prior commitment는 사적인 사유를 구구절절 설명하지 않고도 품위 있게 거절하는 표현입니다.'
    },
    {
      id: 'd3-s09',
      drillType: 'chunk-build',
      promptKo: '일단 금요일 11시로 가일정을 잡아두죠.',
      promptEnHint: '연필로 적어두다 구동사 pencil in을 활용하세요.',
      targetEn: "Let's pencil in Friday at 11 AM.",
      chunks: ["Let's", 'pencil in', 'Friday', 'at 11 AM.'],
      explanationKo: '확정 전 임시로 슬롯을 잡아둘 때 pencil in이 아주 유용합니다.'
    },
    {
      id: 'd3-s10',
      drillType: 'konglish-fix',
      promptKo: '"오후 3시가 제일 괜찮으세요(편하세요)?"',
      promptEnHint: '시간 조율 동사 work의 쓰임을 확인하세요.',
      targetEn: 'Does 3 PM work best for you?',
      wrongKonglishOption: 'Does 3 PM okay best to you?',
      explanationKo: 'Does [시간] work (best) for you?가 정확한 문법과 어감입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd3-ex01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '일정 표현 tight',
      questionKo: '빈칸에 알맞은 형용사(1단어)를 넣어 "이번 주는 제 쪽 일정이 좀 빠듯하다(애매하다)"는 문장을 완성하세요.',
      stimulusEn: 'This week looks a bit __________ on my end.',
      answer: 'tight',
      acceptableAlt: ['tricky', 'packed'],
      explanationKo: '일정 여유가 없어 조율이 애매할 때는 tight(또는 tricky/packed)를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "제 쪽에서는(제 입장에서는)"을 뜻하는 전치사구(3단어)로 빈칸을 채우세요.',
        stimulusEn: 'Tomorrow morning looks pretty tight __________ __________ __________.',
        answer: 'on my end',
        explanationKo: 'on my end는 비즈니스 소통에서 책임을 명확히 하면서도 완곡함을 더합니다.'
      }
    },
    {
      id: 'd3-ex02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '일정 연기 push back',
      questionKo: '빈칸에 알맞은 구동사(2단어)를 넣어 "마감일을 금요일로 미룰 수 있을까요?"를 완성하세요.',
      stimulusEn: 'Could we __________ __________ the deadline to Friday?',
      answer: 'push back',
      explanationKo: '일정이나 마감일을 뒤로 늦출 때는 push back을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 대명사 it을 포함하여 "그것을 목요일로 미루다"(3단어)로 빈칸을 채우세요.',
        stimulusEn: 'Could we __________ __________ __________ to Thursday?',
        answer: 'push it back',
        explanationKo: '대명사 목적어 it은 반드시 구동사 사이(push it back)에 넣습니다.'
      }
    },
    {
      id: 'd3-ex03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '만남 선약 have plans',
      questionKo: '빈칸에 알맞은 명사(복수형 1단어)를 넣어 "이번 주말에 가족과 약속이 있다"는 문장을 완성하세요.',
      stimulusEn: 'I already have __________ with my family this weekend.',
      answer: 'plans',
      explanationKo: '선약·약속이 있다는 표현은 관사 없이 복수형 have plans를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 격식 있는 비즈니스 이메일에서 "선약"을 뜻하는 2단어(관사 제외)를 쓰세요.',
        stimulusEn: 'I apologize, as I have a __________ __________ that afternoon.',
        answer: 'prior commitment',
        explanationKo: 'a prior commitment가 공식 석상·이메일 표준 표현입니다.'
      }
    },
    {
      id: 'd3-ex04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '관용구 rain check',
      questionKo: '빈칸에 알맞은 명사구(2단어)를 넣어 "커피는 아쉽지만 다음을 기약해도 될까요?"를 완성하세요.',
      stimulusEn: "I'm slammed right now—can I take a __________ __________ on coffee?",
      answer: 'rain check',
      explanationKo: 'take a rain check (on ~)는 초대를 정중히 다음 기회로 미루는 관용구입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "가일정으로 일단 적어두자"에 알맞은 구동사(2단어)를 넣으세요.',
        stimulusEn: "Let's __________ __________ Wednesday at 10 AM for now.",
        answer: 'pencil in',
        explanationKo: '임시 일정 등록은 pencil in입니다.'
      }
    },
    {
      id: 'd3-ex05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '연속 회의 back-to-back',
      questionKo: '빈칸에 하이픈(-)을 포함한 형용사(1단어)를 넣어 "연달아 이어지는 회의"를 완성하세요.',
      stimulusEn: "I've been stuck in __________ calls since 9 AM.",
      answer: 'back-to-back',
      explanationKo: '쉬는 시간 없이 이어지는 일정은 back-to-back calls / meetings라고 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "오후 3시 이후엔 일정이 텅 비어(활짝 열려) 있어요" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'My calendar is __________ __________ after 3 PM.',
        answer: 'wide open',
        explanationKo: '일정이 완전히 비어 있을 때 wide open을 씁니다.'
      }
    },
    {
      id: 'd3-ex06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'ambiguous 콩글리시 함정',
      questionKo: '동료가 내일 점심 미팅을 제안했을 때 "내일은 시간이 좀 애매하네요"를 가장 원어민답게 표현한 문장은?',
      stimulusEn: '한국어 "애매하다"의 문맥상 의미를 생각해보세요.',
      options: [
        'Tomorrow is very ambiguous for my lunch.',
        'Tomorrow looks a bit tight on my end.',
        'My schedule has vague meaning tomorrow.',
        'Tomorrow time is obscure to me.'
      ],
      answer: 'Tomorrow looks a bit tight on my end.',
      explanationKo: 'ambiguous, vague, obscure는 모두 "글이나 말의 뜻이 모호하다"는 뜻이지 일정이 빠듯할 때 쓰지 않습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "대신 금요일 정오는 어떠세요?" 빈칸 동사(1단어)를 쓰세요.',
        stimulusEn: 'Would Friday at noon __________ instead?',
        answer: 'work',
        explanationKo: 'Would [시간] work instead? 구문입니다.'
      }
    },
    {
      id: 'd3-ex07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'move up vs push back 방향',
      questionKo: '원래 **목요일**로 예정된 발표가 **화요일**로 변경되었을 때 알맞은 문장은?',
      stimulusEn: '목요일(Thu) → 화요일(Tue)로 날짜가 바뀐 상황입니다.',
      options: [
        'They pushed the presentation back to Tuesday.',
        'They moved the presentation up to Tuesday.',
        'They took a rain check on Tuesday.',
        'They locked the presentation out of Tuesday.'
      ],
      answer: 'They moved the presentation up to Tuesday.',
      explanationKo: '목요일에서 화요일로 시점이 더 빨라졌으므로(앞당겨졌으므로) moved ~ up to Tuesday가 정답입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 반대로 화요일 회의를 금요일로 늦췄다면? 빈칸(2단어, 과거형 포함)을 쓰세요.',
        stimulusEn: 'They __________ the meeting __________ to Friday. (공백으로 구분)',
        answer: 'pushed back',
        explanationKo: '뒤로 늦추는 것은 pushed ~ back입니다.'
      }
    },
    {
      id: 'd3-ex08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '참석 가능 여부 make it',
      questionKo: '저녁 모임 초대에 "아쉽게도 오늘 저녁엔 참석하기 어려울 것 같아요"라고 정중히 답할 때 가장 자연스러운 표현은?',
      stimulusEn: '빈칸에 들어갈 자연스러운 구문을 고르세요: "I’m afraid I won’t be able to __________ tonight."',
      options: [
        'make it',
        'do arrival',
        'keep a promise',
        'enter there'
      ],
      answer: 'make it',
      explanationKo: '시간에 맞춰 도착하거나 모임에 참석하다는 뜻으로 make it이 일상과 비즈니스 모두에서 가장 널리 쓰입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "내일 제 생일 파티에 오실 수 있나요?" (Can you / make it / to my birthday party / tomorrow?)',
        stimulusEn: '빈칸 2단어: Can you __________ __________ to my birthday party tomorrow?',
        answer: 'make it',
        explanationKo: 'Can you make it to [장소/행사]? 패턴입니다.'
      }
    },
    {
      id: 'd3-ex09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'reschedule 전치사 호응',
      questionKo: '다음 빈칸에 들어갈 전치사로 가장 알맞은 것은?',
      stimulusEn: 'Would it be possible to reschedule our check-in ______ next Wednesday?',
      options: ['for', 'at', 'with', 'about'],
      answer: 'for',
      explanationKo: 'reschedule A for [새로운 날짜/요일] 형태로 전치사 for(또는 to)를 사용하여 새 일정을 지정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 회의를 "30분만큼" 뒤로 미룰 때 시간 차이 앞에 쓰는 전치사(1단어)는?',
        stimulusEn: 'Let’s push the call back __________ 30 minutes.',
        answer: 'by',
        explanationKo: '차이·간격을 나타낼 때는 전치사 by(by 30 minutes, by two days)를 씁니다.'
      }
    },
    {
      id: 'd3-ex10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '짬을 내다 구동사',
      questionKo: '종일 바쁘지만 급한 안건을 위해 "오후 4시쯤 10분 정도 짧게 짬을 내어 일정을 끼워 넣을 수 있다"에 알맞은 표현은?',
      stimulusEn: 'I can __________ a quick 10-minute chat around 4 PM.',
      options: [
        'squeeze in',
        'drop off',
        'head out',
        'lose track of'
      ],
      answer: 'squeeze in',
      explanationKo: '빡빡한 틈 사이에 쥐어짜듯 시간을 내어 끼워 넣는다는 뜻으로 squeeze in이 정확합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "최종 확정하다"를 뜻하는 구동사(2단어)를 넣어 문장을 완성하세요.',
        stimulusEn: "Awesome, let's __________ __________ Friday at 2 PM!",
        answer: 'lock in',
        explanationKo: '일정을 최종 확정할 때는 lock in을 씁니다.'
      }
    },
    {
      id: 'd3-ex11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '완곡 거절 + 역제안 배열',
      questionKo: '주어진 청크를 배열하여 세련된 일정 역제안 문장을 완성하세요.',
      stimulusEn: '[ work / afternoon / instead? / Would / Thursday ]',
      answer: 'Would Thursday afternoon work instead?',
      explanationKo: 'Would + [대안 시간] + work + instead? 어순을 입에 완전히 익혀두세요.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "대신 다음 주 월요일 오전이 괜찮으실까요?" (Would / next Monday morning / work / instead?)',
        stimulusEn: '영문 전체를 작성하세요 (물음표 포함).',
        answer: 'Would next Monday morning work instead?',
        explanationKo: '시간 명사구만 갈아 끼우면 수백 가지 상황에 즉시 응용됩니다.'
      }
    },
    {
      id: 'd3-ex12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'push back 요청문 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 정중한 일정 연기 요청문을 작성하세요.',
      stimulusEn: '[ our sync / Could we / to 3 PM / push / back / instead? ]',
      answer: 'Could we push our sync back to 3 PM instead?',
      acceptableAlt: ['Could we push back our sync to 3 PM instead?'],
      explanationKo: 'push our sync back(또는 push back our sync) + to 3 PM + instead? 구조입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "점심 약속을 1시로 뒤로 미뤄도 될까요?" (Could we / push lunch back / to 1 PM?)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Could we push lunch back to 1 PM?',
        explanationKo: 'push [일정] back to [새 시각] 패턴입니다.'
      }
    },
    {
      id: 'd3-ex13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'How does ~ sound 제안문',
      questionKo: '우리말 뜻에 맞게 주어진 단어를 활용하여 문장을 완성하세요.',
      stimulusEn: '우리말: 목요일 오후 2시 반은 어떠세요? (How / does / Thursday at 2:30 PM / sound?)',
      answer: 'How does Thursday at 2:30 PM sound?',
      explanationKo: 'How does [제안 시간] sound?는 상대의 의향을 부드럽게 물어보는 핵심 구문입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "몇 시가 가장 편하신가요?" (What time / works best / for you?)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'What time works best for you?',
        explanationKo: '단수 의문사 주어 What time에 맞춰 동사 works에 -s를 붙입니다.'
      }
    },
    {
      id: 'd3-ex14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시 교정 서술형',
      questionKo: '다음 콩글리시 문장을 오늘 배운 표현(tight on my end, plans)을 사용하여 바르게 고쳐 쓰세요.',
      stimulusEn: '오류 문장: Tonight is ambiguous on my end because I have a promise.',
      answer: 'Tonight looks tight on my end because I have plans.',
      acceptableAlt: [
        'Tonight is tight on my end because I have plans.',
        'Tonight is a bit tight on my end because I have plans.'
      ],
      explanationKo: 'ambiguous → tight, a promise → plans로 바꾸면 단번에 원어민 영어가 됩니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: Could we delay it? → push / it / back을 쓴 5단어 의문문으로 바꾸세요.',
        stimulusEn: '힌트: Could we ~ ?',
        answer: 'Could we push it back?',
        explanationKo: '대명사 it을 가운데 넣어 Could we push it back?으로 씁니다.'
      }
    },
    {
      id: 'd3-ex15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '실전 통문장 영작',
      questionKo: '다음 우리말을 영어로 자연스럽게 작성하세요.',
      stimulusEn: '우리말: 일단 금요일 오전 10시로 가일정을 잡아두죠. (힌트: Let’s / pencil in / Friday at 10 AM.)',
      answer: "Let's pencil in Friday at 10 AM.",
      explanationKo: "Let's pencil in [요일 + 시각]으로 가볍게 캘린더 슬롯을 확보할 수 있습니다.",
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "좋습니다, 목요일 오후 3시로 확정하죠." (Great, / let’s lock in / Thursday at 3 PM.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "Great, let's lock in Thursday at 3 PM.",
        explanationKo: '확정할 때는 lock in을 사용합니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      'Hi! Could we hop on a 30-minute call tomorrow at 10 AM to go over the project timeline?',
    openingQuestionKo: '안녕하세요! 프로젝트 일정을 점검하기 위해 내일 오전 10시에 30분 정도 통화 가능하실까요? (바쁘다고 가정하고 정중히 다른 시간을 역제안해보세요!)',
    followUpQuestionEn:
      'Thursday afternoon works for me! Anytime after 2 PM is wide open—what exact time should we lock in?',
    followUpQuestionKo: '목요일 오후 좋네요! 2시 이후론 다 비어 있는데 몇 시로 최종 확정할까요?',
    recommendedChunks: [
      'looks a bit tight on my end',
      'back-to-back meetings',
      'push it back to ~',
      'Would ~ work instead?',
      "let's lock in ~"
    ],
    modelAnswerEn:
      "Tomorrow morning looks a bit tight on my end since I'm in back-to-back meetings until noon. Would Thursday afternoon around 3 PM work instead?"
  }
};
