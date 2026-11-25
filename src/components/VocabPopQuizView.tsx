import React, { useState } from 'react';
import {
  BookMarked,
  CheckCircle2,
  Eye,
  EyeOff,
  PenTool,
  Printer,
  RotateCcw,
  Volume2
} from 'lucide-react';
import type {
  AcademyDivisionId,
  LearnerCalibration,
  ReviewItem,
  VocabItem
} from '../types/learning';
import { speakEnglish } from '../utils/speech';

interface VocabPopQuizViewProps {
  vocabDeck: VocabItem[];
  activeDivision: AcademyDivisionId;
  calibration: LearnerCalibration;
  masteredIds: string[];
  bestScore: number;
  onToggleMastered: (vocabId: string) => void;
  onCompletePopQuiz: (
    scorePercent: number,
    wrongItems: Omit<ReviewItem, 'id' | 'stage' | 'dueToday'>[]
  ) => void;
}

type MaskMode = 'none' | 'hide-ko' | 'hide-en';

export const VocabPopQuizView: React.FC<VocabPopQuizViewProps> = ({
  vocabDeck,
  activeDivision,
  calibration,
  masteredIds,
  bestScore,
  onToggleMastered,
  onCompletePopQuiz
}) => {
  const [mode, setMode] = useState<'study-sheet' | 'pop-quiz'>('study-sheet');
  const [divFilter, setDivFilter] = useState<'all' | AcademyDivisionId>('all');
  const [maskMode, setMaskMode] = useState<MaskMode>('hide-ko');
  const [peekedIds, setPeekedIds] = useState<Record<string, boolean>>({});

  // Pop quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  const filteredVocab =
    divFilter === 'all'
      ? vocabDeck
      : vocabDeck.filter((v) => v.division === divFilter);

  const isImmersion = calibration.koreanScaffold === 'immersion';

  const normalize = (s: string) =>
    s
      .toLowerCase()
      .replace(/[’']/g, "'")
      .replace(/\s+/g, ' ')
      .trim();

  const handleSubmitQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    let okCount = 0;
    const wrongQueue: Omit<ReviewItem, 'id' | 'stage' | 'dueToday'>[] = [];

    for (const item of filteredVocab) {
      const userVal = quizAnswers[item.id] ?? '';
      const isOk = normalize(userVal) === normalize(item.word);
      if (isOk) {
        okCount += 1;
      } else {
        wrongQueue.push({
          koreanPrompt: `[보카 쪽지시험 오답] "${item.meaningKo}" (${item.partOfSpeech})`,
          targetEnglish: `${item.word} — ${item.exampleEn}`,
          explanationKo: item.confusingPairTip,
          sourceMode: 'vocab-quiz'
        });
      }
    }

    const pct = Math.round((okCount / Math.max(1, filteredVocab.length)) * 100);
    setQuizScore(pct);
    setQuizSubmitted(true);
    onCompletePopQuiz(pct, wrongQueue);
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
  };

  return (
    <div>
      <section className="hero-intro no-print">
        <div>
          <h1>학원식 필수 영단어 가림판 암기장 &amp; 등원 쪽지시험</h1>
          <p className="hero-desc">
            옛날 빨간 셀로판지 단어장처럼 <strong>뜻 가리기 / 스펠링 가리기</strong>로 빠르게 인출 암기하고,{' '}
            <strong>1분 등원 스펠링 쪽지시험</strong>으로 어휘 구멍을 메우세요.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span className="metric-chip">
            암기 완료 {masteredIds.length}/{vocabDeck.length}
          </span>
          <span className="metric-chip warm">쪽지시험 최고 {bestScore}점</span>
          <button
            id="vocab-print-btn"
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => window.print()}
          >
            <Printer size={14} /> 단어 시험지 인쇄
          </button>
        </div>
      </section>

      {/* Mode Switcher & Division Filter */}
      <div
        className="no-print"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '20px'
        }}
      >
        <div className="filter-pills">
          <button
            id="vocab-mode-sheet"
            type="button"
            className={`filter-pill ${mode === 'study-sheet' ? 'active' : ''}`}
            onClick={() => setMode('study-sheet')}
          >
            <BookMarked size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
            셀로판지 가림판 암기장
          </button>
          <button
            id="vocab-mode-quiz"
            type="button"
            className={`filter-pill ${mode === 'pop-quiz' ? 'active' : ''}`}
            onClick={() => setMode('pop-quiz')}
          >
            <PenTool size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
            1분 스펠링 쪽지시험 응시
          </button>
        </div>

        <div className="filter-pills">
          {(
            [
              { id: 'all', label: '전 학부 단어' },
              { id: 'foundation', label: '왕초보 기초' },
              { id: 'school-csat', label: '내신·수능' },
              { id: 'career-opic', label: '오픽·취업' },
              { id: 'global-biz', label: '비즈니스 실무' }
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              id={`vocab-div-${tab.id}`}
              type="button"
              className={`filter-pill ${divFilter === tab.id ? 'active' : ''}`}
              onClick={() => {
                setDivFilter(tab.id);
                handleResetQuiz();
              }}
            >
              {tab.label}
              {tab.id === activeDivision ? ' (내 학부)' : ''}
            </button>
          ))}
        </div>
      </div>

      {/* Print Header */}
      <div className="print-only-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #111', paddingBottom: '8px', marginBottom: '16px' }}>
          <strong>코어브릿지 어학원 · 일일 영단어 등원 쪽지시험지</strong>
          <span>성명: _______________ &nbsp; 통과 기준: 80점 &nbsp; 점수: _____ / 100</span>
        </div>
      </div>

      {/* =========================================================
          MODE 1: Red-Cellophane Masking Vocabulary Sheet
          ========================================================= */}
      {mode === 'study-sheet' && (
        <section className="side-panel-card">
          <div
            className="no-print"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
              flexWrap: 'wrap',
              gap: '8px'
            }}
          >
            <strong style={{ fontSize: '0.96rem' }}>
              가림판(셀로판지) 모드 선택 — 가려진 칸을 클릭하면 살짝 확인할 수 있습니다
            </strong>
            <div style={{ display: 'flex', gap: '6px' }}>
              {(
                [
                  { id: 'none' as MaskMode, label: '전체 펼치기' },
                  { id: 'hide-ko' as MaskMode, label: '뜻 가리기 (영➔한 인출)' },
                  { id: 'hide-en' as MaskMode, label: '영단어 가리기 (한➔영 인출)' }
                ]
              ).map((m) => (
                <button
                  key={m.id}
                  id={`mask-btn-${m.id}`}
                  type="button"
                  className={`btn btn-sm ${maskMode === m.id ? 'btn-warm' : 'btn-secondary'}`}
                  onClick={() => {
                    setMaskMode(m.id);
                    setPeekedIds({});
                  }}
                >
                  {m.id === 'none' ? <Eye size={14} /> : <EyeOff size={14} />}
                  <span>{m.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="unit-list" style={{ marginBottom: 0 }}>
            {filteredVocab.map((item) => {
              const isMastered = masteredIds.includes(item.id);
              const isPeeked = Boolean(peekedIds[item.id]);
              const hideWord = maskMode === 'hide-en' && !isPeeked;
              const hideMeaning = maskMode === 'hide-ko' && !isPeeked;

              return (
                <article
                  key={item.id}
                  className="dictation-line"
                  style={{ marginBottom: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '14px', alignItems: 'center' }}
                >
                  {/* Word Column */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span className="tag tag-forest">K-Lv.{item.kLevel}</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
                        {item.partOfSpeech} · {item.phonetic}
                      </span>
                    </div>

                    {hideWord ? (
                      <button
                        id={`peek-en-${item.id}`}
                        type="button"
                        onClick={() =>
                          setPeekedIds((prev) => ({ ...prev, [item.id]: true }))
                        }
                        style={{
                          padding: '8px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px dashed var(--accent-warm)',
                          background: 'var(--accent-warm-soft)',
                          color: 'var(--accent-warm)',
                          fontWeight: 700,
                          fontSize: '0.86rem'
                        }}
                      >
                        영단어 가림판 (클릭해 확인)
                      </button>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <strong style={{ fontFamily: 'var(--font-en-display)', fontSize: '1.22rem' }}>
                          {item.word}
                        </strong>
                        <button
                          id={`vocab-audio-${item.id}`}
                          type="button"
                          className="btn btn-ghost btn-sm no-print"
                          onClick={() => speakEnglish(item.word, 0.92)}
                        >
                          <Volume2 size={15} />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Meaning & Nuance Tip Column */}
                  <div>
                    {hideMeaning ? (
                      <button
                        id={`peek-ko-${item.id}`}
                        type="button"
                        onClick={() =>
                          setPeekedIds((prev) => ({ ...prev, [item.id]: true }))
                        }
                        style={{
                          padding: '8px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px dashed var(--accent-primary)',
                          background: 'var(--accent-primary-soft)',
                          color: 'var(--accent-primary)',
                          fontWeight: 700,
                          fontSize: '0.86rem'
                        }}
                      >
                        의미 가림판 (뜻 떠올린 뒤 클릭)
                      </button>
                    ) : (
                      <>
                        <p style={{ fontWeight: 750, fontSize: '0.98rem' }}>
                          {isImmersion ? item.englishDef : item.meaningKo}
                        </p>
                        <p style={{ fontSize: '0.82rem', color: 'var(--ink-secondary)', marginTop: '3px' }}>
                          💡 {item.confusingPairTip}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Example & Mastered Check */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                    <div style={{ fontSize: '0.85rem' }}>
                      <p style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.96rem', fontWeight: 600 }}>
                        “{item.exampleEn}”
                      </p>
                      {!isImmersion && (
                        <p style={{ color: 'var(--ink-muted)', fontSize: '0.8rem' }}>
                          {item.exampleKo}
                        </p>
                      )}
                    </div>

                    <button
                      id={`vocab-master-${item.id}`}
                      type="button"
                      className={`btn btn-sm no-print ${isMastered ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={() => onToggleMastered(item.id)}
                    >
                      <CheckCircle2 size={14} />
                      <span>{isMastered ? '암기완료' : '체크'}</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* =========================================================
          MODE 2: 1-Minute Academy Entrance Spelling Pop Quiz
          ========================================================= */}
      {mode === 'pop-quiz' && (
        <form className="side-panel-card" onSubmit={handleSubmitQuiz}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
            <div>
              <span className="tag tag-warm">학원 등원 필수 코스 · 통과 기준 80점</span>
              <h2 style={{ fontSize: '1.16rem', marginTop: '4px' }}>
                영단어·구동사 철자 인출 쪽지시험 ({filteredVocab.length}문항)
              </h2>
            </div>

            {quizSubmitted && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <strong style={{ fontSize: '1.15rem', color: (quizScore ?? 0) >= 80 ? 'var(--status-success)' : 'var(--accent-warm)' }}>
                  점수: {quizScore}점 / 100점
                </strong>
                <button
                  id="vocab-quiz-retry"
                  type="button"
                  className="btn btn-ghost btn-sm no-print"
                  onClick={handleResetQuiz}
                >
                  <RotateCcw size={14} /> 재시험 응시
                </button>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredVocab.map((item, idx) => {
              const ans = quizAnswers[item.id] ?? '';
              const ok = normalize(ans) === normalize(item.word);
              return (
                <div key={item.id} className="dictation-line" style={{ marginBottom: 0 }}>
                  <p style={{ fontWeight: 700 }}>
                    {idx + 1}. {isImmersion ? item.englishDef : item.meaningKo}{' '}
                    <span style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', fontWeight: 500 }}>
                      ({item.partOfSpeech})
                    </span>
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px', flexWrap: 'wrap' }}>
                    <input
                      id={`popquiz-input-${item.id}`}
                      type="text"
                      className="text-input"
                      style={{ maxWidth: '280px', background: 'var(--bg-surface)' }}
                      value={ans}
                      disabled={quizSubmitted}
                      onChange={(e) =>
                        setQuizAnswers((prev) => ({ ...prev, [item.id]: e.target.value }))
                      }
                      placeholder={`첫 글자 힌트: ${item.word[0]}...`}
                    />
                    {quizSubmitted && (
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: ok ? 'var(--status-success)' : 'var(--status-error)' }}>
                        {ok ? '⭕ 정답!' : `❌ 오답 (정답: ${item.word}) → 복습금고 자동 등록`}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {!quizSubmitted && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }} className="no-print">
              <button id="submit-popquiz-btn" type="submit" className="btn btn-primary btn-lg">
                쪽지시험 제출 및 오답 노트 연동
              </button>
            </div>
          )}
        </form>
      )}
    </div>
  );
};
