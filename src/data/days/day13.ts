import type { DayLessonModule } from '../../types/course.ts';
import { DAY_YOUTUBE_VIDEOS } from '../youtubeLibrary.ts';

export const day13Module: DayLessonModule = {
  dayNumber: 13,
  weekNumber: 3,
  cefrLevel: 'b1',
  dayBadge: 'DAY 13 · 화상 미팅 오프닝 & 연결 대처',
  categoryLabel: 'Week 3 오피스 실무 · 화상회의 진행 & 트러블슈팅',
  title: '화면 공유가 잘 보이시나요?',
  subtitle: 'Zoom·Teams 글로벌 화상회의 오프닝부터 화면 공유, 오디오 끊김·음소거 대처, 아젠다 전환까지 당황하지 않고 리드하는 핵심 공식',
  heroImage: 'assets/scene_video_call.jpg',
  secondaryImage: 'assets/office_sitcom_scene.jpg',
  estimatedSprintMin: 8,
  estimatedLectureMin: 40,
  keyExpression: 'Let me share my screen — can everyone see this clearly?',
  keySentenceByTier: {
    a1: 'Can you hear me? I will share my screen now.',
    a2: 'Thanks for joining the call. Let me share my screen so we can start.',
    b1: "Thanks for hopping on, everyone. Let me share my screen and jump right into today's agenda.",
    b2: "Sorry, you're breaking up a bit—let me turn off my video while I share my screen and walk you through the slides.",
    c1: "Since everyone is here, let's jump right in; I'll share my screen now, and please chime in if the audio cuts out at any point.",
    c2: "Mindful of everyone's time, let's jump straight into the Q3 metrics—bear with me for a second while I pull up the deck and share my screen."
  },
  youtubeVideo: DAY_YOUTUBE_VIDEOS[13],
  readingPassage: {
    titleEn: 'How Great Remote Hosts Run Smooth Video Calls',
    titleKo: '글로벌 원격 팀장들이 화상회의를 매끄럽게 이끄는 비결',
    genreBadge: '원격 협업 플레이북 · Lv.3',
    estimatedMin: 5,
    paragraphsEn: [
      'In global hybrid teams, the first ninety seconds of a video call set the tone for the entire meeting. Seasoned hosts rarely waste five minutes waiting in awkward silence. Instead, they thank everyone for hopping on, confirm that the audio is clear, and jump right into the agenda so colleagues across time zones feel their time is respected.',
      'Technical hiccups happen to everyone, even senior directors with fiber-optic internet. When a speaker forgets to unmute or their voice starts breaking up, the smoothest response is calm and direct. Saying "Sorry, you are on mute" or "You cut out for a second—could you repeat that?" keeps the meeting moving without making anyone feel embarrassed.',
      'Before walking teammates through a slide deck, strong presenters share their screen early and ask for a quick visual check. If someone\'s connection begins to lag or their screen freezes, suggesting they switch off their camera or log back in solves most issues within seconds. Wrapping up two minutes early with clear next steps leaves every participant energized for their next call.'
    ],
    paragraphsSlash: [
      'In global hybrid teams, / the first ninety seconds of a video call / set the tone for the entire meeting. / Seasoned hosts rarely waste five minutes / waiting in awkward silence. / Instead, / they thank everyone for hopping on, / confirm that the audio is clear, / and jump right into the agenda / so colleagues across time zones / feel their time is respected.',
      'Technical hiccups happen to everyone, / even senior directors with fiber-optic internet. / When a speaker forgets to unmute / or their voice starts breaking up, / the smoothest response is calm and direct. / Saying "Sorry, you are on mute" / or "You cut out for a second—could you repeat that?" / keeps the meeting moving / without making anyone feel embarrassed.',
      'Before walking teammates through a slide deck, / strong presenters share their screen early / and ask for a quick visual check. / If someone\'s connection begins to lag / or their screen freezes, / suggesting they switch off their camera / or log back in / solves most issues within seconds. / Wrapping up two minutes early / with clear next steps / leaves every participant energized / for their next call.'
    ],
    paragraphsKo: [
      '글로벌 하이브리드 팀에서는 화상회의의 처음 90초가 회의 전체의 분위기를 결정합니다. 노련한 진행자는 어색한 침묵 속에 5분씩 기다리며 시간을 낭비하지 않습니다. 대신 참석해 준 모두에게 감사 인사를 건네고, 오디오 상태를 확인한 뒤, 서로 다른 시간대에 있는 동료들이 자신의 시간을 존중받는다고 느끼도록 곧바로 아젠다로 들어갑니다.',
      '기술적인 작은 사고는 초고속 광랜을 쓰는 임원에게도 누구에게나 일어납니다. 발표자가 음소거 해제를 잊었거나 목소리가 뚝뚝 끊기기 시작할 때 가장 매끄러운 대응은 차분하고 명확하게 알려주는 것입니다. "죄송하지만 음소거 상태예요" 또는 "방금 잠깐 끊겼는데 다시 말씀해 주시겠어요?"라고 말하면 누구도 민망하게 하지 않으면서 회의 흐름을 유지할 수 있습니다.',
      '슬라이드 자료를 단계별로 설명하기 전에 뛰어난 발표자는 미리 화면을 공유하고 잘 보이는지 짧게 확인을 구합니다. 누군가의 연결이 버벅거리거나 화면이 멈추면 카메라를 끄거나 다시 접속해 보라고 제안하는 것만으로 대부분의 문제가 몇 초 안에 해결됩니다. 명확한 다음 단계를 정리하며 2분 일찍 회의를 마무리하면 모든 참석자가 활기찬 기분으로 다음 미팅을 맞이할 수 있습니다.'
    ],
    keyExpressions: [
      'hop on a call',
      'jump right into',
      'on mute / unmute',
      'break up / cut out',
      'walk ~ through',
      'wrap up'
    ],
    comprehensionQuiz: [
      {
        id: 'd13-rq01',
        questionKo: '노련한 화상회의 진행자가 시작 후 90초 안에 하는 행동으로 본문에 언급된 것은?',
        options: [
          '모든 참석자가 잡담을 끝낼 때까지 5분간 기다린다',
          '참석 감사를 전하고 오디오 확인 후 곧바로 아젠다로 들어간다',
          '카메라를 모두 끄고 채팅으로만 회의를 진행한다',
          '이전 회의록을 처음부터 끝까지 소리 내어 낭독한다'
        ],
        answer: '참석 감사를 전하고 오디오 확인 후 곧바로 아젠다로 들어간다',
        explanationKo: '첫째 문단 "thank everyone for hopping on, confirm that the audio is clear, and jump right into the agenda"가 근거입니다.'
      },
      {
        id: 'd13-rq02',
        questionKo: '연결이 버벅거리거나(lag) 화면이 멈췄을 때(freeze) 본문이 제안하는 가장 빠른 해결책은?',
        options: [
          '회의를 즉시 다음 주로 연기한다',
          '마이크 볼륨을 최대로 높여 말한다',
          '카메라를 끄거나 다시 접속(log back in)해 보라고 제안한다',
          '발표 슬라이드를 모두 삭제하고 구두로만 설명한다'
        ],
        answer: '카메라를 끄거나 다시 접속(log back in)해 보라고 제안한다',
        explanationKo: '셋째 문단 "suggesting they switch off their camera or log back in solves most issues within seconds"를 확인하세요.'
      },
      {
        id: 'd13-rq03',
        questionKo: '본문에서 발표자의 목소리가 "뚝뚝 끊기기 시작하다"를 표현한 원어민 구동사는?',
        options: ['wrap up', 'break up', 'drop off', 'jump in'],
        answer: 'break up',
        explanationKo: '통화나 화상회의에서 신호 불안정으로 음성이 뚝뚝 끊기는 현상을 break up이라고 표현합니다.'
      }
    ]
  },
  vocabList: [
    {
      id: 'd13-v01',
      word: 'hop on (a call)',
      phonetic: '/hɑːp ɑːn/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(화상·전화 회의에) 가볍게 접속하다, 참여하다',
      meaningEn: 'join a phone call or video meeting quickly',
      nuanceTipKo: '딱딱한 participate in a video conference 대신 실무에서 가장 많이 쓰는 자연스러운 오프닝 표현입니다. "Thanks for hopping on!"으로 외우세요.',
      exampleEn: 'Thanks for hopping on this call on such short notice.',
      exampleKo: '이렇게 급히 잡힌 화상회의에 접속해 주셔서 감사합니다.'
    },
    {
      id: 'd13-v02',
      word: 'jump right in',
      phonetic: '/dʒʌmp raɪt ɪn/',
      pos: '구동사 구문',
      cefr: 'b1',
      meaningKo: '군더더기 없이 바로 본론으로 들어가다',
      meaningEn: 'start dealing with the main topic immediately without delay',
      nuanceTipKo: '스몰토크를 끝내고 본격적으로 회의를 시작할 때 "Let’s jump right in(to the agenda)" 한마디면 진행자 포스가 살아납니다.',
      exampleEn: "Since we only have thirty minutes, let's jump right into the Q3 update.",
      exampleKo: '시간이 30분밖에 없으니 바로 3분기 업데이트로 들어가죠.'
    },
    {
      id: 'd13-v03',
      word: 'share my screen',
      phonetic: '/ʃer maɪ skriːn/',
      pos: '동사 구문',
      cefr: 'a2',
      meaningKo: '내 화면을 공유하다',
      meaningEn: 'display your computer screen to other participants in an online meeting',
      nuanceTipKo: '"Let me share my screen"으로 예고한 뒤 "Can everyone see my screen?"으로 확인하는 2단 세트가 글로벌 표준입니다.',
      exampleEn: 'Let me share my screen so we can review the dashboard together.',
      exampleKo: '대시보드를 함께 볼 수 있도록 제 화면을 공유하겠습니다.'
    },
    {
      id: 'd13-v04',
      word: 'on mute',
      phonetic: '/ɑːn mjuːt/',
      pos: '전치사구',
      cefr: 'b1',
      meaningKo: '음소거 상태인',
      meaningEn: 'having the microphone turned off so others cannot hear you',
      nuanceTipKo: '한국인이 가장 자주 틀리는 "You are mute(말을 못 하는)"는 실례가 될 수 있습니다! 반드시 전치사 on을 붙여 "You\'re on mute"라고 말하세요.',
      exampleEn: "Sorry, Liam—I think you're still on mute.",
      exampleKo: '죄송해요 리암, 아직 음소거 상태이신 것 같아요.'
    },
    {
      id: 'd13-v05',
      word: 'unmute',
      phonetic: '/ˌʌnˈmjuːt/',
      pos: '동사',
      cefr: 'b1',
      meaningKo: '음소거를 해제하다',
      meaningEn: 'turn the microphone back on after being muted',
      nuanceTipKo: '자동사("Can you unmute?")와 타동사("unmute yourself / your mic") 둘 다 자연스럽게 쓰입니다.',
      exampleEn: 'Could you unmute yourself before you start presenting?',
      exampleKo: '발표 시작하시기 전에 음소거를 해제해 주시겠어요?'
    },
    {
      id: 'd13-v06',
      word: 'break up',
      phonetic: '/breɪk ʌp/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(통화·화상 음성이) 뚝뚝 끊기다',
      meaningEn: 'become fragmented and hard to hear due to a poor connection',
      nuanceTipKo: '연인과 헤어지다는 뜻 외에, 통화 중 목소리가 지직거리며 끊길 때 진행형 "You\'re breaking up"으로 100% 쓰입니다.',
      exampleEn: "You're breaking up a little—could you repeat the last sentence?",
      exampleKo: '목소리가 조금 끊겨서요, 마지막 문장만 다시 말씀해 주시겠어요?'
    },
    {
      id: 'd13-v07',
      word: 'cut out',
      phonetic: '/kʌt aʊt/',
      pos: '구동사',
      cefr: 'b2',
      meaningKo: '(오디오·영상이) 갑자기 아예 끊기다',
      meaningEn: 'suddenly stop transmitting sound or signal completely',
      nuanceTipKo: 'break up이 부분적으로 지지직 끊기는 느낌이라면, cut out은 소리가 몇 초간 완전히 "뚝" 사라졌을 때 씁니다.',
      exampleEn: 'Your audio cut out for a few seconds right when you mentioned the budget.',
      exampleKo: '예산 말씀하신 딱 그 순간에 오디오가 몇 초간 완전히 끊겼어요.'
    },
    {
      id: 'd13-v08',
      word: 'lag',
      phonetic: '/læɡ/',
      pos: '동사/명사',
      cefr: 'b1',
      meaningKo: '(화면·음성이) 지연되다, 버벅거리다 / 렉',
      meaningEn: 'fall behind in real time due to slow network speed',
      nuanceTipKo: '게임에서 쓰는 "렉 걸린다"의 원래 영어 단어! "There\'s a slight lag on my end"처럼 명사로도, "My video is lagging"처럼 동사로도 씁니다.',
      exampleEn: "There's a bit of a lag, so I'll turn off my camera to save bandwidth.",
      exampleKo: '약간 지연(렉)이 있어서 대역폭을 아끼려고 카메라를 끌게요.'
    },
    {
      id: 'd13-v09',
      word: 'echo',
      phonetic: '/ˈekoʊ/',
      pos: '명사/동사',
      cefr: 'b1',
      meaningKo: '(마이크) 울림, 에코 / 소리가 울리다',
      meaningEn: 'a repeated sound caused by audio feedback between speakers and mic',
      nuanceTipKo: '같은 회의실에 두 명이 동시에 노트북 마이크를 켜서 소리가 울릴 때 "We\'re getting a strong echo"라고 말하면 바로 상황 정리됩니다.',
      exampleEn: "There's a slight echo on the line—could everyone else go on mute?",
      exampleKo: '약간 울림이 있어서요, 발언자 외에는 음소거로 전환해 주실 수 있을까요?'
    },
    {
      id: 'd13-v10',
      word: 'frozen',
      phonetic: '/ˈfroʊzn/',
      pos: '형용사',
      cefr: 'b1',
      meaningKo: '(화면이) 멈춘, 얼어붙은',
      meaningEn: 'stuck on a single image and no longer updating on screen',
      nuanceTipKo: '상대방 화면이 정지했을 때 "Your face stopped"가 아니라 "Your screen is frozen" 또는 "You froze for a second"가 정확한 원어민 표현입니다.',
      exampleEn: 'Maya, your video is frozen, though we can still hear you clearly.',
      exampleKo: '마야, 목소리는 잘 들리는데 화면이 멈춰 있어요.'
    },
    {
      id: 'd13-v11',
      word: 'walk ~ through',
      phonetic: '/wɔːk θruː/',
      pos: '구동사',
      cefr: 'b2',
      meaningKo: '~을 단계별로 차근차근 설명해 주다',
      meaningEn: 'guide someone step by step through a document, deck, or process',
      nuanceTipKo: '단순 explain보다 훨씬 전문적이며, 화면 공유로 슬라이드나 시트를 함께 보며 안내할 때 최고의 동사입니다. (walk [사람] through [자료])',
      exampleEn: "I'll walk you through the updated timeline slide by slide.",
      exampleKo: '업데이트된 타임라인을 슬라이드별로 차근차근 설명해 드리겠습니다.'
    },
    {
      id: 'd13-v12',
      word: 'drop off',
      phonetic: '/drɑːp ɔːf/',
      pos: '구동사',
      cefr: 'b2',
      meaningKo: '(화상회의에서) 먼저 퇴장하다 / 연결이 끊겨 나가다',
      meaningEn: 'leave a call early or get disconnected from a meeting',
      nuanceTipKo: '다음 일정이 있어 일찍 나가야 할 때 "I have to drop off a few minutes early"라고 양해를 구하면 아주 매너 있게 들립니다.',
      exampleEn: 'Sorry everyone, I have a hard stop at 10 and need to drop off now.',
      exampleKo: '죄송해요 여러분, 10시에 꼭 가야 할 일정이 있어서 먼저 나가봐야 합니다.'
    },
    {
      id: 'd13-v13',
      word: 'log back in',
      phonetic: '/lɔːɡ bæk ɪn/',
      pos: '구동사 구문',
      cefr: 'b1',
      meaningKo: '나갔다가 다시 로그인해 재접속하다',
      meaningEn: 'exit and sign in again to reset a technical issue',
      nuanceTipKo: '음성이나 화면 공유가 먹통일 때 "Let me drop off and log back in"이라고 말하고 재접속하면 깔끔합니다.',
      exampleEn: "My screen share isn't loading—let me leave and log back in real quick.",
      exampleKo: '화면 공유가 안 떠서 잠깐 나갔다가 바로 다시 접속할게요.'
    },
    {
      id: 'd13-v14',
      word: 'bear with me',
      phonetic: '/ber wɪð miː/',
      pos: '관용구',
      cefr: 'b2',
      meaningKo: '(파일 로딩·준비 중) 잠시만 양해하고 기다려 주다',
      meaningEn: 'please be patient with me for a brief moment',
      nuanceTipKo: '"Wait a second"는 다소 명령조로 들릴 수 있습니다. 파일을 찾거나 화면 공유 창을 고를 때 "Bear with me for a second"를 쓰면 프로다운 여유가 느껴집니다.',
      exampleEn: 'Bear with me for just a second while I pull up the latest deck.',
      exampleKo: '최신 발표 자료를 여는 동안 딱 1초만 기다려 주세요.'
    },
    {
      id: 'd13-v15',
      word: 'wrap up',
      phonetic: '/ræp ʌp/',
      pos: '구동사',
      cefr: 'b1',
      meaningKo: '(회의·발표를) 깔끔하게 마무리 짓다',
      meaningEn: 'bring a meeting or discussion to an orderly close',
      nuanceTipKo: '회의 종료 3분 전에 "To wrap up, let\'s confirm our action items"라고 외치면 정시에 회의를 끝내는 신뢰받는 진행자가 됩니다.',
      exampleEn: "Let's wrap up here and send the meeting notes in Slack.",
      exampleKo: '여기서 회의를 마무리하고 회의록은 슬랙에 공유하겠습니다.'
    }
  ],
  dialogue: [
    {
      id: 'd13-t01',
      speaker: 'Jiwon',
      roleLabel: '프로덕트 매니저 · 서울',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'zoom-in',
      english: 'Morning, Liam! Evening, Maya! Thanks for hopping on today—can everyone hear me okay?',
      slashBroken: 'Morning, Liam! / Evening, Maya! / Thanks for hopping on today— / can everyone hear me okay?',
      korean: '좋은 아침이에요 리암! 마야는 저녁이네요! 오늘 접속해 주셔서 감사합니다. 제 목소리 다들 잘 들리시나요?',
      keyHighlight: 'Thanks for hopping on today',
      noteKo: '글로벌 시차가 있는 팀원들에게 각자 시간대에 맞춰 인사한 뒤 hopping on과 오디오 체크로 매끄럽게 엽니다.'
    },
    {
      id: 'd13-t02',
      speaker: 'Liam',
      roleLabel: '엔지니어링 리드 · 샌프란시스코',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'pan-right',
      english: 'Loud and clear, Jiwon! Oh, Maya, I think your mouth is moving, but you are on mute.',
      slashBroken: 'Loud and clear, Jiwon! / Oh, Maya, / I think your mouth is moving, / but you are on mute.',
      korean: '또렷하게 잘 들려요, 지원! 어, 마야, 입은 움직이는데 음소거 상태이신 것 같아요.',
      keyHighlight: 'you are on mute',
      noteKo: '"Loud and clear"는 오디오 체크에 대한 최고의 원어민 응답이며, 음소거 알림은 반드시 on mute를 씁니다.'
    },
    {
      id: 'd13-t03',
      speaker: 'Maya',
      roleLabel: 'UX 디자이너 · 오스틴',
      voicePitch: 1.12,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-left',
      english: "Haha, classic Monday! Sorry, I just unmuted myself. I'm ready to jump right in whenever you are.",
      slashBroken: "Haha, classic Monday! / Sorry, I just unmuted myself. / I'm ready to jump right in / whenever you are.",
      korean: '하하, 전형적인 월요일이네요! 죄송해요, 방금 음소거 풀었어요. 준비되시면 바로 본론으로 들어가시죠.',
      keyHighlight: 'jump right in',
      noteKo: '실수를 가볍게 웃어넘기고 unmute yourself로 정리한 뒤 본론 진입(jump right in) 의사를 밝힙니다.'
    },
    {
      id: 'd13-t04',
      speaker: 'Jiwon',
      roleLabel: '프로덕트 매니저 · 서울',
      voicePitch: 1.06,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'zoom-in',
      english: 'Awesome. Bear with me for a second while I share my screen... Can everyone see the Q3 roadmap deck?',
      slashBroken: 'Awesome. / Bear with me for a second / while I share my screen... / Can everyone see / the Q3 roadmap deck?',
      korean: '좋습니다. 제가 화면 공유하는 동안 잠깐만 기다려 주세요... 다들 3분기 로드맵 자료 보이시나요?',
      keyHighlight: 'Bear with me for a second while I share my screen',
      noteKo: '화면 공유 로딩 중 정적을 메우는 만능 멘트가 바로 "Bear with me for a second"입니다.'
    },
    {
      id: 'd13-t05',
      speaker: 'Liam',
      roleLabel: '엔지니어링 리드 · 샌프란시스코',
      voicePitch: 0.92,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'pan-right',
      english: "Yep, we can see it! Wait—Jiwon, you're breaking up a bit, and your video just froze.",
      slashBroken: "Yep, we can see it! / Wait—Jiwon, / you're breaking up a bit, / and your video just froze.",
      korean: '네, 잘 보여요! 잠깐만요 지원, 목소리가 조금 끊기고 화면이 방금 멈췄어요.',
      keyHighlight: "you're breaking up a bit",
      noteKo: '오디오 끊김(breaking up)과 화면 정지(froze)를 짧고 명확하게 알려 주어 발표자가 즉시 대처하게 돕습니다.'
    },
    {
      id: 'd13-t06',
      speaker: 'Jiwon',
      roleLabel: '프로덕트 매니저 · 서울',
      voicePitch: 1.06,
      sceneImage: 'assets/office_sitcom_scene.jpg',
      cameraMotion: 'pan-left',
      english: "Thanks for letting me know. Let me switch off my camera to fix the lag—if I cut out again, I'll log back in.",
      slashBroken: "Thanks for letting me know. / Let me switch off my camera / to fix the lag— / if I cut out again, / I'll log back in.",
      korean: '알려줘서 고마워요. 지연 현상을 잡으려고 카메라를 잠깐 끌게요. 또 끊기면 다시 접속하겠습니다.',
      keyHighlight: 'if I cut out again, I\'ll log back in',
      noteKo: '네트워크 불안정 시 카메라 끄기(switch off my camera) + 재접속 예고(log back in)는 실무 만점 대처입니다.'
    },
    {
      id: 'd13-t07',
      speaker: 'Maya',
      roleLabel: 'UX 디자이너 · 오스틴',
      voicePitch: 1.12,
      sceneImage: 'assets/scene_video_call.jpg',
      cameraMotion: 'zoom-in',
      english: 'Much better now! Go ahead and walk us through slide three, and let’s aim to wrap up by the half-hour.',
      slashBroken: 'Much better now! / Go ahead and walk us through slide three, / and let’s aim to wrap up / by the half-hour.',
      korean: '지금 훨씬 좋아졌어요! 3번 슬라이드부터 차근차근 설명해 주시고, 30분 정각에 마무리하는 걸로 하죠.',
      keyHighlight: 'walk us through slide three',
      noteKo: '"by the half-hour"는 30분(예: 9:30, 10:30)에 맞춰 끝내자는 회의 실무 시간 표현입니다.'
    }
  ],
  grammarSections: [
    {
      title: '원리 01 · 화상회의 오디오·화면 장애 영어: break up vs. cut out vs. freeze',
      coreFormula: '음성 지직 끊김 = be breaking up / 소리 완전 소실 = cut out / 화면 정지 = be frozen (froze)',
      wrongKonglish: 'Your voice is cutting and your face stopped on the screen.',
      rightNative: "You're breaking up a bit, and your video is frozen.",
      explanationKo:
        '한국어 "목소리가 끊긴다"를 직역해 cutting이라고 하면 어색합니다. 화상회의에서 신호가 약해 말이 토막 나면 진행형으로 "You\'re breaking up", 몇 초간 소리가 아예 증발했으면 과거형으로 "You cut out for a second", 화면이 멈췄으면 "Your screen is frozen"이라고 증상별로 정확히 구분해 말하세요.',
      registerSpectrum: {
        casual: "Hey, you're breaking up—and you totally froze!",
        standard: "Sorry, you're breaking up a bit, and your video is frozen.",
        formal: 'Apologies for interrupting, but your audio cut out briefly—would you mind repeating that last point?'
      }
    },
    {
      title: '원리 02 · 음소거 표현의 전치사 공식: on mute (상태) vs. unmute (동작)',
      coreFormula: '상태: be on mute / 동작: mute (or unmute) yourself / your mic',
      wrongKonglish: 'Excuse me, you are mute now. Please open your microphone.',
      rightNative: "Excuse me, I think you're on mute. Could you unmute yourself?",
      explanationKo:
        '사람을 주어로 "You are mute"라고 쓰면 "당신은 말을 못 하는 사람이다"라는 실례 표현이 됩니다! 마이크가 꺼진 상태를 말할 때는 반드시 전치사 on을 붙여 "You\'re on mute"라고 하며, 마이크를 켜달라고 할 때는 "open your mic" 대신 동사 unmute를 씁니다.',
      registerSpectrum: {
        casual: "Oops, you're on mute!",
        standard: "Sorry, I think you're still on mute—could you unmute?",
        formal: 'Pardon me, it looks like your microphone is currently on mute.'
      }
    },
    {
      title: '원리 03 · 회의 리드 3단 전환 패턴: jump right in → walk you through → wrap up',
      coreFormula: "Let's jump right into [주제] → I'll walk you through [자료] → Let's wrap up with [결론]",
      wrongKonglish: "Let's enter the main topic and I will explain you the slides.",
      rightNative: "Let's jump right into the agenda, and I'll walk you through the slides.",
      explanationKo:
        '한국인이 자주 실수하는 "explain you the slides"는 어법 오류입니다(explain은 바로 뒤에 사람을 목적어로 취할 수 없음). 반면 walk [사람] through [자료]는 사람을 바로 목적어로 쓰며 "화면의 자료를 단계별로 친절히 안내하다"라는 고급 회의 뉘앙스까지 살아납니다.',
      registerSpectrum: {
        casual: "Let's jump right in—I'll quickly walk you guys through these slides.",
        standard: "Let's jump right into today's agenda. I'll walk you through the main deck.",
        formal: "To make the best use of our time, let's dive directly into the agenda while I walk you through the key figures."
      }
    }
  ],
  sprintDrills: [
    {
      id: 'd13-s01',
      drillType: 'chunk-build',
      promptKo: '오늘 회의에 접속해 주셔서 감사합니다.',
      promptEnHint: 'Thanks for + hopping on 조합으로 화상회의 오프닝을 조립하세요.',
      targetEn: 'Thanks for hopping on today.',
      chunks: ['Thanks for', 'hopping on', 'today.'],
      explanationKo: '화상·전화 회의 참여 감사는 "Thanks for hopping on"이 가장 자연스럽습니다.'
    },
    {
      id: 'd13-s02',
      drillType: 'konglish-fix',
      promptKo: '"죄송한데, 지금 음소거 상태이신 것 같아요."',
      promptEnHint: '음소거 상태를 나타내는 정확한 전치사구를 고르세요.',
      targetEn: "Sorry, I think you're on mute.",
      wrongKonglishOption: "Sorry, I think you're mute now.",
      explanationKo: '마이크가 꺼진 상태는 반드시 전치사 on을 붙여 "on mute"라고 표현합니다.'
    },
    {
      id: 'd13-s03',
      drillType: 'chunk-build',
      promptKo: '제 화면을 공유해 드릴게요—다들 잘 보이시나요?',
      promptEnHint: 'Let me share my screen + 확인 질문 순서로 조립하세요.',
      targetEn: 'Let me share my screen— can everyone see it?',
      chunks: ['Let me', 'share my screen—', 'can everyone', 'see it?'],
      explanationKo: '화면 공유 직후 "Can everyone see it?"으로 확인하는 것이 실무 기본 매너입니다.'
    },
    {
      id: 'd13-s04',
      drillType: 'active-blank',
      promptKo: '목소리가 조금 끊기고 있어요.',
      promptEnHint: '음성이 지직거리며 끊기다: break의 -ing형(8글자)',
      targetEn: "You're breaking up a bit.",
      blankData: {
        before: "You're",
        answer: 'breaking',
        after: 'up a bit.',
        firstLetterHint: 'b_______ (8글자)'
      },
      explanationKo: '통화 중 음성이 끊기는 상황은 현재진행형 "You\'re breaking up"을 사용합니다.'
    },
    {
      id: 'd13-s05',
      drillType: 'active-blank',
      promptKo: '최신 자료를 여는 동안 잠시만 기다려 주세요.',
      promptEnHint: '잠시만 양해하고 기다려 주세요: ____ with me (4글자)',
      targetEn: 'Bear with me for a second.',
      blankData: {
        before: '',
        answer: 'Bear',
        after: 'with me for a second.',
        firstLetterHint: 'B___ (4글자)'
      },
      explanationKo: 'Bear with me는 기술적 준비나 파일 로딩 중 정중히 양해를 구하는 핵심 표현입니다.'
    },
    {
      id: 'd13-s06',
      drillType: 'konglish-fix',
      promptKo: '"화면에 있는 3분기 자료를 차근차근 설명해 드릴게요."',
      promptEnHint: 'explain you는 문법 오류! 올바른 구동사 구문을 고르세요.',
      targetEn: "I'll walk you through the Q3 slides.",
      wrongKonglishOption: "I'll explain you the Q3 slides.",
      explanationKo: 'walk [사람] through [자료]는 문법적으로도 정확하고 발표에 최적화된 표현입니다.'
    },
    {
      id: 'd13-s07',
      drillType: 'chunk-build',
      promptKo: '바로 오늘 아젠다로 들어가 보죠.',
      promptEnHint: 'Let’s + jump right into 패턴을 조립하세요.',
      targetEn: "Let's jump right into today's agenda.",
      chunks: ["Let's", 'jump right into', "today's", 'agenda.'],
      explanationKo: '불필요한 지연 없이 본론으로 진입할 때 jump right into를 씁니다.'
    },
    {
      id: 'd13-s08',
      drillType: 'active-blank',
      promptKo: '방금 몇 초간 소리가 완전히 끊겼어요.',
      promptEnHint: '소리가 뚝 끊기다: cut ___ (3글자)',
      targetEn: 'Your audio cut out for a second.',
      blankData: {
        before: 'Your audio cut',
        answer: 'out',
        after: 'for a second.',
        firstLetterHint: 'o__ (3글자)'
      },
      explanationKo: '오디오 신호가 일시적으로 완전히 사라질 때 cut out을 사용합니다.'
    },
    {
      id: 'd13-s09',
      drillType: 'konglish-fix',
      promptKo: '"제 화면이 멈춰서 나갔다가 다시 접속할게요."',
      promptEnHint: '화면이 멈추다(frozen) + 재접속(log back in) 표현을 확인하세요.',
      targetEn: "My screen is frozen, so I'll log back in.",
      wrongKonglishOption: "My monitor stopped, so I'll enter again.",
      explanationKo: '화면 멈춤은 frozen, 화상회의 재접속은 log back in이라고 합니다.'
    },
    {
      id: 'd13-s10',
      drillType: 'chunk-build',
      promptKo: '다음 일정이 있어서 5분 일찍 먼저 나가봐야 해요.',
      promptEnHint: 'drop off + a few minutes early 청크를 연결하세요.',
      targetEn: 'I need to drop off five minutes early.',
      chunks: ['I need to', 'drop off', 'five minutes', 'early.'],
      explanationKo: '화상회의에서 먼저 퇴장할 때는 leave보다 drop off가 훨씬 자연스럽습니다.'
    }
  ],
  worksheetExam: [
    {
      id: 'd13-e01',
      number: 1,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '화상회의 오프닝 hop on',
      questionKo: '빈칸에 알맞은 구동사(2단어, 동명사 포함)를 넣어 "오늘 회의에 접속해 주셔서 감사합니다"를 완성하세요.',
      stimulusEn: 'Thanks for __________ __________ this morning, everyone.',
      answer: 'hopping on',
      acceptableAlt: ['joining us'],
      explanationKo: '전치사 for 뒤이므로 동명사 형태인 hopping on을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "지금 잠깐 10분 통화 가능할까요?" 빈칸 구동사(2단어)를 채우세요.',
        stimulusEn: 'Can you __________ __________ a quick ten-minute call right now?',
        answer: 'hop on',
        explanationKo: '조동사 Can 뒤이므로 원형 hop on을 씁니다.'
      }
    },
    {
      id: 'd13-e02',
      number: 2,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '음소거 전치사 on mute',
      questionKo: '빈칸에 전치사구(2단어)를 넣어 "죄송하지만 아직 음소거 상태이신 것 같아요"를 완성하세요.',
      stimulusEn: "Sorry, I think you're still __________ __________.",
      answer: 'on mute',
      explanationKo: '마이크가 꺼진 상태는 반드시 전치사 on과 함께 on mute라고 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "음소거를 해제해 주시겠어요?" 빈칸 동사(1단어)를 쓰세요.',
        stimulusEn: 'Could you please __________ yourself?',
        answer: 'unmute',
        explanationKo: '음소거 해제는 동사 unmute를 씁니다.'
      }
    },
    {
      id: 'd13-e03',
      number: 3,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '음성 끊김 break up',
      questionKo: '빈칸에 알맞은 구동사(2단어, 진행형)를 넣어 "목소리가 좀 끊겨서요"를 완성하세요.',
      stimulusEn: "Sorry, you're __________ __________ a bit—could you repeat that?",
      answer: 'breaking up',
      explanationKo: '신호 불량으로 음성이 지직거리며 끊길 때는 진행형 breaking up을 씁니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "방금 몇 초간 오디오가 완전히 끊겼어요" 빈칸 구동사(2단어, 과거형)를 채우세요.',
        stimulusEn: 'Your audio __________ __________ for a few seconds.',
        answer: 'cut out',
        explanationKo: 'cut의 과거형은 cut이며, 소리 완전 소실은 cut out입니다.'
      }
    },
    {
      id: 'd13-e04',
      number: 4,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '단계별 설명 walk through',
      questionKo: '빈칸에 알맞은 2단어를 넣어 "제가 새 대시보드를 차근차근 설명해 드릴게요"를 완성하세요.',
      stimulusEn: "I'll __________ you __________ the new dashboard.",
      answer: 'walk through',
      explanationKo: 'walk [사람] through [자료]는 슬라이드나 화면을 함께 보며 안내할 때 필수 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "파일 여는 동안 잠시만 기다려 주세요" 빈칸(3단어)을 채우세요.',
        stimulusEn: '__________ __________ __________ for just a second while I open the file.',
        answer: 'Bear with me',
        explanationKo: '정중한 대기 요청은 Bear with me입니다.'
      }
    },
    {
      id: 'd13-e05',
      number: 5,
      part: 'Part 1 · 어휘·구동사 빈칸 영작',
      grammarTag: '회의 퇴장·마무리 drop off / wrap up',
      questionKo: '빈칸에 구동사(2단어)를 넣어 "다음 회의가 있어 5분 일찍 먼저 나가야 해요"를 완성하세요.',
      stimulusEn: 'I have another meeting at 3, so I need to __________ __________ five minutes early.',
      answer: 'drop off',
      explanationKo: '화상회의에서 먼저 나가는 것은 drop off가 가장 자연스럽습니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "여기서 회의를 깔끔하게 마무리하죠" 빈칸 구동사(2단어)를 쓰세요.',
        stimulusEn: "Let's __________ __________ here and follow up in Slack.",
        answer: 'wrap up',
        explanationKo: '회의를 마무리 짓는 구동사는 wrap up입니다.'
      }
    },
    {
      id: 'd13-e06',
      number: 6,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'on mute 콩글리시 구분',
      questionKo: '화상회의 중 동료가 마이크를 끈 채 말하고 있을 때 가장 자연스럽고 예의 바른 알림은?',
      stimulusEn: '상대방의 마이크가 꺼져 있는 상황입니다.',
      options: [
        'Hey, you are mute! Open your voice.',
        "Sorry, I think you're on mute.",
        'Your microphone is dead now.',
        'Please turn on your speaking.'
      ],
      answer: "Sorry, I think you're on mute.",
      explanationKo: '"You are mute"는 실례가 되는 표현이며, "You\'re on mute"가 글로벌 화상회의 표준입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "배경 소음 때문에 잠시 음소거로 전환할게요" 빈칸 전치사구(2단어)를 쓰세요.',
        stimulusEn: "There's some background noise here, so I'll go __________ __________ for a second.",
        answer: 'on mute',
        explanationKo: '음소거로 전환하다는 go on mute라고 씁니다.'
      }
    },
    {
      id: 'd13-e07',
      number: 7,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '화면 멈춤 & 재접속 표현',
      questionKo: '상대방의 영상이 정지해 있고 연결이 버벅거릴 때 원어민이 쓰는 가장 자연스러운 문장은?',
      stimulusEn: '영상 정지 + 재접속 제안 상황입니다.',
      options: [
        'Your face stopped and you have computer delay.',
        'Your screen is frozen—maybe try logging back in.',
        'Your camera died completely to ice.',
        'Your picture is closing on my window.'
      ],
      answer: 'Your screen is frozen—maybe try logging back in.',
      explanationKo: '화면 정지는 frozen, 나갔다가 다시 들어오는 것은 log back in입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "약간의 지연(렉)이 있어서 카메라를 끌게요" 빈칸 명사(1단어)를 쓰세요.',
        stimulusEn: "There's a slight __________ on my end, so I'll turn off my camera.",
        answer: 'lag',
        explanationKo: '네트워크 지연 현상은 lag이라고 합니다.'
      }
    },
    {
      id: 'd13-e08',
      number: 8,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: 'explain 오류 vs walk through',
      questionKo: '발표 자료를 공유하며 "제가 이 보고서를 차례대로 설명해 드릴게요"라고 할 때 어법상 올바른 문장은?',
      stimulusEn: 'explain과 walk through의 목적어 구조를 비교하세요.',
      options: [
        "I'll explain you this report step by step.",
        "I'll walk you through this report.",
        "I'll explain about you this report.",
        "I'll walk through you this report."
      ],
      answer: "I'll walk you through this report.",
      explanationKo: 'explain은 바로 뒤에 사람을 목적어로 취할 수 없으며, walk [사람] through [자료] 어순이 정확합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "바로 오늘의 핵심 안건으로 들어가 보죠" 빈칸(3단어)을 채우세요.',
        stimulusEn: "Let's __________ __________ __________ today's main agenda.",
        answer: 'jump right into',
        explanationKo: '명사 목적어(today\'s main agenda)가 바로 이어지면 전치사 into를 써서 jump right into로 연결합니다.'
      }
    },
    {
      id: 'd13-e09',
      number: 9,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '마이크 울림(echo) 대처',
      questionKo: '회의 중 같은 공간에서 두 명이 마이크를 켜서 소리가 울릴 때 가장 정확한 표현은?',
      stimulusEn: '오디오 하울링·울림이 발생하는 상황입니다.',
      options: [
        "We're getting a strong echo on the line.",
        "We're hearing double mirror sounds.",
        'The speaker is ringing like a bell.',
        'Our voices are copying twice loudly.'
      ],
      answer: "We're getting a strong echo on the line.",
      explanationKo: '화상회의에서 마이크 울림 현상은 echo라고 하며 "There\'s an echo / We\'re getting an echo"로 말합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "제 목소리 또렷하게 잘 들리시나요?"에 대한 원어민 단골 응답(3단어: L___ a__ c____)을 쓰세요.',
        stimulusEn: 'Yes, we can hear you __________ __________ __________!',
        answer: 'loud and clear',
        explanationKo: 'loud and clear는 통화·화상회의에서 소리가 아주 선명하게 들린다는 관용 표현입니다.'
      }
    },
    {
      id: 'd13-e10',
      number: 10,
      part: 'Part 2 · 어법·뉘앙스 실전 객관식',
      grammarTag: '정중한 대기 요청 bear with me',
      questionKo: '화면 공유할 슬라이드 창을 찾는 3초 동안 상대방에게 양해를 구할 때 가장 프로다운 표현은?',
      stimulusEn: 'Wait! 대신 세련된 비즈니스 표현을 고르세요.',
      options: [
        'Stop and wait me until I find.',
        'Bear with me for a second while I pull up the slides.',
        'Be patient to my slow computer now.',
        'Hold your mouth while I open window.'
      ],
      answer: 'Bear with me for a second while I pull up the slides.',
      explanationKo: 'Bear with me for a second + while I pull up ~ 은 글로벌 회의에서 매일 쓰이는 매너 표현입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "발표 자료를 화면에 띄우다"에 알맞은 구동사(2단어)를 빈칸에 쓰세요.',
        stimulusEn: 'Let me __________ __________ the Q3 sales deck right now.',
        answer: 'pull up',
        explanationKo: '컴퓨터 화면에 파일이나 창을 불러와 띄우는 동작을 pull up이라고 합니다.'
      }
    },
    {
      id: 'd13-e11',
      number: 11,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '화면 공유 확인 질문 배열',
      questionKo: '주어진 청크를 올바른 순서로 배열하여 화면 공유 확인 문장을 완성하세요.',
      stimulusEn: '[ my screen / everyone / Let me / share / — can / see it? ]',
      answer: 'Let me share my screen—can everyone see it?',
      acceptableAlt: ['Let me share my screen — can everyone see it?', 'Let me share my screen, can everyone see it?'],
      explanationKo: 'Let me share my screen(예고) + can everyone see it?(확인) 조합입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "제 슬라이드가 잘 보이시나요?" (Can everyone / see my slides / clearly?)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'Can everyone see my slides clearly?',
        explanationKo: 'Can everyone see + [대상] + clearly? 패턴입니다.'
      }
    },
    {
      id: 'd13-e12',
      number: 12,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '오디오 끊김 대처 배열',
      questionKo: '주어진 청크를 배열하여 음성 끊김을 알리고 다시 말해 달라고 요청하는 문장을 완성하세요.',
      stimulusEn: "[ a bit / breaking up / Sorry, / could you / you're / — / repeat that? ]",
      answer: "Sorry, you're breaking up a bit—could you repeat that?",
      acceptableAlt: ["Sorry, you're breaking up a bit — could you repeat that?", "Sorry, you're breaking up a bit, could you repeat that?"],
      explanationKo: "Sorry, you're breaking up a bit 뒤에 정중한 요청 could you repeat that?을 연결합니다.",
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "방금 잠깐 끊겼어요." (You cut out / for a second.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: 'You cut out for a second.',
        explanationKo: '일시적 오디오 소실은 You cut out for a second.라고 간단히 말합니다.'
      }
    },
    {
      id: 'd13-e13',
      number: 13,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '본론 진입 & 안내 영작',
      questionKo: '우리말 뜻에 맞게 주어진 단어를 활용해 자연스러운 오프닝 문장을 완성하세요.',
      stimulusEn: '우리말: 바로 본론으로 들어가서 슬라이드를 차근차근 설명해 드릴게요. (Let’s / jump right in / and I’ll / walk you through / the slides.)',
      answer: "Let's jump right in, and I'll walk you through the slides.",
      acceptableAlt: ["Let's jump right in and I'll walk you through the slides."],
      explanationKo: 'jump right in(본론 진입)과 walk you through(단계별 안내)를 자연스럽게 연결한 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "오늘 아젠다로 바로 들어가 보죠." (Let’s jump right into / today’s agenda.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "Let's jump right into today's agenda.",
        explanationKo: 'jump right into + 명사 패턴입니다.'
      }
    },
    {
      id: 'd13-e14',
      number: 14,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '콩글리시 교정 서술형',
      questionKo: '다음 콩글리시 문장을 오늘 배운 표현(on mute, unmute yourself)으로 바르게 고쳐 쓰세요.',
      stimulusEn: '오류 문장: Sorry, you are mute. Could you open your mic?',
      answer: "Sorry, you're on mute. Could you unmute yourself?",
      acceptableAlt: [
        'Sorry, you are on mute. Could you unmute yourself?',
        "Sorry, you're on mute. Could you unmute your mic?"
      ],
      explanationKo: 'you are mute → you\'re on mute, open your mic → unmute yourself로 고치면 완벽합니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] 오류 교정: Your face stopped! → frozen을 사용해 4단어로 고치세요.',
        stimulusEn: '힌트: Your video is ~.',
        answer: 'Your video is frozen.',
        explanationKo: '화면 정지는 Your video(screen) is frozen.이라고 표현합니다.'
      }
    },
    {
      id: 'd13-e15',
      number: 15,
      part: 'Part 3 · 서술형 어순 배열 & 한영 통문장 영작',
      grammarTag: '실전 통문장 영작',
      questionKo: '다음 우리말을 영어로 자연스럽게 작성하세요.',
      stimulusEn: '우리말: 다시 끊기면 잠깐 나갔다가 재접속할게요. (힌트: If I cut out again, / I’ll drop off / and log back in.)',
      answer: "If I cut out again, I'll drop off and log back in.",
      explanationKo: '기술 장애 시 프로페셔널하게 대처 계획을 공유하는 실전 문장입니다.',
      twinClinic: {
        questionKo: '[쌍둥이 클리닉] "여기서 마무리하고 회의록은 슬랙에 공유할게요." (Let’s wrap up here / and share the notes / on Slack.)',
        stimulusEn: '영문 전체를 작성하세요.',
        answer: "Let's wrap up here and share the notes on Slack.",
        explanationKo: 'wrap up here로 회의를 닫고 후속 공유 채널을 명확히 안내합니다.'
      }
    }
  ],
  tutorScenario: {
    openingQuestionEn:
      "Hi! Thanks for hopping on today's weekly sync. Before we jump right in, could you share your screen with the Q3 draft? Oh—wait, I think you're breaking up a little bit!",
    openingQuestionKo:
      '안녕하세요! 오늘 주간 싱크에 접속해 주셔서 감사합니다. 바로 시작하기 전에 3분기 초안 화면 공유해 주실 수 있을까요? 어, 잠깐만요, 목소리가 조금 끊기시는 것 같아요! (카메라를 끄거나 양해를 구하며 화면 공유를 확인해 보세요.)',
    followUpQuestionEn:
      'Much clearer now, and yes, I can see your screen loud and clear! Go ahead and walk me through the main highlights whenever you are ready.',
    followUpQuestionKo:
      '이제 훨씬 선명하게 들리고 화면도 잘 보입니다! 준비되시면 핵심 내용을 차근차근 설명해 주세요.',
    recommendedChunks: [
      'Bear with me for a second',
      'switch off my camera',
      'share my screen',
      'can you see it clearly?',
      'walk you through'
    ],
    modelAnswerEn:
      "Thanks for letting me know! Let me switch off my camera to fix the lag—bear with me for a second while I share my screen. Can you see the Q3 draft clearly now?"
  }
};
