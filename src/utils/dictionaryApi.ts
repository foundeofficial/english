import type { LevelTier } from '../types/course.ts';

export interface CourseLexiconEntry {
  word: string;
  phonetic: string;
  pos: string;
  meaningKo: string;
  meaningEn: string;
  nuanceTipKo: string;
  exampleEn: string;
  exampleKo: string;
  dayNumber: number;
  cefr: LevelTier;
}

export interface DictionaryMeaningGroup {
  partOfSpeech: string;
  definitions: Array<{
    definitionEn: string;
    exampleEn?: string;
  }>;
}

export interface DictionaryLookupResult {
  query: string;
  headword: string;
  phonetic: string;
  audioUrl?: string;
  koreanDefinitions: string[];
  koreanExamples: string[];
  englishMeanings: DictionaryMeaningGroup[];
  synonyms: string[];
  collocations: string[];
  courseMatches: CourseLexiconEntry[];
  sourcesUsed: string[];
  notFound?: boolean;
}

interface FreeDictEntry {
  word?: string;
  phonetic?: string;
  phonetics?: Array<{ text?: string; audio?: string }>;
  meanings?: Array<{
    partOfSpeech?: string;
    definitions?: Array<{
      definition?: string;
      example?: string;
      synonyms?: string[];
    }>;
    synonyms?: string[];
  }>;
}

interface KoWiktionaryResponse {
  query?: {
    pages?: Record<
      string,
      {
        missing?: string;
        title?: string;
        extract?: string;
      }
    >;
    search?: Array<{ title: string; snippet?: string }>;
  };
}

const lookupCache = new Map<string, DictionaryLookupResult>();

const POS_KO_MAP: Record<string, string> = {
  noun: '명사',
  verb: '동사',
  adjective: '형용사',
  adverb: '부사',
  preposition: '전치사',
  conjunction: '접속사',
  interjection: '감탄사',
  pronoun: '대명사'
};

export function translatePosToKo(pos: string): string {
  const lower = pos.toLowerCase();
  return POS_KO_MAP[lower] ? `${POS_KO_MAP[lower]} (${lower})` : pos;
}

function hasHangul(text: string): boolean {
  return /[가-힣]/.test(text);
}

/**
 * Parse plain-text extract from Korean Wiktionary (ko.wiktionary.org)
 * focusing on the `== 영어 ==` section.
 */
