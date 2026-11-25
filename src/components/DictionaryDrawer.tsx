import { useEffect, useRef, useState } from 'react';
import {
  BookMarked,
  BookmarkCheck,
  BookmarkPlus,
  ExternalLink,
  Loader2,
  Search,
  Sparkles,
  Volume2,
  X
} from 'lucide-react';
import { LEVEL_INFO_MAP } from '../data/levels.ts';
import type { SavedDictionaryWord, SpacedReviewCard } from '../types/course.ts';
import {
  fetchDictionarySuggestions,
  lookupDictionaryWord,
  translatePosToKo,
  type CourseLexiconEntry,
  type DictionaryLookupResult
} from '../utils/dictionaryApi.ts';
import { speakEnglish } from '../utils/speech.ts';

interface DictionaryDrawerProps {
  isOpen: boolean;
  initialQuery: string;
  localLexicon: CourseLexiconEntry[];
  savedWords: SavedDictionaryWord[];
  onClose: () => void;
  onSaveWord: (word: SavedDictionaryWord) => void;
  onAddReviewCard: (card: SpacedReviewCard) => void;
  onJumpToDay?: (dayNumber: number) => void;
}

const QUICK_SAMPLE_WORDS = [
  'detour',
  'wrap up',
  'tight',
  'layover',
  'bottleneck',
  'contingency',
  'resonate',
  '협상',
  '마감'
];

