import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day15Module: DayLessonModule = {
  dayNumber: 15,
  weekNumber: 3,
  cefrLevel: 'b2',
  dayBadge: 'DAY 15 · 업무 진행 보고 & 마감 지연 대응',
  categoryLabel: 'Week 3 오피스 실무 · 프로젝트 현황 보고 & 우선순위 조율',
  title: '일정은 순조롭지만 병목이 하나 생겼습니다',
  subtitle: '진행률 보고부터 우선순위(Priority) 재정렬, 예상치 못한 병목(Bottleneck)과 마감 지연(Push back)을 신뢰를 잃지 않고 보고하는 실무 공식',
  heroImage: 'assets/scene_late_office.jpg',
  secondaryImage: 'assets/office_sitcom_scene.jpg',
  estimatedSprintMin: 8,
  estimatedLectureMin: 45,
  keyExpression: "We're mostly on track, but we hit a bottleneck and may need to push back the deadline.",
  keySentenceByTier: {
    a1: 'The project is going well, but we need two more days.',
    a2: 'Most of our work is on track, but we have one problem and need to delay the deadline.',
    b1: "We're mostly on track for Friday, though we ran into a small issue and may need to push the deadline back.",
    b2: "We're largely on track, but we hit a bottleneck in QA and may need to push back the deadline by 48 hours.",
    c1: "While our core deliverables remain ahead of schedule, an API blocker has created a bottleneck, so I'd recommend putting secondary tasks on the back burner and pushing launch back to Tuesday.",
    c2: "Despite keeping most milestones on track, a third-party authentication bottleneck has constrained our bandwidth; unless we escalate this blocker today and deprioritize non-essential scope, we'll need to push back the release window."
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[15],
  readingPassage: {
    titleEn: 'Q3 Mobile Checkout Release — Weekly Risk & Priority Update',
    titleKo: '[주간 프로젝트 보고서] 3분기 모바일 결제 출시 — 리스크 및 우선순위 조정안',
    genreBadge: '주간 상태 보고서 · Lv.4',
    estimatedMin: 6,
    paragraphsEn: [
      'Team, here is a quick status update on the Q3 mobile checkout release. Overall, our front-end deliverables are ahead of schedule, and design QA is completely on track to wrap up by EOD Thursday. However, I want to flag an emerging bottleneck on the payment gateway integration before it puts next Monday\'s launch behind schedule.',
      'Specifically, we hit a technical blocker waiting on sandbox credentials from our external vendor. Because our back-end engineers currently have limited bandwidth, trying to tackle both the checkout fix and the loyalty-points redesign this week would spread the team too thin. I have already escalated the credential request to the vendor\'s account lead for faster turnaround.',
      'To protect our main launch date, I propose we prioritize checkout stability and put the loyalty-points redesign on the back burner until Sprint 14. If the vendor cannot clear the blocker by tomorrow noon, we may need to push back the external deadline by two business days. I will take ownership of the vendor follow-up and post updated action items in Slack by 5 PM.'
    ],
    paragraphsSlash: [
      'Team, / here is a quick status update / on the Q3 mobile checkout release. / Overall, / our front-end deliverables are ahead of schedule, / and design QA is completely on track / to wrap up by EOD Thursday. / However, / I want to flag an emerging bottleneck / on the payment gateway integration / before it puts next Monday\'s launch behind schedule.',
      'Specifically, / we hit a technical blocker / waiting on sandbox credentials / from our external vendor. / Because our back-end engineers / currently have limited bandwidth, / trying to tackle both the checkout fix / and the loyalty-points redesign this week / would spread the team too thin. / I have already escalated the credential request / to the vendor\'s account lead / for faster turnaround.',
      'To protect our main launch date, / I propose we prioritize checkout stability / and put the loyalty-points redesign on the back burner / until Sprint 14. / If the vendor cannot clear the blocker / by tomorrow noon, / we may need to push back the external deadline / by two business days. / I will take ownership of the vendor follow-up / and post updated action items in Slack / by 5 PM.'
    ],
    paragraphsKo: [
      '팀 여러분, 3분기 모바일 결제 출시에 대한 간략한 진행 현황 보고드립니다. 전반적으로 프론트엔드 산출물은 예정보다 앞서 진행 중이며, 디자인 QA도 목요일 업무 마감 전까지 완료되도록 순조롭게 진행되고 있습니다. 다만 다음 주 월요일 출시가 일정보다 뒤처지기 전에 결제 게이트웨이 연동 과정에서 생긴 병목 현상을 미리 공유하고자 합니다.',
      '구체적으로 외부 벤더사로부터 테스트(샌드박스) 인증 키를 기다리는 과정에서 기술적 장애 요인에 부딪혔습니다. 현재 백엔드 엔지니어들의 업무 여력이 빠듯하기 때문에 이번 주에 결제 오류 수정과 포인트 개편 작업을 동시에 처리하려 하면 팀 전체에 무리가 갑니다. 신속한 처리를 위해 이미 벤더사 담당 책임자에게 인증 키 발급 요청을 상위 보고(에스컬레이션)해 두었습니다.',
      '핵심 출시일을 지키기 위해 결제 안정화를 최우선 순위로 두고, 포인트 개편 작업은 스프린트 14까지 후순위로 미뤄둘 것을 제안합니다. 만약 내일 정오까지 벤더사가 장애 요인을 해소하지 못하면 외부 공개 마감일을 영업일 기준 이틀 정도 미뤄야 할 수도 있습니다. 벤더사 후속 대응은 제가 주도적으로 책임지고 맡겠으며, 오후 5시까지 업데이트된 실행 과제를 슬랙에 공유하겠습니다.'
    ],
    keyExpressions: [
      'on track / ahead of schedule',
      'flag a bottleneck',
      'limited bandwidth',
      'put ~ on the back burner',
      'push back the deadline',
      'take ownership of'
    ],
    comprehensionQuiz: [
      {
        id: 'd15-rq01',
        questionKo: '보고서에서 언급된 현재 프로젝트의 병목 구간(bottleneck) 원인은 무엇인가요?',
        options: [
          '프론트엔드 개발 일정이 일주일 이상 지연되었기 때문에',
          '외부 벤더사의 결제 연동 테스트(샌드박스) 인증 키 발급이 지연되고 있어서',
          '디자인 QA 담당자가 갑자기 휴가를 떠났기 때문에',
          '경영진이 3분기 모바일 출시 자체를 취소했기 때문에'
        ],
        answer: '외부 벤더사의 결제 연동 테스트(샌드박스) 인증 키 발급이 지연되고 있어서',
        explanationKo: '둘째 문단 "we hit a technical blocker waiting on sandbox credentials from our external vendor"가 정확한 원인입니다.'
      },
      {
        id: 'd15-rq02',
        questionKo: '핵심 출시일을 지키기 위해 작성자가 제안한 우선순위 조정 방안은?',
        options: [
          '결제 안정화를 최우선으로 두고 포인트 개편(loyalty-points redesign)은 후순위로 미룬다',
          '프론트엔드와 백엔드 인력을 모두 포인트 개편에 투입한다',
          '외부 벤더사와 계약을 즉시 해지한다',
          'QA 검증 단계를 생략하고 월요일에 강행 출시한다'
        ],
        answer: '결제 안정화를 최우선으로 두고 포인트 개편(loyalty-points redesign)은 후순위로 미룬다',
        explanationKo: '셋째 문단 "prioritize checkout stability and put the loyalty-points redesign on the back burner until Sprint 14"가 근거입니다.'
      },
      {
        id: 'd15-rq03',
        questionKo: '본문에서 "문제를 상위 책임자에게 올려 신속 대응을 요청하다"라는 뜻으로 쓰인 비즈니스 동사는?',
        options: ['prioritize', 'escalate', 'deliver', 'integrate'],
        answer: 'escalate',
        explanationKo: '둘째 문단 "I have already escalated the credential request to the vendor\'s account lead"에서 escalate가 상위 보고·긴급 격상의 뜻으로 쓰였습니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd15-v01',
      word: 'on track',
      phonetic: '/ɑːn træk/',
      pos: '전치사구',
      cefr: 'b2',
      meaningKo: '계획대로 순조롭게 진행 중인',
      meaningEn: 'progressing as planned toward a goal or deadline',
      nuanceTipKo: '기차가 선로(track) 위를 정상 주행하는 이미지입니다. "We\'re on track to launch on Monday"처럼 to 부정사와 함께 마감 목표를 밝힙니다.',
      exampleEn: "We're right on track to hit our Q3 revenue target.",
      exampleKo: '3분기 매출 목표를 달성할 수 있도록 아주 순조롭게 진행 중입니다.'
    },
    {
      id: 'd15-v02',
      word: 'behind schedule',
      phonetic: '/bɪˈhaɪnd ˈskedʒuːl/',
      pos: '전치사구',
      cefr: 'b1',
      meaningKo: '예정 일정보다 뒤처진, 지연된',
      meaningEn: 'later than planned according to the project timeline',
      nuanceTipKo: 'fall behind schedule(일정이 밀리기 시작하다), be two days behind schedule(이틀 지연되다) 패턴으로 바로 쓰세요.',
      exampleEn: 'The QA phase is currently two days behind schedule due to server bugs.',
      exampleKo: '서버 버그 때문에 현재 QA 단계가 예정보다 이틀 지연되었습니다.'
    },
    {
      id: 'd15-v03',
      word: 'ahead of schedule',
      phonetic: '/əˈhed əv ˈskedʒuːl/',
      pos: '전치사구',
      cefr: 'b2',
      meaningKo: '예정 일정보다 앞선, 조기 달성 중인',
      meaningEn: 'earlier or faster than originally planned',
      nuanceTipKo: 'behind schedule의 정반대! 좋은 소식을 먼저 보고할 때 "Design is ahead of schedule"로 시작하면 팀 사기가 올라갑니다.',
      exampleEn: 'Thanks to the new workflow, our design team finished ahead of schedule.',
      exampleKo: '새 워크플로우 덕분에 디자인 팀이 예정 일정보다 일찍 마쳤습니다.'
    },
    {
      id: 'd15-v04',
      word: 'bottleneck',
      phonetic: '/ˈbɑːtlnek/',
      pos: '명사',
      cefr: 'b2',
      meaningKo: '(업무 흐름이 막히는) 병목 구간, 정체 요인',
      meaningEn: 'a point of congestion that slows down an entire workflow',
      nuanceTipKo: '병목처럼 좁아져 전체 프로세스가 막히는 지점을 뜻합니다. "hit a bottleneck / clear a bottleneck" 연어로 익히세요.',
      exampleEn: 'Legal review has become the biggest bottleneck in our onboarding process.',
      exampleKo: '법무 검토가 우리 온보딩 프로세스에서 가장 큰 병목 구간이 되었습니다.'
    },
    {
      id: 'd15-v05',
      word: 'push back the deadline',
      phonetic: '/pʊʃ bæk ðə ˈdedlaɪn/',
      pos: '동사 구문',
      cefr: 'b2',
      meaningKo: '마감 기한을 뒤로 미루다',
      meaningEn: 'postpone a due date to a later time',
      nuanceTipKo: 'delay보다 훨씬 실무적인 구어/이메일 표현이며, 지연 기간 앞에는 전치사 by(by two days), 새 날짜 앞에는 to(to Friday)를 씁니다.',
      exampleEn: 'We may need to push back the deadline by two business days.',
      exampleKo: '마감일을 영업일 기준 이틀 정도 뒤로 미뤄야 할 수도 있습니다.'
    },
    {
      id: 'd15-v06',
      word: 'bandwidth',
      phonetic: '/ˈbændwɪdθ/',
      pos: '명사',
      cefr: 'b2',
      meaningKo: '(업무를 소화할) 시간·에너지·리소스 여력',
      meaningEn: 'the time, energy, or capacity available to take on work',
      nuanceTipKo: '원래 통신 대역폭이지만 글로벌 오피스에서는 100% "업무 여력" 뜻으로 쓰입니다. "I don\'t have the bandwidth right now"는 최고의 프로 거절 표현!',
      exampleEn: "Our front-end team doesn't have the bandwidth to take on another sprint task.",
      exampleKo: '프론트엔드 팀은 추가 스프린트 업무를 맡을 여력이 지금 없습니다.'
    },
    {
      id: 'd15-v07',
      word: 'prioritize',
      phonetic: '/praɪˈɔːrətaɪz/',
      pos: '동사',
      cefr: 'b2',
      meaningKo: '우선순위를 정하다, 최우선으로 처리하다',
      meaningEn: 'treat a task as more important than others and handle it first',
      nuanceTipKo: '명사 priority(우선순위)와 함께 "What should we prioritize this week?"로 상사와 방향을 정렬할 때 필수 동사입니다.',
      exampleEn: 'Let’s prioritize the checkout bug fix before working on minor UI tweaks.',
      exampleKo: '사소한 UI 수정 전에 결제 버그 해결을 최우선으로 처리합시다.'
    },
    {
      id: 'd15-v08',
      word: 'put ~ on the back burner',
      phonetic: '/pʊt ɑːn ðə bæk ˈbɜːrnər/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '~을 당장 급하지 않아 후순위로 미뤄두다',
      meaningEn: 'temporarily set aside a lower-priority project to focus on urgent work',
      nuanceTipKo: '가스레인지 앞쪽 화구에는 급한 요리를, 뒤쪽 화구(back burner)에는 천천히 끓일 냄비를 올려두는 그림에서 나온 원어민 최애 비즈니스 관용구입니다.',
      exampleEn: "We'll have to put the blog redesign on the back burner until next quarter.",
      exampleKo: '블로그 개편은 다음 분기까지 잠시 후순위로 미뤄둬야 할 것 같습니다.'
    },
    {
      id: 'd15-v09',
      word: 'deliverable',
      phonetic: '/dɪˈlɪvərəbl/',
      pos: '명사',
      cefr: 'b2',
      meaningKo: '(프로젝트의 구체적인) 산출물, 납품 결과물',
      meaningEn: 'a tangible output or result expected to be completed for a project',
      nuanceTipKo: '막연한 work 대신 "key deliverables(핵심 산출물)"라고 말하면 보고서와 스탠드업의 격이 확 올라갑니다.',
      exampleEn: 'All Phase 1 deliverables have been uploaded to the shared drive.',
      exampleKo: '1단계 핵심 산출물은 모두 공유 드라이브에 업로드되었습니다.'
    },
    {
      id: 'd15-v10',
      word: 'blocker',
      phonetic: '/ˈblɑːkər/',
      pos: '명사',
      cefr: 'b2',
      meaningKo: '(업무 진행을 가로막는) 장애 요인, 블로커',
      meaningEn: 'an obstacle that prevents a task or team from moving forward',
      nuanceTipKo: '데일리 스크럼/스탠드업에서 매일 듣는 질문이 바로 "Any blockers today?(오늘 진행 막히는 이슈 있나요?)"입니다.',
      exampleEn: 'Do you have any blockers that I can help clear this afternoon?',
      exampleKo: '오늘 오후에 제가 해결을 도와드릴 만한 진행 장애 요인이 있나요?'
    },
    {
      id: 'd15-v11',
      word: 'flag (an issue)',
      phonetic: '/flæɡ/',
      pos: '동사',
      cefr: 'b2',
      meaningKo: '(리스크·문제를) 미리 깃발을 꽂듯 표시해 알리다',
      meaningEn: 'draw early attention to a potential risk or problem',
      nuanceTipKo: '문제가 터진 뒤 변명하지 않고 조기에 공유할 때 "I wanted to flag this early"라고 말하면 신뢰받는 팀원이 됩니다.',
      exampleEn: 'I wanted to flag a potential delay in shipping before Friday’s review.',
      exampleKo: '금요일 리뷰 전에 배송 지연 가능성을 미리 공유드리고 싶었습니다.'
    },
    {
      id: 'd15-v12',
      word: 'take ownership of',
      phonetic: '/teɪk ˈoʊnərʃɪp əv/',
      pos: '동사 구문',
      cefr: 'b2',
      meaningKo: '~에 대해 주도적으로 책임을 맡다',
      meaningEn: 'accept full responsibility for driving a task or resolving an issue',
      nuanceTipKo: '"I\'ll be responsible for ~"보다 훨씬 능동적이고 리더십 있는 미국 실무 표현입니다.',
      exampleEn: "I'll take ownership of the client onboarding doc and update it by Friday.",
      exampleKo: '클라이언트 온보딩 문서는 제가 주도적으로 맡아 금요일까지 업데이트하겠습니다.'
    },
    {
      id: 'd15-v13',
      word: 'action item',
      phonetic: '/ˈækʃn ˈaɪtəm/',
      pos: '명사구',
      cefr: 'b2',
      meaningKo: '(회의 후 실행할) 구체적 실행 과제, 할 일',
      meaningEn: 'a specific, assigned follow-up task resulting from a meeting',
      nuanceTipKo: '회의 끝에 "Let\'s recap our action items and owners(실행 과제와 담당자를 정리하죠)"로 닫으면 완벽합니다.',
      exampleEn: 'I just posted our key action items and due dates in the project channel.',
      exampleKo: '핵심 실행 과제와 마감일을 프로젝트 채널에 방금 올려두었습니다.'
    },
    {
      id: 'd15-v14',
      word: 'by EOD (end of day)',
      phonetic: '/baɪ ˌiː oʊ ˈdiː/',
      pos: '전치사구',
      cefr: 'b2',
      meaningKo: '오늘 업무 마감 전까지',
      meaningEn: 'before the end of the standard working day',
      nuanceTipKo: 'until EOD가 아니라 완료 시점 전치사 by를 씁니다! 글로벌 협업에서는 혼선을 막기 위해 "by EOD Thursday KST"처럼 시간대를 붙이기도 합니다.',
      exampleEn: "I'll share the revised forecast with you by EOD today.",
      exampleKo: '수정된 예측치는 오늘 퇴근 전까지 공유드리겠습니다.'
    },
    {
      id: 'd15-v15',
      word: 'escalate',
      phonetic: '/ˈeskəleɪt/',
      pos: '동사',
      cefr: 'b2',
      meaningKo: '(해결이 지연된 이슈를) 상위 단계·책임자에게 올려 신속 대응을 요청하다',
      meaningEn: 'raise an urgent issue to a higher level of management for faster action',
      nuanceTipKo: '실무자 선에서 풀리지 않는 블로커를 매니저·임원·벤더 리드에게 격상 보고할 때 쓰는 정확한 비즈니스 동사입니다.',
      exampleEn: "If we don't hear back by noon, we'll escalate the ticket to their VP.",
      exampleKo: '정오까지 회신이 없으면 이 티켓을 상대방 부사장급으로 상위 보고하겠습니다.'
    }
  ],
  dialogue: [
    {
      id: 'd15-t01',
      speaker: 'Rachel',
      roleLabel: '프로덕트 디렉터',
      voicePitch: 1.04,
      sceneImage: 'assets/scene_late_office.jpg',
      cameraMotion: 'zoom-in',
      english: "Hey Taehyun, thanks for staying on a few extra minutes. Quick check—are we still on track for Monday's checkout launch?",
      slashBroken: "Hey Taehyun, / thanks for staying on a few extra minutes. / Quick check— / are we still on track / for Monday's checkout launch?",
      korean: '태현 님, 몇 분 더 남아줘서 고마워요. 짧게 확인할게요—월요일 결제 출시 일정 아직 순조롭게 진행 중인가요?',
      keyHighlight: 'still on track for Monday\'s checkout launch',
      noteKo: '진행률 점검의 정석 질문은 "Are we still on track for [마감/출시]?"입니다.'
    },
    {
      id: 'd15-t02',
      speaker: 'Taehyun',
      roleLabel: '테크 리드',
      voicePitch: 0.90,
      sceneImage: 'assets/scene_late_office.jpg',
      cameraMotion: 'pan-right',
      english: 'Front-end deliverables are actually ahead of schedule, Rachel. However, I wanted to flag a bottleneck on the payment API.',
      slashBroken: 'Front-end deliverables are actually ahead of schedule, / Rachel. / However, / I wanted to flag a bottleneck / on the payment API.',
      korean: '프론트엔드 산출물은 사실 예정보다 앞서 있어요, 레이첼. 하지만 결제 API 쪽에 생긴 병목 이슈를 미리 공유드리고 싶었습니다.',
      keyHighlight: 'flag a bottleneck on the payment API',
      noteKo: '긍정적 현황(ahead of schedule)을 먼저 짚고 리스크(flag a bottleneck)를 조기 보고하는 교과서적 구조입니다.'
    },
    {
      id: 'd15-t03',
      speaker: 'Rachel',
      roleLabel: '프로덕트 디렉터',
      voicePitch: 1.04,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-left',
      english: "Appreciate you flagging it early. What's the exact blocker, and how far behind schedule could it put us?",
      slashBroken: "Appreciate you flagging it early. / What's the exact blocker, / and how far behind schedule / could it put us?",
      korean: '미리 알려줘서 고마워요. 정확한 장애 요인이 무엇이고, 일정이 얼마나 밀릴 수 있나요?',
      keyHighlight: "What's the exact blocker",
      noteKo: '원인과 영향 범위(how far behind schedule)를 짚는 실무 리더의 핵심 질문 패턴입니다.'
    },
    {
      id: 'd15-t04',
      speaker: 'Taehyun',
      roleLabel: '테크 리드',
      voicePitch: 0.90,
      sceneImage: 'assets/scene_late_office.jpg',
      cameraMotion: 'zoom-in',
      english: "We're still waiting on test keys from the vendor. I've already escalated it to their lead, but we may need to push back the deadline by two days.",
      slashBroken: "We're still waiting on test keys from the vendor. / I've already escalated it to their lead, / but we may need to push back the deadline / by two days.",
      korean: '벤더사에서 테스트 키를 아직 기다리고 있어요. 상대 리드에게 이미 상위 보고해 두었지만, 마감일을 이틀 정도 미뤄야 할 수도 있습니다.',
      keyHighlight: 'push back the deadline by two days',
      noteKo: '문제만 던지지 않고 이미 취한 조치(escalated it)와 구체적 지연 폭(by two days)을 함께 보고합니다.'
    },
    {
      id: 'd15-t05',
      speaker: 'Rachel',
      roleLabel: '프로덕트 디렉터',
      voicePitch: 1.04,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-right',
      english: 'Got it. Do we have enough bandwidth to keep the loyalty redesign going, or should we reprioritize?',
      slashBroken: 'Got it. / Do we have enough bandwidth / to keep the loyalty redesign going, / or should we reprioritize?',
      korean: '알겠어요. 포인트 개편 작업도 병행할 여력이 되나요, 아니면 우선순위를 재조정해야 할까요?',
      keyHighlight: 'have enough bandwidth',
      noteKo: '리소스 여유를 물을 때 bandwidth와 reprioritize(우선순위 재정렬)가 세트로 자주 쓰입니다.'
    },
    {
      id: 'd15-t06',
      speaker: 'Taehyun',
      roleLabel: '테크 리드',
      voicePitch: 0.90,
      sceneImage: 'assets/scene_late_office.jpg',
      cameraMotion: 'pan-left',
      english: "Honestly, our bandwidth is pretty tight. I'd recommend we prioritize checkout QA and put the loyalty redesign on the back burner until next sprint.",
      slashBroken: "Honestly, / our bandwidth is pretty tight. / I'd recommend we prioritize checkout QA / and put the loyalty redesign on the back burner / until next sprint.",
      korean: '솔직히 여력이 꽤 빠듯합니다. 결제 QA를 최우선으로 두고 포인트 개편은 다음 스프린트까지 후순위로 미뤄두길 권장합니다.',
      keyHighlight: 'put the loyalty redesign on the back burner',
      noteKo: '무조건 다 하겠다고 하지 않고, 우선순위 조정안(prioritize A and put B on the back burner)을 제안하는 것이 시니어의 소통법입니다.'
    },
    {
      id: 'd15-t07',
      speaker: 'Rachel',
      roleLabel: '프로덕트 디렉터',
      voicePitch: 1.04,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'zoom-in',
      english: "Makes total sense—let's do that. I'll take ownership of updating marketing, and could you share the revised action items by EOD tomorrow?",
      slashBroken: "Makes total sense— / let's do that. / I'll take ownership of updating marketing, / and could you share the revised action items / by EOD tomorrow?",
      korean: '완전히 일리 있네요, 그렇게 하죠. 마케팅팀 공유는 제가 책임지고 맡을 테니 내일 퇴근 전까지 수정된 실행 과제를 올려주실래요?',
      keyHighlight: 'share the revised action items by EOD tomorrow',
      noteKo: '책임 분담(take ownership of)과 기한 명시(by EOD tomorrow)로 보고를 완벽히 마무리합니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 리스크 보고의 황금 3단 구조: [현황] + [병목 원인] + [조치 & 대안]',
      coreFormula: '[on track / ahead] + However, we hit a bottleneck / blocker + [escalated / push back by ~]',
      wrongKonglish: 'Sorry, we cannot finish until Monday because vendor is late. It is delayed.',
      rightNative: "Most deliverables are on track, though we hit a vendor bottleneck. I've escalated it, and we may need to push back the deadline by two days.",
      explanationKo:
        '일정 지연을 보고할 때 변명처럼 들리지 않으려면 반드시 3단 구조를 지키세요. ① 순조로운 부분(on track)을 먼저 짚어 안심시키고, ② 객관적 장애물(hit a bottleneck / blocker)을 제시한 뒤, ③ 이미 취한 액션(escalated)과 현실적 대안(push back by two days)으로 마무리하면 리더의 신뢰를 얻습니다.',
      registerSpectrum: {
        casual: "Quick heads-up—we hit a snag with the vendor, so we might push launch back a couple days.",
        standard: "We're mostly on track, but we hit a bottleneck in QA and may need to push back the deadline by two days.",
        formal: 'While core deliverables remain on track, an external dependency has created a bottleneck; we have escalated the issue and recommend adjusting the target date by 48 hours.'
      }
    },
    {
      title: '원리 02 · 업무 여력과 우선순위 영어: bandwidth & put ~ on the back burner',
      coreFormula: 'have limited bandwidth (여력이 빠듯하다) → prioritize A and put B on the back burner',
      wrongKonglish: "We don't have enough energy space, so let's throw away task B to the back.",
      rightNative: "We have limited bandwidth this week, so let's prioritize task A and put task B on the back burner.",
      explanationKo:
        '직장에서 "시간·인력 여력이 부족하다"고 할 때 "no time"만 반복하면 아마추어처럼 들립니다. bandwidth(업무 소화 여력)라는 명사를 쓰고, 덜 급한 업무를 포기(cancel)가 아니라 잠시 보류할 때는 가스레인지 뒤쪽 화구에 둔다는 뜻의 put ~ on the back burner를 쓰세요.',
      registerSpectrum: {
        casual: "I don't really have the bandwidth this week, so let's park that idea for now.",
        standard: "Our team has limited bandwidth right now, so let's put the redesign on the back burner.",
        formal: 'Given current resource constraints, we recommend prioritizing core stability and deferring secondary enhancements to Q4.'
      }
    },
    {
      title: '원리 03 · 마감 전치사 함정 완전 차단: by EOD (완료 기한) vs. until Friday (상태 지속)',
      coreFormula: '완료 동작(submit / share / wrap up) + by [시점] ↔ 지속 상태(wait / stay / work) + until [시점]',
      wrongKonglish: 'I will finish and send the deliverables until EOD Friday.',
      rightNative: "I'll finalize and share the deliverables by EOD Friday.",
      explanationKo:
        '한국어 "~까지"를 무조건 until로 옮기는 것이 비즈니스 영어 최다 오류입니다! 제출·완료·회신처럼 "그 시점 이전에 딱 끝나는 일"은 반드시 by(by EOD, by Friday noon)를 쓰고, 휴가·대기·작업처럼 "그 시점까지 계속 이어지는 상태"에만 until(until next sprint, until 5 PM)을 씁니다.',
      registerSpectrum: {
        casual: "I'll get the action items over to you by EOD!",
        standard: "I'll share the revised action items by EOD tomorrow.",
        formal: 'All finalized deliverables will be submitted by end of business on Friday.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd15-s01',
      drillType: 'chunk-build',
      promptKo: '3분기 출시 일정은 대체로 계획대로 순조롭게 진행 중입니다.',
      promptEnHint: 'mostly on track + for the Q3 launch 조합을 만드세요.',
      targetEn: "We're mostly on track for the Q3 launch.",
      chunks: ["We're", 'mostly on track', 'for the', 'Q3 launch.'],
      explanationKo: '계획대로 진행 중이라는 핵심 보고 표현은 be on track for [목표/일정]입니다.'
    },
    {
      id: 'd15-s02',
      drillType: 'konglish-fix',
      promptKo: '"수정된 산출물을 금요일 퇴근 전까지 공유드리겠습니다."',
      promptEnHint: '완료 마감 시점 앞에 쓰는 전치사(by vs until)를 확인하세요.',
      targetEn: "I'll share the revised deliverables by EOD Friday.",
      wrongKonglishOption: "I'll share the revised deliverables until EOD Friday.",
      explanationKo: '공유·제출처럼 완료 시점을 지정할 때는 until이 아니라 전치사 by를 씁니다.'
    },
    {
      id: 'd15-s03',
      drillType: 'active-blank',
      promptKo: '결제 API 연동 과정에서 병목 구간에 부딪혔습니다.',
      promptEnHint: '업무 흐름이 막히는 병목 구간: b_________ (10글자)',
      targetEn: 'We hit a bottleneck on the payment API.',
      blankData: {
        before: 'We hit a',
        answer: 'bottleneck',
        after: 'on the payment API.',
        firstLetterHint: 'b_________ (10글자)'
      },
      explanationKo: '병목 현상을 만나다는 hit a bottleneck 연어로 통째로 익혀두세요.'
    },
    {
      id: 'd15-s04',
      drillType: 'chunk-build',
      promptKo: '마감일을 이틀 정도 뒤로 미뤄야 할 수도 있습니다.',
      promptEnHint: 'push back the deadline + by two days 청크를 조립하세요.',
      targetEn: 'We may need to push back the deadline by two days.',
      chunks: ['We may need to', 'push back', 'the deadline', 'by two days.'],
      explanationKo: '지연 기간을 밝힐 때는 전치사 by(by two days)를 붙입니다.'
    },
    {
      id: 'd15-s05',
      drillType: 'active-blank',
      promptKo: '이번 주에는 추가 업무를 맡을 여력이 부족합니다.',
      promptEnHint: '업무 소화 여력(대역폭): b________ (9글자)',
      targetEn: 'Our team has limited bandwidth this week.',
      blankData: {
        before: 'Our team has limited',
        answer: 'bandwidth',
        after: 'this week.',
        firstLetterHint: 'b________ (9글자)'
      },
      explanationKo: '시간·인력 여력을 나타내는 대표 오피스 명사는 bandwidth입니다.'
    },
    {
      id: 'd15-s06',
      drillType: 'konglish-fix',
      promptKo: '"블로그 개편은 다음 분기까지 후순위로 미뤄두죠."',
      promptEnHint: '덜 급한 일을 후순위로 보류하는 원어민 관용구를 고르세요.',
      targetEn: "Let's put the blog redesign on the back burner until next quarter.",
      wrongKonglishOption: "Let's put the blog redesign on the rear chair until next quarter.",
      explanationKo: '후순위로 잠시 미뤄두다는 put ~ on the back burner입니다.'
    },
    {
      id: 'd15-s07',
      drillType: 'chunk-build',
      promptKo: '그 이슈를 이미 벤더사 리드에게 상위 보고해 두었습니다.',
      promptEnHint: "I've already escalated + to their lead 어순으로 조립하세요.",
      targetEn: "I've already escalated the issue to their lead.",
      chunks: ["I've already", 'escalated', 'the issue', 'to their lead.'],
      explanationKo: 'escalate [문제] to [상위 담당자]는 장애 대응 보고의 필수 패턴입니다.'
    },
    {
      id: 'd15-s08',
      drillType: 'active-blank',
      promptKo: '벤더사 후속 대응은 제가 주도적으로 책임지고 맡겠습니다.',
      promptEnHint: '주도적으로 책임을 맡다: take _________ of (9글자)',
      targetEn: "I'll take ownership of the vendor follow-up.",
      blankData: {
        before: "I'll take",
        answer: 'ownership',
        after: 'of the vendor follow-up.',
        firstLetterHint: 'o________ (9글자)'
      },
      explanationKo: 'take ownership of ~ 는 프로페셔널한 책임감을 드러내는 핵심 표현입니다.'
    },
    {
      id: 'd15-s09',
      drillType: 'konglish-fix',
      promptKo: '"현재 QA 단계가 예정 일정보다 이틀 뒤처져 있습니다."',
      promptEnHint: '"예정보다 뒤처진"의 정확한 전치사구를 고르세요.',
      targetEn: 'The QA phase is two days behind schedule.',
      wrongKonglishOption: 'The QA phase is two days back of schedule.',
      explanationKo: '일정보다 뒤처짐은 behind schedule, 앞섬은 ahead of schedule입니다.'
    },
    {
      id: 'd15-s10',
      drillType: 'chunk-build',
      promptKo: '금요일 리뷰 전에 잠재적 지연을 미리 알리고 싶었습니다.',
      promptEnHint: 'wanted to flag + a potential delay 청크를 조립하세요.',
      targetEn: 'I wanted to flag a potential delay before Friday.',
      chunks: ['I wanted to', 'flag', 'a potential delay', 'before Friday.'],
      explanationKo: '리스크를 조기에 알릴 때 동사 flag를 쓰면 매우 세련된 보고가 됩니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd15-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '정상 진행 on track',
      questionKo: '빈칸에 전치사구(2단어)를 넣어 "다음 주 출시 일정에 맞춰 순조롭게 진행 중입니다"를 완성하세요.',
      stimulusEn: "We're right __________ __________ for next week's release.",
      answer: 'on track',
      explanationKo: '계획대로 정상 궤도 위에서 진행 중일 때 on track을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "디자인 팀은 예정보다 앞서 진행 중입니다" 빈칸(3단어)을 채우세요.',
        stimulusEn: 'The design team is __________ __________ __________.',
        answer: 'ahead of schedule',
        explanationKo: '일정보다 앞선 상태는 ahead of schedule입니다.'
      }
    },
    {
      id: 'd15-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '병목 구간 bottleneck',
      questionKo: '빈칸에 명사(1단어)를 넣어 "법무 검토 단계에서 병목 현상에 부딪혔습니다"를 완성하세요.',
      stimulusEn: 'We hit a major __________ during legal review.',
      answer: 'bottleneck',
      acceptableAlt: ['blocker'],
      explanationKo: '업무 흐름이 좁아져 정체되는 지점을 bottleneck(또는 진행 장애 요인 blocker)이라고 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "진행을 막는 장애 요인이 있으신가요?" 빈칸 명사 복수형(1단어: b_______)을 쓰세요.',
        stimulusEn: 'Are there any __________ slowing down the sprint today?',
        answer: 'blockers',
        explanationKo: '스탠드업 미팅에서 장애 요인은 blocker(복수 blockers)라고 부릅니다.'
      }
    },
    {
      id: 'd15-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '업무 여력 bandwidth',
      questionKo: '빈칸에 명사(1단어)를 넣어 "현재 두 프로젝트를 동시에 맡을 여력이 부족합니다"를 완성하세요.',
      stimulusEn: "Our team doesn't have enough __________ to handle both projects at once.",
      answer: 'bandwidth',
      explanationKo: '업무를 소화할 시간·인력 여력을 bandwidth라고 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 문제를 이미 벤더사 책임자에게 상위 보고했습니다" 빈칸 동사 과거분사(1단어)를 쓰세요.',
        stimulusEn: "I've already __________ this issue to the vendor's director.",
        answer: 'escalated',
        explanationKo: '상위 단계로 격상 보고하다는 escalate(과거분사 escalated)입니다.'
      }
    },
    {
      id: 'd15-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '후순위 보류 back burner',
      questionKo: '빈칸에 명사구(2단어)를 넣어 "보조 기능은 다음 분기까지 후순위로 미뤄둡시다"를 완성하세요.',
      stimulusEn: "Let's put the secondary feature on the __________ __________ until next quarter.",
      answer: 'back burner',
      explanationKo: 'put ~ on the back burner는 덜 급한 업무를 보류해 두는 필수 비즈니스 관용구입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "결제 안정화를 최우선 순위로 두어야 합니다" 빈칸 동사(1단어)를 쓰세요.',
        stimulusEn: 'We need to __________ checkout stability this week.',
        answer: 'prioritize',
        explanationKo: '우선시하다는 동사 prioritize입니다.'
      }
    },
    {
      id: 'd15-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '책임 주도 take ownership of',
      questionKo: '빈칸에 3단어를 넣어 "마케팅팀 커뮤니케이션은 제가 주도적으로 책임지고 맡겠습니다"를 완성하세요.',
      stimulusEn: "I'll __________ __________ __________ updating the marketing team.",
      answer: 'take ownership of',
      explanationKo: 'take ownership of + 명사/동명사 구조로 능동적 책임을 표현합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "수정된 실행 과제들을 슬랙에 공유했습니다" 빈칸 명사구(2단어 복수)를 쓰세요.',
        stimulusEn: 'I just posted our revised __________ __________ in Slack.',
        answer: 'action items',
        explanationKo: '구체적 후속 실행 과제는 action items입니다.'
      }
    },
    {
      id: 'd15-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'by vs until 마감 전치사',
      questionKo: '다음 중 "금요일 퇴근 전까지 산출물을 제출하겠습니다"를 어법상 바르게 표현한 문장은?',
      stimulusEn: '완료 시점(by)과 상태 지속(until)의 차이에 주의하세요.',
      options: [
        "I'll submit the deliverables until EOD Friday.",
        "I'll submit the deliverables by EOD Friday.",
        "I'll submit the deliverables during EOD Friday.",
        "I'll submit the deliverables since EOD Friday."
      ],
      answer: "I'll submit the deliverables by EOD Friday.",
      explanationKo: 'submit처럼 완료 동작의 마감 기한 앞에는 반드시 전치사 by를 써야 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "다음 스프린트까지 그 작업을 보류해 두자" — 상태 지속 전치사(1단어)를 쓰세요.',
        stimulusEn: "Let's put that redesign on the back burner __________ next sprint.",
        answer: 'until',
        explanationKo: '보류 상태가 다음 스프린트까지 계속 이어지므로 until이 정확합니다.'
      }
    },
    {
      id: 'd15-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '마감 연기 push back 전치사',
      questionKo: '마감일을 "영업일 기준 이틀만큼" 뒤로 미뤄야 한다고 보고할 때 빈칸에 가장 알맞은 것은?',
      stimulusEn: 'We may need to push back the deadline ______ two business days.',
      options: ['by', 'at', 'until', 'with'],
      answer: 'by',
      explanationKo: '지연·차이의 폭(two business days, 30 minutes) 앞에는 전치사 by를 사용합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 마감일을 "다음 주 수요일로(새 날짜)" 미룰 때 쓰는 전치사(1단어)는?',
        stimulusEn: 'We had to push back the deadline __________ next Wednesday.',
        answer: 'to',
        explanationKo: '새로운 목표 시점을 가리킬 때는 전치사 to를 씁니다.'
      }
    },
    {
      id: 'd15-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '조기 리스크 공유 flag 동사',
      questionKo: '문제가 커지기 전에 상사에게 "잠재적인 배송 지연 리스크를 미리 공유드리고 싶었습니다"라고 말할 때 가장 세련된 문장은?',
      stimulusEn: '비즈니스 실무에서 조기 경보·공유를 뜻하는 동사를 고르세요.',
      options: [
        'I wanted to flag a potential shipping delay early.',
        'I wanted to wave a red cloth about shipping late.',
        'I wanted to complain a shipping accident early.',
        'I wanted to alarm you a bad shipping problem.'
      ],
      answer: 'I wanted to flag a potential shipping delay early.',
      explanationKo: '동사 flag는 이슈나 리스크를 객관적이고 선제적으로 표시해 알릴 때 쓰는 핵심 실무 어휘입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "프로젝트의 구체적 산출물"을 뜻하는 명사 복수형(1단어: d___________)을 쓰세요.',
        stimulusEn: 'All Phase 1 __________ are ready for client review.',
        answer: 'deliverables',
        explanationKo: '프로젝트 결과물·산출물은 deliverables입니다.'
      }
    },
    {
      id: 'd15-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '진행 상태 표현 대조',
      questionKo: '원래 금요일 마감 예정이던 QA 작업이 아직 수요일에 다 끝나지 못해 "이틀 지연된 상태"일 때 알맞은 문장은?',
      stimulusEn: '일정 지연(behind) vs 조기 달성(ahead)을 구분하세요.',
      options: [
        'QA is currently two days ahead of schedule.',
        'QA is currently two days behind schedule.',
        'QA is currently two days on track.',
        'QA is currently two days out of office.'
      ],
      answer: 'QA is currently two days behind schedule.',
      explanationKo: '예정 일정보다 늦어진 상태는 behind schedule입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 일정이 뒤처지기 시작할 때 쓰는 동명사 구문(3단어: f______ b_____ s_______)을 쓰세요.',
        stimulusEn: 'Without vendor keys, we risk __________ __________ __________.',
        answer: 'falling behind schedule',
        explanationKo: '동사 risk 뒤에는 동명사가 오므로 falling behind schedule이 정확합니다.'
      }
    },
    {
      id: 'd15-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '우선순위 조율 시니어 톤',
      questionKo: '업무가 과도하게 몰렸을 때 매니저에게 우선순위 재조정을 요청하는 가장 프로페셔널한 표현은?',
      stimulusEn: '변명 없이 객관적 여력과 대안을 제시하는 문장을 고르세요.',
      options: [
        'This is too much work and I refuse to do both.',
        'Given our tight bandwidth, which deliverable should we prioritize first?',
        'My brain is full so please cancel everything today.',
        'You gave me too many tasks without asking me.'
      ],
      answer: 'Given our tight bandwidth, which deliverable should we prioritize first?',
      explanationKo: '여력의 한계(tight bandwidth)를 객관적으로 밝히고 의사결정권자에게 우선순위(prioritize)를 묻는 것이 최고의 소통법입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 이슈를 벤더사 리드에게 이미 상위 보고해 두었습니다" 빈칸 동사(1단어)를 쓰세요.',
        stimulusEn: 'We decided to __________ the outage to senior management.',
        answer: 'escalate',
        explanationKo: 'to부정사 뒤이므로 동사원형 escalate를 씁니다.'
      }
    },
    {
      id: 'd15-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '현황 + 병목 보고 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 진행 현황 및 병목 보고 문장을 완성하세요.',
      stimulusEn: "[ hit a bottleneck / in QA. / mostly on track, / We're / but we ]",
      answer: "We're mostly on track, but we hit a bottleneck in QA.",
      explanationKo: '긍정적 현황(mostly on track) 뒤에 접속사 but으로 병목(hit a bottleneck)을 매끄럽게 연결합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "월요일 출시 일정은 아직 순조롭게 진행 중인가요?" (Are we still / on track / for Monday’s launch?)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "Are we still on track for Monday's launch?",
        explanationKo: 'Are we still on track for [일정]? 의문문 패턴입니다.'
      }
    },
    {
      id: 'd15-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '우선순위 조정 배열',
      questionKo: '주어진 청크를 배열하여 우선순위 조정 제안 문장을 완성하세요.',
      stimulusEn: "[ the redesign / on the back burner / Let's / until next sprint. / put ]",
      answer: "Let's put the redesign on the back burner until next sprint.",
      explanationKo: "Let's put [업무] on the back burner until [시점] 어순입니다.",
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이번 주에는 결제 안정화를 최우선으로 둡시다." (Let’s prioritize / checkout stability / this week.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "Let's prioritize checkout stability this week.",
        explanationKo: "Let's prioritize [핵심 과제] + [기간] 패턴입니다."
      }
    },
    {
      id: 'd15-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '마감 연기 보고 영작',
      questionKo: '우리말 뜻에 맞게 주어진 단어를 활용해 자연스러운 지연 대응 문장을 완성하세요.',
      stimulusEn: '우리말: 마감일을 이틀 뒤로 미뤄야 할 수도 있습니다. (We may need to / push back / the deadline / by two days.)',
      answer: 'We may need to push back the deadline by two days.',
      acceptableAlt: ['We may need to push the deadline back by two days.'],
      explanationKo: 'may need to로 완충을 깔고 push back the deadline by two days로 명확히 전달합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "오늘 퇴근 전까지 수정된 실행 과제를 공유드릴게요." (I’ll share / the revised action items / by EOD today.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "I'll share the revised action items by EOD today.",
        explanationKo: 'share + 목적어 + by EOD today 어순입니다.'
      }
    },
    {
      id: 'd15-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시 교정 서술형',
      questionKo: '다음 콩글리시 문장을 오늘 배운 표현(bandwidth, by EOD)으로 바르게 고쳐 쓰세요.',
      stimulusEn: "오류 문장: I don't have enough energy space to finish both until EOD.",
      answer: "I don't have enough bandwidth to finish both by EOD.",
      acceptableAlt: ["I don't have the bandwidth to finish both by EOD."],
      explanationKo: 'energy space → bandwidth, 완료 기한 until EOD → by EOD로 교정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: I will be responsible for the vendor follow-up. → take ownership of를 써서 고치세요.',
        stimulusEn: "힌트: I'll ~ the vendor follow-up.",
        answer: "I'll take ownership of the vendor follow-up.",
        explanationKo: 'take ownership of는 훨씬 주도적이고 전문적인 표현입니다.'
      }
    },
    {
      id: 'd15-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '실전 통문장 영작',
      questionKo: '다음 우리말을 영어로 자연스럽게 작성하세요.',
      stimulusEn: '우리말: 벤더사 리드에게 이미 이 장애 요인을 상위 보고해 두었습니다. (힌트: I’ve already / escalated / this blocker / to the vendor lead.)',
      answer: "I've already escalated this blocker to the vendor lead.",
      acceptableAlt: ["I have already escalated this blocker to the vendor lead."],
      explanationKo: 'escalate [장애 요인] to [상위 담당자]는 글로벌 IT·오피스 실무 핵심 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "디자인 리뷰 전에 잠재적 지연을 미리 알리고 싶었습니다." (I wanted to flag / a potential delay / before the design review.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'I wanted to flag a potential delay before the design review.',
        explanationKo: 'flag a potential delay로 선제적 리스크 관리 태도를 보여줍니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "Hey, quick standup check! Are we still on track to ship the new onboarding flow by Friday, or are you running into any blockers?",
    openingQuestionKo:
      '안녕하세요, 짧은 스탠드업 체크예요! 금요일까지 새 온보딩 플로우 배포 일정 순조롭게 가고 있나요, 아니면 막히는 장애 요인이 있나요? (대체로 순조롭지만 QA 병목이 생겨 마감 연기나 우선순위 조정이 필요하다고 프로답게 보고해 보세요!)',
    followUpQuestionEn:
      "Thanks for flagging that early! Between the core onboarding flow and the extra analytics dashboard, which one should we put on the back burner so your team has enough bandwidth?",
    followUpQuestionKo:
      '미리 공유해 줘서 고마워요! 핵심 온보딩 플로우와 추가 애널리틱스 대시보드 중 어떤 것을 후순위로 미뤄야 팀 여력이 확보될까요?',
    recommendedChunks: [
      'mostly on track',
      'hit a bottleneck in QA',
      'escalated the blocker',
      'push back the deadline by ~',
      'put ~ on the back burner',
      'take ownership of'
    ],
    modelAnswerEn:
      "Most front-end deliverables are on track, though I wanted to flag a bottleneck in QA integration. I've already escalated the blocker, and if we put the analytics dashboard on the back burner this week, we'll have the bandwidth to ship core onboarding—or at worst push back the deadline by one day."
  }
};
