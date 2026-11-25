import { useState } from 'react';
import {
  BookMarked,
  Brain,
  Check,
  Eye,
  EyeOff,
  Layers,
  Search,
  Sparkles,
  Trash2,
  Volume2
} from 'lucide-react';
import { LEVEL_INFO_MAP } from '../data/levels.ts';
import type {
  DayCompletionRecord,
  DayLessonModule,
  SavedDictionaryWord,
  SpacedReviewCard,
  VocabEntry
} from '../types/course.ts';
import { speakEnglish } from '../utils/speech.ts';
import { DayNavigatorBar } from './DayNavigatorBar.tsx';

interface VocabAndReviewBookProps {
  module: DayLessonModule;
  dayRecords: Record<number, DayCompletionRecord>;
  masteredVocabIds: string[];
  savedDictionaryWords: SavedDictionaryWord[];
  reviewDeck: SpacedReviewCard[];
  onSelectDay: (dayNumber: number) => void;
  onToggleVocabMastered: (vocabId: string) => void;
  onRemoveSavedDictionaryWord: (wordId: string) => void;
  onPromoteReviewCard: (cardId: string) => void;
  onOpenDictionary: (word?: string) => void;
}

type MaskMode = 'none' | 'hide-ko' | 'hide-en';
type VocabTab = 'sheet' | 'popquiz' | 'my-dict' | 'review';

function maskHeadwordInExample(example: string, word: string): string {
  const firstToken = word.split(/[\s~-]+/)[0];
  if (!firstToken || firstToken.length < 2) return example;
  const escaped = firstToken.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escaped, 'gi');
  return example.replace(regex, '________');
}

