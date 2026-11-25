import type { DayLessonModule } from '../../types/course.ts';

export const day6Module: DayLessonModule = {
  dayNumber: 6,
  dayBadge: 'DAY 06 · WEEK 1 주간 종합 성취도 평가',
  categoryLabel: 'Week 1 총정리 리허설 & 20문항 실전 모의고사',
  title: 'Week 1 실전 통합 리허설 & 종합 모의고사',
  subtitle: 'Day 01~05에서 배운 75개 핵심 구동사·전치사·비즈니스 조율·3문장 확장법을 하나의 실전 스토리와 20문항 평가로 완전 체화',
  heroImage: 'assets/office_sitcom_scene.jpg',
  secondaryImage: 'assets/visual_preposition_card.jpg',
  estimatedSprintMin: 10,
  estimatedLectureMin: 45,
  keyExpression: 'Week 1 Complete Mastery: Fluency × Nuance × Accuracy',
  keySentenceByTier: {
    basic: "I'll wrap this up by 5 PM and stop by a cafe on my way home.",
    standard: "Tomorrow looks tight on my end, so I'll wrap up the draft by Friday and unwind with an evening walk.",
    advanced: "Although an urgent issue came up and we had to push our sync back, we're still on track to wrap everything up by EOD Friday."
  },
  vocabList: [
    {
      id: 'd6-v01',
      word: 'pull everything together',
      phonetic: '/pʊl ˈevriθɪŋ təˈɡeðər/',
      pos: '구동사 구문',
      meaningKo: '(흩어진 자료·일정을) 하나로 잘 취합해 완성하다',
      meaningEn: 'organize different parts effectively into one finished result',
      nuanceTipKo: '주간 마감 때 여러 팀의 결과물을 하나로 깔끔하게 모을 때 쓰는 실무 고급 표현입니다.',
      exampleEn: 'Thanks for pulling everything together on short notice.',
      exampleKo: '촉박한 일정에도 모든 자료를 잘 취합해 주셔서 감사합니다.'
    },
    {
      id: 'd6-v02',
      word: 'on short notice',
      phonetic: '/ɑːn ʃɔːrt ˈnoʊtɪs/',
      pos: '전치사구',
      meaningKo: '갑작스러운 연락에도, 촉박한 통보에도',
      meaningEn: 'with very little advance warning or time to prepare',
      nuanceTipKo: '급하게 잡힌 미팅에 참석해 준 동료에게 감사 인사할 때 빠지지 않는 표현입니다.',
      exampleEn: 'Sorry to ask you to hop on a call on such short notice.',
      exampleKo: '이렇게 급하게 통화를 요청드려 죄송합니다.'
    },
    {
      id: 'd6-v03',
      word: 'get back to ~',
      phonetic: '/ɡet bæk tuː/',
      pos: '구동사',
      meaningKo: '~에게 (확인 후) 다시 연락하다, 회신하다',
      meaningEn: 'contact someone later with an answer or update',
      nuanceTipKo: 'circle back과 더불어 일상·이메일에서 가장 빈도 높게 쓰이는 회신 약속 표현입니다.',
      exampleEn: "Let me double-check my schedule and get back to you by noon.",
      exampleKo: '제 일정을 한 번 더 확인해보고 정오까지 회신드릴게요.'
    },
    {
      id: 'd6-v04',
      word: 'double-check',
      phonetic: '/ˌdʌbl ˈtʃek/',
      pos: '동사',
      meaningKo: '실수 없도록 재차 꼼꼼히 확인하다',
      meaningEn: 'verify something a second time to ensure accuracy',
      nuanceTipKo: '단순 check보다 신중하고 꼼꼼한 프로의 태도를 보여주는 동사입니다.',
      exampleEn: "I'll double-check the figures before sending the deck.",
      exampleKo: '발표자료를 보내기 전에 수치를 한 번 더 꼼꼼히 확인할게요.'
    },
    {
      id: 'd6-v05',
      word: 'catch up (with ~)',
      phonetic: '/kætʃ ʌp/',
      pos: '구동사',
      meaningKo: '(밀린 일·근황 토크를) 따라잡다, 오랜만에 회포를 풀다',
      meaningEn: 'talk to someone about recent news; get up to date on work',
      nuanceTipKo: '친구와 밀린 수다를 떨 때도("Let\'s catch up over coffee!"), 밀린 이메일을 처리할 때도("catch up on emails") 씁니다.',
      exampleEn: "Let's grab coffee this Friday and catch up!",
      exampleKo: '이번 주 금요일에 커피 한잔하면서 밀린 이야기 나누자!'
    },
    {
      id: 'd6-v06',
      word: 'iron out',
      phonetic: '/ˈaɪərn aʊt/',
      pos: '구동사',
      meaningKo: '(남은 자잘한 문제·이견을) 매끄럽게 해결하다',
      meaningEn: 'resolve remaining small problems or details',
      nuanceTipKo: '구겨진 셔츠를 다리미(iron)로 펴듯, 출시 전 세부 이슈를 깔끔히 정리할 때 씁니다.',
      exampleEn: 'We just need to iron out a few minor bugs before launch.',
      exampleKo: '출시 전에 사소한 버그 몇 가지만 매끄럽게 잡으면 됩니다.'
    },
    {
      id: 'd6-v07',
      word: 'pay off',
      phonetic: '/peɪ ɔːf/',
      pos: '구동사',
      meaningKo: '(노력·고생이) 결실을 맺다, 보람이 있다',
      meaningEn: 'produce good results after hard effort',
      nuanceTipKo: '야근과 노력이 좋은 결과로 이어졌을 때 "All our hard work paid off!"라고 격려해 보세요.',
      exampleEn: 'Staying late to polish the demo really paid off.',
      exampleKo: '데모를 다듬느라 늦게까지 남았던 노력이 진짜 빛을 발했어요.'
    },
    {
      id: 'd6-v08',
      word: 'sleep in',
      phonetic: '/sliːp ɪn/',
      pos: '구동사',
      meaningKo: '(알람 없이 주말 등에 일부러) 늦잠을 푹 자다',
      meaningEn: 'intentionally sleep later than usual in the morning',
      nuanceTipKo: '실수로 지각 잠을 잔 oversleep과 달리, 휴일에 달콤하게 늦잠 자며 피로를 풀 때는 sleep in입니다!',
      exampleEn: "I can't wait to sleep in this Saturday morning.",
      exampleKo: '이번 주 토요일 아침엔 푹 늦잠 잘 생각에 벌써 설레네요.'
    },
    {
      id: 'd6-v09',
      word: 'oversleep',
      phonetic: '/ˌoʊvərˈsliːp/',
      pos: '동사',
      meaningKo: '(알람을 못 듣고 실수로) 늦잠 자서 늦다',
      meaningEn: 'sleep longer than intended by mistake',
      nuanceTipKo: '출근·등교에 지각했을 때는 sleep in이 아니라 과거형 overslept("I overslept!")를 써야 합니다.',
      exampleEn: 'I accidentally overslept and missed the 8 AM express train.',
      exampleKo: '실수로 늦잠을 자는 바람에 8시 급행열차를 놓쳤어요.'
    },
    {
      id: 'd6-v10',
      word: 'treat myself to ~',
      phonetic: '/triːt maɪˈself tuː/',
      pos: '관용구',
      meaningKo: '(고생한 나 자신에게) ~을 선물하다/대접하다',
      meaningEn: 'buy or do something special and enjoyable for yourself',
      nuanceTipKo: '한 주를 열심히 달린 금요일 저녁, 맛있는 음식이나 디저트를 사 먹을 때 최고의 표현입니다.',
      exampleEn: "I'm going to treat myself to a nice steak tonight.",
      exampleKo: '오늘 저녁엔 고생한 저 자신에게 맛있는 스테이크를 대접할 거예요.'
    },
    {
      id: 'd6-v11',
      word: 'ahead of schedule',
      phonetic: '/əˈhed əv ˈskedʒuːl/',
      pos: '전치사구',
      meaningKo: '예정된 일정보다 앞서서 (조기 달성)',
      meaningEn: 'earlier than the planned time',
      nuanceTipKo: 'on track(예정대로)보다 한 단계 더 기분 좋은 표현! 반대로 일정보다 뒤처지면 behind schedule입니다.',
      exampleEn: 'Surprisingly, we wrapped up QA two days ahead of schedule.',
      exampleKo: '놀랍게도 예정보다 이틀이나 앞서서 QA 테스트를 마무리했어요.'
    },
    {
      id: 'd6-v12',
      word: 'behind schedule',
      phonetic: '/bɪˈhaɪnd ˈskedʒuːl/',
      pos: '전치사구',
      meaningKo: '예정된 일정보다 뒤처진(지연된)',
      meaningEn: 'later than planned',
      nuanceTipKo: '"일정이 조금 밀렸어요"는 "We are running a bit behind schedule"이라고 정중히 공유합니다.',
      exampleEn: 'We are running slightly behind schedule due to server issues.',
      exampleKo: '서버 이슈로 인해 예정 일정보다 약간 지연되고 있습니다.'
    },
    {
      id: 'd6-v13',
      word: 'keep ~ posted',
      phonetic: '/kiːp ˈpoʊstɪd/',
      pos: '관용구',
      meaningKo: '~에게 새로운 소식을 계속 업데이트해 주다',
      meaningEn: 'regularly inform someone of the latest developments',
      nuanceTipKo: 'keep you in the loop와 100% 호환되는 친근하고 실용적인 표현입니다.',
      exampleEn: 'Keep me posted on how the client pitch goes!',
      exampleKo: '클라이언트 발표가 어떻게 진행되는지 계속 소식 알려줘요!'
    },
    {
      id: 'd6-v14',
      word: 'well-deserved',
      phonetic: '/ˌwel dɪˈzɜːrvd/',
      pos: '형용사',
      meaningKo: '충분히 누릴 자격이 있는 (고생 끝에 마땅한)',
      meaningEn: 'rightly earned through hard work',
      nuanceTipKo: '금요일 퇴근 인사나 휴가 가는 동료에게 "Have a well-deserved break!(고생 많았으니 푹 쉬어요!)"라고 건네보세요.',
      exampleEn: 'Enjoy your well-deserved weekend!',
      exampleKo: '고생 많으셨으니 자격 충분한 꿀주말 보내세요!'
    },
    {
      id: 'd6-v15',
      word: 'call an audible',
      phonetic: '/kɔːl ən ˈɔːdəbl/',
      pos: '실무 관용구',
      meaningKo: '현장 상황에 맞춰 즉석에서 작전(계획)을 유연하게 바꾸다',
      meaningEn: 'change plans at the last minute in response to new conditions',
      nuanceTipKo: '미식축구 쿼터백이 경기장에서 작전을 바꾸는 데서 유래한 북미 오피스 고급 표현입니다.',
      exampleEn: 'When the Wi-Fi died, we called an audible and used printed handouts.',
      exampleKo: '와이파이가 끊기자마자 우리는 즉석에서 계획을 바꿔 인쇄 유인물로 진행했어요.'
    }
  ],
  dialogue: [
    {
      id: 'd6-t1',
      speaker: 'Marcus',
      roleLabel: '디자인 리드',
      voicePitch: 0.92,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'zoom-in',
      english: 'Happy Friday, Chloe! Thanks again for hopping on that client call on such short notice earlier.',
      slashBroken: 'Happy Friday, Chloe! / Thanks again for hopping on that client call / on such short notice earlier.',
      korean: '해피 프라이데이, 클로이! 아까 그렇게 급하게 요청했는데도 클라이언트 콜에 들어와 줘서 정말 고마워.',
      keyHighlight: 'on such short notice',
      noteKo: '금요일 인사는 "Happy Friday!" 하나로 사무실 공기가 따뜻해집니다.'
    },
    {
      id: 'd6-t2',
      speaker: 'Chloe',
      roleLabel: '프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'pan-right',
      english: 'Anytime! I meant to wrap up my slides by noon, and pushing our internal sync back actually helped.',
      slashBroken: 'Anytime! / I meant to wrap up my slides by noon, / and pushing our internal sync back / actually helped.',
      korean: '별말씀을! 정오까지 슬라이드를 마무리하려던 참이었는데, 내부 미팅을 뒤로 미룬 게 오히려 도움이 됐어.',
      keyHighlight: 'meant to wrap up ~ by noon / pushing ~ back',
      noteKo: 'Day 2(meant to), Day 3(push back), Day 4(wrap up ~ by) 핵심 표현이 한 문장 안에서 물 흐르듯 결합됩니다!'
    },
    {
      id: 'd6-t3',
      speaker: 'Marcus',
      roleLabel: '디자인 리드',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_late_office.jpg',
      cameraMotion: 'pan-left',
      english: 'Working late on Tuesday really paid off—the client signed off on the whole proposal ahead of schedule!',
      slashBroken: 'Working late on Tuesday really paid off— / the client signed off on the whole proposal / ahead of schedule!',
      korean: '화요일에 야근했던 보람이 제대로 있었어. 클라이언트가 예정보다 앞서서 제안서 전체를 최종 승인했잖아!',
      keyHighlight: 'paid off / signed off on / ahead of schedule',
      noteKo: 'Day 2(working late) + Day 6(paid off, ahead of schedule) + Day 4(signed off on) 실무 성취 표현의 결정판입니다.'
    },
    {
      id: 'd6-t4',
      speaker: 'Chloe',
      roleLabel: '프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'zoom-in',
      english: "What a relief! Let's call it a day right at five today. Do you have any big plans for the weekend?",
      slashBroken: "What a relief! / Let's call it a day right at five today. / Do you have any big plans / for the weekend?",
      korean: '정말 다행이다! 오늘은 딱 5시에 칼퇴하자. 이번 주말엔 무슨 특별한 계획 있어?',
      keyHighlight: 'call it a day / have any big plans',
      noteKo: 'Day 1(call it a day)과 Day 3(have plans)가 금요일 퇴근 스몰토크로 자연스럽게 이어집니다.'
    },
    {
      id: 'd6-t5',
      speaker: 'Marcus',
      roleLabel: '디자인 리드',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_cafe_detour.jpg',
      cameraMotion: 'pan-right',
      english: "First, I'm going to stop by that bakery on my way home and treat myself to an almond croissant.",
      slashBroken: "First, I'm going to stop by that bakery / on my way home / and treat myself to an almond croissant.",
      korean: '일단 퇴근길에 그 빵집에 잠깐 들러서 고생한 나한테 아몬드 크루아상을 선물할 거야.',
      keyHighlight: 'stop by ~ on my way home / treat myself to',
      noteKo: 'Day 1 동선 구동사(stop by ~ on my way home)에 treat myself to를 얹어 생생하게 답합니다.'
    },
    {
      id: 'd6-t6',
      speaker: 'Chloe',
      roleLabel: '프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_riverside_walk.jpg',
      cameraMotion: 'pan-left',
      english: "Love that! Tomorrow morning I'm definitely sleeping in, and then going for a river walk to clear my head.",
      slashBroken: "Love that! / Tomorrow morning I'm definitely sleeping in, / and then going for a river walk / to clear my head.",
      korean: '너무 좋다! 난 내일 아침엔 무조건 푹 늦잠 자고, 저녁엔 머리도 식힐 겸 강변 산책을 나갈 거야.',
      keyHighlight: 'sleeping in / going for a river walk / clear my head',
      noteKo: '주말 꿀잠(sleep in)과 Day 5 힐링 루틴(clear my head)의 결합!'
    },
    {
      id: 'd6-t7',
      speaker: 'Marcus',
      roleLabel: '디자인 리드',
      voicePitch: 0.92,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'zoom-in',
      english: 'Enjoy your well-deserved weekend, Chloe! Keep me posted if you find any good cafes along the river.',
      slashBroken: 'Enjoy your well-deserved weekend, Chloe! / Keep me posted / if you find any good cafes along the river.',
      korean: '고생 많았으니 꿀주말 보내, 클로이! 강변에 좋은 카페 발견하면 소식 알려주고!',
      keyHighlight: 'well-deserved weekend / Keep me posted',
      noteKo: '주말 인사의 정석 "Enjoy your well-deserved weekend!"로 Week 1 시트콤 스토리가 막을 내립니다.'
    }
  ],
  grammarSections: [
    {
      title: 'Week 1 총정리 ① · 한국인이 가장 자주 틀리는 전치사 & 부사 5대 함정 체크리스트',
      coreFormula: 'on my way home (to 금지) | by Friday (완료) vs until Friday (지속) | discuss + 목적어 (about 금지)',
      wrongKonglish: 'On my way to home, let us discuss about the report until Friday.',
      rightNative: "On my way home, let's discuss the report so we can wrap it up by Friday.",
      explanationKo:
        '이번 주에 교정한 핵심 어법 포인트입니다. ① 부사 home/back 앞 to 삭제, ② in my way(방해) vs on my way(동선), ③ on time(정각) vs in time(늦지 않게), ④ 완료 마감 by vs 지속 until, ⑤ 타동사 discuss 뒤 about 삭제 — 이 5가지는 종합 모의고사 단골 출제 포인트입니다.',
      registerSpectrum: {
        casual: "I'm on my way home—I'll text you by 8!",
        standard: "Let's discuss the timeline so we stay on track by Friday.",
        formal: 'Please submit your feedback by EOD Wednesday; our office remains open until 6 PM.'
      }
    },
    {
      title: 'Week 1 총정리 ② · 콩글리시 명사·동사를 원어민 구동사·연어로 치환하기',
      coreFormula: 'many works → swamped with work | promise → plans | ambiguous → tight | healing → unwind/recharge',
      wrongKonglish: 'My schedule is ambiguous because of many works and a friend promise.',
      rightNative: "My schedule is tight since I'm swamped with work and already have dinner plans.",
      explanationKo:
        '한국어 단어를 1:1 사전식으로 번역하면 어색한 콩글리시가 됩니다. 상황의 본질 그림을 떠올려 구동사(stop by, drop off, pick up, ended up -ing, push back, wrap up, clear my head)로 바꾸는 순간 문장이 짧고 강력해집니다.',
      registerSpectrum: {
        casual: "I'm swamped today—rain check on dinner?",
        standard: 'Tomorrow looks tight on my end, so could we push it back?',
        formal: 'Due to a prior commitment, may we reschedule our session for Thursday?'
      }
    },
    {
      title: 'Week 1 총정리 ③ · 구동사 대명사 위치 & 동명사 결합 절대 법칙',
      coreFormula: 'pick it up / drop them off / push it back / wrap it up & end up V-ing / make a habit of V-ing',
      wrongKonglish: 'I ended up to pick up it late.',
      rightNative: 'I ended up picking it up late.',
      explanationKo:
        '문장 뼈대를 세운 뒤 정확도를 100점으로 끌어올리는 마지막 디테일입니다. ① 타동사+부사 구동사에 대명사(it/them)가 오면 반드시 가운데에 끼워 넣고(picking it up), ② end up과 전치사(of, for, instead of) 뒤 동사는 반드시 -ing 형태로 연결하세요.',
      registerSpectrum: {
        casual: 'Don’t worry, I’ll lock it in right now!',
        standard: 'We ended up wrapping it up ahead of schedule.',
        formal: 'We have made a habit of double-checking all figures prior to sign-off.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd6-s01',
      drillType: 'chunk-build',
      promptKo: '[종합 1] 퇴근길에 세탁물을 찾아가려고 잠깐 들렀어요.',
      promptEnHint: 'Day 1 핵심: stopped by + on my way home + to pick up',
      targetEn: 'I stopped by on my way home to pick up my laundry.',
      chunks: ['I stopped by', 'on my way home', 'to pick up', 'my laundry.'],
      explanationKo: 'home 앞 무전치사와 stop by / pick up 구동사 콤보입니다.'
    },
    {
      id: 'd6-s02',
      drillType: 'active-blank',
      promptKo: '[종합 2] 일찍 자려 했는데 결국 밤을 꼬박 새우게 됐어요.',
      promptEnHint: 'Day 2 핵심: ended up 뒤에 pull을 알맞게 변형하세요.',
      targetEn: 'I meant to sleep early, but I ended up pulling an all-nighter.',
      blankData: {
        before: 'I meant to sleep early, but I ended up',
        answer: 'pulling',
        after: 'an all-nighter.',
        firstLetterHint: 'p______ (-ing 형태)'
      },
      explanationKo: 'end up + 동명사(-ing) 규칙에 따라 pulling an all-nighter가 됩니다.'
    },
    {
      id: 'd6-s03',
      drillType: 'konglish-fix',
      promptKo: '[종합 3] "수요일은 제 쪽 일정이 좀 애매한데 목요일은 괜찮으실까요?"',
      promptEnHint: 'Day 3 핵심: tight on my end + work instead',
      targetEn: 'Wednesday looks tight on my end—would Thursday work instead?',
      wrongKonglishOption: 'Wednesday is ambiguous to me—would Thursday possible instead?',
      explanationKo: 'tight on my end와 조동사 Would 뒤 동사원형 work 결합을 확인하세요.'
    },
    {
      id: 'd6-s04',
      drillType: 'active-blank',
      promptKo: '[종합 4] 금요일 퇴근 전까지 최종안을 마무리해서 공유드릴게요.',
      promptEnHint: 'Day 4 핵심: 마감 완료 시점 전치사(2글자)',
      targetEn: "I'll wrap up the final draft by EOD Friday and keep you in the loop.",
      blankData: {
        before: "I'll wrap up the final draft",
        answer: 'by',
        after: 'EOD Friday and keep you in the loop.',
        firstLetterHint: 'b_ (2글자)'
      },
      explanationKo: '완료 데드라인 앞에는 전치사 by를 사용합니다.'
    },
    {
      id: 'd6-s05',
      drillType: 'chunk-build',
      promptKo: '[종합 5] 제가 가장 좋아하는 점은 저녁 산책이 복잡한 머리를 식혀준다는 거예요.',
      promptEnHint: 'Day 5 핵심: What I love most is that ~',
      targetEn: 'What I love most is that evening walks clear my head.',
      chunks: ['What I love most', 'is that', 'evening walks', 'clear my head.'],
      explanationKo: '복수 주어 evening walks에 맞춰 that절 동사는 clear를 씁니다.'
    },
    {
      id: 'd6-s06',
      drillType: 'konglish-fix',
      promptKo: '[종합 6] "이번 주 토요일 아침엔 알람 안 맞추고 푹 늦잠 잘 거예요!"',
      promptEnHint: '실수로 지각 잠(oversleep) vs 휴일 꿀늦잠(sleep in)을 구별하세요!',
      targetEn: "I'm going to sleep in this Saturday morning!",
      wrongKonglishOption: "I'm going to oversleep intentionally this Saturday morning!",
      explanationKo: '휴일에 기분 좋게 일부러 늦잠 자는 것은 구동사 sleep in을 씁니다.'
    },
    {
      id: 'd6-s07',
      drillType: 'chunk-build',
      promptKo: '[종합 7] 화요일에 늦게까지 남아 일했던 노력이 정말 빛을 발했어요!',
      promptEnHint: 'Day 6 핵심: 보람이 있다/결실을 맺다 paid off',
      targetEn: 'Working late on Tuesday really paid off!',
      chunks: ['Working late', 'on Tuesday', 'really', 'paid off!'],
      explanationKo: '동명사 주어 Working late on Tuesday + really paid off 구조입니다.'
    },
    {
      id: 'd6-s08',
      drillType: 'active-blank',
      promptKo: '[종합 8] 이렇게 급하게(촉박하게) 통화를 요청드려 죄송합니다.',
      promptEnHint: 'on _____ notice (갑작스러운 통보에)',
      targetEn: 'Sorry to ask for a call on such short notice.',
      blankData: {
        before: 'Sorry to ask for a call on such',
        answer: 'short',
        after: 'notice.',
        firstLetterHint: 's____ (5글자)'
      },
      explanationKo: 'on short notice는 실무에서 급한 요청을 할 때 필수 매너 표현입니다.'
    },
    {
      id: 'd6-s09',
      drillType: 'chunk-build',
      promptKo: '[종합 9] 예정된 일정보다 이틀 앞서서 프로젝트를 마무리했어요.',
      promptEnHint: 'ahead of schedule을 문장 끝에 배치하세요.',
      targetEn: 'We wrapped up the project two days ahead of schedule.',
      chunks: ['We wrapped up', 'the project', 'two days', 'ahead of schedule.'],
      explanationKo: 'ahead of schedule(일정보다 앞서) ↔ behind schedule(일정보다 늦어).'
    },
    {
      id: 'd6-s10',
      drillType: 'konglish-fix',
      promptKo: '[종합 10] "제가 그것을 내일까지 마무리해서 맡기고 갈게요." (대명사 어순 주의!)',
      promptEnHint: '구동사 두 개(wrap up, drop off) 모두 대명사 it의 위치를 확인하세요.',
      targetEn: "I'll wrap it up and drop it off by tomorrow.",
      wrongKonglishOption: "I'll wrap up it and drop off it until tomorrow.",
      explanationKo: 'wrap it up + drop it off + by tomorrow — Week 1 핵심 어법 3가지의 완결판입니다!'
    }
  ],
  worksheetExam: [
    {
      id: 'd6-ex01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: 'Day 1 동선 구동사',
      questionKo: '빈칸에 알맞은 구동사(과거형 2단어)를 넣어 "퇴근길에 꽃집에 잠깐 들렀다"를 완성하세요.',
      stimulusEn: 'I __________ __________ the flower shop on my way home.',
      answer: 'stopped by',
      acceptableAlt: ['swung by'],
      explanationKo: '동선 중 잠깐 들르다는 stop by(과거형 stopped by)를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "출근길에 세탁물을 맡기고 갔다" 빈칸(과거형 2단어)을 채우세요.',
        stimulusEn: 'I __________ __________ my laundry on my way to work.',
        answer: 'dropped off',
        explanationKo: 'drop의 과거형은 p를 한 번 더 써서 dropped off가 됩니다.'
      }
    },
    {
      id: 'd6-ex02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: 'Day 2 의도 vs 결과',
      questionKo: '괄호 안 동사 order를 알맞게 변형하여 "결국 자정에 치킨을 시키게 됐다"를 완성하세요.',
      stimulusEn: 'I meant to skip supper, but I ended up __________ (order) fried chicken at midnight.',
      answer: 'ordering',
      explanationKo: 'end up 뒤에는 동명사(-ing)가 와야 하므로 ordering이 정답입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "급한 일이 갑자기 생겼다"가 되도록 빈칸 구동사(과거형 2단어)를 쓰세요.',
        stimulusEn: 'Something urgent __________ __________ right before the meeting.',
        answer: 'came up',
        explanationKo: '예기치 않은 이슈 발생은 came up입니다.'
      }
    },
    {
      id: 'd6-ex03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: 'Day 3 일정 조율',
      questionKo: '빈칸에 알맞은 구동사(2단어)를 넣어 "회의를 오후 4시로 뒤로 미루다"를 완성하세요.',
      stimulusEn: 'Could we __________ __________ our sync to 4 PM?',
      answer: 'push back',
      explanationKo: '회의 시간을 늦출 때는 push back을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 반대로 회의를 오전 10시로 "앞당기다"(2단어)를 쓰세요.',
        stimulusEn: 'Can we __________ __________ the call to 10 AM?',
        answer: 'move up',
        explanationKo: '일정을 앞당기는 것은 move up입니다.'
      }
    },
    {
      id: 'd6-ex04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: 'Day 4 마감과 승인',
      questionKo: '빈칸에 알맞은 구동사(3단어)를 넣어 "부사장님이 예산안을 최종 승인하셔야 한다"를 완성하세요.',
      stimulusEn: 'Our VP needs to __________ __________ __________ the budget by Friday.',
      answer: 'sign off on',
      explanationKo: '공식 결재·최종 승인은 sign off on으로 표현합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "진행 상황을 계속 공유드리겠습니다" 빈칸(3단어)을 채우세요.',
        stimulusEn: "I'll keep you __________ __________ __________.",
        answer: 'in the loop',
        explanationKo: 'keep someone in the loop 관용구입니다.'
      }
    },
    {
      id: 'd6-ex05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: 'Day 5 피로 해소',
      questionKo: '빈칸에 알맞은 단어(1단어)를 넣어 "하루의 긴장을 풀고 쉬다"를 완성하세요.',
      stimulusEn: 'Taking a warm shower helps me __________ after a hectic day.',
      answer: 'unwind',
      acceptableAlt: ['relax'],
      explanationKo: '긴장을 풀며 쉬다는 뜻의 핵심 동사 unwind입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "복잡한 머리를 식히다" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'Evening walks always help me __________ my __________.',
        answer: 'clear head',
        explanationKo: 'clear my head 연어입니다.'
      }
    },
    {
      id: 'd6-ex06',
      number: 6,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: 'Day 6 실무 숙어',
      questionKo: '빈칸에 알맞은 전치사구(3단어)를 넣어 "갑작스러운(촉박한) 연락에도 도와주셔서 감사하다"를 완성하세요.',
      stimulusEn: 'Thank you so much for helping us out __________ __________ __________.',
      answer: 'on short notice',
      explanationKo: '사전 예고 시간이 거의 없이 급하게 요청했을 때 on short notice를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "우리의 노력이 마침내 결실을 맺었다!" (과거형 2단어)',
        stimulusEn: 'All our hard work finally __________ __________!',
        answer: 'paid off',
        explanationKo: 'pay off의 과거형 paid off입니다.'
      }
    },
    {
      id: 'd6-ex07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '전치사 종합 판별',
      questionKo: '다음 네 문장 중 전치사 쓰임이 **완벽하게 올바른** 문장은?',
      stimulusEn: 'Day 1~5에서 다룬 전치사 규칙을 모두 적용해 판별하세요.',
      options: [
        'I picked up coffee on my way to home.',
        'Please submit the final deck until EOD Friday.',
        'Let’s discuss the bottleneck by tomorrow noon.',
        'My eyes hurt from staring to my phone screen.'
      ],
      answer: 'Let’s discuss the bottleneck by tomorrow noon.',
      explanationKo: '① home 앞 to 삭제, ② 완료 제출이므로 by EOD Friday, ④ stare at my phone screen이어야 합니다. ③번만 타동사 discuss(무전치사) + by tomorrow noon으로 완벽합니다!',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "월요일까지 쭉 휴가 중이다"에 알맞은 전치사(1단어)를 쓰세요.',
        stimulusEn: 'He will be on vacation __________ Monday.',
        answer: 'until',
        explanationKo: '휴가 상태의 지속이므로 until을 씁니다.'
      }
    },
    {
      id: 'd6-ex08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'sleep in vs oversleep 구별',
      questionKo: '빈칸 (A)와 (B)에 들어갈 동사가 문맥에 맞게 짝지어진 것은?',
      stimulusEn: '(A) Since tomorrow is a holiday, I plan to __________ until 11 AM!\n(B) Oh no, my alarm didn’t go off, so I __________ and missed the bus.',
      options: [
        '(A) sleep in — (B) overslept',
        '(A) oversleep — (B) slept in',
        '(A) stay in — (B) locked in',
        '(A) head out — (B) came up'
      ],
      answer: '(A) sleep in — (B) overslept',
      explanationKo: '휴일에 의도적으로 푹 늦잠 자는 건 sleep in, 알람을 못 듣고 실수로 늦잠 자 지각한 건 overslept입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "일요일 아침에 늦잠 자는 걸 정말 좋아해요" 빈칸(2단어)을 쓰세요.',
        stimulusEn: 'I love to __________ __________ on Sunday mornings.',
        answer: 'sleep in',
        explanationKo: '기분 좋은 휴일 늦잠은 sleep in입니다.'
      }
    },
    {
      id: 'd6-ex09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '구동사 대명사 어순 종합',
      questionKo: '다음 중 어법상 **틀린** 문장을 고르세요.',
      stimulusEn: '구동사와 대명사 목적어의 결합 위치를 확인하세요.',
      options: [
        "Once the draft is ready, I'll wrap it up.",
        'Could we push it back by an hour?',
        'Let’s lock in it right away.',
        'I dropped them off at the lobby.'
      ],
      answer: 'Let’s lock in it right away.',
      explanationKo: '타동사+부사 구동사 lock in의 목적어가 대명사 it일 때는 반드시 Let’s lock it in으로 가운데에 넣어야 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 위 틀린 부분을 바른 3단어로 고쳐 쓰세요.',
        stimulusEn: "Let's __________ __________ __________ right away.",
        answer: 'lock it in',
        explanationKo: 'lock it in이 올바른 어순입니다.'
      }
    },
    {
      id: 'd6-ex10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '콩글리시 명사 총정리',
      questionKo: '다음 한국어 뜻과 자연스러운 영어 표현의 연결이 **잘못된** 것은?',
      stimulusEn: 'Week 1 핵심 콩글리시 교정 노트 점검',
      options: [
        '친구와 저녁 약속이 있다 → I have dinner plans with a friend.',
        '내일 일정이 좀 애매하다 → Tomorrow looks a bit tight on my end.',
        '요즘 업무량이 너무 많다 → I have too many works lately.',
        '산책하며 힐링했다 → Going for a walk helped me unwind and recharge.'
      ],
      answer: '요즘 업무량이 너무 많다 → I have too many works lately.',
      explanationKo: '업무(work)는 불가산 명사이므로 too much work, a heavy workload, 또는 swamped with work로 써야 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "업무에 파묻혀 정신없이 바쁘다" (be ________ with work) 1단어를 쓰세요.',
        stimulusEn: "I've been __________ with work lately.",
        answer: 'swamped',
        explanationKo: 'be swamped with work 연어입니다.'
      }
    },
    {
      id: 'd6-ex11',
      number: 11,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '일정 진척도 표현',
      questionKo: '예정했던 마감일보다 **사흘이나 더 일찍** 개발을 끝냈을 때 쓰는 표현은?',
      stimulusEn: 'The engineering team finished the build three days ____________________.',
      options: [
        'ahead of schedule',
        'behind schedule',
        'in my way',
        'out of the loop'
      ],
      answer: 'ahead of schedule',
      explanationKo: '예정보다 앞서 조기 완료했을 때는 ahead of schedule을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 반대로 예정보다 "일정이 뒤처져/밀려 있다"는 2단어 표현은?',
        stimulusEn: 'We are running slightly __________ __________.',
        answer: 'behind schedule',
        explanationKo: 'behind schedule로 지연 상태를 표현합니다.'
      }
    },
    {
      id: 'd6-ex12',
      number: 12,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '비즈니스 쿠션 응답',
      questionKo: '회의 중 아직 확인되지 않은 데이터 질문을 받았을 때 가장 프로페셔널한 대처 문장은?',
      stimulusEn: '즉답을 피하면서도 신뢰감을 주는 표현을 고르세요.',
      options: [
        "I have no idea, don't ask me now.",
        'Let me double-check the numbers and circle back to you by EOD.',
        'My data is ambiguous, please wait until forever.',
        'Let’s call it a day and forget the numbers.'
      ],
      answer: 'Let me double-check the numbers and circle back to you by EOD.',
      explanationKo: '[재확인 약속(double-check) + 회신 약속(circle back) + 명확한 기한(by EOD)] 3박자를 모두 갖춘 모범 비즈니스 답변입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "일정을 재확인해보고 정오까지 연락드릴게요"에서 회신 구동사(3단어)를 넣으세요.',
        stimulusEn: 'Let me check my calendar and __________ __________ __________ you by noon.',
        answer: 'get back to',
        explanationKo: 'get back to someone은 circle back to와 함께 가장 많이 쓰입니다.'
      }
    },
    {
      id: 'd6-ex13',
      number: 13,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '나 자신에게 보상하기',
      questionKo: '힘든 프로젝트를 끝낸 금요일 밤, "고생한 나 자신에게 맛있는 초밥을 대접할 거야"에 가장 알맞은 표현은?',
      stimulusEn: "After wrapping up the launch, I'm going to ____________________ some great sushi.",
      options: [
        'treat myself to',
        'drop myself off',
        'pencil myself in',
        'loop myself on'
      ],
      answer: 'treat myself to',
      explanationKo: 'treat oneself to [명사]는 스스로에게 특별한 선물이나 맛있는 음식을 대접한다는 뜻입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "충분히 누릴 자격이 있는 꿀휴식"을 뜻하는 하이픈 형용사(1단어)는?',
        stimulusEn: 'Have a __________ break this weekend!',
        answer: 'well-deserved',
        explanationKo: 'well-deserved break / weekend로 고생한 동료를 격려합니다.'
      }
    },
    {
      id: 'd6-ex14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Day 1+4 결합 서술형',
      questionKo: '주어진 청크를 배열하여 완전한 문장을 작성하세요.',
      stimulusEn: '[ by 5 PM / and stop by / I will wrap this up / on my way home. / the bookstore ]',
      answer: 'I will wrap this up by 5 PM and stop by the bookstore on my way home.',
      explanationKo: '[업무 마감] I will wrap this up by 5 PM + [퇴근 동선] and stop by the bookstore on my way home.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "정오까지 그것을 마무리해서 당신 자리에 맡기고 갈게요." (I will wrap it up / by noon / and drop it off / at your desk.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'I will wrap it up by noon and drop it off at your desk.',
        explanationKo: 'wrap it up과 drop it off의 대명사 어순을 정확히 지킵니다.'
      }
    },
    {
      id: 'd6-ex15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Day 2 의도·결과 서술형',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 문장을 완성하세요.',
      stimulusEn: '[ came up / on time, / I meant to leave / and I ended up / working late. / but something urgent ]',
      answer: 'I meant to leave on time, but something urgent came up and I ended up working late.',
      explanationKo: 'Day 2의 핵심 3요소(meant to V / something urgent came up / ended up V-ing)를 한 문장으로 엮은 마스터 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "집에서 쉬려 했는데 결국 친구들과 저녁을 먹으러 나갔어요." (I meant to stay in, / but I ended up / going out for dinner / with friends.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'I meant to stay in, but I ended up going out for dinner with friends.',
        explanationKo: 'stay in(집콕)과 going out(외출)의 대조가 선명합니다.'
      }
    },
    {
      id: 'd6-ex16',
      number: 16,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Day 3 일정 역제안 서술형',
      questionKo: '우리말 뜻에 맞게 정중한 비즈니스 일정 조율 문장을 작성하세요.',
      stimulusEn: '우리말: 내일 오전은 제 쪽 일정이 좀 빠듯하네요. 대신 금요일 오후 2시는 괜찮으실까요?\n(힌트: Tomorrow morning looks a bit tight on my end. / Would Friday at 2 PM work instead?)',
      answer: 'Tomorrow morning looks a bit tight on my end. Would Friday at 2 PM work instead?',
      explanationKo: '쿠션 거절 문장과 Would ~ work instead? 역제안 문장의 완벽한 2문장 세트입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "오늘 점심은 다음을 기약해도 될까요?" (Can I / take a rain check / on lunch / today?)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Can I take a rain check on lunch today?',
        explanationKo: 'take a rain check on ~ 구문입니다.'
      }
    },
    {
      id: 'd6-ex17',
      number: 17,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Day 4 선제 공유 서술형',
      questionKo: '주어진 청크를 배열하여 원격 협업 미팅 마무리 문장을 완성하세요.',
      stimulusEn: '[ signs off on / Once our director / in the loop. / the plan, / I will keep everyone ]',
      answer: 'Once our director signs off on the plan, I will keep everyone in the loop.',
      explanationKo: '부사절 현재시제(signs off on)와 주절 미래시제(will keep ~ in the loop)를 정확히 맞춥니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "남은 사소한 버그 몇 가지만 출시 전에 매끄럽게 해결하면 됩니다." (We just need to / iron out / a few minor bugs / before launch.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'We just need to iron out a few minor bugs before launch.',
        explanationKo: '세부 문제를 해결하다는 iron out을 활용합니다.'
      }
    },
    {
      id: 'd6-ex18',
      number: 18,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Day 5 강조 구문 서술형',
      questionKo: '주어진 청크를 배열하여 취미의 매력을 설명하는 문장을 완성하세요.',
      stimulusEn: '[ work stress / What I love most / takes my mind off / is that it / about running / and clears my head. ]',
      answer: 'What I love most about running is that it takes my mind off work stress and clears my head.',
      explanationKo: 'What절 강조 주어 + takes my mind off + clears my head까지 스피킹 핵심 표현이 응축되어 있습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "화요일에 야근했던 것이 정말 보람이 있었어요!" (Working late / on Tuesday / really paid off!)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Working late on Tuesday really paid off!',
        explanationKo: '노력이 결실을 맺었다는 칭찬·회고 표현입니다.'
      }
    },
    {
      id: 'd6-ex19',
      number: 19,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '종합 콩글리시 클리닉',
      questionKo: '다음 문장에 숨어 있는 **3가지 오류**(urgent something, ended up to, until Friday)를 모두 바르게 고쳐 쓰세요.',
      stimulusEn: '오류 문장: Urgent something came up, so we ended up to push the launch back until Friday.',
      answer: 'Something urgent came up, so we ended up pushing the launch back to Friday.',
      acceptableAlt: ['Something urgent came up, so we ended up pushing the launch back by Friday.'],
      explanationKo: '① Something urgent (후치 수식), ② ended up pushing (동명사), ③ push ~ back to Friday (새로운 일정 시점 전치사 to).',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: On my way to home, I checked your mail. (오류 2곳 교정)',
        stimulusEn: '바른 문장 전체를 작성하세요.',
        answer: 'On my way home, I checked your email.',
        explanationKo: 'home 앞 to 삭제, mail → email로 고칩니다.'
      }
    },
    {
      id: 'd6-ex20',
      number: 20,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Week 1 파이널 영작',
      questionKo: 'Week 1 마지막 문제입니다! 다음 우리말을 배운 표현들을 조합해 자연스러운 영어로 완성하세요.',
      stimulusEn: '우리말: 이번 주 금요일에 커피 한잔 가볍게 하면서 밀린 이야기 나누자!\n(힌트: Let’s / grab a coffee / this Friday / and catch up!)',
      answer: "Let's grab a coffee this Friday and catch up!",
      acceptableAlt: [
        "Let's grab coffee this Friday and catch up!",
        "Let's grab a coffee this Friday and catch up."
      ],
      explanationKo: '축하합니다! grab a coffee와 catch up을 결합해 언제든 동료·외국인 친구에게 먼저 말 걸 수 있는 완벽한 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "고생 많으셨으니 자격 충분한 꿀주말 보내세요!" (Enjoy / your well-deserved / weekend!)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Enjoy your well-deserved weekend!',
        explanationKo: 'Week 1 완주를 진심으로 축하드립니다!'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "Happy Friday! Looking back on this week, how did your work or study go, and how are you planning to treat yourself and unwind this weekend?",
    openingQuestionKo: '해피 프라이데이! 이번 한 주를 돌아보면 업무나 공부는 어땠나요? 그리고 이번 주말엔 고생한 나 자신에게 어떤 휴식이나 보상을 선물하실 계획인가요?',
    followUpQuestionEn:
      "You've earned a well-deserved break! Which expression from Week 1 (`stop by`, `ended up -ing`, `tight on my end`, `wrap up by`, `clear my head`) do you think you'll use first in real life?",
    followUpQuestionKo: '정말 푹 쉬실 자격이 충분하네요! 이번 주 배운 핵심 표현 중 실제 생활이나 업무에서 가장 먼저 써보고 싶은 표현은 무엇인가요?',
    recommendedChunks: [
      'meant to ~, but ended up -ing',
      'wrapped up ~ by Friday',
      'stop by ~ on my way home',
      'treat myself to ~',
      'clear my head'
    ],
    modelAnswerEn:
      "It was quite a hectic week, and I ended up working late on Wednesday, but we wrapped everything up on track by Friday! Tonight I'm going to stop by my favorite bakery on my way home to treat myself, and tomorrow I'll sleep in and go for a walk to clear my head."
  }
};
