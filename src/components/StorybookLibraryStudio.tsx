import { useEffect, useRef, useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Headphones,
  Square,
  Volume2
} from 'lucide-react';
import { GRADED_STORYBOOKS } from '../data/gradedStorybooks.ts';
import type { MasteryStage } from '../types/academy.ts';
import type { SpacedReviewCard } from '../types/course.ts';
import { speakEnglish, stopSpeaking } from '../utils/speech.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface StorybookLibraryStudioProps {
  completedStorybookIds: string[];
  onCompleteStorybook: (bookId: string) => void;
  onAddReviewCard: (card: SpacedReviewCard) => void;
  onOpenDictionary: (word?: string) => void;
}

export function StorybookLibraryStudio({
  completedStorybookIds,
  onCompleteStorybook,
  onAddReviewCard,
  onOpenDictionary
}: StorybookLibraryStudioProps) {
  const [stageFilter, setStageFilter] = useState<'all' | MasteryStage>('all');
  const [selectedBookId, setSelectedBookId] = useState(GRADED_STORYBOOKS[0]?.id ?? 'sb01');
  const [chapterIdx, setChapterIdx] = useState(0);
  const [speechRate, setSpeechRate] = useState(0.92);
  const [showSlashes, setShowSlashes] = useState(false);
  const [showKorean, setShowKorean] = useState(true);
  const [playingSentIdx, setPlayingSentIdx] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizGradedMap, setQuizGradedMap] = useState<Record<string, boolean>>({});
  const [savedSentIds, setSavedSentIds] = useState<Record<string, boolean>>({});

  const autoPlayRef = useRef(false);

  useEffect(() => {
    return () => {
      autoPlayRef.current = false;
      stopSpeaking();
    };
  }, []);

  const visibleBooks =
    stageFilter === 'all'
      ? GRADED_STORYBOOKS
      : GRADED_STORYBOOKS.filter((b) =>
          stageFilter === 'stage3'
            ? b.stage === 'stage3' || b.stage === 'stage4'
            : b.stage === stageFilter
        );

  const activeBook =
    GRADED_STORYBOOKS.find((b) => b.id === selectedBookId) ?? GRADED_STORYBOOKS[0];
  const activeChapter = activeBook?.chapters[chapterIdx] ?? activeBook?.chapters[0];
  const isQuizGraded = Boolean(quizGradedMap[activeBook.id]);

  const stopAudiobook = () => {
    autoPlayRef.current = false;
    setPlayingSentIdx(null);
    stopSpeaking();
  };

  const playChapterFrom = (startIdx: number) => {
    if (!activeChapter) return;
    autoPlayRef.current = true;
    const step = (idx: number) => {
      if (!autoPlayRef.current || idx >= activeChapter.sentences.length) {
        autoPlayRef.current = false;
        setPlayingSentIdx(null);
        return;
      }
      setPlayingSentIdx(idx);
      speakEnglish(activeChapter.sentences[idx].en, speechRate, () => {
        if (autoPlayRef.current) {
          step(idx + 1);
        }
      });
    };
    step(startIdx);
  };

  const handleSelectBook = (id: string) => {
    stopAudiobook();
    setSelectedBookId(id);
    setChapterIdx(0);
  };

  const handleSaveSentenceCard = (sentId: string, en: string, ko: string, phrase?: string) => {
    const today = new Date().toISOString().slice(0, 10);
    onAddReviewCard({
      id: `story-${sentId}-${savedSentIds[sentId] ? '1' : '0'}-${activeBook.bookNumber}`,
      promptKo: ko,
      targetEn: en,
      noteKo: phrase ? `원서 핵심 표현 · ${phrase}` : `영어 원서 · ${activeBook.titleEn}`,
      sourceLabel: `스토리북 #${activeBook.bookNumber} ${activeBook.titleKo}`,
      intervalDays: 1,
      dueDate: today,
      reviewCount: 0,
      mastered: false
    });
    setSavedSentIds((prev) => ({ ...prev, [sentId]: true }));
  };

  const handleGradeBookQuiz = () => {
    setQuizGradedMap((prev) => ({ ...prev, [activeBook.id]: true }));
    const correct = activeBook.quiz.filter((q) => quizAnswers[q.id] === q.answer).length;
    if (correct >= 2) {
      onCompleteStorybook(activeBook.id);
    }
  };

  return (
    <section className="stack-lg" aria-label="단계별 영어 원서 스토리북 & 오디오북 도서관">
      {/* BOOKSHELF HEADER & SELECTOR */}
      <div className="surface-card">
        <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
          <div>
            <span className="pill-tag pill-brand">유치원 동화(Pre-A1) → 초등 모험 → 중학 추리 → 고등 문학·교양(C1)</span>
            <h2 style={{ fontSize: '1.35rem', marginTop: '6px' }}>
              단계별 영어 원서 스토리북 &amp; 싱크 오디오북 12권 (완독 {completedStorybookIds.length}/{GRADED_STORYBOOKS.length})
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {(
              [
                ['all', '전체 12권'],
                ['stage0', '유치원·파닉스 (3권)'],
                ['stage1', '초등 모험 (3권)'],
                ['stage2', '중학 미스터리 (3권)'],
                ['stage3', '고등 문학·교양 (3권)']
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                id={`storybook-filter-${key}`}
                type="button"
                className={`day-switch-chip ${stageFilter === key ? 'active' : ''}`}
                onClick={() => setStageFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="roleplay-scenario-grid">
          {visibleBooks.map((book) => {
            const isSelected = book.id === activeBook.id;
            const isDone = completedStorybookIds.includes(book.id);
            return (
              <button
                key={book.id}
                id={`storybook-card-${book.id}`}
                type="button"
                className={`roleplay-select-card ${isSelected ? 'active' : ''}`}
                onClick={() => handleSelectBook(book.id)}
              >
                <div className="roleplay-thumb-wrap">
                  <img src={book.coverImage} alt={book.titleEn} loading="lazy" />
                  <span className="card-corner-level">{book.cefrBadge}</span>
                  {isDone && (
                    <span className="card-corner-score">
                      <CheckCircle2 size={12} /> 완독
                    </span>
                  )}
                </div>
                <div style={{ padding: '12px', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.73rem', fontWeight: 750, color: 'var(--brand)' }}>
                    #{String(book.bookNumber).padStart(2, '0')} · {book.tierLabelKo} · {book.genreKo}
                  </span>
                  <strong style={{ display: 'block', fontSize: '0.96rem', marginTop: '3px', fontFamily: 'var(--font-en)' }}>
                    {book.titleEn}
                  </strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-sub)' }}>
                    {book.titleKo} ({book.chapters.length}챕터 · {book.estimatedMin}분)
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ACTIVE AUDIOBOOK & STORY READER */}
      {activeBook && activeChapter && (
        <div className="surface-card">
          <div className="storybook-reader-header">
            <div className="storybook-cover-mini">
              <img src={activeBook.coverImage} alt={activeBook.titleEn} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="pill-tag pill-coral">{activeBook.cefrBadge}</span>
                <span className="pill-tag pill-brand">{activeBook.tierLabelKo}</span>
                <span className="pill-tag pill-subtle">{activeBook.genreKo}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-en)', fontSize: '1.52rem', marginTop: '8px' }}>
                {activeBook.titleEn}
              </h2>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.94rem', marginTop: '2px' }}>
                {activeBook.titleKo} — {activeBook.koreanBlurb}
              </p>

              {/* AUDIOBOOK CONTROLS */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '14px', alignItems: 'center' }}>
                {playingSentIdx === null ? (
                  <button
                    id="storybook-autoplay-btn"
                    type="button"
                    className="btn-solid-brand"
                    style={{ padding: '9px 16px', fontSize: '0.88rem' }}
                    onClick={() => playChapterFrom(0)}
                  >
                    <Headphones size={16} /> 챕터 {activeChapter.chapterNumber} 오디오북 연속 낭독
                  </button>
                ) : (
                  <button
                    id="storybook-stop-btn"
                    type="button"
                    className="btn-solid-coral"
                    style={{ padding: '9px 16px', fontSize: '0.88rem' }}
                    onClick={stopAudiobook}
                  >
                    <Square size={15} /> 낭독 정지 (문장 {playingSentIdx + 1})
                  </button>
                )}

                <div style={{ display: 'flex', gap: '4px' }}>
                  {[0.78, 0.92, 1.0, 1.12].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      className={`day-switch-chip ${speechRate === rate ? 'active' : ''}`}
                      onClick={() => setSpeechRate(rate)}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className={`day-switch-chip ${showSlashes ? 'active' : ''}`}
                  onClick={() => setShowSlashes((v) => !v)}
                >
                  직독직해 (/)
                </button>
                <button
                  type="button"
                  className={`day-switch-chip ${showKorean ? 'active' : ''}`}
                  onClick={() => setShowKorean((v) => !v)}
                >
                  한글 해석 {showKorean ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>
          </div>

          {/* CHAPTER TABS */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px', marginBottom: '16px' }}>
            {activeBook.chapters.map((ch, idx) => (
              <button
                key={ch.chapterNumber}
                id={`storybook-ch-${ch.chapterNumber}`}
                type="button"
                className={`transform-pill-btn ${idx === chapterIdx ? 'active' : ''}`}
                onClick={() => {
                  stopAudiobook();
                  setChapterIdx(idx);
                }}
              >
                Ch.{ch.chapterNumber} · {ch.titleKo}
              </button>
            ))}
          </div>

          {/* CHAPTER PAGE */}
          <div className="storybook-paper-sheet">
            <div style={{ marginBottom: '14px', paddingBottom: '10px', borderBottom: '1px solid var(--line-light)' }}>
              <span className="pill-tag pill-subtle">Chapter {activeChapter.chapterNumber}</span>
              <h3 style={{ fontFamily: 'var(--font-book)', fontSize: '1.35rem', marginTop: '6px' }}>
                {activeChapter.titleEn}
              </h3>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-sub)' }}>{activeChapter.titleKo}</span>
            </div>

            <div className="stack-sm">
              {activeChapter.sentences.map((sent, idx) => {
                const isPlaying = playingSentIdx === idx;
                return (
                  <div
                    key={sent.id}
                    className={`storybook-sentence-row ${isPlaying ? 'playing' : ''}`}
                  >
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: 'var(--font-book)', fontSize: '1.12rem', lineHeight: 1.75 }}>
                        <InteractiveText
                          text={showSlashes ? sent.slashBroken : sent.en}
                          onLookupWord={onOpenDictionary}
                        />
                      </p>
                      {showKorean && (
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-sub)', marginTop: '4px' }}>
                          {sent.ko}
                        </p>
                      )}
                      {sent.keyPhrase && (
                        <span className="pill-tag pill-amber" style={{ fontSize: '0.73rem', marginTop: '6px' }}>
                          핵심 표현: {sent.keyPhrase}
                        </span>
                      )}
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexShrink: 0, alignItems: 'center' }}>
                      <button
                        type="button"
                        className="inline-audio-btn"
                        onClick={() => {
                          stopAudiobook();
                          setPlayingSentIdx(idx);
                          speakEnglish(sent.en, speechRate, () => setPlayingSentIdx(null));
                        }}
                      >
                        <Volume2 size={13} /> 듣기
                      </button>
                      <button
                        type="button"
                        className="inline-audio-btn"
                        disabled={Boolean(savedSentIds[sent.id])}
                        onClick={() =>
                          handleSaveSentenceCard(sent.id, sent.en, sent.ko, sent.keyPhrase)
                        }
                      >
                        {savedSentIds[sent.id] ? '✓ 저장됨' : '+ 복습함'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* KEY VOCAB BAR */}
          <div className="insight-card-box" style={{ marginTop: '18px' }}>
            <strong style={{ color: 'var(--brand)' }}>
              <BookOpen size={15} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
              이 원서의 핵심 단어 6선 (클릭 시 원어민 발음 &amp; 사전)
            </strong>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '10px' }}>
              {activeBook.keyVocab.map((kv) => (
                <button
                  key={kv.word}
                  type="button"
                  className="digraph-word-pill"
                  onClick={() => {
                    speakEnglish(kv.word, 0.9);
                    onOpenDictionary(kv.word);
                  }}
                >
                  <Volume2 size={12} />
                  <strong>{kv.word}</strong>
                  <small>{kv.meaningKo}</small>
                </button>
              ))}
            </div>
          </div>

          {/* 3-QUESTION BOOK COMPREHENSION QUIZ */}
          <div className="grammar-quiz-panel" style={{ marginTop: '22px' }}>
            <div className="section-label-between" style={{ marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <span className="pill-tag pill-coral">독서 완주 인증 퀴즈</span>
                <h3 style={{ fontSize: '1.16rem', marginTop: '6px' }}>
                  내용 이해 3문항 (2문항 이상 정답 시 완독 인증 +75 XP!)
                </h3>
              </div>
              {completedStorybookIds.includes(activeBook.id) && (
                <span className="pill-tag pill-brand">
                  <Award size={14} /> 완독 인증 완료 ✓
                </span>
              )}
            </div>

            <div className="stack-md">
              {activeBook.quiz.map((q, qIdx) => {
                const picked = quizAnswers[q.id];
                const isCorrect = picked === q.answer;
                return (
                  <div key={q.id} className="quiz-card-clean">
                    <p style={{ fontWeight: 750, marginBottom: '10px' }}>
                      Q{qIdx + 1}. {q.questionKo}
                    </p>
                    <div className="quiz-options-grid">
                      {q.options.map((opt, oIdx) => {
                        const selected = picked === opt;
                        let cls = 'option-choice-btn';
                        if (isQuizGraded) {
                          if (opt === q.answer) cls += ' correct-ans';
                          else if (selected && opt !== q.answer) cls += ' wrong-ans';
                        } else if (selected) {
                          cls += ' selected';
                        }
                        return (
                          <button
                            key={opt}
                            id={`sb-quiz-${q.id}-${oIdx}`}
                            type="button"
                            className={cls}
                            onClick={() => {
                              if (isQuizGraded) return;
                              setQuizAnswers((prev) => ({ ...prev, [q.id]: opt }));
                            }}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {isQuizGraded && (
                      <div className={`feedback-banner ${isCorrect ? 'ok' : 'warn'}`} style={{ marginTop: '10px' }}>
                        <div>
                          <strong>{isCorrect ? '✓ 정답!' : `✗ 오답 · 정답: ${q.answer}`}</strong>
                          <p style={{ fontSize: '0.86rem', marginTop: '3px' }}>{q.explanationKo}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: '14px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                id="storybook-grade-quiz-btn"
                type="button"
                className="btn-solid-brand"
                disabled={activeBook.quiz.some((q) => !quizAnswers[q.id])}
                onClick={handleGradeBookQuiz}
              >
                독서 퀴즈 채점 &amp; 완독 인증받기
              </button>
              <button
                type="button"
                className="btn-outline"
                onClick={() => onCompleteStorybook(activeBook.id)}
              >
                <CheckCircle2 size={15} /> 다 읽었어요 (완독 체크)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
