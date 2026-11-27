import { useEffect, useRef, useState } from 'react';
import {
  Award,
  CheckCircle2,
  Clock,
  Headphones,
  Play,
  RotateCcw,
  Square,
  Volume2
} from 'lucide-react';
import { MOCK_EXAM_PAPERS } from '../data/mockExamBank.ts';
import type { SpacedReviewCard } from '../types/course.ts';
import type {
  ListeningDialogueLine,
  MockExamAttemptRecord,
  MockExamPaper
} from '../types/v5.ts';
import { speakEnglish, stopSpeaking } from '../utils/speech.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface MockExamSimulatorProps {
  mockExamHistory: MockExamAttemptRecord[];
  onSubmitMockAttempt: (
    attempt: MockExamAttemptRecord,
    missedCards: SpacedReviewCard[],
    missedTags: string[]
  ) => void;
  onOpenDictionary: (word?: string) => void;
}

function calcCsatGrade(score: number): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 {
  if (score >= 90) return 1;
  if (score >= 80) return 2;
  if (score >= 70) return 3;
  if (score >= 60) return 4;
  if (score >= 50) return 5;
  if (score >= 40) return 6;
  if (score >= 30) return 7;
  if (score >= 20) return 8;
  return 9;
}

function formatTimer(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function MockExamSimulator({
  mockExamHistory,
  onSubmitMockAttempt,
  onOpenDictionary
}: MockExamSimulatorProps) {
  const [selectedExamId, setSelectedExamId] = useState(MOCK_EXAM_PAPERS[0]?.id ?? 'exam-elem-1');
  const [phase, setPhase] = useState<'lobby' | 'running' | 'graded'>('lobby');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [remainingSec, setRemainingSec] = useState(15 * 60);
  const [elapsedSec, setElapsedSec] = useState(0);
  const [playingQuestionId, setPlayingQuestionId] = useState<string | null>(null);
  const [playingSpeaker, setPlayingSpeaker] = useState<'W' | 'M' | null>(null);
  const [playCounts, setPlayCounts] = useState<Record<string, number>>({});
  const [latestResult, setLatestResult] = useState<MockExamAttemptRecord | null>(null);

  const audioRunRef = useRef(false);

  const activeExam: MockExamPaper =
    MOCK_EXAM_PAPERS.find((e) => e.id === selectedExamId) ?? MOCK_EXAM_PAPERS[0];

  useEffect(() => {
    if (phase !== 'running') return;
    const timer = window.setInterval(() => {
      setElapsedSec((e) => e + 1);
      setRemainingSec((r) => (r > 0 ? r - 1 : 0));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    return () => {
      audioRunRef.current = false;
      stopSpeaking();
    };
  }, []);

  const stopListeningAudio = () => {
    audioRunRef.current = false;
    setPlayingQuestionId(null);
    setPlayingSpeaker(null);
    stopSpeaking();
  };

  const playListeningDialogue = (qId: string, lines: ListeningDialogueLine[]) => {
    stopListeningAudio();
    audioRunRef.current = true;
    setPlayingQuestionId(qId);
    setPlayCounts((prev) => ({ ...prev, [qId]: (prev[qId] ?? 0) + 1 }));

    const playLine = (idx: number) => {
      if (!audioRunRef.current || idx >= lines.length) {
        audioRunRef.current = false;
        setPlayingQuestionId(null);
        setPlayingSpeaker(null);
        return;
      }
      const line = lines[idx];
      setPlayingSpeaker(line.speaker);
      const pitch = line.speaker === 'W' ? 1.14 : 0.86;
      speakEnglish(line.textEn, 0.94, () => {
        if (audioRunRef.current) {
          window.setTimeout(() => playLine(idx + 1), 240);
        }
      }, pitch);
    };
    playLine(0);
  };

  const handleStartExam = (exam: MockExamPaper) => {
    stopListeningAudio();
    setSelectedExamId(exam.id);
    setAnswers({});
    setPlayCounts({});
    setRemainingSec(exam.timeLimitMin * 60);
    setElapsedSec(0);
    setLatestResult(null);
    setPhase('running');
  };

  const handleSubmitExam = () => {
    stopListeningAudio();
    const today = new Date().toISOString().slice(0, 10);
    let totalPts = 0;
    let earnedPts = 0;
    let correctCount = 0;
    const missedCards: SpacedReviewCard[] = [];
    const missedTags: string[] = [];

    for (const q of activeExam.questions) {
      totalPts += q.points;
      if (answers[q.id] === q.answer) {
        earnedPts += q.points;
        correctCount += 1;
      } else {
        missedTags.push(q.grammarTag);
        missedCards.push({
          id: `mock-${activeExam.id}-${q.id}-${mockExamHistory.length + 1}`,
          promptKo: `[${activeExam.badge} #${q.number}] ${q.questionKo}`,
          targetEn: `정답: ${q.answer}`,
          noteKo: q.explanationKo,
          sourceLabel: `실전 모의고사 · ${activeExam.badge}`,
          intervalDays: 1,
          dueDate: today,
          reviewCount: 0,
          mastered: false
        });
      }
    }

    const score = totalPts > 0 ? Math.round((earnedPts / totalPts) * 100) : 0;
    const attempt: MockExamAttemptRecord = {
      id: `attempt-${activeExam.id}-${mockExamHistory.length + 1}`,
      examId: activeExam.id,
      examTitleKo: activeExam.titleKo,
      takenAt: today,
      score,
      csatGrade: calcCsatGrade(score),
      correctCount,
      totalQuestions: activeExam.questions.length,
      elapsedSec
    };

    setLatestResult(attempt);
    setPhase('graded');
    onSubmitMockAttempt(attempt, missedCards, missedTags);
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <section className="stack-lg" aria-label="실전 모의고사 및 영어 듣기평가 시험장">
      {/* LOBBY: CHOOSE EXAM PAPER */}
      {phase === 'lobby' && (
        <>
          <div className="surface-card">
            <span className="pill-tag pill-coral">초등 인증 · 중학 내신 · 고등 학력평가 · 수능 1등급 파이널</span>
            <h2 style={{ fontSize: '1.4rem', marginTop: '8px' }}>
              실전 타이머 모의고사 &amp; 2인 원어민 영어 듣기평가 시험장
            </h2>
            <p style={{ color: 'var(--text-sub)', marginTop: '6px' }}>
              매 회차 <strong>듣기평가 5문항(남·여 2인 원어민 음성 대화) + 어휘·어법·독해 10문항 = 15문항</strong>으로 구성되어 있으며, 제출 즉시 <strong>수능 절대평가 1~9등급 성적표</strong>와 듣기 대본·오답 복습 노트가 자동 발급됩니다.
            </p>

            <div className="mock-exam-grid" style={{ marginTop: '18px' }}>
              {MOCK_EXAM_PAPERS.map((exam) => {
                const attempts = mockExamHistory.filter((a) => a.examId === exam.id);
                const best = attempts.length > 0 ? Math.max(...attempts.map((a) => a.score)) : null;
                return (
                  <div key={exam.id} className="mock-exam-card">
                    <div className="section-label-between" style={{ gap: '8px' }}>
                      <span className="pill-tag pill-brand">{exam.badge}</span>
                      <span className="pill-tag pill-subtle">{exam.cefrRange}</span>
                    </div>
                    <h3 style={{ fontSize: '1.14rem', marginTop: '10px' }}>{exam.titleKo}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-sub)', marginTop: '4px', lineHeight: 1.55 }}>
                      {exam.subtitleKo}
                    </p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '12px', fontSize: '0.82rem', color: 'var(--text-body)', fontWeight: 700 }}>
                      <span>⏱ 제한 {exam.timeLimitMin}분</span>
                      <span>·</span>
                      <span>🎧 듣기 5 + 독해·어법 10</span>
                    </div>
                    {best !== null && (
                      <div style={{ marginTop: '8px', fontSize: '0.84rem', color: 'var(--ok)', fontWeight: 750 }}>
                        ✓ 최고 기록: {best}점 ({calcCsatGrade(best)}등급)
                      </div>
                    )}
                    <button
                      id={`start-mock-exam-${exam.id}`}
                      type="button"
                      className="btn-solid-brand"
                      style={{ width: '100%', marginTop: '14px' }}
                      onClick={() => handleStartExam(exam)}
                    >
                      <Play size={15} /> 실전 타이머 시험 시작하기
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {mockExamHistory.length > 0 && (
            <div className="surface-card">
              <h3 style={{ fontSize: '1.14rem', marginBottom: '12px' }}>
                <Award size={17} style={{ verticalAlign: 'middle', marginRight: '6px', color: 'var(--brand)' }} />
                최근 모의고사 응시 성적표 ({mockExamHistory.length}회)
              </h3>
              <div className="stack-sm">
                {mockExamHistory.slice(0, 6).map((rec) => (
                  <div key={rec.id} className="saved-essay-row section-label-between" style={{ flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <strong>{rec.examTitleKo}</strong>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-sub)', marginLeft: '10px' }}>
                        {rec.takenAt} · {rec.correctCount}/{rec.totalQuestions}정답 · 소요 {formatTimer(rec.elapsedSec)}
                      </span>
                    </div>
                    <span className="pill-tag pill-coral">
                      {rec.score}점 · 수능 {rec.csatGrade}등급
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* RUNNING OR GRADED EXAM SHEET */}
      {(phase === 'running' || phase === 'graded') && (
        <>
          {/* STICKY EXAM TIMER & OMR RIBBON */}
          <div className="surface-card mock-omr-bar">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <span className="pill-tag pill-brand">{activeExam.badge}</span>
                <strong style={{ marginLeft: '10px', fontSize: '1.08rem' }}>{activeExam.titleKo}</strong>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                {phase === 'running' ? (
                  <>
                    <span className={`pill-tag ${remainingSec < 120 ? 'pill-coral' : 'pill-amber'}`}>
                      <Clock size={14} /> 남은 시간 {formatTimer(remainingSec)}
                    </span>
                    <span style={{ fontSize: '0.86rem', fontWeight: 750 }}>
                      마킹 {answeredCount} / {activeExam.questions.length}
                    </span>
                    <button
                      id="submit-mock-exam-btn"
                      type="button"
                      className="btn-solid-brand"
                      style={{ padding: '8px 16px', fontSize: '0.88rem' }}
                      onClick={handleSubmitExam}
                    >
                      OMR 최종 제출 &amp; 등급 채점
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn-outline"
                      style={{ padding: '8px 14px', fontSize: '0.86rem' }}
                      onClick={() => handleStartExam(activeExam)}
                    >
                      <RotateCcw size={14} /> 다시 응시하기
                    </button>
                    <button
                      type="button"
                      className="btn-solid-brand"
                      style={{ padding: '8px 14px', fontSize: '0.86rem' }}
                      onClick={() => setPhase('lobby')}
                    >
                      다른 모의고사 선택
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* OMR QUICK-JUMP GRID */}
            <div className="omr-pills-row" style={{ marginTop: '12px' }}>
              {activeExam.questions.map((q) => {
                const picked = answers[q.id];
                let cls = 'omr-num-pill';
                if (phase === 'graded') {
                  cls += picked === q.answer ? ' correct' : ' wrong';
                } else if (picked) {
                  cls += ' marked';
                }
                return (
                  <a key={q.id} href={`#mock-q-${q.number}`} className={cls}>
                    {q.number}
                  </a>
                );
              })}
            </div>
          </div>

          {/* GRADED OFFICIAL SCORECARD */}
          {phase === 'graded' && latestResult && (
            <div className="essay-rubric-card">
              <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '14px' }}>
                <div>
                  <span className="pill-tag pill-coral">수능 절대평가 공식 등급 판정 완료 (+100 XP)</span>
                  <h2 style={{ fontSize: '1.65rem', marginTop: '8px' }}>
                    {latestResult.score}점 · 영어 {latestResult.csatGrade}등급
                  </h2>
                  <p style={{ color: 'var(--text-sub)', marginTop: '4px' }}>
                    정답 {latestResult.correctCount} / {latestResult.totalQuestions}문항 · 소요 시간 {formatTimer(latestResult.elapsedSec)} · 틀린 문항은 SM-2 오답 복습함과 취약점 클리닉에 자동 저장되었습니다.
                  </p>
                </div>
                <div className="csat-grade-stamp">
                  <strong>{latestResult.csatGrade}등급</strong>
                  <small>{latestResult.score} / 100</small>
                </div>
              </div>
            </div>
          )}

          {/* ALL 15 QUESTIONS */}
          <div className="stack-md">
            {activeExam.questions.map((q) => {
              const picked = answers[q.id];
              const isCorrect = picked === q.answer;
              const isPlayingThis = playingQuestionId === q.id;
              return (
                <article
                  key={q.id}
                  id={`mock-q-${q.number}`}
                  className="surface-card"
                >
                  <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span className="pill-tag pill-brand">문항 {q.number}</span>
                      <span className="pill-tag pill-subtle">{q.section}</span>
                      <span className="pill-tag pill-amber">{q.points}점</span>
                    </div>
                    {phase === 'graded' && (
                      <span style={{ fontWeight: 800, color: isCorrect ? 'var(--ok)' : 'var(--danger)' }}>
                        {isCorrect ? '✓ 정답' : '✗ 오답'}
                      </span>
                    )}
                  </div>

                  <p style={{ fontWeight: 750, fontSize: '1.04rem', marginBottom: '12px' }}>
                    {q.questionKo}
                  </p>

                  {/* MULTI-VOICE AUDIO LISTENING PLAYER */}
                  {q.listeningDialogue && q.listeningDialogue.length > 0 && (
                    <div className="listening-player-box">
                      <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <Headphones size={20} style={{ color: 'var(--brand)' }} />
                          <div>
                            <strong style={{ fontSize: '0.94rem' }}>
                              원어민 2인 대화 듣기평가 ({q.listeningDialogue.length}턴)
                            </strong>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>
                              {isPlayingThis
                                ? `🔊 재생 중: ${playingSpeaker === 'W' ? '여성 화자 (Woman)' : '남성 화자 (Man)'}...`
                                : `재생 횟수: ${playCounts[q.id] ?? 0}회 (실전처럼 집중해 들어보세요)`}
                            </div>
                          </div>
                        </div>

                        {isPlayingThis ? (
                          <button
                            type="button"
                            className="btn-solid-coral"
                            style={{ padding: '7px 14px', fontSize: '0.84rem' }}
                            onClick={stopListeningAudio}
                          >
                            <Square size={14} /> 듣기 중지
                          </button>
                        ) : (
                          <button
                            id={`mock-play-audio-${q.id}`}
                            type="button"
                            className="btn-solid-brand"
                            style={{ padding: '7px 14px', fontSize: '0.84rem' }}
                            onClick={() => playListeningDialogue(q.id, q.listeningDialogue!)}
                          >
                            <Volume2 size={15} /> 듣기 음성 재생
                          </button>
                        )}
                      </div>

                      {phase === 'graded' && (
                        <div className="listening-script-reveal" style={{ marginTop: '12px' }}>
                          <strong style={{ fontSize: '0.82rem', color: 'var(--brand)', display: 'block', marginBottom: '6px' }}>
                            📜 듣기평가 전체 대본 &amp; 해석 (채점 후 공개)
                          </strong>
                          {q.listeningDialogue.map((ln, idx) => (
                            <div key={idx} style={{ fontSize: '0.88rem', marginBottom: '5px' }}>
                              <strong>{ln.speaker === 'W' ? 'W:' : 'M:'}</strong>{' '}
                              <span style={{ fontFamily: 'var(--font-en)' }}>
                                <InteractiveText text={ln.textEn} onLookupWord={onOpenDictionary} />
                              </span>
                              <div style={{ color: 'var(--text-sub)', fontSize: '0.82rem', paddingLeft: '20px' }}>
                                {ln.textKo}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* READING / GRAMMAR PASSAGE */}
                  {q.passageEn && (
                    <div className="csat-stimulus-box" style={{ lineHeight: 1.75 }}>
                      <InteractiveText text={q.passageEn} onLookupWord={onOpenDictionary} />
                    </div>
                  )}

                  {/* OPTIONS */}
                  <div className="choice-stack" style={{ marginTop: '10px' }}>
                    {q.options.map((opt, oIdx) => {
                      const selected = picked === opt;
                      let cls = 'option-choice-btn';
                      if (phase === 'graded') {
                        if (opt === q.answer) cls += ' correct-ans';
                        else if (selected && opt !== q.answer) cls += ' wrong-ans';
                      } else if (selected) {
                        cls += ' selected';
                      }
                      return (
                        <button
                          key={opt}
                          id={`mock-opt-${q.id}-${oIdx}`}
                          type="button"
                          className={cls}
                          onClick={() => {
                            if (phase === 'graded') return;
                            setAnswers((prev) => ({ ...prev, [q.id]: opt }));
                          }}
                        >
                          {oIdx + 1}. {opt}
                        </button>
                      );
                    })}
                  </div>

                  {phase === 'graded' && (
                    <div className={`feedback-banner ${isCorrect ? 'ok' : 'warn'}`} style={{ marginTop: '12px' }}>
                      <div>
                        <strong>
                          {isCorrect ? '✓ 정답입니다!' : `✗ 오답 · 정답: ${q.answer}`} ({q.grammarTag})
                        </strong>
                        <p style={{ fontSize: '0.88rem', marginTop: '4px' }}>{q.explanationKo}</p>
                        {q.passageKo && (
                          <p style={{ fontSize: '0.84rem', color: 'var(--text-sub)', marginTop: '6px' }}>
                            🇰🇷 지문 해석: {q.passageKo}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {phase === 'running' && (
            <div style={{ textAlign: 'center', marginTop: '8px' }}>
              <button
                type="button"
                className="btn-solid-brand"
                style={{ padding: '14px 32px', fontSize: '1.02rem' }}
                onClick={handleSubmitExam}
              >
                <CheckCircle2 size={18} /> OMR 답안지 최종 제출 ({answeredCount}/{activeExam.questions.length} 마킹됨)
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
