import { useState } from 'react';
import {
  Brain,
  Check,
  Eye,
  EyeOff,
  Layers,
  Sparkles,
  Volume2
} from 'lucide-react';
import { WEEK1_MODULES } from '../data/week1MasterCourse.ts';
import type {
  DayLessonModule,
  SpacedReviewCard,
  VocabEntry
} from '../types/course.ts';
import { speakEnglish } from '../utils/speech.ts';

interface VocabAndReviewBookProps {
  module: DayLessonModule;
  masteredVocabIds: string[];
  reviewDeck: SpacedReviewCard[];
  onSelectDay: (dayNumber: number) => void;
  onToggleVocabMastered: (vocabId: string) => void;
  onPromoteReviewCard: (cardId: string) => void;
}

type MaskMode = 'none' | 'hide-ko' | 'hide-en';
type VocabTab = 'sheet' | 'popquiz' | 'review';

function maskHeadwordInExample(example: string, word: string): string {
  const firstToken = word.split(/[\s~-]+/)[0];
  if (!firstToken || firstToken.length < 2) return example;
  const regex = new RegExp(firstToken, 'gi');
  return example.replace(regex, '________');
}

export function VocabAndReviewBook({
  module,
  masteredVocabIds,
  reviewDeck,
  onSelectDay,
  onToggleVocabMastered,
  onPromoteReviewCard
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
      {/* DAY SWITCHER */}
      <div className="day-pill-switcher" role="tablist" aria-label="단어장 단원 선택">
        {WEEK1_MODULES.map((m) => (
          <button
            key={m.dayNumber}
            id={`vocab-day-switch-${m.dayNumber}`}
            type="button"
            className={`day-switch-chip ${m.dayNumber === module.dayNumber ? 'active' : ''}`}
            onClick={() => onSelectDay(m.dayNumber)}
          >
            Day 0{m.dayNumber} (15단어)
          </button>
        ))}
      </div>

      <div className="studio-header-row">
        <div>
          <span className="pill-tag pill-brand">{module.dayBadge} · 필수 어휘 &amp; 연어</span>
          <h1 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.95rem)', marginTop: '8px' }}>
            단어장 &amp; 에빙하우스 오답 복습함
          </h1>
          <p style={{ color: 'var(--text-sub)', marginTop: '6px' }}>
            셀로판지 가림막으로 15개 핵심 구동사·연어를 암기하고, 스펠링 팝퀴즈와 주기별 오답 복습으로 영구 기억에 각인합니다.
          </p>
        </div>

        <div className="mini-stat-chip">
          <span className="mini-stat-label">Day 0{module.dayNumber} 암기율</span>
          <strong>{masteredInDayCount} / {module.vocabList.length} 완료</strong>
        </div>
      </div>

      {/* 3 SUB-TABS */}
      <div className="submode-tab-bar" style={{ marginBottom: '24px' }}>
        <button
          id="vocab-tab-sheet"
          type="button"
          className={`submode-tab-btn ${subTab === 'sheet' ? 'active' : ''}`}
          onClick={() => setSubTab('sheet')}
        >
          <Layers size={16} />
          <span>15단어 셀로판지 암기장</span>
        </button>

        <button
          id="vocab-tab-popquiz"
          type="button"
          className={`submode-tab-btn ${subTab === 'popquiz' ? 'active' : ''}`}
          onClick={() => setSubTab('popquiz')}
        >
          <Sparkles size={16} />
          <span>15문항 예문 빈칸 팝퀴즈</span>
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
                  <div className="section-label-between">
                    <span className="pill-tag pill-subtle">
                      #{String(idx + 1).padStart(2, '0')} · {entry.pos}
                    </span>

                    <div style={{ display: 'flex', gap: '6px' }}>
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
                        <h2 style={{ fontFamily: 'var(--font-en)', fontSize: '1.32rem', fontWeight: 800 }}>
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
                Day 0{module.dayNumber} 필수 어휘 15문항 스펠링 팝퀴즈
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
          SUB-TAB 3: EBBINGHAUS SPACED REPETITION VAULT
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
                스프린트나 단원평가에서 틀린 문장, 1:1 과외에서 저장한 패러프레이징 문장이 이곳에 자동으로 모입니다.
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
