import type {
  CuratedExtraVideo,
  GrammarMasterUnit,
  SentenceTransformerItem,
  TenseCellItem,
} from '../types/academy.ts';

/**
 * KoreBridge v4.0 Visual English Grammar Master Encyclopedia
 * - 20 Progressive Grammar Units (Elementary G01–G05, Middle G06–G12, High & CSAT G13–G20)
 * - 80 Mastery Quiz Questions (4 per unit)
 * - 8 Interactive Sentence Transformers (× 7 live grammar forms = 56 views)
 * - 12-Tense Visual Matrix (3 Time Axes × 4 Aspects)
 * - 3 Verified Curated YouTube Masterclasses
 */

export const GRAMMAR_UNITS: GrammarMasterUnit[] = [
  // =========================================================================
  // ELEMENTARY STAGE (G01 ~ G05)
  // =========================================================================
  {
    id: 'g01',
    unitNumber: 1,
    schoolStage: 'elementary',
    stageLabelKo: '초등 기초',
    titleKo: '영어 어순과 문장의 5형식 핵심 지도',
    subtitleKo: 'S+V / S+V+C / S+V+O / S+V+IO+DO / S+V+O+OC — 영어 문장의 뼈대 5가지',
    coreFormula: 'S + V (+ O / C / IO+DO / O+OC)',
    formulaBlocks: [
      { text: 'The teacher', role: 'S', labelKo: '주어 (누가)' },
      { text: 'made', role: 'V', labelKo: '동사 (결론부터!)' },
      { text: 'the lesson', role: 'O', labelKo: '목적어 (무엇을)' },
      { text: 'fun', role: 'C', labelKo: '목적격보어 (어떤 상태로)' },
    ],
    koreanTrapKo:
      '한국어는 “나는 어제 공원에서 친구와 축구를 했다”처럼 동사가 맨 끝에 오지만, 영어는 주어 바로 뒤에 동사를 꽂아야 합니다. 또한 2형식 감각동사(look/sound/feel)나 5형식 보어 자리에 한국어 해석(“행복하게”, “따뜻하게”)에 끌려 부사(-ly)를 넣는 실수가 가장 흔합니다.',
    nativeInsightKo:
      '영어 문장은 카메라 줌아웃과 같습니다. [주어 → 동사]라는 핵심 사건을 맨 앞에 먼저 던져 놓고, 그 동사가 필요로 하는 대상(O)이나 상태(C)를 바로 오른쪽에 붙입니다. 동사가 “무슨 자리를 몇 개 열어 두는지”만 알면 5형식이 한눈에 보입니다.',
    examples: [
      {
        en: 'The fresh bread smells delicious.',
        ko: '갓 구운 빵에서 맛있는 냄새가 난다. (2형식: 감각동사 + 형용사 보어)',
        highlight: 'smells delicious',
      },
      {
        en: 'My uncle bought me a new backpack.',
        ko: '삼촌이 나에게 새 배낭을 사 주셨다. (4형식: S + V + IO + DO)',
        highlight: 'bought me a new backpack',
      },
      {
        en: 'She gave a handwritten card to her mentor.',
        ko: '그녀는 멘토에게 손글씨 카드를 주었다. (4형식 → 3형식 전환: to)',
        highlight: 'a handwritten card to her mentor',
      },
      {
        en: 'Good music keeps everyone relaxed.',
        ko: '좋은 음악은 모두를 편안한 상태로 유지해 준다. (5형식: S + V + O + OC)',
        highlight: 'keeps everyone relaxed',
      },
    ],
    quiz: [
      {
        id: 'g01-q1',
        questionKo: '빈칸에 들어갈 알맞은 말을 고르세요. (2형식 감각동사 보어)',
        stimulusEn: 'Your new idea sounds really _____ to the whole team.',
        options: ['exciting', 'excitingly', 'excitedly', 'excitement'],
        answer: 'exciting',
        explanationKo:
          '감각동사 sound는 2형식 동사로 주어의 상태를 설명하는 형용사 보어를 취합니다. 한국어로 “신나게 들린다”라고 해석되어도 부사(-ly)가 아니라 형용사 exciting을 써야 합니다.',
        grammarTag: '2형식 감각동사 + 형용사',
      },
      {
        id: 'g01-q2',
        questionKo: '4형식 문장을 3형식으로 바꿀 때 빈칸에 알맞은 전치사를 고르세요.',
        stimulusEn: 'Minji made a warm scarf _____ her grandmother.',
        options: ['to', 'for', 'of', 'with'],
        answer: 'for',
        explanationKo:
          'make, buy, cook, get, find처럼 ‘정성이나 노력을 들여 해 주는’ 동사(MBCGF)는 3형식 전환 시 전치사 for를 씁니다. give/send/show/tell은 to, ask는 of를 씁니다.',
        grammarTag: '4형식 → 3형식 전치사 (for)',
      },
      {
        id: 'g01-q3',
        questionKo: '사역동사 make가 쓰인 5형식 문장의 빈칸에 알맞은 형태를 고르세요.',
        stimulusEn: 'The funny video made all the students _____ out loud.',
        options: ['to laugh', 'laugh', 'laughed', 'to laughing'],
        answer: 'laugh',
        explanationKo:
          '사역동사(make, have, let)는 목적어가 능동적으로 행동할 때 목적격보어 자리에 to 없는 동사원형(원형부정사)을 씁니다. 따라서 laugh가 정답입니다.',
        grammarTag: '5형식 사역동사 + 동사원형',
      },
      {
        id: 'g01-q4',
        questionKo: '다음 중 어법상 가장 자연스러운 5형식 문장을 고르세요.',
        stimulusEn: 'Choose the grammatically correct sentence.',
        options: [
          'Please keep the library quietly.',
          'The blanket kept the baby warmly.',
          'This heater keeps the room warm.',
          'I found the math puzzle easily.',
        ],
        answer: 'This heater keeps the room warm.',
        explanationKo:
          '5형식 동사 keep/find는 목적어의 상태를 설명하는 목적격보어 자리에 부사가 아닌 형용사를 씁니다. quietly → quiet, warmly → warm, easily → easy로 고쳐야 하므로 warm을 쓴 문장이 정답입니다.',
        grammarTag: '5형식 keep + O + 형용사',
      },
    ],
  },
  {
    id: 'g02',
    unitNumber: 2,
    schoolStage: 'elementary',
    stageLabelKo: '초등 기초',
    titleKo: 'be동사 vs 일반동사 — 영어 문장의 두 엔진 구별법',
    subtitleKo: '상태·정체성 엔진(be)과 행동 엔진(일반동사)을 절대 섞지 않는 공식',
    coreFormula: 'S + am/are/is + 명사/형용사  vs.  S + do/does + 일반동사',
    formulaBlocks: [
      { text: 'Does', role: 'Aux', labelKo: '조동사 (일반동사 도우미)' },
      { text: 'she', role: 'S', labelKo: '주어' },
      { text: 'enjoy', role: 'V', labelKo: '일반동사 원형' },
      { text: 'morning runs?', role: 'O', labelKo: '목적어' },
    ],
    koreanTrapKo:
      '한국어 형용사(“피곤하다”, “행복하다”)는 스스로 동사 역할을 하지만, 영어 형용사(tired, happy)는 동사가 아니어서 반드시 be동사가 필요합니다. 반대로 일반동사 앞에 습관적으로 “I am like coffee”처럼 be동사를 중복해 넣는 것도 초보자의 단골 실수입니다.',
    nativeInsightKo:
      '영어 문장에는 두 종류의 엔진만 있습니다. ① “~이다 / ~한 상태다 / ~에 있다”를 나타내는 be동사 엔진(스스로 부정·의문 가능), ② “먹다·가다·좋아하다” 같은 움직임의 일반동사 엔진(부정·의문 시 do/does/did 도우미 출동). 한 절에 두 엔진을 겹쳐 켜지 않는 것이 핵심입니다.',
    examples: [
      {
        en: 'Are you ready for the science fair?',
        ko: '과학 박람회 준비됐니? (형용사 ready → be동사 엔진)',
        highlight: 'Are you ready',
      },
      {
        en: 'He does not drink coffee after 6 p.m.',
        ko: '그는 오후 6시 이후에는 커피를 마시지 않는다. (일반동사 부정 → does not + 원형)',
        highlight: 'does not drink',
      },
      {
        en: 'They are not in the classroom right now.',
        ko: '그들은 지금 교실에 없다. (장소·존재 → be동사 + not)',
        highlight: 'are not in',
      },
      {
        en: 'Did you finish the reading log yesterday?',
        ko: '어제 독서 기록장을 끝냈니? (과거 일반동사 의문 → Did + S + 원형)',
        highlight: 'Did you finish',
      },
    ],
    quiz: [
      {
        id: 'g02-q1',
        questionKo: '빈칸에 들어갈 어법상 올바른 표현을 고르세요.',
        stimulusEn: 'After the long hike, the children _____ very thirsty.',
        options: ['were', 'did', 'had', 'do'],
        answer: 'were',
        explanationKo:
          'thirsty(목마른)는 동사가 아니라 형용사이므로 주어를 상태와 연결해 주는 be동사가 필요합니다. 복수 주어 the children과 과거 문맥에 맞춰 were를 씁니다.',
        grammarTag: 'be동사 + 형용사 보어',
      },
      {
        id: 'g02-q2',
        questionKo: '일반동사 부정문으로 어법상 올바른 것을 고르세요.',
        stimulusEn: 'Jisoo _____ spicy food very much.',
        options: ["isn't like", "doesn't likes", "doesn't like", "don't like"],
        answer: "doesn't like",
        explanationKo:
          'like는 일반동사이므로 be동사(isn’t)로 부정할 수 없습니다. 3인칭 단수 주어 Jisoo에 맞춰 doesn’t를 쓰고, 뒤에는 반드시 동사원형 like가 옵니다.',
        grammarTag: '일반동사 부정문 (does not + 원형)',
      },
      {
        id: 'g02-q3',
        questionKo: '자연스러운 의문문이 되도록 빈칸에 알맞은 말을 고르세요.',
        stimulusEn: '_____ your parents live near Busan Station?',
        options: ['Are', 'Is', 'Does', 'Do'],
        answer: 'Do',
        explanationKo:
          '동사가 일반동사 live이고 주어가 복수(your parents)이므로 의문문을 만들 때 조동사 Do를 문장 맨 앞에 둡니다.',
        grammarTag: '일반동사 의문문 (Do + 복수주어)',
      },
      {
        id: 'g02-q4',
        questionKo: '두 엔진을 혼동하지 않고 바르게 쓴 문장을 고르세요.',
        stimulusEn: 'Which sentence is grammatically correct?',
        options: [
          'Do you hungry right now?',
          'I am agree with your plan.',
          'She is afraid of loud thunder.',
          'He didn’t went to school today.',
        ],
        answer: 'She is afraid of loud thunder.',
        explanationKo:
          'afraid는 형용사이므로 be동사 is와 함께 씁니다. Do you hungry → Are you hungry, am agree → agree(일반동사), didn’t went → didn’t go가 맞습니다.',
        grammarTag: 'be동사 vs 일반동사 엔진 구별',
      },
    ],
  },
  {
    id: 'g03',
    unitNumber: 3,
    schoolStage: 'elementary',
    stageLabelKo: '초등 기초',
    titleKo: '관사 a/an/the와 셀 수 있는 명사·없는 명사 직관',
    subtitleKo: '영어 명사의 ‘모자’ 규칙 — 단수 가산명사는 절대 맨몸으로 쓰지 않는다',
    coreFormula: 'a / an (하나·처음)  |  the (서로 아는 그것)  |  Ø (불가산·복수 일반)',
    formulaBlocks: [
      { text: 'An', role: 'M', labelKo: '부정관사 (모음 발음 앞)' },
      { text: 'honest guide', role: 'S', labelKo: '단수 가산명사구' },
      { text: 'gave', role: 'V', labelKo: '동사' },
      { text: 'useful advice', role: 'O', labelKo: '불가산 명사 (a/-s 불가)' },
    ],
    koreanTrapKo:
      '한국어에는 관사가 없어 “I have dog”처럼 단수 명사를 맨몸으로 쓰거나, “an advice”, “many informations”처럼 영어에서는 셀 수 없는 추상·집합 명사에 a나 -s를 붙이는 실수가 매우 잦습니다.',
    nativeInsightKo:
      '원어민은 명사를 볼 때 ‘윤곽선이 또렷해 하나씩 집을 수 있는가(가산)’와 ‘물·공기·정보처럼 경계가 흐린 덩어리인가(불가산)’를 먼저 구분합니다. a/an은 “아무거나 하나”, the는 말하는 사람과 듣는 사람이 손가락으로 같이 가리킬 수 있는 “바로 그 대상”입니다.',
    examples: [
      {
        en: 'It takes an hour to reach a university near the coast.',
        ko: '해안 근처의 한 대학교에 도착하는 데 한 시간이 걸린다. (철자가 아니라 발음 기준!)',
        highlight: 'an hour to reach a university',
      },
      {
        en: 'Could you share some information about the scholarship?',
        ko: '장학금에 관한 정보를 좀 공유해 줄 수 있나요? (information은 불가산 명사)',
        highlight: 'some information',
      },
      {
        en: 'Please turn off the light before you leave the room.',
        ko: '방을 나가기 전에 불을 꺼 주세요. (서로 아는 바로 그 전등 → the)',
        highlight: 'the light',
      },
      {
        en: 'We usually eat breakfast together and go to school by subway.',
        ko: '우리는 보통 함께 아침을 먹고 지하철로 등교한다. (식사·by+교통수단은 무관사)',
        highlight: 'eat breakfast together and go to school by subway',
      },
    ],
    quiz: [
      {
        id: 'g03-q1',
        questionKo: '발음 규칙에 따라 빈칸에 알맞은 관사 쌍을 고르세요.',
        stimulusEn: 'She waited for _____ hour to meet _____ European designer.',
        options: ['a — an', 'an — a', 'an — an', 'a — a'],
        answer: 'an — a',
        explanationKo:
          'a/an은 철자가 아니라 첫 소리로 결정합니다. hour는 h가 묵음이라 [aʊər] 모음 소리로 시작해 an hour, European은 [jʊə-] 반모음(자음 소리)으로 시작해 a European이 맞습니다.',
        grammarTag: '발음 기준 a vs an',
      },
      {
        id: 'g03-q2',
        questionKo: '불가산 명사의 쓰임이 올바른 문장을 고르세요.',
        stimulusEn: 'Which sentence uses uncountable nouns correctly?',
        options: [
          'He gave me a very helpful advice.',
          'We need more furnitures for the studio.',
          'The website provides accurate information.',
          'She bought two breads at the bakery.',
        ],
        answer: 'The website provides accurate information.',
        explanationKo:
          'advice, furniture, information, bread는 모두 대표적인 불가산 명사로 부정관사 a/an이나 복수형 -s를 붙일 수 없습니다. 수를 셀 때는 a piece of advice, two loaves of bread처럼 단위 명사를 씁니다.',
        grammarTag: '불가산 명사 (information/advice/furniture)',
      },
      {
        id: 'g03-q3',
        questionKo: '대화 상황에서 가장 자연스러운 관사를 고르세요.',
        stimulusEn: 'I bought a new novel yesterday, and _____ story is already gripping.',
        options: ['a', 'an', 'the', 'Ø (관사 없음)'],
        answer: 'the',
        explanationKo:
          '앞에서 a new novel을 언급했으므로 그 소설 속 ‘바로 그 이야기’는 화자와 청자가 모두 특정할 수 있는 대상입니다. 따라서 정관사 the를 씁니다.',
        grammarTag: '정관사 the (문맥상 특정 대상)',
      },
      {
        id: 'g03-q4',
        questionKo: '관사를 쓰지 않는(무관사) 규칙에 맞는 표현을 고르세요.',
        stimulusEn: 'My cousin plays _____ violin well, but he prefers playing _____ basketball.',
        options: ['the — Ø', 'Ø — the', 'the — the', 'a — Ø'],
        answer: 'the — Ø',
        explanationKo:
          '악기를 연주할 때는 play the + 악기(play the violin)처럼 the를 붙이지만, 운동 경기 앞에는 관사를 쓰지 않습니다(play basketball).',
        grammarTag: '관용적 정관사 vs 무관사',
      },
    ],
  },
  {
    id: 'g04',
    unitNumber: 4,
    schoolStage: 'elementary',
    stageLabelKo: '초등 기초',
    titleKo: '인칭대명사·소유격·재귀대명사와 주어-동사 수일치',
    subtitleKo: '주격·목적격·소유대명사·-self 구분과 3인칭 단수 -s의 정확한 규칙',
    coreFormula: 'Subject (단수/복수) ↔ Verb 일치  |  S = O ⇒ Reflexive (-self)',
    formulaBlocks: [
      { text: 'Everyone', role: 'S', labelKo: '3인칭 단수 주어' },
      { text: 'proudly introduces', role: 'V', labelKo: '단수 동사 (-s)' },
      { text: 'himself or herself', role: 'O', labelKo: '재귀대명사 (주어=목적어)' },
      { text: 'on day one.', role: 'M', labelKo: '시간 부사구' },
    ],
    koreanTrapKo:
      '한국어 “모든 사람(everyone)”은 여러 명 느낌이라 복수 동사(enjoy)를 쓰기 쉽고, “그는 거울 속의 그(자신)를 보았다”를 “He looked at him”처럼 목적격으로 써서 완전히 다른 제3자를 가리키는 오류를 자주 범합니다.',
    nativeInsightKo:
      '영어의 -self 재귀대명사는 ‘부메랑’입니다. 주어에서 던진 행동이 남이 아니라 나 자신에게 되돌아올 때 반드시 -self를 붙입니다. 또 every/each는 여러 명 중 “한 명 한 명을 따로 스포트라이트 비추는 표현”이라 언제나 단수 동사와 짝을 이룹니다.',
    examples: [
      {
        en: 'My laptop is heavy, so I often borrow hers.',
        ko: '내 노트북은 무거워서 나는 종종 그녀의 것을 빌린다. (소유대명사 hers = her laptop)',
        highlight: 'borrow hers',
      },
      {
        en: 'Be careful with that knife, or you might cut yourself.',
        ko: '그 칼 조심해, 아니면 네 손을 벨 수도 있어. (주어 you = 목적어 yourself)',
        highlight: 'cut yourself',
      },
      {
        en: 'Everyone in the club enjoys practicing English together.',
        ko: '동아리의 모든 사람이 함께 영어 연습하는 것을 즐긴다. (Everyone = 단수 취급)',
        highlight: 'Everyone in the club enjoys',
      },
      {
        en: 'There are three cozy study cafes across from the library.',
        ko: '도서관 건너편에 아늑한 스터디 카페가 세 곳 있다. (There are + 복수 주어)',
        highlight: 'There are three cozy study cafes',
      },
    ],
    quiz: [
      {
        id: 'g04-q1',
        questionKo: '빈칸에 들어갈 알맞은 대명사를 고르세요.',
        stimulusEn: 'This umbrella is not mine; I think it is _____.',
        options: ['her', 'she', 'hers', 'herself'],
        answer: 'hers',
        explanationKo:
          '‘그녀의 것(her umbrella)’을 한 단어로 대신하려면 소유대명사 hers가 필요합니다. 소유격 her는 뒤에 반드시 명사가 와야 합니다.',
        grammarTag: '소유대명사 vs 소유격',
      },
      {
        id: 'g04-q2',
        questionKo: '주어와 목적어가 같은 사람일 때 빈칸에 알맞은 말을 고르세요.',
        stimulusEn: 'Jason taught _____ how to code by watching online tutorials.',
        options: ['him', 'his', 'himself', 'he'],
        answer: 'himself',
        explanationKo:
          'Jason이 다른 사람이 아니라 자기 자신에게 코딩을 가르쳤으므로(독학하다: teach oneself) 재귀대명사 himself를 써야 합니다. him을 쓰면 다른 남자에게 가르쳤다는 뜻이 됩니다.',
        grammarTag: '재귀대명사 필수 용법',
      },
      {
        id: 'g04-q3',
        questionKo: '주어-동사 수일치에 맞는 동사를 고르세요.',
        stimulusEn: 'Each student in this workshop _____ a free workbook.',
        options: ['receive', 'receives', 'are receiving', 'have received'],
        answer: 'receives',
        explanationKo:
          'Each + 단수명사(Each student)는 언제나 3인칭 단수 주어 취급을 하므로 단수 동사 receives가 정답입니다.',
        grammarTag: 'Each / Everyone 단수 수일치',
      },
      {
        id: 'g04-q4',
        questionKo: 'There 유도부사 구문의 수일치에 알맞은 동사를 고르세요.',
        stimulusEn: 'There _____ several interesting podcasts on this channel.',
        options: ['is', 'was', 'are', 'has'],
        answer: 'are',
        explanationKo:
          'There + be동사 구문에서는 동사 뒤에 나오는 명사가 진짜 주어입니다. 복수 주어 several interesting podcasts에 맞춰 are를 써야 합니다.',
        grammarTag: 'There is/are 수일치',
      },
    ],
  },
  {
    id: 'g05',
    unitNumber: 5,
    schoolStage: 'elementary',
    stageLabelKo: '초등 기초',
    titleKo: '전치사 핵심 이미지 (in/on/at/to/for/with/by/until)',
    subtitleKo: '암기하지 않고 공간·시간·방향의 그림으로 1초 만에 고르는 전치사 직관',
    coreFormula: 'at (점) ⊂ on (선·면·요일) ⊂ in (안·공간·월/년)  |  by (마감) vs until (지속)',
    formulaBlocks: [
      { text: 'Submit the form', role: 'V', labelKo: '명령문 동사+목적어' },
      { text: 'by Friday', role: 'M', labelKo: '마감 시한 (전치사 by)' },
      { text: 'at the front desk', role: 'M', labelKo: '특정 지점 (at)' },
      { text: 'in the lobby.', role: 'M', labelKo: '둘러싸인 공간 (in)' },
    ],
    koreanTrapKo:
      '한국어는 “금요일까지 제출해”와 “금요일까지 기다려”를 똑같이 “~까지”로 말하지만, 영어는 완료 마감(by)과 상태 지속(until)을 칼같이 구분합니다. 또 “~동안”도 숫자 기간(for)과 특정 기간 이름(during)을 자주 혼동합니다.',
    nativeInsightKo:
      '전치사는 물리적 그림 1장으로 끝납니다. at은 지도의 핀(점), on은 표면에 딱 붙음(달력의 특정 날짜/요일도 표면!), in은 상자 안(월·계절·연도라는 큰 상자). to는 도착점 화살표, for는 향하는 목표·이유입니다.',
    examples: [
      {
        en: 'The concert starts at 7 p.m. on Saturday in October.',
        ko: '콘서트는 10월 토요일 오후 7시에 시작한다. (시각 at / 요일·날짜 on / 월·년 in)',
        highlight: 'at 7 p.m. on Saturday in October',
      },
      {
        en: 'Please return the library books by Tuesday.',
        ko: '화요일까지(마감 전 어느 때든) 도서관 책을 반납해 주세요. (완료 마감 by)',
        highlight: 'by Tuesday',
      },
      {
        en: 'The bakery stays open until 9 p.m. every evening.',
        ko: '그 빵집은 매일 저녁 9시까지 계속 문을 열어 둔다. (상태 지속 until)',
        highlight: 'until 9 p.m.',
      },
      {
        en: 'She stayed in Jeju for three weeks during the summer break.',
        ko: '그녀는 여름방학 동안 3주간 제주에 머물렀다. (for + 숫자 기간 / during + 기간명)',
        highlight: 'for three weeks during the summer break',
      },
    ],
    quiz: [
      {
        id: 'g05-q1',
        questionKo: '시간 전치사 쓰임에 알맞은 것을 고르세요.',
        stimulusEn: 'We have a team kickoff meeting _____ Monday morning.',
        options: ['in', 'on', 'at', 'to'],
        answer: 'on',
        explanationKo:
          '보통 morning 앞에는 in(in the morning)을 쓰지만, 특정 요일이나 날짜가 붙은 morning(Monday morning, May 5th evening)은 ‘특정 하루’ 개념이므로 on을 씁니다.',
        grammarTag: '시간 전치사 on + 요일 morning',
      },
      {
        id: 'g05-q2',
        questionKo: '‘마감 시한’의 의미를 정확히 살리는 전치사를 고르세요.',
        stimulusEn: 'All applicants must upload their essays _____ midnight tonight.',
        options: ['until', 'by', 'during', 'for'],
        answer: 'by',
        explanationKo:
          '업로드(upload)는 한 번 완료하면 끝나는 동작이므로 마감 시한을 뜻하는 by를 써야 합니다. until은 그때까지 계속 이어지는 상태나 동작에 씁니다.',
        grammarTag: 'by (마감) vs until (지속)',
      },
      {
        id: 'g05-q3',
        questionKo: '목적지를 향해 출발한다는 표현에 알맞은 전치사를 고르세요.',
        stimulusEn: 'The express train leaves _____ Gyeongju in ten minutes.',
        options: ['for', 'to', 'at', 'with'],
        answer: 'for',
        explanationKo:
          'leave + 장소는 ‘그 장소를 떠나다’이고, leave for + 목적지는 ‘목적지를 향해 출발하다’입니다. 한국어 ‘~로’에 이끌려 leave to로 쓰지 않도록 주의하세요.',
        grammarTag: 'leave for (목적지 방향)',
      },
      {
        id: 'g05-q4',
        questionKo: '빈칸에 들어갈 알맞은 전치사를 고르세요.',
        stimulusEn: 'I practiced English speaking every day _____ the winter vacation.',
        options: ['for', 'while', 'during', 'by'],
        answer: 'during',
        explanationKo:
          'the winter vacation은 숫자가 아닌 ‘특정 기간을 나타내는 명사구’이므로 전치사 during이 알맞습니다. for 뒤에는 three weeks 같은 숫자 기간이, while 뒤에는 주어+동사 절이 옵니다.',
        grammarTag: 'during vs for vs while',
      },
    ],
  },

  // =========================================================================
  // MIDDLE SCHOOL STAGE (G06 ~ G12)
  // =========================================================================
  {
    id: 'g06',
    unitNumber: 6,
    schoolStage: 'middle',
    stageLabelKo: '중등 핵심',
    titleKo: '현재·과거·미래·진행 시제와 상태동사 함정',
    subtitleKo: '기본 4시제의 핵심 구별 + 시간·조건 부사절 현재시제 & 진행형 불가 동사',
    coreFormula: '상태동사(know/love/own) ≠ be -ing  |  when/if 부사절: 현재시제 = 미래',
    formulaBlocks: [
      { text: 'When', role: 'CONN', labelKo: '시간 부사절 접속사' },
      { text: 'the train', role: 'S', labelKo: '주어' },
      { text: 'arrives', role: 'V', labelKo: '현재시제 (미래 대용!)' },
      { text: ', I will text you.', role: 'M', labelKo: '주절 미래시제' },
    ],
    koreanTrapKo:
      '한국어 “나 그 사람 알고 있어” 때문에 “I am knowing him”이라고 하거나, “네가 도착할 때 전화할게”를 “When you will arrive”로 직역하는 것이 중등 내신 1순위 감점 함정입니다.',
    nativeInsightKo:
      '진행형(be -ing)은 “지금 눈앞에서 시작하고 멈출 수 있는 동작”에 붙입니다. 알다(know), 믿다(believe), 소유하다(own)처럼 켜고 끄기 어려운 머릿속·소유 상태는 이미 현재시제 자체에 지속성이 들어 있어 진행형으로 쓰지 않습니다.',
    examples: [
      {
        en: 'I know exactly how this coffee machine works.',
        ko: '나는 이 커피 머신이 어떻게 작동하는지 정확히 알고 있다. (상태동사 know → 단순현재)',
        highlight: 'I know',
      },
      {
        en: 'I was studying in the library when the fire alarm went off.',
        ko: '화재 경보기가 울렸을 때 나는 도서관에서 공부하고 있었다. (과거진행 + 과거시점)',
        highlight: 'was studying in the library when the fire alarm went off',
      },
      {
        en: 'If it rains tomorrow, we will move the picnic indoors.',
        ko: '내일 비가 오면 소풍을 실내로 옮길 것이다. (조건 부사절 if → will 금지)',
        highlight: 'If it rains tomorrow',
      },
      {
        en: 'We are meeting our homeroom teacher at 4 p.m. today.',
        ko: '우리는 오늘 오후 4시에 담임 선생님을 만나기로 되어 있다. (확정된 가까운 미래 → 현재진행)',
        highlight: 'are meeting',
      },
    ],
    quiz: [
      {
        id: 'g06-q1',
        questionKo: '상태동사 규칙에 비추어 어법상 올바른 문장을 고르세요.',
        stimulusEn: 'Choose the grammatically correct sentence.',
        options: [
          'She is knowing three foreign languages.',
          'This backpack is belonging to my sister.',
          'I believe your explanation completely.',
          'He is wanting a glass of cold water right now.',
        ],
        answer: 'I believe your explanation completely.',
        explanationKo:
          'know, belong to, want, believe는 모두 인지·소유·감정을 나타내는 상태동사로 원칙적으로 진행형(be -ing)을 쓰지 않습니다. 단순 현재시제 I believe가 정답입니다.',
        grammarTag: '상태동사 진행형 불가',
      },
      {
        id: 'g06-q2',
        questionKo: '시간·조건 부사절의 시제 규칙에 알맞은 동사를 고르세요.',
        stimulusEn: 'Please call me as soon as you _____ at Incheon Airport.',
        options: ['will arrive', 'arrive', 'arrived', 'are going to arrive'],
        answer: 'arrive',
        explanationKo:
          'as soon as(~하자마자)가 이끄는 시간 부사절에서는 미래의 일이라도 will을 쓰지 않고 현재시제(arrive)로 미래를 대신합니다.',
        grammarTag: '시간·조건 부사절 현재=미래',
      },
      {
        id: 'g06-q3',
        questionKo: '과거의 한 시점에 진행 중이던 동작을 나타내는 알맞은 형태를 고르세요.',
        stimulusEn: 'When I opened the window, birds _____ outside.',
        options: ['sing', 'were singing', 'will sing', 'have sung'],
        answer: 'were singing',
        explanationKo:
          '창문을 연 과거 시점(opened)에 이미 새들이 노래하고 있던 배경 동작이므로 과거진행형 were singing이 가장 자연스럽습니다.',
        grammarTag: '과거진행 + 과거시점 결합',
      },
      {
        id: 'g06-q4',
        questionKo: '다음 문장에서 will을 써도 되는 명사절 if/when과 쓰면 안 되는 부사절을 구별해 알맞은 답을 고르세요.',
        stimulusEn: 'I am not sure if it _____ tomorrow afternoon.',
        options: ['snow', 'will snow', 'snowed', 'is snowed'],
        answer: 'will snow',
        explanationKo:
          '이 문장의 if는 “만약 ~라면(조건 부사절)”이 아니라 “~인지 아닌지(명사절)”입니다! 명사절에서는 미래 사건에 정상적으로 will snow를 써야 합니다.',
        grammarTag: '명사절 if vs 조건 부사절 if 시제',
      },
    ],
  },
  {
    id: 'g07',
    unitNumber: 7,
    schoolStage: 'middle',
    stageLabelKo: '중등 핵심',
    titleKo: '현재완료(have + p.p.) 4대 용법과 과거시제 결정적 차이',
    subtitleKo: '과거에서 현재로 이어진 다리(have + p.p.) vs 과거에 끊긴 점(V-ed)',
    coreFormula: 'S + have / has + p.p. (계속 · 경험 · 완료 · 결과)',
    formulaBlocks: [
      { text: 'She', role: 'S', labelKo: '주어' },
      { text: 'has', role: 'Aux', labelKo: '완료 조동사' },
      { text: 'lived', role: 'V', labelKo: '과거분사 (p.p.)' },
      { text: 'in Seoul since 2020.', role: 'M', labelKo: '과거 기점 → 현재까지 계속' },
    ],
    koreanTrapKo:
      '한국어에서는 “어제 그 영화를 봤어”와 “그 영화를 본 적이 있어”가 모두 과거형(“봤어”)으로 끝나기 때문에, yesterday나 two days ago 같은 명백한 과거 시점과 현재완료(have seen)를 함께 써서 틀리는 경우가 매우 많습니다.',
    nativeInsightKo:
      '과거시제는 앨범 속 ‘사진 1장’(그때로 끝!)이고, 현재완료는 과거와 지금을 잇는 ‘다리’입니다. “I have lost my key”라고 하면 화자는 과거 사실보다 “그래서 지금 문 앞에 서서 못 들어가고 있어!”라는 현재 상태를 강조하는 것입니다.',
    examples: [
      {
        en: 'I have studied Korean history for five years.',
        ko: '나는 5년 동안(지금까지 계속) 한국사를 공부해 왔다. (계속: for / since)',
        highlight: 'have studied',
      },
      {
        en: 'Have you ever tried traditional matcha in Kyoto?',
        ko: '교토에서 전통 말차를 마셔 본 적이 있나요? (경험: ever / never / before)',
        highlight: 'Have you ever tried',
      },
      {
        en: 'She has already finished her science presentation.',
        ko: '그녀는 이미 과학 발표 준비를 마쳤다. (완료: already / just / yet)',
        highlight: 'has already finished',
      },
      {
        en: 'My brother has gone to Canada as an exchange student.',
        ko: '남동생은 교환학생으로 캐나다에 가 버렸다(지금 여기 없다). (결과: has gone to)',
        highlight: 'has gone to',
      },
    ],
    quiz: [
      {
        id: 'g07-q1',
        questionKo: '명백한 과거 부사구와 함께 쓸 수 있는 올바른 동사를 고르세요.',
        stimulusEn: 'Our family _____ Jeju Island three years ago.',
        options: ['has visited', 'have visited', 'visited', 'was visiting'],
        answer: 'visited',
        explanationKo:
          'three years ago, yesterday, last night, in 2019처럼 ‘현재와 단절된 과거 시점’을 나타내는 표현은 현재완료와 절대 함께 쓸 수 없으며, 단순 과거시제(visited)만 가능합니다.',
        grammarTag: '현재완료 vs 단순과거 (과거부사 제약)',
      },
      {
        id: 'g07-q2',
        questionKo: '문맥상 ‘가본 적이 있다(경험)’를 뜻하는 알맞은 표현을 고르세요.',
        stimulusEn: 'I _____ London twice, and I want to visit again.',
        options: ['have gone to', 'have been to', 'went in', 'has been to'],
        answer: 'have been to',
        explanationKo:
          'have been to는 ‘~에 가본 적이 있다(경험)’이고, have gone to는 ‘~에 가버려서 지금 여기 없다(결과)’입니다. 1인칭 I에는 have gone to를 쓸 수 없습니다.',
        grammarTag: 'have been to vs have gone to',
      },
      {
        id: 'g07-q3',
        questionKo: '현재완료의 계속 용법에서 빈칸에 알맞은 말을 고르세요.',
        stimulusEn: 'Minho has played the guitar _____ he was ten years old.',
        options: ['for', 'during', 'since', 'ago'],
        answer: 'since',
        explanationKo:
          '뒤에 ‘과거의 시작 시점(절: he was ten years old)’이 나오므로 ‘~이래로 쭉’을 뜻하는 since가 정답입니다. for 뒤에는 ten years 같은 기간의 길이가 옵니다.',
        grammarTag: '현재완료 계속 (since + 과거시점)',
      },
      {
        id: 'g07-q4',
        questionKo: '다음 밑줄 친 현재완료와 같은 용법(결과)으로 쓰인 문장을 고르세요.',
        stimulusEn: 'She has lost her student ID, so she cannot enter the lab.',
        options: [
          'I have never seen snow in May.',
          'We have known each other since middle school.',
          'He has just turned in his homework.',
          'They have moved to another city, so the house is empty.',
        ],
        answer: 'They have moved to another city, so the house is empty.',
        explanationKo:
          '주어진 문장은 ‘신분증을 잃어버려서 지금 없다’는 결과 용법입니다. 보기 4 역시 ‘다른 도시로 이사 가서 지금 집이 비어 있다’는 결과 용법입니다. (1: 경험, 2: 계속, 3: 완료)',
        grammarTag: '현재완료 4대 용법 구별 (결과)',
      },
    ],
  },
  {
    id: 'g08',
    unitNumber: 8,
    schoolStage: 'middle',
    stageLabelKo: '중등 핵심',
    titleKo: '조동사 뉘앙스 스펙트럼 (can/could/may/might/must/should/used to)',
    subtitleKo: '확신·의무·금지·과거 추측(must have p.p.)과 과거 후회(should have p.p.)',
    coreFormula: 'S + Modal + V(원형)  |  S + Modal + have + p.p. (과거 추측·후회)',
    formulaBlocks: [
      { text: 'You', role: 'S', labelKo: '주어' },
      { text: 'should have', role: 'Aux', labelKo: '조동사 + have (과거 유감)' },
      { text: 'checked', role: 'V', labelKo: '과거분사' },
      { text: 'the weather forecast.', role: 'O', labelKo: '목적어' },
    ],
    koreanTrapKo:
      '“must의 부정이 must not = ~할 필요가 없다”라고 착각하는 실수가 1위입니다! must not은 강력한 ‘금지(~하면 안 된다)’이며, ‘~할 필요가 없다’는 don’t have to입니다. 또한 used to + 동사원형과 be used to + -ing도 자주 뒤섞입니다.',
    nativeInsightKo:
      '조동사는 문장에 ‘화자의 마음 온도계’를 다는 장치입니다. 추측의 확신도는 might(30%) → may(50%) → could → should(80%) → must(95% 확신!) 순으로 올라가며, 여기에 have + p.p.를 붙이면 과거 사건을 향해 타임머신을 쏘아 올리는 표현이 됩니다.',
    examples: [
      {
        en: 'You do not have to bring a laptop; tablets are provided.',
        ko: '노트북을 가져올 필요는 없어요. 태블릿이 제공됩니다. (불필요: don’t have to)',
        highlight: 'do not have to bring',
      },
      {
        en: 'The streets are soaking wet; it must have rained heavily last night.',
        ko: '거리가 흠뻑 젖어 있네. 어젯밤에 비가 많이 왔음에 틀림없어. (과거 강한 추측)',
        highlight: 'must have rained',
      },
      {
        en: 'I should have backed up my slides before the computer crashed.',
        ko: '컴퓨터가 멈추기 전에 슬라이드를 백업해 뒀어야 했는데. (과거 후회·유감)',
        highlight: 'should have backed up',
      },
      {
        en: 'There used to be a quiet bookstore on this corner.',
        ko: '예전에는 이 모퉁이에 조용한 서점이 있었다(지금은 없다). (과거 상태: used to)',
        highlight: 'used to be',
      },
    ],
    quiz: [
      {
        id: 'g08-q1',
        questionKo: '문맥상 ‘~할 필요가 없다(불필요)’에 가장 알맞은 표현을 고르세요.',
        stimulusEn: 'Admission is free on Wednesdays, so visitors _____ buy a ticket.',
        options: ['must not', "don't have to", 'cannot', 'should not'],
        answer: "don't have to",
        explanationKo:
          '수요일은 무료 입장이므로 표를 ‘살 필요가 없다’는 의미가 되어야 합니다. must not은 ‘사면 안 된다(금지)’이므로 don’t have to가 정답입니다.',
        grammarTag: "must not (금지) vs don't have to (불필요)",
      },
      {
        id: 'g08-q2',
        questionKo: '과거에 하지 못한 일에 대한 후회·유감을 나타내는 표현을 고르세요.',
        stimulusEn: 'We missed the last train. We _____ the house ten minutes earlier.',
        options: ['must have left', 'should have left', 'cannot have left', 'may leave'],
        answer: 'should have left',
        explanationKo:
          '막차를 놓친 뒤 ‘10분 일찍 출발했어야 했는데(안 해서 후회)’를 말할 때는 should have + p.p.를 씁니다. must have left는 ‘출발했음에 틀림없다’는 추측입니다.',
        grammarTag: 'should have p.p. vs must have p.p.',
      },
      {
        id: 'g08-q3',
        questionKo: '‘~하는 데 익숙하다’의 의미가 되도록 빈칸에 알맞은 말을 고르세요.',
        stimulusEn: 'After living in London for two years, she is used to _____ on the left.',
        options: ['drive', 'drove', 'driving', 'be driven'],
        answer: 'driving',
        explanationKo:
          'be used to + 명사/동명사(-ing)는 ‘~에 익숙하다’이고, 여기서 to는 전치사입니다. 따라서 driving이 정답입니다. (used to + 동사원형: 과거에 ~하곤 했다)',
        grammarTag: 'be used to -ing vs used to V',
      },
      {
        id: 'g08-q4',
        questionKo: '과거 사실에 대한 강한 부정적 추측(‘~했을 리가 없다’)을 고르세요.',
        stimulusEn: 'Daniel was in Busan all week, so he _____ you in Seoul yesterday.',
        options: [
          'must not have seen',
          'cannot have seen',
          'should not have seen',
          'did not have to see',
        ],
        answer: 'cannot have seen',
        explanationKo:
          '‘~했음에 틀림없다(must have p.p.)’의 반대말인 ‘~했을 리가 없다’는 must not have p.p.가 아니라 cannot(can’t) have p.p.로 표현합니다.',
        grammarTag: 'cannot have p.p. (과거 불가능 추측)',
      },
    ],
  },
  {
    id: 'g09',
    unitNumber: 9,
    schoolStage: 'middle',
    stageLabelKo: '중등 핵심',
    titleKo: 'to부정사(미래지향) vs 동명사 -ing(경험·습관) 완벽 구별',
    subtitleKo: '동사 뒤 목적어 선택 원리 · 의미 달라지는 동사(remember/stop/try) · 전치사 to 함정',
    coreFormula: 'want / decide / hope + to V (앞으로)  vs.  enjoy / finish / mind + V-ing (이미·반복)',
    formulaBlocks: [
      { text: 'I', role: 'S', labelKo: '주어' },
      { text: 'remember', role: 'V', labelKo: '동사' },
      { text: 'locking', role: 'O', labelKo: '동명사 (과거에 잠갔던 일)' },
      { text: 'the front door.', role: 'O', labelKo: '동명사의 목적어' },
    ],
    koreanTrapKo:
      '“나는 ~하는 것을 즐긴다”를 습관적으로 “I enjoy to watch”로 쓰거나, “look forward to + 동사원형”으로 써서 전치사 to 뒤에 동명사(-ing)가 와야 하는 함정에 빠지는 경우가 매우 흔합니다.',
    nativeInsightKo:
      'to는 화살표(→)라서 ‘아직 일어나지 않은 미래·목표’를 가리키고, -ing는 ‘이미 해 보았거나 지금 생생하게 겪는 경험·진행’의 냄새를 풍깁니다. 그래서 want/plan/promise는 to V, enjoy/finish/avoid/suggest는 -ing와 찰떡궁합입니다!',
    examples: [
      {
        en: 'She decided to apply for the international coding camp.',
        ko: '그녀는 국제 코딩 캠프에 지원하기로 결심했다. (미래 결정: decide + to V)',
        highlight: 'decided to apply',
      },
      {
        en: 'Would you mind lowering the volume a little bit?',
        ko: '볼륨을 조금만 낮춰 주실 수 있나요? (꺼리다: mind + -ing)',
        highlight: 'mind lowering',
      },
      {
        en: 'He stopped to buy a bottle of water on his way home.',
        ko: '그는 집에 가는 길에 물 한 병을 사기 위해 (걷던 걸음을) 멈췄다. (stop + to V: 목적)',
        highlight: 'stopped to buy',
      },
      {
        en: 'We are looking forward to seeing you at the graduation ceremony.',
        ko: '졸업식에서 여러분을 뵙기를 손꼽아 기다리고 있습니다. (전치사 to + -ing)',
        highlight: 'looking forward to seeing',
      },
    ],
    quiz: [
      {
        id: 'g09-q1',
        questionKo: '동명사만을 목적어로 취하는 동사 패턴에 알맞은 것을 고르세요.',
        stimulusEn: 'The coach suggested _____ ten minutes earlier for warm-ups.',
        options: ['to arrive', 'arriving', 'arrive', 'arrived'],
        answer: 'arriving',
        explanationKo:
          'suggest, enjoy, finish, avoid, mind, give up, practice, consider 같은 동사들은 목적어로 동명사(-ing)만 취합니다. suggest to V는 틀린 표현입니다.',
        grammarTag: '동명사 전용 동사 (suggest + -ing)',
      },
      {
        id: 'g09-q2',
        questionKo: '‘앞으로 ~해야 할 것을 기억하라’는 뜻이 되도록 알맞은 것을 고르세요.',
        stimulusEn: 'Please remember _____ your passport before heading to the airport.',
        options: ['packing', 'to pack', 'packed', 'pack'],
        answer: 'to pack',
        explanationKo:
          'remember to V는 ‘(미래에) ~할 것을 기억하다’, remember -ing는 ‘(과거에) ~했던 것을 기억하다’입니다. 공항 가기 전에 챙겨야 할 일이므로 to pack이 맞습니다.',
        grammarTag: 'remember to V vs -ing',
      },
      {
        id: 'g09-q3',
        questionKo: '문맥상 ‘~하는 것을 그만두다’의 의미가 되도록 알맞은 것을 고르세요.',
        stimulusEn: 'For better sleep quality, try to stop _____ your phone in bed.',
        options: ['to check', 'checking', 'check', 'checked'],
        answer: 'checking',
        explanationKo:
          'stop + -ing는 ‘~하는 행동 자체를 멈추다(그만두다)’이고, stop + to V는 ‘~하기 위해 (하던 일을) 멈추다’입니다. 잠자리에서 폰 확인을 끊으라는 뜻이므로 checking이 정답입니다.',
        grammarTag: 'stop -ing vs stop to V',
      },
      {
        id: 'g09-q4',
        questionKo: '전치사 to가 포함된 필수 관용표현에 알맞은 형태를 고르세요.',
        stimulusEn: 'Many volunteers are dedicated to _____ endangered marine animals.',
        options: ['protect', 'protected', 'protecting', 'be protect'],
        answer: 'protecting',
        explanationKo:
          'be dedicated to, look forward to, be committed to, object to의 to는 to부정사가 아니라 전치사입니다! 따라서 뒤에 명사나 동명사(protecting)가 와야 합니다.',
        grammarTag: '전치사 to + 동명사 (be dedicated to)',
      },
    ],
  },
  {
    id: 'g10',
    unitNumber: 10,
    schoolStage: 'middle',
    stageLabelKo: '중등 핵심',
    titleKo: '수동태(be + p.p.)와 감정동사 -ing/-ed(boring vs bored)',
    subtitleKo: '능동/수동 전환 · 자동사 수동 불가 · 사역/지각 수동태 to 부활 · 감정분사 구별',
    coreFormula: 'O(새 주어) + be + p.p. (+ by 행위자)  |  감정 유발(-ing) vs 감정 느낌(-ed)',
    formulaBlocks: [
      { text: 'The ancient temple', role: 'S', labelKo: '동작을 받는 주어' },
      { text: 'was', role: 'Aux', labelKo: '시제·수 담당 be동사' },
      { text: 'restored', role: 'V', labelKo: '과거분사 (p.p.)' },
      { text: 'by local artisans.', role: 'M', labelKo: '행위자 (by + 명사)' },
    ],
    koreanTrapKo:
      '“사고가 발생되었다”라는 한국어 번역 때문에 자동사 happen/occur를 “was happened”로 쓰거나, “나 지루해”를 “I am boring(나는 남을 지루하게 만드는 사람이다)”으로 말해 웃픈 오해를 만드는 실수가 대표적입니다.',
    nativeInsightKo:
      '감정동사(bore, excite, surprise, disappoint)의 원래 뜻은 모두 ‘(남에게 그 감정을) 일으키다’입니다. 그래서 감정을 뿜어내는 원인(영화·수업·뉴스)은 능동 -ing, 그 감정을 화살처럼 맞아 느끼는 사람/마음은 수동 -ed를 씁니다.',
    examples: [
      {
        en: 'The sudden power outage happened right before the concert.',
        ko: '갑작스러운 정전이 콘서트 직전에 발생했다. (자동사 happen → 수동태 불가!)',
        highlight: 'happened',
      },
      {
        en: 'The documentary was so inspiring that the audience felt deeply moved.',
        ko: '그 다큐멘터리가 너무 감동적이어서 관객들은 깊이 감동했다. (-ing 유발 vs -ed 느낌)',
        highlight: 'inspiring that the audience felt deeply moved',
      },
      {
        en: 'The new subway line is being tested for safety this month.',
        ko: '새 지하철 노선은 이번 달 안전 점검을 받고 있는 중이다. (진행형 수동태: be being p.p.)',
        highlight: 'is being tested',
      },
      {
        en: 'Passengers were made to wait at the gate for two hours.',
        ko: '승객들은 탑승구에서 두 시간 동안 기다리게 되었다. (사역동사 수동태 → to 부활)',
        highlight: 'were made to wait',
      },
    ],
    quiz: [
      {
        id: 'g10-q1',
        questionKo: '자동사 수동태 불가 원칙에 맞는 올바른 문장을 고르세요.',
        stimulusEn: 'Choose the grammatically correct sentence.',
        options: [
          'A serious traffic accident was happened near the bridge.',
          'The lost wallet was disappeared from the desk.',
          'An unexpected problem occurred during the experiment.',
          'The sun is risen in the east every morning.',
        ],
        answer: 'An unexpected problem occurred during the experiment.',
        explanationKo:
          'happen, occur, disappear, rise, appear는 목적어를 받지 않는 1형식 자동사이므로 수동태(be + p.p.)로 쓸 수 없습니다. 능동 과거형 occurred가 정답입니다.',
        grammarTag: '자동사 수동태 불가 (occur/happen)',
      },
      {
        id: 'g10-q2',
        questionKo: '감정동사 분사의 쓰임이 모두 올바른 짝을 고르세요.',
        stimulusEn: 'The lecture was quite _____, so several students looked _____.',
        options: [
          'confusing — confused',
          'confused — confusing',
          'confusing — confusing',
          'confused — confused',
        ],
        answer: 'confusing — confused',
        explanationKo:
          '강의(The lecture)는 혼란을 유발하는 원인이므로 confusing, 학생들(students)은 혼란을 느끼는 대상이므로 confused가 맞습니다.',
        grammarTag: '감정동사 -ing vs -ed',
      },
      {
        id: 'g10-q3',
        questionKo: '사역동사 make가 수동태로 전환되었을 때 빈칸에 알맞은 형태를 고르세요.',
        stimulusEn: 'The interns were made _____ the entire database overnight.',
        options: ['update', 'to update', 'updating', 'updated'],
        answer: 'to update',
        explanationKo:
          '능동태(make + O + 동사원형)에서 숨어 있던 to가 수동태(be made + to V)가 되면 반드시 되살아납니다. 지각동사(be seen to V)도 동일합니다.',
        grammarTag: '사역동사 수동태 to 부활',
      },
      {
        id: 'g10-q4',
        questionKo: '‘지금 수리되고 있는 중이다’라는 현재진행 수동태를 완성하세요.',
        stimulusEn: 'The main road cannot be used today because it _____ right now.',
        options: ['is repairing', 'is being repaired', 'has repaired', 'repairs'],
        answer: 'is being repaired',
        explanationKo:
          '도로(it)는 스스로 수리하는 게 아니라 수리를 ‘받는’ 대상이고, right now가 현재 진행 중임을 나타내므로 진행형 수동태(is being + p.p.)인 is being repaired가 정답입니다.',
        grammarTag: '현재진행 수동태 (be being p.p.)',
      },
    ],
  },
  {
    id: 'g11',
    unitNumber: 11,
    schoolStage: 'middle',
    stageLabelKo: '중등 핵심',
    titleKo: '원급·비교급·최상급과 배수사·the 비교급, the 비교급',
    subtitleKo: '비교급 강조 부사(much/far/even), 배수사 어순, 비교 대상 일치(that/those)',
    coreFormula: 'The + 비교급 S + V, the + 비교급 S + V  |  배수사 + as + 원급 + as',
    formulaBlocks: [
      { text: 'The earlier', role: 'M', labelKo: 'The + 비교급 (조건)' },
      { text: 'you start,', role: 'S', labelKo: '주어 + 동사' },
      { text: 'the smoother', role: 'C', labelKo: 'the + 비교급 (결과)' },
      { text: 'the project becomes.', role: 'V', labelKo: '주어 + 동사' },
    ],
    koreanTrapKo:
      '한국어 “훨씬 더 크다” 때문에 비교급 앞에 very를 붙여 “very bigger”라고 쓰거나, “서울의 날씨는 제주보다 춥다”를 “The weather of Seoul is colder than Jeju”처럼 ‘날씨’와 ‘도시’를 잘못 비교하는 오류가 내신·수능 단골 함정입니다.',
    nativeInsightKo:
      '비교는 저울질입니다. 양쪽 저울 접시에 올라가는 대상의 ‘급(날씨↔날씨, 인구↔인구)’이 똑같아야 공정합니다. 그래서 앞의 단수 명사를 반복하지 않고 받을 때 that of, 복수 명사를 받을 때 those of를 써서 저울의 균형을 맞춥니다.',
    examples: [
      {
        en: 'This updated chip is far faster than the previous generation.',
        ko: '이 최신 칩은 이전 세대보다 훨씬 더 빠르다. (비교급 강조: much/far/even/still/a lot)',
        highlight: 'far faster than',
      },
      {
        en: 'The new stadium is three times as large as the old one.',
        ko: '새 경기장은 옛 경기장보다 세 배 더 크다. (배수사 + as + 원급 + as)',
        highlight: 'three times as large as',
      },
      {
        en: 'The more attentively you listen, the better you understand native speed.',
        ko: '더 집중해서 들을수록 원어민 속도를 더 잘 이해하게 된다. (the 비교급, the 비교급)',
        highlight: 'The more attentively you listen, the better',
      },
      {
        en: 'The population of Tokyo is much larger than that of Zurich.',
        ko: '도쿄의 인구는 취리히의 인구보다 훨씬 더 많다. (비교 대상 일치: that = the population)',
        highlight: 'than that of Zurich',
      },
    ],
    quiz: [
      {
        id: 'g11-q1',
        questionKo: '비교급을 강조할 수 없는 단어 하나를 피하여 빈칸에 알맞은 것을 고르세요.',
        stimulusEn: 'Speaking aloud made my pronunciation _____ clearer than before.',
        options: ['very', 'much', 'many', 'so'],
        answer: 'much',
        explanationKo:
          '비교급 앞에서는 very, so, many를 강조 부사로 쓸 수 없습니다. 비교급 강조는 much, far, even, still, a lot 5가지만 기억하세요.',
        grammarTag: '비교급 강조 부사 (much/far/even)',
      },
      {
        id: 'g11-q2',
        questionKo: '‘~할수록 더욱 ~하다’ 구문이 어법상 올바르게 쓰인 문장을 고르세요.',
        stimulusEn: 'Which sentence uses "the + comparative" correctly?',
        options: [
          'More you read books, wiser you become.',
          'The more you practice, the more confident you become.',
          'The harder you try, the most successful you will be.',
          'The fast you run, the earlier you arrive.',
        ],
        answer: 'The more you practice, the more confident you become.',
        explanationKo:
          '‘~할수록 더 ~하다’는 반드시 양쪽 절 모두 [The + 비교급 + S + V] 형태를 갖춰야 합니다. the most(최상급)나 the fast(원급), the 생략은 모두 오답입니다.',
        grammarTag: 'the 비교급, the 비교급',
      },
      {
        id: 'g11-q3',
        questionKo: '배수사 비교 구문의 어순이 올바른 것을 고르세요.',
        stimulusEn: 'The library on campus holds _____ books as the town library.',
        options: [
          'as twice many',
          'twice as many',
          'two times more as',
          'as many twice',
        ],
        answer: 'twice as many',
        explanationKo:
          '배수사(twice, three times 등)는 항상 as ~ as의 맨 앞에 위치합니다. 즉 [배수사 + as + 원급 + as] 어순인 twice as many가 정답입니다.',
        grammarTag: '배수사 + as 원급 as 어순',
      },
      {
        id: 'g11-q4',
        questionKo: '비교 대상의 수와 격을 정확히 맞춘 표현을 고르세요.',
        stimulusEn: 'The streets of Venice are narrower than _____ of Paris.',
        options: ['it', 'that', 'those', 'them'],
        answer: 'those',
        explanationKo:
          '비교 대상이 복수 명사 The streets이므로 ‘파리의 거리들’을 가리킬 때 단수 that이 아닌 복수 지시대명사 those를 써야 합니다.',
        grammarTag: '비교 대상 일치 (that vs those)',
      },
    ],
  },
  {
    id: 'g12',
    unitNumber: 12,
    schoolStage: 'middle',
    stageLabelKo: '중등 핵심',
    titleKo: '명사절·부사절 접속사 (that / whether / if / because / although / while)',
    subtitleKo: '접속사(+절) vs 전치사(+명사구) 구분과 whether/if 명사절 정밀 구별',
    coreFormula: '접속사 + S + V (절)  vs.  전치사 + 명사구  |  명사절 주어·전치사 뒤 = whether만!',
    formulaBlocks: [
      { text: 'Although', role: 'CONN', labelKo: '양보 접속사 (+ 절)' },
      { text: 'the forecast warned of rain,', role: 'M', labelKo: '부사절 (S+V)' },
      { text: 'the festival', role: 'S', labelKo: '주절 주어' },
      { text: 'continued smoothly.', role: 'V', labelKo: '주절 동사' },
    ],
    koreanTrapKo:
      '한국어로 “비록 ~에도 불구하고”가 똑같아서 전치사 despite 뒤에 주어+동사 절을 쓰거나, 반대로 접속사 although 뒤에 명사구만 붙이는 실수, 그리고 “Although ~, but …”처럼 양보 접속사와 but을 중복 쓰는 실수가 매우 잦습니다.',
    nativeInsightKo:
      '접속사는 ‘두 개의 완전한 기차 칸(S+V)’을 연결하는 커플러이고, 전치사는 ‘명사 화물 1개’만 매다는 갈고리입니다. 빈칸 뒤에 동사(V)가 숨어 있는지 0.5초만 스캔하면 because/because of, although/despite, while/during 문제가 100% 풀립니다.',
    examples: [
      {
        en: 'Although he was exhausted, he reviewed every page once more.',
        ko: '그는 지쳤음에도 불구하고 모든 페이지를 한 번 더 검토했다. (Although + S + V, but 금지!)',
        highlight: 'Although he was exhausted',
      },
      {
        en: 'Despite the heavy snow, the flights departed on schedule.',
        ko: '폭설에도 불구하고 항공편들은 예정대로 출발했다. (전치사 Despite + 명사구)',
        highlight: 'Despite the heavy snow',
      },
      {
        en: 'Whether we choose Plan A or Plan B depends on the budget.',
        ko: '우리가 A안을 고를지 B안을 고를지는 예산에 달려 있다. (명사절 주어 자리 → whether만 가능)',
        highlight: 'Whether we choose Plan A or Plan B',
      },
      {
        en: 'While my sister prefers quiet cafés, I study better in the library.',
        ko: '여동생은 조용한 카페를 선호하는 반면, 나는 도서관에서 공부가 더 잘 된다. (대조 while)',
        highlight: 'While my sister prefers quiet cafés',
      },
    ],
    quiz: [
      {
        id: 'g12-q1',
        questionKo: '빈칸 뒤에 온 구조를 보고 접속사와 전치사 중 알맞은 것을 고르세요.',
        stimulusEn: '_____ the strict deadline, the design team delivered flawless work.',
        options: ['Although', 'Even though', 'Despite', 'While'],
        answer: 'Despite',
        explanationKo:
          '빈칸 뒤 the strict deadline에는 동사가 없는 명사구만 있습니다. 따라서 접속사(Although, Even though, While)는 쓸 수 없고, 전치사 Despite(~에도 불구하고)가 정답입니다.',
        grammarTag: '전치사 despite vs 접속사 although',
      },
      {
        id: 'g12-q2',
        questionKo: '원인을 나타내는 알맞은 연결어를 고르세요.',
        stimulusEn: 'The outdoor match was postponed _____ the field was flooded.',
        options: ['because of', 'due to', 'because', 'despite'],
        answer: 'because',
        explanationKo:
          '뒤에 주어(the field) + 동사(was flooded)로 이루어진 완전한 절이 나오므로 접속사 because를 써야 합니다. because of와 due to는 전치사구여서 뒤에 명사(구)만 올 수 있습니다.',
        grammarTag: '접속사 because vs 전치사 because of',
      },
      {
        id: 'g12-q3',
        questionKo: '명사절 주어 자리와 or not과 함께 쓸 수 있는 알맞은 접속사를 고르세요.',
        stimulusEn: '_____ the startup succeeds or not will depend on user trust.',
        options: ['If', 'Whether', 'That', 'What'],
        answer: 'Whether',
        explanationKo:
          '‘~인지 아닌지’를 뜻하는 명사절이 문장의 주어 자리에 오거나 전치사 바로 뒤에 올 때는 if를 쓸 수 없고 오직 whether만 가능합니다.',
        grammarTag: '명사절 주어 whether (if 불가)',
      },
      {
        id: 'g12-q4',
        questionKo: '다음 중 어법상 올바른 문장을 고르세요.',
        stimulusEn: 'Choose the grammatically correct sentence.',
        options: [
          'Though the exam was tough, but everyone tried their best.',
          'During I was waiting for the bus, I memorized twenty words.',
          'The outcome depends on whether we gather enough data.',
          'Because of it rained heavily, we stayed inside.',
        ],
        answer: 'The outcome depends on whether we gather enough data.',
        explanationKo:
          '전치사 on 뒤에 ‘~인지 아닌지’ 명사절을 이끄는 whether가 정확히 쓰였습니다. (1: Though와 but 중복 불가, 2: During + 절 불가 → While, 4: Because of + 절 불가 → Because)',
        grammarTag: '전치사 뒤 whether & 중복 접속사 방지',
      },
    ],
  },

  // =========================================================================
  // HIGH SCHOOL & CSAT STAGE (G13 ~ G20)
  // =========================================================================
  {
    id: 'g13',
    unitNumber: 13,
    schoolStage: 'high',
    stageLabelKo: '고등·수능 1등급',
    titleKo: '관계대명사(who/which/that/what)와 전치사+관계대명사·계속적 용법',
    subtitleKo: '불완전한 절의 빈자리 찾기 · 전치사+which 완전절 전환 · 콤마(, which) 절대 규칙',
    coreFormula: '선행사 + who/which/that + 불완전절  |  전치사 + which/whom + 완전절  |  , which (, that 불가)',
    formulaBlocks: [
      { text: 'She won the grant,', role: 'S', labelKo: '선행사 (앞 절 전체)' },
      { text: 'which', role: 'CONN', labelKo: '계속적 관계대명사 (, that 불가)' },
      { text: 'allowed', role: 'V', labelKo: '단수 취급 동사' },
      { text: 'her lab to expand.', role: 'O', labelKo: '목적어 + 목적격보어' },
    ],
    koreanTrapKo:
      '콤마(,) 뒤에 습관적으로 “, that”을 쓰거나, 전치사 + 관계대명사 뒤에 “in that”을 쓰는 실수가 수능 어법 단골 함정입니다. 또한 “the house which he lived”처럼 자동사 뒤 필수 전치사(in)를 빠뜨려 문장을 망가뜨리는 실수도 매우 많습니다.',
    nativeInsightKo:
      '관계대명사는 ‘접속사 + 대명사’가 합체한 레고 블록입니다. 원래 문장에서 명사 1개를 빼서 앞으로 꺼냈기 때문에 뒷절에 주어·목적어 중 딱 한 자리가 비어 있습니다. 반면 전치사까지 함께 앞으로 꺼내면(in which) 뒷절은 깔끔한 완전절이 됩니다.',
    examples: [
      {
        en: 'He solved the riddle in ten seconds, which amazed everyone in the room.',
        ko: '그는 10초 만에 수수께끼를 풀었는데, 그것은 방 안의 모두를 놀라게 했다. (계속적 용법 , which)',
        highlight: ', which amazed everyone',
      },
      {
        en: 'This is the studio in which the composer recorded her first symphony.',
        ko: '이곳이 그 작곡가가 첫 교향곡을 녹음한 스튜디오다. (전치사 + which + 완전한 절)',
        highlight: 'in which the composer recorded',
      },
      {
        en: 'What matters most in long-term learning is consistent daily habits.',
        ko: '장기 학습에서 가장 중요한 것은 꾸준한 매일의 습관이다. (선행사 포함 what = the thing that)',
        highlight: 'What matters most',
      },
      {
        en: 'We interviewed a robotics engineer whose invention won an international award.',
        ko: '우리는 자신의 발명품이 국제상을 받은 로봇 공학자를 인터뷰했다. (소유격 관계대명사 whose + 명사)',
        highlight: 'whose invention won',
      },
    ],
    quiz: [
      {
        id: 'g13-q1',
        questionKo: '계속적 용법으로 앞 절 전체를 선행사로 받을 때 알맞은 말을 고르세요.',
        stimulusEn: 'The committee delayed the vote by two weeks, _____ disappointed many citizens.',
        options: ['that', 'what', 'which', 'where'],
        answer: 'which',
        explanationKo:
          '콤마(,) 뒤 계속적 용법에서 앞 절 전체를 선행사로 받을 때는 which만 가능합니다. 관계대명사 that과 what은 콤마 뒤 계속적 용법으로 쓸 수 없습니다.',
        grammarTag: '관계대명사 계속적 용법 (, which)',
      },
      {
        id: 'g13-q2',
        questionKo: '전치사 + 관계대명사 구조가 어법상 올바른 것을 고르세요.',
        stimulusEn: 'The ancient village _____ my grandfather grew up has become a heritage site.',
        options: ['which', 'in that', 'in which', 'what'],
        answer: 'in which',
        explanationKo:
          '뒷절 my grandfather grew up은 자동사 절로 완전하므로, 선행사 village를 연결하려면 ‘마을 안에서(in the village)’의 전치사가 살아 있는 in which(= where)가 필요합니다. 전치사 바로 뒤에는 that을 쓸 수 없습니다.',
        grammarTag: '전치사 + 관계대명사 (in which)',
      },
      {
        id: 'g13-q3',
        questionKo: '선행사가 없고 뒷절이 불완전할 때 빈칸에 알맞은 말을 고르세요.',
        stimulusEn: '_____ distinguishes great leaders from average ones is emotional resilience.',
        options: ['That', 'Which', 'What', 'Whether'],
        answer: 'What',
        explanationKo:
          '빈칸 앞에 선행사가 없고, 빈칸 뒤 distinguishes의 주어가 비어 있는 불완전한 절이므로 선행사를 자체 포함한 관계대명사 What(‘~하는 것’)이 정답입니다.',
        grammarTag: '관계대명사 what (선행사 없음 + 불완전절)',
      },
      {
        id: 'g13-q4',
        questionKo: '소유격 관계대명사 자리로 알맞은 말을 고르세요.',
        stimulusEn: 'The journal published a paper _____ conclusions challenged decades of theory.',
        options: ['which', 'whose', 'that', 'of what'],
        answer: 'whose',
        explanationKo:
          '뒷절의 conclusions(그 논문의 결론들 = the paper’s conclusions)가 명사 앞에 소유격을 필요로 하며, 뒷절 자체는 주어+동사+목적어가 갖춰져 있으므로 소유격 관계대명사 whose가 정답입니다.',
        grammarTag: '소유격 관계대명사 whose',
      },
    ],
  },
  {
    id: 'g14',
    unitNumber: 14,
    schoolStage: 'high',
    stageLabelKo: '고등·수능 1등급',
    titleKo: '관계부사(where/when/why/how)와 복합관계사(whoever/whatever/however)',
    subtitleKo: '장소 선행사 뒤 where vs which 판별 · the way how 금지 · however+형/부 어순',
    coreFormula: '관계부사(where/when/why) + 완전절  |  however + 형용사/부사 + S + V',
    formulaBlocks: [
      { text: 'However', role: 'CONN', labelKo: '복합관계부사 (아무리 ~해도)' },
      { text: 'challenging', role: 'C', labelKo: '형용사 바로 뒤 밀착!' },
      { text: 'the exam', role: 'S', labelKo: '주어' },
      { text: 'may seem,', role: 'V', labelKo: '동사' },
    ],
    koreanTrapKo:
      '장소 명사(the café, the city)만 보면 무조건 where를 찍는 것이 수능 1등급을 가르는 최악의 함정입니다! “the café which we visited”처럼 뒤 동사(visited)의 목적어가 비어 있으면 장소 명사라도 관계대명사 which를 써야 합니다. 또한 “the way how”를 함께 쓰는 것도 절대 금지입니다.',
    nativeInsightKo:
      '관계대명사 vs 관계부사는 선행사가 아니라 ‘뒷절의 빈자리 유무’로 100% 결정됩니다. 뒷절이 주어·목적어 빠진 불완전절이면 관계대명사(which), 주어·목적어가 다 찬 완전절이면 관계부사(where/when/why)입니다. 복합관계사 -ever는 ‘누구든/무엇이든/아무리 ~해도’라는 양보·무제한 확장 스위치입니다.',
    examples: [
      {
        en: 'That is the cozy café where we discussed our startup idea.',
        ko: '저기가 우리가 스타트업 아이디어를 논의했던 아늑한 카페다. (뒷절 완전 → where)',
        highlight: 'where we discussed our startup idea',
      },
      {
        en: 'That is the cozy café which we visited after the concert.',
        ko: '저기가 우리가 콘서트 후에 방문했던 아늑한 카페다. (visited 목적어 공백 → which)',
        highlight: 'which we visited',
      },
      {
        en: 'She explained how the algorithm filters out background noise.',
        ko: '그녀는 그 알고리즘이 배경 소음을 걸러내는 방식을 설명했다. (the way how 불가 → 둘 중 하나만!)',
        highlight: 'explained how',
      },
      {
        en: 'However complex the problem appears, breaking it into steps helps.',
        ko: '그 문제가 아무리 복잡해 보이더라도, 단계별로 쪼개면 도움이 된다. (However + 형용사 + S + V)',
        highlight: 'However complex the problem appears',
      },
    ],
    quiz: [
      {
        id: 'g14-q1',
        questionKo: '장소 선행사 뒤 뒷절의 완전성을 따져 알맞은 말을 고르세요.',
        stimulusEn: 'The coastal town _____ the documentary highlighted last year is now crowded.',
        options: ['where', 'which', 'when', 'in which'],
        answer: 'which',
        explanationKo:
          '장소 명사(The coastal town)가 선행사이지만, 뒷절에서 타동사 highlighted의 목적어가 비어 있는 불완전한 절입니다. 따라서 관계부사 where가 아니라 목적격 관계대명사 which가 정답입니다!',
        grammarTag: '장소 선행사 뒤 which vs where (수능 빈출)',
      },
      {
        id: 'g14-q2',
        questionKo: '방법을 나타내는 관계부사 how의 어법상 올바른 문장을 고르세요.',
        stimulusEn: 'Choose the grammatically correct sentence.',
        options: [
          'I admire the way how she handles stressful negotiations.',
          'I admire the way in that she handles stressful negotiations.',
          'I admire how she handles stressful negotiations.',
          'I admire the way which she handles stressful negotiations.',
        ],
        answer: 'I admire how she handles stressful negotiations.',
        explanationKo:
          '선행사 the way와 관계부사 how는 절대로 나란히 쓸 수 없습니다. how만 쓰거나, the way만 쓰거나, the way in which / the way that으로 써야 합니다.',
        grammarTag: 'the way vs how 공존 불가',
      },
      {
        id: 'g14-q3',
        questionKo: '복합관계부사 however의 어순이 정확한 것을 고르세요.',
        stimulusEn: '_____, you should never compromise the accuracy of your data.',
        options: [
          'However the deadline may be tight',
          'However tight the deadline may be',
          'No matter what tight the deadline is',
          'Whatever tight the deadline may be',
        ],
        answer: 'However tight the deadline may be',
        explanationKo:
          '양보의 복합관계부사 however(= no matter how)는 자신이 수식하는 형용사/부사(tight)를 반드시 바로 뒤에 끌고 옵니다. 즉 [However + 형/부 + S + V] 어순이 필수입니다.',
        grammarTag: 'However + 형용사/부사 + S + V',
      },
      {
        id: 'g14-q4',
        questionKo: '문장의 주어 역할을 하는 복합관계대명사로 알맞은 것을 고르세요.',
        stimulusEn: '_____ submits the most creative prototype will receive seed funding.',
        options: ['Whomever', 'Whoever', 'Whatever', 'However'],
        answer: 'Whoever',
        explanationKo:
          '동사 submits의 주어 자리이면서 ‘~하는 사람은 누구든지(= Anyone who)’라는 뜻의 명사절을 이끌어야 하므로 주격 복합관계대명사 Whoever가 정답입니다.',
        grammarTag: '복합관계대명사 Whoever (주격)',
      },
    ],
  },
  {
    id: 'g15',
    unitNumber: 15,
    schoolStage: 'high',
    stageLabelKo: '고등·수능 1등급',
    titleKo: '분사의 명사 수식과 고등 핵심 분사구문(능동 -ing / 수동 -ed / with 분사구문)',
    subtitleKo: '명사 후치수식 · 분사구문 능동/수동 판단 · 완료분사구문 · with + O + 분사',
    coreFormula: 'V-ing (능동·진행) / p.p. (수동·완료), S + V  |  with + O + V-ing / p.p.',
    formulaBlocks: [
      { text: 'Written in simple English,', role: 'M', labelKo: '수동 분사구문 (Being 생략)' },
      { text: 'the guidebook', role: 'S', labelKo: '의미상 주어 (= 주절 주어)' },
      { text: 'helps', role: 'V', labelKo: '주절 동사' },
      { text: 'beginners gain confidence.', role: 'O', labelKo: '목적어 + 목적격보어' },
    ],
    koreanTrapKo:
      '수능 어법 부동의 1위 킬러! 문장 맨 앞 분사구문에서 주절 주어와의 능동/수동 관계를 확인하지 않고 습관적으로 -ing를 고르거나, “with her eyes closing(눈이 스스로 무언가를 닫는 중)”처럼 신체 부위와 수동(closed) 관계를 놓치는 실수가 매우 많습니다.',
    nativeInsightKo:
      '분사구문은 부사절의 군살(접속사+중복 주어)을 쫙 뺀 ‘초압축 문장’입니다. 앞 분사가 -ing인지 -ed인지 헷갈릴 때는 콤마 뒤 ‘주절의 주어’를 데려다가 그 동사를 시켜 보세요. 안내서가 스스로 쓰면 Writing, 쓰여졌으면 Written! 1초 만에 판별됩니다.',
    examples: [
      {
        en: 'Designed for urban commuters, the electric bike folds in five seconds.',
        ko: '도심 통근자들을 위해 설계되어, 그 전기 자전거는 5초 만에 접힌다. (주어 the bike = 설계됨 → p.p.)',
        highlight: 'Designed for urban commuters',
      },
      {
        en: 'The artifacts discovered beneath the temple date back two thousand years.',
        ko: '사원 아래에서 발견된 유물들은 2천 년 전으로 거슬러 올라간다. (명사 후치수식 수동 p.p.)',
        highlight: 'discovered beneath the temple',
      },
      {
        en: 'She sat silently by the fireplace with her arms folded.',
        ko: '그녀는 팔짱을 낀 채 벽난로 옆에 조용히 앉아 있었다. (with + O + 수동 p.p.)',
        highlight: 'with her arms folded',
      },
      {
        en: 'Having lost his boarding pass, he rushed back to the check-in counter.',
        ko: '탑승권을 (먼저) 잃어버렸기 때문에 그는 체크인 카운터로 급히 뛰어 돌아갔다. (완료 분사구문)',
        highlight: 'Having lost his boarding pass',
      },
    ],
    quiz: [
      {
        id: 'g15-q1',
        questionKo: '주절 주어와의 관계를 따져 분사구문에 알맞은 형태를 고르세요.',
        stimulusEn: '_____ in 1898, the historic bridge still connects the two districts today.',
        options: ['Building', 'Built', 'Having built', 'To building'],
        answer: 'Built',
        explanationKo:
          '분사구문의 의미상 주어는 주절의 주어인 the historic bridge입니다. 다리는 스스로 짓는 게 아니라 ‘지어지는(수동)’ 대상이므로 과거분사 Built(← Being built)가 정답입니다.',
        grammarTag: '수동 분사구문 (p.p. 시작)',
      },
      {
        id: 'g15-q2',
        questionKo: '명사를 뒤에서 수식하는 분사 중 어법상 알맞은 것을 고르세요.',
        stimulusEn: 'Most of the proposals _____ by the student council were approved.',
        options: ['submitting', 'submitted', 'submit', 'were submitted'],
        answer: 'submitted',
        explanationKo:
          '문장의 진짜 동사(본동사)가 뒤에 있는 were approved이므로 빈칸은 앞 명사 proposals를 수식하는 분사 자리입니다. 제안서들은 학생회에 의해 ‘제출된’ 수동 관계이므로 submitted가 정답입니다.',
        grammarTag: '명사 후치수식 p.p. vs 본동사 구별',
      },
      {
        id: 'g15-q3',
        questionKo: '부대상황을 나타내는 with 분사구문에 알맞은 형태를 고르세요.',
        stimulusEn: 'He listened to the classical concerto with his eyes _____.',
        options: ['closing', 'closed', 'to close', 'close'],
        answer: 'closed',
        explanationKo:
          'with + 목적어(his eyes) + 분사 구문에서 눈은 사람에 의해 ‘감겨진 상태’이므로 수동·완료의 과거분사 closed를 써야 합니다. (참고: 눈물이 흐를 때는 with tears streaming — 능동)',
        grammarTag: 'with + 목적어 + 과거분사(수동)',
      },
      {
        id: 'g15-q4',
        questionKo: '주절보다 한 시제 앞선 과거 사건을 압축한 완료 분사구문을 고르세요.',
        stimulusEn: '_____ all the safety instructions carefully, the divers entered the cave.',
        options: ['Reading', 'Having read', 'Being read', 'Read'],
        answer: 'Having read',
        explanationKo:
          '안전 수칙을 다 읽은 시점이 동굴에 들어간(entered) 시점보다 명백히 앞서며, 주어(the divers)가 능동적으로 읽었으므로 완료 분사구문 Having read가 가장 정확합니다.',
        grammarTag: '완료 분사구문 (Having + p.p.)',
      },
    ],
  },
  {
    id: 'g16',
    unitNumber: 16,
    schoolStage: 'high',
    stageLabelKo: '고등·수능 1등급',
    titleKo: '가정법 과거·과거완료·혼합가정법과 If 생략 도치(Had we...)',
    subtitleKo: '현실 반대 시제 한 칸 후퇴의 원리 · 혼합가정법(now) · Had/Were/Should 도치',
    coreFormula: '가정법 과거: If S + V-ed, S + would V  |  과거완료: If S + had p.p., S + would have p.p.',
    formulaBlocks: [
      { text: 'Had', role: 'Aux', labelKo: 'If 생략 도치 (← If we had)' },
      { text: 'we', role: 'S', labelKo: '주어' },
      { text: 'known the risk,', role: 'V', labelKo: 'p.p. + 목적어' },
      { text: 'we would have prepared better.', role: 'M', labelKo: '주절 (would have p.p.)' },
    ],
    koreanTrapKo:
      '“가정법 과거”라는 이름 때문에 과거 일을 말하는 줄 알고 오역하는 경우가 가장 많습니다! 가정법 과거는 ‘현재 사실의 반대’이고, 과거 사실의 반대는 ‘가정법 과거완료(had p.p.)’입니다. 또한 If가 생략된 “Had I known...”을 의문문으로 착각해 독해를 놓치기도 합니다.',
    nativeInsightKo:
      '영어는 ‘현실과의 거리감’을 시제 한 칸 뒤로 미는 방식으로 표현합니다. 지금 현실에서 멀어지면(현재 반대) 과거형으로 한 칸 후퇴, 이미 지나간 과거 현실에서 멀어지면(과거 반대) 대과거(had p.p.)로 한 칸 더 후퇴! 시제 후퇴 = “이건 상상이야!”라는 신호입니다.',
    examples: [
      {
        en: 'If I had more free time, I would learn architectural photography.',
        ko: '지금 자유 시간이 더 많다면(현실은 부족함) 건축 사진을 배울 텐데. (가정법 과거)',
        highlight: 'If I had more free time, I would learn',
      },
      {
        en: 'If the team had tested the software earlier, they would have caught the bug.',
        ko: '팀이 소프트웨어를 더 일찍 테스트했더라면 그 버그를 잡았을 텐데. (가정법 과거완료)',
        highlight: 'had tested the software earlier, they would have caught',
      },
      {
        en: 'If I had taken the earlier flight, I would be in Jeju right now.',
        ko: '내가 더 이른 비행기를 탔더라면(과거), 지금 제주에 있을 텐데(현재). (혼합가정법 + now)',
        highlight: 'had taken the earlier flight, I would be in Jeju right now',
      },
      {
        en: 'Were I in your position, I would accept the internship offer immediately.',
        ko: '내가 네 입장이라면 그 인턴십 제안을 즉시 수락할 텐데. (If I were → Were I 도치)',
        highlight: 'Were I in your position',
      },
    ],
    quiz: [
      {
        id: 'g16-q1',
        questionKo: '현재 사실의 반대를 가정하는 가정법 과거 문장을 완성하세요.',
        stimulusEn: 'If she _____ closer to the studio, she would commute by bicycle.',
        options: ['lives', 'lived', 'has lived', 'would live'],
        answer: 'lived',
        explanationKo:
          '주절이 would + 동사원형(would commute)이므로 현재 사실의 반대를 가정하는 가정법 과거입니다. 따라서 if절에는 과거동사 lived를 써야 하며, if절 안에 would는 쓰지 않습니다.',
        grammarTag: '가정법 과거 (If + 과거동사)',
      },
      {
        id: 'g16-q2',
        questionKo: '과거 사실의 반대를 가정하는 가정법 과거완료 문장을 완성하세요.',
        stimulusEn: 'If the driver had noticed the icy patch, the crash _____ avoided.',
        options: [
          'would be',
          'would have been',
          'will have been',
          'had been',
        ],
        answer: 'would have been',
        explanationKo:
          'if절이 had noticed(가정법 과거완료)이고 충돌(the crash)은 ‘피해지는’ 수동 의미이므로 주절은 [would have been + p.p.]인 would have been avoided가 정답입니다.',
        grammarTag: '가정법 과거완료 수동태',
      },
      {
        id: 'g16-q3',
        questionKo: '문장 끝의 부사 now에 주목하여 혼합가정법 빈칸에 알맞은 것을 고르세요.',
        stimulusEn: 'If he had followed the doctor’s advice last month, he _____ healthy now.',
        options: ['would have been', 'would be', 'will be', 'were'],
        answer: 'would be',
        explanationKo:
          '조건(지난달 의사의 조언을 따랐더라면)은 과거이지만, 결과는 now(지금 건강할 텐데)로 현재입니다. 따라서 주절은 가정법 과거 형태인 would be를 쓰는 혼합가정법이 정답입니다.',
        grammarTag: '혼합가정법 (had p.p. + would V now)',
      },
      {
        id: 'g16-q4',
        questionKo: 'If가 생략된 가정법 도치 구문으로 어법상 올바른 것을 고르세요.',
        stimulusEn: '_____ the warning signal earlier, the ship would not have struck the reef.',
        options: [
          'If had the crew spotted',
          'Had the crew spotted',
          'Did the crew spot',
          'Spotted the crew',
        ],
        answer: 'Had the crew spotted',
        explanationKo:
          'If the crew had spotted ~에서 If를 생략하면 조동사 Had가 주어 앞으로 도치되어 Had the crew spotted ~가 됩니다. If와 도치를 동시에 쓸 수는 없습니다.',
        grammarTag: '가정법 If 생략 도치 (Had S p.p.)',
      },
    ],
  },
  {
    id: 'g17',
    unitNumber: 17,
    schoolStage: 'high',
    stageLabelKo: '고등·수능 1등급',
    titleKo: '부정어 도치(Never have I... / Not only...)와 장소부사구 도치',
    subtitleKo: '조동사 도치(부정어·Only) vs 동사 통째 도치(장소부사구) + 도치 주어 수일치',
    coreFormula: '부정어/Only + Aux(do/does/did/have/be) + S + V  |  장소부사구 + V + S',
    formulaBlocks: [
      { text: 'Not only', role: 'M', labelKo: '부정어구 문두 강조' },
      { text: 'did', role: 'Aux', labelKo: '도치 조동사 (의문문 어순!)' },
      { text: 'she', role: 'S', labelKo: '주어' },
      { text: 'break the record,', role: 'V', labelKo: '동사원형 + 목적어' },
    ],
    koreanTrapKo:
      '부정어(Never, Rarely, Little, Not only)나 Only 부사구가 문장 맨 앞에 튀어나왔는데도 평서문 어순(“Never I have seen...”)으로 그대로 쓰거나, 장소부사구 도치 문장에서 맨 앞 전치사구 속 명사에 동사 수를 잘못 맞추는 것이 수능 최상위권 변별 함정입니다.',
    nativeInsightKo:
      '부정어 도치는 ‘의문문 어순’을 그대로 빌려와 강조하는 마법입니다(Never have I..., Little did he know...). 반면 장소·방향 부사구 도치(On the desk lay two letters)는 카메라가 배경(책상 위)을 먼저 비춘 뒤, 그 위에 놓인 주인공(두 통의 편지)을 뒤에 천천히 드러내는 연출 기법입니다.',
    examples: [
      {
        en: 'Never have I witnessed such remarkable teamwork in a competition.',
        ko: '나는 대회에서 그렇게 놀라운 팀워크를 본 적이 결코 없다. (부정어 Never + have + S + p.p.)',
        highlight: 'Never have I witnessed',
      },
      {
        en: 'Not only did the campaign raise funds, but it also changed public policy.',
        ko: '그 캠페인은 기금을 모았을 뿐만 아니라 공공 정책까지 바꾸어 놓았다. (Not only + did + S + V)',
        highlight: 'Not only did the campaign raise',
      },
      {
        en: 'Only after losing his notes did he appreciate the value of cloud backup.',
        ko: '노트를 잃어버리고 나서야 비로소 그는 클라우드 백업의 가치를 깨달았다. (Only 부사구 + did + S + V)',
        highlight: 'Only after losing his notes did he appreciate',
      },
      {
        en: 'At the summit of the mountain stand two ancient stone pagodas.',
        ko: '산 정상에는 두 기의 고대 석탑이 서 있다. (장소부사구 도치: 진짜 주어 pagodas → 복수동사 stand)',
        highlight: 'stand two ancient stone pagodas',
      },
    ],
    quiz: [
      {
        id: 'g17-q1',
        questionKo: '부정어 문두 도치 어순이 올바른 것을 고르세요.',
        stimulusEn: 'Rarely _____ such an extraordinary meteor shower visible from the city.',
        options: ['is', 'it is', 'does', 'are'],
        answer: 'is',
        explanationKo:
          '준부정어 Rarely가 문두로 나오면 주어와 동사가 도치됩니다. 이 문장의 주어는 단수 명사구 such an extraordinary meteor shower이고 보어가 형용사 visible이므로 be동사 is가 주어 앞으로 도치됩니다.',
        grammarTag: '준부정어(Rarely) 문두 도치',
      },
      {
        id: 'g17-q2',
        questionKo: 'Not only 문두 도치에 알맞은 빈칸을 완성하세요.',
        stimulusEn: 'Not only _____ the prototype on time, but the engineers also cut costs by 20%.',
        options: [
          'the engineers finished',
          'did the engineers finish',
          'finished the engineers',
          'did the engineers finished',
        ],
        answer: 'did the engineers finish',
        explanationKo:
          '부정어구 Not only가 문두에 오면 일반동사 과거시제는 [did + 주어 + 동사원형]의 의문문 어순으로 도치됩니다. finished가 아닌 원형 finish를 써야 합니다.',
        grammarTag: 'Not only 도치 (did + S + 원형)',
      },
      {
        id: 'g17-q3',
        questionKo: 'Only + 부사절이 문두에 왔을 때 주절의 도치가 올바른 것을 고르세요.',
        stimulusEn: 'Only when the experiment failed _____ the hidden variable.',
        options: [
          'the scientists noticed',
          'did the scientists notice',
          'noticed the scientists',
          'had noticed the scientists',
        ],
        answer: 'did the scientists notice',
        explanationKo:
          'Only + 부사절(when the experiment failed)이 문두에 오면 부사절이 아니라 ‘주절’이 도치됩니다! 따라서 did the scientists notice가 정답입니다.',
        grammarTag: 'Only + 부사절 문두 주절 도치',
      },
      {
        id: 'g17-q4',
        questionKo: '장소부사구 도치 문장에서 동사의 수일치가 올바른 것을 고르세요.',
        stimulusEn: 'Beneath the dense layers of volcanic ash _____ the ruins of an entire harbor.',
        options: ['lies', 'lie', 'is lying', 'has lain'],
        answer: 'lie',
        explanationKo:
          '문두의 Beneath ~ ash는 전치사구(장소부사구)이므로 주어가 될 수 없습니다! 동사 뒤에 도치된 진짜 주어 the ruins(유적들, 복수)에 맞춰 복수 동사 lie를 써야 합니다.',
        grammarTag: '장소부사구 도치 + 수일치',
      },
    ],
  },
  {
    id: 'g18',
    unitNumber: 18,
    schoolStage: 'high',
    stageLabelKo: '고등·수능 1등급',
    titleKo: 'It ~ that 강조구문 vs 가주어/가목적어 it 완벽 구별',
    subtitleKo: '‘지우기 테스트’로 3초 판별하는 It~that 강조구문 · 5형식 가목적어 it 필수 동사',
    coreFormula: 'It is/was [강조대상] that [나머지]  |  make/find/think/consider + it + 형용사 + to V / that절',
    formulaBlocks: [
      { text: 'It was', role: 'Aux', labelKo: '강조 틀 시작' },
      { text: 'consistent feedback', role: 'S', labelKo: '강조 대상 (명사/부사)' },
      { text: 'that', role: 'CONN', labelKo: '강조 연결어' },
      { text: 'transformed her writing.', role: 'V', labelKo: '나머지 문장' },
    ],
    koreanTrapKo:
      '“I found to memorize 100 words difficult”처럼 5형식 목적어 자리에 긴 to부정사나 that절을 바로 넣어 어색한 문장을 만들거나, 가목적어 자리에 it 대신 this/that을 쓰는 실수, 그리고 It~that이 가주어인지 강조구문인지 구분 못 해 독해 초점을 놓치는 경우가 많습니다.',
    nativeInsightKo:
      'It ~ that 구별은 ‘지우개 테스트’ 1초면 끝납니다! [It is/was]와 [that]을 손가락으로 가려 보세요. 남은 조각을 붙여 완벽한 한 문장이 되면 → 강조구문! 형용사(important, clear, surprising)가 붕 떠서 문장이 안 만들어지면 → 가주어-진주어 구문입니다.',
    examples: [
      {
        en: 'It was Professor Kim that inspired me to study marine biology.',
        ko: '나에게 해양생물학을 공부하도록 영감을 준 사람은 바로 김 교수님이었다. (It ~ that 주어 강조)',
        highlight: 'It was Professor Kim that',
      },
      {
        en: 'It was not until dawn that the rescue team reached the hikers.',
        ko: '새벽이 되어서야 비로소 구조대가 등산객들에게 닿았다. (It was not until A that B 강조)',
        highlight: 'It was not until dawn that',
      },
      {
        en: 'Modern smartphones make it effortless to translate signs while traveling.',
        ko: '현대 스마트폰은 여행 중 표지판을 번역하는 것을 손쉽게 만든다. (가목적어 it ~ 진목적어 to V)',
        highlight: 'make it effortless to translate',
      },
      {
        en: 'It was thoughtful of you to share your lecture notes with the class.',
        ko: '강의 필기를 반 친구들과 공유해 주다니 너는 정말 사려 깊구나. (가주어 + 인성 형용사 + of)',
        highlight: 'It was thoughtful of you to share',
      },
    ],
    quiz: [
      {
        id: 'g18-q1',
        questionKo: '다음 중 ‘It ~ that 강조구문’이 아니라 ‘가주어-진주어 구문’인 것을 고르세요.',
        stimulusEn: 'Identify the sentence where "It" is a dummy subject (가주어), NOT an emphasis cleft.',
        options: [
          'It was in Busan that the two filmmakers first met.',
          'It was her persistence that solved the decade-old mystery.',
          'It is essential that every participant wear a safety helmet.',
          'It was yesterday afternoon that the package finally arrived.',
        ],
        answer: 'It is essential that every participant wear a safety helmet.',
        explanationKo:
          '‘It is’와 ‘that’을 지웠을 때 보기 1·2·4는 모두 완전한 문장이 되지만, 보기 3은 형용사 essential이 들어갈 자리가 없는 가주어-진주어 구문입니다! (형용사 강조는 불가)',
        grammarTag: 'It~that 강조구문 vs 가주어 판별',
      },
      {
        id: 'g18-q2',
        questionKo: '5형식 가목적어 구문에 알맞은 말을 고르세요.',
        stimulusEn: 'Many learners find _____ challenging to distinguish subtle English prepositions.',
        options: ['that', 'this', 'it', 'what'],
        answer: 'it',
        explanationKo:
          'make, find, think, believe, consider 같은 5형식 동사의 목적어가 긴 to부정사나 that절일 때는 목적어 자리에 반드시 가목적어 it만 쓰고 진목적어를 뒤로 보냅니다.',
        grammarTag: '가목적어 it (find it + 형 + to V)',
      },
      {
        id: 'g18-q3',
        questionKo: '‘~하고 나서야 비로소 ~했다’ 강조구문을 완성하세요.',
        stimulusEn: 'It was not until the final chapter _____ the reader learned the narrator’s secret.',
        options: ['when', 'which', 'that', 'what'],
        answer: 'that',
        explanationKo:
          'It was not until A that B 구문은 not until A를 강조하는 It ~ that 강조구문이므로 연결어는 when이 아닌 that을 써야 합니다.',
        grammarTag: 'It was not until A that B',
      },
      {
        id: 'g18-q4',
        questionKo: '가주어 구문에서 to부정사의 의미상 주어를 연결하는 알맞은 전치사를 고르세요.',
        stimulusEn: 'It was careless _____ me to leave my umbrella on the train again.',
        options: ['for', 'of', 'to', 'by'],
        answer: 'of',
        explanationKo:
          '보통 to부정사의 의미상 주어는 for + 목적격을 쓰지만, 앞의 형용사가 사람의 성격·태도(kind, wise, generous, careless, rude 등)를 평가할 때는 of + 목적격을 씁니다.',
        grammarTag: '가주어 It + 인성형용사 + of',
      },
    ],
  },
  {
    id: 'g19',
    unitNumber: 19,
    schoolStage: 'high',
    stageLabelKo: '고등·수능 1등급',
    titleKo: '동격의 that vs 관계대명사 that vs 명사절 what 킬러 어법',
    subtitleKo: '수능 어법 최고 오답률 구간을 [선행사 유무 × 뒷절 완전성] 2×2 공식으로 100% 돌파',
    coreFormula: '추상명사 + 동격 that + 완전절  |  선행사 + 관계대명사 that + 불완전절  |  Ø + what + 불완전절',
    formulaBlocks: [
      { text: 'The belief', role: 'S', labelKo: '추상명사 (내용 설명 필요)' },
      { text: 'that', role: 'CONN', labelKo: '동격 접속사 (which 불가!)' },
      { text: 'talent is fixed', role: 'M', labelKo: '완전한 절 (S+be+C)' },
      { text: 'limits growth.', role: 'V', labelKo: '본동사 + 목적어' },
    ],
    koreanTrapKo:
      '수능 킬러 1순위! “the fact that / the belief that / the news that” 앞에 명사가 있다는 이유만으로 무심코 which를 고르는 실수가 매년 가장 많이 나옵니다. 특히 뒷절이 수동태(was closed)나 1형식 자동사라 목적어가 없는데도 ‘불완전하다’고 착각하는 함정이 치명적입니다!',
    nativeInsightKo:
      '2단계 체크리스트만 돌리면 절대 안 틀립니다. ① 빈칸 뒤에 빠진 명사(주어·목적어)가 있는가? 없다면(= 완전절) 접속사 that(명사절 또는 동격)! ② 빠진 명사가 있다면(= 불완전절) 앞을 보라: 선행사 있으면 which/that, 선행사 없으면 what! 특히 수동태 절(S + be + p.p.)은 이미 완전한 절임을 꼭 기억하세요.',
    examples: [
      {
        en: 'Scientists rejected the rumor that the meteorite contained alien bacteria.',
        ko: '과학자들은 그 운석에 외계 박테리아가 들어 있다는 소문을 일축했다. (동격의 that + 완전절)',
        highlight: 'the rumor that the meteorite contained alien bacteria',
      },
      {
        en: 'Scientists rejected the rumor which the tabloid had spread online.',
        ko: '과학자들은 타블로이드지가 온라인에 퍼뜨린 그 소문을 일축했다. (관계대명사 which + 목적어 공백)',
        highlight: 'the rumor which the tabloid had spread',
      },
      {
        en: 'The survey confirmed that flexible work hours boost employee retention.',
        ko: '그 설문조사는 유연 근무제가 직원 유지율을 높인다는 점을 확인해 주었다. (명사절 접속사 that)',
        highlight: 'confirmed that flexible work hours boost',
      },
      {
        en: 'We were amazed by what the small community achieved in six months.',
        ko: '우리는 그 작은 공동체가 6개월 만에 이룬 것에 놀랐다. (전치사 뒤 선행사 없음 + achieved 목적어 공백 → what)',
        highlight: 'what the small community achieved',
      },
    ],
    quiz: [
      {
        id: 'g19-q1',
        questionKo: '추상명사 뒤 뒷절의 완전성을 판별해 알맞은 연결어를 고르세요.',
        stimulusEn: 'There is growing evidence _____ regular sleep strengthens long-term memory.',
        options: ['which', 'what', 'that', 'where'],
        answer: 'that',
        explanationKo:
          '앞에 추상명사 evidence가 있고, 뒷절 regular sleep(S) strengthens(V) long-term memory(O)가 빠진 성분 없는 완전한 절입니다. 따라서 관계대명사 which가 아니라 동격의 접속사 that이 정답입니다.',
        grammarTag: '동격의 that vs 관계대명사 which',
      },
      {
        id: 'g19-q2',
        questionKo: '선행사 유무와 뒷절 구조를 확인해 빈칸에 알맞은 쌍을 고르세요.',
        stimulusEn: '_____ the team needed was the exact resource _____ the mentor offered.',
        options: [
          'That — what',
          'What — that',
          'What — what',
          'Which — that',
        ],
        answer: 'What — that',
        explanationKo:
          '첫 빈칸은 선행사 없이 needed의 목적어가 비어 있으므로 What, 둘째 빈칸은 선행사 the exact resource가 있고 offered의 목적어가 비어 있으므로 관계대명사 that(또는 which)이 맞습니다.',
        grammarTag: '명사절 what vs 관계대명사 that',
      },
      {
        id: 'g19-q3',
        questionKo: '타동사 뒤 명사절 that과 what을 정확히 구별해 알맞은 것을 고르세요.',
        stimulusEn: 'The researchers realized _____ they had overlooked a tiny flaw in the sensor.',
        options: ['what', 'which', 'that', 'whom'],
        answer: 'that',
        explanationKo:
          '뒷절 they(S) had overlooked(V) a tiny flaw(O)가 완전한 문장이므로 목적어 명사절을 이끄는 접속사 that이 정답입니다. what 뒤에는 반드시 주어·목적어·보어 중 하나가 비어 있어야 합니다.',
        grammarTag: '명사절 접속사 that vs what',
      },
      {
        id: 'g19-q4',
        questionKo: '수능 킬러 함정! 수동태 뒷절의 완전성에 주의해 알맞은 것을 고르세요.',
        stimulusEn: 'The news _____ the historic theater had been demolished shocked local residents.',
        options: ['which', 'what', 'that', 'in which'],
        answer: 'that',
        explanationKo:
          'had been demolished는 수동태로, 목적어가 필요 없는 ‘완전한 절’입니다! 수동태 뒤에 목적어가 없다고 불완전절로 착각해 which를 고르면 함정에 빠집니다. the news와 동격인 접속사 that이 정답입니다.',
        grammarTag: '동격의 that + 수동태 완전절 (수능 킬러)',
      },
    ],
  },
  {
    id: 'g20',
    unitNumber: 20,
    schoolStage: 'high',
    stageLabelKo: '고등·수능 1등급',
    titleKo: '병렬구조·대동사(do/does/did)·수일치(긴 주어 수식어 건너뛰기) 수능 1등급 공식',
    subtitleKo: '수능 어법 5지선다 중 3개 이상을 지배하는 최종 마스터 3대 공식',
    coreFormula: '핵심주어 [수식어 삭제] + V  |  A and B (동일 형태 병렬)  |  일반동사 반복 → do/does/did',
    formulaBlocks: [
      { text: 'The number', role: 'S', labelKo: '핵심 단수 주어' },
      { text: 'of students studying AI online', role: 'M', labelKo: '수식어구 (괄호로 삭제!)' },
      { text: 'has risen', role: 'V', labelKo: '단수 동사 일치' },
      { text: 'faster than it did last year.', role: 'M', labelKo: '대동사 did (= rose)' },
    ],
    koreanTrapKo:
      '동사 바로 왼쪽에 붙은 복수 명사(“students”, “programs”)에 눈이 속아 복수 동사를 고르는 ‘근접 수일치 착시’가 수능 어법 오답률 1위입니다. 또한 앞의 일반동사를 대신 받는 자리에 습관적으로 is/was를 쓰거나, and 뒤에 동사/준동사 형태를 어긋나게 두는 실수도 치명적입니다.',
    nativeInsightKo:
      '수능 1등급의 눈은 문장을 X-ray로 투시합니다. ① 전치사구(of/in/with...)·분사구·관계사절에 괄호를 쳐서 지우면 ‘진짜 주어’ 1단어가 동사 옆으로 딱 붙습니다. ② and/but/or/than이 나오면 양옆 문법 품사·형태를 거울처럼 맞춥니다. ③ 대동사는 앞 문장이 be동사면 be, 일반동사면 do/does/did로 1초 대응합니다!',
    examples: [
      {
        en: 'The number of travelers visiting rural villages has surged this year.',
        ko: '시골 마을을 방문하는 여행객의 수가 올해 급증했다. (The number of ~ = 단수 주어 → has)',
        highlight: 'The number of travelers visiting rural villages has surged',
      },
      {
        en: 'A number of independent bookstores are thriving thanks to local book clubs.',
        ko: '많은 독립 서점들이 지역 독서 모임 덕분에 번창하고 있다. (A number of = 많은 → 복수 are)',
        highlight: 'A number of independent bookstores are',
      },
      {
        en: 'The new battery charges twice as quickly as the previous model did.',
        ko: '새 배터리는 이전 모델이 충전되던 것보다 두 배 빠르게 충전된다. (일반동사 과거 대동사 did)',
        highlight: 'as the previous model did',
      },
      {
        en: 'Our policy aims not only to reduce plastic waste but also to reward recycling.',
        ko: '우리 정책은 플라스틱 쓰레기를 줄일 뿐만 아니라 재활용에 보상하는 것도 목표로 한다. (to V 병렬)',
        highlight: 'not only to reduce plastic waste but also to reward',
      },
    ],
    quiz: [
      {
        id: 'g20-q1',
        questionKo: '긴 수식어구를 건너뛰고 진짜 주어에 동사를 수일치시키세요.',
        stimulusEn: 'The range of digital tools available to high school students _____ expanded rapidly.',
        options: ['have', 'has', 'are', 'were'],
        answer: 'has',
        explanationKo:
          '[of digital tools available to high school students]는 전부 수식어구입니다. 이를 괄호로 걷어내면 진짜 주어는 단수 명사 The range이므로 단수 동사 has가 정답입니다.',
        grammarTag: '긴 주어 수식어 건너뛰기 수일치',
      },
      {
        id: 'g20-q2',
        questionKo: '앞의 일반동사를 정확히 대신 받는 대동사를 고르세요.',
        stimulusEn: 'Plants in arid deserts conserve water far more efficiently than garden flowers _____.',
        options: ['are', 'were', 'do', 'have'],
        answer: 'do',
        explanationKo:
          '앞 문장의 동사가 일반동사 현재형 conserve(보존하다)이고 비교 대상 주어가 복수(garden flowers)이므로, conserve water를 대신 받는 대동사 do가 정답입니다. are를 쓰면 오답입니다.',
        grammarTag: '대동사 do/does/did vs be동사',
      },
      {
        id: 'g20-q3',
        questionKo: '등위·상관접속사 병렬구조가 완벽히 맞도록 빈칸을 채우세요.',
        stimulusEn: 'Effective mentors focus on listening deeply, asking sharp questions, and _____ clear feedback.',
        options: ['give', 'to give', 'giving', 'gave'],
        answer: 'giving',
        explanationKo:
          '전치사 on의 목적어로 [listening ~, asking ~, and _____]가 병렬로 연결되어 있습니다. 앞의 두 요소가 동명사(-ing)이므로 마지막 요소도 giving으로 맞춰야 합니다.',
        grammarTag: '등위접속사 병렬구조 (A, B, and C)',
      },
      {
        id: 'g20-q4',
        questionKo: '부분 표현(Half/Most/Percent of + 명사)의 수일치 원칙에 맞는 동사를 고르세요.',
        stimulusEn: 'More than half of the historical information collected in the archive _____ still unverified.',
        options: ['is', 'are', 'have', 'were'],
        answer: 'is',
        explanationKo:
          'half/most/some/percent of + 명사는 of 뒤의 명사에 수를 맞춥니다. 여기서 핵심 명사 information은 셀 수 없는 불가산 단수 명사이고 collected ~ archive는 수식어구이므로 단수 동사 is가 정답입니다.',
        grammarTag: '부분표현 of 명사 수일치',
      },
    ],
  },
];

