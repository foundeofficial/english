import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day17Module: DayLessonModule = {
  dayNumber: 17,
  weekNumber: 3,
  cefrLevel: 'b2',
  dayBadge: 'DAY 17 · 건설적 피드백 & 예의 바른 거절',
  categoryLabel: 'Week 3 오피스 실무 · 피드백 화법 & 업무 경계 설정',
  title: '솔직한 피드백 감사해요, 다만 지금은 여력이 꽉 찼습니다',
  subtitle: '감정을 상하지 않게 건설적 피드백(Constructive Feedback)을 주고받고, 업무 과부하(At capacity) 상황에서 프로답게 경계를 지키는 거절 기술',
  heroImage: 'assets/office_sitcom_scene.jpg',
  secondaryImage: 'assets/scene_boardroom_pitch.jpg',
  estimatedSprintMin: 8,
  estimatedLectureMin: 45,
  keyExpression: "I really appreciate the heads-up, though I'm currently at capacity this week.",
  keySentenceByTier: {
    a1: 'Thank you for your feedback. Sorry, I am too busy this week.',
    a2: 'Thanks for telling me early, but I have too much work on my desk right now.',
    b1: "I really appreciate your constructive feedback, though I have a lot on my plate this week.",
    b2: "I really appreciate the heads-up and actionable feedback, though I'm currently at capacity—could we meet halfway on the timeline?",
    c1: "Thank you for sharing such constructive feedback without sugarcoating it; that said, I'm stretched a bit thin right now and would hate to overcommit, so I'll have to pass on the extra deck this week.",
    c2: "I genuinely appreciate you flagging those areas with room for improvement; however, given that I'm at full capacity through Thursday, I'd rather decline the rush request transparently than overcommit and compromise quality."
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[17],
  readingPassage: {
    titleEn: 'Giving Honest Feedback and Saying No Without Burning Bridges',
    titleKo: '[1:1 피드백 가이드] 관계를 지키며 솔직히 피드백하고 정중하게 거절하는 법',
    genreBadge: '1:1 피드백 노트 · Lv.4',
    estimatedMin: 6,
    paragraphsEn: [
      'In high-performing global teams, honest feedback is treated as a gift rather than a personal attack. Still, wording matters tremendously. Instead of telling a colleague "Your deck is confusing," experienced managers frame observations around the work itself: "The narrative is strong overall, though there is room for improvement on slide four—have you considered simplifying the chart so executives can scan it faster?"',
      'Receiving feedback gracefully builds just as much credibility as giving it. Rather than taking criticism personally or jumping straight into excuses, strong professionals respond with curiosity: "I really appreciate the heads-up—that feedback is super actionable, and I will revise the layout whenever I get a chance this afternoon."',
      'Equally vital is knowing how to decline extra requests when you already have too much on your plate. Saying yes to everything eventually leaves you stretched thin and forces you to overcommit. A respectful refusal never burns bridges: acknowledge the request, state clearly that you are at capacity, and offer to meet halfway—for instance, passing on a rush slide deck today while offering a quick review early next week, with no rush on their end.'
    ],
    paragraphsSlash: [
      'In high-performing global teams, / honest feedback is treated as a gift / rather than a personal attack. / Still, wording matters tremendously. / Instead of telling a colleague "Your deck is confusing," / experienced managers frame observations / around the work itself: / "The narrative is strong overall, / though there is room for improvement on slide four— / have you considered simplifying the chart / so executives can scan it faster?"',
      'Receiving feedback gracefully / builds just as much credibility as giving it. / Rather than taking criticism personally / or jumping straight into excuses, / strong professionals respond with curiosity: / "I really appreciate the heads-up— / that feedback is super actionable, / and I will revise the layout / whenever I get a chance this afternoon."',
      'Equally vital is knowing how to decline extra requests / when you already have too much on your plate. / Saying yes to everything / eventually leaves you stretched thin / and forces you to overcommit. / A respectful refusal never burns bridges: / acknowledge the request, / state clearly that you are at capacity, / and offer to meet halfway— / for instance, passing on a rush slide deck today / while offering a quick review early next week, / with no rush on their end.'
    ],
    paragraphsKo: [
      '고성과 글로벌 팀에서 솔직한 피드백은 개인에 대한 공격이 아니라 성장의 선물로 여겨집니다. 그럼에도 말의 표현 방식은 엄청나게 중요합니다. 동료에게 "자료가 너무 헷갈려요"라고 말하는 대신, 노련한 매니저는 사람이 아닌 결과물 자체에 초점을 맞춥니다. "전반적인 스토리라인은 탄탄한데 4번 슬라이드는 개선의 여지가 있어 보여요. 임원들이 더 빨리 훑어볼 수 있도록 차트를 단순화해 보는 건 고려해 보셨나요?"처럼요.',
      '피드백을 의연하게 받아들이는 태도 역시 피드백을 주는 것만큼이나 큰 신뢰를 쌓아줍니다. 지적을 감정적으로 받아들이거나 곧장 변명으로 넘어가기보다, 프로들은 호기심 어린 태도로 응답합니다. "미리 귀띔해 주셔서 정말 감사해요. 바로 실행에 옮길 수 있는 구체적인 피드백이네요. 오늘 오후 짬이 날 때 레이아웃을 수정하겠습니다."',
      '이미 해야 할 일이 산더미처럼 쌓여 있을 때 추가 업무 요청을 거절할 줄 아는 것도 똑같이 중요합니다. 모든 요청에 무조건 예스라고 답하다 보면 결국 여력이 한계까지 흩어지고 무리하게 약속을 떠안게 됩니다. 예의 바른 거절은 결코 관계를 망치지 않습니다. 요청을 존중하되 현재 업무량이 최대치임을 명확히 밝히고, 오늘 급한 발표 자료 제작은 정중히 사양하는 대신 다음 주 초에 빠른 리뷰를 도와주는 식으로 타협점을 제안해 보세요.'
    ],
    keyExpressions: [
      'room for improvement',
      'have you considered ~?',
      'appreciate the heads-up',
      'take ~ personally',
      'at capacity / on my plate',
      'meet halfway / burn bridges'
    ],
    comprehensionQuiz: [
      {
        id: 'd17-rq01',
        questionKo: '노련한 매니저가 "Your deck is confusing" 대신 사용하는 건설적 피드백 전략은 무엇인가요?',
        options: [
          '동료가 상처받지 않도록 단점은 아예 언급하지 않는다',
          '사람이 아닌 결과물에 초점을 맞추고 "Have you considered ~?" 같은 제안 질문으로 풀어낸다',
          '팀 전체가 보는 공개 채널에서 잘못된 슬라이드를 지적한다',
          '동료 대신 매니저가 직접 모든 슬라이드를 다시 제작한다'
        ],
        answer: '사람이 아닌 결과물에 초점을 맞추고 "Have you considered ~?" 같은 제안 질문으로 풀어낸다',
        explanationKo: '첫째 문단 "frame observations around the work itself ... have you considered simplifying the chart"가 핵심 전략입니다.'
      },
      {
        id: 'd17-rq02',
        questionKo: '모든 업무 요청에 무조건 승낙(yes)할 때 생기는 부작용으로 본문이 지적한 것은?',
        options: [
          '동료들과의 관계가 영구적으로 단절된다',
          '여력이 한계까지 분산되고(stretched thin) 감당 못 할 약속을 떠안게(overcommit) 된다',
          '승진 심사에 즉시 불이익이 발생한다',
          '피드백을 받을 기회를 영원히 잃게 된다'
        ],
        answer: '여력이 한계까지 분산되고(stretched thin) 감당 못 할 약속을 떠안게(overcommit) 된다',
        explanationKo: '셋째 문단 "Saying yes to everything eventually leaves you stretched thin and forces you to overcommit"을 확인하세요.'
      },
      {
        id: 'd17-rq03',
        questionKo: '본문에서 "서로 한 발씩 양보해 타협점을 찾다"를 뜻하는 원어민 표현은?',
        options: ['burn bridges', 'pass on', 'meet halfway', 'take personally'],
        answer: 'meet halfway',
        explanationKo: 'meet (someone) halfway는 양측이 조금씩 양보하여 현실적 타협점을 찾는다는 핵심 비즈니스 표현입니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd17-v01',
      word: 'constructive feedback',
      phonetic: '/kənˈstrʌktɪv ˈfiːdbæk/',
      pos: '명사구',
      cefr: 'b2',
      meaningKo: '발전을 돕는 건설적인 피드백',
      meaningEn: 'helpful, specific advice aimed at improving future performance',
      nuanceTipKo: '단순 비난(criticism)과 구분되는 표현! "I\'m always open to constructive feedback"이라고 말하면 성장 마인드셋을 보여줄 수 있습니다.',
      exampleEn: 'Thank you for giving me such clear, constructive feedback after the demo.',
      exampleKo: '데모 발표 후 이렇게 명확하고 건설적인 피드백을 주셔서 감사합니다.'
    },
    {
      id: 'd17-v02',
      word: 'appreciate the heads-up',
      phonetic: '/əˈpriːʃieɪt ðə ˈhedz ʌp/',
      pos: '동사 구문',
      cefr: 'b2',
      meaningKo: '미리 알려줘서(귀띔해 줘서) 고맙다',
      meaningEn: 'be grateful for an advance warning or early notice',
      nuanceTipKo: '주의! "I appreciate you"보다 "I appreciate + [사물/행동(the heads-up / your feedback)]" 형태가 훨씬 자연스럽고 정중합니다.',
      exampleEn: 'I really appreciate the heads-up—I will adjust the slides before tomorrow.',
      exampleKo: '미리 귀띔해 주셔서 정말 감사합니다. 내일 전까지 슬라이드를 수정하겠습니다.'
    },
    {
      id: 'd17-v03',
      word: 'at capacity',
      phonetic: '/æt kəˈpæsəti/',
      pos: '전치사구',
      cefr: 'b2',
      meaningKo: '(업무량이) 최대치에 달한, 더 맡을 여력이 없는',
      meaningEn: 'operating at maximum workload with no room to take on additional tasks',
      nuanceTipKo: '"I\'m too busy"는 감정적이고 막연하게 들립니다. "I\'m currently at capacity this week"라고 하면 객관적이고 프로페셔널한 거절이 됩니다.',
      exampleEn: "I'd love to help, but I'm completely at capacity through Thursday.",
      exampleKo: '도와드리고 싶지만 목요일까지는 현재 업무량이 완전히 꽉 찬 상태입니다.'
    },
    {
      id: 'd17-v04',
      word: "have a lot on one's plate",
      phonetic: '/hæv ə lɑːt ɑːn wʌnz pleɪt/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '해야 할 일이 접시에 산더미처럼 쌓여 있다',
      meaningEn: 'have many demanding tasks or responsibilities to manage at once',
      nuanceTipKo: '뷔페 접시(plate)에 음식이 넘칠 듯 담긴 이미지! "I have a lot on my plate right now"는 동료 간 공감대를 끌어내는 만능 표현입니다.',
      exampleEn: 'With the launch and hiring interviews, I have a lot on my plate this sprint.',
      exampleKo: '출시 준비에 채용 면접까지 겹쳐서 이번 스프린트에 할 일이 산더미처럼 쌓여 있어요.'
    },
    {
      id: 'd17-v05',
      word: 'room for improvement',
      phonetic: '/ruːm fɔːr ɪmˈpruːvmənt/',
      pos: '명사구',
      cefr: 'b2',
      meaningKo: '개선의 여지, 더 나아질 수 있는 부분',
      meaningEn: 'areas where something can be made better',
      nuanceTipKo: '부족함을 "bad / weak"라고 직격하지 않고 "There\'s still some room for improvement in ~"으로 감싸면 반감 없이 피드백을 전할 수 있습니다.',
      exampleEn: 'Your presentation delivery was great, though there is room for improvement on pacing.',
      exampleKo: '발표 전달력은 훌륭했지만, 속도 조절 면에서는 조금 개선의 여지가 있습니다.'
    },
    {
      id: 'd17-v06',
      word: 'actionable',
      phonetic: '/ˈækʃənəbl/',
      pos: '형용사',
      cefr: 'b2',
      meaningKo: '구체적으로 바로 실행에 옮길 수 있는',
      meaningEn: 'specific and practical enough to act on right away',
      nuanceTipKo: '좋은 피드백을 칭찬할 때 "That feedback is super actionable!"이라고 쓰면 미국 오피스 원어민 감성이 그대로 살아납니다.',
      exampleEn: 'Claire always shares specific, actionable takeaways during our 1-on-1s.',
      exampleKo: '클레어는 1:1 미팅 때 늘 구체적이고 바로 실행 가능한 시사점을 공유해 줍니다.'
    },
    {
      id: 'd17-v07',
      word: 'take ~ personally',
      phonetic: '/teɪk ˈpɜːrsənəli/',
      pos: '동사 구문',
      cefr: 'b1',
      meaningKo: '(지적·거절을) 개인적 공격으로 감정적으로 받아들이다',
      meaningEn: 'react emotionally to criticism as if it were an attack on you as a person',
      nuanceTipKo: '피드백할 때 "Please don\'t take this personally" 또는 받을 때 "I won\'t take it personally—be honest!"로 심리적 안전감을 만듭니다.',
      exampleEn: "Please don't take this personally—the edits are purely to match client guidelines.",
      exampleKo: '개인적인 지적으로 받아들이지 마세요, 수정 사항은 순전히 클라이언트 가이드라인에 맞추기 위한 거예요.'
    },
    {
      id: 'd17-v08',
      word: 'stretched thin',
      phonetic: '/stretʃt θɪn/',
      pos: '형용사구',
      cefr: 'c1',
      meaningKo: '(시간·인력이) 너무 여러 곳에 분산되어 한계에 다다른',
      meaningEn: 'spread across too many tasks or projects to perform comfortably',
      nuanceTipKo: '버터를 넓은 빵에 너무 얇게 펴 바른 이미지에서 온 표현! "Our team is stretched pretty thin right now"처럼 씁니다.',
      exampleEn: 'With two teammates on leave, our design team is stretched really thin this month.',
      exampleKo: '팀원 두 명이 휴가 중이라 이번 달 우리 디자인 팀 여력이 정말 한계에 다다랐습니다.'
    },
    {
      id: 'd17-v09',
      word: 'overcommit',
      phonetic: '/ˌoʊvərkəˈmɪt/',
      pos: '동사',
      cefr: 'b2',
      meaningKo: '감당할 수 없을 만큼 무리하게 약속·업무를 떠안다',
      meaningEn: 'promise to take on more work than you can realistically deliver',
      nuanceTipKo: '거절의 명분을 "품질 보호"로 프레이밍할 때 "I don\'t want to overcommit and miss the deadline"이 최고의 설득 문장입니다.',
      exampleEn: "I'd rather be upfront now than overcommit and deliver rushed work.",
      exampleKo: '무리하게 떠안았다가 완성도 낮은 결과물을 내느니 지금 솔직히 말씀드리는 게 낫겠습니다.'
    },
    {
      id: 'd17-v10',
      word: 'meet (someone) halfway',
      phonetic: '/miːt ˈhæfweɪ/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '서로 한 발씩 양보해 중간 타협점을 찾다',
      meaningEn: 'reach a compromise where both sides adjust their expectations',
      nuanceTipKo: '전부 거절하기 어려울 때 "I can\'t write the whole deck, but let me meet you halfway and review your draft"처럼 쓰면 협업 점수가 만점이 됩니다.',
      exampleEn: "I can't lead the full audit this week, but I can meet you halfway by reviewing the key metrics.",
      exampleKo: '이번 주 전체 감사를 주도하긴 어렵지만, 핵심 지표 검토를 맡는 선에서 타협점을 맞춰볼 수 있어요.'
    },
    {
      id: 'd17-v11',
      word: 'have you considered ~?',
      phonetic: '/hæv juː kənˈsɪdərd/',
      pos: '의문 구문',
      cefr: 'b2',
      meaningKo: '~하는 방안도 고려해 보셨나요? (부드러운 피드백 제안)',
      meaningEn: 'a polite, non-directive way to suggest an improvement or alternative',
      nuanceTipKo: '상대방의 자존심을 지켜주며 개선점을 제안하는 최고의 피드백 공식! 뒤에는 반드시 동명사(V-ing)나 명사가 옵니다.',
      exampleEn: 'Have you considered opening the presentation with the customer quote instead?',
      exampleKo: '발표를 고객 인용구로 시작하는 방안도 고려해 보셨나요?'
    },
    {
      id: 'd17-v12',
      word: 'no rush',
      phonetic: '/noʊ rʌʃ/',
      pos: '관용구',
      cefr: 'b1',
      meaningKo: '급하지 않으니 천천히 하세요',
      meaningEn: 'there is no urgency; take your time responding',
      nuanceTipKo: '동료에게 부탁할 때 "No rush at all!"을 덧붙이면 상대방의 심리적 부담을 확 낮춰 줍니다.',
      exampleEn: 'Could you share the updated slides by Friday? No rush at all!',
      exampleKo: '금요일까지 수정된 슬라이드 공유해 주실 수 있을까요? 전혀 급하지 않아요!'
    },
    {
      id: 'd17-v13',
      word: 'whenever you get a chance',
      phonetic: '/wenˈevər juː ɡet ə tʃæns/',
      pos: '부사절',
      cefr: 'b1',
      meaningKo: '시간 나실 때 편하게 (부담 없는 요청)',
      meaningEn: 'at any convenient moment when you have a free minute',
      nuanceTipKo: 'no rush와 단짝으로 쓰이는 미국 오피스 배려 표현! 슬랙 요청 끝에 붙이면 톤이 한결 부드러워집니다.',
      exampleEn: 'Feel free to drop your comments in the doc whenever you get a chance.',
      exampleKo: '시간 나실 때 편하게 문서에 코멘트 남겨 주세요.'
    },
    {
      id: 'd17-v14',
      word: 'pass on (a request)',
      phonetic: '/pæs ɑːn/',
      pos: '구동사',
      cefr: 'b2',
      meaningKo: '(제안·추가 업무를) 정중히 사양하다, 이번엔 건너뛰다',
      meaningEn: 'politely decline an invitation, offer, or extra assignment',
      nuanceTipKo: '"I reject your request"는 절대 금물! "I\'ll have to pass on this one"으로 담백하고 매너 있게 거절하세요.',
      exampleEn: "Unfortunately, I'll have to pass on joining the side committee this quarter.",
      exampleKo: '아쉽게도 이번 분기에는 별도 위원회 참여는 정중히 사양해야 할 것 같습니다.'
    },
    {
      id: 'd17-v15',
      word: 'burn bridges',
      phonetic: '/bɜːrn ˈbrɪdʒɪz/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '관계를 완전히 망쳐 되돌릴 수 없게 만들다',
      meaningEn: 'permanently damage a professional relationship through harsh words or actions',
      nuanceTipKo: '건너온 다리를 불태워 다시 못 돌아가게 만든다는 비유! 퇴사·거절·갈등 상황에서 "without burning bridges"로 자주 씁니다.',
      exampleEn: 'Learning to say no clearly without burning bridges is a key leadership skill.',
      exampleKo: '관계를 망치지 않으면서도 명확하게 거절하는 법을 익히는 것은 핵심 리더십 역량입니다.'
    }
  ],
  dialogue: [
    {
      id: 'd17-t01',
      speaker: 'Claire',
      roleLabel: '디자인 매니저',
      voicePitch: 1.05,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'zoom-in',
      english: 'Hey Eunji, thanks for walking through the usability deck earlier. Overall the insights were super clear—do you have a minute for some quick feedback?',
      slashBroken: 'Hey Eunji, / thanks for walking through the usability deck earlier. / Overall the insights were super clear— / do you have a minute / for some quick feedback?',
      korean: '은지 님, 아까 사용성 조사 자료 설명해 줘서 고마워요. 전반적으로 인사이트가 아주 명확했어요. 짧은 피드백 나눌 시간 잠깐 괜찮을까요?',
      keyHighlight: 'do you have a minute for some quick feedback?',
      noteKo: '긍정적 강점을 먼저 짚고 피드백을 나눌 준비가 됐는지 묻는 것이 신뢰 기반 1:1 화법의 시작입니다.'
    },
    {
      id: 'd17-t02',
      speaker: 'Eunji',
      roleLabel: '시니어 UX 리서처',
      voicePitch: 1.10,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-right',
      english: "Of course! I'm always open to constructive feedback—please be completely honest, I won't take it personally.",
      slashBroken: "Of course! / I'm always open to constructive feedback— / please be completely honest, / I won't take it personally.",
      korean: '물론이죠! 건설적인 피드백은 언제든 환영이에요. 개인적으로 받아들이지 않을 테니 완전히 솔직하게 말씀해 주세요.',
      keyHighlight: "I'm always open to constructive feedback",
      noteKo: '"won\'t take it personally" 한마디로 피드백하는 상대방의 심리적 부담을 확 내려줍니다.'
    },
    {
      id: 'd17-t03',
      speaker: 'Claire',
      roleLabel: '디자인 매니저',
      voicePitch: 1.05,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-left',
      english: 'Awesome. There is a bit of room for improvement on the data slides—have you considered trimming the bullet points so executives can scan them faster?',
      slashBroken: 'Awesome. / There is a bit of room for improvement / on the data slides— / have you considered trimming the bullet points / so executives can scan them faster?',
      korean: '좋아요. 데이터 슬라이드 쪽에 조금 개선의 여지가 있어 보이는데요, 임원들이 더 빨리 훑어볼 수 있게 불릿 항목을 줄여보는 건 고려해 보셨나요?',
      keyHighlight: 'have you considered trimming the bullet points',
      noteKo: '"room for improvement" + "have you considered + V-ing?"은 명령조 없는 완벽한 건설적 피드백 공식입니다.'
    },
    {
      id: 'd17-t04',
      speaker: 'Eunji',
      roleLabel: '시니어 UX 리서처',
      voicePitch: 1.10,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'zoom-in',
      english: "Ooh, I really appreciate the heads-up! That's super actionable—I'll tighten slides five and six whenever I get a chance this afternoon.",
      slashBroken: "Ooh, I really appreciate the heads-up! / That's super actionable— / I'll tighten slides five and six / whenever I get a chance this afternoon.",
      korean: '오, 미리 귀띔해 주셔서 정말 감사해요! 바로 실행할 수 있는 구체적인 피드백이네요. 오늘 오후 짬이 날 때 5·6번 슬라이드를 압축해 둘게요.',
      keyHighlight: 'I really appreciate the heads-up',
      noteKo: '감사(appreciate the heads-up) + 인정(super actionable) + 실행 계획(I\'ll tighten ~)의 프로다운 피드백 수용 3단계입니다.'
    },
    {
      id: 'd17-t05',
      speaker: 'Claire',
      roleLabel: '디자인 매니저',
      voicePitch: 1.05,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-right',
      english: 'No rush at all—tomorrow morning works too. Oh, by the way, sales asked if someone could also put together an extra competitor deck by Thursday. Could you take that on?',
      slashBroken: 'No rush at all— / tomorrow morning works too. / Oh, by the way, / sales asked if someone could also put together / an extra competitor deck by Thursday. / Could you take that on?',
      korean: '전혀 급하지 않아요, 내일 오전도 괜찮아요. 아 참, 세일즈 팀에서 목요일까지 경쟁사 분석 자료를 추가로 만들어 줄 사람이 있는지 묻던데, 혹시 맡아주실 수 있을까요?',
      keyHighlight: 'No rush at all',
      noteKo: 'take ~ on은 새로운 프로젝트나 업무를 떠맡다는 필수 오피스 구동사입니다.'
    },
    {
      id: 'd17-t06',
      speaker: 'Eunji',
      roleLabel: '시니어 UX 리서처',
      voicePitch: 1.10,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-left',
      english: "I'd love to support sales, Claire, but I'm currently at capacity with user interviews and have a lot on my plate. I don't want to overcommit, so I'll have to pass on building the deck this week.",
      slashBroken: "I'd love to support sales, Claire, / but I'm currently at capacity / with user interviews / and have a lot on my plate. / I don't want to overcommit, / so I'll have to pass on building the deck / this week.",
      korean: '세일즈 팀을 도와드리고 싶지만 클레어, 지금 사용자 인터뷰로 업무량이 최대치이고 할 일이 정말 많아요. 무리하게 떠안고 싶지 않아서 이번 주 자료 제작은 정중히 사양해야 할 것 같아요.',
      keyHighlight: "I'm currently at capacity",
      noteKo: '협업 의지 표명(I\'d love to ~) → 객관적 한계(at capacity) → 품질 보호 명분(don\'t want to overcommit) → 정중한 거절(pass on) 순서를 기억하세요.'
    },
    {
      id: 'd17-t07',
      speaker: 'Eunji',
      roleLabel: '시니어 UX 리서처',
      voicePitch: 1.10,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english: 'That said, I can meet them halfway—if they draft the outline, I can review the UX section early next week.',
      slashBroken: 'That said, / I can meet them halfway— / if they draft the outline, / I can review the UX section / early next week.',
      korean: '그렇긴 하지만 중간 타협점은 맞출 수 있어요. 그쪽에서 개요 초안을 잡아주면 제가 다음 주 초에 UX 파트를 검토해 드릴 수 있습니다.',
      keyHighlight: 'meet them halfway',
      noteKo: '거절 뒤에 현실적인 타협안(meet them halfway)을 붙이면 경계를 지키면서도 팀워크 신뢰도가 올라갑니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 상처 주지 않는 건설적 피드백 공식: "You should fix" → "Have you considered + V-ing?"',
      coreFormula: 'There is room for improvement on [결과물] + Have you considered + [동명사 V-ing]?',
      wrongKonglish: 'Your slides are messy. You must reduce the text immediately.',
      rightNative: 'There is a bit of room for improvement on the data slides—have you considered trimming the bullet points?',
      explanationKo:
        '피드백할 때 "You are / You must"로 사람에게 화살을 돌리면 방어 심리가 발동합니다. 대신 ① 결과물(the slides)을 주어로 "room for improvement"라고 부드럽게 짚고, ② 동사 consider 뒤에 동명사(V-ing)를 붙여 "Have you considered trimming ~?"으로 질문형 제안을 건네면 상대가 주도적으로 개선안을 수용합니다.',
      registerSpectrum: {
        casual: 'Love the story here—maybe we could trim slide four a bit so it pops more?',
        standard: 'There is room for improvement on the data slides—have you considered trimming the bullet points?',
        formal: 'While the analysis is compelling, we might strengthen executive readability by streamlining the key takeaways on slide four.'
      }
    },
    {
      title: '원리 02 · 관계를 지키는 업무 거절 3단 방패: [공감] + [객관적 한계] + [타협안]',
      coreFormula: "I'd love to help, but I'm at capacity / have a lot on my plate → I don't want to overcommit → I can meet you halfway by ~",
      wrongKonglish: "No, I'm too busy so I can't do your extra work. Ask another person.",
      rightNative: "I'd love to help, but I'm currently at capacity this week and don't want to overcommit—I can meet you halfway by reviewing your draft next Monday.",
      explanationKo:
        '단순히 "I\'m too busy"라고 하면 협조하기 싫다는 느낌을 줄 수 있습니다. 현재 업무 최대치(at capacity / stretched thin)라는 객관적 사실을 알리고, "품질 저하를 막기 위해 무리하게 약속하지 않겠다(don\'t want to overcommit)"는 프로의 원칙을 밝힌 뒤 작은 타협안(meet you halfway)을 제시하면 결코 관계를 망치지(burn bridges) 않습니다.',
      registerSpectrum: {
        casual: "I'd love to jump in, but my plate is totally full this week—could I review it Monday instead?",
        standard: "I'm currently at capacity and will have to pass on building the deck, though I can meet you halfway by reviewing the draft next week.",
        formal: 'While I appreciate you thinking of me for this initiative, my current workload is at full capacity; to avoid overcommitting, I must respectfully pass this week, though I would be glad to advise early next week.'
      }
    },
    {
      title: '원리 03 · appreciate 문법 함정 & 배려 완충어(no rush / whenever you get a chance)',
      coreFormula: 'appreciate + [명사 / 소유격·목적격 + V-ing] (X: appreciate you to V / appreciate to V)',
      wrongKonglish: 'I really appreciate you to tell me early about this problem.',
      rightNative: 'I really appreciate you giving me a heads-up early about this issue.',
      explanationKo:
        '한국인이 이메일과 회의에서 가장 자주 저지르는 동사 오류 중 하나가 appreciate 뒤에 to부정사를 쓰는 것입니다! appreciate는 반드시 명사("appreciate the heads-up / your feedback")나 동명사("appreciate you flagging this / your helping out")만 목적어로 취합니다.',
      registerSpectrum: {
        casual: 'Really appreciate the heads-up—no rush on the edits!',
        standard: 'I really appreciate you giving me a heads-up; feel free to share updates whenever you get a chance.',
        formal: 'I sincerely appreciate your timely heads-up and constructive feedback on this matter.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd17-s01',
      drillType: 'chunk-build',
      promptKo: '미리 귀띔해 주셔서 정말 감사해요.',
      promptEnHint: 'really appreciate + the heads-up 조합을 만드세요.',
      targetEn: 'I really appreciate the heads-up.',
      chunks: ['I', 'really appreciate', 'the heads-up.'],
      explanationKo: '상대방의 사전 안내나 조기 피드백에 고마움을 전하는 최빈출 표현입니다.'
    },
    {
      id: 'd17-s02',
      drillType: 'konglish-fix',
      promptKo: '"일찍 알려주셔서 정말 감사합니다."',
      promptEnHint: '동사 appreciate 뒤에 올 수 있는 올바른 목적어 형태를 고르세요.',
      targetEn: 'I really appreciate you telling me early.',
      wrongKonglishOption: 'I really appreciate you to tell me early.',
      explanationKo: 'appreciate는 to부정사가 아니라 명사 또는 동명사(telling)를 목적어로 취합니다.'
    },
    {
      id: 'd17-s03',
      drillType: 'active-blank',
      promptKo: '이번 주에는 업무량이 최대치라 더 맡기 어렵습니다.',
      promptEnHint: '업무량이 꽉 찬 상태: at ________ (8글자)',
      targetEn: "I'm currently at capacity this week.",
      blankData: {
        before: "I'm currently at",
        answer: 'capacity',
        after: 'this week.',
        firstLetterHint: 'c_______ (8글자)'
      },
      explanationKo: 'too busy 대신 객관적으로 업무 한계를 알리는 전문 표현은 at capacity입니다.'
    },
    {
      id: 'd17-s04',
      drillType: 'chunk-build',
      promptKo: '차트를 단순화해 보는 방안도 고려해 보셨나요?',
      promptEnHint: 'Have you considered + V-ing 피드백 공식을 조립하세요.',
      targetEn: 'Have you considered simplifying the chart?',
      chunks: ['Have you', 'considered', 'simplifying', 'the chart?'],
      explanationKo: 'consider 뒤에는 반드시 동명사(simplifying)가 와야 하며, 부드러운 제안 질문이 됩니다.'
    },
    {
      id: 'd17-s05',
      drillType: 'active-blank',
      promptKo: '개인적인 지적으로 받아들이지 않으셨으면 해요.',
      promptEnHint: '감정적·개인적으로 받아들이다: take this __________ (10글자)',
      targetEn: "Please don't take this personally.",
      blankData: {
        before: "Please don't take this",
        answer: 'personally',
        after: '.',
        firstLetterHint: 'p_________ (10글자)'
      },
      explanationKo: 'take ~ personally는 피드백을 인신공격으로 받아들인다는 핵심 표현입니다.'
    },
    {
      id: 'd17-s06',
      drillType: 'konglish-fix',
      promptKo: '"이번 주에 해야 할 일이 산더미처럼 쌓여 있어요."',
      promptEnHint: '업무가 가득 쌓였음을 뜻하는 원어민 접시 비유 관용구를 고르세요.',
      targetEn: 'I have a lot on my plate this week.',
      wrongKonglishOption: 'I have a lot on my bowl this week.',
      explanationKo: '할 일이 산더미처럼 많다는 관용구는 have a lot on my plate입니다.'
    },
    {
      id: 'd17-s07',
      drillType: 'chunk-build',
      promptKo: '데이터 슬라이드 쪽에 조금 개선의 여지가 있어요.',
      promptEnHint: 'room for improvement + on the data slides를 연결하세요.',
      targetEn: 'There is room for improvement on the data slides.',
      chunks: ['There is', 'room for improvement', 'on the', 'data slides.'],
      explanationKo: '직설적 비판 대신 room for improvement로 성장 가능성에 초점을 맞춥니다.'
    },
    {
      id: 'd17-s08',
      drillType: 'active-blank',
      promptKo: '무리하게 떠안았다가 마감을 놓치고 싶지는 않아요.',
      promptEnHint: '감당 못 할 만큼 무리하게 약속하다: o_________ (10글자)',
      targetEn: "I don't want to overcommit and miss the deadline.",
      blankData: {
        before: "I don't want to",
        answer: 'overcommit',
        after: 'and miss the deadline.',
        firstLetterHint: 'o_________ (10글자)'
      },
      explanationKo: 'overcommit은 책임감 있는 거절의 명분으로 최고의 동사입니다.'
    },
    {
      id: 'd17-s09',
      drillType: 'konglish-fix',
      promptKo: '"초안을 잡아주시면 제가 검토하는 선에서 타협점을 맞춰볼게요."',
      promptEnHint: '"서로 한 발씩 양보해 타협하다"의 정확한 관용구를 고르세요.',
      targetEn: 'I can meet you halfway by reviewing your draft.',
      wrongKonglishOption: 'I can meet you half-road by reviewing your draft.',
      explanationKo: '타협점을 찾다는 meet (someone) halfway입니다.'
    },
    {
      id: 'd17-s10',
      drillType: 'chunk-build',
      promptKo: '전혀 급하지 않으니 시간 나실 때 편하게 공유해 주세요.',
      promptEnHint: 'No rush + whenever you get a chance를 조립하세요.',
      targetEn: 'No rush, share it whenever you get a chance.',
      chunks: ['No rush,', 'share it', 'whenever you', 'get a chance.'],
      explanationKo: '상대방의 부담을 낮추는 배려 표현 2종 세트입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd17-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '업무 포화 at capacity',
      questionKo: '빈칸에 전치사구(2단어)를 넣어 "목요일까지는 현재 업무량이 최대치입니다"를 완성하세요.',
      stimulusEn: "I'd love to help, but I'm completely __________ __________ through Thursday.",
      answer: 'at capacity',
      explanationKo: '업무량이 꽉 차 더 맡을 여유가 없는 상태를 at capacity라고 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이번 스프린트에 해야 할 일이 산더미처럼 많아요" 빈칸(3단어: o_ m_ p____)을 채우세요.',
        stimulusEn: 'I already have a lot __________ __________ __________ this sprint.',
        answer: 'on my plate',
        explanationKo: 'have a lot on my plate는 업무 과부하를 전하는 대표 관용구입니다.'
      }
    },
    {
      id: 'd17-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '건설적 피드백 constructive / actionable',
      questionKo: '빈칸에 형용사(1단어)를 넣어 "건설적인 피드백은 언제든 환영입니다"를 완성하세요.',
      stimulusEn: "I'm always open to __________ feedback.",
      answer: 'constructive',
      explanationKo: '발전을 돕는 건설적 피드백은 constructive feedback입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "바로 실행에 옮길 수 있는 구체적인 피드백이에요" 빈칸 형용사(1단어: a_________)를 쓰세요.',
        stimulusEn: 'Thanks—that feedback is super __________!',
        answer: 'actionable',
        explanationKo: '구체적으로 바로 실행 가능하다는 뜻의 형용사는 actionable입니다.'
      }
    },
    {
      id: 'd17-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '개선의 여지 room for improvement',
      questionKo: '빈칸에 3단어를 넣어 "속도 조절 면에서 아직 개선의 여지가 있습니다"를 완성하세요.',
      stimulusEn: 'There is still some __________ __________ __________ in pacing.',
      answer: 'room for improvement',
      explanationKo: '비난 대신 성장 가능성을 짚는 완곡한 피드백 표현은 room for improvement입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "개인적 공격으로 받아들이지 마세요" 빈칸 부사(1단어)를 쓰세요.',
        stimulusEn: "Please don't take this __________—it's just about the layout.",
        answer: 'personally',
        explanationKo: 'take ~ personally는 감정적으로 받아들이다는 뜻입니다.'
      }
    },
    {
      id: 'd17-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '타협점 찾기 meet halfway',
      questionKo: '빈칸에 2단어를 넣어 "초안을 검토해 드리는 선에서 타협점을 맞춰볼 수 있어요"를 완성하세요.',
      stimulusEn: 'I can __________ you __________ by reviewing the outline next Monday.',
      answer: 'meet halfway',
      explanationKo: '서로 한 발씩 양보해 타협하다는 meet [사람] halfway입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이번 주 자료 제작은 정중히 사양해야 할 것 같아요" 빈칸 구동사(2단어)를 쓰세요.',
        stimulusEn: "I'll have to __________ __________ building the extra deck this week.",
        answer: 'pass on',
        explanationKo: '제안이나 업무를 정중히 사양하다는 pass on입니다.'
      }
    },
    {
      id: 'd17-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '인력 분산 stretched thin / overcommit',
      questionKo: '빈칸에 2단어를 넣어 "팀원 두 명이 휴가 중이라 우리 팀 여력이 한계에 다다랐습니다"를 완성하세요.',
      stimulusEn: 'With two teammates away, our team is __________ __________ this month.',
      answer: 'stretched thin',
      explanationKo: '인력이나 시간이 너무 여러 곳에 분산되어 한계에 다다른 상태를 stretched thin이라고 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "관계를 완전히 망치지 않으면서 거절하는 법" 빈칸(2단어: b______ b______)을 채우세요.',
        stimulusEn: 'It is important to say no clearly without __________ __________.',
        answer: 'burning bridges',
        explanationKo: '전치사 without 뒤이므로 동명사 형태인 burning bridges가 정확합니다.'
      }
    },
    {
      id: 'd17-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'appreciate 동사 목적어 어법',
      questionKo: '다음 중 동사 appreciate의 어법이 100% 올바른 문장은?',
      stimulusEn: 'appreciate 뒤에 올 수 있는 형태(명사/동명사)를 확인하세요.',
      options: [
        'I really appreciate you to give me a heads-up.',
        'I really appreciate to receive your constructive feedback.',
        'I really appreciate you giving me a heads-up early.',
        'I appreciate that you to review my draft.'
      ],
      answer: 'I really appreciate you giving me a heads-up early.',
      explanationKo: 'appreciate는 to부정사를 목적어로 받지 않으며, 명사 또는 동명사(you giving me ~)를 취합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "미리 귀띔해 주셔서 정말 감사합니다" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'I really appreciate __________ __________.',
        answer: 'the heads-up',
        explanationKo: 'appreciate the heads-up은 가장 빈도 높은 감사 표현입니다.'
      }
    },
    {
      id: 'd17-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'Have you considered + V-ing',
      questionKo: '동료의 발표 자료를 더 간결하게 바꾸도록 부드럽게 제안할 때 어법과 뉘앙스가 모두 완벽한 문장은?',
      stimulusEn: '동사 consider의 목적어 형태에 주의하세요.',
      options: [
        'Have you considered to trim the bullet points?',
        'Have you considered trimming the bullet points?',
        'You must trim your messy bullet points right now.',
        'Did you consider that trim the bullet points?'
      ],
      answer: 'Have you considered trimming the bullet points?',
      explanationKo: '동사 consider는 동명사(V-ing)를 목적어로 취하며, "Have you considered + V-ing?"는 최고의 완곡 피드백 공식입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "차트를 단순화해 보는 건 고려해 보셨나요?" 빈칸 동명사(1단어)를 쓰세요.',
        stimulusEn: 'Have you considered __________ the chart on slide four?',
        answer: 'simplifying',
        explanationKo: 'simplify의 동명사형 simplifying을 씁니다.'
      }
    },
    {
      id: 'd17-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '관계 손상 없는 업무 거절',
      questionKo: '업무가 꽉 찬 상태에서 타 부서의 급한 자료 요청을 정중하고 프로답게 거절하는 최고의 문장은?',
      stimulusEn: '공감 + 객관적 한계 + 타협안 구조를 찾으세요.',
      options: [
        'No, I am too busy and your request is not my job.',
        "I'd love to help, but I'm at capacity this week and don't want to overcommit—I can review a draft on Monday.",
        'Stop sending me extra decks because I hate overtime.',
        'Maybe I will do it, even though I know I will miss the deadline.'
      ],
      answer: "I'd love to help, but I'm at capacity this week and don't want to overcommit—I can review a draft on Monday.",
      explanationKo: '감정적 거절이나 무리한 승낙 대신, 현재 한계(at capacity)와 품질 보호(overcommit 방지), 현실적 대안을 함께 제시합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "무리하게 약속을 떠안다"를 뜻하는 동사(1단어: o_________)를 쓰세요.',
        stimulusEn: "I'd rather be transparent than __________ and deliver rushed work.",
        answer: 'overcommit',
        explanationKo: '과도하게 업무를 떠안다는 overcommit입니다.'
      }
    },
    {
      id: 'd17-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '배려 완충어 no rush / whenever',
      questionKo: '바쁜 동료에게 문서 검토를 부탁하면서 "전혀 급하지 않으니 시간 나실 때 편하게 봐주세요"라고 덧붙일 때 가장 자연스러운 것은?',
      stimulusEn: '상대방의 압박감을 낮추는 원어민 매너 표현을 고르세요.',
      options: [
        'No rush at all—feel free to take a look whenever you get a chance.',
        'Do not run fast—look whenever your time is empty.',
        'Slowly check it when you are boring.',
        'I expect your feedback ASAP with no excuse.'
      ],
      answer: 'No rush at all—feel free to take a look whenever you get a chance.',
      explanationKo: 'No rush at all과 whenever you get a chance는 미국 직장인들이 슬랙과 이메일에서 매일 쓰는 배려 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "시간 나실 때 편하게" 빈칸 3단어(g__ a c_____)를 완성하세요.',
        stimulusEn: 'Drop your comments in the doc whenever you __________ __________ __________.',
        answer: 'get a chance',
        explanationKo: 'whenever you get a chance(3단어: get a chance)로 통째로 기억하세요.'
      }
    },
    {
      id: 'd17-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '관용구 burn bridges 이해',
      questionKo: '커리어 조언 중 "Make sure you decline the offer gracefully without burning bridges"가 뜻하는 바는?',
      stimulusEn: 'burn bridges의 비유적 의미를 파악하세요.',
      options: [
        '회사 출근길의 교통 체증을 피해서 이동하라',
        '상대방과의 향후 관계를 완전히 망치지 않도록 정중하게 제안을 거절하라',
        '기존 팀원들과 모든 연락을 즉시 끊고 새로 시작하라',
        '예산 절감을 위해 외부 파트너 계약을 모두 해지하라'
      ],
      answer: '상대방과의 향후 관계를 완전히 망치지 않도록 정중하게 제안을 거절하라',
      explanationKo: 'without burning bridges는 앞으로 다시 만날 수 있는 인연·신뢰 관계를 손상시키지 않으면서 행동하라는 뜻입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "전혀 급하지 않아요!"를 뜻하는 4단어 표현(N_ r___ a_ a__!)을 쓰세요.',
        stimulusEn: 'Tomorrow afternoon works fine too—__________ __________ __________ __________!',
        answer: 'no rush at all',
        explanationKo: 'No rush at all!은 일상과 비즈니스 모두에서 사랑받는 배려 표현입니다.'
      }
    },
    {
      id: 'd17-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '피드백 제안문 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 부드러운 피드백 제안 문장을 완성하세요.',
      stimulusEn: '[ trimming / Have you / the bullet points / on slide four? / considered ]',
      answer: 'Have you considered trimming the bullet points on slide four?',
      explanationKo: 'Have you considered + V-ing + 목적어 어순입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "발표를 고객 사례로 시작하는 방안도 고려해 보셨나요?" (Have you considered / opening the deck / with a customer story?)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Have you considered opening the deck with a customer story?',
        explanationKo: 'consider + opening(동명사) 어순을 유지합니다.'
      }
    },
    {
      id: 'd17-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '업무 한계 거절문 배열',
      questionKo: '주어진 청크를 배열하여 프로페셔널한 업무 거절 문장을 완성하세요.',
      stimulusEn: "[ this week, / I'd love to / currently at capacity / help, but I'm / so I'll have to pass. ]",
      answer: "I'd love to help, but I'm currently at capacity this week, so I'll have to pass.",
      explanationKo: '협업 의지 + 현재 업무 포화 상태 + 정중한 거절의 3단 연결입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이번 주에 해야 할 일이 정말 많아요." (I have a lot / on my plate / this week.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'I have a lot on my plate this week.',
        explanationKo: 'have a lot on my plate + 기간 어순입니다.'
      }
    },
    {
      id: 'd17-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '피드백 수용 감사 영작',
      questionKo: '우리말 뜻에 맞게 주어진 단어를 활용해 자연스러운 피드백 수용 문장을 완성하세요.',
      stimulusEn: '우리말: 미리 귀띔해 주셔서 정말 감사합니다—바로 실행 가능한 피드백이네요. (I really appreciate / the heads-up— / that feedback is / super actionable.)',
      answer: 'I really appreciate the heads-up—that feedback is super actionable.',
      acceptableAlt: ['I really appreciate the heads-up — that feedback is super actionable.', 'I really appreciate the heads-up, that feedback is super actionable.'],
      explanationKo: 'appreciate the heads-up으로 감사하고 super actionable로 피드백의 가치를 인정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "건설적인 피드백은 언제든 환영이에요." (I’m always open to / constructive feedback.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "I'm always open to constructive feedback.",
        explanationKo: "I'm always open to ~ 는 열린 태도를 보여주는 핵심 표현입니다."
      }
    },
    {
      id: 'd17-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시 교정 서술형',
      questionKo: '다음 콩글리시 문장을 올바른 동명사 어법(appreciate you giving)으로 고쳐 쓰세요.',
      stimulusEn: '오류 문장: I really appreciate you to give me a heads-up early.',
      answer: 'I really appreciate you giving me a heads-up early.',
      acceptableAlt: ['I really appreciate your giving me a heads-up early.'],
      explanationKo: 'appreciate는 to부정사(to give)가 아니라 동명사(giving)를 취합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: Don’t take it to your heart. → personally를 써서 5단어로 고치세요.',
        stimulusEn: "힌트: Please don't take ~.",
        answer: "Please don't take it personally.",
        explanationKo: '개인적으로 받아들이지 마세요는 Please don\'t take it personally.입니다.'
      }
    },
    {
      id: 'd17-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '실전 통문장 영작',
      questionKo: '다음 우리말을 영어로 자연스럽게 작성하세요.',
      stimulusEn: '우리말: 다음 주 월요일에 초안을 검토해 드리는 선에서 타협점을 맞춰볼 수 있어요. (힌트: I can meet you halfway / by reviewing the draft / next Monday.)',
      answer: 'I can meet you halfway by reviewing the draft next Monday.',
      explanationKo: 'meet [사람] halfway by + V-ing은 실무 협상과 거절 모두에서 빛나는 고급 패턴입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "전혀 급하지 않으니 시간 나실 때 편하게 코멘트 남겨 주세요." (No rush at all— / drop your comments / whenever you get a chance.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'No rush at all—drop your comments whenever you get a chance.',
        explanationKo: '배려 완충어를 앞뒤로 배치해 따뜻한 협업 톤을 완성합니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "Hey! First, loved your Q3 user research summary—one tiny thought: slide four felt a bit dense for executives. Also, could you possibly build an extra competitor analysis deck for sales by tomorrow afternoon?",
    openingQuestionKo:
      '안녕하세요! 우선 3분기 리서치 요약 정말 좋았어요. 한 가지 작은 의견은 4번 슬라이드가 임원들이 보기에 살짝 빽빽하더라고요. 그리고 혹시 내일 오후까지 세일즈 팀용 경쟁사 분석 자료도 추가로 만들어 주실 수 있나요? (피드백은 감사히 수용하고, 추가 자료 제작은 현재 업무 포화 상태로 정중히 거절하며 타협안을 제시해 보세요!)',
    followUpQuestionEn:
      "Totally fair—I appreciate you being upfront so you don't overcommit! Reviewing our rough outline early next week would be a huge help. No rush at all!",
    followUpQuestionKo:
      '완전히 이해해요—무리하게 떠안지 않고 솔직히 말씀해 주셔서 감사해요! 다음 주 초에 저희 개요 초안을 검토해 주시면 정말 큰 도움이 될 거예요. 전혀 급하지 않아요!',
    recommendedChunks: [
      'really appreciate the heads-up',
      'super actionable feedback',
      'currently at capacity',
      'a lot on my plate',
      "don't want to overcommit",
      'meet you halfway by ~'
    ],
    modelAnswerEn:
      "I really appreciate the heads-up—that feedback on slide four is super actionable, and I'll tighten it up this afternoon. As for the competitor deck, I'd love to support sales, but I'm currently at capacity with a lot on my plate this week and don't want to overcommit. I'll have to pass on building it from scratch, though I can meet you halfway by reviewing an outline early next week!"
  }
};
