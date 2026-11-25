import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day21Module: DayLessonModule = {
  dayNumber: 21,
  weekNumber: 4,
  cefrLevel: 'c1',
  isWeeklyReview: false,
  dayBadge: 'DAY 21 · 가정법 리스크 시뮬레이션 & 위기 대응',
  categoryLabel: '고급 가정법 · 도치 구문 · 사후 회고(Post-Mortem)',
  title: '그 변수를 미리 알았더라면 비상 계획을 가동했을 겁니다',
  subtitle: '2·3차 가정법과 C1 도치 구문(Had we known / Were we to)으로 리스크를 선제 예측하고 위기 회고를 프로답게 보고하기',
  heroImage: 'assets/scene_video_call.jpg',
  secondaryImage: 'assets/scene_late_office.jpg',
  estimatedSprintMin: 9,
  estimatedLectureMin: 48,
  keyExpression: 'what if ~ / had we known / contingency plan',
  keySentenceByTier: {
    a1: 'What if the server stops? We need a backup plan.',
    a2: 'If we had known about the bug earlier, we would have fixed it before launch.',
    b1: 'What if peak traffic doubles tonight? We should prepare a contingency plan just in case.',
    b2: 'Had we known about the vendor API limit earlier, we would have built a backup gateway to mitigate the outage.',
    c1: 'Had we spotted that blind spot during load testing, we would not be scrambling to contain the ripple effect today—so we must put a proactive contingency plan in place.',
    c2: 'Were peak volume to surge unexpectedly during Friday checkout, our automated failover would absorb the shock, ensuring we have a vetted safeguard to fall back on without escalating to executives.'
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[21],
  readingPassage: {
    titleEn: 'What If Peak Traffic Doubles? Building Bulletproof Contingency Plans',
    titleKo: '피크 트래픽이 두 배로 뛴다면? 완벽한 비상 대응 계획과 사후 회고 메모',
    genreBadge: 'Engineering Post-Mortem Memo · C1',
    estimatedMin: 5,
    paragraphsEn: [
      "During last Thursday's flash sale, a twelve-minute payment timeout disrupted nearly 4,000 checkout attempts across APAC. In our blameless post-mortem, one conclusion became unmistakable: had we known that our third-party payment partner enforced a silent regional rate cap, we would have deployed a secondary gateway weeks ago. In hindsight, treating their published throughput limit as guaranteed was a costly oversight that left us with a critical blind spot.",
      "What made the incident even more instructive was its ripple effect across customer support. If we had caught the bottleneck during staging, our operations team would not still be clearing a backlog of manual refund tickets today. Notice how past architectural decisions continue to shape present operational risk—which is why mature engineering teams move rapidly from hindsight to proactive resilience.",
      "Ahead of next month's global launch, we are running structured 'what if' drills to brace for every worst-case scenario. Were traffic to triple overnight, our new automated safeguard would reroute transactions within three seconds, giving checkout engineers a reliable contingency plan to fall back on. Should any secondary node show elevated latency, the alert protocol will escalate immediately to the on-call lead so we can mitigate impact before customers ever notice."
    ],
    paragraphsSlash: [
      "During last Thursday's flash sale, / a twelve-minute payment timeout disrupted / nearly 4,000 checkout attempts across APAC. / In our blameless post-mortem, / one conclusion became unmistakable: / had we known / that our third-party payment partner enforced a silent regional rate cap, / we would have deployed a secondary gateway weeks ago. / In hindsight, / treating their published throughput limit as guaranteed / was a costly oversight / that left us with a critical blind spot.",
      "What made the incident even more instructive / was its ripple effect across customer support. / If we had caught the bottleneck during staging, / our operations team would not still be clearing / a backlog of manual refund tickets today. / Notice how past architectural decisions / continue to shape present operational risk— / which is why mature engineering teams move rapidly / from hindsight to proactive resilience.",
      "Ahead of next month's global launch, / we are running structured 'what if' drills / to brace for every worst-case scenario. / Were traffic to triple overnight, / our new automated safeguard would reroute transactions / within three seconds, / giving checkout engineers a reliable contingency plan / to fall back on. / Should any secondary node show elevated latency, / the alert protocol will escalate immediately / to the on-call lead / so we can mitigate impact / before customers ever notice."
    ],
    paragraphsKo: [
      '지난 목요일 플래시 세일 도중 12분간의 결제 시간 초과 장애가 발생해 APAC 전역에서 약 4,000건의 결제 시도가 중단되었습니다. 비난 없는 사후 원인 분석 회고에서 하나의 결론이 명백해졌습니다. 외부 결제 파트너사가 비공개 지역별 호출 제한을 두고 있다는 사실을 우리가 미리 알았더라면 몇 주 전에 보조 게이트웨이를 구축했을 것입니다. 돌이켜보면 그들이 공표한 처리량 한도를 보장된 수치로 여긴 것은 우리에게 치명적인 사각지대를 남긴 뼈아픈 누락이었습니다.',
      '이번 장애가 더욱 큰 교훈을 준 이유는 고객 지원 팀 전반으로 번진 연쇄 파급 효과 때문이었습니다. 스테이징 테스트 단계에서 그 병목을 잡아냈더라면, 우리 운영팀이 오늘까지 수동 환불 티켓 적체를 처리하고 있지는 않을 것입니다. 과거의 아키텍처 결정이 현재의 운영 리스크를 어떻게 계속 좌우하는지 주목해 보십시오. 바로 이 때문에 성숙한 엔지니어링 팀은 사후 반성에서 선제적 복원력으로 빠르게 전환합니다.',
      '다음 달 글로벌 출시를 앞두고 저희는 모든 최악의 시나리오에 단단히 대비하기 위해 체계적인 "만약 ~라면" 시뮬레이션 훈련을 실시하고 있습니다. 하룻밤 사이 트래픽이 세 배로 급증하더라도, 새로 도입된 자동 안전장치가 3초 안에 거래를 우회시켜 결제 엔지니어들이 의지할 수 있는 신뢰할 만한 비상 대응 계획을 제공합니다. 만약 보조 노드에서 지연 시간 상승이 감지된다면 경보 프로토콜이 즉시 당직 리드에게 긴급 보고되어 고객이 알아차리기도 전에 영향을 완화할 수 있습니다.'
    ],
    keyExpressions: [
      'had we known ~, we would have + p.p. : 우리가 미리 알았더라면 ~했을 텐데 (3차 가정법 도치)',
      'in hindsight / costly oversight / blind spot : 돌이켜보면 / 뼈아픈 누락 / 사각지대',
      'ripple effect : 연쇄 파급 효과',
      'brace for the worst-case scenario : 최악의 시나리오에 단단히 대비하다',
      'Were + S + to V ~, S + would + V : 혹시라도 ~한다면 (가정법 도치)',
      'contingency plan to fall back on / mitigate impact : 비상시 의지할 플랜 B / 피해를 완화하다'
    ],
    comprehensionQuiz: [
      {
        id: 'd21-rq01',
        questionKo: '사후 회고(post-mortem)에서 팀이 인정한 결정적 누락(costly oversight)은 무엇이었나요?',
        options: [
          '외부 결제 파트너의 공표된 처리량 한도를 별도 검증 없이 보장된 것으로 믿은 점',
          '플래시 세일 홍보 이메일을 예정보다 12분 일찍 발송한 점',
          '고객 지원 팀 인력을 출시 직전에 절반으로 감축한 점',
          '보조 결제 게이트웨이의 비밀번호를 갱신하지 않은 점'
        ],
        answer: '외부 결제 파트너의 공표된 처리량 한도를 별도 검증 없이 보장된 것으로 믿은 점',
        explanationKo:
          '1문단의 "treating their published throughput limit as guaranteed was a costly oversight"가 정확한 원인입니다.'
      },
      {
        id: 'd21-rq02',
        questionKo: '2문단의 문장 "If we had caught the bottleneck during staging, our operations team would not still be clearing a backlog today"가 보여주는 문법적 의미는?',
        options: [
          '과거의 미조치가 현재 진행 중인 운영 부담(수동 환불 적체)까지 이어지고 있다는 혼합 가정법이다.',
          '미래에 병목이 발생하면 운영팀이 환불 처리를 중단한다는 1차 조건문이다.',
          '과거에 이미 병목을 잡아내서 오늘 아무 문제가 없다는 사실 진술이다.',
          '현재 운영팀이 테스트를 수행하면 과거 장애가 사라진다는 역순 조건문이다.'
        ],
        answer: '과거의 미조치가 현재 진행 중인 운영 부담(수동 환불 적체)까지 이어지고 있다는 혼합 가정법이다.',
        explanationKo:
          'If + had p.p.(과거 사실 반대)와 주절의 would not still be -ing today(현재 결과)가 결합된 전형적인 C1 혼합 가정법(Mixed Conditional)입니다.'
      },
      {
        id: 'd21-rq03',
        questionKo: '다음 달 글로벌 출시를 대비해 새로 도입한 자동 안전장치(automated safeguard)의 작동 방식은?',
        options: [
          '트래픽이 세 배로 급증해도 3초 이내에 결제를 우회시키고, 지연 시 당직 리드에게 즉시 긴급 보고한다.',
          '트래픽이 두 배가 되면 12분간 모든 결제를 일시 정지해 서버를 보호한다.',
          '모든 환불 티켓을 외부 결제 파트너사로 자동 이관한다.',
          '장애 발생 후 다음 날 아침 임원 회의에서 수동으로 원인을 검토한다.'
        ],
        answer: '트래픽이 세 배로 급증해도 3초 이내에 결제를 우회시키고, 지연 시 당직 리드에게 즉시 긴급 보고한다.',
        explanationKo:
          '3문단에서 "reroute transactions within three seconds" 및 "escalate immediately to the on-call lead"로 구체적 대응 체계를 밝혔습니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd21-v01',
      word: 'contingency plan',
      phonetic: '/kənˈtɪndʒənsi plæn/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '비상 대응 계획, 돌발 상황용 플랜 B',
      meaningEn: 'a backup strategy designed to be executed if an unexpected problem occurs',
      nuanceTipKo: '단순한 backup plan보다 임원 보고나 리스크 관리 문서에서 훨씬 전문적이고 체계적인 인상을 주는 C1 핵심 명사구입니다.',
      exampleEn: 'Every product launch needs a tested contingency plan before going live.',
      exampleKo: '모든 제품 출시는 라이브 배포 전에 검증된 비상 대응 계획을 갖추어야 합니다.'
    },
    {
      id: 'd21-v02',
      word: 'what if ~',
      phonetic: '/wʌt ɪf/',
      pos: '의문 구문',
      cefr: 'b2',
      meaningKo: '만약 ~라면 어쩌지? / ~할 경우를 가정해 보자',
      meaningEn: 'used to ask about or simulate the consequences of a hypothetical situation',
      nuanceTipKo: '현재·미래의 현실적 가정은 현재시제(What if traffic doubles?), 확률이 낮거나 가상 시뮬레이션은 과거시제(What if the vendor went offline?)를 씁니다.',
      exampleEn: 'What if our primary supplier fails to ship components on time?',
      exampleKo: '만약 주 공급업체가 부품을 제때 선적하지 못하면 어떻게 하죠?'
    },
    {
      id: 'd21-v03',
      word: 'had we known',
      phonetic: '/hæd wiː noʊn/',
      pos: '도치 조건절',
      cefr: 'c1',
      meaningKo: '우리가 미리 알았더라면 (= If we had known)',
      meaningEn: 'formal inverted third-conditional clause meaning "if we had known earlier"',
      nuanceTipKo: 'If를 생략하고 Had를 주어 앞으로 도치하면 문장이 군더더기 없이 간결해지며 C1 임원 보고·메모의 품격이 살아납니다.',
      exampleEn: 'Had we known about the regulatory shift, we would have adjusted our timeline.',
      exampleKo: '규제 변화를 미리 알았더라면 일정을 조정했을 것입니다.'
    },
    {
      id: 'd21-v04',
      word: 'mitigate',
      phonetic: '/ˈmɪtɪɡeɪt/',
      pos: '동사',
      cefr: 'c1',
      meaningKo: '(리스크·피해·충격을) 완화하다, 경감시키다',
      meaningEn: 'make a risk, problem, or negative impact less severe or painful',
      nuanceTipKo: '리스크를 완전히 없애기(eliminate)는 어렵더라도 피해를 줄인다고 할 때 `mitigate risk / mitigate the impact` 연어가 필수입니다.',
      exampleEn: 'Diversifying our cloud regions will mitigate the risk of regional outages.',
      exampleKo: '클라우드 리전을 다변화하면 특정 지역 장애 리스크를 완화할 수 있습니다.'
    },
    {
      id: 'd21-v05',
      word: 'worst-case scenario',
      phonetic: '/ˌwɜːrst keɪs səˈnærioʊ/',
      pos: '명사구',
      cefr: 'b2',
      meaningKo: '최악의 시나리오, 최악의 경우',
      meaningEn: 'the most severe or damaging outcome that could reasonably happen',
      nuanceTipKo: '위기 시뮬레이션에서 "Even in a worst-case scenario,..."으로 안전마진을 입증하면 임원진을 안심시킬 수 있습니다.',
      exampleEn: 'Even in a worst-case scenario, customer data remains fully encrypted.',
      exampleKo: '최악의 시나리오에서도 고객 데이터는 완전히 암호화된 상태로 보호됩니다.'
    },
    {
      id: 'd21-v06',
      word: 'safeguard',
      phonetic: '/ˈseɪfɡɑːrd/',
      pos: '명사 · 동사',
      cefr: 'c1',
      meaningKo: '안전장치, 보호 조치; ~을 안전하게 보호하다',
      meaningEn: 'a protective measure or system put in place to prevent harm or failure',
      nuanceTipKo: 'put safeguards in place(안전장치를 구축하다) 표현은 보안·금융·엔지니어링 보고서 단골 연어입니다.',
      exampleEn: 'We put automated safeguards in place to block anomalous API spikes.',
      exampleKo: '비정상적인 API 급증을 차단하기 위해 자동 안전장치를 구축했습니다.'
    },
    {
      id: 'd21-v07',
      word: 'blind spot',
      phonetic: '/blaɪnd spɑːt/',
      pos: '명사구',
      cefr: 'b2',
      meaningKo: '사각지대, 미처 보지 못한 맹점·허점',
      meaningEn: 'an area where someone lacks awareness, visibility, or critical insight',
      nuanceTipKo: '자동차 백미러 사각지대에서 유래한 비유로, 전략이나 테스트에서 놓친 약점을 객관적으로 짚을 때 씁니다.',
      exampleEn: 'Cross-team reviews help uncover operational blind spots before launch.',
      exampleKo: '유관 부서 간 교차 검토는 출시 전에 운영 사각지대를 발견하는 데 도움이 됩니다.'
    },
    {
      id: 'd21-v08',
      word: 'ripple effect',
      phonetic: '/ˈrɪpl ɪˈfekt/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '파급 효과, 연쇄적 여파',
      meaningEn: 'a spreading series of secondary consequences triggered by a single event',
      nuanceTipKo: '연못에 돌을 던질 때 번지는 물결처럼, 작은 장애나 지연이 타 부서로 연쇄 확산되는 현상을 생생하게 묘사합니다.',
      exampleEn: 'A two-day shipping delay created a ripple effect across all retail stores.',
      exampleKo: '이틀간의 배송 지연이 모든 오프라인 매장에 연쇄 파급 효과를 일으켰습니다.'
    },
    {
      id: 'd21-v09',
      word: 'fall back on',
      phonetic: '/fɔːl bæk ɑːn/',
      pos: '구동사',
      cefr: 'c1',
      meaningKo: '(비상시 대안·플랜 B에) 의지하다, 의존해 전환하다',
      meaningEn: 'rely on a secondary option or backup resource when the primary plan fails',
      nuanceTipKo: 'have [플랜 B] to fall back on(비상시 믿고 전환할 대안을 확보해 두다) 패턴으로 자주 쓰입니다.',
      exampleEn: 'Fortunately, we had a secondary payment vendor to fall back on.',
      exampleKo: '다행히 비상시 바로 전환할 수 있는 보조 결제 업체가 있었습니다.'
    },
    {
      id: 'd21-v10',
      word: 'in hindsight',
      phonetic: '/ɪn ˈhaɪndsaɪt/',
      pos: '전치사구',
      cefr: 'c1',
      meaningKo: '돌이켜보면, 일이 지나고 나서 생각해 보니',
      meaningEn: 'looking back at a past event with the benefit of knowledge gained afterward',
      nuanceTipKo: '사후 회고에서 변명하지 않고 객관적 학습 포인트를 짚을 때 "In hindsight, we should have..."로 시작하면 성숙한 리더십을 보여줍니다.',
      exampleEn: 'In hindsight, we should have stress-tested the checkout flow twice.',
      exampleKo: '돌이켜보면 결제 흐름에 대한 부하 테스트를 두 번 진행했어야 했습니다.'
    },
    {
      id: 'd21-v11',
      word: 'post-mortem',
      phonetic: '/ˌpoʊst ˈmɔːrtəm/',
      pos: '명사',
      cefr: 'c1',
      meaningKo: '(장애·프로젝트 종료 후 재발 방지용) 사후 원인 분석 회고',
      meaningEn: 'a structured review conducted after an incident or project to learn from what went wrong',
      nuanceTipKo: '글로벌 IT 기업에서는 개인 비난이 아니라 시스템 개선에 집중한다는 뜻으로 `blameless post-mortem`이라는 표현을 표준처럼 씁니다.',
      exampleEn: 'We scheduled a blameless post-mortem for Monday to document root causes.',
      exampleKo: '근본 원인을 문서화하기 위해 월요일에 비난 없는 사후 회고를 잡았습니다.'
    },
    {
      id: 'd21-v12',
      word: 'proactive',
      phonetic: '/ˌproʊˈæktɪv/',
      pos: '형용사',
      cefr: 'b2',
      meaningKo: '선제적인, 문제가 터지기 전 미리 주도적으로 대응하는',
      meaningEn: 'acting in advance to prevent problems rather than merely reacting after they happen',
      nuanceTipKo: '반의어 `reactive(사후 대응적인)`와 대조해 "shift from reactive firefighting to proactive monitoring"처럼 쓰면 임원 보고 수준이 확 올라갑니다.',
      exampleEn: 'Taking a proactive approach to security saved us from a major breach.',
      exampleKo: '보안에 선제적으로 접근한 덕분에 대형 유출 사고를 막을 수 있었습니다.'
    },
    {
      id: 'd21-v13',
      word: 'oversight',
      phonetic: '/ˈoʊvərsaɪt/',
      pos: '명사',
      cefr: 'c1',
      meaningKo: '① 부주의로 인한 누락·간과(가산) ② 감독·관리(불가산)',
      meaningEn: 'an unintentional mistake or omission; (uncountable) supervision or monitoring',
      nuanceTipKo: '주의! 관사 a가 붙은 `an oversight`는 "실수로 놓친 누락"이고, 관사 없는 `executive oversight`는 "경영진의 감독"이라는 정반대 뉘앙스입니다!',
      exampleEn: 'Omitting the regional rate cap from our checklist was a costly oversight.',
      exampleKo: '체크리스트에서 지역별 호출 제한을 누락한 것은 대가가 큰 실수였습니다.'
    },
    {
      id: 'd21-v14',
      word: 'escalate',
      phonetic: '/ˈeskəleɪt/',
      pos: '동사',
      cefr: 'c1',
      meaningKo: '(위기가) 악화·확대되다; (상위 책임자에게) 긴급 격상 보고하다',
      meaningEn: 'become more serious rapidly; pass an urgent issue up to higher authority',
      nuanceTipKo: '장애 대응에서 "escalate the issue to the VP"는 실무자가 해결 불가한 위기를 즉시 상위 결정권자에게 격상 보고한다는 필수 용어입니다.',
      exampleEn: 'If latency exceeds 500ms, escalate the alert immediately to the on-call lead.',
      exampleKo: '지연 시간이 500ms를 초과하면 즉시 당직 리드에게 경보를 긴급 격상 보고하세요.'
    },
    {
      id: 'd21-v15',
      word: 'brace for',
      phonetic: '/breɪs fɔːr/',
      pos: '구동사',
      cefr: 'c1',
      meaningKo: '(충격·위기·트래픽 급증 등에) 단단히 마음을 먹고 대비하다',
      meaningEn: 'prepare mentally and operationally for an expected shock, surge, or difficulty',
      nuanceTipKo: 'prepare for보다 훨씬 긴박하고 실질적인 충격 대비 뉘앙스입니다. "brace for impact / brace for peak holiday traffic"으로 자주 씁니다.',
      exampleEn: 'Our infrastructure team is bracing for triple the normal traffic on Black Friday.',
      exampleKo: '우리 인프라 팀은 블랙 프라이데이에 평소의 세 배에 달하는 트래픽에 단단히 대비하고 있습니다.'
    }
  ],
  dialogue: [
    {
      id: 'd21-t01',
      speaker: 'Rachel',
      roleLabel: '글로벌 엔지니어링 VP',
      voicePitch: 1.09,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'zoom-in',
      english: "Thanks for jumping on late, Minho. I just read the post-mortem on Thursday's checkout timeout. What was the biggest blind spot?",
      slashBroken: "Thanks for jumping on late, Minho. / I just read the post-mortem / on Thursday's checkout timeout. / What was the biggest blind spot?",
      korean: '늦은 시간에 접속해 줘서 고마워요, 민호 씨. 목요일 결제 타임아웃 사후 회고를 방금 읽었어요. 가장 큰 사각지대가 무엇이었나요?',
      keyHighlight: 'post-mortem / blind spot',
      noteKo: '임원과의 위기 회고에서는 감정을 배제하고 핵심 사각지대(blind spot)를 정확히 짚는 것이 신뢰의 출발점입니다.'
    },
    {
      id: 'd21-t02',
      speaker: 'Minho',
      roleLabel: '스태프 SRE 엔지니어 (서울)',
      voicePitch: 0.91,
      sceneImage: 'assets/scene_late_office.jpg',
      cameraMotion: 'pan-right',
      english: "Honestly, Rachel, in hindsight it was a clear oversight. Had we known our payment partner capped APAC requests per second, we would have configured failover weeks ago.",
      slashBroken: 'Honestly, Rachel, / in hindsight it was a clear oversight. / Had we known / our payment partner capped APAC requests per second, / we would have configured failover weeks ago.',
      korean: '솔직히 레이첼, 돌이켜보면 명백한 누락이었습니다. 결제 파트너가 초당 APAC 요청량을 제한한다는 걸 미리 알았더라면 몇 주 전에 자동 우회(failover)를 구성했을 겁니다.',
      keyHighlight: 'in hindsight / oversight / Had we known ~, we would have',
      noteKo: '3차 가정법 도치(`Had we known ~, we would have + p.p.`)로 핑계 없이 원인과 대안을 명쾌하게 보고했습니다.'
    },
    {
      id: 'd21-t03',
      speaker: 'Rachel',
      roleLabel: '글로벌 엔지니어링 VP',
      voicePitch: 1.09,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'pan-left',
      english: "I appreciate the candor. And the ripple effect is still hitting Support—if we had caught that cap in staging, they wouldn't be manually clearing refund tickets today.",
      slashBroken: 'I appreciate the candor. / And the ripple effect is still hitting Support— / if we had caught that cap in staging, / they would not be manually clearing refund tickets today.',
      korean: '솔직하게 말해 줘서 고마워요. 게다가 연쇄 여파가 아직 고객 지원 팀에 남아 있잖아요—스테이징에서 그 제한을 잡았더라면 오늘 수동 환불 티켓을 치우고 있진 않을 텐데요.',
      keyHighlight: 'ripple effect / If we had caught ~, they wouldn\'t be ~ today',
      noteKo: '과거 조건(If we had caught) + 현재 진행 결과(wouldn\'t be clearing today)가 결합된 혼합 가정법의 실전 명문장입니다.'
    },
    {
      id: 'd21-t04',
      speaker: 'Minho',
      roleLabel: '스태프 SRE 엔지니어 (서울)',
      voicePitch: 0.91,
      sceneImage: 'assets/scene_late_office.jpg',
      cameraMotion: 'zoom-in',
      english: "Completely agreed. That's why we've built a proactive contingency plan so we never get caught off guard again. Now we have a secondary gateway ready to fall back on.",
      slashBroken: "Completely agreed. / That is why we have built a proactive contingency plan / so we never get caught off guard again. / Now we have a secondary gateway / ready to fall back on.",
      korean: '전적으로 동의합니다. 그래서 다시는 허를 찔리지 않도록 선제적 비상 대응 계획을 구축했습니다. 이제 비상시 즉시 전환할 보조 게이트웨이를 확보했습니다.',
      keyHighlight: 'proactive contingency plan / fall back on',
      noteKo: 'get caught off guard는 방심하다가 예상치 못한 허를 찔리다는 원어민 빈출 관용구입니다.'
    },
    {
      id: 'd21-t05',
      speaker: 'Rachel',
      roleLabel: '글로벌 엔지니어링 VP',
      voicePitch: 1.09,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'pan-right',
      english: "Let's stress-test that assumption. What if traffic triples during next month's global campaign, or what if both gateways slow down simultaneously?",
      slashBroken: "Let's stress-test that assumption. / What if traffic triples / during next month's global campaign, / or what if both gateways slow down simultaneously?",
      korean: '그 전제를 한계 테스트해 보죠. 다음 달 글로벌 캠페인 때 트래픽이 세 배로 뛰거나, 두 게이트웨이가 동시에 느려진다면 어떻게 되죠?',
      keyHighlight: 'What if traffic triples / simultaneously',
      noteKo: 'stress-test an assumption은 어떤 가설이나 계획이 극한 상황에서도 버티는지 따져본다는 임원 회의 핵심 표현입니다.'
    },
    {
      id: 'd21-t06',
      speaker: 'Minho',
      roleLabel: '스태프 SRE 엔지니어 (서울)',
      voicePitch: 0.91,
      sceneImage: 'assets/scene_late_office.jpg',
      cameraMotion: 'pan-left',
      english: "Were volume to triple overnight, our automated safeguard would reroute 100% of checkout calls in under three seconds. And should latency exceed 400ms, the system escalates to the on-call lead immediately.",
      slashBroken: 'Were volume to triple overnight, / our automated safeguard would reroute / 100% of checkout calls in under three seconds. / And should latency exceed 400ms, / the system escalates to the on-call lead immediately.',
      korean: '하룻밤 사이 트래픽이 세 배로 급증하더라도 자동 안전장치가 3초 이내에 결제 호출 100%를 우회시킵니다. 또 지연 시간이 400ms를 넘으면 시스템이 즉시 당직 리드에게 긴급 격상 보고합니다.',
      keyHighlight: 'Were volume to ~ / should latency exceed ~ / escalates',
      noteKo: '미래 가상 도치(`Were ~ to V`)와 만일의 조건 도치(`Should ~ V`) 두 가지를 연달아 구사한 최고급 C1 위기 보고입니다.'
    },
    {
      id: 'd21-t07',
      speaker: 'Rachel',
      roleLabel: '글로벌 엔지니어링 VP',
      voicePitch: 1.09,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'zoom-in',
      english: "That gives me real confidence that we can mitigate even a worst-case scenario. Let's run a live fire drill on Tuesday so everyone is braced for launch.",
      slashBroken: 'That gives me real confidence / that we can mitigate even a worst-case scenario. / Let us run a live fire drill on Tuesday / so everyone is braced for launch.',
      korean: '최악의 시나리오까지도 피해를 완화할 수 있다는 확신이 드네요. 모두가 출시에 단단히 대비할 수 있도록 화요일에 실전 모의훈련을 돌려보죠.',
      keyHighlight: 'mitigate / worst-case scenario / braced for',
      noteKo: 'fire drill은 실제 장애처럼 가정하고 대응 절차를 점검하는 모의훈련을 뜻합니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 가정법 1·2·3차 & 혼합 가정법 실무 매트릭스 (시제 충돌 방지)',
      coreFormula: '2차(현재 가상): If + 과거, would + V | 3차(과거 회고): If + had p.p., would have p.p. | 혼합: If + had p.p., would + V (now)',
      wrongKonglish: 'If we would know about the cap earlier, we deployed a backup and we would not have a problem today.',
      rightNative: 'If we had known about the cap earlier, we would have deployed a backup, and we would not face this backlog today.',
      explanationKo:
        '한국 학습자가 가정법에서 가장 자주 틀리는 함정은 ① **If절 안에 조동사 would를 넣는 실수**(`If we would know` ❌)와 ② **과거 회고(3차)와 현재 결과(혼합)를 섞어 시제를 무너뜨리는 실수**입니다. 과거에 못 했던 일 때문에 *과거에* 손해를 봤다면 `would have + p.p.`, 과거 실수 때문에 *지금 이 순간(today/now)* 고생하고 있다면 `would + 동사원형(또는 would be -ing)`으로 주절 시제를 정확히 나누세요.',
      registerSpectrum: {
        casual: "If we'd caught that bug earlier, we wouldn't be stuck fixing refunds today.",
        standard: 'If we had caught that bottleneck in staging, Support would not be clearing a backlog today.',
        formal: 'Had the throughput ceiling been identified during pre-release validation, our operations team would not currently face a manual refund backlog.'
      }
    },
    {
      title: '원리 02 · C1 임원 보고의 품격 — If 생략 가정법 도치 3대 공식',
      coreFormula: 'Had + S + p.p. (과거 반사실) | Were + S + to V (낮은 확률의 미래 가상) | Should + S + V (혹시라도 ~한다면)',
      wrongKonglish: 'If had we known the risk, or if were traffic to triple, we would react fast.',
      rightNative: 'Had we known the risk, we would have acted sooner; were traffic to triple tomorrow, our safeguard would reroute calls automatically.',
      explanationKo:
        'C1 수준 비즈니스 문서와 임원 Q&A에서는 `If`를 생략하고 조동사(`Had / Were / Should`)를 주어 앞으로 도치하는 문장이 매우 빈번합니다. 핵심 규칙: **If와 도치를 동시에 쓰면 절대 안 됩니다!**(`If had we` ❌). ① `Had we known ~` = 과거에 미리 알았더라면, ② `Were traffic to triple ~` = 만에 하나 트래픽이 세 배로 뛴다면, ③ `Should latency exceed 400ms ~` = 혹시라도 지연이 400ms를 초과하면(1차 조건문의 격식 도치, 주절에 will/현재형/명령문 가능).',
      registerSpectrum: {
        casual: 'If traffic happens to triple, our backup server will kick in right away.',
        standard: 'Should traffic triple during launch, our secondary gateway will absorb the load.',
        formal: 'Were volume to triple unexpectedly, our automated failover architecture would mitigate service disruption within seconds.'
      }
    },
    {
      title: '원리 03 · 핑계 없는 C1 위기 소통: oversight의 두 얼굴 & 선제 대응 동사',
      coreFormula: 'an oversight (부주의한 누락) ≠ oversight (감독·관리) | mitigate risk / put safeguards in place / fall back on',
      wrongKonglish: 'It was our small miss, so we will prevent 100% risk by preparing backup to rely.',
      rightNative: 'In hindsight, it was a preventable oversight, so we put automated safeguards in place to mitigate risk and give us a plan to fall back on.',
      explanationKo:
        '① 위기 회고에서 "small miss" 같은 콩글리시 대신 가산명사 `an oversight(놓친 누락)`를 쓰되, 불가산명사 `oversight(감독)`과 혼동하지 마세요. ② 실무에서 리스크를 "100% 없앤다"고 장담하면 오히려 신뢰를 잃습니다. `mitigate the risk(리스크를 완화하다)`, `brace for worst-case scenarios(최악의 시나리오에 대비하다)`, `have a contingency plan to fall back on(의지할 비상 계획을 갖추다)`처럼 현실적이고 검증 가능한 언어를 쓰세요.',
      registerSpectrum: {
        casual: "Looking back, we totally missed that—now we've got a solid Plan B to fall back on.",
        standard: 'In hindsight, that was an avoidable oversight, so we built a contingency plan to fall back on.',
        formal: 'Upon post-mortem review, this oversight prompted us to institute automated safeguards that mitigate worst-case exposure.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd21-s01',
      drillType: 'konglish-fix',
      promptKo: '"지역별 호출 제한을 미리 알았더라면 보조 게이트웨이를 구축했을 텐데요." — 바른 3차 가정법은?',
      promptEnHint: 'If절에는 절대 would를 쓰지 않습니다! If 생략 도치 Had we known을 고르세요.',
      targetEn: 'Had we known about the rate cap, we would have deployed a secondary gateway.',
      wrongKonglishOption: 'If we would have known about the rate cap, we deployed a secondary gateway.',
      explanationKo: 'If we had known을 도치한 Had we known ~, we would have + p.p. 구조가 어법상 완벽합니다.'
    },
    {
      id: 'd21-s02',
      drillType: 'chunk-build',
      promptKo: '스테이징에서 그 병목을 잡았더라면 오늘 환불 티켓을 수동 처리하고 있진 않을 텐데요.',
      promptEnHint: '과거 조건(If we had caught) + 현재 결과(we would not be clearing ~ today) 혼합 가정법을 조립하세요.',
      targetEn: 'If we had caught that bottleneck, we would not be clearing refunds today.',
      chunks: ['If we had caught', 'that bottleneck,', 'we would not be', 'clearing refunds today.'],
      explanationKo: '과거 사실의 반대가 현재(today)까지 이어지는 혼합 가정법의 대표 패턴입니다.'
    },
    {
      id: 'd21-s03',
      drillType: 'active-blank',
      promptKo: '모든 제품 출시는 검증된 비상 대응 계획을 갖추어야 합니다.',
      promptEnHint: '비상 대응 계획 = ___________ plan (1단어, 11글자)',
      targetEn: 'Every product launch needs a tested contingency plan before release.',
      blankData: {
        before: 'Every product launch needs a tested',
        answer: 'contingency',
        after: 'plan before release.',
        firstLetterHint: 'c__________ (11글자)'
      },
      explanationKo: 'contingency plan은 예상치 못한 돌발 사태에 대비한 공식 비상 계획을 뜻합니다.'
    },
    {
      id: 'd21-s04',
      drillType: 'chunk-build',
      promptKo: '하룻밤 사이 트래픽이 세 배로 뛰더라도 자동 안전장치가 결제를 우회시킬 것입니다.',
      promptEnHint: '미래 가상 도치 Were traffic to triple 청크를 맨 앞에 배치하세요.',
      targetEn: 'Were traffic to triple overnight, our safeguard would reroute transactions.',
      chunks: ['Were traffic to triple', 'overnight,', 'our safeguard would', 'reroute transactions.'],
      explanationKo: 'Were + 주어 + to 동사원형은 확률은 낮지만 치명적인 리스크 시뮬레이션에 쓰이는 C1 도치 구문입니다.'
    },
    {
      id: 'd21-s05',
      drillType: 'active-blank',
      promptKo: '클라우드 리전을 다변화하면 지역 장애 리스크를 완화할 수 있습니다.',
      promptEnHint: '리스크/피해를 완화하다 m_______ (동사원형 1단어)',
      targetEn: 'Diversifying cloud regions will mitigate the risk of regional outages.',
      blankData: {
        before: 'Diversifying cloud regions will',
        answer: 'mitigate',
        after: 'the risk of regional outages.',
        firstLetterHint: 'm_______ (8글자)'
      },
      explanationKo: 'mitigate risk / mitigate impact는 리스크 관리에서 가장 빈도 높은 핵심 동사입니다.'
    },
    {
      id: 'd21-s06',
      drillType: 'chunk-build',
      promptKo: '다행히 비상시 바로 의지해 전환할 수 있는 보조 결제 업체가 있었습니다.',
      promptEnHint: 'fall back on 청크를 문장 끝에 배치하세요.',
      targetEn: 'Fortunately, we had a backup vendor to fall back on.',
      chunks: ['Fortunately,', 'we had', 'a backup vendor', 'to fall back on.'],
      explanationKo: 'have [대안] to fall back on은 위기 시 믿고 쓸 수 있는 플랜 B가 있다는 뜻입니다.'
    },
    {
      id: 'd21-s07',
      drillType: 'active-blank',
      promptKo: '돌이켜보면 체크리스트에서 호출 제한을 뺀 것은 뼈아픈 누락이었습니다.',
      promptEnHint: '돌이켜보면 = In _________ (1단어, 9글자)',
      targetEn: 'In hindsight, omitting the rate cap from our checklist was a costly oversight.',
      blankData: {
        before: 'In',
        answer: 'hindsight',
        after: ', omitting the rate cap from our checklist was a costly oversight.',
        firstLetterHint: 'h________ (9글자)'
      },
      explanationKo: 'In hindsight는 지나고 나서 객관적으로 회고할 때 쓰는 고급 부사구입니다.'
    },
    {
      id: 'd21-s08',
      drillType: 'konglish-fix',
      promptKo: '"지연 시간이 400ms를 초과하면 즉시 당직 리드에게 긴급 격상 보고하세요." — C1 도치 조건문은?',
      promptEnHint: 'If와 도치를 동시에 쓰지 않은 Should latency exceed 구문을 고르세요.',
      targetEn: 'Should latency exceed 400ms, escalate the alert immediately to the on-call lead.',
      wrongKonglishOption: 'If should latency exceeds 400ms, please notice urgently to the on-call lead.',
      explanationKo: 'Should + 주어 + 동사원형(exceed) 도치에서는 If를 빼고, 긴급 보고는 escalate to를 씁니다.'
    },
    {
      id: 'd21-s09',
      drillType: 'active-blank',
      promptKo: '이틀간의 배송 지연이 모든 매장에 연쇄 파급 효과를 일으켰습니다.',
      promptEnHint: '연쇄 파급 효과 = ______ effect (1단어, 6글자)',
      targetEn: 'A two-day shipping delay created a ripple effect across every store.',
      blankData: {
        before: 'A two-day shipping delay created a',
        answer: 'ripple',
        after: 'effect across every store.',
        firstLetterHint: 'r_____ (6글자)'
      },
      explanationKo: 'ripple effect는 한 지점의 문제가 물결처럼 연쇄 확산되는 영향을 뜻합니다.'
    },
    {
      id: 'd21-s10',
      drillType: 'chunk-build',
      promptKo: '우리 인프라 팀은 블랙 프라이데이의 세 배 트래픽에 단단히 대비하고 있습니다.',
      promptEnHint: '충격에 단단히 대비하다 is bracing for 청크를 연결하세요.',
      targetEn: 'Our infrastructure team is bracing for triple traffic on Black Friday.',
      chunks: ['Our infrastructure team', 'is bracing for', 'triple traffic', 'on Black Friday.'],
      explanationKo: 'brace for ~ 는 예상되는 급증·충격·위기에 만반의 대비를 갖춘다는 생생한 표현입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd21-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '비상 대응 계획 contingency plan',
      questionKo: '빈칸에 알맞은 명사구(2단어)를 넣어 "출시 전에 검증된 비상 대응 계획을 마련해야 합니다"를 완성하세요.',
      stimulusEn: 'We need a tested __________ __________ in place before launch.',
      answer: 'contingency plan',
      explanationKo: '돌발 사태에 가동할 체계적 비상 계획은 contingency plan입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "최악의 시나리오에서도 고객 데이터는 안전합니다" — 빈칸 2단어(하이픈 포함 w____-c___ s_______)는?',
        stimulusEn: 'Even in a __________ __________, customer data stays encrypted.',
        answer: 'worst-case scenario',
        explanationKo: 'worst-case scenario는 리스크 시뮬레이션의 필수 표현입니다.'
      }
    },
    {
      id: 'd21-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '리스크 완화 mitigate',
      questionKo: '빈칸에 알맞은 동사(1단어, 원형)를 넣어 "자동 안전장치는 장애 피해를 크게 완화할 것입니다"를 완성하세요.',
      stimulusEn: 'Automated safeguards will significantly __________ the impact of an outage.',
      answer: 'mitigate',
      explanationKo: '피해나 위험의 강도를 줄이고 경감시킬 때 동사 mitigate를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "비정상 트래픽을 막기 위해 안전장치(복수형 1단어)를 구축했다" — 빈칸은?',
        stimulusEn: 'We put automated __________ in place to block traffic spikes.',
        answer: 'safeguards',
        explanationKo: 'put safeguards in place(안전장치를 마련하다) 연어를 기억하세요.'
      }
    },
    {
      id: 'd21-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '비상 대안 의지 fall back on',
      questionKo: '빈칸에 알맞은 구동사(3단어)를 넣어 "이제 비상시 의지해 전환할 보조 게이트웨이가 있습니다"를 완성하세요.',
      stimulusEn: 'We now have a secondary payment gateway to __________ __________ __________.',
      answer: 'fall back on',
      explanationKo: '1차 계획이 실패했을 때 믿고 전환할 수 있는 대안을 말할 때 fall back on을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "블랙 프라이데이 트래픽 급증에 단단히 대비하고 있다" — 빈칸 2단어(b______ f__)는?',
        stimulusEn: 'The engineering team is __________ __________ a surge in holiday traffic.',
        answer: 'bracing for',
        explanationKo: 'brace for ~ 는 충격이나 급증에 만반의 대비를 한다는 구동사입니다.'
      }
    },
    {
      id: 'd21-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '사후 회고 in hindsight',
      questionKo: '빈칸에 알맞은 표현(2단어)을 넣어 "돌이켜보면 스테이징에서 부하 테스트를 두 번 했어야 했습니다"를 완성하세요.',
      stimulusEn: '__________ __________, we should have run load tests twice in staging.',
      answer: 'In hindsight',
      acceptableAlt: ['in hindsight'],
      explanationKo: '지나고 난 뒤에 돌아보며 교훈을 짚을 때 In hindsight를 문두에 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "비난 없는 사후 원인 분석 회고(하이픈 포함 1단어)를 월요일에 열었다" — 빈칸은?',
        stimulusEn: 'We held a blameless __________ on Monday to review root causes.',
        answer: 'post-mortem',
        explanationKo: '장애·실패 후 시스템 개선을 위해 진행하는 회고는 post-mortem입니다.'
      }
    },
    {
      id: 'd21-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '연쇄 파급 효과 ripple effect',
      questionKo: '빈칸에 알맞은 명사구(2단어)를 넣어 "12분간의 장애가 고객 지원 팀 전반에 연쇄 파급 효과를 일으켰다"를 완성하세요.',
      stimulusEn: 'The twelve-minute outage caused a __________ __________ across customer support.',
      answer: 'ripple effect',
      explanationKo: '한 사건이 도미노·물결처럼 타 영역으로 번지는 여파는 ripple effect입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "유관 부서 교차 검토는 운영 사각지대(복수형 2단어)를 드러내는 데 도움이 된다" — 빈칸은?',
        stimulusEn: 'Cross-team reviews help uncover operational __________ __________.',
        answer: 'blind spots',
        explanationKo: '미처 보지 못한 허점·사각지대는 blind spot(복수 blind spots)입니다.'
      }
    },
    {
      id: 'd21-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '3차 가정법 도치 어법 검증',
      questionKo: '다음 중 C1 **가정법 도치 구문**이 어법상 완벽하게 작성된 문장은?',
      stimulusEn: 'If 중복 여부, 조동사 뒤 동사 형태, 주절 시제 일치를 정밀히 확인하세요.',
      options: [
        'If had we known about the rate limit, we would deploy a backup earlier.',
        'Had we known about the rate limit, we would have deployed a backup earlier.',
        'Had we knew about the rate limit, we will have deployed a backup earlier.',
        'Were we known about the rate limit, we would have deployed a backup earlier.'
      ],
      answer: 'Had we known about the rate limit, we would have deployed a backup earlier.',
      explanationKo:
        '3차 가정법 도치는 `Had + S + p.p.(known), S + would have + p.p.(deployed)`이며 If를 절대 함께 쓰지 않습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "If we had spotted the issue earlier"를 If 없는 도치 5단어로 바꾸면?',
        stimulusEn: '__________ __________ __________ __________ __________ earlier, we would have fixed it.',
        answer: 'Had we spotted the issue',
        explanationKo: 'If를 지우고 Had를 주어 we 앞으로 도치합니다.'
      }
    },
    {
      id: 'd21-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '혼합 가정법 시제 판별',
      questionKo: '"스테이징 단계에서 그 병목을 잡았더라면(과거), 우리 팀이 지금(오늘) 환불 티켓을 치우고 있지는 않을 텐데(현재)"를 정확히 옮긴 문장은?',
      stimulusEn: '과거 조건과 현재 진행 결과의 시제 조합을 확인하세요.',
      options: [
        'If we caught the bottleneck in staging, our team would not have cleared tickets today.',
        'If we had caught the bottleneck in staging, our team would not be clearing tickets today.',
        'If we would have caught the bottleneck in staging, our team is not clearing tickets today.',
        'Had we catch the bottleneck in staging, our team will not be clearing tickets today.'
      ],
      answer: 'If we had caught the bottleneck in staging, our team would not be clearing tickets today.',
      explanationKo:
        '과거 사실의 반대(`If + had caught`)와 현재 진행 중인 결과(`would not be clearing ~ today`)가 결합된 혼합 가정법이 정답입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 혼합 가정법 주절 빈칸 3단어(비축약형): "어제 백업을 해두었더라면 지금 걱정하지 않을 텐데"',
        stimulusEn: 'If we had backed up the database yesterday, we __________ __________ __________ worried now.',
        answer: 'would not be',
        explanationKo: '현재 상태(now)의 반대 결과이므로 would not be를 씁니다.'
      }
    },
    {
      id: 'd21-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '미래 가상 도치 Were ~ to vs Should ~',
      questionKo: '다음 두 도치 문장 중 어법상 **모두 옳은** 조합은?',
      stimulusEn: '`Were + S + to V`와 `Should + S + V`의 동사 원형 및 주절 호응을 확인하세요.',
      options: [
        'Were traffic to triple overnight, our safeguard would reroute calls. / Should latency exceed 400ms, escalate immediately.',
        'Were traffic triple overnight, our safeguard will reroute calls. / Should latency exceeds 400ms, escalate immediately.',
        'Should traffic to triple overnight, our safeguard would rerouted calls. / Were latency exceeding 400ms, escalate immediately.',
        'If were traffic to triple overnight, our safeguard would reroute calls. / If should latency exceed 400ms, escalate immediately.'
      ],
      answer: 'Were traffic to triple overnight, our safeguard would reroute calls. / Should latency exceed 400ms, escalate immediately.',
      explanationKo:
        '`Were + S + to V, S + would V`와 `Should + S + V(원형, -s 없음), 명령문/will` 두 구조가 모두 완벽한 1번이 정답입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "혹시라도 보조 노드가 지연 상승을 보이면" — 도치 조건절 빈칸 1단어(동사원형)는?',
        stimulusEn: 'Should any secondary node __________ elevated latency, alert the lead.',
        answer: 'show',
        explanationKo: '조동사 Should가 도치되었으므로 주어 뒤에는 반드시 동사원형 show가 옵니다.'
      }
    },
    {
      id: 'd21-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '다의어 oversight 뉘앙스 구별',
      questionKo: '다음 문장에서 `an oversight`의 정확한 의미로 알맞은 것은?',
      stimulusEn: '"Failing to test regional payment limits before launch was a costly oversight."',
      options: [
        '부주의로 인해 미처 챙기지 못한 누락·실수',
        '경영진이 주도하는 엄격한 사전 감독 체계',
        '예상치를 뛰어넘는 폭발적인 매출 초과 달성',
        '외부 보안 기관으로부터 받은 공식 인증'
      ],
      answer: '부주의로 인해 미처 챙기지 못한 누락·실수',
      explanationKo:
        '관사 a가 붙은 가산명사 `an oversight`는 "실수로 놓친 누락/간과"를 뜻합니다. (반면 불가산명사 `oversight`는 "감독·관리"입니다.)',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "문제가 터지기 전에 미리 선제적으로 대응하는"을 뜻하는 형용사(1단어, p________)는?',
        stimulusEn: 'We need a more __________ approach to risk monitoring.',
        answer: 'proactive',
        explanationKo: '사후 대응(reactive)의 반대말인 선제적 대응은 proactive입니다.'
      }
    },
    {
      id: 'd21-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '위기 격상 보고 동사 escalate',
      questionKo: '장애 대응 매뉴얼에서 "결제 오류율이 2%를 넘으면 당직 엔지니어는 즉시 인프라 VP에게 이슈를 긴급 격상 보고해야 한다"에 들어갈 가장 정확한 동사는?',
      stimulusEn: 'If the error rate exceeds 2%, on-call engineers must immediately __________ the issue to the VP of Infrastructure.',
      options: ['escalate', 'level off', 'park', 'waive'],
      answer: 'escalate',
      explanationKo:
        '실무 단계에서 해결이 어렵거나 중대한 위기를 상위 책임자에게 긴급 보고하는 것은 `escalate [the issue] to [상위 책임자]`입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "만약 내일 결제 서버가 다운된다면 어떻게 하죠?" — 문두 2단어 의문 구문은?',
        stimulusEn: '__________ __________ the payment server goes down tomorrow?',
        answer: 'What if',
        explanationKo: '리스크 시뮬레이션 질문을 던질 때 What if ~ 로 시작합니다.'
      }
    },
    {
      id: 'd21-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '3차 가정법 도치 어순 배열',
      questionKo: '주어진 청크를 배열하여 C1 도치 구문으로 사후 회고 문장을 완성하세요.',
      stimulusEn: '[ a backup gateway / Had we known / we would have deployed / about the rate cap, / weeks ago. ]',
      answer: 'Had we known about the rate cap, we would have deployed a backup gateway weeks ago.',
      explanationKo: '도치 조건절(Had we known about the rate cap,) + 주절(we would have deployed a backup gateway weeks ago.) 순서입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "규제 변화를 미리 알았더라면 일정을 조정했을 것입니다." (Had we known / about the policy shift, / we would have adjusted / our timeline.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Had we known about the policy shift, we would have adjusted our timeline.',
        explanationKo: 'Had we known ~, we would have + p.p. 도치 공식을 손에 익히세요.'
      }
    },
    {
      id: 'd21-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Were ~ to 미래 가상 도치 배열',
      questionKo: '주어진 청크를 배열하여 "하룻밤 사이 트래픽이 세 배가 되더라도 자동 안전장치가 피해를 완화할 것이다"를 완성하세요.',
      stimulusEn: '[ our safeguard / Were traffic / the impact. / to triple overnight, / would mitigate ]',
      answer: 'Were traffic to triple overnight, our safeguard would mitigate the impact.',
      explanationKo: 'Were + 주어(traffic) + to triple overnight, 주어(our safeguard) + would mitigate the impact 구조입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "혹시 지연이 400ms를 넘으면 즉시 당직 리드에게 긴급 보고하세요." (Should latency exceed 400ms, / escalate immediately / to the on-call lead.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Should latency exceed 400ms, escalate immediately to the on-call lead.',
        explanationKo: 'Should + 주어 + 동사원형(exceed) + 명령문 구조입니다.'
      }
    },
    {
      id: 'd21-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '혼합 가정법 한영 영작',
      questionKo: '우리말 뜻에 맞게 혼합 가정법(과거 조건 + 현재 결과)으로 문장을 영작하세요.',
      stimulusEn: '우리말: 스테이징에서 그 병목을 잡았더라면, 우리 팀이 오늘 환불 티켓을 처리하고 있지는 않을 텐데요.\n(힌트: If we had caught / the bottleneck in staging, / our team would not be clearing / refund tickets today.)',
      answer: 'If we had caught the bottleneck in staging, our team would not be clearing refund tickets today.',
      acceptableAlt: ["If we had caught the bottleneck in staging, our team wouldn't be clearing refund tickets today."],
      explanationKo: '과거 미조치(had caught)가 현재 진행 상황(would not be clearing ~ today)에 영향을 미치는 혼합 가정법입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "돌이켜보면 그것은 막을 수 있었던 누락이었습니다." (In hindsight, / that was / a preventable oversight.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'In hindsight, that was a preventable oversight.',
        explanationKo: '가산명사 a preventable oversight로 객관적 회고 톤을 만듭니다.'
      }
    },
    {
      id: 'd21-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '가정법 콩글리시 오류 교정',
      questionKo: '다음 문장의 어법 오류 2곳(If had we, would deployed)을 바르게 고쳐 완전한 영어 문장으로 다시 쓰세요.',
      stimulusEn: '오류 문장: If had we spotted that blind spot, we would deployed a contingency plan.',
      answer: 'Had we spotted that blind spot, we would have deployed a contingency plan.',
      acceptableAlt: ['If we had spotted that blind spot, we would have deployed a contingency plan.'],
      explanationKo: 'If를 삭제해 도치(Had we spotted)를 완성하고, 과거 결과는 조동사 뒤에 have + p.p.(would have deployed)를 써야 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: Should the error rate exceeds 2%, escalate it to the VP. (동사 exceeds의 오류를 고쳐 전체 문장을 쓰세요.)',
        stimulusEn: '바른 문장 전체를 작성하세요.',
        answer: 'Should the error rate exceed 2%, escalate it to the VP.',
        explanationKo: '조동사 Should 도치 뒤에는 3인칭 단수 -s를 빼고 동사원형 exceed를 씁니다.'
      }
    },
    {
      id: 'd21-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '비상 대응 계획 한영 통문장 영작',
      questionKo: '다음 우리말을 contingency plan과 fall back on을 활용해 자연스럽게 영작하세요.',
      stimulusEn: '우리말: 우리는 최악의 시나리오에서 의지할 수 있는 선제적 비상 대응 계획을 구축했습니다.\n(힌트: We built / a proactive contingency plan / to fall back on / in a worst-case scenario.)',
      answer: 'We built a proactive contingency plan to fall back on in a worst-case scenario.',
      acceptableAlt: ['We have built a proactive contingency plan to fall back on in a worst-case scenario.'],
      explanationKo: 'proactive contingency plan + to fall back on + in a worst-case scenario를 한 호흡으로 연결한 C1 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이틀간의 지연이 모든 매장에 연쇄 파급 효과를 일으켰습니다." (A two-day delay / created a ripple effect / across all stores.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'A two-day delay created a ripple effect across all stores.',
        explanationKo: 'ripple effect across ~ 로 연쇄 영향을 간결하게 표현합니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "We had an unexpected service delay last week before a big client demo. Walk me through what went wrong in hindsight—what would you have done differently?",
    openingQuestionKo: '지난주 대형 고객 시연 직전에 예상치 못한 서비스 지연이 있었죠. 돌이켜보면 무엇이 문제였고, 미리 알았더라면 어떻게 다르게 대처했을지 말씀해 주세요.',
    followUpQuestionEn:
      "Got it. Now let's look forward: what if peak traffic triples next month? What contingency plan can we fall back on to mitigate the impact?",
    followUpQuestionKo: '알겠습니다. 이제 앞으로를 보죠. 만약 다음 달 피크 트래픽이 세 배로 뛴다면요? 피해를 완화하기 위해 어떤 비상 대응 계획에 의지할 수 있을까요?',
    recommendedChunks: [
      'In hindsight, it was an oversight',
      'Had we known ~, we would have ~',
      'Were traffic to triple ~, our safeguard would ~',
      'a contingency plan to fall back on',
      'mitigate the worst-case impact'
    ],
    modelAnswerEn:
      "In hindsight, skipping a partner rate-limit check was a costly oversight. Had we known about that ceiling earlier, we would have deployed a secondary gateway before the demo. Looking ahead, were traffic to triple next month, our automated safeguard would reroute requests within three seconds—giving us a proactive contingency plan to fall back on and mitigate any worst-case ripple effect."
  }
};