function parseKoWiktionaryExtract(extract: string): {
  definitions: string[];
  examples: string[];
} {
  if (!extract) return { definitions: [], examples: [] };

  let section = extract;
  const enStart = extract.indexOf('== 영어 ==');
  if (enStart >= 0) {
    section = extract.slice(enStart + 8);
    const nextLang = section.search(/\n== [^=]/);
    if (nextLang >= 0) {
      section = section.slice(0, nextLang);
    }
  }

  const lines = section
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const definitions: string[] = [];
  const examples: string[] = [];
  let currentPos = '';

  for (const line of lines) {
    if (line.startsWith('===') && line.endsWith('===')) {
      const heading = line.replace(/=/g, '').trim();
      if (['명사', '동사', '형용사', '부사', '전치사', '접속사', '숙어', '관용구', '감탄사'].includes(heading)) {
        currentPos = heading;
      } else if (['어원', '발음', '파생어', '유의어', '반의어', '관련 어휘', '참고', '번역'].includes(heading)) {
        currentPos = 'SKIP';
      }
      continue;
    }

    if (currentPos === 'SKIP') continue;
    if (line.startsWith('IPA ') || line.startsWith('듣기') || line.startsWith('로마자') || line.startsWith('활용:')) {
      continue;
    }
    if (line.startsWith('유의어:') || line.startsWith('반의어:') || line.startsWith('참조:') || line.startsWith('어원:')) {
      continue;
    }

    const hasEn = /[A-Za-z]{3,}/.test(line);
    const hasKo = hasHangul(line);

    if (hasEn && hasKo && line.length > 25 && /^[A-Z"'“]/.test(line)) {
      if (examples.length < 4) examples.push(line);
    } else if (hasKo && line.length >= 2 && line.length <= 160) {
      const formatted = currentPos ? `[${currentPos}] ${line}` : line;
      if (!definitions.includes(formatted) && definitions.length < 6) {
        definitions.push(formatted);
      }
    }
  }

  return { definitions, examples };
}

async function fetchFreeDictionary(word: string): Promise<FreeDictEntry | null> {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`
    );
    if (!res.ok) return null;
    const data = (await res.json()) as FreeDictEntry[];
    return Array.isArray(data) && data.length > 0 ? data[0] : null;
  } catch {
    return null;
  }
}

async function fetchKoWiktionary(word: string): Promise<{
  definitions: string[];
  examples: string[];
  matchedEnglishHeadword?: string;
}> {
  try {
    const res = await fetch(
      `https://ko.wiktionary.org/w/api.php?action=query&titles=${encodeURIComponent(
        word
      )}&prop=extracts&explaintext=1&format=json&origin=*`,
      {
        headers: {
          'Api-User-Agent': 'KoreBridgeEnglishApp/2.0 (https://foundeofficial.github.io/english/)'
        }
      }
    );
    if (!res.ok) return { definitions: [], examples: [] };
    const data = (await res.json()) as KoWiktionaryResponse;
    const pages = data.query?.pages;
    if (!pages) return { definitions: [], examples: [] };
    const first = Object.values(pages)[0];
    if (!first || first.missing !== undefined || !first.extract) {
      return { definitions: [], examples: [] };
    }
    return parseKoWiktionaryExtract(first.extract);
  } catch {
    return { definitions: [], examples: [] };
  }
}

async function searchKoToEnViaWiktionary(koreanQuery: string): Promise<string[]> {
  try {
    const res = await fetch(
      `https://ko.wiktionary.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
        `${koreanQuery} 영어`
      )}&srlimit=6&format=json&origin=*`,
      {
        headers: {
          'Api-User-Agent': 'KoreBridgeEnglishApp/2.0 (https://foundeofficial.github.io/english/)'
        }
      }
    );
    if (!res.ok) return [];
    const data = (await res.json()) as KoWiktionaryResponse;
    const titles = (data.query?.search ?? [])
      .map((s) => s.title)
      .filter((t) => /^[A-Za-z][A-Za-z\s-]{1,28}$/.test(t));
    return titles;
  } catch {
    return [];
  }
}

async function fetchWiktionarySuggestions(prefix: string): Promise<string[]> {
  try {
    const res = await fetch(
      `https://en.wiktionary.org/w/api.php?action=opensearch&search=${encodeURIComponent(
        prefix
      )}&limit=6&format=json&origin=*`,
      {
        headers: {
          'Api-User-Agent': 'KoreBridgeEnglishApp/2.0 (https://foundeofficial.github.io/english/)'
        }
      }
    );
    if (!res.ok) return [];
    const data = (await res.json()) as [string, string[]];
    return Array.isArray(data?.[1]) ? data[1] : [];
  } catch {
    return [];
  }
}

export async function fetchDictionarySuggestions(
  prefix: string,
  localIndex: CourseLexiconEntry[]
): Promise<string[]> {
  const clean = prefix.trim().toLowerCase();
  if (clean.length < 2) return [];

  const localHits = localIndex
    .filter(
      (item) =>
        item.word.toLowerCase().includes(clean) || item.meaningKo.includes(clean)
    )
    .slice(0, 5)
    .map((item) => item.word);

  if (hasHangul(clean)) {
    return localHits;
  }

  const remoteHits = await fetchWiktionarySuggestions(clean);
  const merged = [...localHits];
  for (const word of remoteHits) {
    if (!merged.some((w) => w.toLowerCase() === word.toLowerCase())) {
      merged.push(word);
    }
  }
  return merged.slice(0, 8);
}

function cleanWordForApi(raw: string): string {
  return raw
    .trim()
    .replace(/^[“"'([{]+|[”"')\]}.,!?;:~]+$/g, '')
    .replace(/~+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Unified Free Live English-Korean Dictionary Lookup:
 * 1) Local 30-day Course Lexicon (450+ curated expressions, instant EN & KO match)
 * 2) Free Dictionary API (dictionaryapi.dev) — IPA, real US/UK MP3 audio, EN definitions & examples
 * 3) Korean Wiktionary API (ko.wiktionary.org) — Korean meanings & translated examples
 * 4) Datamuse API (api.datamuse.com) — synonyms & real-world collocations
 */
export async function lookupDictionaryWord(
  rawQuery: string,
  localIndex: CourseLexiconEntry[]
): Promise<DictionaryLookupResult> {
  const cleaned = cleanWordForApi(rawQuery);
  const key = cleaned.toLowerCase();
  if (!key) {
    return {
      query: rawQuery,
      headword: '',
      phonetic: '',
      koreanDefinitions: [],
      koreanExamples: [],
      englishMeanings: [],
      synonyms: [],
      collocations: [],
      courseMatches: [],
      sourcesUsed: [],
      notFound: true
    };
  }

  const cached = lookupCache.get(key);
  if (cached) return cached;

  const isKorean = hasHangul(cleaned);
  const exactMatches = localIndex.filter((entry) => {
    const w = entry.word.toLowerCase().replace(/~/g, '').trim();
    return isKorean ? entry.meaningKo.includes(cleaned) : w === key;
  });
  const partialMatches = localIndex.filter((entry) => {
    if (exactMatches.includes(entry)) return false;
    const w = entry.word.toLowerCase().replace(/~/g, '').trim();
    return isKorean
      ? entry.nuanceTipKo.includes(cleaned) || entry.exampleKo.includes(cleaned)
      : w.includes(key) || key.includes(w);
  });
  const courseMatches = [...exactMatches, ...partialMatches].slice(0, 6);

  const STOP_WORDS = new Set(['a', 'an', 'the', 'to', 'in', 'on', 'at', 'by', 'of', 'for', 'my', 'your', 'be', 'it']);

  // Decide the best English lookup target
  let targetEn = cleaned;
  let preservedPhrase: string | null = null;
  if (isKorean) {
    if (courseMatches.length > 0) {
      const fullPhrase = courseMatches[0].word.replace(/~/g, '').replace(/\s+/g, ' ').trim();
      preservedPhrase = fullPhrase;
      const contentToken =
        fullPhrase
          .split(/\s+/)
          .find((tok) => tok.length >= 3 && !STOP_WORDS.has(tok.toLowerCase())) ??
        fullPhrase.split(/\s+/)[0];
      targetEn = contentToken;
    } else {
      const koMatches = await searchKoToEnViaWiktionary(cleaned);
      if (koMatches.length > 0) {
        targetEn = koMatches[0];
      }
    }
  } else if (cleaned.includes(' ')) {
    preservedPhrase = cleaned;
  }

  // If multi-word phrase not found as full phrase, also try its primary content word
  const apiTarget = targetEn.toLowerCase();
  const singleToken =
    apiTarget
      .split(/\s+/)
      .find((tok) => tok.length >= 3 && !STOP_WORDS.has(tok)) ??
    apiTarget.split(/\s+/)[0];

  const [freeEntryPrimary, koWiktPrimary] = await Promise.all([
    !isKorean || targetEn !== cleaned ? fetchFreeDictionary(apiTarget) : Promise.resolve(null),
    !isKorean || targetEn !== cleaned
      ? fetchKoWiktionary(apiTarget)
      : Promise.resolve({ definitions: [], examples: [] })
  ]);

  let freeEntry = freeEntryPrimary;
  let koWikt = koWiktPrimary;

  if (!freeEntry && singleToken && singleToken !== apiTarget) {
    freeEntry = await fetchFreeDictionary(singleToken);
  }
  if (koWikt.definitions.length === 0 && singleToken && singleToken !== apiTarget) {
    koWikt = await fetchKoWiktionary(singleToken);
  }

  const sourcesUsed: string[] = [];
  if (courseMatches.length > 0) sourcesUsed.push('KoreBridge 30일 커리큘럼 사전');
  if (freeEntry) sourcesUsed.push('Free Dictionary API');
  if (koWikt.definitions.length > 0) sourcesUsed.push('한국어 위키낱말사전');

  // Pick best US/UK MP3 audio URL from Free Dictionary API
  const phoneticsList = freeEntry?.phonetics ?? [];
  const audioCandidate =
    phoneticsList.find((p) => p.audio && p.audio.includes('-us.mp3'))?.audio ??
    phoneticsList.find((p) => p.audio && p.audio.includes('-uk.mp3'))?.audio ??
    phoneticsList.find((p) => p.audio && p.audio.startsWith('http'))?.audio;

  const phonetic =
    courseMatches[0]?.phonetic ||
    freeEntry?.phonetic ||
    phoneticsList.find((p) => p.text)?.text ||
    '';

  const englishMeanings: DictionaryMeaningGroup[] = (freeEntry?.meanings ?? [])
    .slice(0, 4)
    .map((m) => ({
      partOfSpeech: m.partOfSpeech ?? 'expression',
      definitions: (m.definitions ?? []).slice(0, 3).map((d) => ({
        definitionEn: d.definition ?? '',
        exampleEn: d.example
      }))
    }))
    .filter((g) => g.definitions.length > 0);

  const apiSynonyms = (freeEntry?.meanings ?? []).flatMap((m) => [
    ...(m.synonyms ?? []),
    ...(m.definitions ?? []).flatMap((d) => d.synonyms ?? [])
  ]);

  const synonyms = Array.from(new Set(apiSynonyms))
    .filter((s) => s.toLowerCase() !== apiTarget)
    .slice(0, 10);

  // Pull related expressions from the same Day in the 30-day course lexicon
  const relatedDays = new Set(courseMatches.map((m) => m.dayNumber));
  const courseCollocations =
    relatedDays.size > 0
      ? localIndex
          .filter(
            (item) =>
              relatedDays.has(item.dayNumber) &&
              item.word.toLowerCase() !== (preservedPhrase || apiTarget).toLowerCase()
          )
          .slice(0, 8)
          .map((item) => item.word.replace(/~/g, '').trim())
      : [];

  const koreanDefinitions = Array.from(
    new Set([
      ...courseMatches.map((m) => `[${m.pos} · Day ${String(m.dayNumber).padStart(2, '0')}] ${m.meaningKo}`),
      ...koWikt.definitions
    ])
  ).slice(0, 8);

  const notFound =
    courseMatches.length === 0 &&
    englishMeanings.length === 0 &&
    koreanDefinitions.length === 0;

  const result: DictionaryLookupResult = {
    query: cleaned,
    headword: preservedPhrase || freeEntry?.word || targetEn,
    phonetic,
    audioUrl: audioCandidate,
    koreanDefinitions,
    koreanExamples: koWikt.examples,
    englishMeanings,
    synonyms,
    collocations: courseCollocations,
    courseMatches,
    sourcesUsed,
    notFound
  };

  lookupCache.set(key, result);
  return result;
}