// ===========================================================================
// INTERACTIVE SENTENCE TRANSFORMER (8 Sentences × 7 Live Grammar Forms)
// ===========================================================================
export const TRANSFORMER_SENTENCES: SentenceTransformerItem[] = [
  {
    id: 'tf-01',
    titleKo: '아침 커피 루틴 (3인칭 단수 · 불규칙 make)',
    levelLabel: '초등 A1',
    forms: {
      affirmative: {
        fullEn: 'She makes fresh coffee every morning.',
        korean: '그녀는 매일 아침 신선한 커피를 만든다.',
        ruleNoteKo: '3인칭 단수 주어(She) + 현재시제 일반동사에는 반드시 -s를 붙여 makes가 됩니다.',
        blocks: [
          { text: 'She', role: 'S', labelKo: '3인칭 단수 주어' },
          { text: 'makes', role: 'V', labelKo: '현재동사 (-s)' },
          { text: 'fresh coffee', role: 'O', labelKo: '목적어' },
          { text: 'every morning.', role: 'M', labelKo: '빈도·시간 부사구' },
        ],
      },
      negative: {
        fullEn: 'She does not make fresh coffee every morning.',
        korean: '그녀는 매일 아침 신선한 커피를 만들지 않는다.',
        ruleNoteKo: '일반동사 부정에는 조동사 does not이 출동하고, 본동사의 -s는 사라져 원형 make로 돌아갑니다.',
        blocks: [
          { text: 'She', role: 'S', labelKo: '주어' },
          { text: 'does not', role: 'Aux', labelKo: '부정 조동사' },
          { text: 'make', role: 'V', labelKo: '동사원형' },
          { text: 'fresh coffee', role: 'O', labelKo: '목적어' },
          { text: 'every morning.', role: 'M', labelKo: '시간 부사구' },
        ],
      },
      question: {
        fullEn: 'Does she make fresh coffee every morning?',
        korean: '그녀는 매일 아침 신선한 커피를 만드나요?',
        ruleNoteKo: '3인칭 단수 일반동사 의문문은 조동사 Does를 맨 앞에 세우고 동사는 원형 make를 씁니다.',
        blocks: [
          { text: 'Does', role: 'Aux', labelKo: '의문 조동사' },
          { text: 'she', role: 'S', labelKo: '주어' },
          { text: 'make', role: 'V', labelKo: '동사원형' },
          { text: 'fresh coffee', role: 'O', labelKo: '목적어' },
          { text: 'every morning?', role: 'M', labelKo: '시간 부사구' },
        ],
      },
      past: {
        fullEn: 'She made fresh coffee yesterday morning.',
        korean: '그녀는 어제 아침에 신선한 커피를 만들었다.',
        ruleNoteKo: '불규칙 동사 make의 과거형은 made이며, 과거 시점(yesterday morning)과 함께 씁니다.',
        blocks: [
          { text: 'She', role: 'S', labelKo: '주어' },
          { text: 'made', role: 'V', labelKo: '과거동사 (불규칙)' },
          { text: 'fresh coffee', role: 'O', labelKo: '목적어' },
          { text: 'yesterday morning.', role: 'M', labelKo: '과거 시점 부사구' },
        ],
      },
      future: {
        fullEn: 'She will make fresh coffee tomorrow morning.',
        korean: '그녀는 내일 아침에 신선한 커피를 만들 것이다.',
        ruleNoteKo: '미래 조동사 will 뒤에는 주어 인칭과 상관없이 항상 동사원형(make)이 옵니다.',
        blocks: [
          { text: 'She', role: 'S', labelKo: '주어' },
          { text: 'will', role: 'Aux', labelKo: '미래 조동사' },
          { text: 'make', role: 'V', labelKo: '동사원형' },
          { text: 'fresh coffee', role: 'O', labelKo: '목적어' },
          { text: 'tomorrow morning.', role: 'M', labelKo: '미래 시점 부사구' },
        ],
      },
      perfect: {
        fullEn: 'She has already made fresh coffee this morning.',
        korean: '그녀는 오늘 아침에 이미 신선한 커피를 만들어 두었다.',
        ruleNoteKo: '현재완료(has + p.p.)에 already를 넣어 ‘이미 만들어서 지금 커피가 준비된 상태’를 강조합니다.',
        blocks: [
          { text: 'She', role: 'S', labelKo: '주어' },
          { text: 'has already', role: 'Aux', labelKo: '완료 조동사 + 부사' },
          { text: 'made', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'fresh coffee', role: 'O', labelKo: '목적어' },
          { text: 'this morning.', role: 'M', labelKo: '현재 포함 시간구' },
        ],
      },
      passive: {
        fullEn: 'Fresh coffee is made by her every morning.',
        korean: '신선한 커피가 매일 아침 그녀에 의해 만들어진다.',
        ruleNoteKo: '목적어 fresh coffee(불가산 단수)가 주어로 이동하고, be(is) + p.p.(made) + by 목적격(her)으로 전환됩니다.',
        blocks: [
          { text: 'Fresh coffee', role: 'S', labelKo: '새 주어 (원래 목적어)' },
          { text: 'is', role: 'Aux', labelKo: '수동 be동사 (단수)' },
          { text: 'made', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'by her', role: 'M', labelKo: '행위자 (by + 목적격)' },
          { text: 'every morning.', role: 'M', labelKo: '시간 부사구' },
        ],
      },
    },
  },
  {
    id: 'tf-02',
    titleKo: '주말 여행 일기 (A-B-C 불규칙 write-wrote-written)',
    levelLabel: '초등 A2',
    forms: {
      affirmative: {
        fullEn: 'Minho writes a travel diary every weekend.',
        korean: '민호는 매주 주말 여행 일기를 쓴다.',
        ruleNoteKo: '반복되는 주말 습관은 단순현재 시제로 쓰며, 3인칭 단수 Minho에 맞춰 writes가 됩니다.',
        blocks: [
          { text: 'Minho', role: 'S', labelKo: '주어' },
          { text: 'writes', role: 'V', labelKo: '현재동사 (-s)' },
          { text: 'a travel diary', role: 'O', labelKo: '목적어' },
          { text: 'every weekend.', role: 'M', labelKo: '빈도 부사구' },
        ],
      },
      negative: {
        fullEn: 'Minho does not write a travel diary every weekend.',
        korean: '민호는 매주 주말 여행 일기를 쓰지는 않는다.',
        ruleNoteKo: 'does not이 3인칭 단수 표시를 대신 가져가므로 본동사는 반드시 원형 write로 되돌립니다.',
        blocks: [
          { text: 'Minho', role: 'S', labelKo: '주어' },
          { text: 'does not', role: 'Aux', labelKo: '부정 조동사' },
          { text: 'write', role: 'V', labelKo: '동사원형' },
          { text: 'a travel diary', role: 'O', labelKo: '목적어' },
          { text: 'every weekend.', role: 'M', labelKo: '빈도 부사구' },
        ],
      },
      question: {
        fullEn: 'Does Minho write a travel diary every weekend?',
        korean: '민호는 매주 주말 여행 일기를 쓰나요?',
        ruleNoteKo: 'Does + 주어(Minho) + 동사원형(write) 어순으로 의문문을 완성합니다.',
        blocks: [
          { text: 'Does', role: 'Aux', labelKo: '의문 조동사' },
          { text: 'Minho', role: 'S', labelKo: '주어' },
          { text: 'write', role: 'V', labelKo: '동사원형' },
          { text: 'a travel diary', role: 'O', labelKo: '목적어' },
          { text: 'every weekend?', role: 'M', labelKo: '빈도 부사구' },
        ],
      },
      past: {
        fullEn: 'Minho wrote a travel diary last weekend.',
        korean: '민호는 지난 주말에 여행 일기를 썼다.',
        ruleNoteKo: 'write의 과거형은 wrote이며, 지난 주말(last weekend)이라는 명확한 과거 시점과 결합합니다.',
        blocks: [
          { text: 'Minho', role: 'S', labelKo: '주어' },
          { text: 'wrote', role: 'V', labelKo: '과거동사 (불규칙)' },
          { text: 'a travel diary', role: 'O', labelKo: '목적어' },
          { text: 'last weekend.', role: 'M', labelKo: '과거 시점 부사구' },
        ],
      },
      future: {
        fullEn: 'Minho will write a travel diary next weekend.',
        korean: '민호는 다음 주말에 여행 일기를 쓸 것이다.',
        ruleNoteKo: '미래 의지·계획을 나타내는 will + 동사원형(write) 구조입니다.',
        blocks: [
          { text: 'Minho', role: 'S', labelKo: '주어' },
          { text: 'will', role: 'Aux', labelKo: '미래 조동사' },
          { text: 'write', role: 'V', labelKo: '동사원형' },
          { text: 'a travel diary', role: 'O', labelKo: '목적어' },
          { text: 'next weekend.', role: 'M', labelKo: '미래 시점 부사구' },
        ],
      },
      perfect: {
        fullEn: 'Minho has written a travel diary since 2023.',
        korean: '민호는 2023년부터 지금까지 계속 여행 일기를 써 오고 있다.',
        ruleNoteKo: 'write의 과거분사는 written(t가 2개!)이며, since + 시작 연도로 현재완료 ‘계속’ 용법을 만듭니다.',
        blocks: [
          { text: 'Minho', role: 'S', labelKo: '주어' },
          { text: 'has', role: 'Aux', labelKo: '완료 조동사' },
          { text: 'written', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'a travel diary', role: 'O', labelKo: '목적어' },
          { text: 'since 2023.', role: 'M', labelKo: '기점 부사구 (since)' },
        ],
      },
      passive: {
        fullEn: 'A travel diary is written by Minho every weekend.',
        korean: '여행 일기 한 편이 매주 주말 민호에 의해 쓰인다.',
        ruleNoteKo: '단수 목적어 a travel diary가 주어로 오고 is + written(p.p.) + by Minho로 수동태가 됩니다.',
        blocks: [
          { text: 'A travel diary', role: 'S', labelKo: '새 주어 (단수)' },
          { text: 'is', role: 'Aux', labelKo: '수동 be동사' },
          { text: 'written', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'by Minho', role: 'M', labelKo: '행위자' },
          { text: 'every weekend.', role: 'M', labelKo: '빈도 부사구' },
        ],
      },
    },
  },
  {
    id: 'tf-03',
    titleKo: '팀 앱 개발 프로젝트 (집합명사 단수 주어 · build-built-built)',
    levelLabel: '중등 B1',
    forms: {
      affirmative: {
        fullEn: 'Our team builds helpful apps every semester.',
        korean: '우리 팀은 매 학기 유용한 앱들을 만든다.',
        ruleNoteKo: 'Our team을 하나의 단위로 보아 3인칭 단수 취급하므로 builds가 옵니다.',
        blocks: [
          { text: 'Our team', role: 'S', labelKo: '단수 집합 주어' },
          { text: 'builds', role: 'V', labelKo: '현재동사 (-s)' },
          { text: 'helpful apps', role: 'O', labelKo: '복수 목적어' },
          { text: 'every semester.', role: 'M', labelKo: '시간 부사구' },
        ],
      },
      negative: {
        fullEn: 'Our team does not build helpful apps every semester.',
        korean: '우리 팀은 매 학기 유용한 앱들을 만들지는 않는다.',
        ruleNoteKo: '단수 주어 Our team에 맞춰 does not + 원형 build를 사용합니다.',
        blocks: [
          { text: 'Our team', role: 'S', labelKo: '주어' },
          { text: 'does not', role: 'Aux', labelKo: '부정 조동사' },
          { text: 'build', role: 'V', labelKo: '동사원형' },
          { text: 'helpful apps', role: 'O', labelKo: '목적어' },
          { text: 'every semester.', role: 'M', labelKo: '시간 부사구' },
        ],
      },
      question: {
        fullEn: 'Does our team build helpful apps every semester?',
        korean: '우리 팀은 매 학기 유용한 앱들을 만드나요?',
        ruleNoteKo: 'Does를 문두로 이동시켜 의문문을 만들며 동사는 원형 build입니다.',
        blocks: [
          { text: 'Does', role: 'Aux', labelKo: '의문 조동사' },
          { text: 'our team', role: 'S', labelKo: '주어' },
          { text: 'build', role: 'V', labelKo: '동사원형' },
          { text: 'helpful apps', role: 'O', labelKo: '목적어' },
          { text: 'every semester?', role: 'M', labelKo: '시간 부사구' },
        ],
      },
      past: {
        fullEn: 'Our team built helpful apps last semester.',
        korean: '우리 팀은 지난 학기에 유용한 앱들을 만들었다.',
        ruleNoteKo: 'build의 과거형은 d가 t로 바뀌는 불규칙형 built입니다.',
        blocks: [
          { text: 'Our team', role: 'S', labelKo: '주어' },
          { text: 'built', role: 'V', labelKo: '과거동사 (불규칙)' },
          { text: 'helpful apps', role: 'O', labelKo: '목적어' },
          { text: 'last semester.', role: 'M', labelKo: '과거 시점 부사구' },
        ],
      },
      future: {
        fullEn: 'Our team will build helpful apps next semester.',
        korean: '우리 팀은 다음 학기에 유용한 앱들을 만들 것이다.',
        ruleNoteKo: '미래 계획 표현으로 조동사 will + 동사원형 build를 사용합니다.',
        blocks: [
          { text: 'Our team', role: 'S', labelKo: '주어' },
          { text: 'will', role: 'Aux', labelKo: '미래 조동사' },
          { text: 'build', role: 'V', labelKo: '동사원형' },
          { text: 'helpful apps', role: 'O', labelKo: '목적어' },
          { text: 'next semester.', role: 'M', labelKo: '미래 시점 부사구' },
        ],
      },
      perfect: {
        fullEn: 'Our team has built helpful apps for three years.',
        korean: '우리 팀은 3년 동안 계속 유용한 앱들을 만들어 왔다.',
        ruleNoteKo: 'for + 숫자 기간(for three years)과 함께 has built를 써서 과거~현재 지속을 나타냅니다.',
        blocks: [
          { text: 'Our team', role: 'S', labelKo: '주어' },
          { text: 'has', role: 'Aux', labelKo: '완료 조동사' },
          { text: 'built', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'helpful apps', role: 'O', labelKo: '목적어' },
          { text: 'for three years.', role: 'M', labelKo: '기간 부사구 (for)' },
        ],
      },
      passive: {
        fullEn: 'Helpful apps are built by our team every semester.',
        korean: '유용한 앱들이 매 학기 우리 팀에 의해 만들어진다.',
        ruleNoteKo: '능동태의 단수 주어와 달리, 수동태의 새 주어 Helpful apps는 복수이므로 be동사가 are로 바뀝니다!',
        blocks: [
          { text: 'Helpful apps', role: 'S', labelKo: '새 주어 (복수!)' },
          { text: 'are', role: 'Aux', labelKo: '복수 수동 be동사' },
          { text: 'built', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'by our team', role: 'M', labelKo: '행위자' },
          { text: 'every semester.', role: 'M', labelKo: '시간 부사구' },
        ],
      },
    },
  },
  {
    id: 'tf-04',
    titleKo: '고궁 관광 사진 촬영 (복수 주어 · take-took-taken)',
    levelLabel: '중등 B1',
    forms: {
      affirmative: {
        fullEn: 'Tourists take thousands of photos at the palace.',
        korean: '관광객들은 그 고궁에서 수천 장의 사진을 찍는다.',
        ruleNoteKo: '복수 주어 Tourists에는 동사에 -s를 붙이지 않고 원형 그대로 take를 씁니다.',
        blocks: [
          { text: 'Tourists', role: 'S', labelKo: '복수 주어' },
          { text: 'take', role: 'V', labelKo: '현재동사 (복수)' },
          { text: 'thousands of photos', role: 'O', labelKo: '목적어 (수량 표현)' },
          { text: 'at the palace.', role: 'M', labelKo: '장소 부사구 (at)' },
        ],
      },
      negative: {
        fullEn: 'Tourists do not take thousands of photos at the palace.',
        korean: '관광객들은 그 고궁에서 수천 장의 사진을 찍지 않는다.',
        ruleNoteKo: '복수 주어이므로 does not이 아니라 do not + 동사원형 take를 사용합니다.',
        blocks: [
          { text: 'Tourists', role: 'S', labelKo: '복수 주어' },
          { text: 'do not', role: 'Aux', labelKo: '복수 부정 조동사' },
          { text: 'take', role: 'V', labelKo: '동사원형' },
          { text: 'thousands of photos', role: 'O', labelKo: '목적어' },
          { text: 'at the palace.', role: 'M', labelKo: '장소 부사구' },
        ],
      },
      question: {
        fullEn: 'Do tourists take thousands of photos at the palace?',
        korean: '관광객들은 그 고궁에서 수천 장의 사진을 찍나요?',
        ruleNoteKo: '복수 일반동사 의문문은 Do + 복수 주어 + 동사원형 순으로 배열합니다.',
        blocks: [
          { text: 'Do', role: 'Aux', labelKo: '복수 의문 조동사' },
          { text: 'tourists', role: 'S', labelKo: '복수 주어' },
          { text: 'take', role: 'V', labelKo: '동사원형' },
          { text: 'thousands of photos', role: 'O', labelKo: '목적어' },
          { text: 'at the palace?', role: 'M', labelKo: '장소 부사구' },
        ],
      },
      past: {
        fullEn: 'Tourists took thousands of photos at the palace yesterday.',
        korean: '관광객들은 어제 그 고궁에서 수천 장의 사진을 찍었다.',
        ruleNoteKo: 'take의 과거형은 took이며, 어제(yesterday) 일어난 단일 과거 사실을 기술합니다.',
        blocks: [
          { text: 'Tourists', role: 'S', labelKo: '주어' },
          { text: 'took', role: 'V', labelKo: '과거동사 (불규칙)' },
          { text: 'thousands of photos', role: 'O', labelKo: '목적어' },
          { text: 'at the palace yesterday.', role: 'M', labelKo: '장소 + 과거 시점' },
        ],
      },
      future: {
        fullEn: 'Tourists will take thousands of photos at the palace tomorrow.',
        korean: '관광객들은 내일 그 고궁에서 수천 장의 사진을 찍을 것이다.',
        ruleNoteKo: '미래 예측을 나타낼 때 will + 동사원형 take를 사용합니다.',
        blocks: [
          { text: 'Tourists', role: 'S', labelKo: '주어' },
          { text: 'will', role: 'Aux', labelKo: '미래 조동사' },
          { text: 'take', role: 'V', labelKo: '동사원형' },
          { text: 'thousands of photos', role: 'O', labelKo: '목적어' },
          { text: 'at the palace tomorrow.', role: 'M', labelKo: '장소 + 미래 시점' },
        ],
      },
      perfect: {
        fullEn: 'Tourists have taken thousands of photos at the palace today.',
        korean: '관광객들은 오늘 지금까지 그 고궁에서 수천 장의 사진을 찍었다.',
        ruleNoteKo: '복수 주어이므로 have + taken(p.p.)을 쓰며, 아직 끝나지 않은 오늘(today)은 현재완료와 호응합니다.',
        blocks: [
          { text: 'Tourists', role: 'S', labelKo: '복수 주어' },
          { text: 'have', role: 'Aux', labelKo: '복수 완료 조동사' },
          { text: 'taken', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'thousands of photos', role: 'O', labelKo: '목적어' },
          { text: 'at the palace today.', role: 'M', labelKo: '장소 + 현재 포함 시점' },
        ],
      },
      passive: {
        fullEn: 'Thousands of photos are taken by tourists at the palace.',
        korean: '수천 장의 사진이 그 고궁에서 관광객들에 의해 찍힌다.',
        ruleNoteKo: '복수 주어 Thousands of photos에 맞춰 are + taken(p.p.)으로 수동태를 구성합니다.',
        blocks: [
          { text: 'Thousands of photos', role: 'S', labelKo: '새 주어 (복수)' },
          { text: 'are', role: 'Aux', labelKo: '복수 수동 be동사' },
          { text: 'taken', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'by tourists', role: 'M', labelKo: '행위자' },
          { text: 'at the palace.', role: 'M', labelKo: '장소 부사구' },
        ],
      },
    },
  },
  {
    id: 'tf-05',
    titleKo: '셰프의 수제 파스타 (규칙 변화 prepare-prepared-prepared)',
    levelLabel: '중등 B2',
    forms: {
      affirmative: {
        fullEn: 'The chef prepares handmade pasta for the guests.',
        korean: '그 셰프는 손님들을 위해 수제 파스타를 준비한다.',
        ruleNoteKo: '3인칭 단수 주어(The chef)에 규칙동사 prepare + -s → prepares가 됩니다.',
        blocks: [
          { text: 'The chef', role: 'S', labelKo: '단수 주어' },
          { text: 'prepares', role: 'V', labelKo: '현재동사 (-s)' },
          { text: 'handmade pasta', role: 'O', labelKo: '불가산 목적어' },
          { text: 'for the guests.', role: 'M', labelKo: '대상 부사구 (for)' },
        ],
      },
      negative: {
        fullEn: 'The chef does not prepare handmade pasta for the guests.',
        korean: '그 셰프는 손님들을 위해 수제 파스타를 준비하지 않는다.',
        ruleNoteKo: 'does not 뒤에 prepare의 원형을 유지합니다.',
        blocks: [
          { text: 'The chef', role: 'S', labelKo: '주어' },
          { text: 'does not', role: 'Aux', labelKo: '부정 조동사' },
          { text: 'prepare', role: 'V', labelKo: '동사원형' },
          { text: 'handmade pasta', role: 'O', labelKo: '목적어' },
          { text: 'for the guests.', role: 'M', labelKo: '대상 부사구' },
        ],
      },
      question: {
        fullEn: 'Does the chef prepare handmade pasta for the guests?',
        korean: '그 셰프는 손님들을 위해 수제 파스타를 준비하나요?',
        ruleNoteKo: 'Does를 문장 맨 앞으로 보내고 주동사는 원형 prepare로 둡니다.',
        blocks: [
          { text: 'Does', role: 'Aux', labelKo: '의문 조동사' },
          { text: 'the chef', role: 'S', labelKo: '주어' },
          { text: 'prepare', role: 'V', labelKo: '동사원형' },
          { text: 'handmade pasta', role: 'O', labelKo: '목적어' },
          { text: 'for the guests?', role: 'M', labelKo: '대상 부사구' },
        ],
      },
      past: {
        fullEn: 'The chef prepared handmade pasta for the guests last night.',
        korean: '그 셰프는 어젯밤 손님들을 위해 수제 파스타를 준비했다.',
        ruleNoteKo: 'e로 끝나는 규칙동사 prepare에는 -d만 붙여 과거형 prepared를 만듭니다.',
        blocks: [
          { text: 'The chef', role: 'S', labelKo: '주어' },
          { text: 'prepared', role: 'V', labelKo: '과거동사 (-d)' },
          { text: 'handmade pasta', role: 'O', labelKo: '목적어' },
          { text: 'for the guests last night.', role: 'M', labelKo: '대상 + 과거 시점' },
        ],
      },
      future: {
        fullEn: 'The chef will prepare handmade pasta for the guests tonight.',
        korean: '그 셰프는 오늘 밤 손님들을 위해 수제 파스타를 준비할 것이다.',
        ruleNoteKo: '미래 예정 동작은 will + 동사원형 prepare로 표현합니다.',
        blocks: [
          { text: 'The chef', role: 'S', labelKo: '주어' },
          { text: 'will', role: 'Aux', labelKo: '미래 조동사' },
          { text: 'prepare', role: 'V', labelKo: '동사원형' },
          { text: 'handmade pasta', role: 'O', labelKo: '목적어' },
          { text: 'for the guests tonight.', role: 'M', labelKo: '대상 + 미래 시점' },
        ],
      },
      perfect: {
        fullEn: 'The chef has just prepared handmade pasta for the guests.',
        korean: '그 셰프는 방금 손님들을 위해 수제 파스타를 막 준비해 끝냈다.',
        ruleNoteKo: 'has + just + p.p.(prepared)로 방금 막 끝난 현재완료 ‘완료’ 용법을 나타냅니다.',
        blocks: [
          { text: 'The chef', role: 'S', labelKo: '주어' },
          { text: 'has just', role: 'Aux', labelKo: '완료 조동사 + 부사' },
          { text: 'prepared', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'handmade pasta', role: 'O', labelKo: '목적어' },
          { text: 'for the guests.', role: 'M', labelKo: '대상 부사구' },
        ],
      },
      passive: {
        fullEn: 'Handmade pasta is prepared by the chef for the guests.',
        korean: '수제 파스타가 손님들을 위해 그 셰프에 의해 준비된다.',
        ruleNoteKo: '불가산 명사 Handmade pasta는 단수 취급하므로 is + prepared + by the chef가 됩니다.',
        blocks: [
          { text: 'Handmade pasta', role: 'S', labelKo: '새 주어 (불가산 단수)' },
          { text: 'is', role: 'Aux', labelKo: '단수 수동 be동사' },
          { text: 'prepared', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'by the chef', role: 'M', labelKo: '행위자' },
          { text: 'for the guests.', role: 'M', labelKo: '대상 부사구' },
        ],
      },
    },
  },
  {
    id: 'tf-06',
    titleKo: '태양광 청정 에너지 (과학 지문 · 복수 주어 → 단수 수동태)',
    levelLabel: '고등 B2',
    forms: {
      affirmative: {
        fullEn: 'Solar panels generate clean electricity during the day.',
        korean: '태양광 패널들은 낮 동안 청정 전기를 생산한다.',
        ruleNoteKo: '과학적 일반 원리는 단순현재 시제로 쓰며, 복수 주어 Solar panels에 원형 generate를 맞춥니다.',
        blocks: [
          { text: 'Solar panels', role: 'S', labelKo: '복수 주어' },
          { text: 'generate', role: 'V', labelKo: '현재동사 (복수)' },
          { text: 'clean electricity', role: 'O', labelKo: '불가산 목적어' },
          { text: 'during the day.', role: 'M', labelKo: '기간 부사구 (during)' },
        ],
      },
      negative: {
        fullEn: 'Solar panels do not generate clean electricity during the day.',
        korean: '태양광 패널들은 낮 동안 청정 전기를 생산하지 않는다.',
        ruleNoteKo: '복수 주어이므로 do not + 원형 generate로 부정문을 만듭니다.',
        blocks: [
          { text: 'Solar panels', role: 'S', labelKo: '복수 주어' },
          { text: 'do not', role: 'Aux', labelKo: '복수 부정 조동사' },
          { text: 'generate', role: 'V', labelKo: '동사원형' },
          { text: 'clean electricity', role: 'O', labelKo: '목적어' },
          { text: 'during the day.', role: 'M', labelKo: '기간 부사구' },
        ],
      },
      question: {
        fullEn: 'Do solar panels generate clean electricity during the day?',
        korean: '태양광 패널들은 낮 동안 청정 전기를 생산하나요?',
        ruleNoteKo: '복수 주어 일반동사 의문문은 Do + 주어 + 동사원형 구조입니다.',
        blocks: [
          { text: 'Do', role: 'Aux', labelKo: '의문 조동사' },
          { text: 'solar panels', role: 'S', labelKo: '복수 주어' },
          { text: 'generate', role: 'V', labelKo: '동사원형' },
          { text: 'clean electricity', role: 'O', labelKo: '목적어' },
          { text: 'during the day?', role: 'M', labelKo: '기간 부사구' },
        ],
      },
      past: {
        fullEn: 'Solar panels generated clean electricity yesterday afternoon.',
        korean: '태양광 패널들은 어제 오후 청정 전기를 생산했다.',
        ruleNoteKo: '과거의 특정 시점(yesterday afternoon)과 규칙 과거형 generated를 결합합니다.',
        blocks: [
          { text: 'Solar panels', role: 'S', labelKo: '주어' },
          { text: 'generated', role: 'V', labelKo: '과거동사 (-d)' },
          { text: 'clean electricity', role: 'O', labelKo: '목적어' },
          { text: 'yesterday afternoon.', role: 'M', labelKo: '과거 시점 부사구' },
        ],
      },
      future: {
        fullEn: 'Solar panels will generate clean electricity tomorrow.',
        korean: '태양광 패널들은 내일 청정 전기를 생산할 것이다.',
        ruleNoteKo: '미래 사실 예측으로 will + 동사원형 generate를 씁니다.',
        blocks: [
          { text: 'Solar panels', role: 'S', labelKo: '주어' },
          { text: 'will', role: 'Aux', labelKo: '미래 조동사' },
          { text: 'generate', role: 'V', labelKo: '동사원형' },
          { text: 'clean electricity', role: 'O', labelKo: '목적어' },
          { text: 'tomorrow.', role: 'M', labelKo: '미래 시점 부사' },
        ],
      },
      perfect: {
        fullEn: 'Solar panels have generated clean electricity all week.',
        korean: '태양광 패널들은 이번 주 내내 청정 전기를 생산해 왔다.',
        ruleNoteKo: '복수 주어에 have + generated를 써서 이번 주 내내(all week) 이어진 결과를 보여 줍니다.',
        blocks: [
          { text: 'Solar panels', role: 'S', labelKo: '복수 주어' },
          { text: 'have', role: 'Aux', labelKo: '완료 조동사' },
          { text: 'generated', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'clean electricity', role: 'O', labelKo: '목적어' },
          { text: 'all week.', role: 'M', labelKo: '현재 포함 기간구' },
        ],
      },
      passive: {
        fullEn: 'Clean electricity is generated by solar panels during the day.',
        korean: '청정 전기가 낮 동안 태양광 패널들에 의해 생산된다.',
        ruleNoteKo: '능동 주어는 복수(panels)였지만, 수동 주어 Clean electricity는 불가산 단수이므로 is generated가 됩니다!',
        blocks: [
          { text: 'Clean electricity', role: 'S', labelKo: '새 주어 (불가산 단수!)' },
          { text: 'is', role: 'Aux', labelKo: '단수 수동 be동사' },
          { text: 'generated', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'by solar panels', role: 'M', labelKo: '행위자' },
          { text: 'during the day.', role: 'M', labelKo: '기간 부사구' },
        ],
      },
    },
  },
  {
    id: 'tf-07',
    titleKo: '기후 데이터 분석 (학술 지문 · 목적 to부정사 포함)',
    levelLabel: '고등 C1',
    forms: {
      affirmative: {
        fullEn: 'Researchers analyze massive datasets to predict climate trends.',
        korean: '연구자들은 기후 추세를 예측하기 위해 방대한 데이터셋을 분석한다.',
        ruleNoteKo: '복수 주어 Researchers + 동사 analyze 뒤에 목적을 나타내는 to부정사구(to predict ~)가 붙었습니다.',
        blocks: [
          { text: 'Researchers', role: 'S', labelKo: '복수 주어' },
          { text: 'analyze', role: 'V', labelKo: '현재동사' },
          { text: 'massive datasets', role: 'O', labelKo: '복수 목적어' },
          { text: 'to predict climate trends.', role: 'M', labelKo: '목적의 to부정사구' },
        ],
      },
      negative: {
        fullEn: 'Researchers do not analyze massive datasets to predict climate trends.',
        korean: '연구자들은 기후 추세를 예측하기 위해 방대한 데이터셋을 분석하지는 않는다.',
        ruleNoteKo: '복수 일반동사 부정문은 do not + 원형 analyze이며 뒤의 to부정사구는 그대로 유지됩니다.',
        blocks: [
          { text: 'Researchers', role: 'S', labelKo: '주어' },
          { text: 'do not', role: 'Aux', labelKo: '부정 조동사' },
          { text: 'analyze', role: 'V', labelKo: '동사원형' },
          { text: 'massive datasets', role: 'O', labelKo: '목적어' },
          { text: 'to predict climate trends.', role: 'M', labelKo: '목적 부사구' },
        ],
      },
      question: {
        fullEn: 'Do researchers analyze massive datasets to predict climate trends?',
        korean: '연구자들은 기후 추세를 예측하기 위해 방대한 데이터셋을 분석하나요?',
        ruleNoteKo: '문장이 길어도 본동사(analyze)만 보고 문두에 Do를 세우면 완벽한 의문문이 됩니다.',
        blocks: [
          { text: 'Do', role: 'Aux', labelKo: '의문 조동사' },
          { text: 'researchers', role: 'S', labelKo: '주어' },
          { text: 'analyze', role: 'V', labelKo: '동사원형' },
          { text: 'massive datasets', role: 'O', labelKo: '목적어' },
          { text: 'to predict climate trends?', role: 'M', labelKo: '목적 부사구' },
        ],
      },
      past: {
        fullEn: 'Researchers analyzed massive datasets to predict climate trends last year.',
        korean: '연구자들은 작년에 기후 추세를 예측하기 위해 방대한 데이터셋을 분석했다.',
        ruleNoteKo: '본동사만 과거형 analyzed로 바꾸고, 수식어인 to predict는 시제 변화 없이 그대로 둡니다.',
        blocks: [
          { text: 'Researchers', role: 'S', labelKo: '주어' },
          { text: 'analyzed', role: 'V', labelKo: '과거동사 (-d)' },
          { text: 'massive datasets', role: 'O', labelKo: '목적어' },
          { text: 'to predict climate trends last year.', role: 'M', labelKo: '목적구 + 과거 시점' },
        ],
      },
      future: {
        fullEn: 'Researchers will analyze massive datasets to predict climate trends next year.',
        korean: '연구자들은 내년에 기후 추세를 예측하기 위해 방대한 데이터셋을 분석할 것이다.',
        ruleNoteKo: '조동사 will + 본동사 원형 analyze 구조로 미래 연구 계획을 표현합니다.',
        blocks: [
          { text: 'Researchers', role: 'S', labelKo: '주어' },
          { text: 'will', role: 'Aux', labelKo: '미래 조동사' },
          { text: 'analyze', role: 'V', labelKo: '동사원형' },
          { text: 'massive datasets', role: 'O', labelKo: '목적어' },
          { text: 'to predict climate trends next year.', role: 'M', labelKo: '목적구 + 미래 시점' },
        ],
      },
      perfect: {
        fullEn: 'Researchers have analyzed massive datasets to predict climate trends for a decade.',
        korean: '연구자들은 10년 동안 기후 추세를 예측하기 위해 방대한 데이터셋을 분석해 왔다.',
        ruleNoteKo: 'for a decade(10년간)와 결합해 have analyzed로 과거에서 현재까지 누적된 연구를 나타냅니다.',
        blocks: [
          { text: 'Researchers', role: 'S', labelKo: '복수 주어' },
          { text: 'have', role: 'Aux', labelKo: '완료 조동사' },
          { text: 'analyzed', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'massive datasets', role: 'O', labelKo: '목적어' },
          { text: 'to predict climate trends for a decade.', role: 'M', labelKo: '목적구 + 기간 부사구' },
        ],
      },
      passive: {
        fullEn: 'Massive datasets are analyzed by researchers to predict climate trends.',
        korean: '방대한 데이터셋이 기후 추세를 예측하기 위해 연구자들에 의해 분석된다.',
        ruleNoteKo: '학술 논문에서는 행위자보다 연구 대상(Massive datasets)을 강조하는 수동태(are analyzed)가 매우 자주 쓰입니다.',
        blocks: [
          { text: 'Massive datasets', role: 'S', labelKo: '새 주어 (복수)' },
          { text: 'are', role: 'Aux', labelKo: '복수 수동 be동사' },
          { text: 'analyzed', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'by researchers', role: 'M', labelKo: '행위자' },
          { text: 'to predict climate trends.', role: 'M', labelKo: '목적 부사구' },
        ],
      },
    },
  },
  {
    id: 'tf-08',
    titleKo: '위원회 안건 심사 (수능 1등급 · every + 단수명사 수동 전환)',
    levelLabel: '수능 C1',
    forms: {
      affirmative: {
        fullEn: 'The committee reviews every proposal before the final vote.',
        korean: '위원회는 최종 투표 전에 모든 제안서를 심사한다.',
        ruleNoteKo: '단일 의결 기구로서 The committee는 단수 취급해 reviews를 쓰고, every 뒤에는 단수명사 proposal이 옵니다.',
        blocks: [
          { text: 'The committee', role: 'S', labelKo: '단수 기관 주어' },
          { text: 'reviews', role: 'V', labelKo: '현재동사 (-s)' },
          { text: 'every proposal', role: 'O', labelKo: 'every + 단수 목적어' },
          { text: 'before the final vote.', role: 'M', labelKo: '시간 부사구' },
        ],
      },
      negative: {
        fullEn: 'The committee does not review every proposal before the final vote.',
        korean: '위원회는 최종 투표 전에 모든 제안서를 심사하지는 않는다.',
        ruleNoteKo: 'not ~ every는 ‘모든 ~을 다 하는 것은 아니다’라는 부분 부정 뉘앙스를 형성합니다.',
        blocks: [
          { text: 'The committee', role: 'S', labelKo: '주어' },
          { text: 'does not', role: 'Aux', labelKo: '부정 조동사 (부분 부정)' },
          { text: 'review', role: 'V', labelKo: '동사원형' },
          { text: 'every proposal', role: 'O', labelKo: '목적어' },
          { text: 'before the final vote.', role: 'M', labelKo: '시간 부사구' },
        ],
      },
      question: {
        fullEn: 'Does the committee review every proposal before the final vote?',
        korean: '위원회는 최종 투표 전에 모든 제안서를 심사하나요?',
        ruleNoteKo: '3인칭 단수 주어 The committee에 맞춰 Does + 주어 + 원형 review 어순을 취합니다.',
        blocks: [
          { text: 'Does', role: 'Aux', labelKo: '의문 조동사' },
          { text: 'the committee', role: 'S', labelKo: '주어' },
          { text: 'review', role: 'V', labelKo: '동사원형' },
          { text: 'every proposal', role: 'O', labelKo: '목적어' },
          { text: 'before the final vote?', role: 'M', labelKo: '시간 부사구' },
        ],
      },
      past: {
        fullEn: 'The committee reviewed every proposal before the final vote yesterday.',
        korean: '위원회는 어제 최종 투표 전에 모든 제안서를 심사했다.',
        ruleNoteKo: '어제(yesterday) 종료된 심사 절차이므로 단순과거 reviewed를 사용합니다.',
        blocks: [
          { text: 'The committee', role: 'S', labelKo: '주어' },
          { text: 'reviewed', role: 'V', labelKo: '과거동사 (-ed)' },
          { text: 'every proposal', role: 'O', labelKo: '목적어' },
          { text: 'before the final vote yesterday.', role: 'M', labelKo: '시간 + 과거 시점' },
        ],
      },
      future: {
        fullEn: 'The committee will review every proposal before the final vote tomorrow.',
        korean: '위원회는 내일 최종 투표 전에 모든 제안서를 심사할 것이다.',
        ruleNoteKo: '예정된 공식 절차를 나타낼 때 will + 동사원형 review를 사용합니다.',
        blocks: [
          { text: 'The committee', role: 'S', labelKo: '주어' },
          { text: 'will', role: 'Aux', labelKo: '미래 조동사' },
          { text: 'review', role: 'V', labelKo: '동사원형' },
          { text: 'every proposal', role: 'O', labelKo: '목적어' },
          { text: 'before the final vote tomorrow.', role: 'M', labelKo: '시간 + 미래 시점' },
        ],
      },
      perfect: {
        fullEn: 'The committee has already reviewed every proposal before the final vote.',
        korean: '위원회는 최종 투표를 앞두고 이미 모든 제안서의 심사를 마쳤다.',
        ruleNoteKo: 'has already reviewed를 써서 투표 전 사전 검토가 현재 시점에 이미 완료되었음을 강조합니다.',
        blocks: [
          { text: 'The committee', role: 'S', labelKo: '주어' },
          { text: 'has already', role: 'Aux', labelKo: '완료 조동사 + 부사' },
          { text: 'reviewed', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'every proposal', role: 'O', labelKo: '목적어' },
          { text: 'before the final vote.', role: 'M', labelKo: '시간 부사구' },
        ],
      },
      passive: {
        fullEn: 'Every proposal is reviewed by the committee before the final vote.',
        korean: '모든 제안서는 최종 투표 전에 위원회에 의해 심사된다.',
        ruleNoteKo: 'Every + 단수명사(Every proposal)가 주어가 될 때도 반드시 단수 취급하므로 is reviewed가 정답입니다!',
        blocks: [
          { text: 'Every proposal', role: 'S', labelKo: '새 주어 (every = 단수!)' },
          { text: 'is', role: 'Aux', labelKo: '단수 수동 be동사' },
          { text: 'reviewed', role: 'V', labelKo: '과거분사 (p.p.)' },
          { text: 'by the committee', role: 'M', labelKo: '행위자' },
          { text: 'before the final vote.', role: 'M', labelKo: '시간 부사구' },
        ],
      },
    },
  },
];

