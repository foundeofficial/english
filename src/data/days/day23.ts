import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day23Module: DayLessonModule = {
  dayNumber: 23,
  weekNumber: 4,
  cefrLevel: 'c1',
  isWeeklyReview: false,
  dayBadge: 'DAY 23 · 격식 동사 vs. 원어민 구동사 & 뉘앙스 레이어링',
  categoryLabel: '레지스터 전환 · 격식/구어 제어 · 고급 이디엄',
  title: '같은 뜻도 보고서와 회의에서는 어조를 다르게 갈아입습니다',
  subtitle: '라틴계 격식 동사(postpone · tolerate)와 원어민 구동사(put off · put up with), 고급 관용구(bring to the table)를 자유자재로 전환하기',
  heroImage: 'assets/scene_boardroom_pitch.jpg',
  secondaryImage: 'assets/visual_preposition_card.jpg',
  estimatedSprintMin: 9,
  estimatedLectureMin: 48,
  keyExpression: 'bring to the table / at the end of the day / put off vs. postpone',
  keySentenceByTier: {
    a1: 'Let us delay the meeting until next week and check the problem.',
    a2: 'We should put off the launch for a week and look into the bug first.',
    b1: 'At the end of the day, we cannot put up with slow tools, so let us look into better options.',
    b2: "While our board memo will formally postpone the rollout, in tomorrow's town hall I'll explain why we're putting it off and what each team brings to the table.",
    c1: "Bear in mind that speaking in overly stiff Latinate verbs can come across as distant; at the end of the day, effective leadership boils down to matching your register without watering down your message.",
    c2: "If you read between the lines of executive feedback, mastering C1 fluency isn't about ruling out phrasal verbs—it's about toning down rigid prose in live dialogue while preserving precision in written governance."
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[23],
  readingPassage: {
    titleEn: "Mastering Register: Knowing When to 'Postpone' and When to 'Put Off'",
    titleKo: '레지스터(어조) 마스터하기: 언제 postpone을 쓰고 언제 put off를 써야 하는가',
    genreBadge: 'Executive Style Guide · C1',
    estimatedMin: 5,
    paragraphsEn: [
      "Many advanced Korean professionals carry an invisible handicap into English meetings: they learned English primarily through written exams filled with Latinate verbs like 'postpone,' 'tolerate,' 'investigate,' and 'eliminate.' While those words belong in legal contracts and board memos, using them nonstop in a live team discussion can make you come across as stiff, distant, or even confrontational. Native leaders instinctively switch registers—writing 'postpone the launch' in an official notice, yet saying 'put it off until Friday' when brainstorming with colleagues.",
      "Mastering this register shift also prevents subtle grammar traps. Separable phrasal verbs like 'put off,' 'call off,' 'tone down,' and 'rule out' require object pronouns right in the middle—so you must say 'put it off,' never 'put off it.' By contrast, inseparable or three-word phrasal verbs such as 'look into' and 'put up with' always keep the pronoun at the very end: 'look into it' and 'put up with it.' Keeping this structural rule in mind lets you sound effortlessly idiomatic without sacrificing grammatical accuracy.",
      "At the end of the day, nuance layering boils down to reading between the lines of your audience's expectations. You may need to tone down sharp criticism in a cross-cultural review without watering down the core business standard. Bear in mind that your credibility rests on what you actually bring to the table: when you know when to phase out legacy jargon in casual huddles and deploy crisp formal verbs in executive briefings, people trust both your warmth and your authority."
    ],
    paragraphsSlash: [
      "Many advanced Korean professionals carry / an invisible handicap into English meetings: / they learned English primarily through written exams / filled with Latinate verbs like 'postpone,' 'tolerate,' 'investigate,' and 'eliminate.' / While those words belong in legal contracts and board memos, / using them nonstop in a live team discussion / can make you come across as stiff, distant, or even confrontational. / Native leaders instinctively switch registers— / writing 'postpone the launch' in an official notice, / yet saying 'put it off until Friday' / when brainstorming with colleagues.",
      "Mastering this register shift / also prevents subtle grammar traps. / Separable phrasal verbs like 'put off,' 'call off,' 'tone down,' and 'rule out' / require object pronouns right in the middle— / so you must say 'put it off,' never 'put off it.' / By contrast, inseparable or three-word phrasal verbs / such as 'look into' and 'put up with' / always keep the pronoun at the very end: / 'look into it' and 'put up with it.' / Keeping this structural rule in mind / lets you sound effortlessly idiomatic / without sacrificing grammatical accuracy.",
      "At the end of the day, / nuance layering boils down to / reading between the lines / of your audience's expectations. / You may need to tone down sharp criticism / in a cross-cultural review / without watering down the core business standard. / Bear in mind that your credibility rests on / what you actually bring to the table: / when you know when to phase out legacy jargon in casual huddles / and deploy crisp formal verbs in executive briefings, / people trust both your warmth and your authority."
    ],
    paragraphsKo: [
      '많은 고급 수준의 한국 직장인들이 영어 회의에 보이지 않는 핸디캡을 안고 들어갑니다. 바로 postpone, tolerate, investigate, eliminate 같은 라틴계 격식 동사로 가득한 필기시험 중심으로 영어를 배웠기 때문입니다. 이런 단어들은 법적 계약서나 이사회 메모에는 제격이지만, 실시간 팀 토론에서 끊임없이 사용하면 딱딱하고 거리감이 느껴지거나 심지어 공격적으로 비칠 수 있습니다. 원어민 리더들은 본능적으로 어조(레지스터)를 전환합니다. 공식 공지에는 "postpone the launch"라고 쓰면서도 동료들과 브레인스토밍할 때는 "put it off until Friday"라고 말합니다.',
      '이러한 레지스터 전환을 익히면 미묘한 문법 함정도 예방할 수 있습니다. put off, call off, tone down, rule out 같은 분리 가능 구동사는 대명사 목적어가 반드시 가운데 들어가야 하므로 "put it off"라고 해야지 절대 "put off it"이라고 해서는 안 됩니다. 반대로 look into나 put up with 같은 분리 불가 또는 3단어 구동사는 대명사를 항상 맨 끝에 둡니다("look into it", "put up with it"). 이 구조적 규칙을 염두에 두면 문법적 정확성을 해치지 않으면서도 물 흐르듯 자연스러운 원어민 표현을 구사할 수 있습니다.',
      '결국 따지고 보면 뉘앙스 레이어링의 핵심은 청중의 기대치에 담긴 행간을 읽는 것으로 귀결됩니다. 다문화 리뷰 자리에서는 핵심 비즈니스 기준을 희석시키지 않으면서도 날카로운 비판의 어조는 한 톤 누그러뜨릴 필요가 있습니다. 당신의 신뢰도는 결국 실질적으로 무엇을 기여할 수 있는가(bring to the table)에 달려 있음을 명심하십시오. 가벼운 허들 미팅에서 구식 딱딱한 용어를 단계적으로 덜어내고 임원 브리핑에서는 명료한 격식 동사를 배치할 줄 알 때, 사람들은 당신의 따뜻함과 권위를 동시에 신뢰하게 됩니다.'
    ],
    keyExpressions: [
      'come across as ~ : 남에게 ~한 인상을 주다, ~하게 비치다',
      'put it off (분리) vs. look into it / put up with it (분리 불가)',
      'at the end of the day / boil down to ~ : 결국 따지고 보면 / 결국 ~로 귀결되다',
      'read between the lines : 행간을 읽다, 숨은 의도를 파악하다',
      'tone down vs. water down : 어조를 완화하다 vs. 핵심 기준을 희석시키다',
      'bring ~ to the table / bear in mind : 실질적 가치를 기여하다 / ~을 명심하다'
    ],
    comprehensionQuiz: [
      {
        id: 'd23-rq01',
        questionKo: '1문단에 따르면 실시간 팀 토론에서 라틴계 격식 동사(postpone, tolerate 등)만 지나치게 사용할 때 생기는 부작용은?',
        options: [
          '청중에게 딱딱하고 거리감이 느껴지거나 심지어 공격적인 인상(come across as stiff)을 줄 수 있다.',
          '법적 계약서나 이사회 메모에서 전문성이 부족해 보일 수 있다.',
          '원어민 동료들이 단어의 뜻을 전혀 이해하지 못할 수 있다.',
          '회의 시간이 필요 이상으로 길어져 결론을 내릴 수 없다.'
        ],
        answer: '청중에게 딱딱하고 거리감이 느껴지거나 심지어 공격적인 인상(come across as stiff)을 줄 수 있다.',
        explanationKo:
          '1문단의 "can make you come across as stiff, distant, or even confrontational"에 명확히 설명되어 있습니다.'
      },
      {
        id: 'd23-rq02',
        questionKo: '2문단의 구동사 대명사 어순 규칙에 따라 올바르게 짝지어진 쌍은 무엇인가요?',
        options: [
          'put it off / look into it / put up with it',
          'put off it / look it into / put up it with',
          'put it off / look it into / put it up with',
          'put off it / look into it / put up with it'
        ],
        answer: 'put it off / look into it / put up with it',
        explanationKo:
          '분리 가능 타동사+부사 구동사(put off)는 대명사가 가운데(put it off), 전치사 결합 및 3단어 구동사(look into, put up with)는 대명사가 끝(look into it, put up with it)에 옵니다.'
      },
      {
        id: 'd23-rq03',
        questionKo: '3문단에서 `tone down`과 `water down`을 대조하여 제시한 이상적인 다문화 피드백 전략은?',
        options: [
          '핵심 비즈니스 기준은 희석시키지(water down) 않으면서 날카로운 비판 어조만 누그러뜨린다(tone down).',
          '상대 기분을 배려해 핵심 비즈니스 기준까지 대폭 낮추고 비판을 생략한다.',
          '구어 미팅에서도 격식 동사만 유지해 권위를 최우선으로 지킨다.',
          '모든 비판을 서면 메모로 대체하고 대면 피드백을 배제(rule out)한다.'
        ],
        answer: '핵심 비즈니스 기준은 희석시키지(water down) 않으면서 날카로운 비판 어조만 누그러뜨린다(tone down).',
        explanationKo:
          '3문단의 "tone down sharp criticism in a cross-cultural review without watering down the core business standard"가 정확한 전략입니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd23-v01',
      word: 'bring ~ to the table',
      phonetic: '/brɪŋ tuː ðə ˈteɪbl/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '(팀·협상·파트너십에 실질적인 가치·역량을) 기여하다, 제시하다',
      meaningEn: 'contribute useful skills, resources, or advantages to a group or negotiation',
      nuanceTipKo: '면접·협상·파트너 평가 어디서나 쓰이는 최상급 원어민 표현! "What does this vendor bring to the table?"처럼 씁니다.',
      exampleEn: 'Every regional lead brings unique market insight to the table.',
      exampleKo: '각 지역 리드는 고유한 시장 통찰을 팀에 실질적으로 기여하고 있습니다.'
    },
    {
      id: 'd23-v02',
      word: 'at the end of the day',
      phonetic: '/æt ði end ʌv ðə deɪ/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '결국 따지고 보면, 무엇보다 궁극적으로 중요한 것은',
      meaningEn: 'ultimately, when every factor has been considered',
      nuanceTipKo: '문자 그대로 "퇴근 무렵(by EOD)"이 아니라, 복잡한 논쟁 끝에 궁극적 본질을 짚어내는 전환 구문입니다!',
      exampleEn: 'At the end of the day, customers judge us by reliability, not slide decks.',
      exampleKo: '결국 따지고 보면 고객은 슬라이드 자료가 아니라 서비스 신뢰도로 우리를 평가합니다.'
    },
    {
      id: 'd23-v03',
      word: 'put off',
      phonetic: '/pʊt ɔːf/',
      pos: '구동사 (분리 가능)',
      cefr: 'b2',
      meaningKo: '(일정·결정을) 미루다, 연기하다 (= postpone의 자연스러운 구어)',
      meaningEn: 'delay or postpone an event, task, or decision until a later time',
      nuanceTipKo: '대명사 목적어가 오면 반드시 `put it off`로 분리해야 합니다! 동명사도 목적으로 받습니다(`put off making a decision`).',
      exampleEn: "We shouldn't put off migrating the legacy server any longer.",
      exampleKo: '구형 서버 이전을 더 이상 미뤄서는 안 됩니다.'
    },
    {
      id: 'd23-v04',
      word: 'call off',
      phonetic: '/kɔːl ɔːf/',
      pos: '구동사 (분리 가능)',
      cefr: 'b2',
      meaningKo: '(예정된 행사·계약·출시를) 취소·철회하다 (= cancel의 구어)',
      meaningEn: 'cancel a planned event, meeting, or agreement',
      nuanceTipKo: '격식 보고서엔 cancel, 구두 회의에선 call off! 대명사는 가운데 넣어 `call it off`로 말합니다.',
      exampleEn: 'Due to the typhoon alert, we had to call off the outdoor partner event.',
      exampleKo: '태풍 경보 때문에 야외 파트너 행사를 취소해야 했습니다.'
    },
    {
      id: 'd23-v05',
      word: 'put up with',
      phonetic: '/pʊt ʌp wɪð/',
      pos: '구동사 (분리 불가)',
      cefr: 'b2',
      meaningKo: '(불편·비효율·무례함을) 참고 견디다 (= tolerate의 구어)',
      meaningEn: 'tolerate or endure an unpleasant situation or behavior without complaining',
      nuanceTipKo: '3단어 구동사는 절대 쪼갤 수 없습니다! 항상 `put up with it` 어순으로 씁니다.',
      exampleEn: 'Users will not put up with a ten-second checkout delay for long.',
      exampleKo: '사용자들은 10초짜리 결제 지연을 오래 참고 견뎌주지 않을 것입니다.'
    },
    {
      id: 'd23-v06',
      word: 'look into',
      phonetic: '/lʊk ˈɪntuː/',
      pos: '구동사 (분리 불가)',
      cefr: 'b2',
      meaningKo: '(이슈·원인을) 조사하다, 들여다보다 (= investigate의 구어)',
      meaningEn: 'examine or investigate the facts behind an issue or request',
      nuanceTipKo: '회신 이메일·슬랙에서 "I will investigate it"보다 "I\'ll look into it right away"가 훨씬 따뜻하고 협업적입니다. (`look it into` ❌)',
      exampleEn: "Thanks for flagging that bug—our backend lead is looking into it now.",
      exampleKo: '그 버그를 알려주셔서 감사합니다—백엔드 리드가 지금 바로 들여다보고 있습니다.'
    },
    {
      id: 'd23-v07',
      word: 'come across as',
      phonetic: '/kʌm əˈkrɔːs æz/',
      pos: '구동사',
      cefr: 'c1',
      meaningKo: '(남에게 특정한 인상을) 주다, ~하게 비치다',
      meaningEn: 'give a particular impression or appear a certain way to others',
      nuanceTipKo: '내 의도와 달리 상대에게 어떻게 들릴지 점검할 때 "I don\'t want to come across as dismissive"처럼 쓰는 C1 핵심 표현입니다.',
      exampleEn: 'Using overly rigid verbs in casual chats can come across as cold.',
      exampleKo: '가벼운 대화에서 지나치게 딱딱한 동사를 쓰면 차갑게 비칠 수 있습니다.'
    },
    {
      id: 'd23-v08',
      word: 'tone down',
      phonetic: '/toʊn daʊn/',
      pos: '구동사 (분리 가능)',
      cefr: 'c1',
      meaningKo: '(표현·비판·어조를) 한 톤 누그러뜨리다, 부드럽게 완화하다',
      meaningEn: 'make speech, writing, or criticism less intense, harsh, or aggressive',
      nuanceTipKo: '이메일 발송 전 강경한 표현을 다듬을 때 "Let\'s tone it down a bit"이라고 말합니다.',
      exampleEn: 'Could we tone down the wording in paragraph two before sending it to the client?',
      exampleKo: '고객사에 보내기 전에 두 번째 문단의 표현을 한 톤만 누그러뜨릴 수 있을까요?'
    },
    {
      id: 'd23-v09',
      word: 'water down',
      phonetic: '/ˈwɔːtər daʊn/',
      pos: '구동사 (분리 가능)',
      cefr: 'c1',
      meaningKo: '(핵심 메시지·기준·요구사항을) 물 타듯 희석시키다, 약화시키다',
      meaningEn: 'weaken the force, clarity, or rigor of a proposal, message, or standard',
      nuanceTipKo: 'tone down은 긍정적 어조 조절, water down은 본질·기준이 흐려지는 부정적 약화라는 결정적 차이를 꼭 구별하세요!',
      exampleEn: 'Be careful not to water down our security standards just to speed up onboarding.',
      exampleKo: '온보딩 속도를 높이려다 보안 기준 자체를 희석시키지 않도록 주의하세요.'
    },
    {
      id: 'd23-v10',
      word: 'boil down to',
      phonetic: '/bɔɪl daʊn tuː/',
      pos: '구동사 (분리 불가)',
      cefr: 'c1',
      meaningKo: '결국 ~로 귀결되다, 본질·핵심은 ~이다',
      meaningEn: 'have something as the essential, most fundamental reason or conclusion',
      nuanceTipKo: '육수를 푹 졸여(boil down) 진국만 남기듯 복잡한 논점을 한 줄로 압축할 때 "It all boils down to trust"처럼 씁니다.',
      exampleEn: 'Ultimately, this negotiation boils down to predictable multi-year revenue.',
      exampleKo: '궁극적으로 이번 협상의 핵심은 예측 가능한 다년 매출 확보로 귀결됩니다.'
    },
    {
      id: 'd23-v11',
      word: 'read between the lines',
      phonetic: '/riːd bɪˈtwiːn ðə laɪnz/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '행간을 읽다, 겉말 속에 숨은 진짜 의도를 파악하다',
      meaningEn: 'infer an unstated meaning or hidden intention behind what is said or written',
      nuanceTipKo: '영어권의 완곡한 거절이나 에둘러 말하는 피드백("That\'s an interesting idea...")의 진의를 파악할 때 쓰는 필수 표현입니다.',
      exampleEn: 'Reading between the lines, the client is worried about migration downtime.',
      exampleKo: '행간을 읽어보면 고객사는 이전 과정의 다운타임을 우려하고 있는 것입니다.'
    },
    {
      id: 'd23-v12',
      word: 'rule out',
      phonetic: '/ruːl aʊt/',
      pos: '구동사 (분리 가능)',
      cefr: 'c1',
      meaningKo: '(가능성·선택지를) 완전히 배제하다, 제외하다 (= eliminate의 구어)',
      meaningEn: 'exclude or dismiss a possibility, option, or cause',
      nuanceTipKo: '여지를 남길 때 `I wouldn\'t rule it out(그 가능성을 배제하진 않겠어)`로 매우 자주 쓰이는 원어민 고급 구문입니다.',
      exampleEn: "We can't rule out a phased launch in Q4 if compliance takes longer.",
      exampleKo: '규정 검토가 길어지면 4분기 단계적 출시 가능성도 배제할 수 없습니다.'
    },
    {
      id: 'd23-v13',
      word: 'phase out',
      phonetic: '/feɪz aʊt/',
      pos: '구동사 (분리 가능)',
      cefr: 'c1',
      meaningKo: '(구형 제품·정책·시스템을) 단계적으로 폐지·종료하다',
      meaningEn: 'gradually stop using, offering, or supporting something over time',
      nuanceTipKo: '갑자기 끊는(cut off) 게 아니라 일정 기간을 두고 순차 종료할 때 씁니다. 반의어는 `phase in(단계적 도입)`입니다.',
      exampleEn: 'We plan to phase out the legacy API over the next two quarters.',
      exampleKo: '앞으로 두 분기에 걸쳐 구형 API를 단계적으로 종료할 계획입니다.'
    },
    {
      id: 'd23-v14',
      word: 'bear in mind',
      phonetic: '/ber ɪn maɪnd/',
      pos: '관용구',
      cefr: 'c1',
      meaningKo: '~을 염두에 두다, 명심하다',
      meaningEn: 'keep an important fact or constraint in consideration while deciding',
      nuanceTipKo: 'keep in mind보다 한 단계 더 세련된 C1 격식 톤! "Bear in mind that + 절"로 중요한 전제나 주의점을 정중히 상기시킵니다.',
      exampleEn: 'Bear in mind that European partners operate under stricter data privacy rules.',
      exampleKo: '유럽 파트너들은 더 엄격한 개인정보 보호 규정 아래 운영된다는 점을 염두에 두세요.'
    },
    {
      id: 'd23-v15',
      word: 'register',
      phonetic: '/ˈredʒɪstər/',
      pos: '명사',
      cefr: 'c1',
      meaningKo: '(상황·청중에 맞는) 언어 사용역, 어조·격식 수준',
      meaningEn: 'the level of formality and style of language appropriate to a specific social context',
      nuanceTipKo: '단순히 "등록하다"가 아니라 언어학·커뮤니케이션에서 casual / standard / formal 어조 층위를 가리키는 핵심 명사입니다.',
      exampleEn: 'Great communicators shift register smoothly between a board memo and a Slack huddle.',
      exampleKo: '뛰어난 커뮤니케이터는 이사회 메모와 슬랙 허들 사이에서 어조(레지스터)를 매끄럽게 전환합니다.'
    }
  ],
  dialogue: [
    {
      id: 'd23-t01',
      speaker: 'Hannah',
      roleLabel: '임원 커뮤니케이션 디렉터',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english: "I reviewed both your board memo and your all-hands script, Junsu. The memo's register is spot-on, but the live speech still sounds a bit stiff.",
      slashBroken: 'I reviewed both your board memo / and your all-hands script, Junsu. / The memo register is spot-on, / but the live speech still sounds a bit stiff.',
      korean: '이사회 메모와 전사 타운홀 대본 둘 다 검토했어요, 준수 님. 메모의 격식 수준은 딱 좋은데, 라이브 연설 대본은 아직 좀 딱딱하게 들려요.',
      keyHighlight: 'register is spot-on / stiff',
      noteKo: 'spot-on은 "정확히 딱 들어맞는"이라는 원어민 구어 칭찬 표현입니다.'
    },
    {
      id: 'd23-t02',
      speaker: 'Junsu',
      roleLabel: 'APAC 지역 부사장 (VP)',
      voicePitch: 0.9,
      sceneImage: 'assets/visual_preposition_card.jpg',
      cameraMotion: 'pan-right',
      english: "Really? I wrote 'We will postpone the rollout while we investigate the latency bug.' Doesn't that sound professional?",
      slashBroken: "Really? / I wrote 'We will postpone the rollout / while we investigate the latency bug.' / Doesn't that sound professional?",
      korean: '정말요? "지연 버그를 조사하는 동안 출시를 연기하겠습니다(postpone / investigate)"라고 썼는데, 프로페셔널하게 들리지 않나요?',
      keyHighlight: 'postpone / investigate',
      noteKo: '문어체로는 완벽하지만 전사 직원 대상 구두 연설에서는 다소 차갑고 관료적으로 들릴 수 있는 전형적 사례입니다.'
    },
    {
      id: 'd23-t03',
      speaker: 'Hannah',
      roleLabel: '임원 커뮤니케이션 디렉터',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-left',
      english: "In writing, yes! Out loud at an all-hands, though, Latinate verbs can come across as distant. Try: 'We're putting it off for a week while engineers look into it.'",
      slashBroken: "In writing, yes! / Out loud at an all-hands, though, / Latinate verbs can come across as distant. / Try: 'We are putting it off for a week / while engineers look into it.'",
      korean: '글에서는 그렇죠! 하지만 전사 미팅에서 말로 할 때 라틴계 동사만 쓰면 거리감이 느껴질 수 있어요. "엔지니어들이 들여다보는 동안 일주일만 미루겠습니다(putting it off / look into it)"로 바꿔 보세요.',
      keyHighlight: 'come across as / putting it off / look into it',
      noteKo: '분리 가능 구동사 `putting it off`와 분리 불가 구동사 `look into it`의 대명사 위치 차이를 동시에 확인하세요!'
    },
    {
      id: 'd23-t04',
      speaker: 'Junsu',
      roleLabel: 'APAC 지역 부사장 (VP)',
      voicePitch: 0.9,
      sceneImage: 'assets/visual_preposition_card.jpg',
      cameraMotion: 'zoom-in',
      english: "Oh, what a difference! And what about the part where I say we won't tolerate sloppy QA? Should I tone it down?",
      slashBroken: "Oh, what a difference! / And what about the part / where I say we will not tolerate sloppy QA? / Should I tone it down?",
      korean: '오, 느낌이 확 다르네요! 그리고 허술한 QA는 용납(tolerate)하지 않겠다고 한 부분은 어떨까요? 어조를 좀 누그러뜨려야 할까요?',
      keyHighlight: 'tolerate / tone it down',
      noteKo: '분리 가능 구동사 tone down 역시 대명사 it을 가운데 넣어 `tone it down`이라고 말합니다.'
    },
    {
      id: 'd23-t05',
      speaker: 'Hannah',
      roleLabel: '임원 커뮤니케이션 디렉터',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-right',
      english: "Yes—tone down the harsh edge without watering down the standard. Say: 'At the end of the day, our customers won't put up with slow checkout, so we're phasing out manual workarounds.'",
      slashBroken: "Yes—tone down the harsh edge / without watering down the standard. / Say: 'At the end of the day, / our customers will not put up with slow checkout, / so we are phasing out manual workarounds.'",
      korean: '맞아요—기준 자체는 희석시키지 않으면서 날카로운 느낌만 누그러뜨리세요. "결국 고객들은 느린 결제를 참아주지 않을 것이므로, 수동 임시 방편을 단계적으로 폐지하겠습니다"라고 말해보세요.',
      keyHighlight: 'tone down / watering down / put up with / phasing out',
      noteKo: '질책의 주어를 "나(I won\'t tolerate)"에서 "고객(our customers won\'t put up with)"으로 옮기면 비난 없이 기준을 세울 수 있습니다.'
    },
    {
      id: 'd23-t06',
      speaker: 'Junsu',
      roleLabel: 'APAC 지역 부사장 (VP)',
      voicePitch: 0.9,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'pan-left',
      english: "Love that framing—it really boils down to customer trust. And I won't rule out hiring two extra QA leads if workload stays high.",
      slashBroken: "Love that framing— / it really boils down to customer trust. / And I will not rule out / hiring two extra QA leads / if workload stays high.",
      korean: '그 프레이밍 정말 좋네요—결국 고객 신뢰로 귀결되니까요. 그리고 업무량이 계속 높으면 QA 리드 두 명을 추가 채용하는 것도 배제하지 않겠습니다.',
      keyHighlight: 'boils down to / rule out',
      noteKo: 'rule out + 동명사(-ing) 구문(`rule out hiring ~`)으로 유연한 의사결정 여지를 보여줍니다.'
    },
    {
      id: 'd23-t07',
      speaker: 'Hannah',
      roleLabel: '임원 커뮤니케이션 디렉터',
      voicePitch: 1.08,
      sceneImage: 'assets/scene_boardroom_pitch.jpg',
      cameraMotion: 'zoom-in',
      english: "Brilliant! Just bear in mind that people will read between the lines—end by recognizing what every team brings to the table, and you'll win the whole room.",
      slashBroken: "Brilliant! / Just bear in mind / that people will read between the lines— / end by recognizing / what every team brings to the table, / and you will win the whole room.",
      korean: '완벽해요! 사람들이 행간을 읽을 거라는 점만 명심하세요—각 팀이 실질적으로 기여하는 가치를 인정하며 마무리하면 회의실 전체의 마음을 얻을 겁니다.',
      keyHighlight: 'bear in mind / read between the lines / brings to the table',
      noteKo: '권위와 공감을 동시에 잡는 레지스터 레이어링의 정석 피날레입니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 라틴계 격식 동사(문어) vs. 원어민 구동사(구어) 1:1 전환 매트릭스',
      coreFormula: 'postpone ↔ put off | cancel ↔ call off | tolerate ↔ put up with | investigate ↔ look into | eliminate ↔ rule out',
      wrongKonglish: 'Hey team, let us postpone the sync and investigate about the glitch because users will not tolerate it.',
      rightNative: "Hey team, let's put off the sync and look into the glitch because users won't put up with it.",
      explanationKo:
        '영어에는 역사적으로 두 겹의 어휘 층위가 공존합니다. ① **라틴·프랑스계 단일 격식 동사**(postpone, cancel, investigate, tolerate, eliminate)는 공식 공문·계약서·이사회 메모에서 간결하고 권위 있게 쓰입니다. ② **게르만계 구동사**(put off, call off, look into, put up with, rule out)는 구두 회의·슬랙·1:1 코칭에서 따뜻하고 자연스러운 원어민 리듬을 만듭니다. C1 고급 화자는 어느 한쪽만 고집하지 않고 청중과 채널에 맞춰 자유롭게 갈아입습니다.',
      registerSpectrum: {
        casual: "Let's put it off till Friday while I look into the issue.",
        standard: "We're putting off the launch for a few days so engineering can look into the bug.",
        formal: 'The committee has elected to postpone the product rollout pending a formal investigation of the latency defect.'
      }
    },
    {
      title: '원리 02 · 구동사 대명사 어순 함정 완전 정복: 분리 가능 vs. 분리 불가',
      coreFormula: '분리 가능(타동사+부사): put it off / call it off / tone it down / rule it out ↔ 분리 불가: look into it / put up with it / boil down to it',
      wrongKonglish: 'The bug is serious, so do not put off it—please look it into immediately and do not put it up with.',
      rightNative: "The bug is serious, so don't put it off—please look into it immediately, as users won't put up with it.",
      explanationKo:
        '한국인 고급 학습자조차 말할 때 가장 많이 실수하는 어순 함정입니다! ① **분리 가능 구동사**(put off, call off, tone down, water down, rule out, phase out)는 일반 명사일 땐 둘 다 되지만(`put off the launch` / `put the launch off`), **대명사(`it / them`)가 오면 무조건 가운데**에 넣어야 합니다(`put it off` ✅ / `put off it` ❌). ② **전치사 구동사(`look into`)와 3단어 구동사(`put up with`, `boil down to`)**는 대명사를 포함한 모든 목적어가 **반드시 맨 끝**에 옵니다(`look into it` ✅ / `put up with it` ✅).',
      registerSpectrum: {
        casual: "Don't put it off—just look into it before we have to call it off.",
        standard: "Let's not rule it out yet; let's tone it down slightly and look into it further.",
        formal: 'We should neither rule out phased deployment nor water down compliance while our auditors look into it.'
      }
    },
    {
      title: '원리 03 · C1 뉘앙스 레이어링: tone down ≠ water down & 본질 압축 이디엄',
      coreFormula: 'tone down (어조 완화 · 긍정) ≠ water down (기준 희석 · 부정) | At the end of the day, it boils down to ~',
      wrongKonglish: 'Please water down your harsh tone in the email, and at the end of the day (5 PM) send it.',
      rightNative: 'Please tone down the harsh wording without watering down our core standard—at the end of the day, it boils down to client trust.',
      explanationKo:
        '① `tone down`은 날카로운 표현·감정의 강도를 세련되게 누그러뜨리는 것이고, `water down`은 물 타듯 본질과 기준을 약화시키는 부정적 뉘앙스입니다. 절대 바꿔 쓰면 안 됩니다! ② `at the end of the day`는 "오후 5시 퇴근 무렵(by EOD)"이 아니라 "결국 따지고 보면"이라는 본질 강조 표현입니다. ③ `come across as ~(~하게 비치다)`와 `read between the lines(행간을 읽다)`를 함께 구사하면 상대의 심리까지 읽는 C1 커뮤니케이터가 됩니다.',
      registerSpectrum: {
        casual: "Tone it down a notch, okay? At the end of the day, it all boils down to trust.",
        standard: 'Try to tone down the opening without watering down the message—it boils down to client trust.',
        formal: 'Bear in mind that overly blunt phrasing may come across as dismissive; ultimately, the issue boils down to preserving mutual credibility.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd23-s01',
      drillType: 'konglish-fix',
      promptKo: '"그 버그 수정은 미루지 말고 지금 바로 들여다봐 주세요." — 대명사 어순이 완벽한 문장은?',
      promptEnHint: 'put off는 분리 가능(put it off), look into는 분리 불가(look into it)입니다!',
      targetEn: "Please don't put it off—look into it right away.",
      wrongKonglishOption: "Please don't put off it—look it into right away.",
      explanationKo: '대명사 it은 put off 사이에(put it off), look into 뒤쪽에(look into it) 위치해야 합니다.'
    },
    {
      id: 'd23-s02',
      drillType: 'chunk-build',
      promptKo: '결국 따지고 보면 고객은 슬라이드 자료가 아니라 신뢰도로 우리를 평가합니다.',
      promptEnHint: 'At the end of the day 청크로 문장을 시작하세요.',
      targetEn: 'At the end of the day, customers judge us by reliability.',
      chunks: ['At the end of the day,', 'customers judge us', 'by', 'reliability.'],
      explanationKo: 'at the end of the day는 복잡한 논의 끝 궁극적 본질을 짚는 원어민 핵심 구문입니다.'
    },
    {
      id: 'd23-s03',
      drillType: 'active-blank',
      promptKo: '고객사에 보내기 전에 두 번째 문단의 표현을 한 톤만 누그러뜨릴 수 있을까요?',
      promptEnHint: '어조를 누그러뜨리다 = ____ down (동사 원형 1단어, 4글자)',
      targetEn: 'Could we tone down the wording in paragraph two before sending it?',
      blankData: {
        before: 'Could we',
        answer: 'tone',
        after: 'down the wording in paragraph two before sending it?',
        firstLetterHint: 't___ (4글자)'
      },
      explanationKo: '날카로운 표현이나 어조를 부드럽게 완화할 때는 tone down을 씁니다.'
    },
    {
      id: 'd23-s04',
      drillType: 'chunk-build',
      promptKo: '각 지역 리드는 고유한 시장 통찰을 팀에 실질적으로 기여하고 있습니다.',
      promptEnHint: 'bring ~ to the table 청크를 자연스럽게 배열하세요.',
      targetEn: 'Every regional lead brings unique market insight to the table.',
      chunks: ['Every regional lead', 'brings', 'unique market insight', 'to the table.'],
      explanationKo: 'bring + 가치/역량 + to the table은 팀이나 협상에서의 실질적 기여를 뜻합니다.'
    },
    {
      id: 'd23-s05',
      drillType: 'active-blank',
      promptKo: '온보딩 속도를 높이려다 핵심 보안 기준을 희석시키지 않도록 주의하세요.',
      promptEnHint: '물 타듯 희석시키다 = _____ down (동사 원형 1단어, 5글자)',
      targetEn: 'Be careful not to water down our core security standards.',
      blankData: {
        before: 'Be careful not to',
        answer: 'water',
        after: 'down our core security standards.',
        firstLetterHint: 'w____ (5글자)'
      },
      explanationKo: '기준이나 메시지의 강도와 본질을 약화시키는 것은 water down입니다.'
    },
    {
      id: 'd23-s06',
      drillType: 'chunk-build',
      promptKo: '가벼운 대화에서 지나치게 딱딱한 동사만 쓰면 거리감 있게 비칠 수 있습니다.',
      promptEnHint: 'come across as distant 청크를 연결하세요.',
      targetEn: 'Overly formal verbs in casual chats can come across as distant.',
      chunks: ['Overly formal verbs', 'in casual chats', 'can come across', 'as distant.'],
      explanationKo: 'come across as + 형용사/명사는 남에게 어떤 인상을 주는지 묘사할 때 씁니다.'
    },
    {
      id: 'd23-s07',
      drillType: 'active-blank',
      promptKo: '궁극적으로 이번 협상의 핵심은 예측 가능한 다년 매출 확보로 귀결됩니다.',
      promptEnHint: '결국 ~로 귀결되다 = _____ down to (3인칭 단수 1단어, 5글자)',
      targetEn: 'Ultimately, this negotiation boils down to predictable multi-year revenue.',
      blankData: {
        before: 'Ultimately, this negotiation',
        answer: 'boils',
        after: 'down to predictable multi-year revenue.',
        firstLetterHint: 'b____ (5글자, -s 주의)'
      },
      explanationKo: '주어가 단수(this negotiation)이므로 boils down to로 수일치합니다.'
    },
    {
      id: 'd23-s08',
      drillType: 'konglish-fix',
      promptKo: '"사용자들은 10초짜리 결제 지연을 오래 참고 견뎌주지 않을 겁니다." — 자연스러운 구동사 어순은?',
      promptEnHint: '3단어 구동사 put up with는 분리할 수 없습니다.',
      targetEn: "Users won't put up with a ten-second checkout delay for long.",
      wrongKonglishOption: "Users won't put a ten-second checkout delay up with for long.",
      explanationKo: '3단어 구동사 put up with는 목적어가 명사든 대명사든 항상 뒤에 위치합니다.'
    },
    {
      id: 'd23-s09',
      drillType: 'active-blank',
      promptKo: '유럽 파트너들은 더 엄격한 개인정보 규정 아래 운영된다는 점을 염두에 두세요.',
      promptEnHint: '명심하다/염두에 두다 = ____ in mind (동사 원형 1단어, 4글자)',
      targetEn: 'Please bear in mind that European partners follow stricter privacy rules.',
      blankData: {
        before: 'Please',
        answer: 'bear',
        after: 'in mind that European partners follow stricter privacy rules.',
        firstLetterHint: 'b___ (4글자)'
      },
      explanationKo: 'Bear in mind that ~ 은 중요한 제약이나 전제를 정중히 환기시키는 C1 구문입니다.'
    },
    {
      id: 'd23-s10',
      drillType: 'chunk-build',
      promptKo: '규정 검토가 길어지면 4분기 단계적 출시 가능성도 배제할 수 없습니다.',
      promptEnHint: 'rule out a phased launch 청크를 연결하세요.',
      targetEn: "We can't rule out a phased launch if compliance takes longer.",
      chunks: ["We can't", 'rule out', 'a phased launch', 'if compliance takes longer.'],
      explanationKo: 'rule out(~을 배제하다)은 부정문(can\'t / wouldn\'t rule out)으로 가능성을 열어둘 때 매우 자주 쓰입니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd23-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '기여 관용구 bring ~ to the table',
      questionKo: '빈칸에 알맞은 표현(3단어)을 넣어 "각 팀원이 고유한 강점을 실질적으로 기여하고 있습니다"를 완성하세요.',
      stimulusEn: 'Every team member brings unique strengths __________ __________ __________.',
      answer: 'to the table',
      explanationKo: 'bring + 강점/가치 + to the table은 조직이나 협상에 실질적 가치를 더한다는 관용구입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "결국 따지고 보면 고객 신뢰가 가장 중요합니다" — 빈칸 6단어 관용구(A_ t__ e__ o_ t__ d__)는?',
        stimulusEn: '__________ __________ __________ __________ __________ __________, customer trust matters most.',
        answer: 'At the end of the day',
        explanationKo: 'At the end of the day는 궁극적 본질을 강조하는 전환 구문입니다.'
      }
    },
    {
      id: 'd23-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '분리 가능 구동사 put it off',
      questionKo: '빈칸에 `put off`와 대명사 `it`을 올바른 어순(3단어)으로 넣어 "출시를 더 미루지 맙시다"를 완성하세요.',
      stimulusEn: "The launch is already delayed, so let's not __________ __________ __________ any longer.",
      answer: 'put it off',
      explanationKo: '분리 가능 구동사 put off에 대명사 it이 오면 반드시 가운데 넣어 put it off라고 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "태풍 때문에 야외 행사를 취소해야 했다" — cancel 대신 구어 구동사(2단어, 원형)는?',
        stimulusEn: 'We had to __________ __________ the outdoor event due to the typhoon.',
        answer: 'call off',
        explanationKo: 'cancel의 자연스러운 원어민 구동사는 call off입니다.'
      }
    },
    {
      id: 'd23-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '3단어 구동사 put up with',
      questionKo: '빈칸에 알맞은 구동사(3단어)를 넣어 "사용자들은 느린 결제 화면을 오래 참고 견뎌주지 않을 겁니다"를 완성하세요.',
      stimulusEn: "Customers won't __________ __________ __________ slow checkout screens for long.",
      answer: 'put up with',
      explanationKo: 'tolerate의 자연스러운 구어 구동사는 분리 불가 3단어 구동사 put up with입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "백엔드 팀이 지금 그 버그를 들여다보고 있습니다" — investigate 대신 구어 진행형(2단어)은?',
        stimulusEn: 'Our backend team is __________ __________ the bug right now.',
        answer: 'looking into',
        explanationKo: 'look into는 investigate를 부드럽게 대체하는 분리 불가 구동사입니다.'
      }
    },
    {
      id: 'd23-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '어조 완화 tone down vs 기준 희석 water down',
      questionKo: '빈칸에 알맞은 구동사(2단어)를 넣어 "핵심 기준을 희석시키지 않으면서 날카로운 어조만 누그러뜨립시다"의 앞부분을 완성하세요.',
      stimulusEn: "Let's __________ __________ the harsh phrasing without weakening our core standard.",
      answer: 'tone down',
      explanationKo: '표현이나 비판의 어조를 한 톤 부드럽게 낮추는 것은 tone down입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "속도를 높이려다 보안 기준을 희석시키지 마세요" — 빈칸 구동사(2단어, w____ d___)는?',
        stimulusEn: "Don't __________ __________ our security standards just to move faster.",
        answer: 'water down',
        explanationKo: '본질·기준·요구치를 약화시키고 흐리는 것은 water down입니다.'
      }
    },
    {
      id: 'd23-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '행간 읽기 read between the lines',
      questionKo: '빈칸에 알맞은 관용구(4단어)를 넣어 "행간을 읽어보면 고객사는 다운타임을 가장 우려하고 있습니다"를 완성하세요.',
      stimulusEn: 'If you __________ __________ __________ __________, the client is worried about downtime.',
      answer: 'read between the lines',
      explanationKo: '겉으로 말하지 않은 숨은 의도를 파악할 때 read between the lines를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "앞으로 두 분기에 걸쳐 구형 API를 단계적으로 폐지할 계획이다" — 빈칸 2단어(p____ o__)는?',
        stimulusEn: 'We plan to __________ __________ the legacy API over two quarters.',
        answer: 'phase out',
        explanationKo: '단계적 폐지·종료는 phase out입니다.'
      }
    },
    {
      id: 'd23-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '구동사 대명사 어순 종합 판별',
      questionKo: '다음 중 대명사 목적어(`it`)의 위치가 **모두 어법상 올바른** 문장은?',
      stimulusEn: '분리 가능(put off, tone down, rule out)과 분리 불가(look into, put up with)의 규칙을 정확히 적용하세요.',
      options: [
        "Don't put off it—please look it into right now.",
        "We shouldn't rule out it, and we must tone down it before sending.",
        "Let's not put it off—I'll look into it today, because clients won't put up with it.",
        "We had to call off it yesterday, so please bear it in mind."
      ],
      answer: "Let's not put it off—I'll look into it today, because clients won't put up with it.",
      explanationKo:
        '`put it off`(분리), `look into it`(불가), `put up with it`(3단어 불가) 세 가지가 모두 완벽한 3번이 정답입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "그 가능성을 완전히 배제하지는 않겠습니다" — rule out과 it의 올바른 어순(3단어)은?',
        stimulusEn: "I wouldn't __________ __________ __________ completely.",
        answer: 'rule it out',
        explanationKo: 'rule out은 분리 가능 구동사이므로 대명사 it을 가운데 넣어 rule it out으로 씁니다.'
      }
    },
    {
      id: 'd23-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '격식 동사 vs 구동사 의미 매핑',
      questionKo: '다음 라틴계 격식 동사와 원어민 구어 구동사의 1:1 짝짓기 중 **잘못 연결된** 것은?',
      stimulusEn: '문어 보고서 표현과 구어 회의 표현의 정확한 대응을 확인하세요.',
      options: [
        'postpone ↔ put off',
        'cancel ↔ call off',
        'investigate ↔ look into',
        'tolerate ↔ rule out'
      ],
      answer: 'tolerate ↔ rule out',
      explanationKo:
        'tolerate(참고 견디다)의 구어 구동사는 `put up with`입니다. `rule out`은 eliminate/exclude(배제하다)에 해당합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "결국 이 문제는 고객 신뢰로 귀결됩니다" — 단수 주어 뒤 빈칸 3단어(b____ d___ t_)는?',
        stimulusEn: 'Ultimately, this issue __________ __________ __________ customer trust.',
        answer: 'boils down to',
        explanationKo: 'boil down to ~ 는 복잡한 사안의 핵심이 ~로 귀결된다는 뜻입니다.'
      }
    },
    {
      id: 'd23-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'tone down vs water down 문맥 정밀 구별',
      questionKo: '편집장 또는 팀장이 리뷰 코멘트로 "이메일의 공격적인 말투는 한 톤 누그러뜨리되, 핵심 요구 기준은 희석시키지 마세요"라고 말할 때 빈칸에 알맞은 쌍은?',
      stimulusEn: 'Please __________ the aggressive wording, but do not __________ our core requirements.',
      options: [
        'water down / tone down',
        'tone down / water down',
        'call off / phase out',
        'put off / put up with'
      ],
      answer: 'tone down / water down',
      explanationKo:
        '말투·어조를 부드럽게 완화하는 것은 `tone down`, 핵심 기준·내용을 물 타듯 약화시키는 것은 `water down`입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "지나치게 딱딱한 표현은 차갑게 비칠 수 있습니다" — 빈칸 3단어(c___ a_____ a_)는?',
        stimulusEn: 'Overly rigid phrasing can __________ __________ __________ cold.',
        answer: 'come across as',
        explanationKo: 'come across as + 형용사/명사는 남에게 어떤 인상을 주는지 나타냅니다.'
      }
    },
    {
      id: 'd23-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'at the end of the day vs by EOD 오해 방지',
      questionKo: '다음 두 문장의 차이를 가장 정확하게 해석한 것은?\n(A) "Please send the slides **by EOD**."\n(B) "**At the end of the day**, reliability drives renewals."',
      stimulusEn: '유사해 보이는 "하루의 끝" 표현의 실제 비즈니스 쓰임 차이를 구분하세요.',
      options: [
        '(A)는 오늘 퇴근 전 마감 기한을 뜻하고, (B)는 "결국 따지고 보면"이라는 본질 강조 표현이다.',
        '(A)와 (B) 모두 오후 5시 정각까지 제출하라는 동일한 시간 표현이다.',
        '(A)는 결국 따지고 보면이라는 뜻이고, (B)는 퇴근 전 마감 기한을 뜻한다.',
        '(A)는 비격식 구어이고, (B)는 계약서에서만 쓰는 법률 용어이다.'
      ],
      answer: '(A)는 오늘 퇴근 전 마감 기한을 뜻하고, (B)는 "결국 따지고 보면"이라는 본질 강조 표현이다.',
      explanationKo:
        '시간 마감은 `by EOD(by the end of the day)`, 논리적 본질 강조는 `At the end of the day`로 전혀 다른 의미로 쓰입니다!',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "상황과 청중에 맞는 언어의 격식 수준/어조"를 뜻하는 명사(1단어, r_______)는?',
        stimulusEn: 'Strong speakers adjust their __________ between a memo and a huddle.',
        answer: 'register',
        explanationKo: '언어 사용역·격식 수준을 뜻하는 핵심 어휘는 register입니다.'
      }
    },
    {
      id: 'd23-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '상황별 레지스터 선택(타운홀 vs 이사회 메모)',
      questionKo: '전사 직원들과 편안하게 소통하는 타운홀 Q&A에서 "버그를 확인하는 동안 출시를 며칠 미루겠다"고 말할 때, 따뜻하면서도 프로답게 들리는 **최적의 레지스터**는?',
      stimulusEn: '구두 타운홀 미팅의 청중과 분위기(warm yet authoritative)에 맞는 문장을 고르세요.',
      options: [
        'We hereby postpone the deployment indefinitely whilst we execute an investigation.',
        "We're putting the launch off by a few days while engineering looks into a checkout glitch—at the end of the day, customer trust comes first.",
        'Yo guys, we totally called off this whole mess because nobody can tolerate bugs.',
        'We will put off it and look it into until we eliminate all problems.'
      ],
      answer: "We're putting the launch off by a few days while engineering looks into a checkout glitch—at the end of the day, customer trust comes first.",
      explanationKo:
        '1번은 지나치게 관료적, 3번은 지나치게 저속한 슬랭, 4번은 어순 오류(`put off it`, `look it into`)입니다. 자연스러운 구동사와 가치 중심으로 소통한 2번이 최적입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "유럽 파트너는 더 엄격한 규정을 따른다는 점을 명심하세요" — 빈칸 3단어(B___ i_ m___)는?',
        stimulusEn: '__________ __________ __________ that European partners follow stricter rules.',
        answer: 'Bear in mind',
        explanationKo: 'Bear in mind that ~ 은 중요한 조건을 품격 있게 환기하는 표현입니다.'
      }
    },
    {
      id: 'd23-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'tone down + water down 대조 배열',
      questionKo: '주어진 청크를 배열하여 세련된 피드백 가이드 문장을 완성하세요.',
      stimulusEn: '[ our core standard. / the harsh phrasing / Let us tone down / without watering down ]',
      answer: 'Let us tone down the harsh phrasing without watering down our core standard.',
      acceptableAlt: ["Let's tone down the harsh phrasing without watering down our core standard."],
      explanationKo: 'tone down(어조 완화) + without + 동명사 watering down(기준 희석 방지)의 명쾌한 대조 구조입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "궁극적으로 이 협상은 예측 가능한 매출로 귀결됩니다." (Ultimately, / this negotiation boils down to / predictable revenue.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Ultimately, this negotiation boils down to predictable revenue.',
        explanationKo: 'boils down to + 명사구 구조로 핵심을 압축합니다.'
      }
    },
    {
      id: 'd23-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'bring to the table + at the end of the day 배열',
      questionKo: '주어진 청크를 배열하여 "결국 중요한 것은 각 파트너가 실질적으로 무엇을 기여하는가이다"를 완성하세요.',
      stimulusEn: '[ brings to the table. / At the end of the day, / what each partner / it comes down to ]',
      answer: 'At the end of the day, it comes down to what each partner brings to the table.',
      explanationKo: 'At the end of the day, it comes down to(boils down to와 유의어) + 간접의문문(what each partner brings to the table) 순입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "행간을 읽어보면 고객은 다운타임을 우려하고 있습니다." (Reading between the lines, / the client is worried / about downtime.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Reading between the lines, the client is worried about downtime.',
        explanationKo: '분사구문 Reading between the lines로 은연중의 의도를 짚어냅니다.'
      }
    },
    {
      id: 'd23-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '격식 문장을 원어민 구어 구동사로 전환 영작',
      questionKo: '아래 딱딱한 격식 문장의 밑줄 친 동사 2개(`postpone`, `investigate`)를 자연스러운 구동사(`put off`, `look into`)로 바꾸어 완전한 문장으로 다시 쓰세요.',
      stimulusEn: '격식 문장: We will postpone the rollout while our engineers investigate the glitch.',
      answer: 'We will put off the rollout while our engineers look into the glitch.',
      acceptableAlt: ["We'll put off the rollout while our engineers look into the glitch.", 'We will put the rollout off while our engineers look into the glitch.'],
      explanationKo: 'postpone → put off, investigate → look into로 바꾸면 라이브 회의에 딱 맞는 자연스러운 구어가 됩니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 같은 원리로 `tolerate`를 `put up with`로 바꿔 전체 문장을 다시 쓰세요: Users will not tolerate slow checkout.',
        stimulusEn: '바른 문장 전체를 작성하세요.',
        answer: 'Users will not put up with slow checkout.',
        explanationKo: 'tolerate를 구어 구동사 put up with로 자연스럽게 치환했습니다.'
      }
    },
    {
      id: 'd23-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '구동사 대명사 어순 오류 교정',
      questionKo: '다음 문장의 어순 오류 2곳(`put off it`, `look it into`)을 바르게 고쳐 완전한 영어 문장으로 다시 쓰세요.',
      stimulusEn: '오류 문장: Do not put off it—please look it into before Friday.',
      answer: 'Do not put it off—please look into it before Friday.',
      acceptableAlt: ["Don't put it off—please look into it before Friday.", 'Do not put it off, please look into it before Friday.'],
      explanationKo: '분리 가능 put off → put it off, 분리 불가 look into → look into it으로 교정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: We should not rule out it before we tone down it. (대명사 it의 위치 2곳을 교정해 전체 문장을 쓰세요.)',
        stimulusEn: '바른 문장 전체를 작성하세요.',
        answer: 'We should not rule it out before we tone it down.',
        explanationKo: 'rule out과 tone down 모두 분리 가능 구동사이므로 rule it out / tone it down이 정확합니다.'
      }
    },
    {
      id: 'd23-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: 'come across as + bear in mind 한영 영작',
      questionKo: '다음 우리말을 bear in mind와 come across as를 사용해 자연스럽게 영작하세요.',
      stimulusEn: '우리말: 지나치게 직설적인 표현이 차갑게 비칠 수 있다는 점을 염두에 두세요.\n(힌트: Bear in mind that / overly blunt phrasing / can come across as cold.)',
      answer: 'Bear in mind that overly blunt phrasing can come across as cold.',
      explanationKo: 'Bear in mind that + 주어 + can come across as + 형용사 구조로 세련된 조언을 전달합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "앞으로 두 분기에 걸쳐 구형 API를 단계적으로 폐지할 계획입니다." (We plan to phase out / the legacy API / over two quarters.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'We plan to phase out the legacy API over two quarters.',
        explanationKo: 'plan to phase out + 대상 + over [기간]은 기술·정책 로드맵의 핵심 문장입니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "I just drafted an all-hands update: 'We must postpone the release because we cannot tolerate bugs while we investigate.' Does this sound too stiff? Help me shift the register for a live team meeting.",
    openingQuestionKo: '전사 미팅 공지 초안을 이렇게 써봤어요: "We must postpone the release because we cannot tolerate bugs while we investigate." 좀 딱딱하게 들리나요? 라이브 팀 미팅에 맞게 레지스터를 바꿔 주세요.',
    followUpQuestionEn:
      "Much warmer! Now, how do I tone down my feedback on missed QA checks without watering down our quality bar?",
    followUpQuestionKo: '훨씬 따뜻하네요! 그럼 이제 품질 기준 자체는 희석시키지 않으면서 QA 누락에 대한 피드백 어조만 누그러뜨리려면 어떻게 말하면 좋을까요?',
    recommendedChunks: [
      'put it off / look into it',
      'put up with',
      'come across as ~',
      'tone down ~ without watering down ~',
      'at the end of the day / boils down to'
    ],
    modelAnswerEn:
      "In a live all-hands, 'postpone' and 'tolerate' can come across as overly distant. Try saying: 'We're putting the release off for a few days while engineering looks into the bug—at the end of the day, our customers won't put up with broken checkout.' That way, you tone down the harshness without watering down your quality bar, because it boils down to customer trust."
  }
};
