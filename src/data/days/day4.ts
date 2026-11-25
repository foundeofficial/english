import type { DayLessonModule } from '../../types/course.ts';

export const day4Module: DayLessonModule = {
  dayNumber: 4,
  dayBadge: 'DAY 04 · 마감 기한 & 글로벌 협업 싱크',
  categoryLabel: '실무 이메일 · 화상회의 필수 영어',
  title: '금요일까지 마무리해서 공유드릴게요',
  subtitle: '치명적인 마감 전치사 실수(by vs until)를 완벽히 잡고 신뢰감을 주는 업무 보고 문장 만들기',
  heroImage: 'assets/scene_video_call.jpg',
  secondaryImage: 'assets/office_sitcom_scene.jpg',
  estimatedSprintMin: 7,
  estimatedLectureMin: 40,
  keyExpression: 'wrap ~ up by Friday and keep you in the loop',
  keySentenceByTier: {
    basic: 'I will finish the draft by Friday and share it with you.',
    standard: "I'll wrap up the first draft by Friday afternoon and keep you in the loop.",
    advanced: "We're right on track to wrap up the final deliverables by EOD Friday, and I'll be sure to keep everyone in the loop."
  },
  vocabList: [
    {
      id: 'd4-v01',
      word: 'by Friday',
      phonetic: '/baɪ ˈfraɪdeɪ/',
      pos: '전치사구',
      meaningKo: '금요일까지 (늦어도 금요일 안으로 완료)',
      meaningEn: 'no later than Friday (deadline)',
      nuanceTipKo: '제출·마감·완료 시점에는 무조건 by입니다! until Friday라고 쓰면 "금요일까지 계속 붙잡고만 있겠다"는 엉뚱한 뜻이 됩니다.',
      exampleEn: 'Please submit your expense report by Friday.',
      exampleKo: '금요일까지 경비 정산서를 제출해 주세요.'
    },
    {
      id: 'd4-v02',
      word: 'until Friday',
      phonetic: '/ənˈtɪl ˈfraɪdeɪ/',
      pos: '전치사구',
      meaningKo: '금요일까지 쭉 (동작·상태의 지속)',
      meaningEn: 'continuing continuously up to Friday',
      nuanceTipKo: '휴가 중이다(on vacation), 기다리다(wait), 머무르다(stay)처럼 쭉 이어지는 상태와 결합합니다.',
      exampleEn: 'Sarah will be out of the office until Friday.',
      exampleKo: '사라는 금요일까지 쭉 부재중(휴가)일 예정입니다.'
    },
    {
      id: 'd4-v03',
      word: 'wrap up',
      phonetic: '/ræp ʌp/',
      pos: '구동사',
      meaningKo: '(업무·회의·프로젝트를) 잘 마무리하다',
      meaningEn: 'bring a task or meeting to a successful conclusion',
      nuanceTipKo: '선물을 포장지(wrap)로 깔끔히 감싸듯, 진행하던 일을 매듭지을 때 finish보다 훨씬 세련된 실무 표현입니다.',
      exampleEn: "Let's wrap up this section and move to Q&A.",
      exampleKo: '이 파트는 이만 마무리하고 질의응답으로 넘어가죠.'
    },
    {
      id: 'd4-v04',
      word: 'keep ~ in the loop',
      phonetic: '/kiːp ɪn ðə luːp/',
      pos: '관용구',
      meaningKo: '~에게 진행 상황을 계속 공유하다(소외되지 않게 알리다)',
      meaningEn: 'keep someone informed with updates inside the communication circle',
      nuanceTipKo: '이메일 참조(CC)에 넣거나 슬랙으로 중간 경과를 공유하겠다고 약속할 때 최고의 표현입니다.',
      exampleEn: "I'll keep you in the loop as soon as I hear back.",
      exampleKo: '답변 받는 대로 진행 상황 바로 공유드릴게요.'
    },
    {
      id: 'd4-v05',
      word: 'on the same page',
      phonetic: '/ɑːn ðə seɪm peɪdʒ/',
      pos: '관용구',
      meaningKo: '서로 이해·생각이 일치하는 (싱크가 맞은 상태)',
      meaningEn: 'in agreement and sharing the same understanding',
      nuanceTipKo: '회의 시작이나 끝에 오해가 없는지 점검할 때 "Just to make sure we\'re on the same page"라고 자주 씁니다.',
      exampleEn: 'Quick sync to make sure everyone is on the same page.',
      exampleKo: '모두 같은 내용을 공유하고 있는지 맞추기 위한 짧은 싱크 미팅입니다.'
    },
    {
      id: 'd4-v06',
      word: 'on track',
      phonetic: '/ɑːn træk/',
      pos: '전치사구',
      meaningKo: '계획·목표대로 순조롭게 진행 중인',
      meaningEn: 'progressing as planned toward a goal or deadline',
      nuanceTipKo: '기차가 선로(track) 위를 벗어나지 않고 잘 달리는 모습! 반대로 일정이 밀리면 off track을 씁니다.',
      exampleEn: 'Are we still on track for the May 15 release?',
      exampleKo: '5월 15일 출시 일정대로 순조롭게 진행 중인가요?'
    },
    {
      id: 'd4-v07',
      word: 'give ~ a heads-up',
      phonetic: '/ɡɪv ə ˈhedz ʌp/',
      pos: '관용구',
      meaningKo: '~에게 미리 귀띔해주다 (사전 공지하다)',
      meaningEn: 'warn or inform someone in advance so they are prepared',
      nuanceTipKo: '갑작스러운 변경이나 일정을 미리 살짝 알려줄 때 "Just wanted to give you a quick heads-up!"이라고 시작해보세요.',
      exampleEn: 'Thanks for giving us a heads-up about the server maintenance.',
      exampleKo: '서버 점검 일정을 미리 귀띔해 주셔서 감사합니다.'
    },
    {
      id: 'd4-v08',
      word: 'circle back',
      phonetic: '/ˈsɜːrkl bæk/',
      pos: '구동사',
      meaningKo: '(확인 후 나중에) 다시 논의하다, 회신하다',
      meaningEn: 'return to discuss a topic again later after gathering info',
      nuanceTipKo: '회의 중 당장 답하기 어려운 질문이 나왔을 때 "Let me check the numbers and circle back to you"라고 넘기면 완벽합니다.',
      exampleEn: "Let's circle back to the budget issue next week.",
      exampleKo: '예산 이슈는 다음 주에 다시 돌아와 논의하죠.'
    },
    {
      id: 'd4-v09',
      word: 'by EOD (end of day)',
      phonetic: '/baɪ ˈiː oʊ ˈdiː/',
      pos: '실무 약어구',
      meaningKo: '오늘 업무 종료 전까지 (금일 마감 전까지)',
      meaningEn: 'by the end of the business day',
      nuanceTipKo: '글로벌 슬랙·이메일 1순위 약어! 주간 마감은 by EOW(end of week)로 씁니다.',
      exampleEn: 'I can send over the revised slides by EOD today.',
      exampleKo: '오늘 퇴근 전까지 수정된 슬라이드를 보내드릴 수 있습니다.'
    },
    {
      id: 'd4-v10',
      word: 'touch base',
      phonetic: '/tʌtʃ beɪs/',
      pos: '관용구',
      meaningKo: '짧게 연락해 진행 상황을 확인하다',
      meaningEn: 'briefly make contact or check in with someone',
      nuanceTipKo: '야구 주자가 베이스를 찍듯 무겁지 않게 안부 겸 현황을 체크할 때 씁니다.',
      exampleEn: 'Just wanted to touch base on the partnership proposal.',
      exampleKo: '파트너십 제안 건이 어떻게 되어가는지 짧게 확인차 연락드렸어요.'
    },
    {
      id: 'd4-v11',
      word: 'flesh out',
      phonetic: '/fleʃ aʊt/',
      pos: '구동사',
      meaningKo: '(초안·아이디어 뼈대에) 구체적인 살을 붙이다',
      meaningEn: 'add more details to a rough plan or outline',
      nuanceTipKo: '러프한 기획안을 구체화할 때 add details보다 훨씬 생동감 넘치는 고급 구동사입니다.',
      exampleEn: 'We need to flesh out the marketing strategy before Friday.',
      exampleKo: '금요일 전까지 마케팅 전략에 구체적인 살을 붙여야 합니다.'
    },
    {
      id: 'd4-v12',
      word: 'sign off on',
      phonetic: '/saɪn ɔːf ɑːn/',
      pos: '구동사',
      meaningKo: '(안건·예산·디자인을) 최종 승인하다(컨펌하다)',
      meaningEn: 'give official approval for something',
      nuanceTipKo: '한국 오피스의 "컨펌받다"는 영어에서 confirm보다 get approval이나 sign off on을 씁니다!',
      exampleEn: 'Did the VP sign off on the final budget yet?',
      exampleKo: '부사장님이 최종 예산안을 승인하셨나요?'
    },
    {
      id: 'd4-v13',
      word: 'loop ~ in',
      phonetic: '/luːp ɪn/',
      pos: '구동사',
      meaningKo: '(이메일·대화 스레드에 담당자를) 초대해 합류시키다',
      meaningEn: 'include someone in an email thread or discussion',
      nuanceTipKo: '이메일 CC에 누구를 추가하면서 "I\'m looping in Alex from Legal"이라고 쓰면 현업 원어민 100% 표현입니다.',
      exampleEn: "Let me loop in our lead engineer so he can weigh in.",
      exampleKo: '수석 엔지니어 의견도 들을 수 있게 대화에 초대할게요.'
    },
    {
      id: 'd4-v14',
      word: 'bottleneck',
      phonetic: '/ˈbɑːtlnek/',
      pos: '명사',
      meaningKo: '병목 구간 (전체 일정을 지연시키는 막힌 지점)',
      meaningEn: 'a point of congestion slowing down the whole process',
      nuanceTipKo: '프로젝트 지연 원인을 분석할 때 problem 대신 bottleneck을 쓰면 문제 해결 중심의 전문적인 인상을 줍니다.',
      exampleEn: 'Legal review is the main bottleneck right now.',
      exampleKo: '현재 법무 검토 단계가 가장 큰 병목 구간입니다.'
    },
    {
      id: 'd4-v15',
      word: 'hand off',
      phonetic: '/hænd ɔːf/',
      pos: '구동사',
      meaningKo: '(다음 담당자·팀에게 업무를) 인계하다, 넘기다',
      meaningEn: 'pass responsibility or deliverables to the next person/team',
      nuanceTipKo: '디자인이 끝나 개발팀으로 넘길 때(design handoff)처럼 부서 간 바통 터치에 쓰는 핵심 표현입니다.',
      exampleEn: "We'll hand off the final specs to engineering by Thursday.",
      exampleKo: '목요일까지 개발팀에 최종 기획 사양서를 인계할 예정입니다.'
    }
  ],
  dialogue: [
    {
      id: 'd4-t1',
      speaker: 'Marcus',
      roleLabel: '뉴욕 오피스 디자인 리드',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'zoom-in',
      english: 'Hi Chloe! Thanks for hopping on Zoom. Just wanted to touch base on the onboarding redesign.',
      slashBroken: 'Hi Chloe! / Thanks for hopping on Zoom. / Just wanted to touch base / on the onboarding redesign.',
      korean: '안녕 클로이! 줌 미팅 들어와 줘서 고마워. 온보딩 개편 건 진행 상황 짧게 체크하려고 불렀어.',
      keyHighlight: 'touch base on ~',
      noteKo: '화상회의에 접속하다는 hop on Zoom / hop on a call로 가볍게 표현합니다.'
    },
    {
      id: 'd4-t2',
      speaker: 'Chloe',
      roleLabel: '서울 프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'pan-right',
      english: "Happy to! Good news—we're right on track. My team fleshed out the user flow yesterday.",
      slashBroken: "Happy to! / Good news—we're right on track. / My team fleshed out the user flow / yesterday.",
      korean: '반가워! 좋은 소식이야, 일정대로 순조롭게 진행 중이야. 어제 우리 팀이 유저 플로우를 구체화했거든.',
      keyHighlight: 'right on track / fleshed out',
      noteKo: '상대방이 고마움을 표할 때 "Happy to!(기꺼이요!)"로 화답하면 분위기가 밝아집니다.'
    },
    {
      id: 'd4-t3',
      speaker: 'Marcus',
      roleLabel: '뉴욕 오피스 디자인 리드',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'pan-left',
      english: "Awesome! When do you think you'll be able to wrap up the final copy so we can plug it in?",
      slashBroken: "Awesome! / When do you think / you'll be able to wrap up the final copy / so we can plug it in?",
      korean: '멋진데! 디자인에 바로 얹을 수 있게 최종 문구 작업은 언제쯤 마무리할 수 있을 것 같아?',
      keyHighlight: 'wrap up the final copy',
      noteKo: '문구나 데이터를 템플릿에 끼워 넣는다는 뜻으로 plug it in을 유용하게 씁니다.'
    },
    {
      id: 'd4-t4',
      speaker: 'Chloe',
      roleLabel: '서울 프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'zoom-in',
      english: "I'll wrap it up by Friday afternoon, though our legal lead is out of office until Thursday.",
      slashBroken: "I'll wrap it up by Friday afternoon, / though our legal lead is out of office / until Thursday.",
      korean: '금요일 오후까지는 마무리할게. 다만 법무팀 리드 분이 목요일까지 쭉 휴가 중이긴 해.',
      keyHighlight: 'by Friday ~ until Thursday',
      noteKo: '한 문장 안에서 완료 마감(by Friday)과 부재 지속(until Thursday)의 대조를 완벽히 느껴보세요!'
    },
    {
      id: 'd4-t5',
      speaker: 'Marcus',
      roleLabel: '뉴욕 오피스 디자인 리드',
      voicePitch: 0.92,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-right',
      english: 'Got it—thanks for the heads-up! Once Legal signs off on it, please loop in our frontend engineer.',
      slashBroken: 'Got it—thanks for the heads-up! / Once Legal signs off on it, / please loop in our frontend engineer.',
      korean: '알겠어, 미리 귀띔해 줘서 고마워! 법무팀 최종 승인이 나면 우리 프론트엔드 엔지니어도 스레드에 초대해 줘.',
      keyHighlight: 'signs off on it / loop in',
      noteKo: '최종 컨펌(sign off on)과 담당자 참조 초대(loop in)가 자연스럽게 연결됩니다.'
    },
    {
      id: 'd4-t6',
      speaker: 'Chloe',
      roleLabel: '서울 프로덕트 매니저',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'zoom-in',
      english: "Will do! Glad we're on the same page. I'll keep you in the loop via Slack by EOD Thursday.",
      slashBroken: "Will do! / Glad we're on the same page. / I'll keep you in the loop via Slack / by EOD Thursday.",
      korean: '그렇게 할게! 서로 싱크가 딱 맞아서 다행이다. 목요일 퇴근 전까지 슬랙으로 중간 경과 공유할게.',
      keyHighlight: 'keep you in the loop ~ by EOD',
      noteKo: '"Will do!"는 "I will do that"을 경쾌하고 프로답게 줄인 실무 1순위 대답입니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 한국인 실무 영어 오해 1위: 완료 시점 [by] vs. 지속 기간 [until]',
      coreFormula: 'by + 시점 (그전까지 1회 완료·제출) ↔ until + 시점 (그때까지 쭉 상태 지속)',
      wrongKonglish: 'Please send me the revised file until Friday.',
      rightNative: 'Please send me the revised file by Friday.',
      explanationKo:
        '한국어 조사 "~까지" 하나에 영어 전치사 두 개(by, until)가 겹쳐 있어 한국 직장인의 90%가 실수합니다. 파일을 보내거나(send), 작업을 끝내거나(wrap up), 회신하는(reply) 것처럼 "특정 데드라인 이전에 딱 완료되는 행동"은 무조건 by를 씁니다. 반면 사무실에 남아 있거나(stay), 휴가 중이거나(be away), 기다리는(wait) "연속 상태"만 until을 씁니다.',
      registerSpectrum: {
        casual: 'Can you get back to me by tonight?',
        standard: "I'll wrap up the report by Friday afternoon.",
        formal: 'Kindly submit all required documentation by EOD May 30.'
      }
    },
    {
      title: '원리 02 · 콩글리시 "메일 체크 & 컨펌 부탁드려요" 완벽 교정',
      coreFormula: 'check my email / review the draft / sign off on the plan',
      wrongKonglish: 'Please check my mail and confirm the budget.',
      rightNative: 'Could you take a look at my email and sign off on the budget?',
      explanationKo:
        '① 단독 명사 mail은 우체부가 배달하는 종이 우편물이므로 전자우편은 반드시 email이라고 써야 합니다. ② 영어 동사 confirm은 "사실 여부나 예약을 재확인하다"라는 뜻이지 상사가 결재·승인하다는 뜻이 아닙니다! 검토 요청은 review / take a look at, 최종 승인은 approve 또는 sign off on을 사용하세요.',
      registerSpectrum: {
        casual: 'Did you get a chance to look over my email?',
        standard: 'Could you review the draft and let me know your thoughts?',
        formal: 'We are awaiting executive sign-off on the Q4 budget proposal.'
      }
    },
    {
      title: '원리 03 · 글로벌 원격 협업 신뢰도를 높이는 "선제 공유" 3대 구문',
      coreFormula: 'give you a heads-up (사전 귀띔) → keep you in the loop (중간 공유) → circle back (확인 후 회신)',
      wrongKonglish: 'I will notice you beforehand and share continuously.',
      rightNative: "Just wanted to give you a heads-up, and I'll keep you in the loop.",
      explanationKo:
        '글로벌 팀에서 가장 일 잘한다는 평가를 받는 비결은 투명한 진행 공유입니다. 이슈가 예상될 때 미리 알리는 give a heads-up, 진행 과정에서 소외되지 않게 챙기는 keep ~ in the loop, 모르는 걸 즉답하지 않고 확인 후 돌아오는 circle back — 이 세 가지만 구사해도 커뮤니케이션 품격이 달라집니다.',
      registerSpectrum: {
        casual: 'Just a quick heads-up—the build might take 10 extra minutes.',
        standard: "I'll keep you in the loop as soon as we hear from the client.",
        formal: 'Allow me to verify the figures and circle back to you by tomorrow morning.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd4-s01',
      drillType: 'konglish-fix',
      promptKo: '"금요일까지 수정된 보고서를 보내주세요." — 바른 전치사는?',
      promptEnHint: '제출·전송은 마감 데드라인(완료) 동작입니다!',
      targetEn: 'Please send me the revised report by Friday.',
      wrongKonglishOption: 'Please send me the revised report until Friday.',
      explanationKo: '특정 기한 안에 완료해야 하는 제출·발송에는 반드시 전치사 by를 씁니다.'
    },
    {
      id: 'd4-s02',
      drillType: 'chunk-build',
      promptKo: '금요일 오후까지 초안을 마무리할게요.',
      promptEnHint: '마무리하다 wrap up + 마감 by Friday afternoon',
      targetEn: "I'll wrap up the first draft by Friday afternoon.",
      chunks: ["I'll wrap up", 'the first draft', 'by Friday', 'afternoon.'],
      explanationKo: 'wrap up + 목적어 + by [마감 시점]은 실무 일정 약속의 정석입니다.'
    },
    {
      id: 'd4-s03',
      drillType: 'active-blank',
      promptKo: '사라는 목요일까지 쭉 휴가(부재중)일 예정입니다.',
      promptEnHint: '부재 상태가 목요일까지 계속 이어지므로 알맞은 전치사를 쓰세요.',
      targetEn: 'Sarah will be out of the office until Thursday.',
      blankData: {
        before: 'Sarah will be out of the office',
        answer: 'until',
        after: 'Thursday.',
        firstLetterHint: 'u____ (5글자)'
      },
      explanationKo: '계속 이어지는 상태(out of the office)에는 지속 전치사 until을 씁니다.'
    },
    {
      id: 'd4-s04',
      drillType: 'chunk-build',
      promptKo: '답변 받는 대로 진행 상황을 계속 공유드릴게요.',
      promptEnHint: '소통 고리 안에 두다 keep you in the loop를 조립하세요.',
      targetEn: "I'll keep you in the loop once I hear back.",
      chunks: ["I'll keep you", 'in the loop', 'once I', 'hear back.'],
      explanationKo: 'hear back(답신을 받다)과 keep you in the loop는 환상의 비즈니스 짝꿍입니다.'
    },
    {
      id: 'd4-s05',
      drillType: 'konglish-fix',
      promptKo: '"제 이메일 확인해 보시고 예산안 최종 승인(컨펌) 부탁드립니다."',
      promptEnHint: 'mail vs email, confirm vs sign off on 차이를 확인하세요.',
      targetEn: 'Could you check my email and sign off on the budget?',
      wrongKonglishOption: 'Could you check my mail and confirm about the budget?',
      explanationKo: '전자우편은 email, 예산·기획 최종 승인은 sign off on을 씁니다.'
    },
    {
      id: 'd4-s06',
      drillType: 'active-blank',
      promptKo: '5월 출시 목표대로 순조롭게 진행 중입니다.',
      promptEnHint: '기차 선로 위에 잘 올라와 있다는 명사(1단어)를 넣으세요.',
      targetEn: 'We are right on track for the May launch.',
      blankData: {
        before: 'We are right on',
        answer: 'track',
        after: 'for the May launch.',
        firstLetterHint: 't____ (5글자)'
      },
      explanationKo: 'be on track for ~ 는 일정·목표대로 차질 없이 가고 있다는 핵심 표현입니다.'
    },
    {
      id: 'd4-s07',
      drillType: 'chunk-build',
      promptKo: '모두 같은 생각(이해)을 공유하고 있는지 확인하고 싶습니다.',
      promptEnHint: '같은 페이지를 보고 있다 on the same page를 활용하세요.',
      targetEn: 'I want to make sure we are on the same page.',
      chunks: ['I want to', 'make sure', 'we are', 'on the same page.'],
      explanationKo: '오해 없이 싱크를 맞출 때 쓰는 글로벌 미팅 필수 문장입니다.'
    },
    {
      id: 'd4-s08',
      drillType: 'active-blank',
      promptKo: '일정 변경에 대해 미리 귀띔해 주셔서 감사합니다.',
      promptEnHint: '사전 공지/귀띔을 뜻하는 하이픈 명사(heads-up)에서 빈칸을 채우세요.',
      targetEn: 'Thanks for giving me a heads-up about the schedule change.',
      blankData: {
        before: 'Thanks for giving me a',
        answer: 'heads-up',
        after: 'about the schedule change.',
        firstLetterHint: 'h____-u_'
      },
      explanationKo: 'give someone a heads-up은 미리 언질을 주어 대비하게 해준다는 뜻입니다.'
    },
    {
      id: 'd4-s09',
      drillType: 'chunk-build',
      promptKo: '수치를 확인해 본 뒤에 내일 다시 회신드릴게요.',
      promptEnHint: '다시 돌아와 논의하다 circle back to you를 배열하세요.',
      targetEn: 'Let me check the numbers and circle back to you tomorrow.',
      chunks: ['Let me check', 'the numbers', 'and circle back', 'to you tomorrow.'],
      explanationKo: '모르는 질문에 당황하지 않고 프로답게 확인 후 답변하겠다고 말할 때 씁니다.'
    },
    {
      id: 'd4-s10',
      drillType: 'active-blank',
      promptKo: '수석 엔지니어도 이 대화 스레드에 초대할게요.',
      promptEnHint: '고리 안으로 불러들이다 ____ in (동사 1단어)',
      targetEn: 'Let me loop in our lead engineer on this thread.',
      blankData: {
        before: 'Let me',
        answer: 'loop',
        after: 'in our lead engineer on this thread.',
        firstLetterHint: 'l___ (4글자)'
      },
      explanationKo: '이메일 참조(CC)나 슬랙 채널에 담당자를 추가할 때 loop in을 씁니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd4-ex01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '마감 전치사 by',
      questionKo: '빈칸에 알맞은 전치사(1단어)를 넣어 "수요일 정오까지 계약서에 서명해 주세요"를 완성하세요.',
      stimulusEn: 'Please sign and return the contract __________ Wednesday at noon.',
      answer: 'by',
      explanationKo: '서명 후 반송하는 것은 마감 기한 내 완료 동작이므로 전치사 by가 정답입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "금일 오후 6시까지 사무실에 계속 남아 있을 예정이다" 빈칸 전치사(1단어)는?',
        stimulusEn: 'I will stay at the office __________ 6 PM today.',
        answer: 'until',
        explanationKo: '머무르는 상태의 지속이므로 until을 씁니다.'
      }
    },
    {
      id: 'd4-ex02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '마무리 구동사 wrap up',
      questionKo: '빈칸에 알맞은 구동사(2단어)를 넣어 "오늘 퇴근 전까지 슬라이드 작업을 마무리하겠다"를 완성하세요.',
      stimulusEn: "I'll __________ __________ the presentation deck by EOD today.",
      answer: 'wrap up',
      explanationKo: '진행 중인 업무나 회의를 깔끔히 매듭지을 때 wrap up을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 대명사 it을 가운데 넣어 "그것을 내일까지 마무리하다"(3단어)를 쓰세요.',
        stimulusEn: 'We can __________ __________ __________ by tomorrow.',
        answer: 'wrap it up',
        explanationKo: '타동사+부사 구동사이므로 대명사 it은 wrap it up 어순으로 들어갑니다.'
      }
    },
    {
      id: 'd4-ex03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '진행 공유 in the loop',
      questionKo: '빈칸에 알맞은 명사(1단어)를 넣어 "진행 상황을 계속 공유드리겠습니다"를 완성하세요.',
      stimulusEn: 'We will keep you in the __________ throughout the testing phase.',
      answer: 'loop',
      explanationKo: 'keep someone in the loop는 소통 고리 안에서 업데이트를 지속 공유한다는 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "서로 이해/싱크가 일치하는지 확인하다" 빈칸 명사(1단어)를 채우세요.',
        stimulusEn: "Let's make sure both teams are on the same __________.",
        answer: 'page',
        explanationKo: 'on the same page 숙어입니다.'
      }
    },
    {
      id: 'd4-ex04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '확인 후 재논의 circle back',
      questionKo: '빈칸에 알맞은 구동사(2단어)를 넣어 "법무팀에 확인한 뒤 다시 회신드리겠습니다"를 완성하세요.',
      stimulusEn: 'Let me check with Legal and __________ __________ to you.',
      answer: 'circle back',
      explanationKo: '정보를 확인한 뒤 해당 안건/상대에게 다시 돌아와 이야기할 때 circle back (to ~)을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "진행 현황을 짧게 체크하다"를 뜻하는 2단어 표현을 쓰세요.',
        stimulusEn: 'I just wanted to __________ __________ on the design timeline.',
        answer: 'touch base',
        explanationKo: 'touch base on ~ 은 가볍게 진행 상황을 점검할 때 씁니다.'
      }
    },
    {
      id: 'd4-ex05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '최종 승인 sign off on',
      questionKo: '빈칸에 알맞은 구동사(3단어, 현재원형)를 넣어 "디렉터가 신규 로고를 최종 승인해야 한다"를 완성하세요.',
      stimulusEn: 'Our creative director needs to __________ __________ __________ the new logo first.',
      answer: 'sign off on',
      explanationKo: '공식 승인(컨펌)을 내리다는 sign off on + 목적어로 표현합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "기획안 뼈대에 구체적인 살을 붙이다" 구동사(2단어)를 넣으세요.',
        stimulusEn: 'Can you __________ __________ Section 2 with concrete examples?',
        answer: 'flesh out',
        explanationKo: '아이디어에 세부 내용을 보강할 때는 flesh out을 씁니다.'
      }
    },
    {
      id: 'd4-ex06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'by vs until 실전 구별',
      questionKo: '다음 중 전치사 **by**와 **until**이 모두 어법상 올바르게 쓰인 문장은?',
      stimulusEn: '완료 동작인지 지속 상태인지 동사의 성격을 먼저 파악하세요.',
      options: [
        'Please finish the code until 5 PM, and wait here by 6 PM.',
        'Please finish the code by 5 PM, and wait here until 6 PM.',
        'I will return the book until Monday.',
        'The store is open by 10 PM every night.'
      ],
      answer: 'Please finish the code by 5 PM, and wait here until 6 PM.',
      explanationKo: '코드를 끝내는 것(finish)은 완료이므로 by 5 PM, 기다리는 것(wait)은 지속이므로 until 6 PM이 정확합니다. (가게 영업 지속도 open until 10 PM이어야 맞습니다.)',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 쿠폰은 12월 31일까지 쭉 유효합니다"에 알맞은 전치사(1단어)는?',
        stimulusEn: 'This voucher is valid __________ December 31.',
        answer: 'until',
        explanationKo: '유효한 상태(valid)가 그날까지 쭉 지속되므로 until(또는 through)을 씁니다.'
      }
    },
    {
      id: 'd4-ex07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '실무 약어 EOD 의미',
      questionKo: '해외 동료가 슬랙에 `"Could you share the link by EOD?"`라고 보냈을 때 정확한 의미는?',
      stimulusEn: '글로벌 오피스 표준 약어 EOD의 뜻을 고르세요.',
      options: [
        '오늘 업무 종료(퇴근) 전까지 링크를 공유해 주세요.',
        '비상 상황 발생 시에만 링크를 열어보세요.',
        '부서장 결재 서류와 함께 우편으로 보내주세요.',
        '다음 달 말일까지 링크를 유지해 주세요.'
      ],
      answer: '오늘 업무 종료(퇴근) 전까지 링크를 공유해 주세요.',
      explanationKo: 'EOD는 End of Day(금일 일과 종료 시점)의 약자입니다. 참고로 EOW는 End of Week(이번 주 금요일 마감)입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "오늘 퇴근 전까지"를 뜻하는 2단어 구문(전치사 + 약어 대문자)을 쓰세요.',
        stimulusEn: "I'll get this done __________ __________.",
        answer: 'by EOD',
        explanationKo: 'by EOD로 간결하게 데드라인을 표기합니다.'
      }
    },
    {
      id: 'd4-ex08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '사전 귀띔 heads-up',
      questionKo: '회의 시작 10분 전, 발표 자료 용량이 커서 로딩이 걸릴 수 있다고 동료에게 "미리 살짝 귀띔해주다"에 알맞은 표현은?',
      stimulusEn: 'Just wanted to ____________________ that the video file is quite heavy.',
      options: [
        'give you a heads-up',
        'make up for you',
        'call it a day',
        'take a rain check'
      ],
      answer: 'give you a heads-up',
      explanationKo: '상대가 당황하지 않게 사전에 언질을 주는 것은 give someone a heads-up입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 상대방이 미리 알려줬을 때 "미리 귀띔해 줘서 고마워요!" (Thanks for / the heads-up!)',
        stimulusEn: '빈칸 2단어: Thanks for __________ __________!',
        answer: 'the heads-up',
        explanationKo: '실무 슬랙에서 매일 쓰이는 감사 인사입니다.'
      }
    },
    {
      id: 'd4-ex09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '콩글리시 discuss about 교정',
      questionKo: '다음 중 비즈니스 이메일 문장으로 어법상 **결함이 없는** 문장은?',
      stimulusEn: '타동사와 전치사 중복 함정(discuss about, check mail)을 주의하세요.',
      options: [
        'Let us discuss about the bottleneck tomorrow.',
        'Did you check my mail regarding the schedule?',
        'We handed off the final designs to the dev team yesterday.',
        'Please confirm about my vacation until noon.'
      ],
      answer: 'We handed off the final designs to the dev team yesterday.',
      explanationKo: 'discuss는 타동사라 about을 쓰면 틀리고, 전자우편은 email, 휴가 승인은 approve by noon이어야 합니다. hand off A to B(A를 B에게 인계하다) 문장만 완벽합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "내일 그 병목 구간에 대해 논의하죠"에서 discuss 뒤 전치사 없이 3단어를 쓰세요.',
        stimulusEn: "Let's __________ __________ __________ tomorrow. (discuss / the / bottleneck)",
        answer: 'discuss the bottleneck',
        explanationKo: 'discuss 뒤에 바로 목적어 the bottleneck을 씁니다.'
      }
    },
    {
      id: 'd4-ex10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '일정 순항 on track',
      questionKo: '팀장이 프로젝트가 지연 없이 예정대로 잘 가고 있는지 물었을 때 "네, 계획대로 순조롭게 진행 중입니다"에 해당하는 대답은?',
      stimulusEn: 'Manager: "How is the migration going?" → You: "____________________"',
      options: [
        "Everything is right on track.",
        'Everything is in my way.',
        'We lost track of time.',
        'It looks tight on my end.'
      ],
      answer: 'Everything is right on track.',
      explanationKo: 'right on track은 일정과 목표에서 벗어나지 않고 순항 중이라는 뜻입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 상대의 요청에 "네, 그렇게 하겠습니다!"라고 경쾌하고 프로답게 2단어로 답할 때는?',
        stimulusEn: 'A: "Please loop in Sarah on the email." → B: "__________ __________!"',
        answer: 'Will do',
        explanationKo: '"Will do!"는 I will do it의 자연스러운 실무 축약 응답입니다.'
      }
    },
    {
      id: 'd4-ex11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '마감 약속 + 공유 통문장 배열',
      questionKo: '주어진 청크를 배열하여 신뢰감을 주는 업무 보고 문장을 완성하세요.',
      stimulusEn: '[ in the loop. / by Friday / I will wrap up / and keep you / the draft ]',
      answer: 'I will wrap up the draft by Friday and keep you in the loop.',
      explanationKo: '[마무리 약속] I will wrap up the draft by Friday + [지속 공유] and keep you in the loop.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "오늘 퇴근 전까지 수치를 확인해서 회신드릴게요." (I will check the numbers / and circle back to you / by EOD.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'I will check the numbers and circle back to you by EOD.',
        explanationKo: 'circle back to you + by EOD 결합 문장입니다.'
      }
    },
    {
      id: 'd4-ex12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'on the same page 구문 배열',
      questionKo: '주어진 표현을 올바른 순서로 배열하여 문장을 완성하세요.',
      stimulusEn: '[ on the same page / Let’s hop on / to make sure / a quick call / we are ]',
      answer: "Let's hop on a quick call to make sure we are on the same page.",
      explanationKo: '슬랙 텍스트로 오해가 생길 것 같을 때 바로 제안하기 좋은 실무 대표 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "파트너십 건 진행 상황을 짧게 확인차 연락드렸어요." (Just wanted to / touch base on / the partnership.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Just wanted to touch base on the partnership.',
        explanationKo: '이메일 첫 줄 오프닝으로 매우 유용합니다.'
      }
    },
    {
      id: 'd4-ex13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'loop in 실무 문장 작성',
      questionKo: '우리말 뜻에 맞게 주어진 단어를 활용하여 문장을 완성하세요.',
      stimulusEn: '우리말: 법무팀에서 최종 승인하면 개발 리드를 대화에 초대할게요.\n(힌트: Once Legal signs off on it, / I will loop in / our tech lead.)',
      answer: 'Once Legal signs off on it, I will loop in our tech lead.',
      explanationKo: '시간·조건 부사절(Once + 현재시제 signs off on it)과 주절(I will loop in ~)의 시제 일치에 유의하세요.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "목요일까지 최종 기획안을 개발팀에 인계하겠습니다." (We will hand off / the final specs / to the dev team / by Thursday.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'We will hand off the final specs to the dev team by Thursday.',
        explanationKo: 'hand off A to B + by [마감일] 구조입니다.'
      }
    },
    {
      id: 'd4-ex14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시 교정 서술형',
      questionKo: '다음 콩글리시 문장의 오류 2곳(mail, until)을 바르게 고쳐 완전한 영어 문장으로 다시 쓰세요.',
      stimulusEn: '오류 문장: Please check my mail and reply until tomorrow noon.',
      answer: 'Please check my email and reply by tomorrow noon.',
      acceptableAlt: ['Please check my email and reply by noon tomorrow.'],
      explanationKo: '① mail → email, ② 완료 데드라인이므로 until → by로 고칩니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: Let’s discuss about the schedule until EOD. (오류 2곳: about 삭제, 전치사 교정)',
        stimulusEn: '바른 문장 전체를 작성하세요.',
        answer: "Let's discuss the schedule by EOD.",
        explanationKo: 'discuss 뒤 about을 빼고 마감 전치사 by EOD를 씁니다.'
      }
    },
    {
      id: 'd4-ex15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '사전 공지 한영 영작',
      questionKo: '다음 우리말을 give you a quick heads-up을 활용하여 자연스럽게 영작하세요.',
      stimulusEn: '우리말: 서버 점검에 대해 미리 짧게 귀띔해 드리고 싶었습니다.\n(힌트: I just wanted to / give you a quick heads-up / about the server maintenance.)',
      answer: 'I just wanted to give you a quick heads-up about the server maintenance.',
      explanationKo: 'I just wanted to give you a quick heads-up about [주제] 패턴을 통째로 체화해 두세요.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "현재 디자인 검토가 가장 큰 병목 구간입니다." (Design review / is the main bottleneck / right now.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Design review is the main bottleneck right now.',
        explanationKo: '지연 지점을 명확히 짚어주는 실무 표현입니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "Quick check-in! How is your current project coming along, and when do you think you can wrap up the first draft?",
    openingQuestionKo: '짧게 진행 상황 체크할게요! 지금 맡으신 작업은 순조로운가요? 초안은 언제쯤 마무리해서 공유해주실 수 있을까요?',
    followUpQuestionEn:
      'Sounds good! Is there any bottleneck I should be aware of, or anyone else we should loop in before final sign-off?',
    followUpQuestionKo: '좋네요! 혹시 제가 미리 알아둘 병목 이슈가 있거나, 최종 승인 전에 함께 초대해야 할 담당자가 있을까요?',
    recommendedChunks: [
      'right on track',
      'wrap up ~ by Friday',
      'keep you in the loop',
      'give you a heads-up',
      'loop in ~'
    ],
    modelAnswerEn:
      "Everything is right on track! I'll wrap up the first draft by EOD Thursday and keep you in the loop. Just a quick heads-up—we'll need to loop in Legal so they can sign off on the terms."
  }
};