// ===========================================================================
// 12-TENSE VISUAL MATRIX (3 Time Axes × 4 Aspects)
// ===========================================================================
export const TENSE_MATRIX_12: TenseCellItem[] = [
  // --- PAST (4 Aspects) ---
  {
    id: 'past-simple',
    timeAxis: 'past',
    aspectAxis: 'simple',
    nameEn: 'Past Simple',
    nameKo: '과거 단순',
    formula: 'S + V-ed (불규칙 과거형)',
    nuanceKo: '현재와 완전히 단절된 과거의 한 시점에 일어난 사건·사실을 사진 한 장처럼 찍어 말합니다.',
    exampleEn: 'She finished her first novel in 2022.',
    exampleKo: '그녀는 2022년에 첫 소설을 완성했다.',
    koreanTrapKo: 'yesterday, ago, last week, in 2022처럼 명확한 과거 시점이 있으면 현재완료(has finished) 대신 반드시 과거 단순을 써야 합니다.',
    timelineMarker: {
      startPct: 24,
      endPct: 24,
      isRange: false,
      isOngoing: false,
    },
  },
  {
    id: 'past-progressive',
    timeAxis: 'past',
    aspectAxis: 'progressive',
    nameEn: 'Past Progressive',
    nameKo: '과거 진행',
    formula: 'S + was / were + V-ing',
    nuanceKo: '과거의 특정 순간에 한창 진행 중이던 배경 장면을 생생한 영상처럼 보여 줍니다.',
    exampleEn: 'I was walking across the bridge when the fireworks began.',
    exampleKo: '불꽃놀이가 시작됐을 때 나는 다리를 건너고 있었다.',
    koreanTrapKo: '두 과거 사건이 겹칠 때 ‘길게 깔린 배경 동작’은 was/were -ing, 그 한가운데 ‘툭 끼어든 순간 사건’은 과거 단순으로 구분하세요.',
    timelineMarker: {
      startPct: 18,
      endPct: 32,
      isRange: true,
      isOngoing: true,
    },
  },
  {
    id: 'past-perfect',
    timeAxis: 'past',
    aspectAxis: 'perfect',
    nameEn: 'Past Perfect',
    nameKo: '과거 완료 (대과거)',
    formula: 'S + had + p.p.',
    nuanceKo: '과거의 기준 시점보다 한 단계 더 이전에 이미 끝났거나 이어져 온 사건(과거 속의 과거)을 표시합니다.',
    exampleEn: 'The train had already left by the time we reached the platform.',
    exampleKo: '우리가 승강장에 도착했을 때 기차는 이미 떠난 뒤였다.',
    koreanTrapKo: '단독 문장에 아무 기준점 없이 had + p.p.를 남발하지 마세요! 반드시 비교할 ‘기준 과거 시점(reached)’이 문맥에 있어야 합니다.',
    timelineMarker: {
      startPct: 8,
      endPct: 28,
      isRange: true,
      isOngoing: false,
    },
  },
  {
    id: 'past-perfect-progressive',
    timeAxis: 'past',
    aspectAxis: 'perfect-progressive',
    nameEn: 'Past Perfect Progressive',
    nameKo: '과거 완료 진행',
    formula: 'S + had been + V-ing',
    nuanceKo: '더 이른 과거부터 과거의 기준 순간까지 쉬지 않고 계속 이어져 온 동작의 ‘과정과 피로감·지속성’을 강조합니다.',
    exampleEn: 'They had been driving for six hours before they finally saw the ocean.',
    exampleKo: '그들은 마침내 바다를 보기 전까지 6시간 내내 운전해 오고 있었다.',
    koreanTrapKo: '결과(횟수·완료)는 had + p.p.(had written 3 pages), 시간의 흐름과 진행 과정 강조(for 6 hours)는 had been -ing로 구분합니다.',
    timelineMarker: {
      startPct: 8,
      endPct: 30,
      isRange: true,
      isOngoing: true,
    },
  },

  // --- PRESENT (4 Aspects) ---
  {
    id: 'present-simple',
    timeAxis: 'present',
    aspectAxis: 'simple',
    nameEn: 'Present Simple',
    nameKo: '현재 단순',
    formula: 'S + V / V-s(es)',
    nuanceKo: '지금 이 1초가 아니라 어제도·오늘도·내일도 반복되는 습관, 직업, 과학적 진리, 확정된 시간표를 말합니다.',
    exampleEn: 'Water boils at 100 degrees Celsius, and the museum opens at nine.',
    exampleKo: '물은 섭씨 100도에서 끓고, 그 박물관은 9시에 문을 연다.',
    koreanTrapKo: '“지금 뭐 해?”에 현재 단순(“I study”)으로 답하면 “나는 평소 공부하는 사람이야”가 됩니다. 지금 당장의 동작은 현재 진행(I am studying)을 쓰세요.',
    timelineMarker: {
      startPct: 34,
      endPct: 66,
      isRange: true,
      isOngoing: false,
    },
  },
  {
    id: 'present-progressive',
    timeAxis: 'present',
    aspectAxis: 'progressive',
    nameEn: 'Present Progressive',
    nameKo: '현재 진행',
    formula: 'S + am / are / is + V-ing',
    nuanceKo: '바로 지금 눈앞에서 벌어지는 동작, 요즘 일시적으로 진행 중인 프로젝트, 또는 이미 약속된 가까운 미래 일정을 표현합니다.',
    exampleEn: 'Look! The barista is pouring latte art right now.',
    exampleKo: '봐! 바리스타가 바로 지금 라떼 아트를 붓고 있어.',
    koreanTrapKo: 'know, believe, own, belong, love 같은 상태동사는 “알고 있는 중이다”라고 해도 원칙적으로 be -ing를 쓰지 않습니다.',
    timelineMarker: {
      startPct: 44,
      endPct: 56,
      isRange: true,
      isOngoing: true,
    },
  },
  {
    id: 'present-perfect',
    timeAxis: 'present',
    aspectAxis: 'perfect',
    nameEn: 'Present Perfect',
    nameKo: '현재 완료',
    formula: 'S + have / has + p.p.',
    nuanceKo: '과거에 일어난 일이 다리처럼 현재(NOW)까지 연결되어 지금의 경험·상태·결과에 살아 있음을 보여 줍니다.',
    exampleEn: 'I have read that essay three times, and I still love its ending.',
    exampleKo: '나는 그 에세이를 세 번 읽었고(경험), 여전히 그 결말이 좋다.',
    koreanTrapKo: '한국어 해석이 “~했다”라고 해서 yesterday나 last year를 붙이면 즉시 오답! 과거 시점 부사가 없는 ‘현재와의 연결’에만 쓰세요.',
    timelineMarker: {
      startPct: 22,
      endPct: 50,
      isRange: true,
      isOngoing: false,
    },
  },
  {
    id: 'present-perfect-progressive',
    timeAxis: 'present',
    aspectAxis: 'perfect-progressive',
    nameEn: 'Present Perfect Progressive',
    nameKo: '현재 완료 진행',
    formula: 'S + have / has been + V-ing',
    nuanceKo: '과거에 시작된 동작이 지금 이 순간에도 멈추지 않고 계속 진행 중임을 생동감 있게 강조합니다.',
    exampleEn: 'She has been practicing the violin since early this morning.',
    exampleKo: '그녀는 오늘 이른 아침부터 지금까지 계속 바이올린을 연습하고 있다.',
    koreanTrapKo: '한국어 “3시간째 기다리고 있어”를 “I am waiting for 3 hours”로 직역하기 쉬운데, 과거~현재 기간(for/since)이 붙으면 반드시 have been -ing를 써야 합니다!',
    timelineMarker: {
      startPct: 20,
      endPct: 54,
      isRange: true,
      isOngoing: true,
    },
  },

  // --- FUTURE (4 Aspects) ---
  {
    id: 'future-simple',
    timeAxis: 'future',
    aspectAxis: 'simple',
    nameEn: 'Future Simple',
    nameKo: '미래 단순',
    formula: 'S + will / be going to + V',
    nuanceKo: '앞으로 일어날 사실 예측, 말하는 순간의 즉흥 결심(will), 또는 미리 세워 둔 계획·조짐(be going to)을 말합니다.',
    exampleEn: 'Don’t worry—I will send you the updated schedule right after lunch.',
    exampleKo: '걱정 마세요—점심 직후에 수정된 일정표를 보내 드릴게요.',
    koreanTrapKo: 'when/if/before/as soon as가 이끄는 시간·조건 부사절 안에서는 미래 의미라도 will을 절대 쓰지 않고 현재시제로 대신합니다.',
    timelineMarker: {
      startPct: 76,
      endPct: 76,
      isRange: false,
      isOngoing: false,
    },
  },
  {
    id: 'future-progressive',
    timeAxis: 'future',
    aspectAxis: 'progressive',
    nameEn: 'Future Progressive',
    nameKo: '미래 진행',
    formula: 'S + will be + V-ing',
    nuanceKo: '미래의 특정 시점을 카메라로 비추었을 때 그때 한창 진행 중일 장면이나, 정중하게 상대의 일정을 물을 때 씁니다.',
    exampleEn: 'This time tomorrow, we will be flying over the Pacific Ocean.',
    exampleKo: '내일 이맘때면 우리는 태평양 상공을 날고 있을 것이다.',
    koreanTrapKo: '“Will you use your laptop?”은 요청처럼 들릴 수 있지만, “Will you be using your laptop?”은 상대 계획을 정중히 묻는 원어민 고급 표현입니다.',
    timelineMarker: {
      startPct: 68,
      endPct: 84,
      isRange: true,
      isOngoing: true,
    },
  },
  {
    id: 'future-perfect',
    timeAxis: 'future',
    aspectAxis: 'perfect',
    nameEn: 'Future Perfect',
    nameKo: '미래 완료',
    formula: 'S + will have + p.p.',
    nuanceKo: '미래의 특정 기준 시점(by next Friday 등)이 도래했을 때 어떤 일이 이미 완료되어 있을 것임을 내다봅니다.',
    exampleEn: 'By the end of this month, I will have memorized 500 academic words.',
    exampleKo: '이번 달 말쯤이면 나는 학술 어휘 500개를 다 암기해 두었을 것이다.',
    koreanTrapKo: 'by + 미래 시점(by 2030, by tomorrow night)이 보이면 단순 미래(will finish)보다 미래 완료(will have finished)가 수능·토익의 핵심 정답 패턴입니다.',
    timelineMarker: {
      startPct: 50,
      endPct: 78,
      isRange: true,
      isOngoing: false,
    },
  },
  {
    id: 'future-perfect-progressive',
    timeAxis: 'future',
    aspectAxis: 'perfect-progressive',
    nameEn: 'Future Perfect Progressive',
    nameKo: '미래 완료 진행',
    formula: 'S + will have been + V-ing',
    nuanceKo: '미래의 특정 기준 시점이 되었을 때 어떤 동작을 ‘총 얼마 동안 계속해 오고 있는 셈이 되는지’ 누적 지속 시간을 강조합니다.',
    exampleEn: 'By next September, our mentor will have been teaching English for twenty years.',
    exampleKo: '내년 9월이 되면 우리 멘토님은 20년째 계속 영어를 가르쳐 오고 계신 셈이 된다.',
    koreanTrapKo: '‘by + 미래 기준점’과 ‘for + 누적 기간’이 한 문장에 동시에 등장하면 미래 완료 진행(will have been -ing)의 결정적 단서입니다.',
    timelineMarker: {
      startPct: 50,
      endPct: 82,
      isRange: true,
      isOngoing: true,
    },
  },
];

