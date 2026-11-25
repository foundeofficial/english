import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day24Module: DayLessonModule = {
  dayNumber: 24,
  weekNumber: 4,
  cefrLevel: 'c1',
  isWeeklyReview: true,
  dayBadge: 'DAY 24 · WEEK 4 주간 종합 성취도 평가 (20문항)',
  categoryLabel: 'Week 4 통합 리허설 · 발표·협상·가정법·면접·레지스터',
  title: 'Week 4 실전 통합 리허설 & 4주차 종합평가',
  subtitle: 'Day 19~23에서 완성한 영어 PT·윈윈 협상·가정법 위기 대응·STAR 면접·레지스터 전환을 하나의 글로벌 서밋 시나리오와 20문항 모의고사로 최종 검증',
  heroImage: 'assets/scene_boardroom_pitch.jpg',
  secondaryImage: 'assets/scene_media_podcast.jpg',
  estimatedSprintMin: 12,
  estimatedLectureMin: 55,
  keyExpression: 'Week 4 Mastery: Executive Pitch × Negotiation × Conditionals × STAR × Register',
  keySentenceByTier: {
    a1: 'Today I will show our plan, find common ground, and finish the deal.',
    a2: 'Let me lay out our game plan so both teams can get on board and move forward.',
    b1: "If we put ourselves in our partner's shoes, we can find common ground and strike a fair balance.",
    b2: "Let me walk you through the bottom line first—while a flat discount is off the table, we can meet halfway on rollout milestones so everyone gets on board.",
    c1: "Had we pushed back on unrealistic timelines earlier, we wouldn't be buying time today; at the end of the day, executive presence boils down to laying out a contingency plan that moves the needle.",
    c2: "To win over skeptical stakeholders without watering down our core standards, I spearheaded a structured game plan that struck a balance between assertiveness and empathy—enabling both sides to follow through on a $4M partnership."
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[24],
  readingPassage: {
    titleEn: 'How One 15-Minute Boardroom Briefing Saved a $4M Global Partnership',
    titleKo: '단 15분의 이사회 브리핑이 400만 달러 글로벌 파트너십을 살려낸 과정',
    genreBadge: 'Week 4 Executive Case Study · C1',
    estimatedMin: 5,
    paragraphsEn: [
      "Two weeks before a $4M APAC distribution contract was set to renew, the partnership appeared close to collapse. A regional shipment delay had triggered a ripple effect across three flagship markets, and the partner's VP was threatening to call off the renewal altogether. Rather than panicking or sending a stiff, defensive email, Seoul Strategy Lead Yuna prepared a fifteen-minute executive briefing designed around one principle: put yourself in your counterpart's shoes first, then lay out a transparent game plan.",
      "Yuna opened with remarkable executive presence, walking the room through the post-mortem metrics at a glance without hiding behind excuses. 'In hindsight, had we audited secondary freight carriers in Q2, we wouldn't be facing this backlog today,' she stated calmly. Next, she pivoted to a concrete contingency plan—showing that were regional port volume to spike again, dual routing would mitigate delays within hours. Having neutralized the fear of repeat failure, she pushed back politely on an unsustainable 25% penalty demand: while an upfront rate cut was off the table, she offered to meet halfway by waiving expedited fees and doubling down on dedicated account support on condition that both sides sign a two-year renewal.",
      "What truly won over the skeptical board was her deliberate register control and proven leadership track record. She recalled how her team had previously spearheaded a cross-functional logistics turnaround with measurable impact, using crisp formal language for contractual safeguards while shifting to warm, candid phrasal verbs when inviting the partner to weigh in on Q4 priorities. By striking a balance between firm assertiveness and genuine empathy, she surfaced common ground in fifteen minutes—getting every stakeholder on board to follow through on a mutually beneficial deal that truly moved the needle."
    ],
    paragraphsSlash: [
      "Two weeks before a $4M APAC distribution contract / was set to renew, / the partnership appeared close to collapse. / A regional shipment delay had triggered a ripple effect / across three flagship markets, / and the partner's VP was threatening / to call off the renewal altogether. / Rather than panicking or sending a stiff, defensive email, / Seoul Strategy Lead Yuna prepared / a fifteen-minute executive briefing / designed around one principle: / put yourself in your counterpart's shoes first, / then lay out a transparent game plan.",
      "Yuna opened with remarkable executive presence, / walking the room through the post-mortem metrics at a glance / without hiding behind excuses. / 'In hindsight, had we audited secondary freight carriers in Q2, / we wouldn't be facing this backlog today,' / she stated calmly. / Next, she pivoted to a concrete contingency plan— / showing that were regional port volume to spike again, / dual routing would mitigate delays within hours. / Having neutralized the fear of repeat failure, / she pushed back politely on an unsustainable 25% penalty demand: / while an upfront rate cut was off the table, / she offered to meet halfway / by waiving expedited fees / and doubling down on dedicated account support / on condition that both sides sign a two-year renewal.",
      "What truly won over the skeptical board / was her deliberate register control / and proven leadership track record. / She recalled how her team had previously spearheaded / a cross-functional logistics turnaround with measurable impact, / using crisp formal language for contractual safeguards / while shifting to warm, candid phrasal verbs / when inviting the partner to weigh in on Q4 priorities. / By striking a balance / between firm assertiveness and genuine empathy, / she surfaced common ground in fifteen minutes— / getting every stakeholder on board / to follow through on a mutually beneficial deal / that truly moved the needle."
    ],
    paragraphsKo: [
      '400만 달러 규모의 APAC 유통 계약 갱신을 2주 앞두고 파트너십이 결렬 직전에 놓였습니다. 지역 선적 지연이 세 곳의 핵심 시장 전반에 연쇄 파급 효과를 일으키자, 파트너사 부사장은 갱신 자체를 전면 취소하겠다고 압박했습니다. 당황하거나 딱딱하고 방어적인 이메일을 보내는 대신, 서울 전략 리드 유나는 한 가지 원칙을 중심으로 15분짜리 임원 브리핑을 준비했습니다. 먼저 상대방의 입장이 되어 생각해 본 뒤, 투명한 실전 작전 계획을 체계적으로 펼쳐 보이는 것이었습니다.',
      '유나는 돋보이는 리더십 존재감으로 발표를 열어, 변명 뒤에 숨지 않고 사후 회고 지표를 한눈에 파악되도록 차근차근 안내했습니다. "돌이켜보면 2분기에 보조 화물 운송사를 감사했더라면 오늘 이런 물량 적체를 겪고 있지는 않을 것입니다"라고 차분히 말했습니다. 이어 구체적인 비상 대응 계획으로 전환해, 혹시라도 지역 항만 물동량이 다시 급증하더라도 이중 라우팅이 몇 시간 안에 지연을 완화할 수 있음을 입증했습니다. 재발 불안을 잠재운 뒤에는 감당 불가한 25% 위약금 요구에 정중히 제동을 걸었습니다. 일괄 단가 인하는 협상 불가하지만, 양측이 2년 갱신에 서명한다는 조건하에 특송 수수료를 면제하고 전담 계정 지원에 역량을 집중해 절충점을 맞추자고 제안했습니다.',
      '회의적이었던 이사회의 마음을 진정으로 사로잡은 것은 그녀의 의도적인 어조(레지스터) 제어와 검증된 리더십 실적이었습니다. 유나는 과거 유관 부서 물류 반전을 진두지휘해 수치로 입증된 성과를 낸 이력을 언급하며, 계약 안전장치를 말할 때는 명료한 격식 표현을 쓰고 파트너에게 4분기 우선순위 의견을 보태 달라고 청할 때는 따뜻하고 솔직한 구동사로 전환했습니다. 단호한 주장과 진심 어린 공감 사이에서 균형을 맞춤으로써 그녀는 단 15분 만에 공통분모를 이끌어냈고, 모든 이해관계자가 실질적 변화를 만드는 상호 호혜적 계약을 끝까지 실행하도록 동참시켰습니다.'
    ],
    keyExpressions: [
      "put yourself in ~'s shoes / common ground : ~의 입장이 되어 보다 / 공통분모",
      'executive presence / lay out a game plan : 리더의 존재감 / 작전 계획을 체계적으로 펼치다',
      'push back on ~ / double down on ~ : 논리적으로 반박·제동 걸다 / 역량을 더욱 집중하다',
      'win over / weigh in on ~ : 회의적인 상대를 설득해 내 편으로 만들다 / 의견을 보태다',
      'strike a balance / get ~ on board : 균형을 맞추다 / 동참시키다',
      'follow through on ~ / move the needle : 끝까지 실행에 옮기다 / 실질적 변화를 만들다'
    ],
    comprehensionQuiz: [
      {
        id: 'd24-rq01',
        questionKo: '유나가 25% 위약금 요구에 정중히 제동을 걸기(push back on) **직전에** 먼저 해결한 과제는 무엇이었나요?',
        options: [
          '솔직한 사후 회고와 이중 라우팅 비상 계획을 제시해 파트너의 재발 불안을 먼저 잠재웠다.',
          '경쟁 유통사와의 대체 계약서를 테이블 위에 올려 협상 압박 수위를 높였다.',
          '모든 지연 책임이 외부 항만 당국에 있음을 입증하는 법무 문서를 제출했다.',
          '계약 갱신 기한을 다음 분기로 연기(put off)해 달라고 요청해 시간을 벌었다.'
        ],
        answer: '솔직한 사후 회고와 이중 라우팅 비상 계획을 제시해 파트너의 재발 불안을 먼저 잠재웠다.',
        explanationKo:
          '2문단에서 "Having neutralized the fear of repeat failure, she pushed back politely..."로 재발 우려를 먼저 해소한 뒤 협상 조건을 조율했음을 알 수 있습니다.'
      },
      {
        id: 'd24-rq02',
        questionKo: '유나가 회의적인 이사회의 마음을 사로잡는(win over) 과정에서 보여준 레지스터 제어(register control) 전략은?',
        options: [
          '계약 안전장치에는 명료한 격식 표현을, 파트너 의견을 청할 때는 따뜻한 구어 구동사를 구분해 썼다.',
          '브리핑 전체를 라틴계 격식 동사로만 통일해 최고 수준의 법적 권위를 강조했다.',
          '긴장을 풀기 위해 계약 조건 설명 단계에서도 가벼운 슬랭과 농담을 반복했다.',
          '구두 발표를 최소화하고 50쪽 분량의 서면 메모로 질의응답을 대체했다.'
        ],
        answer: '계약 안전장치에는 명료한 격식 표현을, 파트너 의견을 청할 때는 따뜻한 구어 구동사를 구분해 썼다.',
        explanationKo:
          '3문단의 "using crisp formal language for contractual safeguards while shifting to warm, candid phrasal verbs when inviting the partner to weigh in"이 핵심입니다.'
      },
      {
        id: 'd24-rq03',
        questionKo: '이 사례가 보여주는 Week 4 핵심 설득 공식의 최종 결과로 옳은 것은?',
        options: [
          '단호함과 공감의 균형으로 15분 만에 공통분모를 찾아 2년 상호 호혜적 갱신 합의를 이끌어냈다.',
          '25% 일괄 단가 인하를 수용하는 대신 1년 단기 연장 계약으로 위기를 넘겼다.',
          '파트너사 부사장이 계약을 철회했으나 다른 3개 시장에서 손실을 보전했다.',
          '법무팀의 반대로 특송 수수료 면제는 철회되고 사후 보고서만 채택되었다.'
        ],
        answer: '단호함과 공감의 균형으로 15분 만에 공통분모를 찾아 2년 상호 호혜적 갱신 합의를 이끌어냈다.',
        explanationKo:
          '3문단 마지막 문장에서 "striking a balance between firm assertiveness and genuine empathy, she surfaced common ground in fifteen minutes"로 2년 갱신 동참을 이끌어냈습니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd24-v01',
      word: 'executive presence',
      phonetic: '/ɪɡˈzekjətɪv ˈprezəns/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '리더로서의 존재감, 청중을 신뢰시키는 침착함과 카리스마',
      meaningEn: 'the poise, clarity, and calm authority that inspire confidence in senior settings',
      nuanceTipKo: '발표·면접·임원 회의에서 "목소리 톤 + 결론 우선 구조 + 침착한 대응"이 합쳐져 만드는 프로페셔널한 아우라를 말합니다.',
      exampleEn: 'Maintaining calm under tough Q&A is the hallmark of strong executive presence.',
      exampleKo: '날카로운 질의응답 속에서도 침착함을 유지하는 것이 강한 리더 존재감의 핵심 징표입니다.'
    },
    {
      id: 'd24-v02',
      word: 'strike a balance',
      phonetic: '/straɪk ə ˈbæləns/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '(상충하는 두 가치 사이에서) 절묘한 균형을 맞추다',
      meaningEn: 'find a fair, sensible middle point between two competing priorities',
      nuanceTipKo: 'TED 협상 강연의 핵심 개념! `strike a balance between A and B` 구문으로 단호함과 배려, 속도와 품질 사이의 균형을 말합니다.',
      exampleEn: 'Great negotiators strike a balance between firm assertiveness and genuine empathy.',
      exampleKo: '뛰어난 협상가는 단호한 자기주장과 진심 어린 공감 사이에서 균형을 맞춥니다.'
    },
    {
      id: 'd24-v03',
      word: 'common ground',
      phonetic: '/ˌkɑːmən ˈɡraʊnd/',
      pos: '명사구 (불가산)',
      cefr: 'b2',
      meaningKo: '공통분모, 서로 동의할 수 있는 합의 기반',
      meaningEn: 'shared interests, goals, or beliefs that form the basis for agreement',
      nuanceTipKo: '불가산 명사라 `find / build common ground`로 씁니다(`a common ground` ❌). 의견 충돌이 생겼을 때 합의를 여는 열쇠입니다.',
      exampleEn: 'Before debating pricing, let us establish common ground on project milestones.',
      exampleKo: '가격을 논하기 전에 프로젝트 마일스톤에 대한 공통분모부터 확인합시다.'
    },
    {
      id: 'd24-v04',
      word: "put yourself in ~'s shoes",
      phonetic: '/pʊt jərˈself ɪn ʃuːz/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '~의 입장이 되어 생각해 보다 (역지사지하다)',
      meaningEn: 'imagine a situation from another person’s perspective to understand their pressures',
      nuanceTipKo: '협상 전 상대의 리스크와 내부 압박을 먼저 파악할 때 쓰이는 TED 협상 1단계 핵심 관용구입니다.',
      exampleEn: "If you put yourself in the client's shoes, their concern about downtime makes total sense.",
      exampleKo: '고객사의 입장이 되어 생각해 보면, 다운타임에 대한 그들의 우려는 전적으로 이해가 됩니다.'
    },
    {
      id: 'd24-v05',
      word: 'push back on',
      phonetic: '/pʊʃ bæk ɑːn/',
      pos: '구동사',
      cefr: 'c1',
      meaningKo: '(무리한 요구·전제·일정에) 논리적으로 반박하다, 정중히 제동을 걸다',
      meaningEn: 'resist, challenge, or politely object to an unrealistic demand or proposal',
      nuanceTipKo: '단순히 일정을 미루는 `push back the meeting`과 달리, 전치사 `on`이 붙은 `push back on [요구]`는 근거를 들어 반론을 제기한다는 뜻입니다!',
      exampleEn: 'We need to push back on that scope expansion unless additional budget is approved.',
      exampleKo: '추가 예산이 승인되지 않는 한 그 업무 범위 확장 요구에는 논리적으로 제동을 걸어야 합니다.'
    },
    {
      id: 'd24-v06',
      word: 'double down on',
      phonetic: '/ˈdʌbl daʊn ɑːn/',
      pos: '구동사',
      cefr: 'c1',
      meaningKo: '(효과가 검증된 전략·강점에) 역량을 두 배로 집중하다, 박차를 가하다',
      meaningEn: 'strengthen commitment and invest even more effort into a chosen strategy',
      nuanceTipKo: '경영진 전략 발표에서 "잘되는 영역에 자원을 몰아주겠다"고 선언할 때 원어민 CEO들이 즐겨 쓰는 구동사입니다.',
      exampleEn: 'Given our Q3 retention jump, we are doubling down on enterprise onboarding.',
      exampleKo: '3분기 유지율 도약을 바탕으로 우리는 엔터프라이즈 온보딩에 역량을 더욱 집중하고 있습니다.'
    },
    {
      id: 'd24-v07',
      word: 'buy time',
      phonetic: '/baɪ taɪm/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '(대응·준비·협상을 위해) 시간을 벌다',
      meaningEn: 'gain extra time to prepare, verify facts, or solve a difficult issue',
      nuanceTipKo: '위기 상황에서 임시 안전장치로 복구 시간을 확보하거나, 협상에서 내부 검토 시간을 벌 때 자주 씁니다.',
      exampleEn: 'The temporary cache patch bought engineering enough time to fix the root bug.',
      exampleKo: '임시 캐시 패치 덕분에 엔지니어링 팀은 근본 버그를 고칠 충분한 시간을 벌었습니다.'
    },
    {
      id: 'd24-v08',
      word: 'lay out',
      phonetic: '/leɪ aʊt/',
      pos: '구동사 (분리 가능)',
      cefr: 'b2',
      meaningKo: '(계획·조건·로드맵을) 한눈에 보이도록 체계적으로 펼쳐 설명하다',
      meaningEn: 'present or explain a plan, argument, or set of options clearly and systematically',
      nuanceTipKo: '발표와 협상에서 머릿속 청사진을 테이블 위에 펼쳐 보이듯 명료하게 제시할 때 `lay out the game plan / terms`로 씁니다.',
      exampleEn: 'Let me lay out three clear options before we vote on the Q4 budget.',
      exampleKo: '4분기 예산을 표결하기 전에 세 가지 명확한 선택지를 체계적으로 펼쳐 보여드리겠습니다.'
    },
    {
      id: 'd24-v09',
      word: 'weigh in on',
      phonetic: '/weɪ ɪn ɑːn/',
      pos: '구동사',
      cefr: 'c1',
      meaningKo: '(중요한 의사결정·안건에) 전문적 의견을 보태다, 참여해 발언하다',
      meaningEn: 'contribute an informed opinion or perspective to an important discussion',
      nuanceTipKo: '상대방의 권위를 존중하며 의견을 청할 때 "I\'d love for Legal to weigh in on this clause"처럼 쓰면 품격이 살아납니다.',
      exampleEn: 'Could our regional leads weigh in on the revised rollout schedule by noon?',
      exampleKo: '정오까지 수정된 출시 일정에 대해 지역 리드 분들께서 의견을 보태 주실 수 있을까요?'
    },
    {
      id: 'd24-v10',
      word: 'game plan',
      phonetic: '/ɡeɪm plæn/',
      pos: '명사구',
      cefr: 'b2',
      meaningKo: '실전 작전 계획, 승리를 위한 구체적 실행 로드맵',
      meaningEn: 'a practical, step-by-step strategy designed to achieve a specific objective',
      nuanceTipKo: '단순 plan보다 위기 돌파나 중요한 프레젠테이션·협상 직전에 팀의 결의를 모으는 역동적인 실무 표현입니다.',
      exampleEn: "What's our game plan if the client pushes back on the two-year lock-in?",
      exampleKo: '고객사가 2년 약정에 반발할 경우 우리의 실전 대응 계획은 무엇인가요?'
    },
    {
      id: 'd24-v11',
      word: 'on board',
      phonetic: '/ɑːn bɔːrd/',
      pos: '전치사구',
      cefr: 'b2',
      meaningKo: '(제안·계획에) 동의하고 함께 동참하는 상태인',
      meaningEn: 'in agreement with and supportive of a plan, idea, or team direction',
      nuanceTipKo: '`get everyone on board(모두를 설득해 동참시키다)`는 이해관계자 합의(buy-in)의 자연스러운 구어 버전입니다.',
      exampleEn: 'Once Finance saw the ROI model, every executive got on board immediately.',
      exampleKo: '재무팀이 ROI 모델을 확인하자 모든 임원이 즉시 계획에 동참했습니다.'
    },
    {
      id: 'd24-v12',
      word: 'win over',
      phonetic: '/wɪn ˈoʊvər/',
      pos: '구동사 (분리 가능)',
      cefr: 'c1',
      meaningKo: '(회의적이거나 반대하던 상대를) 설득해 내 편으로 만들다',
      meaningEn: 'persuade a skeptical or reluctant person to support your position',
      nuanceTipKo: '분리 가능 구동사이므로 대명사는 `win them over`로 씁니다! 발표·협상·면접의 최종 목표를 표현하는 핵심 동사입니다.',
      exampleEn: 'Her calm data storytelling won over even the most skeptical board members.',
      exampleKo: '그녀의 침착한 데이터 스토리텔링은 가장 회의적인 이사회 구성원들까지 설득해 냈습니다.'
    },
    {
      id: 'd24-v13',
      word: 'recap',
      phonetic: '/ˈriːkæp/',
      pos: '동사 · 명사',
      cefr: 'b2',
      meaningKo: '(핵심 논의·합의 사항을) 간략히 다시 요약하다; 핵심 요약',
      meaningEn: 'briefly summarize the main points or decisions just discussed',
      nuanceTipKo: '회의·발표·협상 말미에 "Just to recap what we agreed on..."으로 액션 아이템을 못 박을 때 필수 표현입니다.',
      exampleEn: 'Let me quickly recap our three action items before we wrap up today.',
      exampleKo: '오늘 회의를 마치기 전에 세 가지 실행 과제를 짧게 다시 요약해 보겠습니다.'
    },
    {
      id: 'd24-v14',
      word: 'move the needle',
      phonetic: '/muːv ðə ˈniːdl/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '(계기판 바늘을 움직이듯) 눈에 띄는 실질적 변화·성과를 만들어 내다',
      meaningEn: 'create a noticeable, meaningful, and measurable improvement in performance',
      nuanceTipKo: '자잘한 작업이 아니라 진짜 핵심 지표(KPI)를 끌어올리는 임팩트를 말할 때 실리콘밸리·글로벌 임원들이 가장 애용하는 관용구입니다.',
      exampleEn: 'Let us focus our Q4 budget on two initiatives that will genuinely move the needle.',
      exampleKo: '실질적인 성과를 만들어 낼 두 가지 핵심 과제에 4분기 예산을 집중합시다.'
    },
    {
      id: 'd24-v15',
      word: 'follow through on',
      phonetic: '/ˈfɑːloʊ θruː ɑːn/',
      pos: '구동사',
      cefr: 'c1',
      meaningKo: '(약속·합의·계획을) 말로 그치지 않고 끝까지 실행에 옮기다',
      meaningEn: 'complete or deliver on a promise, commitment, or action plan reliably',
      nuanceTipKo: '단순히 확인 연락을 하는 `follow up on`과 꼭 구별하세요! `follow through on`은 끝까지 책임지고 완수한다는 신뢰의 언어입니다.',
      exampleEn: 'Long-term trust is built when both partners follow through on every commitment.',
      exampleKo: '장기적 신뢰는 양측 파트너가 모든 약속을 끝까지 실행에 옮길 때 쌓입니다.'
    }
  ],
  dialogue: [
    {
      id: 'd24-t01',
      speaker: 'Yuna',
      roleLabel: '서울 전략 리드 (발표·협상 주도)',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english: "Thank you both for making time, Mark and Liam. Today I'll walk you through our post-mortem at a glance and lay out a concrete game plan to protect Q4 shipments.",
      slashBroken: "Thank you both for making time, Mark and Liam. / Today I will walk you through / our post-mortem at a glance / and lay out a concrete game plan / to protect Q4 shipments.",
      korean: '시간 내어 주셔서 감사합니다, 마크와 리암. 오늘 사후 회고 지표를 한눈에 파악되도록 차근차근 안내드리고, 4분기 선적을 지킬 구체적인 실전 작전 계획을 펼쳐 보이겠습니다.',
      keyHighlight: 'walk you through ~ at a glance / lay out a game plan',
      noteKo: 'Day 19(PT 오프닝) + Day 24(game plan)를 결합해 첫 10초에 리더의 존재감(executive presence)을 세웠습니다.'
    },
    {
      id: 'd24-t02',
      speaker: 'Mark',
      roleLabel: '글로벌 파트너사 VP',
      voicePitch: 0.89,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-right',
      english: "To be candid, Yuna, our retail stores won't put up with another delay. Unless we see a 25% fee reduction, my board is ready to call off the renewal.",
      slashBroken: 'To be candid, Yuna, / our retail stores will not put up with another delay. / Unless we see a 25% fee reduction, / my board is ready to call off the renewal.',
      korean: '솔직히 말씀드리자면 유나 씨, 저희 매장들은 또 한 번의 지연을 참고 견뎌주지 않을 겁니다. 25% 수수료 인하가 없다면 저희 이사회는 갱신을 전면 취소할 준비가 되어 있습니다.',
      keyHighlight: 'put up with / call off',
      noteKo: 'Day 23의 구어 구동사(`put up with`, `call off`)로 파트너의 절박함과 강경한 협상 압박이 생생하게 드러납니다.'
    },
    {
      id: 'd24-t03',
      speaker: 'Yuna',
      roleLabel: '서울 전략 리드 (발표·협상 주도)',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-left',
      english: "Putting myself in your shoes, I completely see why your board is frustrated. In hindsight, had we audited backup carriers in Q2, we wouldn't be facing this backlog today.",
      slashBroken: 'Putting myself in your shoes, / I completely see why your board is frustrated. / In hindsight, / had we audited backup carriers in Q2, / we would not be facing this backlog today.',
      korean: '귀사의 입장이 되어 생각해 보면 이사회가 왜 좌절하시는지 전적으로 이해합니다. 돌이켜보면 2분기에 보조 운송사를 감사했더라면 오늘 이런 물량 적체를 겪고 있지는 않을 것입니다.',
      keyHighlight: 'Putting myself in your shoes / Had we audited ~, we wouldn\'t be ~ today',
      noteKo: '역지사지 공감 + Day 21의 C1 도치 혼합 가정법(`Had we audited ~, we wouldn\'t be facing ~ today`)으로 방어 태도 없이 신뢰를 회복합니다.'
    },
    {
      id: 'd24-t04',
      speaker: 'Liam',
      roleLabel: '글로벌 운영 디렉터',
      voicePitch: 0.96,
      sceneImage: 'assets/scene_media_podcast.jpg',
      cameraMotion: 'zoom-in',
      english: "Let me weigh in on the safeguards too. Were port traffic to spike again this winter, our new dual-routing contingency plan would reroute cargo within four hours to mitigate any ripple effect.",
      slashBroken: 'Let me weigh in on the safeguards too. / Were port traffic to spike again this winter, / our new dual-routing contingency plan / would reroute cargo within four hours / to mitigate any ripple effect.',
      korean: '안전장치에 대해서도 의견을 보태겠습니다. 올겨울 항만 물동량이 다시 급증하더라도, 새 이중 라우팅 비상 계획이 4시간 안에 화물을 우회시켜 연쇄 파급 효과를 완화할 것입니다.',
      keyHighlight: 'weigh in on / Were ~ to spike / contingency plan / mitigate',
      noteKo: 'Day 21의 미래 가상 도치(`Were port traffic to spike`)와 리스크 완화 어휘가 결합된 설득력 있는 운영 보증입니다.'
    },
    {
      id: 'd24-t05',
      speaker: 'Yuna',
      roleLabel: '서울 전략 리드 (발표·협상 주도)',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-right',
      english: "And I have to push back politely on a flat 25% cut—that's off the table. However, we do have wiggle room to meet you halfway: we'll waive expedited fees and double down on dedicated support on condition that we lock in a two-year renewal.",
      slashBroken: 'And I have to push back politely / on a flat 25% cut— / that is off the table. / However, we do have wiggle room / to meet you halfway: / we will waive expedited fees / and double down on dedicated support / on condition that we lock in a two-year renewal.',
      korean: '그리고 일괄 25% 인하 요구에는 정중히 제동을 걸 수밖에 없습니다—그건 협상 불가합니다. 다만 절충점을 맞출 여지는 있습니다. 2년 갱신을 확정하신다는 조건하에 특송 수수료를 면제하고 전담 지원에 역량을 집중하겠습니다.',
      keyHighlight: 'push back on / off the table / wiggle room / meet you halfway / on condition that',
      noteKo: 'Day 20의 협상 뼈대(off the table + wiggle room + meet halfway + on condition that)와 Day 24의 `push back on`·`double down on`이 완벽히 융합되었습니다.'
    },
    {
      id: 'd24-t06',
      speaker: 'Mark',
      roleLabel: '글로벌 파트너사 VP',
      voicePitch: 0.89,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-left',
      english: "Honestly, you've struck the right balance between accountability and realism. Your team spearheaded a similar logistics turnaround in Japan last year, so I trust what you bring to the table.",
      slashBroken: 'Honestly, you have struck the right balance / between accountability and realism. / Your team spearheaded a similar logistics turnaround / in Japan last year, / so I trust what you bring to the table.',
      korean: '솔직히 책임감과 현실성 사이에서 딱 맞는 균형을 잡아주셨네요. 작년 일본에서도 비슷한 물류 반전을 진두지휘하신 실적이 있으니, 귀사가 실질적으로 기여할 가치를 신뢰합니다.',
      keyHighlight: 'struck the right balance / spearheaded ~ turnaround / bring to the table',
      noteKo: 'Day 22의 검증된 실적(spearheaded + turnaround)과 Day 23의 `bring to the table`이 파트너의 신뢰를 결정지었습니다.'
    },
    {
      id: 'd24-t07',
      speaker: 'Yuna',
      roleLabel: '서울 전략 리드 (발표·협상 주도)',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english: "Glad we found common ground! Just to recap—the bottom line is dual routing live by Monday and zero expedited fees on a two-year term. Let's get Legal on board today and follow through on a deal that truly moves the needle.",
      slashBroken: 'Glad we found common ground! / Just to recap— / the bottom line is dual routing live by Monday / and zero expedited fees on a two-year term. / Let us get Legal on board today / and follow through on a deal / that truly moves the needle.',
      korean: '공통분모를 찾게 되어 다행입니다! 핵심만 다시 요약하자면—월요일까지 이중 라우팅 가동, 그리고 2년 약정 기준 특송비 전면 면제가 결론입니다. 오늘 법무팀을 동참시켜 실질적 변화를 만드는 계약을 끝까지 실행해 봅시다.',
      keyHighlight: 'common ground / recap / bottom line / on board / follow through on / moves the needle',
      noteKo: '발표 요약(recap/bottom line) + 합의 확정(on board) + 실행 다짐(follow through on)까지 Week 4 전체를 관통하는 완벽한 클로징입니다.'
    }
  ],
  grammarSections: [
    {
      title: '종합 원리 01 · [발표 × 협상 통합 공식] BLUF 결론 선제시 + 조건부 윈윈 제안',
      coreFormula: 'Walk through at a glance → The bottom line is that ~ → While [A] is off the table, we could meet halfway on condition that [B]',
      wrongKonglish: 'First I explain about many slides. Your 25% discount is impossible, so please sign two years anyway.',
      rightNative: "Let me walk you through the bottom line at a glance: while a flat 25% cut is off the table, we could meet halfway by waiving fees on condition that we lock in a two-year renewal.",
      explanationKo:
        'Day 19(프레젠테이션)와 Day 20(협상)의 핵심은 결국 하나의 구조로 만납니다. ① 장황한 도입을 버리고 `walk you through` + `the bottom line`으로 의사결정 기준을 먼저 깔아 주세요. ② 감당 불가한 요구에는 `push back politely on ~`과 `off the table`로 단호하되 품격 있게 선을 긋고, ③ 반드시 `wiggle room`, `meet halfway`, `on condition that`으로 상호 호혜적(mutually beneficial) 교환 조건을 열어두세요.',
      registerSpectrum: {
        casual: "Here's the bottom line: 25% off won't fly, but if you sign for two years, we'll waive the extra fees.",
        standard: 'The bottom line is that a 25% cut is off the table, though we can meet halfway on condition that we sign a two-year term.',
        formal: 'To recap our core position, while a base-rate reduction remains off the table, we are prepared to waive expedited surcharges on condition that a 24-month renewal is executed.'
      }
    },
    {
      title: '종합 원리 02 · [위기 대응 × 가정법 도치 총정리] 3대 도치 구문과 혼합 가정법 판별',
      coreFormula: 'Had + S + p.p., S + would have p.p. (과거) / would + V now (혼합) | Were + S + to V, S + would V | Should + S + V, will/명령문',
      wrongKonglish: 'If had we checked carriers earlier, we would not faced delays today; if were traffic spike, we will reroute.',
      rightNative: "Had we audited carriers in Q2, we wouldn't be facing this backlog today; were volume to spike again, dual routing would mitigate delays within hours.",
      explanationKo:
        'Day 21에서 배운 고급 가정법은 임원 Q&A와 위기 회고에서 가장 강력한 차별화 무기입니다. 최종 시험 전 3가지 핵심 체크포인트를 반드시 점검하세요: ① **If와 도치(`Had / Were / Should`)는 절대 공존 불가!** ② **과거 실수 → 현재 진행 결과(`today / now`)**는 반드시 혼합 가정법(`Had + S + p.p., S + would not be -ing today`)으로 연결! ③ **`Should + S + 동사원형`**에서는 3인칭 단수 `-s`를 절대 붙이지 않습니다(`Should latency exceed` ✅).',
      registerSpectrum: {
        casual: "If we'd checked earlier, we wouldn't be stuck today—and if traffic spikes again, backup routing will kick in.",
        standard: "Had we checked earlier, we wouldn't face this backlog today; should volume spike, backup routing will mitigate the delay.",
        formal: 'Had secondary carriers been audited in Q2, we would not currently face a backlog; were volume to surge unexpectedly, dual routing would mitigate disruption within hours.'
      }
    },
    {
      title: '종합 원리 03 · [면접 STAR × 레지스터 전환] 파워 동사·시제·구동사 어순 최종 점검',
      coreFormula: '과거 성과(Past Simple: spearheaded) vs. 누적 실적(Present Perfect: have built) | 분리(put it off / win them over) vs. 불가(look into it / follow through on it)',
      wrongKonglish: 'Last year I have been in charge of a project, so do not put off it and follow up on your promise.',
      rightNative: "Last year I spearheaded a cross-functional turnaround with measurable impact; let's not put it off—let's follow through on our commitment and win them over.",
      explanationKo:
        'Day 22(면접)와 Day 23(레지스터)의 최종 실전 함정 3가지를 묶어 정리합니다. ① **시제 일치**: 종료된 과거(`last year`, `in Q2`)는 단순 과거(`spearheaded`), 현재까지 이어진 경력·성장(`over four years`, `since 2022`)은 현재완료(`have built`, `have outgrown`). ② **구동사 대명사 어순**: `put it off`, `tone it down`, `rule it out`, `win them over`는 가운데! `look into it`, `put up with it`, `follow through on it`은 맨 끝! ③ **혼동 구동사**: `follow up on(후속 확인·연락)` ≠ `follow through on(약속 끝까지 완수)`, `tone down(어조 완화)` ≠ `water down(기준 희석)`.',
      registerSpectrum: {
        casual: "Last year I led a big turnaround, so don't put this off—let's follow through and win them over.",
        standard: 'Last year I spearheaded a cross-functional turnaround; let us not put it off and instead follow through on every commitment.',
        formal: 'Having established a proven track record in cross-functional turnarounds, we must neither postpone execution nor water down accountability as we follow through on our partnership.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd24-s01',
      drillType: 'konglish-fix',
      promptKo: '[Day 19+24 통합] "사후 회고 지표를 한눈에 안내드리고 핵심 결론을 요약하겠습니다." — 바른 문장은?',
      promptEnHint: 'explain about, in one eye 콩글리시를 버리고 walk you through / at a glance / recap을 고르세요.',
      targetEn: "I'll walk you through the post-mortem at a glance and recap the bottom line.",
      wrongKonglishOption: "I'll explain about the post-mortem in one eye and conclusion the bottom line.",
      explanationKo: 'walk you through + at a glance + recap the bottom line이 자연스럽게 연결된 임원 보고 문장입니다.'
    },
    {
      id: 'd24-s02',
      drillType: 'chunk-build',
      promptKo: '[Day 20+24 통합] 25% 일괄 인하 요구에는 정중히 제동을 걸되, 수수료 면제로 절충점을 맞춥시다.',
      promptEnHint: 'push back on / meet halfway 청크를 자연스럽게 배열하세요.',
      targetEn: "Let's push back on the 25% cut and meet halfway by waiving fees.",
      chunks: ["Let's push back on", 'the 25% cut', 'and meet halfway', 'by waiving fees.'],
      explanationKo: 'push back on(무리한 요구에 반박·제동)과 meet halfway(절충점 찾기)의 실전 조합입니다.'
    },
    {
      id: 'd24-s03',
      drillType: 'active-blank',
      promptKo: '[Day 24] 뛰어난 협상가는 단호함과 진심 어린 공감 사이에서 균형을 맞춥니다.',
      promptEnHint: '균형을 맞추다 = ______ a balance (동사 원형 1단어, 6글자)',
      targetEn: 'Great negotiators strike a balance between assertiveness and empathy.',
      blankData: {
        before: 'Great negotiators',
        answer: 'strike',
        after: 'a balance between assertiveness and empathy.',
        firstLetterHint: 's_____ (6글자)'
      },
      explanationKo: 'strike a balance between A and B는 상충하는 두 가치의 조화를 뜻하는 C1 핵심 연어입니다.'
    },
    {
      id: 'd24-s04',
      drillType: 'chunk-build',
      promptKo: '[Day 21 복습] 2분기에 보조 운송사를 감사했더라면 오늘 이런 물량 적체를 겪지 않을 텐데요.',
      promptEnHint: '도치 혼합 가정법 Had we audited ~ / we would not face ~ today를 조립하세요.',
      targetEn: 'Had we audited backup carriers in Q2, we would not face this backlog today.',
      chunks: ['Had we audited', 'backup carriers in Q2,', 'we would not face', 'this backlog today.'],
      explanationKo: '과거 반사실 도치(Had we audited)와 현재 결과(would not face ~ today)가 결합된 혼합 가정법입니다.'
    },
    {
      id: 'd24-s05',
      drillType: 'active-blank',
      promptKo: '[Day 24] 장기적 신뢰는 양측이 모든 약속을 끝까지 실행에 옮길 때 쌓입니다.',
      promptEnHint: '끝까지 실행에 옮기다 = follow _______ on (전치사/부사 1단어, 7글자)',
      targetEn: 'Long-term trust is built when both sides follow through on every commitment.',
      blankData: {
        before: 'Long-term trust is built when both sides follow',
        answer: 'through',
        after: 'on every commitment.',
        firstLetterHint: 't______ (7글자)'
      },
      explanationKo: 'follow up on(확인 연락)이 아니라 약속을 끝까지 완수한다는 뜻의 follow through on이 정답입니다.'
    },
    {
      id: 'd24-s06',
      drillType: 'chunk-build',
      promptKo: '[Day 22 복습] 저는 유관 부서 물류 반전을 진두지휘해 수치로 입증된 성과를 냈습니다.',
      promptEnHint: 'spearheaded a cross-functional turnaround / with measurable impact 청크를 연결하세요.',
      targetEn: 'I spearheaded a cross-functional turnaround with measurable impact last year.',
      chunks: ['I spearheaded', 'a cross-functional turnaround', 'with measurable impact', 'last year.'],
      explanationKo: '과거 시점(last year)과 단순 과거 파워 동사(spearheaded)의 완벽한 STAR 문장입니다.'
    },
    {
      id: 'd24-s07',
      drillType: 'active-blank',
      promptKo: '[Day 24] 실질적 성과를 만들어 낼 두 가지 핵심 과제에 4분기 예산을 집중합시다.',
      promptEnHint: '눈에 띄는 실질적 변화를 만들다 = move the ______ (명사 1단어, 6글자)',
      targetEn: 'Let us invest our Q4 budget in initiatives that truly move the needle this quarter.',
      blankData: {
        before: 'Let us invest our Q4 budget in initiatives that truly move the',
        answer: 'needle',
        after: 'this quarter.',
        firstLetterHint: 'n_____ (6글자)'
      },
      explanationKo: 'move the needle은 핵심 KPI를 실질적으로 끌어올리는 임팩트를 뜻합니다.'
    },
    {
      id: 'd24-s08',
      drillType: 'konglish-fix',
      promptKo: '[Day 23 복습] "회의적인 이사회 구성원들을 설득해 내 편으로 만들고, 기준은 희석시키지 마세요." — 어순이 바른 문장은?',
      promptEnHint: 'win over와 water down 모두 분리 가능 구동사입니다! 대명사 위치에 주의하세요.',
      targetEn: "Let's win them over with clear data without watering down our standards.",
      wrongKonglishOption: "Let's win over them with clear data without toning down our standards.",
      explanationKo: '대명사 them은 win과 over 사이에 넣어 `win them over`로 쓰고, 기준 약화는 `water down`을 써야 정확합니다.'
    },
    {
      id: 'd24-s09',
      drillType: 'active-blank',
      promptKo: '[Day 24] 3분기 유지율 도약을 바탕으로 우리는 엔터프라이즈 온보딩에 역량을 더욱 집중하고 있습니다.',
      promptEnHint: '역량을 두 배로 집중하다 = ________ down on (현재진행형 1단어, 8글자)',
      targetEn: 'Based on our Q3 retention jump, we are doubling down on onboarding.',
      blankData: {
        before: 'Based on our Q3 retention jump, we are',
        answer: 'doubling',
        after: 'down on onboarding.',
        firstLetterHint: 'd_______ (8글자, -ing형)'
      },
      explanationKo: 'double down on ~ 은 효과가 검증된 전략에 투자를 더욱 집중한다는 C1 비즈니스 구동사입니다.'
    },
    {
      id: 'd24-s10',
      drillType: 'chunk-build',
      promptKo: '[Day 24] 정오까지 수정된 출시 일정에 대해 지역 리드 분들께서 의견을 보태 주실 수 있을까요?',
      promptEnHint: 'weigh in on the revised rollout 청크를 연결하세요.',
      targetEn: 'Could our regional leads weigh in on the revised rollout by noon?',
      chunks: ['Could our regional leads', 'weigh in on', 'the revised rollout', 'by noon?'],
      explanationKo: 'weigh in on(의견을 보태다)과 마감 전치사 by noon의 자연스러운 실무 요청 문장입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd24-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[Day 19] 발표 결론 bottom line',
      questionKo: '빈칸에 알맞은 명사구(2단어)를 넣어 "핵심 결론은 빠른 온보딩이 4분기 매출을 지킨다는 것입니다"를 완성하세요.',
      stimulusEn: 'The __________ __________ is that faster onboarding protects Q4 revenue.',
      answer: 'bottom line',
      explanationKo: '임원 발표에서 핵심 결론을 한 문장으로 박아 주는 표현은 the bottom line입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 차트 숫자를 전체 맥락에서 이해시켜 드리자면" — 빈칸 2단어(i___ p__________)는?',
        stimulusEn: 'To put these chart figures __________ __________, holiday traffic always dips.',
        answer: 'into perspective',
        explanationKo: 'put ~ into perspective는 수치를 비교 맥락 속에 배치해 설득력을 높입니다.'
      }
    },
    {
      id: 'd24-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[Day 20] 협상 재량 여지 wiggle room',
      questionKo: '빈칸에 알맞은 명사구(2단어)를 넣어 "일괄 할인은 어렵지만 구축비에는 조율 여지가 좀 있습니다"를 완성하세요.',
      stimulusEn: 'While a flat cut is off the table, we do have some __________ __________ on setup fees.',
      answer: 'wiggle room',
      explanationKo: '불가산 명사구 wiggle room은 예산·가격·일정의 조정 가능 여지를 뜻합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "2년 계약을 확정하신다는 조건하에 수수료를 면제하겠습니다" — 빈칸 3단어(o_ c________ t___)는?',
        stimulusEn: 'We will waive setup fees __________ __________ __________ you sign for two years.',
        answer: 'on condition that',
        explanationKo: 'on condition that + 절은 조건부 양보의 핵심 구문입니다.'
      }
    },
    {
      id: 'd24-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[Day 21] 비상 대응 계획 contingency plan',
      questionKo: '빈칸에 알맞은 명사구(2단어)를 넣어 "이중 라우팅은 비상시 의지할 신뢰할 만한 비상 대응 계획을 제공합니다"를 완성하세요.',
      stimulusEn: 'Dual routing gives our team a reliable __________ __________ to fall back on.',
      answer: 'contingency plan',
      explanationKo: '예상치 못한 장애나 위기 시 즉시 가동할 플랜 B는 contingency plan입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이중 라우팅은 배송 지연의 피해를 크게 완화할 것입니다" — 빈칸 동사(1단어, m_______)는?',
        stimulusEn: 'Dual routing will significantly __________ the impact of port delays.',
        answer: 'mitigate',
        explanationKo: '리스크나 피해를 경감·완화하다는 타동사 mitigate를 씁니다.'
      }
    },
    {
      id: 'd24-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[Day 22] STAR 파워 동사 spearhead',
      questionKo: '빈칸에 알맞은 동사(1단어, 과거형)를 넣어 "작년에 유관 부서 물류 반전 프로젝트를 진두지휘했습니다"를 완성하세요.',
      stimulusEn: 'Last year, I __________ a cross-functional logistics turnaround in Japan.',
      answer: 'spearheaded',
      explanationKo: '특정 과거 시점(Last year)과 함께 핵심 이니셔티브를 주도했다는 파워 동사 spearheaded를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "단일 시장 범위를 넘어설 만큼 성장했다" — 현재완료 뒤 과거분사(1단어, o_______)는?',
        stimulusEn: 'After four years, I have __________ a single-market scope.',
        answer: 'outgrown',
        explanationKo: 'outgrow의 과거분사형은 outgrown입니다.'
      }
    },
    {
      id: 'd24-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[Day 23] 실질적 기여 bring to the table',
      questionKo: '빈칸에 알맞은 표현(3단어)을 넣어 "귀사 팀이 실질적으로 기여하는 가치를 신뢰합니다"를 완성하세요.',
      stimulusEn: 'We genuinely trust what your team brings __________ __________ __________.',
      answer: 'to the table',
      explanationKo: 'bring ~ to the table은 파트너나 지원자가 제공하는 실질적 가치와 역량을 뜻합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "결국 이 논의는 장기적 신뢰로 귀결됩니다" — 빈칸 3단어(b____ d___ t_)는?',
        stimulusEn: 'At the end of the day, this discussion __________ __________ __________ trust.',
        answer: 'boils down to',
        explanationKo: 'boils down to ~ 는 복잡한 사안의 궁극적 핵심을 압축할 때 씁니다.'
      }
    },
    {
      id: 'd24-e06',
      number: 6,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '[Day 24] 합의 균형 strike a balance',
      questionKo: '빈칸에 알맞은 표현(3단어, 현재완료 과거분사)을 넣어 "책임감과 현실성 사이에서 딱 맞는 균형을 맞추셨네요"를 완성하세요.',
      stimulusEn: 'You have __________ __________ __________ between accountability and realism.',
      answer: 'struck a balance',
      acceptableAlt: ['struck the balance'],
      explanationKo: 'strike의 과거분사는 struck입니다. strike a balance between A and B 연어를 기억하세요.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "약속을 끝까지 실행에 옮기다" — 빈칸 3단어(f_____ t______ o_)는?',
        stimulusEn: 'Trust grows when both partners __________ __________ __________ every commitment.',
        answer: 'follow through on',
        explanationKo: 'follow through on ~ 은 약속이나 계획을 끝까지 완수한다는 뜻입니다.'
      }
    },
    {
      id: 'd24-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[Day 19] 차트 증감 전치사 & PT 어법',
      questionKo: '다음 중 영어 프레젠테이션 차트 설명 문장으로 어법과 어휘가 **모두 완벽한** 것은?',
      stimulusEn: '타동사 목적어, 증감폭 전치사(by vs to), 차트 동사의 정확한 쓰임을 확인하세요.',
      options: [
        'Let me explain about Slide 5: sign-ups spiked to 34% and became flat in August.',
        "Let me walk you through Slide 5: sign-ups spiked by 34% in July before leveling off in August, underscoring our mobile redesign's impact.",
        'Let me walk you Slide 5 at one eye: traffic stood out until 11.4% last quarter.',
        'Let me drill down about the cohort chart so we can park the bottom line.'
      ],
      answer: "Let me walk you through Slide 5: sign-ups spiked by 34% in July before leveling off in August, underscoring our mobile redesign's impact.",
      explanationKo:
        '`walk you through`, `spiked by 34%`, `before leveling off`, 분사구문 `, underscoring ~`까지 모든 문법과 어휘가 완벽한 2번이 정답입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "지금부터 질의응답을 열겠습니다" — open the _____ (명사 1단어)는?',
        stimulusEn: "With that recap complete, I'd like to open the __________ for questions.",
        answer: 'floor',
        explanationKo: 'open the floor for questions는 세련된 PT Q&A 전환 구문입니다.'
      }
    },
    {
      id: 'd24-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[Day 20+24] 협상 거절과 조건부 대안',
      questionKo: '파트너가 감당 불가한 25% 위약금 인하를 요구할 때, 단호함과 공감의 균형을 잡은 **최적의 협상 응답**은?',
      stimulusEn: '상대 입장 인정 + 레드라인 명시 + 조건부 절충안(Give-Get)을 모두 갖춘 선택지를 고르세요.',
      options: [
        'No, 25% is totally crazy and impossible. Take our current contract or walk away.',
        "Putting myself in your shoes, I understand your pressure. While a flat 25% cut is off the table, we can meet halfway by waiving expedited fees on condition that we lock in a two-year renewal.",
        'Sure, we have a wiggle room for 25% right now even without any trade-off.',
        'We will push back your meeting until Friday because pricing is a sticking point.'
      ],
      answer: "Putting myself in your shoes, I understand your pressure. While a flat 25% cut is off the table, we can meet halfway by waiving expedited fees on condition that we lock in a two-year renewal.",
      explanationKo:
        '역지사지 공감 + off the table로 한계선 설정 + meet halfway와 on condition that 조건부 교환을 결합한 2번이 완벽합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "가격 논의 전에 공통분모를 먼저 확인합시다" — 불가산 명사구 2단어(c_____ g_____)는?',
        stimulusEn: 'Before debating price, let us find __________ __________ on priorities.',
        answer: 'common ground',
        explanationKo: '불가산 명사구 common ground는 관사 a 없이 씁니다.'
      }
    },
    {
      id: 'd24-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[Day 21] 가정법 도치 3대 구문 정밀 판별',
      questionKo: '다음 C1 가정법 문장 중 어법 오류가 **전혀 없는** 문장은?',
      stimulusEn: 'If 중복, 도치 뒤 동사원형/과거분사, 혼합 가정법 시제 일치를 점검하세요.',
      options: [
        'If had we audited secondary carriers in Q2, we would not face this backlog today.',
        'Should port latency exceeds four hours, escalate the alert to Operations immediately.',
        'Were regional volume to spike again this winter, our dual-routing safeguard would mitigate delays within hours.',
        'Had we knew about the rate cap earlier, we would deployed a backup gateway.'
      ],
      answer: 'Were regional volume to spike again this winter, our dual-routing safeguard would mitigate delays within hours.',
      explanationKo:
        '1번은 If와 도치 중복, 2번은 Should 뒤 exceeds(→ exceed), 4번은 knew(→ known) 및 would deployed(→ would have deployed) 오류입니다. `Were + S + to V, S + would V` 구조의 3번만 완벽합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "만약 우리가 2분기에 보조 운송사를 감사했더라면" — If 없는 도치절 앞부분 빈칸 3단어는?',
        stimulusEn: '__________ __________ __________ secondary carriers in Q2, we would not face delays today.',
        answer: 'Had we audited',
        explanationKo: 'If we had audited를 도치하면 Had we audited가 됩니다.'
      }
    },
    {
      id: 'd24-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[Day 22] 영어 면접 시제 & STAR 완성도',
      questionKo: '다음 중 글로벌 면접에서 **시제(과거 vs 현재완료)**와 **STAR 임팩트 표현**이 모두 정확한 문장은?',
      stimulusEn: '종료된 과거 시점(last year)과 누적 경력(over five years), 분사구문 문법을 점검하세요.',
      options: [
        'Last year, I have spearheaded a cross-functional launch, cut churn by 18%.',
        "Over the past five years, I've built a proven track record in SaaS; last year, I spearheaded an onboarding overhaul that delivered measurable impact, cutting churn by 22%.",
        'I want to leave because my boss is unfair and I hope to learn basic things here.',
        'In 2024, I have outgrown my role and have streamlined three workflows yesterday.'
      ],
      answer: "Over the past five years, I've built a proven track record in SaaS; last year, I spearheaded an onboarding overhaul that delivered measurable impact, cutting churn by 22%.",
      explanationKo:
        '누적 기간(현재완료 `I\'ve built`) + 종료된 과거(단순 과거 `spearheaded`, `delivered`) + 결과 분사구문(`, cutting churn by 22%`)이 모두 정확한 2번이 정답입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "입사 첫 주부터 별도 적응기 없이 바로 성과를 낼 수 있습니다" — 4단어 관용구는?',
        stimulusEn: 'With my background, I can __________ __________ __________ __________ in week one.',
        answer: 'hit the ground running',
        explanationKo: '경력직 즉전감 어필의 대표 관용구 hit the ground running입니다.'
      }
    },
    {
      id: 'd24-e11',
      number: 11,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[Day 23+24] 구동사 대명사 어순 최종 검증',
      questionKo: '다음 중 모든 구동사와 대명사(`it / them`)의 어순이 **완벽하게 일치하는** 문장은?',
      stimulusEn: '분리 가능(put off, win over, rule out)과 분리 불가(look into, put up with, follow through on)를 구별하세요.',
      options: [
        "We can't put off it any longer—we must win over them today.",
        "I'll look it into right now so we can follow it through on before Friday.",
        "Don't rule it out yet; let's look into it first and win them over with real data.",
        "Our clients won't put it up with, so please tone down it immediately."
      ],
      answer: "Don't rule it out yet; let's look into it first and win them over with real data.",
      explanationKo:
        '분리 가능 `rule it out`, `win them over`는 대명사가 가운데, 분리 불가 `look into it`은 대명사가 끝에 배치된 3번만 완벽합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "그 회의를 미루지 맙시다" — put off와 it을 바른 어순(3단어)으로 쓰세요.',
        stimulusEn: "Let's not __________ __________ __________ again.",
        answer: 'put it off',
        explanationKo: '분리 가능 구동사 put off + 대명사 it → put it off입니다.'
      }
    },
    {
      id: 'd24-e12',
      number: 12,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[Day 23+24] 혼동 표현 정밀 구별',
      questionKo: '다음 중 비즈니스 뉘앙스 설명이 **잘못된** 항목은?',
      stimulusEn: 'Week 4 핵심 다의어와 혼동 구동사 쌍을 정밀하게 확인하세요.',
      options: [
        '`tone down`은 날카로운 말투를 누그러뜨리는 것이고, `water down`은 핵심 기준·메시지를 희석시키는 것이다.',
        '`follow up on`은 진행 확인 연락을 뜻하고, `follow through on`은 약속을 끝까지 실행해 완수한다는 뜻이다.',
        '`push back the meeting`은 회의를 미루는 것이고, `push back on a demand`는 무리한 요구에 논리적으로 반박·제동 거는 것이다.',
        '`an oversight`는 경영진의 엄격한 감독을 뜻하고, `at the end of the day`는 오늘 오후 5시 마감 기한을 뜻한다.'
      ],
      answer: '`an oversight`는 경영진의 엄격한 감독을 뜻하고, `at the end of the day`는 오늘 오후 5시 마감 기한을 뜻한다.',
      explanationKo:
        '관사 a가 붙은 `an oversight`는 "부주의한 누락·실수"이며, `at the end of the day`는 "결국 따지고 보면"이라는 본질 강조 표현입니다(마감은 `by EOD`).',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "무리한 범위 확장 요구에 정중히 제동을 걸다" — 빈칸 3단어(p___ b___ o_)는?',
        stimulusEn: 'We need to __________ __________ __________ unrealistic scope requests.',
        answer: 'push back on',
        explanationKo: '전치사 on과 결합한 push back on ~ 은 무리한 요구에 논리적으로 반발·제동 건다는 뜻입니다.'
      }
    },
    {
      id: 'd24-e13',
      number: 13,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '[Day 24] 임원 리허설 통합 어휘 선택',
      questionKo: '임원 브리핑에서 "임시 캐시 패치로 근본 원인을 고칠 **시간을 벌었으니**, 이제 실질적 성과를 만드는(KPI를 움직이는) 핵심 과제에 **역량을 더욱 집중합시다**"의 빈칸에 알맞은 조합은?',
      stimulusEn: 'The temporary patch __________ enough time to fix the bug, so let us __________ initiatives that truly __________.',
      options: [
        'bought / double down on / move the needle',
        'called off / put up with / water down',
        'ruled out / tone down / park the floor',
        'waived / fall back on / outgrow'
      ],
      answer: 'bought / double down on / move the needle',
      explanationKo:
        '`buy time(과거 bought)` = 시간을 벌다, `double down on` = 역량을 더욱 집중하다, `move the needle` = 실질적 변화를 만들다 조합이 정확합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "재무팀이 ROI 모델을 보자 모든 임원이 계획에 동참했다" — 빈칸 2단어(o_ b____)는?',
        stimulusEn: 'Once Finance saw the ROI model, every executive got __________ __________.',
        answer: 'on board',
        explanationKo: 'get on board는 제안이나 계획에 동의하고 동참한다는 실무 핵심 표현입니다.'
      }
    },
    {
      id: 'd24-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Day 19+24] PT 오프닝 & 게임플랜 배열',
      questionKo: '주어진 청크를 배열하여 임원 브리핑 오프닝 문장을 완성하세요.',
      stimulusEn: "[ a concrete game plan. / Today I'll / at a glance / walk you through our metrics / and lay out ]",
      answer: "Today I'll walk you through our metrics at a glance and lay out a concrete game plan.",
      acceptableAlt: ['Today I will walk you through our metrics at a glance and lay out a concrete game plan.'],
      explanationKo: 'walk you through ~ at a glance(한눈에 차근차근 안내) + and lay out a concrete game plan(구체적 작전 계획 제시) 구조입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "핵심만 다시 요약하자면, 월요일까지 이중 라우팅을 가동하는 것이 결론입니다." (Just to recap, / the bottom line is / launching dual routing by Monday.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Just to recap, the bottom line is launching dual routing by Monday.',
        explanationKo: 'Just to recap으로 정리 신호를 주고 the bottom line is ~ 로 결론을 못 박습니다.'
      }
    },
    {
      id: 'd24-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Day 20+24] 조건부 윈윈 협상 배열',
      questionKo: '주어진 청크를 배열하여 단호함과 유연함을 모두 갖춘 협상 문장을 완성하세요.',
      stimulusEn: '[ on a two-year renewal. / is off the table, / While a 25% cut / by waiving fees / we can meet halfway ]',
      answer: 'While a 25% cut is off the table, we can meet halfway by waiving fees on a two-year renewal.',
      explanationKo: '양보절(While ~ is off the table,) 뒤에 대안 절충안(we can meet halfway by waiving fees on ~)을 연결합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "조건을 더 매력적으로 만들기 위해 전담 지원에 역량을 집중하겠습니다." (To sweeten the deal, / we will double down on / dedicated support.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'To sweeten the deal, we will double down on dedicated support.',
        explanationKo: 'sweeten the deal과 double down on을 결합한 고급 협상 제안입니다.'
      }
    },
    {
      id: 'd24-e16',
      number: 16,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Day 21] 도치 혼합 가정법 영작',
      questionKo: '우리말 뜻에 맞게 If 없는 도치 혼합 가정법(`Had we ~`)으로 문장을 영작하세요.',
      stimulusEn: '우리말: 2분기에 보조 운송사를 감사했더라면, 오늘 이런 물량 적체를 겪고 있지는 않을 것입니다.\n(힌트: Had we audited / backup carriers in Q2, / we would not be facing / this backlog today.)',
      answer: 'Had we audited backup carriers in Q2, we would not be facing this backlog today.',
      acceptableAlt: ["Had we audited backup carriers in Q2, we wouldn't be facing this backlog today."],
      explanationKo: '과거 반사실 도치(Had we audited)와 현재 진행 결과(would not be facing ~ today)의 C1 핵심 구문입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "올겨울 물동량이 다시 급증하더라도 이중 라우팅이 지연을 완화할 것입니다." (Were volume to spike again, / dual routing would mitigate / the delays.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Were volume to spike again, dual routing would mitigate the delays.',
        explanationKo: 'Were + 주어 + to V 미래 가상 도치 구문을 정확히 완성했습니다.'
      }
    },
    {
      id: 'd24-e17',
      number: 17,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Day 22] STAR 실적 & 이직 서사 영작',
      questionKo: '우리말 뜻에 맞게 spearheaded, cross-functional, measurable impact를 활용해 영작하세요.',
      stimulusEn: '우리말: 작년에 저는 유관 부서 물류 반전을 진두지휘해 수치로 입증된 성과를 냈습니다.\n(힌트: Last year, / I spearheaded a cross-functional logistics turnaround / that delivered measurable impact.)',
      answer: 'Last year, I spearheaded a cross-functional logistics turnaround that delivered measurable impact.',
      explanationKo: 'Last year에 맞춰 단순 과거(spearheaded, delivered)로 통일하고 핵심 STAR 어휘를 배치했습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "저는 단일 시장 범위를 넘어설 만큼 성장했고 귀사의 글로벌 전략과 방향이 일치합니다." (I have outgrown a single-market scope / and align with / your global strategy.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'I have outgrown a single-market scope and align with your global strategy.',
        explanationKo: '현재완료 outgrown과 align with를 결합한 성장형 이직 서사입니다.'
      }
    },
    {
      id: 'd24-e18',
      number: 18,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Day 23] 레지스터 전환 & 구동사 어순 교정',
      questionKo: '다음 문장의 오류 2곳(`put off it`, `watering down` 오용)을 바르게 고쳐 완전한 영어 문장으로 다시 쓰세요.',
      stimulusEn: '오류 문장: Do not put off it—let us water down the harsh wording and win them over.',
      answer: 'Do not put it off—let us tone down the harsh wording and win them over.',
      acceptableAlt: ["Don't put it off—let's tone down the harsh wording and win them over.", 'Do not put it off, let us tone down the harsh wording and win them over.'],
      explanationKo: '① 대명사 어순 put off it → put it off, ② 날카로운 표현 완화는 water down이 아니라 tone down으로 교정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: If should latency exceeds 400ms, look it into immediately. (If 삭제, exceeds → exceed, look it into → look into it으로 교정해 전체 문장을 쓰세요.)',
        stimulusEn: '바른 문장 전체를 작성하세요.',
        answer: 'Should latency exceed 400ms, look into it immediately.',
        explanationKo: '도치 조건절(Should latency exceed)과 분리 불가 구동사(look into it)를 한 번에 점검했습니다.'
      }
    },
    {
      id: 'd24-e19',
      number: 19,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Day 24] 역지사지 & 균형 설득 영작',
      questionKo: '다음 우리말을 strike a balance와 common ground를 활용해 자연스럽게 영작하세요.',
      stimulusEn: '우리말: 단호함과 공감 사이에서 균형을 맞춤으로써 우리는 15분 만에 공통분모를 찾았습니다.\n(힌트: By striking a balance / between assertiveness and empathy, / we found common ground / in fifteen minutes.)',
      answer: 'By striking a balance between assertiveness and empathy, we found common ground in fifteen minutes.',
      explanationKo: 'By + -ing(~함으로써) 구문과 strike a balance between A and B, 불가산 명사구 common ground가 조화를 이룬 C1 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "수정된 출시 일정에 대해 지역 리드 분들께서 의견을 보태 주시길 바랍니다." (I would love for regional leads / to weigh in on / the revised rollout.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'I would love for regional leads to weigh in on the revised rollout.',
        explanationKo: 'would love for [사람] to weigh in on ~ 은 품격 있는 의견 요청 구문입니다.'
      }
    },
    {
      id: 'd24-e20',
      number: 20,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '[Week 4 피날레] 종합 실행 클로징 영작',
      questionKo: '다음 우리말을 on board, follow through on, move the needle을 모두 사용해 완성하세요.',
      stimulusEn: '우리말: 모든 이해관계자를 동참시켜 실질적 변화를 만드는 계약을 끝까지 실행해 봅시다.\n(힌트: Let us get every stakeholder on board / to follow through on a deal / that truly moves the needle.)',
      answer: 'Let us get every stakeholder on board to follow through on a deal that truly moves the needle.',
      acceptableAlt: ["Let's get every stakeholder on board to follow through on a deal that truly moves the needle."],
      explanationKo: 'Week 4의 대미를 장식하는 임원 리더십 클로징! 단수 선행사 a deal에 맞춰 moves the needle 수일치까지 완벽합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "결국 리더의 존재감은 약속을 끝까지 실행에 옮기는 것으로 귀결됩니다." (At the end of the day, / executive presence boils down to / following through on commitments.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'At the end of the day, executive presence boils down to following through on commitments.',
        explanationKo: '전치사 to 뒤에 동명사 following through on ~ 을 연결한 C1 피날레 문장입니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "Welcome to the Week 4 executive capstone! Imagine a key global partner is threatening to call off a $4M renewal after a shipment delay. Give me a 60-second pitch opening that shows accountability, lays out a contingency plan, and proposes a win-win trade-off.",
    openingQuestionKo: 'Week 4 파이널 임원 리허설에 오신 걸 환영합니다! 선적 지연 때문에 핵심 글로벌 파트너가 400만 달러 갱신 취소를 위협하는 상황입니다. 책임감 있는 회고, 비상 대응 계획, 그리고 윈윈 절충안을 담은 60초 브리핑을 들려주세요.',
    followUpQuestionEn:
      "Strong executive presence! Now wrap up with a warm yet firm closing—recap the bottom line and invite the partner's VP to weigh in so we can get everyone on board today.",
    followUpQuestionKo: '리더의 존재감이 돋보이네요! 이제 따뜻하면서도 단호하게 마무리해 주세요—핵심 결론을 다시 요약하고 파트너 VP에게 의견을 보태 달라고 요청해 오늘 모두를 동참시켜 보세요.',
    recommendedChunks: [
      'Putting myself in your shoes,',
      'Had we audited ~, we wouldn\'t be ~ today',
      'While ~ is off the table, we can meet halfway on condition that ~',
      'strike a balance / common ground',
      'Just to recap, the bottom line is ~ / follow through on'
    ],
    modelAnswerEn:
      "Putting myself in your shoes, I completely understand your board's concern. In hindsight, had we audited backup carriers earlier, we wouldn't be facing this delay today—so we've built a dual-routing contingency plan to mitigate any future spike. While a flat 25% cut is off the table, we can meet halfway by waiving expedited fees and doubling down on dedicated support on condition that we lock in a two-year renewal. Just to recap, the bottom line is reliable delivery and shared growth—I'd love for you to weigh in so we can get Legal on board and follow through on a deal that truly moves the needle."
  }
};
