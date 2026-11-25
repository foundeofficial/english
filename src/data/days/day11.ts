import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day11Module: DayLessonModule = {
  dayNumber: 11,
  weekNumber: 2,
  cefrLevel: 'b1',
  isWeeklyReview: false,
  dayBadge: 'DAY 11 · 주말·취미·감정 스몰토크',
  categoryLabel: '관계 형성·원어민 리액션 B1',
  title: '요즘 러닝에 푹 빠졌어, 날씨가 점점 좋아지네',
  subtitle: '단답형 "Yes/No"로 대화가 끊기는 습관을 깨고 취미(be into)·근황(catch up)·상태 변화(it’s getting ~)로 10분 이상 자연스럽게 대화를 이어가는 법',
  heroImage: 'assets/scene_restaurant_chat.jpg',
  secondaryImage: 'assets/scene_riverside_walk.jpg',
  estimatedSprintMin: 8,
  estimatedLectureMin: 40,
  keyExpression: "be into ~ / catch up with ~ / it's getting ~",
  keySentenceByTier: {
    a1: 'I am into running lately. It is getting warm outside.',
    a2: "I've been really into running lately, and it's getting warmer every weekend.",
    b1: "It's been a while! Let's catch up over dinner—I've been super into trail running lately now that it's getting cooler.",
    b2: "Since I've been feeling a bit burned out at work, I got into evening running to clear my head, and it's getting much easier every week.",
    c1: "It's been ages since we last caught up—lately I've been really into riverside trail running, especially now that the evenings are getting crisp.",
    c2: "Honestly, catching up with close friends and getting into distance running have been my lifeline lately whenever work starts getting overwhelming."
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[11],
  readingPassage: {
    titleEn: 'The Art of Keeping Small Talk Alive Beyond "How Are You?"',
    titleKo: '"How are you?" 다음 문장이 막히지 않게 스몰토크를 이어가는 기술',
    genreBadge: '커뮤니케이션 인사이트 · Lv.3 중하급',
    estimatedMin: 6,
    paragraphsEn: [
      'For many Korean learners, small talk feels harder than giving a prepared presentation. When a coworker asks, "What have you been up to lately?" a short answer like "Nothing much, just working" accidentally shuts the conversation down in three seconds. Native speakers treat small talk not as a quiz, but as a friendly game of ping-pong.',
      'One effortless way to keep the rally going is to share a small shift in your routine or mood. Expressions like "I have been really into indoor climbing lately" or "I am getting a bit burned out, so I walk by the river to clear my head" instantly give the other person something warm and specific to react to. Notice how "be getting + adjective" captures real-time changes—weather getting warmer, days getting longer, or a hobby getting more addictive.',
      'Finally, add a quick reaction bridge before tossing the ball back. Phrases like "Good call!", "No wonder you look energized!", or "Speaking of which, are you free to catch up this weekend?" show genuine curiosity. Once you master that three-beat rhythm—react, share one detail, and ask back—small talk stops feeling awkward and starts building real friendships.'
    ],
    paragraphsSlash: [
      'For many Korean learners, / small talk feels harder / than giving a prepared presentation. / When a coworker asks, / "What have you been up to lately?" / a short answer like "Nothing much, just working" / accidentally shuts the conversation down / in three seconds. / Native speakers treat small talk / not as a quiz, / but as a friendly game of ping-pong.',
      'One effortless way to keep the rally going / is to share a small shift / in your routine or mood. / Expressions like "I have been really into indoor climbing lately" / or "I am getting a bit burned out, / so I walk by the river to clear my head" / instantly give the other person / something warm and specific to react to. / Notice how "be getting + adjective" captures real-time changes— / weather getting warmer, days getting longer, / or a hobby getting more addictive.',
      'Finally, add a quick reaction bridge / before tossing the ball back. / Phrases like "Good call!", "No wonder you look energized!", / or "Speaking of which, / are you free to catch up this weekend?" / show genuine curiosity. / Once you master that three-beat rhythm— / react, share one detail, and ask back— / small talk stops feeling awkward / and starts building real friendships.'
    ],
    paragraphsKo: [
      '많은 한국인 학습자에게 스몰토크는 미리 준비한 프레젠테이션보다 더 어렵게 느껴집니다. 동료가 "요즘 어떻게 지내?"라고 물었을 때 "별일 없어, 그냥 일만 해"처럼 짧게 답하면 본의 아니게 3초 만에 대화가 끊어지고 맙니다. 원어민은 스몰토크를 시험이 아니라 친근한 탁구 랠리처럼 여깁니다.',
      '대화의 랠리를 부드럽게 이어 가는 가장 손쉬운 방법은 내 일상이나 기분의 작은 변화를 하나 공유하는 것입니다. "요즘 실내 클라이밍에 푹 빠졌어"라거나 "요즘 살짝 번아웃이 와서 머리 식히려고 강변을 걸어" 같은 말은 상대가 반응할 수 있는 따뜻하고 구체적인 거리를 즉시 던져 줍니다. 특히 "be getting + 형용사"가 날씨가 점점 따뜻해지고, 해가 길어지고, 취미에 더 빠져드는 실시간 변화를 얼마나 생생하게 담아내는지 주목해 보세요.',
      '마지막으로 공을 다시 넘기기 전에 짧은 맞장구 다리를 하나 놓아 주세요. "좋은 선택이야!(Good call!)", "어쩐지 활기차 보이더라!(No wonder~)", "그 얘기가 나와서 말인데 이번 주말에 오랜만에 만날래?(Speaking of which~)" 같은 표현은 진심 어린 관심을 보여 줍니다. [리액션 → 내 이야기 한 줄 → 되묻기] 3박자 리듬을 익히면 스몰토크는 어색한 시간이 아니라 진짜 우정을 쌓는 시간이 됩니다.'
    ],
    keyExpressions: ['be really into ~', 'be getting + 형용사', 'feel burned out', 'clear my head', 'Good call!', 'Speaking of which'],
    comprehensionQuiz: [
      {
        id: 'd11-rq01',
        questionKo: '본문에서 원어민이 스몰토크를 바라보는 비유와 대화를 이어 가는 3박자 리듬으로 올바른 것은?',
        options: [
          '정답 맞히기 퀴즈 — 질문, 암기, 평가',
          '친근한 탁구 게임 — 리액션, 내 이야기 한 줄 공유, 되묻기',
          '공식 발표 대회 — 서론, 본론, 결론 요약',
          '일방적 인터뷰 — 단답형 Yes/No로 빠르게 끝내기'
        ],
        answer: '친근한 탁구 게임 — 리액션, 내 이야기 한 줄 공유, 되묻기',
        explanationKo: '첫 문단 "a friendly game of ping-pong"과 셋째 문단 "react, share one detail, and ask back"이 정답입니다.'
      },
      {
        id: 'd11-rq02',
        questionKo: '글에 따르면 `be getting + 형용사/비교급` 패턴이 스몰토크에서 빛을 발하는 이유는 무엇인가요?',
        options: [
          '과거의 역사적 사건을 격식 있게 보고할 때만 쓰이기 때문',
          '날씨·기분·취미 등 실시간으로 변해 가는 상태를 생생하게 담아내기 때문',
          '복잡한 비즈니스 계약 조건을 나열할 때 필수이기 때문',
          '상대방의 부탁을 완곡하게 거절하는 전용 패턴이기 때문'
        ],
        answer: '날씨·기분·취미 등 실시간으로 변해 가는 상태를 생생하게 담아내기 때문',
        explanationKo: '둘째 문단 "Notice how \'be getting + adjective\' captures real-time changes"가 근거입니다.'
      },
      {
        id: 'd11-rq03',
        questionKo: '상대의 앞선 말과 연결해 자연스럽게 새 화제를 꺼낼 때 본문에서 제시한 연결 표현은?',
        options: ['Nothing much', 'Speaking of which', 'Within walking distance', 'Out of stock'],
        answer: 'Speaking of which',
        explanationKo: '셋째 문단 "Speaking of which, are you free to catch up this weekend?"에서 화제 전환 표현을 확인할 수 있습니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd11-v01',
      word: 'be into ~',
      phonetic: '/biː ˈɪntuː/',
      pos: '구동사 구문',
      cefr: 'b1',
      meaningKo: '~에 푹 빠져 있다, ~을 아주 좋아하다',
      meaningEn: 'be very interested in or enthusiastic about a hobby or activity',
      nuanceTipKo: '교과서식 "My hobby is ~" 대신 원어민이 10배 더 많이 쓰는 자연스러운 취미 표현입니다! I\'m really into ~.',
      exampleEn: "I've been really into film photography lately.",
      exampleKo: '요즘 필름 사진 찍기에 푹 빠져 있어요.'
    },
    {
      id: 'd11-v02',
      word: 'catch up with ~',
      phonetic: '/kætʃ ʌp wɪð/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(오랜만에) ~와 만나 근황을 나누다, 밀린 수다를 떨다',
      meaningEn: 'talk with someone you have not seen recently to share news',
      nuanceTipKo: '사람과 근황을 나눌 땐 catch up with [사람], 밀린 잠·업무를 보충할 땐 catch up on [일/잠]으로 전치사를 구분하세요!',
      exampleEn: "It was so good to catch up with my college roommate over coffee.",
      exampleKo: '대학 룸메이트랑 커피 마시면서 오랜만에 근황 나누니 너무 좋았어.'
    },
    {
      id: 'd11-v03',
      word: "it's getting ~",
      phonetic: '/ɪts ˈɡetɪŋ/',
      pos: '핵심 패턴',
      cefr: 'a2',
      meaningKo: '점점 ~해지고 있다 (날씨·시간·상황 변화)',
      meaningEn: 'used to describe a gradual change in weather, time, or mood',
      nuanceTipKo: 'It\'s getting dark(어두워지고 있어), It\'s getting warmer(점점 따뜻해지네), I\'m getting hungry(배고파지네) 등 하루 10번 쓰는 만능 패턴!',
      exampleEn: "It's getting really humid—let's step inside for an iced coffee.",
      exampleKo: '점점 엄청 습해지네—안에 들어가서 아이스 커피 한잔하자.'
    },
    {
      id: 'd11-v04',
      word: 'get into ~',
      phonetic: '/ɡet ˈɪntuː/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '~에 흥미를 붙이기 시작하다, 입문하다',
      meaningEn: 'start to develop an interest or passion for something',
      nuanceTipKo: 'be into가 "이미 빠진 상태"라면, get into는 "빠지게 된 계기·시작"을 묻고 답할 때 씁니다 (How did you get into it?).',
      exampleEn: 'How did you first get into trail running?',
      exampleKo: '트레일 러닝에는 처음 어떻게 입문하게 됐어?'
    },
    {
      id: 'd11-v05',
      word: 'lately',
      phonetic: '/ˈleɪtli/',
      pos: '부사',
      cefr: 'b1',
      meaningKo: '요즘, 최근에',
      meaningEn: 'in the recent past up to the present moment',
      nuanceTipKo: '주의! late(늦은)의 부사가 아니라 "최근에"라는 뜻이며, 과거부터 지금까지 이어지는 현재완료(have been ~ing)와 찰떡궁합입니다.',
      exampleEn: 'What have you been watching on Netflix lately?',
      exampleKo: '요즘 넷플릭스에서 뭐 보고 있어?'
    },
    {
      id: 'd11-v06',
      word: 'hang out',
      phonetic: '/hæŋ aʊt/',
      pos: '구동사',
      cefr: 'a2',
      meaningKo: '(친구와 부담 없이) 어울려 놀다, 시간을 보내다',
      meaningEn: 'spend relaxed social time together with friends',
      nuanceTipKo: '어른들이 친구와 만날 때 play with my friend라고 하면 아이처럼 들립니다! 반드시 hang out with를 쓰세요.',
      exampleEn: 'We should hang out at the riverside park this Saturday afternoon.',
      exampleKo: '이번 토요일 오후에 강변 공원에서 편하게 만나서 놀자.'
    },
    {
      id: 'd11-v07',
      word: 'binge-watch',
      phonetic: '/ˈbɪndʒ wɑːtʃ/',
      pos: '동사',
      cefr: 'b1',
      meaningKo: '(드라마·시리즈를) 몰아보다, 정주행하다',
      meaningEn: 'watch several episodes of a TV show back-to-back in one sitting',
      nuanceTipKo: '주말 근황 스몰토크 단골 어휘! "I binge-watched a whole season over the weekend."',
      exampleEn: 'I stayed indoors on Sunday and binge-watched a new mystery series.',
      exampleKo: '일요일엔 집에만 있으면서 새 미스터리 시리즈를 정주행했어.'
    },
    {
      id: 'd11-v08',
      word: 'feel burned out',
      phonetic: '/fiːl bɜːrnd aʊt/',
      pos: '동사구',
      cefr: 'b1',
      meaningKo: '번아웃이 오다, 심신이 완전히 지치다',
      meaningEn: 'feel physically and emotionally exhausted from prolonged stress or work',
      nuanceTipKo: '단순히 잠이 부족한 tired보다, 업무·일상으로 에너지가 바닥난 현대 직장인의 감정을 정확히 표현합니다.',
      exampleEn: "I've been feeling a bit burned out after that three-week product launch.",
      exampleKo: '3주간 제품 출시 달리고 나니 요즘 살짝 번아웃이 온 것 같아.'
    },
    {
      id: 'd11-v09',
      word: 'clear my head',
      phonetic: '/klɪr maɪ hed/',
      pos: '관용구',
      cefr: 'b1',
      meaningKo: '머리를 식히다, 복잡한 생각을 정리하다',
      meaningEn: 'step away to relax and stop feeling stressed or confused',
      nuanceTipKo: '산책이나 러닝, 드라이브를 하는 이유를 말할 때 "to clear my head"를 붙이면 영어가 단숨에 깊어집니다.',
      exampleEn: 'Going for a twenty-minute jog after dinner really helps me clear my head.',
      exampleKo: '저녁 먹고 20분 조깅하면 머리 식히는 데 정말 큰 도움이 돼.'
    },
    {
      id: 'd11-v10',
      word: 'good call',
      phonetic: '/ɡʊd kɔːl/',
      pos: '감탄/리액션',
      cefr: 'b1',
      meaningKo: '좋은 선택이야!, 센스 있네!',
      meaningEn: 'a casual way to praise a smart decision or suggestion',
      nuanceTipKo: '상대가 맛집을 고르거나 좋은 아이디어를 냈을 때 "Good choice"보다 훨씬 경쾌하고 친근한 원어민 맞장구입니다.',
      exampleEn: 'Good call booking a patio table—the evening breeze feels amazing.',
      exampleKo: '야외 테이블 예약한 거 진짜 센스 있다—저녁 바람이 너무 좋네.'
    },
    {
      id: 'd11-v11',
      word: 'speaking of which',
      phonetic: '/ˈspiːkɪŋ əv wɪtʃ/',
      pos: '연결 구문',
      cefr: 'b1',
      meaningKo: '그 얘기가 나와서 말인데 (자연스러운 화제 전환)',
      meaningEn: 'used to introduce a related topic inspired by what was just mentioned',
      nuanceTipKo: '대화가 끊길 타이밍에 방금 나온 단어와 관련된 새 화제를 자연스럽게 연결하는 스몰토크 필살기입니다.',
      exampleEn: 'Speaking of which, have you tried that new bakery by the river?',
      exampleKo: '그 얘기가 나와서 말인데, 강변에 새로 생긴 그 빵집 가봤어?'
    },
    {
      id: 'd11-v12',
      word: 'no wonder',
      phonetic: '/noʊ ˈwʌndər/',
      pos: '관용구',
      cefr: 'b1',
      meaningKo: '어쩐지 ~하더라, 당연하지',
      meaningEn: 'it is not surprising at all given the reason just mentioned',
      nuanceTipKo: '상대의 이유를 듣고 깊이 공감하며 "No wonder you look so refreshed!(어쩐지 표정이 되게 밝아 보이더라!)"로 받아쳐 보세요.',
      exampleEn: 'You ran ten kilometers this morning? No wonder you are starving!',
      exampleKo: '오늘 아침에 10km를 뛰었다고? 어쩐지 배고파하더라!'
    },
    {
      id: 'd11-v13',
      word: 'count me in',
      phonetic: '/kaʊnt miː ɪn/',
      pos: '관용구',
      cefr: 'b1',
      meaningKo: '나도 끼워줘!, 나도 무조건 갈래!',
      meaningEn: 'include me in the plan; I definitely want to join',
      nuanceTipKo: '약속 제안에 신나게 수락할 때 "I will join too" 대신 "Count me in!"을 쓰면 에너지가 살아납니다.',
      exampleEn: 'A Saturday morning riverside run followed by brunch? Count me in!',
      exampleKo: '토요일 아침 강변 러닝하고 브런치 먹는다고? 나도 무조건 끼워줘!'
    },
    {
      id: 'd11-v14',
      word: 'look forward to -ing',
      phonetic: '/lʊk ˈfɔːrwərd tuː/',
      pos: '구동사 구문',
      cefr: 'b1',
      meaningKo: '~하기를 손꼽아 기대하다',
      meaningEn: 'feel excited and happy about something that is going to happen',
      nuanceTipKo: '한국인 어법 함정 1위! 여기서 to는 전치사이므로 뒤에 동사원형이 아니라 반드시 동명사(-ing)나 명사가 옵니다.',
      exampleEn: "I'm really looking forward to catching up with everyone this weekend.",
      exampleKo: '이번 주말에 다 같이 만나서 근황 나눌 생각에 정말 기대돼.'
    },
    {
      id: 'd11-v15',
      word: "it's been a while",
      phonetic: '/ɪts bɪn ə waɪl/',
      pos: '실전 구문',
      cefr: 'a2',
      meaningKo: '정말 오랜만이야 (꽤 시간이 흘렀네)',
      meaningEn: 'a natural way to say a long time has passed since you last met',
      nuanceTipKo: '교과서식 "Long time no see"보다 성인 동료·친구 사이에서는 "It\'s been a while!"이 훨씬 자연스럽습니다.',
      exampleEn: "Hey Alex! It's been a while—how have you been holding up?",
      exampleKo: '어 알렉스! 진짜 오랜만이야—그동안 어떻게 지냈어?'
    }
  ],
  dialogue: [
    {
      id: 'd11-t01',
      speaker: 'Alex',
      roleLabel: '타 부서 동료',
      voicePitch: 0.93,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'zoom-in',
      english: "Hey Sora! It's been a while since we caught up outside the office. How have you been lately?",
      slashBroken: "Hey Sora! / It's been a while / since we caught up outside the office. / How have you been lately?",
      korean: '어 소라! 회사 밖에서 이렇게 만나 근황 나누는 거 진짜 오랜만이다. 요즘 어떻게 지냈어?',
      keyHighlight: "It's been a while",
      noteKo: "It's been a while since + 과거동사(we caught up)는 오랜만에 만난 지인에게 건네는 최고의 첫인사입니다."
    },
    {
      id: 'd11-t02',
      speaker: 'Sora',
      roleLabel: '프로덕트 디자이너 (한국인)',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'pan-right',
      english: "Honestly, I was feeling pretty burned out last month, so I started jogging by the river to clear my head. Now I'm totally into running!",
      slashBroken: 'Honestly, / I was feeling pretty burned out last month, / so I started jogging by the river / to clear my head. / Now I am totally into running!',
      korean: '솔직히 지난달에 번아웃이 꽤 세게 와서 머리 식히려고 강변 조깅을 시작했거든. 그런데 이제는 러닝에 완전히 빠졌어!',
      keyHighlight: 'totally into running',
      noteKo: '"My hobby is running" 대신 계기(burned out → clear my head)와 현재 상태(totally into running)를 스토리로 풀어냈습니다.'
    },
    {
      id: 'd11-t03',
      speaker: 'Alex',
      roleLabel: '타 부서 동료',
      voicePitch: 0.93,
      sceneImage: 'assets/scene_restaurant_chat.jpg',
      cameraMotion: 'zoom-in',
      english: 'Good call! No wonder you look so energized today. How often do you usually go out?',
      slashBroken: 'Good call! / No wonder you look so energized today. / How often do you usually go out?',
      korean: '좋은 선택이네! 어쩐지 오늘따라 엄청 활기차 보이더라. 보통 일주일에 몇 번 나가?',
      keyHighlight: 'No wonder',
      noteKo: 'Good call!(칭찬) + No wonder ~!(공감) + How often ~?(열린 질문) — 원어민 스몰토크 3박자의 교과서입니다.'
    },
    {
      id: 'd11-t04',
      speaker: 'Sora',
      roleLabel: '프로덕트 디자이너 (한국인)',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_riverside_walk.jpg',
      cameraMotion: 'pan-left',
      english: "About three times a week, especially now that the weather is getting cooler in the evenings. What about you—what have you been into lately?",
      slashBroken: 'About three times a week, / especially now that the weather is getting cooler / in the evenings. / What about you— / what have you been into lately?',
      korean: '일주일에 세 번 정도, 특히 요즘 저녁 날씨가 점점 선선해져서 더 좋아. 너는 어때—요즘 뭐에 빠져 있어?',
      keyHighlight: 'is getting cooler',
      noteKo: 'now that ~(~하니까 이제) + is getting cooler(점점 선선해지고 있다) 뒤에 상대에게 공을 넘겨(What about you?) 랠리를 이어 갑니다.'
    },
    {
      id: 'd11-t05',
      speaker: 'Alex',
      roleLabel: '타 부서 동료',
      voicePitch: 0.93,
      sceneImage: 'assets/scene_riverside_walk.jpg',
      cameraMotion: 'zoom-in',
      english: "I've been trying to stop binge-watching shows all weekend, so I just got into pour-over coffee brewing at home. I'm slowly getting better at it!",
      slashBroken: "I've been trying to stop binge-watching shows / all weekend, / so I just got into pour-over coffee brewing / at home. / I'm slowly getting better at it!",
      korean: '주말 내내 드라마 정주행하는 걸 좀 줄여 보려고, 집에서 핸드드립 커피 내리기에 막 입문했어. 조금씩 실력이 늘고 있어!',
      keyHighlight: 'getting better at it',
      noteKo: 'get into(입문하다)와 getting better at ~(점점 ~을 더 잘하게 되고 있다)의 자연스러운 연결을 익히세요.'
    },
    {
      id: 'd11-t06',
      speaker: 'Sora',
      roleLabel: '프로덕트 디자이너 (한국인)',
      voicePitch: 1.07,
      sceneImage: 'assets/scene_riverside_walk.jpg',
      cameraMotion: 'pan-right',
      english: "Oh, I love that! Speaking of which, a few of us are going for a light riverside run this Saturday and grabbing coffee afterward. Want to hang out?",
      slashBroken: 'Oh, I love that! / Speaking of which, / a few of us are going for a light riverside run / this Saturday / and grabbing coffee afterward. / Want to hang out?',
      korean: '오, 너무 좋다! 그 얘기가 나와서 말인데, 이번 토요일에 몇 명이서 가볍게 강변 뛰고 커피 마시러 가거든. 같이 어울릴래?',
      keyHighlight: 'Speaking of which',
      noteKo: '상대의 커피 이야기를 받아 Speaking of which(그 얘기가 나와서 말인데)로 자연스럽게 주말 모임을 제안했습니다.'
    },
    {
      id: 'd11-t07',
      speaker: 'Alex',
      roleLabel: '타 부서 동료',
      voicePitch: 0.93,
      sceneImage: 'assets/scene_riverside_walk.jpg',
      cameraMotion: 'zoom-in',
      english: "Count me in! I'm really looking forward to catching up with everyone. Oh, it's getting late—let's walk back toward the station.",
      slashBroken: "Count me in! / I'm really looking forward to / catching up with everyone. / Oh, it's getting late— / let's walk back toward the station.",
      korean: '나도 무조건 끼워줘! 다 같이 만나서 근황 나눌 생각에 벌써 기대된다. 어, 점점 늦어지네—역 쪽으로 걸어가자.',
      keyHighlight: 'looking forward to catching up',
      noteKo: 'Count me in!(쾌락 수락) + looking forward to + -ing(동명사!) + It\'s getting late(자연스러운 자리 마무리)까지 완벽합니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · "My hobby is ~" 졸업하기: be into ~ & get into ~ + lately',
      coreFormula: 'I’ve been really into [명사/-ing] lately. (현재 진행 취향) / How did you get into [명사]? (입문 계기)',
      wrongKonglish: 'My hobby is running. I played with my friend last weekend.',
      rightNative: "I've been really into running lately. I hung out with my friend last weekend.",
      explanationKo:
        '한국인은 영어 취미 질문을 받으면 자동으로 "My hobby is ~"와 "play with my friend"를 떠올립니다. 하지만 성인 원어민 대화에서 play는 어린아이 놀이나 악기·스포츠에만 쓰며, 친구와 어울리는 것은 hang out입니다. 취미도 "I\'m really into ~" 또는 최근부터 지금까지 이어짐을 나타내는 현재완료 "I\'ve been into ~ lately"로 말하면 단숨에 원어민 톤으로 바뀝니다.',
      registerSpectrum: {
        casual: "I'm super into trail running lately—wanna hang out Saturday?",
        standard: "I've been really into running lately to clear my head after work.",
        formal: 'Outside of work, I have recently developed a strong interest in distance running.'
      }
    },
    {
      title: '원리 02 · 원어민이 하루 20번 쓰는 상태 변화 패턴: be getting + 형용사/비교급',
      coreFormula: "It's getting [late / dark / warmer / humid]. / I'm getting [hungry / tired / better at ~].",
      wrongKonglish: 'The weather becomes cool gradually. And time is becoming late.',
      rightNative: "It's getting cooler in the evenings. Oh, and it's getting late!",
      explanationKo:
        '우리말의 "점점 ~해지고 있어"를 영작할 때 딱딱한 become + gradually를 쓰면 번역체처럼 들립니다. 원어민은 날씨·시간·감정·실력 등 현재 진행 중인 변화의 90%를 "be getting + 형용사/비교급" 한 패턴으로 해결합니다. It\'s getting late(점점 늦어지네)는 식사나 모임을 자연스럽게 마무리할 때도 최고의 쿠션입니다.',
      registerSpectrum: {
        casual: "Man, I'm getting hungry and it's getting pretty chilly out here.",
        standard: "It's getting much warmer lately, and I'm slowly getting better at cooking.",
        formal: 'As the project timeline is getting tighter, we should align on priorities early.'
      }
    },
    {
      title: '원리 03 · 단골 어법 함정 2종: look forward to + -ing & catch up with vs on',
      coreFormula: 'look forward to [명사 / 동명사 -ing] (원형 X!) / catch up with [사람] ↔ catch up on [잠·일·밀린 것]',
      wrongKonglish: 'I look forward to see you! I need to catch up with my sleep this Sunday.',
      rightNative: "I'm looking forward to seeing you! I need to catch up on sleep this Sunday.",
      explanationKo:
        '① look forward to의 to는 to부정사가 아니라 방향 전치사입니다. 따라서 뒤에 반드시 동명사(-ing)가 와야 합니다(looking forward to seeing / catching up). ② 또한 catch up은 뒤에 사람이 오면 with(친구와 밀린 근황 토크), 밀린 일·잠·드라마처럼 사물이 오면 on(catch up on sleep / emails)을 씁니다.',
      registerSpectrum: {
        casual: "Can't wait to catch up with you—I'm also catching up on sleep Sunday!",
        standard: "I'm really looking forward to catching up with you over coffee.",
        formal: 'I look forward to meeting with your team next Tuesday to review the updates.'
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd11-s01',
      drillType: 'konglish-fix',
      promptKo: '"주말에 친구랑 만나서 편하게 놀았어." — 성인 원어민 대화에 맞는 문장은?',
      promptEnHint: '성인 친구끼리 어울릴 때는 play 대신 hang out을 씁니다.',
      targetEn: 'I hung out with my friend over the weekend.',
      wrongKonglishOption: 'I played with my friend over the weekend.',
      explanationKo: '성인이 친구와 만나 어울려 노는 것은 hang out with(과거형 hung out)를 사용합니다.'
    },
    {
      id: 'd11-s02',
      drillType: 'chunk-build',
      promptKo: '요즘 필름 사진 찍기에 푹 빠져 있어요.',
      promptEnHint: '현재완료 I have been really into ~ lately 어순을 조립하세요.',
      targetEn: "I've been really into film photography lately.",
      chunks: ["I've been", 'really into', 'film photography', 'lately.'],
      explanationKo: '최근부터 지금까지 푹 빠져 있을 때 have been into ~ lately가 가장 자연스럽습니다.'
    },
    {
      id: 'd11-s03',
      drillType: 'active-blank',
      promptKo: '저녁에 날씨가 점점 선선해지고 있어요.',
      promptEnHint: '상태 변화 패턴의 핵심 동사(-ing 형태) 1단어를 채우세요.',
      targetEn: "It's getting cooler in the evenings.",
      blankData: {
        before: "It's",
        answer: 'getting',
        after: 'cooler in the evenings.',
        firstLetterHint: 'g (7글자, -ing형)'
      },
      explanationKo: 'be getting + 형용사/비교급은 날씨·시간·기분 변화를 나타내는 최빈출 구문입니다.'
    },
    {
      id: 'd11-s04',
      drillType: 'konglish-fix',
      promptKo: '"이번 주말에 너랑 만나서 근황 나눌 생각에 정말 기대돼!" — 문법이 정확한 문장은?',
      promptEnHint: 'look forward to 뒤에는 동사원형이 아니라 동명사(-ing)가 옵니다.',
      targetEn: "I'm really looking forward to catching up with you this weekend.",
      wrongKonglishOption: "I'm really looking forward to catch up with you this weekend.",
      explanationKo: 'look forward to의 to는 전치사이므로 반드시 동명사 catching up이 와야 합니다.'
    },
    {
      id: 'd11-s05',
      drillType: 'active-blank',
      promptKo: '머리 식히려고 저녁마다 강변을 걸어요.',
      promptEnHint: '"머리를 식히다" 관용구(3단어)를 넣으세요.',
      targetEn: 'I walk by the river every evening to clear my head.',
      blankData: {
        before: 'I walk by the river every evening to',
        answer: 'clear my head',
        after: '.',
        firstLetterHint: 'c____ m_ h___ (3단어)'
      },
      explanationKo: '복잡한 생각과 스트레스를 비우고 머리를 식힌다는 표현은 clear my head입니다.'
    },
    {
      id: 'd11-s06',
      drillType: 'chunk-build',
      promptKo: '토요일 아침에 강변 러닝하고 브런치 먹는다고? 나도 끼워줘!',
      promptEnHint: '신나는 수락 표현 Count me in! 으로 시작하세요.',
      targetEn: 'Count me in for the Saturday run and brunch!',
      chunks: ['Count me in', 'for the', 'Saturday run', 'and brunch!'],
      explanationKo: 'Count me in!은 모임 제안에 기분 좋게 합류 의사를 밝히는 필수 회화 표현입니다.'
    },
    {
      id: 'd11-s07',
      drillType: 'active-blank',
      promptKo: '오늘 아침에 10km를 뛰었어? 어쩐지 배고파하더라!',
      promptEnHint: '"어쩐지 ~하더라"를 뜻하는 2단어 관용구를 넣으세요.',
      targetEn: "You ran ten kilometers this morning? No wonder you're starving!",
      blankData: {
        before: 'You ran ten kilometers this morning?',
        answer: 'No wonder',
        after: "you're starving!",
        firstLetterHint: 'N_ w_____ (2단어, 대문자 시작)'
      },
      explanationKo: 'No wonder + 주어 + 동사!는 이유를 듣고 단번에 납득하며 공감할 때 쓰는 원어민 리액션입니다.'
    },
    {
      id: 'd11-s08',
      drillType: 'konglish-fix',
      promptKo: '"이번 일요일엔 밀린 잠을 좀 보충해야겠어." — 전치사가 정확한 문장은?',
      promptEnHint: '사람은 catch up with, 밀린 잠·일은 catch up on을 씁니다.',
      targetEn: 'I need to catch up on sleep this Sunday.',
      wrongKonglishOption: 'I need to catch up with sleep this Sunday.',
      explanationKo: '밀린 잠이나 업무를 따라잡고 보충할 때는 전치사 on(catch up on sleep)을 씁니다.'
    },
    {
      id: 'd11-s09',
      drillType: 'chunk-build',
      promptKo: '그 얘기가 나와서 말인데, 강변에 새로 생긴 빵집 가봤어?',
      promptEnHint: '화제 전환 표현 Speaking of which로 시작하세요.',
      targetEn: 'Speaking of which, have you tried that new bakery by the river?',
      chunks: ['Speaking of which,', 'have you tried', 'that new bakery', 'by the river?'],
      explanationKo: 'Speaking of which는 직전 대화 소재와 자연스럽게 새 화제를 연결해 줍니다.'
    },
    {
      id: 'd11-s10',
      drillType: 'chunk-build',
      promptKo: '트레일 러닝에는 처음 어떻게 입문하게 됐어?',
      promptEnHint: '입문 계기를 묻는 How did you get into ~? 패턴을 조립하세요.',
      targetEn: 'How did you first get into trail running?',
      chunks: ['How did you', 'first', 'get into', 'trail running?'],
      explanationKo: '상대가 취미를 말했을 때 "How did you get into it?"으로 되물으면 대화가 풍성하게 이어집니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd11-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '취미 몰입 be into ~',
      questionKo: '빈칸에 알맞은 전치사(1단어)를 넣어 "요즘 핸드드립 커피에 푹 빠져 있다"를 완성하세요.',
      stimulusEn: "I've been really __________ pour-over coffee lately.",
      answer: 'into',
      explanationKo: '무언가에 푹 빠져 좋아한다는 뜻은 be into ~입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "클라이밍에는 어떻게 처음 입문하게 됐어?" 빈칸(2단어)을 채우세요.',
        stimulusEn: 'How did you first __________ __________ indoor climbing?',
        answer: 'get into',
        explanationKo: '흥미를 붙이고 입문한 계기는 get into로 묻습니다.'
      }
    },
    {
      id: 'd11-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '근황 토크 catch up with',
      questionKo: '빈칸에 알맞은 3단어를 써서 "금요일에 옛 친구와 만나 근황을 나누고 싶다"를 완성하세요.',
      stimulusEn: "I'd love to __________ __________ __________ my old friend this Friday.",
      answer: 'catch up with',
      explanationKo: '오랜만에 사람과 만나 밀린 이야기를 나누는 것은 catch up with [사람]입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "주말에 밀린 잠을 보충해야 해" 빈칸(3단어)을 채우세요.',
        stimulusEn: 'I really need to __________ __________ __________ sleep this weekend.',
        answer: 'catch up on',
        explanationKo: '밀린 잠·일·이메일 등을 보충할 때는 전치사 on을 씁니다.'
      }
    },
    {
      id: 'd11-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '상태 변화 it’s getting ~',
      questionKo: '빈칸에 알맞은 동사(-ing 형태, 1단어)를 써서 "점점 어두워지네, 슬슬 돌아가자"를 완성하세요.',
      stimulusEn: "It's __________ dark—let's head back toward the station.",
      answer: 'getting',
      explanationKo: '점점 ~해지고 있다는 실시간 변화는 be getting + 형용사로 표현합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "요즘 조금씩 요리가 늘고 있어!" 빈칸(2단어)을 채우세요.',
        stimulusEn: "I'm slowly __________ __________ at cooking!",
        answer: 'getting better',
        explanationKo: 'be getting better at ~은 "점점 ~을 더 잘하게 되고 있다"는 유용한 표현입니다.'
      }
    },
    {
      id: 'd11-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '감정·휴식 관용구 clear my head',
      questionKo: '빈칸에 알맞은 3단어를 넣어 "퇴근 후 산책은 머리 식히는 데 큰 도움이 된다"를 완성하세요.',
      stimulusEn: 'An evening walk by the river really helps me __________ __________ __________.',
      answer: 'clear my head',
      explanationKo: '복잡한 머리를 식히고 리프레시한다는 관용구는 clear my head입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "큰 프로젝트 끝나고 살짝 번아웃이 왔어" 빈칸(2단어)을 채우세요.',
        stimulusEn: "I've been feeling a bit __________ __________ after the big launch.",
        answer: 'burned out',
        explanationKo: '번아웃 상태를 뜻하는 형용사구는 burned out(또는 burnt out)입니다.'
      }
    },
    {
      id: 'd11-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '화제 전환 Speaking of which',
      questionKo: '빈칸에 알맞은 3단어를 넣어 "그 얘기가 나와서 말인데, 이번 주말에 시간 돼?"를 완성하세요.',
      stimulusEn: '__________ __________ __________, are you free to grab brunch this Saturday?',
      answer: 'Speaking of which',
      explanationKo: '앞선 대화에서 나온 키워드를 자연스럽게 새 화제로 연결할 때 Speaking of which를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "주말 브런치 모임? 나도 무조건 끼워줘!" 빈칸(3단어)을 채우세요.',
        stimulusEn: 'Weekend brunch by the river? __________ __________ __________!',
        answer: 'Count me in',
        explanationKo: '기분 좋은 참여 수락 표현은 Count me in!입니다.'
      }
    },
    {
      id: 'd11-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'look forward to + 동명사 어법',
      questionKo: '다음 중 어법상 **올바른** 문장을 고르세요.',
      stimulusEn: '전치사 to 뒤에 오는 동사의 형태에 주의하세요.',
      options: [
        "I'm really looking forward to see you on Saturday.",
        "I'm really looking forward to catch up with everyone.",
        "I'm really looking forward to catching up with everyone.",
        "I'm really looking forward seeing you on Saturday."
      ],
      answer: "I'm really looking forward to catching up with everyone.",
      explanationKo: 'look forward to의 to는 전치사이므로 반드시 뒤에 동명사(-ing)인 catching up이 와야 합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "다음 주에 다시 뵙기를 기대합니다" 빈칸 동사(1단어, -ing형)를 쓰세요.',
        stimulusEn: 'I look forward to __________ you again next week. (see 활용)',
        answer: 'seeing',
        explanationKo: 'look forward to seeing you가 정확한 어법입니다.'
      }
    },
    {
      id: 'd11-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '성인 사교 표현 hang out vs play',
      questionKo: '외국인 동료에게 "지난 토요일에 친구들이랑 강변에서 만나 놀았어"라고 자연스럽게 말한 문장은?',
      stimulusEn: '성인 원어민 일상 회화에서 어색하지 않은 동사를 고르세요.',
      options: [
        'I played with my friends by the river last Saturday.',
        'I hung out with my friends by the river last Saturday.',
        'I enjoyed playing my friends by the river last Saturday.',
        'I did a hobby with my friends by the river last Saturday.'
      ],
      answer: 'I hung out with my friends by the river last Saturday.',
      explanationKo: '성인이 친구들과 어울려 시간을 보낼 때는 play with가 아니라 hang out with(과거형 hung out)를 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "주말에 새로 나온 드라마 정주행했어" 빈칸 동사(하이픈 포함, 과거형)를 쓰세요.',
        stimulusEn: 'I __________ a whole mystery series over the weekend.',
        answer: 'binge-watched',
        explanationKo: '시리즈를 몰아보는 것은 binge-watch(과거형 binge-watched)입니다.'
      }
    },
    {
      id: 'd11-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '원어민 리액션 Good call / No wonder',
      questionKo: '친구가 "어젯밤에 두 시간밖에 못 잤어"라고 말했을 때 "어쩐지 엄청 피곤해 보이더라!"에 해당하는 가장 자연스러운 리액션은?',
      stimulusEn: '이유를 듣고 즉각 납득하는 공감 표현을 고르세요.',
      options: [
        'Good call you look exhausted!',
        'No wonder you look so exhausted!',
        'Count me in you look exhausted!',
        'Speaking of which you look exhausted!'
      ],
      answer: 'No wonder you look so exhausted!',
      explanationKo: 'No wonder + 주어 + 동사는 "어쩐지 ~하더라 / 그럴 만도 하네"라는 원어민 핵심 공감 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "야외 테이블 예약한 거 진짜 센스 있네!" 빈칸(2단어)을 채우세요.',
        stimulusEn: '__________ __________ booking a table on the patio!',
        answer: 'Good call',
        explanationKo: '상대의 현명한 선택을 칭찬할 때 Good call!이라고 반응합니다.'
      }
    },
    {
      id: 'd11-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'catch up with vs catch up on',
      questionKo: '빈칸 (A)와 (B)에 들어갈 전치사가 바르게 짝지어진 것은?',
      stimulusEn: 'On Saturday I want to catch up (A) ______ my sister, and on Sunday I need to catch up (B) ______ my emails.',
      options: ['(A) on — (B) with', '(A) with — (B) on', '(A) to — (B) for', '(A) at — (B) in'],
      answer: '(A) with — (B) on',
      explanationKo: '사람과 밀린 근황을 나눌 때는 catch up with, 밀린 이메일·잠·일을 처리할 때는 catch up on을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "정말 오랜만이야!" 빈칸(3단어)을 채우세요.',
        stimulusEn: "Hey! It's __________ __________ __________—how have you been?",
        answer: 'been a while',
        explanationKo: "It's been a while!은 오랜만에 만난 지인에게 건네는 가장 자연스러운 인사입니다."
      }
    },
    {
      id: 'd11-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'lately 시제 호응',
      questionKo: '"요즘 어떻게 지내? 최근에 뭐에 빠져 있어?"를 가장 자연스러운 시제와 어휘로 옮긴 것은?',
      stimulusEn: '부사 lately는 과거부터 현재까지 이어지는 현재완료(have been)와 잘 어울립니다.',
      options: [
        'What were you into lately yesterday?',
        'What have you been into lately?',
        'What will you into late?',
        'How late are you into hobbies?'
      ],
      answer: 'What have you been into lately?',
      explanationKo: 'lately는 "최근에(지금까지 계속)" 뜻이므로 현재완료 What have you been into lately?가 가장 자연스럽습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "요즘 넷플릭스에서 뭐 보고 있어?" 빈칸 부사(1단어)를 채우세요.',
        stimulusEn: 'What have you been watching on Netflix __________?',
        answer: 'lately',
        explanationKo: '최근 근황 질문 끝에 lately를 붙이면 자연스러운 현재완료 스몰토크가 됩니다.'
      }
    },
    {
      id: 'd11-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '취미·근황 스토리 배열',
      questionKo: '주어진 청크를 올바른 어순으로 배열하여 문장을 완성하세요.',
      stimulusEn: '[ lately. / really into / I have been / trail running ]',
      answer: 'I have been really into trail running lately.',
      acceptableAlt: ["I've been really into trail running lately."],
      explanationKo: '주어+현재완료(I have been) + really into + 취미(trail running) + 부사(lately) 어순입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "요즘 요리하는 데 푹 빠져 있어요."를 영작하세요.',
        stimulusEn: '힌트: I have been / really into / cooking / lately.',
        answer: 'I have been really into cooking lately.',
        explanationKo: 'into 뒤에는 명사 또는 동명사(cooking)가 옵니다.'
      }
    },
    {
      id: 'd11-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '기대감 표현 배열',
      questionKo: '주어진 청크를 올바르게 배열하여 완전한 문장을 작성하세요.',
      stimulusEn: '[ with everyone / catching up / this weekend. / I am looking forward to ]',
      answer: 'I am looking forward to catching up with everyone this weekend.',
      acceptableAlt: ["I'm looking forward to catching up with everyone this weekend."],
      explanationKo: 'looking forward to 뒤에 동명사구(catching up with everyone) + 시간(this weekend) 순으로 배열합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "이번 금요일에 너랑 커피 마시며 근황 나눌 생각에 기대돼."를 영작하세요.',
        stimulusEn: "힌트: I'm looking forward to / catching up with you / over coffee / this Friday.",
        answer: "I'm looking forward to catching up with you over coffee this Friday.",
        explanationKo: 'over coffee(커피를 사이에 두고/마시며)를 얹으면 원어민 감각이 살아납니다.'
      }
    },
    {
      id: 'd11-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '상태 변화 + 휴식 목적 영작',
      questionKo: '우리말 뜻에 맞게 주어진 단어를 모두 사용하여 문장을 완성하세요.',
      stimulusEn: '우리말: 머리 식히려고 저녁마다 강변에서 조깅을 시작했어. (I started / jogging / by the river / to clear my head)',
      answer: 'I started jogging by the river to clear my head.',
      explanationKo: '[핵심 행동] I started jogging + [장소] by the river + [목적] to clear my head 어순입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "날씨가 점점 따뜻해지고 있어서 밖에 나가기 좋아."를 영작하세요.',
        stimulusEn: "힌트: It's getting warmer, / so it's nice / to go outside.",
        answer: "It's getting warmer, so it's nice to go outside.",
        explanationKo: "It's getting warmer로 날씨 변화를 먼저 자연스럽게 꺼냅니다."
      }
    },
    {
      id: 'd11-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '스몰토크 오류 교정 서술형',
      questionKo: '다음 문장의 어법·어휘 오류 2곳을 고쳐 자연스러운 원어민 문장으로 다시 쓰세요.',
      stimulusEn: '오류 문장: I look forward to play with you and catch up with sleep this weekend.',
      answer: 'I look forward to hanging out with you and catching up on sleep this weekend.',
      acceptableAlt: ["I'm looking forward to hanging out with you and catching up on sleep this weekend."],
      explanationKo: '① look forward to play with → look forward to hanging out with(동명사 + 성인 사교 구동사), ② catch up with sleep → catching up on sleep(병렬 동명사 + 전치사 on)으로 교정합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 다음 오류 문장을 바르게 고쳐 쓰세요: I look forward to see you soon!',
        stimulusEn: 'look forward to 뒤의 동사 형태를 교정하세요.',
        answer: 'I look forward to seeing you soon!',
        explanationKo: '전치사 to 뒤이므로 동명사 seeing을 씁니다.'
      }
    },
    {
      id: 'd11-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '실전 한영 통문장 영작',
      questionKo: '다음 우리말을 오늘 배운 표현(No wonder, burned out)을 활용해 영작하세요.',
      stimulusEn: '우리말: 야근을 2주나 했어? 어쩐지 번아웃 온 것처럼 보이더라! (힌트: You worked late for two weeks? / No wonder / you feel burned out!)',
      answer: 'You worked late for two weeks? No wonder you feel burned out!',
      acceptableAlt: ['You worked late for two weeks? No wonder you look burned out!'],
      explanationKo: '상대의 상황을 되물은 뒤 No wonder + 주어 + 동사로 깊이 공감하는 원어민 스몰토크 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "그 얘기가 나와서 말인데, 이번 토요일에 시간 돼?"를 영작하세요.',
        stimulusEn: '힌트: Speaking of which, / are you free / this Saturday?',
        answer: 'Speaking of which, are you free this Saturday?',
        explanationKo: 'Speaking of which, 뒤에 가벼운 질문을 붙여 화제를 자연스럽게 전환합니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn: "Hey! It's been a while since we last caught up! What have you been into lately outside of work or study?",
    openingQuestionKo: '어, 정말 오랜만이야! 요즘 일이나 공부 말고 따로 푹 빠져 있는 취미나 활동 있어?',
    followUpQuestionEn: "Oh, good call! How did you first get into that, and do you have any fun plans to hang out or clear your head this weekend?",
    followUpQuestionKo: '오, 좋은 선택이네! 그건 처음 어떻게 입문하게 됐어? 그리고 이번 주말엔 머리 식히거나 어울릴 재미있는 계획 있어?',
    recommendedChunks: ["I've been really into ~ lately", 'clear my head', "it's getting ~", 'Speaking of which', 'looking forward to -ing'],
    modelAnswerEn:
      "It's been a while! Lately I've been really into evening running by the river to clear my head, especially now that the weather is getting cooler. Speaking of which, I'm looking forward to catching up with a few friends over brunch this Saturday!"
  }
};