export function VocabAndReviewBook({
  module,
  dayRecords,
  masteredVocabIds,
  savedDictionaryWords,
  reviewDeck,
  onSelectDay,
  onToggleVocabMastered,
  onRemoveSavedDictionaryWord,
  onPromoteReviewCard,
  onOpenDictionary
}: VocabAndReviewBookProps) {
  const [subTab, setSubTab] = useState<VocabTab>('sheet');
  const [maskMode, setMaskMode] = useState<MaskMode>('none');
  const [peekIds, setPeekIds] = useState<Record<string, boolean>>({});

  // Pop quiz states
  const [quizInputs, setQuizInputs] = useState<Record<string, string>>({});
  const [quizGraded, setQuizGraded] = useState(false);

  // Review deck states
  const [revealedCardIds, setRevealedCardIds] = useState<Record<string, boolean>>({});
  const [intervalFilter, setIntervalFilter] = useState<'all' | 1 | 3 | 7 | 14 | 30>('all');

  const dayPad = String(module.dayNumber).padStart(2, '0');

  const changeMaskMode = (nextMode: MaskMode) => {
    setMaskMode(nextMode);
    setPeekIds({});
  };

  const togglePeek = (id: string) => {
    setPeekIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isQuizCorrect = (entry: VocabEntry): boolean => {
    const val = (quizInputs[entry.id] ?? '').trim().toLowerCase();
    if (!val) return false;
    const cleanTarget = entry.word.replace(/~/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
    const firstWord = cleanTarget.split(' ')[0];
    return val === cleanTarget || (firstWord.length >= 3 && val.includes(firstWord));
  };

  const quizScoreCount = quizGraded
    ? module.vocabList.filter((v) => isQuizCorrect(v)).length
    : 0;

  const activeReviewCards = reviewDeck.filter((c) => {
    if (c.mastered) return false;
    if (intervalFilter === 'all') return true;
    return c.intervalDays === intervalFilter;
  });

  const masteredInDayCount = module.vocabList.filter((v) =>
    masteredVocabIds.includes(v.id)
  ).length;

  return (
    <main className="page-wrap">
      {/* 30-DAY SWITCHER */}
      <DayNavigatorBar
        selectedDay={module.dayNumber}
        dayRecords={dayRecords}
        onSelectDay={onSelectDay}
      />

      <div className="studio-header-row">
        <div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span className="pill-tag pill-brand">{module.dayBadge} · 필수 어휘 &amp; 연어</span>
            <span className="pill-tag pill-coral">
              {LEVEL_INFO_MAP[module.cefrLevel].shortLabel}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.95rem)', marginTop: '8px' }}>
            단어장 · 내 영한사전 보관함 &amp; 오답 복습함
          </h1>
          <p style={{ color: 'var(--text-sub)', marginTop: '6px' }}>
            30일 코스 450단어 암기, 실시간 영한사전에서 직접 저장한 나만의 단어장, 그리고 에빙하우스 오답 복습을 한곳에서 관리합니다.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <button
            id="vocab-open-dictionary-btn"
            type="button"
            className="btn-solid-brand"
            onClick={() => onOpenDictionary('')}
          >
            <Search size={16} /> 실시간 영한사전 열기
          </button>
          <div className="mini-stat-chip">
            <span className="mini-stat-label">Day {dayPad} 암기율</span>
            <strong>{masteredInDayCount} / {module.vocabList.length} 완료</strong>
          </div>
        </div>
      </div>

      {/* 4 SUB-TABS */}
      <div className="submode-tab-bar" style={{ marginBottom: '24px' }}>
        <button
          id="vocab-tab-sheet"
          type="button"
          className={`submode-tab-btn ${subTab === 'sheet' ? 'active' : ''}`}
          onClick={() => setSubTab('sheet')}
        >
          <Layers size={16} />
          <span>Day {dayPad} 15단어 암기장</span>
        </button>

        <button
          id="vocab-tab-popquiz"
          type="button"
          className={`submode-tab-btn ${subTab === 'popquiz' ? 'active' : ''}`}
          onClick={() => setSubTab('popquiz')}
        >
          <Sparkles size={16} />
          <span>15문항 스펠링 팝퀴즈</span>
        </button>

        <button
          id="vocab-tab-my-dict"
          type="button"
          className={`submode-tab-btn ${subTab === 'my-dict' ? 'active' : ''}`}
          onClick={() => setSubTab('my-dict')}
        >
          <BookMarked size={16} />
          <span>내 사전 저장 단어 ({savedDictionaryWords.length})</span>
        </button>

        <button
          id="vocab-tab-review"
          type="button"
          className={`submode-tab-btn ${subTab === 'review' ? 'active' : ''}`}
          onClick={() => setSubTab('review')}
        >
          <Brain size={16} />
          <span>망각곡선 오답 복습함 ({reviewDeck.filter((c) => !c.mastered).length})</span>
        </button>
      </div>

      {/* =======================================================
          SUB-TAB 1: 15-WORD CELLOPHANE VOCAB SHEET
         ======================================================= */}
      {subTab === 'sheet' && (
        <section aria-label="셀로판지 단어 암기장">
          <div className="cellophane-bar">
            <span style={{ fontWeight: 750, fontSize: '0.92rem' }}>셀로판지 암기 가림막 모드:</span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                id="mask-mode-none-btn"
                type="button"
                className={`day-switch-chip ${maskMode === 'none' ? 'active' : ''}`}
                onClick={() => changeMaskMode('none')}
              >
                <Eye size={14} /> 전체 보기
              </button>
              <button
                id="mask-mode-ko-btn"
                type="button"
                className={`day-switch-chip ${maskMode === 'hide-ko' ? 'active' : ''}`}
                onClick={() => changeMaskMode('hide-ko')}
              >
                <EyeOff size={14} /> 한국어 뜻 가리기
              </button>
              <button
                id="mask-mode-en-btn"
                type="button"
                className={`day-switch-chip ${maskMode === 'hide-en' ? 'active' : ''}`}
                onClick={() => changeMaskMode('hide-en')}
              >
                <EyeOff size={14} /> 영단어 가리기
              </button>
            </div>
          </div>

          <div className="vocab-cards-grid">
            {module.vocabList.map((entry, idx) => {
              const isMastered = masteredVocabIds.includes(entry.id);
              const isPeeked = Boolean(peekIds[entry.id]);
              const hideEn = maskMode === 'hide-en' && !isPeeked;
              const hideKo = maskMode === 'hide-ko' && !isPeeked;

              return (
                <article
                  key={entry.id}
                  className={`vocab-item-card ${isMastered ? 'mastered' : ''}`}
                >
                  <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '6px' }}>
                    <span className="pill-tag pill-subtle">
                      #{String(idx + 1).padStart(2, '0')} · {entry.pos}
                    </span>

                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        className="inline-audio-btn"
                        onClick={() => onOpenDictionary(entry.word.replace(/~/g, '').trim())}
                        title="영한사전에서 유의어·영영풀이·원어민 MP3 더 보기"
                      >
                        <Search size={13} /> 사전
                      </button>
                      <button
                        id={`vocab-audio-${entry.id}`}
                        type="button"
                        className="inline-audio-btn"
                        onClick={() => speakEnglish(entry.word.replace(/~/g, ''), 0.94)}
                      >
                        <Volume2 size={14} /> 발음
                      </button>
                      <button
                        id={`vocab-master-toggle-${entry.id}`}
                        type="button"
                        className={`master-check-btn ${isMastered ? 'done' : ''}`}
                        onClick={() => onToggleVocabMastered(entry.id)}
                      >
                        <Check size={14} />
                        <span>{isMastered ? '암기됨' : '암기 체크'}</span>
                      </button>
                    </div>
                  </div>

                  {/* ENGLISH HEADWORD */}
                  <div style={{ marginTop: '12px' }}>
                    {hideEn ? (
                      <button
                        id={`peek-en-${entry.id}`}
                        type="button"
                        className="cellophane-mask-btn"
                        onClick={() => togglePeek(entry.id)}
                      >
                        영단어 확인하기 (클릭)
                      </button>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
                        <h2 style={{ fontFamily: 'var(--font-en)', fontSize: '1.3rem', fontWeight: 800 }}>
                          {entry.word}
                        </h2>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                          {entry.phonetic}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* KOREAN MEANING */}
                  <div style={{ marginTop: '8px' }}>
                    {hideKo ? (
                      <button
                        id={`peek-ko-${entry.id}`}
                        type="button"
                        className="cellophane-mask-btn coral"
                        onClick={() => togglePeek(entry.id)}
                      >
                        한국어 뜻 확인하기 (클릭)
                      </button>
                    ) : (
                      <p style={{ fontWeight: 750, fontSize: '1.04rem', color: 'var(--brand)' }}>
                        {entry.meaningKo}
                      </p>
                    )}
                  </div>

                  <p className="vocab-nuance-tip">{entry.nuanceTipKo}</p>

                  <div className="vocab-example-box">
                    <div className="section-label-between">
                      <p style={{ fontFamily: 'var(--font-en)', fontWeight: 650, fontSize: '0.94rem' }}>
                        {hideEn ? maskHeadwordInExample(entry.exampleEn, entry.word) : entry.exampleEn}
                      </p>
                      <button
                        id={`vocab-ex-audio-${entry.id}`}
                        type="button"
                        className="inline-audio-btn"
                        onClick={() => speakEnglish(entry.exampleEn, 0.96)}
                        aria-label="예문 발음 듣기"
                      >
                        <Volume2 size={13} />
                      </button>
                    </div>
                    {!hideKo && (
                      <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', marginTop: '4px' }}>
                        {entry.exampleKo}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* =======================================================
          SUB-TAB 2: 15-ITEM ACTIVE RECALL SPELLING POP QUIZ
         ======================================================= */}
      {subTab === 'popquiz' && (
        <section className="exam-paper-sheet" aria-label="15단어 스펠링 팝퀴즈">
          <div className="exam-paper-header">
            <div>
              <span className="pill-tag pill-coral">말해보카 스타일 능동 인출 테스트</span>
              <h2 style={{ fontSize: '1.5rem', marginTop: '8px' }}>
                Day {dayPad} 필수 어휘 15문항 스펠링 팝퀴즈
              </h2>
              <p style={{ color: 'var(--text-sub)', marginTop: '4px' }}>
                우리말 뜻과 영어 예문 문맥을 보고 핵심 영단어·구동사를 직접 타이핑해 보세요.
              </p>
            </div>
            {quizGraded && (
              <div className="red-score-stamp">
                {quizScoreCount} / {module.vocabList.length} 정답
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {module.vocabList.map((entry, idx) => {
              const ok = quizGraded ? isQuizCorrect(entry) : null;
              return (
                <div key={entry.id} className="popquiz-row">
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 750 }}>
                      {idx + 1}. {entry.meaningKo}{' '}
                      <span style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.86rem' }}>
                        ({entry.pos})
                      </span>
                    </p>
                    <p style={{ fontFamily: 'var(--font-en)', color: 'var(--text-body)', marginTop: '4px', fontSize: '0.95rem' }}>
                      예문: {maskHeadwordInExample(entry.exampleEn, entry.word)}
                    </p>
                  </div>

                  <div style={{ minWidth: '240px' }}>
                    <input
                      id={`popquiz-input-${entry.id}`}
                      type="text"
                      className="input-clean"
                      disabled={quizGraded}
                      value={quizInputs[entry.id] ?? ''}
                      onChange={(e) =>
                        setQuizInputs((prev) => ({ ...prev, [entry.id]: e.target.value }))
                      }
                      placeholder={`첫 글자 힌트: ${entry.word[0]}...`}
                    />
                    {quizGraded && (
                      <p
                        style={{
                          marginTop: '6px',
                          fontSize: '0.86rem',
                          fontWeight: 750,
                          color: ok ? 'var(--ok)' : 'var(--danger)'
                        }}
                      >
                        {ok ? '⭕ 정확합니다!' : `❌ 정답: ${entry.word}`}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '12px' }}>
            {!quizGraded ? (
              <button
                id="grade-popquiz-btn"
                type="button"
                className="btn-solid-brand"
                onClick={() => setQuizGraded(true)}
              >
                팝퀴즈 채점하기
              </button>
            ) : (
              <button
                id="reset-popquiz-btn"
                type="button"
                className="btn-solid-coral"
                onClick={() => {
                  setQuizInputs({});
                  setQuizGraded(false);
                }}
              >
                다시 풀기
              </button>
            )}
          </div>
        </section>
      )}

      {/* =======================================================
          SUB-TAB 3: MY SAVED DICTIONARY VOCABULARY BOOK
         ======================================================= */}
      {subTab === 'my-dict' && (
        <section aria-label="내 영한사전 저장 단어장">
          {savedDictionaryWords.length === 0 ? (
            <div className="surface-card" style={{ textAlign: 'center', padding: '48px 24px' }}>
              <BookMarked size={34} style={{ color: 'var(--brand)', marginBottom: '10px' }} />
              <h2 style={{ fontSize: '1.25rem' }}>아직 영한사전에서 저장한 단어가 없습니다</h2>
              <p style={{ color: 'var(--text-sub)', marginTop: '8px', maxWidth: '520px', marginInline: 'auto' }}>
                상단 [영한사전]에서 모르는 단어를 검색하거나 지문·대화 속 영어 단어를 클릭한 뒤 [내 단어장에 저장]을 누르면 이곳에 나만의 맞춤형 단어장이 자동으로 쌓입니다.
              </p>
              <button
                type="button"
                className="btn-solid-brand"
                style={{ marginTop: '18px' }}
                onClick={() => onOpenDictionary('serendipity')}
              >
                <Search size={16} /> 영한사전으로 첫 단어 찾아 저장하기
              </button>
            </div>
          ) : (
            <div className="vocab-cards-grid">
              {savedDictionaryWords.map((item) => (
                <article key={item.id} className="vocab-item-card">
                  <div className="section-label-between">
                    <span className="pill-tag pill-brand">{item.pos}</span>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        type="button"
                        className="inline-audio-btn"
                        onClick={() => onOpenDictionary(item.word)}
                      >
                        <Search size={13} /> 사전
                      </button>
                      <button
                        type="button"
                        className="inline-audio-btn"
                        onClick={() => {
                          if (item.audioUrl) {
                            const audio = new Audio(item.audioUrl);
                            void audio.play().catch(() => speakEnglish(item.word, 0.94));
                          } else {
                            speakEnglish(item.word, 0.94);
                          }
                        }}
                      >
                        <Volume2 size={13} /> 발음
                      </button>
                      <button
                        type="button"
                        className="inline-audio-btn"
                        onClick={() => onRemoveSavedDictionaryWord(item.id)}
                        title="삭제"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontFamily: 'var(--font-en)', fontSize: '1.3rem', fontWeight: 800 }}>
                      {item.word}
                    </h3>
                    {item.phonetic && (
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                        {item.phonetic}
                      </span>
                    )}
                  </div>

                  <p style={{ fontWeight: 750, color: 'var(--brand)', marginTop: '8px' }}>
                    {item.meaningKo}
                  </p>
                  {item.meaningEn && (
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', marginTop: '4px' }}>
                      {item.meaningEn}
                    </p>
                  )}
                  <div className="vocab-example-box" style={{ marginTop: '10px' }}>
                    <p style={{ fontFamily: 'var(--font-en)', fontSize: '0.92rem', fontWeight: 650 }}>
                      “{item.exampleEn}”
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      {/* =======================================================
          SUB-TAB 4: EBBINGHAUS SPACED REPETITION VAULT
         ======================================================= */}
      {subTab === 'review' && (
        <section aria-label="에빙하우스 망각곡선 복습함">
          <div className="cellophane-bar">
            <span style={{ fontWeight: 750, fontSize: '0.92rem' }}>복습 주기 필터:</span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {(['all', 1, 3, 7, 14, 30] as const).map((iv) => (
                <button
                  key={String(iv)}
                  id={`review-filter-${iv}`}
                  type="button"
                  className={`day-switch-chip ${intervalFilter === iv ? 'active' : ''}`}
                  onClick={() => setIntervalFilter(iv)}
                >
                  {iv === 'all' ? '전체 대기 카드' : `D+${iv} 주기`}
                </button>
              ))}
            </div>
          </div>

          {activeReviewCards.length === 0 ? (
            <div className="surface-card" style={{ textAlign: 'center', padding: '48px 24px' }}>
              <h2 style={{ fontSize: '1.25rem' }}>현재 주기에 대기 중인 복습 카드가 없습니다!</h2>
              <p style={{ color: 'var(--text-sub)', marginTop: '8px' }}>
                스프린트·단원평가 오답, 1:1 과외 첨삭, 영한사전 검색 카드가 이곳에 자동으로 모입니다.
              </p>
            </div>
          ) : (
            <div className="vocab-cards-grid">
              {activeReviewCards.map((card) => {
                const revealed = Boolean(revealedCardIds[card.id]);
                return (
                  <div key={card.id} className="vocab-item-card">
                    <div className="section-label-between">
                      <span className="pill-tag pill-coral">D+{card.intervalDays} 복습 주기</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        {card.sourceLabel}
                      </span>
                    </div>

                    <p style={{ fontWeight: 750, fontSize: '1.08rem', marginTop: '14px' }}>
                      {card.promptKo}
                    </p>

                    {!revealed ? (
                      <button
                        id={`reveal-review-card-${card.id}`}
                        type="button"
                        className="btn-outline"
                        style={{ width: '100%', marginTop: '16px' }}
                        onClick={() =>
                          setRevealedCardIds((prev) => ({ ...prev, [card.id]: true }))
                        }
                      >
                        입으로 먼저 영작해 본 뒤 정답 펼치기
                      </button>
                    ) : (
                      <div className="vocab-example-box" style={{ marginTop: '14px' }}>
                        <div className="section-label-between">
                          <p style={{ fontFamily: 'var(--font-en)', fontWeight: 800, color: 'var(--brand)', fontSize: '1.05rem' }}>
                            {card.targetEn}
                          </p>
                          <button
                            id={`listen-review-card-${card.id}`}
                            type="button"
                            className="inline-audio-btn"
                            onClick={() => speakEnglish(card.targetEn, 0.96)}
                          >
                            <Volume2 size={14} /> 발음
                          </button>
                        </div>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', marginTop: '6px' }}>
                          {card.noteKo}
                        </p>

                        <button
                          id={`promote-review-card-${card.id}`}
                          type="button"
                          className="btn-solid-brand"
                          style={{ width: '100%', marginTop: '12px' }}
                          onClick={() => onPromoteReviewCard(card.id)}
                        >
                          {card.intervalDays === 30
                            ? '완전 체화 졸업 처리하기'
                            : '1초 만에 인출 성공 → 다음 주기로 승급'}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
