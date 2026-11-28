import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Award,
  CheckCircle2,
  Flame,
  Lightbulb,
  Mic,
  RotateCcw,
  Sparkles,
  Timer,
  Volume2,
  Zap
} from 'lucide-react';
import { PATTERN_REFLEX_20 } from '../data/patternReflexDrills.ts';
import { CONFUSABLE_PAIRS_50, IRREGULAR_VERBS_80 } from '../data/verbAndConfusableBank.ts';
import { THEMATIC_VOCAB_VAULT } from '../data/vocabMasterVault.ts';
import type { MasteryStage } from '../types/academy.ts';
import type { SpacedReviewCard } from '../types/course.ts';
import { playComboChime, playFanfare, playSoftMiss, playTick } from '../utils/soundFx.ts';
import {
  isSpeechRecognitionSupported,
  speakEnglish,
  startSpeechRecognition,
  stopSpeaking
} from '../utils/speech.ts';
import {
  evaluateSpeechOrDictation,
  isEquivalentEnglishAnswer
} from '../utils/speechScoring.ts';
import { VoiceRecorderCompare } from './VoiceRecorderCompare.tsx';

interface AdaptiveClozeAndPatternGymProps {
  vocabEloRating: number;
  clozeSolvedCount: number;
  patternReflexMasteredIds: string[];
  initialMode?: 'cloze-elo' | 'pattern-reflex';
  onUpdateClozeElo: (
    nextElo: number,
    isCorrect: boolean,
    missedCard?: SpacedReviewCard
  ) => void;
  onCompletePatternSet: (patternId: string, spokenCount: number) => void;
  onOpenDictionary: (word?: string) => void;
}

