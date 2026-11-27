import type { ConnectedSpeechRule } from '../types/v5.ts';

export const CONNECTED_SPEECH_RULES: ConnectedSpeechRule[] = [
  /* =========================================================================
   * 1. 연음 (Linking) — 4 Rules (cs-01 ~ cs-04)
   * ========================================================================= */
  {
    id: 'cs-01',
    categoryKo: '연음 (Linking)',
    titleKo: '자음 + 모음 기본 연음 (check it out)',
    writtenEn: 'check it out',
    nativeSoundEn: 'che-ki-dout',
    koreanPronunciationGuide: '체크 잇 아웃 ❌ → 체키다웃 ⭕',
    ruleTipKo:
      '앞 단어 끝의 자음(k, t)을 끊지 말고 뒤 단어 첫 모음(i, o) 앞으로 밀어 붙여 한 단어처럼 말하세요. 특히 한국인이 습관적으로 붙이는 "체크"의 "으" 모음을 완전히 빼야 원어민 리듬이 살아납니다.',
    exampleSentenceEn: 'Hey, check it out — they just opened a new bakery right across the street.',
    exampleSentenceKo: '야, 이것 좀 봐 — 길 건너 바로 앞에 새 빵집이 방금 문을 열었어.',
  },
  {
    id: 'cs-02',
    categoryKo: '연음 (Linking)',
    titleKo: '구동사 3단어 연속 연음 (pick it up)',
    writtenEn: 'pick it up',
    nativeSoundEn: 'pi-ki-dup',
    koreanPronunciationGuide: '픽 잇 업 ❌ → 피키덥 ⭕',
    ruleTipKo:
      '동사 + it + 부사 구조는 영어 회화에서 가장 흔한 연음 덩어리입니다. pick의 k가 it으로 넘어가 "키", it의 t가 up으로 넘어가 부드러운 "덥"이 되며 세 단어가 하나의 리듬(강-약-강)으로 굴러갑니다.',
    exampleSentenceEn: 'You dropped your metro card on the floor — let me pick it up for you.',
    exampleSentenceKo: '바닥에 교통카드 떨어뜨렸어요 — 제가 주워 드릴게요.',
  },
  {
    id: 'cs-03',
    categoryKo: '연음 (Linking)',
    titleKo: '관사 an + 모음 시작 명사 연음 (an apple)',
    writtenEn: 'an apple',
    nativeSoundEn: 'a-napple',
    koreanPronunciationGuide: '언 애플 ❌ → 어내플 ⭕',
    ruleTipKo:
      '부정관사 an을 또박또박 "언"이라고 끊으면 바로 멈춤이 생깁니다. a를 아주 약한 "어"로 스치듯 지나가고 n을 apple의 첫소리처럼 붙여 "어내플"로 말하면 원어민 귀에 훨씬 자연스럽게 들립니다.',
    exampleSentenceEn: 'I grabbed an apple and a cup of black coffee before rushing to the station.',
    exampleSentenceKo: '역으로 서둘러 가기 전에 사과 한 개와 블랙커피 한 잔을 집어 들었어.',
  },
  {
    id: 'cs-04',
    categoryKo: '연음 (Linking)',
    titleKo: '비음 n + 모음 + 전치사 연음 (turn it off)',
    writtenEn: 'turn it off',
    nativeSoundEn: 'tur-ni-doff',
    koreanPronunciationGuide: '턴 잇 오프 ❌ → 터니럾 ⭕',
    ruleTipKo:
      'turn의 끝소리 n이 it의 i와 만나 "니"로 자연스럽게 이어지고, it의 t는 두 모음 사이에서 가벼운 ㄹ/d 소리(Flap-T)로 바뀌며 off와 합쳐집니다. turn / off에 강세를 두고 가운데 it은 아주 작고 빠르게 통과하세요.',
    exampleSentenceEn: 'If nobody is watching the TV anymore, could you please turn it off?',
    exampleSentenceKo: '아무도 더 이상 TV 안 보고 있으면 좀 꺼 줄 수 있어?',
  },

  /* =========================================================================
   * 2. T 약화 (Flap-T) — 3 Rules (cs-05 ~ cs-07)
   * ========================================================================= */
  {
    id: 'cs-05',
    categoryKo: 'T 약화 (Flap-T)',
    titleKo: '단어 속 모음 사이 T의 탄설음화 (water / better)',
    writtenEn: 'water / better',
    nativeSoundEn: 'wa-der / be-der',
    koreanPronunciationGuide: '워터 / 베터 ❌ → 워러 / 베러 ⭕',
    ruleTipKo:
      '미국식 영어에서 강세 모음과 약세 모음 사이에 끼인 t(또는 tt)는 강한 "트" 대신 혀끝이 윗잇몸을 찰나에 톡 스치는 가벼운 한국어 "ㄹ"에 가까운 소리로 약화됩니다. 입술에 힘을 빼고 혀끝만 살짝 튕기세요.',
    exampleSentenceEn: 'Drinking plenty of cold water always makes me feel much better after a long run.',
    exampleSentenceKo: '오래 달린 뒤에 시원한 물을 충분히 마시면 언제나 기분이 훨씬 나아져.',
  },
  {
    id: 'cs-06',
    categoryKo: 'T 약화 (Flap-T)',
    titleKo: '단어 경계 모음 사이 T 약화 (what a great idea)',
    writtenEn: 'what a great idea',
    nativeSoundEn: 'wha-da grea-di-dea',
    koreanPronunciationGuide: '왓 어 그레이트 아이디어 ❌ → 와러 그레이라이디어 ⭕',
    ruleTipKo:
      'Flap-T는 한 단어 안뿐 아니라 단어와 단어 사이에서도 똑같이 일어납니다. what + a가 "와러"로, great + idea가 "그레이라이디어"로 부드럽게 이어지면서 감탄문 전체가 물 흐르듯 연결됩니다.',
    exampleSentenceEn: 'What a great idea to invite everyone over for a homemade dinner this Friday!',
    exampleSentenceKo: '이번 주 금요일에 모두를 집으로 초대해서 홈메이드 저녁을 먹자니 정말 멋진 생각이야!',
  },
  {
    id: 'cs-07',
    categoryKo: 'T 약화 (Flap-T)',
    titleKo: '연속 Flap-T와 of 약화 결합 (get out of here)',
    writtenEn: 'get out of here',
    nativeSoundEn: 'ge-dou-da here',
    koreanPronunciationGuide: '겟 아웃 오브 히어 ❌ → 게라우러 히어 ⭕',
    ruleTipKo:
      'get의 t가 out의 모음 앞에서, out의 t가 of의 모음 앞에서 연달아 약화되고, 전치사 of의 v까지 탈락해 "어"로 줄어듭니다. "설마, 말도 안 돼!" 같은 놀람의 추임새로 영화·드라마에 매우 자주 등장합니다.',
    exampleSentenceEn: 'You won front-row tickets to the concert? Get out of here — no way!',
    exampleSentenceKo: '콘서트 맨 앞줄 티켓에 당첨됐다고? 에이 설마 — 말도 안 돼!',
  },

  /* =========================================================================
   * 3. 축약·약화 (Reduction) — 4 Rules (cs-08 ~ cs-11)
   * ========================================================================= */
  {
    id: 'cs-08',
    categoryKo: '축약·약화 (Reduction)',
    titleKo: '미래 계획 be going to 축약 (going to -> gonna)',
    writtenEn: 'going to -> gonna',
    nativeSoundEn: 'guh-nuh',
    koreanPronunciationGuide: '고잉 투 ❌ → 거너 ⭕',
    ruleTipKo:
      '뒤에 동사원형이 올 때 going to는 일상 회화에서 거의 100% gonna로 축약됩니다. 단, "I am going to school"처럼 뒤에 장소 명사가 올 때는 gonna로 줄일 수 없으니 주의하세요.',
    exampleSentenceEn: "It's going to rain heavily tonight, so don't forget to take an umbrella.",
    exampleSentenceKo: '오늘 밤에 비가 많이 올 예정이니까 우산 챙기는 거 잊지 마.',
  },
  {
    id: 'cs-09',
    categoryKo: '축약·약화 (Reduction)',
    titleKo: '희망·의도 want to 축약 (want to -> wanna)',
    writtenEn: 'want to -> wanna',
    nativeSoundEn: 'wah-nuh',
    koreanPronunciationGuide: '원트 투 ❌ → 워너 ⭕',
    ruleTipKo:
      'want의 t가 n 뒤에서 약해지고 to와 합쳐지며 "워너"로 들립니다. 단, 3인칭 단수 wants to는 s 발음이 살아 있으므로 wanna가 아니라 "완스터(wants-tuh)"로 말해야 합니다.',
    exampleSentenceEn: 'Do you want to grab a quick bite before the movie starts at seven?',
    exampleSentenceKo: '7시에 영화 시작하기 전에 간단히 뭐 좀 먹을래?',
  },
  {
    id: 'cs-10',
    categoryKo: '축약·약화 (Reduction)',
    titleKo: '완곡 표현 of 약화 축약 (kind of / sort of)',
    writtenEn: 'kind of / sort of',
    nativeSoundEn: 'kyn-duh / sor-duh',
    koreanPronunciationGuide: '카인드 오브 / 소트 오브 ❌ → 카이너 / 소러 ⭕',
    ruleTipKo:
      '말을 부드럽게 누그러뜨리는 "좀, 약간" 표현에서 전치사 of는 거의 항상 v가 빠진 짧은 "어"로 약화됩니다. kind of는 d까지 흐려져 "카이너", sort of는 t가 Flap-T로 바뀌어 "소러"처럼 들립니다.',
    exampleSentenceEn: "I'm kind of tired today, and this new software feels sort of confusing at first.",
    exampleSentenceKo: '나 오늘 좀 피곤하고, 이 새 소프트웨어는 처음에 약간 헷갈리는 느낌이야.',
  },
  {
    id: 'cs-11',
    categoryKo: '축약·약화 (Reduction)',
    titleKo: '과거 추측·후회 조동사 + have 약화 (could have / should have)',
    writtenEn: 'could have / should have',
    nativeSoundEn: 'koo-duh / shoo-duh',
    koreanPronunciationGuide: '쿠드 해브 / 슈드 해브 ❌ → 쿠러 / 슈러 ⭕',
    ruleTipKo:
      '조동사 뒤의 have는 의미보다 문법 기능을 맡는 기능어이므로 h와 v가 거의 사라지고 짧은 "어"로 붙습니다. 원어민이 "I shoulda told you"처럼 말할 때 have를 놓치지 않고 과거 후회로 즉시 알아듣는 핵심 규칙입니다.',
    exampleSentenceEn: 'We should have left ten minutes earlier — we could have caught the express train.',
    exampleSentenceKo: '우리가 10분만 일찍 출발했어야 했는데 — 그랬으면 급행열차를 탈 수 있었을 텐데.',
  },

  /* =========================================================================
   * 4. 탈락 (Elision) — 3 Rules (cs-12 ~ cs-14)
   * ========================================================================= */
  {
    id: 'cs-12',
    categoryKo: '탈락 (Elision)',
    titleKo: '자음 사이에 낀 T/D 탈락 (next day / last time)',
    writtenEn: 'next day / last time',
    nativeSoundEn: 'nex day / las time',
    koreanPronunciationGuide: '넥스트 데이 / 라스트 타임 ❌ → 넥스데이 / 래스타임 ⭕',
    ruleTipKo:
      '영어 원어민은 자음이 세 개 이상 겹치면 발음하기 까다로운 가운데 t나 d를 자연스럽게 생략합니다. next의 t나 last의 t를 억지로 살려 "넥스트"라고 끊지 말고 바로 다음 자음으로 넘어가세요.',
    exampleSentenceEn: 'The last time we hiked that trail, my legs were still sore the next day.',
    exampleSentenceKo: '지난번에 우리가 그 등산로를 올랐을 때, 다음 날까지 내 다리가 여전히 뻐근했어.',
  },
  {
    id: 'cs-13',
    categoryKo: '탈락 (Elision)',
    titleKo: '목적격 대명사 H 탈락 + 연음 (tell him / ask her)',
    writtenEn: 'tell him / ask her',
    nativeSoundEn: 'tel-lim / as-ker',
    koreanPronunciationGuide: '텔 힘 / 애스크 허 ❌ → 텔림 / 애스커 ⭕',
    ruleTipKo:
      '문장 중간에 강세 없이 쓰이는 him, her, his, them의 첫소리 h는 자주 탈락하고 앞 단어 끝자음과 즉시 연음됩니다. 원어민이 "텔림"이나 "애스커"라고 말할 때 낯선 단어가 아니라 tell him / ask her임을 귀로 연결하세요.',
    exampleSentenceEn: "If you see Daniel at lunch, tell him I called and ask her whether she's joining us.",
    exampleSentenceKo: '점심때 다니엘 보면 내가 전화했다고 전해 주고, 그녀에게는 우리와 함께할지 물어봐 줘.',
  },
  {
    id: 'cs-14',
    categoryKo: '탈락 (Elision)',
    titleKo: '자음 앞 파열음 미개방 정지 (good morning / sit down)',
    writtenEn: 'good morning / sit down',
    nativeSoundEn: 'goo(d) morning / si(t) down',
    koreanPronunciationGuide: '굿 모닝 / 싯 다운 ❌ → 귿모닝 / 싿다운 ⭕',
    ruleTipKo:
      'd, t, p, b, k, g 같은 파열음 바로 뒤에 다른 자음이 오면 바람을 터뜨리지 않고 혀나 입술 모양만 잡았다가 곧장 다음 자음으로 넘어갑니다. 한국어 받침처럼 숨을 잠깐 막아 주되 절대 "드/트" 모음을 붙이지 마세요.',
    exampleSentenceEn: 'Good morning, everyone — please sit down and open your notebooks to page twelve.',
    exampleSentenceKo: '여러분 좋은 아침입니다 — 자리에 앉아서 공책 12쪽을 펴 주세요.',
  },

  /* =========================================================================
   * 5. 강세 이동 (Stress) — 2 Rules (cs-15 ~ cs-16)
   * ========================================================================= */
  {
    id: 'cs-15',
    categoryKo: '강세 이동 (Stress)',
    titleKo: '2음절 명사 앞강세 vs 동사 뒤강세 (PREsent vs preSENT)',
    writtenEn: 'PREsent (명사) vs preSENT (동사)',
    nativeSoundEn: 'PRE-zent vs pri-ZENT',
    koreanPronunciationGuide: '프레젠트 통일 ❌ → 프레즌트(선물·현재) vs 프리젠트(발표하다) ⭕',
    ruleTipKo:
      '철자가 같은 2음절 영단어는 앞 음절을 세고 길게 읽으면 명사·형용사, 뒤 음절을 세고 길게 읽으면 동사가 됩니다. 강세가 빠진 음절의 모음은 약한 "어/이(슈와)"로 줄어들어 뜻이 즉각 구별됩니다.',
    exampleSentenceEn: 'She wrapped a thoughtful present to present to her mentor at the farewell dinner.',
    exampleSentenceKo: '그녀는 송별 만찬에서 멘토에게 전달할 정성스러운 선물을 포장했다.',
  },
  {
    id: 'cs-16',
    categoryKo: '강세 이동 (Stress)',
    titleKo: '강세 이동에 따른 모음 변화와 품사 구분 (REcord vs reCORD)',
    writtenEn: 'REcord (명사) vs reCORD (동사)',
    nativeSoundEn: 'RE-kord vs ri-KORD',
    koreanPronunciationGuide: '레코드 통일 ❌ → 레커드(기록·음반) vs 리코드(녹음·기록하다) ⭕',
    ruleTipKo:
      '명사 REcord는 첫 음절을 또렷한 "레"로 치고 뒤를 약한 "커드"로 흘리지만, 동사 reCORD는 앞을 약한 "리"로 스치고 뒤 음절 "코드"에 힘과 길이를 싣습니다. 같은 규칙이 PROject/proJECT, OBject/obJECT에도 그대로 적용됩니다.',
    exampleSentenceEn: 'The studio will record a live acoustic session to break its own streaming record.',
    exampleSentenceKo: '그 스튜디오는 자체 스트리밍 기록을 깨기 위해 라이브 어쿠스틱 세션을 녹음할 예정이다.',
  },
];
