import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookmarkPlus,
  CheckCircle2,
  FilePenLine,
  GraduationCap,
  Headphones,
  Mic,
  MicOff,
  Pause,
  Play,
  Send,
  Sparkles,
  Volume2
} from 'lucide-react';
import type {
  CurriculumUnit,
  ParaphraseResult,
  UserProgress
} from '../types/learning';
import { analyzeAndParaphrase } from '../utils/paraphraseEngine';
import {
  isSpeechRecognitionSupported,
  speakEnglish,
  startSpeechRecognition,
  stopSpeaking
} from '../utils/speech';

interface DeepClassStudioProps {
  units: CurriculumUnit[];
  unit: CurriculumUnit;
  progress: UserProgress;
  onSelectUnit: (unit: CurriculumUnit) => void;
  onSaveNote: (unitId: string, note: string) => void;
  onRecordParaphrase: (result: ParaphraseResult, addToVault: boolean) => void;
  onCompleteDeepClass: (unitId: string, minutesSpent: number, outputCount: number) => void;
  onBackHome: () => void;
}

interface ChatMessage {
  id: string;
  role: 'tutor' | 'student';
  textEn: string;
  subKo?: string;
}

export const DeepClassStudio: React.FC<DeepClassStudioProps> = ({
  units,
  unit,
  progress,
  onSelectUnit,
  onSaveNote,
  onRecordParaphrase,
  onCompleteDeepClass,
  onBackHome
}) => {
  const [period, setPeriod] = useState<1 | 2 | 3>(1);
  const [chapterIdx, setChapterIdx] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [isPlayingLecture, setIsPlayingLecture] = useState(false);

  // Period 2: Dictation & Workbook Writing
  const [dictationAnswers, setDictationAnswers] = useState<Record<string, string>>({});
  const [dictationChecked, setDictationChecked] = useState<Record<string, boolean>>({});
  const [workbookDraft, setWorkbookDraft] = useState('');
  const [workbookFeedback, setWorkbookFeedback] = useState<ParaphraseResult | null>(null);
  const [showModelWriting, setShowModelWriting] = useState(false);

  // Period 3: 1:1 Tutoring Chat & Ringle-style Shared Doc
  const [tutorTurnIdx, setTutorTurnIdx] = useState(0);
  const [awaitingFollowUp, setAwaitingFollowUp] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [studentReply, setStudentReply] = useState('');
  const [sessionParaphrases, setSessionParaphrases] = useState<ParaphraseResult[]>([]);
  const [isRecordingMic, setIsRecordingMic] = useState(false);
  const [classCompletedBanner, setClassCompletedBanner] = useState(false);

  // Class timer
  const [classSeconds, setClassSeconds] = useState(0);
  const turnStartRef = useRef<number>(Date.now());
  const stopMicRef = useRef<(() => void) | null>(null);

  const currentNote = progress.lectureNotes[unit.id] ?? '';

  // Reset state on unit change
  useEffect(() => {
    stopSpeaking();
    setPeriod(1);
    setChapterIdx(0);
    setIsPlayingLecture(false);
    setDictationAnswers({});
    setDictationChecked({});
    setWorkbookDraft('');
    setWorkbookFeedback(null);
    setShowModelWriting(false);
    setTutorTurnIdx(0);
    setAwaitingFollowUp(false);
    setSessionParaphrases([]);
    setClassCompletedBanner(false);
    setClassSeconds(0);

    const firstTurn = unit.tutorTurns[0];
    if (firstTurn) {
      setMessages([
        {
          id: 'init-tutor-msg',
          role: 'tutor',
          textEn: firstTurn.tutorQuestionEn,
          subKo: firstTurn.tutorQuestionKo
        }
      ]);
    }
    turnStartRef.current = Date.now();
  }, [unit]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setClassSeconds((s) => s + 1);
    }, 1000);
    return () => {
      window.clearInterval(timer);
      stopSpeaking();
    };
  }, []);

  const currentChapter = unit.lectureChapters[chapterIdx] ?? unit.lectureChapters[0];
  const currentTutorTurn = unit.tutorTurns[tutorTurnIdx] ?? unit.tutorTurns[0];

  const handleToggleLecturePlay = () => {
    if (isPlayingLecture) {
      stopSpeaking();
      setIsPlayingLecture(false);
      return;
    }
    setIsPlayingLecture(true);
    speakEnglish(currentChapter.exampleEn, playbackSpeed, () => {
      setIsPlayingLecture(false);
    });
  };

  const handleAppendFormulaToNote = () => {
    const snippet = `[${currentChapter.title}]\n• 핵심 공식: ${currentChapter.boardFormula}\n• 대표 예문: ${currentChapter.exampleEn} (${currentChapter.exampleKo})\n\n`;
    if (!currentNote.includes(currentChapter.boardFormula)) {
      onSaveNote(unit.id, currentNote + snippet);
    }
  };

  const handleCheckDictation = (itemId: string) => {
    setDictationChecked((prev) => ({ ...prev, [itemId]: true }));
  };

  const handleSubmitWorkbook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!workbookDraft.trim()) return;
    const result = analyzeAndParaphrase(workbookDraft, `${unit.title} · 2교시 워크북 첨삭`);
    setWorkbookFeedback(result);
    onRecordParaphrase(result, true);
  };

  const handleSendTutorReply = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = studentReply.trim();
    if (!trimmed || !currentTutorTurn) return;

    const latencySec = Math.max(
      1.1,
      Number(((Date.now() - turnStartRef.current) / 1000).toFixed(1))
    );

    const newStudentMsg: ChatMessage = {
      id: `st-${Date.now()}`,
      role: 'student',
      textEn: trimmed
    };

    const paraResult = analyzeAndParaphrase(
      trimmed,
      `${unit.title} · 3교시 1:1 과외`,
      latencySec
    );
    setSessionParaphrases((prev) => [paraResult, ...prev]);
    onRecordParaphrase(paraResult, false);
    setStudentReply('');

    // Tutor responds with either a follow-up probe (if first reply on this turn) or moves to next turn
    if (!awaitingFollowUp) {
      const probeMsg: ChatMessage = {
        id: `tu-probe-${Date.now()}`,
        role: 'tutor',
        textEn: currentTutorTurn.followUpProbeEn,
        subKo: '꼬리질문 디펜스: 방금 답변에 구체적인 이유나 에피소드 1~2문장을 덧붙여 말해보세요!'
      };
      setMessages((prev) => [...prev, newStudentMsg, probeMsg]);
      setAwaitingFollowUp(true);
      speakEnglish(currentTutorTurn.followUpProbeEn, 0.96);
    } else if (tutorTurnIdx + 1 < unit.tutorTurns.length) {
      const nextTurn = unit.tutorTurns[tutorTurnIdx + 1];
      const nextMsg: ChatMessage = {
        id: `tu-next-${Date.now()}`,
        role: 'tutor',
        textEn: nextTurn.tutorQuestionEn,
        subKo: nextTurn.tutorQuestionKo
      };
      setMessages((prev) => [...prev, newStudentMsg, nextMsg]);
      setTutorTurnIdx((idx) => idx + 1);
      setAwaitingFollowUp(false);
      speakEnglish(nextTurn.tutorQuestionEn, 0.96);
    } else {
      const wrapMsg: ChatMessage = {
        id: `tu-done-${Date.now()}`,
        role: 'tutor',
        textEn:
          'Fantastic job today! Check out your 3-tier paraphrasing notes on the right board and try shadowing the upgraded sentences aloud.',
        subKo:
          '오늘 1:1 과외 문답을 훌륭히 소화하셨습니다! 우측 첨삭 보드의 원어민 업그레이드 표현을 소리 내어 읽고 수업을 마무리해보세요.'
      };
      setMessages((prev) => [...prev, newStudentMsg, wrapMsg]);
      speakEnglish(wrapMsg.textEn, 0.96);
    }

    turnStartRef.current = Date.now();
  };

  const handleTutorMic = () => {
    if (isRecordingMic) {
      stopMicRef.current?.();
      setIsRecordingMic(false);
      return;
    }
    setIsRecordingMic(true);
    const stopFn = startSpeechRecognition(
      (transcript) => {
        setStudentReply((prev) => (prev ? `${prev} ${transcript}` : transcript));
        setIsRecordingMic(false);
      },
      () => setIsRecordingMic(false),
      () => setIsRecordingMic(false)
    );
    if (!stopFn) {
      setIsRecordingMic(false);
    } else {
      stopMicRef.current = stopFn;
    }
  };

  const handleFinishFullClass = () => {
    const minutesSpent = Math.max(
      30,
      Math.round(classSeconds / 60) || unit.deepClassMinutes
    );
    const outputs =
      Object.keys(dictationChecked).length +
      (workbookFeedback ? 2 : 0) +
      sessionParaphrases.length;
    onCompleteDeepClass(unit.id, minutesSpent, Math.max(4, outputs));
    setClassCompletedBanner(true);
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div>
      {/* Top Studio Header */}
      <div className="studio-header-bar">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
            <button id="studio-back-btn" type="button" className="btn btn-ghost btn-sm" onClick={onBackHome}>
              <ArrowLeft size={16} /> 홈으로
            </button>
            <span className="tag tag-forest">
              <GraduationCap size={13} /> 정규 인강 &amp; 1:1 과외실 ({unit.deepClassMinutes}분 과정)
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--ink-muted)' }}>
              담당: {unit.instructorName}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.25rem, 2.3vw, 1.6rem)' }}>{unit.title}</h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <select
            id="studio-unit-selector"
            aria-label="정규 수업 커리큘럼 변경"
            value={unit.id}
            onChange={(e) => {
              const found = units.find((u) => u.id === e.target.value);
              if (found) onSelectUnit(found);
            }}
            style={{
              padding: '8px 12px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-default)',
              background: 'var(--bg-surface)',
              fontSize: '0.84rem',
              fontWeight: 600
            }}
          >
            {units.map((u) => (
              <option key={u.id} value={u.id}>
                [{u.level}] {u.title.slice(0, 28)}... ({u.deepClassMinutes}분)
              </option>
            ))}
          </select>
          <span className="metric-chip">수업 진행 {formatTimer(classSeconds)}</span>
        </div>
      </div>

      {/* 3-Period Curriculum Stepper */}
      <div className="period-stepper" role="tablist" aria-label="정규 수업 교시 선택">
        <button
          id="period-tab-1"
          type="button"
          className={`period-step-btn ${period === 1 ? 'active' : ''}`}
          onClick={() => setPeriod(1)}
        >
          <span className="period-step-label">1교시 · LECTURE (15~20분)</span>
          <span className="period-step-name">칠판 원리 인강 &amp; 수강 노트</span>
        </button>

        <button
          id="period-tab-2"
          type="button"
          className={`period-step-btn ${period === 2 ? 'active' : ''}`}
          onClick={() => setPeriod(2)}
        >
          <span className="period-step-label">2교시 · WORKBOOK (10~15분)</span>
          <span className="period-step-name">리스닝 딕테이션 &amp; 서술형 영작</span>
        </button>

        <button
          id="period-tab-3"
          type="button"
          className={`period-step-btn ${period === 3 ? 'active' : ''}`}
          onClick={() => setPeriod(3)}
        >
          <span className="period-step-label">3교시 · 1:1 TUTORING (15~25분)</span>
          <span className="period-step-name">전담 과외 문답 &amp; 3단 첨삭 보드</span>
        </button>
      </div>

      {/* =========================================================
          PERIOD 1: Interactive Chalkboard Lecture + Study Notes
          ========================================================= */}
      {period === 1 && currentChapter && (
        <div className="studio-split-layout">
          <section className="chalkboard-stage" aria-label="1교시 칠판 원리 인강 보드">
            {unit.flowSitcomShots && unit.flowSitcomShots.length > 0 && (
              <div
                style={{
                  marginBottom: '22px',
                  padding: '16px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'hsla(0, 0%, 0%, 0.26)',
                  border: '1px solid hsla(42, 30%, 90%, 0.16)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'hsl(44, 92%, 76%)' }}>
                    🎬 도입 영상 · {unit.flowSitcomTitle}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: 'var(--ink-on-dark-muted)' }}>
                    캐릭터 일관성 유지 멀티샷 씬
                  </span>
                </div>

                {unit.visualAssetPath && (
                  <img
                    src={unit.visualAssetPath}
                    alt={unit.flowSitcomTitle ?? '시트콤 장면'}
                    style={{
                      width: '100%',
                      maxHeight: '220px',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius-md)',
                      marginBottom: '12px'
                    }}
                  />
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {unit.flowSitcomShots.map((shot) => (
                    <div
                      key={shot.shotNumber}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'hsla(0, 0%, 100%, 0.07)'
                      }}
                    >
                      <div style={{ fontSize: '0.86rem' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'hsl(44, 92%, 76%)', display: 'block' }}>
                          Shot #{shot.shotNumber} · {shot.cameraSpec}
                        </span>
                        <strong>{shot.character}:</strong> “{shot.dialogueEn}”
                        <div style={{ fontSize: '0.79rem', color: 'var(--ink-on-dark-muted)' }}>
                          {shot.dialogueKo}
                        </div>
                      </div>
                      <button
                        id={`flow-shot-audio-${shot.shotNumber}`}
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => speakEnglish(shot.dialogueEn, playbackSpeed)}
                      >
                        <Volume2 size={14} /> 대사 듣기
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="chalkboard-top">
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'hsl(44, 92%, 76%)' }}>
                  {currentChapter.timestamp} · {currentChapter.durationMin}분 분량
                </span>
                <h2 style={{ color: 'var(--ink-on-dark)', fontSize: '1.25rem', marginTop: '4px' }}>
                  {currentChapter.title}
                </h2>
              </div>

              <button
                id="lecture-scrap-formula-btn"
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleAppendFormulaToNote}
              >
                <FilePenLine size={14} /> 공식 노트에 스크랩
              </button>
            </div>

            <div>
              <span style={{ fontSize: '0.78rem', color: 'var(--ink-on-dark-muted)' }}>오늘의 칠판 핵심 공식</span>
              <div className="chalkboard-formula">{currentChapter.boardFormula}</div>
            </div>

            <div className="chalkboard-compare-grid">
              <div className="chalk-box">
                <strong style={{ color: 'hsl(12, 85%, 76%)', fontSize: '0.85rem' }}>
                  ❌ 한국인이 막히는 직역 사고
                </strong>
                <p style={{ marginTop: '6px', fontSize: '0.9rem', color: 'var(--ink-on-dark-muted)' }}>
                  {currentChapter.koreanMisconception}
                </p>
              </div>
              <div className="chalk-box">
                <strong style={{ color: 'hsl(152, 68%, 72%)', fontSize: '0.85rem' }}>
                  ⭕ 원어민의 문장 조립 원리
                </strong>
                <p style={{ marginTop: '6px', fontSize: '0.9rem', color: 'var(--ink-on-dark-muted)' }}>
                  {currentChapter.nativeMindset}
                </p>
              </div>
            </div>

            <div className="chalk-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
              <div>
                <span style={{ fontSize: '0.76rem', color: 'hsl(44, 92%, 76%)', fontWeight: 700 }}>
                  대표 체화 예문 (Shadowing)
                </span>
                <p style={{ fontFamily: 'var(--font-serif-en)', fontSize: '1.15rem', marginTop: '4px' }}>
                  “{currentChapter.exampleEn}”
                </p>
                <p style={{ fontSize: '0.86rem', color: 'var(--ink-on-dark-muted)', marginTop: '2px' }}>
                  {currentChapter.exampleKo}
                </p>
              </div>
              <button
                id="lecture-play-example-btn"
                type="button"
                className="btn btn-warm btn-sm"
                onClick={handleToggleLecturePlay}
              >
                {isPlayingLecture ? <Pause size={15} /> : <Play size={15} />}
                <span>{isPlayingLecture ? '정지' : '예문 오디오 재생'}</span>
              </button>
            </div>

            <div className="instructor-script-box">
              <strong style={{ display: 'block', marginBottom: '6px', color: 'hsl(44, 92%, 76%)', fontSize: '0.86rem' }}>
                🎙 {unit.instructorName}의 강의 해설
              </strong>
              <p>{currentChapter.instructorScript}</p>
            </div>

            <div className="player-controls-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--ink-on-dark-muted)', marginRight: '4px' }}>
                  배속:
                </span>
                {[0.8, 1.0, 1.2].map((spd) => (
                  <button
                    key={spd}
                    id={`lecture-speed-${spd}`}
                    type="button"
                    className={`speed-btn ${playbackSpeed === spd ? 'active' : ''}`}
                    onClick={() => setPlaybackSpeed(spd)}
                  >
                    {spd.toFixed(1)}x
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                {chapterIdx > 0 && (
                  <button
                    id="lecture-prev-chapter-btn"
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => setChapterIdx((c) => c - 1)}
                  >
                    이전 챕터
                  </button>
                )}
                {chapterIdx + 1 < unit.lectureChapters.length ? (
                  <button
                    id="lecture-next-chapter-btn"
                    type="button"
                    className="btn btn-warm btn-sm"
                    onClick={() => setChapterIdx((c) => c + 1)}
                  >
                    <span>다음 챕터로</span>
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    id="lecture-go-period2-btn"
                    type="button"
                    className="btn btn-warm btn-sm"
                    onClick={() => setPeriod(2)}
                  >
                    <span>2교시 워크북 실습으로 이동</span>
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Right Panel: Chapter List & Personal Lecture Note */}
          <aside className="side-panel-card">
            <h3 style={{ fontSize: '1rem', fontWeight: 750, marginBottom: '10px' }}>
              강의 챕터 목차 ({unit.lectureChapters.length}강)
            </h3>
            <div className="chapter-timeline-list">
              {unit.lectureChapters.map((ch, idx) => (
                <button
                  key={ch.id}
                  id={`chapter-select-${idx}`}
                  type="button"
                  className={`chapter-item-btn ${chapterIdx === idx ? 'active' : ''}`}
                  onClick={() => setChapterIdx(idx)}
                >
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {ch.title}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', flexShrink: 0 }}>
                    {ch.durationMin}분
                  </span>
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label htmlFor="student-lecture-note" style={{ fontSize: '0.96rem', fontWeight: 750 }}>
                나만의 수강 필기 노트 (자동 저장)
              </label>
              <span style={{ fontSize: '0.76rem', color: 'var(--ink-muted)' }}>복습장에서 상시 열람</span>
            </div>
            <textarea
              id="student-lecture-note"
              className="textarea-field"
              style={{ minHeight: '210px' }}
              value={currentNote}
              onChange={(e) => onSaveNote(unit.id, e.target.value)}
              placeholder="인강을 들으며 기억하고 싶은 어순 포인트나 나만의 예문을 자유롭게 필기하세요. 상단 '공식 노트에 스크랩' 버튼을 누르면 칠판 핵심 요약이 자동 입력됩니다."
            />
          </aside>
        </div>
      )}

      {/* =========================================================
          PERIOD 2: Listening Dictation & Structured Writing Workbook
          ========================================================= */}
      {period === 2 && (
        <div className="studio-split-layout">
          <section className="side-panel-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <span className="tag tag-forest">Part A · 원어민 연음 딕테이션 훈련</span>
                <h2 style={{ fontSize: '1.18rem', marginTop: '6px' }}>
                  오디오를 듣고 핵심 연음·구문 빈칸을 타이핑하세요
                </h2>
              </div>
            </div>

            {unit.dictationItems.map((item, idx) => {
              const userVal = dictationAnswers[item.id] ?? '';
              const isChecked = Boolean(dictationChecked[item.id]);
              const isRight =
                userVal.trim().toLowerCase() === item.answer.toLowerCase();

              return (
                <div key={item.id} className="dictation-line">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--ink-secondary)' }}>
                      #{idx + 1} · {item.speaker}
                    </span>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        id={`dictation-play-slow-${item.id}`}
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => speakEnglish(item.fullAudioText, 0.78)}
                      >
                        <Headphones size={14} /> 0.8x 천천히
                      </button>
                      <button
                        id={`dictation-play-normal-${item.id}`}
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => speakEnglish(item.fullAudioText, 1.0)}
                      >
                        <Volume2 size={14} /> 1.0x 원속도
                      </button>
                    </div>
                  </div>

                  <p style={{ fontFamily: 'var(--font-en-display)', fontSize: '1.02rem', fontWeight: 600, lineHeight: 1.9 }}>
                    <span>{item.beforeBlank} </span>
                    <input
                      id={`dictation-input-${item.id}`}
                      type="text"
                      className="inline-blank-input"
                      value={userVal}
                      onChange={(e) =>
                        setDictationAnswers((prev) => ({
                          ...prev,
                          [item.id]: e.target.value
                        }))
                      }
                      placeholder="듣고 입력"
                    />
                    <span> {item.afterBlank}</span>
                  </p>

                  <p style={{ fontSize: '0.86rem', color: 'var(--ink-secondary)', marginTop: '6px' }}>
                    해석: {item.koreanTranslation}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', flexWrap: 'wrap', gap: '8px' }}>
                    {!isChecked ? (
                      <button
                        id={`dictation-check-btn-${item.id}`}
                        type="button"
                        className="btn btn-primary btn-sm"
                        disabled={!userVal.trim()}
                        onClick={() => handleCheckDictation(item.id)}
                      >
                        빈칸 채점하기
                      </button>
                    ) : (
                      <div style={{ fontSize: '0.85rem' }}>
                        <strong style={{ color: isRight ? 'var(--status-success)' : 'var(--status-error)' }}>
                          {isRight ? `⭕ 정답입니다! (${item.answer})` : `❗ 정답: "${item.answer}"`}
                        </strong>
                        <span style={{ display: 'block', color: 'var(--ink-secondary)', marginTop: '2px' }}>
                          🎧 리스닝 팁: {item.listeningTip}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </section>

          {/* Right Panel: Structured Writing Homework */}
          <section className="side-panel-card">
            <span className="tag tag-warm">Part B · 과외 서술형 영작 워크북</span>
            <h2 style={{ fontSize: '1.16rem', marginTop: '6px', marginBottom: '8px' }}>
              1교시 공식을 적용해 나만의 문장을 직접 써보세요
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink-secondary)', marginBottom: '12px' }}>
              {unit.workbookWritingPrompt.situationKo}
            </p>

            <div
              style={{
                padding: '12px 14px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-canvas)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '14px',
                fontSize: '0.84rem'
              }}
            >
              <strong>작문 체크리스트</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: '18px', color: 'var(--ink-secondary)' }}>
                {unit.workbookWritingPrompt.guidePoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmitWorkbook}>
              <textarea
                id="workbook-writing-textarea"
                className="textarea-field"
                value={workbookDraft}
                onChange={(e) => setWorkbookDraft(e.target.value)}
                placeholder="여기에 2~3문장으로 직접 영작해보세요..."
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
                <button
                  id="workbook-toggle-model-btn"
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => setShowModelWriting((v) => !v)}
                >
                  {showModelWriting ? '모범 답안 닫기' : '강사 모범 답안 보기'}
                </button>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    id="workbook-submit-btn"
                    type="submit"
                    className="btn btn-primary btn-sm"
                    disabled={!workbookDraft.trim()}
                  >
                    <Sparkles size={14} /> 영작 첨삭 받기
                  </button>
                  <button
                    id="workbook-go-period3-btn"
                    type="button"
                    className="btn btn-warm btn-sm"
                    onClick={() => setPeriod(3)}
                  >
                    3교시 1:1 과외 입장 <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </form>

            {showModelWriting && (
              <div style={{ marginTop: '14px', padding: '14px', borderRadius: 'var(--radius-md)', background: 'var(--accent-primary-soft)', fontSize: '0.9rem' }}>
                <strong>강사 모범 영작:</strong>
                <p style={{ fontFamily: 'var(--font-serif-en)', fontSize: '1.02rem', marginTop: '4px' }}>
                  “{unit.workbookWritingPrompt.modelParagraphEn}”
                </p>
              </div>
            )}

            {workbookFeedback && (
              <div className="paraphrase-doc-card" style={{ marginTop: '16px' }}>
                <div className="tier-row">
                  <span className="tier-label">교정된 문장 &amp; 과외 코멘트</span>
                  <p className="tier-fix">{workbookFeedback.grammarFix}</p>
                  <p style={{ fontSize: '0.84rem', color: 'var(--ink-secondary)' }}>
                    {workbookFeedback.tutorExplanationKo}
                  </p>
                </div>
                <div className="tier-row">
                  <span className="tier-label">원어민 실전 업그레이드</span>
                  <p className="tier-native">{workbookFeedback.businessNative}</p>
                </div>
              </div>
            )}
          </section>
        </div>
      )}

      {/* =========================================================
          PERIOD 3: 1:1 Private Tutoring & Ringle-style 3-Tier Board
          ========================================================= */}
      {period === 3 && (
        <div className="studio-split-layout">
          {/* Left: 1:1 Tutor Conversation */}
          <section className="tutor-chat-box" aria-label="3교시 1:1 전담 과외 대화창">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <span className="tag tag-forest">3교시 · 1:1 심층 튜터링</span>
                <h2 style={{ fontSize: '1.15rem', marginTop: '4px' }}>
                  전담 튜터의 질문과 꼬리질문에 영어로 답해보세요
                </h2>
              </div>
              <button
                id="tutor-listen-question-btn"
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  const lastTutor = [...messages].reverse().find((m) => m.role === 'tutor');
                  if (lastTutor) speakEnglish(lastTutor.textEn, 0.96);
                }}
              >
                <Volume2 size={14} /> 질문 음성 다시 듣기
              </button>
            </div>

            <div className="chat-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-bubble ${msg.role}`}>
                  <p style={{ fontWeight: msg.role === 'tutor' ? 600 : 500 }}>{msg.textEn}</p>
                  {msg.subKo && (
                    <p style={{ fontSize: '0.81rem', color: 'var(--ink-secondary)', marginTop: '6px' }}>
                      {msg.subKo}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {currentTutorTurn && (
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--ink-muted)', display: 'block', marginBottom: '6px' }}>
                  문장 확장 힌트 칩 (클릭 시 입력창에 추가됩니다):
                </span>
                <div className="hint-chips-row">
                  {currentTutorTurn.expansionHints.map((hint, i) => (
                    <button
                      key={i}
                      id={`tutor-hint-chip-${i}`}
                      type="button"
                      className="hint-chip"
                      onClick={() =>
                        setStudentReply((prev) => (prev ? `${prev} ${hint} ` : `${hint} `))
                      }
                    >
                      + {hint}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSendTutorReply} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <textarea
                id="tutor-reply-input"
                className="textarea-field"
                style={{ minHeight: '86px' }}
                value={studentReply}
                onChange={(e) => setStudentReply(e.target.value)}
                placeholder="영어로 답변을 작성하거나 마이크 버튼으로 말씀해보세요. (배운 표현을 활용하면 더 좋습니다!)"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  id="tutor-mic-btn"
                  type="button"
                  className={`btn ${isRecordingMic ? 'btn-warm' : 'btn-secondary'} btn-sm`}
                  onClick={handleTutorMic}
                >
                  {isRecordingMic ? <MicOff size={15} /> : <Mic size={15} />}
                  <span>
                    {isRecordingMic
                      ? '음성 인식 중...'
                      : isSpeechRecognitionSupported()
                      ? '마이크로 답변 말하기'
                      : '음성 입력'}
                  </span>
                </button>

                <button
                  id="tutor-send-btn"
                  type="submit"
                  className="btn btn-primary"
                  disabled={!studentReply.trim()}
                >
                  <Send size={15} />
                  <span>답변 전송 &amp; 실시간 3단 첨삭 받기</span>
                </button>
              </div>
            </form>
          </section>

          {/* Right: Ringle-style Real-time Shared Paraphrasing Document */}
          <aside className="side-panel-card" aria-label="실시간 3단 패러프레이징 첨삭 문서">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', gap: '8px', flexWrap: 'wrap' }}>
              <div>
                <span className="tag tag-amber">실시간 과외 칠판 (Ringle Docs 스타일)</span>
                <h3 style={{ fontSize: '1.08rem', marginTop: '4px' }}>
                  3단 패러프레이징 교정 노트 ({sessionParaphrases.length}건)
                </h3>
              </div>

              <button
                id="complete-deep-class-btn"
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleFinishFullClass}
                disabled={classCompletedBanner}
              >
                <CheckCircle2 size={14} />
                <span>{classCompletedBanner ? '정규 수업 수료 완료!' : '오늘 정규 수업 수료하기'}</span>
              </button>
            </div>

            {classCompletedBanner && (
              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--status-success-soft)',
                  marginBottom: '14px',
                  fontSize: '0.87rem'
                }}
              >
                🎉 <strong>정규 인강·과외 코스를 수료했습니다!</strong> 필기한 노트와 첨삭 문장이 망각곡선 복습금고와 연동되었습니다.
              </div>
            )}

            {sessionParaphrases.length === 0 ? (
              <div
                style={{
                  padding: '24px 16px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-canvas)',
                  border: '1px dashed var(--border-strong)',
                  color: 'var(--ink-secondary)',
                  fontSize: '0.89rem'
                }}
              >
                좌측 과외 채팅창에 첫 영어 답변을 보내시면, 이곳에 <strong>[내 원문 → 문법·콩글리시 첨삭 → 원어민 실전 패러프레이징 2종]</strong> 노트가 실시간으로 기록됩니다.
                {currentTutorTurn && (
                  <p style={{ marginTop: '10px', color: 'var(--accent-primary)', fontFamily: 'var(--font-serif-en)' }}>
                    모범 답변 예시: “{currentTutorTurn.sampleModelAnswer}”
                  </p>
                )}
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '520px', overflowY: 'auto' }}>
                {sessionParaphrases.map((item) => (
                  <div key={item.id} className="paraphrase-doc-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="tier-label">
                        1. 내 답변 {item.latencySec ? `(발화 응답 ${item.latencySec}초)` : ''}
                      </span>
                      <button
                        id={`vault-add-${item.id}`}
                        type="button"
                        className="btn btn-ghost btn-sm"
                        onClick={() => onRecordParaphrase(item, true)}
                      >
                        <BookmarkPlus size={14} /> 내일 5분 복습에 추가
                      </button>
                    </div>
                    <p className="tier-mine">{item.originalInput}</p>

                    <div className="tier-row">
                      <span className="tier-label">2. 문법 · 콩글리시 과외 교정</span>
                      <p className="tier-fix">{item.grammarFix}</p>
                      <p style={{ fontSize: '0.83rem', color: 'var(--ink-secondary)' }}>
                        {item.tutorExplanationKo}
                      </p>
                    </div>

                    <div className="tier-row">
                      <span className="tier-label">3. 원어민 패러프레이징 (소리 내어 쉐도잉)</span>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                        <span className="tier-native" style={{ fontSize: '0.96rem' }}>
                          [Business] {item.businessNative}
                        </span>
                        <button
                          id={`listen-upgrade-${item.id}`}
                          type="button"
                          className="btn btn-secondary btn-sm"
                          onClick={() => speakEnglish(item.businessNative, 0.95)}
                        >
                          <Volume2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
};