// ===========================================================================
// VERIFIED EMBED-PERMITTED YOUTUBE GRAMMAR MASTERCLASSES
// ===========================================================================
export const GRAMMAR_YOUTUBE_VIDEOS: CuratedExtraVideo[] = [
  {
    videoId: 'HWjRVkTNoNM',
    title: 'Learn All 12 English Verb Tenses — Complete Lesson',
    channel: 'JForrest English',
    badgeKo: '12시제 완전 정복 · 원어민 직강',
    summaryKo:
      '과거·현재·미래 × 단순·진행·완료·완료진행 12가지 영어 시제의 공식과 실전 회화 뉘앙스 차이를 차분하고 명쾌한 예문으로 한 번에 정리해 주는 핵심 강의입니다.',
  },
  {
    videoId: 'Z7jiJpW_-C0',
    title: 'Master 12 English Tenses In Just 10 Minutes',
    channel: "Let's Talk",
    badgeKo: '10분 초압축 · 타임라인 복습',
    summaryKo:
      '12시제 전체 지도를 10분 만에 빠르게 스캔하고 싶은 학습자를 위한 초압축 마스터 영상입니다. 위의 12-Tense Visual Matrix와 함께 비교하며 복습하면 시제 감각이 즉각 고정됩니다.',
  },
  {
    videoId: 'O9S70oJAivI',
    title: 'Learn all the Tenses in English: Complete Course',
    channel: 'Learn English with Rebecca · engVid',
    badgeKo: '기초~고급 풀코스 · 칠판 판서',
    summaryKo:
      'engVid 대표 강사 Rebecca가 기초 시제부터 완료진행과 실수하기 쉬운 상태동사·시간 부사 함정까지 화이트보드 도표로 꼼꼼하게 짚어 주는 완결형 문법 코스입니다.',
  },
];
