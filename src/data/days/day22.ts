import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day22Module: DayLessonModule = {
  dayNumber: 22,
  weekNumber: 4,
  cefrLevel: 'c1',
  isWeeklyReview: false,
  dayBadge: 'DAY 22 · 글로벌 영어 면접 STAR 기법 & 강점 어필',
  categoryLabel: '영어 면접 · 행동 질문(STAR) · 이직 사유',
  title: '유관 부서를 진두지휘해 수치로 입증된 성과를 냈습니다',
  subtitle: '면접 첫 60초와 STAR 기법(spearheaded / cross-functional / measurable impact)으로 글로벌 채용담당자를 사로잡는 C1 답변 전략',
  heroImage: 'assets/office_sitcom_scene.jpg',
  secondaryImage: 'assets/scene_boardroom_pitch.jpg',
  estimatedSprintMin: 9,
  estimatedLectureMin: 48,
  keyExpression: 'spearheaded / cross-functional / measurable impact',
  keySentenceByTier: {
    a1: 'I led a team project and our sales grew by 20%.',
    a2: 'At my last company, I worked with three teams and improved our onboarding process.',
    b1: 'I took ownership of a cross-functional launch that boosted user retention by 18%.',
    b2: 'In my previous role, I spearheaded a cross-functional onboarding redesign that delivered measurable impact—cutting churn by 22% in two quarters.',
    c1: 'Having outgrown a regional execution scope, I am excited to bring my track record of spearheading cross-functional turnarounds to a role that aligns with your global expansion.',
    c2: 'My value proposition lies in navigating ambiguity to build stakeholder buy-in early, enabling me to hit the ground running and streamline complex workflows with measurable impact from quarter one.'
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[22],
  readingPassage: {
    titleEn: 'Mastering the First 60 Seconds and the STAR Method in Global Interviews',
    titleKo: '글로벌 영어 면접의 첫 60초와 STAR 기법으로 합격선을 돌파하는 법',
    genreBadge: 'Executive Career Playbook · C1',
    estimatedMin: 5,
    paragraphsEn: [
      "Global hiring managers rarely decide based on textbook grammar perfection; instead, they evaluate clarity within the first sixty seconds. Many strong Korean candidates lose momentum by burying their core message under lengthy chronological background or relying on passive phrases like 'I was in charge of.' Top candidates open with a sharp value proposition: they state their topic, intent, and headline achievement up front before walking the interviewer through a focused STAR story—Situation, Task, Action, and Result.",
      "Consider how power verbs transform an ordinary resume bullet into executive evidence. Rather than saying 'I helped fix a slow approval process,' a C1 candidate explains: 'I spearheaded a cross-functional initiative across product, legal, and design to streamline enterprise onboarding.' By naming how you secured stakeholder buy-in and navigated ambiguity, you prove that you don't just execute tickets—you take ownership of pivotal business bottlenecks and drive a genuine turnaround.",
      "Equally decisive is how you frame your reason for leaving and your future trajectory. Criticizing a former manager immediately raises red flags, whereas framing your move around growth signals maturity: 'I'm proud of the track record I built over four years, but I've outgrown a single-market scope and want to align with a global product roadmap.' Pair that forward-looking story with quantifiable measurable impact, and you position yourself as a culture add who can hit the ground running from week one."
    ],
    paragraphsSlash: [
      "Global hiring managers rarely decide / based on textbook grammar perfection; / instead, they evaluate clarity / within the first sixty seconds. / Many strong Korean candidates lose momentum / by burying their core message / under lengthy chronological background / or relying on passive phrases like 'I was in charge of.' / Top candidates open with a sharp value proposition: / they state their topic, intent, and headline achievement up front / before walking the interviewer through a focused STAR story— / Situation, Task, Action, and Result.",
      "Consider how power verbs transform / an ordinary resume bullet into executive evidence. / Rather than saying 'I helped fix a slow approval process,' / a C1 candidate explains: / 'I spearheaded a cross-functional initiative / across product, legal, and design / to streamline enterprise onboarding.' / By naming how you secured stakeholder buy-in / and navigated ambiguity, / you prove that you don't just execute tickets— / you take ownership of pivotal business bottlenecks / and drive a genuine turnaround.",
      "Equally decisive is how you frame / your reason for leaving and your future trajectory. / Criticizing a former manager immediately raises red flags, / whereas framing your move around growth signals maturity: / 'I'm proud of the track record I built over four years, / but I've outgrown a single-market scope / and want to align with a global product roadmap.' / Pair that forward-looking story / with quantifiable measurable impact, / and you position yourself as a culture add / who can hit the ground running from week one."
    ],
    paragraphsKo: [
      '글로벌 채용 매니저들은 교과서처럼 완벽한 문법으로 당락을 가르는 경우가 드뭅니다. 대신 첫 60초 안에 드러나는 명료함을 평가합니다. 많은 실력 있는 한국 지원자들이 장황한 연대기적 배경 설명 속에 핵심 메시지를 파묻거나 "I was in charge of" 같은 수동적인 표현에 의존하다 흐름을 놓칩니다. 최상위 지원자들은 날카로운 가치 제안으로 입을 엽니다. 상황·과제·행동·결과(STAR)로 집중된 이야기를 풀어내기 전에 주제, 의도, 그리고 핵심 성과를 먼저 제시합니다.',
      '파워 동사 하나가 평범한 이력서 문장을 임원급 증거로 어떻게 탈바꿈시키는지 생각해 보십시오. "느린 승인 절차를 고치는 걸 도왔다"라고 말하는 대신 C1 지원자는 이렇게 설명합니다. "엔터프라이즈 온보딩을 효율화하기 위해 프로덕트·법무·디자인 유관 부서를 아우르는 이니셔티브를 진두지휘했습니다." 이해관계자의 합의를 이끌어내고 불확실한 상황을 노련하게 헤쳐 나간 방식을 구체적으로 밝히면, 단순히 지시받은 업무만 처리하는 사람이 아니라 중추적인 병목에 주인의식을 갖고 실질적 반전을 이끌어내는 인재임을 입증하게 됩니다.',
      '이직 사유와 향후 커리어 방향을 어떻게 설계하는지도 똑같이 결정적입니다. 전 직장 상사를 비판하면 즉시 위험 신호로 인식되는 반면, 성장을 축으로 이직을 설명하면 성숙한 태도를 보여줍니다. "4년간 쌓은 실적에 자부심을 느끼지만, 이제 단일 시장 범위를 넘어설 만큼 성장했고 글로벌 프로덕트 로드맵과 방향성을 맞추고 싶습니다." 이 미래 지향적 서사에 수치로 입증 가능한 실질적 성과를 결합하면, 입사 첫 주부터 바로 성과를 내는 문화적 플러스 요인(culture add)으로 자리매김할 수 있습니다.'
    ],
    keyExpressions: [
      'value proposition : 내가 조직에 제공할 핵심 가치 제안',
      'spearhead a cross-functional initiative : 유관 부서 협업 프로젝트를 진두지휘하다',
      'secure stakeholder buy-in / navigate ambiguity : 이해관계자 지지를 얻다 / 모호함을 헤쳐 나가다',
      'outgrow a role / align with ~ : 이전 역할을 넘어설 만큼 성장하다 / ~와 방향을 일치시키다',
      'measurable impact / track record : 수치로 입증 가능한 성과 / 검증된 실적',
      'culture add / hit the ground running : 조직 문화에 가치를 더하는 인재 / 투입 즉시 성과를 내다'
    ],
    comprehensionQuiz: [
      {
        id: 'd22-rq01',
        questionKo: '글에서 많은 유능한 한국 지원자들이 영어 면접 초반 60초에 흐름을 잃는(lose momentum) 주된 원인은?',
        options: [
          '장황한 연대기적 배경 속에 핵심 메시지를 파묻고 수동적 표현(I was in charge of)에 의존하기 때문',
          'STAR 기법 대신 수치화된 성과(measurable impact)를 너무 일찍 언급하기 때문',
          '면접관에게 회사의 글로벌 로드맵에 관한 역질문을 먼저 던지기 때문',
          '유관 부서(cross-functional) 협업 경험을 생략하고 개인 코딩 실적만 강조하기 때문'
        ],
        answer: '장황한 연대기적 배경 속에 핵심 메시지를 파묻고 수동적 표현(I was in charge of)에 의존하기 때문',
        explanationKo:
          '1문단에서 "burying their core message under lengthy chronological background or relying on passive phrases like \'I was in charge of\'"를 핵심 패인으로 지적합니다.'
      },
      {
        id: 'd22-rq02',
        questionKo: '2문단에서 `spearheaded`, `stakeholder buy-in`, `navigated ambiguity` 같은 표현을 쓸 때 면접관에게 증명되는 역량은?',
        options: [
          '단순 업무 처리자가 아니라 중추적 병목에 주인의식을 갖고 반전을 이끄는 리더십',
          '법무·디자인 팀의 개입 없이 혼자서 모든 문서를 작성하는 독립성',
          '상사의 지시가 완벽히 확정될 때까지 리스크를 회피하는 신중함',
          '원어민과 동일한 억양으로 문법 오류 없이 대본을 암송하는 능력'
        ],
        answer: '단순 업무 처리자가 아니라 중추적 병목에 주인의식을 갖고 반전을 이끄는 리더십',
        explanationKo:
          '2문단 끝부분의 "you prove that you don\'t just execute tickets—you take ownership of pivotal business bottlenecks and drive a genuine turnaround"에 정확히 나타납니다.'
      },
      {
        id: 'd22-rq03',
        questionKo: '글이 추천하는 가장 성숙한 이직 사유(reason for leaving) 프레이밍 방식은?',
        options: [
          '전 직장의 실적에 자부심을 표하되 기존 역할 범위를 넘어 성장(outgrow)해 글로벌 로드맵에 맞추고 싶다고 말한다.',
          '전 직장 상사의 비효율적인 의사결정을 솔직하게 비판해 개선 의지를 보여준다.',
          '연봉 인상이 유일한 이직 동기임을 첫 60초에 단도직입적으로 밝힌다.',
          '이전 직무의 구체적 수치는 보안상 생략하고 조직 문화 적응력만 강조한다.'
        ],
        answer: '전 직장의 실적에 자부심을 표하되 기존 역할 범위를 넘어 성장(outgrow)해 글로벌 로드맵에 맞추고 싶다고 말한다.',
        explanationKo:
          '3문단에서 전 직장 비판은 red flag가 되며, 실적에 대한 자부심 + `outgrown a single-market scope` + `align with a global roadmap`의 성장 서사를 권장합니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd22-v01',
      word: 'spearhead',
      phonetic: '/ˈspɪrhed/',
      pos: '동사',
      cefr: 'c1',
      meaningKo: '(핵심 프로젝트·개혁을) 진두지휘하다, 앞장서 이끌다',
      meaningEn: 'lead and drive a major initiative, project, or strategic change from the front',
      nuanceTipKo: '이력서와 면접에서 지겨운 "I did / I was in charge of"를 단번에 C1 리더급으로 격상시키는 1순위 파워 동사입니다.',
      exampleEn: 'I spearheaded our APAC localization rollout across four regional offices.',
      exampleKo: '저는 4개 지역 오피스에 걸친 APAC 현지화 출시를 진두지휘했습니다.'
    },
    {
      id: 'd22-v02',
      word: 'cross-functional',
      phonetic: '/ˌkrɔːs ˈfʌŋkʃənl/',
      pos: '형용사',
      cefr: 'c1',
      meaningKo: '여러 유관 부서가 협업하는(다기능 팀 간의)',
      meaningEn: 'involving people from different departments or disciplines working toward a shared goal',
      nuanceTipKo: '개발·디자인·마케팅·법무 등 여러 부서와 함께 일한 경험을 말할 때 "worked with other teams"보다 훨씬 프로페셔널합니다.',
      exampleEn: 'I led a cross-functional squad of engineers, designers, and legal counsel.',
      exampleKo: '엔지니어, 디자이너, 법무 담당자로 구성된 유관 부서 협업 스쿼드를 이끌었습니다.'
    },
    {
      id: 'd22-v03',
      word: 'measurable impact',
      phonetic: '/ˈmeʒərəbl ˈɪmpækt/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '수치로 입증 가능한 실질적 성과·임팩트',
      meaningEn: 'quantifiable, concrete results that clearly demonstrate business value',
      nuanceTipKo: 'STAR 기법의 마지막 R(Result)을 말할 때 "deliver/drive measurable impact" 뒤에 구체적 %(퍼센트)·매출·절감 시간을 꼭 붙이세요.',
      exampleEn: 'Our pricing overhaul delivered measurable impact, lifting annual renewals by 19%.',
      exampleKo: '요금제 개편은 연간 갱신율을 19% 끌어올리는 수치로 입증된 성과를 냈습니다.'
    },
    {
      id: 'd22-v04',
      word: 'track record',
      phonetic: '/træk ˈrekərd/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '(지금까지 검증된) 업무 실적, 경력 이력',
      meaningEn: 'a documented history of past achievements and consistent performance',
      nuanceTipKo: '`proven track record of + -ing(검증된 ~ 실적)` 형태로 자기소개나 강점 질문에서 신뢰를 각인시키는 데 최고입니다.',
      exampleEn: 'I bring a proven track record of scaling B2B products in competitive markets.',
      exampleKo: '경쟁이 치열한 시장에서 B2B 제품을 확장시켜 온 검증된 실적을 보유하고 있습니다.'
    },
    {
      id: 'd22-v05',
      word: 'streamline',
      phonetic: '/ˈstriːmlaɪn/',
      pos: '동사',
      cefr: 'c1',
      meaningKo: '(복잡한 프로세스·업무 흐름을) 간소화·효율화하다',
      meaningEn: 'make a system, workflow, or organization simpler, faster, and more efficient',
      nuanceTipKo: '비효율적인 절차를 군더더기 없이 유선형(streamline)으로 다듬어 시간·비용을 아낀 성과를 말할 때 필수 동사입니다.',
      exampleEn: 'By automating QA checks, we streamlined our release cycle from two weeks to three days.',
      exampleKo: 'QA 점검을 자동화해 배포 주기를 2주에서 3일로 대폭 효율화했습니다.'
    },
    {
      id: 'd22-v06',
      word: 'take ownership of',
      phonetic: '/teɪk ˈoʊnərʃɪp ʌv/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '~에 주인의식을 갖고 끝까지 책임지다',
      meaningEn: 'accept full accountability for a task, outcome, or problem and drive it to completion',
      nuanceTipKo: '글로벌 기업 면접관들이 가장 높게 평가하는 핵심 역량(Ownership)! 실수나 난관을 회피하지 않고 주도적으로 해결했다는 뜻입니다.',
      exampleEn: 'When the launch slipped, I took ownership of the recovery roadmap.',
      exampleKo: '출시 일정이 밀렸을 때 저는 복구 로드맵에 주인의식을 갖고 끝까지 책임졌습니다.'
    },
    {
      id: 'd22-v07',
      word: 'pivotal',
      phonetic: '/ˈpɪvətl/',
      pos: '형용사',
      cefr: 'c1',
      meaningKo: '중추적인, 결정적인 전환점이 되는',
      meaningEn: 'critically important in determining the success or direction of something',
      nuanceTipKo: 'very important 대신 `play a pivotal role in ~`을 쓰면 자신의 기여도를 과장하지 않으면서도 무게감 있게 전달할 수 있습니다.',
      exampleEn: 'User research played a pivotal role in reshaping our mobile checkout flow.',
      exampleKo: '사용자 리서치는 모바일 결제 흐름을 재설계하는 데 결정적인 역할을 했습니다.'
    },
    {
      id: 'd22-v08',
      word: 'navigate ambiguity',
      phonetic: '/ˈnævɪɡeɪt ˌæmbɪˈɡjuːəti/',
      pos: '동사구',
      cefr: 'c1',
      meaningKo: '불확실하고 모호한 상황을 노련하게 헤쳐 나가다',
      meaningEn: 'operate effectively and make sound decisions even without clear rules or complete information',
      nuanceTipKo: '구글·아마존·메타 등 빅테크 시니어 면접에서 가장 자주 등장하는 핵심 역량 키워드입니다.',
      exampleEn: 'Early-stage expansion taught me how to navigate ambiguity with clear milestones.',
      exampleKo: '초기 시장 확장 경험 덕분에 명확한 마일스톤을 세우며 불확실한 상황을 헤쳐 나가는 법을 익혔습니다.'
    },
    {
      id: 'd22-v09',
      word: 'align with',
      phonetic: '/əˈlaɪn wɪð/',
      pos: '동사구',
      cefr: 'b2',
      meaningKo: '(~의 비전·전략·목표와) 방향성을 일치시키다',
      meaningEn: 'match or harmonize one’s goals, values, or actions with another party or strategy',
      nuanceTipKo: '"왜 우리 회사에 지원했나요?" 질문에서 자신의 커리어 목표와 지원 회사의 전략을 연결할 때 가장 자연스러운 표현입니다.',
      exampleEn: 'Your focus on AI-assisted workflows closely aligns with my long-term career goals.',
      exampleKo: '귀사의 AI 보조 워크플로우 집중 전략은 제 장기 커리어 목표와 긴밀히 맞닿아 있습니다.'
    },
    {
      id: 'd22-v10',
      word: 'hit the ground running',
      phonetic: '/hɪt ðə ɡraʊnd ˈrʌnɪŋ/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '(입사·투입 첫날부터) 별도 적응기 없이 바로 전력 질주해 성과를 내다',
      meaningEn: 'start a new role or project with immediate energy, readiness, and effectiveness',
      nuanceTipKo: '경력직 면접 마무리에서 즉전감(즉시 전력 투입 가능성)을 어필할 때 원어민들이 즐겨 쓰는 자신감 넘치는 관용구입니다.',
      exampleEn: 'Given my SaaS background, I am confident I can hit the ground running in week one.',
      exampleKo: '제 SaaS 경력을 바탕으로 입사 첫 주부터 별도 적응기 없이 바로 성과를 낼 자신이 있습니다.'
    },
    {
      id: 'd22-v11',
      word: 'culture add',
      phonetic: '/ˈkʌltʃər æd/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '조직 문화에 새로운 다양성과 가치를 더하는 인재',
      meaningEn: 'a candidate who enriches and strengthens company culture with fresh perspectives',
      nuanceTipKo: '최근 글로벌 채용 트렌드에서는 기존 틀에 맞추는 culture fit을 넘어 새로운 강점을 보태는 `culture add`를 높이 평가합니다.',
      exampleEn: 'Beyond meeting the technical bar, she stood out as a strong culture add for the team.',
      exampleKo: '기술 기준을 충족한 것은 물론, 팀 문화에 새로운 가치를 더할 인재로 돋보였습니다.'
    },
    {
      id: 'd22-v12',
      word: 'outgrow',
      phonetic: '/ˌaʊtˈɡroʊ/',
      pos: '동사',
      cefr: 'c1',
      meaningKo: '(이전 역할·규모를) 넘어설 만큼 성장하다',
      meaningEn: 'develop beyond the scope, limits, or challenges of a previous role or stage',
      nuanceTipKo: '이직 사유를 말할 때 전 직장을 깎아내리지 않고 "I have outgrown my current scope"라고 하면 매우 품격 있게 들립니다.',
      exampleEn: 'After three promotions, I felt I had outgrown a purely domestic remit.',
      exampleKo: '세 번의 승진 이후 순수 국내 업무 범위를 넘어설 만큼 성장했다고 느꼈습니다.'
    },
    {
      id: 'd22-v13',
      word: 'stakeholder buy-in',
      phonetic: '/ˈsteɪkhoʊldər ˈbaɪ ɪn/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '이해관계자들의 공감과 지지(적극적 합의)',
      meaningEn: 'genuine agreement and support from key decision-makers and affected teams',
      nuanceTipKo: '`secure / build stakeholder buy-in` 연어는 갈등 해결·설득 관련 행동 면접 질문의 치트키입니다.',
      exampleEn: 'I shared pilot metrics early to secure stakeholder buy-in from Finance and Sales.',
      exampleKo: '재무팀과 영업팀 이해관계자들의 지지를 확보하기 위해 파일럿 지표를 일찍 공유했습니다.'
    },
    {
      id: 'd22-v14',
      word: 'turnaround',
      phonetic: '/ˈtɜːrnəraʊnd/',
      pos: '명사',
      cefr: 'c1',
      meaningKo: '(부진했던 지표·프로젝트의) 극적인 반전, 호전',
      meaningEn: 'a dramatic, positive reversal in performance, results, or trajectory',
      nuanceTipKo: '실패 위기 프로젝트를 살려낸 STAR 스토리에서 `drive a turnaround`로 임팩트를 극대화할 수 있습니다.',
      exampleEn: 'Repositioning our enterprise tier triggered a 30% revenue turnaround within six months.',
      exampleKo: '엔터프라이즈 요금제를 재포지셔닝하자 6개월 만에 매출이 30% 반등하는 반전을 일으켰습니다.'
    },
    {
      id: 'd22-v15',
      word: 'value proposition',
      phonetic: '/ˈvæljuː ˌprɑːpəˈzɪʃn/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '(조직·고객에게 제공할 수 있는) 핵심 가치 제안, 차별화된 강점',
      meaningEn: 'the unique combination of skills, outcomes, or benefits one delivers to an organization',
      nuanceTipKo: '제품 마케팅뿐 아니라 경력직 면접에서도 "My core value proposition is..."로 나의 차별점을 한 줄 정의할 때 쓰입니다.',
      exampleEn: 'My core value proposition is bridging deep technical insight with commercial execution.',
      exampleKo: '제 핵심 가치 제안은 깊은 기술적 통찰과 비즈니스 실행력을 연결하는 능력입니다.'
    }
  ],
  dialogue: [
    {
      id: 'd22-t01',
      speaker: 'David',
      roleLabel: '글로벌 프로덕트 디렉터 (면접관)',
      voicePitch: 0.9,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'zoom-in',
      english: "Thanks for coming in, Seohee. You've had an impressive run at your current company—so what prompted you to explore a move right now?",
      slashBroken: "Thanks for coming in, Seohee. / You have had an impressive run / at your current company— / so what prompted you / to explore a move right now?",
      korean: '와 주셔서 감사합니다, 서희 님. 현 직장에서 인상적인 커리어를 쌓아 오셨는데, 지금 이직을 검토하게 된 계기는 무엇인가요?',
      keyHighlight: 'what prompted you to explore a move',
      noteKo: '면접관이 이직 사유를 물을 때 전 직장 불만이 나오는지, 성장 목표가 나오는지 유심히 봅니다.'
    },
    {
      id: 'd22-t02',
      speaker: 'Seohee',
      roleLabel: '시니어 PM 지원자',
      voicePitch: 1.07,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-right',
      english: "I'm genuinely proud of the track record I've built over the past four years. At the same time, I've outgrown a single-market scope, and your APAC expansion closely aligns with where I want to create impact next.",
      slashBroken: "I am genuinely proud of the track record / I have built over the past four years. / At the same time, / I have outgrown a single-market scope, / and your APAC expansion closely aligns with / where I want to create impact next.",
      korean: '지난 4년간 쌓아 올린 실적에 진심으로 자부심을 느낍니다. 동시에 단일 시장 범위를 넘어설 만큼 성장했고, 귀사의 APAC 확장 전략이 제가 다음으로 임팩트를 만들고 싶은 방향과 정확히 맞닿아 있습니다.',
      keyHighlight: 'track record / outgrown / aligns with',
      noteKo: '전 직장 긍정 인정 → 역할 성장(outgrow) → 지원 회사와의 연결(align with)로 이어지는 완벽한 이직 사유 3단 구조입니다.'
    },
    {
      id: 'd22-t03',
      speaker: 'David',
      roleLabel: '글로벌 프로덕트 디렉터 (면접관)',
      voicePitch: 0.9,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-left',
      english: "That makes a lot of sense. Could you walk me through a time you had to navigate ambiguity and drive measurable impact without clear direction?",
      slashBroken: 'That makes a lot of sense. / Could you walk me through a time / you had to navigate ambiguity / and drive measurable impact / without clear direction?',
      korean: '충분히 납득이 되네요. 명확한 지침이 없는 모호한 상황을 헤쳐 나가며 수치로 입증된 성과를 냈던 경험을 하나 들려주시겠어요?',
      keyHighlight: 'navigate ambiguity / measurable impact',
      noteKo: '글로벌 행동 면접(Behavioral Interview)의 정석 질문! 바로 STAR 구조로 대답해야 합니다.'
    },
    {
      id: 'd22-t04',
      speaker: 'Seohee',
      roleLabel: '시니어 PM 지원자',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english: "Sure—the headline result is a 22% drop in enterprise churn. Last year, our renewal rate dipped after a pricing shift, and no single team owned onboarding. I took ownership of the gap and spearheaded a cross-functional task force.",
      slashBroken: 'Sure—the headline result is / a 22% drop in enterprise churn. / Last year, our renewal rate dipped / after a pricing shift, / and no single team owned onboarding. / I took ownership of the gap / and spearheaded a cross-functional task force.',
      korean: '물론이죠—핵심 결과부터 말씀드리면 기업 고객 이탈률을 22% 낮췄습니다. 작년 요금제 개편 후 갱신율이 떨어졌는데 온보딩을 맡은 전담 팀이 없었습니다. 제가 그 공백에 주인의식을 갖고 유관 부서 태스크포스를 진두지휘했습니다.',
      keyHighlight: 'headline result / took ownership / spearheaded a cross-functional',
      noteKo: 'TEDx 60초 공식대로 결론(headline result)을 먼저 던진 뒤 STAR의 S-T-A로 넘어가면 면접관의 집중력이 급상승합니다!'
    },
    {
      id: 'd22-t05',
      speaker: 'David',
      roleLabel: '글로벌 프로덕트 디렉터 (면접관)',
      voicePitch: 0.9,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-right',
      english: "Impressive! How did you secure stakeholder buy-in when Sales and Engineering had competing priorities?",
      slashBroken: 'Impressive! / How did you secure stakeholder buy-in / when Sales and Engineering / had competing priorities?',
      korean: '인상적이네요! 영업팀과 개발팀의 우선순위가 충돌할 때 어떻게 이해관계자들의 지지를 이끌어내셨나요?',
      keyHighlight: 'secure stakeholder buy-in / competing priorities',
      noteKo: '면접관의 꼬리 질문(probing question)에서는 구체적인 Action과 갈등 조율 근거를 제시해야 합니다.'
    },
    {
      id: 'd22-t06',
      speaker: 'Seohee',
      roleLabel: '시니어 PM 지원자',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-left',
      english: "Instead of pushing opinions, I ran a two-week pilot that proved setup delays caused 60% of churn. That data played a pivotal role: Engineering agreed to streamline three key steps, sparking a $1.4M ARR turnaround in two quarters.",
      slashBroken: 'Instead of pushing opinions, / I ran a two-week pilot / that proved setup delays caused 60% of churn. / That data played a pivotal role: / Engineering agreed to streamline three key steps, / sparking a $1.4M ARR turnaround in two quarters.',
      korean: '의견을 밀어붙이는 대신, 2주 파일럿을 돌려 초기 설정 지연이 이탈의 60% 원인임을 입증했습니다. 그 데이터가 결정적인 역할을 해 개발팀이 핵심 3단계를 효율화하는 데 동의했고, 두 분기 만에 연간반복매출 140만 달러 반전을 이끌어냈습니다.',
      keyHighlight: 'pivotal role / streamline / turnaround',
      noteKo: 'ARR(Annual Recurring Revenue) 같은 도메인 지표와 구체적 숫자를 과거시제로 명확히 제시해 신뢰도를 완성했습니다.'
    },
    {
      id: 'd22-t07',
      speaker: 'David',
      roleLabel: '글로벌 프로덕트 디렉터 (면접관)',
      voicePitch: 0.9,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'zoom-in',
      english: "That's exactly the value proposition we're looking for. With that mindset, you'd be a tremendous culture add and could hit the ground running here.",
      slashBroken: 'That is exactly the value proposition / we are looking for. / With that mindset, / you would be a tremendous culture add / and could hit the ground running here.',
      korean: '바로 저희가 찾던 핵심 가치 제안이네요. 그런 마인드셋이라면 팀에 엄청난 문화적 플러스가 되어 첫날부터 바로 성과를 내실 수 있겠습니다.',
      keyHighlight: 'value proposition / culture add / hit the ground running',
      noteKo: '면접관에게 최고의 찬사인 `culture add`와 `hit the ground running`을 이끌어낸 완벽한 피날레입니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · "I was in charge of" 탈출! 면접관 귀를 여는 STAR 구조 + 파워 동사',
      coreFormula: '[Headline Result 선제시] → S(배경) → T(과제) → A(spearheaded / streamlined) → R(measurable impact + 숫자)',
      wrongKonglish: 'I was in charge of the onboarding project and I helped my team to make the process good.',
      rightNative: 'I spearheaded a cross-functional initiative to streamline enterprise onboarding, cutting churn by 22% within two quarters.',
      explanationKo:
        '한국 지원자 이력서·면접 답변의 80%가 `was in charge of`, `did`, `helped`, `made it good` 같은 약한 동사에 머뭅니다. 글로벌 면접에서는 내가 주도한 행동의 수준에 맞춰 `spearheaded(진두지휘했다)`, `streamlined(효율화했다)`, `secured stakeholder buy-in(합의를 이끌어냈다)` 같은 능동 파워 동사를 쓰고, 바로 뒤에 분사구문(`, cutting churn by 22%` / `, delivering $1.4M in ARR`)으로 정량적 결과를 붙여 문장을 압축하세요.',
      registerSpectrum: {
        casual: 'I took the lead on fixing onboarding across teams and cut churn by 22%.',
        standard: 'I spearheaded a cross-functional onboarding redesign that reduced churn by 22%.',
        formal: 'I spearheaded a cross-functional turnaround initiative that streamlined enterprise onboarding and delivered a 22% reduction in annual churn.'
      }
    },
    {
      title: '원리 02 · 이직 사유 & 약점 질문 완벽 방어: 전 직장 험담 대신 성장 서사 공식',
      coreFormula: '[과거 자부심] I am proud of my track record... + [성장 한계] I have outgrown... + [미래 연결] aligns with your...',
      wrongKonglish: 'My current company has no vision and my boss never listens, so I want to change job to learn more.',
      rightNative: "I'm proud of the track record I've built over four years, but I've outgrown a single-market scope and want to align with your global roadmap.",
      explanationKo:
        '영어 면접에서 전 직장의 단점이나 상사 불만을 털어놓는 순간 "우리 회사에서도 불만이 생기면 똑같이 말할 사람"이라는 치명적 감점(red flag)을 받습니다. 대신 **과거 존중 → 역할 초과 성장(`outgrow`) → 지원 회사와의 전략적 일치(`align with`)** 3단계로 프레이밍하세요. 또한 "to learn more"라고 하면 "회사를 학원으로 여기나?"라는 오해를 살 수 있으니 "to create measurable impact at a global scale"처럼 기여 관점으로 바꿔 말하세요.',
      registerSpectrum: {
        casual: "I've loved my team, but I'm ready for a bigger global challenge that matches what you're building.",
        standard: "I'm proud of my track record, yet I've outgrown a domestic scope and want to align with your APAC expansion.",
        formal: 'While I deeply value the track record established in my current remit, I have outgrown a single-market mandate and seek to contribute to an organization aligned with global scale.'
      }
    },
    {
      title: '원리 03 · 면접 시제 정밀 구분: 특정 과거 성과(Past Simple) vs. 누적 커리어 역량(Present Perfect)',
      coreFormula: '특정 과거 프로젝트 = 과거시제 (spearheaded / ran) ↔ 지금까지 쌓아온 경력·성장 = 현재완료 (have built / have outgrown)',
      wrongKonglish: 'Last year I have spearheaded a redesign, and over the past five years I built a strong track record.',
      rightNative: "Over the past five years, I've built a strong track record—for example, last year I spearheaded an onboarding redesign that lifted renewals by 18%.",
      explanationKo:
        '영어 면접에서 한국인들이 가장 자주 틀리는 시제 함정입니다! ① `last year`, `in Q3`, `at my previous company`처럼 **끝난 과거 시점**이 나오면 무조건 **단순 과거시제**(`spearheaded`, `streamlined`, `delivered`)를 써야 합니다(`Last year I have spearheaded` ❌). ② 반면 `over the past four years`, `throughout my career`처럼 **과거부터 지금까지 축적된 경험·역량**을 요약할 때는 **현재완료**(`I have built a track record`, `I have outgrown`)를 써야 어법과 뉘앙스가 완벽해집니다.',
      registerSpectrum: {
        casual: "I've worked in SaaS for five years, and last year I led a big pricing launch.",
        standard: "Over the past five years, I've built a strong track record—last year, I spearheaded our enterprise launch.",
        formal: 'Throughout my career, I have cultivated a proven track record in cross-functional execution; notably, in 2025 I spearheaded a turnaround that expanded ARR by 19%.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd22-s01',
      drillType: 'konglish-fix',
      promptKo: '"작년에 유관 부서 온보딩 개편을 진두지휘해 이탈률을 22% 낮췄습니다." — 바른 시제와 파워 동사는?',
      promptEnHint: 'Last year는 단순 과거시제! was in charge of 대신 spearheaded를 고르세요.',
      targetEn: 'Last year, I spearheaded a cross-functional onboarding redesign that cut churn by 22%.',
      wrongKonglishOption: 'Last year, I have been in charge of onboarding project and made churn down 22%.',
      explanationKo: '명확한 과거 시점(Last year)에는 단순 과거 spearheaded를 쓰고, cut churn by 22%로 간결하게 수치를 제시합니다.'
    },
    {
      id: 'd22-s02',
      drillType: 'chunk-build',
      promptKo: '지난 4년간 쌓아 올린 실적에 자부심을 느끼지만, 이제 단일 시장 범위를 넘어설 만큼 성장했습니다.',
      promptEnHint: '현재완료 I have outgrown a single-market scope 청크를 연결하세요.',
      targetEn: "I'm proud of my track record, but I've outgrown a single-market scope.",
      chunks: ["I'm proud of", 'my track record,', "but I've outgrown", 'a single-market scope.'],
      explanationKo: '전 직장을 존중하면서 성장 의지를 품격 있게 전달하는 이직 사유 모범 문장입니다.'
    },
    {
      id: 'd22-s03',
      drillType: 'active-blank',
      promptKo: 'QA 점검을 자동화해 배포 주기를 2주에서 3일로 효율화했습니다.',
      promptEnHint: '프로세스를 간소화·효율화했다 s__________ (과거형 1단어, 11글자)',
      targetEn: 'By automating QA, we streamlined our release cycle from two weeks to three days.',
      blankData: {
        before: 'By automating QA, we',
        answer: 'streamlined',
        after: 'our release cycle from two weeks to three days.',
        firstLetterHint: 's__________ (11글자, 과거형)'
      },
      explanationKo: 'streamline(과거형 streamlined)은 프로세스 개선 성과를 말하는 면접 핵심 파워 동사입니다.'
    },
    {
      id: 'd22-s04',
      drillType: 'chunk-build',
      promptKo: '파일럿 지표를 일찍 공유해 재무팀과 영업팀 이해관계자의 지지를 확보했습니다.',
      promptEnHint: 'to secure stakeholder buy-in 청크를 문장 가운데에 배치하세요.',
      targetEn: 'I shared pilot metrics early to secure stakeholder buy-in across teams.',
      chunks: ['I shared pilot metrics', 'early', 'to secure stakeholder buy-in', 'across teams.'],
      explanationKo: 'secure stakeholder buy-in은 유관 부서 설득·갈등 해결 질문의 핵심 표현입니다.'
    },
    {
      id: 'd22-s05',
      drillType: 'active-blank',
      promptKo: '사용자 리서치는 결제 흐름을 재설계하는 데 결정적인(중추적인) 역할을 했습니다.',
      promptEnHint: '중추적인/결정적인 = p______ (형용사 1단어, 7글자)',
      targetEn: 'User research played a pivotal role in reshaping our checkout flow.',
      blankData: {
        before: 'User research played a',
        answer: 'pivotal',
        after: 'role in reshaping our checkout flow.',
        firstLetterHint: 'p______ (7글자)'
      },
      explanationKo: 'play a pivotal role in ~ 는 핵심 기여를 세련되게 강조하는 C1 연어입니다.'
    },
    {
      id: 'd22-s06',
      drillType: 'chunk-build',
      promptKo: '제 SaaS 경력을 바탕으로 입사 첫 주부터 바로 성과를 낼 자신이 있습니다.',
      promptEnHint: 'hit the ground running 청크를 활용하세요.',
      targetEn: 'Given my SaaS background, I can hit the ground running from week one.',
      chunks: ['Given my SaaS background,', 'I can', 'hit the ground running', 'from week one.'],
      explanationKo: 'Given ~ (~을 고려할 때)와 hit the ground running(투입 즉시 전력 발휘)의 프로페셔널한 조합입니다.'
    },
    {
      id: 'd22-s07',
      drillType: 'active-blank',
      promptKo: '초기 시장 확장 경험 덕분에 불확실하고 모호한 상황을 헤쳐 나가는 법을 배웠습니다.',
      promptEnHint: '모호함을 헤쳐 나가다 = navigate _________ (명사 1단어, 9글자)',
      targetEn: 'Early expansion taught me how to navigate ambiguity with clear milestones.',
      blankData: {
        before: 'Early expansion taught me how to navigate',
        answer: 'ambiguity',
        after: 'with clear milestones.',
        firstLetterHint: 'a________ (9글자)'
      },
      explanationKo: 'navigate ambiguity는 시니어·리더급 글로벌 면접의 핵심 평가 역량입니다.'
    },
    {
      id: 'd22-s08',
      drillType: 'konglish-fix',
      promptKo: '"귀사의 글로벌 확장 전략은 제 장기 커리어 목표와 방향이 정확히 일치합니다." — 자연스러운 지원 동기는?',
      promptEnHint: 'learn more 대신 align with ~ 를 활용한 문장을 고르세요.',
      targetEn: 'Your global expansion strategy closely aligns with my long-term career goals.',
      wrongKonglishOption: 'I want to join your company because I want to learn many things from global.',
      explanationKo: '지원 동기는 배우겠다는 수동적 태도보다 비전 일치(align with)와 기여 관점으로 어필해야 합니다.'
    },
    {
      id: 'd22-s09',
      drillType: 'active-blank',
      promptKo: '출시 일정이 밀렸을 때 저는 복구 로드맵에 주인의식을 갖고 책임졌습니다.',
      promptEnHint: '주인의식을 갖고 책임지다 = took _________ of (명사 1단어, 9글자)',
      targetEn: 'When the launch slipped, I took ownership of the recovery roadmap.',
      blankData: {
        before: 'When the launch slipped, I took',
        answer: 'ownership',
        after: 'of the recovery roadmap.',
        firstLetterHint: 'o________ (9글자)'
      },
      explanationKo: 'take ownership of ~ 는 문제를 남 탓하지 않고 스스로 책임지고 해결한다는 표현입니다.'
    },
    {
      id: 'd22-s10',
      drillType: 'chunk-build',
      promptKo: '제 핵심 가치 제안은 기술적 통찰과 비즈니스 실행력을 연결하는 능력입니다.',
      promptEnHint: 'My core value proposition is 청크로 문장을 시작하세요.',
      targetEn: 'My core value proposition is bridging technical insight with commercial execution.',
      chunks: ['My core value proposition', 'is bridging', 'technical insight', 'with commercial execution.'],
      explanationKo: '면접 첫 60초에 나의 강점을 한 줄로 정의하는 value proposition 공식입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd22-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '파워 동사 spearhead',
      questionKo: '빈칸에 알맞은 동사(1단어, 과거형)를 넣어 "저는 4개 지역 오피스에 걸친 출시 프로젝트를 진두지휘했습니다"를 완성하세요.',
      stimulusEn: 'I __________ our APAC localization rollout across four regional offices.',
      answer: 'spearheaded',
      explanationKo: '핵심 프로젝트를 앞에서 진두지휘했다는 파워 동사는 spearhead(과거형 spearheaded)입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "복잡한 승인 절차를 2주에서 3일로 효율화했다" — 과거형 동사(1단어, s__________)는?',
        stimulusEn: 'We __________ the approval workflow from two weeks to three days.',
        answer: 'streamlined',
        explanationKo: '업무 프로세스 간소화·효율화는 streamline(과거형 streamlined)을 씁니다.'
      }
    },
    {
      id: 'd22-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '유관 부서 협업 cross-functional',
      questionKo: '빈칸에 알맞은 형용사(1단어, 하이픈 포함)를 넣어 "개발·디자인·법무 유관 부서 협업 팀을 이끌었습니다"를 완성하세요.',
      stimulusEn: 'I led a __________ squad across engineering, design, and legal.',
      answer: 'cross-functional',
      explanationKo: '여러 직군·부서가 함께 일하는 다기능 협업 팀은 cross-functional입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이해관계자의 지지와 합의(2단어, 하이픈 포함)를 확보하다" — 빈칸은?',
        stimulusEn: 'Pilot data helped me secure __________ __________ from Finance.',
        answer: 'stakeholder buy-in',
        explanationKo: 'stakeholder buy-in은 의사결정권자와 유관 부서의 공감·지지를 뜻합니다.'
      }
    },
    {
      id: 'd22-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '정량적 성과 measurable impact',
      questionKo: '빈칸에 알맞은 명사구(2단어)를 넣어 "요금제 개편은 수치로 입증 가능한 실질적 성과를 냈습니다"를 완성하세요.',
      stimulusEn: 'Our pricing overhaul delivered __________ __________, boosting renewals by 19%.',
      answer: 'measurable impact',
      explanationKo: 'STAR의 Result에서 수치화 가능한 실질적 성과를 강조할 때 measurable impact를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "검증된 업무 실적(2단어, t____ r_____)을 보유하고 있다" — 빈칸은?',
        stimulusEn: 'I bring a proven __________ __________ of scaling B2B products.',
        answer: 'track record',
        explanationKo: 'proven track record of ~ 는 경력직 면접의 최빈출 신뢰 표현입니다.'
      }
    },
    {
      id: 'd22-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '이직 사유 동사 outgrow',
      questionKo: '빈칸에 알맞은 동사(1단어, 과거분사)를 넣어 "단일 시장 범위를 넘어설 만큼 성장했습니다"를 완성하세요.',
      stimulusEn: 'After four years, I feel I have __________ a single-market scope.',
      answer: 'outgrown',
      explanationKo: 'outgrow의 3단 변화는 outgrow - outgrew - outgrown입니다. 현재완료 뒤이므로 outgrown이 정답입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "귀사의 AI 전략은 제 장기 목표와 방향이 일치합니다" — 빈칸 2단어(a_____ w___)는?',
        stimulusEn: 'Your AI strategy closely __________ __________ my long-term goals.',
        answer: 'aligns with',
        explanationKo: '단수 주어 Your AI strategy에 맞춰 3인칭 단수 aligns with를 씁니다.'
      }
    },
    {
      id: 'd22-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '즉전감 관용구 hit the ground running',
      questionKo: '빈칸에 알맞은 관용구(4단어)를 넣어 "입사 첫 주부터 별도 적응기 없이 바로 성과를 낼 자신이 있습니다"를 완성하세요.',
      stimulusEn: 'With my domain experience, I can __________ __________ __________ __________ from week one.',
      answer: 'hit the ground running',
      explanationKo: 'hit the ground running은 새로운 직무나 프로젝트에 투입되자마자 즉시 성과를 낸다는 관용구입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "모호하고 불확실한 상황을 노련하게 헤쳐 나가다" — 빈칸 2단어(n_______ a________)는?',
        stimulusEn: 'Startup life taught me how to __________ __________ effectively.',
        answer: 'navigate ambiguity',
        explanationKo: 'navigate ambiguity는 불확실성 속 의사결정 역량을 나타내는 C1 핵심 표현입니다.'
      }
    },
    {
      id: 'd22-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '면접 시제 구분(과거 vs 현재완료)',
      questionKo: '다음 중 영어 면접에서 **단순 과거시제**와 **현재완료시제**가 모두 어법상 올바르게 쓰인 문장은?',
      stimulusEn: '종료된 과거 시점(last year, in 2024)과 누적 기간(over the past 4 years)을 구별하세요.',
      options: [
        'Last year, I have spearheaded a redesign that has cut churn by 20%.',
        "Over the past four years, I've built a strong track record—last year, I spearheaded a redesign that cut churn by 20%.",
        'In 2024, I have streamlined our billing workflow and have saved $200K.',
        'Since 2021, I led four cross-functional teams and outgrew my scope yesterday.'
      ],
      answer: "Over the past four years, I've built a strong track record—last year, I spearheaded a redesign that cut churn by 20%.",
      explanationKo:
        '누적 경력(Over the past four years)은 현재완료(`I\'ve built`), 종료된 과거 사건(last year)은 단순 과거(`spearheaded`, `cut`)로 정확히 구분한 2번이 정답입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "출시가 밀렸을 때 복구 로드맵을 끝까지 책임졌다" — 과거형 3단어(t___ o________ o_)는?',
        stimulusEn: 'When the launch slipped, I __________ __________ __________ the recovery plan.',
        answer: 'took ownership of',
        explanationKo: '과거 사건(When the launch slipped)에 맞춰 took ownership of를 씁니다.'
      }
    },
    {
      id: 'd22-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '이직 사유 프로페셔널 프레이밍',
      questionKo: '면접관이 `"Why are you looking to leave your current role?"`이라고 물었을 때 글로벌 채용 기준에서 **가장 높은 평가**를 받는 답변은?',
      stimulusEn: '전 직장 비판을 피하고 성장과 기여 중심으로 프레이밍된 답변을 고르세요.',
      options: [
        'My current manager micromanages everything and the company has terrible processes.',
        'Honestly, I just want a higher salary and a brand-name company on my resume.',
        "I'm proud of what I built over four years, but I've outgrown a single-market scope and want to drive impact on your global product roadmap.",
        'I have nothing left to do at my current job, so I want to join here to learn basic skills.'
      ],
      answer: "I'm proud of what I built over four years, but I've outgrown a single-market scope and want to drive impact on your global product roadmap.",
      explanationKo:
        '이전 경력에 대한 긍정적 태도 + 역할 초과 성장(outgrown) + 지원 회사의 글로벌 로드맵에 기여(drive impact)하는 3번이 완벽한 C1 답변입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "두 분기 만에 140만 달러 매출의 극적인 반전을 이끌었다" — 빈칸 1단어 명사(t_________)는?',
        stimulusEn: 'Our strategy sparked a $1.4M ARR __________ within two quarters.',
        answer: 'turnaround',
        explanationKo: '부진했던 지표의 극적인 반전·호전은 turnaround입니다.'
      }
    },
    {
      id: 'd22-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'STAR 기법 첫 60초 오프닝 전략',
      questionKo: '행동 면접 질문("Tell me about a time you turned around a struggling metric")에 대해 첫 60초 임팩트를 극대화하는 **가장 효과적인 시작 문장**은?',
      stimulusEn: '핵심 결과(Headline Result)를 먼저 제시해 면접관의 주의를 잡으세요.',
      options: [
        'Let me start from when I graduated from university in 2018 and joined my first startup.',
        'Sure—the headline result is a 22% drop in churn, achieved by spearheading a cross-functional onboarding overhaul.',
        'I was in charge of many meetings, and honestly it was very stressful for everyone.',
        'Before I answer, let me explain our entire corporate org chart for five minutes.'
      ],
      answer: 'Sure—the headline result is a 22% drop in churn, achieved by spearheading a cross-functional onboarding overhaul.',
      explanationKo:
        '장황한 연대기 대신 핵심 수치(22% drop in churn)와 주도적 역할(spearheading)을 첫 문장에 요약한 뒤 STAR 세부 전개로 들어가면 집중도가 극대화됩니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "내가 조직에 제공할 핵심 가치 제안"을 뜻하는 2단어 명사구(v____ p__________)는?',
        stimulusEn: 'My core __________ __________ is bridging engineering and commercial strategy.',
        answer: 'value proposition',
        explanationKo: '면접에서 본인의 차별적 강점을 정의하는 키워드는 value proposition입니다.'
      }
    },
    {
      id: 'd22-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'culture add vs culture fit 개념 이해',
      questionKo: '다음 문맥에서 밑줄 친 `culture add`가 의미하는 바로 가장 적절한 것은?',
      stimulusEn: '"She doesn\'t just check every technical box—her global customer lens makes her a true culture add for our product org."',
      options: [
        '기존 조직과 똑같이 맞추는 것을 넘어 새로운 시각과 가치를 더해 조직 문화를 풍성하게 하는 인재',
        '사내 행사와 회식을 전담으로 기획하는 사교적인 인재',
        '업무 성과보다 기존 매뉴얼을 절대 바꾸지 않는 보수적인 인재',
        '단기 계약직으로 문화 번역 업무만 보조하는 외부 컨설턴트'
      ],
      answer: '기존 조직과 똑같이 맞추는 것을 넘어 새로운 시각과 가치를 더해 조직 문화를 풍성하게 하는 인재',
      explanationKo:
        'culture add는 단순한 동질성(culture fit)을 넘어 조직에 새로운 관점·역량·가치를 보태는 인재를 가리키는 현대 글로벌 채용 핵심 용어입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "사용자 리서치가 중추적인 역할을 했다"에서 중추적인을 뜻하는 1단어 형용사는?',
        stimulusEn: 'Customer interviews played a __________ role in our turnaround.',
        answer: 'pivotal',
        explanationKo: 'play a pivotal role in ~ 구문을 기억하세요.'
      }
    },
    {
      id: 'd22-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '분사구문을 활용한 STAR 결과 압축',
      questionKo: '다음 중 행동(Action)과 정량적 결과(Result)를 분사구문으로 **어법상 가장 매끄럽게** 결합한 문장은?',
      stimulusEn: '능동 분사구문(cutting / lifting)과 전치사 by의 올바른 결합을 확인하세요.',
      options: [
        'I streamlined our QA pipeline, cut release cycles by 60% in one quarter.',
        'I streamlined our QA pipeline, cutting release cycles by 60% in one quarter.',
        'I was streamlining our QA pipeline, was cut release cycles to 60%.',
        'I streamlined about our QA pipeline, which cutting release cycles by 60%.'
      ],
      answer: 'I streamlined our QA pipeline, cutting release cycles by 60% in one quarter.',
      explanationKo:
        '접속사 없이 두 동사(streamlined, cut)를 쉼표로 연결하면 comma splice 오류입니다. `, cutting release cycles by 60%`처럼 현재분사구문으로 결과를 압축한 2번이 완벽합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 분사구문 빈칸 1단어(동사 boost의 -ing형): "요금제를 개편해 연간 갱신율을 19% 끌어올렸다"',
        stimulusEn: 'We redesigned our pricing tiers, __________ annual renewals by 19%.',
        answer: 'boosting',
        explanationKo: '앞 절의 결과를 자연스럽게 잇는 능동 분사구문 boosting이 정답입니다.'
      }
    },
    {
      id: 'd22-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'STAR 파워 동사 + 분사구문 배열',
      questionKo: '주어진 청크를 배열하여 임팩트 있는 STAR 성과 문장을 완성하세요.',
      stimulusEn: '[ churn by 22%. / I spearheaded / to streamline onboarding, / a cross-functional initiative / cutting ]',
      answer: 'I spearheaded a cross-functional initiative to streamline onboarding, cutting churn by 22%.',
      explanationKo: '주어+파워 동사(I spearheaded) + 목적어(a cross-functional initiative) + 목적(to streamline onboarding) + 결과 분사구문(, cutting churn by 22%.) 순입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이해관계자의 지지를 확보하기 위해 파일럿 지표를 일찍 공유했습니다." (I shared pilot metrics early / to secure stakeholder buy-in / across teams.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'I shared pilot metrics early to secure stakeholder buy-in across teams.',
        explanationKo: '구체적 행동 + 목적(to secure stakeholder buy-in) 구조입니다.'
      }
    },
    {
      id: 'd22-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '이직 사유 성장 서사 배열',
      questionKo: '주어진 청크를 배열하여 성숙한 이직 사유 답변을 완성하세요.',
      stimulusEn: '[ with your global roadmap. / a single-market scope / I have outgrown / and want to align / after four years ]',
      answer: 'I have outgrown a single-market scope after four years and want to align with your global roadmap.',
      acceptableAlt: ['After four years, I have outgrown a single-market scope and want to align with your global roadmap.'],
      explanationKo: '현재완료 outgrown으로 누적 성장을, align with로 지원 회사와의 연결성을 표현했습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "제 SaaS 경력을 바탕으로 첫 주부터 바로 성과를 낼 수 있습니다." (Given my SaaS experience, / I can hit the ground running / from week one.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Given my SaaS experience, I can hit the ground running from week one.',
        explanationKo: 'Given ~ 구문과 hit the ground running을 결합한 마무리 어필 문장입니다.'
      }
    },
    {
      id: 'd22-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'track record + measurable impact 한영 영작',
      questionKo: '우리말 뜻에 맞게 track record와 measurable impact를 사용해 문장을 영작하세요.',
      stimulusEn: '우리말: 저는 수치로 입증 가능한 성과를 내온 검증된 실적을 보유하고 있습니다.\n(힌트: I bring / a proven track record of / delivering measurable impact.)',
      answer: 'I bring a proven track record of delivering measurable impact.',
      explanationKo: '전치사 of 뒤에 동명사 delivering을 연결해 `a proven track record of delivering ~` 패턴을 완성합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "출시 일정이 밀렸을 때 복구 계획에 주인의식을 갖고 책임졌습니다." (When the launch slipped, / I took ownership of / the recovery plan.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'When the launch slipped, I took ownership of the recovery plan.',
        explanationKo: 'take ownership of ~ 로 책임감을 강조한 STAR 행동 문장입니다.'
      }
    },
    {
      id: 'd22-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '면접 시제 & 콩글리시 교정',
      questionKo: '다음 문장의 어법 오류 2곳(have spearheaded, cut)을 바르게 고쳐 완전한 영어 문장으로 다시 쓰세요.',
      stimulusEn: '오류 문장: Last year, I have spearheaded an onboarding redesign, cut churn by 22%.',
      answer: 'Last year, I spearheaded an onboarding redesign, cutting churn by 22%.',
      explanationKo: '① Last year와 현재완료는 함께 쓸 수 없으므로 spearheaded로, ② 결과 분사구문은 cutting으로 고칩니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: Since 2022, I built a track record of streamline workflows. (동사 built → have built, streamline → streamlining으로 고쳐 전체 문장을 쓰세요.)',
        stimulusEn: '바른 문장 전체를 작성하세요.',
        answer: 'Since 2022, I have built a track record of streamlining workflows.',
        explanationKo: 'Since + 과거 시점은 현재완료(have built), 전치사 of 뒤에는 동명사(streamlining)가 옵니다.'
      }
    },
    {
      id: 'd22-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '가치 제안 & 모호함 극복 한영 영작',
      questionKo: '다음 우리말을 value proposition과 navigate ambiguity를 활용해 자연스럽게 영작하세요.',
      stimulusEn: '우리말: 제 핵심 가치 제안은 모호한 상황을 헤쳐 나가고 이해관계자의 지지를 이끌어내는 것입니다.\n(힌트: My core value proposition is / navigating ambiguity / and securing stakeholder buy-in.)',
      answer: 'My core value proposition is navigating ambiguity and securing stakeholder buy-in.',
      explanationKo: '보어 자리에 동명사 병렬(navigating ~ and securing ~)을 배치해 간결하고 힘 있는 자기소개를 완성합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "사용자 리서치가 모바일 결제 개편에 결정적인 역할을 했습니다." (User research / played a pivotal role / in reshaping mobile checkout.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'User research played a pivotal role in reshaping mobile checkout.',
        explanationKo: 'play a pivotal role in + -ing 구문을 익혀두세요.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "Thanks for making time today! Before we dive into technical cases, tell me why you're looking to make a move now and what value proposition you bring to this role.",
    openingQuestionKo: '오늘 시간 내어 주셔서 감사합니다! 기술 케이스로 들어가기 전에, 지금 이직을 고려하시는 이유와 이 포지션에 가져오실 핵심 가치 제안이 무엇인지 말씀해 주세요.',
    followUpQuestionEn:
      "Great framing. Now walk me through a specific STAR example where you spearheaded a cross-functional project and delivered measurable impact despite competing priorities.",
    followUpQuestionKo: '프레이밍이 아주 좋네요. 이제 우선순위가 충돌하는 상황에서도 유관 부서 프로젝트를 진두지휘해 수치로 입증된 성과를 낸 구체적인 STAR 사례를 들려주세요.',
    recommendedChunks: [
      'proven track record of ~',
      'outgrown a single-market scope',
      'aligns with your global roadmap',
      'spearheaded a cross-functional initiative',
      'delivered measurable impact'
    ],
    modelAnswerEn:
      "I'm proud of the track record I've built over four years, but I've outgrown a single-market scope and your global roadmap closely aligns with my career goals. For instance, last year I spearheaded a cross-functional task force across product, sales, and engineering to streamline enterprise onboarding. By sharing early pilot data, I secured stakeholder buy-in and delivered measurable impact—cutting churn by 22% within two quarters."
  }
};
