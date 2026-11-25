export interface ScoredWordToken {
  word: string;
  status: 'matched' | 'close' | 'missed';
  userSaid?: string;
}

export interface SpeechEvaluationResult {
  accuracyPct: number;
  passed: boolean;
  matchedCount: number;
  totalTargetWords: number;
  tokens: ScoredWordToken[];
  missedFunctionWords: string[];
  missedContentWords: string[];
  coachingTipKo: string;
}

const CONTRACTION_EXPANSIONS: Array<[RegExp, string]> = [
  [/\bi['’]m\b/gi, 'i am'],
  [/\byou['’]re\b/gi, 'you are'],
  [/\bwe['’]re\b/gi, 'we are'],
  [/\bthey['’]re\b/gi, 'they are'],
  [/\bhe['’]s\b/gi, 'he is'],
  [/\bshe['’]s\b/gi, 'she is'],
  [/\bit['’]s\b/gi, 'it is'],
  [/\bthat['’]s\b/gi, 'that is'],
  [/\bwhat['’]s\b/gi, 'what is'],
  [/\bthere['’]s\b/gi, 'there is'],
  [/\bhere['’]s\b/gi, 'here is'],
  [/\bi['’]ll\b/gi, 'i will'],
  [/\byou['’]ll\b/gi, 'you will'],
  [/\bwe['’]ll\b/gi, 'we will'],
  [/\bthey['’]ll\b/gi, 'they will'],
  [/\bhe['’]ll\b/gi, 'he will'],
  [/\bshe['’]ll\b/gi, 'she will'],
  [/\bi['’]ve\b/gi, 'i have'],
  [/\byou['’]ve\b/gi, 'you have'],
  [/\bwe['’]ve\b/gi, 'we have'],
  [/\bthey['’]ve\b/gi, 'they have'],
  [/\bi['’]d\b/gi, 'i would'],
  [/\byou['’]d\b/gi, 'you would'],
  [/\bwe['’]d\b/gi, 'we would'],
  [/\bcan['’]t\b/gi, 'cannot'],
  [/\bwon['’]t\b/gi, 'will not'],
  [/\bdon['’]t\b/gi, 'do not'],
  [/\bdoesn['’]t\b/gi, 'does not'],
  [/\bdidn['’]t\b/gi, 'did not'],
  [/\bisn['’]t\b/gi, 'is not'],
  [/\baren['’]t\b/gi, 'are not'],
  [/\bwasn['’]t\b/gi, 'was not'],
  [/\bweren['’]t\b/gi, 'were not'],
  [/\bhaven['’]t\b/gi, 'have not'],
  [/\bhasn['’]t\b/gi, 'has not'],
  [/\bhadn['’]t\b/gi, 'had not'],
  [/\bwouldn['’]t\b/gi, 'would not'],
  [/\bcouldn['’]t\b/gi, 'could not'],
  [/\bshouldn['’]t\b/gi, 'should not'],
  [/\blet['’]s\b/gi, 'let us'],
  [/\bgonna\b/gi, 'going to'],
  [/\bwanna\b/gi, 'want to'],
  [/\bkinda\b/gi, 'kind of']
];

const FUNCTION_WORDS = new Set([
  'a', 'an', 'the', 'to', 'in', 'on', 'at', 'by', 'for', 'of', 'with',
  'from', 'into', 'out', 'up', 'off', 'as', 'is', 'am', 'are', 'was',
  'were', 'be', 'been', 'will', 'would', 'could', 'should', 'have', 'has', 'had', 'do', 'does', 'did',
  'i', 'me', 'my', 'you', 'your', 'he', 'him', 'his', 'she', 'her', 'it', 'its',
  'we', 'us', 'our', 'they', 'them', 'their', 'this', 'that', 'these', 'those', 'and', 'or', 'but', 'so'
]);

/**
 * Normalizes English text while expanding standard contractions so
 * "I'll wrap it up" and "I will wrap it up" are graded fairly as equivalent.
 */
export function normalizeForComparison(raw: string): string {
  let s = raw.toLowerCase().replace(/[’‘`]/g, "'").replace(/[“”]/g, '"');
  for (const [pattern, expansion] of CONTRACTION_EXPANSIONS) {
    s = s.replace(pattern, expansion);
  }
  return s
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function isEquivalentEnglishAnswer(
  userRaw: string,
  target: string,
  acceptableAlt?: string[]
): boolean {
  const normUser = normalizeForComparison(userRaw);
  if (!normUser) return false;
  const candidates = [target, ...(acceptableAlt ?? [])].map(normalizeForComparison);
  return candidates.includes(normUser);
}

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
  for (let i = 0; i <= m; i += 1) dp[i][0] = i;
  for (let j = 0; j <= n; j += 1) dp[0][j] = j;
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[m][n];
}

/**
 * Evaluates spoken shadowing transcript OR typed dictation against a target English sentence
 * using contraction-aware LCS alignment + fuzzy spelling tolerance.
 */
export function evaluateSpeechOrDictation(
  userRaw: string,
  targetRaw: string,
  passThreshold = 82
): SpeechEvaluationResult {
  const targetNormWords = normalizeForComparison(targetRaw).split(' ').filter(Boolean);
  const userNormWords = normalizeForComparison(userRaw).split(' ').filter(Boolean);

  if (targetNormWords.length === 0) {
    return {
      accuracyPct: 100,
      passed: true,
      matchedCount: 0,
      totalTargetWords: 0,
      tokens: [],
      missedFunctionWords: [],
      missedContentWords: [],
      coachingTipKo: '정확합니다!'
    };
  }

  // Build LCS DP table on normalized words
  const m = targetNormWords.length;
  const n = userNormWords.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));

  for (let i = m - 1; i >= 0; i -= 1) {
    for (let j = n - 1; j >= 0; j -= 1) {
      if (targetNormWords[i] === userNormWords[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  const matchedTargetIndices = new Set<number>();
  const usedUserIndices = new Set<number>();
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (targetNormWords[i] === userNormWords[j]) {
      matchedTargetIndices.add(i);
      usedUserIndices.add(j);
      i += 1;
      j += 1;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      i += 1;
    } else {
      j += 1;
    }
  }

  const tokens: ScoredWordToken[] = [];
  const missedFunctionWords: string[] = [];
  const missedContentWords: string[] = [];
  let weightedScore = 0;
  let matchedCount = 0;

  for (let idx = 0; idx < m; idx += 1) {
    const word = targetNormWords[idx];
    if (matchedTargetIndices.has(idx)) {
      tokens.push({ word, status: 'matched' });
      matchedCount += 1;
      weightedScore += 1;
      continue;
    }

    // Check if an unused user word is a close spelling/pronunciation match (edit distance <= 1 for >=4 chars)
    let closeWord: string | undefined;
    for (let uIdx = 0; uIdx < n; uIdx += 1) {
      if (usedUserIndices.has(uIdx)) continue;
      const cand = userNormWords[uIdx];
      if (word.length >= 4 && levenshtein(word, cand) <= 1) {
        closeWord = cand;
        usedUserIndices.add(uIdx);
        break;
      }
    }

    if (closeWord) {
      tokens.push({ word, status: 'close', userSaid: closeWord });
      weightedScore += 0.65;
    } else {
      tokens.push({ word, status: 'missed' });
      if (FUNCTION_WORDS.has(word)) {
        if (!missedFunctionWords.includes(word)) missedFunctionWords.push(word);
      } else if (!missedContentWords.includes(word)) {
        missedContentWords.push(word);
      }
    }
  }

  const accuracyPct = Math.round((weightedScore / m) * 100);
  const passed = accuracyPct >= passThreshold;

  let coachingTipKo = '';
  if (accuracyPct >= 95) {
    coachingTipKo = '원어민 리듬과 기능어(관사·전치사)까지 거의 완벽하게 잡아내셨습니다!';
  } else if (accuracyPct >= passThreshold) {
    coachingTipKo =
      missedFunctionWords.length > 0
        ? `핵심 의미 전달은 훌륭합니다! 다만 원어민이 약하게 발음하는 기능어(${missedFunctionWords.slice(0, 3).join(', ')})에 귀를 기울여 한 번 더 따라 말해보세요.`
        : '전체 문장 구조가 아주 안정적입니다! 빨간 표시된 단어 강세만 한 번 더 점검하세요.';
  } else if (missedContentWords.length > 0) {
    coachingTipKo = `핵심 내용어(${missedContentWords.slice(0, 3).join(', ')})가 누락되었어요. 0.85x 느린 속도로 2번 들은 뒤 청크 단위로 끊어서 다시 도전해 보세요!`;
  } else {
    coachingTipKo = `관사·전치사·조동사(${missedFunctionWords.slice(0, 4).join(', ')})를 놓치기 쉬운 구간입니다. 원어민 음성을 천천히 듣고 연결음을 확인해 보세요.`;
  }

  return {
    accuracyPct,
    passed,
    matchedCount,
    totalTargetWords: m,
    tokens,
    missedFunctionWords,
    missedContentWords,
    coachingTipKo
  };
}
