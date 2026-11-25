import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day18Module: DayLessonModule = {
  dayNumber: 18,
  weekNumber: 3,
  cefrLevel: 'b2',
  isWeeklyReview: true,
  dayBadge: 'DAY 18 · WEEK 3 오피스 실무 종합 성취도 평가',
  categoryLabel: 'Week 3 총정리 리허설 & 20문항 오피스 종합평가',
  title: 'Week 3 실전 통합 리허설 & 3주차 오피스 종합평가',
  subtitle: 'Day 13~17의 화상회의·이메일·진행 보고·회의 반론·피드백 거절과 글로벌 오피스 핵심 이디엄을 1개의 실전 스토리와 20문항 종합평가로 완전 체화',
  heroImage: 'assets/scene_boardroom_pitch.jpg',
  secondaryImage: 'assets/scene_video_call.jpg',
  estimatedSprintMin: 10,
  estimatedLectureMin: 50,
  keyExpression: 'Week 3 Office Mastery: Remote Calls × Emails × Reports × Debates × Feedback',
  keySentenceByTier: {
    a1: 'I will share my screen, send the file, and finish our main task on time.',
    a2: 'Let me share my screen so we are on the same page about the launch schedule and budget.',
    b1: "Thanks for hopping on—I've attached the deck so we can get on the same page and iron out our final bottleneck.",
    b2: "I see where you're coming from on speed, but since our team is at capacity, let's get the green light on low-hanging fruit first and circle back with a ballpark figure by EOD.",
    c1: "At the end of the day, cutting corners won't move the needle; let's table the side scope that's off the table, iron out the QA blocker, and align on clear deliverables before we wrap up.",
    c2: "Having shared the revised roadmap ahead of this sync to ensure full cross-functional alignment, I'd recommend we fast-track high-leverage fixes that genuinely move the needle rather than overcommitting our bandwidth on peripheral scope."
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[18],
  readingPassage: {
    titleEn: 'One High-Stakes Friday at a Global Tech Team',
    titleKo: '[3주차 종합 케이스] 글로벌 테크 팀의 금요일 론칭 최종 점검 브리핑',
    genreBadge: '주간 통합 케이스 브리프 · Lv.4',
    estimatedMin: 6,
    paragraphsEn: [
      'At 9:00 AM sharp, Jiwon kicked off the Seoul–San Francisco launch readiness sync. After thanking everyone for hopping on and confirming that nobody was on mute, she shared her screen to get the ball rolling. When Liam briefly started breaking up on Wi-Fi, she stayed calm, asked him to switch off video, and walked the cross-functional team through the attached status memo so everyone was on the same page.',
      'Halfway through the call, the discussion turned to a payment API bottleneck that threatened Monday\'s deadline. Finance asked for a ballpark figure on potential overtime costs, while Sales suggested skipping a round of QA tests to keep the date. Jiwon validated Sales\'s urgency—saying she saw where they were coming from—but firmly noted that cutting corners was off the table because, at the end of the day, checkout reliability is what truly moves the needle for customer trust.',
      'Instead of overcommitting a team that was already at capacity, Jiwon proposed thinking outside the box: fast-tracking the low-hanging fruit fixes while putting the loyalty-points redesign on the back burner. Her director gave the plan an immediate green light. Within ten minutes, they ironed out the remaining action items, agreed to circle back by EOD with final sign-off, and wrapped up right on schedule.'
    ],
    paragraphsSlash: [
      'At 9:00 AM sharp, / Jiwon kicked off the Seoul–San Francisco launch readiness sync. / After thanking everyone for hopping on / and confirming that nobody was on mute, / she shared her screen to get the ball rolling. / When Liam briefly started breaking up on Wi-Fi, / she stayed calm, / asked him to switch off video, / and walked the cross-functional team / through the attached status memo / so everyone was on the same page.',
      'Halfway through the call, / the discussion turned to a payment API bottleneck / that threatened Monday\'s deadline. / Finance asked for a ballpark figure / on potential overtime costs, / while Sales suggested skipping a round of QA tests / to keep the date. / Jiwon validated Sales\'s urgency— / saying she saw where they were coming from— / but firmly noted that cutting corners was off the table / because, at the end of the day, / checkout reliability is what truly moves the needle / for customer trust.',
      'Instead of overcommitting a team / that was already at capacity, / Jiwon proposed thinking outside the box: / fast-tracking the low-hanging fruit fixes / while putting the loyalty-points redesign on the back burner. / Her director gave the plan an immediate green light. / Within ten minutes, / they ironed out the remaining action items, / agreed to circle back by EOD with final sign-off, / and wrapped up right on schedule.'
    ],
    paragraphsKo: [
      '오전 9시 정각, 지원은 서울과 샌프란시스코를 잇는 론칭 최종 점검 회의를 시작했습니다. 참석해 준 모두에게 감사 인사를 건네고 아무도 음소거 상태가 아님을 확인한 뒤, 본격적인 논의를 시작하기 위해 화면을 공유했습니다. 리암의 와이파이 연결이 잠시 끊기기 시작하자 침착하게 카메라를 꺼달라고 요청했고, 모든 부서가 같은 이해를 공유할 수 있도록 첨부한 현황 보고서를 단계별로 차근차근 설명했습니다.',
      '회의 중반, 논의는 월요일 마감일을 위협하는 결제 API 병목 구간으로 넘어갔습니다. 재무팀은 예상 초과근무 비용의 대략적인 추정치를 요청했고, 세일즈 팀은 출시일을 지키기 위해 QA 테스트를 한 차례 건너뛰자고 제안했습니다. 지원은 세일즈 팀의 긴박함에 충분히 공감한다고 인정하면서도, 결국 고객 신뢰에 실질적인 변화를 만드는 것은 결제 안정성이므로 품질을 대충 타협하는 편법은 결코 고려 대상이 될 수 없다고 단호히 선을 그었습니다.',
      '이미 업무량이 최대치에 달한 팀에 무리한 약속을 떠안기는 대신, 지원은 틀에서 벗어난 해결책을 제안했습니다. 빠르게 성과를 낼 수 있는 쉬운 수정 과제들을 패스트트랙으로 신속 처리하되 포인트 개편은 후순위로 미뤄두는 것이었습니다. 디렉터는 그 계획에 즉시 최종 진행 승인을 내렸습니다. 10분 만에 남은 실행 과제들을 매끄럽게 조율하고 오늘 업무 마감 전까지 최종 승인으로 회신하기로 합의한 뒤, 정각에 맞춰 회의를 완벽하게 마무리했습니다.'
    ],
    keyExpressions: [
      'on the same page',
      'ballpark figure',
      'cut corners / off the table',
      'at the end of the day / move the needle',
      'low-hanging fruit / green light',
      'iron out'
    ],
    comprehensionQuiz: [
      {
        id: 'd18-rq01',
        questionKo: '세일즈 팀이 제안한 "QA 테스트 생략"을 지원이 단호히 배제(off the table)한 핵심 이유는 무엇인가요?',
        options: [
          '재무팀이 초과근무 예산을 전액 삭감했기 때문에',
          '결국 고객 신뢰에 실질적 성과(move the needle)를 만드는 것은 결제 안정성이기 때문에',
          '리암의 화상회의 연결이 완전히 끊겼기 때문에',
          '디렉터가 출시 자체를 다음 분기로 연기했기 때문에'
        ],
        answer: '결국 고객 신뢰에 실질적 성과(move the needle)를 만드는 것은 결제 안정성이기 때문에',
        explanationKo: '둘째 문단 "cutting corners was off the table because, at the end of the day, checkout reliability is what truly moves the needle for customer trust"가 정확한 근거입니다.'
      },
      {
        id: 'd18-rq02',
        questionKo: '지원이 업무 포화(at capacity) 상태의 팀을 보호하면서 디렉터의 승인(green light)을 이끌어낸 해결책은?',
        options: [
          '쉬운 고효율 수정 과제(low-hanging fruit)를 신속 처리하고 포인트 개편은 후순위로 미뤘다',
          '모든 팀원에게 주말 야근을 강제 배정했다',
          '외부 에이전시에 결제 시스템 전체를 넘겼다',
          '월요일 출시를 아무 대안 없이 한 달 연기했다'
        ],
        answer: '쉬운 고효율 수정 과제(low-hanging fruit)를 신속 처리하고 포인트 개편은 후순위로 미뤘다',
        explanationKo: '셋째 문단 "fast-tracking the low-hanging fruit fixes while putting the loyalty-points redesign on the back burner"를 확인하세요.'
      },
      {
        id: 'd18-rq03',
        questionKo: '본문에서 재무팀이 초과근무 비용에 대해 요청한 "대략적인 추정치"를 뜻하는 오피스 이디엄은?',
        options: ['a green light', 'a ballpark figure', 'low-hanging fruit', 'the bottom line'],
        answer: 'a ballpark figure',
        explanationKo: 'ballpark figure는 정확한 계산 전 어림잡은 대략적인 수치를 뜻하는 미국 비즈니스 필수 이디엄입니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd18-v01',
      word: 'on the same page',
      phonetic: '/ɑːn ðə seɪm peɪdʒ/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '같은 이해·방향을 공유하고 있는',
      meaningEn: 'having a shared understanding or agreement about a plan',
      nuanceTipKo: '회의 시작과 끝에 "Let\'s make sure we\'re all on the same page(모두 같은 그림을 보고 있는지 확인하죠)"를 쓰면 싱크의 격이 달라집니다.',
      exampleEn: "Before we wrap up, let's recap our deadlines so everyone is on the same page.",
      exampleKo: '마무리하기 전에 모두가 같은 방향을 공유하도록 마감일을 한 번 정리하죠.'
    },
    {
      id: 'd18-v02',
      word: 'ballpark figure',
      phonetic: '/ˈbɔːlpɑːrk ˈfɪɡjər/',
      pos: '명사구',
      cefr: 'b2',
      meaningKo: '대략적인 추정치, 어림잡은 숫자',
      meaningEn: 'a rough numerical estimate rather than an exact calculation',
      nuanceTipKo: '야구장(ballpark) 안에 공이 떨어질 대략의 범위에서 나온 표현! 견적·예산·일정 추정을 가볍게 물을 때 "Could you give me a ballpark figure?"라고 씁니다.',
      exampleEn: "I don't need the exact quote yet—just a ballpark figure for the Q4 campaign.",
      exampleKo: '정확한 견적까지는 아직 필요 없고, 4분기 캠페인의 대략적인 추정치만 알려주세요.'
    },
    {
      id: 'd18-v03',
      word: 'get the green light',
      phonetic: '/ɡet ðə ɡriːn laɪt/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '(프로젝트·예산의) 최종 진행 승인을 받다',
      meaningEn: 'receive official permission to proceed with a project or plan',
      nuanceTipKo: '신호등 초록불처럼 Go 사인을 받는 이미지! 승인해 주다는 "give ~ the green light"로 씁니다.',
      exampleEn: 'Once we get the green light from finance, we can kick off hiring immediately.',
      exampleKo: '재무팀에서 최종 진행 승인을 받으면 바로 채용을 시작할 수 있습니다.'
    },
    {
      id: 'd18-v04',
      word: 'move the needle',
      phonetic: '/muːv ðə ˈniːdl/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '눈에 띄는 실질적인 변화·성과를 만들어 내다',
      meaningEn: 'make a noticeable, measurable impact on key results',
      nuanceTipKo: '계기판 바늘(needle)이 실제로 확 움직이는 모습! 우선순위를 따질 때 "Will this actually move the needle?"은 실리콘밸리 임원들의 최애 질문입니다.',
      exampleEn: 'Let’s focus our limited bandwidth on features that actually move the needle on retention.',
      exampleKo: '제한된 여력을 고객 유지율에 실질적인 변화를 만드는 기능에 집중합시다.'
    },
    {
      id: 'd18-v05',
      word: 'think outside the box',
      phonetic: '/θɪŋk ˌaʊtˈsaɪd ðə bɑːks/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '고정관념에서 벗어나 창의적으로 생각하다',
      meaningEn: 'approach a problem creatively from an unconventional perspective',
      nuanceTipKo: '예산이나 인력이 빠듯한 병목 상황에서 새로운 돌파구를 찾을 때 브레인스토밍에서 자주 쓰입니다.',
      exampleEn: 'With a flat marketing budget, we need to think outside the box for Q4 growth.',
      exampleKo: '마케팅 예산이 동결된 만큼 4분기 성장을 위해 고정관념을 깬 아이디어가 필요합니다.'
    },
    {
      id: 'd18-v06',
      word: 'off the table',
      phonetic: '/ɔːf ðə ˈteɪbl/',
      pos: '전치사구',
      cefr: 'b2',
      meaningKo: '(협상·논의에서) 더 이상 고려 대상이 아닌, 제외된',
      meaningEn: 'no longer available as an option or open for negotiation',
      nuanceTipKo: '반대말은 on the table(고려 중인/협상 테이블 위의). 절대 양보할 수 없는 원칙을 밝힐 때 "Cutting QA is off the table"처럼 씁니다.',
      exampleEn: 'Skipping security checks is completely off the table, even with a tight deadline.',
      exampleKo: '마감이 빠듯하더라도 보안 점검을 생략하는 건 전혀 고려 대상이 아닙니다.'
    },
    {
      id: 'd18-v07',
      word: 'at the end of the day',
      phonetic: '/æt ði end əv ðə deɪ/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '결국에 가서는, 본질적으로 가장 중요한 것은',
      meaningEn: 'ultimately, when considering what matters most overall',
      nuanceTipKo: '긴 회의 토론을 핵심 본질로 수렴시킬 때 쓰는 최고의 정리 연결어! (주의: "오늘 퇴근 전까지"는 by EOD이고, "결국/본질적으로"가 at the end of the day입니다!)',
      exampleEn: 'At the end of the day, customer trust matters far more than shipping two days early.',
      exampleKo: '결국 가장 중요한 것은 이틀 빨리 출시하는 것보다 고객의 신뢰입니다.'
    },
    {
      id: 'd18-v08',
      word: 'low-hanging fruit',
      phonetic: '/ˌloʊ ˈhæŋɪŋ fruːt/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '적은 노력으로 빠르게 성과를 낼 수 있는 쉬운 과제',
      meaningEn: 'easily achievable tasks that deliver quick, high-value wins',
      nuanceTipKo: '손만 뻗으면 바로 딸 수 있는 낮은 가지의 열매 비유! 리소스가 부족할 때 빠른 성과(quick wins)를 먼저 챙기자고 제안할 때 최고입니다.',
      exampleEn: "Let's tackle the low-hanging fruit this week to build momentum before the big launch.",
      exampleKo: '대규모 출시 전에 추진력을 얻도록 이번 주엔 빠르게 성과를 낼 수 있는 쉬운 과제부터 처리하죠.'
    },
    {
      id: 'd18-v09',
      word: 'get the ball rolling',
      phonetic: '/ɡet ðə bɔːl ˈroʊlɪŋ/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '(프로젝트·회의를) 본격적으로 시작하다, 물꼬를 트다',
      meaningEn: 'initiate a process, discussion, or project so momentum starts',
      nuanceTipKo: '회의 오프닝이나 새 프로젝트 킥오프에서 "Let\'s get the ball rolling!"이라고 외치면 에너지가 확 살아납니다.',
      exampleEn: "I'll send out the kickoff agenda today to get the ball rolling on Q4 planning.",
      exampleKo: '4분기 기획의 물꼬를 트기 위해 오늘 킥오프 아젠다를 발송하겠습니다.'
    },
    {
      id: 'd18-v10',
      word: 'alignment',
      phonetic: '/əˈlaɪnmənt/',
      pos: '명사',
      cefr: 'b2',
      meaningKo: '(팀·부서 간 목표·방향의) 정렬, 의견 일치',
      meaningEn: 'shared agreement on goals, priorities, and next steps across teams',
      nuanceTipKo: '동사 align과 함께 "get alignment across teams(부서 간 방향을 맞추다)"는 글로벌 기업 임원 보고 단골 어휘입니다.',
      exampleEn: 'We need clear alignment between product and sales before announcing the new tiers.',
      exampleKo: '새 요금제를 발표하기 전에 프로덕트 팀과 세일즈 팀 간의 명확한 방향 정렬이 필요합니다.'
    },
    {
      id: 'd18-v11',
      word: 'bottom line',
      phonetic: '/ˈbɑːtəm laɪn/',
      pos: '명사구',
      cefr: 'b2',
      meaningKo: '핵심 요점, 결론 (재무상으로는 최종 순이익)',
      meaningEn: 'the most fundamental point or final financial net profit',
      nuanceTipKo: '장황한 설명을 한 줄로 압축할 때 "The bottom line is that ~"으로 시작하면 임원 보고의 설득력이 폭발합니다.',
      exampleEn: "The bottom line is that we can't launch reliably without completing payment QA.",
      exampleKo: '결론은 결제 QA를 완료하지 않고서는 안정적으로 출시할 수 없다는 것입니다.'
    },
    {
      id: 'd18-v12',
      word: 'fast-track',
      phonetic: '/ˈfæst træk/',
      pos: '동사/명사',
      cefr: 'c1',
      meaningKo: '(중요 과제를) 패스트트랙으로 신속 처리하다',
      meaningEn: 'accelerate the progress of a high-priority task or approval',
      nuanceTipKo: '급한 승인이나 핵심 버그 수정을 우선 트랙으로 당겨 처리할 때 "fast-track the approval"처럼 동사로 씁니다.',
      exampleEn: 'Legal agreed to fast-track the vendor agreement so we stay on track.',
      exampleKo: '일정을 지킬 수 있도록 법무팀이 벤더 계약서 검토를 신속 처리해 주기로 했습니다.'
    },
    {
      id: 'd18-v13',
      word: 'iron out',
      phonetic: '/ˈaɪərn aʊt/',
      pos: '구동사',
      cefr: 'b2',
      meaningKo: '(구겨진 옷을 다리듯) 세부 문제·이견을 매끄럽게 조율해 해결하다',
      meaningEn: 'resolve minor remaining details, bugs, or disagreements smoothly',
      nuanceTipKo: '큰 틀은 합의되었고 자잘한 세부 사항만 다듬으면 될 때 "iron out the remaining details"가 완벽한 원어민 구동사입니다.',
      exampleEn: 'We just need a 15-minute sync to iron out the last few details before launch.',
      exampleKo: '출시 전에 남은 자잘한 세부 사항 몇 가지만 조율하려면 15분 싱크만 있으면 됩니다.'
    },
    {
      id: 'd18-v14',
      word: "wrap one's head around",
      phonetic: '/ræp wʌnz hed əˈraʊnd/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '(복잡한 개념·상황을) 제대로 이해하고 소화하다',
      meaningEn: 'fully understand or come to terms with a complex idea or change',
      nuanceTipKo: '복잡한 리포트나 갑작스러운 스펙 변경을 소화할 시간이 필요할 때 "Give me a moment to wrap my head around these numbers"라고 씁니다.',
      exampleEn: "Let me spend an hour wrapping my head around the revised forecast before I circle back.",
      exampleKo: '회신드리기 전에 수정된 예측치를 제대로 소화할 시간 한 시간만 주세요.'
    },
    {
      id: 'd18-v15',
      word: 'cut corners',
      phonetic: '/kʌt ˈkɔːrnərz/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '(시간·비용을 아끼려고) 절차를 생략하다, 편법을 쓰다',
      meaningEn: 'do something hastily or cheaply at the expense of quality or safety',
      nuanceTipKo: '코너를 제대로 돌지 않고 가로질러 대충 넘기는 모습! 품질 타협을 거부할 때 "We refuse to cut corners on security"처럼 씁니다.',
      exampleEn: "We'd rather push the deadline back two days than cut corners on quality.",
      exampleKo: '품질을 대충 타협하느니 차라리 마감일을 이틀 미루겠습니다.'
    }
  ],
  dialogue: [
    {
      id: 'd18-t01',
      speaker: 'Jiwon',
      roleLabel: '프로덕트 매니저 · 서울',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'zoom-in',
      english: "Thanks for hopping on, everyone! Let me share my screen to get the ball rolling—can everyone see the attached launch brief?",
      slashBroken: 'Thanks for hopping on, everyone! / Let me share my screen / to get the ball rolling— / can everyone see / the attached launch brief?',
      korean: '모두 접속해 주셔서 감사합니다! 본격적으로 시작하기 위해 화면 공유할게요—첨부해 드린 론칭 브리프 다들 잘 보이시나요?',
      keyHighlight: 'share my screen to get the ball rolling',
      noteKo: 'Day 13(화상회의 오프닝·화면 공유) + Day 14(attached) + Day 18(get the ball rolling)을 한 문장에 자연스럽게 결합했습니다.'
    },
    {
      id: 'd18-t02',
      speaker: 'Liam',
      roleLabel: '엔지니어링 리드 · 샌프란시스코',
      voicePitch: 0.91,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-right',
      english: "Loud and clear! Quick status update: front-end is ahead of schedule, but we hit a bottleneck in payment QA and may need to push back launch by 48 hours.",
      slashBroken: 'Loud and clear! / Quick status update: / front-end is ahead of schedule, / but we hit a bottleneck in payment QA / and may need to push back launch / by 48 hours.',
      korean: '선명하게 잘 보이고 들려요! 간단히 현황 보고드리면, 프론트엔드는 일정보다 앞서 있지만 결제 QA에서 병목이 생겨 출시를 48시간 미뤄야 할 수도 있습니다.',
      keyHighlight: 'hit a bottleneck in payment QA',
      noteKo: 'Day 15의 3단 리스크 보고 공식(ahead of schedule → hit a bottleneck → push back by 48 hours) 복습입니다.'
    },
    {
      id: 'd18-t03',
      speaker: 'Rachel',
      roleLabel: '프로덕트 디렉터',
      voicePitch: 1.03,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-left',
      english: "Appreciate the heads-up, Liam. Before we decide, can you give me a ballpark figure on the risk if we trim one QA cycle to hold Monday's date?",
      slashBroken: "Appreciate the heads-up, Liam. / Before we decide, / can you give me a ballpark figure on the risk / if we trim one QA cycle / to hold Monday's date?",
      korean: '미리 알려줘서 고마워요, 리암. 결정하기 전에, 월요일 일정을 지키려고 QA 사이클을 하나 줄이면 리스크가 대략 어느 정도일지 어림잡아 말씀해 주실 수 있나요?',
      keyHighlight: 'give me a ballpark figure',
      noteKo: 'Day 17(appreciate the heads-up)과 Day 18 핵심 이디엄(ballpark figure)이 자연스럽게 이어집니다.'
    },
    {
      id: 'd18-t04',
      speaker: 'Jiwon',
      roleLabel: '프로덕트 매니저 · 서울',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'zoom-in',
      english: "May I jump in here? I totally see where you're coming from on keeping momentum, Rachel, but cutting corners on payment QA has to be off the table.",
      slashBroken: "May I jump in here? / I totally see where you're coming from / on keeping momentum, Rachel, / but cutting corners on payment QA / has to be off the table.",
      korean: '잠깐 끼어들어도 될까요? 추진력을 유지하려는 취지는 충분히 이해하지만 레이첼, 결제 QA에서 편법을 쓰는 건 결코 고려 대상이 될 수 없습니다.',
      keyHighlight: 'cutting corners on payment QA has to be off the table',
      noteKo: 'Day 16의 정중한 끼어들기·공감 반론(jump in / see where you\'re coming from)과 Day 18 이디엄(cut corners / off the table)의 완벽한 조화입니다.'
    },
    {
      id: 'd18-t05',
      speaker: 'Jiwon',
      roleLabel: '프로덕트 매니저 · 서울',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-right',
      english: "At the end of the day, checkout reliability is what really moves the needle. Since our team is at capacity, what if we fast-track the low-hanging fruit fixes and put the loyalty redesign on the back burner?",
      slashBroken: 'At the end of the day, / checkout reliability is what really moves the needle. / Since our team is at capacity, / what if we fast-track the low-hanging fruit fixes / and put the loyalty redesign on the back burner?',
      korean: '결국 실질적 성과를 만드는 건 결제 안정성입니다. 팀 여력이 최대치인 만큼, 빠르게 성과가 나는 핵심 수정만 패스트트랙 처리하고 포인트 개편은 후순위로 미루면 어떨까요?',
      keyHighlight: 'what really moves the needle',
      noteKo: 'at the end of the day(본질) + move the needle(실질 성과) + at capacity(Day 17) + back burner(Day 15)가 한 번에 녹아든 시니어 설득 화법입니다.'
    },
    {
      id: 'd18-t06',
      speaker: 'Rachel',
      roleLabel: '프로덕트 디렉터',
      voicePitch: 1.03,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-left',
      english: "That's spot on—you have my green light! Let's iron out the revised action items right now so product, finance, and sales stay in full alignment.",
      slashBroken: "That's spot on— / you have my green light! / Let's iron out the revised action items right now / so product, finance, and sales / stay in full alignment.",
      korean: '정확히 핵심을 찔렀네요—최종 승인합니다! 프로덕트, 재무, 세일즈 팀이 완벽하게 방향을 맞추도록 지금 바로 수정된 실행 과제를 조율하죠.',
      keyHighlight: 'you have my green light',
      noteKo: 'spot on(Day 16) + green light + iron out + alignment로 실행 결정을 확정합니다.'
    },
    {
      id: 'd18-t07',
      speaker: 'Liam',
      roleLabel: '엔지니어링 리드 · 샌프란시스코',
      voicePitch: 0.91,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'zoom-in',
      english: "Sounds like we're all on the same page! I'll take ownership of the QA tracker and circle back by EOD—let's wrap up two minutes early.",
      slashBroken: "Sounds like we're all on the same page! / I'll take ownership of the QA tracker / and circle back by EOD— / let's wrap up two minutes early.",
      korean: '모두 같은 이해를 공유한 것 같네요! QA 트래커는 제가 주도적으로 맡아서 오늘 마감 전까지 회신드리겠습니다. 2분 일찍 마무리하시죠.',
      keyHighlight: "we're all on the same page",
      noteKo: 'on the same page(합의 확인) + take ownership of(Day 15) + circle back by EOD(Day 14/15) + wrap up(Day 13)으로 Week 3 전체를 완벽하게 닫습니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · Week 3 오피스 5대 상황별 핵심 동사·표현 전환 매트릭스',
      coreFormula: '화상(hop on/break up) · 이메일(attach/circle back) · 보고(on track/bottleneck) · 회의(build on/reservations) · 거절(at capacity/meet halfway)',
      wrongKonglish: 'You are mute! Please reply my attach ASAP because our work is delayed and I disagree you.',
      rightNative: "Sorry, you're on mute! Per our call, I've attached the update—we hit a QA bottleneck, and while I see where you're coming from, cutting corners is off the table.",
      explanationKo:
        '3주차에 배운 5개 직무 상황은 실무에서 따로 떨어져 나오지 않고 하나의 프로젝트 안에서 연속으로 이어집니다. 화상회의에서 화면을 공유하고(Day 13), 회의 후 첨부 이메일로 팔로업하며(Day 14), 병목과 우선순위를 보고하고(Day 15), 이견을 완곡히 조율하고(Day 16), 과부하 업무는 타협점으로 방어하는(Day 17) 전체 흐름을 한 덩어리로 연결해 발화하세요.',
      registerSpectrum: {
        casual: "Quick sync recap—we're on the same page, skipping QA is off the table, and I'll circle back by EOD!",
        standard: "Thanks for hopping on—I've attached the revised action items so we stay on the same page, and I'll circle back by EOD.",
        formal: 'Following our alignment session, please find the finalized deliverables attached; we have received the green light to fast-track core fixes while keeping quality standards intact.'
      }
    },
    {
      title: '원리 02 · 오피스 핵심 이디엄의 그림 해석법: 의미 혼동 주의 쌍 비교',
      coreFormula: 'at the end of the day (결국/본질적으로) ≠ by EOD (오늘 퇴근 전까지) | pushback (반발) ≠ push back (미루다)',
      wrongKonglish: "I'll send the ballpark figure at the end of the day (= 6 PM today).",
      rightNative: "I'll send a ballpark figure by EOD today—at the end of the day, accuracy matters most.",
      explanationKo:
        '한국 학습자들이 3주차에서 가장 많이 헷갈리는 두 쌍입니다! ① "오늘 업무 마감 전까지"는 반드시 by EOD(end of day)이며, at the end of the day는 시간 표현이 아니라 "결국에 가서는/본질적으로"라는 뜻의 이디엄입니다. ② 띄어 쓴 구동사 push back은 "일정을 미루다", 붙여 쓴 명사 pushback은 "반발·이견"을 뜻합니다.',
      registerSpectrum: {
        casual: "I'll ping you a ballpark number by EOD—at the end of the day, we just need to move the needle.",
        standard: "I'll share a ballpark figure by EOD today; at the end of the day, customer trust is what moves the needle.",
        formal: 'We will submit preliminary estimates by end of business today; ultimately, long-term reliability remains our primary bottom line.'
      }
    },
    {
      title: '원리 03 · 3주차 최다 오답 콩글리시 TOP 4 최종 방어 체크리스트',
      coreFormula: '① on mute (X: are mute) ② appreciate + V-ing/명사 (X: to V) ③ by EOD (X: until EOD) ④ walk [사람] through [자료] (X: explain [사람] [자료])',
      wrongKonglish: 'I appreciate you to explain me the file until EOD while I am mute.',
      rightNative: "I really appreciate you walking me through the deck by EOD—oops, I was on mute!",
      explanationKo:
        '실제 글로벌 오피스에서 한국인의 영어 신뢰도를 가장 크게 깎는 4가지 어법 함정입니다. ① 마이크 상태는 전치사 on(on mute), ② appreciate와 consider 뒤에는 반드시 동명사(V-ing), ③ 완료 마감 시점은 until이 아닌 by(by EOD), ④ 사람을 바로 목적어로 쓸 때는 explain 대신 walk [사람] through [자료]를 쓰는 원칙을 완벽히 체화하세요.',
      registerSpectrum: {
        casual: 'Thanks for walking me through the deck by EOD—appreciate you jumping in!',
        standard: 'I really appreciate you walking us through the revised slides and sharing the notes by EOD.',
        formal: 'We sincerely appreciate your walking the leadership team through the updated roadmap prior to end of business.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd18-s01',
      drillType: 'chunk-build',
      promptKo: '모두가 같은 방향을 공유하고 있는지 마무리 전에 확인하죠.',
      promptEnHint: 'make sure + on the same page 조합을 만드세요.',
      targetEn: "Let's make sure we're all on the same page.",
      chunks: ["Let's make sure", "we're all", 'on the', 'same page.'],
      explanationKo: '회의 오프닝·마무리에서 합의를 점검하는 대표 오피스 이디엄입니다.'
    },
    {
      id: 'd18-s02',
      drillType: 'konglish-fix',
      promptKo: '"오늘 퇴근 전까지 대략적인 추정치를 공유드리겠습니다."',
      promptEnHint: '"오늘 퇴근 전까지(by EOD)"와 "결국(at the end of the day)"을 구분하세요!',
      targetEn: "I'll share a ballpark figure by EOD today.",
      wrongKonglishOption: "I'll share a ballpark figure at the end of the day today.",
      explanationKo: '시간 마감 기한은 by EOD이며, at the end of the day는 "결국/본질적으로"라는 뜻입니다.'
    },
    {
      id: 'd18-s03',
      drillType: 'active-blank',
      promptKo: '결제 QA에서 편법을 쓰는 것은 전혀 고려 대상이 아닙니다.',
      promptEnHint: '고려 대상에서 제외된: ___ the table (3글자)',
      targetEn: 'Cutting corners on QA is off the table.',
      blankData: {
        before: 'Cutting corners on QA is',
        answer: 'off',
        after: 'the table.',
        firstLetterHint: 'o__ (3글자)'
      },
      explanationKo: '협상·논의에서 완전히 배제된 선택지를 off the table이라고 합니다.'
    },
    {
      id: 'd18-s04',
      drillType: 'chunk-build',
      promptKo: '결국 고객 유지율에 실질적인 변화를 만드는 기능에 집중해야 합니다.',
      promptEnHint: 'At the end of the day + move the needle을 연결하세요.',
      targetEn: 'At the end of the day, this will move the needle.',
      chunks: ['At the end', 'of the day,', 'this will', 'move the needle.'],
      explanationKo: 'at the end of the day(본질)와 move the needle(실질 성과)의 조합입니다.'
    },
    {
      id: 'd18-s05',
      drillType: 'active-blank',
      promptKo: '재무팀에서 최종 진행 승인을 받으면 바로 시작할 수 있습니다.',
      promptEnHint: '최종 진행 승인: get the _____ light (5글자)',
      targetEn: 'Once we get the green light, we can launch.',
      blankData: {
        before: 'Once we get the',
        answer: 'green',
        after: 'light, we can launch.',
        firstLetterHint: 'g____ (5글자)'
      },
      explanationKo: '프로젝트 최종 진행 허가를 get the green light라고 표현합니다.'
    },
    {
      id: 'd18-s06',
      drillType: 'konglish-fix',
      promptKo: '"죄송해요, 목소리가 끊기고 아직 음소거 상태이신 것 같아요."',
      promptEnHint: 'Day 13 핵심 표현: on mute와 breaking up을 확인하세요.',
      targetEn: "Sorry, you're breaking up and were just on mute.",
      wrongKonglishOption: "Sorry, you're cutting and were just mute.",
      explanationKo: '음성 끊김은 breaking up, 마이크 꺼짐 상태는 반드시 on mute입니다.'
    },
    {
      id: 'd18-s07',
      drillType: 'chunk-build',
      promptKo: '출시 전에 남은 세부 사항 몇 가지만 매끄럽게 조율하죠.',
      promptEnHint: 'iron out + the remaining details 청크를 조립하세요.',
      targetEn: "Let's iron out the remaining details before launch.",
      chunks: ["Let's", 'iron out', 'the remaining details', 'before launch.'],
      explanationKo: '세부적인 문제나 이견을 매끄럽게 다듬어 해결하다는 iron out입니다.'
    },
    {
      id: 'd18-s08',
      drillType: 'active-blank',
      promptKo: '빠르게 성과를 낼 수 있는 쉬운 과제들부터 패스트트랙 처리합시다.',
      promptEnHint: '손쉽게 성과를 내는 과제: low-hanging _____ (5글자)',
      targetEn: "Let's fast-track the low-hanging fruit first.",
      blankData: {
        before: "Let's fast-track the low-hanging",
        answer: 'fruit',
        after: 'first.',
        firstLetterHint: 'f____ (5글자)'
      },
      explanationKo: '적은 노력으로 즉각적 성과를 얻는 과제를 low-hanging fruit이라고 부릅니다.'
    },
    {
      id: 'd18-s09',
      drillType: 'konglish-fix',
      promptKo: '"일찍 귀띔해 주셔서 정말 감사해요—다만 이번 주는 업무량이 꽉 찼습니다."',
      promptEnHint: 'Day 17 핵심: appreciate + 동명사/명사 & at capacity를 확인하세요.',
      targetEn: "I really appreciate the heads-up, though I'm at capacity this week.",
      wrongKonglishOption: "I really appreciate to tell me early, though I'm full busy this week.",
      explanationKo: 'appreciate the heads-up과 at capacity로 정중하고 객관적인 경계를 표현합니다.'
    },
    {
      id: 'd18-s10',
      drillType: 'chunk-build',
      promptKo: '본격적으로 논의를 시작하기 위해 제 화면을 공유할게요.',
      promptEnHint: 'share my screen + to get the ball rolling을 연결하세요.',
      targetEn: 'Let me share my screen to get the ball rolling.',
      chunks: ['Let me', 'share my screen', 'to get', 'the ball rolling.'],
      explanationKo: '회의 시작의 물꼬를 틀 때 get the ball rolling이 탁월합니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd18-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: 'Day 13 복습 · 화상회의 연결',
      questionKo: '빈칸에 구동사(2단어, 진행형)를 넣어 "리암, 와이파이 때문에 목소리가 좀 끊기고 있어요"를 완성하세요.',
      stimulusEn: "Liam, you're __________ __________ a bit on Wi-Fi—could you turn off video?",
      answer: 'breaking up',
      explanationKo: '신호 불안정으로 음성이 뚝뚝 끊길 때는 진행형 breaking up을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "잠시만 기다려 주세요, 슬라이드를 띄울게요" 빈칸(3단어)을 채우세요.',
        stimulusEn: '__________ __________ __________ for a second while I share my screen.',
        answer: 'Bear with me',
        explanationKo: '기술 준비 중 정중한 대기 요청은 Bear with me입니다.'
      }
    },
    {
      id: 'd18-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: 'Day 14 복습 · 이메일 팔로업',
      questionKo: '빈칸에 구동사(2단어)를 넣어 "법무팀 확인 후 오늘 마감 전까지 다시 회신드리겠습니다"를 완성하세요.',
      stimulusEn: "I'll confirm with legal and __________ __________ to you by EOD.",
      answer: 'circle back',
      acceptableAlt: ['get back'],
      explanationKo: '확인 후 재회신 약속은 circle back(또는 get back)입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "어제 나눈 대화에 따라 최종 브리프를 첨부해 드립니다" 빈칸 과거분사(1단어)를 쓰세요.',
        stimulusEn: 'Per our conversation, please find the launch brief __________.',
        answer: 'attached',
        explanationKo: 'Please find [문서] attached가 격식 첨부 공식입니다.'
      }
    },
    {
      id: 'd18-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: 'Day 15 복습 · 병목 & 마감 보고',
      questionKo: '빈칸에 명사(1단어)를 넣어 "결제 QA 단계에서 병목 현상에 부딪혔습니다"를 완성하세요.',
      stimulusEn: 'We hit an unexpected __________ in payment QA this morning.',
      answer: 'bottleneck',
      acceptableAlt: ['blocker'],
      explanationKo: '업무 흐름을 정체시키는 병목 구간은 bottleneck(장애 요인은 blocker)입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "마감일을 48시간 뒤로 미뤄야 할 수도 있어요" 빈칸 구동사(2단어)를 채우세요.',
        stimulusEn: 'We may need to __________ __________ the deadline by 48 hours.',
        answer: 'push back',
        explanationKo: '마감일 연기는 push back the deadline입니다.'
      }
    },
    {
      id: 'd18-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: 'Day 16 복습 · 회의 반론 쿠션',
      questionKo: '빈칸에 2단어를 넣어 "추진력을 지키려는 취지는 충분히 이해하지만, 우려가 있습니다"를 완성하세요.',
      stimulusEn: "I totally see where you're __________ __________, though I have a few reservations.",
      answer: 'coming from',
      explanationKo: "I see where you're coming from은 반론 전 최고의 공감 표현입니다.",
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "앞사람 의견에 한 가지 덧붙이자면..." 빈칸 구동사(2단어)를 쓰세요.',
        stimulusEn: "To __________ __________ Rachel's point, we should check retention data too.",
        answer: 'build on',
        explanationKo: '앞사람의 논리에 살을 붙여 발전시킬 때 build on을 씁니다.'
      }
    },
    {
      id: 'd18-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: 'Day 17 복습 · 업무 포화 & 타협',
      questionKo: '빈칸에 전치사구(2단어)를 넣어 "이번 주엔 업무량이 최대치라 추가 자료 제작은 어렵습니다"를 완성하세요.',
      stimulusEn: "I'd love to help, but our team is completely __________ __________ this week.",
      answer: 'at capacity',
      explanationKo: '업무량이 꽉 찬 객관적 한계 상태는 at capacity입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "초안을 검토해 드리는 선에서 타협점을 맞춰볼게요" 빈칸(2단어: m___ h______)을 쓰세요.',
        stimulusEn: 'I can __________ you __________ by reviewing the outline Monday.',
        answer: 'meet halfway',
        explanationKo: '서로 한 발씩 양보하는 타협은 meet ~ halfway입니다.'
      }
    },
    {
      id: 'd18-e06',
      number: 6,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: 'Day 18 핵심 · 오피스 이디엄',
      questionKo: '빈칸에 2단어를 넣어 "결국 고객 신뢰에 실질적 변화를 만드는 것은 결제 안정성입니다"를 완성하세요.',
      stimulusEn: 'Checkout reliability is what truly moves __________ __________ for customer trust.',
      answer: 'the needle',
      explanationKo: '눈에 띄는 실질적 성과를 만들어 내다는 move the needle입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "남은 세부 사항을 매끄럽게 조율해 해결합시다" 빈칸 구동사(2단어)를 쓰세요.',
        stimulusEn: "Let's __________ __________ the remaining action items before we wrap up.",
        answer: 'iron out',
        explanationKo: '자잘한 세부 사항과 이견을 매끄럽게 해결하다는 iron out입니다.'
      }
    },
    {
      id: 'd18-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'Day 13 복습 · 음소거 & walk through',
      questionKo: '화상회의 진행 중 어법과 비즈니스 매너가 모두 100% 정확한 문장은?',
      stimulusEn: 'Day 13 핵심 어법(on mute / walk through)을 점검하세요.',
      options: [
        "Sorry, you are mute! Also let me explain you slide three.",
        "Sorry, you're on mute! Once you unmute, I'll walk you through slide three.",
        'Your voice is dead! I will walk through you the slide three.',
        'Please open your microphone so I can explain about you the deck.'
      ],
      answer: "Sorry, you're on mute! Once you unmute, I'll walk you through slide three.",
      explanationKo: '음소거 상태는 on mute, 단계별 안내 구문은 walk [사람] through [자료]가 정확합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "화면이 멈췄어요—잠깐 나갔다가 다시 접속할게요" 빈칸(3단어: l__ b___ i_)을 채우세요.',
        stimulusEn: "My screen is frozen, so I'll drop off and __________ __________ __________.",
        answer: 'log back in',
        explanationKo: '재접속하다는 log back in입니다.'
      }
    },
    {
      id: 'd18-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'Day 14 복습 · 이메일 전치사 종합',
      questionKo: '다음 영문 이메일의 빈칸 (A), (B)에 들어갈 전치사가 바르게 짝지어진 것은?',
      stimulusEn: "I've CC'd finance (A) this thread to keep them in the loop, and please sign off (B) the final copy by Thursday.",
      options: [
        '(A) on — (B) on',
        '(A) in — (B) at',
        '(A) to — (B) for',
        '(A) at — (B) with'
      ],
      answer: '(A) on — (B) on',
      explanationKo: '이메일 참조는 CC [사람] on [스레드], 최종 승인은 sign off on [문서]로 둘 다 전치사 on을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "편하신 가장 빠른 시간에 검토해 주세요" 빈칸 2단어(e_______ c__________)를 쓰세요.',
        stimulusEn: 'Please review the attached agreement at your __________ __________.',
        answer: 'earliest convenience',
        explanationKo: '격식 회신 요청은 at your earliest convenience입니다.'
      }
    },
    {
      id: 'd18-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'Day 15 vs 18 · by EOD vs at the end of the day',
      questionKo: '다음 중 두 표현 `by EOD`와 `at the end of the day`가 문맥상 모두 정확하게 쓰인 문장은?',
      stimulusEn: '마감 기한 표현과 "결국/본질적으로" 이디엄의 차이를 구분하세요.',
      options: [
        "I'll send the deliverables at the end of the day (= 6 PM), because by EOD quality matters most.",
        "I'll send the deliverables by EOD today—at the end of the day, accuracy matters most.",
        "I'll send the deliverables until EOD today—at the end of the day means 5 PM.",
        "By EOD, customer trust is more important than speed, so reply until Friday."
      ],
      answer: "I'll send the deliverables by EOD today—at the end of the day, accuracy matters most.",
      explanationKo: '완료 기한은 by EOD, "결국/본질적으로 가장 중요한 것은"이라는 뜻의 이디엄은 at the end of the day입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "포인트 개편은 다음 분기까지 후순위로 미뤄두죠" 빈칸(3단어: t__ b___ b_____)을 채우세요.',
        stimulusEn: "Let's put the loyalty redesign on __________ __________ __________ until Q4.",
        answer: 'the back burner',
        explanationKo: '후순위 보류는 put ~ on the back burner입니다.'
      }
    },
    {
      id: 'd18-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'Day 16 복습 · 완곡 반론 & 검증',
      questionKo: '임원 회의에서 동료의 공격적인 일정 단축안에 대해 품위 있게 반론하고 리스크를 검증하는 가장 세련된 문장은?',
      stimulusEn: '공감 + 우려 + 검증 질문을 모두 갖춘 문장을 고르세요.',
      options: [
        'I disagree completely because your plan is reckless and wrong.',
        "You make a valid point on urgency; that said, I have reservations about cutting corners on QA—just to play devil's advocate, what if payments fail at launch?",
        'Stop talking about Monday launch because finance and QA hate it.',
        'I have reservation for a restaurant after this meeting, so let us end.'
      ],
      answer: "You make a valid point on urgency; that said, I have reservations about cutting corners on QA—just to play devil's advocate, what if payments fail at launch?",
      explanationKo: 'valid point(인정) + reservations about(완곡 우려) + play devil\'s advocate(객관적 리스크 검증)의 완벽한 조합입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "그 부수 안건은 다음 주 회의로 보류해 두죠" 빈칸 동사(1단어)를 쓰세요.',
        stimulusEn: "Let's __________ that side topic until next week's sync.",
        answer: 'table',
        explanationKo: '미국 비즈니스 영어에서 안건 보류는 동사 table을 씁니다.'
      }
    },
    {
      id: 'd18-e11',
      number: 11,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'Day 17 복습 · appreciate & consider 어법',
      questionKo: '피드백 대화에서 어법상 오류가 전혀 없는 문장은?',
      stimulusEn: 'appreciate와 consider 뒤의 동명사(V-ing) 구조를 확인하세요.',
      options: [
        'I appreciate you to give feedback, and have you considered to shorten slide four?',
        'I really appreciate you flagging slide four—have you considered simplifying the chart?',
        'I appreciate to hear your advice, so I will consider cut the bullets.',
        'I really appreciate you flagged me and considered simplify the deck.'
      ],
      answer: 'I really appreciate you flagging slide four—have you considered simplifying the chart?',
      explanationKo: 'appreciate(flagging)와 consider(simplifying) 모두 목적어로 동명사(V-ing)를 취합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "데이터 슬라이드에 조금 개선의 여지가 있습니다" 빈칸(3단어)을 채우세요.',
        stimulusEn: 'There is a bit of __________ __________ __________ on slide four.',
        answer: 'room for improvement',
        explanationKo: '개선의 여지는 room for improvement입니다.'
      }
    },
    {
      id: 'd18-e12',
      number: 12,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'Day 18 핵심 · 오피스 이디엄 의미 매칭',
      questionKo: '다음 중 비즈니스 이디엄과 그 의미가 **잘못** 짝지어진 것은?',
      stimulusEn: '3주차 종합 이디엄의 정확한 뉘앙스를 점검하세요.',
      options: [
        'ballpark figure — 대략적인 추정치',
        'get the green light — 프로젝트 최종 진행 승인을 받다',
        'cut corners — 마감에 쫓겨 절차를 생략하거나 대충 편법을 쓰다',
        'low-hanging fruit — 가장 어렵고 시간이 오래 걸리는 장기 연구 과제'
      ],
      answer: 'low-hanging fruit — 가장 어렵고 시간이 오래 걸리는 장기 연구 과제',
      explanationKo: 'low-hanging fruit은 반대로 "적은 노력으로 빠르게 성과를 낼 수 있는 손쉬운 고효율 과제"를 뜻합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "결론·핵심 요점은 결제 QA 없이는 출시할 수 없다는 것입니다" 빈칸(2단어: b_____ l___)을 쓰세요.',
        stimulusEn: "The __________ __________ is that we can't launch without payment QA.",
        answer: 'bottom line',
        explanationKo: '핵심 결론·요점은 the bottom line입니다.'
      }
    },
    {
      id: 'd18-e13',
      number: 13,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'Day 18 핵심 · off the table & fast-track',
      questionKo: '디렉터가 "Skipping security audits is off the table, so let\'s fast-track the legal review instead"라고 말했을 때의 정확한 의미는?',
      stimulusEn: 'off the table과 fast-track의 문맥을 파악하세요.',
      options: [
        '보안 감사를 생략하고 법무 검토는 취소하자',
        '보안 감사 생략은 고려 대상이 아니므로, 대신 법무 검토를 신속 처리(패스트트랙)하자',
        '보안 감사와 법무 검토를 모두 다음 분기로 미루자',
        '회의 테이블에서 보안 감사 보고서를 치워달라'
      ],
      answer: '보안 감사 생략은 고려 대상이 아니므로, 대신 법무 검토를 신속 처리(패스트트랙)하자',
      explanationKo: 'off the table은 논의·선택지 제외, fast-track은 최우선 신속 처리를 뜻합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "고정관념에서 벗어나 창의적으로 생각하다" 빈칸(3단어: o______ t__ b__)을 채우세요.',
        stimulusEn: 'With a tight budget, we need to think __________ __________ __________.',
        answer: 'outside the box',
        explanationKo: '창의적 발상은 think outside the box입니다.'
      }
    },
    {
      id: 'd18-e14',
      number: 14,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'Day 18 핵심 · wrap one\'s head around',
      questionKo: '갑자기 변경된 복잡한 가격표를 보고 "회신드리기 전에 수정된 수치를 제대로 소화하고 이해할 시간이 한 시간 정도 필요해요"라고 말할 때 빈칸에 알맞은 것은?',
      stimulusEn: 'Give me an hour to __________ these revised numbers before I circle back.',
      options: [
        'wrap my head around',
        'burn my bridges with',
        'cut corners on',
        'drop off from'
      ],
      answer: 'wrap my head around',
      explanationKo: '복잡한 정보나 상황을 충분히 이해하고 소화하다는 wrap one\'s head around입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "프로덕트 팀과 세일즈 팀 간의 명확한 방향 정렬·합의" 빈칸 명사(1단어: a________)를 쓰세요.',
        stimulusEn: 'We need clear __________ between product and sales before launch.',
        answer: 'alignment',
        explanationKo: '팀·부서 간 방향 일치와 정렬은 alignment입니다.'
      }
    },
    {
      id: 'd18-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Day 13/18 통합 · 화상회의 오프닝 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 화상회의 킥오프 문장을 완성하세요.',
      stimulusEn: '[ my screen / to get / Let me / the ball rolling. / share ]',
      answer: 'Let me share my screen to get the ball rolling.',
      explanationKo: '화면 공유(share my screen)와 회의 개시 이디엄(get the ball rolling)을 연결합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "모두 같은 방향을 공유하도록 마감일을 정리하죠." (Let’s recap / our deadlines / so everyone is / on the same page.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "Let's recap our deadlines so everyone is on the same page.",
        explanationKo: 'so everyone is on the same page로 회의 정리 목적을 분명히 밝힙니다.'
      }
    },
    {
      id: 'd18-e16',
      number: 16,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Day 14/15 통합 · 이메일 & 마감 보고 배열',
      questionKo: '주어진 청크를 배열하여 첨부 안내와 기한 내 회신 약속 문장을 완성하세요.',
      stimulusEn: "[ the revised deck, / I've attached / by EOD Friday. / and I'll / circle back ]",
      answer: "I've attached the revised deck, and I'll circle back by EOD Friday.",
      explanationKo: "I've attached ~ (첨부) + circle back by EOD Friday(기한 내 회신) 구조입니다.",
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "QA 트래커는 제가 주도적으로 맡겠습니다." (I’ll take ownership of / the QA tracker.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "I'll take ownership of the QA tracker.",
        explanationKo: 'take ownership of + 업무 패턴입니다.'
      }
    },
    {
      id: 'd18-e17',
      number: 17,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Day 16/18 통합 · 완곡 반론 + 원칙 제시',
      questionKo: '우리말 뜻에 맞게 주어진 단어를 활용해 자연스러운 회의 반론 문장을 완성하세요.',
      stimulusEn: '우리말: 어떤 취지인지 이해하지만, QA에서 편법을 쓰는 건 고려 대상이 아닙니다. (I see where you’re coming from, / but cutting corners on QA / is off the table.)',
      answer: "I see where you're coming from, but cutting corners on QA is off the table.",
      explanationKo: '공감 쿠션 뒤에 동명사 주어(cutting corners on QA) + is off the table로 원칙을 선명하게 전합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "결국 가장 중요한 것은 고객 신뢰입니다." (At the end of the day, / customer trust / matters most.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'At the end of the day, customer trust matters most.',
        explanationKo: 'At the end of the day로 핵심 본질을 강조합니다.'
      }
    },
    {
      id: 'd18-e18',
      number: 18,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Day 17/18 통합 · 거절 & 우선순위 전략',
      questionKo: '주어진 청크를 배열하여 업무 한계를 밝히며 대안을 제시하는 문장을 완성하세요.',
      stimulusEn: "[ fast-track / at capacity, / Since we're / the low-hanging fruit. / let's ]",
      answer: "Since we're at capacity, let's fast-track the low-hanging fruit.",
      explanationKo: '원인(Since we\'re at capacity) + 고효율 대안(fast-track the low-hanging fruit) 구조입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "디렉터님께 최종 진행 승인을 받았습니다!" (We got / the green light / from our director!)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'We got the green light from our director!',
        explanationKo: 'get the green light의 과거형 got the green light입니다.'
      }
    },
    {
      id: 'd18-e19',
      number: 19,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Week 3 종합 콩글리시 교정',
      questionKo: '다음 콩글리시 문장의 오류 3곳(mute, explain me, until EOD)을 모두 바르게 고쳐 쓰세요.',
      stimulusEn: '오류 문장: Sorry, you are mute! Could you explain me the deck until EOD?',
      answer: "Sorry, you're on mute! Could you walk me through the deck by EOD?",
      acceptableAlt: [
        'Sorry, you are on mute! Could you walk me through the deck by EOD?',
        "Sorry, you're on mute! Could you explain the deck to me by EOD?"
      ],
      explanationKo: 'are mute → on mute, explain me → walk me through(또는 explain ~ to me), until EOD → by EOD로 교정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: I appreciate you to give me a rough number. → appreciate + 동명사 & ballpark figure로 고치세요.',
        stimulusEn: '힌트: I appreciate you giving me ~.',
        answer: 'I appreciate you giving me a ballpark figure.',
        explanationKo: 'appreciate 뒤 동명사 giving과 대략적 추정치 a ballpark figure 조합입니다.'
      }
    },
    {
      id: 'd18-e20',
      number: 20,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Week 3 파이널 실전 통문장 영작',
      questionKo: '다음 우리말을 Week 3 핵심 표현(iron out, on the same page, wrap up)을 활용해 자연스러운 영어로 작성하세요.',
      stimulusEn: '우리말: 모두가 같은 방향을 공유하도록 남은 세부 사항을 조율한 뒤 회의를 마무리하죠. (힌트: Let’s iron out / the remaining details / so we’re all on the same page, / and then wrap up.)',
      answer: "Let's iron out the remaining details so we're all on the same page, and then wrap up.",
      acceptableAlt: [
        "Let's iron out the remaining details so everyone is on the same page, and then wrap up.",
        "Let's iron out the remaining details so we are all on the same page, and then wrap up."
      ],
      explanationKo: '실무 회의의 조율(iron out) → 합의 확인(on the same page) → 종료(wrap up)를 한 호흡에 완성하는 3주차 졸업 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "실질적 성과를 만드는 핵심 기능에 집중합시다." (Let’s focus on / core features / that move the needle.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "Let's focus on core features that move the needle.",
        explanationKo: '관계대명사절 that move the needle로 우선순위 기준을 명확히 세웁니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "Welcome to our Friday launch readiness sync! Thanks for hopping on—I saw the email you attached earlier. Quick question: with the payment QA bottleneck, should we skip the final test cycle to hold Monday's date, or do you recommend a different plan?",
    openingQuestionKo:
      '금요일 론칭 최종 점검 회의에 오신 걸 환영해요! 접속해 주셔서 감사하고 아까 첨부해 주신 이메일도 잘 봤어요. 짧은 질문 하나 드릴게요—결제 QA 병목이 있는데 월요일 일정을 지키려고 마지막 테스트를 생략할까요, 아니면 다른 대안을 추천하시나요? (Week 3 표현들을 총동원해 공감 → 품질 타협 불가 → 우선순위 조정·타협안 → 기한 내 회신 약속까지 한 번에 브리핑해 보세요!)',
    followUpQuestionEn:
      "That makes total sense—you have my green light! Let's iron out the revised action items so everyone is on the same page, and please circle back with a ballpark timeline by EOD.",
    followUpQuestionKo:
      '완전히 설득됐어요—최종 진행 승인합니다! 모두가 같은 방향을 공유하도록 수정된 실행 과제를 조율하고, 오늘 마감 전까지 대략적인 일정표로 회신해 주세요.',
    recommendedChunks: [
      "I see where you're coming from",
      'cutting corners is off the table',
      'at the end of the day / move the needle',
      'currently at capacity',
      'fast-track the low-hanging fruit',
      'put ~ on the back burner',
      'circle back by EOD'
    ],
    modelAnswerEn:
      "I really appreciate you flagging the deadline urgency, and I see where you're coming from on keeping momentum. That said, cutting corners on payment QA has to be off the table—at the end of the day, reliability is what truly moves the needle. Since our team is currently at capacity, I recommend we fast-track the low-hanging fruit fixes, put the secondary redesign on the back burner, and push launch back by 48 hours if needed. Once we get your green light, I'll iron out the action items and circle back by EOD."
  }
};
