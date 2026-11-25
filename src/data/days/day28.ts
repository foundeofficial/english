import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day28Module: DayLessonModule = {
  dayNumber: 28,
  weekNumber: 5,
  cefrLevel: 'c2',
  dayBadge: 'DAY 28 · 설득 심리 & 전술적 공감(Tactical Empathy)',
  categoryLabel: 'C2 마스터 수사 · 전술적 공감·감정 라벨링·프레임 전환',
  title: '설득의 심리학: 전술적 공감(Tactical Empathy)과 고급 수사',
  subtitle:
    '전 FBI 수석 협상가 스타일의 전술적 공감(tactical empathy), 감정 라벨링, 미러링(mirror back), 프레임 전환(reframe)으로 방어심을 녹이고 합의를 이끄는 C2 설득 영어',
  heroImage: 'assets/scene_media_podcast.jpg',
  secondaryImage: 'assets/scene_boardroom_pitch.jpg',
  estimatedSprintMin: 10,
  estimatedLectureMin: 48,
  keyExpression:
    'Tactical empathy is not about conceding your stance—it is about mirroring back concerns so you can reframe the deadlock.',
  keySentenceByTier: {
    a1: 'I understand your worry, so let us solve this together.',
    a2: 'It sounds like you are worried about the deadline. How can we fix it?',
    b1: 'Before I explain my plan, I want to make sure I understand why this feels risky to you.',
    b2: 'Showing genuine empathy does not mean giving in; it lowers defensiveness and opens the door to better solutions.',
    c1: 'Tactical empathy is not about conceding your position—it is about labeling the other side’s concerns so you can reframe the impasse.',
    c2: 'Only by disarming defensiveness through tactical empathy and mirroring back a counterpart’s underlying motives can we reframe a bitter deadlock into collaborative problem-solving.'
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[28],
  readingPassage: {
    titleEn: 'Why Logic Alone Rarely Persuades: The Rhetoric of Tactical Empathy',
    titleKo: '왜 논리만으로는 좀처럼 설득할 수 없는가: 전술적 공감의 수사학',
    genreBadge: 'C2 설득 심리학 에세이 · Behavioral Negotiation',
    estimatedMin: 7,
    paragraphsEn: [
      'Most professionals enter high-stakes disagreements armed with spreadsheets, convinced that airtight logic will compel the other side to yield. Yet behavioral research—and decades of crisis negotiation—reveals a humbling truth: when people feel cornered or misunderstood, their brains treat counterarguments as threats rather than data. Pushing harder only entrenches resistance, turning a solvable business dispute into an emotional tug-of-war where nobody is willing to budge.',
      'This is precisely where tactical empathy transforms the room. Far from being soft sentimentality or weak compromise, tactical empathy is the disciplined practice of understanding a counterpart’s perspective—and vocalizing it before advocating your own. By mirroring back their key phrases and calmly labeling unspoken anxiety with cues like "It seems like this timeline puts your team in an impossible spot," you disarm defensiveness. Crucially, helping someone feel heard does not mean you concede a single principle; it simply clears the emotional static blocking rational dialogue.',
      'Once trust replaces friction, skilled persuaders resist the lazy trap of splitting the difference—which often leaves both parties resentful—and instead reframe the conversation through calibrated questions. Asking "How am I supposed to guarantee quality if we cut the testing window in half?" shifts the burden of problem-solving onto your counterpart without sounding accusatory. Only by turning adversaries into co-architects of the solution can we move beyond zero-sum haggling toward durable agreement.'
    ],
    paragraphsSlash: [
      'Most professionals enter high-stakes disagreements / armed with spreadsheets, / convinced that airtight logic / will compel the other side to yield. / Yet behavioral research— / and decades of crisis negotiation— / reveals a humbling truth: / when people feel cornered or misunderstood, / their brains treat counterarguments as threats / rather than data. / Pushing harder only entrenches resistance, / turning a solvable business dispute / into an emotional tug-of-war / where nobody is willing to budge.',
      'This is precisely where / tactical empathy transforms the room. / Far from being soft sentimentality or weak compromise, / tactical empathy is the disciplined practice / of understanding a counterpart’s perspective— / and vocalizing it before advocating your own. / By mirroring back their key phrases / and calmly labeling unspoken anxiety / with cues like "It seems like this timeline puts your team in an impossible spot," / you disarm defensiveness. / Crucially, helping someone feel heard / does not mean you concede a single principle; / it simply clears the emotional static / blocking rational dialogue.',
      'Once trust replaces friction, / skilled persuaders resist the lazy trap / of splitting the difference— / which often leaves both parties resentful— / and instead reframe the conversation / through calibrated questions. / Asking "How am I supposed to guarantee quality / if we cut the testing window in half?" / shifts the burden of problem-solving / onto your counterpart / without sounding accusatory. / Only by turning adversaries into co-architects of the solution / can we move beyond zero-sum haggling / toward durable agreement.'
    ],
    paragraphsKo: [
      '대부분의 직장인들은 치밀한 논리만 있으면 상대가 승복할 것이라 확신하며 엑셀 데이터로 무장한 채 중대한 의견 충돌에 뛰어듭니다. 그러나 행동심리학 연구와 수십 년간의 위기 협상 경험은 겸허해지는 진실을 보여줍니다. 사람들은 궁지에 몰렸거나 오해받고 있다고 느끼는 순간, 뇌가 반박 논리를 데이터가 아니라 위협으로 받아들인다는 것입니다. 더 거세게 밀어붙일수록 저항만 깊어져, 충분히 풀 수 있던 비즈니스 이견이 누구도 물러서려 하지 않는 감정적 줄다리기로 변질됩니다.',
      '바로 이 지점에서 전술적 공감(tactical empathy)이 회의장의 공기를 완전히 바꿉니다. 전술적 공감은 유약한 감상이나 어설픈 타협과는 거리가 멉니다. 그것은 상대방의 관점을 치밀하게 파악하고, 내 주장을 펼치기 전에 상대의 입장을 먼저 언어화해 주는 훈련된 기술입니다. 상대의 핵심 표현을 거울처럼 되비추고(mirror back) "이 일정이라면 팀이 정말 난처한 상황에 놓이는 것처럼 보이네요" 같은 단서로 말 못 한 불안에 이름을 붙여주면(label) 방어심이 무장해제됩니다. 결정적으로, 상대가 경청받고 있다고 느끼게 돕는 일은 내 원칙을 단 하나도 양보한다는 뜻이 아닙니다. 그저 이성적 대화를 가로막던 감정적 잡음을 걷어낼 뿐입니다.',
      '마찰이 신뢰로 바뀌고 나면, 노련한 설득가는 양측 모두에게 앙금만 남기기 쉬운 ‘반반 타협(splitting the difference)’의 게으른 함정을 거부하고, 대신 조율된 질문(calibrated questions)을 통해 대화의 프레임을 전환합니다. "테스트 기간을 절반으로 줄이면 제가 어떻게 품질을 보장할 수 있을까요?"라고 물으면 비난하는 어조 없이도 문제 해결의 책임을 상대에게 부드럽게 넘길 수 있습니다. 오직 상대를 적이 아닌 해법의 공동 설계자로 전환할 때에만 우리는 제로섬 흥정을 넘어 지속 가능한 합의에 도달할 수 있습니다.'
    ],
    keyExpressions: [
      'Far from being A, B is ~ (A와는 거리가 멀고, 오히려 B는 ~이다)',
      'mirror back key phrases (상대의 핵심 표현을 거울처럼 되비추다)',
      'disarm defensiveness (방어심을 무장해제시키다)',
      'split the difference (근본 해결 없이 어정쩡하게 반반 타협하다)',
      'calibrated questions (상대가 해법을 고민하게 만드는 조율된 How/What 질문)',
      'Only by -ing can we ~ (오직 ~함으로써만 우리는 ...할 수 있다)'
    ],
    comprehensionQuiz: [
      {
        id: 'd28-rq01',
        questionKo: '1문단에 따르면 치밀한 데이터와 논리만으로 상대를 압박할 때 역효과가 나는 근본 이유는?',
        options: [
          '대부분의 비즈니스 리더들이 엑셀 데이터를 읽을 줄 모르기 때문에',
          '궁지에 몰렸거나 오해받는다고 느끼면 뇌가 반론을 객관적 데이터가 아닌 위협으로 인식해 저항을 키우기 때문에',
          '협상에서는 항상 감정적 호소가 숫자 데이터보다 법적 효력이 높기 때문에',
          '위기 협상 기법은 일반 비즈니스 회의에 전혀 적용할 수 없기 때문에'
        ],
        answer: '궁지에 몰렸거나 오해받는다고 느끼면 뇌가 반론을 객관적 데이터가 아닌 위협으로 인식해 저항을 키우기 때문에',
        explanationKo:
          '1문단의 "when people feel cornered or misunderstood, their brains treat counterarguments as threats rather than data"가 핵심 근거입니다.'
      },
      {
        id: 'd28-rq02',
        questionKo: '2문단이 강조하는 "전술적 공감(tactical empathy)"에 대한 올바른 이해는?',
        options: [
          '분위기를 부드럽게 만들기 위해 내 핵심 조건을 먼저 양보하는 전략이다',
          '원칙을 양보하지 않으면서도 상대의 관점과 불안을 정확히 언어화해 감정적 방어벽을 걷어내는 기술이다',
          '상대의 감정을 완전히 배제하고 차가운 팩트만 전달하는 기법이다',
          '상대방의 약점을 지적하여 협상 주도권을 빼앗는 심리전이다'
        ],
        answer: '원칙을 양보하지 않으면서도 상대의 관점과 불안을 정확히 언어화해 감정적 방어벽을 걷어내는 기술이다',
        explanationKo:
          '2문단에서 "helping someone feel heard does not mean you concede a single principle; it simply clears the emotional static"이라고 명확히 규정합니다.'
      },
      {
        id: 'd28-rq03',
        questionKo: '3문단에서 "How am I supposed to guarantee quality if we cut the testing window in half?" 같은 조율된 질문(calibrated question)의 핵심 효과는?',
        options: [
          '상대방을 공개적으로 비난해 즉시 사과를 받아낸다',
          '비난조 없이도 상대가 스스로 제약 조건을 인식하고 해법 설계에 참여하게 만든다',
          '양측 요구를 정확히 절반씩 깎는 반반 타협(split the difference)을 신속히 성사시킨다',
          '대화를 중단하고 법무팀에 분쟁을 넘기도록 유도한다'
        ],
        answer: '비난조 없이도 상대가 스스로 제약 조건을 인식하고 해법 설계에 참여하게 만든다',
        explanationKo:
          '3문단은 "shifts the burden of problem-solving onto your counterpart without sounding accusatory" 및 "co-architects of the solution"으로 효과를 설명합니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd28-v01',
      word: 'tactical empathy',
      phonetic: '/ˈtæktɪkl ˈempəθi/',
      pos: '명사구',
      cefr: 'c2',
      meaningKo: '전술적 공감 (동의·양보와 별개로 상대의 감정과 관점을 정확히 이해·언어화하는 설득 전략)',
      meaningEn: 'the deliberate recognition and vocalization of a counterpart’s feelings and perspective to build influence',
      nuanceTipKo: '전 FBI 협상가 Chris Voss가 대중화한 C2 협상 핵심 개념! 단순 동정(sympathy)이나 양보(concession)와 철저히 구별됩니다.',
      exampleEn: 'Tactical empathy lets you acknowledge a client’s frustration without abandoning your pricing.',
      exampleKo: '전술적 공감을 활용하면 가격 원칙을 포기하지 않으면서도 고객의 불만을 인정해 줄 수 있습니다.'
    },
    {
      id: 'd28-v02',
      word: 'reframe',
      phonetic: '/ˌriːˈfreɪm/',
      pos: '동사',
      cefr: 'c1',
      meaningKo: '(문제·논쟁의) 프레임을 재구성하다, 완전히 새로운 관점으로 전환하다',
      meaningEn: 'to express or present an issue from a fresh perspective that changes how people perceive it',
      nuanceTipKo: '가격 논쟁(cost)을 장기 투자(investment)로, 갈등을 공동 문제 해결로 바꿀 때 쓰는 설득 최고급 동사입니다.',
      exampleEn: 'Instead of arguing over price, she reframed the fee as insurance against costly downtime.',
      exampleKo: '가격을 놓고 다투는 대신, 그녀는 비용을 치명적인 서비스 중단 방지 보험으로 프레임을 전환했습니다.'
    },
    {
      id: 'd28-v03',
      word: 'mirror back',
      phonetic: '/ˈmɪrər bæk/',
      pos: '구동사',
      cefr: 'c1',
      meaningKo: '(상대의 마지막 핵심 어구를) 거울처럼 되비추어 말하며 심층 설명을 이끌어내다',
      meaningEn: 'to gently repeat a speaker’s key words with an inquisitive tone to encourage elaboration',
      nuanceTipKo: '상대가 "This rollout feels rushed"라고 할 때 "Feels rushed?"처럼 핵심 2~3단어를 부드럽게 되비추면 상대가 속마음을 털어놓습니다.',
      exampleEn: 'When you mirror back a stakeholder’s final three words, they almost always reveal their real worry.',
      exampleKo: '이해관계자의 마지막 세 단어를 거울처럼 되비추면, 십중팔구 진짜 속내와 우려를 털어놓습니다.'
    },
    {
      id: 'd28-v04',
      word: 'calibrated question',
      phonetic: '/ˈkælɪbreɪtɪd ˈkwestʃən/',
      pos: '명사구',
      cefr: 'c2',
      meaningKo: '조율된 질문 (상대의 방어심 없이 사고와 해법 설계를 유도하는 정교한 How/What 질문)',
      meaningEn: 'a carefully crafted open-ended How or What question that invites collaboration rather than resistance',
      nuanceTipKo: '"Why did you ~?"는 추궁처럼 들려 방어심을 유발하므로, "How can we ~?" / "What’s the biggest obstacle?"로 조율하는 기술입니다.',
      exampleEn: 'A single calibrated question like "How would you like me to proceed?" can break a stalemate.',
      exampleKo: '"어떻게 진행하길 원하시나요?" 같은 조율된 질문 하나가 교착 상태를 깰 수 있습니다.'
    },
    {
      id: 'd28-v05',
      word: 'label an emotion',
      phonetic: '/ˈleɪbl ən ɪˈmoʊʃən/',
      pos: '동사구',
      cefr: 'c2',
      meaningKo: '(상대의 말 못 한 감정에) 객관적 이름을 붙여 언어화하다 ("~처럼 보이네요")',
      meaningEn: 'to verbally identify and validate a counterpart’s unspoken emotion using neutral cues',
      nuanceTipKo: '"I feel that..."(나 중심) 대신 "It seems like... / It sounds like..."(객관적 관찰)로 시작해야 상대의 저항이 사라집니다.',
      exampleEn: 'Labeling an emotion with "It sounds like reliability is your top concern" instantly lowers tension.',
      exampleKo: '"신뢰성이 가장 큰 우려이신 것처럼 들리네요"라고 감정에 이름을 붙여주면 긴장이 즉시 누그러집니다.'
    },
    {
      id: 'd28-v06',
      word: 'counterpart',
      phonetic: '/ˈkaʊntərpɑːrt/',
      pos: '명사',
      cefr: 'c1',
      meaningKo: '(협상·업무상의) 상대방, 대응 직책자',
      meaningEn: 'the person or side on the opposite end of a negotiation or matching role in another organization',
      nuanceTipKo: 'opponent(적, 반대편)보다 훨씬 프로페셔널하고 협력 지향적인 C1–C2 협상 용어입니다.',
      exampleEn: 'Treating your counterpart as a partner rather than an adversary changes the entire tone.',
      exampleKo: '상대방을 적이 아닌 파트너로 대우하면 협상 전체의 어조가 달라집니다.'
    },
    {
      id: 'd28-v07',
      word: 'disarm defensiveness',
      phonetic: '/dɪsˈɑːrm dɪˈfensɪvnəs/',
      pos: '동사구',
      cefr: 'c2',
      meaningKo: '상대의 방어적 태도를 무장해제시키다, 경계심을 부드럽게 녹이다',
      meaningEn: 'to neutralize someone’s guardedness or hostility so constructive dialogue can resume',
      nuanceTipKo: 'disarm(무장을 해제하다)을 심리 영역에 적용한 최고급 수사 연어입니다.',
      exampleEn: 'Acknowledging potential criticisms up front is the quickest way to disarm defensiveness.',
      exampleKo: '예상되는 비판을 먼저 짚어 인정하는 것이 방어심을 무장해제시키는 가장 빠른 길입니다.'
    },
    {
      id: 'd28-v08',
      word: 'split the difference',
      phonetic: '/splɪt ðə ˈdɪfrəns/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '(이견의) 중간 지점에서 반반씩 양보해 어정쩡하게 타협하다',
      meaningEn: 'to settle a disagreement by meeting strictly halfway between two initial positions',
      nuanceTipKo: 'Chris Voss가 "검은 구두 한 짝과 갈색 구두 한 짝을 신는 꼴"이라며 경계한 표현! 협상 토론에서 매우 자주 인용됩니다.',
      exampleEn: 'Simply splitting the difference on safety standards is never a wise compromise.',
      exampleKo: '안전 기준을 놓고 단순히 반반 타협하는 것은 결코 현명한 절충이 아닙니다.'
    },
    {
      id: 'd28-v09',
      word: 'accusation audit',
      phonetic: '/ˌækjəˈzeɪʃən ˈɔːdɪt/',
      pos: '명사구',
      cefr: 'c2',
      meaningKo: '선제적 비판 점검 (상대가 내게 품을 법한 부정적 오해를 먼저 꺼내어 무력화하는 기법)',
      meaningEn: 'preemptively voicing every negative assumption the other side might hold about you',
      nuanceTipKo: '"You’re probably thinking we’re being inflexible..."처럼 상대가 속으로 할 불만을 먼저 말해버리면 독기가 빠집니다!',
      exampleEn: 'Opening a tough call with an accusation audit removes unspoken resentment before it festers.',
      exampleKo: '까다로운 통화를 선제적 비판 점검으로 열면, 숨은 반감이 곪기 전에 미리 제거할 수 있습니다.'
    },
    {
      id: 'd28-v10',
      word: 'feel heard',
      phonetic: '/fiːl ˈhɜːrd/',
      pos: '동사구',
      cefr: 'c1',
      meaningKo: '자신의 의견과 감정이 진정으로 경청·이해받고 있다고 느끼다',
      meaningEn: 'to sense that one’s voice, concerns, and perspective are genuinely understood',
      nuanceTipKo: 'make someone feel heard는 코칭·리더십·협상 영어에서 원어민이 가장 아끼는 핵심 표현입니다.',
      exampleEn: 'People rarely become flexible until they genuinely feel heard.',
      exampleKo: '사람들은 자신의 이야기가 진심으로 경청받고 있다고 느끼기 전에는 좀처럼 유연해지지 않습니다.'
    },
    {
      id: 'd28-v11',
      word: 'deadlock',
      phonetic: '/ˈdedlɑːk/',
      pos: '명사',
      cefr: 'c1',
      meaningKo: '교착 상태, 한 치도 나아가지 못하는 팽팽한 대치',
      meaningEn: 'a complete standstill in which neither side can progress or reach agreement',
      nuanceTipKo: 'break a deadlock / resolve an impasse 연어로 갈등 해결 맥락에서 필수입니다.',
      exampleEn: 'Reframing the timeline around pilot milestones finally broke the three-week deadlock.',
      exampleKo: '파일럿 마일스톤 중심으로 일정을 재구성하자 3주간의 교착 상태가 마침내 풀렸습니다.'
    },
    {
      id: 'd28-v12',
      word: 'leverage',
      phonetic: '/ˈlevərɪdʒ/',
      pos: '명사/동사',
      cefr: 'c1',
      meaningKo: '협상력·지렛대; (자산·정보를) 전략적으로 활용하다',
      meaningEn: 'strategic advantage or influence in a negotiation; to use an advantage to maximum effect',
      nuanceTipKo: '권력(power)보다 정교한 협상 우위를 뜻합니다. gain leverage / leverage insights 형태로 쓰세요.',
      exampleEn: 'Understanding what your counterpart stands to lose gives you subtle, ethical leverage.',
      exampleKo: '상대방이 잃을 수 있는 것이 무엇인지 파악하면 은밀하면서도 윤리적인 협상력을 얻게 됩니다.'
    },
    {
      id: 'd28-v13',
      word: 'concede',
      phonetic: '/kənˈsiːd/',
      pos: '동사',
      cefr: 'c1',
      meaningKo: '(원칙·조건을) 양보하다; (상대의 타당한 점을) 인정하다',
      meaningEn: 'to admit that a point is valid or reluctantly surrender a position or demand',
      nuanceTipKo: 'give up보다 격식 있고 정확한 C1–C2 동사입니다. concede a point(한 논점을 인정하다) vs. concede ground(입지를 양보하다).',
      exampleEn: 'Empathizing with their budget crunch does not require us to concede core product quality.',
      exampleKo: '상대의 예산 압박에 공감한다고 해서 핵심 제품 품질까지 양보해야 하는 것은 아닙니다.'
    },
    {
      id: 'd28-v14',
      word: 'steer the conversation',
      phonetic: '/stɪr ðə ˌkɑːnvərˈseɪʃən/',
      pos: '동사구',
      cefr: 'c1',
      meaningKo: '대화의 방향타를 쥐고 원하는 방향으로 부드럽게 이끌다',
      meaningEn: 'to guide the direction and focus of a discussion tactfully without seeming forceful',
      nuanceTipKo: 'control보다 훨씬 우아하고 협력적인 리더십 어감입니다. steer away from blame toward solutions!',
      exampleEn: 'Calibrated questions allow you to steer the conversation without dominating airtime.',
      exampleKo: '조율된 질문을 쓰면 발언 시간을 독점하지 않고도 대화의 방향을 능숙하게 이끌 수 있습니다.'
    },
    {
      id: 'd28-v15',
      word: 'underlying motive',
      phonetic: '/ˌʌndərˈlaɪɪŋ ˈmoʊtɪv/',
      pos: '명사구',
      cefr: 'c2',
      meaningKo: '이면에 깔린 진짜 동기, 겉으로 드러난 요구 뒤의 본질적 욕구',
      meaningEn: 'the deeper, often unspoken reason or fear driving someone’s surface demand',
      nuanceTipKo: '표면적 주장(surface demand)과 숨은 진짜 동기(underlying motive)를 구분할 때 쓰는 C2 분석 표현입니다.',
      exampleEn: 'Once we uncovered their underlying motive—fear of a public outage—the pricing debate vanished.',
      exampleKo: '공개 장애에 대한 두려움이라는 이면의 진짜 동기를 파악하자 가격 논쟁은 순식간에 사라졌습니다.'
    }
  ],
  dialogue: [
    {
      id: 'd28-t01',
      speaker: 'David',
      roleLabel: '엔터프라이즈 파트너십 부사장 (협상 상대역)',
      voicePitch: 0.90,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english:
        'Look, Elena, we have been going in circles for two weeks. Unless you slash the renewal fee by 25 percent and rush delivery by Friday, my board is walking away.',
      slashBroken:
        'Look, Elena, / we have been going in circles for two weeks. / Unless you slash the renewal fee by 25 percent / and rush delivery by Friday, / my board is walking away.',
      korean:
        '보세요, 엘레나. 벌써 2주째 제자리걸음이에요. 갱신 비용을 25% 깎고 금요일까지 납품을 앞당겨 주지 않으면, 우리 이사회는 계약을 접을 겁니다.',
      keyHighlight: 'going in circles ~ slash the renewal fee',
      noteKo: '고압적인 최후통첩(ultimatum)으로 방어적 대립을 유발하는 전형적인 교착 상황입니다. 여기서 맞받아치면 협상이 깨집니다!'
    },
    {
      id: 'd28-t02',
      speaker: 'Elena',
      roleLabel: '전술적 공감 협상 전략가',
      voicePitch: 1.05,
      sceneImage: 'assets/scene_media_podcast.jpg',
      cameraMotion: 'pan-right',
      english:
        'Walking away on Friday? It sounds like you are under immense pressure from the board to prove immediate cost savings before quarter-end.',
      slashBroken:
        'Walking away on Friday? / It sounds like / you are under immense pressure from the board / to prove immediate cost savings / before quarter-end.',
      korean:
        '금요일에 계약을 접으신다고요? 분기 말 전에 즉각적인 비용 절감을 입증하라는 이사회 압박이 엄청나게 크신 것처럼 들리네요.',
      keyHighlight: 'Walking away on Friday? (Mirroring) + It sounds like ~ (Labeling)',
      noteKo: '상대 핵심 어구를 의문조로 되비춘(Mirroring) 직후, "It sounds like ~"로 감정에 이름을 붙여(Labeling) 방어심을 즉시 녹입니다.'
    },
    {
      id: 'd28-t03',
      speaker: 'David',
      roleLabel: '엔터프라이즈 파트너십 부사장 (협상 상대역)',
      voicePitch: 0.90,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-left',
      english:
        'Exactly—that’s right. Our CFO froze discretionary budgets yesterday, and honestly, I can’t risk another delayed launch on my watch.',
      slashBroken:
        'Exactly—that’s right. / Our CFO froze discretionary budgets yesterday, / and honestly, / I can’t risk another delayed launch / on my watch.',
      korean:
        '정확해요, 바로 그겁니다. 어제 CFO가 재량 예산을 동결했고, 솔직히 제 임기 중에 또 한 번 출시가 지연되는 위험은 감수할 수 없어요.',
      keyHighlight: 'that’s right ~ underlying motive revealed',
      noteKo: '전술적 공감이 적중했을 때 나오는 최고의 신호 "That’s right"! 상대가 스스로 숨은 진짜 동기(CFO 예산 동결 + 출시 지연 공포)를 털어놓습니다.'
    },
    {
      id: 'd28-t04',
      speaker: 'Elena',
      roleLabel: '전술적 공감 협상 전략가',
      voicePitch: 1.05,
      sceneImage: 'assets/scene_media_podcast.jpg',
      cameraMotion: 'zoom-in',
      english:
        'You’re probably thinking we’re being rigid about pricing. Yet if we simply split the difference and skip full security testing, how am I supposed to guarantee you won’t face an outage next month?',
      slashBroken:
        'You’re probably thinking / we’re being rigid about pricing. / Yet if we simply split the difference / and skip full security testing, / how am I supposed to guarantee / you won’t face an outage next month?',
      korean:
        '아마 저희가 가격에 지나치게 융통성이 없다고 생각하실 겁니다. 하지만 단순히 반반 타협해서 보안 테스트를 건너뛴다면, 다음 달에 장애가 나지 않는다고 제가 어떻게 보장해 드릴 수 있을까요?',
      keyHighlight: 'You’re probably thinking (Accusation Audit) + How am I supposed to ~ (Calibrated Question)',
      noteKo: '선제적 비판 점검(Accusation Audit)과 조율된 질문(How am I supposed to ~?)을 연속 구사해 원칙은 지키면서 상대를 공동 해결사로 끌어들입니다.'
    },
    {
      id: 'd28-t05',
      speaker: 'David',
      roleLabel: '엔터프라이즈 파트너십 부사장 (협상 상대역)',
      voicePitch: 0.90,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-right',
      english:
        'Fair point—an outage would cost us ten times the discount. What if we keep full testing intact, phase the rollout in two stages, and defer part of the payment into Q3?',
      slashBroken:
        'Fair point— / an outage would cost us ten times the discount. / What if we keep full testing intact, / phase the rollout in two stages, / and defer part of the payment into Q3?',
      korean:
        '일리가 있네요—장애가 나면 할인액의 열 배 손해니까요. 전체 테스트는 그대로 유지하되, 출시를 2단계로 나누고 결제 일부를 3분기로 이연하는 건 어떨까요?',
      keyHighlight: 'phase the rollout ~ defer part of the payment',
      noteKo: '놀랍게도 상대방(David) 입에서 먼저 창의적인 윈-윈 대안이 튀어나옵니다! 이것이 조율된 질문의 마법입니다.'
    },
    {
      id: 'd28-t06',
      speaker: 'Elena',
      roleLabel: '전술적 공감 협상 전략가',
      voicePitch: 1.05,
      sceneImage: 'assets/scene_media_podcast.jpg',
      cameraMotion: 'pan-left',
      english:
        'Now we’re reframing the deadlock into something both boards can champion. Let’s map out those two milestones right now so you can walk into your CFO’s office with complete confidence.',
      slashBroken:
        'Now we’re reframing the deadlock / into something both boards can champion. / Let’s map out those two milestones right now / so you can walk into your CFO’s office / with complete confidence.',
      korean:
        '이제 교착 상태를 양측 이사회 모두가 지지할 만한 안으로 완전히 재구성했네요. 지금 바로 그 두 단계 마일스톤을 설계해서 CFO실에 완벽한 자신감을 갖고 들어가실 수 있게 해드리죠.',
      keyHighlight: 'reframing the deadlock ~ both boards can champion',
      noteKo: 'champion(동사: 적극 지지·옹호하다)을 활용해 상대의 내부 보고 성공까지 챙겨주며 최상급 C2 합의로 마무리합니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 방어심을 무장해제시키는 객관적 감정 라벨링 (It seems / sounds / looks like)',
      coreFormula: 'It sounds like + [상대의 우려] / It seems as though + [상황 요약] (※ "I think / You are" 금지!)',
      wrongKonglish: 'You are angry because of your boss, and I think you are being too emotional.',
      rightNative:
        'It sounds like you are under immense pressure from the board to show immediate savings before quarter-end.',
      explanationKo:
        '"You are worried(당신은 불안해하네요)"나 "I think(내 생각엔)"으로 시작하면 상대는 "네가 날 뭘 알아?"라며 즉각 방어벽을 세웁니다. 반면 비인칭 주어 It을 쓴 "It sounds like ~ / It seems as though ~"는 판단 없는 중립적 관찰 거울로 작동해, 상대의 방어심을 순식간에 무장해제하고 "That’s right!"이라는 깊은 신뢰 반응을 이끌어냅니다.',
      registerSpectrum: {
        casual: 'Sounds like that tight deadline is putting a ton of pressure on your crew.',
        standard: 'It sounds like protecting reliability is your number-one concern here.',
        formal:
          'It seems as though the compressed timeline places your compliance team in an untenable position.'
      }
    },
    {
      title: '원리 02 · "Why"의 추궁을 없애는 조율된 질문(Calibrated Questions: How / What)',
      coreFormula: 'How am I supposed to + V? / What would it take to + V? / How can we solve [제약] without [손실]?',
      wrongKonglish: 'Why do you ask for an impossible discount? No, we cannot cut quality.',
      rightNative:
        'How am I supposed to guarantee zero downtime if we cut security testing in half?',
      explanationKo:
        '협상에서 "Why ~?"는 어린 시절 부모에게 혼나던 기억을 자극해 상대를 변명 모드로 몰아넣습니다. 대신 "How am I supposed to ~(제가 도대체 어떻게 ~할 수 있을까요?)"나 "What is the biggest hurdle here?" 같은 How/What 조율 질문을 던지면, "No"라고 직접 거절하지 않고도 상대가 스스로 현실적 대안을 설계하게 만듭니다.',
      registerSpectrum: {
        casual: 'How can we make that deadline work without burning everyone out?',
        standard: 'What would it take for us to align on a phased launch schedule?',
        formal:
          'How are we expected to uphold enterprise-grade security if we truncate the audit cycle?'
      }
    },
    {
      title: '원리 03 · C2 수사적 강렬함: Only by -ing 도치 & Far from -ing 대조 강조',
      coreFormula: 'Only by + 동명사(-ing) + 조동사(can/will/do) + 주어 + 동사원형 / Far from being A, X is B',
      wrongKonglish: 'Only by listening we can break a deadlock. Empathy is not weak, it is strong tool.',
      rightNative:
        'Far from being soft sentimentality, tactical empathy is a disciplined strategy; only by making counterparts feel heard can we turn deadlocks into durable agreements.',
      explanationKo:
        'Only by + 동명사가 문장 맨 앞에 오면, 주절의 주어와 동사가 반드시 도치(`can we ~`, `will organizations ~`)됩니다! 또한 `Far from being A, B is ~`(A와는 거리가 멀고, 오히려 B다)를 짝지어 쓰면 TED 강연과 Harvard Business Review 칼럼 수준의 압도적인 C2 설득 문체가 완성됩니다.',
      registerSpectrum: {
        casual: 'Empathy isn’t weak at all—it’s the only way to get past a standoff.',
        standard: 'Far from being a concession, listening closely helps us break deadlocks.',
        formal:
          'Far from signaling weakness, tactical empathy is decisive; only by disarming defensiveness can leaders forge durable consensus.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd28-s01',
      drillType: 'chunk-build',
      promptKo: '전술적 공감은 입장을 양보하는 것이 아니라, 교착 상태의 프레임을 전환하는 것입니다.',
      promptEnHint: 'not about -ing ~ it is about -ing 병렬 구조를 조립하세요.',
      targetEn: 'Tactical empathy is not about conceding your stance; it is about reframing the deadlock.',
      chunks: [
        'Tactical empathy is not about',
        'conceding your stance;',
        'it is about',
        'reframing the deadlock.'
      ],
      explanationKo: 'tactical empathy, concede, reframe, deadlock 네 가지 핵심 어휘가 정교한 대조 구조로 결합되었습니다.'
    },
    {
      id: 'd28-s02',
      drillType: 'konglish-fix',
      promptKo: '"이 일정 때문에 팀이 엄청난 압박을 받고 계신 것처럼 들리네요." — 방어심을 낮추는 라벨링 표현은?',
      promptEnHint: 'You are / I think 대신 비인칭 관찰 표현(It sounds like)을 고르세요!',
      targetEn: 'It sounds like this timeline is putting immense pressure on your team.',
      wrongKonglishOption: 'You are feeling angry because I think this timeline gives pressure to you.',
      explanationKo: 'It sounds like ~ 로 시작하는 객관적 감정 라벨링이 상대의 방어심을 무장해제합니다.'
    },
    {
      id: 'd28-s03',
      drillType: 'active-blank',
      promptKo: '테스트를 절반으로 줄이면 제가 어떻게 품질을 보장할 수 있을까요?',
      promptEnHint: '조율된 질문 핵심 구문: How am I ________ to ~?',
      targetEn: 'How am I supposed to guarantee quality if we cut testing in half?',
      blankData: {
        before: 'How am I',
        answer: 'supposed',
        after: 'to guarantee quality if we cut testing in half?',
        firstLetterHint: 's_______ (8글자)'
      },
      explanationKo: 'How am I supposed to ~?는 정중하면서도 강렬하게 상대의 문제 해결 참여를 유도하는 전설의 조율 질문입니다.'
    },
    {
      id: 'd28-s04',
      drillType: 'chunk-build',
      promptKo: '오직 방어심을 무장해제시킴으로써만 우리는 지속 가능한 합의에 도달할 수 있습니다.',
      promptEnHint: 'Only by -ing 문두 도치 어순(can we)에 주의해 조립하세요!',
      targetEn: 'Only by disarming defensiveness can we reach a durable agreement.',
      chunks: ['Only by', 'disarming defensiveness', 'can we reach', 'a durable agreement.'],
      explanationKo: 'Only by + 동명사 뒤에는 주절 조동사와 주어가 반드시 도치(can we)됩니다.'
    },
    {
      id: 'd28-s05',
      drillType: 'active-blank',
      promptKo: '상대의 마지막 핵심 단어를 거울처럼 되비추면 숨은 동기가 드러납니다.',
      promptEnHint: '거울처럼 되비추다: ______ back',
      targetEn: 'When you mirror back key words, underlying motives quickly emerge.',
      blankData: {
        before: 'When you',
        answer: 'mirror',
        after: 'back key words, underlying motives quickly emerge.',
        firstLetterHint: 'm_____ (6글자)'
      },
      explanationKo: 'mirror back은 상대방의 핵심 어구를 부드럽게 반복해 깊은 속내를 이끌어내는 핵심 기법입니다.'
    },
    {
      id: 'd28-s06',
      drillType: 'konglish-fix',
      promptKo: '"단순히 반반 타협하는 것은 흔히 양측 모두에게 앙금을 남긴다." — 정확한 C2 관용구는?',
      promptEnHint: 'divide half by half 같은 콩글리시를 피하세요!',
      targetEn: 'Simply splitting the difference often leaves both sides resentful.',
      wrongKonglishOption: 'Simply dividing half by half often makes both sides angry mind.',
      explanationKo: 'split the difference가 중간 지점에서 반반 양보하는 타협을 뜻하는 정확한 관용구입니다.'
    },
    {
      id: 'd28-s07',
      drillType: 'chunk-build',
      promptKo: '유약한 감상과는 거리가 멀게, 전술적 공감은 치밀하게 훈련된 협상 기술입니다.',
      promptEnHint: 'Far from being ~ 구문으로 시작해 조립하세요.',
      targetEn: 'Far from being soft sentimentality, tactical empathy is a disciplined negotiation skill.',
      chunks: [
        'Far from being',
        'soft sentimentality,',
        'tactical empathy is',
        'a disciplined negotiation skill.'
      ],
      explanationKo: 'Far from being A, B is ~ 는 대중의 오해를 단번에 뒤집는 최고급 C2 수사 프레임입니다.'
    },
    {
      id: 'd28-s08',
      drillType: 'active-blank',
      promptKo: '사람들은 자신의 이야기가 진심으로 경청받고 있다고 느끼기 전에는 좀처럼 유연해지지 않습니다.',
      promptEnHint: '경청·이해받고 있다고 느끼다: feel _____ (5글자 과거분사)',
      targetEn: 'People rarely become flexible until they genuinely feel heard.',
      blankData: {
        before: 'People rarely become flexible until they genuinely feel',
        answer: 'heard',
        after: '.',
        firstLetterHint: 'h____ (5글자)'
      },
      explanationKo: 'feel heard는 자신의 목소리가 진정으로 존중받고 전달되었다고 느끼는 심리 상태를 뜻합니다.'
    },
    {
      id: 'd28-s09',
      drillType: 'chunk-build',
      promptKo: '조율된 질문을 쓰면 발언 시간을 독점하지 않고도 대화의 방향을 이끌 수 있습니다.',
      promptEnHint: 'calibrated questions와 steer the conversation을 연결하세요.',
      targetEn: 'Calibrated questions let you steer the conversation without dominating airtime.',
      chunks: [
        'Calibrated questions',
        'let you steer',
        'the conversation',
        'without dominating airtime.'
      ],
      explanationKo: 'steer the conversation(대화의 방향타를 쥐다)과 without -ing의 우아한 결합입니다.'
    },
    {
      id: 'd28-s10',
      drillType: 'active-blank',
      promptKo: '상대방의 숨은 동기를 파악하고 나니 팽팽하던 가격 교착 상태가 풀렸습니다.',
      promptEnHint: '이면에 깔린 진짜 동기: __________ motive',
      targetEn: 'Once we uncovered their underlying motive, the pricing deadlock dissolved.',
      blankData: {
        before: 'Once we uncovered their',
        answer: 'underlying',
        after: 'motive, the pricing deadlock dissolved.',
        firstLetterHint: 'u_________ (10글자)'
      },
      explanationKo: 'underlying motive는 겉으로 내세운 요구 아래 숨어 있는 본질적 두려움·욕구를 가리킵니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd28-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '핵심 동사 reframe',
      questionKo: '빈칸에 알맞은 동사(1단어)를 넣어 "비용 논쟁을 장기 투자로 프레임을 전환하다"를 완성하세요.',
      stimulusEn: 'Skilled negotiators know how to __________ a cost dispute as a shared investment.',
      answer: 'reframe',
      explanationKo: 'reframe은 사안을 바라보는 틀 자체를 바꾸어 설득력을 높이는 핵심 동사입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "핵심 원칙을 양보하다"를 뜻하는 c로 시작하는 동사(1단어)를 쓰세요.',
        stimulusEn: 'Showing empathy never requires you to __________ your core safety standards.',
        answer: 'concede',
        explanationKo: 'concede는 원칙이나 입지를 양보한다는 C1–C2 동사입니다.'
      }
    },
    {
      id: 'd28-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '동사구 disarm defensiveness',
      questionKo: '빈칸에 알맞은 동사(1단어, d로 시작)를 넣어 "방어심을 무장해제시키다"를 완성하세요.',
      stimulusEn: 'Naming unspoken worries up front is the fastest way to __________ defensiveness.',
      answer: 'disarm',
      explanationKo: 'disarm defensiveness는 상대의 경계심과 적대감을 부드럽게 풀어내는 C2 고급 연어입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "대화의 방향타를 쥐고 이끌다"에서 s로 시작하는 동사(1단어)를 쓰세요.',
        stimulusEn: 'Thoughtful open-ended questions help you __________ the conversation constructively.',
        answer: 'steer',
        explanationKo: 'steer the conversation은 강압 없이 대화의 방향을 이끈다는 표현입니다.'
      }
    },
    {
      id: 'd28-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '명사 counterpart',
      questionKo: '빈칸에 알맞은 명사(1단어, c로 시작)를 넣어 "협상 상대방을 적이 아닌 파트너로 대하다"를 완성하세요.',
      stimulusEn: 'Treat your __________ as a problem-solving partner rather than an adversary.',
      answer: 'counterpart',
      explanationKo: '협상·외교·비즈니스에서 상대편 담당자를 지칭하는 품격 있는 표현은 counterpart입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "3주간의 교착 상태를 깨다"에서 d로 시작하는 명사(1단어)를 쓰세요.',
        stimulusEn: 'A phased pilot proposal finally broke the three-week __________.',
        answer: 'deadlock',
        explanationKo: 'break a deadlock은 팽팽한 대치를 푼다는 핵심 연어입니다.'
      }
    },
    {
      id: 'd28-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '관용구 split the difference',
      questionKo: '빈칸에 알맞은 명사(1단어)를 넣어 "단순히 반반씩 양보해 타협하다"를 완성하세요.',
      stimulusEn: 'Never lazily split the __________ when creative trade-offs can serve both sides better.',
      answer: 'difference',
      explanationKo: 'split the difference는 차이를 절반으로 나누어 어정쩡하게 타협한다는 관용구입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "윤리적 협상력·지렛대"를 뜻하는 l로 시작하는 명사(1단어)를 채우세요.',
        stimulusEn: 'Deep preparation gives your team calm, quiet __________ at the table.',
        answer: 'leverage',
        explanationKo: 'leverage는 협상에서의 전략적 우위와 지렛대를 의미합니다.'
      }
    },
    {
      id: 'd28-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '협상 기법 accusation audit',
      questionKo: '빈칸에 알맞은 명사(1단어, a로 시작)를 넣어 "상대가 품을 법한 비판을 선제적으로 점검해 꺼내는 기법"을 완성하세요.',
      stimulusEn: 'Starting a tense call with an accusation __________ clears unspoken hostility.',
      answer: 'audit',
      explanationKo: 'accusation audit(선제적 비판 점검)은 상대가 속으로 품은 부정적 오해를 먼저 꺼내어 무력화하는 C2 협상 기법입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "상대의 핵심 단어를 거울처럼 되비추다" 구동사(2단어)를 채우세요.',
        stimulusEn: 'Pause and gently __________ __________ the client’s last three words.',
        answer: 'mirror back',
        explanationKo: 'mirror back은 상대의 핵심 어구를 되비추어 속내를 끌어내는 기법입니다.'
      }
    },
    {
      id: 'd28-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'Only by -ing 도치 구문',
      questionKo: '다음 빈칸에 어법상 가장 올바른 어순은?',
      stimulusEn:
        'Only by disarming defensiveness ____________________ turn adversaries into collaborators.',
      options: ['can leaders', 'leaders can', 'leaders will', 'do leaders can'],
      answer: 'can leaders',
      explanationKo: 'Only + 부사구(by disarming defensiveness)가 문두로 나가면 주절은 조동사 + 주어(can leaders)로 반드시 도치됩니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] Only by 도치: 빈칸에 알맞은 조동사와 주어(2단어: can we)를 넣어 완성하세요.',
        stimulusEn: 'Only by uncovering underlying motives __________ __________ break this impasse.',
        answer: 'can we',
        explanationKo: 'Only by -ing 뒤 주절 도치 어순(can we + 동사원형)을 적용합니다.'
      }
    },
    {
      id: 'd28-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '감정 라벨링 화법 비교',
      questionKo: '예산 동결로 예민해진 고객의 방어심을 낮추는 가장 정확한 전술적 공감(감정 라벨링) 문장은?',
      stimulusEn: '판단이나 추궁 없이 객관적 관찰 거울로 작동하는 문장을 고르세요.',
      options: [
        'It sounds like the budget freeze leaves you with almost zero margin for error this quarter.',
        'Why are you being so stubborn about a small fee increase?',
        'I think you are overreacting because your CFO scared you yesterday.',
        'You must calm down first so I can show you my spreadsheet.'
      ],
      answer: 'It sounds like the budget freeze leaves you with almost zero margin for error this quarter.',
      explanationKo: 'It sounds like ~ 를 사용한 중립적 감정 라벨링이 상대방의 방어심을 풀고 신뢰를 열게 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "자신의 의견이 진정으로 경청받고 있다고 느끼게 하다"에서 빈칸(1단어)을 채우세요.',
        stimulusEn: 'Before pitching solutions, make sure your counterpart genuinely feels __________.',
        answer: 'heard',
        explanationKo: 'feel heard 표현입니다.'
      }
    },
    {
      id: 'd28-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '조율된 질문(Calibrated Questions)',
      questionKo: '무리한 납기 단축을 요구하는 상대에게 직접 "No"라고 맞서지 않으면서 현실적 한계를 깨닫게 하는 최고의 조율된 질문은?',
      stimulusEn: 'How/What 기반의 비공격적 협상 질문을 고르세요.',
      options: [
        'How am I supposed to guarantee a bug-free launch if we cut QA testing in half?',
        'Why do you always request impossible deadlines without asking engineering?',
        'Do you not understand basic software quality standards?',
        'Can we just split the difference and hope nothing breaks?'
      ],
      answer: 'How am I supposed to guarantee a bug-free launch if we cut QA testing in half?',
      explanationKo: '"How am I supposed to ~?"는 상대를 비난하지 않으면서도 현실적 제약 해결에 동참시키는 최고의 조율된 질문입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "조율된 질문"을 뜻하는 2단어 전문 용어(c_________ q_______)를 쓰세요.',
        stimulusEn: 'A well-timed __________ __________ shifts problem-solving onto the other side.',
        answer: 'calibrated question',
        explanationKo: 'calibrated question은 치밀하게 설계된 How/What 열린 질문입니다.'
      }
    },
    {
      id: 'd28-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'Far from -ing 대조 구문',
      questionKo: '다음 빈칸에 들어가 "약점과는 거리가 멀게, 전술적 공감은 강력한 전략 자산이다"를 완성하는 어법상 올바른 형태는?',
      stimulusEn:
        'Far from __________ a sign of weakness, tactical empathy is a formidable strategic asset.',
      options: ['being', 'be', 'to be', 'been'],
      answer: 'being',
      explanationKo: '전치사 from의 목적어 자리이므로 동명사 being이 와야 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] Far from + 동명사: 괄호 안 concede를 알맞게 변형해 쓰세요.',
        stimulusEn: 'Far from __________ (concede) ground, labeling emotions actually strengthens your leverage.',
        answer: 'conceding',
        explanationKo: '전치사 from 뒤에 동명사 conceding을 씁니다.'
      }
    },
    {
      id: 'd28-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '전술적 공감 뉘앙스 파악',
      questionKo: '다음 중 "선제적 비판 점검(Accusation Audit)"의 예시로 가장 적절한 문장은?',
      stimulusEn: '상대가 속으로 품을 법한 부정적 오해를 먼저 꺼내어 독기를 빼는 문장을 고르세요.',
      options: [
        'You’re probably thinking we are being inflexible and ignoring your budget reality.',
        'We demand full payment today with zero exceptions.',
        'Please audit your own accounting team before calling us.',
        'Our price is fair, so you have no right to accuse us.'
      ],
      answer: 'You’re probably thinking we are being inflexible and ignoring your budget reality.',
      explanationKo: '"You’re probably thinking ~"로 상대의 잠재적 불만을 선제적으로 언어화하면 상대는 오히려 "아니, 그 정도는 아니고..."라며 누그러집니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "전술적 공감"을 뜻하는 2단어 핵심 개념을 쓰세요.',
        stimulusEn: 'Effective persuasion in tense boardrooms begins with __________ __________.',
        answer: 'tactical empathy',
        explanationKo: 'tactical empathy는 공감과 전략적 설득을 결합한 C2 핵심 개념입니다.'
      }
    },
    {
      id: 'd28-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Only by 도치 어순 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 C2 도치 설득 문장을 완성하세요.',
      stimulusEn: '[ durable agreement. / Only by / can we reach / turning adversaries into partners ]',
      answer: 'Only by turning adversaries into partners can we reach durable agreement.',
      explanationKo: 'Only by + 동명사구(turning adversaries into partners) + 도치 주절(can we reach durable agreement).',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "오직 상대가 경청받고 있다고 느끼게 함으로써만 우리는 방어심을 녹일 수 있다." (Only by making counterparts / feel heard / can we disarm / defensiveness.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Only by making counterparts feel heard can we disarm defensiveness.',
        explanationKo: 'Only by -ing + can we 도치 어순을 완벽히 체화합니다.'
      }
    },
    {
      id: 'd28-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'Far from being 배열',
      questionKo: '주어진 청크를 배열하여 전술적 공감의 본질을 정의하는 C2 문장을 완성하세요.',
      stimulusEn: '[ a disciplined practice. / Far from being / tactical empathy is / soft sentimentality, ]',
      answer: 'Far from being soft sentimentality, tactical empathy is a disciplined practice.',
      explanationKo: 'Far from being A, B is C 구조로 흔한 오해를 세련되게 반박합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "양보와는 거리가 멀게, 침묵은 전략적 지렛대를 만들어 준다." (Far from being / a concession, / silence creates / strategic leverage.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Far from being a concession, silence creates strategic leverage.',
        explanationKo: 'Far from being + 명사구 구문을 복습합니다.'
      }
    },
    {
      id: 'd28-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '조율된 질문 통문장 영작',
      questionKo: '우리말 뜻에 맞게 How am I supposed to를 활용하여 조율된 질문을 영작하세요.',
      stimulusEn:
        '우리말: 테스트 기간을 절반으로 줄이면 제가 어떻게 품질을 보장할 수 있을까요?\n(힌트: How am I supposed to / guarantee quality / if we cut the testing window in half?)',
      answer: 'How am I supposed to guarantee quality if we cut the testing window in half?',
      explanationKo: '조율된 질문(How am I supposed to V)과 조건절을 결합해 비난 없는 문제 해결을 유도합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이 일정을 현실적으로 맞추려면 무엇이 필요할까요?" (What would it take / to make this timeline / realistic?)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'What would it take to make this timeline realistic?',
        explanationKo: 'What would it take to V?는 해법 조건을 끌어내는 만능 조율 질문입니다.'
      }
    },
    {
      id: 'd28-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '도치·어법 오류 교정 서술형',
      questionKo: '다음 문장의 어법 오류 2곳(Far from be, we can)을 고쳐 완벽한 C2 문장으로 쓰세요.',
      stimulusEn: '오류 문장: Far from be weak, only by listening closely we can reframe a bitter deadlock.',
      answer: 'Far from being weak, only by listening closely can we reframe a bitter deadlock.',
      explanationKo: '전치사 from 뒤는 동명사 being, Only by 문두 도치이므로 we can → can we로 교정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: Helping someone feel hear does not mean conceding principles. (분사 오류 1곳 교정)',
        stimulusEn: '바른 문장 전체를 작성하세요.',
        answer: 'Helping someone feel heard does not mean conceding principles.',
        explanationKo: '경청받는 수동 상태이므로 과거분사 heard(feel heard)를 써야 합니다.'
      }
    },
    {
      id: 'd28-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '라벨링 + 프레임 전환 종합 영작',
      questionKo: '우리말 뜻에 맞게 It sounds like와 reframe을 활용하여 자연스럽게 영작하세요.',
      stimulusEn:
        '우리말: 일정 지연이 가장 큰 우려이신 것처럼 들리네요—파일럿 단계 중심으로 일정을 재구성해 봅시다.\n(힌트: It sounds like / launch delay is your top concern— / let’s reframe the schedule / around pilot phases.)',
      answer: 'It sounds like launch delay is your top concern—let’s reframe the schedule around pilot phases.',
      acceptableAlt: [
        "It sounds like launch delay is your top concern—let's reframe the schedule around pilot phases.",
        'It sounds like a launch delay is your top concern—let’s reframe the schedule around pilot phases.'
      ],
      explanationKo: '감정 라벨링(It sounds like ~)으로 공감 문을 연 뒤 reframe으로 즉시 건설적 대안을 제시하는 C2 완성형 화법입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "우리가 이면의 동기를 파악하자 가격 교착 상태가 풀렸다." (Once we uncovered / their underlying motive, / the pricing deadlock dissolved.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Once we uncovered their underlying motive, the pricing deadlock dissolved.',
        explanationKo: 'Once 접속사절과 underlying motive, deadlock을 자연스럽게 연결합니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      'Imagine a key stakeholder abruptly demands a 30% discount and threatens to walk away unless you agree today. How would you respond first using tactical empathy (mirroring or emotion labeling) instead of arguing back?',
    openingQuestionKo:
      '핵심 이해관계자가 갑자기 30% 할인을 요구하며 오늘 안에 수락하지 않으면 계약을 접겠다고 압박하는 상황을 상상해 보세요. 논리로 맞받아치는 대신 전술적 공감(미러링·감정 라벨링)으로 어떻게 첫마디를 여시겠어요?',
    followUpQuestionEn:
      'Brilliant disarming opener! Now follow up with one calibrated question (How/What) that protects your core value while inviting them to co-design a workable solution.',
    followUpQuestionKo:
      '방어심을 녹이는 탁월한 첫마디였어요! 이제 핵심 가치는 지키면서도 상대가 실현 가능한 대안을 함께 설계하게 만드는 조율된 질문(How/What) 한 문장을 이어서 던져보세요.',
    recommendedChunks: [
      'It sounds like ~',
      'You’re probably thinking ~',
      'mirror back',
      'How am I supposed to ~?',
      'reframe the deadlock',
      'without conceding core quality'
    ],
    modelAnswerEn:
      'Walking away today? It sounds like you are facing intense internal pressure to show immediate budget relief before quarter-end. You’re probably thinking we are being rigid on price—yet if we slash 30 percent and strip out onboarding support, how am I supposed to guarantee a smooth launch for your team? What if we reframe this into a two-phase rollout that fits your Q2 budget without conceding quality?'
  }
};
