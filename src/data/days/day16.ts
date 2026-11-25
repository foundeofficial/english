import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day16Module: DayLessonModule = {
  dayNumber: 16,
  weekNumber: 3,
  cefrLevel: 'b2',
  dayBadge: 'DAY 16 · 회의 끼어들기·동의·완곡한 반론',
  categoryLabel: 'Week 3 오피스 실무 · 영어 회의 발언권 & 설득력 있는 반론',
  title: '말씀하신 내용에 한 가지 덧붙여도 될까요?',
  subtitle: '영어 회의에서 눈치만 보다 침묵하지 않고, 타이밍 좋게 끼어들어 의견을 얹고(Build on) 기분 상하지 않게 완곡한 반론을 펼치는 고급 토론 기술',
  heroImage: 'assets/scene_boardroom_pitch.jpg',
  secondaryImage: 'assets/office_sitcom_scene.jpg',
  estimatedSprintMin: 8,
  estimatedLectureMin: 45,
  keyExpression: "I see where you're coming from, and to build on that, I'd suggest another angle.",
  keySentenceByTier: {
    a1: 'Excuse me, I have an idea too. I agree with you, but I think we need another plan.',
    a2: 'May I say something here? I understand your point, but I worry about the cost.',
    b1: "Sorry to jump in, but I see where you're coming from—could we also look at this from another angle?",
    b2: "To build on David's point, I see where you're coming from on speed, though I have a few reservations about cutting our margin.",
    c1: "If I may chime in here, Hannah's analysis is spot on; to play devil's advocate for a moment, we should anticipate pushback from enterprise clients before reaching a consensus.",
    c2: "While I fully echo your point regarding rapid adoption, I'd like to piggyback on that with a slight caveat—unless we model churn sensitivity first, we risk triggering avoidable pushback during renewals."
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[16],
  readingPassage: {
    titleEn: 'Inside a High-Trust Product Debate: How to Disagree Without Friction',
    titleKo: '[임원실 회의록 분석] 신뢰를 지키며 반론하는 고품격 영어 토론의 기술',
    genreBadge: '임원실 회의록 · Lv.4',
    estimatedMin: 6,
    paragraphsEn: [
      'Many non-native professionals stay silent during fast-paced English meetings, not because they lack insights, but because they wait for a long pause that never arrives. In Western boardrooms, politely jumping in with a brief bridge phrase—such as "May I chime in here?" or "To build on what Sarah just mentioned"—signals active engagement rather than rudeness.',
      'Even trickier is voicing disagreement when senior colleagues favor a different direction. Direct statements like "I disagree" or "That won\'t work" often trigger defensive pushback. Instead, skilled communicators validate the other person\'s logic first by saying "You make a valid point" or "I see where you\'re coming from," and then introduce an alternative from another angle using softeners like "that said" or "I have a few reservations about..."',
      'When a debate gets heated over a minor detail, strong facilitators know how to play devil\'s advocate constructively without making it personal. If one sub-topic threatens to derail the whole meeting, proposing to table that item for a separate session helps the group stay focused and reach a consensus on the core decision before time runs out.'
    ],
    paragraphsSlash: [
      'Many non-native professionals stay silent / during fast-paced English meetings, / not because they lack insights, / but because they wait for a long pause / that never arrives. / In Western boardrooms, / politely jumping in with a brief bridge phrase— / such as "May I chime in here?" / or "To build on what Sarah just mentioned"— / signals active engagement / rather than rudeness.',
      'Even trickier is voicing disagreement / when senior colleagues favor a different direction. / Direct statements like "I disagree" or "That won\'t work" / often trigger defensive pushback. / Instead, / skilled communicators validate the other person\'s logic first / by saying "You make a valid point" / or "I see where you\'re coming from," / and then introduce an alternative from another angle / using softeners like "that said" / or "I have a few reservations about..."',
      'When a debate gets heated over a minor detail, / strong facilitators know how to play devil\'s advocate constructively / without making it personal. / If one sub-topic threatens to derail the whole meeting, / proposing to table that item / for a separate session / helps the group stay focused / and reach a consensus on the core decision / before time runs out.'
    ],
    paragraphsKo: [
      '많은 비원어민 직장인들이 빠르게 흘러가는 영어 회의에서 침묵하는 이유는 통찰이 부족해서가 아니라, 결코 오지 않는 긴 정적을 기다리기 때문입니다. 서구권 회의실에서는 "여기서 한마디 보태도 될까요?" 또는 "사라가 방금 말한 내용에 덧붙이자면" 같은 짧은 연결 문구로 정중하게 끼어드는 것이 무례함이 아니라 적극적인 참여의 신호로 받아들여집니다.',
      '더 까다로운 상황은 시니어 동료가 다른 방향을 선호할 때 반론을 제기하는 것입니다. "동의하지 않습니다"나 "그건 안 될 겁니다" 같은 직설적 표현은 종종 방어적인 반발을 불러옵니다. 대신 노련한 커뮤니케이터는 먼저 "타당한 지적입니다" 또는 "어떤 관점에서 말씀하시는지 충분히 이해합니다"로 상대의 논리를 인정한 뒤, "그렇긴 하지만"이나 "약간의 우려가 있습니다" 같은 완충어로 다른 시각의 대안을 제시합니다.',
      '사소한 세부 사항으로 토론이 과열될 때, 뛰어난 진행자는 감정 싸움으로 번지지 않게 건설적으로 일부러 반대 입장을 취해(devil\'s advocate) 논리를 검증할 줄 압니다. 만약 한 가지 부수 안건이 회의 전체의 흐름을 깰 조짐이 보이면, 그 안건은 별도 세션을 위해 잠시 보류(table)하자고 제안함으로써 시간이 끝나기 전에 핵심 결정에 대한 합의에 도달하도록 이끕니다.'
    ],
    keyExpressions: [
      'jump in / chime in',
      'build on what ~ mentioned',
      "see where you're coming from",
      'have reservations about',
      "play devil's advocate",
      'reach a consensus'
    ],
    comprehensionQuiz: [
      {
        id: 'd16-rq01',
        questionKo: '본문에 따르면 비원어민 직장인이 영어 회의에서 침묵하게 되는 주된 이유는 무엇인가요?',
        options: [
          '회의 주제에 대한 전문 지식과 통찰이 부족해서',
          '결코 오지 않는 긴 정적(pause)을 기다리다가 발언 타이밍을 놓쳐서',
          '회의실에 마이크와 오디오 장비가 부족해서',
          '서구권 회의 문화에서는 신입의 발언을 금지하기 때문에'
        ],
        answer: '결코 오지 않는 긴 정적(pause)을 기다리다가 발언 타이밍을 놓쳐서',
        explanationKo: '첫째 문단 "not because they lack insights, but because they wait for a long pause that never arrives"가 근거입니다.'
      },
      {
        id: 'd16-rq02',
        questionKo: '노련한 커뮤니케이터가 방어적 반발(pushback)을 피하며 반론하는 올바른 순서는?',
        options: [
          '"I disagree"로 단호하게 자른 뒤 데이터 표를 띄운다',
          '회의가 끝날 때까지 침묵하다가 이메일로만 반대 의견을 보낸다',
          '상대의 논리를 먼저 인정(validate)한 뒤 완충어를 써서 다른 각도의 대안을 제시한다',
          '다른 부서 매니저에게 대신 반대해 달라고 부탁한다'
        ],
        answer: '상대의 논리를 먼저 인정(validate)한 뒤 완충어를 써서 다른 각도의 대안을 제시한다',
        explanationKo: '둘째 문단 "validate the other person\'s logic first ... and then introduce an alternative from another angle using softeners"를 확인하세요.'
      },
      {
        id: 'd16-rq03',
        questionKo: '미국 비즈니스 영어에서 부수 안건을 "나중에 논의하기로 잠시 보류하다"라는 뜻으로 본문에 쓰인 동사는?',
        options: ['echo', 'table', 'chime', 'derail'],
        answer: 'table',
        explanationKo: '셋째 문단 "proposing to table that item for a separate session"에서 미국식 비즈니스 동사 table(보류하다)이 쓰였습니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd16-v01',
      word: 'jump in',
      phonetic: '/dʒʌmp ɪn/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(회의·대화 흐름에) 정중히 끼어들어 발언하다',
      meaningEn: 'enter an ongoing conversation or discussion to add a remark',
      nuanceTipKo: 'interrupt(방해하다) 대신 "Sorry to jump in" 또는 "May I jump in real quick?"을 쓰면 무례함 없이 자연스럽게 발언권을 얻습니다.',
      exampleEn: 'Sorry to jump in here, but I have a quick question about the Q4 numbers.',
      exampleKo: '잠깐 끼어들어 죄송하지만, 4분기 수치에 대해 짧은 질문이 있습니다.'
    },
    {
      id: 'd16-v02',
      word: 'build on (that)',
      phonetic: '/bɪld ɑːn/',
      pos: '구동사',
      cefr: 'b2',
      meaningKo: '(앞사람의 의견에) 살을 붙여 발전시키다',
      meaningEn: 'expand on or strengthen an idea someone else just shared',
      nuanceTipKo: '내 의견만 툭 던지는 것보다 "To build on what Hannah just said..."로 연결하면 경청하는 협업형 리더로 보입니다.',
      exampleEn: "To build on David's point, we could also offer an annual billing discount.",
      exampleKo: '데이비드 님 말씀에 덧붙이자면, 연간 결제 할인도 함께 제공할 수 있을 것 같습니다.'
    },
    {
      id: 'd16-v03',
      word: "see where you're coming from",
      phonetic: '/siː wer jʊr ˈkʌmɪŋ frʌm/',
      pos: '관용 구문',
      cefr: 'b2',
      meaningKo: '어떤 입장·맥락에서 그렇게 말씀하시는지 충분히 이해하다',
      meaningEn: 'understand the reasoning or perspective behind someone’s opinion',
      nuanceTipKo: '반론을 꺼내기 직전에 깔아주는 최고의 공감 쿠션! "I totally see where you\'re coming from, that said..." 구조를 통째로 외우세요.',
      exampleEn: "I completely see where you're coming from; however, our support team is already stretched thin.",
      exampleKo: '어떤 관점에서 말씀하시는지 충분히 이해합니다. 다만 고객지원팀 여력이 이미 많이 빠듯합니다.'
    },
    {
      id: 'd16-v04',
      word: 'make a valid point',
      phonetic: '/meɪk ə ˈvælɪd pɔɪnt/',
      pos: '연어(Collocation)',
      cefr: 'b2',
      meaningKo: '타당하고 일리 있는 지적을 하다',
      meaningEn: 'raise a logical, well-founded argument worth considering',
      nuanceTipKo: '상대방 의견에 100% 동의하지 않더라도 논리적 타당성을 인정해 줄 때 "You make a very valid point"가 완벽합니다.',
      exampleEn: 'Soojin makes a valid point about enterprise renewal rates.',
      exampleKo: '수진 님이 기업 고객 갱신율에 대해 아주 타당한 지적을 해 주셨습니다.'
    },
    {
      id: 'd16-v05',
      word: 'spot on',
      phonetic: '/spɑːt ɑːn/',
      pos: '형용사구',
      cefr: 'b2',
      meaningKo: '정확히 핵심을 찌른, 딱 맞는',
      meaningEn: 'completely accurate or right on target',
      nuanceTipKo: '"You are right"보다 훨씬 생생하고 프로페셔널한 찬사입니다. "That analysis is spot on!"처럼 쓰세요.',
      exampleEn: "Hannah's revenue forecast turned out to be spot on.",
      exampleKo: '한나 님의 매출 예측이 정확히 들어맞았습니다.'
    },
    {
      id: 'd16-v06',
      word: "play devil's advocate",
      phonetic: '/pleɪ ˈdevlz ˈædvəkət/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '(논리 검증을 위해) 일부러 반대 입장을 취해 보다',
      meaningEn: 'intentionally argue the opposite view to test the strength of an idea',
      nuanceTipKo: '감정적 반대가 아니라 팀의 결정을 단단하게 만들기 위한 검증임을 밝힐 때 "Just to play devil\'s advocate for a second..."를 씁니다.',
      exampleEn: "Just to play devil's advocate, what happens if customers downgrade after the promo ends?",
      exampleKo: '논리 검증 차원에서 일부러 반대 입장을 취해 보자면, 프로모션 종료 후 고객이 하위 요금제로 바꾸면 어떡하죠?'
    },
    {
      id: 'd16-v07',
      word: 'pushback',
      phonetic: '/ˈpʊʃbæk/',
      pos: '명사',
      cefr: 'b2',
      meaningKo: '(제안·변화에 대한) 반발, 이견, 저항',
      meaningEn: 'resistance, criticism, or strong disagreement in response to a proposal',
      nuanceTipKo: '구동사 push back(미루다)과 달리 붙여 쓴 명사 pushback은 "반발·이견"을 뜻합니다! "expect some pushback" 연어로 익히세요.',
      exampleEn: 'We should expect some pushback from enterprise clients if we raise prices abruptly.',
      exampleKo: '가격을 갑작스럽게 올리면 기업 고객들로부터 어느 정도 반발이 있을 걸로 예상해야 합니다.'
    },
    {
      id: 'd16-v08',
      word: 'have reservations about',
      phonetic: '/hæv ˌrezərˈveɪʃnz əˈbaʊt/',
      pos: '동사 구문',
      cefr: 'c1',
      meaningKo: '~에 대해 약간의 우려·유보적인 태도를 갖다',
      meaningEn: 'feel hesitant or have doubts about a plan or proposal',
      nuanceTipKo: '식당 예약(reservation)이 아니라 복수형으로 "우려·의구심"을 뜻합니다! "I disagree"를 고급 B2/C1 어조로 바꾸는 치트키입니다.',
      exampleEn: 'I have a few reservations about offering a 30% discount across all tiers.',
      exampleKo: '모든 요금제에 일괄 30% 할인을 적용하는 데 대해서는 몇 가지 우려가 있습니다.'
    },
    {
      id: 'd16-v09',
      word: 'chime in',
      phonetic: '/tʃaɪm ɪn/',
      pos: '구동사',
      cefr: 'b2',
      meaningKo: '(자연스럽게 대화에) 한마디 거들다, 의견을 보태다',
      meaningEn: 'contribute a helpful comment during a group discussion',
      nuanceTipKo: '종소리가 맑게 어우러지듯(chime) 회의 흐름을 깨지 않고 부드럽게 발언을 보탤 때 jump in과 번갈아 쓰면 표현력이 풍부해집니다.',
      exampleEn: 'Feel free to chime in anytime if you spot any gaps in the data.',
      exampleKo: '데이터에서 빠진 부분이 보이시면 언제든 편하게 한마디 보태 주세요.'
    },
    {
      id: 'd16-v10',
      word: 'piggyback on',
      phonetic: '/ˈpɪɡibæk ɑːn/',
      pos: '구동사',
      cefr: 'c1',
      meaningKo: '(앞사람 아이디어를) 그대로 이어받아 덧붙이다',
      meaningEn: 'add your own point directly onto someone else’s idea',
      nuanceTipKo: '어부바(piggyback)에서 유래한 미국 오피스 단골 표현! "To piggyback on what David said..."는 build on의 생생한 동의어입니다.',
      exampleEn: 'Just to piggyback on what Soojin mentioned, customer interviews showed the exact same trend.',
      exampleKo: '수진 님 말씀에 덧붙이자면, 고객 인터뷰에서도 똑같은 추세가 나타났습니다.'
    },
    {
      id: 'd16-v11',
      word: 'bring up',
      phonetic: '/brɪŋ ʌp/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(회의 중 안건·질문을) 꺼내다, 제기하다',
      meaningEn: 'introduce a subject or question for discussion',
      nuanceTipKo: '"Thank you for bringing that up(그 점을 짚어 주셔서 감사합니다)"는 회의에서 상대 발언을 존중하는 1순위 리액션입니다.',
      exampleEn: "I'm really glad you brought up the onboarding cost—we almost overlooked it.",
      exampleKo: '온보딩 비용 이야기를 꺼내 주셔서 정말 다행이에요, 하마터면 놓칠 뻔했네요.'
    },
    {
      id: 'd16-v12',
      word: "echo (someone's) point",
      phonetic: '/ˈekoʊ pɔɪnt/',
      pos: '동사 구문',
      cefr: 'b2',
      meaningKo: '(~의 의견에) 전적으로 동감하며 힘을 싣다',
      meaningEn: 'express strong agreement by repeating or reinforcing someone else’s view',
      nuanceTipKo: 'Day 13의 "마이크 울림(echo)"과 달리 회의 토론에서는 "누구의 의견에 메아리처럼 동조하다"라는 고급 동사로 쓰입니다.',
      exampleEn: "I'd like to echo Hannah's point about protecting our gross margin.",
      exampleKo: '매출 총이익률을 지켜야 한다는 한나 님 의견에 전적으로 동감합니다.'
    },
    {
      id: 'd16-v13',
      word: 'reach a consensus',
      phonetic: '/riːtʃ ə kənˈsensəs/',
      pos: '연어(Collocation)',
      cefr: 'b2',
      meaningKo: '합의에 도달하다',
      meaningEn: 'arrive at a general agreement shared by the group',
      nuanceTipKo: '토론을 결론으로 수렴시킬 때 "Let\'s see if we can reach a consensus before 4 PM"처럼 씁니다.',
      exampleEn: 'After thirty minutes of healthy debate, the team finally reached a consensus.',
      exampleKo: '30분간의 건강한 토론 끝에 팀은 마침내 합의에 도달했습니다.'
    },
    {
      id: 'd16-v14',
      word: 'table (a topic)',
      phonetic: '/ˈteɪbl/',
      pos: '동사',
      cefr: 'c1',
      meaningKo: '(미국 영어) 안건을 잠시 접어 두고 나중으로 보류하다',
      meaningEn: 'postpone discussion of a topic until a later meeting (US usage)',
      nuanceTipKo: '주의! 미국 비즈니스에서는 "안건을 보류하다(put aside)", 영국에서는 "안건을 상정하다"로 정반대 의미가 될 수 있어 문맥(for now / until next week)을 함께 씁니다.',
      exampleEn: "Since we're short on time, let's table the logo refresh for now.",
      exampleKo: '시간이 부족하니 로고 리뉴얼 건은 일단 보류해 두죠.'
    },
    {
      id: 'd16-v15',
      word: 'from another angle',
      phonetic: '/frʌm əˈnʌðər ˈæŋɡl/',
      pos: '전치사구',
      cefr: 'b2',
      meaningKo: '다른 관점에서, 또 다른 시각으로',
      meaningEn: 'from a different perspective or way of viewing an issue',
      nuanceTipKo: '반대 의견을 "틀렸다"가 아니라 "또 다른 각도에서 보자(look at this from another angle)"로 프레이밍하면 거부감이 사라집니다.',
      exampleEn: 'Could we look at the pricing structure from another angle for a moment?',
      exampleKo: '가격 정책을 잠시 다른 관점에서 바라볼 수 있을까요?'
    }
  ],
  dialogue: [
    {
      id: 'd16-t01',
      speaker: 'David',
      roleLabel: '세일즈 부사장 (VP)',
      voicePitch: 0.90,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english: 'To hit our Q4 acquisition goal quickly, I propose we launch a flat 30% discount across all subscription tiers next month.',
      slashBroken: 'To hit our Q4 acquisition goal quickly, / I propose we launch a flat 30% discount / across all subscription tiers / next month.',
      korean: '4분기 신규 고객 확보 목표를 빠르게 달성하기 위해, 다음 달 전 요금제에 일괄 30% 할인을 도입하자고 제안합니다.',
      keyHighlight: 'propose we launch a flat 30% discount',
      noteKo: 'propose (that) we + 동사원형(가정법 현재)은 회의에서 안건을 공식 제안할 때 쓰는 고급 구조입니다.'
    },
    {
      id: 'd16-t02',
      speaker: 'Hannah',
      roleLabel: '재무 애널리스트',
      voicePitch: 1.09,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-right',
      english: "May I jump in real quick, David? I totally see where you're coming from on growth, but I have a few reservations about cutting our margin that deeply.",
      slashBroken: "May I jump in real quick, David? / I totally see where you're coming from on growth, / but I have a few reservations / about cutting our margin that deeply.",
      korean: '잠깐 끼어들어도 될까요, 데이비드? 성장 측면에서 어떤 취지로 말씀하시는지 충분히 이해하지만, 마진을 그렇게 크게 낮추는 건 몇 가지 우려가 됩니다.',
      keyHighlight: "see where you're coming from",
      noteKo: '[발언권 요청] → [공감 쿠션] → [완곡한 우려(have reservations)]의 완벽한 3단 반론 공식입니다.'
    },
    {
      id: 'd16-t03',
      speaker: 'Soojin',
      roleLabel: '프로덕트 전략 리드',
      voicePitch: 1.04,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-left',
      english: "I'd like to echo Hannah's point and build on that. Just to play devil's advocate, wouldn't existing annual customers push back if they see a huge public discount?",
      slashBroken: "I'd like to echo Hannah's point / and build on that. / Just to play devil's advocate, / wouldn't existing annual customers push back / if they see a huge public discount?",
      korean: '한나 님 의견에 동감하며 한 가지 덧붙이고 싶습니다. 검증 차원에서 반대 입장을 취해 보자면, 기존 연간 결제 고객들이 대규모 공개 할인을 보면 반발하지 않을까요?',
      keyHighlight: "echo Hannah's point and build on that",
      noteKo: '앞사람 의견에 힘을 싣고(echo) 살을 붙이며(build on), play devil\'s advocate로 리스크를 객관적으로 던집니다.'
    },
    {
      id: 'd16-t04',
      speaker: 'David',
      roleLabel: '세일즈 부사장 (VP)',
      voicePitch: 0.90,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english: "That's a very valid point, Soojin—I'm glad you brought that up. Your concern about renewal pushback is spot on.",
      slashBroken: "That's a very valid point, Soojin— / I'm glad you brought that up. / Your concern about renewal pushback / is spot on.",
      korean: '아주 타당한 지적이에요, 수진 님. 그 점을 꺼내 주셔서 다행입니다. 갱신 시 반발에 대한 우려가 정확히 핵심을 찔렀네요.',
      keyHighlight: 'spot on',
      noteKo: '반론을 들었을 때 방어적으로 나오지 않고 "valid point / glad you brought that up / spot on"으로 수용하는 리더의 품격입니다.'
    },
    {
      id: 'd16-t05',
      speaker: 'Soojin',
      roleLabel: '프로덕트 전략 리드',
      voicePitch: 1.04,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-right',
      english: 'What if we look at this from another angle? Instead of a flat discount, we could offer two free onboarding workshops for annual sign-ups.',
      slashBroken: 'What if we look at this / from another angle? / Instead of a flat discount, / we could offer two free onboarding workshops / for annual sign-ups.',
      korean: '이 문제를 다른 관점에서 보면 어떨까요? 일괄 할인 대신 연간 가입 고객에게 무료 온보딩 워크숍 2회를 제공하는 거죠.',
      keyHighlight: 'look at this from another angle',
      noteKo: '단순 반대에서 멈추지 않고 "What if we look at this from another angle?"로 건설적 대안을 제시합니다.'
    },
    {
      id: 'd16-t06',
      speaker: 'Hannah',
      roleLabel: '재무 애널리스트',
      voicePitch: 1.09,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-left',
      english: 'To piggyback on that, workshops protect our headline pricing while keeping acquisition cost well within budget.',
      slashBroken: 'To piggyback on that, / workshops protect our headline pricing / while keeping acquisition cost / well within budget.',
      korean: '거기에 한마디 덧붙이자면, 워크숍 제공은 정가 정책을 지키면서도 고객 획득 비용을 예산 범위 안으로 충분히 묶어둘 수 있어요.',
      keyHighlight: 'To piggyback on that',
      noteKo: 'To piggyback on that으로 동료의 대안에 재무적 근거를 얹어 설득력을 완성합니다.'
    },
    {
      id: 'd16-t07',
      speaker: 'David',
      roleLabel: '세일즈 부사장 (VP)',
      voicePitch: 0.90,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english: "I'm sold! Looks like we've reached a consensus on the workshop bundle—let's table the enterprise add-on pricing for Thursday's sync.",
      slashBroken: "I'm sold! / Looks like we've reached a consensus / on the workshop bundle— / let's table the enterprise add-on pricing / for Thursday's sync.",
      korean: '완전히 설득됐습니다! 워크숍 번들 안으로 합의에 도달한 것 같네요. 엔터프라이즈 추가 옵션 가격은 목요일 회의로 보류해 두죠.',
      keyHighlight: 'reached a consensus',
      noteKo: '"I\'m sold!"는 "완전히 납득했어/동의해!"라는 생생한 원어민 표현이며, 부수 안건은 table로 정리합니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 무례하지 않은 반론의 3단 쿠션: [공감] + [전환] + [다른 관점]',
      coreFormula: "I see where you're coming from / You make a valid point + (however / that said) + I have some reservations about ~",
      wrongKonglish: 'I disagree with your opinion. Your discount idea is wrong and dangerous.',
      rightNative: "I see where you're coming from; that said, I have a few reservations about offering a flat 30% discount.",
      explanationKo:
        '영어 회의에서 "I disagree"나 "You\'re wrong"을 바로 던지면 아이디어가 아니라 "상대방 인격"을 공격하는 것처럼 들려 방어벽(pushback)이 생깁니다. 먼저 상대 논리를 인정(see where you\'re coming from)하고, 부드러운 전환어(that said / however) 뒤에 개인적 우려(I have a few reservations about)나 대안(from another angle)을 제시하세요.',
      registerSpectrum: {
        casual: 'I totally get your point, though I wonder if a flat discount might hurt renewals.',
        standard: "I see where you're coming from, however I have a few reservations about cutting our margin.",
        formal: 'While I appreciate the rationale behind rapid acquisition, I have certain reservations regarding its long-term impact on margin integrity.'
      }
    },
    {
      title: '원리 02 · 침묵 깨기 공식: 발언권 얻기(jump in / chime in) & 이어받기(build on / piggyback on)',
      coreFormula: 'May I jump in real quick? / To build on what [이름] just said, ... / To echo [이름]\'s point, ...',
      wrongKonglish: 'Wait, stop talking. I also want to speak my different idea.',
      rightNative: "Sorry to jump in—to build on what Hannah just mentioned, I'd like to add one data point.",
      explanationKo:
        '글로벌 회의에서는 앞사람이 숨을 고르는 0.5초 사이에 "Sorry to jump in"이나 "Can I chime in real quick?"으로 신호를 주어야 발언권이 열립니다. 특히 앞사람 이름을 부르며 "To build on what [이름] said"로 연결하면 흐름을 끊는 게 아니라 대화를 확장하는 최고의 화법이 됩니다.',
      registerSpectrum: {
        casual: "Mind if I chime in real quick? Just to piggyback on Sarah's idea...",
        standard: 'May I jump in here? To build on what Sarah mentioned, we could try a bundle.',
        formal: "If I may interject briefly, I'd like to echo Sarah's observation and build upon it with Q3 data."
      }
    },
    {
      title: '원리 03 · 반론의 날을 둥글게 만드는 Hedging(완화) 전략 & devil\'s advocate',
      coreFormula: "Just to play devil's advocate, ... / What if we look at this from another angle? / Wouldn't [대상] push back if ~?",
      wrongKonglish: 'Customers will hate this and complain a lot. We must change it.',
      rightNative: "Just to play devil's advocate, wouldn't existing customers push back if they saw a 30% public discount?",
      explanationKo:
        '단정적인 미래 시제("will hate / must change") 대신 부정의문문("Wouldn\'t ~?")이나 가정 질문("What if we ~?")을 쓰면 상대방이 스스로 리스크를 깨닫게 유도할 수 있습니다. 여기에 "Just to play devil\'s advocate"를 붙이면 "개인적 반대가 아니라 팀을 위한 스트레스 테스트"라는 안전장치가 생깁니다.',
      registerSpectrum: {
        casual: "Playing devil's advocate here—what if existing users get mad?",
        standard: "Just to play devil's advocate, wouldn't existing clients push back on a public discount?",
        formal: 'Purely to stress-test our assumptions, might we anticipate pushback from legacy accounts upon renewal?'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd16-s01',
      drillType: 'chunk-build',
      promptKo: '잠깐 끼어들어서 한마디 보태도 될까요?',
      promptEnHint: 'May I + jump in + real quick 조합을 만드세요.',
      targetEn: 'May I jump in real quick here?',
      chunks: ['May I', 'jump in', 'real quick', 'here?'],
      explanationKo: '회의 흐름을 깨지 않고 자연스럽게 발언권을 요청하는 1순위 표현입니다.'
    },
    {
      id: 'd16-s02',
      drillType: 'konglish-fix',
      promptKo: '"어떤 관점에서 말씀하시는지 충분히 이해합니다."',
      promptEnHint: '상대 입장을 이해한다는 원어민 핵심 관용구를 고르세요.',
      targetEn: "I totally see where you're coming from.",
      wrongKonglishOption: 'I totally see where your mind is walking from.',
      explanationKo: 'see where you\'re coming from은 반론 전 최고의 공감 쿠션 표현입니다.'
    },
    {
      id: 'd16-s03',
      drillType: 'active-blank',
      promptKo: '일괄 할인을 제공하는 데 대해서는 몇 가지 우려가 있습니다.',
      promptEnHint: '우려·유보적 태도(복수형): r___________ (12글자)',
      targetEn: 'I have a few reservations about the discount.',
      blankData: {
        before: 'I have a few',
        answer: 'reservations',
        after: 'about the discount.',
        firstLetterHint: 'r___________ (12글자)'
      },
      explanationKo: 'have reservations about ~ 은 정중하고 고급스러운 반론 표현입니다.'
    },
    {
      id: 'd16-s04',
      drillType: 'chunk-build',
      promptKo: '한나 님이 방금 말씀하신 내용에 덧붙이자면, 우리도 데이터가 있습니다.',
      promptEnHint: 'To build on + what Hannah just said 청크를 연결하세요.',
      targetEn: 'To build on what Hannah just said, we have data too.',
      chunks: ['To build on', 'what Hannah just said,', 'we have', 'data too.'],
      explanationKo: '앞사람의 발언을 이어받아 발전시킬 때 To build on what ~ just said가 최고입니다.'
    },
    {
      id: 'd16-s05',
      drillType: 'active-blank',
      promptKo: '검증 차원에서 일부러 반대 입장을 취해 보자면, 비용이 너무 높지 않을까요?',
      promptEnHint: "play devil's ________ (8글자)",
      targetEn: "Just to play devil's advocate, isn't the cost too high?",
      blankData: {
        before: "Just to play devil's",
        answer: 'advocate',
        after: ", isn't the cost too high?",
        firstLetterHint: 'a_______ (8글자)'
      },
      explanationKo: 'play devil\'s advocate는 논리 검증을 위해 의도적으로 반대 시각을 제시하는 고급 관용구입니다.'
    },
    {
      id: 'd16-s06',
      drillType: 'konglish-fix',
      promptKo: '"한나 님의 매출 예측이 정확히 핵심을 찔렀어요(딱 맞았어요)."',
      promptEnHint: '"정확히 딱 맞는"을 뜻하는 원어민 형용사구를 고르세요.',
      targetEn: "Hannah's revenue forecast was spot on.",
      wrongKonglishOption: "Hannah's revenue forecast was point shoot.",
      explanationKo: '정확히 핵심을 찌르거나 예측이 딱 맞을 때 spot on을 씁니다.'
    },
    {
      id: 'd16-s07',
      drillType: 'chunk-build',
      promptKo: '이 문제를 잠시 다른 관점에서 바라보면 어떨까요?',
      promptEnHint: 'What if we look at this + from another angle 패턴을 조립하세요.',
      targetEn: 'What if we look at this from another angle?',
      chunks: ['What if we', 'look at this', 'from another', 'angle?'],
      explanationKo: '대안을 제시할 때 from another angle로 프레이밍하면 거부감이 크게 줄어듭니다.'
    },
    {
      id: 'd16-s08',
      drillType: 'active-blank',
      promptKo: '긴 토론 끝에 마침내 합의에 도달했습니다.',
      promptEnHint: '합의(동의): reach a _________ (9글자)',
      targetEn: 'We finally reached a consensus on the plan.',
      blankData: {
        before: 'We finally reached a',
        answer: 'consensus',
        after: 'on the plan.',
        firstLetterHint: 'c________ (9글자)'
      },
      explanationKo: 'reach a consensus는 회의 결론 도출을 표현하는 필수 연어입니다.'
    },
    {
      id: 'd16-s09',
      drillType: 'konglish-fix',
      promptKo: '"시간이 부족하니 그 안건은 일단 보류해 두죠."',
      promptEnHint: '미국 비즈니스 영어에서 안건을 보류하는 동사를 고르세요.',
      targetEn: "Since we're short on time, let's table that topic for now.",
      wrongKonglishOption: "Since we're short on time, let's chair that topic for now.",
      explanationKo: '미국 실무 영어에서 안건을 나중으로 보류하다는 동사 table을 씁니다.'
    },
    {
      id: 'd16-s10',
      drillType: 'chunk-build',
      promptKo: '온보딩 비용 이야기를 꺼내 주셔서 정말 다행이에요.',
      promptEnHint: "I'm glad you + brought up 패턴을 조립하세요.",
      targetEn: "I'm glad you brought up the onboarding cost.",
      chunks: ["I'm glad", 'you brought up', 'the onboarding', 'cost.'],
      explanationKo: '중요한 논점을 제기한 동료를 인정하는 최고의 회의 리액션입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd16-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '의견 발전시키기 build on',
      questionKo: '빈칸에 구동사(2단어)를 넣어 "데이비드 님 의견에 한 가지 덧붙이자면..."을 완성하세요.',
      stimulusEn: "To __________ __________ David's point, we could bundle free training.",
      answer: 'build on',
      acceptableAlt: ['piggyback on'],
      explanationKo: '앞사람의 의견을 토대로 살을 붙일 때 build on(또는 piggyback on)을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "한나 님 의견에 전적으로 동감합니다" 빈칸 동사(1단어)를 쓰세요.',
        stimulusEn: "I'd like to __________ Hannah's point about protecting margin.",
        answer: 'echo',
        explanationKo: '앞사람 의견에 메아리처럼 힘을 실어 동의할 때 동사 echo를 씁니다.'
      }
    },
    {
      id: 'd16-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '공감 쿠션 coming from',
      questionKo: '빈칸에 2단어를 넣어 "어떤 입장에서 말씀하시는지 충분히 이해합니다"를 완성하세요.',
      stimulusEn: "I totally see where you're __________ __________.",
      answer: 'coming from',
      explanationKo: "see where you're coming from은 반론 전 필수 공감 표현입니다.",
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "아주 타당하고 일리 있는 지적을 하셨어요" 빈칸 형용사(1단어: v____)를 쓰세요.',
        stimulusEn: 'You make a very __________ point about customer retention.',
        answer: 'valid',
        explanationKo: '타당한 지적은 make a valid point라고 합니다.'
      }
    },
    {
      id: 'd16-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '완곡한 우려 reservations',
      questionKo: '빈칸에 복수형 명사(1단어)를 넣어 "가격 정책 변경에 몇 가지 우려가 있습니다"를 완성하세요.',
      stimulusEn: 'I have a few __________ about changing the pricing model so suddenly.',
      answer: 'reservations',
      explanationKo: 'have reservations about ~ 은 완곡하고 격식 있는 반대·우려 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "고객들의 반발·이견이 예상됩니다" 빈칸 명사(1단어: p_______)를 쓰세요.',
        stimulusEn: 'We might face some __________ from existing annual clients.',
        answer: 'pushback',
        explanationKo: '제안·변화에 대한 반발과 이견은 붙여 쓴 명사 pushback입니다.'
      }
    },
    {
      id: 'd16-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '회의 발언권 chime in / jump in',
      questionKo: '빈칸에 구동사(2단어)를 넣어 "데이터에 빠진 부분이 보이면 언제든 편하게 한마디 보태 주세요"를 완성하세요.',
      stimulusEn: 'Feel free to __________ __________ anytime if you notice any gaps.',
      answer: 'chime in',
      acceptableAlt: ['jump in'],
      explanationKo: '회의 중 자연스럽게 의견을 보태는 구동사는 chime in 또는 jump in입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "그 중요한 이슈를 꺼내 주셔서 감사합니다" 빈칸 구동사 과거형(2단어)을 쓰세요.',
        stimulusEn: "I'm glad you __________ __________ that security issue.",
        answer: 'brought up',
        explanationKo: '안건을 제기하다는 bring up(과거형 brought up)입니다.'
      }
    },
    {
      id: 'd16-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '합의 도출 consensus',
      questionKo: '빈칸에 명사(1단어)를 넣어 "워크숍 번들 안으로 합의에 도달한 것 같네요"를 완성하세요.',
      stimulusEn: "It looks like we've reached a __________ on the workshop bundle.",
      answer: 'consensus',
      explanationKo: '합의에 도달하다는 reach a consensus입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "정확히 핵심을 찔렀어요!" 빈칸 형용사구(2단어: s___ o_)를 쓰세요.',
        stimulusEn: 'Your analysis of Q4 churn was __________ __________.',
        answer: 'spot on',
        explanationKo: '정확히 들어맞거나 핵심을 찌를 때 spot on을 씁니다.'
      }
    },
    {
      id: 'd16-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '완곡한 반론 톤 선택',
      questionKo: '임원 회의에서 동료의 가격 할인 제안에 반대 의견을 제시할 때, 방어적 반발을 최소화하는 가장 세련된 문장은?',
      stimulusEn: '공감 + 완충어 + 대안 관점 구조를 찾으세요.',
      options: [
        'You are completely wrong because discounts destroy profit.',
        "I see where you're coming from; however, I have a few reservations about cutting our margin.",
        'I disagree with your idea and I refuse to support it.',
        'Stop suggesting discounts because finance hates them.'
      ],
      answer: "I see where you're coming from; however, I have a few reservations about cutting our margin.",
      explanationKo: '상대의 의도를 인정한 뒤 however와 have reservations about으로 완곡하게 우려를 전하는 것이 프로페셔널합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "다른 관점에서 바라보다" 빈칸(3단어: f___ a______ a____)을 채우세요.',
        stimulusEn: 'Could we look at this proposal __________ __________ __________?',
        answer: 'from another angle',
        explanationKo: '다른 시각으로 보자는 표현은 from another angle입니다.'
      }
    },
    {
      id: 'd16-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: "devil's advocate 의미 이해",
      questionKo: '회의 중 동료가 "Just to play devil\'s advocate, what if the vendor misses launch?"라고 말했을 때의 정확한 의도는?',
      stimulusEn: '관용구의 비즈니스 토론 맥락을 파악하세요.',
      options: [
        '팀 프로젝트를 의도적으로 방해하고 실패시키려 한다',
        '감정적으로 상대를 비난하기 위해 시비를 건다',
        '의사결정의 허점을 검증하기 위해 일부러 반대 시각의 리스크를 질문한다',
        '변호사를 선임해 벤더사를 고소하자고 제안한다'
      ],
      answer: '의사결정의 허점을 검증하기 위해 일부러 반대 시각의 리스크를 질문한다',
      explanationKo: "play devil's advocate는 팀의 의사결정을 더 탄탄하게 만들기 위해 의도적으로 반대 입장에서 검증 질문을 던지는 건설적 화법입니다.",
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "일부러 반대 입장을 취해 보다" 빈칸 동사(1단어)를 쓰세요.',
        stimulusEn: "Let me __________ devil's advocate for just a second.",
        answer: 'play',
        explanationKo: "동사 play와 결합해 play devil's advocate로 씁니다."
      }
    },
    {
      id: 'd16-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'pushback vs push back 구분',
      questionKo: '다음 문장의 빈칸에 들어갈 형태와 의미가 가장 알맞은 것은?',
      stimulusEn: 'We anticipated strong ______ from enterprise clients when we announced the price hike.',
      options: [
        'pushback (명사 · 반발/이견)',
        'push back (동사 · 일정을 미루다)',
        'pushed back (과거분사 · 연기된)',
        'pushing back (동명사 · 뒤로 밀기)'
      ],
      answer: 'pushback (명사 · 반발/이견)',
      explanationKo: '형용사 strong의 수식을 받는 목적어 자리이므로 "반발·이견"을 뜻하는 명사 pushback이 정답입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 앞사람 아이디어를 이어받아 덧붙이다: _________ on (1단어, p로 시작)',
        stimulusEn: "To __________ on Soojin's suggestion, we could run a two-week pilot.",
        answer: 'piggyback',
        explanationKo: 'piggyback on은 build on과 함께 쓰이는 생생한 미국 오피스 구동사입니다.'
      }
    },
    {
      id: 'd16-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '미국 비즈니스 동사 table',
      questionKo: '미국 본사와의 회의에서 진행자가 "Let\'s table the logo refresh until next Tuesday"라고 했을 때의 정확한 의미는?',
      stimulusEn: '미국 비즈니스 회의에서의 table 용법을 확인하세요.',
      options: [
        '지금 당장 로고 리뉴얼을 끝낼 때까지 회의를 연장하자',
        '로고 리뉴얼 안건은 다음 주 화요일로 잠시 보류해 두자',
        '로고 디자인을 표(table) 형태로 엑셀에 정리하자',
        '로고 리뉴얼 프로젝트를 영구 폐기하자'
      ],
      answer: '로고 리뉴얼 안건은 다음 주 화요일로 잠시 보류해 두자',
      explanationKo: '미국 비즈니스에서 table [안건]은 논의를 나중으로 보류하다(postpone / park)는 뜻입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "완전히 설득됐습니다! 동의해요!"를 뜻하는 2단어 원어민 표현(I\'m ____!)을 쓰세요.',
        stimulusEn: "Great pitch—__________ __________, let's move forward with the bundle!",
        answer: "I'm sold",
        explanationKo: "I'm sold는 상대 제안에 완전히 설득되어 찬성한다는 자연스러운 회화 표현입니다."
      }
    },
    {
      id: 'd16-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '정중한 발언권 요청 표현',
      questionKo: '동료들이 열띤 토론을 이어가고 있을 때 무례해 보이지 않게 발언권을 요청하는 가장 자연스러운 문장은?',
      stimulusEn: '서구권 회의 에티켓에 맞는 발언권 요청을 고르세요.',
      options: [
        'Be quiet now, it is my turn to speak.',
        'May I jump in real quick to build on what Maya just said?',
        'Stop your sentence because I have better opinion.',
        'Wait everybody, I must interrupt your talking.'
      ],
      answer: 'May I jump in real quick to build on what Maya just said?',
      explanationKo: 'May I jump in real quick + to build on what ~ just said 조합은 예의와 주도성을 모두 갖춘 최고의 발언 시작법입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 제안은 타당한 근거가 있습니다" 빈칸 동사(1단어)를 쓰세요.',
        stimulusEn: 'I think David __________ a very valid point about Q4 growth.',
        answer: 'makes',
        explanationKo: '3인칭 단수 David에 맞춰 makes a valid point로 씁니다.'
      }
    },
    {
      id: 'd16-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '발언 이어받기 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 앞사람 의견을 발전시키는 문장을 완성하세요.',
      stimulusEn: "[ build on / Hannah's point, / we could / To / offer a free trial. ]",
      answer: "To build on Hannah's point, we could offer a free trial.",
      explanationKo: "To build on [이름]'s point, + [내 제안] 구조는 회의 참여도를 극대화합니다.",
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "잠깐 끼어들어도 될까요?" (May I / jump in / real quick?)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'May I jump in real quick?',
        explanationKo: '짧고 정중한 발언권 요청 의문문입니다.'
      }
    },
    {
      id: 'd16-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '공감 + 반론 배열',
      questionKo: '주어진 청크를 배열하여 완곡한 반론 문장을 완성하세요.',
      stimulusEn: "[ coming from, / I see / about the timeline. / where you're / but I have reservations ]",
      answer: "I see where you're coming from, but I have reservations about the timeline.",
      explanationKo: '공감 절 뒤에 but I have reservations about [대상]을 연결한 B2 표준 반론 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "다른 관점에서 이것을 보면 어떨까요?" (What if we / look at this / from another angle?)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'What if we look at this from another angle?',
        explanationKo: 'What if we ~ ?로 부드럽게 대안을 제시합니다.'
      }
    },
    {
      id: 'd16-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '동감 & 보류 영작',
      questionKo: '우리말 뜻에 맞게 주어진 단어를 활용해 자연스러운 회의 발언을 완성하세요.',
      stimulusEn: '우리말: 마진을 지켜야 한다는 한나 님 의견에 동감합니다. (I’d like to / echo Hannah’s point / about protecting our margin.)',
      answer: "I'd like to echo Hannah's point about protecting our margin.",
      explanationKo: 'echo [사람]\'s point about ~ 구문으로 동료의 논리에 힘을 실어 줍니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "그 안건은 목요일 회의로 잠시 보류해 두죠." (Let’s table / that topic / until Thursday’s meeting.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "Let's table that topic until Thursday's meeting.",
        explanationKo: '동사 table + 안건 + until [시점] 어순입니다.'
      }
    },
    {
      id: 'd16-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시 교정 서술형',
      questionKo: '다음 직설적 문장을 오늘 배운 완곡 반론 표현(valid point, reservations about)으로 고쳐 쓰세요.',
      stimulusEn: '오류 문장: Your point is okay, but I disagree with the 30% discount.',
      answer: 'You make a valid point, but I have reservations about the 30% discount.',
      acceptableAlt: [
        'That is a valid point, but I have a few reservations about the 30% discount.',
        "That's a valid point, but I have reservations about the 30% discount."
      ],
      explanationKo: '단순 disagree를 have reservations about으로 바꾸면 품격 있는 비즈니스 반론이 됩니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: Your analysis is completely right! → spot on을 써서 5단어로 고치세요.',
        stimulusEn: '힌트: Your analysis ~.',
        answer: 'Your analysis is spot on!',
        explanationKo: 'spot on은 원어민이 회의에서 가장 자주 쓰는 찬사입니다.'
      }
    },
    {
      id: 'd16-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '실전 통문장 영작',
      questionKo: '다음 우리말을 영어로 자연스럽게 작성하세요.',
      stimulusEn: '우리말: 긴 토론 끝에 마침내 합의에 도달한 것 같네요. (힌트: It looks like / we’ve reached a consensus / after a long debate.)',
      answer: "It looks like we've reached a consensus after a long debate.",
      acceptableAlt: ['Looks like we reached a consensus after a long debate.'],
      explanationKo: 'reach a consensus로 회의를 깔끔하게 정리하는 실전 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "그 리스크를 꺼내 주셔서 정말 다행이에요." (I’m really glad / you brought up / that risk.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "I'm really glad you brought up that risk.",
        explanationKo: 'bring up의 과거형 brought up을 활용한 긍정적 리액션입니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "So here's my pitch: to boost sign-ups next month, let's cut our subscription price by 40% across every plan! Everyone onboard with moving ahead on this?",
    openingQuestionKo:
      '제 제안은 이렇습니다: 다음 달 가입자를 늘리기 위해 모든 요금제 가격을 40% 인하합시다! 다들 이대로 진행하는 데 찬성하시죠? (정중히 끼어들어 상대 의도를 인정한 뒤, 마진이나 기존 고객 반발에 대한 우려와 대안을 완곡하게 제시해 보세요!)',
    followUpQuestionEn:
      "You make a really valid point—I hadn't factored in pushback from our annual clients. What alternative would you propose instead of a flat discount?",
    followUpQuestionKo:
      '아주 타당한 지적이네요—기존 연간 고객 반발까지는 미처 계산 못 했어요. 일괄 할인 대신 어떤 대안을 제안하시겠어요?',
    recommendedChunks: [
      'May I jump in real quick?',
      "I see where you're coming from",
      'have a few reservations about',
      "play devil's advocate",
      'pushback from existing clients',
      'look at this from another angle'
    ],
    modelAnswerEn:
      "May I jump in real quick? I totally see where you're coming from on boosting sign-ups, and you make a valid point about urgency. That said, I have a few reservations about a flat 40% cut—just to play devil's advocate, wouldn't existing annual clients push back? What if we look at this from another angle and offer free onboarding workshops instead?"
  }
};