interface ClozePoolItem {
  id: string;
  targetWord: string;
  baseHint: string;
  sentenceBefore: string;
  sentenceAfter: string;
  fullSentenceEn: string;
  koreanSentence: string;
  meaningKo: string;
  tipKo: string;
  difficultyElo: number;
  tierBadge: string;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildClozePool(): ClozePoolItem[] {
  const pool: ClozePoolItem[] = [];

  for (const w of THEMATIC_VOCAB_VAULT) {
    const cleanWord = w.word.replace(/[~()]/g, '').trim();
    if (!cleanWord || cleanWord.includes(' ')) continue;
    const regex = new RegExp(`\\b(${escapeRegExp(cleanWord)}[a-z]{0,3})\\b`, 'i');
    const match = w.exampleEn.match(regex);
    if (!match || match.index === undefined) continue;
    const matchedForm = match[1];
    const difficultyElo =
      w.pack === 'elem-core'
        ? 860
        : w.pack === 'middle-core'
          ? 1180
          : w.pack === 'high-csat'
            ? 1560
            : 1780;
    const tierBadge =
      w.pack === 'elem-core'
        ? '초등 필수 · A1'
        : w.pack === 'middle-core'
          ? '중학 핵심 · A2–B1'
          : w.pack === 'high-csat'
            ? '고등·수능 · B2–C1'
            : '구동사·고급 · C1';

    pool.push({
      id: `cz-v-${w.id}`,
      targetWord: matchedForm,
      baseHint: cleanWord,
      sentenceBefore: w.exampleEn.slice(0, match.index),
      sentenceAfter: w.exampleEn.slice(match.index + matchedForm.length),
      fullSentenceEn: w.exampleEn,
      koreanSentence: w.exampleKo,
      meaningKo: `${w.meaningKo} (${w.pos})`,
      tipKo: w.nuanceTipKo,
      difficultyElo,
      tierBadge
    });
  }

  for (const v of IRREGULAR_VERBS_80) {
    const forms = [v.past.split('/')[0], v.pp.split('/')[0], v.base];
    let found: { form: string; idx: number } | null = null;
    for (const f of forms) {
      const m = v.exampleEn.match(new RegExp(`\\b(${escapeRegExp(f)})\\b`, 'i'));
      if (m && m.index !== undefined) {
        found = { form: m[1], idx: m.index };
        break;
      }
    }
    if (!found) continue;
    pool.push({
      id: `cz-iv-${v.id}`,
      targetWord: found.form,
      baseHint: v.base,
      sentenceBefore: v.exampleEn.slice(0, found.idx),
      sentenceAfter: v.exampleEn.slice(found.idx + found.form.length),
      fullSentenceEn: v.exampleEn,
      koreanSentence: v.exampleKo,
      meaningKo: `${v.meaningKo} (원형: ${v.base})`,
      tipKo: `${v.base}–${v.past}–${v.pp} · ${v.memoryTipKo}`,
      difficultyElo: v.pattern === 'AAA' ? 980 : v.pattern === 'ABA' ? 1120 : v.pattern === 'ABB' ? 1280 : 1440,
      tierBadge: `불규칙 동사 · ${v.pattern}`
    });
  }

  for (const cp of CONFUSABLE_PAIRS_50) {
    const idx = cp.quizSentence.indexOf('_____');
    if (idx < 0) continue;
    pool.push({
      id: `cz-cp-${cp.id}`,
      targetWord: cp.quizAnswer,
      baseHint: `${cp.wordA} / ${cp.wordB}`,
      sentenceBefore: cp.quizSentence.slice(0, idx),
      sentenceAfter: cp.quizSentence.slice(idx + 5),
      fullSentenceEn: cp.quizSentence.replace('_____', cp.quizAnswer),
      koreanSentence: cp.quizMeaningKo,
      meaningKo: cp.quizAnswer === cp.wordA ? cp.meaningAKo : cp.meaningBKo,
      tipKo: cp.contrastTipKo,
      difficultyElo: cp.tier === 'middle' ? 1320 : 1680,
      tierBadge: cp.tier === 'middle' ? '중학 혼동어휘' : '수능 킬러 혼동어휘'
    });
  }

  return pool;
}

function getEloRankBadge(elo: number): { labelKo: string; percentileKo: string } {
  if (elo >= 1850) return { labelKo: 'CEFR C1–C2 마스터', percentileKo: '상위 3%' };
  if (elo >= 1550) return { labelKo: '수능 1등급 · B2+', percentileKo: '상위 12%' };
  if (elo >= 1250) return { labelKo: '중·고등 핵심 · B1', percentileKo: '상위 32%' };
  if (elo >= 1000) return { labelKo: '기초 완성 · A2', percentileKo: '상위 55%' };
  return { labelKo: '입문 도약 · A1', percentileKo: '성장 가속 구간' };
}

function pickNextAdaptiveItem(
  pool: ClozePoolItem[],
  currentElo: number,
  seenIds: Set<string>
): ClozePoolItem {
  const candidates = pool.filter((item) => !seenIds.has(item.id));
  const source = candidates.length > 0 ? candidates : pool;
  const sorted = [...source].sort(
    (a, b) => Math.abs(a.difficultyElo - currentElo) - Math.abs(b.difficultyElo - currentElo)
  );
  const topBand = sorted.slice(0, Math.min(8, sorted.length));
  return topBand[seenIds.size % topBand.length] ?? source[0];
}

export function AdaptiveClozeAndPatternGym({
  vocabEloRating,
  clozeSolvedCount,
  patternReflexMasteredIds,
  initialMode = 'cloze-elo',
  onUpdateClozeElo,
  onCompletePatternSet,
  onOpenDictionary
}: AdaptiveClozeAndPatternGymProps) {
  const [gymMode, setGymMode] = useState<'cloze-elo' | 'pattern-reflex'>(initialMode);

  // =====================================================
  // MODE A: MALHAEBOCA-GRADE ADAPTIVE ELO CLOZE TRAINER
  // =====================================================
  const clozePool = useMemo(() => buildClozePool(), []);
  const [seenClozeIds, setSeenClozeIds] = useState<string[]>([]);
  const [currentCloze, setCurrentCloze] = useState<ClozePoolItem>(() =>
    pickNextAdaptiveItem(clozePool, vocabEloRating, new Set())
  );
  const [clozeInput, setClozeInput] = useState('');
  const [revealedLetters, setRevealedLetters] = useState(0);
  const [clozeCombo, setClozeCombo] = useState(0);
  const [clozeResult, setClozeResult] = useState<null | {
    status: 'correct' | 'inflection-close' | 'wrong';
    eloDelta: number;
    coachKo: string;
  }>(null);

  // =====================================================
  // MODE B: SPEAK-GRADE 2-SEC PATTERN REFLEX SPEAKING GYM
  // =====================================================
  const [stageFilter, setStageFilter] = useState<'all' | MasteryStage>('all');
  const [selectedSetId, setSelectedSetId] = useState(PATTERN_REFLEX_20[0]?.id ?? 'pr-01');
  const [varIdx, setVarIdx] = useState(0);
  const [reflexSpeedSec, setReflexSpeedSec] = useState<5 | 3>(5);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [reflexInput, setReflexInput] = useState('');
  const [pickedChunks, setPickedChunks] = useState<number[]>([]);
  const [isMicListening, setIsMicListening] = useState(false);
  const [reflexFeedback, setReflexFeedback] = useState<null | {
    ok: boolean;
    accuracyPct: number;
  }>(null);
  const [solvedVarsMap, setSolvedVarsMap] = useState<Record<string, boolean>>({});
  const stopMicRef = useRef<(() => void) | null>(null);

  const visibleSets =
    stageFilter === 'all'
      ? PATTERN_REFLEX_20
      : PATTERN_REFLEX_20.filter((s) => s.stage === stageFilter);
  const activeSet =
    visibleSets.find((s) => s.id === selectedSetId) ?? visibleSets[0] ?? PATTERN_REFLEX_20[0];
  const activeVar = activeSet.variations[Math.min(varIdx, activeSet.variations.length - 1)];

  useEffect(() => {
    return () => {
      stopSpeaking();
      stopMicRef.current?.();
    };
  }, []);

  useEffect(() => {
    if (countdown === null || countdown <= 0) return;
    const t = window.setTimeout(() => {
      const next = countdown - 1;
      if (next > 0 && next <= 2) playTick(880);
      setCountdown(next);
    }, 1000);
    return () => window.clearTimeout(t);
  }, [countdown]);

  const handleCheckCloze = () => {
    if (!clozeInput.trim() || clozeResult) return;
    const userNorm = clozeInput.trim().toLowerCase();
    const targetNorm = currentCloze.targetWord.toLowerCase();
    const baseNorm = currentCloze.baseHint.toLowerCase();

    const expectedScore = 1 / (1 + Math.pow(10, (currentCloze.difficultyElo - vocabEloRating) / 400));

    if (userNorm === targetNorm) {
      const hintPenalty = revealedLetters > 0 ? 0.55 : 1;
      const delta = Math.max(8, Math.round(32 * (1 - expectedScore) * hintPenalty));
      const nextElo = Math.min(2400, vocabEloRating + delta);
      const nextCombo = clozeCombo + 1;
      setClozeCombo(nextCombo);
      setClozeResult({
        status: 'correct',
        eloDelta: delta,
        coachKo:
          revealedLetters === 0
            ? `완벽한 1초 능동 인출! ${nextCombo >= 3 ? `🔥 ${nextCombo}연속 콤보!` : ''}`
            : `힌트 ${revealedLetters}글자로 정확히 맞혔습니다!`
      });
      playComboChime(nextCombo);
      speakEnglish(currentCloze.fullSentenceEn, 0.94);
      onUpdateClozeElo(nextElo, true);
      return;
    }

    // Smart inflection detection (e.g., typed base form "go" when target is "went", or singular vs plural)
    const isInflectionClose =
      (baseNorm.length >= 2 && userNorm === baseNorm) ||
      (targetNorm.startsWith(userNorm) && userNorm.length >= 3) ||
      (userNorm.startsWith(targetNorm) && Math.abs(userNorm.length - targetNorm.length) <= 2);

    const lossDelta = Math.max(6, Math.round(24 * expectedScore));
    const nextElo = Math.max(600, vocabEloRating - lossDelta);
    setClozeCombo(0);
    playSoftMiss();
    speakEnglish(currentCloze.fullSentenceEn, 0.9);

    const today = new Date().toISOString().slice(0, 10);
    const missedCard: SpacedReviewCard = {
      id: `cloze-miss-${currentCloze.id}-${clozeSolvedCount}`,
      promptKo: `[어휘 빈칸] ${currentCloze.koreanSentence} (${currentCloze.meaningKo})`,
      targetEn: currentCloze.fullSentenceEn,
      noteKo: `정답 단어: ${currentCloze.targetWord} · ${currentCloze.tipKo}`,
      sourceLabel: `말해보카 ELO 트레이너`,
      intervalDays: 1,
      dueDate: today,
      reviewCount: 0,
      mastered: false
    };

    setClozeResult({
      status: isInflectionClose ? 'inflection-close' : 'wrong',
      eloDelta: -lossDelta,
      coachKo: isInflectionClose
        ? `핵심 어근은 맞혔어요! 문맥상 어형/시제를 "${currentCloze.targetWord}"로 정확히 변형해야 합니다.`
        : `정답은 "${currentCloze.targetWord}"입니다. SM-2 오답 복습함에 자동 등록했습니다!`
    });
    onUpdateClozeElo(nextElo, false, missedCard);
  };

  const handleNextCloze = () => {
    const nextSeen = new Set([...seenClozeIds, currentCloze.id]);
    setSeenClozeIds(Array.from(nextSeen));
    setCurrentCloze(pickNextAdaptiveItem(clozePool, vocabEloRating, nextSeen));
    setClozeInput('');
    setRevealedLetters(0);
    setClozeResult(null);
  };

  const renderLetterMask = () => {
    const chars = currentCloze.targetWord.split('');
    return chars
      .map((ch, i) => {
        if (clozeResult) return ch;
        if (i < revealedLetters) return ch;
        if (ch === '-' || ch === ' ') return ch;
        return '_';
      })
      .join(' ');
  };

  // Pattern Reflex helpers (pure deterministic shuffle per variation ID)
  const chunkSeed = activeVar.id.split('').reduce((s, c) => s + c.charCodeAt(0), 0);
  const shuffledChunks = activeVar.chunkBlocks
    .map((text, idx) => ({ text, origIdx: idx }))
    .sort((a, b) => ((a.origIdx * 17 + chunkSeed) % 11) - ((b.origIdx * 17 + chunkSeed) % 11));

  const resetReflexVar = (nextVarIdx: number) => {
    stopMicRef.current?.();
    setIsMicListening(false);
    setVarIdx(nextVarIdx);
    setReflexInput('');
    setPickedChunks([]);
    setReflexFeedback(null);
    setCountdown(null);
  };

  const handleGradeReflex = (overrideText?: string) => {
    const assembled =
      overrideText ??
      (reflexInput.trim() ||
        pickedChunks
          .map((pos) => shuffledChunks[pos]?.text ?? '')
          .join(' ')
          .replace(/\s+([?.!,])/g, '$1'));
    if (!assembled.trim()) return;

    const exact = isEquivalentEnglishAnswer(
      assembled,
      activeVar.targetEn,
      activeVar.acceptableAlts
    );
    const evalRes = evaluateSpeechOrDictation(assembled, activeVar.targetEn, 85);
    const ok = exact || evalRes.accuracyPct >= 86;

    setReflexFeedback({ ok, accuracyPct: ok ? 100 : evalRes.accuracyPct });
    setCountdown(null);

    if (ok) {
      speakEnglish(activeVar.targetEn, 0.96);
      const nextSolved = { ...solvedVarsMap, [activeVar.id]: true };
      setSolvedVarsMap(nextSolved);
      const completedInSet = activeSet.variations.filter((v) => nextSolved[v.id]).length;
      if (completedInSet === activeSet.variations.length) {
        playFanfare();
        onCompletePatternSet(activeSet.id, activeSet.variations.length);
      } else {
        playComboChime(completedInSet);
      }
    } else {
      playSoftMiss();
    }
  };

  const handleStartReflexMic = () => {
    if (!isSpeechRecognitionSupported()) return;
    stopSpeaking();
    setIsMicListening(true);
    setCountdown(reflexSpeedSec);
    stopMicRef.current = startSpeechRecognition(
      (spoken) => {
        setIsMicListening(false);
        setReflexInput(spoken);
        handleGradeReflex(spoken);
      },
      () => {
        setIsMicListening(false);
      }
    );
  };

  const eloBadge = getEloRankBadge(vocabEloRating);

  return (
    <section className="stack-lg" aria-label="말해보카 ELO 빈칸 & 스픽 2초 패턴 반사훈련">
      {/* HEADER + MODE SWITCHER */}
      <div className="surface-card">
        <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span className="pill-tag pill-coral">말해보카 ELO + 스픽 2초 반사훈련 통합 엔진</span>
            <h2 style={{ fontSize: '1.38rem', marginTop: '8px' }}>
              어휘력 ELO 적응형 빈칸 트레이너 &amp; 2초 패턴 스피킹 반사훈련
            </h2>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginTop: '4px' }}>
              내 어휘력 점수(ELO)에 맞춰 난이도가 실시간 조절되는 문맥 빈칸 훈련과, 핵심 회화 20패턴 × 6변형(120드릴)을 2초 안에 입 밖으로 꺼내는 반사훈련을 한곳에서 완주하세요.
            </p>
          </div>
          <div className="elo-badge-card">
            <span style={{ fontSize: '0.73rem', fontWeight: 750, color: 'var(--text-muted)' }}>
              내 실시간 어휘력 ELO
            </span>
            <strong style={{ fontSize: '1.38rem', color: 'var(--brand)', fontFamily: 'var(--font-mono)' }}>
              {vocabEloRating.toLocaleString()}
            </strong>
            <small style={{ fontSize: '0.74rem', color: 'var(--coral)', fontWeight: 700 }}>
              {eloBadge.labelKo} · {eloBadge.percentileKo}
            </small>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '14px' }}>
          <button
            id="gym-mode-cloze-elo"
            type="button"
            className={`transform-pill-btn ${gymMode === 'cloze-elo' ? 'active' : ''}`}
            onClick={() => setGymMode('cloze-elo')}
          >
            <Zap size={15} /> 말해보카식 ELO 빈칸 트레이너 ({clozePool.length}문장 · 누적 {clozeSolvedCount}문항)
          </button>
          <button
            id="gym-mode-pattern-reflex"
            type="button"
            className={`transform-pill-btn ${gymMode === 'pattern-reflex' ? 'active' : ''}`}
            onClick={() => setGymMode('pattern-reflex')}
          >
            <Flame size={15} /> 스픽식 2초 패턴 반사 스피킹 ({patternReflexMasteredIds.length}/20패턴 · 120드릴)
          </button>
        </div>
      </div>

      {/* =======================================================
          MODE A: MALHAEBOCA-GRADE ADAPTIVE ELO CLOZE TRAINER
         ======================================================= */}
      {gymMode === 'cloze-elo' && (
        <div className="sm2-flashcard-stage">
          <div className="sm2-card-face" style={{ textAlign: 'left', maxWidth: '720px' }}>
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
                <span className="pill-tag pill-brand">{currentCloze.tierBadge}</span>
                <span className="pill-tag pill-subtle">문항 난이도 ELO {currentCloze.difficultyElo}</span>
                {clozeCombo > 0 && (
                  <span className="pill-tag pill-coral">🔥 {clozeCombo}연속 콤보</span>
                )}
              </div>
              <button
                type="button"
                className="inline-audio-btn"
                onClick={() => speakEnglish(currentCloze.fullSentenceEn, 0.92)}
              >
                <Volume2 size={14} /> 원어민 문장 듣기
              </button>
            </div>

            <div className="elo-cloze-sentence-box">
              <p className="elo-cloze-en">
                <span>{currentCloze.sentenceBefore}</span>
                <span className={`elo-cloze-blank ${clozeResult ? clozeResult.status : ''}`}>
                  {renderLetterMask()}
                </span>
                <span>{currentCloze.sentenceAfter}</span>
              </p>
              <p style={{ marginTop: '10px', fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-strong)' }}>
                {currentCloze.koreanSentence}
              </p>
              <p style={{ marginTop: '4px', fontSize: '0.88rem', color: 'var(--brand)', fontWeight: 700 }}>
                핵심 뜻 힌트: {currentCloze.meaningKo} ({currentCloze.targetWord.length}글자)
              </p>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '14px' }}>
              <input
                id="elo-cloze-input"
                type="text"
                className="input-clean"
                style={{ flex: 1, minWidth: '210px', fontFamily: 'var(--font-en)', fontSize: '1.08rem', fontWeight: 700 }}
                value={clozeInput}
                disabled={Boolean(clozeResult)}
                onChange={(e) => setClozeInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    if (clozeResult) handleNextCloze();
                    else handleCheckCloze();
                  }
                }}
                placeholder="빈칸에 들어갈 정확한 영어 단어를 입력하세요..."
              />
              {!clozeResult ? (
                <>
                  <button
                    id="elo-cloze-check-btn"
                    type="button"
                    className="btn-solid-brand"
                    disabled={!clozeInput.trim()}
                    onClick={handleCheckCloze}
                  >
                    <CheckCircle2 size={16} /> 정답 확인
                  </button>
                  <button
                    id="elo-cloze-hint-btn"
                    type="button"
                    className="btn-outline"
                    disabled={revealedLetters >= Math.max(1, currentCloze.targetWord.length - 1)}
                    onClick={() => {
                      playTick(660);
                      setRevealedLetters((n) => Math.min(currentCloze.targetWord.length - 1, n + 1));
                    }}
                  >
                    <Lightbulb size={15} /> 1글자 힌트 ({revealedLetters}/{Math.max(1, currentCloze.targetWord.length - 1)})
                  </button>
                </>
              ) : (
                <button
                  id="elo-cloze-next-btn"
                  type="button"
                  className="btn-solid-brand"
                  onClick={handleNextCloze}
                >
                  다음 적응형 문항 →
                </button>
              )}
            </div>

            {clozeResult && (
              <div
                className={`feedback-banner ${clozeResult.status === 'correct' ? 'ok' : 'warn'}`}
                style={{ marginTop: '14px', flexDirection: 'column', alignItems: 'stretch', gap: '6px' }}
              >
                <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px' }}>
                  <strong>
                    {clozeResult.status === 'correct' ? '✓ ' : '💡 '}
                    {clozeResult.coachKo}
                  </strong>
                  <span
                    className={`pill-tag ${clozeResult.eloDelta >= 0 ? 'pill-brand' : 'pill-coral'}`}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {clozeResult.eloDelta >= 0 ? `+${clozeResult.eloDelta}` : clozeResult.eloDelta} ELO
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem' }}>
                  정답 단어: <strong style={{ fontFamily: 'var(--font-en)' }}>{currentCloze.targetWord}</strong> · {currentCloze.tipKo}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}>
                  <button
                    type="button"
                    className="inline-audio-btn"
                    onClick={() => onOpenDictionary(currentCloze.targetWord)}
                  >
                    영한사전 상세 보기 →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =======================================================
          MODE B: SPEAK-GRADE 2-SEC PATTERN REFLEX SPEAKING GYM
         ======================================================= */}
      {gymMode === 'pattern-reflex' && activeSet && activeVar && (
        <div className="stack-md">
          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {(['all', 'stage0', 'stage1', 'stage2', 'stage3', 'stage4'] as const).map((st) => (
                  <button
                    key={st}
                    type="button"
                    className={`day-switch-chip ${stageFilter === st ? 'active' : ''}`}
                    onClick={() => {
                      setStageFilter(st);
                      const first =
                        st === 'all'
                          ? PATTERN_REFLEX_20[0]
                          : PATTERN_REFLEX_20.find((p) => p.stage === st);
                      if (first) {
                        setSelectedSetId(first.id);
                        resetReflexVar(0);
                      }
                    }}
                  >
                    {st === 'all' ? '전체 20패턴' : `Stage ${st.replace('stage', '')}`}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <Timer size={15} style={{ color: 'var(--coral)' }} />
                <button
                  type="button"
                  className={`day-switch-chip ${reflexSpeedSec === 5 ? 'active' : ''}`}
                  onClick={() => setReflexSpeedSec(5)}
                >
                  표준 5초
                </button>
                <button
                  type="button"
                  className={`day-switch-chip ${reflexSpeedSec === 3 ? 'active' : ''}`}
                  onClick={() => setReflexSpeedSec(3)}
                >
                  프로 3초
                </button>
              </div>
            </div>

            <div className="pattern-selector-grid">
              {visibleSets.map((set) => {
                const done = patternReflexMasteredIds.includes(set.id);
                return (
                  <button
                    key={set.id}
                    type="button"
                    className={`pattern-pill-card ${set.id === activeSet.id ? 'active' : ''} ${done ? 'done' : ''}`}
                    onClick={() => {
                      setSelectedSetId(set.id);
                      resetReflexVar(0);
                    }}
                  >
                    <div className="section-label-between" style={{ gap: '4px' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--brand)' }}>
                        {set.cefr}
                      </span>
                      {done && <span style={{ fontSize: '0.72rem', color: 'var(--ok)', fontWeight: 800 }}>✓</span>}
                    </div>
                    <strong style={{ fontFamily: 'var(--font-en)', fontSize: '0.88rem', display: 'block', marginTop: '3px' }}>
                      {set.patternEn}
                    </strong>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-sub)' }}>{set.patternKo}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span className="pill-tag pill-brand">{activeSet.patternEn}</span>
                  <span className="pill-tag pill-amber">{activeSet.patternKo}</span>
                  {patternReflexMasteredIds.includes(activeSet.id) && (
                    <span className="pill-tag pill-subtle">
                      <Award size={12} /> 6연속 마스터 ✓
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', marginTop: '6px' }}>
                  💡 {activeSet.usageNuanceKo}
                </p>
              </div>

              <div className="omr-pills-row">
                {activeSet.variations.map((v, i) => (
                  <button
                    key={v.id}
                    type="button"
                    className={`omr-num-pill ${i === varIdx ? 'marked' : solvedVarsMap[v.id] ? 'correct' : ''}`}
                    onClick={() => resetReflexVar(i)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="builder-prompt-box" style={{ textAlign: 'left' }}>
              <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--coral)' }}>
                  드릴 {varIdx + 1} / {activeSet.variations.length} · 아래 한국어를 {reflexSpeedSec}초 안에 영어로 바로 뱉어보세요!
                </span>
                {countdown !== null && (
                  <span className={`pill-tag ${countdown <= 2 ? 'pill-coral' : 'pill-amber'}`}>
                    {countdown > 0 ? `⏱ ${countdown}초 남음` : '⏱ 시간 종료! 바로 말해 보세요'}
                  </span>
                )}
              </div>
              <h3 style={{ fontSize: '1.32rem', marginTop: '8px', color: 'var(--text-strong)' }}>
                “{activeVar.koreanCue}”
              </h3>

              {/* Quick tap chunk assembly for quiet environments */}
              <div style={{ marginTop: '12px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 750, color: 'var(--text-sub)' }}>
                  묵음·이동 중엔 청크 블록을 빠르게 눌러 조립하세요:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                  {shuffledChunks.map((ch, idx) => {
                    const used = pickedChunks.includes(idx);
                    return (
                      <button
                        key={`${activeVar.id}-ch-${idx}`}
                        type="button"
                        className={`day-switch-chip ${used ? 'active' : ''}`}
                        style={{ fontFamily: 'var(--font-en)' }}
                        onClick={() => {
                          playTick(700);
                          const next = used
                            ? pickedChunks.filter((p) => p !== idx)
                            : [...pickedChunks, idx];
                          setPickedChunks(next);
                          setReflexInput(
                            next
                              .map((p) => shuffledChunks[p]?.text ?? '')
                              .join(' ')
                              .replace(/\s+([?.!,])/g, '$1')
                          );
                        }}
                      >
                        {ch.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
              <input
                id="pattern-reflex-input"
                type="text"
                className="input-clean"
                style={{ flex: 1, minWidth: '220px', fontFamily: 'var(--font-en)', fontSize: '1.02rem' }}
                value={reflexInput}
                onChange={(e) => setReflexInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleGradeReflex();
                }}
                placeholder="마이크로 말하거나 영어를 바로 입력하세요..."
              />
              <button
                id="pattern-reflex-grade-btn"
                type="button"
                className="btn-solid-brand"
                disabled={!reflexInput.trim()}
                onClick={() => handleGradeReflex()}
              >
                <Sparkles size={15} /> 즉시 채점
              </button>
              <button
                id="pattern-reflex-mic-btn"
                type="button"
                className="btn-solid-coral"
                disabled={isMicListening || !isSpeechRecognitionSupported()}
                onClick={handleStartReflexMic}
              >
                <Mic size={15} /> {isMicListening ? '듣는 중...' : `${reflexSpeedSec}초 마이크`}
              </button>
              <button
                type="button"
                className="btn-outline"
                onClick={() => resetReflexVar(varIdx)}
              >
                <RotateCcw size={14} /> 초기화
              </button>
            </div>

            {reflexFeedback && (
              <div
                className={`feedback-banner ${reflexFeedback.ok ? 'ok' : 'warn'}`}
                style={{ marginTop: '14px', flexDirection: 'column', alignItems: 'stretch', gap: '6px' }}
              >
                <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px' }}>
                  <strong>
                    {reflexFeedback.ok
                      ? '✓ 완벽한 반사 스피킹! 입에 착 붙었습니다!'
                      : `일치율 ${reflexFeedback.accuracyPct}% — 모범 문장을 소리 내어 2번 따라 말해보세요!`}
                  </strong>
                  <button
                    id="pattern-reflex-next-var-btn"
                    type="button"
                    className="inline-audio-btn"
                    onClick={() => resetReflexVar((varIdx + 1) % activeSet.variations.length)}
                  >
                    다음 변형 드릴 ({((varIdx + 1) % activeSet.variations.length) + 1}/6) →
                  </button>
                </div>
                <p style={{ fontFamily: 'var(--font-en)', fontWeight: 800, fontSize: '1.02rem' }}>
                  {activeVar.targetEn}
                </p>
                <p style={{ fontSize: '0.86rem' }}>💡 {activeVar.tipKo}</p>
              </div>
            )}

            <div style={{ marginTop: '12px' }}>
              <VoiceRecorderCompare targetEnglish={activeVar.targetEn} compact />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
