import type { FoundationUnit } from '../types/academy.ts';

export const FOUNDATION_UNITS: FoundationUnit[] = [
  // =========================================================================
  // F01: 자기소개 & be동사 (I am / You are / He is)
  // =========================================================================
  {
    id: 'f01',
    unitNumber: 1,
    badge: 'UNIT 01 · A1',
    titleKo: '자기소개 & be동사',
    subtitleKo: 'I am / You are / He is — 영어 어순의 첫 단추 "=" 연결법',
    corePatternEn: 'Subject + am / is / are + Name / Role / Feeling',
    koreanOrderDemo: ['나는', '학생', '이다', '서울 출신인'],
    englishOrderDemo: [
      { text: 'I', role: 'S', labelKo: '주어 (나는)' },
      { text: 'am', role: 'V', labelKo: 'be동사 (~이다)' },
      { text: 'a student', role: 'O', labelKo: '보어 (학생)' },
      { text: 'from Seoul.', role: 'M', labelKo: '출신 (서울 출신)' }
    ],
    koreanBridgeTip:
      '한국어는 "~이다"가 문장 맨 끝에 나오지만, 영어는 주어 바로 뒤에 be동사(= 이콜 기호!)를 먼저 딱 세웁니다. I는 am, 한 명(He/She/It)은 is, 너와 여럿(You/We/They)은 are — 이 3가지 짝꿍만 잡으면 자기소개가 바로 트입니다.',
    sentences: [
      {
        id: 'f01-s01',
        english: 'I am Minho from Korea.',
        literalOrderKo: '나는 / 이다 / 민호 / 한국 출신인.',
        naturalKo: '저는 한국에서 온 민호입니다.',
        patternHighlight: 'I am'
      },
      {
        id: 'f01-s02',
        english: 'You are very kind today.',
        literalOrderKo: '너는 / 이다 / 매우 친절한 / 오늘.',
        naturalKo: '너는 오늘 정말 친절하구나.',
        patternHighlight: 'You are'
      },
      {
        id: 'f01-s03',
        english: 'He is my best friend.',
        literalOrderKo: '그는 / 이다 / 나의 가장 친한 친구.',
        naturalKo: '그는 내 가장 친한 친구예요.',
        patternHighlight: 'He is'
      },
      {
        id: 'f01-s04',
        english: 'She is an elementary school teacher.',
        literalOrderKo: '그녀는 / 이다 / 한 명의 초등학교 선생님.',
        naturalKo: '그녀는 초등학교 선생님이에요.',
        patternHighlight: 'She is'
      },
      {
        id: 'f01-s05',
        english: 'It is a sunny morning.',
        literalOrderKo: '그것은 / 이다 / 화창한 아침.',
        naturalKo: '화창한 아침이에요.',
        patternHighlight: 'It is'
      },
      {
        id: 'f01-s06',
        english: 'We are ready for class.',
        literalOrderKo: '우리는 / 이다 / 준비된 / 수업을 위해.',
        naturalKo: '우리는 수업할 준비가 되었어요.',
        patternHighlight: 'We are'
      },
      {
        id: 'f01-s07',
        english: 'They are happy at the park.',
        literalOrderKo: '그들은 / 이다 / 행복한 / 공원에서.',
        naturalKo: '그들은 공원에서 행복해요.',
        patternHighlight: 'They are'
      },
      {
        id: 'f01-s08',
        english: 'My name is Jiyeon.',
        literalOrderKo: '나의 이름은 / 이다 / 지연.',
        naturalKo: '제 이름은 지연이에요.',
        patternHighlight: 'is'
      },
      {
        id: 'f01-s09',
        english: 'I am ten years old.',
        literalOrderKo: '나는 / 이다 / 열 살.',
        naturalKo: '저는 열 살이에요.',
        patternHighlight: 'I am'
      },
      {
        id: 'f01-s10',
        english: 'My sister is very tall.',
        literalOrderKo: '나의 여동생은 / 이다 / 매우 키가 큰.',
        naturalKo: '내 여동생은 키가 아주 커요.',
        patternHighlight: 'is'
      }
    ],
    builderPuzzles: [
      {
        id: 'f01-b01',
        promptKo: '나는 서울 출신의 학생이다.',
        targetEn: 'I am a student from Seoul.',
        blocks: [
          { text: 'I', role: 'S', labelKo: '주어' },
          { text: 'am', role: 'V', labelKo: 'be동사' },
          { text: 'a student', role: 'O', labelKo: '신분' },
          { text: 'from Seoul.', role: 'M', labelKo: '출신' }
        ],
        explanationKo: '영어는 [I(나는) + am(~이다)]를 먼저 붙이고 뒤에 a student와 출신(from Seoul)을 이어 붙입니다.'
      },
      {
        id: 'f01-b02',
        promptKo: '그는 내 가장 친한 친구이다.',
        targetEn: 'He is my best friend.',
        blocks: [
          { text: 'He', role: 'S', labelKo: '주어' },
          { text: 'is', role: 'V', labelKo: 'be동사' },
          { text: 'my', role: 'O', labelKo: '소유격' },
          { text: 'best friend.', role: 'O', labelKo: '명사' }
        ],
        explanationKo: '주어가 남자 한 명(He)이므로 be동사는 is를 쓰고, 바로 뒤에 my best friend를 놓습니다.'
      },
      {
        id: 'f01-b03',
        promptKo: '우리는 오늘 매우 행복하다.',
        targetEn: 'We are very happy today.',
        blocks: [
          { text: 'We', role: 'S', labelKo: '주어' },
          { text: 'are', role: 'V', labelKo: 'be동사' },
          { text: 'very happy', role: 'O', labelKo: '감정·상태' },
          { text: 'today.', role: 'M', labelKo: '시간' }
        ],
        explanationKo: '우리(We)는 복수이므로 are를 씁니다. 시간 표현(today)은 보통 문장 맨 끝에 놓으면 자연스럽습니다.'
      },
      {
        id: 'f01-b04',
        promptKo: '그녀는 친절한 영어 선생님이다.',
        targetEn: 'She is a kind English teacher.',
        blocks: [
          { text: 'She', role: 'S', labelKo: '주어' },
          { text: 'is', role: 'V', labelKo: 'be동사' },
          { text: 'a kind', role: 'O', labelKo: '관사+형용사' },
          { text: 'English teacher.', role: 'O', labelKo: '직업' }
        ],
        explanationKo: '셀 수 있는 직업 명사 앞에는 꼭 a/an을 붙입니다. She is + a kind English teacher 순서로 완성하세요.'
      },
      {
        id: 'f01-b05',
        promptKo: '그들은 지금 교실에 있다.',
        targetEn: 'They are in the classroom now.',
        blocks: [
          { text: 'They', role: 'S', labelKo: '주어' },
          { text: 'are', role: 'V', labelKo: 'be동사 (~에 있다)' },
          { text: 'in the classroom', role: 'M', labelKo: '장소' },
          { text: 'now.', role: 'M', labelKo: '시간' }
        ],
        explanationKo: 'be동사 뒤에 장소(in the classroom)가 오면 "~에 있다" 뜻이 됩니다. 장소 다음 시간(now) 순서를 기억하세요.'
      }
    ]
  },

  // =========================================================================
  // F02: 사물·위치 말하기 (This is / That is / There is·are)
  // =========================================================================
  {
    id: 'f02',
    unitNumber: 2,
    badge: 'UNIT 02 · A1',
    titleKo: '사물·위치 말하기',
    subtitleKo: 'This is / That is / There is·are — 눈앞의 세상 가리키기',
    corePatternEn: 'This / That is ~ · There is (1개) / There are (2개+)',
    koreanOrderDemo: ['책상 위에', '파란 가방 하나가', '있다'],
    englishOrderDemo: [
      { text: 'There', role: 'S', labelKo: '도입 신호' },
      { text: 'is', role: 'V', labelKo: '있다 (단수)' },
      { text: 'a blue bag', role: 'O', labelKo: '실제 주인공 (1개)' },
      { text: 'on the desk.', role: 'M', labelKo: '장소 (책상 위에)' }
    ],
    koreanBridgeTip:
      '손에 닿는 가까운 것은 This(이것), 멀리 손가락으로 가리키는 것은 That(저것)입니다. 그리고 "어디에 ~가 있다"를 말할 때는 한국어처럼 장소를 먼저 꺼내지 말고, 무조건 There is(1개) / There are(여럿)로 먼저 문을 여세요!',
    sentences: [
      {
        id: 'f02-s01',
        english: 'This is my new backpack.',
        literalOrderKo: '이것은 / 이다 / 나의 새 배낭.',
        naturalKo: '이것은 내 새 책가방이에요.',
        patternHighlight: 'This is'
      },
      {
        id: 'f02-s02',
        english: 'That is a big yellow bus.',
        literalOrderKo: '저것은 / 이다 / 큰 노란 버스 한 대.',
        naturalKo: '저것은 커다란 노란 버스예요.',
        patternHighlight: 'That is'
      },
      {
        id: 'f02-s03',
        english: 'These are my favorite storybooks.',
        literalOrderKo: '이것들은 / 이다 / 내가 가장 좋아하는 동화책들.',
        naturalKo: '이것들은 내가 제일 좋아하는 동화책들이에요.',
        patternHighlight: 'These are'
      },
      {
        id: 'f02-s04',
        english: 'Those are bright stars in the sky.',
        literalOrderKo: '저것들은 / 이다 / 밝은 별들 / 하늘에 있는.',
        naturalKo: '저것들은 하늘에 떠 있는 밝은 별들이에요.',
        patternHighlight: 'Those are'
      },
      {
        id: 'f02-s05',
        english: 'There is a cute cat under the chair.',
        literalOrderKo: '있다 / 귀여운 고양이 한 마리가 / 의자 아래에.',
        naturalKo: '의자 아래에 귀여운 고양이 한 마리가 있어요.',
        patternHighlight: 'There is'
      },
      {
        id: 'f02-s06',
        english: 'There is a clean park near my house.',
        literalOrderKo: '있다 / 깨끗한 공원 하나가 / 우리 집 근처에.',
        naturalKo: '우리 집 근처에 깨끗한 공원이 하나 있어요.',
        patternHighlight: 'There is'
      },
      {
        id: 'f02-s07',
        english: 'There are three apples on the table.',
        literalOrderKo: '있다 / 사과 세 개가 / 식탁 위에.',
        naturalKo: '식탁 위에 사과 세 개가 있어요.',
        patternHighlight: 'There are'
      },
      {
        id: 'f02-s08',
        english: 'There are many books in the library.',
        literalOrderKo: '있다 / 많은 책들이 / 도서관 안에.',
        naturalKo: '도서관 안에는 책이 아주 많아요.',
        patternHighlight: 'There are'
      },
      {
        id: 'f02-s09',
        english: 'This pencil case is very light.',
        literalOrderKo: '이 필통은 / 이다 / 매우 가벼운.',
        naturalKo: '이 필통은 아주 가벼워요.',
        patternHighlight: 'This'
      },
      {
        id: 'f02-s10',
        english: 'There are two windows in my room.',
        literalOrderKo: '있다 / 창문 두 개가 / 내 방 안에.',
        naturalKo: '내 방에는 창문이 두 개 있어요.',
        patternHighlight: 'There are'
      }
    ],
    builderPuzzles: [
      {
        id: 'f02-b01',
        promptKo: '이것은 내 새 필통이다.',
        targetEn: 'This is my new pencil case.',
        blocks: [
          { text: 'This', role: 'S', labelKo: '주어 (이것)' },
          { text: 'is', role: 'V', labelKo: 'be동사' },
          { text: 'my new', role: 'O', labelKo: '나의 새' },
          { text: 'pencil case.', role: 'O', labelKo: '필통' }
        ],
        explanationKo: '가까운 사물 하나를 소개할 때 [This is + 사물] 순서를 사용합니다.'
      },
      {
        id: 'f02-b02',
        promptKo: '저것은 우리 학교 도서관이다.',
        targetEn: 'That is our school library.',
        blocks: [
          { text: 'That', role: 'S', labelKo: '주어 (저것)' },
          { text: 'is', role: 'V', labelKo: 'be동사' },
          { text: 'our', role: 'O', labelKo: '우리의' },
          { text: 'school library.', role: 'O', labelKo: '학교 도서관' }
        ],
        explanationKo: '멀리 있는 건물을 가리킬 때는 That is로 시작합니다.'
      },
      {
        id: 'f02-b03',
        promptKo: '책상 위에 파란 가방 하나가 있다.',
        targetEn: 'There is a blue bag on the desk.',
        blocks: [
          { text: 'There', role: 'S', labelKo: '도입어' },
          { text: 'is', role: 'V', labelKo: '있다 (1개)' },
          { text: 'a blue bag', role: 'O', labelKo: '파란 가방' },
          { text: 'on the desk.', role: 'M', labelKo: '장소' }
        ],
        explanationKo: '가방이 한 개(a blue bag)이므로 There is를 먼저 두고 장소(on the desk)를 뒤에 붙입니다.'
      },
      {
        id: 'f02-b04',
        promptKo: '식탁 위에 사과 세 개가 있다.',
        targetEn: 'There are three apples on the table.',
        blocks: [
          { text: 'There', role: 'S', labelKo: '도입어' },
          { text: 'are', role: 'V', labelKo: '있다 (여럿)' },
          { text: 'three apples', role: 'O', labelKo: '사과 3개' },
          { text: 'on the table.', role: 'M', labelKo: '장소' }
        ],
        explanationKo: '사과가 세 개(three apples)로 복수이므로 There are를 골라야 합니다.'
      },
      {
        id: 'f02-b05',
        promptKo: '이것들은 아주 달콤한 딸기들이다.',
        targetEn: 'These are very sweet strawberries.',
        blocks: [
          { text: 'These', role: 'S', labelKo: '주어 (이것들)' },
          { text: 'are', role: 'V', labelKo: 'be동사' },
          { text: 'very sweet', role: 'O', labelKo: '아주 달콤한' },
          { text: 'strawberries.', role: 'O', labelKo: '딸기들' }
        ],
        explanationKo: '가까이 있는 사물이 여러 개일 때는 This 대신 These are를 씁니다.'
      }
    ]
  },

  // =========================================================================
  // F03: 좋아하는 것 & 일반동사 현재 (I like / She plays)
  // =========================================================================
  {
    id: 'f03',
    unitNumber: 3,
    badge: 'UNIT 03 · A1',
    titleKo: '좋아하는 것 & 일반동사 현재',
    subtitleKo: 'I like / She plays — 동작과 일상 습관 + 3인칭 단수 -s 법칙',
    corePatternEn: 'I / You / We / They + Verb  |  He / She / It + Verb-s',
    koreanOrderDemo: ['나는', '방과 후에', '축구를', '한다'],
    englishOrderDemo: [
      { text: 'I', role: 'S', labelKo: '주어 (나는)' },
      { text: 'play', role: 'V', labelKo: '동사 (한다)' },
      { text: 'soccer', role: 'O', labelKo: '목적어 (축구를)' },
      { text: 'after school.', role: 'M', labelKo: '시간 (방과 후에)' }
    ],
    koreanBridgeTip:
      'be동사(~이다) 말고 "먹다·좋아하다·놀다"처럼 움직임이 있는 단어는 모두 일반동사입니다! 한국어와 달리 [주어 → 동사 → 대상] 순서로 쏘고, 주어가 나·너 빼고 딱 한 명(He/She/It)일 때만 동사 꼬리에 -s/-es 리본을 달아 주세요.',
    sentences: [
      {
        id: 'f03-s01',
        english: 'I like warm chocolate milk.',
        literalOrderKo: '나는 / 좋아한다 / 따뜻한 초코 우유를.',
        naturalKo: '나는 따뜻한 초코 우유를 좋아해요.',
        patternHighlight: 'I like'
      },
      {
        id: 'f03-s02',
        english: 'We eat lunch at twelve.',
        literalOrderKo: '우리는 / 먹는다 / 점심을 / 12시에.',
        naturalKo: '우리는 12시에 점심을 먹어요.',
        patternHighlight: 'We eat'
      },
      {
        id: 'f03-s03',
        english: 'She plays the piano every day.',
        literalOrderKo: '그녀는 / 연주한다 / 피아노를 / 매일.',
        naturalKo: '그녀는 매일 피아노를 쳐요.',
        patternHighlight: 'She plays'
      },
      {
        id: 'f03-s04',
        english: 'He reads comic books after dinner.',
        literalOrderKo: '그는 / 읽는다 / 만화책들을 / 저녁 식사 후에.',
        naturalKo: '그는 저녁 식사 후에 만화책을 읽어요.',
        patternHighlight: 'He reads'
      },
      {
        id: 'f03-s05',
        english: 'My mom drinks coffee in the morning.',
        literalOrderKo: '우리 엄마는 / 마신다 / 커피를 / 아침에.',
        naturalKo: '우리 엄마는 아침에 커피를 마셔요.',
        patternHighlight: 'drinks'
      },
      {
        id: 'f03-s06',
        english: 'You have a very nice smile.',
        literalOrderKo: '너는 / 가지고 있다 / 아주 멋진 미소를.',
        naturalKo: '너는 정말 멋진 미소를 가지고 있어.',
        patternHighlight: 'You have'
      },
      {
        id: 'f03-s07',
        english: 'My brother has a fast bicycle.',
        literalOrderKo: '내 남동생은 / 가지고 있다 / 빠른 자전거 한 대를.',
        naturalKo: '내 남동생은 빠른 자전거를 가지고 있어요.',
        patternHighlight: 'has'
      },
      {
        id: 'f03-s08',
        english: 'They walk to school together.',
        literalOrderKo: '그들은 / 걷는다 / 학교로 / 함께.',
        naturalKo: '그들은 함께 걸어서 학교에 가요.',
        patternHighlight: 'They walk'
      },
      {
        id: 'f03-s09',
        english: 'The puppy loves soft toys.',
        literalOrderKo: '그 강아지는 / 사랑한다 / 부드러운 장난감들을.',
        naturalKo: '그 강아지는 부드러운 장난감을 무척 좋아해요.',
        patternHighlight: 'loves'
      },
      {
        id: 'f03-s10',
        english: 'He watches cartoons on weekends.',
        literalOrderKo: '그는 / 본다 / 만화영화를 / 주말마다.',
        naturalKo: '그는 주말마다 만화영화를 봐요.',
        patternHighlight: 'watches'
      }
    ],
    builderPuzzles: [
      {
        id: 'f03-b01',
        promptKo: '나는 방과 후에 축구를 한다.',
        targetEn: 'I play soccer after school.',
        blocks: [
          { text: 'I', role: 'S', labelKo: '주어' },
          { text: 'play', role: 'V', labelKo: '동사' },
          { text: 'soccer', role: 'O', labelKo: '목적어' },
          { text: 'after school.', role: 'M', labelKo: '시간' }
        ],
        explanationKo: '영어의 핵심 S-V-O-M 순서! [I(누가) + play(한다) + soccer(무엇을) + after school(언제)].'
      },
      {
        id: 'f03-b02',
        promptKo: '그녀는 매일 피아노를 친다.',
        targetEn: 'She plays the piano every day.',
        blocks: [
          { text: 'She', role: 'S', labelKo: '주어 (3인칭 단수)' },
          { text: 'plays', role: 'V', labelKo: '동사 + s' },
          { text: 'the piano', role: 'O', labelKo: '악기 목적어' },
          { text: 'every day.', role: 'M', labelKo: '빈도·시간' }
        ],
        explanationKo: '주어가 She(3인칭 단수)이므로 play 뒤에 -s를 붙여 plays가 됩니다. 악기 앞에는 the를 붙여요.'
      },
      {
        id: 'f03-b03',
        promptKo: '우리 엄마는 아침에 커피를 마신다.',
        targetEn: 'My mom drinks coffee in the morning.',
        blocks: [
          { text: 'My mom', role: 'S', labelKo: '주어 (She)' },
          { text: 'drinks', role: 'V', labelKo: '동사 + s' },
          { text: 'coffee', role: 'O', labelKo: '목적어' },
          { text: 'in the morning.', role: 'M', labelKo: '시간' }
        ],
        explanationKo: 'My mom은 She와 같은 3인칭 단수이므로 drink에 -s를 붙여 drinks로 씁니다.'
      },
      {
        id: 'f03-b04',
        promptKo: '그들은 매주 토요일에 도서관에 간다.',
        targetEn: 'They go to the library on Saturdays.',
        blocks: [
          { text: 'They', role: 'S', labelKo: '주어 (복수)' },
          { text: 'go', role: 'V', labelKo: '동사' },
          { text: 'to the library', role: 'M', labelKo: '장소' },
          { text: 'on Saturdays.', role: 'M', labelKo: '시간' }
        ],
        explanationKo: '주어가 They(복수)이므로 동사 원형 go를 그대로 쓰고, 장소(to the library) 뒤에 시간(on Saturdays)을 놓습니다.'
      },
      {
        id: 'f03-b05',
        promptKo: '그는 귀여운 갈색 강아지를 가지고 있다.',
        targetEn: 'He has a cute brown dog.',
        blocks: [
          { text: 'He', role: 'S', labelKo: '주어 (3인칭 단수)' },
          { text: 'has', role: 'V', labelKo: 'have의 3인칭형' },
          { text: 'a cute', role: 'O', labelKo: '관사+형용사' },
          { text: 'brown dog.', role: 'O', labelKo: '목적어' }
        ],
        explanationKo: 'have는 He/She/It 뒤에서 haves가 아니라 has로 변신하는 필수 불규칙 동사입니다.'
      }
    ]
  },

  // =========================================================================
  // F04: 부정문 & 의문문 전환 (don't / doesn't / isn't / Do you...?)
  // =========================================================================
  {
    id: 'f04',
    unitNumber: 4,
    badge: 'UNIT 04 · A1',
    titleKo: '부정문 & 의문문 전환',
    subtitleKo: "don't / doesn't / isn't / Do you...? — 아니라고 말하고 질문하기",
    corePatternEn: "don't / doesn't + 동사원형  |  Do / Does + 주어 + 동사원형?",
    koreanOrderDemo: ['너는', '매운 음식을', '좋아하니?'],
    englishOrderDemo: [
      { text: 'Do', role: 'V', labelKo: '질문 도우미' },
      { text: 'you', role: 'S', labelKo: '주어 (너는)' },
      { text: 'like', role: 'V', labelKo: '동사원형 (좋아하다)' },
      { text: 'spicy food?', role: 'O', labelKo: '목적어 (매운 음식)' }
    ],
    koreanBridgeTip:
      '영어의 질문·부정에는 두 팀이 있어요! ① be동사 팀은 스스로 힘이 세서 뒤에 not만 붙이고(isn\'t), 질문할 땐 주어 앞으로 직접 점프합니다(Are you~?). ② 일반동사 팀은 도우미 Do/Does를 불러옵니다! 특히 Does가 나타나면 동사 뒤의 -s를 자석처럼 쏙 빼앗아 가므로 본동사는 원래 모습으로 돌아갑니다.',
    sentences: [
      {
        id: 'f04-s01',
        english: 'I am not sleepy yet.',
        literalOrderKo: '나는 / 아니다 / 졸린 / 아직.',
        naturalKo: '나는 아직 졸리지 않아요.',
        patternHighlight: 'am not'
      },
      {
        id: 'f04-s02',
        english: "He isn't in his room right now.",
        literalOrderKo: '그는 / 있지 않다 / 그의 방 안에 / 지금 당장.',
        naturalKo: '그는 지금 자기 방에 없어요.',
        patternHighlight: "isn't"
      },
      {
        id: 'f04-s03',
        english: 'Are you hungry after swimming?',
        literalOrderKo: '~이니 / 너는 / 배고픈 / 수영 후에?',
        naturalKo: '수영하고 나서 배고프니?',
        patternHighlight: 'Are you'
      },
      {
        id: 'f04-s04',
        english: 'Is she your older sister?',
        literalOrderKo: '~이니 / 그녀는 / 너의 언니?',
        naturalKo: '그녀는 네 언니니?',
        patternHighlight: 'Is she'
      },
      {
        id: 'f04-s05',
        english: "I don't like bitter medicine.",
        literalOrderKo: '나는 / ~않는다 / 좋아하다 / 쓴 약을.',
        naturalKo: '나는 쓴 약을 좋아하지 않아요.',
        patternHighlight: "don't like"
      },
      {
        id: 'f04-s06',
        english: "We don't have school on Sundays.",
        literalOrderKo: '우리는 / ~않는다 / 가지다 / 수업을 / 일요일마다.',
        naturalKo: '우리는 일요일마다 학교에 가지 않아요.',
        patternHighlight: "don't have"
      },
      {
        id: 'f04-s07',
        english: "She doesn't eat spicy kimchi.",
        literalOrderKo: '그녀는 / ~않는다 / 먹다 / 매운 김치를.',
        naturalKo: '그녀는 매운 김치를 먹지 않아요.',
        patternHighlight: "doesn't eat"
      },
      {
        id: 'f04-s08',
        english: 'Do you play basketball at school?',
        literalOrderKo: '(질문) / 너는 / 하니 / 농구를 / 학교에서?',
        naturalKo: '너는 학교에서 농구를 하니?',
        patternHighlight: 'Do you'
      },
      {
        id: 'f04-s09',
        english: 'Does he live near the station?',
        literalOrderKo: '(질문) / 그는 / 사니 / 역 근처에?',
        naturalKo: '그는 역 근처에 사니?',
        patternHighlight: 'Does he'
      },
      {
        id: 'f04-s10',
        english: "My dog doesn't bark at strangers.",
        literalOrderKo: '내 강아지는 / ~않는다 / 짖다 / 낯선 사람에게.',
        naturalKo: '내 강아지는 낯선 사람에게 짖지 않아요.',
        patternHighlight: "doesn't bark"
      }
    ],
    builderPuzzles: [
      {
        id: 'f04-b01',
        promptKo: '너는 매운 음식을 좋아하니?',
        targetEn: 'Do you like spicy food?',
        blocks: [
          { text: 'Do', role: 'V', labelKo: '질문 도우미' },
          { text: 'you', role: 'S', labelKo: '주어' },
          { text: 'like', role: 'V', labelKo: '동사원형' },
          { text: 'spicy food?', role: 'O', labelKo: '목적어' }
        ],
        explanationKo: '일반동사 질문은 Do를 맨 앞에 세우고 [Do + 주어 + 동사원형 + 목적어?] 순서로 만듭니다.'
      },
      {
        id: 'f04-b02',
        promptKo: '그녀는 초록색 채소를 먹지 않는다.',
        targetEn: "She doesn't eat green vegetables.",
        blocks: [
          { text: 'She', role: 'S', labelKo: '주어' },
          { text: "doesn't", role: 'V', labelKo: '3인칭 부정 도우미' },
          { text: 'eat', role: 'V', labelKo: '동사원형' },
          { text: 'green vegetables.', role: 'O', labelKo: '목적어' }
        ],
        explanationKo: "doesn't가 이미 s 역할을 가져갔으므로 뒤에는 eats가 아니라 동사원형 eat를 씁니다!"
      },
      {
        id: 'f04-b03',
        promptKo: '그는 지금 피곤하지 않다.',
        targetEn: "He isn't tired right now.",
        blocks: [
          { text: 'He', role: 'S', labelKo: '주어' },
          { text: "isn't", role: 'V', labelKo: 'be동사 부정' },
          { text: 'tired', role: 'O', labelKo: '상태' },
          { text: 'right now.', role: 'M', labelKo: '시간' }
        ],
        explanationKo: "피곤한(tired)은 상태이므로 be동사 is 뒤에 not을 줄인 isn't를 바로 씁니다."
      },
      {
        id: 'f04-b04',
        promptKo: '그는 기타를 잘 치니?',
        targetEn: 'Does he play the guitar well?',
        blocks: [
          { text: 'Does', role: 'V', labelKo: '3인칭 질문 도우미' },
          { text: 'he', role: 'S', labelKo: '주어' },
          { text: 'play', role: 'V', labelKo: '동사원형' },
          { text: 'the guitar', role: 'O', labelKo: '목적어' },
          { text: 'well?', role: 'M', labelKo: '부사 (잘)' }
        ],
        explanationKo: 'Does가 맨 앞에서 3인칭 표시를 담당하므로 본동사는 play 원형으로 둡니다.'
      },
      {
        id: 'f04-b05',
        promptKo: '너는 시험 볼 준비가 되었니?',
        targetEn: 'Are you ready for the test?',
        blocks: [
          { text: 'Are', role: 'V', labelKo: 'be동사 점프!' },
          { text: 'you', role: 'S', labelKo: '주어' },
          { text: 'ready', role: 'O', labelKo: '상태' },
          { text: 'for the test?', role: 'M', labelKo: '대상' }
        ],
        explanationKo: 'You are ready를 질문으로 바꿀 때는 Do를 부르지 않고 be동사 Are만 맨 앞으로 점프시킵니다.'
      }
    ]
  },

  // =========================================================================
  // F05: 지금 하는 일 — 현재진행형 (am/is/are + -ing)
  // =========================================================================
  {
    id: 'f05',
    unitNumber: 5,
    badge: 'UNIT 05 · A1',
    titleKo: '지금 하는 일 — 현재진행형',
    subtitleKo: 'am / is / are + 동사-ing — 바로 이 순간 생중계하기',
    corePatternEn: 'Subject + am / is / are + Verb-ing (+ right now)',
    koreanOrderDemo: ['그녀는', '부엌에서', '저녁을', '요리하고 있다'],
    englishOrderDemo: [
      { text: 'She', role: 'S', labelKo: '주어 (그녀는)' },
      { text: 'is cooking', role: 'V', labelKo: '진행 동사 (요리 중)' },
      { text: 'dinner', role: 'O', labelKo: '목적어 (저녁을)' },
      { text: 'in the kitchen.', role: 'M', labelKo: '장소 (부엌에서)' }
    ],
    koreanBridgeTip:
      '평소 습관(I eat breakfast)과 "지금 딱 하고 있는 중"(I am eating breakfast)을 영어는 철저히 구분합니다! 한국인들이 가장 자주 빼먹는 실수가 be동사를 누락해 "I eating"이라고 하는 것인데, be동사와 -ing는 언제나 한 몸(짝꿍)으로 붙어 다녀야 합니다.',
    sentences: [
      {
        id: 'f05-s01',
        english: 'I am studying English right now.',
        literalOrderKo: '나는 / 공부하는 중이다 / 영어를 / 바로 지금.',
        naturalKo: '나는 바로 지금 영어를 공부하고 있어요.',
        patternHighlight: 'am studying'
      },
      {
        id: 'f05-s02',
        english: 'She is cooking warm soup in the kitchen.',
        literalOrderKo: '그녀는 / 요리하는 중이다 / 따뜻한 수프를 / 부엌에서.',
        naturalKo: '그녀는 부엌에서 따뜻한 수프를 끓이고 있어요.',
        patternHighlight: 'is cooking'
      },
      {
        id: 'f05-s03',
        english: 'He is riding his bike in the park.',
        literalOrderKo: '그는 / 타는 중이다 / 그의 자전거를 / 공원에서.',
        naturalKo: '그는 공원에서 자전거를 타고 있어요.',
        patternHighlight: 'is riding'
      },
      {
        id: 'f05-s04',
        english: 'They are playing hide-and-seek outside.',
        literalOrderKo: '그들은 / 노는 중이다 / 숨바꼭질을 / 밖에서.',
        naturalKo: '그들은 밖에서 숨바꼭질을 하고 있어요.',
        patternHighlight: 'are playing'
      },
      {
        id: 'f05-s05',
        english: 'Look! It is snowing outside.',
        literalOrderKo: '봐! / 눈이 내리는 중이다 / 밖에.',
        naturalKo: '봐! 밖에 눈이 내리고 있어.',
        patternHighlight: 'is snowing'
      },
      {
        id: 'f05-s06',
        english: 'We are waiting for the school bus.',
        literalOrderKo: '우리는 / 기다리는 중이다 / 스쿨버스를.',
        naturalKo: '우리는 스쿨버스를 기다리고 있어요.',
        patternHighlight: 'are waiting'
      },
      {
        id: 'f05-s07',
        english: 'The baby is sleeping peacefully now.',
        literalOrderKo: '그 아기는 / 자는 중이다 / 평화롭게 / 지금.',
        naturalKo: '아기가 지금 평화롭게 자고 있어요.',
        patternHighlight: 'is sleeping'
      },
      {
        id: 'f05-s08',
        english: 'I am listening to my favorite song.',
        literalOrderKo: '나는 / 듣는 중이다 / 내가 가장 좋아하는 노래를.',
        naturalKo: '나는 내가 가장 좋아하는 노래를 듣고 있어요.',
        patternHighlight: 'am listening'
      },
      {
        id: 'f05-s09',
        english: 'Are you watching a funny movie?',
        literalOrderKo: '~하고 있니 / 너는 / 보는 중 / 재미있는 영화를?',
        naturalKo: '너 지금 재미있는 영화 보고 있니?',
        patternHighlight: 'Are you watching'
      },
      {
        id: 'f05-s10',
        english: "He isn't playing games; he is drawing.",
        literalOrderKo: '그는 / 하지 않는 중이다 / 게임을; / 그는 / 그리는 중이다.',
        naturalKo: '그는 게임하고 있지 않아요; 그림을 그리고 있어요.',
        patternHighlight: 'is drawing'
      }
    ],
    builderPuzzles: [
      {
        id: 'f05-b01',
        promptKo: '나는 바로 지금 영어를 공부하고 있다.',
        targetEn: 'I am studying English right now.',
        blocks: [
          { text: 'I', role: 'S', labelKo: '주어' },
          { text: 'am studying', role: 'V', labelKo: 'be + -ing' },
          { text: 'English', role: 'O', labelKo: '목적어' },
          { text: 'right now.', role: 'M', labelKo: '시간' }
        ],
        explanationKo: '현재진행형은 반드시 [am/is/are + 동사-ing]가 한 세트로 움직입니다.'
      },
      {
        id: 'f05-b02',
        promptKo: '그녀는 부엌에서 저녁을 요리하고 있다.',
        targetEn: 'She is cooking dinner in the kitchen.',
        blocks: [
          { text: 'She', role: 'S', labelKo: '주어' },
          { text: 'is cooking', role: 'V', labelKo: '진행 동사' },
          { text: 'dinner', role: 'O', labelKo: '목적어' },
          { text: 'in the kitchen.', role: 'M', labelKo: '장소' }
        ],
        explanationKo: '주어(She) + 진행동사(is cooking) + 목적어(dinner) + 장소(in the kitchen) 순서를 익히세요.'
      },
      {
        id: 'f05-b03',
        promptKo: '아이들이 놀이터에서 뛰고 있다.',
        targetEn: 'The kids are running at the playground.',
        blocks: [
          { text: 'The kids', role: 'S', labelKo: '주어 (복수)' },
          { text: 'are running', role: 'V', labelKo: 'be + -ing' },
          { text: 'at the playground.', role: 'M', labelKo: '장소' }
        ],
        explanationKo: 'The kids는 복수이므로 are를 쓰고, run은 n을 한 번 더 써서 running이 됩니다.'
      },
      {
        id: 'f05-b04',
        promptKo: '너는 지금 숙제를 하고 있니?',
        targetEn: 'Are you doing your homework now?',
        blocks: [
          { text: 'Are', role: 'V', labelKo: 'be동사 점프' },
          { text: 'you', role: 'S', labelKo: '주어' },
          { text: 'doing', role: 'V', labelKo: '동사-ing' },
          { text: 'your homework', role: 'O', labelKo: '목적어' },
          { text: 'now?', role: 'M', labelKo: '시간' }
        ],
        explanationKo: '진행형 질문은 be동사 Are만 주어 앞으로 꺼내면 완성됩니다.'
      },
      {
        id: 'f05-b05',
        promptKo: '우리는 버스를 기다리고 있다.',
        targetEn: 'We are waiting for the bus.',
        blocks: [
          { text: 'We', role: 'S', labelKo: '주어' },
          { text: 'are waiting', role: 'V', labelKo: '진행 동사' },
          { text: 'for', role: 'M', labelKo: '짝꿍 전치사' },
          { text: 'the bus.', role: 'O', labelKo: '대상' }
        ],
        explanationKo: 'wait는 기다리는 대상 앞에 항상 for와 단짝(wait for ~)으로 쓰입니다.'
      }
    ]
  },

  // =========================================================================
  // F06: 어제 있었던 일 — 과거시제 (went / ate / saw / played / Did you...?)
  // =========================================================================
  {
    id: 'f06',
    unitNumber: 6,
    badge: 'UNIT 06 · A1',
    titleKo: '어제 있었던 일 — 과거시제',
    subtitleKo: 'went / ate / saw / played / Did you...? — 지나간 이야기 들려주기',
    corePatternEn: 'Verb-ed / Irregular Past  |  Did + Subject + Verb원형?',
    koreanOrderDemo: ['나는', '어제', '동물원에', '갔다'],
    englishOrderDemo: [
      { text: 'I', role: 'S', labelKo: '주어 (나는)' },
      { text: 'went', role: 'V', labelKo: '과거동사 (갔다)' },
      { text: 'to the zoo', role: 'M', labelKo: '장소 (동물원에)' },
      { text: 'yesterday.', role: 'M', labelKo: '과거 시간 (어제)' }
    ],
    koreanBridgeTip:
      '이미 끝난 과거를 말할 때 규칙 동사는 꼬리에 -ed(played, watched)를 붙이고, 자주 쓰는 단골 동사들은 모양이 통째로 변신합니다(go→went, eat→ate, see→saw). 그리고 과거 질문·부정에선 Did / didn\'t가 과거 시간표를 다 가져가므로 뒤의 동사는 다시 원형으로 돌아옵니다!',
    sentences: [
      {
        id: 'f06-s01',
        english: 'I went to the zoo yesterday.',
        literalOrderKo: '나는 / 갔다 / 동물원에 / 어제.',
        naturalKo: '나는 어제 동물원에 갔어요.',
        patternHighlight: 'went'
      },
      {
        id: 'f06-s02',
        english: 'We ate delicious pizza last night.',
        literalOrderKo: '우리는 / 먹었다 / 맛있는 피자를 / 어젯밤에.',
        naturalKo: '우리는 어젯밤에 맛있는 피자를 먹었어요.',
        patternHighlight: 'ate'
      },
      {
        id: 'f06-s03',
        english: 'She saw a bright rainbow after rain.',
        literalOrderKo: '그녀는 / 보았다 / 밝은 무지개를 / 비가 온 뒤에.',
        naturalKo: '그녀는 비가 온 뒤에 선명한 무지개를 보았어요.',
        patternHighlight: 'saw'
      },
      {
        id: 'f06-s04',
        english: 'He played baseball with his dad.',
        literalOrderKo: '그는 / 했다 / 야구를 / 그의 아빠와 함께.',
        naturalKo: '그는 아빠와 함께 야구를 했어요.',
        patternHighlight: 'played'
      },
      {
        id: 'f06-s05',
        english: 'Yesterday was a very fun day.',
        literalOrderKo: '어제는 / 이었다 / 아주 재미있는 날.',
        naturalKo: '어제는 정말 신나는 날이었어요.',
        patternHighlight: 'was'
      },
      {
        id: 'f06-s06',
        english: 'They watched an animation movie together.',
        literalOrderKo: '그들은 / 보았다 / 애니메이션 영화 한 편을 / 함께.',
        naturalKo: '그들은 함께 애니메이션 영화를 봤어요.',
        patternHighlight: 'watched'
      },
      {
        id: 'f06-s07',
        english: 'I finished my homework before dinner.',
        literalOrderKo: '나는 / 끝냈다 / 내 숙제를 / 저녁 식사 전에.',
        naturalKo: '나는 저녁 먹기 전에 숙제를 끝냈어요.',
        patternHighlight: 'finished'
      },
      {
        id: 'f06-s08',
        english: 'Did you sleep well last night?',
        literalOrderKo: '(과거질문) / 너는 / 잤니 / 잘 / 어젯밤에?',
        naturalKo: '어젯밤에 푹 잤니?',
        patternHighlight: 'Did you sleep'
      },
      {
        id: 'f06-s09',
        english: "I didn't buy any snacks today.",
        literalOrderKo: '나는 / ~하지 않았다 / 사다 / 어떤 간식도 / 오늘.',
        naturalKo: '나는 오늘 간식을 하나도 안 샀어요.',
        patternHighlight: "didn't buy"
      },
      {
        id: 'f06-s10',
        english: 'We visited our grandparents last Sunday.',
        literalOrderKo: '우리는 / 방문했다 / 우리 조부모님을 / 지난 일요일에.',
        naturalKo: '우리는 지난 일요일에 할머니·할아버지 댁에 다녀왔어요.',
        patternHighlight: 'visited'
      }
    ],
    builderPuzzles: [
      {
        id: 'f06-b01',
        promptKo: '나는 어제 동물원에 갔다.',
        targetEn: 'I went to the zoo yesterday.',
        blocks: [
          { text: 'I', role: 'S', labelKo: '주어' },
          { text: 'went', role: 'V', labelKo: 'go의 과거' },
          { text: 'to the zoo', role: 'M', labelKo: '장소' },
          { text: 'yesterday.', role: 'M', labelKo: '과거 시간' }
        ],
        explanationKo: 'go의 과거형은 goed가 아니라 불규칙 과거형 went입니다!'
      },
      {
        id: 'f06-b02',
        promptKo: '우리는 어젯밤에 피자를 먹었다.',
        targetEn: 'We ate pizza last night.',
        blocks: [
          { text: 'We', role: 'S', labelKo: '주어' },
          { text: 'ate', role: 'V', labelKo: 'eat의 과거' },
          { text: 'pizza', role: 'O', labelKo: '목적어' },
          { text: 'last night.', role: 'M', labelKo: '과거 시간' }
        ],
        explanationKo: 'eat의 과거형은 ate(/eɪt/)입니다. 시간 표현(last night)은 문장 끝에 놓습니다.'
      },
      {
        id: 'f06-b03',
        promptKo: '그녀는 공원에서 귀여운 강아지를 보았다.',
        targetEn: 'She saw a cute puppy at the park.',
        blocks: [
          { text: 'She', role: 'S', labelKo: '주어' },
          { text: 'saw', role: 'V', labelKo: 'see의 과거' },
          { text: 'a cute puppy', role: 'O', labelKo: '목적어' },
          { text: 'at the park.', role: 'M', labelKo: '장소' }
        ],
        explanationKo: 'see의 과거형 saw를 주어 바로 뒤에 두고, 목적어와 장소를 차례대로 연결하세요.'
      },
      {
        id: 'f06-b04',
        promptKo: '너는 어제 축구를 했니?',
        targetEn: 'Did you play soccer yesterday?',
        blocks: [
          { text: 'Did', role: 'V', labelKo: '과거 질문 도우미' },
          { text: 'you', role: 'S', labelKo: '주어' },
          { text: 'play', role: 'V', labelKo: '동사원형!' },
          { text: 'soccer', role: 'O', labelKo: '목적어' },
          { text: 'yesterday?', role: 'M', labelKo: '과거 시간' }
        ],
        explanationKo: '맨 앞의 Did가 이미 과거를 말해 주므로 played가 아니라 동사원형 play를 씁니다.'
      },
      {
        id: 'f06-b05',
        promptKo: '그는 어젯밤에 TV를 보지 않았다.',
        targetEn: "He didn't watch TV last night.",
        blocks: [
          { text: 'He', role: 'S', labelKo: '주어' },
          { text: "didn't", role: 'V', labelKo: '과거 부정 도우미' },
          { text: 'watch', role: 'V', labelKo: '동사원형!' },
          { text: 'TV', role: 'O', labelKo: '목적어' },
          { text: 'last night.', role: 'M', labelKo: '과거 시간' }
        ],
        explanationKo: "과거 부정문은 주어 상관없이 모두 [didn't + 동사원형]으로 간단하게 만듭니다."
      }
    ]
  },

  // =========================================================================
  // F07: 미래 계획 & 조동사 기초 (will / be going to / can / must)
  // =========================================================================
  {
    id: 'f07',
    unitNumber: 7,
    badge: 'UNIT 07 · A1',
    titleKo: '미래 계획 & 조동사 기초',
    subtitleKo: 'will / be going to / can / must — 능력·약속·계획 말하기',
    corePatternEn: 'Subject + will / can / must + 동사원형  |  be going to + 동사원형',
    koreanOrderDemo: ['나는', '내일', '너를', '도울 것이다'],
    englishOrderDemo: [
      { text: 'I', role: 'S', labelKo: '주어 (나는)' },
      { text: 'will help', role: 'V', labelKo: '조동사+원형 (도울게)' },
      { text: 'you', role: 'O', labelKo: '목적어 (너를)' },
      { text: 'tomorrow.', role: 'M', labelKo: '미래 시간 (내일)' }
    ],
    koreanBridgeTip:
      '조동사(will ~할 거야, can ~할 수 있어, must 꼭 ~해야 해)는 동사 앞에 붙어 화자의 마음을 더해 주는 "마법 헬멧"입니다. 조동사가 나오면 주어가 He/She여도 뒤의 동사는 절대 변하지 않고 무조건 100% 원형! 미리 정해 둔 계획은 be going to로 표현하면 더욱 원어민답습니다.',
    sentences: [
      {
        id: 'f07-s01',
        english: 'I will help you with your bag.',
        literalOrderKo: '나는 / 도울 것이다 / 너를 / 네 가방과 함께.',
        naturalKo: '네 가방 드는 걸 내가 도와줄게.',
        patternHighlight: 'will help'
      },
      {
        id: 'f07-s02',
        english: 'It will be warm tomorrow afternoon.',
        literalOrderKo: '날씨는 / ~일 것이다 / 따뜻한 / 내일 오후에.',
        naturalKo: '내일 오후에는 따뜻할 거예요.',
        patternHighlight: 'will be'
      },
      {
        id: 'f07-s03',
        english: 'I am going to visit Busan this weekend.',
        literalOrderKo: '나는 / ~할 예정이다 / 방문하다 / 부산을 / 이번 주말에.',
        naturalKo: '나는 이번 주말에 부산에 갈 예정이에요.',
        patternHighlight: 'am going to'
      },
      {
        id: 'f07-s04',
        english: 'She is going to bake cookies tonight.',
        literalOrderKo: '그녀는 / ~할 예정이다 / 굽다 / 쿠키를 / 오늘 밤에.',
        naturalKo: '그녀는 오늘 밤에 쿠키를 구울 계획이에요.',
        patternHighlight: 'is going to'
      },
      {
        id: 'f07-s05',
        english: 'I can swim very fast.',
        literalOrderKo: '나는 / 수영할 수 있다 / 아주 빠르게.',
        naturalKo: '나는 수영을 아주 빠르게 할 수 있어요.',
        patternHighlight: 'can swim'
      },
      {
        id: 'f07-s06',
        english: 'He can speak both Korean and English.',
        literalOrderKo: '그는 / 말할 수 있다 / 한국어와 영어 둘 다를.',
        naturalKo: '그는 한국어와 영어를 둘 다 말할 수 있어요.',
        patternHighlight: 'can speak'
      },
      {
        id: 'f07-s07',
        english: 'Can you open the window, please?',
        literalOrderKo: '~해 줄 수 있니 / 너는 / 열다 / 창문을, / 제발?',
        naturalKo: '창문 좀 열어 주실 수 있나요?',
        patternHighlight: 'Can you'
      },
      {
        id: 'f07-s08',
        english: 'We must wear seatbelts in the car.',
        literalOrderKo: '우리는 / 꼭 매야 한다 / 안전벨트를 / 차 안에서.',
        naturalKo: '우리는 차 안에서 반드시 안전벨트를 매야 해요.',
        patternHighlight: 'must wear'
      },
      {
        id: 'f07-s09',
        english: 'You must wash your hands before eating.',
        literalOrderKo: '너는 / 꼭 씻어야 한다 / 네 손을 / 먹기 전에.',
        naturalKo: '밥 먹기 전에 꼭 손을 씻어야 해요.',
        patternHighlight: 'must wash'
      },
      {
        id: 'f07-s10',
        english: "We won't be late for school.",
        literalOrderKo: '우리는 / ~하지 않을 것이다 / 늦다 / 학교에.',
        naturalKo: '우리는 학교에 지각하지 않을 거예요.',
        patternHighlight: "won't be"
      }
    ],
    builderPuzzles: [
      {
        id: 'f07-b01',
        promptKo: '나는 내일 너를 도울 것이다.',
        targetEn: 'I will help you tomorrow.',
        blocks: [
          { text: 'I', role: 'S', labelKo: '주어' },
          { text: 'will help', role: 'V', labelKo: '조동사+동사원형' },
          { text: 'you', role: 'O', labelKo: '목적어' },
          { text: 'tomorrow.', role: 'M', labelKo: '미래 시간' }
        ],
        explanationKo: '즉석 약속이나 미래 의지는 [will + 동사원형]으로 간단히 말합니다.'
      },
      {
        id: 'f07-b02',
        promptKo: '나는 이번 주말에 영화를 볼 예정이다.',
        targetEn: 'I am going to watch a movie this weekend.',
        blocks: [
          { text: 'I', role: 'S', labelKo: '주어' },
          { text: 'am going to', role: 'V', labelKo: '미래 계획 (~할 예정)' },
          { text: 'watch', role: 'V', labelKo: '동사원형' },
          { text: 'a movie', role: 'O', labelKo: '목적어' },
          { text: 'this weekend.', role: 'M', labelKo: '시간' }
        ],
        explanationKo: '이미 마음먹은 계획은 [be going to + 동사원형]이 가장 자연스럽습니다.'
      },
      {
        id: 'f07-b03',
        promptKo: '그녀는 자전거를 잘 탈 수 있다.',
        targetEn: 'She can ride a bike well.',
        blocks: [
          { text: 'She', role: 'S', labelKo: '주어' },
          { text: 'can ride', role: 'V', labelKo: '조동사+동사원형' },
          { text: 'a bike', role: 'O', labelKo: '목적어' },
          { text: 'well.', role: 'M', labelKo: '부사' }
        ],
        explanationKo: '주어가 She지만 조동사 can이 있으므로 rides가 아니라 원형 ride를 씁니다.'
      },
      {
        id: 'f07-b04',
        promptKo: '우리는 교실 규칙을 꼭 지켜야 한다.',
        targetEn: 'We must follow the classroom rules.',
        blocks: [
          { text: 'We', role: 'S', labelKo: '주어' },
          { text: 'must follow', role: 'V', labelKo: '강한 의무 (~해야 한다)' },
          { text: 'the classroom rules.', role: 'O', labelKo: '목적어' }
        ],
        explanationKo: '꼭 지켜야 하는 안전·규칙에는 [must + 동사원형]을 사용합니다.'
      },
      {
        id: 'f07-b05',
        promptKo: '너는 내일 나를 도와줄 수 있니?',
        targetEn: 'Can you help me tomorrow?',
        blocks: [
          { text: 'Can', role: 'V', labelKo: '조동사 점프!' },
          { text: 'you', role: 'S', labelKo: '주어' },
          { text: 'help', role: 'V', labelKo: '동사원형' },
          { text: 'me', role: 'O', labelKo: '목적어' },
          { text: 'tomorrow?', role: 'M', labelKo: '시간' }
        ],
        explanationKo: '조동사(Can/Will) 질문은 Do를 부르지 않고 조동사만 맨 앞으로 점프시킵니다.'
      }
    ]
  },

  // =========================================================================
  // F08: 6하원칙 의문사 마스터 (Who / What / Where / When / Why / How)
  // =========================================================================
  {
    id: 'f08',
    unitNumber: 8,
    badge: 'UNIT 08 · A1',
    titleKo: '6하원칙 의문사 마스터',
    subtitleKo: 'Who / What / Where / When / Why / How — 궁금한 것 먼저 던지기',
    corePatternEn: 'Wh-word + be / do / does / did + Subject (+ Verb)?',
    koreanOrderDemo: ['너는', '주말에', '어디에', '가니?'],
    englishOrderDemo: [
      { text: 'Where', role: 'M', labelKo: '의문사 맨 앞! (어디)' },
      { text: 'do', role: 'V', labelKo: '질문 도우미' },
      { text: 'you', role: 'S', labelKo: '주어 (너는)' },
      { text: 'go', role: 'V', labelKo: '동사 (가니)' },
      { text: 'on weekends?', role: 'M', labelKo: '시간 (주말에)' }
    ],
    koreanBridgeTip:
      '한국어는 "너 어디 가?"처럼 의문사가 문장 중간에 숨어 있지만, 영어는 가장 궁금한 핵심 질문 단어(Who·What·Where·When·Why·How)를 무조건 문장 맨 앞 1번 자리에 던집니다! 그리고 그 바로 뒤에 [be동사 또는 do/does/did + 주어] 질문 틀을 붙이면 어떤 질문이든 완성됩니다.',
    sentences: [
      {
        id: 'f08-s01',
        english: 'Who is that boy over there?',
        literalOrderKo: '누구 / 이니 / 저 소년은 / 저쪽에 있는?',
        naturalKo: '저쪽에 있는 저 남자아이는 누구니?',
        patternHighlight: 'Who is'
      },
      {
        id: 'f08-s02',
        english: 'What is your favorite school subject?',
        literalOrderKo: '무엇 / 이니 / 네가 가장 좋아하는 학교 과목은?',
        naturalKo: '네가 제일 좋아하는 학교 과목은 무엇이니?',
        patternHighlight: 'What is'
      },
      {
        id: 'f08-s03',
        english: 'What do you eat for breakfast?',
        literalOrderKo: '무엇을 / (질문) / 너는 / 먹니 / 아침 식사로?',
        naturalKo: '너는 아침으로 무엇을 먹니?',
        patternHighlight: 'What do'
      },
      {
        id: 'f08-s04',
        english: 'Where is the nearest restroom?',
        literalOrderKo: '어디에 / 있니 / 가장 가까운 화장실은?',
        naturalKo: '가장 가까운 화장실이 어디에 있나요?',
        patternHighlight: 'Where is'
      },
      {
        id: 'f08-s05',
        english: 'Where do you live in Seoul?',
        literalOrderKo: '어디에 / (질문) / 너는 / 사니 / 서울에서?',
        naturalKo: '너는 서울 어디에 사니?',
        patternHighlight: 'Where do'
      },
      {
        id: 'f08-s06',
        english: 'When is your birthday?',
        literalOrderKo: '언제 / 이니 / 너의 생일은?',
        naturalKo: '네 생일은 언제니?',
        patternHighlight: 'When is'
      },
      {
        id: 'f08-s07',
        english: 'When does the first class start?',
        literalOrderKo: '언제 / (질문) / 첫 번째 수업은 / 시작하니?',
        naturalKo: '1교시 수업은 언제 시작하나요?',
        patternHighlight: 'When does'
      },
      {
        id: 'f08-s08',
        english: 'Why are you smiling so brightly?',
        literalOrderKo: '왜 / ~하고 있니 / 너는 / 미소 짓는 중 / 그렇게 환하게?',
        naturalKo: '왜 그렇게 환하게 웃고 있니?',
        patternHighlight: 'Why are'
      },
      {
        id: 'f08-s09',
        english: 'How do you go to school?',
        literalOrderKo: '어떻게 / (질문) / 너는 / 가니 / 학교에?',
        naturalKo: '너는 학교에 어떻게 가니?',
        patternHighlight: 'How do'
      },
      {
        id: 'f08-s10',
        english: 'How much is this cute notebook?',
        literalOrderKo: '얼마 / 이니 / 이 귀여운 공책은?',
        naturalKo: '이 귀여운 공책은 얼마인가요?',
        patternHighlight: 'How much'
      }
    ],
    builderPuzzles: [
      {
        id: 'f08-b01',
        promptKo: '너는 아침으로 무엇을 먹니?',
        targetEn: 'What do you eat for breakfast?',
        blocks: [
          { text: 'What', role: 'O', labelKo: '의문사 (무엇을)' },
          { text: 'do', role: 'V', labelKo: '질문 도우미' },
          { text: 'you', role: 'S', labelKo: '주어' },
          { text: 'eat', role: 'V', labelKo: '동사원형' },
          { text: 'for breakfast?', role: 'M', labelKo: '아침으로' }
        ],
        explanationKo: '가장 궁금한 What을 맨 앞에 두고 [do + you + eat] 일반동사 질문 어순을 붙입니다.'
      },
      {
        id: 'f08-b02',
        promptKo: '가장 가까운 지하철역이 어디 있나요?',
        targetEn: 'Where is the nearest subway station?',
        blocks: [
          { text: 'Where', role: 'M', labelKo: '의문사 (어디)' },
          { text: 'is', role: 'V', labelKo: 'be동사' },
          { text: 'the nearest', role: 'S', labelKo: '가장 가까운' },
          { text: 'subway station?', role: 'S', labelKo: '지하철역' }
        ],
        explanationKo: '장소를 물을 땐 [Where + is + 찾고 싶은 장소?] 덩어리로 바로 꺼내 쓰세요.'
      },
      {
        id: 'f08-b03',
        promptKo: '네 생일은 언제니?',
        targetEn: 'When is your birthday?',
        blocks: [
          { text: 'When', role: 'M', labelKo: '의문사 (언제)' },
          { text: 'is', role: 'V', labelKo: 'be동사' },
          { text: 'your', role: 'S', labelKo: '너의' },
          { text: 'birthday?', role: 'S', labelKo: '생일' }
        ],
        explanationKo: 'Your birthday is ~ 를 질문으로 바꿀 때 When을 맨 앞에 두고 is와 주어 자리를 바꿉니다.'
      },
      {
        id: 'f08-b04',
        promptKo: '너는 왜 영어를 공부하니?',
        targetEn: 'Why do you study English?',
        blocks: [
          { text: 'Why', role: 'M', labelKo: '의문사 (왜)' },
          { text: 'do', role: 'V', labelKo: '질문 도우미' },
          { text: 'you', role: 'S', labelKo: '주어' },
          { text: 'study', role: 'V', labelKo: '동사원형' },
          { text: 'English?', role: 'O', labelKo: '목적어' }
        ],
        explanationKo: '이유를 묻는 Why도 무조건 1번 자리! 뒤에는 [do + 주어 + 동사원형]이 따라옵니다.'
      },
      {
        id: 'f08-b05',
        promptKo: '너는 매일 학교에 어떻게 가니?',
        targetEn: 'How do you go to school every day?',
        blocks: [
          { text: 'How', role: 'M', labelKo: '의문사 (어떻게)' },
          { text: 'do', role: 'V', labelKo: '질문 도우미' },
          { text: 'you', role: 'S', labelKo: '주어' },
          { text: 'go to school', role: 'V', labelKo: '학교에 가다' },
          { text: 'every day?', role: 'M', labelKo: '시간' }
        ],
        explanationKo: '교통수단·방법을 물을 때는 How로 시작해 [How + do + you + go to school?]로 묻습니다.'
      }
    ]
  },

  // =========================================================================
  // F09: 시간·장소 전치사 직관 그림 (in / on / at / under / next to / between)
  // =========================================================================
  {
    id: 'f09',
    unitNumber: 9,
    badge: 'UNIT 09 · A1',
    titleKo: '시간·장소 전치사 직관 그림',
    subtitleKo: 'in / on / at / under / next to / between — 공간과 시간의 3D 지도',
    corePatternEn: 'in (큰 공간·월·연도) · on (표면·요일·날짜) · at (콕 찍은 점·시각)',
    koreanOrderDemo: ['그 고양이는', '식탁', '아래에서', '자고 있다'],
    englishOrderDemo: [
      { text: 'The cat', role: 'S', labelKo: '주어 (그 고양이는)' },
      { text: 'is sleeping', role: 'V', labelKo: '동사 (자고 있다)' },
      { text: 'under', role: 'M', labelKo: '전치사 먼저! (아래에)' },
      { text: 'the table.', role: 'M', labelKo: '기준 명사 (식탁)' }
    ],
    koreanBridgeTip:
      '한국어는 "상자 안에"처럼 위치 말이 명사 뒤에 붙지만, 영어 전치사(前置詞)는 이름 그대로 명사 "앞"에 먼저 둡니다(in the box)! 그림으로 외우세요: in = 넓은 상자·월·계절 안, on = 면에 딱 붙음·요일·특정 날짜, at = 지도에 핀으로 콕 찍은 지점·정확한 시각!',
    sentences: [
      {
        id: 'f09-s01',
        english: 'My keys are in my pocket.',
        literalOrderKo: '내 열쇠들은 / 있다 / ~안에 / 내 주머니.',
        naturalKo: '내 열쇠들은 주머니 안에 있어요.',
        patternHighlight: 'in'
      },
      {
        id: 'f09-s02',
        english: 'The picture hangs on the wall.',
        literalOrderKo: '그 그림은 / 걸려 있다 / ~표면 위에 / 벽.',
        naturalKo: '그 그림이 벽에 걸려 있어요.',
        patternHighlight: 'on'
      },
      {
        id: 'f09-s03',
        english: 'Let us meet at the bus stop.',
        literalOrderKo: '우리 만나자 / ~지점에서 / 버스 정류장.',
        naturalKo: '우리 버스 정류장에서 만나자.',
        patternHighlight: 'at'
      },
      {
        id: 'f09-s04',
        english: 'My shoes are under the bed.',
        literalOrderKo: '내 신발들은 / 있다 / ~아래에 / 침대.',
        naturalKo: '내 신발이 침대 아래에 있어요.',
        patternHighlight: 'under'
      },
      {
        id: 'f09-s05',
        english: 'Minji sits next to me in class.',
        literalOrderKo: '민지는 / 앉는다 / ~바로 옆에 / 나 / 수업 시간에.',
        naturalKo: '민지는 수업 시간에 내 바로 옆에 앉아요.',
        patternHighlight: 'next to'
      },
      {
        id: 'f09-s06',
        english: 'The bakery is between the bank and the cafe.',
        literalOrderKo: '그 빵집은 / 있다 / ~사이에 / 은행과 카페.',
        naturalKo: '그 빵집은 은행과 카페 사이에 있어요.',
        patternHighlight: 'between'
      },
      {
        id: 'f09-s07',
        english: 'We eat breakfast at seven thirty.',
        literalOrderKo: '우리는 / 먹는다 / 아침을 / ~정각에 / 7시 30분.',
        naturalKo: '우리는 7시 30분에 아침을 먹어요.',
        patternHighlight: 'at'
      },
      {
        id: 'f09-s08',
        english: 'We have art class on Fridays.',
        literalOrderKo: '우리는 / 가진다 / 미술 수업을 / ~요일에 / 금요일마다.',
        naturalKo: '우리는 금요일마다 미술 수업이 있어요.',
        patternHighlight: 'on'
      },
      {
        id: 'f09-s09',
        english: 'Cherry blossoms bloom in spring.',
        literalOrderKo: '벚꽃들은 / 핀다 / ~안에 / 봄.',
        naturalKo: '봄에는 벚꽃이 피어요.',
        patternHighlight: 'in'
      },
      {
        id: 'f09-s10',
        english: 'A red car is parked in front of the house.',
        literalOrderKo: '빨간 차 한 대가 / 주차되어 있다 / ~앞에 / 그 집.',
        naturalKo: '빨간 차 한 대가 집 앞에 주차되어 있어요.',
        patternHighlight: 'in front of'
      }
    ],
    builderPuzzles: [
      {
        id: 'f09-b01',
        promptKo: '그 고양이는 식탁 아래에서 자고 있다.',
        targetEn: 'The cat is sleeping under the table.',
        blocks: [
          { text: 'The cat', role: 'S', labelKo: '주어' },
          { text: 'is sleeping', role: 'V', labelKo: '동사' },
          { text: 'under', role: 'M', labelKo: '전치사 (~아래에)' },
          { text: 'the table.', role: 'M', labelKo: '장소 명사' }
        ],
        explanationKo: '전치사 under가 명사 the table보다 반드시 앞에 와야 합니다.'
      },
      {
        id: 'f09-b02',
        promptKo: '도서관은 은행과 카페 사이에 있다.',
        targetEn: 'The library is between the bank and the cafe.',
        blocks: [
          { text: 'The library', role: 'S', labelKo: '주어' },
          { text: 'is', role: 'V', labelKo: 'be동사' },
          { text: 'between', role: 'M', labelKo: '전치사 (~사이에)' },
          { text: 'the bank', role: 'M', labelKo: '장소 A' },
          { text: 'and the cafe.', role: 'M', labelKo: '장소 B' }
        ],
        explanationKo: '두 대상 사이는 [between A and B] 공식으로 깔끔하게 연결합니다.'
      },
      {
        id: 'f09-b03',
        promptKo: '학교는 9시에 시작한다.',
        targetEn: 'School starts at nine.',
        blocks: [
          { text: 'School', role: 'S', labelKo: '주어' },
          { text: 'starts', role: 'V', labelKo: '동사' },
          { text: 'at', role: 'M', labelKo: '시각 전치사' },
          { text: 'nine.', role: 'M', labelKo: '정확한 시각' }
        ],
        explanationKo: '콕 집은 정확한 시각(9시) 앞에는 항상 at을 씁니다.'
      },
      {
        id: 'f09-b04',
        promptKo: '우리는 월요일마다 음악 수업이 있다.',
        targetEn: 'We have music class on Mondays.',
        blocks: [
          { text: 'We', role: 'S', labelKo: '주어' },
          { text: 'have', role: 'V', labelKo: '동사' },
          { text: 'music class', role: 'O', labelKo: '목적어' },
          { text: 'on Mondays.', role: 'M', labelKo: '요일 (on + 요일)' }
        ],
        explanationKo: '달력 한 칸에 딱 붙는 요일과 날짜 앞에는 전치사 on이 짝꿍입니다.'
      },
      {
        id: 'f09-b05',
        promptKo: '내 친구가 내 바로 옆에 앉는다.',
        targetEn: 'My friend sits next to me.',
        blocks: [
          { text: 'My friend', role: 'S', labelKo: '주어' },
          { text: 'sits', role: 'V', labelKo: '동사' },
          { text: 'next to', role: 'M', labelKo: '전치사 (~옆에)' },
          { text: 'me.', role: 'M', labelKo: '대상' }
        ],
        explanationKo: '"~의 바로 옆에"는 next to 두 단어가 하나의 전치사처럼 움직입니다.'
      }
    ]
  },

  // =========================================================================
  // F10: 비교하기 & 이유·조건 접속사 (bigger than / the best / because / when / if)
  // =========================================================================
  {
    id: 'f10',
    unitNumber: 10,
    badge: 'UNIT 10 · A1',
    titleKo: '비교하기 & 이유·조건 접속사',
    subtitleKo: 'bigger than / the best / because / when / if — 두 문장을 논리적으로 잇기',
    corePatternEn: '-er than / the -est  |  Sentence A + because / when / if + Sentence B',
    koreanOrderDemo: ['비가 왔기 때문에', '나는', '집에', '머물렀다'],
    englishOrderDemo: [
      { text: 'I', role: 'S', labelKo: '주어 (결과 먼저!)' },
      { text: 'stayed home', role: 'V', labelKo: '동사 (집에 머물렀다)' },
      { text: 'because', role: 'M', labelKo: '접속사 (왜냐하면)' },
      { text: 'it rained.', role: 'M', labelKo: '이유 문장 (비가 왔다)' }
    ],
    koreanBridgeTip:
      '초등 기초 졸업 관문! ① 둘을 비교할 땐 [-er + than](~보다 더), 셋 이상 중 1등은 [the + -est](가장 ~)를 씁니다. ② 이유(because)·시간(when)·조건(if)으로 문장 두 개를 붙일 때 영어는 결론을 먼저 말하고 뒤에 접속사 문장을 척척 달아 줄 수 있어요!',
    sentences: [
      {
        id: 'f10-s01',
        english: 'An elephant is bigger than a lion.',
        literalOrderKo: '코끼리는 / 이다 / 더 큰 / 사자보다.',
        naturalKo: '코끼리는 사자보다 더 커요.',
        patternHighlight: 'bigger than'
      },
      {
        id: 'f10-s02',
        english: 'Summer is hotter than spring in Korea.',
        literalOrderKo: '여름은 / 이다 / 더 더운 / 봄보다 / 한국에서.',
        naturalKo: '한국에서는 여름이 봄보다 더 더워요.',
        patternHighlight: 'hotter than'
      },
      {
        id: 'f10-s03',
        english: 'This comic book is more exciting than that one.',
        literalOrderKo: '이 만화책은 / 이다 / 더 신나는 / 저것보다.',
        naturalKo: '이 만화책은 저것보다 더 흥미진진해요.',
        patternHighlight: 'more exciting than'
      },
      {
        id: 'f10-s04',
        english: 'You are the best friend in the world.',
        literalOrderKo: '너는 / 이다 / 가장 최고의 친구 / 세상에서.',
        naturalKo: '너는 세상에서 가장 좋은 친구야.',
        patternHighlight: 'the best'
      },
      {
        id: 'f10-s05',
        english: 'Mount Hallasan is the tallest mountain in South Korea.',
        literalOrderKo: '한라산은 / 이다 / 가장 높은 산 / 대한민국에서.',
        naturalKo: '한라산은 대한민국에서 가장 높은 산이에요.',
        patternHighlight: 'the tallest'
      },
      {
        id: 'f10-s06',
        english: 'I stayed home because it rained all day.',
        literalOrderKo: '나는 / 머물렀다 / 집에 / 왜냐하면 / 비가 왔다 / 하루 종일.',
        naturalKo: '하루 종일 비가 왔기 때문에 나는 집에 있었어요.',
        patternHighlight: 'because'
      },
      {
        id: 'f10-s07',
        english: 'She is happy because she won the prize.',
        literalOrderKo: '그녀는 / 행복하다 / 왜냐하면 / 그녀가 탔다 / 그 상을.',
        naturalKo: '그녀는 상을 탔기 때문에 행복해요.',
        patternHighlight: 'because'
      },
      {
        id: 'f10-s08',
        english: 'I listen to music when I feel tired.',
        literalOrderKo: '나는 / 듣는다 / 음악을 / ~할 때 / 내가 피곤함을 느낄.',
        naturalKo: '나는 피곤할 때 음악을 들어요.',
        patternHighlight: 'when'
      },
      {
        id: 'f10-s09',
        english: 'Call me when you arrive at the station.',
        literalOrderKo: '전화해 줘 / 나에게 / ~할 때 / 네가 도착할 / 역에.',
        naturalKo: '역에 도착하면 나한테 전화해 줘.',
        patternHighlight: 'when'
      },
      {
        id: 'f10-s10',
        english: 'We will go on a picnic if it is sunny tomorrow.',
        literalOrderKo: '우리는 / 소풍을 갈 것이다 / 만약 ~라면 / 내일 화창하다면.',
        naturalKo: '내일 날씨가 맑으면 우리는 소풍을 갈 거예요.',
        patternHighlight: 'if'
      }
    ],
    builderPuzzles: [
      {
        id: 'f10-b01',
        promptKo: '코끼리는 사자보다 더 크다.',
        targetEn: 'An elephant is bigger than a lion.',
        blocks: [
          { text: 'An elephant', role: 'S', labelKo: '주어 A' },
          { text: 'is', role: 'V', labelKo: 'be동사' },
          { text: 'bigger than', role: 'O', labelKo: '비교급 + than' },
          { text: 'a lion.', role: 'M', labelKo: '비교 대상 B' }
        ],
        explanationKo: 'A와 B를 비교할 때 [A + is + 형용사-er + than + B] 순서를 사용합니다.'
      },
      {
        id: 'f10-b02',
        promptKo: '너는 내 반에서 가장 좋은 친구이다.',
        targetEn: 'You are the best friend in my class.',
        blocks: [
          { text: 'You', role: 'S', labelKo: '주어' },
          { text: 'are', role: 'V', labelKo: 'be동사' },
          { text: 'the best friend', role: 'O', labelKo: '최상급 (the best)' },
          { text: 'in my class.', role: 'M', labelKo: '범위' }
        ],
        explanationKo: 'good의 최상급은 best이며, 최상급 앞에는 항상 the를 붙입니다(the best).'
      },
      {
        id: 'f10-b03',
        promptKo: '비가 왔기 때문에 나는 집에 머물렀다.',
        targetEn: 'I stayed home because it rained.',
        blocks: [
          { text: 'I', role: 'S', labelKo: '주어 (결과)' },
          { text: 'stayed home', role: 'V', labelKo: '동사 (결론 먼저!)' },
          { text: 'because', role: 'M', labelKo: '이유 접속사' },
          { text: 'it rained.', role: 'M', labelKo: '이유 문장' }
        ],
        explanationKo: '영어는 결론(I stayed home)을 먼저 말하고 뒤에 [because + 주어 + 동사]를 자연스럽게 붙입니다.'
      },
      {
        id: 'f10-b04',
        promptKo: '나는 피곤할 때 음악을 듣는다.',
        targetEn: 'I listen to music when I feel tired.',
        blocks: [
          { text: 'I', role: 'S', labelKo: '주어' },
          { text: 'listen to music', role: 'V', labelKo: '핵심 행동' },
          { text: 'when', role: 'M', labelKo: '시간 접속사 (~할 때)' },
          { text: 'I feel tired.', role: 'M', labelKo: '상황 문장' }
        ],
        explanationKo: 'when은 질문에선 "언제", 문장 중간에선 "~할 때" 접속사로 두 문장을 연결합니다.'
      },
      {
        id: 'f10-b05',
        promptKo: '내일 날씨가 맑으면 우리는 소풍을 갈 것이다.',
        targetEn: 'We will go on a picnic if it is sunny tomorrow.',
        blocks: [
          { text: 'We', role: 'S', labelKo: '주어' },
          { text: 'will go', role: 'V', labelKo: '미래 동사' },
          { text: 'on a picnic', role: 'M', labelKo: '소풍을' },
          { text: 'if', role: 'M', labelKo: '조건 접속사 (만약)' },
          { text: 'it is sunny tomorrow.', role: 'M', labelKo: '조건 문장' }
        ],
        explanationKo: '조건을 나타내는 if절 안에서는 미래일지라도 will 없이 현재시제(is)를 쓰는 것이 영어의 황금 규칙입니다!'
      }
    ]
  }
];
