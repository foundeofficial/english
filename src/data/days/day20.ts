import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day20Module: DayLessonModule = {
  dayNumber: 20,
  weekNumber: 4,
  cefrLevel: 'b2',
  isWeeklyReview: false,
  dayBadge: 'DAY 20 · 가격·계약 조건 윈윈 협상',
  categoryLabel: '비즈니스 네고 · 절충안 · 조건 교환',
  title: '서로 한 발씩 양보해 윈윈 절충안을 찾아보죠',
  subtitle: '단순 가격 흥정을 넘어 wiggle room·on the table·meet halfway로 협상 주도권과 신뢰를 동시에 잡는 실전 영어',
  heroImage: 'assets/scene_boardroom_pitch.jpg',
  secondaryImage: 'assets/office_sitcom_scene.jpg',
  estimatedSprintMin: 8,
  estimatedLectureMin: 45,
  keyExpression: 'meet halfway / on the table / wiggle room',
  keySentenceByTier: {
    a1: 'The price is high for us. Can we find a good deal together?',
    a2: 'Our budget is tight, so can we meet in the middle on the price?',
    b1: 'We do not have much wiggle room on pricing, but we can meet halfway on the terms.',
    b2: "While a 20% discount is off the table, we do have some wiggle room to meet you halfway if you commit to a two-year term.",
    c1: "Although an upfront rate cut isn't on the table, we're open to sweetening the deal with complimentary onboarding on condition that we lock in a multi-year renewal.",
    c2: "To break this sticking point without eroding our margin, we can leverage a structured trade-off—offering tiered volume rebates in exchange for a 24-month commitment that seals a mutually beneficial deal."
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[20],
  readingPassage: {
    titleEn: 'Beyond Haggling: Structuring a Win-Win Enterprise Contract',
    titleKo: '단순 흥정을 넘어서: 윈윈 엔터프라이즈 계약 조건 설계하기',
    genreBadge: 'Commercial Negotiation Brief · B2',
    estimatedMin: 4,
    paragraphsEn: [
      "In global B2B sales and procurement, inexperienced negotiators often treat price as a zero-sum battle. When a buyer demands an immediate 25% cut and the vendor simply says no, both sides hit a sticking point within minutes. Seasoned dealmakers take a different path: they start with a realistic ballpark figure, clarify which items are non-negotiable deal-breakers, and keep multiple variables—such as contract length, payment schedule, and support tiers—on the table.",
      "Once the key constraints are transparent, real leverage comes from smart trade-offs rather than unilateral concessions. For instance, a software provider may have very little wiggle room on its annual per-seat license fee because of strict margin policies. However, instead of walking away, the team can offer a creative counteroffer: meeting the client halfway by waiving implementation fees or sweetening the deal with dedicated training hours.",
      "Crucially, every concession should be paired with a clear condition. Framing your offer as 'We could extend a 10% loyalty rebate on condition that you sign a two-year agreement by quarter-end' protects your commercial value while giving the partner a concrete path to win internally. When both parties leave the room feeling they secured a mutually beneficial structure, it is far easier to seal the deal and sustain a long-term partnership."
    ],
    paragraphsSlash: [
      "In global B2B sales and procurement, / inexperienced negotiators often treat price / as a zero-sum battle. / When a buyer demands an immediate 25% cut / and the vendor simply says no, / both sides hit a sticking point / within minutes. / Seasoned dealmakers take a different path: / they start with a realistic ballpark figure, / clarify which items are non-negotiable deal-breakers, / and keep multiple variables— / such as contract length, payment schedule, and support tiers— / on the table.",
      "Once the key constraints are transparent, / real leverage comes from smart trade-offs / rather than unilateral concessions. / For instance, a software provider / may have very little wiggle room / on its annual per-seat license fee / because of strict margin policies. / However, instead of walking away, / the team can offer a creative counteroffer: / meeting the client halfway / by waiving implementation fees / or sweetening the deal with dedicated training hours.",
      "Crucially, every concession should be paired / with a clear condition. / Framing your offer as / 'We could extend a 10% loyalty rebate / on condition that you sign a two-year agreement by quarter-end' / protects your commercial value / while giving the partner a concrete path / to win internally. / When both parties leave the room / feeling they secured a mutually beneficial structure, / it is far easier to seal the deal / and sustain a long-term partnership."
    ],
    paragraphsKo: [
      '글로벌 B2B 영업과 구매 현장에서 경험이 부족한 협상가들은 가격을 제로섬 싸움으로 취급하곤 합니다. 구매자가 즉각적인 25% 할인을 요구하고 공급사가 단칼에 거절하면, 양측은 몇 분 만에 교착 지점에 부딪힙니다. 노련한 협상가들은 다른 길을 택합니다. 현실적인 개략 금액으로 출발해 타협 불가능한 결정적 결격 사유가 무엇인지 분명히 하고, 계약 기간·결제 일정·지원 등급 같은 다양한 변수를 협상 테이블 위에 올려둡니다.',
      '핵심 제약 조건이 투명해지면 진정한 협상력은 일방적 양보가 아니라 영리한 조건 교환에서 나옵니다. 예컨대 한 소프트웨어 공급사는 엄격한 마진 정책 때문에 연간 계정당 라이선스 단가에는 융통성 여지가 거의 없을 수 있습니다. 하지만 협상을 접는 대신, 초기 구축비를 면제하거나 전담 교육 시간을 얹어 거래 조건을 더 매력적으로 만드는 창의적인 수정 제안을 통해 고객과 중간 지점에서 만날 수 있습니다.',
      '무엇보다 모든 양보는 명확한 조건과 짝을 이루어야 합니다. "분기 말까지 2년 계약을 체결하신다는 조건하에 10% 로열티 리베이트를 제공해 드릴 수 있습니다"처럼 제안을 구성하면 자사의 상업적 가치를 지키면서도 파트너가 내부 결재를 이끌어낼 구체적 명분을 줄 수 있습니다. 양측 모두 상호 호혜적인 구조를 확보했다는 느낌으로 회의실을 나설 때 거래를 성사시키고 장기 파트너십을 유지하기가 훨씬 쉬워집니다.'
    ],
    keyExpressions: [
      'hit a sticking point : 협상 교착 지점(걸림돌)에 부딪히다',
      'on the table / off the table : 협상 안건에 올라와 있는 / 논의 불가한',
      'have little wiggle room : 재량·융통성 여지가 거의 없다',
      'meet someone halfway : 서로 한 발씩 양보해 절충점을 찾다',
      'sweeten the deal : 추가 혜택을 얹어 조건을 더 매력적으로 만들다',
      'on condition that ~ / seal the deal : ~한다는 조건하에 / 거래를 최종 성사시키다'
    ],
    comprehensionQuiz: [
      {
        id: 'd20-rq01',
        questionKo: '글에 따르면 노련한 협상가(seasoned dealmakers)가 가격 교착(sticking point)을 피하는 핵심 방식은?',
        options: [
          '계약 기간·결제 일정·지원 등급 등 여러 변수를 협상 테이블에 함께 올려둔다.',
          '첫 미팅에서 상대방이 원하는 25% 할인을 즉시 수용한다.',
          '개략적인 금액(ballpark figure)은 계약 직전까지 비공개로 유지한다.',
          '경쟁사 단가를 언급하며 무조건적인 일방적 양보를 요구한다.'
        ],
        answer: '계약 기간·결제 일정·지원 등급 등 여러 변수를 협상 테이블에 함께 올려둔다.',
        explanationKo:
          '1문단에서 노련한 협상가들은 계약 기간, 결제 조건, 지원 등급 등 복수의 변수를 협상 테이블(on the table)에 올려놓는다고 설명합니다.'
      },
      {
        id: 'd20-rq02',
        questionKo: '라이선스 단가에 여지(wiggle room)가 거의 없을 때 제시한 창의적 수정 제안(counteroffer)의 예시는?',
        options: [
          '초기 구축비를 면제하거나 전담 교육 시간을 추가해 조건을 보강한다.',
          '마진 정책을 무시하고 연간 단가를 절반으로 낮춘다.',
          '무료 평가판 기간을 종료하고 즉시 협상에서 철수한다.',
          '기존 고객 지원 팀을 축소하는 대신 단가를 인하한다.'
        ],
        answer: '초기 구축비를 면제하거나 전담 교육 시간을 추가해 조건을 보강한다.',
        explanationKo:
          '2문단의 "waiving implementation fees or sweetening the deal with dedicated training hours"가 핵심 예시입니다.'
      },
      {
        id: 'd20-rq03',
        questionKo: '모든 양보(concession)에 명확한 조건(on condition that)을 붙여야 하는 이유는 무엇인가요?',
        options: [
          '자사의 상업적 가치를 지키면서도 상대방이 내부 설득에 쓸 명분을 제공하기 위해서',
          '계약서 분량을 늘려 법무팀 검토 시간을 연장하기 위해서',
          '분기 말 이전에 상대방이 협상을 포기하도록 압박하기 위해서',
          '향후 추가 할인 요청을 법적으로 금지하기 위해서'
        ],
        answer: '자사의 상업적 가치를 지키면서도 상대방이 내부 설득에 쓸 명분을 제공하기 위해서',
        explanationKo:
          '3문단에서 조건부 양보가 "protects your commercial value while giving the partner a concrete path to win internally" 역할을 한다고 명시합니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd20-v01',
      word: 'meet ~ halfway',
      phonetic: '/miːt ˈhæfweɪ/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '~와 서로 한 발씩 양보해 중간 지점(절충점)을 찾다',
      meaningEn: 'compromise by each side giving up a little to reach an agreement',
      nuanceTipKo: '가격·일정 간극이 클 때 "Let\'s compromise"보다 훨씬 협력적이고 따뜻한 원어민 협상 표현입니다.',
      exampleEn: 'If you can approve a 24-month term, I can meet you halfway on the annual fee.',
      exampleKo: '24개월 약정을 승인해 주시면 연간 비용에서 서로 절충점을 맞춰 드리겠습니다.'
    },
    {
      id: 'd20-v02',
      word: 'on the table',
      phonetic: '/ɑːn ðə ˈteɪbl/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '협상 안건에 올라와 있는, 검토·선택 가능한',
      meaningEn: 'available for discussion, negotiation, or consideration',
      nuanceTipKo: '테이블 위에 올려진 카드처럼 논의 가능한 조건을 말합니다. "What options are still on the table?"로 자주 묻습니다.',
      exampleEn: 'Our quarterly billing option is still on the table if that helps your cash flow.',
      exampleKo: '현금 흐름에 도움이 되신다면 분기별 분할 결제 옵션도 여전히 논의 가능합니다.'
    },
    {
      id: 'd20-v03',
      word: 'off the table',
      phonetic: '/ɔːf ðə ˈteɪbl/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '협상 대상에서 제외된, 논의 불가한',
      meaningEn: 'no longer available to be discussed or negotiated',
      nuanceTipKo: '"No, impossible!" 대신 "I\'m afraid a flat 30% discount is off the table"이라고 말하면 단호하면서도 품격을 지킬 수 있습니다.',
      exampleEn: 'Extending the delivery deadline past Friday is unfortunately off the table.',
      exampleKo: '납기일을 금요일 이후로 연장하는 건 아쉽게도 논의가 어렵습니다.'
    },
    {
      id: 'd20-v04',
      word: 'wiggle room',
      phonetic: '/ˈwɪɡl ruːm/',
      pos: '명사구 (불가산)',
      cefr: 'c1',
      meaningKo: '(예산·단가·일정상) 조정 가능한 재량 여지, 융통성',
      meaningEn: 'scope or flexibility to modify a decision, price, or schedule',
      nuanceTipKo: '좁은 공간에서 몸을 살짝 움직일(wiggle) 여유라는 생생한 비유! 불가산 명사라 "some/little wiggle room"으로 씁니다(a wiggle room X).',
      exampleEn: 'Do you have any wiggle room on the onboarding fee?',
      exampleKo: '초기 구축 비용 쪽에는 혹시 조율할 여지가 좀 있으실까요?'
    },
    {
      id: 'd20-v05',
      word: 'counteroffer',
      phonetic: '/ˈkaʊntərˌɔːfər/',
      pos: '명사 · 동사',
      cefr: 'b2',
      meaningKo: '수정 제안, 반대 조건 제시',
      meaningEn: 'an alternative offer made in response to an initial proposal',
      nuanceTipKo: '연봉 협상이나 B2B 계약에서 상대 제안을 그대로 거절하지 않고 대안을 낼 때 "put forward a counteroffer"로 씁니다.',
      exampleEn: 'After reviewing our margin, we sent over a revised counteroffer.',
      exampleKo: '마진을 검토한 뒤 수정된 반대 제안을 보내드렸습니다.'
    },
    {
      id: 'd20-v06',
      word: 'ballpark figure',
      phonetic: '/ˈbɔːlpɑːrk ˈfɪɡjər/',
      pos: '명사구',
      cefr: 'b2',
      meaningKo: '대략적인 추산치, 개략적 견적 금액',
      meaningEn: 'a rough numerical estimate within a reasonable range',
      nuanceTipKo: '정확한 최종 견적 전 예산 감을 잡을 때 "Could you give me a ballpark figure?"라고 물어보면 프로답습니다.',
      exampleEn: 'Can you share a ballpark figure for the enterprise license before Friday?',
      exampleKo: '금요일 전에 엔터프라이즈 라이선스의 대략적인 견적 범위를 공유해 주실 수 있나요?'
    },
    {
      id: 'd20-v07',
      word: 'deal-breaker',
      phonetic: '/ˈdiːl ˌbreɪkər/',
      pos: '명사',
      cefr: 'b2',
      meaningKo: '계약·거래를 무산시키는 결정적 결격 사유',
      meaningEn: 'a single issue or requirement so critical that failure to meet it ends negotiations',
      nuanceTipKo: '절대 양보할 수 없는 레드라인을 짚을 때 "For our security team, local data hosting is a deal-breaker"처럼 씁니다.',
      exampleEn: 'An auto-renewal clause without notice would be a deal-breaker for our legal team.',
      exampleKo: '사전 통지 없는 자동 갱신 조항은 저희 법무팀 입장에서 절대 수용 불가한 사유입니다.'
    },
    {
      id: 'd20-v08',
      word: 'trade-off',
      phonetic: '/ˈtreɪd ɔːf/',
      pos: '명사',
      cefr: 'b2',
      meaningKo: '(하나를 얻고 다른 하나를 내주는) 교환 조건, 절충 관계',
      meaningEn: 'a balance achieved between two desirable but competing features or terms',
      nuanceTipKo: '단가와 납기, 속도와 품질처럼 주고받는 균형을 설명할 때 비즈니스 영어에서 최빈출 명사입니다.',
      exampleEn: 'We are comfortable with that trade-off as long as SLA uptime stays at 99.9%.',
      exampleKo: 'SLA 가동률이 99.9%로 유지되는 한 그 교환 조건은 충분히 수용할 수 있습니다.'
    },
    {
      id: 'd20-v09',
      word: 'concession',
      phonetic: '/kənˈseʃn/',
      pos: '명사',
      cefr: 'c1',
      meaningKo: '양보, 협상 타협 조건',
      meaningEn: 'something granted or yielded in response to demands during negotiation',
      nuanceTipKo: '동사 make와 결합해 `make a concession(양보하다)` 연어로 쓰며, 협상에서는 일방적 양보(unilateral concession)를 피하는 것이 정석입니다.',
      exampleEn: 'We already made a major concession by freezing prices for year two.',
      exampleKo: '저희는 2년 차 단가 동결이라는 큰 양보를 이미 해드렸습니다.'
    },
    {
      id: 'd20-v10',
      word: 'sweeten the deal',
      phonetic: '/ˈswiːtn ðə diːl/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '(추가 혜택을 얹어) 거래 조건을 더 매력적으로 만들다',
      meaningEn: 'make an offer more attractive by adding extra incentives or perks',
      nuanceTipKo: '단가를 더 못 깎아줄 때 무료 교육, 우선 지원, 추가 크레딧 등을 얹어 거래를 살릴 때 쓰는 세련된 관용구입니다.',
      exampleEn: 'To sweeten the deal, we can include 20 hours of free onboarding support.',
      exampleKo: '조건을 좀 더 매력적으로 맞춰드리기 위해 20시간의 무료 온보딩 지원을 포함해 드리겠습니다.'
    },
    {
      id: 'd20-v11',
      word: 'on condition that',
      phonetic: '/ɑːn kənˈdɪʃn ðæt/',
      pos: '접속사구',
      cefr: 'c1',
      meaningKo: '~한다는 조건하에 (조건부 합의 구문)',
      meaningEn: 'only if a specific requirement is fulfilled',
      nuanceTipKo: '계약서와 격식 협상에서 if보다 훨씬 명확하고 구속력 있게 조건을 못 박을 때 씁니다.',
      exampleEn: 'We can waive the setup fee on condition that the contract is signed by March 31.',
      exampleKo: '3월 31일까지 계약서에 서명하신다는 조건하에 초기 설정비를 면제해 드릴 수 있습니다.'
    },
    {
      id: 'd20-v12',
      word: 'sticking point',
      phonetic: '/ˈstɪkɪŋ pɔɪnt/',
      pos: '명사구',
      cefr: 'c1',
      meaningKo: '협상이 막혀 진전이 안 되는 핵심 쟁점, 걸림돌',
      meaningEn: 'an obstacle or unresolved issue that prevents an agreement from moving forward',
      nuanceTipKo: '전체 조건 중 딱 하나 때문에 합의가 지연될 때 "The only remaining sticking point is payment terms"처럼 정확히 짚어냅니다.',
      exampleEn: 'Payment timing appears to be the main sticking point holding up sign-off.',
      exampleKo: '결제 시점이 최종 승인을 막고 있는 주된 걸림돌인 것 같습니다.'
    },
    {
      id: 'd20-v13',
      word: 'leverage',
      phonetic: '/ˈlevərɪdʒ/',
      pos: '명사 · 동사',
      cefr: 'c1',
      meaningKo: '협상력, 지렛대; (자산·강점을) 유리하게 활용하다',
      meaningEn: 'strategic advantage or bargaining power; to use something to maximum advantage',
      nuanceTipKo: '협상에서 유리한 카드를 쥐고 있을 때 `have leverage`, 강점을 전략적으로 활용할 때 동사 `leverage ~`로 모두 폭넓게 쓰입니다.',
      exampleEn: 'Committing to higher seat volume gives you much stronger leverage on pricing.',
      exampleKo: '더 많은 계정 수량을 약정하시면 단가 협상에서 훨씬 강한 협상력을 얻으실 수 있습니다.'
    },
    {
      id: 'd20-v14',
      word: 'mutually beneficial',
      phonetic: '/ˈmjuːtʃuəli ˌbenɪˈfɪʃl/',
      pos: '형용사구',
      cefr: 'b2',
      meaningKo: '상호 호혜적인, 양측 모두에게 이익이 되는(윈윈하는)',
      meaningEn: 'advantageous and rewarding for both parties involved',
      nuanceTipKo: '구어에서는 win-win, 공식 계약·이메일·임원 협상에서는 mutually beneficial을 쓰면 신뢰감이 배가됩니다.',
      exampleEn: 'Our priority is reaching a mutually beneficial renewal that scales with your team.',
      exampleKo: '저희의 최우선 목표는 귀사 팀의 성장과 함께 확장되는 상호 호혜적인 갱신 계약에 도달하는 것입니다.'
    },
    {
      id: 'd20-v15',
      word: 'seal the deal',
      phonetic: '/siːl ðə diːl/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '거래·계약을 최종 성사시키다, 도장을 찍다',
      meaningEn: 'finalize and confirm an agreement or transaction',
      nuanceTipKo: '협상 막바지에 최종 조건을 확정하며 "What would it take to seal the deal by Friday?"라고 물으면 클로징 속도가 확 빨라집니다.',
      exampleEn: 'Adding a dedicated account manager helped us seal the deal ahead of quarter-end.',
      exampleKo: '전담 어카운트 매니저를 배정한 덕분에 분기 말 전에 계약을 성사시킬 수 있었습니다.'
    }
  ],
  dialogue: [
    {
      id: 'd20-t01',
      speaker: 'Ethan',
      roleLabel: '싱가포르 글로벌 구매 매니저',
      voicePitch: 0.91,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english: "Thanks for sending the ballpark figure, Jiwon. We love the platform, but our CFO is pushing for a 20% discount to fit this year's budget.",
      slashBroken: "Thanks for sending the ballpark figure, Jiwon. / We love the platform, / but our CFO is pushing for a 20% discount / to fit this year's budget.",
      korean: '대략적인 견적 보내주셔서 감사합니다, 지원 님. 플랫폼은 정말 마음에 드는데, 올해 예산에 맞추려면 CFO가 20% 할인을 요구하고 있습니다.',
      keyHighlight: 'ballpark figure / pushing for',
      noteKo: '협상에서 상대가 "내부 임원(CFO)의 제약"을 명분으로 내세울 때 감정적으로 반응하지 않고 구조를 탐색하는 것이 핵심입니다.'
    },
    {
      id: 'd20-t02',
      speaker: 'Jiwon',
      roleLabel: '서울 엔터프라이즈 영업 리드',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-right',
      english: "I completely understand the budget pressure, Ethan. To be transparent, a flat 20% cut is off the table because our enterprise tier already reflects a volume rate.",
      slashBroken: 'I completely understand the budget pressure, Ethan. / To be transparent, / a flat 20% cut is off the table / because our enterprise tier already reflects a volume rate.',
      korean: '예산 압박이 크신 점 충분히 이해합니다, 이든 님. 투명하게 말씀드리자면, 엔터프라이즈 요금제에 이미 대량 할인이 반영되어 있어 일괄 20% 인하는 어렵습니다.',
      keyHighlight: 'To be transparent / off the table',
      noteKo: '"To be transparent"로 신뢰를 먼저 깔고 `off the table`로 정중하되 명확하게 레드라인을 긋는 모범 대응입니다.'
    },
    {
      id: 'd20-t03',
      speaker: 'Ethan',
      roleLabel: '싱가포르 글로벌 구매 매니저',
      voicePitch: 0.91,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-left',
      english: "Fair enough. So where do you have some wiggle room? Implementation fees are a real sticking point on our side right now.",
      slashBroken: 'Fair enough. / So where do you have some wiggle room? / Implementation fees are a real sticking point / on our side right now.',
      korean: '납득이 되네요. 그럼 어느 쪽에 조율 여지가 좀 있으실까요? 지금 저희 쪽에서는 초기 구축비가 가장 큰 걸림돌입니다.',
      keyHighlight: 'wiggle room / sticking point',
      noteKo: '상대의 한계를 인정(Fair enough)한 뒤, 바로 조율 가능한 변수(wiggle room)와 진짜 쟁점(sticking point)을 끌어내는 노련한 질문입니다.'
    },
    {
      id: 'd20-t04',
      speaker: 'Jiwon',
      roleLabel: '서울 엔터프라이즈 영업 리드',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english: "That gives us something concrete to work with. Here is a counteroffer: we could meet you halfway with an 8% loyalty discount and waive the setup fee entirely.",
      slashBroken: 'That gives us something concrete to work with. / Here is a counteroffer: / we could meet you halfway / with an 8% loyalty discount / and waive the setup fee entirely.',
      korean: '구체적으로 풀어볼 지점이 생겼네요. 수정 제안을 드리자면, 8% 로열티 할인으로 서로 절충점을 맞추고 초기 구축비는 전액 면제해 드릴 수 있습니다.',
      keyHighlight: 'counteroffer / meet you halfway',
      noteKo: '조동사 과거형 `we could ~`는 확정 약속이 아닌 조건부 제안을 부드럽게 띄울 때 쓰는 협상 필수 어법입니다.'
    },
    {
      id: 'd20-t05',
      speaker: 'Ethan',
      roleLabel: '싱가포르 글로벌 구매 매니저',
      voicePitch: 0.91,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-right',
      english: "Waiving the setup fee definitely helps! What's the trade-off you're looking for in return?",
      slashBroken: 'Waiving the setup fee definitely helps! / What is the trade-off / you are looking for in return?',
      korean: '구축비 면제는 확실히 큰 도움이 되네요! 대신 그 대가로 어떤 교환 조건을 원하시는 건가요?',
      keyHighlight: 'trade-off / in return',
      noteKo: '프로 협상가들은 상대가 양보를 내놓으면 자연스럽게 "What\'s the trade-off?(어떤 조건을 원하시나요?)"라고 되묻습니다.'
    },
    {
      id: 'd20-t06',
      speaker: 'Jiwon',
      roleLabel: '서울 엔터프라이즈 영업 리드',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-left',
      english: "We can offer that package on condition that you commit to a two-year term by Friday. And to sweeten the deal, I'll include two dedicated onboarding workshops.",
      slashBroken: 'We can offer that package / on condition that you commit to a two-year term / by Friday. / And to sweeten the deal, / I will include two dedicated onboarding workshops.',
      korean: '금요일까지 2년 약정을 확정해 주신다는 조건하에 해당 패키지를 제공해 드릴 수 있습니다. 그리고 조건을 더 매력적으로 맞춰드리기 위해 전담 온보딩 워크숍 2회도 포함해 드리겠습니다.',
      keyHighlight: 'on condition that / sweeten the deal',
      noteKo: '명확한 조건(on condition that)과 저비용·고가치 혜택(sweeten the deal)을 묶어주는 교과서적 윈윈 클로징입니다.'
    },
    {
      id: 'd20-t07',
      speaker: 'Ethan',
      roleLabel: '싱가포르 글로벌 구매 매니저',
      voicePitch: 0.91,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english: "A two-year lock-in isn't a deal-breaker if our pricing stays fixed. Send over the redlined contract—let's seal the deal this week!",
      slashBroken: 'A two-year lock-in is not a deal-breaker / if our pricing stays fixed. / Send over the redlined contract— / let us seal the deal this week!',
      korean: '단가가 동결된다면 2년 약정은 결격 사유가 아닙니다. 수정 표시된 계약서를 보내주세요—이번 주 안에 계약을 성사시키죠!',
      keyHighlight: 'deal-breaker / seal the deal',
      noteKo: 'redlined contract는 수정 이력이 표시된 계약서 초안을 뜻하는 글로벌 법무·영업 필수 용어입니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 아마추어 흥정("Discount please") 탈출: 조건부 양보 공식 [If you can A, we could B]',
      coreFormula: 'If you can [상대의 양보/약정], we could [우리의 양보] / [제안] on condition that [필수 조건]',
      wrongKonglish: 'Please give us 20% discount. Then maybe we will think about 2 years contract.',
      rightNative: 'If you can commit to a two-year term, we could extend a 10% loyalty rebate and waive setup fees.',
      explanationKo:
        '협상에서 근거 없이 "Give us a discount"라고 요구하면 가격 싸움으로 치닫고, 반대로 조건 없이 먼저 깎아주면 신뢰가 떨어집니다. 원어민 협상의 황금률은 **Give-Get(조건부 교환)**입니다. 특히 `we could ~`처럼 조동사 과거형을 쓰면 "무조건 해준다"가 아니라 "그 조건이 충족된다면 검토·제공할 수 있다"는 여지를 남겨 협상 주도권을 지킬 수 있습니다.',
      registerSpectrum: {
        casual: 'If you sign for two years, I can knock 10% off the total.',
        standard: 'If you can commit to a two-year term, we could meet you halfway with a 10% rebate.',
        formal: 'We are prepared to waive the onboarding fee on condition that the multi-year agreement is executed by March 31.'
      }
    },
    {
      title: '원리 02 · 단호하되 관계를 지키는 선 긋기: off the table · wiggle room · deal-breaker',
      coreFormula: 'While [A] is off the table, we do have some wiggle room on [B].',
      wrongKonglish: '20% discount is impossible. We have no a wiggle room at all. Cannot negotiate.',
      rightNative: "While a flat 20% discount is off the table, we do have some wiggle room on payment terms and onboarding.",
      explanationKo:
        '거절할 때 "It is impossible"만 던지면 벽을 치는 느낌이 듭니다. ① `While [불가 항목] is off the table,`로 불가능한 범위를 깔끔히 닫은 뒤, ② 바로 `we do have some wiggle room on [가능 항목]`으로 대안의 문을 열어주세요(조동사 do 강조!). ③ 주의: `wiggle room`은 불가산 명사이므로 절대 `a wiggle room`이라고 쓰지 않습니다.',
      registerSpectrum: {
        casual: "A 20% cut won't fly, but I've got some wiggle room on the setup fee.",
        standard: "A 20% discount is off the table, though we do have wiggle room on payment timing.",
        formal: 'While an adjustment to base licensing rates remains off the table, we retain flexibility regarding implementation milestones.'
      }
    },
    {
      title: '원리 03 · 교착(sticking point)을 깨는 윈윈 프레이밍: meet halfway & sweeten the deal',
      coreFormula: 'meet [상대] halfway on [쟁점] + sweeten the deal with [추가 가치] → mutually beneficial',
      wrongKonglish: 'Let us cut half and half and give you free service so you sign fast.',
      rightNative: "Let's meet halfway on the renewal rate, and to sweeten the deal, we'll include priority support so it's mutually beneficial.",
      explanationKo:
        '단순히 "반씩 깎자(cut half)"가 아니라 서로의 관심사를 존중한다는 뉘앙스를 담으려면 `meet someone halfway on [쟁점]`을 씁니다. 또한 가격 외에 우리에겐 비용 부담이 적지만 상대에겐 체감 가치가 큰 요소(교육, 전담 지원, 결제 유예)를 얹을 때 `To sweeten the deal, we can include ~`를 쓰면 거래 성사율(seal the deal)이 획기적으로 높아집니다.',
      registerSpectrum: {
        casual: "Let's meet halfway on the price—and I'll throw in free training to sweeten the deal.",
        standard: "We'd love to meet you halfway on pricing and sweeten the deal with dedicated onboarding.",
        formal: 'To resolve the remaining sticking point and reach a mutually beneficial outcome, we propose waiving setup fees alongside a tiered rebate.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd20-s01',
      drillType: 'konglish-fix',
      promptKo: '"일괄 20% 할인은 협상 불가하지만, 결제 조건에는 조정 여지가 있습니다." — 자연스러운 문장은?',
      promptEnHint: 'wiggle room은 불가산 명사이며, impossible 대신 off the table을 씁니다.',
      targetEn: 'While a 20% discount is off the table, we have some wiggle room on payment terms.',
      wrongKonglishOption: '20% discount is impossible, so we have a wiggle room about payment terms.',
      explanationKo: 'off the table로 정중히 선을 긋고, 불가산 명사 some wiggle room on ~ 으로 대안을 제시합니다.'
    },
    {
      id: 'd20-s02',
      drillType: 'chunk-build',
      promptKo: '2년 약정을 확정해 주시면 연간 단가에서 서로 절충점을 맞춰 드리겠습니다.',
      promptEnHint: 'If you can commit to ~ / we could meet you halfway 구조를 배열하세요.',
      targetEn: 'If you can commit to two years, we could meet you halfway on pricing.',
      chunks: ['If you can commit', 'to two years,', 'we could meet you halfway', 'on pricing.'],
      explanationKo: '조건부 협상(If you can ~, we could ~)과 meet halfway의 정석 결합입니다.'
    },
    {
      id: 'd20-s03',
      drillType: 'active-blank',
      promptKo: '초기 구축 비용 쪽에는 조율할 융통성 여지가 좀 있으신가요?',
      promptEnHint: '조정 여지/융통성 = ______ room (1단어, 6글자)',
      targetEn: 'Do you have any wiggle room on the onboarding fee?',
      blankData: {
        before: 'Do you have any',
        answer: 'wiggle',
        after: 'room on the onboarding fee?',
        firstLetterHint: 'w_____ (6글자)'
      },
      explanationKo: 'wiggle room은 예산·일정·단가 등에서 움직일 수 있는 재량 여지를 뜻합니다.'
    },
    {
      id: 'd20-s04',
      drillType: 'chunk-build',
      promptKo: '분기별 분할 결제 옵션도 여전히 협상 테이블 위에 올려져 있습니다(논의 가능합니다).',
      promptEnHint: 'is still on the table 청크를 활용하세요.',
      targetEn: 'Quarterly billing is still on the table if that helps your cash flow.',
      chunks: ['Quarterly billing', 'is still on the table', 'if that helps', 'your cash flow.'],
      explanationKo: 'on the table은 여전히 선택·논의 가능한 조건임을 알릴 때 씁니다.'
    },
    {
      id: 'd20-s05',
      drillType: 'active-blank',
      promptKo: '거래 조건을 더 매력적으로 만들기 위해 무료 온보딩 워크숍 2회를 포함하겠습니다.',
      promptEnHint: '거래를 달콤하게 보강하다 = _______ the deal (동사 원형 1단어)',
      targetEn: 'To sweeten the deal, we will include two free onboarding workshops.',
      blankData: {
        before: 'To',
        answer: 'sweeten',
        after: 'the deal, we will include two free onboarding workshops.',
        firstLetterHint: 's______ (7글자)'
      },
      explanationKo: 'sweeten the deal은 추가 혜택을 얹어 상대의 결정을 이끌어내는 협상 관용구입니다.'
    },
    {
      id: 'd20-s06',
      drillType: 'chunk-build',
      promptKo: '금요일까지 서명하신다는 조건하에 초기 설정비를 면제해 드릴 수 있습니다.',
      promptEnHint: 'on condition that 구문을 문장 가운데에 연결하세요.',
      targetEn: 'We can waive the setup fee on condition that you sign by Friday.',
      chunks: ['We can waive', 'the setup fee', 'on condition that', 'you sign by Friday.'],
      explanationKo: 'waive(면제하다)와 on condition that(~라는 조건하에)는 B2B 계약의 핵심 짝꿍입니다.'
    },
    {
      id: 'd20-s07',
      drillType: 'active-blank',
      promptKo: '결제 시점이 최종 승인을 막고 있는 주된 걸림돌인 것 같습니다.',
      promptEnHint: '협상 교착 지점/걸림돌 = ________ point (1단어, 8글자)',
      targetEn: 'Payment timing seems to be the main sticking point right now.',
      blankData: {
        before: 'Payment timing seems to be the main',
        answer: 'sticking',
        after: 'point right now.',
        firstLetterHint: 's_______ (8글자)'
      },
      explanationKo: 'sticking point는 합의가 진전되지 않고 딱 걸려 있는 핵심 쟁점을 뜻합니다.'
    },
    {
      id: 'd20-s08',
      drillType: 'konglish-fix',
      promptKo: '"엔터프라이즈 라이선스의 대략적인 견적을 공유해 주실 수 있나요?" — 자연스러운 질문은?',
      promptEnHint: 'rough money 같은 콩글리시 대신 ballpark figure를 고르세요.',
      targetEn: 'Could you share a ballpark figure for the enterprise license?',
      wrongKonglishOption: 'Could you share a rough money price about the enterprise license?',
      explanationKo: '대략적인 금액 추산치는 ballpark figure가 원어민 비즈니스 표준입니다.'
    },
    {
      id: 'd20-s09',
      drillType: 'active-blank',
      promptKo: '사전 통지 없는 자동 갱신은 저희 법무팀에 결정적 결격 사유입니다.',
      promptEnHint: '거래를 깨는 결정적 사유 = ____-_______ (하이픈 합성어)',
      targetEn: 'Auto-renewal without notice is a deal-breaker for our legal team.',
      blankData: {
        before: 'Auto-renewal without notice is a',
        answer: 'deal-breaker',
        after: 'for our legal team.',
        firstLetterHint: 'd___-b______'
      },
      explanationKo: 'deal-breaker는 절대 양보할 수 없는 레드라인 결격 사유를 뜻합니다.'
    },
    {
      id: 'd20-s10',
      drillType: 'chunk-build',
      promptKo: '이번 주 안에 상호 호혜적인 계약을 성사시켜 봅시다.',
      promptEnHint: 'seal a mutually beneficial deal 청크를 연결하세요.',
      targetEn: "Let's finalize the terms and seal a mutually beneficial deal this week.",
      chunks: ["Let's finalize", 'the terms and', 'seal a mutually beneficial deal', 'this week.'],
      explanationKo: 'mutually beneficial(상호 호혜적인)과 seal the deal(계약을 성사시키다)의 완벽한 조합입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd20-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '절충점 찾기 meet halfway',
      questionKo: '빈칸에 알맞은 단어(2단어)를 넣어 "단가 문제에서 서로 한 발씩 양보해 절충점을 맞출 수 있을까요?"를 완성하세요.',
      stimulusEn: 'Can we __________ each other __________ on the unit price?',
      answer: 'meet halfway',
      acceptableAlt: ['meet, halfway'],
      explanationKo: 'meet + 목적어 + halfway on ~ 는 서로 조금씩 양보해 중간에서 합의한다는 뜻입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "무료 워크숍을 얹어 거래 조건을 더 매력적으로 만들다" — 빈칸 3단어(s______ t__ d___)는?',
        stimulusEn: 'We included two workshops to __________ __________ __________.',
        answer: 'sweeten the deal',
        explanationKo: 'sweeten the deal은 추가 혜택으로 거래 매력을 높이는 관용구입니다.'
      }
    },
    {
      id: 'd20-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '재량 여지 wiggle room',
      questionKo: '빈칸에 알맞은 명사구(2단어)를 넣어 "연간 라이선스 단가에는 융통성 여지가 거의 없습니다"를 완성하세요.',
      stimulusEn: 'We have very little __________ __________ on the annual license rate.',
      answer: 'wiggle room',
      explanationKo: 'wiggle room은 불가산 명사구로 little / some / any와 함께 쓰입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "대략적인 견적 금액을 먼저 공유해 주시겠어요?" — 빈칸 2단어(b_______ f_____)는?',
        stimulusEn: 'Could you give us a __________ __________ first?',
        answer: 'ballpark figure',
        explanationKo: 'ballpark figure는 정식 견적 전 개략적 추산치를 의미합니다.'
      }
    },
    {
      id: 'd20-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '논의 불가 off the table',
      questionKo: '빈칸에 알맞은 표현(3단어)을 넣어 "30% 일괄 할인은 아쉽게도 논의 대상에서 제외됩니다"를 완성하세요.',
      stimulusEn: 'A flat 30% discount is unfortunately __________ __________ __________.',
      answer: 'off the table',
      explanationKo: '협상 불가능·제외된 안건은 off the table, 논의 가능한 안건은 on the table입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "분기별 결제 옵션은 여전히 논의 가능합니다" — 빈칸 3단어(o_ t__ t____)는?',
        stimulusEn: 'Quarterly billing is still __________ __________ __________.',
        answer: 'on the table',
        explanationKo: '협상 테이블 위에 올려진 선택지는 on the table로 표현합니다.'
      }
    },
    {
      id: 'd20-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '협상 걸림돌 sticking point',
      questionKo: '빈칸에 알맞은 표현(2단어)을 넣어 "초기 구축비가 지금 유일하게 남은 걸림돌입니다"를 완성하세요.',
      stimulusEn: 'The setup fee is the only remaining __________ __________.',
      answer: 'sticking point',
      explanationKo: '협상이 막혀 진전을 가로막는 쟁점을 sticking point라고 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "사전 통지 없는 자동 갱신은 결정적 결격 사유입니다" — 빈칸 1단어(하이픈 포함)는?',
        stimulusEn: 'Auto-renewal without notice is a __________ for our legal team.',
        answer: 'deal-breaker',
        explanationKo: '계약을 무산시키는 절대 불가 사유는 deal-breaker입니다.'
      }
    },
    {
      id: 'd20-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '조건부 합의 on condition that',
      questionKo: '빈칸에 알맞은 접속사구(3단어)를 넣어 "금요일까지 계약서에 서명하신다는 조건하에 초기비를 면제하겠습니다"를 완성하세요.',
      stimulusEn: 'We will waive the setup fee __________ __________ __________ you sign by Friday.',
      answer: 'on condition that',
      explanationKo: 'on condition that + 완전한 절은 공식 협상에서 조건을 명확히 거는 핵심 구문입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이번 주 안에 계약을 최종 성사시킵시다" — 빈칸 3단어(s___ t__ d___)는?',
        stimulusEn: "Let's finalize the terms and __________ __________ __________ this week.",
        answer: 'seal the deal',
        explanationKo: 'seal the deal은 거래·계약을 최종 확정 짓다는 관용구입니다.'
      }
    },
    {
      id: 'd20-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '조건부 양보 어조 판별',
      questionKo: '고객이 20% 할인을 요구했을 때, 자사 마진을 지키면서 조건부 절충안을 제시하는 **가장 프로페셔널한** 문장은?',
      stimulusEn: '단순 거절이나 일방적 양보가 아닌 Give-Get 구조를 고르세요.',
      options: [
        'No way, 20% is totally impossible. Pay full price or leave.',
        'Okay, we will give you 20% off right now without any condition.',
        'While 20% is off the table, we could offer a 10% loyalty rebate if you commit to a two-year term.',
        'We have a wiggle room for 20% if maybe you consider to sign someday.'
      ],
      answer: 'While 20% is off the table, we could offer a 10% loyalty rebate if you commit to a two-year term.',
      explanationKo:
        'off the table로 한계를 분명히 하면서도 조동사 could와 2년 약정 조건을 묶어 윈윈 절충안을 제시한 3번이 완벽합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "수정 제안을 보내드렸습니다"에서 수정 제안을 뜻하는 1단어 명사는?',
        stimulusEn: 'After reviewing the margin, we sent over a revised __________.',
        answer: 'counteroffer',
        explanationKo: '상대 제안에 맞서 내놓는 수정 제안은 counteroffer입니다.'
      }
    },
    {
      id: 'd20-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '가산/불가산 및 연어 정밀 점검',
      questionKo: '다음 중 어법과 연어(collocation)가 **모두 올바른** 문장은?',
      stimulusEn: '불가산 명사 wiggle room, 동사 make a concession, 전치사 결합을 점검하세요.',
      options: [
        'We do not have a wiggle room about the delivery timeline.',
        'Our team already made a major concession by freezing year-two pricing.',
        'Let us meet halfway to the onboarding fee today.',
        'Committing to higher volume gives you strong leverages.'
      ],
      answer: 'Our team already made a major concession by freezing year-two pricing.',
      explanationKo:
        'wiggle room과 leverage는 불가산 명사라 a나 -s를 붙이지 않고, meet halfway는 전치사 on(~에 관해)과 씁니다. make a concession 문장만 완벽합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "저희는 이미 큰 양보를 했습니다" — 빈칸 명사(1단어, c_________)는?',
        stimulusEn: 'We already made a major __________ on the payment schedule.',
        answer: 'concession',
        explanationKo: 'make a concession(양보하다) 연어를 통째로 익혀두세요.'
      }
    },
    {
      id: 'd20-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'trade-off vs deal-breaker 의미 구분',
      questionKo: '협상 상대가 초기 구축비 면제를 제안했을 때 "그 대신 어떤 교환 조건을 원하시나요?"라고 묻기에 가장 정확한 문장은?',
      stimulusEn: 'What is the __________ you are looking for in return?',
      options: ['trade-off', 'deal-breaker', 'ballpark figure', 'sticking point'],
      answer: 'trade-off',
      explanationKo:
        '하나를 얻는 대가로 내주어야 하는 교환 조건·절충은 trade-off입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "대량 수량을 약정하면 단가 협상에서 더 강한 협상력을 얻게 됩니다" — 빈칸 1단어(l_______)는?',
        stimulusEn: 'Higher seat volume gives you stronger __________ on pricing.',
        answer: 'leverage',
        explanationKo: '협상력·지렛대는 불가산 명사 leverage입니다.'
      }
    },
    {
      id: 'd20-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'sweeten the deal 문맥 추론',
      questionKo: '다음 문맥에서 밑줄 친 `sweeten the deal`이 의미하는 바로 가장 적절한 것은?',
      stimulusEn: '"We cannot lower the base rate further, so to sweeten the deal, we will add 24/7 priority support at no extra cost."',
      options: [
        '추가 혜택을 얹어 거래 조건을 더 매력적으로 만든다.',
        '계약 조건을 축소해 협상을 조기 종료한다.',
        '경쟁사 견적을 공개해 단가를 낮추도록 압박한다.',
        '기존 고객과의 계약을 해지하고 신규 계약으로 전환한다.'
      ],
      answer: '추가 혜택을 얹어 거래 조건을 더 매력적으로 만든다.',
      explanationKo:
        '기본 단가를 못 내릴 때 무료 우선 지원 같은 부가 혜택을 더해 거래 매력을 높이는 것이 sweeten the deal입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "상호 호혜적인(윈윈하는) 장기 파트너십" — 빈칸 2단어(m_______ b_________)는?',
        stimulusEn: 'We aim to build a __________ __________ long-term partnership.',
        answer: 'mutually beneficial',
        explanationKo: 'mutually beneficial은 공식 비즈니스 협상에서 win-win을 격식 있게 표현한 어구입니다.'
      }
    },
    {
      id: 'd20-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '협상 톤 & 조동사 could 활용',
      questionKo: '상대방의 1차 제안에 대해 가능성을 열어두되 아직 최종 확정하지 않는 **가장 적절한 협상 톤**은?',
      stimulusEn: '확정 약속(will)보다 조건부 가능성(could)을 활용해 협상 여지를 남기세요.',
      options: [
        'We will immediately cut 15% even before you talk to your CFO.',
        'We could explore an 8% loyalty discount if you are open to a 24-month commitment.',
        'You must sign today or we will cancel everything.',
        'I promise 100% free onboarding regardless of your volume.'
      ],
      answer: 'We could explore an 8% loyalty discount if you are open to a 24-month commitment.',
      explanationKo:
        '`We could explore ~ if you are open to ~`는 조건부 탐색 단계에서 부담 없이 윈윈 옵션을 타진하는 고급 협상 화법입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "초기 설정비를 면제하다"에서 면제하다에 해당하는 동사(1단어, w____)는?',
        stimulusEn: 'We are happy to __________ the setup fee for a two-year plan.',
        answer: 'waive',
        explanationKo: '수수료·요금·규정 적용을 면제하다는 타동사 waive를 씁니다.'
      }
    },
    {
      id: 'd20-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'off the table + wiggle room 대조 배열',
      questionKo: '주어진 청크를 배열하여 단호하면서도 유연한 협상 문장을 완성하세요.',
      stimulusEn: '[ on payment terms. / is off the table, / some wiggle room / While a 20% cut / we do have ]',
      answer: 'While a 20% cut is off the table, we do have some wiggle room on payment terms.',
      explanationKo: '양보절(While ~ is off the table,) 뒤에 강조 조동사 do를 넣어 가능 영역(we do have some wiggle room)을 대비시킵니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "2년 약정을 확정해 주시면 가격에서 절충점을 맞출 수 있습니다." (If you commit to two years, / we could meet you halfway / on pricing.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'If you commit to two years, we could meet you halfway on pricing.',
        explanationKo: 'If + 현재시제 조건절, 주어 + could + 동사원형 협상 구조입니다.'
      }
    },
    {
      id: 'd20-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'on condition that 조건부 문장 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 조건부 면제 문장을 완성하세요.',
      stimulusEn: '[ the contract by Friday. / We can waive / on condition that / the setup fee / you sign ]',
      answer: 'We can waive the setup fee on condition that you sign the contract by Friday.',
      explanationKo: '주절(We can waive the setup fee) + 조건 접속사구(on condition that) + 조건절(you sign the contract by Friday) 순입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "조건을 더 매력적으로 만들기 위해 무료 교육 20시간을 포함하겠습니다." (To sweeten the deal, / we will include / 20 hours of free training.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'To sweeten the deal, we will include 20 hours of free training.',
        explanationKo: 'To sweeten the deal을 문두에 두어 추가 혜택의 의도를 산뜻하게 전달합니다.'
      }
    },
    {
      id: 'd20-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'sticking point & deal-breaker 한영 영작',
      questionKo: '우리말 뜻에 맞게 sticking point를 활용해 문장을 영작하세요.',
      stimulusEn: '우리말: 결제 일정이 최종 승인을 막고 있는 주된 걸림돌인 것 같습니다.\n(힌트: Payment timing / seems to be / the main sticking point / holding up approval.)',
      answer: 'Payment timing seems to be the main sticking point holding up approval.',
      explanationKo: 'hold up(지연시키다)의 현재분사구 holding up approval이 sticking point를 뒤에서 수식합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "단가가 동결된다면 2년 약정은 결격 사유가 아닙니다." (A two-year term / is not a deal-breaker / if our pricing stays fixed.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'A two-year term is not a deal-breaker if our pricing stays fixed.',
        explanationKo: 'stay + 형용사(fixed)로 단가가 동결 유지된다는 뜻을 자연스럽게 표현합니다.'
      }
    },
    {
      id: 'd20-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시 협상 문장 교정',
      questionKo: '다음 콩글리시 문장의 오류 2곳(a wiggle room, about)을 바르게 고쳐 완전한 영어 문장으로 다시 쓰세요.',
      stimulusEn: '오류 문장: Do you have a wiggle room about the annual license fee?',
      answer: 'Do you have any wiggle room on the annual license fee?',
      acceptableAlt: ['Do you have some wiggle room on the annual license fee?', 'Do you have wiggle room on the annual license fee?'],
      explanationKo: '불가산 명사 wiggle room 앞의 관사 a를 any/some(또는 생략)으로 고치고, 쟁점 전치사는 on을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: We already did a concession about year-two pricing. (동사 did → made, 전치사 about → on으로 고쳐 전체 문장을 쓰세요.)',
        stimulusEn: '바른 문장 전체를 작성하세요.',
        answer: 'We already made a concession on year-two pricing.',
        explanationKo: 'make a concession on ~ 연어가 정확합니다.'
      }
    },
    {
      id: 'd20-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '상호 호혜적 클로징 한영 영작',
      questionKo: '다음 우리말을 mutually beneficial과 seal the deal을 사용해 자연스럽게 영작하세요.',
      stimulusEn: '우리말: 이번 주 안에 계약을 성사시킬 수 있도록 상호 호혜적인 구조를 찾아봅시다.\n(힌트: Let us find / a mutually beneficial structure / so we can seal the deal / this week.)',
      answer: 'Let us find a mutually beneficial structure so we can seal the deal this week.',
      acceptableAlt: ["Let's find a mutually beneficial structure so we can seal the deal this week."],
      explanationKo: '상대의 이익과 우리의 이익을 함께 강조하며 마감을 이끄는 프로페셔널한 클로징 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "금요일 전에 대략적인 견적을 공유해 주실 수 있나요?" (Could you share / a ballpark figure / before Friday?)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Could you share a ballpark figure before Friday?',
        explanationKo: '협상 초반 예산 감을 잡을 때 가장 자연스러운 질문입니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "We really like your proposal, but honestly, the price is 20% over our budget. Is there any wiggle room here, or should we look at other vendors?",
    openingQuestionKo: '제안서는 정말 마음에 드는데 솔직히 예산보다 20% 초과합니다. 조율할 여지가 좀 있을까요, 아니면 다른 업체를 알아봐야 할까요?',
    followUpQuestionEn:
      "Okay, waiving the setup fee helps. If we agree to a two-year contract, what else could you put on the table to seal the deal by Friday?",
    followUpQuestionKo: '알겠습니다, 구축비 면제는 도움이 되네요. 저희가 2년 약정에 동의하면 금요일까지 계약을 성사시키기 위해 어떤 조건을 더 올려주실 수 있나요?',
    recommendedChunks: [
      'off the table / on the table',
      'some wiggle room on ~',
      'meet you halfway',
      'on condition that ~',
      'sweeten the deal'
    ],
    modelAnswerEn:
      "I completely understand your budget target. While a flat 20% cut is off the table, we do have some wiggle room on onboarding costs. We can meet you halfway with an 8% loyalty discount and waive the setup fee on condition that we lock in a two-year term—and to sweeten the deal, I'll include two dedicated training sessions so we can seal a mutually beneficial deal by Friday."
  }
};
