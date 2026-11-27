import type {
  AcademicEssayPrompt,
  CuratedExtraVideo,
  HighSchoolPassage,
} from '../types/academy.ts';

export interface AcademicConnectorChip {
  labelEn: string;
  meaningKo: string;
  categoryKo: '추가' | '인과' | '대조' | '예시' | '결론';
}

export const HIGH_SCHOOL_PASSAGES: HighSchoolPassage[] = [
  /* =========================================================================
   * HS01 — [인지심리학 · B2] The Paradox of Choice
   * ========================================================================= */
  {
    id: 'hs01',
    number: 1,
    cefrLevel: 'b2',
    csatGradeTag: '고2 모의고사 · 1등급',
    topicBadge: '인지심리학',
    titleEn: 'The Paradox of Choice',
    titleKo: '선택의 역설과 의사결정 피로',
    estimatedMin: 8,
    sentences: [
      {
        id: 'hs01-s1',
        english:
          'Modern consumers often assume that having more options automatically leads to greater freedom and higher satisfaction.',
        slashBroken:
          'Modern consumers / often assume / that having more options / automatically leads to / greater freedom and higher satisfaction.',
        korean:
          '현대 소비자들은 더 많은 선택지를 가지는 것이 자동적으로 더 큰 자유와 더 높은 만족으로 이어진다고 흔히 가정한다.',
        segments: [
          { text: 'Modern consumers', role: 'S', labelKo: '주어(S)' },
          { text: 'often', role: 'M', labelKo: '빈도부사' },
          { text: 'assume', role: 'V', labelKo: '동사(V)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'having more options', role: 'S', labelKo: '동명사 주어(S′)' },
          { text: 'automatically', role: 'M', labelKo: '부사 수식' },
          { text: 'leads to', role: 'V', labelKo: '동사구(V′)' },
          { text: 'greater freedom and higher satisfaction.', role: 'O', labelKo: '전치사 목적어(O′)' },
        ],
      },
      {
        id: 'hs01-s2',
        english:
          'However, research in cognitive psychology reveals that an excessive array of alternatives frequently induces what scholars call decision fatigue.',
        slashBroken:
          'However, / research in cognitive psychology / reveals / that an excessive array of alternatives / frequently induces / what scholars call decision fatigue.',
        korean:
          '그러나 인지심리학 연구는 지나치게 많은 대안의 배열이 학자들이 의사결정 피로라고 부르는 현상을 빈번히 유발한다는 것을 밝혀낸다.',
        segments: [
          { text: 'However,', role: 'CONN', labelKo: '역접 연결어' },
          { text: 'research', role: 'S', labelKo: '주어(S)' },
          { text: 'in cognitive psychology', role: 'M', labelKo: '전치사구 수식' },
          { text: 'reveals', role: 'V', labelKo: '동사(V)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'an excessive array of alternatives', role: 'S', labelKo: '종속절 주어(S′)' },
          { text: 'frequently', role: 'M', labelKo: '부사 수식' },
          { text: 'induces', role: 'V', labelKo: '종속절 동사(V′)' },
          { text: 'what scholars call decision fatigue.', role: 'O', labelKo: 'what 관계대명사절(O′)' },
        ],
      },
      {
        id: 'hs01-s3',
        english:
          'Faced with dozens of nearly identical products, shoppers find it increasingly difficult to evaluate trade-offs without worrying about making the wrong choice.',
        slashBroken:
          'Faced with dozens of nearly identical products, / shoppers find it / increasingly difficult / to evaluate trade-offs / without worrying about making the wrong choice.',
        korean:
          '거의 동일한 수십 개의 제품에 직면하면, 구매자들은 잘못된 선택을 할까 걱정하지 않고 장단점을 평가하는 것이 점점 더 어렵다고 느낀다.',
        segments: [
          { text: 'Faced with dozens of nearly identical products,', role: 'M', labelKo: '수동 분사구문' },
          { text: 'shoppers', role: 'S', labelKo: '주어(S)' },
          { text: 'find', role: 'V', labelKo: '5형식 동사(V)' },
          { text: 'it', role: 'O', labelKo: '가목적어(it)' },
          { text: 'increasingly difficult', role: 'C', labelKo: '목적격 보어(C)' },
          { text: 'to evaluate trade-offs', role: 'O', labelKo: '진목적어(to V)' },
          { text: 'without worrying about making the wrong choice.', role: 'M', labelKo: '부대상황 수식' },
        ],
      },
      {
        id: 'hs01-s4',
        english:
          'Not only does this mental overload delay actual purchasing decisions, but it also lowers post-purchase contentment by magnifying imagined regret.',
        slashBroken:
          'Not only does this mental overload delay / actual purchasing decisions, / but it also lowers / post-purchase contentment / by magnifying imagined regret.',
        korean:
          '이러한 정신적 과부하는 실제 구매 결정을 지연시킬 뿐만 아니라, 상상 속 후회를 증폭시킴으로써 구매 후 만족감마저 떨어뜨린다.',
        segments: [
          { text: 'Not only', role: 'CONN', labelKo: '부정어 문두 강조' },
          { text: 'does', role: 'V', labelKo: '도치 조동사' },
          { text: 'this mental overload', role: 'S', labelKo: '주어(S)' },
          { text: 'delay', role: 'V', labelKo: '본동사(V)' },
          { text: 'actual purchasing decisions,', role: 'O', labelKo: '목적어(O)' },
          { text: 'but', role: 'CONN', labelKo: '상관접속사' },
          { text: 'it', role: 'S', labelKo: '주어(S)' },
          { text: 'also', role: 'M', labelKo: '부사' },
          { text: 'lowers', role: 'V', labelKo: '동사(V)' },
          { text: 'post-purchase contentment', role: 'O', labelKo: '목적어(O)' },
          { text: 'by magnifying imagined regret.', role: 'M', labelKo: '수단(by -ing)' },
        ],
      },
      {
        id: 'hs01-s5',
        english:
          'In a famous field experiment, customers who encountered a display of twenty-four jam varieties were far less likely to buy a jar than those presented with only six.',
        slashBroken:
          'In a famous field experiment, / customers who encountered a display of twenty-four jam varieties / were far less likely to buy a jar / than those presented with only six.',
        korean:
          '한 유명한 현장 실험에서, 24가지 잼이 진열된 매대를 마주한 고객들은 단 6가지만 제시받은 고객들보다 잼을 한 병 살 가능성이 훨씬 더 낮았다.',
        segments: [
          { text: 'In a famous field experiment,', role: 'M', labelKo: '상황 부사구' },
          { text: 'customers', role: 'S', labelKo: '주어(S)' },
          { text: 'who encountered a display of twenty-four jam varieties', role: 'M', labelKo: '주격 관계절' },
          { text: 'were', role: 'V', labelKo: '동사(V)' },
          { text: 'far less likely to buy a jar', role: 'C', labelKo: '보어(비교급 강조)' },
          { text: 'than', role: 'CONN', labelKo: '비교 접속사' },
          { text: 'those presented with only six.', role: 'M', labelKo: 'those + 과거분사 수식' },
        ],
      },
      {
        id: 'hs01-s6',
        english:
          'Ultimately, true autonomy depends not on maximizing the sheer volume of choices, but on curating meaningful options that align with our priorities.',
        slashBroken:
          'Ultimately, / true autonomy depends / not on maximizing the sheer volume of choices, / but on curating meaningful options / that align with our priorities.',
        korean:
          '궁극적으로 진정한 자율성은 선택지의 단순한 양을 극대화하는 데 달려 있는 것이 아니라, 우리의 우선순위에 부합하는 의미 있는 선택지를 선별하는 데 달려 있다.',
        segments: [
          { text: 'Ultimately,', role: 'M', labelKo: '결론 부사' },
          { text: 'true autonomy', role: 'S', labelKo: '주어(S)' },
          { text: 'depends', role: 'V', labelKo: '동사(V)' },
          { text: 'not on maximizing the sheer volume of choices,', role: 'M', labelKo: 'not A 구조' },
          { text: 'but on curating meaningful options', role: 'M', labelKo: 'but B 구조' },
          { text: 'that align with our priorities.', role: 'M', labelKo: '주격 관계절' },
        ],
      },
    ],
    syntaxNotes: [
      {
        expression: 'Faced with ~, shoppers find it increasingly difficult to evaluate ~',
        grammarPointKo: '수동 분사구문 + 가목적어 it — 진목적어 to V',
        explanationKo:
          'face는 타동사이므로 "~에 직면하여"는 (Being) Faced with로 씁니다. 또한 5형식 동사 find 뒤에 목적어가 긴 to부정사일 때는 가목적어 it을 세우고 진목적어 to evaluate를 뒤로 보냅니다.',
      },
      {
        expression: 'Not only does this mental overload delay ~, but it also lowers ~',
        grammarPointKo: '부정어 문두 도치 + not only A but also B',
        explanationKo:
          '부정어구 Not only가 문장 맨 앞에 오면 [조동사 does + 주어 + 동사원형 delay] 어순으로 도치됩니다. 수능 어법에서 도치 누락을 묻는 최빈출 패턴입니다.',
      },
      {
        expression: 'what scholars call decision fatigue',
        grammarPointKo: '선행사를 포함한 관계대명사 what',
        explanationKo:
          '앞에 선행사가 없고 뒤 절에서 call의 목적어가 비어 있으므로 명사절을 이끄는 관계대명사 what(~하는 것)이 쓰였습니다.',
      },
      {
        expression: 'those presented with only six',
        grammarPointKo: '지시대명사 those + 과거분사 후치수식',
        explanationKo:
          '비교 구문에서 앞선 복수명사 customers의 반복을 피하기 위해 those를 쓰고, "제시받은"이라는 수동 의미로 과거분사 presented가 뒤에서 수식합니다.',
      },
    ],
    keyVocab: [
      { word: 'excessive', phonetic: '/ɪkˈses.ɪv/', meaningKo: '지나친, 과도한' },
      { word: 'induce', phonetic: '/ɪnˈdjuːs/', meaningKo: '유발하다, 야기하다' },
      { word: 'trade-off', phonetic: '/ˈtreɪd.ɒf/', meaningKo: '상충관계, (득실의) 균형점' },
      { word: 'overload', phonetic: '/ˈəʊ.və.ləʊd/', meaningKo: '과부하, 과적' },
      { word: 'magnify', phonetic: '/ˈmæɡ.nɪ.faɪ/', meaningKo: '확대하다, 증폭시키다' },
      { word: 'autonomy', phonetic: '/ɔːˈtɒn.ə.mi/', meaningKo: '자율성, 자주권' },
    ],
    questions: [
      {
        id: 'hs01-q1',
        questionType: '빈칸 추론',
        questionKo: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
        stimulusBox:
          'Ultimately, true autonomy depends not on maximizing the sheer volume of choices, but on ________.',
        options: [
          'eliminating all emotional factors from buying habits',
          'curating meaningful options that align with our priorities',
          'comparing every available brand before reaching a verdict',
          'delegating everyday purchasing decisions to retail experts',
          'expanding store displays to attract hesitant shoppers',
        ],
        answer: 'curating meaningful options that align with our priorities',
        explanationKo:
          'not A but B 구조에서 A가 "선택지의 단순한 양을 극대화하는 것(maximizing the sheer volume)"이므로, 빈칸 B에는 양이 아닌 "질적 선별과 우선순위 부합"이 들어가야 합니다. ① 감정 배제, ③ 모든 브랜드 비교(오히려 피로 가중), ④ 전문가 위임, ⑤ 진열 확대는 모두 글의 요지와 반대되거나 무관합니다.',
        grammarTag: 'not A but B 대조 추론',
      },
      {
        id: 'hs01-q2',
        questionType: '주제·요지',
        questionKo: '윗글의 요지로 가장 적절한 것을 고르시오.',
        options: [
          '선택지가 과도하게 많으면 오히려 결정 피로와 후회가 커져 만족도가 낮아진다.',
          '소비자 만족을 높이려면 매장의 상품 진열 방식을 주기적으로 바꿔야 한다.',
          '인지심리학 실험은 실제 시장에서의 소비자 행동을 예측하는 데 한계가 있다.',
          '구매 후 후회를 줄이려면 충동구매 대신 장기적인 가격 비교가 필수적이다.',
          '현대 사회의 자율성은 개인의 소득 수준과 소비 여력에 비례하여 증가한다.',
        ],
        answer: '선택지가 과도하게 많으면 오히려 결정 피로와 후회가 커져 만족도가 낮아진다.',
        explanationKo:
          '글 전체가 "선택지가 많을수록 좋다"는 통념을 뒤집고(However), 과도한 대안이 의사결정 피로(decision fatigue)와 구매 지연, 상상 속 후회 증폭을 낳는다는 잼 실험 근거로 뒷받침하고 있습니다. ②~⑤는 지문에 없는 과잉 일반화 또는 반대 내용입니다.',
        grammarTag: '통념 비판(However) 요지 파악',
      },
      {
        id: 'hs01-q3',
        questionType: '어법성 판단',
        questionKo: '다음 밑줄 친 ①~⑤ 중 어법상 틀린 것을 고르시오.',
        stimulusBox:
          'Research reveals that an excessive array of alternatives induces ① what scholars call decision fatigue. ② Facing with dozens of nearly identical products, shoppers find ③ it increasingly difficult to evaluate trade-offs. Not only ④ does this mental overload delay purchasing decisions, but customers also buy less than those ⑤ presented with only six options.',
        options: [
          '① what',
          '② Facing',
          '③ it',
          '④ does',
          '⑤ presented',
        ],
        answer: '② Facing',
        explanationKo:
          '② Facing은 틀렸습니다. 타동사 face가 전치사 with와 함께 쓰여 "~에 직면하여"라는 수동 분사구문을 만들 때는 과거분사 Faced with로 써야 합니다(능동으로 쓰려면 with 없이 Facing dozens of ~). ① 선행사 없는 불완전 절이므로 what 정답, ③ 가목적어 it 정답, ④ Not only 문두 도치 does 정답, ⑤ those를 수식하는 수동 과거분사 presented 정답입니다.',
        grammarTag: '분사구문 능동/수동 (Faced with)',
      },
    ],
  },

  /* =========================================================================
   * HS02 — [생태학 · B2] Keystone Species and Trophic Cascades
   * ========================================================================= */
  {
    id: 'hs02',
    number: 2,
    cefrLevel: 'b2',
    csatGradeTag: '고2 모의고사 · 1등급',
    topicBadge: '생태학',
    titleEn: 'Keystone Species and Trophic Cascades',
    titleKo: '핵심종과 생태계 연쇄효과',
    estimatedMin: 8,
    sentences: [
      {
        id: 'hs02-s1',
        english:
          'Although every organism contributes to the web of life, ecologists have discovered that certain species exert a disproportionately large influence on their habitats relative to their abundance.',
        slashBroken:
          'Although every organism contributes / to the web of life, / ecologists have discovered / that certain species exert / a disproportionately large influence / on their habitats / relative to their abundance.',
        korean:
          '모든 생물이 생명의 그물망에 기여하지만, 생태학자들은 특정 종들이 개체 수에 비해 서식지에 불균형적으로 큰 영향력을 행사한다는 사실을 발견했다.',
        segments: [
          { text: 'Although', role: 'CONN', labelKo: '양보 접속사' },
          { text: 'every organism', role: 'S', labelKo: '종속절 주어' },
          { text: 'contributes', role: 'V', labelKo: '종속절 동사' },
          { text: 'to the web of life,', role: 'M', labelKo: '전치사구' },
          { text: 'ecologists', role: 'S', labelKo: '주어(S)' },
          { text: 'have discovered', role: 'V', labelKo: '현재완료 동사(V)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'certain species', role: 'S', labelKo: '명사절 주어(S′)' },
          { text: 'exert', role: 'V', labelKo: '명사절 동사(V′)' },
          { text: 'a disproportionately large influence', role: 'O', labelKo: '목적어(O′)' },
          { text: 'on their habitats relative to their abundance.', role: 'M', labelKo: '범위·비교 수식어구' },
        ],
      },
      {
        id: 'hs02-s2',
        english:
          'Known as keystone species, these vital organisms regulate the populations of other creatures, thereby maintaining the structural balance of an entire ecosystem.',
        slashBroken:
          'Known as keystone species, / these vital organisms regulate / the populations of other creatures, / thereby maintaining / the structural balance of an entire ecosystem.',
        korean:
          '핵심종으로 알려진 이 필수적인 생물들은 다른 생물들의 개체 수를 조절하며, 그로 인해 생태계 전체의 구조적 균형을 유지한다.',
        segments: [
          { text: 'Known as keystone species,', role: 'M', labelKo: '수동 분사구문' },
          { text: 'these vital organisms', role: 'S', labelKo: '주어(S)' },
          { text: 'regulate', role: 'V', labelKo: '동사(V)' },
          { text: 'the populations of other creatures,', role: 'O', labelKo: '목적어(O)' },
          { text: 'thereby maintaining the structural balance of an entire ecosystem.', role: 'M', labelKo: '결과 분사구문' },
        ],
      },
      {
        id: 'hs02-s3',
        english:
          'A classic illustration occurred in Yellowstone National Park, where the reintroduction of gray wolves in 1995 triggered a dramatic ecological chain reaction.',
        slashBroken:
          'A classic illustration occurred / in Yellowstone National Park, / where the reintroduction of gray wolves in 1995 / triggered / a dramatic ecological chain reaction.',
        korean:
          '고전적인 사례는 옐로스톤 국립공원에서 일어났는데, 그곳에서 1995년 회색늑대의 재도입이 극적인 생태계 연쇄 반응을 촉발했다.',
        segments: [
          { text: 'A classic illustration', role: 'S', labelKo: '주어(S)' },
          { text: 'occurred', role: 'V', labelKo: '자동사(V)' },
          { text: 'in Yellowstone National Park,', role: 'M', labelKo: '장소 부사구' },
          { text: 'where', role: 'CONN', labelKo: '계속적 관계부사' },
          { text: 'the reintroduction of gray wolves in 1995', role: 'S', labelKo: '관계절 주어' },
          { text: 'triggered', role: 'V', labelKo: '관계절 동사' },
          { text: 'a dramatic ecological chain reaction.', role: 'O', labelKo: '관계절 목적어' },
        ],
      },
      {
        id: 'hs02-s4',
        english:
          'Once wolves returned, elk herds began avoiding open riverbanks where they were easily hunted, which allowed willow and aspen saplings to regenerate rapidly.',
        slashBroken:
          'Once wolves returned, / elk herds began avoiding open riverbanks / where they were easily hunted, / which allowed willow and aspen saplings / to regenerate rapidly.',
        korean:
          '일단 늑대가 돌아오자, 엘크 무리는 쉽게 사냥당하는 탁 트인 강둑을 피하기 시작했고, 이는 버드나무와 사시나무 묘목들이 빠르게 재생되도록 해주었다.',
        segments: [
          { text: 'Once', role: 'CONN', labelKo: '시간 접속사' },
          { text: 'wolves returned,', role: 'M', labelKo: '시간 부사절' },
          { text: 'elk herds', role: 'S', labelKo: '주어(S)' },
          { text: 'began avoiding', role: 'V', labelKo: '동사 + 동명사' },
          { text: 'open riverbanks', role: 'O', labelKo: '목적어(O)' },
          { text: 'where they were easily hunted,', role: 'M', labelKo: '관계부사절' },
          { text: 'which allowed willow and aspen saplings to regenerate rapidly.', role: 'M', labelKo: '계속적 which절(앞절 선행사)' },
        ],
      },
      {
        id: 'hs02-s5',
        english:
          'As lush vegetation recovered along the streams, songbirds and beavers flourished, and the newly built beaver dams even stabilized river channels against erosion.',
        slashBroken:
          'As lush vegetation recovered along the streams, / songbirds and beavers flourished, / and the newly built beaver dams / even stabilized river channels / against erosion.',
        korean:
          '개울을 따라 울창한 초목이 회복되자 명금류와 비버가 번성했고, 새로 지어진 비버 댐은 심지어 침식으로부터 강줄기를 안정시키기까지 했다.',
        segments: [
          { text: 'As', role: 'CONN', labelKo: '비례·시간 접속사' },
          { text: 'lush vegetation recovered along the streams,', role: 'M', labelKo: '종속절' },
          { text: 'songbirds and beavers', role: 'S', labelKo: '주어(S)' },
          { text: 'flourished,', role: 'V', labelKo: '동사(V)' },
          { text: 'and', role: 'CONN', labelKo: '등위접속사' },
          { text: 'the newly built beaver dams', role: 'S', labelKo: '주어(S)' },
          { text: 'even', role: 'M', labelKo: '강조 부사' },
          { text: 'stabilized', role: 'V', labelKo: '동사(V)' },
          { text: 'river channels', role: 'O', labelKo: '목적어(O)' },
          { text: 'against erosion.', role: 'M', labelKo: '전치사구' },
        ],
      },
      {
        id: 'hs02-s6',
        english:
          'It is precisely this top-down ripple effect, termed a trophic cascade, that demonstrates why conserving a single predator can restore an entire landscape.',
        slashBroken:
          'It is precisely this top-down ripple effect, / termed a trophic cascade, / that demonstrates / why conserving a single predator / can restore an entire landscape.',
        korean:
          '영양 연쇄효과라고 불리는 바로 이 하향식 파급효과야말로 단 하나의 포식자를 보전하는 일이 왜 전체 경관을 복원할 수 있는지를 보여준다.',
        segments: [
          { text: 'It is', role: 'PLAIN', labelKo: '강조구문 틀' },
          { text: 'precisely this top-down ripple effect,', role: 'S', labelKo: '강조된 주어' },
          { text: 'termed a trophic cascade,', role: 'M', labelKo: '삽입 과거분사구' },
          { text: 'that', role: 'CONN', labelKo: '강조구문 that' },
          { text: 'demonstrates', role: 'V', labelKo: '동사(V)' },
          { text: 'why conserving a single predator can restore an entire landscape.', role: 'O', labelKo: '간접의문문 목적어(O)' },
        ],
      },
    ],
    syntaxNotes: [
      {
        expression: 'Known as keystone species, ~, thereby maintaining ~',
        grammarPointKo: '수동 분사구문 & 결과 분사구문 (thereby -ing)',
        explanationKo:
          '문두의 Known as는 주어 these vital organisms가 "알려져 있는" 수동 관계이므로 과거분사를 썼고, 문미의 thereby maintaining은 앞 절의 결과로 이어지는 능동 분사구문입니다.',
      },
      {
        expression: ', which allowed willow and aspen saplings to regenerate rapidly',
        grammarPointKo: '계속적 용법 관계대명사 which (앞 절 전체 선행사)',
        explanationKo:
          '콤마 뒤의 which는 앞 절 내용 전체(엘크가 강둑을 피한 것)를 선행사로 받습니다. that은 계속적 용법으로 쓸 수 없으며, allow + O + to V 5형식 구조와 결합했습니다.',
      },
      {
        expression: 'Yellowstone National Park, where the reintroduction ~ triggered ~',
        grammarPointKo: '계속적 용법 관계부사 where',
        explanationKo:
          '뒤에 주어·동사·목적어가 모두 갖춘 완전한 절이 이어지므로 관계대명사 which가 아니라 관계부사 where(= and there)를 사용해야 합니다.',
      },
      {
        expression: 'It is precisely this top-down ripple effect ~ that demonstrates ~',
        grammarPointKo: 'It is ~ that 강조구문',
        explanationKo:
          '주어(precisely this top-down ripple effect)를 It is와 that 사이에 넣어 강조한 구문입니다. 중간에 termed a trophic cascade가 삽입되어 구조가 길어졌지만 that 이하 동사 demonstrates와 단수 수일치합니다.',
      },
    ],
    keyVocab: [
      { word: 'disproportionately', phonetic: '/ˌdɪs.prəˈpɔː.ʃə.nət.li/', meaningKo: '불균형적으로, 유난히 크게' },
      { word: 'abundance', phonetic: '/əˈbʌn.dəns/', meaningKo: '풍부함, 개체 수' },
      { word: 'regulate', phonetic: '/ˈreɡ.jʊ.leɪt/', meaningKo: '조절하다, 통제하다' },
      { word: 'trigger', phonetic: '/ˈtrɪɡ.ər/', meaningKo: '촉발하다, 유발하다' },
      { word: 'regenerate', phonetic: '/rɪˈdʒen.ə.reɪt/', meaningKo: '재생되다, 다시 자라다' },
      { word: 'erosion', phonetic: '/ɪˈrəʊ.ʒən/', meaningKo: '침식, 부식' },
    ],
    questions: [
      {
        id: 'hs02-q1',
        questionType: '주제·요지',
        questionKo: '윗글의 주제로 가장 적절한 것을 고르시오.',
        options: [
          'how keystone predators restore ecosystems through trophic cascades',
          'why beaver dams increase flooding risks in national parks',
          'the difficulty of measuring wildlife populations in mountainous terrain',
          'reasons why elk migration patterns vary with seasonal rainfall',
          'conflicts between agricultural expansion and wolf conservation policies',
        ],
        answer: 'how keystone predators restore ecosystems through trophic cascades',
        explanationKo:
          '지문은 핵심종(keystone species)의 개념을 정의한 뒤, 옐로스톤 회색늑대 재도입이 초식동물 행동→식생 회복→비버 번성→강줄기 안정으로 이어지는 영양 연쇄효과(trophic cascade)를 통해 생태계 전체를 복원하는 원리를 설명하고 있습니다.',
        grammarTag: '핵심 개념 + 사례 통합 주제 파악',
      },
      {
        id: 'hs02-q2',
        questionType: '문장 삽입',
        questionKo: '글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳을 고르시오.',
        stimulusBox:
          '[주어진 문장]\nAs lush vegetation recovered along the streams, songbirds and beavers flourished, and the newly built beaver dams even stabilized river channels against erosion.\n\nAlthough every organism contributes to the web of life, certain species exert a disproportionately large influence. ( ① ) Known as keystone species, these vital organisms maintain the structural balance of an entire ecosystem. ( ② ) A classic illustration occurred in Yellowstone National Park, where the reintroduction of gray wolves triggered a dramatic chain reaction. ( ③ ) Once wolves returned, elk herds began avoiding open riverbanks, which allowed willow and aspen saplings to regenerate rapidly. ( ④ ) It is precisely this top-down ripple effect, termed a trophic cascade, that demonstrates why conserving a single predator can restore an entire landscape. ( ⑤ )',
        options: ['①', '②', '③', '④', '⑤'],
        answer: '④',
        explanationKo:
          '주어진 문장의 "lush vegetation recovered along the streams(개울가 울창한 초목 회복)"는 ④ 앞 문장의 "open riverbanks ... willow and aspen saplings to regenerate rapidly(강둑 버드나무·사시나무 묘목의 빠른 재생)"를 직접 이어받습니다. 또한 주어진 문장의 "stabilized river channels(강줄기 안정)"가 ④ 뒤 문장의 "restore an entire landscape(전체 경관 복원)"로 자연스럽게 귀결됩니다.',
        grammarTag: '어휘 연쇄(saplings → vegetation) 및 인과 단서',
      },
      {
        id: 'hs02-q3',
        questionType: '요약문 완성',
        questionKo: '윗글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?',
        stimulusBox:
          'Although keystone species may be small in number, their presence can (A) ________ an entire ecosystem by initiating a chain reaction that (B) ________ both animal behavior and physical landscapes.',
        options: [
          '(A) stabilize — (B) alters',
          '(A) isolate — (B) restricts',
          '(A) destabilize — (B) mirrors',
          '(A) simplify — (B) eliminates',
          '(A) exhaust — (B) preserves',
        ],
        answer: '(A) stabilize — (B) alters',
        explanationKo:
          '핵심종은 개체 수가 적어도 생태계 전체의 균형을 유지·안정시키며(stabilize), 늑대 사례처럼 초식동물의 행동과 강줄기 같은 물리적 경관을 모두 변화시키는(alters) 연쇄 반응을 일으킵니다. 나머지 선지는 핵심종의 긍정적·변혁적 역할과 어긋납니다.',
        grammarTag: '요약문 핵심 동사 패러프레이징',
      },
    ],
  },

  /* =========================================================================
   * HS03 — [AI·미래교육 · B2] Human Creativity in the Age of Generative AI
   * ========================================================================= */
  {
    id: 'hs03',
    number: 3,
    cefrLevel: 'b2',
    csatGradeTag: '고2·고3 학평 · 1등급',
    topicBadge: 'AI·미래교육',
    titleEn: 'Human Creativity in the Age of Generative AI',
    titleKo: '생성형 AI 시대의 인간 창의성',
    estimatedMin: 8,
    sentences: [
      {
        id: 'hs03-s1',
        english:
          'As generative artificial intelligence becomes capable of drafting essays, composing melodies, and illustrating stories within seconds, educators are forced to reconsider what truly defines human creativity.',
        slashBroken:
          'As generative artificial intelligence becomes capable of / drafting essays, composing melodies, and illustrating stories within seconds, / educators are forced to reconsider / what truly defines human creativity.',
        korean:
          '생성형 인공지능이 몇 초 만에 에세이를 초안하고 멜로디를 작곡하며 이야기에 삽화를 그릴 수 있게 되면서, 교육자들은 진정으로 인간 창의성을 정의하는 것이 무엇인지 재고할 수밖에 없게 되었다.',
        segments: [
          { text: 'As', role: 'CONN', labelKo: '배경·변화 접속사' },
          { text: 'generative artificial intelligence', role: 'S', labelKo: '종속절 주어' },
          { text: 'becomes', role: 'V', labelKo: '종속절 동사' },
          { text: 'capable of drafting essays, composing melodies, and illustrating stories within seconds,', role: 'C', labelKo: '보어(동명사 병렬)' },
          { text: 'educators', role: 'S', labelKo: '주어(S)' },
          { text: 'are forced to reconsider', role: 'V', labelKo: '수동 동사구(V)' },
          { text: 'what truly defines human creativity.', role: 'O', labelKo: '간접의문문 목적어(O)' },
        ],
      },
      {
        id: 'hs03-s2',
        english:
          'Because machine models generate outputs by recombining statistical patterns extracted from existing datasets, they excel at rapid synthesis yet lack lived experience and genuine intention.',
        slashBroken:
          'Because machine models generate outputs / by recombining statistical patterns / extracted from existing datasets, / they excel at rapid synthesis / yet lack lived experience and genuine intention.',
        korean:
          '기계 모델들은 기존 데이터셋에서 추출된 통계적 패턴을 재조합함으로써 결과물을 생성하기 때문에, 빠른 종합에는 뛰어나지만 실제 살아낸 경험과 진정한 의도가 결여되어 있다.',
        segments: [
          { text: 'Because', role: 'CONN', labelKo: '이유 접속사' },
          { text: 'machine models generate outputs by recombining statistical patterns extracted from existing datasets,', role: 'M', labelKo: '이유 부사절(과거분사 수식)' },
          { text: 'they', role: 'S', labelKo: '주어(S)' },
          { text: 'excel at', role: 'V', labelKo: '동사구1(V1)' },
          { text: 'rapid synthesis', role: 'O', labelKo: '목적어1(O1)' },
          { text: 'yet', role: 'CONN', labelKo: '역접 접속사' },
          { text: 'lack', role: 'V', labelKo: '동사2(V2)' },
          { text: 'lived experience and genuine intention.', role: 'O', labelKo: '목적어2(O2)' },
        ],
      },
      {
        id: 'hs03-s3',
        english:
          'When students rely uncritically on automated drafts, they risk bypassing the productive struggle through which original arguments and personal voice gradually emerge.',
        slashBroken:
          'When students rely uncritically / on automated drafts, / they risk bypassing / the productive struggle / through which original arguments and personal voice gradually emerge.',
        korean:
          '학생들이 자동 생성된 초안에 무비판적으로 의존할 때, 그들은 독창적 논증과 개인의 목소리가 서서히 피어나는 생산적 고투의 과정을 건너뛸 위험을 무릅쓰게 된다.',
        segments: [
          { text: 'When', role: 'CONN', labelKo: '시간·조건 접속사' },
          { text: 'students rely uncritically on automated drafts,', role: 'M', labelKo: '종속절' },
          { text: 'they', role: 'S', labelKo: '주어(S)' },
          { text: 'risk', role: 'V', labelKo: '동사(V)' },
          { text: 'bypassing the productive struggle', role: 'O', labelKo: '동명사 목적어(O)' },
          { text: 'through which original arguments and personal voice gradually emerge.', role: 'M', labelKo: '전치사+관계대명사절' },
        ],
      },
      {
        id: 'hs03-s4',
        english:
          'Rather than banning digital tools altogether, forward-thinking schools are designing assignments that require learners to question AI-generated claims, verify sources, and defend their own reasoning.',
        slashBroken:
          'Rather than banning digital tools altogether, / forward-thinking schools are designing assignments / that require learners / to question AI-generated claims, verify sources, and defend their own reasoning.',
        korean:
          '디지털 도구를 전면 금지하기보다는, 미래지향적인 학교들은 학습자들에게 AI가 생성한 주장에 의문을 제기하고 출처를 검증하며 스스로의 논리를 옹호하도록 요구하는 과제를 설계하고 있다.',
        segments: [
          { text: 'Rather than banning digital tools altogether,', role: 'M', labelKo: '대조 부사구(Rather than -ing)' },
          { text: 'forward-thinking schools', role: 'S', labelKo: '주어(S)' },
          { text: 'are designing', role: 'V', labelKo: '진행형 동사(V)' },
          { text: 'assignments', role: 'O', labelKo: '목적어(O)' },
          { text: 'that require learners to question AI-generated claims, verify sources, and defend their own reasoning.', role: 'M', labelKo: '주격 관계절(to V 3중 병렬)' },
        ],
      },
      {
        id: 'hs03-s5',
        english:
          'In this emerging landscape, the most valuable skill is no longer producing fluent text on demand, but framing bold questions that no algorithm would think to ask.',
        slashBroken:
          'In this emerging landscape, / the most valuable skill is / no longer producing fluent text on demand, / but framing bold questions / that no algorithm would think to ask.',
        korean:
          '이 새롭게 부상하는 지형에서 가장 가치 있는 역량은 더 이상 요구 즉시 유창한 글을 생산하는 것이 아니라, 어떤 알고리즘도 떠올리지 못할 대담한 질문을 구성하는 것이다.',
        segments: [
          { text: 'In this emerging landscape,', role: 'M', labelKo: '상황 부사구' },
          { text: 'the most valuable skill', role: 'S', labelKo: '주어(S)' },
          { text: 'is', role: 'V', labelKo: '동사(V)' },
          { text: 'no longer producing fluent text on demand,', role: 'C', labelKo: '보어1(no longer A)' },
          { text: 'but framing bold questions', role: 'C', labelKo: '보어2(but B)' },
          { text: 'that no algorithm would think to ask.', role: 'M', labelKo: '목적격 관계절' },
        ],
      },
    ],
    syntaxNotes: [
      {
        expression: 'the productive struggle through which original arguments ~ emerge',
        grammarPointKo: '전치사 + 관계대명사 (through which)',
        explanationKo:
          '자동사 emerge는 목적어가 필요 없으므로 뒤 절이 완전합니다. 따라서 관계대명사 which 단독으로는 못 쓰고 "그 고투를 통해(through the struggle)"의 의미인 through which를 사용합니다.',
      },
      {
        expression: 'statistical patterns extracted from existing datasets',
        grammarPointKo: '과거분사구 후치수식',
        explanationKo:
          'patterns와 extract(추출하다)는 수동 관계이므로 "(기존 데이터셋으로부터) 추출된"이라는 의미의 과거분사 extracted가 뒤에서 명사를 수식합니다.',
      },
      {
        expression: 'Rather than banning digital tools altogether',
        grammarPointKo: 'Rather than + 동명사(-ing)',
        explanationKo:
          '"~하기보다는"의 의미를 나타내며, 문두에서 주절과 대조되는 대안을 제시할 때 동명사구(banning ~)가 자주 결합합니다.',
      },
      {
        expression: 'is no longer producing fluent text ~, but framing bold questions',
        grammarPointKo: 'no longer A, but B 병렬 구조',
        explanationKo:
          'be동사의 보어 자리에서 동명사 producing과 framing이 정확히 대등한 병렬을 이루며 필자의 핵심 주장(B)을 강하게 부각합니다.',
      },
    ],
    keyVocab: [
      { word: 'recombine', phonetic: '/ˌriː.kəmˈbaɪn/', meaningKo: '재조합하다' },
      { word: 'synthesis', phonetic: '/ˈsɪn.θə.sɪs/', meaningKo: '종합, 통합' },
      { word: 'bypass', phonetic: '/ˈbaɪ.pɑːs/', meaningKo: '우회하다, 건너뛰다' },
      { word: 'forward-thinking', phonetic: '/ˌfɔː.wədˈθɪŋ.kɪŋ/', meaningKo: '진취적인, 미래지향적인' },
      { word: 'verify', phonetic: '/ˈver.ɪ.faɪ/', meaningKo: '검증하다, 확인하다' },
      { word: 'frame', phonetic: '/freɪm/', meaningKo: '(질문·틀을) 구성하다, 설정하다' },
    ],
    questions: [
      {
        id: 'hs03-q1',
        questionType: '빈칸 추론',
        questionKo: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
        stimulusBox:
          'In this emerging landscape, the most valuable skill is no longer producing fluent text on demand, but ________.',
        options: [
          'memorizing vast statistical datasets faster than software',
          'replacing human teachers with automated grading engines',
          'framing bold questions that no algorithm would think to ask',
          'prohibiting students from accessing digital writing assistants',
          'imitating the polished tone of machine-generated summaries',
        ],
        answer: 'framing bold questions that no algorithm would think to ask',
        explanationKo:
          '지문은 AI가 통계적 재조합과 유창한 초안 생성에는 능하지만 "살아낸 경험과 진정한 의도"가 없고, 교육은 AI 주장에 의문을 제기하고 독자적 논리를 세우는 방향으로 가야 한다고 말합니다. 따라서 빈칸에는 단순 생성을 넘어 "알고리즘이 못 던지는 대담한 질문 구성"이 들어가야 가장 정확합니다.',
        grammarTag: 'no longer A, but B 핵심 대조 추론',
      },
      {
        id: 'hs03-q2',
        questionType: '글의 순서 (A-B-C)',
        questionKo: '주어진 글 다음에 이어질 글의 순서로 가장 적절한 것을 고르시오.',
        stimulusBox:
          '[주어진 글]\nAs generative artificial intelligence becomes capable of drafting essays, composing melodies, and illustrating stories within seconds, educators are forced to reconsider what truly defines human creativity.\n\n(A) Rather than banning digital tools altogether, forward-thinking schools are designing assignments that require learners to question AI-generated claims, verify sources, and defend their own reasoning.\n(B) Because machine models generate outputs by recombining statistical patterns extracted from existing datasets, they excel at rapid synthesis yet lack lived experience and genuine intention. When students rely uncritically on automated drafts, they risk bypassing the productive struggle through which original arguments emerge.\n(C) In this emerging landscape, the most valuable skill is no longer producing fluent text on demand, but framing bold questions that no algorithm would think to ask.',
        options: [
          '(A) - (C) - (B)',
          '(B) - (A) - (C)',
          '(B) - (C) - (A)',
          '(C) - (A) - (B)',
          '(C) - (B) - (A)',
        ],
        answer: '(B) - (A) - (C)',
        explanationKo:
          '주어진 글에서 AI가 창의성 재고를 촉발했다는 문제 제기를 한 뒤, (B)가 AI 작동 원리(통계 패턴 재조합)와 무비판적 의존의 위험성을 설명합니다. 이어서 (A)가 그에 대한 교육적 해결책(전면 금지 대신 검증·비판 과제 설계)을 제시하고, (C)가 "In this emerging landscape(이 새로운 지형에서)"로 전체 결론을 맺는 (B)-(A)-(C)가 완벽합니다.',
        grammarTag: '문제 제기 → 원인 분석 → 대안 → 결론 순서',
      },
      {
        id: 'hs03-q3',
        questionType: '어법성 판단',
        questionKo: '다음 밑줄 친 ①~⑤ 중 어법상 틀린 것을 고르시오.',
        stimulusBox:
          'Educators must reconsider ① what truly defines human creativity. Machine models recombine statistical patterns ② extracted from existing datasets. When students rely uncritically on automated drafts, they risk bypassing the productive struggle ③ which original arguments gradually emerge. Rather than ④ banning digital tools, schools design tasks requiring learners to verify sources and ⑤ defend their reasoning.',
        options: [
          '① what',
          '② extracted',
          '③ which',
          '④ banning',
          '⑤ defend',
        ],
        answer: '③ which',
        explanationKo:
          '③ which는 틀렸습니다. 뒷절 "original arguments gradually emerge"는 자동사 emerge로 이루어진 완전한 절이므로, 관계대명사 which가 단독으로 올 수 없고 "전치사 + 관계대명사"인 through which로 고쳐야 합니다. ① 간접의문문 what 정답, ② 수동 과거분사 extracted 정답, ④ Rather than 뒤 동명사 banning 정답, ⑤ to verify와 병렬인 defend 정답입니다.',
        grammarTag: '관계대명사 vs 전치사+관계대명사(완전/불완전 절)',
      },
    ],
  },

  /* =========================================================================
   * HS04 — [행동경제학 · B2] Loss Aversion and Everyday Decisions
   * ========================================================================= */
  {
    id: 'hs04',
    number: 4,
    cefrLevel: 'b2',
    csatGradeTag: '고3 모의평가 · 1등급',
    topicBadge: '행동경제학',
    titleEn: 'Loss Aversion and Everyday Decisions',
    titleKo: '손실 회피 편향과 합리적 선택',
    estimatedMin: 9,
    sentences: [
      {
        id: 'hs04-s1',
        english:
          'Classical economic theory long portrayed human beings as rational calculators who weigh potential costs and benefits objectively before making any decision.',
        slashBroken:
          'Classical economic theory / long portrayed human beings / as rational calculators / who weigh potential costs and benefits objectively / before making any decision.',
        korean:
          '고전 경제학 이론은 오랫동안 인간을 어떤 결정을 내리기 전에 잠재적 비용과 편익을 객관적으로 저울질하는 합리적 계산가로 묘사해 왔다.',
        segments: [
          { text: 'Classical economic theory', role: 'S', labelKo: '주어(S)' },
          { text: 'long', role: 'M', labelKo: '부사' },
          { text: 'portrayed', role: 'V', labelKo: '동사(V)' },
          { text: 'human beings', role: 'O', labelKo: '목적어(O)' },
          { text: 'as rational calculators', role: 'M', labelKo: 'portray A as B' },
          { text: 'who weigh potential costs and benefits objectively before making any decision.', role: 'M', labelKo: '주격 관계절' },
        ],
      },
      {
        id: 'hs04-s2',
        english:
          'Psychologists Daniel Kahneman and Amos Tversky challenged this assumption by demonstrating that the psychological pain of losing a given amount feels roughly twice as intense as the pleasure of gaining the exact same sum.',
        slashBroken:
          'Psychologists Daniel Kahneman and Amos Tversky / challenged this assumption / by demonstrating / that the psychological pain of losing a given amount / feels roughly twice as intense / as the pleasure of gaining the exact same sum.',
        korean:
          '심리학자 대니얼 카너먼과 아모스 트버스키는 일정 금액을 잃는 심리적 고통이 정확히 같은 금액을 얻는 기쁨보다 대략 두 배 강렬하게 느껴진다는 것을 입증함으로써 이 가정에 도전했다.',
        segments: [
          { text: 'Psychologists Daniel Kahneman and Amos Tversky', role: 'S', labelKo: '주어(S)' },
          { text: 'challenged', role: 'V', labelKo: '동사(V)' },
          { text: 'this assumption', role: 'O', labelKo: '목적어(O)' },
          { text: 'by demonstrating', role: 'M', labelKo: '수단(by -ing)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'the psychological pain of losing a given amount', role: 'S', labelKo: '명사절 주어' },
          { text: 'feels', role: 'V', labelKo: '감각동사(V′)' },
          { text: 'roughly twice as intense as the pleasure of gaining the exact same sum.', role: 'C', labelKo: '배수사+원급비교 보어' },
        ],
      },
      {
        id: 'hs04-s3',
        english:
          'This asymmetry, known as loss aversion, explains why people cling to outdated habits or underperforming investments long after the evidence suggests they should move on.',
        slashBroken:
          'This asymmetry, / known as loss aversion, / explains / why people cling to outdated habits or underperforming investments / long after the evidence suggests / they should move on.',
        korean:
          '손실 회피로 알려진 이러한 비대칭성은, 증거가 이제 넘어가야 한다고 시사한 지 한참 뒤에도 사람들이 왜 구시대적 습관이나 수익률이 저조한 투자에 매달리는지를 설명해 준다.',
        segments: [
          { text: 'This asymmetry,', role: 'S', labelKo: '주어(S)' },
          { text: 'known as loss aversion,', role: 'M', labelKo: '삽입 과거분사구' },
          { text: 'explains', role: 'V', labelKo: '동사(V)' },
          { text: 'why people cling to outdated habits or underperforming investments', role: 'O', labelKo: '간접의문문 목적어' },
          { text: 'long after the evidence suggests they should move on.', role: 'M', labelKo: '시간 부사절' },
        ],
      },
      {
        id: 'hs04-s4',
        english:
          'Even the way an identical choice is framed can dramatically reverse our preferences, depending on whether outcomes are described as lives saved or lives lost.',
        slashBroken:
          'Even the way an identical choice is framed / can dramatically reverse our preferences, / depending on / whether outcomes are described / as lives saved or lives lost.',
        korean:
          '심지어 동일한 선택지가 틀 지워지는 방식조차, 결과가 구해진 생명으로 묘사되는지 아니면 잃은 생명으로 묘사되는지에 따라 우리의 선호를 극적으로 뒤집을 수 있다.',
        segments: [
          { text: 'Even the way an identical choice is framed', role: 'S', labelKo: '주어(the way 관계절)' },
          { text: 'can dramatically reverse', role: 'V', labelKo: '동사구(V)' },
          { text: 'our preferences,', role: 'O', labelKo: '목적어(O)' },
          { text: 'depending on', role: 'CONN', labelKo: '전치사구' },
          { text: 'whether outcomes are described as lives saved or lives lost.', role: 'M', labelKo: 'whether A or B 명사절' },
        ],
      },
      {
        id: 'hs04-s5',
        english:
          'Recognizing how strongly our minds react to perceived losses allows us to pause before acting out of fear rather than evidence.',
        slashBroken:
          'Recognizing how strongly our minds react to perceived losses / allows us / to pause / before acting out of fear rather than evidence.',
        korean:
          '우리의 마음이 인식된 손실에 얼마나 강하게 반응하는지를 깨닫는 것은, 증거가 아니라 두려움 때문에 행동하기 전에 잠시 멈춰 설 수 있게 해준다.',
        segments: [
          { text: 'Recognizing how strongly our minds react to perceived losses', role: 'S', labelKo: '동명사 주어(단수)' },
          { text: 'allows', role: 'V', labelKo: '5형식 단수동사(V)' },
          { text: 'us', role: 'O', labelKo: '목적어(O)' },
          { text: 'to pause', role: 'C', labelKo: '목적격 보어(to V)' },
          { text: 'before acting out of fear rather than evidence.', role: 'M', labelKo: '시간·대조 수식구' },
        ],
      },
      {
        id: 'hs04-s6',
        english:
          'While we may never eliminate cognitive bias completely, reframing a risky change as an opportunity to avoid future stagnation can turn loss aversion into a catalyst for wiser action.',
        slashBroken:
          'While we may never eliminate cognitive bias completely, / reframing a risky change / as an opportunity to avoid future stagnation / can turn loss aversion / into a catalyst for wiser action.',
        korean:
          '우리가 인지 편향을 결코 완전히 없앨 수는 없겠지만, 위험해 보이는 변화를 미래의 정체를 피할 기회로 재구성하는 것은 손실 회피를 더 현명한 행동의 촉매제로 바꿀 수 있다.',
        segments: [
          { text: 'While', role: 'CONN', labelKo: '양보 접속사' },
          { text: 'we may never eliminate cognitive bias completely,', role: 'M', labelKo: '양보 부사절' },
          { text: 'reframing a risky change as an opportunity to avoid future stagnation', role: 'S', labelKo: '동명사 주어(S)' },
          { text: 'can turn', role: 'V', labelKo: '동사구(V)' },
          { text: 'loss aversion', role: 'O', labelKo: '목적어(O)' },
          { text: 'into a catalyst for wiser action.', role: 'M', labelKo: 'turn A into B' },
        ],
      },
    ],
    syntaxNotes: [
      {
        expression: 'feels roughly twice as intense as the pleasure of gaining ~',
        grammarPointKo: '배수사 + as + 원급 + as 비교 구문',
        explanationKo:
          '배수사(twice)는 반드시 첫 번째 as 앞에 위치합니다. 감각동사 feels의 보어이므로 부사 intensely가 아니라 형용사 원급 intense가 와야 합니다.',
      },
      {
        expression: 'depending on whether outcomes are described as ~ or ~',
        grammarPointKo: '전치사 목적어 whether A or B 명사절',
        explanationKo:
          '전치사 on의 목적어 자리에는 접속사 if를 쓸 수 없고 반드시 whether를 사용해야 합니다("~인지 아닌지에 따라").',
      },
      {
        expression: 'Recognizing how strongly our minds react to perceived losses allows us to pause',
        grammarPointKo: '긴 동명사 주어와 단수 동사 수일치',
        explanationKo:
          '동사 바로 앞 명사가 복수형 losses이지만, 진짜 주어는 동명사구 Recognizing ~이므로 3인칭 단수 동사 allows를 써야 합니다.',
      },
      {
        expression: 'the way an identical choice is framed',
        grammarPointKo: 'the way + 주어 + 동사 (관계부사 how 생략)',
        explanationKo:
          '영어에서는 the way와 how를 나란히 쓰지 않으므로 the way 뒤에 바로 완전한 절(an identical choice is framed)을 붙입니다.',
      },
    ],
    keyVocab: [
      { word: 'portray', phonetic: '/pɔːˈtreɪ/', meaningKo: '묘사하다, 그리다' },
      { word: 'asymmetry', phonetic: '/eɪˈsɪm.ə.tri/', meaningKo: '비대칭성' },
      { word: 'cling to', phonetic: '/klɪŋ tuː/', meaningKo: '~에 매달리다, 집착하다' },
      { word: 'underperforming', phonetic: '/ˌʌn.də.pəˈfɔː.mɪŋ/', meaningKo: '성과가 저조한' },
      { word: 'stagnation', phonetic: '/stæɡˈneɪ.ʃən/', meaningKo: '정체, 침체' },
      { word: 'catalyst', phonetic: '/ˈkæt.əl.ɪst/', meaningKo: '촉매제, 기폭제' },
    ],
    questions: [
      {
        id: 'hs04-q1',
        questionType: '주제·요지',
        questionKo: '윗글의 요지로 가장 적절한 것을 고르시오.',
        options: [
          '손실 회피 편향을 자각하고 선택을 재구성하면 더 합리적인 행동으로 전환할 수 있다.',
          '고전 경제학의 비용-편익 분석은 현대 금융시장에서도 완벽하게 작동한다.',
          '심리적 고통을 줄이려면 새로운 변화보다 익숙한 습관을 유지하는 것이 바람직하다.',
          '인지 편향은 반복 훈련을 통해 인간의 사고 과정에서 완전히 제거될 수 있다.',
          '객관적 데이터를 제시하기만 하면 프레이밍 효과는 더 이상 발생하지 않는다.',
        ],
        answer: '손실 회피 편향을 자각하고 선택을 재구성하면 더 합리적인 행동으로 전환할 수 있다.',
        explanationKo:
          '글은 손실 회피 편향과 프레이밍 효과를 소개한 뒤, 마지막 두 문장에서 이 편향을 완전히 없앨 순 없지만 인식하고 변화를 "미래 정체를 피할 기회"로 재구성(reframing)하면 현명한 행동의 촉매제로 활용할 수 있다고 결론짓습니다.',
        grammarTag: '결론부(While ~, reframing ~) 요지 도출',
      },
      {
        id: 'hs04-q2',
        questionType: '빈칸 추론',
        questionKo: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
        stimulusBox:
          'Even the way an identical choice is framed can dramatically reverse our preferences, depending on ________.',
        options: [
          'how much formal economic training the decision-maker received',
          'whether outcomes are described as lives saved or lives lost',
          'whether statistical charts include historical profit margins',
          'how quickly investors withdraw from volatile markets',
          'whether peers agree with the initial prediction',
        ],
        answer: 'whether outcomes are described as lives saved or lives lost',
        explanationKo:
          '문장 주어가 "동일한 선택지가 틀 지워지는(framed) 방식"이므로, 빈칸에는 같은 결과를 "얻음(lives saved)"과 "잃음(lives lost)"이라는 서로 다른 프레임으로 묘사하는 대조가 들어가야 카너먼·트버스키의 손실 회피 프레이밍 논리와 정확히 맞물립니다.',
        grammarTag: '핵심어(framed) 재진술 빈칸 추론',
      },
      {
        id: 'hs04-q3',
        questionType: '요약문 완성',
        questionKo: '윗글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?',
        stimulusBox:
          'Because humans experience losses far more (A) ________ than equivalent gains, recognizing and (B) ________ this bias can help us make more rational choices.',
        options: [
          '(A) painfully — (B) reframing',
          '(A) calmly — (B) ignoring',
          '(A) briefly — (B) amplifying',
          '(A) objectively — (B) concealing',
          '(A) rarely — (B) reversing',
        ],
        answer: '(A) painfully — (B) reframing',
        explanationKo:
          '본문의 "the psychological pain of losing ... feels roughly twice as intense"가 (A) painfully로, 마지막 문장의 "reframing a risky change"가 (B) reframing으로 정확히 패러프레이징됩니다.',
        grammarTag: '핵심 내용 압축 요약',
      },
    ],
  },

  /* =========================================================================
   * HS05 — [도시공학 · C1] Walkable Cities and Social Resilience
   * ========================================================================= */
  {
    id: 'hs05',
    number: 5,
    cefrLevel: 'c1',
    csatGradeTag: '수능 실전 · 1등급 킬러',
    topicBadge: '도시공학',
    titleEn: 'Walkable Cities and Social Resilience',
    titleKo: '보행 친화 도시와 공동체 회복탄력성',
    estimatedMin: 10,
    sentences: [
      {
        id: 'hs05-s1',
        english:
          'For much of the twentieth century, urban planners prioritized high-speed roadways over pedestrian spaces, treating streets merely as conduits for moving vehicles from point A to point B.',
        slashBroken:
          'For much of the twentieth century, / urban planners prioritized high-speed roadways / over pedestrian spaces, / treating streets merely as conduits / for moving vehicles from point A to point B.',
        korean:
          '20세기의 상당 기간 동안 도시 계획가들은 보행 공간보다 고속 도로를 우선시하며, 거리를 그저 차량을 A 지점에서 B 지점으로 이동시키는 통로로만 취급했다.',
        segments: [
          { text: 'For much of the twentieth century,', role: 'M', labelKo: '시간 부사구' },
          { text: 'urban planners', role: 'S', labelKo: '주어(S)' },
          { text: 'prioritized', role: 'V', labelKo: '동사(V)' },
          { text: 'high-speed roadways', role: 'O', labelKo: '목적어(O)' },
          { text: 'over pedestrian spaces,', role: 'M', labelKo: 'prioritize A over B' },
          { text: 'treating streets merely as conduits for moving vehicles from point A to point B.', role: 'M', labelKo: '동시동작 분사구문' },
        ],
      },
      {
        id: 'hs05-s2',
        english:
          'Yet when neighborhoods are designed exclusively around automobiles, residents lose the casual, unplanned encounters on sidewalks and plazas that quietly knit strangers into a trusting community.',
        slashBroken:
          'Yet / when neighborhoods are designed exclusively around automobiles, / residents lose / the casual, unplanned encounters on sidewalks and plazas / that quietly knit strangers into a trusting community.',
        korean:
          '그러나 주거지가 오로지 자동차 중심으로 설계되면, 주민들은 낯선 이들을 신뢰하는 공동체로 조용히 엮어 주는 보도와 광장에서의 가볍고 계획되지 않은 마주침을 잃게 된다.',
        segments: [
          { text: 'Yet', role: 'CONN', labelKo: '역접 연결어' },
          { text: 'when neighborhoods are designed exclusively around automobiles,', role: 'M', labelKo: '조건 부사절' },
          { text: 'residents', role: 'S', labelKo: '주어(S)' },
          { text: 'lose', role: 'V', labelKo: '동사(V)' },
          { text: 'the casual, unplanned encounters', role: 'O', labelKo: '목적어(선행사)' },
          { text: 'on sidewalks and plazas', role: 'M', labelKo: '장소 수식구' },
          { text: 'that quietly knit strangers into a trusting community.', role: 'M', labelKo: '주격 관계절(복수 수일치)' },
        ],
      },
      {
        id: 'hs05-s3',
        english:
          'Sociologists refer to this web of everyday familiarity as social infrastructure, arguing that it matters just as much during a crisis as power grids or emergency shelters.',
        slashBroken:
          'Sociologists refer to this web of everyday familiarity / as social infrastructure, / arguing that it matters just as much / during a crisis / as power grids or emergency shelters.',
        korean:
          '사회학자들은 이러한 일상적 친숙함의 그물망을 사회적 기반시설이라고 부르며, 그것이 위기 상황에서 전력망이나 비상 대피소만큼이나 중요하다고 주장한다.',
        segments: [
          { text: 'Sociologists', role: 'S', labelKo: '주어(S)' },
          { text: 'refer to', role: 'V', labelKo: '동사구(V)' },
          { text: 'this web of everyday familiarity', role: 'O', labelKo: '목적어(O)' },
          { text: 'as social infrastructure,', role: 'M', labelKo: 'refer to A as B' },
          { text: 'arguing that it matters just as much during a crisis as power grids or emergency shelters.', role: 'M', labelKo: '분사구문+원급비교' },
        ],
      },
      {
        id: 'hs05-s4',
        english:
          'During severe heatwaves or sudden floods, districts whose streetscapes encourage daily walking consistently record higher survival rates because neighbors check on vulnerable elders before official aid arrives.',
        slashBroken:
          'During severe heatwaves or sudden floods, / districts whose streetscapes encourage daily walking / consistently record higher survival rates / because neighbors check on vulnerable elders / before official aid arrives.',
        korean:
          '극심한 폭염이나 갑작스러운 홍수 동안, 일상적인 보행을 장려하는 가로 경관을 가진 구역들은 공식적인 구호가 도착하기 전에 이웃들이 취약한 노인들의 안부를 살피기 때문에 일관되게 더 높은 생존율을 기록한다.',
        segments: [
          { text: 'During severe heatwaves or sudden floods,', role: 'M', labelKo: '위기 상황 부사구' },
          { text: 'districts', role: 'S', labelKo: '주어(S)' },
          { text: 'whose streetscapes encourage daily walking', role: 'M', labelKo: '소유격 관계절' },
          { text: 'consistently', role: 'M', labelKo: '부사' },
          { text: 'record', role: 'V', labelKo: '동사(V)' },
          { text: 'higher survival rates', role: 'O', labelKo: '목적어(O)' },
          { text: 'because neighbors check on vulnerable elders before official aid arrives.', role: 'M', labelKo: '이유 부사절' },
        ],
      },
      {
        id: 'hs05-s5',
        english:
          'Moreover, compact mixed-use blocks reduce carbon emissions while boosting local shops, proving that environmental sustainability and economic vitality need not be mutually exclusive.',
        slashBroken:
          'Moreover, / compact mixed-use blocks reduce carbon emissions / while boosting local shops, / proving that environmental sustainability and economic vitality / need not be mutually exclusive.',
        korean:
          '더욱이 밀집된 복합 용도 블록들은 지역 상점에 활력을 불어넣으면서 탄소 배출을 줄여, 환경적 지속가능성과 경제적 활력이 서로 배타적일 필요가 없음을 입증한다.',
        segments: [
          { text: 'Moreover,', role: 'CONN', labelKo: '첨가 연결어' },
          { text: 'compact mixed-use blocks', role: 'S', labelKo: '주어(S)' },
          { text: 'reduce', role: 'V', labelKo: '동사(V)' },
          { text: 'carbon emissions', role: 'O', labelKo: '목적어(O)' },
          { text: 'while boosting local shops,', role: 'M', labelKo: '접속사+분사구문' },
          { text: 'proving that environmental sustainability and economic vitality need not be mutually exclusive.', role: 'M', labelKo: '결과 분사구문' },
        ],
      },
      {
        id: 'hs05-s6',
        english:
          'Only when cities reclaim streets as shared civic living rooms can urban design cultivate the resilience required to weather an uncertain century.',
        slashBroken:
          'Only when cities reclaim streets / as shared civic living rooms / can urban design cultivate the resilience / required to weather an uncertain century.',
        korean:
          '도시들이 거리를 공유된 시민의 거실로 되찾을 때 비로소, 도시 설계는 불확실한 세기를 헤쳐 나가는 데 필요한 회복탄력성을 길러낼 수 있다.',
        segments: [
          { text: 'Only when cities reclaim streets as shared civic living rooms', role: 'M', labelKo: 'Only 부사절 문두 강조' },
          { text: 'can', role: 'V', labelKo: '도치 조동사' },
          { text: 'urban design', role: 'S', labelKo: '주어(S)' },
          { text: 'cultivate', role: 'V', labelKo: '본동사(V)' },
          { text: 'the resilience', role: 'O', labelKo: '목적어(O)' },
          { text: 'required to weather an uncertain century.', role: 'M', labelKo: '과거분사 후치수식' },
        ],
      },
    ],
    syntaxNotes: [
      {
        expression: 'Only when cities reclaim streets ~ can urban design cultivate ~',
        grammarPointKo: 'Only + 부사절 문두 도치',
        explanationKo:
          'Only가 부사절(when ~)을 이끌고 문두에 나오면 종속절이 아니라 주절이 [조동사 can + 주어 urban design + 동사원형 cultivate]로 도치됩니다. 수능 어법 최고난도 출제 포인트입니다.',
      },
      {
        expression: 'districts whose streetscapes encourage daily walking',
        grammarPointKo: '소유격 관계대명사 whose',
        explanationKo:
          '선행사 districts와 뒤 명사 streetscapes가 소유 관계(구역들의 가로 경관)이므로 소유격 관계대명사 whose를 씁니다. 뒤 절은 명사 앞에 관사 없이 바로 streetscapes가 이어집니다.',
      },
      {
        expression: 'the casual, unplanned encounters on sidewalks and plazas that quietly knit ~',
        grammarPointKo: '선행사와 떨어진 주격 관계절의 수일치',
        explanationKo:
          '관계대명사 that의 선행사는 전치사구 앞의 복수명사 encounters이므로 복수 동사 knit이 연결됩니다.',
      },
      {
        expression: 'need not be mutually exclusive',
        grammarPointKo: '조동사 need not + 동사원형',
        explanationKo:
          '"~일 필요가 없다(= do not need to be)"라는 학술 문어체 부정 표현으로, 두 가치가 양립 가능함을 우아하게 표현합니다.',
      },
    ],
    keyVocab: [
      { word: 'conduit', phonetic: '/ˈkɒn.djuː.ɪt/', meaningKo: '통로, 도관' },
      { word: 'knit', phonetic: '/nɪt/', meaningKo: '긴밀히 묶다, 결합시키다' },
      { word: 'vulnerable', phonetic: '/ˈvʌl.nər.ə.bəl/', meaningKo: '취약한, 상처받기 쉬운' },
      { word: 'vitality', phonetic: '/vaɪˈtæl.ə.ti/', meaningKo: '활력, 생명력' },
      { word: 'mutually exclusive', phonetic: '/ˈmjuː.tʃu.ə.li ɪkˈskluː.sɪv/', meaningKo: '상호 배타적인' },
      { word: 'resilience', phonetic: '/rɪˈzɪl.jəns/', meaningKo: '회복탄력성' },
    ],
    questions: [
      {
        id: 'hs05-q1',
        questionType: '문장 삽입',
        questionKo: '글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳을 고르시오.',
        stimulusBox:
          '[주어진 문장]\nDuring severe heatwaves or sudden floods, districts whose streetscapes encourage daily walking consistently record higher survival rates because neighbors check on vulnerable elders before official aid arrives.\n\nFor much of the twentieth century, urban planners prioritized high-speed roadways over pedestrian spaces. ( ① ) Yet when neighborhoods are designed exclusively around automobiles, residents lose the casual encounters that knit strangers into a trusting community. ( ② ) Sociologists refer to this web of everyday familiarity as social infrastructure, arguing that it matters just as much during a crisis as power grids or emergency shelters. ( ③ ) Moreover, compact mixed-use blocks reduce carbon emissions while boosting local shops, proving that sustainability and economic vitality need not be mutually exclusive. ( ④ ) Only when cities reclaim streets as shared civic living rooms can urban design cultivate true resilience. ( ⑤ )',
        options: ['①', '②', '③', '④', '⑤'],
        answer: '③',
        explanationKo:
          '③ 앞 문장에서 사회적 기반시설이 "위기 상황에서(during a crisis)" 전력망·대피소만큼 중요하다고 일반 진술을 제시하고, 주어진 문장이 그 구체적 위기 사례인 "극심한 폭염이나 홍수 동안(During severe heatwaves or sudden floods)" 높은 생존율을 들어 뒷받침합니다. 이어 ③ 뒤에서 Moreover로 환경·경제적 추가 이점으로 확장됩니다.',
        grammarTag: '일반 진술(crisis) → 구체적 예시(heatwaves/floods) 연결',
      },
      {
        id: 'hs05-q2',
        questionType: '글의 순서 (A-B-C)',
        questionKo: '주어진 글 다음에 이어질 글의 순서로 가장 적절한 것을 고르시오.',
        stimulusBox:
          '[주어진 글]\nFor much of the twentieth century, urban planners prioritized high-speed roadways over pedestrian spaces, treating streets merely as conduits for moving vehicles from point A to point B.\n\n(A) Moreover, compact mixed-use blocks reduce carbon emissions while boosting local shops. Only when cities reclaim streets as shared civic living rooms can urban design cultivate the resilience required to weather an uncertain century.\n(B) Yet when neighborhoods are designed exclusively around automobiles, residents lose the casual, unplanned encounters on sidewalks and plazas that quietly knit strangers into a trusting community.\n(C) Sociologists refer to this web of everyday familiarity as social infrastructure, arguing that it matters just as much during a crisis as power grids. During severe heatwaves, walkable districts record higher survival rates because neighbors check on vulnerable elders.',
        options: [
          '(A) - (C) - (B)',
          '(B) - (A) - (C)',
          '(B) - (C) - (A)',
          '(C) - (A) - (B)',
          '(C) - (B) - (A)',
        ],
        answer: '(B) - (C) - (A)',
        explanationKo:
          '주어진 글의 자동차 중심 도시 설계를 (B)가 Yet으로 뒤집으며 "보도·광장에서의 일상적 마주침" 상실을 지적합니다. (C)의 지시어 "this web of everyday familiarity"가 (B)의 일상적 마주침을 정확히 가리키며 위기 시 생존율까지 이어지고, (A)가 Moreover로 환경·경제 이점을 덧붙이며 결론을 내리므로 (B)-(C)-(A)가 정답입니다.',
        grammarTag: '역접(Yet) + 지시어(this web) + 첨가(Moreover)',
      },
      {
        id: 'hs05-q3',
        questionType: '어법성 판단',
        questionKo: '다음 밑줄 친 ①~⑤ 중 어법상 틀린 것을 고르시오.',
        stimulusBox:
          'Urban planners prioritized roadways over pedestrian spaces, ① treating streets merely as conduits. Residents lose casual encounters ② that knit strangers into a community. Districts ③ whose streetscapes encourage walking record higher survival rates during heatwaves. Only when cities reclaim streets as shared civic living rooms ④ urban design can cultivate the resilience ⑤ required to weather an uncertain century.',
        options: [
          '① treating',
          '② that',
          '③ whose',
          '④ urban design can cultivate',
          '⑤ required',
        ],
        answer: '④ urban design can cultivate',
        explanationKo:
          '④가 틀렸습니다. "Only when ~"처럼 [Only + 부사절]이 문장 맨 앞으로 나와 강조될 때는 주절에서 조동사와 주어가 도치되어야 하므로 "can urban design cultivate"로 써야 합니다. ① 능동 분사구문 treating 정답, ② 주격 관계대명사 that 정답, ③ 소유격 관계대명사 whose 정답, ⑤ resilience를 수식하는 수동 과거분사 required 정답입니다.',
        grammarTag: 'Only + 부사절 문두 도치 (수능 킬러 어법)',
      },
    ],
  },

  /* =========================================================================
   * HS06 — [교육학 · B2] Why Productive Failure Deepens Learning
   * ========================================================================= */
  {
    id: 'hs06',
    number: 6,
    cefrLevel: 'b2',
    csatGradeTag: '고2·고3 학평 · 1등급',
    topicBadge: '교육학',
    titleEn: 'Why Productive Failure Deepens Learning',
    titleKo: '생산적 실패가 깊은 학습을 만드는 이유',
    estimatedMin: 8,
    sentences: [
      {
        id: 'hs06-s1',
        english:
          'Traditional classrooms typically present a polished formula first and then ask students to practice applying it to nearly identical problems.',
        slashBroken:
          'Traditional classrooms / typically present a polished formula first / and then ask students / to practice applying it / to nearly identical problems.',
        korean:
          '전통적인 교실은 대개 잘 다듬어진 공식을 먼저 제시한 뒤 학생들에게 거의 동일한 문제들에 그것을 적용하는 연습을 하도록 요구한다.',
        segments: [
          { text: 'Traditional classrooms', role: 'S', labelKo: '주어(S)' },
          { text: 'typically', role: 'M', labelKo: '부사' },
          { text: 'present', role: 'V', labelKo: '동사1(V1)' },
          { text: 'a polished formula', role: 'O', labelKo: '목적어1(O1)' },
          { text: 'first', role: 'M', labelKo: '부사' },
          { text: 'and then', role: 'CONN', labelKo: '순차 접속사' },
          { text: 'ask', role: 'V', labelKo: '5형식 동사2(V2)' },
          { text: 'students', role: 'O', labelKo: '목적어2(O2)' },
          { text: 'to practice applying it to nearly identical problems.', role: 'C', labelKo: '목적격 보어(practice -ing)' },
        ],
      },
      {
        id: 'hs06-s2',
        english:
          'Although this direct-instruction sequence feels smooth and reassuring, educational researcher Manu Kapur found that learners who wrestle with an unfamiliar problem before receiving explicit guidance ultimately outperform peers taught directly.',
        slashBroken:
          'Although this direct-instruction sequence feels smooth and reassuring, / educational researcher Manu Kapur found / that learners who wrestle with an unfamiliar problem / before receiving explicit guidance / ultimately outperform peers taught directly.',
        korean:
          '이러한 직접 교수 순서가 매끄럽고 안심이 되게 느껴지지만, 교육학 연구자 마누 카푸르는 명시적 지도를 받기 전에 낯선 문제와 씨름하는 학습자들이 결국 직접 가르침을 받은 또래들보다 더 뛰어난 성과를 낸다는 사실을 발견했다.',
        segments: [
          { text: 'Although', role: 'CONN', labelKo: '양보 접속사' },
          { text: 'this direct-instruction sequence feels smooth and reassuring,', role: 'M', labelKo: '양보 부사절' },
          { text: 'educational researcher Manu Kapur', role: 'S', labelKo: '주어(S)' },
          { text: 'found', role: 'V', labelKo: '동사(V)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'learners', role: 'S', labelKo: '명사절 주어(S′)' },
          { text: 'who wrestle with an unfamiliar problem before receiving explicit guidance', role: 'M', labelKo: '주격 관계절' },
          { text: 'ultimately', role: 'M', labelKo: '부사' },
          { text: 'outperform', role: 'V', labelKo: '명사절 동사(V′)' },
          { text: 'peers taught directly.', role: 'O', labelKo: '목적어(과거분사 수식)' },
        ],
      },
      {
        id: 'hs06-s3',
        english:
          'Even when students fail to reach the canonical answer on their first attempt, the act of generating flawed strategies activates prior knowledge and exposes the exact gaps in their understanding.',
        slashBroken:
          'Even when students fail to reach the canonical answer / on their first attempt, / the act of generating flawed strategies / activates prior knowledge / and exposes the exact gaps in their understanding.',
        korean:
          '학생들이 첫 시도에서 표준 정답에 도달하지 못하더라도, 불완전한 전략을 스스로 만들어 내는 행위는 사전 지식을 활성화하고 자신의 이해 속에 있는 정확한 빈틈을 드러낸다.',
        segments: [
          { text: 'Even when', role: 'CONN', labelKo: '양보 접속사' },
          { text: 'students fail to reach the canonical answer on their first attempt,', role: 'M', labelKo: '양보 부사절' },
          { text: 'the act of generating flawed strategies', role: 'S', labelKo: '단수 주어(S)' },
          { text: 'activates', role: 'V', labelKo: '동사1(V1)' },
          { text: 'prior knowledge', role: 'O', labelKo: '목적어1(O1)' },
          { text: 'and', role: 'CONN', labelKo: '등위접속사' },
          { text: 'exposes', role: 'V', labelKo: '동사2(V2)' },
          { text: 'the exact gaps in their understanding.', role: 'O', labelKo: '목적어2(O2)' },
        ],
      },
      {
        id: 'hs06-s4',
        english:
          'Consequently, once the instructor finally introduces the underlying concept, those learners are far better prepared to notice why the formal method works where their own approaches broke down.',
        slashBroken:
          'Consequently, / once the instructor finally introduces the underlying concept, / those learners are far better prepared / to notice / why the formal method works / where their own approaches broke down.',
        korean:
          '그 결과 교사가 마침내 근본 개념을 소개할 때, 그 학습자들은 자신들의 접근법이 막혔던 지점에서 왜 공식적 방법이 통하는지를 훨씬 더 잘 포착할 준비가 되어 있다.',
        segments: [
          { text: 'Consequently,', role: 'CONN', labelKo: '인과 연결어' },
          { text: 'once the instructor finally introduces the underlying concept,', role: 'M', labelKo: '시간 부사절' },
          { text: 'those learners', role: 'S', labelKo: '주어(S)' },
          { text: 'are', role: 'V', labelKo: '동사(V)' },
          { text: 'far better prepared', role: 'C', labelKo: '보어(비교급 강조)' },
          { text: 'to notice why the formal method works where their own approaches broke down.', role: 'M', labelKo: 'to부정사+간접의문문' },
        ],
      },
      {
        id: 'hs06-s5',
        english:
          'What matters in deep learning, therefore, is not minimizing early errors at all costs, but structuring safe struggles that prepare the mind for conceptual insight.',
        slashBroken:
          'What matters in deep learning, therefore, / is not minimizing early errors at all costs, / but structuring safe struggles / that prepare the mind for conceptual insight.',
        korean:
          '따라서 깊은 학습에서 중요한 것은 무슨 수를 써서라도 초기 오류를 최소화하는 것이 아니라, 개념적 통찰을 위해 마음을 준비시키는 안전한 고투를 설계하는 것이다.',
        segments: [
          { text: 'What matters in deep learning,', role: 'S', labelKo: 'what 명사절 주어(단수)' },
          { text: 'therefore,', role: 'CONN', labelKo: '결론 연결어' },
          { text: 'is', role: 'V', labelKo: '단수 동사(V)' },
          { text: 'not minimizing early errors at all costs,', role: 'C', labelKo: '보어1(not A)' },
          { text: 'but structuring safe struggles', role: 'C', labelKo: '보어2(but B)' },
          { text: 'that prepare the mind for conceptual insight.', role: 'M', labelKo: '주격 관계절' },
        ],
      },
    ],
    syntaxNotes: [
      {
        expression: 'learners who wrestle with ~ ultimately outperform peers taught directly',
        grammarPointKo: '장거리 주어-동사 수일치 + 과거분사 후치수식',
        explanationKo:
          '주어 learners가 긴 관계절(who wrestle ~ guidance)의 수식을 받은 뒤 동사 outperform과 호응합니다. peers taught directly는 "직접 가르침을 받은 또래들"이라는 수동 후치수식입니다.',
      },
      {
        expression: 'the act of generating flawed strategies activates ~ and exposes ~',
        grammarPointKo: '핵심 명사(the act)와 병렬 단수 동사 수일치',
        explanationKo:
          '전치사 of 뒤의 복수명사 strategies에 속지 말고 진짜 주어인 단수명사 the act에 맞춰 activates와 exposes 모두 단수 동사로 일치시켜야 합니다.',
      },
      {
        expression: 'What matters in deep learning, therefore, is not minimizing ~, but structuring ~',
        grammarPointKo: 'What 명사절 주어 + not A, but B 병렬',
        explanationKo:
          '관계대명사 what이 이끄는 명사절 주어는 원칙적으로 단수 취급하여 is를 받으며, 보어로 동명사 minimizing과 structuring이 대조 병렬을 이룹니다.',
      },
      {
        expression: 'why the formal method works where their own approaches broke down',
        grammarPointKo: '간접의문문 + 부사절 접속사 where',
        explanationKo:
          '여기서 where는 "~한 지점에서/경우에"라는 의미의 부사절 접속사로 쓰여, 학생들이 실패했던 지점과 공식 해법이 작동하는 지점을 대조합니다.',
      },
    ],
    keyVocab: [
      { word: 'polished', phonetic: '/ˈpɒl.ɪʃt/', meaningKo: '매끄러운, 잘 다듬어진' },
      { word: 'reassuring', phonetic: '/ˌriː.əˈʃʊə.rɪŋ/', meaningKo: '안심을 주는' },
      { word: 'outperform', phonetic: '/ˌaʊt.pəˈfɔːm/', meaningKo: '~보다 더 뛰어난 성과를 내다' },
      { word: 'canonical', phonetic: '/kəˈnɒn.ɪ.kəl/', meaningKo: '표준적인, 정석의' },
      { word: 'flawed', phonetic: '/flɔːd/', meaningKo: '결함이 있는, 불완전한' },
      { word: 'underlying', phonetic: '/ˌʌn.dəˈlaɪ.ɪŋ/', meaningKo: '근본적인, 기저에 있는' },
    ],
    questions: [
      {
        id: 'hs06-q1',
        questionType: '빈칸 추론',
        questionKo: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
        stimulusBox:
          'Even when students fail to reach the canonical answer on their first attempt, the act of generating flawed strategies activates prior knowledge and ________.',
        options: [
          'prevents learners from trusting formal textbook formulas',
          'exposes the exact gaps in their understanding',
          'eliminates the need for any guidance from an instructor',
          'discourages students from collaborating with classmates',
          'guarantees full accuracy on standardized memory tests',
        ],
        answer: 'exposes the exact gaps in their understanding',
        explanationKo:
          '바로 다음 문장에서 학생들이 교사의 개념 설명을 들을 때 "자신들의 접근법이 막혔던 지점에서 왜 공식적 방법이 통하는지" 포착할 준비가 된다고 했으므로, 초기의 불완전한 전략 생성은 "자신의 이해 속 정확한 빈틈을 드러내는(exposes the exact gaps)" 역할을 합니다.',
        grammarTag: '인과 연결어(Consequently) 역추론',
      },
      {
        id: 'hs06-q2',
        questionType: '글의 순서 (A-B-C)',
        questionKo: '주어진 글 다음에 이어질 글의 순서로 가장 적절한 것을 고르시오.',
        stimulusBox:
          '[주어진 글]\nTraditional classrooms typically present a polished formula first and then ask students to practice applying it to nearly identical problems.\n\n(A) Consequently, once the instructor finally introduces the underlying concept, those learners are far better prepared to notice why the formal method works where their own approaches broke down.\n(B) Although this direct-instruction sequence feels smooth and reassuring, educational researcher Manu Kapur found that learners who wrestle with an unfamiliar problem before receiving explicit guidance ultimately outperform peers taught directly.\n(C) Even when students fail to reach the canonical answer on their first attempt, the act of generating flawed strategies activates prior knowledge and exposes the exact gaps in their understanding.',
        options: [
          '(A) - (C) - (B)',
          '(B) - (A) - (C)',
          '(B) - (C) - (A)',
          '(C) - (A) - (B)',
          '(C) - (B) - (A)',
        ],
        answer: '(B) - (C) - (A)',
        explanationKo:
          '(B)의 "this direct-instruction sequence(이 직접 교수 순서)"가 주어진 글의 "공식 제시 → 유사 문제 연습"을 바로 지칭합니다. 이어 (C)가 (B)의 "낯선 문제와 씨름하기"가 왜 효과적인지(오류 전략 생성 → 이해 빈틈 노출) 설명하고, (A)가 Consequently로 그 결과 교사 설명 시 이해가 깊어진다고 연결하므로 (B)-(C)-(A)가 정답입니다.',
        grammarTag: '지시어(this sequence) + 메커니즘 + 인과(Consequently)',
      },
      {
        id: 'hs06-q3',
        questionType: '요약문 완성',
        questionKo: '윗글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?',
        stimulusBox:
          'Allowing students to (A) ________ with unfamiliar problems prior to explicit instruction may cause initial errors, yet it deepens conceptual mastery by making them aware of their own knowledge (B) ________.',
        options: [
          '(A) struggle — (B) gaps',
          '(A) comply — (B) routines',
          '(A) compete — (B) rewards',
          '(A) dispense — (B) formulas',
          '(A) conform — (B) standards',
        ],
        answer: '(A) struggle — (B) gaps',
        explanationKo:
          '본문의 "wrestle with an unfamiliar problem / safe struggles"가 (A) struggle로, "exposes the exact gaps in their understanding"이 (B) gaps로 정확하게 대응됩니다.',
        grammarTag: '핵심 키워드 대응 요약',
      },
    ],
  },

  /* =========================================================================
   * HS07 — [뇌과학 · C1] Sleep as an Active Architect of Memory
   * ========================================================================= */
  {
    id: 'hs07',
    number: 7,
    cefrLevel: 'c1',
    csatGradeTag: '수능 실전 · 1등급 킬러',
    topicBadge: '뇌과학',
    titleEn: 'Sleep as an Active Architect of Memory',
    titleKo: '기억을 재구성하는 수면의 능동적 역할',
    estimatedMin: 10,
    sentences: [
      {
        id: 'hs07-s1',
        english:
          'For centuries, sleep was dismissed as a passive shutdown during which the weary brain simply rested until morning.',
        slashBroken:
          'For centuries, / sleep was dismissed as a passive shutdown / during which / the weary brain simply rested until morning.',
        korean:
          '수 세기 동안 수면은 지친 뇌가 아침까지 그저 쉬기만 하는 수동적인 전원 차단 상태로 치부되었다.',
        segments: [
          { text: 'For centuries,', role: 'M', labelKo: '시간 부사구' },
          { text: 'sleep', role: 'S', labelKo: '주어(S)' },
          { text: 'was dismissed', role: 'V', labelKo: '수동태 동사(V)' },
          { text: 'as a passive shutdown', role: 'M', labelKo: '전치사구' },
          { text: 'during which the weary brain simply rested until morning.', role: 'M', labelKo: '전치사+관계대명사절' },
        ],
      },
      {
        id: 'hs07-s2',
        english:
          'Modern neuroimaging, however, has overturned that view, revealing that slumber is an intensely active phase of neural editing and memory consolidation.',
        slashBroken:
          'Modern neuroimaging, however, / has overturned that view, / revealing that slumber is / an intensely active phase / of neural editing and memory consolidation.',
        korean:
          '그러나 현대 신경영상학은 그 관점을 뒤집어, 수면이 신경 편집과 기억 공고화가 치열하게 일어나는 능동적 단계임을 밝혀냈다.',
        segments: [
          { text: 'Modern neuroimaging,', role: 'S', labelKo: '주어(S)' },
          { text: 'however,', role: 'CONN', labelKo: '역접 연결어' },
          { text: 'has overturned', role: 'V', labelKo: '현재완료 동사(V)' },
          { text: 'that view,', role: 'O', labelKo: '목적어(O)' },
          { text: 'revealing that slumber is an intensely active phase of neural editing and memory consolidation.', role: 'M', labelKo: '결과 분사구문' },
        ],
      },
      {
        id: 'hs07-s3',
        english:
          'During deep slow-wave sleep, the hippocampus repeatedly replays fragile daytime experiences, transferring them to the neocortex for long-term storage.',
        slashBroken:
          'During deep slow-wave sleep, / the hippocampus repeatedly replays / fragile daytime experiences, / transferring them to the neocortex / for long-term storage.',
        korean:
          '깊은 서파 수면 동안 해마는 취약한 낮 동안의 경험들을 반복적으로 재생하며, 장기 저장을 위해 그것들을 신피질로 옮긴다.',
        segments: [
          { text: 'During deep slow-wave sleep,', role: 'M', labelKo: '시간 부사구' },
          { text: 'the hippocampus', role: 'S', labelKo: '주어(S)' },
          { text: 'repeatedly', role: 'M', labelKo: '부사' },
          { text: 'replays', role: 'V', labelKo: '동사(V)' },
          { text: 'fragile daytime experiences,', role: 'O', labelKo: '목적어(O)' },
          { text: 'transferring them to the neocortex for long-term storage.', role: 'M', labelKo: '연속동작 분사구문' },
        ],
      },
      {
        id: 'hs07-s4',
        english:
          'Equally crucial is the subsequent REM stage, in which the brain weaves newly acquired facts into older associative networks, often sparking creative leaps that eluded conscious effort.',
        slashBroken:
          'Equally crucial / is / the subsequent REM stage, / in which the brain weaves newly acquired facts / into older associative networks, / often sparking creative leaps / that eluded conscious effort.',
        korean:
          '마찬가지로 결정적인 것은 뒤이어 오는 렘(REM) 수면 단계인데, 이 단계에서 뇌는 새로 습득한 사실들을 기존의 연상 신경망에 엮어 넣어 의식적인 노력으로는 닿지 못했던 창의적 도약을 종종 촉발한다.',
        segments: [
          { text: 'Equally crucial', role: 'C', labelKo: '보어 문두 도치(C)' },
          { text: 'is', role: 'V', labelKo: '단수 동사(V)' },
          { text: 'the subsequent REM stage,', role: 'S', labelKo: '도치된 단수 주어(S)' },
          { text: 'in which the brain weaves newly acquired facts into older associative networks,', role: 'M', labelKo: '계속적 전치사+관계절' },
          { text: 'often sparking creative leaps that eluded conscious effort.', role: 'M', labelKo: '결과 분사구문+관계절' },
        ],
      },
      {
        id: 'hs07-s5',
        english:
          'Far from merely archiving raw data like a hard drive, the sleeping brain selectively strengthens emotionally salient insights while pruning trivial noise.',
        slashBroken:
          'Far from merely archiving raw data like a hard drive, / the sleeping brain selectively strengthens / emotionally salient insights / while pruning trivial noise.',
        korean:
          '하드드라이브처럼 원시 데이터를 단순히 보관하기는커녕, 잠든 뇌는 사소한 잡음을 가지치기하면서 정서적으로 두드러진 통찰을 선별적으로 강화한다.',
        segments: [
          { text: 'Far from merely archiving raw data like a hard drive,', role: 'M', labelKo: 'Far from -ing 대조구' },
          { text: 'the sleeping brain', role: 'S', labelKo: '주어(S)' },
          { text: 'selectively', role: 'M', labelKo: '부사' },
          { text: 'strengthens', role: 'V', labelKo: '동사(V)' },
          { text: 'emotionally salient insights', role: 'O', labelKo: '목적어(O)' },
          { text: 'while pruning trivial noise.', role: 'M', labelKo: '접속사+분사구문' },
        ],
      },
      {
        id: 'hs07-s6',
        english:
          'Students who sacrifice sleep to cram overnight therefore undermine the very biological mechanism that transforms short-lived study into durable understanding.',
        slashBroken:
          'Students who sacrifice sleep to cram overnight / therefore undermine / the very biological mechanism / that transforms short-lived study / into durable understanding.',
        korean:
          '따라서 밤새 벼락치기를 하기 위해 수면을 희생하는 학생들은 단기적 공부를 오래가는 이해로 바꿔 주는 바로 그 생물학적 메커니즘을 스스로 훼손하는 셈이다.',
        segments: [
          { text: 'Students', role: 'S', labelKo: '주어(S)' },
          { text: 'who sacrifice sleep to cram overnight', role: 'M', labelKo: '주격 관계절' },
          { text: 'therefore', role: 'CONN', labelKo: '인과 연결어' },
          { text: 'undermine', role: 'V', labelKo: '동사(V)' },
          { text: 'the very biological mechanism', role: 'O', labelKo: '목적어(the very 강조)' },
          { text: 'that transforms short-lived study into durable understanding.', role: 'M', labelKo: '주격 관계절' },
        ],
      },
    ],
    syntaxNotes: [
      {
        expression: 'Equally crucial is the subsequent REM stage, in which ~',
        grammarPointKo: '형용사 보어 문두 도치 (C + V + S)',
        explanationKo:
          '주격 보어 Equally crucial이 문장 앞에 강조되면서 [보어 + 동사(is) + 주어(the subsequent REM stage)] 어순으로 도치되었습니다. 주어가 단수이므로 반드시 is와 수일치합니다.',
      },
      {
        expression: 'a passive shutdown during which the weary brain simply rested',
        grammarPointKo: '전치사 + 관계대명사 (during which)',
        explanationKo:
          '자동사 rested로 뒤 절이 완전하므로 관계대명사 which 앞에 시간 전치사 during이 결합하여 "그 기간 동안"이라는 뜻을 나타냅니다.',
      },
      {
        expression: 'Far from merely archiving raw data like a hard drive',
        grammarPointKo: 'Far from + 동명사 (-ing)',
        explanationKo:
          '"~하기는커녕, 결코 ~이 아니라"라는 강한 부정 대조 표현으로, 전치사 from 뒤이므로 동명사 archiving을 씁니다.',
      },
      {
        expression: 'the very biological mechanism that transforms ~ into ~',
        grammarPointKo: '강조 형용사 the very + 명사',
        explanationKo:
          '명사 앞에서 the very는 "바로 그~"로 해석되며, 뒤따르는 관계절이 선행사(단수 mechanism)에 맞춰 단수 동사 transforms를 취합니다.',
      },
    ],
    keyVocab: [
      { word: 'overturn', phonetic: '/ˌəʊ.vəˈtɜːn/', meaningKo: '뒤집다, 전복하다' },
      { word: 'consolidation', phonetic: '/kənˌsɒl.ɪˈdeɪ.ʃən/', meaningKo: '공고화, 통합' },
      { word: 'fragile', phonetic: '/ˈfrædʒ.aɪl/', meaningKo: '취약한, 부서지기 쉬운' },
      { word: 'elude', phonetic: '/ɪˈluːd/', meaningKo: '피해 가다, (해답이) 떠오르지 않다' },
      { word: 'salient', phonetic: '/ˈseɪ.li.ənt/', meaningKo: '두드러진, 핵심적인' },
      { word: 'prune', phonetic: '/pruːn/', meaningKo: '가지치기하다, 불필요한 것을 제거하다' },
    ],
    questions: [
      {
        id: 'hs07-q1',
        questionType: '주제·요지',
        questionKo: '윗글의 제목으로 가장 적절한 것을 고르시오.',
        options: [
          'Why Pulling an All-Nighter Boosts Short-Term Exam Scores',
          'Sleep: Not Passive Rest, but Active Memory Reconstruction',
          'How Hard Drives Inspired Modern Neuroimaging Technology',
          'The Evolutionary Origins of Dreaming in Nocturnal Mammals',
          'Can Caffeine Substitute for Deep Slow-Wave Sleep?',
        ],
        answer: 'Sleep: Not Passive Rest, but Active Memory Reconstruction',
        explanationKo:
          '수면이 단순한 수동적 휴식(passive shutdown)이라는 통념을 뒤집고, 서파 수면의 장기 저장 전환과 렘 수면의 창의적 연결 및 선별적 편집을 통해 기억을 능동적으로 재구성한다는 글의 핵심을 가장 정확히 담은 제목입니다.',
        grammarTag: '통념 반박형 제목 추론',
      },
      {
        id: 'hs07-q2',
        questionType: '문장 삽입',
        questionKo: '글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳을 고르시오.',
        stimulusBox:
          '[주어진 문장]\nEqually crucial is the subsequent REM stage, in which the brain weaves newly acquired facts into older associative networks, often sparking creative leaps that eluded conscious effort.\n\nFor centuries, sleep was dismissed as a passive shutdown during which the weary brain simply rested until morning. ( ① ) Modern neuroimaging, however, has overturned that view, revealing that slumber is an intensely active phase of neural editing and memory consolidation. ( ② ) During deep slow-wave sleep, the hippocampus repeatedly replays fragile daytime experiences, transferring them to the neocortex for long-term storage. ( ③ ) Far from merely archiving raw data like a hard drive, the sleeping brain selectively strengthens emotionally salient insights while pruning trivial noise. ( ④ ) Students who sacrifice sleep to cram overnight therefore undermine the very biological mechanism that transforms short-lived study into durable understanding. ( ⑤ )',
        options: ['①', '②', '③', '④', '⑤'],
        answer: '③',
        explanationKo:
          '주어진 문장의 "Equally crucial(마찬가지로 결정적인)"과 "the subsequent REM stage(뒤이어 오는 렘 수면 단계)"는 첫 번째 핵심 수면 단계인 "deep slow-wave sleep(깊은 서파 수면)"이 소개된 직후인 ③에 들어가야 시간·병렬 흐름이 완벽히 이어집니다.',
        grammarTag: '순서·첨가 단서(Equally crucial / subsequent)',
      },
      {
        id: 'hs07-q3',
        questionType: '어법성 판단',
        questionKo: '다음 밑줄 친 ①~⑤ 중 어법상 틀린 것을 고르시오.',
        stimulusBox:
          'Sleep was once dismissed as a passive shutdown ① during which the weary brain rested. Modern neuroimaging has overturned that view, ② revealing that slumber is active. Equally crucial ③ are the subsequent REM stage, in which the brain weaves new facts into older networks. The sleeping brain strengthens salient insights while ④ pruning trivial noise, powering the mechanism that ⑤ transforms study into durable understanding.',
        options: [
          '① during which',
          '② revealing',
          '③ are',
          '④ pruning',
          '⑤ transforms',
        ],
        answer: '③ are',
        explanationKo:
          '③ are는 틀렸습니다. 보어 Equally crucial이 문두로 도치된 [C + V + S] 구문에서 진짜 주어는 단수명사구인 "the subsequent REM stage"이므로 단수 동사 is로 고쳐야 합니다. ① 전치사+관계대명사 정답, ② 능동 분사구문 revealing 정답, ④ while 뒤 능동 분사 pruning 정답, ⑤ 선행사 mechanism(단수)과 수일치한 transforms 정답입니다.',
        grammarTag: '보어 도치 구문 수일치 (수능 고난도 어법)',
      },
    ],
  },

  /* =========================================================================
   * HS08 — [환경경제학 · C1] Beyond the Tragedy of the Commons
   * ========================================================================= */
  {
    id: 'hs08',
    number: 8,
    cefrLevel: 'c1',
    csatGradeTag: '수능 실전 · 1등급 킬러',
    topicBadge: '환경경제학',
    titleEn: 'Beyond the Tragedy of the Commons',
    titleKo: '공유지의 비극을 넘는 자치적 협력',
    estimatedMin: 10,
    sentences: [
      {
        id: 'hs08-s1',
        english:
          'In 1968, ecologist Garrett Hardin popularized the notion that whenever individuals share unrestricted access to a finite resource such as a pasture or fishery, self-interest inevitably drives them to overexploit it.',
        slashBroken:
          'In 1968, / ecologist Garrett Hardin popularized the notion / that whenever individuals share unrestricted access / to a finite resource such as a pasture or fishery, / self-interest inevitably drives them / to overexploit it.',
        korean:
          '1968년 생태학자 개릿 하딘은, 개인들이 목초지나 어장 같은 유한한 자원에 무제한으로 접근권을 공유할 때마다 이기심이 필연적으로 그들을 과도한 남획으로 몰고 간다는 개념을 대중화했다.',
        segments: [
          { text: 'In 1968,', role: 'M', labelKo: '시간 부사구' },
          { text: 'ecologist Garrett Hardin', role: 'S', labelKo: '주어(S)' },
          { text: 'popularized', role: 'V', labelKo: '동사(V)' },
          { text: 'the notion', role: 'O', labelKo: '목적어(추상명사)' },
          { text: 'that', role: 'CONN', labelKo: '동격 접속사 that' },
          { text: 'whenever individuals share unrestricted access to a finite resource such as a pasture or fishery,', role: 'M', labelKo: '복합관계부사절' },
          { text: 'self-interest inevitably drives them to overexploit it.', role: 'M', labelKo: '동격절 본절(drive O to V)' },
        ],
      },
      {
        id: 'hs08-s2',
        english:
          'For decades, policymakers accepted this bleak forecast as ironclad law, concluding that shared resources could be rescued only through strict state control or full privatization.',
        slashBroken:
          'For decades, / policymakers accepted this bleak forecast / as ironclad law, / concluding that shared resources could be rescued / only through strict state control or full privatization.',
        korean:
          '수십 년 동안 정책 입안자들은 이 암울한 예측을 철칙으로 받아들였고, 공유 자원은 오직 엄격한 국가 통제나 완전한 사유화를 통해서만 구해질 수 있다고 결론 내렸다.',
        segments: [
          { text: 'For decades,', role: 'M', labelKo: '기간 부사구' },
          { text: 'policymakers', role: 'S', labelKo: '주어(S)' },
          { text: 'accepted', role: 'V', labelKo: '동사(V)' },
          { text: 'this bleak forecast', role: 'O', labelKo: '목적어(O)' },
          { text: 'as ironclad law,', role: 'M', labelKo: 'accept A as B' },
          { text: 'concluding that shared resources could be rescued only through strict state control or full privatization.', role: 'M', labelKo: '결과 분사구문' },
        ],
      },
      {
        id: 'hs08-s3',
        english:
          'Political scientist Elinor Ostrom, however, upended that orthodoxy by examining hundreds of real-world communities that had sustainably managed forests, irrigation systems, and coastal fisheries for generations.',
        slashBroken:
          'Political scientist Elinor Ostrom, however, / upended that orthodoxy / by examining hundreds of real-world communities / that had sustainably managed forests, irrigation systems, and coastal fisheries / for generations.',
        korean:
          '그러나 정치학자 엘리너 오스트롬은 여러 세대에 걸쳐 숲, 관개 시설, 연안 어장을 지속가능하게 관리해 온 수백 개의 실제 공동체를 조사함으로써 그 정설을 뒤집었다.',
        segments: [
          { text: 'Political scientist Elinor Ostrom,', role: 'S', labelKo: '주어(S)' },
          { text: 'however,', role: 'CONN', labelKo: '역접 연결어' },
          { text: 'upended', role: 'V', labelKo: '동사(V)' },
          { text: 'that orthodoxy', role: 'O', labelKo: '목적어(O)' },
          { text: 'by examining hundreds of real-world communities', role: 'M', labelKo: '수단(by -ing)' },
          { text: 'that had sustainably managed forests, irrigation systems, and coastal fisheries for generations.', role: 'M', labelKo: '주격 관계절(과거완료)' },
        ],
      },
      {
        id: 'hs08-s4',
        english:
          'What distinguished these successful commons was neither centralized coercion nor private ownership, but clear boundaries, mutual monitoring, and graduated sanctions agreed upon by the users themselves.',
        slashBroken:
          'What distinguished these successful commons / was neither centralized coercion nor private ownership, / but clear boundaries, mutual monitoring, and graduated sanctions / agreed upon by the users themselves.',
        korean:
          '이 성공적인 공유지들을 차별화한 것은 중앙집권적 강압도 사적 소유권도 아니라, 이용자들 스스로 합의한 명확한 경계, 상호 감시, 그리고 단계적 제재였다.',
        segments: [
          { text: 'What distinguished these successful commons', role: 'S', labelKo: 'what 명사절 주어' },
          { text: 'was', role: 'V', labelKo: '단수 동사(V)' },
          { text: 'neither centralized coercion nor private ownership,', role: 'C', labelKo: '보어1(neither A nor B)' },
          { text: 'but clear boundaries, mutual monitoring, and graduated sanctions', role: 'C', labelKo: '보어2(but C)' },
          { text: 'agreed upon by the users themselves.', role: 'M', labelKo: '과거분사 후치수식' },
        ],
      },
      {
        id: 'hs08-s5',
        english:
          'When local stakeholders have a genuine voice in crafting the rules that govern their livelihoods, they view compliance not as an external burden but as a collective safeguard.',
        slashBroken:
          'When local stakeholders have a genuine voice / in crafting the rules that govern their livelihoods, / they view compliance / not as an external burden / but as a collective safeguard.',
        korean:
          '지역 이해관계자들이 자신들의 생계를 규율하는 규칙을 만드는 데 진정한 발언권을 가질 때, 그들은 규칙 준수를 외부의 부담이 아니라 공동의 안전장치로 바라본다.',
        segments: [
          { text: 'When', role: 'CONN', labelKo: '조건·시간 접속사' },
          { text: 'local stakeholders have a genuine voice in crafting the rules that govern their livelihoods,', role: 'M', labelKo: '종속절(관계절 포함)' },
          { text: 'they', role: 'S', labelKo: '주어(S)' },
          { text: 'view', role: 'V', labelKo: '동사(V)' },
          { text: 'compliance', role: 'O', labelKo: '목적어(O)' },
          { text: 'not as an external burden', role: 'M', labelKo: 'not as A' },
          { text: 'but as a collective safeguard.', role: 'M', labelKo: 'but as B' },
        ],
      },
      {
        id: 'hs08-s6',
        english:
          "Ostrom's Nobel Prize-winning insight reminds us that human beings are not helplessly trapped in selfish competition, provided that institutions nurture trust and shared accountability.",
        slashBroken:
          "Ostrom's Nobel Prize-winning insight / reminds us / that human beings are not helplessly trapped / in selfish competition, / provided that institutions nurture trust and shared accountability.",
        korean:
          '노벨상을 수상한 오스트롬의 통찰은, 제도가 신뢰와 공동의 책임을 길러 준다는 조건이라면 인간이 이기적인 경쟁 속에 속수무책으로 갇혀 있지 않음을 우리에게 일깨워 준다.',
        segments: [
          { text: "Ostrom's Nobel Prize-winning insight", role: 'S', labelKo: '주어(S)' },
          { text: 'reminds', role: 'V', labelKo: '4형식 동사(V)' },
          { text: 'us', role: 'O', labelKo: '간접목적어' },
          { text: 'that human beings are not helplessly trapped in selfish competition,', role: 'O', labelKo: '직접목적어(that절)' },
          { text: 'provided that', role: 'CONN', labelKo: '조건 접속사' },
          { text: 'institutions nurture trust and shared accountability.', role: 'M', labelKo: '조건 부사절' },
        ],
      },
    ],
    syntaxNotes: [
      {
        expression: 'the notion that whenever individuals share ~, self-interest inevitably drives ~',
        grammarPointKo: '추상명사 동격의 that + 복합관계부사 whenever',
        explanationKo:
          'the notion의 내용을 완전한 절로 설명하는 동격 접속사 that입니다. that절 내부에 부사절 whenever(~할 때마다)가 먼저 삽입되어 문장이 길어지므로 주절 주어 self-interest를 놓치지 않는 것이 핵심입니다.',
      },
      {
        expression: 'What distinguished these successful commons was neither A nor B, but C',
        grammarPointKo: 'What 명사절 주어 + neither A nor B, but C',
        explanationKo:
          '두 기존 해법(국가 강압, 사유화)을 모두 부정하고 제3의 대안(자치적 규칙과 상호 감시)을 부각하는 전형적인 학술 논증 구문입니다.',
      },
      {
        expression: 'view compliance not as an external burden but as a collective safeguard',
        grammarPointKo: 'view A as B + not ~ but ~ 대조',
        explanationKo:
          '"A를 B가 아니라 C로 여기다"라는 구문으로, 전치사 as가 양쪽에 나란히 병렬 배치되어 논점을 선명하게 대비합니다.',
      },
      {
        expression: 'provided that institutions nurture trust and shared accountability',
        grammarPointKo: '조건 접속사 provided that (~라는 조건이라면)',
        explanationKo:
          '수능 고급 지문에서 if를 대신해 자주 쓰이는 조건 접속사입니다. 분사처럼 보이지만 접속사 역할을 하므로 뒤에 완전한 절이 이어집니다.',
      },
    ],
    keyVocab: [
      { word: 'overexploit', phonetic: '/ˌəʊ.vər.ɪkˈsplɔɪt/', meaningKo: '남획하다, 과도하게 착취하다' },
      { word: 'orthodoxy', phonetic: '/ˈɔː.θə.dɒk.si/', meaningKo: '정설, 통념' },
      { word: 'coercion', phonetic: '/kəʊˈɜː.ʃən/', meaningKo: '강압, 강제' },
      { word: 'sanction', phonetic: '/ˈsæŋk.ʃən/', meaningKo: '제재, 처벌' },
      { word: 'stakeholder', phonetic: '/ˈsteɪk.həʊl.dər/', meaningKo: '이해관계자' },
      { word: 'accountability', phonetic: '/əˌkaʊn.təˈbɪl.ə.ti/', meaningKo: '책임성, 책무' },
    ],
    questions: [
      {
        id: 'hs08-q1',
        questionType: '빈칸 추론',
        questionKo: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
        stimulusBox:
          "Ostrom's Nobel Prize-winning insight reminds us that human beings are not helplessly trapped in selfish competition, provided that ________.",
        options: [
          'governments replace all local councils with central regulators',
          'finite resources are auctioned to the highest private bidders',
          'institutions nurture trust and shared accountability',
          'communities abolish formal sanctions against rule breakers',
          'economic growth takes priority over ecological conservation',
        ],
        answer: 'institutions nurture trust and shared accountability',
        explanationKo:
          '오스트롬은 국가 통제(①)나 완전 사유화(②), 제재 폐지(④)를 모두 거부하고, 이해관계자들이 규칙 수립에 참여하며 상호 감시·단계적 제재를 운영하는 자치 제도 속에서 신뢰와 공동 책임(trust and shared accountability)이 자랄 때 공유지의 비극을 넘을 수 있다고 보았습니다.',
        grammarTag: '조건절(provided that) 핵심 결론 추론',
      },
      {
        id: 'hs08-q2',
        questionType: '글의 순서 (A-B-C)',
        questionKo: '주어진 글 다음에 이어질 글의 순서로 가장 적절한 것을 고르시오.',
        stimulusBox:
          '[주어진 글]\nIn 1968, ecologist Garrett Hardin popularized the notion that whenever individuals share unrestricted access to a finite resource such as a pasture or fishery, self-interest inevitably drives them to overexploit it.\n\n(A) Political scientist Elinor Ostrom, however, upended that orthodoxy by examining hundreds of real-world communities that had sustainably managed shared resources. What distinguished these commons was clear boundaries, mutual monitoring, and graduated sanctions.\n(B) When local stakeholders have a genuine voice in crafting the rules that govern their livelihoods, they view compliance not as an external burden but as a collective safeguard. Her insight reminds us that cooperation thrives when institutions nurture trust.\n(C) For decades, policymakers accepted this bleak forecast as ironclad law, concluding that shared resources could be rescued only through strict state control or full privatization.',
        options: [
          '(A) - (C) - (B)',
          '(B) - (A) - (C)',
          '(C) - (A) - (B)',
          '(C) - (B) - (A)',
          '(B) - (C) - (A)',
        ],
        answer: '(C) - (A) - (B)',
        explanationKo:
          '(C)의 "this bleak forecast(이 암울한 예측)"가 주어진 글의 하딘의 공유지 비극을 가리킵니다. 이어 (A)의 "however, upended that orthodoxy(그러나 그 정설을 뒤집었다)"가 (C)의 국가 통제/사유화 정설을 정면 반박하며 오스트롬을 등장시키고, (B)가 그 공동체 규칙의 작동 원리와 "Her insight"로 마무리하므로 (C)-(A)-(B)가 완벽합니다.',
        grammarTag: '지시어 연쇄(this forecast → that orthodoxy → Her insight)',
      },
      {
        id: 'hs08-q3',
        questionType: '요약문 완성',
        questionKo: '윗글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?',
        stimulusBox:
          'Challenging the assumption that shared resources inevitably collapse without state or private control, Ostrom showed that local communities can manage commons (A) ________ when users participate in establishing rules grounded in mutual (B) ________.',
        options: [
          '(A) sustainably — (B) trust',
          '(A) profitably — (B) secrecy',
          '(A) temporarily — (B) rivalry',
          '(A) rigidly — (B) coercion',
          '(A) carelessly — (B) independence',
        ],
        answer: '(A) sustainably — (B) trust',
        explanationKo:
          '오스트롬이 조사한 공동체들은 자원을 지속가능하게(sustainably) 관리했으며, 핵심 조건은 강압(coercion)이나 경쟁(rivalry)이 아니라 상호 신뢰(trust)와 공동 책임에 기반한 참여적 규칙이었습니다.',
        grammarTag: '통념 대조형 요약문 완성',
      },
    ],
  },

  /* =========================================================================
   * HS09 — [미디어 리터러시 · B2] Algorithmic Echo Chambers and Critical Reading
   * ========================================================================= */
  {
    id: 'hs09',
    number: 9,
    cefrLevel: 'b2',
    csatGradeTag: '고3 모의평가 · 1등급',
    topicBadge: '미디어 리터러시',
    titleEn: 'Algorithmic Echo Chambers and Critical Reading',
    titleKo: '알고리즘 에코챔버와 비판적 문해력',
    estimatedMin: 9,
    sentences: [
      {
        id: 'hs09-s1',
        english:
          'Digital platforms are engineered not primarily to broaden our intellectual horizons, but to maximize the number of minutes we remain glued to our screens.',
        slashBroken:
          'Digital platforms are engineered / not primarily to broaden our intellectual horizons, / but to maximize the number of minutes / we remain glued to our screens.',
        korean:
          '디지털 플랫폼은 주로 우리의 지적 지평을 넓히기 위해서가 아니라, 우리가 화면에 시선이 붙어 있는 시간(분)을 극대화하도록 설계되어 있다.',
        segments: [
          { text: 'Digital platforms', role: 'S', labelKo: '주어(S)' },
          { text: 'are engineered', role: 'V', labelKo: '수동태 동사(V)' },
          { text: 'not primarily to broaden our intellectual horizons,', role: 'M', labelKo: '목적1(not A)' },
          { text: 'but to maximize the number of minutes', role: 'M', labelKo: '목적2(but B)' },
          { text: 'we remain glued to our screens.', role: 'M', labelKo: '관계절(remain+p.p.)' },
        ],
      },
      {
        id: 'hs09-s2',
        english:
          'Because content that confirms our existing beliefs or provokes moral outrage generates more clicks than nuanced analysis, recommendation engines steadily narrow our information diets.',
        slashBroken:
          'Because content / that confirms our existing beliefs or provokes moral outrage / generates more clicks than nuanced analysis, / recommendation engines steadily narrow / our information diets.',
        korean:
          '기존 신념을 확인해 주거나 도덕적 분노를 유발하는 콘텐츠가 정교한 분석보다 더 많은 클릭을 만들어 내기 때문에, 추천 엔진은 우리의 정보 식단을 꾸준히 좁혀 나간다.',
        segments: [
          { text: 'Because', role: 'CONN', labelKo: '이유 접속사' },
          { text: 'content that confirms our existing beliefs or provokes moral outrage generates more clicks than nuanced analysis,', role: 'M', labelKo: '이유 부사절(단수 수일치)' },
          { text: 'recommendation engines', role: 'S', labelKo: '주어(S)' },
          { text: 'steadily', role: 'M', labelKo: '부사' },
          { text: 'narrow', role: 'V', labelKo: '동사(V)' },
          { text: 'our information diets.', role: 'O', labelKo: '목적어(O)' },
        ],
      },
      {
        id: 'hs09-s3',
        english:
          'Trapped inside such algorithmic echo chambers, readers may mistake the repetition of a claim for proof of its validity, a cognitive shortcut psychologists call the illusory truth effect.',
        slashBroken:
          'Trapped inside such algorithmic echo chambers, / readers may mistake the repetition of a claim / for proof of its validity, / a cognitive shortcut / psychologists call the illusory truth effect.',
        korean:
          '그러한 알고리즘 에코챔버 안에 갇히면 독자들은 주장의 반복을 그 타당성의 증거로 착각할 수 있는데, 이는 심리학자들이 착각적 진실 효과라고 부르는 인지적 지름길이다.',
        segments: [
          { text: 'Trapped inside such algorithmic echo chambers,', role: 'M', labelKo: '수동 분사구문' },
          { text: 'readers', role: 'S', labelKo: '주어(S)' },
          { text: 'may mistake', role: 'V', labelKo: '동사구(V)' },
          { text: 'the repetition of a claim', role: 'O', labelKo: '목적어(O)' },
          { text: 'for proof of its validity,', role: 'M', labelKo: 'mistake A for B' },
          { text: 'a cognitive shortcut psychologists call the illusory truth effect.', role: 'M', labelKo: '동격 명사구+관계절' },
        ],
      },
      {
        id: 'hs09-s4',
        english:
          'Resisting this quiet polarization demands that citizens practice lateral reading — stepping outside a single post to verify who funded it and what credible counterevidence exists.',
        slashBroken:
          'Resisting this quiet polarization / demands / that citizens practice lateral reading / — stepping outside a single post / to verify who funded it and what credible counterevidence exists.',
        korean:
          '이 조용한 양극화에 저항하는 것은 시민들이 수평적 읽기—단일 게시물 밖으로 나와 누가 자금을 댔는지 그리고 어떤 신뢰할 만한 반증이 존재하는지 검증하는 것—를 실천할 것을 요구한다.',
        segments: [
          { text: 'Resisting this quiet polarization', role: 'S', labelKo: '동명사 주어(단수)' },
          { text: 'demands', role: 'V', labelKo: '당위성 요구 동사(V)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'citizens practice lateral reading', role: 'O', labelKo: '당위성 동사원형(practice)' },
          { text: '—', role: 'PLAIN' },
          { text: 'stepping outside a single post to verify who funded it and what credible counterevidence exists.', role: 'M', labelKo: '부연 설명+간접의문문' },
        ],
      },
      {
        id: 'hs09-s5',
        english:
          'Only by deliberately seeking out well-reasoned opposing perspectives can we preserve the intellectual humility essential for democratic dialogue.',
        slashBroken:
          'Only by deliberately seeking out / well-reasoned opposing perspectives / can we preserve / the intellectual humility / essential for democratic dialogue.',
        korean:
          '의도적으로 논리 정연한 반대 관점을 찾아 나섬으로써만 우리는 민주적 대화에 필수적인 지적 겸손함을 지킬 수 있다.',
        segments: [
          { text: 'Only by deliberately seeking out well-reasoned opposing perspectives', role: 'M', labelKo: 'Only 전치사구 문두 강조' },
          { text: 'can', role: 'V', labelKo: '도치 조동사' },
          { text: 'we', role: 'S', labelKo: '주어(S)' },
          { text: 'preserve', role: 'V', labelKo: '본동사(V)' },
          { text: 'the intellectual humility', role: 'O', labelKo: '목적어(O)' },
          { text: 'essential for democratic dialogue.', role: 'M', labelKo: '형용사구 후치수식' },
        ],
      },
    ],
    syntaxNotes: [
      {
        expression: 'Resisting this quiet polarization demands that citizens practice lateral reading',
        grammarPointKo: '요구·주장 동사 demand + that + 주어 + (should) 동사원형',
        explanationKo:
          'demand, insist, recommend 등 당위성 동사의 목적어 that절에는 "~해야 한다"는 의미로 should가 생략된 동사원형(practice)이 옵니다.',
      },
      {
        expression: 'content that confirms our existing beliefs or provokes moral outrage generates ~',
        grammarPointKo: '관계절 수식을 받는 단수 주어(content) 수일치',
        explanationKo:
          '불가산 단수명사 content가 주어이므로 관계절 안의 동사 confirms / provokes뿐 아니라 주절 동사도 단수 generates로 일치시켜야 합니다.',
      },
      {
        expression: 'Trapped inside such algorithmic echo chambers, readers may mistake A for B',
        grammarPointKo: '수동 분사구문 + mistake A for B',
        explanationKo:
          '독자들이 에코챔버에 "갇힌" 수동 상태이므로 Trapped를 쓰며, mistake A for B는 "A를 B로 착각하다"라는 필수 구동사입니다.',
      },
      {
        expression: 'Only by deliberately seeking out ~ can we preserve ~',
        grammarPointKo: 'Only + 전치사구 문두 강조 도치',
        explanationKo:
          'Only by -ing 구문이 문장 맨 앞에 오면 주절은 [조동사 can + 주어 we + 동사원형 preserve]로 도치됩니다.',
      },
    ],
    keyVocab: [
      { word: 'provoke', phonetic: '/prəˈvəʊk/', meaningKo: '유발하다, 자극하다' },
      { word: 'nuanced', phonetic: '/ˈnjuː.ɑːnst/', meaningKo: '미묘한 차이를 담은, 정교한' },
      { word: 'validity', phonetic: '/vəˈlɪd.ə.ti/', meaningKo: '타당성, 유효성' },
      { word: 'polarization', phonetic: '/ˌpəʊ.lə.raɪˈzeɪ.ʃən/', meaningKo: '양극화' },
      { word: 'counterevidence', phonetic: '/ˌkaʊn.tərˈev.ɪ.dəns/', meaningKo: '반증' },
      { word: 'humility', phonetic: '/hjuːˈmɪl.ə.ti/', meaningKo: '겸손함' },
    ],
    questions: [
      {
        id: 'hs09-q1',
        questionType: '주제·요지',
        questionKo: '윗글의 필자가 주장하는 바로 가장 적절한 것을 고르시오.',
        options: [
          '알고리즘 에코챔버를 극복하기 위해 출처를 교차 검증하고 반대 관점을 의도적으로 탐색해야 한다.',
          '청소년의 미디어 중독을 막기 위해 디지털 플랫폼의 추천 알고리즘을 전면 폐지해야 한다.',
          '반복 노출되는 정보는 다수의 검증을 거친 것이므로 신뢰할 만한 근거로 활용할 수 있다.',
          '민주적 토론의 효율성을 높이려면 자신과 의견이 비슷한 커뮤니티에 집중 참여해야 한다.',
          '온라인 기사를 읽을 때는 다른 사이트로 이동하지 말고 원문 텍스트를 정독해야 한다.',
        ],
        answer: '알고리즘 에코챔버를 극복하기 위해 출처를 교차 검증하고 반대 관점을 의도적으로 탐색해야 한다.',
        explanationKo:
          '필자는 추천 알고리즘이 정보 편식과 착각적 진실 효과를 낳는다고 진단한 뒤, 단일 게시물 밖으로 나와 자금 출처와 반증을 확인하는 수평적 읽기(lateral reading)와 의도적 반대 관점 탐색을 핵심 해법으로 주장하고 있습니다. ⑤는 수평적 읽기와 정반대의 오답 함정입니다.',
        grammarTag: '당위성(demands / Only by) 필자 주장 파악',
      },
      {
        id: 'hs09-q2',
        questionType: '문장 삽입',
        questionKo: '글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳을 고르시오.',
        stimulusBox:
          '[주어진 문장]\nTrapped inside such algorithmic echo chambers, readers may mistake the repetition of a claim for proof of its validity, a cognitive shortcut psychologists call the illusory truth effect.\n\nDigital platforms are engineered not primarily to broaden our intellectual horizons, but to maximize the number of minutes we remain glued to our screens. ( ① ) Because content that confirms our existing beliefs or provokes moral outrage generates more clicks than nuanced analysis, recommendation engines steadily narrow our information diets. ( ② ) Resisting this quiet polarization demands that citizens practice lateral reading—stepping outside a single post to verify who funded it and what credible counterevidence exists. ( ③ ) Only by deliberately seeking out well-reasoned opposing perspectives can we preserve the intellectual humility essential for democratic dialogue. ( ④ ) Without such active habits, digital convenience quietly erodes civic judgment. ( ⑤ )',
        options: ['①', '②', '③', '④', '⑤'],
        answer: '②',
        explanationKo:
          '주어진 문장의 "such algorithmic echo chambers(그러한 알고리즘 에코챔버)"는 ② 앞 문장에서 추천 엔진이 "기존 신념만 확인하며 정보 식단을 꾸준히 좁히는" 현상을 받아 주며, 반복을 진실로 착각하는 문제가 ② 뒤의 "this quiet polarization(이 조용한 양극화)"과 수평적 읽기 해결책으로 자연스럽게 이어집니다.',
        grammarTag: '지시어(such echo chambers) + 문제-해결 전환점',
      },
      {
        id: 'hs09-q3',
        questionType: '어법성 판단',
        questionKo: '다음 밑줄 친 ①~⑤ 중 어법상 틀린 것을 고르시오.',
        stimulusBox:
          'Digital platforms are engineered ① to maximize screen time. Because content that confirms our existing beliefs or provokes moral outrage ② generate more clicks than nuanced analysis, engines narrow our information diets. ③ Trapped inside echo chambers, readers mistake repetition for proof. Resisting polarization demands that citizens ④ practice lateral reading. Only by seeking opposing perspectives ⑤ can we preserve intellectual humility.',
        options: [
          '① to maximize',
          '② generate',
          '③ Trapped',
          '④ practice',
          '⑤ can we preserve',
        ],
        answer: '② generate',
        explanationKo:
          '② generate는 틀렸습니다. Because절의 진짜 주어는 불가산 단수명사 content입니다. 관계절 안의 복수명사 beliefs에 현혹되기 쉬운 수능 대표 근접성 수일치 함정으로, 단수 동사 generates로 고쳐야 합니다. ① 목적 to부정사 정답, ③ 수동 분사구문 Trapped 정답, ④ demands that 뒤 동사원형 practice 정답, ⑤ Only by 문두 도치 can we preserve 정답입니다.',
        grammarTag: '수식어구 함정 수일치 (content ~ generates)',
      },
    ],
  },

  /* =========================================================================
   * HS10 — [언어학·인지과학 · C1] Bilingual Brains and Cognitive Flexibility
   * ========================================================================= */
  {
    id: 'hs10',
    number: 10,
    cefrLevel: 'c1',
    csatGradeTag: '수능 실전 · 1등급 킬러',
    topicBadge: '언어학·인지과학',
    titleEn: 'Bilingual Brains and Cognitive Flexibility',
    titleKo: '다중언어 뇌와 인지적 유연성',
    estimatedMin: 10,
    sentences: [
      {
        id: 'hs10-s1',
        english:
          'For much of the early twentieth century, educators worried that raising children with two languages would confuse developing minds and hinder academic progress.',
        slashBroken:
          'For much of the early twentieth century, / educators worried / that raising children with two languages / would confuse developing minds / and hinder academic progress.',
        korean:
          '20세기 초반 상당 기간 동안 교육자들은 아이들을 두 언어로 양육하는 것이 발달 중인 정신을 혼란스럽게 하고 학업 진전을 방해할 것이라고 우려했다.',
        segments: [
          { text: 'For much of the early twentieth century,', role: 'M', labelKo: '시간 부사구' },
          { text: 'educators', role: 'S', labelKo: '주어(S)' },
          { text: 'worried', role: 'V', labelKo: '동사(V)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'raising children with two languages', role: 'S', labelKo: '동명사 주어(S′)' },
          { text: 'would confuse developing minds and hinder academic progress.', role: 'V', labelKo: '병렬 동사구' },
        ],
      },
      {
        id: 'hs10-s2',
        english:
          'Neuroscientific studies over the past three decades, however, have thoroughly debunked this myth, showing that both linguistic systems remain simultaneously active even when a speaker uses only one.',
        slashBroken:
          'Neuroscientific studies over the past three decades, however, / have thoroughly debunked this myth, / showing that both linguistic systems / remain simultaneously active / even when a speaker uses only one.',
        korean:
          '그러나 지난 30년간의 신경과학 연구들은 이 통념이 틀렸음을 철저히 입증하며, 화자가 한 언어만 사용할 때조차 두 언어 체계가 모두 동시에 활성화되어 있음을 보여주었다.',
        segments: [
          { text: 'Neuroscientific studies over the past three decades,', role: 'S', labelKo: '주어(S)' },
          { text: 'however,', role: 'CONN', labelKo: '역접 연결어' },
          { text: 'have thoroughly debunked', role: 'V', labelKo: '현재완료 동사(V)' },
          { text: 'this myth,', role: 'O', labelKo: '목적어(O)' },
          { text: 'showing that both linguistic systems remain simultaneously active even when a speaker uses only one.', role: 'M', labelKo: '결과 분사구문(remain+형용사)' },
        ],
      },
      {
        id: 'hs10-s3',
        english:
          'Because bilingual speakers must constantly select the appropriate lexicon while suppressing interference from the non-target language, their prefrontal cortex receives continuous executive-control training.',
        slashBroken:
          'Because bilingual speakers must constantly select the appropriate lexicon / while suppressing interference from the non-target language, / their prefrontal cortex receives / continuous executive-control training.',
        korean:
          '이중언어 화자들은 비목표 언어의 간섭을 억제하면서 적절한 어휘를 끊임없이 선택해야 하므로, 그들의 전전두엽 피질은 지속적인 집행 통제 훈련을 받는다.',
        segments: [
          { text: 'Because', role: 'CONN', labelKo: '이유 접속사' },
          { text: 'bilingual speakers must constantly select the appropriate lexicon while suppressing interference from the non-target language,', role: 'M', labelKo: '이유 부사절(while -ing)' },
          { text: 'their prefrontal cortex', role: 'S', labelKo: '주어(S)' },
          { text: 'receives', role: 'V', labelKo: '동사(V)' },
          { text: 'continuous executive-control training.', role: 'O', labelKo: '목적어(O)' },
        ],
      },
      {
        id: 'hs10-s4',
        english:
          'The more frequently individuals switch between distinct grammatical frameworks, the more adept they become at shifting attention and filtering out irrelevant distractions.',
        slashBroken:
          'The more frequently individuals switch / between distinct grammatical frameworks, / the more adept they become / at shifting attention and filtering out irrelevant distractions.',
        korean:
          '개인들이 서로 다른 문법적 틀 사이를 더 자주 전환할수록, 주의력을 전환하고 무관한 방해 요소를 걸러 내는 데 더 능숙해진다.',
        segments: [
          { text: 'The more frequently', role: 'M', labelKo: 'The+비교급1' },
          { text: 'individuals switch between distinct grammatical frameworks,', role: 'M', labelKo: '비례 조건절' },
          { text: 'the more adept', role: 'C', labelKo: 'The+비교급2(보어)' },
          { text: 'they', role: 'S', labelKo: '주어(S)' },
          { text: 'become', role: 'V', labelKo: '동사(V)' },
          { text: 'at shifting attention and filtering out irrelevant distractions.', role: 'M', labelKo: 'adept at -ing 병렬' },
        ],
      },
      {
        id: 'hs10-s5',
        english:
          'Beyond purely analytical advantages, navigating multiple languages fosters perspective-taking by reminding speakers that no single vocabulary holds a monopoly on categorizing human experience.',
        slashBroken:
          'Beyond purely analytical advantages, / navigating multiple languages / fosters perspective-taking / by reminding speakers / that no single vocabulary holds a monopoly / on categorizing human experience.',
        korean:
          '순수하게 분석적인 이점을 넘어, 여러 언어를 넘나드는 일은 어떤 단일 어휘 체계도 인간 경험을 분류하는 독점권을 쥐고 있지 않음을 일깨워 줌으로써 타인의 관점 수용 능력을 길러 준다.',
        segments: [
          { text: 'Beyond purely analytical advantages,', role: 'M', labelKo: '전환 부사구' },
          { text: 'navigating multiple languages', role: 'S', labelKo: '동명사 주어(단수)' },
          { text: 'fosters', role: 'V', labelKo: '단수 동사(V)' },
          { text: 'perspective-taking', role: 'O', labelKo: '목적어(O)' },
          { text: 'by reminding speakers that no single vocabulary holds a monopoly on categorizing human experience.', role: 'M', labelKo: '수단(by reminding A that~)' },
        ],
      },
      {
        id: 'hs10-s6',
        english:
          'It is no surprise, then, that longitudinal research links lifelong bilingualism not only to greater cognitive adaptability in youth, but also to delayed onset of age-related mental decline.',
        slashBroken:
          'It is no surprise, then, / that longitudinal research links lifelong bilingualism / not only to greater cognitive adaptability in youth, / but also to delayed onset of age-related mental decline.',
        korean:
          '그렇다면 종단 연구가 평생의 이중언어 사용을 젊은 시절의 더 뛰어난 인지적 적응력뿐만 아니라 노화 관련 정신 기능 저하의 발병 지연과도 연관 짓는 것은 결코 놀라운 일이 아니다.',
        segments: [
          { text: 'It', role: 'S', labelKo: '가주어(It)' },
          { text: 'is', role: 'V', labelKo: '동사(V)' },
          { text: 'no surprise,', role: 'C', labelKo: '보어(C)' },
          { text: 'then,', role: 'CONN', labelKo: '결론 부사' },
          { text: 'that longitudinal research links lifelong bilingualism', role: 'S', labelKo: '진주어 that절' },
          { text: 'not only to greater cognitive adaptability in youth,', role: 'M', labelKo: 'not only to A' },
          { text: 'but also to delayed onset of age-related mental decline.', role: 'M', labelKo: 'but also to B' },
        ],
      },
    ],
    syntaxNotes: [
      {
        expression: 'The more frequently individuals switch ~, the more adept they become ~',
        grammarPointKo: 'The + 비교급, the + 비교급 비례 구문',
        explanationKo:
          '"~할수록 더 ~하다"를 나타냅니다. 뒤 절의 more adept는 become의 보어이므로 부사 adeptly가 아니라 형용사 adept가 앞으로 이동한 형태입니다.',
      },
      {
        expression: 'It is no surprise, then, that longitudinal research links ~',
        grammarPointKo: '가주어 It — 진주어 that절',
        explanationKo:
          '문두의 It이 형식상 주어 역할을 하고, that 이하 전체 명사절이 실제 주어(진주어)입니다. 앞선 근거들을 종합하며 자연스럽게 결론을 유도하는 수능 단골 표현입니다.',
      },
      {
        expression: 'links lifelong bilingualism not only to A, but also to B',
        grammarPointKo: 'link A to B + not only ~ but also 병렬',
        explanationKo:
          'link A to B(A를 B와 연관 짓다) 구조에서 전치사 to가 양쪽에 모두 살아 있어 병렬 구조가 명쾌하게 드러납니다.',
      },
      {
        expression: 'both linguistic systems remain simultaneously active',
        grammarPointKo: '2형식 상태동사 remain + 형용사 보어',
        explanationKo:
          'remain은 "~인 상태로 남다"라는 2형식 동사이므로 보어 자리에 부사 actively가 아니라 형용사 active가 와야 합니다(simultaneously는 active를 수식하는 부사).',
      },
    ],
    keyVocab: [
      { word: 'debunk', phonetic: '/ˌdiːˈbʌŋk/', meaningKo: '(통념·신화가) 틀렸음을 입증하다' },
      { word: 'simultaneously', phonetic: '/ˌsɪm.əlˈteɪ.ni.əs.li/', meaningKo: '동시에' },
      { word: 'suppress', phonetic: '/səˈpres/', meaningKo: '억제하다, 억누르다' },
      { word: 'adept', phonetic: '/əˈdept/', meaningKo: '능숙한, 숙달된' },
      { word: 'monopoly', phonetic: '/məˈnɒp.əl.i/', meaningKo: '독점, 전매' },
      { word: 'onset', phonetic: '/ˈɒn.set/', meaningKo: '발병, 시작' },
    ],
    questions: [
      {
        id: 'hs10-q1',
        questionType: '글의 순서 (A-B-C)',
        questionKo: '주어진 글 다음에 이어질 글의 순서로 가장 적절한 것을 고르시오.',
        stimulusBox:
          '[주어진 글]\nFor much of the early twentieth century, educators worried that raising children with two languages would confuse developing minds and hinder academic progress.\n\n(A) The more frequently individuals switch between distinct grammatical frameworks, the more adept they become at shifting attention. Beyond purely analytical advantages, navigating multiple languages also fosters perspective-taking.\n(B) Neuroscientific studies over the past three decades, however, have thoroughly debunked this myth, showing that both linguistic systems remain simultaneously active even when a speaker uses only one.\n(C) Because bilingual speakers must constantly select the appropriate lexicon while suppressing interference from the non-target language, their prefrontal cortex receives continuous executive-control training.',
        options: [
          '(A) - (C) - (B)',
          '(B) - (A) - (C)',
          '(B) - (C) - (A)',
          '(C) - (A) - (B)',
          '(C) - (B) - (A)',
        ],
        answer: '(B) - (C) - (A)',
        explanationKo:
          '(B)의 "however, have thoroughly debunked this myth"가 주어진 글의 20세기 초 우려(이중언어 혼란설)를 정면 반박합니다. 이어 (C)가 (B)의 "두 언어 체계 동시 활성화" 때문에 비목표 언어 간섭을 억제하며 전전두엽 훈련을 받는 인과를 설명하고, (A)가 그 결과로 주의 전환 숙달 및 관점 수용으로 확장하므로 (B)-(C)-(A)가 정답입니다.',
        grammarTag: '통념 반박(this myth) → 뇌과학 메커니즘 → 인지 확장',
      },
      {
        id: 'hs10-q2',
        questionType: '문장 삽입',
        questionKo: '글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳을 고르시오.',
        stimulusBox:
          '[주어진 문장]\nBeyond purely analytical advantages, navigating multiple languages fosters perspective-taking by reminding speakers that no single vocabulary holds a monopoly on categorizing human experience.\n\nFor much of the early twentieth century, educators worried that raising children with two languages would confuse developing minds. ( ① ) Neuroscientific studies, however, have thoroughly debunked this myth, showing that both linguistic systems remain simultaneously active. ( ② ) Because bilingual speakers must constantly select the appropriate lexicon while suppressing interference, their prefrontal cortex receives continuous executive-control training. ( ③ ) The more frequently individuals switch between distinct grammatical frameworks, the more adept they become at shifting attention and filtering out irrelevant distractions. ( ④ ) It is no surprise, then, that longitudinal research links lifelong bilingualism not only to greater cognitive adaptability in youth, but also to delayed onset of age-related mental decline. ( ⑤ )',
        options: ['①', '②', '③', '④', '⑤'],
        answer: '④',
        explanationKo:
          '주어진 문장의 도입부 "Beyond purely analytical advantages(순수하게 분석적인 이점을 넘어)"는 앞서 제시된 전전두엽 집행 통제·주의 전환·방해 요소 필터링(분석적 이점)이 끝난 직후이자, 전체 결론("It is no surprise, then...") 직전인 ④에 들어가야 논리적 도약 없이 매끄럽게 연결됩니다.',
        grammarTag: '전환 표현(Beyond A) 앞뒤 내용 경계 포착',
      },
      {
        id: 'hs10-q3',
        questionType: '요약문 완성',
        questionKo: '윗글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?',
        stimulusBox:
          "Contrary to earlier fears of mental confusion, managing two active language systems strengthens the brain's (A) ________ control, promoting both cognitive flexibility and greater (B) ________ against age-related decline.",
        options: [
          '(A) executive — (B) resilience',
          '(A) involuntary — (B) sensitivity',
          '(A) emotional — (B) vulnerability',
          '(A) temporary — (B) dependence',
          '(A) visual — (B) fatigue',
        ],
        answer: '(A) executive — (B) resilience',
        explanationKo:
          '본문의 "continuous executive-control training"이 (A) executive로, "delayed onset of age-related mental decline"이 노화 저하에 맞서는 (B) resilience(회복력·저항력)로 정확히 요약됩니다.',
        grammarTag: '신경과학 개념어 대응 요약',
      },
    ],
  },

  /* =========================================================================
   * HS11 — [예술철학 · B2] Aesthetics and Empathic Imagination
   * ========================================================================= */
  {
    id: 'hs11',
    number: 11,
    cefrLevel: 'b2',
    csatGradeTag: '고3 모의평가 · 1등급',
    topicBadge: '예술철학',
    titleEn: 'Aesthetics and Empathic Imagination',
    titleKo: '예술 감상과 공감적 상상력',
    estimatedMin: 9,
    sentences: [
      {
        id: 'hs11-s1',
        english:
          'Many spectators initially assume that appreciating a painting or symphony is merely a detached exercise in judging technical skill or visual harmony.',
        slashBroken:
          'Many spectators initially assume / that appreciating a painting or symphony / is merely a detached exercise / in judging technical skill or visual harmony.',
        korean:
          '많은 감상자들은 회화나 교향곡을 감상하는 일이 단순히 기교적 숙련도나 시각적 조화를 평가하는 초연한 활동일 뿐이라고 처음에 가정한다.',
        segments: [
          { text: 'Many spectators', role: 'S', labelKo: '주어(S)' },
          { text: 'initially', role: 'M', labelKo: '부사' },
          { text: 'assume', role: 'V', labelKo: '동사(V)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'appreciating a painting or symphony', role: 'S', labelKo: '동명사 주어(S′)' },
          { text: 'is', role: 'V', labelKo: '종속절 동사(V′)' },
          { text: 'merely a detached exercise', role: 'C', labelKo: '주격 보어(C′)' },
          { text: 'in judging technical skill or visual harmony.', role: 'M', labelKo: '전치사+동명사 수식' },
        ],
      },
      {
        id: 'hs11-s2',
        english:
          'Yet philosophers of aesthetics argue that meaningful artistic engagement relies far more heavily on empathic imagination than on passive visual inspection.',
        slashBroken:
          'Yet philosophers of aesthetics argue / that meaningful artistic engagement / relies far more heavily / on empathic imagination / than on passive visual inspection.',
        korean:
          '그러나 예술철학자들은 의미 있는 예술적 참여가 수동적인 시각적 관찰보다는 공감적 상상력에 훨씬 더 크게 의존한다고 주장한다.',
        segments: [
          { text: 'Yet', role: 'CONN', labelKo: '역접 접속사' },
          { text: 'philosophers of aesthetics', role: 'S', labelKo: '주어(S)' },
          { text: 'argue', role: 'V', labelKo: '동사(V)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'meaningful artistic engagement', role: 'S', labelKo: '종속절 주어(S′)' },
          { text: 'relies', role: 'V', labelKo: '종속절 동사(V′)' },
          { text: 'far more heavily on empathic imagination', role: 'M', labelKo: '비교급 강조+전치사구' },
          { text: 'than on passive visual inspection.', role: 'M', labelKo: '비교 병렬(on A than on B)' },
        ],
      },
      {
        id: 'hs11-s3',
        english:
          'When viewers stand before a weathered portrait or listen to a mournful cello passage, they do not simply register pigment or sound waves; they mentally inhabit the emotional posture implied by the work.',
        slashBroken:
          'When viewers stand before a weathered portrait / or listen to a mournful cello passage, / they do not simply register pigment or sound waves; / they mentally inhabit the emotional posture / implied by the work.',
        korean:
          '감상자들이 세월이 묻어난 초상화 앞에 서거나 애절한 첼로 선율을 들을 때, 그들은 단순히 물감이나 음파를 지각하는 데 그치지 않고 작품이 암시하는 정서적 태도 속으로 마음속 깊이 들어간다.',
        segments: [
          { text: 'When', role: 'CONN', labelKo: '시간 접속사' },
          { text: 'viewers stand before a weathered portrait or listen to a mournful cello passage,', role: 'M', labelKo: '종속절(병렬 동사)' },
          { text: 'they', role: 'S', labelKo: '주어(S)' },
          { text: 'do not simply register', role: 'V', labelKo: '부정 동사구(V)' },
          { text: 'pigment or sound waves;', role: 'O', labelKo: '목적어(O)' },
          { text: 'they', role: 'S', labelKo: '주어(S)' },
          { text: 'mentally', role: 'M', labelKo: '부사' },
          { text: 'inhabit', role: 'V', labelKo: '동사(V)' },
          { text: 'the emotional posture', role: 'O', labelKo: '목적어(O)' },
          { text: 'implied by the work.', role: 'M', labelKo: '과거분사 후치수식' },
        ],
      },
      {
        id: 'hs11-s4',
        english:
          "Far from demanding that we share the artist's exact biography, aesthetic empathy invites us to bridge the distance between unfamiliar perspectives and our own lived memory.",
        slashBroken:
          "Far from demanding / that we share the artist's exact biography, / aesthetic empathy invites us / to bridge the distance / between unfamiliar perspectives and our own lived memory.",
        korean:
          '우리가 예술가와 똑같은 생애를 공유해야 한다고 요구하기는커녕, 미적 공감은 낯선 관점과 우리 자신의 살아온 기억 사이의 거리를 잇도록 우리를 초대한다.',
        segments: [
          { text: "Far from demanding that we share the artist's exact biography,", role: 'M', labelKo: 'Far from -ing+당위절' },
          { text: 'aesthetic empathy', role: 'S', labelKo: '주어(S)' },
          { text: 'invites', role: 'V', labelKo: '5형식 동사(V)' },
          { text: 'us', role: 'O', labelKo: '목적어(O)' },
          { text: 'to bridge the distance between unfamiliar perspectives and our own lived memory.', role: 'C', labelKo: '목적격 보어(to V)' },
        ],
      },
      {
        id: 'hs11-s5',
        english:
          'What makes a great novel or canvas enduring is therefore not its ability to mirror reality with photographic precision, but its power to awaken subtle feelings that ordinary language struggles to articulate.',
        slashBroken:
          'What makes a great novel or canvas enduring / is therefore / not its ability to mirror reality with photographic precision, / but its power to awaken subtle feelings / that ordinary language struggles to articulate.',
        korean:
          '따라서 위대한 소설이나 그림을 오래도록 남게 만드는 것은 현실을 사진처럼 정밀하게 비추는 능력이 아니라, 일상 언어가 표현하기 어려워하는 미묘한 감정을 깨우는 힘이다.',
        segments: [
          { text: 'What makes a great novel or canvas enduring', role: 'S', labelKo: 'what 명사절 주어(5형식)' },
          { text: 'is', role: 'V', labelKo: '단수 동사(V)' },
          { text: 'therefore', role: 'CONN', labelKo: '인과 연결어' },
          { text: 'not its ability to mirror reality with photographic precision,', role: 'C', labelKo: '보어1(not A)' },
          { text: 'but its power to awaken subtle feelings', role: 'C', labelKo: '보어2(but B)' },
          { text: 'that ordinary language struggles to articulate.', role: 'M', labelKo: '목적격 관계절' },
        ],
      },
      {
        id: 'hs11-s6',
        english:
          'In this sense, encountering art serves as a quiet rehearsal for moral perception, expanding our capacity to recognize dignity in lives very different from our own.',
        slashBroken:
          'In this sense, / encountering art serves as a quiet rehearsal / for moral perception, / expanding our capacity / to recognize dignity in lives very different from our own.',
        korean:
          '이런 의미에서 예술과의 만남은 도덕적 지각을 위한 조용한 예행연습 역할을 하며, 우리 자신과 매우 다른 삶 속에서도 존엄성을 알아보는 우리의 역량을 확장한다.',
        segments: [
          { text: 'In this sense,', role: 'M', labelKo: '요약 부사구' },
          { text: 'encountering art', role: 'S', labelKo: '동명사 주어(S)' },
          { text: 'serves as', role: 'V', labelKo: '동사구(V)' },
          { text: 'a quiet rehearsal for moral perception,', role: 'O', labelKo: '전치사 목적어' },
          { text: 'expanding our capacity to recognize dignity in lives very different from our own.', role: 'M', labelKo: '결과 분사구문+형용사 후치수식' },
        ],
      },
    ],
    syntaxNotes: [
      {
        expression: 'the emotional posture implied by the work',
        grammarPointKo: '과거분사(p.p.) 후치수식',
        explanationKo:
          '정서적 태도(posture)는 작품에 의해 "암시되는" 수동 대상이므로 which is가 생략된 과거분사구 implied by the work가 뒤에서 수식합니다.',
      },
      {
        expression: "Far from demanding that we share the artist's exact biography",
        grammarPointKo: 'Far from + 동명사 + 당위성 demand that S + 동사원형',
        explanationKo:
          '"~하기는커녕"을 뜻하는 Far from 뒤에는 동명사 demanding이 오며, 요구 동사 demand의 목적어 that절에는 should가 생략된 동사원형 share가 쓰입니다.',
      },
      {
        expression: 'What makes a great novel or canvas enduring is ~ not A, but B',
        grammarPointKo: 'What 명사절 단수 주어 + 5형식 make O C + not A but B',
        explanationKo:
          '관계대명사 What이 이끄는 명사절이 주어이므로 본동사는 단수 is와 수일치합니다. 내부의 enduring은 목적격 보어 자리의 형용사입니다.',
      },
      {
        expression: 'serves as a quiet rehearsal ~, expanding our capacity to recognize ~',
        grammarPointKo: '연속·결과 분사구문 + 형용사구 후치수식',
        explanationKo:
          '주어 encountering art가 역량을 "확장한다"는 능동 관계이므로 현재분사 expanding이 쓰였고, lives 뒤의 very different from our own이 명사를 뒤에서 꾸며 줍니다.',
      },
    ],
    keyVocab: [
      { word: 'detached', phonetic: '/dɪˈtætʃt/', meaningKo: '초연한, 거리감을 둔' },
      { word: 'aesthetics', phonetic: '/iːsˈθet.ɪks/', meaningKo: '미학, 예술철학' },
      { word: 'inhabit', phonetic: '/ɪnˈhæb.ɪt/', meaningKo: '거주하다, (감정·역할에) 몰입하다' },
      { word: 'enduring', phonetic: '/ɪnˈdjʊə.rɪŋ/', meaningKo: '오래 지속되는, 영속적인' },
      { word: 'articulate', phonetic: '/ɑːˈtɪk.jʊ.leɪt/', meaningKo: '분명히 표현하다, 언어화하다' },
      { word: 'dignity', phonetic: '/ˈdɪɡ.nə.ti/', meaningKo: '존엄성, 품위' },
    ],
    questions: [
      {
        id: 'hs11-q1',
        questionType: '빈칸 추론',
        questionKo: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
        stimulusBox:
          'What makes a great novel or canvas enduring is therefore not its ability to mirror reality with photographic precision, but its power to ________.',
        options: [
          'preserve exact historical dates for future archivists',
          'awaken subtle feelings that ordinary language struggles to articulate',
          'standardize aesthetic judgment across every artistic movement',
          'replace personal memory with objective technical rules',
          "restrict interpretation to the creator's original biography",
        ],
        answer: 'awaken subtle feelings that ordinary language struggles to articulate',
        explanationKo:
          '앞 문장들에서 예술 감상은 단순한 기교 평가나 작가의 전기 공유가 아니라 "공감적 상상력으로 작품의 정서적 태도에 몰입하고 낯선 관점과 기억을 잇는 일"이라고 밝혔습니다. 따라서 사진 같은 현실 복제(not A)에 대비되는 영속성의 원천은 일상 언어로 담아내기 힘든 미묘한 감정을 깨우는 힘입니다.',
        grammarTag: 'not A but B 대조 추론',
      },
      {
        id: 'hs11-q2',
        questionType: '주제·요지',
        questionKo: '윗글의 요지로 가장 적절한 것을 고르시오.',
        options: [
          '위대한 예술 작품을 제대로 이해하려면 작가의 생애와 시대적 배경을 빠짐없이 암기해야 한다.',
          '현대 회화와 음악은 객관적 사실 묘사 기술이 발전할수록 대중에게 더 오래 기억된다.',
          '예술 감상은 수동적 기교 평가가 아니라 공감적 상상력을 통해 타인의 삶과 도덕적 감수성을 확장하는 과정이다.',
          '도덕적 판단력은 예술 교육보다 논리적 토론과 언어 훈련을 통해서만 길러질 수 있다.',
          '초상화나 첼로 연주 같은 전통 예술은 시각적 조화를 중시하기 때문에 감정 몰입을 배제한다.',
        ],
        answer:
          '예술 감상은 수동적 기교 평가가 아니라 공감적 상상력을 통해 타인의 삶과 도덕적 감수성을 확장하는 과정이다.',
        explanationKo:
          '첫 문장의 통념(초연한 기술·조화 평가)을 Yet으로 반박한 뒤, 예술 감상의 본질이 공감적 상상력(empathic imagination)과 낯선 삶 속 존엄성 인식(도덕적 지각의 예행연습)에 있음을 일관되게 전개하고 있습니다.',
        grammarTag: '통념 반박(Yet) 요지 파악',
      },
      {
        id: 'hs11-q3',
        questionType: '어법성 판단',
        questionKo: '다음 밑줄 친 ①~⑤ 중 어법상 틀린 것을 고르시오.',
        stimulusBox:
          "Many spectators assume that appreciating art is merely an exercise in ① judging technical skill. Yet viewers mentally inhabit the emotional posture ② implied by the work. Far from demanding that we ③ share the artist's biography, aesthetic empathy bridges unfamiliar perspectives. What makes a great novel or canvas enduring ④ are its power to awaken subtle feelings, ⑤ expanding our capacity to recognize human dignity.",
        options: [
          '① judging',
          '② implied',
          '③ share',
          '④ are',
          '⑤ expanding',
        ],
        answer: '④ are',
        explanationKo:
          '④ are는 틀렸습니다. 문장의 주어가 선행사를 포함한 관계대명사절 "What makes a great novel or canvas enduring"이므로 절 전체는 단수 취급하여 단수 동사 is로 써야 합니다. ① 전치사 in 뒤 동명사 judging 정답, ② posture를 수식하는 수동 과거분사 implied 정답, ③ demanding that 뒤 동사원형 share 정답, ⑤ 결과 분사구문 expanding 정답입니다.',
        grammarTag: 'What 명사절 주어 단수 수일치',
      },
    ],
  },

  /* =========================================================================
   * HS12 — [천체물리학 · C1] Dark Matter and Scientific Humility
   * ========================================================================= */
  {
    id: 'hs12',
    number: 12,
    cefrLevel: 'c1',
    csatGradeTag: '수능 실전 · 1등급 킬러',
    topicBadge: '천체물리학',
    titleEn: 'Dark Matter and Scientific Humility',
    titleKo: '암흑물질과 과학적 겸손',
    estimatedMin: 10,
    sentences: [
      {
        id: 'hs12-s1',
        english:
          'Throughout the early modern era, astronomers took for granted that everything constituting the cosmos could eventually be observed directly, provided that telescopes grew powerful enough.',
        slashBroken:
          'Throughout the early modern era, / astronomers took for granted / that everything constituting the cosmos / could eventually be observed directly, / provided that telescopes grew powerful enough.',
        korean:
          '근대 초기 내내 천문학자들은 망원경이 충분히 강력해진다는 조건이라면 우주를 구성하는 모든 것이 결국 직접 관측될 수 있다고 당연하게 여겼다.',
        segments: [
          { text: 'Throughout the early modern era,', role: 'M', labelKo: '기간 부사구' },
          { text: 'astronomers', role: 'S', labelKo: '주어(S)' },
          { text: 'took for granted', role: 'V', labelKo: '관용 동사구(V)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'everything constituting the cosmos', role: 'S', labelKo: '종속절 주어+현재분사 수식' },
          { text: 'could eventually be observed directly,', role: 'V', labelKo: '조동사 수동태 동사구' },
          { text: 'provided that', role: 'CONN', labelKo: '조건 접속사' },
          { text: 'telescopes grew powerful enough.', role: 'M', labelKo: '조건 부사절' },
        ],
      },
      {
        id: 'hs12-s2',
        english:
          'That confident assumption was shattered in the late twentieth century when Vera Rubin measured the rotation speeds of spiral galaxies and discovered that outer stars orbited far too rapidly to remain bound by visible matter alone.',
        slashBroken:
          'That confident assumption was shattered / in the late twentieth century / when Vera Rubin measured the rotation speeds of spiral galaxies / and discovered / that outer stars orbited far too rapidly / to remain bound by visible matter alone.',
        korean:
          '그 자신만만한 가정은 20세기 후반 베라 루빈이 나선 은하들의 회전 속도를 측정하고, 외곽의 별들이 눈에 보이는 물질만으로는 결코 붙잡혀 있을 수 없을 만큼 훨씬 지나치게 빠르게 공전한다는 사실을 발견하면서 산산조각 났다.',
        segments: [
          { text: 'That confident assumption', role: 'S', labelKo: '주어(S)' },
          { text: 'was shattered', role: 'V', labelKo: '수동태 동사(V)' },
          { text: 'in the late twentieth century', role: 'M', labelKo: '시간 부사구' },
          { text: 'when', role: 'CONN', labelKo: '시간 접속사' },
          { text: 'Vera Rubin measured the rotation speeds of spiral galaxies and discovered', role: 'M', labelKo: '시간절(병렬 동사)' },
          { text: 'that outer stars orbited far too rapidly to remain bound by visible matter alone.', role: 'O', labelKo: '목적어 that절(too~to V)' },
        ],
      },
      {
        id: 'hs12-s3',
        english:
          'Were galaxies composed solely of the glowing stars and gas clouds captured by optical instruments, centrifugal force would long ago have flung their outermost stars into intergalactic space.',
        slashBroken:
          'Were galaxies composed solely of / the glowing stars and gas clouds captured by optical instruments, / centrifugal force would long ago have flung / their outermost stars / into intergalactic space.',
        korean:
          '만약 은하들이 광학 장비에 포착되는 빛나는 별들과 가스 구름만으로 이루어져 있다면, 원심력이 오래전에 가장 바깥쪽 별들을 은하 간 공간으로 내던져 버렸을 것이다.',
        segments: [
          { text: 'Were', role: 'V', labelKo: '가정법 if 생략 도치동사' },
          { text: 'galaxies', role: 'S', labelKo: '조건절 주어(S′)' },
          { text: 'composed solely of the glowing stars and gas clouds captured by optical instruments,', role: 'C', labelKo: '수동 보어+과거분사 수식' },
          { text: 'centrifugal force', role: 'S', labelKo: '주절 주어(S)' },
          { text: 'would long ago have flung', role: 'V', labelKo: '가정법 과거완료 동사구' },
          { text: 'their outermost stars', role: 'O', labelKo: '목적어(O)' },
          { text: 'into intergalactic space.', role: 'M', labelKo: '방향 부사구' },
        ],
      },
      {
        id: 'hs12-s4',
        english:
          'To reconcile these measurements with gravitational theory, astrophysicists inferred the existence of dark matter — an invisible scaffolding that neither emits nor absorbs light yet accounts for roughly eighty-five percent of all cosmic mass.',
        slashBroken:
          'To reconcile these measurements with gravitational theory, / astrophysicists inferred the existence of dark matter / — an invisible scaffolding / that neither emits nor absorbs light / yet accounts for roughly eighty-five percent of all cosmic mass.',
        korean:
          '이러한 측정 결과를 중력 이론과 조화시키기 위해 천체물리학자들은 암흑물질의 존재를 추론했는데, 그것은 빛을 방출하지도 흡수하지도 않지만 전체 우주 질량의 약 85퍼센트를 차지하는 보이지 않는 뼈대이다.',
        segments: [
          { text: 'To reconcile these measurements with gravitational theory,', role: 'M', labelKo: '목적 to부정사구' },
          { text: 'astrophysicists', role: 'S', labelKo: '주어(S)' },
          { text: 'inferred', role: 'V', labelKo: '동사(V)' },
          { text: 'the existence of dark matter', role: 'O', labelKo: '목적어(O)' },
          { text: '—', role: 'PLAIN' },
          { text: 'an invisible scaffolding', role: 'M', labelKo: '동격 명사구' },
          { text: 'that neither emits nor absorbs light yet accounts for roughly eighty-five percent of all cosmic mass.', role: 'M', labelKo: '주격 관계절(neither A nor B)' },
        ],
      },
      {
        id: 'hs12-s5',
        english:
          'Remarkably, despite decades of subterranean detectors and particle-collider experiments, scientists still have not isolated the exact particle responsible for this elusive substance.',
        slashBroken:
          'Remarkably, / despite decades of subterranean detectors and particle-collider experiments, / scientists still have not isolated / the exact particle / responsible for this elusive substance.',
        korean:
          '놀랍게도 수십 년간 지하 검출기와 입자 가속기 실험을 거듭했음에도 불구하고, 과학자들은 이 포착하기 힘든 물질을 이루는 정확한 입자를 아직 분리해 내지 못했다.',
        segments: [
          { text: 'Remarkably,', role: 'M', labelKo: '문장 부사' },
          { text: 'despite decades of subterranean detectors and particle-collider experiments,', role: 'M', labelKo: '양보 전치사구' },
          { text: 'scientists', role: 'S', labelKo: '주어(S)' },
          { text: 'still', role: 'M', labelKo: '부사' },
          { text: 'have not isolated', role: 'V', labelKo: '현재완료 부정 동사구' },
          { text: 'the exact particle', role: 'O', labelKo: '목적어(O)' },
          { text: 'responsible for this elusive substance.', role: 'M', labelKo: '형용사구 후치수식' },
        ],
      },
      {
        id: 'hs12-s6',
        english:
          'Rather than signaling a failure of empirical inquiry, however, dark matter embodies the finest virtue of science: the willingness to let stubborn evidence overturn human intuition and expose how much remains unknown.',
        slashBroken:
          'Rather than signaling a failure of empirical inquiry, however, / dark matter embodies the finest virtue of science: / the willingness to let stubborn evidence overturn human intuition / and expose how much remains unknown.',
        korean:
          '그러나 실증적 탐구의 실패를 뜻하기는커녕, 암흑물질은 과학의 가장 고귀한 미덕—완고한 증거가 인간의 직관을 뒤집고 아직 알려지지 않은 영역이 얼마나 큰지 드러내도록 기꺼이 허용하는 태도—을 구현한다.',
        segments: [
          { text: 'Rather than signaling a failure of empirical inquiry,', role: 'M', labelKo: 'Rather than -ing 대조구' },
          { text: 'however,', role: 'CONN', labelKo: '역접 연결어' },
          { text: 'dark matter', role: 'S', labelKo: '주어(S)' },
          { text: 'embodies', role: 'V', labelKo: '동사(V)' },
          { text: 'the finest virtue of science:', role: 'O', labelKo: '목적어(O)' },
          { text: 'the willingness to let stubborn evidence overturn human intuition and expose how much remains unknown.', role: 'M', labelKo: '콜론 동격+사역동사 let 병렬' },
        ],
      },
    ],
    syntaxNotes: [
      {
        expression: 'took for granted that everything constituting the cosmos could ~, provided that ~',
        grammarPointKo: 'take ~ for granted + 현재분사 수식 + 조건 접속사 provided that',
        explanationKo:
          '원래 take it for granted that ~ 구조에서 it이 생략된 형태이며, everything을 능동 현재분사 constituting이 꾸며 줍니다. provided that은 "~라는 조건이라면"을 뜻합니다.',
      },
      {
        expression: 'orbited far too rapidly to remain bound by visible matter alone',
        grammarPointKo: 'too ~ to V + 2형식 remain + 과거분사 보어',
        explanationKo:
          '"너무 ~해서 ~할 수 없다"는 too ~ to 구문과, "묶인 채로 남다"라는 수동 상태를 나타내는 remain bound(bind의 과거분사)가 결합된 고급 구문입니다.',
      },
      {
        expression: 'Were galaxies composed solely of ~, centrifugal force would long ago have flung ~',
        grammarPointKo: 'if 생략 가정법 도치 (Were S ~)',
        explanationKo:
          'If galaxies were composed ~에서 접속사 If를 생략하면서 동사 Were가 주어 앞으로 도치되었습니다. 현재의 일반적 조건과 과거의 귀결(would have p.p.)이 맞물린 혼합 가정법입니다.',
      },
      {
        expression: 'an invisible scaffolding that neither emits nor absorbs light yet accounts for ~',
        grammarPointKo: '단수 선행사 + neither A nor B 동사 병렬 수일치',
        explanationKo:
          '선행사 an invisible scaffolding이 단수이므로 주격 관계절 안의 세 동사 emits, absorbs, accounts가 모두 3인칭 단수형으로 정밀하게 수일치됩니다.',
      },
    ],
    keyVocab: [
      { word: 'constitute', phonetic: '/ˈkɒn.stɪ.tjuːt/', meaningKo: '구성하다, 이루다' },
      { word: 'centrifugal', phonetic: '/ˌsen.trɪˈfjuː.ɡəl/', meaningKo: '원심의, 중심에서 멀어지는' },
      { word: 'reconcile', phonetic: '/ˈrek.ən.saɪl/', meaningKo: '조화시키다, 일치시키다' },
      { word: 'infer', phonetic: '/ɪnˈfɜːr/', meaningKo: '추론하다, 미루어 알다' },
      { word: 'elusive', phonetic: '/ɪˈluː.sɪv/', meaningKo: '포착하기 어려운, 규명하기 힘든' },
      { word: 'empirical', phonetic: '/ɪmˈpɪr.ɪ.kəl/', meaningKo: '경험적인, 실증적인' },
    ],
    questions: [
      {
        id: 'hs12-q1',
        questionType: '빈칸 추론',
        questionKo: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
        stimulusBox:
          'Rather than signaling a failure of empirical inquiry, however, dark matter embodies the finest virtue of science: the willingness to ________.',
        options: [
          'discard gravitational laws whenever optical telescopes reach their limit',
          'let stubborn evidence overturn human intuition and expose how much remains unknown',
          'assume that invisible phenomena lie permanently outside rational study',
          'treat unverified hypotheses as settled facts before testing them',
          'limit cosmological research strictly to matter that emits light',
        ],
        answer: 'let stubborn evidence overturn human intuition and expose how much remains unknown',
        explanationKo:
          '보이는 물질만으로 우주를 설명할 수 있다는 직관(assumption)이 은하 회전 관측 증거에 의해 깨졌고, 아직 입자를 분리하지 못했음에도 증거를 따라 미지의 존재를 인정한다는 흐름입니다. 따라서 과학의 미덕은 "완고한 증거가 인간의 직관을 뒤집고 미지의 영역을 드러내게 허용하는 겸손한 태도"입니다.',
        grammarTag: '콜론(:) 핵심 정의 빈칸 추론',
      },
      {
        id: 'hs12-q2',
        questionType: '문장 삽입',
        questionKo: '글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳을 고르시오.',
        stimulusBox:
          '[주어진 문장]\nWere galaxies composed solely of the glowing stars and gas clouds captured by optical instruments, centrifugal force would long ago have flung their outermost stars into intergalactic space.\n\nThroughout the early modern era, astronomers took for granted that everything constituting the cosmos could eventually be observed directly, provided that telescopes grew powerful enough. ( ① ) That confident assumption was shattered in the late twentieth century when Vera Rubin measured the rotation speeds of spiral galaxies and discovered that outer stars orbited far too rapidly to remain bound by visible matter alone. ( ② ) To reconcile these measurements with gravitational theory, astrophysicists inferred the existence of dark matter — an invisible scaffolding that neither emits nor absorbs light yet accounts for roughly eighty-five percent of all cosmic mass. ( ③ ) Remarkably, despite decades of subterranean detectors and particle-collider experiments, scientists still have not isolated the exact particle responsible for this elusive substance. ( ④ ) Rather than signaling a failure of empirical inquiry, however, dark matter embodies the finest virtue of science. ( ⑤ )',
        options: ['①', '②', '③', '④', '⑤'],
        answer: '②',
        explanationKo:
          '주어진 문장은 ② 앞의 베라 루빈의 발견("외곽 별들이 눈에 보이는 물질만으로는 붙잡혀 있을 수 없을 만큼 빠르게 공전한다")을 물리적으로 부연 설명("보이는 별·가스뿐이라면 원심력이 외곽 별들을 날려 버렸을 것")하며, ② 뒤의 "To reconcile these measurements(이 측정치들을 조화시키기 위해)"로 이어지는 완벽한 교량 역할을 합니다.',
        grammarTag: '인과·물리적 부연 + 지시어(these measurements)',
      },
      {
        id: 'hs12-q3',
        questionType: '어법성 판단',
        questionKo: '다음 밑줄 친 ①~⑤ 중 어법상 틀린 것을 고르시오.',
        stimulusBox:
          'Astronomers assumed that everything ① constituting the cosmos could be observed directly. Yet outer stars orbited far too rapidly to ② remain bound by visible matter alone. ③ Were galaxies composed solely of glowing stars, centrifugal force would have flung them outward. Astrophysicists therefore inferred an invisible scaffolding that neither emits nor ④ absorb light, though scientists still have not ⑤ isolated the exact particle.',
        options: [
          '① constituting',
          '② remain',
          '③ Were',
          '④ absorb',
          '⑤ isolated',
        ],
        answer: '④ absorb',
        explanationKo:
          '④ absorb는 틀렸습니다. 주격 관계대명사 that의 선행사가 단수명사구 an invisible scaffolding이고 앞의 병렬 동사도 단수 emits이므로, neither A nor B 병렬 구조에 맞춰 단수 동사 absorbs로 고쳐야 합니다. ① 능동 현재분사 constituting 정답, ② too ~ to 동사원형 remain 정답, ③ if 생략 가정법 도치 Were 정답, ⑤ 현재완료 과거분사 isolated 정답입니다.',
        grammarTag: '관계절 병렬 동사 단수 수일치 (neither emits nor absorbs)',
      },
    ],
  },

  /* =========================================================================
   * HS13 — [경제사 · B2] Money as a Shared Social Fiction
   * ========================================================================= */
  {
    id: 'hs13',
    number: 13,
    cefrLevel: 'b2',
    csatGradeTag: '고2·고3 학평 · 1등급',
    topicBadge: '경제사',
    titleEn: 'Money as a Shared Social Fiction',
    titleKo: '신뢰의 산물로서의 화폐 역사',
    estimatedMin: 8,
    sentences: [
      {
        id: 'hs13-s1',
        english:
          'People tend to think of money as a tangible object whose worth stems from the physical material out of which it is made.',
        slashBroken:
          'People tend to think of money / as a tangible object / whose worth stems from the physical material / out of which it is made.',
        korean:
          '사람들은 화폐를 그것이 만들어진 물리적 재료에서 가치가 비롯되는 유형의 물건으로 생각하는 경향이 있다.',
        segments: [
          { text: 'People', role: 'S', labelKo: '주어(S)' },
          { text: 'tend to think of', role: 'V', labelKo: '동사구(V)' },
          { text: 'money', role: 'O', labelKo: '목적어(O)' },
          { text: 'as a tangible object', role: 'M', labelKo: 'think of A as B' },
          { text: 'whose worth stems from the physical material', role: 'M', labelKo: '소유격 관계절' },
          { text: 'out of which it is made.', role: 'M', labelKo: '전치사+관계대명사절' },
        ],
      },
      {
        id: 'hs13-s2',
        english:
          'Yet economic historians emphasize that from Mesopotamian clay tablets to modern digital ledgers, currency has always functioned primarily as an agreed-upon system of mutual trust.',
        slashBroken:
          'Yet economic historians emphasize / that from Mesopotamian clay tablets to modern digital ledgers, / currency has always functioned primarily / as an agreed-upon system of mutual trust.',
        korean:
          '그러나 경제사학자들은 메소포타미아의 점토판에서 현대의 디지털 장부에 이르기까지 화폐는 언제나 주로 상호 신뢰에 기반한 합의된 체계로 기능해 왔다고 강조한다.',
        segments: [
          { text: 'Yet', role: 'CONN', labelKo: '역접 접속사' },
          { text: 'economic historians', role: 'S', labelKo: '주어(S)' },
          { text: 'emphasize', role: 'V', labelKo: '동사(V)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'from Mesopotamian clay tablets to modern digital ledgers,', role: 'M', labelKo: '범위 부사구(from A to B)' },
          { text: 'currency', role: 'S', labelKo: '종속절 주어(S′)' },
          { text: 'has always functioned', role: 'V', labelKo: '현재완료 동사(V′)' },
          { text: 'primarily as an agreed-upon system of mutual trust.', role: 'M', labelKo: '역할 부사구(as)' },
        ],
      },
      {
        id: 'hs13-s3',
        english:
          'Even gold coins owed much of their purchasing power not to their metallic utility, but to the widespread conviction that strangers in distant markets would willingly accept them in return for food and shelter.',
        slashBroken:
          'Even gold coins owed much of their purchasing power / not to their metallic utility, / but to the widespread conviction / that strangers in distant markets would willingly accept them / in return for food and shelter.',
        korean:
          '심지어 금화조차 구매력의 상당 부분을 금속 자체의 실용성이 아니라, 먼 시장의 낯선 이들이 식량과 거처의 대가로 그것을 기꺼이 받아 줄 것이라는 널리 퍼진 확신에 힘입고 있었다.',
        segments: [
          { text: 'Even gold coins', role: 'S', labelKo: '주어(S)' },
          { text: 'owed', role: 'V', labelKo: '동사(V)' },
          { text: 'much of their purchasing power', role: 'O', labelKo: '목적어(O)' },
          { text: 'not to their metallic utility,', role: 'M', labelKo: 'owe A not to B' },
          { text: 'but to the widespread conviction', role: 'M', labelKo: 'but to C' },
          { text: 'that strangers in distant markets would willingly accept them in return for food and shelter.', role: 'M', labelKo: '동격 접속사 that절' },
        ],
      },
      {
        id: 'hs13-s4',
        english:
          'Once sovereign states replaced precious metals with paper banknotes backed solely by institutional credibility, this collective belief became even more unmistakably visible.',
        slashBroken:
          'Once sovereign states replaced precious metals / with paper banknotes backed solely by institutional credibility, / this collective belief became / even more unmistakably visible.',
        korean:
          '주권 국가들이 귀금속을 오직 제도적 신뢰성만으로 뒷받침되는 지폐로 대체하자, 이러한 집단적 믿음은 더욱더 명백하게 눈에 띄게 되었다.',
        segments: [
          { text: 'Once', role: 'CONN', labelKo: '시간·조건 접속사' },
          { text: 'sovereign states replaced precious metals with paper banknotes backed solely by institutional credibility,', role: 'M', labelKo: '종속절(replace A with B+과거분사)' },
          { text: 'this collective belief', role: 'S', labelKo: '주어(S)' },
          { text: 'became', role: 'V', labelKo: '2형식 동사(V)' },
          { text: 'even more unmistakably visible.', role: 'C', labelKo: '비교급 강조 보어(C)' },
        ],
      },
      {
        id: 'hs13-s5',
        english:
          'Whenever runaway inflation or political collapse erodes faith in the issuing authority, banknotes that once commanded immense value can rapidly deteriorate into worthless scraps of paper.',
        slashBroken:
          'Whenever runaway inflation or political collapse / erodes faith in the issuing authority, / banknotes that once commanded immense value / can rapidly deteriorate / into worthless scraps of paper.',
        korean:
          '통제 불능의 인플레이션이나 정치적 붕괴가 발행 당국에 대한 믿음을 갉아먹을 때마다, 한때 막대한 가치를 지휘하던 지폐도 순식간에 가치 없는 종잇조각으로 전락할 수 있다.',
        segments: [
          { text: 'Whenever', role: 'CONN', labelKo: '복합관계부사' },
          { text: 'runaway inflation or political collapse erodes faith in the issuing authority,', role: 'M', labelKo: '조건 부사절(단수 수일치)' },
          { text: 'banknotes', role: 'S', labelKo: '주어(S)' },
          { text: 'that once commanded immense value', role: 'M', labelKo: '주격 관계절' },
          { text: 'can rapidly deteriorate', role: 'V', labelKo: '동사구(V)' },
          { text: 'into worthless scraps of paper.', role: 'M', labelKo: '결과 전치사구' },
        ],
      },
      {
        id: 'hs13-s6',
        english:
          "Money is therefore best understood not as an intrinsic property of coins or pixels, but as humanity's most successful shared social fiction — a story that works precisely because nearly everyone agrees to believe in it.",
        slashBroken:
          "Money is therefore best understood / not as an intrinsic property of coins or pixels, / but as humanity's most successful shared social fiction / — a story that works precisely / because nearly everyone agrees to believe in it.",
        korean:
          '따라서 화폐는 동전이나 픽셀의 고유한 속성이 아니라 인류가 만든 가장 성공적인 공유된 사회적 허구—거의 모든 사람이 그것을 믿기로 합의했기 때문에 정확히 작동하는 이야기—로 이해할 때 가장 잘 파악된다.',
        segments: [
          { text: 'Money', role: 'S', labelKo: '주어(S)' },
          { text: 'is', role: 'Aux', labelKo: '수동태 조동사' },
          { text: 'therefore', role: 'CONN', labelKo: '인과 연결어' },
          { text: 'best understood', role: 'V', labelKo: '수동태 본동사(V)' },
          { text: 'not as an intrinsic property of coins or pixels,', role: 'M', labelKo: 'not as A' },
          { text: "but as humanity's most successful shared social fiction", role: 'M', labelKo: 'but as B' },
          { text: '—', role: 'PLAIN' },
          { text: 'a story that works precisely because nearly everyone agrees to believe in it.', role: 'M', labelKo: '동격 명사구+관계절·이유절' },
        ],
      },
    ],
    syntaxNotes: [
      {
        expression: 'whose worth stems from the physical material out of which it is made',
        grammarPointKo: '소유격 관계대명사 whose + 전치사구 + 관계대명사(out of which)',
        explanationKo:
          'whose worth는 "그 물건의 가치"를 뜻하는 소유격 관계절이며, be made out of(재료로 만들어지다)의 전치사구 out of가 관계대명사 which 앞으로 이동했습니다.',
      },
      {
        expression: 'owed much of their purchasing power not to A, but to the widespread conviction that ~',
        grammarPointKo: 'owe A to B + not ~ but ~ 병렬 + 동격 접속사 that',
        explanationKo:
          '"A를 B 덕분으로 돌리다"라는 owe A to B 구문이 not to A, but to B로 대조되었고, 추상명사 conviction 뒤에 완전한 절을 이끄는 동격의 that이 이어집니다.',
      },
      {
        expression: 'paper banknotes backed solely by institutional credibility',
        grammarPointKo: '과거분사구 후치수식 (backed by)',
        explanationKo:
          '지폐(paper banknotes)는 제도적 신뢰에 의해 "뒷받침되는" 수동 대상이므로 과거분사 backed가 뒤에서 명사를 수식합니다.',
      },
      {
        expression: 'Whenever runaway inflation or political collapse erodes faith ~',
        grammarPointKo: '복합관계부사 Whenever + A or B 단수 수일치',
        explanationKo:
          '"~할 때마다"를 뜻하는 Whenever절의 주어가 or로 연결된 두 단수명사(inflation / collapse)이므로 단수 동사 erodes로 일치시킵니다.',
      },
    ],
    keyVocab: [
      { word: 'tangible', phonetic: '/ˈtæn.dʒə.bəl/', meaningKo: '유형의, 만질 수 있는' },
      { word: 'ledger', phonetic: '/ˈledʒ.ər/', meaningKo: '원장, 회계 장부' },
      { word: 'conviction', phonetic: '/kənˈvɪk.ʃən/', meaningKo: '확신, 신념' },
      { word: 'sovereign', phonetic: '/ˈsɒv.rɪn/', meaningKo: '주권의, 자주적인' },
      { word: 'deteriorate', phonetic: '/dɪˈtɪə.ri.ə.reɪt/', meaningKo: '악화되다, (가치가) 떨어지다' },
      { word: 'intrinsic', phonetic: '/ɪnˈtrɪn.zɪk/', meaningKo: '본질적인, 고유한' },
    ],
    questions: [
      {
        id: 'hs13-q1',
        questionType: '글의 순서 (A-B-C)',
        questionKo: '주어진 글 다음에 이어질 글의 순서로 가장 적절한 것을 고르시오.',
        stimulusBox:
          "[주어진 글]\nPeople tend to think of money as a tangible object whose worth stems from the physical material out of which it is made.\n\n(A) Once sovereign states replaced precious metals with paper banknotes backed solely by institutional credibility, this collective belief became even more unmistakably visible.\n(B) Whenever runaway inflation or political collapse erodes faith in the issuing authority, banknotes that once commanded immense value can rapidly deteriorate into worthless scraps of paper. Money is therefore best understood as humanity's most successful shared social fiction.\n(C) Yet economic historians emphasize that from Mesopotamian clay tablets to modern digital ledgers, currency has always functioned primarily as an agreed-upon system of mutual trust. Even gold coins owed much of their purchasing power to the widespread conviction that strangers would accept them.",
        options: [
          '(A) - (C) - (B)',
          '(B) - (A) - (C)',
          '(B) - (C) - (A)',
          '(C) - (A) - (B)',
          '(C) - (B) - (A)',
        ],
        answer: '(C) - (A) - (B)',
        explanationKo:
          '주어진 글의 통념(화폐의 가치는 물리적 재료에서 나온다)을 (C)가 Yet으로 정면 반박하며 금화조차 "널리 퍼진 확신(widespread conviction)"에 의존했음을 제시합니다. 이어 (A)의 "this collective belief"가 (C)의 확신을 받아 지폐 시대로 확장하고, (B)가 지폐의 신뢰 붕괴 사례와 therefore 결론으로 마무리하므로 (C)-(A)-(B)가 정답입니다.',
        grammarTag: '역접(Yet) → 지시어(this belief) → 사례·결론(therefore)',
      },
      {
        id: 'hs13-q2',
        questionType: '요약문 완성',
        questionKo: '윗글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?',
        stimulusBox:
          'Rather than deriving its value solely from its (A) ________ substance, money operates as a social convention sustained by collective (B) ________ in the institutions and communities that accept it.',
        options: [
          '(A) symbolic — (B) scarcity',
          '(A) digital — (B) secrecy',
          '(A) artistic — (B) competition',
          '(A) temporary — (B) isolation',
          '(A) physical — (B) trust',
        ],
        answer: '(A) physical — (B) trust',
        explanationKo:
          '본문은 화폐의 가치가 물리적 재료(physical material / intrinsic property)가 아니라 발행 주체와 거래 공동체에 대한 집단적 신뢰(mutual trust / collective belief)에 의해 유지된다고 설명하므로 (A) physical — (B) trust가 정확합니다.',
        grammarTag: '핵심 대조 개념어 요약',
      },
      {
        id: 'hs13-q3',
        questionType: '주제·요지',
        questionKo: '윗글의 제목으로 가장 적절한 것을 고르시오.',
        options: [
          'Why Ancient Societies Abandoned Clay Tablets for Gold Mining',
          'Money: Not Intrinsic Substance, but Collective Trust',
          'How Digital Ledgers Eliminated Political Inflation Forever',
          'The Hidden Metallic Value Behind Modern Paper Banknotes',
          'Competing Currencies: Why Distant Markets Reject Paper Money',
        ],
        answer: 'Money: Not Intrinsic Substance, but Collective Trust',
        explanationKo:
          '점토판·금화·지폐·디지털 장부를 관통하는 화폐의 본질이 물질 자체의 고유 가치(intrinsic substance)가 아니라 집단적 신뢰(collective trust)라는 주제를 가장 정확히 압축한 제목입니다.',
        grammarTag: '핵심 대조 구조(not A but B) 제목 추론',
      },
    ],
  },

  /* =========================================================================
   * HS14 — [사회심리학 · B2] The Bystander Effect and Moral Courage
   * ========================================================================= */
  {
    id: 'hs14',
    number: 14,
    cefrLevel: 'b2',
    csatGradeTag: '고3 모의평가 · 1등급',
    topicBadge: '사회심리학',
    titleEn: 'The Bystander Effect and Moral Courage',
    titleKo: '방관자 효과와 책임의 분산',
    estimatedMin: 9,
    sentences: [
      {
        id: 'hs14-s1',
        english:
          'Common sense suggests that a person facing an emergency in a crowded public square is far safer than someone stranded on an empty street.',
        slashBroken:
          'Common sense suggests / that a person facing an emergency in a crowded public square / is far safer / than someone stranded on an empty street.',
        korean:
          '상식적으로 생각해 보면 붐비는 공공 광장에서 비상사태를 맞은 사람이 텅 빈 거리에 고립된 사람보다 훨씬 더 안전할 것 같다.',
        segments: [
          { text: 'Common sense', role: 'S', labelKo: '주어(S)' },
          { text: 'suggests', role: 'V', labelKo: '동사(V)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'a person facing an emergency in a crowded public square', role: 'S', labelKo: '종속절 주어+현재분사 수식' },
          { text: 'is', role: 'V', labelKo: '종속절 동사(V′)' },
          { text: 'far safer', role: 'C', labelKo: '비교급 강조 보어(C′)' },
          { text: 'than someone stranded on an empty street.', role: 'M', labelKo: '비교 대상+과거분사 수식' },
        ],
      },
      {
        id: 'hs14-s2',
        english:
          'Counterintuitively, classic experiments by social psychologists John Darley and Bibb Latane demonstrated that the presence of additional onlookers sharply reduces the likelihood that any single individual will intervene.',
        slashBroken:
          'Counterintuitively, / classic experiments by social psychologists John Darley and Bibb Latane / demonstrated / that the presence of additional onlookers / sharply reduces the likelihood / that any single individual will intervene.',
        korean:
          '직관에 반하게도 사회심리학자 존 달리와 비브 라타네의 고전적 실험들은 추가적인 구경꾼의 존재가 어느 한 개인이 개입할 가능성을 급격히 낮춘다는 점을 입증했다.',
        segments: [
          { text: 'Counterintuitively,', role: 'M', labelKo: '역설 부사' },
          { text: 'classic experiments by social psychologists John Darley and Bibb Latane', role: 'S', labelKo: '주어(S)' },
          { text: 'demonstrated', role: 'V', labelKo: '동사(V)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'the presence of additional onlookers', role: 'S', labelKo: '종속절 주어(단수)' },
          { text: 'sharply reduces', role: 'V', labelKo: '단수 동사(V′)' },
          { text: 'the likelihood', role: 'O', labelKo: '목적어(추상명사)' },
          { text: 'that any single individual will intervene.', role: 'M', labelKo: '동격 접속사 that절' },
        ],
      },
      {
        id: 'hs14-s3',
        english:
          'Known as the bystander effect, this phenomenon arises from two reinforcing forces: diffusion of responsibility, which encourages each witness to assume someone else will act, and pluralistic ignorance, in which everyone scans calm faces around them and concludes that no genuine crisis exists.',
        slashBroken:
          'Known as the bystander effect, / this phenomenon arises from two reinforcing forces: / diffusion of responsibility, / which encourages each witness to assume someone else will act, / and pluralistic ignorance, / in which everyone scans calm faces around them / and concludes that no genuine crisis exists.',
        korean:
          '방관자 효과로 알려진 이 현상은 서로를 강화하는 두 가지 힘에서 비롯되는데, 각 목격자가 다른 누군가가 행동할 것이라고 가정하게 만드는 책임의 분산과, 모두가 주변의 침착한 표정을 훑어보고 진짜 위기가 없다고 결론 내리는 다원적 무지이다.',
        segments: [
          { text: 'Known as the bystander effect,', role: 'M', labelKo: '수동 분사구문' },
          { text: 'this phenomenon', role: 'S', labelKo: '주어(S)' },
          { text: 'arises from', role: 'V', labelKo: '동사구(V)' },
          { text: 'two reinforcing forces:', role: 'O', labelKo: '전치사 목적어' },
          { text: 'diffusion of responsibility, which encourages each witness to assume someone else will act,', role: 'M', labelKo: '요인1+계속적 관계절' },
          { text: 'and pluralistic ignorance, in which everyone scans calm faces around them and concludes that no genuine crisis exists.', role: 'M', labelKo: '요인2+전치사+관계절' },
        ],
      },
      {
        id: 'hs14-s4',
        english:
          'Crucially, such hesitation rarely stems from coldhearted apathy; rather, it reflects our deep social sensitivity to ambiguity and fear of public embarrassment.',
        slashBroken:
          'Crucially, / such hesitation rarely stems from coldhearted apathy; / rather, it reflects / our deep social sensitivity to ambiguity / and fear of public embarrassment.',
        korean:
          '결정적으로 그러한 망설임은 냉혹한 무관심에서 비롯되는 경우가 드물며, 오히려 모호함에 대한 우리의 깊은 사회적 민감성과 공개적 망신에 대한 두려움을 반영한다.',
        segments: [
          { text: 'Crucially,', role: 'M', labelKo: '강조 부사' },
          { text: 'such hesitation', role: 'S', labelKo: '주어(S)' },
          { text: 'rarely stems from', role: 'V', labelKo: '준부정 동사구(V)' },
          { text: 'coldhearted apathy;', role: 'O', labelKo: '전치사 목적어' },
          { text: 'rather,', role: 'CONN', labelKo: '수정·대조 연결어' },
          { text: 'it', role: 'S', labelKo: '주어(S)' },
          { text: 'reflects', role: 'V', labelKo: '동사(V)' },
          { text: 'our deep social sensitivity to ambiguity and fear of public embarrassment.', role: 'O', labelKo: '병렬 목적어(O)' },
        ],
      },
      {
        id: 'hs14-s5',
        english:
          'Yet once a single witness breaks the silence or a victim points directly at one individual and assigns a specific request, the spell of collective paralysis dissolves almost immediately.',
        slashBroken:
          'Yet once a single witness breaks the silence / or a victim points directly at one individual and assigns a specific request, / the spell of collective paralysis / dissolves almost immediately.',
        korean:
          '그러나 단 한 명의 목격자가 침묵을 깨거나 피해자가 한 개인을 직접 지목해 구체적인 요청을 부여하는 순간, 집단적 마비의 주술은 거의 즉시 풀린다.',
        segments: [
          { text: 'Yet', role: 'CONN', labelKo: '역접 접속사' },
          { text: 'once', role: 'CONN', labelKo: '조건·시간 접속사' },
          { text: 'a single witness breaks the silence or a victim points directly at one individual and assigns a specific request,', role: 'M', labelKo: '조건 부사절(병렬)' },
          { text: 'the spell of collective paralysis', role: 'S', labelKo: '주어(S)' },
          { text: 'dissolves', role: 'V', labelKo: '자동사(V)' },
          { text: 'almost immediately.', role: 'M', labelKo: '부사구' },
        ],
      },
      {
        id: 'hs14-s6',
        english:
          'Understanding these psychological dynamics thus empowers ordinary citizens to transform passive crowds into responsive communities simply by stepping forward first.',
        slashBroken:
          'Understanding these psychological dynamics / thus empowers ordinary citizens / to transform passive crowds into responsive communities / simply by stepping forward first.',
        korean:
          '따라서 이러한 심리적 역학을 이해하는 것은 평범한 시민들이 먼저 한 걸음 나서는 것만으로도 수동적인 군중을 기민하게 응답하는 공동체로 탈바꿈시킬 힘을 준다.',
        segments: [
          { text: 'Understanding these psychological dynamics', role: 'S', labelKo: '동명사 주어(단수)' },
          { text: 'thus', role: 'CONN', labelKo: '인과 연결어' },
          { text: 'empowers', role: 'V', labelKo: '5형식 단수 동사(V)' },
          { text: 'ordinary citizens', role: 'O', labelKo: '목적어(O)' },
          { text: 'to transform passive crowds into responsive communities', role: 'C', labelKo: '목적격 보어(to V)' },
          { text: 'simply by stepping forward first.', role: 'M', labelKo: '수단(by -ing)' },
        ],
      },
    ],
    syntaxNotes: [
      {
        expression: 'the likelihood that any single individual will intervene',
        grammarPointKo: '추상명사 likelihood + 동격 접속사 that',
        explanationKo:
          '"~할 가능성"이라는 추상명사 likelihood의 구체적 내용을 완전한 절로 풀어 주는 동격 접속사 that입니다(관계대명사 which로 바꿀 수 없음).',
      },
      {
        expression: 'Known as the bystander effect, this phenomenon arises from ~, in which ~',
        grammarPointKo: '수동 분사구문 + 전치사+관계대명사 (in which)',
        explanationKo:
          '주어 this phenomenon이 방관자 효과로 "알려져 있는" 수동 관계이므로 Known as를 쓰며, pluralistic ignorance라는 상황 안에서 벌어지는 완전한 절을 in which가 연결합니다.',
      },
      {
        expression: 'rarely stems from coldhearted apathy; rather, it reflects ~',
        grammarPointKo: '준부정어 rarely + 수정 연결어 rather 대조',
        explanationKo:
          '앞 절을 부정·약화(rarely)한 뒤 세미콜론과 rather("오히려")를 통해 진짜 원인을 제시하는 논설문 핵심 전환 구조입니다.',
      },
      {
        expression: 'empowers ordinary citizens to transform passive crowds into responsive communities',
        grammarPointKo: '5형식 empower O to V + transform A into B',
        explanationKo:
          '동명사 주어 Understanding ~이 단수이므로 empowers와 수일치하며, empower는 목적격 보어로 to부정사(to transform)를 취합니다.',
      },
    ],
    keyVocab: [
      { word: 'stranded', phonetic: '/ˈstræn.dɪd/', meaningKo: '발이 묶인, 고립된' },
      { word: 'counterintuitively', phonetic: '/ˌkaʊn.tər.ɪnˈtjuː.ɪ.tɪv.li/', meaningKo: '직관에 반하게도' },
      { word: 'intervene', phonetic: '/ˌɪn.təˈviːn/', meaningKo: '개입하다, 나서다' },
      { word: 'diffusion', phonetic: '/dɪˈfjuː.ʒən/', meaningKo: '확산, 분산' },
      { word: 'apathy', phonetic: '/ˈæp.ə.θi/', meaningKo: '무관심, 냉담' },
      { word: 'paralysis', phonetic: '/pəˈræl.ə.sɪs/', meaningKo: '마비, 무력 상태' },
    ],
    questions: [
      {
        id: 'hs14-q1',
        questionType: '빈칸 추론',
        questionKo: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
        stimulusBox:
          'Yet once a single witness breaks the silence or a victim points directly at one individual and assigns a specific request, ________.',
        options: [
          'nearby onlookers become even more hesitant to speak up',
          'pluralistic ignorance spreads more rapidly across the square',
          'the spell of collective paralysis dissolves almost immediately',
          'the crowd prefers to wait for official emergency guidelines',
          'social sensitivity turns into permanent moral indifference',
        ],
        answer: 'the spell of collective paralysis dissolves almost immediately',
        explanationKo:
          '앞 문단에서 방관자 효과가 "모호함(누가 나설지 모름)"과 "책임 분산"에서 비롯된다고 설명했고, 빈칸 앞은 Yet으로 전환하며 "한 사람이 침묵을 깨거나 특정 개인에게 구체적 요청을 지정하면"이라고 조건을 걸었습니다. 따라서 그 결과는 집단적 마비(방관)가 즉시 풀린다는 내용이 들어가야 합니다.',
        grammarTag: '전환(Yet once) 문제 해결 결과 추론',
      },
      {
        id: 'hs14-q2',
        questionType: '글의 순서 (A-B-C)',
        questionKo: '주어진 글 다음에 이어질 글의 순서로 가장 적절한 것을 고르시오.',
        stimulusBox:
          '[주어진 글]\nCommon sense suggests that a person facing an emergency in a crowded public square is far safer than someone stranded on an empty street.\n\n(A) Known as the bystander effect, this phenomenon arises from diffusion of responsibility and pluralistic ignorance. Crucially, such hesitation rarely stems from coldhearted apathy; rather, it reflects our sensitivity to ambiguity and fear of embarrassment.\n(B) Counterintuitively, classic experiments by social psychologists John Darley and Bibb Latane demonstrated that the presence of additional onlookers sharply reduces the likelihood that any single individual will intervene.\n(C) Yet once a single witness breaks the silence or a victim assigns a specific request to one individual, the spell of collective paralysis dissolves almost immediately. Understanding these dynamics empowers citizens to step forward first.',
        options: [
          '(A) - (C) - (B)',
          '(B) - (A) - (C)',
          '(B) - (C) - (A)',
          '(C) - (A) - (B)',
          '(C) - (B) - (A)',
        ],
        answer: '(B) - (A) - (C)',
        explanationKo:
          '(B)의 "Counterintuitively(직관에 반하게도)"가 주어진 글의 "Common sense(상식)"를 뒤집으며 실험 결과를 제시합니다. 이어 (A)의 "this phenomenon"이 (B)의 개입 감소 현상을 방관자 효과로 명명하고 원인을 분석하며, (C)가 Yet으로 반전하며 집단적 마비를 깨는 해법으로 마무리하므로 (B)-(A)-(C)가 정답입니다.',
        grammarTag: '통념 대조(Counterintuitively) → 원인 분석(this phenomenon) → 해결(Yet)',
      },
      {
        id: 'hs14-q3',
        questionType: '요약문 완성',
        questionKo: '윗글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?',
        stimulusBox:
          'In emergencies, having more witnesses often delays help not because bystanders are inherently (A) ________, but because shared presence dilutes personal accountability — a barrier that breaks once responsibility is clearly (B) ________.',
        options: [
          '(A) impulsive — (B) hidden',
          '(A) courageous — (B) avoided',
          '(A) experienced — (B) delayed',
          '(A) anxious — (B) forgotten',
          '(A) indifferent — (B) assigned',
        ],
        answer: '(A) indifferent — (B) assigned',
        explanationKo:
          '본문의 "rarely stems from coldhearted apathy(냉혹한 무관심)"가 (A) indifferent(무관심한)에, "assigns a specific request(구체적 요청을 지정하다)"가 (B) assigned(부여된·지정된)에 정확히 대응됩니다.',
        grammarTag: '원인 부정(not A but B) + 해결 조건 요약',
      },
    ],
  },

  /* =========================================================================
   * HS15 — [의학·생명윤리 · C1] The Placebo Effect and Mind-Body Healing
   * ========================================================================= */
  {
    id: 'hs15',
    number: 15,
    cefrLevel: 'c1',
    csatGradeTag: '수능 실전 · 1등급 킬러',
    topicBadge: '의학·생명윤리',
    titleEn: 'The Placebo Effect and Mind-Body Healing',
    titleKo: '플라시보 효과와 심신 의학',
    estimatedMin: 10,
    sentences: [
      {
        id: 'hs15-s1',
        english:
          'For much of modern medical history, the placebo effect was regarded as little more than an inconvenient statistical nuisance to be filtered out during clinical drug trials.',
        slashBroken:
          'For much of modern medical history, / the placebo effect was regarded / as little more than an inconvenient statistical nuisance / to be filtered out during clinical drug trials.',
        korean:
          '근대 의학사의 상당 기간 동안 플라시보 효과는 임상 약물 시험 과정에서 걸러 내야 할 성가신 통계적 방해 요소에 불과한 것으로 취급되었다.',
        segments: [
          { text: 'For much of modern medical history,', role: 'M', labelKo: '기간 부사구' },
          { text: 'the placebo effect', role: 'S', labelKo: '주어(S)' },
          { text: 'was regarded as', role: 'V', labelKo: '수동태 동사구(V)' },
          { text: 'little more than an inconvenient statistical nuisance', role: 'C', labelKo: '보어(단지 ~에 불과한)' },
          { text: 'to be filtered out during clinical drug trials.', role: 'M', labelKo: '수동 to부정사 형용사적 수식' },
        ],
      },
      {
        id: 'hs15-s2',
        english:
          'Recent breakthroughs in neuroimaging, however, have demonstrated that inert treatments paired with compassionate clinical rituals can trigger measurable biochemical changes, including the release of endogenous opioids and dopamine.',
        slashBroken:
          'Recent breakthroughs in neuroimaging, however, / have demonstrated / that inert treatments paired with compassionate clinical rituals / can trigger measurable biochemical changes, / including the release of endogenous opioids and dopamine.',
        korean:
          '그러나 최근 신경영상학의 획기적 진전은, 약리 성분이 없는 처치라도 따뜻한 임상적 의례와 결합되면 내인성 오피오이드와 도파민 분비를 포함한 측정 가능한 생화학적 변화를 촉발할 수 있음을 입증했다.',
        segments: [
          { text: 'Recent breakthroughs in neuroimaging,', role: 'S', labelKo: '주어(S)' },
          { text: 'however,', role: 'CONN', labelKo: '역접 연결어' },
          { text: 'have demonstrated', role: 'V', labelKo: '현재완료 동사(V)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'inert treatments paired with compassionate clinical rituals', role: 'S', labelKo: '종속절 주어+과거분사 수식' },
          { text: 'can trigger', role: 'V', labelKo: '종속절 동사(V′)' },
          { text: 'measurable biochemical changes,', role: 'O', labelKo: '목적어(O′)' },
          { text: 'including the release of endogenous opioids and dopamine.', role: 'M', labelKo: '예시 전치사구' },
        ],
      },
      {
        id: 'hs15-s3',
        english:
          "Far from proving that a patient's pain was imaginary, these neural findings confirm that expectation and context actively recruit the central nervous system's own symptom-modulating pathways.",
        slashBroken:
          "Far from proving that a patient's pain was imaginary, / these neural findings confirm / that expectation and context / actively recruit / the central nervous system's own symptom-modulating pathways.",
        korean:
          '환자의 통증이 상상 속의 산물이었다는 사실을 증명하기는커녕, 이러한 신경학적 발견들은 기대와 맥락이 중추신경계 자체의 증상 조절 경로를 능동적으로 동원한다는 점을 확증한다.',
        segments: [
          { text: "Far from proving that a patient's pain was imaginary,", role: 'M', labelKo: 'Far from -ing 대조구' },
          { text: 'these neural findings', role: 'S', labelKo: '주어(S)' },
          { text: 'confirm', role: 'V', labelKo: '동사(V)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'expectation and context', role: 'S', labelKo: '종속절 주어(S′)' },
          { text: 'actively recruit', role: 'V', labelKo: '종속절 동사(V′)' },
          { text: "the central nervous system's own symptom-modulating pathways.", role: 'O', labelKo: '목적어(O′)' },
        ],
      },
      {
        id: 'hs15-s4',
        english:
          'Remarkably, controlled studies have even shown that open-label placebos — pills explicitly disclosed to patients as containing no active chemical — still alleviate chronic discomfort when accompanied by an empathetic explanation of how mind-body conditioning operates.',
        slashBroken:
          'Remarkably, / controlled studies have even shown / that open-label placebos / — pills explicitly disclosed to patients as containing no active chemical — / still alleviate chronic discomfort / when accompanied by an empathetic explanation / of how mind-body conditioning operates.',
        korean:
          '놀랍게도 대조 임상 연구들은 심지어 공개형 플라시보—활성 화학 성분이 전혀 들어 있지 않다고 환자에게 명시적으로 공개된 알약—조차 심신 조건화가 어떻게 작동하는지에 대한 공감적 설명이 동반될 때 만성적 불편감을 여전히 완화한다는 사실을 보여주었다.',
        segments: [
          { text: 'Remarkably,', role: 'M', labelKo: '문장 부사' },
          { text: 'controlled studies', role: 'S', labelKo: '주어(S)' },
          { text: 'have even shown', role: 'V', labelKo: '현재완료 동사(V)' },
          { text: 'that', role: 'CONN', labelKo: '명사절 접속사' },
          { text: 'open-label placebos', role: 'S', labelKo: '종속절 주어(S′)' },
          { text: '—', role: 'PLAIN' },
          { text: 'pills explicitly disclosed to patients as containing no active chemical', role: 'M', labelKo: '동격 삽입구(과거분사)' },
          { text: '—', role: 'PLAIN' },
          { text: 'still alleviate', role: 'V', labelKo: '종속절 동사(V′)' },
          { text: 'chronic discomfort', role: 'O', labelKo: '목적어(O′)' },
          { text: 'when accompanied by an empathetic explanation of how mind-body conditioning operates.', role: 'M', labelKo: '접속사+수동 분사구문+간접의문문' },
        ],
      },
      {
        id: 'hs15-s5',
        english:
          'This discovery poses a delicate bioethical challenge, because physicians must harness the therapeutic power of trust and communication without ever resorting to deception that would violate informed consent.',
        slashBroken:
          'This discovery poses a delicate bioethical challenge, / because physicians must harness / the therapeutic power of trust and communication / without ever resorting to deception / that would violate informed consent.',
        korean:
          '이 발견은 섬세한 생명윤리적 과제를 제기하는데, 의사들이 사전 동의 원칙을 위반할 기만에 결코 의존하지 않으면서도 신뢰와 소통이 지닌 치료적 힘을 활용해야 하기 때문이다.',
        segments: [
          { text: 'This discovery', role: 'S', labelKo: '주어(S)' },
          { text: 'poses', role: 'V', labelKo: '동사(V)' },
          { text: 'a delicate bioethical challenge,', role: 'O', labelKo: '목적어(O)' },
          { text: 'because', role: 'CONN', labelKo: '이유 접속사' },
          { text: 'physicians must harness the therapeutic power of trust and communication', role: 'M', labelKo: '이유 부사절' },
          { text: 'without ever resorting to deception that would violate informed consent.', role: 'M', labelKo: 'without -ing+관계절' },
        ],
      },
      {
        id: 'hs15-s6',
        english:
          'Ultimately, the science of placebo healing reminds contemporary medicine that every clinical encounter delivers not only pharmacological molecules, but also a potent neurobiological signal of safety and care.',
        slashBroken:
          'Ultimately, / the science of placebo healing / reminds contemporary medicine / that every clinical encounter delivers / not only pharmacological molecules, / but also a potent neurobiological signal of safety and care.',
        korean:
          '궁극적으로 플라시보 치유 과학은 모든 임상적 만남이 약리학적 분자뿐만 아니라 안전과 돌봄이라는 강력한 신경생물학적 신호까지 함께 전달한다는 사실을 현대 의학에 일깨워 준다.',
        segments: [
          { text: 'Ultimately,', role: 'M', labelKo: '결론 부사' },
          { text: 'the science of placebo healing', role: 'S', labelKo: '주어(S)' },
          { text: 'reminds', role: 'V', labelKo: '4형식 동사(V)' },
          { text: 'contemporary medicine', role: 'O', labelKo: '간접목적어' },
          { text: 'that every clinical encounter delivers', role: 'O', labelKo: '직접목적어 that절(every 단수)' },
          { text: 'not only pharmacological molecules,', role: 'O', labelKo: 'not only A' },
          { text: 'but also a potent neurobiological signal of safety and care.', role: 'O', labelKo: 'but also B' },
        ],
      },
    ],
    syntaxNotes: [
      {
        expression: 'an inconvenient statistical nuisance to be filtered out',
        grammarPointKo: 'to부정사의 수동 형용사적 용법 (to be p.p.)',
        explanationKo:
          '앞 명사 nuisance(방해 요소)가 임상 시험에서 "걸러져야 할" 수동 대상이므로 능동 to filter out이 아니라 수동 부정사 to be filtered out으로 수식합니다.',
      },
      {
        expression: 'inert treatments paired with compassionate clinical rituals',
        grammarPointKo: '과거분사 후치수식 (paired with)',
        explanationKo:
          '주어 inert treatments와 동사 can trigger 사이에 과거분사구 paired with ~가 길게 끼어들어 있으므로 진짜 본동사를 정확히 식별해야 합니다.',
      },
      {
        expression: 'pills explicitly disclosed to patients as containing no active chemical',
        grammarPointKo: '삽입 동격구 과거분사(disclosed) + 전치사 as + 동명사',
        explanationKo:
          '알약(pills)은 환자에게 "공개되는" 수동 대상이므로 과거분사 disclosed를 쓰며, 전치사 as 뒤에 동명사 containing이 결합해 성분이 없음을 밝힙니다.',
      },
      {
        expression: 'without ever resorting to deception that would violate informed consent',
        grammarPointKo: 'without -ing + resort to + 가정적 조동사 would',
        explanationKo:
          'resort to는 "~에 의지하다·호소하다"라는 전치사 to 결합 표현이며, 뒤의 would violate는 기만이 사용될 경우 발생할 윤리적 위반을 가정합니다.',
      },
    ],
    keyVocab: [
      { word: 'nuisance', phonetic: '/ˈnjuː.səns/', meaningKo: '골칫거리, 방해 요소' },
      { word: 'inert', phonetic: '/ɪˈnɜːt/', meaningKo: '비활성의, 약리 작용이 없는' },
      { word: 'endogenous', phonetic: '/enˈdɒdʒ.ə.nəs/', meaningKo: '내인성의, 체내에서 생성되는' },
      { word: 'alleviate', phonetic: '/əˈliː.vi.eɪt/', meaningKo: '완화하다, 경감하다' },
      { word: 'bioethical', phonetic: '/ˌbaɪ.əʊˈeθ.ɪ.kəl/', meaningKo: '생명윤리적인' },
      { word: 'pharmacological', phonetic: '/ˌfɑː.mə.kəˈlɒdʒ.ɪ.kəl/', meaningKo: '약리학적인, 약물의' },
    ],
    questions: [
      {
        id: 'hs15-q1',
        questionType: '문장 삽입',
        questionKo: '글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳을 고르시오.',
        stimulusBox:
          "[주어진 문장]\nFar from proving that a patient's pain was imaginary, these neural findings confirm that expectation and context actively recruit the central nervous system's own symptom-modulating pathways.\n\nFor much of modern medical history, the placebo effect was regarded as little more than an inconvenient statistical nuisance to be filtered out during clinical drug trials. ( ① ) Recent breakthroughs in neuroimaging, however, have demonstrated that inert treatments paired with compassionate clinical rituals can trigger measurable biochemical changes, including the release of endogenous opioids and dopamine. ( ② ) Remarkably, controlled studies have even shown that open-label placebos — pills explicitly disclosed to patients as containing no active chemical — still alleviate chronic discomfort when accompanied by an empathetic explanation of how mind-body conditioning operates. ( ③ ) This discovery poses a delicate bioethical challenge, because physicians must harness the therapeutic power of trust and communication without ever resorting to deception that would violate informed consent. ( ④ ) Ultimately, the science of placebo healing reminds contemporary medicine that every clinical encounter delivers not only pharmacological molecules, but also a potent neurobiological signal of safety and care. ( ⑤ )",
        options: ['①', '②', '③', '④', '⑤'],
        answer: '②',
        explanationKo:
          '주어진 문장의 "these neural findings(이러한 신경학적 발견들)"는 ② 앞 문장에서 신경영상학(neuroimaging)이 밝혀낸 내인성 오피오이드·도파민 분비 등 생화학적 변화를 정확히 지칭하며, 기대와 맥락이 중추신경계를 활성화한다는 해석이 ② 뒤의 "공개형 플라시보와 심신 조건화" 사례로 자연스럽게 확장됩니다.',
        grammarTag: '지시어(these neural findings) + 개념 해석 연결',
      },
      {
        id: 'hs15-q2',
        questionType: '어법성 판단',
        questionKo: '다음 밑줄 친 ①~⑤ 중 어법상 틀린 것을 고르시오.',
        stimulusBox:
          'The placebo effect was once regarded as a statistical nuisance ① to be filtered out during drug trials. Recent neuroimaging shows that inert treatments ② paired with compassionate clinical rituals trigger real biochemical changes, confirming ③ that expectation recruits neural pathways. Controlled studies even reveal that open-label placebos — pills explicitly ④ disclosing to patients as containing no active chemical — still relieve discomfort, challenging physicians to foster trust without ⑤ resorting to deception.',
        options: [
          '① to be filtered',
          '② paired',
          '③ that',
          '④ disclosing',
          '⑤ resorting',
        ],
        answer: '④ disclosing',
        explanationKo:
          '④ disclosing은 틀렸습니다. 타동사 disclose(공개하다)의 의미상 주어인 pills(알약)는 환자에게 "공개되는" 수동 대상이므로 현재분사 disclosing이 아니라 과거분사 disclosed로 고쳐야 합니다. ① 수동 부정사 to be filtered 정답, ② treatments를 수식하는 수동 과거분사 paired 정답, ③ 완전한 절을 이끄는 접속사 that 정답, ⑤ 전치사 without 뒤 동명사 resorting 정답입니다.',
        grammarTag: '삽입 동격구 과거분사 수동태 (pills disclosed to ~)',
      },
      {
        id: 'hs15-q3',
        questionType: '요약문 완성',
        questionKo: '윗글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?',
        stimulusBox:
          'Rather than being a mere statistical illusion, the placebo effect triggers real (A) ________ responses through patient expectation and supportive care, urging clinicians to cultivate therapeutic trust while upholding (B) ________ honesty.',
        options: [
          '(A) accidental — (B) financial',
          '(A) imaginary — (B) strict',
          '(A) biochemical — (B) ethical',
          '(A) surgical — (B) private',
          '(A) temporary — (B) legal',
        ],
        answer: '(A) biochemical — (B) ethical',
        explanationKo:
          '본문은 플라시보가 측정 가능한 생화학적(biochemical) 반응(오피오이드·도파민 분비)을 일으키며, 기만 없이 사전 동의를 지키는 생명윤리적(ethical) 정직성 안에서 신뢰의 치유력을 활용해야 한다고 결론짓고 있으므로 (A) biochemical — (B) ethical이 정답입니다.',
        grammarTag: '의학·생명윤리 핵심 개념어 요약',
      },
    ],
  },
];

/* =========================================================================
 * 6 Guided Academic Essay Prompts (High-School / University / TOEFL)
 * ========================================================================= */
export const ACADEMIC_ESSAY_PROMPTS: AcademicEssayPrompt[] = [
  {
    id: 'essay-01',
    levelBadge: '고등 내신 서술형 · B2',
    topicKo: '고등학교 교실에서의 생성형 AI 도구 활용',
    promptEn:
      'Should high schools integrate generative AI tools into classroom instruction, or restrict them to protect independent thinking? Support your position with clear reasons.',
    promptKo:
      '고등학교는 생성형 AI 도구를 교실 수업에 통합해야 할까요, 아니면 독립적 사고를 보호하기 위해 제한해야 할까요? 명확한 근거를 들어 자신의 입장을 논술하세요.',
    thesisStarter:
      'While generative AI raises legitimate concerns about academic dishonesty, high schools should thoughtfully integrate these tools to strengthen critical thinking rather than ban them outright.',
    bodyStarter:
      'First and foremost, guided AI use teaches students how to verify information and evaluate automated arguments rather than accept them passively.',
    conclusionStarter:
      'In conclusion, preparing young learners for an AI-driven society requires teaching ethical judgment alongside independent reasoning.',
    targetVocab: [
      'integrate',
      'critical thinking',
      'academic integrity',
      'verify',
      'supplement',
      'independent',
      'guideline',
    ],
    modelEssayEn:
      'While generative AI raises legitimate concerns about academic integrity, high schools should thoughtfully integrate these tools into classrooms rather than ban them outright. First, guided AI use helps students strengthen critical thinking by requiring them to verify claims, detect biases, and compare automated outputs against reliable sources. When treated as a learning supplement instead of a shortcut, AI can also offer immediate feedback on grammar and structure, narrowing gaps for learners who lack private tutoring. Furthermore, prohibiting digital tools altogether leaves teenagers unprepared for university research and modern workplaces where responsible AI literacy is already indispensable. Naturally, schools must establish clear guidelines that preserve independent drafting and oral defense of ideas. In conclusion, thoughtful classroom integration equips students not to surrender their minds to machines, but to question, refine, and lead technology with ethical judgment.',
    modelEssayKo:
      '생성형 AI가 학업 정직성에 대한 타당한 우려를 불러일으키기는 하지만, 고등학교는 이러한 도구를 전면 금지하기보다는 교실에 신중하게 통합해야 한다. 첫째, 지도 아래 AI를 활용하면 학생들이 주장을 검증하고 편향을 탐지하며 자동화된 결과물을 신뢰할 만한 출처와 비교하도록 요구함으로써 비판적 사고를 강화할 수 있다. 지름길이 아니라 학습 보조 수단으로 다룰 때 AI는 문법과 구조에 대한 즉각적 피드백도 제공하여, 사교육을 받기 어려운 학습자들의 격차를 좁혀 준다. 나아가 디지털 도구를 전면 금지하면 책임 있는 AI 문해력이 이미 필수인 대학 연구와 현대 직장에 대비하지 못한 채 청소년들을 내보내게 된다. 물론 학교는 독립적인 초안 작성과 구두 논증 발표를 지켜 내는 명확한 지침을 세워야 한다. 결론적으로 신중한 교실 통합은 학생들이 기계에 사고를 내어 주는 것이 아니라 윤리적 판단력으로 기술을 질문하고 정교화하며 이끌도록 준비시켜 준다.',
  },
  {
    id: 'essay-02',
    levelBadge: '찬반 에세이 · B2',
    topicKo: '수업 시간 중 스마트폰 사용 제한의 필요성',
    promptEn:
      'Should smartphone use be strictly restricted during school hours to improve academic focus and peer interaction? Present your argument with specific examples.',
    promptKo:
      '학업 집중력과 또래 간 소통을 높이기 위해 수업 시간 중 스마트폰 사용을 엄격히 제한해야 할까요? 구체적인 예시와 함께 자신의 주장을 전개하세요.',
    thesisStarter:
      'Although smartphones offer convenient access to information, restricting their use during school hours is essential for restoring deep concentration and genuine face-to-face connection.',
    bodyStarter:
      'Research consistently demonstrates that even a silent phone resting on a desk fragments working memory and lowers reading comprehension.',
    conclusionStarter:
      'Therefore, creating phone-free school hours protects both cognitive stamina and the social well-being of adolescents.',
    targetVocab: [
      'restrict',
      'distraction',
      'concentration',
      'comprehension',
      'face-to-face',
      'boundary',
      'well-being',
    ],
    modelEssayEn:
      'Although smartphones provide instant access to dictionaries and educational apps, strictly restricting them during school hours is essential for restoring deep concentration and healthy peer relationships. First, cognitive studies consistently show that constant notifications—and even the mere presence of a phone on a desk—create subtle distraction that fragments attention and lowers reading comprehension. Removing personal devices during class allows students to sustain focus through challenging lessons without the urge to check social feeds. Moreover, phone-free hallways and lunchrooms revive genuine face-to-face conversation, reducing the anxiety and comparison fueled by continuous online scrolling. When digital research is genuinely needed for a project, schools can supply shared tablets designed solely for academic tasks. In conclusion, setting a clear boundary around smartphone use does not reject modern technology; rather, it safeguards cognitive stamina and emotional well-being during formative school years.',
    modelEssayKo:
      '스마트폰이 사전과 교육용 앱에 즉각적인 접근을 제공하기는 하지만, 깊은 집중력과 건강한 또래 관계를 회복하기 위해서는 수업 시간 중 스마트폰 사용을 엄격히 제한하는 것이 필수적이다. 첫째, 인지 연구들은 끊임없는 알림—심지어 책상 위에 휴대폰이 놓여 있다는 사실 자체—이 주의를 분산시키고 독해력을 떨어뜨리는 미세한 방해를 일으킨다는 점을 일관되게 보여준다. 수업 중 개인 기기를 치워 두면 학생들은 SNS 피드를 확인하고 싶은 충동 없이 어려운 수업에도 집중력을 유지할 수 있다. 더욱이 휴대폰 없는 복도와 급식실은 진정한 대면 대화를 되살려, 끊임없는 온라인 스크롤이 부추기는 불안과 비교 심리를 줄여 준다. 프로젝트에 디지털 조사가 정말 필요할 때는 학업 전용 공용 태블릿을 제공하면 된다. 결론적으로 스마트폰 사용에 명확한 경계를 설정하는 것은 현대 기술을 거부하는 것이 아니라, 성장기 학창 시절의 인지적 지구력과 정서적 안녕을 지켜 주는 일이다.',
  },
  {
    id: 'essay-03',
    levelBadge: '수능 연계 · TOEFL B2–C1',
    topicKo: '기후 위기 대응: 개인의 실천 vs 정부의 정책',
    promptEn:
      'In addressing climate change, which plays a more decisive role: individual lifestyle choices or bold government policy? Explain your view clearly.',
    promptKo:
      '기후 변화에 대응하는 데 있어 개인의 생활 습관 선택과 과감한 정부 정책 중 어느 쪽이 더 결정적인 역할을 할까요? 자신의 견해를 명확히 논술하세요.',
    thesisStarter:
      'While conscientious individual habits matter symbolically, bold government policy plays the far more decisive role in curbing global emissions at the necessary scale.',
    bodyStarter:
      'On a structural level, energy grids, public transit systems, and industrial carbon standards can only be transformed through coordinated legislation.',
    conclusionStarter:
      'Ultimately, individual choices achieve their greatest impact not in isolation, but when citizens demand and sustain ambitious public policy.',
    targetVocab: [
      'decisive',
      'emissions',
      'infrastructure',
      'legislation',
      'incentive',
      'accountable',
      'sustainable',
      'collective',
    ],
    modelEssayEn:
      'While everyday choices such as recycling and conserving electricity cultivate environmental awareness, bold government policy plays the far more decisive role in confronting climate change at the required scale. Fundamentally, the largest share of greenhouse emissions stems from power generation, heavy industry, and transportation infrastructure—systems that no solitary consumer can redesign alone. Only enforceable legislation can phase out coal plants, tighten corporate efficiency standards, and expand affordable public transit for millions of commuters simultaneously. Furthermore, well-crafted public incentives make sustainable choices financially accessible rather than a luxury reserved for wealthy households. Still, individual action remains meaningful when it moves beyond private guilt toward civic engagement that holds leaders accountable. Ultimately, personal habits and systemic reform are not rivals; yet without ambitious government policy to reshape the economic playing field, collective climate goals will remain out of reach.',
    modelEssayKo:
      '재활용이나 절전 같은 일상의 선택이 환경 의식을 기르기는 하지만, 필요한 규모로 기후 변화에 맞서는 데 있어서는 과감한 정부 정책이 훨씬 더 결정적인 역할을 한다. 근본적으로 온실가스 배출의 가장 큰 비중은 발전, 중공업, 교통 인프라에서 나오는데, 이는 어떤 개인 소비자도 혼자서는 재설계할 수 없는 체계다. 오직 강제력 있는 입법만이 석탄 발전소를 단계적으로 폐지하고, 기업 효율 기준을 강화하며, 수백만 통근자를 위한 합리적 가격의 대중교통을 동시에 확충할 수 있다. 나아가 잘 설계된 공공 인센티브는 지속가능한 선택을 부유층만의 사치가 아니라 누구나 경제적으로 접근 가능한 대안으로 만든다. 물론 개인의 실천도 사적인 죄책감을 넘어 지도자들에게 책임을 묻는 시민 참여로 나아갈 때 여전히 의미가 크다. 궁극적으로 개인의 습관과 제도적 개혁은 대립하지 않지만, 경제의 판을 바꾸는 과감한 정부 정책 없이는 공동의 기후 목표는 도달할 수 없는 채 남을 것이다.',
  },
  {
    id: 'essay-04',
    levelBadge: '대학 에세이 · C1',
    topicKo: '숏폼 영상 시대에도 깊은 독서가 여전히 중요한 이유',
    promptEn:
      'In an era dominated by short-form videos and rapid summaries, why does deep reading of complex texts still matter? Discuss with logical reasons.',
    promptKo:
      '숏폼 영상과 빠른 요약이 지배하는 시대에도 복잡한 텍스트를 깊이 읽는 독서가 여전히 중요한 이유는 무엇일까요? 논리적 근거를 들어 서술하세요.',
    thesisStarter:
      'Even though short-form videos deliver rapid entertainment and quick facts, deep reading remains irreplaceable because it trains sustained reflection and analytical empathy.',
    bodyStarter:
      'Unlike fast-paced clips engineered for passive dopamine hits, long-form texts compel readers to track nuanced arguments across pages.',
    conclusionStarter:
      'In summary, preserving the habit of deep reading is vital for nurturing independent citizens capable of navigating a complex world.',
    targetVocab: [
      'irreplaceable',
      'sustained',
      'nuanced',
      'empathy',
      'attention span',
      'cognitive',
      'reflection',
    ],
    modelEssayEn:
      'In an era dominated by thirty-second clips and instant summaries, deep reading of complex texts remains irreplaceable for cultivating sustained thought and analytical empathy. Unlike short-form videos engineered to reward rapid scrolling with constant stimulation, long-form reading trains the cognitive patience required to trace subtle causes, weigh competing evidence, and spot hidden contradictions. As our digital habits shrink our attention span, books serve as a deliberate gymnasium for slow reflection—allowing readers to pause, reread an intricate sentence, and question an author rather than passively absorb headlines. Equally important, immersing ourselves in richly drawn narratives or historical essays expands empathy by inviting us to inhabit unfamiliar lives and moral dilemmas from within. In summary, rapid media may keep us informed on the surface, yet only deep reading equips us with the nuanced judgment needed to think clearly in a noisy century.',
    modelEssayKo:
      '30초 영상과 즉석 요약이 지배하는 시대에도 복잡한 글을 깊이 읽는 독서는 지속적인 사고력과 분석적 공감을 기르는 데 대체 불가능한 가치를 지닌다. 끊임없는 자극으로 빠른 스크롤에 보상을 주도록 설계된 숏폼 영상과 달리, 긴 호흡의 독서는 미묘한 인과를 추적하고 상충하는 증거를 저울질하며 숨겨진 모순을 포착하는 인지적 인내를 훈련한다. 디지털 습관이 우리의 주의 집중 시간을 짧게 만드는 가운데, 책은 느린 성찰을 위한 의도적 훈련장이 되어—독자가 멈춰 서서 정교한 문장을 다시 읽고 헤드라인을 수동적으로 받아들이는 대신 저자에게 질문할 수 있게 해준다. 마찬가지로 중요한 점은, 치밀하게 그려진 서사나 역사적 에세이에 몰입하는 일이 낯선 삶과 도덕적 딜레마를 내면에서 체험하게 하여 공감을 넓혀 준다는 것이다. 요약하자면, 빠른 미디어는 표면적인 소식을 전해 줄 수 있지만 소란스러운 세기 속에서 명료하게 사고하는 데 필요한 정교한 판단력을 길러 주는 것은 오직 깊은 독서뿐이다.',
  },
  {
    id: 'essay-05',
    levelBadge: '논증 에세이 · B2',
    topicKo: '의미 있는 성장을 위해 실패는 필수적인가?',
    promptEn:
      'Is experiencing failure necessary for meaningful personal and academic growth, or can people progress just as effectively by avoiding mistakes? Defend your stance.',
    promptKo:
      '의미 있는 개인적·학업적 성장을 위해 실패의 경험은 필수적일까요, 아니면 실수를 피하면서도 똑같이 효과적으로 발전할 수 있을까요? 자신의 입장을 논증하세요.',
    thesisStarter:
      'Although failure feels discouraging in the moment, encountering and analyzing setbacks is indispensable for building genuine mastery and resilience.',
    bodyStarter:
      'When learners coast smoothly through effortless tasks, hidden weaknesses often remain undetected until a far higher-stakes challenge arrives.',
    conclusionStarter:
      'Ultimately, failure becomes a powerful teacher whenever it is paired with honest reflection and deliberate adjustment.',
    targetVocab: [
      'setback',
      'indispensable',
      'resilience',
      'mastery',
      'diagnostic',
      'reflection',
      'adaptability',
    ],
    modelEssayEn:
      'Although failure feels deeply discouraging in the moment, encountering manageable setbacks is indispensable for meaningful academic and personal growth. When students succeed effortlessly on predictable tasks, fragile assumptions often remain hidden beneath high scores. By contrast, a clear mistake serves a valuable diagnostic function: it exposes precise gaps in knowledge and forces learners to rethink flawed strategies rather than repeat comfortable routines. Beyond intellectual mastery, recovering from disappointment builds emotional resilience and adaptability—qualities that cannot be learned solely from smooth victories. Of course, failure is not automatically beneficial; repeating the same error without analysis breeds frustration rather than wisdom. However, when setbacks are followed by honest reflection and targeted adjustment, they transform abstract advice into durable insight. Ultimately, avoiding every mistake may protect short-term pride, but embracing thoughtful failure is what turns potential into lasting competence.',
    modelEssayKo:
      '실패는 그 순간에는 깊은 좌절감을 주지만, 감당할 수 있는 좌절을 겪어 보는 일은 의미 있는 학업적·개인적 성장에 없어서는 안 될 필수 요소다. 학생들이 예측 가능한 과제에서 손쉽게 성공할 때면, 취약한 전제들이 높은 점수 아래 숨겨진 채 남기 쉽다. 반면 명확한 실수는 소중한 진단 기능을 수행한다. 지식 속 정확한 빈틈을 드러내고, 학습자가 편안한 관성을 되풀이하는 대신 결함 있는 전략을 다시 생각하도록 이끌기 때문이다. 지적 숙달을 넘어, 실망에서 회복하는 과정은 정서적 회복탄력성과 적응력을 키워 주는데, 이는 순탄한 승리만으로는 결코 배울 수 없는 자질이다. 물론 실패가 자동적으로 유익한 것은 아니다. 분석 없이 같은 오류를 반복하면 지혜가 아니라 좌절감만 쌓인다. 그러나 좌절 뒤에 정직한 성찰과 표적화된 조정이 뒤따른다면, 실패는 추상적인 조언을 오래가는 통찰로 바꾼다. 궁극적으로 모든 실수를 피하면 단기적 자존심은 지킬 수 있겠지만, 사려 깊은 실패를 끌어안는 태도야말로 잠재력을 지속적인 역량으로 바꾼다.',
  },
  {
    id: 'essay-06',
    levelBadge: '글로벌 교양 · C1',
    topicKo: '문화적 공감의 창으로서의 제2외국어 학습',
    promptEn:
      'In a world with increasingly accurate translation apps, why is learning a second language still valuable as a bridge to cultural empathy? Support your argument.',
    promptKo:
      '번역 앱이 점점 더 정확해지는 세상에서, 제2외국어 학습이 문화적 공감으로 이어지는 다리로서 여전히 가치 있는 이유는 무엇일까요? 근거를 들어 논술하세요.',
    thesisStarter:
      'Despite remarkable advances in instant translation software, learning a second language remains irreplaceable because language encodes cultural nuance and builds authentic human trust.',
    bodyStarter:
      'Translation apps can convey literal definitions, yet they frequently miss the idioms, humor, and social respect embedded in everyday expressions.',
    conclusionStarter:
      'In closing, speaking another language opens not merely a dictionary of words, but a window into another community’s worldview.',
    targetVocab: [
      'encode',
      'nuance',
      'literal',
      'worldview',
      'authentic',
      'bridge',
      'intercultural',
      'empathy',
    ],
    modelEssayEn:
      'Despite remarkable advances in real-time translation software, learning a second language remains deeply valuable as a bridge to authentic cultural empathy. While digital tools reliably convert literal facts such as train schedules or menu items, they frequently flatten the subtle nuance, humor, and social etiquette encoded within everyday speech. For instance, understanding why Korean distinguishes honorific levels or why certain idioms draw on shared history reveals values that a word-for-word translation can never fully capture. Furthermore, making the effort to speak someone else’s mother tongue signals genuine respect and lowers emotional barriers in intercultural dialogue, fostering trust that screens between speakers inevitably dilute. Learning another grammar also loosens the assumption that one’s native worldview is the only natural way to organize reality. In closing, mastering a second language does far more than replace an app; it widens our capacity to listen deeply across borders.',
    modelEssayKo:
      '실시간 번역 소프트웨어의 놀라운 발전에도 불구하고, 제2외국어를 배우는 일은 진정한 문화적 공감으로 이어지는 다리로서 여전히 깊은 가치를 지닌다. 디지털 도구는 기차 시간표나 메뉴 항목 같은 문자적 사실은 안정적으로 옮겨 주지만, 일상 발화 속에 새겨진 미묘한 뉘앙스, 유머, 사회적 예절은 종종 평면화해 버린다. 예를 들어 한국어가 왜 높임법 단계를 구분하는지, 혹은 특정 관용구가 왜 공유된 역사에서 비롯되었는지를 이해하는 일은 직역으로는 결코 온전히 포착할 수 없는 가치관을 드러낸다. 나아가 상대의 모국어를 말하려는 노력 자체가 진정성 있는 존중의 신호가 되어 이문화 대화의 정서적 장벽을 낮추고, 화자 사이에 놓인 화면이 필연적으로 희석하는 신뢰를 키워 준다. 또 다른 문법을 익히는 과정은 자신의 모국어적 세계관만이 현실을 정리하는 유일한 자연스러운 방식이라는 전제도 느슨하게 풀어 준다. 맺음말로, 제2외국어를 숙달하는 일은 앱을 대체하는 것을 훨씬 넘어 국경을 넘어 깊이 경청하는 우리의 역량을 넓혀 준다.',
  },
];

/* =========================================================================
 * 12 Categorized Academic Connector Chips (Click-to-Insert for Essay Lab)
 * ========================================================================= */
export const ACADEMIC_CONNECTOR_CHIPS: AcademicConnectorChip[] = [
  { labelEn: 'Furthermore', meaningKo: '게다가, 더욱이', categoryKo: '추가' },
  { labelEn: 'Moreover', meaningKo: '뿐만 아니라', categoryKo: '추가' },
  { labelEn: 'In addition', meaningKo: '덧붙여 말하면', categoryKo: '추가' },
  { labelEn: 'Consequently', meaningKo: '결과적으로', categoryKo: '인과' },
  { labelEn: 'Therefore', meaningKo: '그러므로, 따라서', categoryKo: '인과' },
  { labelEn: 'As a result', meaningKo: '그 결과로', categoryKo: '인과' },
  { labelEn: 'However', meaningKo: '그러나, 하지만', categoryKo: '대조' },
  { labelEn: 'Nevertheless', meaningKo: '그럼에도 불구하고', categoryKo: '대조' },
  { labelEn: 'On the other hand', meaningKo: '반면에', categoryKo: '대조' },
  { labelEn: 'For instance', meaningKo: '예를 들어', categoryKo: '예시' },
  { labelEn: 'Specifically', meaningKo: '구체적으로 말하면', categoryKo: '예시' },
  { labelEn: 'In conclusion', meaningKo: '결론적으로', categoryKo: '결론' },
];

/* =========================================================================
 * Verified Embed-Permitted Academic Essay & Reading YouTube Lectures
 * ========================================================================= */
export const ACADEMIC_YOUTUBE_VIDEOS: CuratedExtraVideo[] = [
  {
    videoId: 'UuOWNNvupik',
    title: 'How to Write an Essay: 4 Minute Step-by-step Guide',
    channel: 'Scribbr',
    badgeKo: '4분 에세이 핵심 뼈대',
    summaryKo:
      '서론(Thesis Statement) → 본론 문단(Topic Sentence + Evidence) → 결론 요약까지 영문 아카데믹 에세이의 표준 설계도를 4분 만에 명쾌하게 정리해 주는 핵심 강의입니다.',
  },
  {
    videoId: 'GNL1_tNTqpw',
    title: 'English Essay: How to Write about ANY Essay Topic',
    channel: 'E2 English',
    badgeKo: '수능·TOEFL 논증 전략',
    summaryKo:
      '어떤 생소한 논제가 나와도 당황하지 않고 입장을 정하고 근거를 구조화하는 브레인스토밍 공식과 고득점 연결어 활용법을 실전 예시로 보여줍니다.',
  },
  {
    videoId: '3TADeQI-XI0',
    title: 'Essay Structure & Coming Top at University',
    channel: 'Jesus College Oxford',
    badgeKo: '옥스퍼드 최상위권 논술',
    summaryKo:
      '옥스퍼드 대학 튜터가 직접 설명하는 최상위권 에세이의 조건—단순 요약과 진짜 비판적 논증(Critical Argument)을 가르는 문단 설계 비결을 배울 수 있습니다.',
  },
];