export function DictionaryDrawer({
  isOpen,
  initialQuery,
  localLexicon,
  savedWords,
  onClose,
  onSaveWord,
  onAddReviewCard,
  onJumpToDay
}: DictionaryDrawerProps) {
  const [inputVal, setInputVal] = useState(initialQuery);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DictionaryLookupResult | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'detour',
    'schedule',
    'bandwidth',
    'unwind'
  ]);
  const [reviewToast, setReviewToast] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const requestSeqRef = useRef(0);
  const suggestSeqRef = useRef(0);

  const runSearch = async (query: string) => {
    const clean = query.trim();
    if (!clean) return;
    suggestSeqRef.current += 1;
    const seq = ++requestSeqRef.current;
    setInputVal(clean);
    setSuggestions([]);
    setLoading(true);
    setReviewToast(null);

    const data = await lookupDictionaryWord(clean, localLexicon);
    if (seq !== requestSeqRef.current) return;

    setResult(data);
    setLoading(false);
    setRecentSearches((prev) => [clean, ...prev.filter((w) => w.toLowerCase() !== clean.toLowerCase())].slice(0, 8));
  };

  useEffect(() => {
    if (!isOpen) return;
    window.setTimeout(() => inputRef.current?.focus(), 60);
    if (initialQuery.trim()) {
      void (async () => {
        const seq = ++requestSeqRef.current;
        setLoading(true);
        const data = await lookupDictionaryWord(initialQuery.trim(), localLexicon);
        if (seq !== requestSeqRef.current) return;
        setResult(data);
        setLoading(false);
      })();
    }
  }, [isOpen, initialQuery, localLexicon]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleInputChange = (val: string) => {
    setInputVal(val);
    const sugSeq = ++suggestSeqRef.current;
    if (val.trim().length < 2) {
      setSuggestions([]);
      return;
    }
    void fetchDictionarySuggestions(val, localLexicon).then((items) => {
      if (sugSeq === suggestSeqRef.current) {
        setSuggestions(items);
      }
    });
  };

  const handlePlayAudio = () => {
    if (!result) return;
    if (result.audioUrl) {
      try {
        if (!audioRef.current) {
          audioRef.current = new Audio();
        }
        audioRef.current.src = result.audioUrl;
        void audioRef.current.play().catch(() => {
          speakEnglish(result.headword, 0.92);
        });
        return;
      } catch {
        // Fallback to Web Speech TTS
      }
    }
    speakEnglish(result.headword, 0.92);
  };

  const isAlreadySaved = result
    ? savedWords.some((w) => w.word.toLowerCase() === result.headword.toLowerCase())
    : false;

  const handleSaveToMyVocab = () => {
    if (!result || !result.headword) return;
    const firstKo =
      result.koreanDefinitions[0]?.replace(/^\[[^\]]+\]\s*/, '') ||
      result.courseMatches[0]?.meaningKo ||
      result.englishMeanings[0]?.definitions[0]?.definitionEn ||
      '직접 저장한 영단어';
    const firstEn =
      result.englishMeanings[0]?.definitions[0]?.definitionEn ||
      result.courseMatches[0]?.meaningEn ||
      '';
    const firstPos =
      result.courseMatches[0]?.pos ||
      (result.englishMeanings[0]?.partOfSpeech
        ? translatePosToKo(result.englishMeanings[0].partOfSpeech)
        : '표현');
    const firstExample =
      result.courseMatches[0]?.exampleEn ||
      result.englishMeanings[0]?.definitions.find((d) => d.exampleEn)?.exampleEn ||
      result.koreanExamples[0] ||
      `I learned how to use "${result.headword}" naturally today.`;

    onSaveWord({
      id: `dict-${result.headword.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
      word: result.headword,
      phonetic: result.phonetic || '',
      pos: firstPos,
      meaningKo: firstKo,
      meaningEn: firstEn,
      exampleEn: firstExample,
      audioUrl: result.audioUrl,
      savedAt: new Date().toISOString(),
      sourceLabel: '실시간 영한사전 저장'
    });
  };

  const handleAddToReview = () => {
    if (!result || !result.headword) return;
    const meaning =
      result.koreanDefinitions[0]?.replace(/^\[[^\]]+\]\s*/, '') ||
      result.englishMeanings[0]?.definitions[0]?.definitionEn ||
      result.headword;
    const example =
      result.courseMatches[0]?.exampleEn ||
      result.englishMeanings[0]?.definitions.find((d) => d.exampleEn)?.exampleEn ||
      result.headword;

    onAddReviewCard({
      id: `rev-dict-${Date.now()}`,
      promptKo: `[사전 검색] ${meaning}`,
      targetEn: example,
      noteKo: `${result.headword} ${result.phonetic ? `(${result.phonetic})` : ''} — ${meaning}`,
      sourceLabel: '영한사전 복습 추가',
      intervalDays: 1,
      mastered: false
    });
    setReviewToast(`"${result.headword}" 표현을 망각곡선 오답 복습함(D+1)에 추가했습니다.`);
  };

  return (
    <div
      className="dict-drawer-backdrop no-print"
      role="dialog"
      aria-modal="true"
      aria-label="실시간 영한·영영 영어사전"
      onClick={onClose}
    >
      <aside className="dict-drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="dict-drawer-header">
          <div>
            <span className="pill-tag pill-brand">실시간 무료 API 연동 · 영한/영영 사전</span>
            <h2 style={{ fontSize: '1.35rem', marginTop: '6px' }}>KoreBridge 스마트 영어사전</h2>
          </div>
          <button
            id="close-dictionary-drawer-btn"
            type="button"
            className="icon-close-btn"
            onClick={onClose}
            aria-label="사전 닫기"
          >
            <X size={20} />
          </button>
        </div>

        {/* SEARCH BAR */}
        <form
          className="dict-search-form"
          onSubmit={(e) => {
            e.preventDefault();
            void runSearch(inputVal);
          }}
        >
          <div className="dict-search-input-wrap">
            <Search size={18} className="dict-search-icon" />
            <input
              ref={inputRef}
              id="dictionary-search-input"
              type="text"
              className="dict-search-input"
              value={inputVal}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="영단어, 구동사, 또는 한국어 뜻 입력 (예: detour, push back, 협상)"
              autoComplete="off"
            />
            {inputVal && (
              <button
                type="button"
                className="dict-clear-btn"
                onClick={() => {
                  setInputVal('');
                  setSuggestions([]);
                }}
                aria-label="검색어 지우기"
              >
                <X size={15} />
              </button>
            )}
          </div>
          <button id="dictionary-search-submit-btn" type="submit" className="btn-solid-brand">
            검색
          </button>
        </form>

        {/* AUTOCOMPLETE SUGGESTIONS */}
        {suggestions.length > 0 && (
          <div className="dict-suggestions-box" role="listbox" aria-label="자동완성 추천 단어">
            {suggestions.map((sug) => (
              <button
                key={sug}
                type="button"
                className="dict-suggestion-item"
                onClick={() => void runSearch(sug)}
              >
                <Search size={13} />
                <span>{sug}</span>
              </button>
            ))}
          </div>
        )}

        {/* QUICK & RECENT CHIPS */}
        <div className="dict-quick-chips-bar">
          <span className="dict-chip-group-label">빠른 검색:</span>
          {(recentSearches.length > 0 ? recentSearches : QUICK_SAMPLE_WORDS)
            .slice(0, 7)
            .map((word) => (
              <button
                key={word}
                type="button"
                className="dict-mini-chip"
                onClick={() => void runSearch(word)}
              >
                {word}
              </button>
            ))}
        </div>

        {/* BODY CONTENT */}
        <div className="dict-drawer-body">
          {loading && (
            <div className="dict-loading-state">
              <Loader2 size={26} className="spin-icon" />
              <p>Free Dictionary API · 한국어 위키낱말사전 · 30일 코스 사전 조회 중...</p>
            </div>
          )}

          {!loading && !result && (
            <div className="dict-empty-guide">
              <BookMarked size={32} style={{ color: 'var(--brand)' }} />
              <h3 style={{ marginTop: '10px', fontSize: '1.1rem' }}>
                모르는 영어 단어를 클릭하거나 바로 검색하세요
              </h3>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginTop: '6px' }}>
                지문·대화 스크립트의 영어 단어를 클릭해도 바로 이 사전이 열립니다. 미국/영국 원어민 오디오, 한국어 뜻, 영영 풀이, 유의어·연어를 무료로 실시간 조회합니다.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginTop: '16px' }}>
                {QUICK_SAMPLE_WORDS.map((sample) => (
                  <button
                    key={sample}
                    type="button"
                    className="btn-outline"
                    style={{ padding: '7px 14px', fontSize: '0.86rem' }}
                    onClick={() => void runSearch(sample)}
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!loading && result && result.notFound && (
            <div className="dict-empty-guide">
              <h3 style={{ fontSize: '1.08rem' }}>“{result.query}”에 대한 사전 항목을 찾지 못했습니다.</h3>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginTop: '6px' }}>
                단어 원형(예: stopped → stop, running → run)으로 검색하거나 철자를 확인해 주세요.
              </p>
              <a
                href={`https://en.dict.naver.com/#/search?query=${encodeURIComponent(result.query)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                style={{ marginTop: '14px', textDecoration: 'none' }}
              >
                <ExternalLink size={15} /> 네이버 영어사전에서 자세히 보기
              </a>
            </div>
          )}

          {!loading && result && !result.notFound && (
            <div className="dict-result-stack">
              {/* HEADWORD HEADER */}
              <div className="dict-headword-card">
                <div className="section-label-between" style={{ alignItems: 'flex-start', gap: '12px' }}>
                  <div>
                    <h3 className="dict-headword-title">{result.headword}</h3>
                    {result.phonetic && (
                      <span className="dict-phonetic-badge">{result.phonetic}</span>
                    )}
                  </div>

                  <button
                    id="dict-play-audio-btn"
                    type="button"
                    className="btn-solid-coral"
                    style={{ padding: '9px 15px', fontSize: '0.86rem' }}
                    onClick={handlePlayAudio}
                  >
                    <Volume2 size={16} />
                    <span>{result.audioUrl ? '원어민 MP3 발음' : '음성 듣기'}</span>
                  </button>
                </div>

                <div className="dict-action-bar">
                  <button
                    id="dict-save-vocab-btn"
                    type="button"
                    className={isAlreadySaved ? 'btn-outline' : 'btn-solid-brand'}
                    style={{ padding: '8px 14px', fontSize: '0.84rem' }}
                    disabled={isAlreadySaved}
                    onClick={handleSaveToMyVocab}
                  >
                    {isAlreadySaved ? <BookmarkCheck size={15} /> : <BookmarkPlus size={15} />}
                    <span>{isAlreadySaved ? '내 단어장에 저장됨' : '내 단어장에 저장'}</span>
                  </button>

                  <button
                    id="dict-add-review-btn"
                    type="button"
                    className="btn-outline"
                    style={{ padding: '8px 14px', fontSize: '0.84rem' }}
                    onClick={handleAddToReview}
                  >
                    <Sparkles size={15} />
                    <span>오답 복습함(D+1) 추가</span>
                  </button>
                </div>

                {reviewToast && (
                  <div className="feedback-banner ok" style={{ marginTop: '10px', fontSize: '0.84rem' }}>
                    {reviewToast}
                  </div>
                )}

                {result.sourcesUsed.length > 0 && (
                  <div className="dict-sources-row">
                    {result.sourcesUsed.map((src) => (
                      <span key={src} className="dict-source-pill">
                        {src}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* KOREAN DEFINITIONS */}
              {result.koreanDefinitions.length > 0 && (
                <section className="dict-section-card">
                  <h4 className="dict-section-title">한국어 핵심 뜻</h4>
                  <ul className="dict-ko-list">
                    {result.koreanDefinitions.map((def, idx) => (
                      <li key={idx}>{def}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* COURSE LEXICON DEEP NUANCE MATCHES */}
              {result.courseMatches.length > 0 && (
                <section className="dict-section-card dict-course-highlight">
                  <h4 className="dict-section-title">KoreBridge 30일 코스 수록 뉘앙스 해설</h4>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {result.courseMatches.map((entry) => (
                      <div key={`${entry.dayNumber}-${entry.word}`} className="dict-course-item">
                        <div className="section-label-between" style={{ marginBottom: '4px' }}>
                          <strong style={{ fontFamily: 'var(--font-en)', color: 'var(--brand)' }}>
                            {entry.word}
                          </strong>
                          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                            <span className="pill-tag pill-subtle" style={{ fontSize: '0.72rem' }}>
                              {LEVEL_INFO_MAP[entry.cefr].shortLabel}
                            </span>
                            {onJumpToDay && (
                              <button
                                type="button"
                                className="text-action-btn"
                                style={{ fontSize: '0.76rem' }}
                                onClick={() => {
                                  onJumpToDay(entry.dayNumber);
                                  onClose();
                                }}
                              >
                                Day {String(entry.dayNumber).padStart(2, '0')} 바로가기 →
                              </button>
                            )}
                          </div>
                        </div>
                        <p style={{ fontWeight: 700, fontSize: '0.92rem' }}>{entry.meaningKo}</p>
                        <p style={{ fontSize: '0.84rem', color: 'var(--text-sub)', marginTop: '4px' }}>
                          {entry.nuanceTipKo}
                        </p>
                        <p style={{ fontFamily: 'var(--font-en)', fontSize: '0.86rem', marginTop: '6px' }}>
                          “{entry.exampleEn}”
                        </p>
                        <p style={{ fontSize: '0.82rem', color: 'var(--text-sub)' }}>{entry.exampleKo}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* ENGLISH DEFINITIONS & EXAMPLES (Free Dictionary API) */}
              {result.englishMeanings.length > 0 && (
                <section className="dict-section-card">
                  <h4 className="dict-section-title">영영 풀이 &amp; 실전 예문 (Free Dictionary API)</h4>
                  <div style={{ display: 'grid', gap: '14px' }}>
                    {result.englishMeanings.map((group) => (
                      <div key={group.partOfSpeech}>
                        <span className="pill-tag pill-brand" style={{ fontSize: '0.74rem', marginBottom: '8px' }}>
                          {translatePosToKo(group.partOfSpeech)}
                        </span>
                        <ol className="dict-en-def-list">
                          {group.definitions.map((d, i) => (
                            <li key={i}>
                              <p className="dict-en-def">{d.definitionEn}</p>
                              {d.exampleEn && (
                                <p className="dict-en-ex">“{d.exampleEn}”</p>
                              )}
                            </li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* SYNONYMS & COLLOCATIONS (Datamuse API) */}
              {(result.synonyms.length > 0 || result.collocations.length > 0) && (
                <section className="dict-section-card">
                  <h4 className="dict-section-title">유의어 &amp; 자주 함께 쓰는 연어 (클릭 시 이동)</h4>
                  {result.synonyms.length > 0 && (
                    <div style={{ marginBottom: '10px' }}>
                      <span className="dict-sub-chip-label">유의어 (Synonyms)</span>
                      <div className="dict-tag-cloud">
                        {result.synonyms.map((syn) => (
                          <button
                            key={syn}
                            type="button"
                            className="dict-mini-chip"
                            onClick={() => void runSearch(syn)}
                          >
                            {syn}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {result.collocations.length > 0 && (
                    <div>
                      <span className="dict-sub-chip-label">함께 자주 쓰이는 연관어 (Context)</span>
                      <div className="dict-tag-cloud">
                        {result.collocations.map((col) => (
                          <button
                            key={col}
                            type="button"
                            className="dict-mini-chip"
                            onClick={() => void runSearch(col)}
                          >
                            {col}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* EXTERNAL REFERENCE LINK */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <a
                  href={`https://en.dict.naver.com/#/search?query=${encodeURIComponent(result.headword)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-action-btn"
                  style={{ textDecoration: 'none' }}
                >
                  <ExternalLink size={14} /> 네이버 사전에서 더 보기
                </a>
                <a
                  href={`https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(result.headword)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-action-btn"
                  style={{ textDecoration: 'none' }}
                >
                  <ExternalLink size={14} /> Cambridge 영영사전
                </a>
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
