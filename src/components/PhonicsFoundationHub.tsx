import { useState } from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Ear,
  Mic,
  Play,
  RotateCcw,
  Sparkles,
  Volume2,
  Wand2
} from 'lucide-react';
import { FOUNDATION_UNITS } from '../data/foundationCourse.ts';
import {
  MAGIC_E_PAIRS,
  MINIMAL_PAIRS,
  PHONICS_ALPHABET,
  PHONICS_BLENDING_CVC,
  PHONICS_DIGRAPHS,
  PHONICS_YOUTUBE_VIDEOS,
  SIGHT_WORDS_60
} from '../data/phonicsCourse.ts';
import type { FoundationBuilderPuzzle, SightWordItem } from '../types/academy.ts';
import type { SpacedReviewCard } from '../types/course.ts';
import { evaluateSpeechOrDictation } from '../utils/speechScoring.ts';
import {
  isSpeechRecognitionSupported,
  speakEnglish,
  startSpeechRecognition
} from '../utils/speech.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface PhonicsFoundationHubProps {
  phonicsMasteredIds: string[];
  minimalPairBestStreak: number;
  foundationCompletedIds: string[];
  onTogglePhonicsMastered: (id: string) => void;
  onRecordMinimalPairStreak: (streak: number) => void;
  onCompleteFoundationUnit: (unitId: string) => void;
  onAddReviewCard: (card: SpacedReviewCard) => void;
  onOpenDictionary: (word?: string) => void;
}

type FoundationSubTab =
  | 'alphabet'
  | 'blending'
  | 'minimal-pairs'
  | 'sight-words'
  | 'elementary-10';

const ROLE_CLASS: Record<'S' | 'V' | 'O' | 'M', string> = {
  S: 'syntax-chip-s',
  V: 'syntax-chip-v',
  O: 'syntax-chip-o',
  M: 'syntax-chip-m'
};

function shuffleBlocks<T>(items: T[], seedOffset: number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = (i * 7 + seedOffset + 3) % (i + 1);
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
  }
  return copy;
}

export function PhonicsFoundationHub({
  phonicsMasteredIds,
  minimalPairBestStreak,
  foundationCompletedIds,
  onTogglePhonicsMastered,
  onRecordMinimalPairStreak,
  onCompleteFoundationUnit,
  onAddReviewCard,
  onOpenDictionary
}: PhonicsFoundationHubProps) {
  const [subTab, setSubTab] = useState<FoundationSubTab>('alphabet');

  // Tab 1: Alphabet Board + Listening Quiz
  const [selectedLetterId, setSelectedLetterId] = useState(PHONICS_ALPHABET[0]?.id ?? 'ph-a');
  const [alphabetQuizIdx, setAlphabetQuizIdx] = useState<number | null>(null);
  const [alphabetQuizChoices, setAlphabetQuizChoices] = useState<string[]>([]);
  const [alphabetQuizFeedback, setAlphabetQuizFeedback] = useState<string | null>(null);

  // Tab 2: Blending & Magic-E
  const [selectedBlendIdx, setSelectedBlendIdx] = useState(0);
  const [blendMerged, setBlendMerged] = useState(false);
  const [magicEOnMap, setMagicEOnMap] = useState<Record<string, boolean>>({});
  const [digraphFilter, setDigraphFilter] = useState<'all' | 'consonant-digraph' | 'vowel-team' | 'r-controlled'>('all');

  // Tab 3: Minimal Pair Ear-Training & Mic Lab
  const [mpIndex, setMpIndex] = useState(0);
  const [mpSecretSide, setMpSecretSide] = useState<'A' | 'B'>('A');
  const [mpPickedSide, setMpPickedSide] = useState<'A' | 'B' | null>(null);
  const [mpStreak, setMpStreak] = useState(0);
  const [mpMicStatus, setMpMicStatus] = useState<string | null>(null);
  const [mpListening, setMpListening] = useState(false);

  // Tab 4: Sight Words + Videos
  const [sightTier, setSightTier] = useState<SightWordItem['tier']>('kinder');
  const [activeVideoId, setActiveVideoId] = useState(PHONICS_YOUTUBE_VIDEOS[0]?.videoId ?? 'Mpa9TYUpxgs');

  // Tab 5: Elementary 10 Units + Word-Block Builder
  const [selectedUnitId, setSelectedUnitId] = useState(FOUNDATION_UNITS[0]?.id ?? 'f01');
  const [puzzleIdx, setPuzzleIdx] = useState(0);
  const [pickedBlockIndices, setPickedBlockIndices] = useState<number[]>([]);
  const [puzzleFeedback, setPuzzleFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [solvedPuzzleIds, setSolvedPuzzleIds] = useState<Record<string, boolean>>({});
  const [addedCardIds, setAddedCardIds] = useState<Record<string, boolean>>({});

  const activeLetter =
    PHONICS_ALPHABET.find((l) => l.id === selectedLetterId) ?? PHONICS_ALPHABET[0];
  const activeBlend = PHONICS_BLENDING_CVC[selectedBlendIdx] ?? PHONICS_BLENDING_CVC[0];
  const activeMp = MINIMAL_PAIRS[mpIndex] ?? MINIMAL_PAIRS[0];
  const activeUnit =
    FOUNDATION_UNITS.find((u) => u.id === selectedUnitId) ?? FOUNDATION_UNITS[0];
  const activePuzzle: FoundationBuilderPuzzle | undefined = activeUnit?.builderPuzzles[puzzleIdx];

  const phonicsProgressCount = phonicsMasteredIds.length;
  const totalPhonicsItems = PHONICS_ALPHABET.length + SIGHT_WORDS_60.length;

  // Alphabet Listening Quiz
  const startAlphabetQuiz = () => {
    const targetIdx = Math.floor(Math.random() * PHONICS_ALPHABET.length);
    const target = PHONICS_ALPHABET[targetIdx];
    const pool = new Set<string>([target.id]);
    while (pool.size < 4) {
      const rand = PHONICS_ALPHABET[Math.floor(Math.random() * PHONICS_ALPHABET.length)];
      pool.add(rand.id);
    }
    const choices = [...pool].sort();
    setAlphabetQuizIdx(targetIdx);
    setAlphabetQuizChoices(choices);
    setAlphabetQuizFeedback(null);
    speakEnglish(`${target.letter}. ${target.exampleWords[0].word}`, 0.8);
  };

  const handleAnswerAlphabetQuiz = (choiceId: string) => {
    if (alphabetQuizIdx === null) return;
    const target = PHONICS_ALPHABET[alphabetQuizIdx];
    if (choiceId === target.id) {
      setAlphabetQuizFeedback(`정답입니다! ${target.letter} (${target.koreanSoundHint}) — ${target.exampleWords[0].word} (${target.exampleWords[0].meaningKo})`);
      setSelectedLetterId(target.id);
      if (!phonicsMasteredIds.includes(target.id)) {
        onTogglePhonicsMastered(target.id);
      }
    } else {
      const picked = PHONICS_ALPHABET.find((l) => l.id === choiceId);
      setAlphabetQuizFeedback(`아쉬워요! 방금 소리는 ${target.letter} (${target.exampleWords[0].word})였어요. (선택: ${picked?.letter ?? ''})`);
    }
  };

  // Minimal Pair Ear Training
  const playMinimalPairPrompt = (nextIdx = mpIndex) => {
    const pair = MINIMAL_PAIRS[nextIdx] ?? MINIMAL_PAIRS[0];
    const side: 'A' | 'B' = Math.random() < 0.5 ? 'A' : 'B';
    setMpIndex(nextIdx);
    setMpSecretSide(side);
    setMpPickedSide(null);
    setMpMicStatus(null);
    speakEnglish(side === 'A' ? pair.wordA : pair.wordB, 0.85);
  };

  const handlePickMinimalPair = (picked: 'A' | 'B') => {
    if (mpPickedSide !== null) return;
    setMpPickedSide(picked);
    if (picked === mpSecretSide) {
      const nextStreak = mpStreak + 1;
      setMpStreak(nextStreak);
      if (nextStreak > minimalPairBestStreak) {
        onRecordMinimalPairStreak(nextStreak);
      }
    } else {
      setMpStreak(0);
    }
  };

  const handleSpeakMinimalPair = (targetWord: string) => {
    if (!isSpeechRecognitionSupported()) {
      setMpMicStatus('현재 브라우저에서 음성 인식을 지원하지 않습니다. 원어민 소리를 듣고 입모양을 따라 해보세요.');
      return;
    }
    setMpListening(true);
    setMpMicStatus(`"${targetWord}"를 또박또박 발음해 보세요...`);
    startSpeechRecognition(
      (transcript) => {
        setMpListening(false);
        const scored = evaluateSpeechOrDictation(transcript, targetWord);
        if (scored.accuracyPct >= 75 || transcript.toLowerCase().includes(targetWord.toLowerCase())) {
          setMpMicStatus(`✓ 정확하게 인식됨! 인식 결과: "${transcript}" (발음 정확도 ${scored.accuracyPct}%)`);
        } else {
          setMpMicStatus(`인식 결과: "${transcript}" — 목표 단어 "${targetWord}"의 입모양 팁을 보고 한 번 더 발음해 보세요.`);
        }
      },
      (err) => {
        setMpListening(false);
        setMpMicStatus(err);
      }
    );
  };

  // Foundation Sentence Builder
  const shuffledPuzzleBlocks = activePuzzle
    ? shuffleBlocks(
        activePuzzle.blocks.map((b, origIdx) => ({ ...b, origIdx })),
        activeUnit.unitNumber * 13 + puzzleIdx * 5
      )
    : [];

  const handleSwitchUnit = (unitId: string) => {
    setSelectedUnitId(unitId);
    setPuzzleIdx(0);
    setPickedBlockIndices([]);
    setPuzzleFeedback('idle');
  };

  const handleToggleBlock = (shuffledPos: number) => {
    if (puzzleFeedback === 'correct') return;
    setPuzzleFeedback('idle');
    setPickedBlockIndices((prev) =>
      prev.includes(shuffledPos) ? prev.filter((p) => p !== shuffledPos) : [...prev, shuffledPos]
    );
  };

  const handleCheckPuzzle = () => {
    if (!activePuzzle) return;
    const assembled = pickedBlockIndices
      .map((pos) => shuffledPuzzleBlocks[pos]?.text ?? '')
      .join(' ')
      .replace(/\s+([?.!,])/g, '$1')
      .trim()
      .toLowerCase();
    const target = activePuzzle.targetEn.trim().toLowerCase();
    if (assembled === target) {
      setPuzzleFeedback('correct');
      speakEnglish(activePuzzle.targetEn, 0.9);
      const nextSolved = { ...solvedPuzzleIds, [activePuzzle.id]: true };
      setSolvedPuzzleIds(nextSolved);
      const unitSolvedCount = activeUnit.builderPuzzles.filter((p) => nextSolved[p.id]).length;
      if (unitSolvedCount >= 3 && !foundationCompletedIds.includes(activeUnit.id)) {
        onCompleteFoundationUnit(activeUnit.id);
      }
    } else {
      setPuzzleFeedback('wrong');
    }
  };

  const handleSaveFoundationSentence = (id: string, english: string, korean: string, pattern: string) => {
    const today = new Date().toISOString().slice(0, 10);
    onAddReviewCard({
      id: `fnd-${id}-${Date.now()}`,
      promptKo: korean,
      targetEn: english,
      noteKo: `초등 필수 패턴 · ${pattern}`,
      sourceLabel: `Stage 1 · ${activeUnit.badge}`,
      intervalDays: 1,
      dueDate: today,
      reviewCount: 0,
      mastered: false
    });
    setAddedCardIds((prev) => ({ ...prev, [id]: true }));
  };

  const visibleDigraphs =
    digraphFilter === 'all'
      ? PHONICS_DIGRAPHS
      : PHONICS_DIGRAPHS.filter((d) => d.category === digraphFilter);

  const visibleSightWords = SIGHT_WORDS_60.filter((w) => w.tier === sightTier);
  const activeVideo =
    PHONICS_YOUTUBE_VIDEOS.find((v) => v.videoId === activeVideoId) ?? PHONICS_YOUTUBE_VIDEOS[0];

  return (
    <main className="page-wrap">
      {/* HERO HEADER */}
      <section className="studio-hero-banner">
        <div className="studio-hero-text">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="pill-tag pill-brand">Stage 0 · 유치원 파닉스 (Pre-A1)</span>
            <span className="pill-tag pill-amber">Stage 1 · 초등 필수 10강 (A1)</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.05rem)', marginTop: '10px' }}>
            알파벳 첫소리부터 초등 100문장 어순 완성까지
          </h1>
          <p style={{ color: 'var(--text-sub)', marginTop: '8px', maxWidth: '640px' }}>
            영어를 단 한 글자도 몰라도 괜찮습니다. A–Z 입모양 발음, 소리 합치기(Magic-E), 한국인 취약 R/L·F/V 귀트임 게임, 사이트워드 60개, 그리고 초등 필수 10강 어순 블록 조립으로 영어의 뿌리를 완벽히 세웁니다.
          </p>

          <div className="summary-stat-strip" style={{ marginTop: '14px' }}>
            <div className="mini-stat-chip">
              <span className="mini-stat-label">파닉스·사이트워드</span>
              <strong>
                {phonicsProgressCount} / {totalPhonicsItems}
              </strong>
            </div>
            <div className="mini-stat-chip">
              <span className="mini-stat-label">미니멀페어 최고연속</span>
              <strong>{minimalPairBestStreak}연속 정답</strong>
            </div>
            <div className="mini-stat-chip">
              <span className="mini-stat-label">초등 10강 완주</span>
              <strong>
                {foundationCompletedIds.length} / {FOUNDATION_UNITS.length}강
              </strong>
            </div>
          </div>
        </div>

        <div className="studio-hero-img-box">
          <img src="assets/stage_phonics_studio.jpg" alt="파닉스 알파벳 블록 학습 스튜디오" />
        </div>
      </section>

      {/* 5 SUB-MODE TABS */}
      <div className="submode-tab-bar" role="tablist" aria-label="파닉스 및 초등 기초 학습 메뉴" style={{ marginBottom: '24px' }}>
        <button
          id="fnd-tab-alphabet"
          type="button"
          className={`submode-tab-btn ${subTab === 'alphabet' ? 'active' : ''}`}
          onClick={() => setSubTab('alphabet')}
        >
          <Sparkles size={16} />
          <span>1. A–Z 음가 보드</span>
        </button>
        <button
          id="fnd-tab-blending"
          type="button"
          className={`submode-tab-btn ${subTab === 'blending' ? 'active' : ''}`}
          onClick={() => setSubTab('blending')}
        >
          <Wand2 size={16} />
          <span>2. 소리합치기·매직E</span>
        </button>
        <button
          id="fnd-tab-minimal"
          type="button"
          className={`submode-tab-btn ${subTab === 'minimal-pairs' ? 'active' : ''}`}
          onClick={() => setSubTab('minimal-pairs')}
        >
          <Ear size={16} />
          <span>3. R/L·F/V 귀트임 게임</span>
        </button>
        <button
          id="fnd-tab-sight"
          type="button"
          className={`submode-tab-btn ${subTab === 'sight-words' ? 'active' : ''}`}
          onClick={() => setSubTab('sight-words')}
        >
          <Award size={16} />
          <span>4. 사이트워드 60·영상</span>
        </button>
        <button
          id="fnd-tab-elem10"
          type="button"
          className={`submode-tab-btn ${subTab === 'elementary-10' ? 'active' : ''}`}
          onClick={() => setSubTab('elementary-10')}
        >
          <Play size={16} />
          <span>5. 초등 10강·어순조립</span>
        </button>
      </div>

      {/* =======================================================
          TAB 1: INTERACTIVE A-Z PHONICS SOUND BOARD
         ======================================================= */}
      {subTab === 'alphabet' && activeLetter && (
        <section className="stack-lg">
          <div className="surface-card">
            <div className="section-label-between" style={{ marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h2 style={{ fontSize: '1.28rem' }}>A–Z 알파벳 26자 음가 사운드 보드</h2>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginTop: '4px' }}>
                  글자를 누르면 원어민 소리가 재생됩니다. 코랄색 타일은 영어의 핵심 <strong>5대 모음 (A·E·I·O·U)</strong>입니다.
                </p>
              </div>
              <button
                id="start-alphabet-quiz-btn"
                type="button"
                className="btn-solid-coral"
                style={{ padding: '9px 16px', fontSize: '0.88rem' }}
                onClick={startAlphabetQuiz}
              >
                <Ear size={16} /> 소리 듣고 알파벳 맞추기 퀴즈
              </button>
            </div>

            {alphabetQuizIdx !== null && (
              <div className="quiz-spotlight-box" style={{ marginBottom: '20px' }}>
                <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <span className="pill-tag pill-coral">파닉스 듣기 퀴즈</span>
                    <strong style={{ marginLeft: '10px', fontSize: '1rem' }}>
                      방금 들린 소리는 어떤 알파벳일까요?
                    </strong>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      type="button"
                      className="btn-outline"
                      style={{ padding: '6px 12px', fontSize: '0.84rem' }}
                      onClick={() => {
                        const t = PHONICS_ALPHABET[alphabetQuizIdx];
                        speakEnglish(`${t.letter}. ${t.exampleWords[0].word}`, 0.78);
                      }}
                    >
                      <Volume2 size={14} /> 다시 듣기
                    </button>
                    <button
                      type="button"
                      className="btn-solid-brand"
                      style={{ padding: '6px 12px', fontSize: '0.84rem' }}
                      onClick={startAlphabetQuiz}
                    >
                      다음 문제 →
                    </button>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '10px', marginTop: '14px' }}>
                  {alphabetQuizChoices.map((cid) => {
                    const item = PHONICS_ALPHABET.find((l) => l.id === cid);
                    if (!item) return null;
                    return (
                      <button
                        key={cid}
                        type="button"
                        className="phonics-quiz-choice-btn"
                        onClick={() => handleAnswerAlphabetQuiz(cid)}
                      >
                        <span style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-en)' }}>
                          {item.letter} {item.lowercase}
                        </span>
                        <small>{item.koreanSoundHint}</small>
                      </button>
                    );
                  })}
                </div>
                {alphabetQuizFeedback && (
                  <p style={{ marginTop: '12px', fontWeight: 700, color: 'var(--brand)' }}>
                    {alphabetQuizFeedback}
                  </p>
                )}
              </div>
            )}

            <div className="phonics-az-grid">
              {PHONICS_ALPHABET.map((item) => {
                const isActive = item.id === activeLetter.id;
                const isDone = phonicsMasteredIds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    id={`phonics-tile-${item.lowercase}`}
                    type="button"
                    className={`phonics-letter-tile ${item.isVowel ? 'vowel' : ''} ${isActive ? 'active' : ''} ${isDone ? 'mastered' : ''}`}
                    onClick={() => {
                      setSelectedLetterId(item.id);
                      speakEnglish(`${item.letter}. ${item.exampleWords[0].word}`, 0.82);
                    }}
                  >
                    <span className="phonics-tile-big">
                      {item.letter}
                      <small>{item.lowercase}</small>
                    </span>
                    <span className="phonics-tile-hint">{item.koreanSoundHint.split(' ')[0]}</span>
                    {isDone && <CheckCircle2 size={13} className="phonics-tile-check" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE LETTER DEEP COACHING CARD */}
          <div className="surface-card phonics-detail-card">
            <div className="phonics-detail-top">
              <div className="phonics-big-badge">
                <span>
                  {activeLetter.letter}
                  {activeLetter.lowercase}
                </span>
                <small>{activeLetter.ipa}</small>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                  <span className={`pill-tag ${activeLetter.isVowel ? 'pill-coral' : 'pill-brand'}`}>
                    {activeLetter.isVowel ? '핵심 모음 (Vowel)' : '자음 (Consonant)'}
                  </span>
                  <span className="pill-tag pill-amber">대표 소리: {activeLetter.koreanSoundHint}</span>
                </div>
                <h3 style={{ fontSize: '1.22rem', marginTop: '10px' }}>
                  한국인 맞춤 입모양 · 혀 위치 코칭
                </h3>
                <p style={{ color: 'var(--text-body)', marginTop: '6px', lineHeight: 1.7 }}>
                  {activeLetter.mouthTipKo}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '14px' }}>
                  <button
                    type="button"
                    className="btn-solid-brand"
                    style={{ padding: '9px 16px', fontSize: '0.9rem' }}
                    onClick={() =>
                      speakEnglish(
                        `${activeLetter.letter}. ${activeLetter.exampleWords.map((w) => w.word).join(', ')}`,
                        0.82
                      )
                    }
                  >
                    <Volume2 size={16} /> 대표 단어 3개 이어 듣기
                  </button>
                  <button
                    id="toggle-phonics-letter-mastered-btn"
                    type="button"
                    className={phonicsMasteredIds.includes(activeLetter.id) ? 'btn-solid-coral' : 'btn-outline'}
                    style={{ padding: '9px 16px', fontSize: '0.9rem' }}
                    onClick={() => onTogglePhonicsMastered(activeLetter.id)}
                  >
                    <CheckCircle2 size={16} />
                    {phonicsMasteredIds.includes(activeLetter.id)
                      ? '익힘 완료 ✓'
                      : '이 알파벳 익힘 체크'}
                  </button>
                </div>
              </div>
            </div>

            <div className="phonics-example-row">
              {activeLetter.exampleWords.map((ex) => (
                <button
                  key={ex.word}
                  type="button"
                  className="phonics-word-card"
                  onClick={() => speakEnglish(ex.word, 0.85)}
                >
                  <span className="phonics-word-emoji">{ex.emoji}</span>
                  <strong style={{ fontFamily: 'var(--font-en)', fontSize: '1.22rem', color: 'var(--text-strong)' }}>
                    {ex.word}
                  </strong>
                  <span style={{ color: 'var(--text-sub)', fontSize: '0.9rem' }}>{ex.meaningKo}</span>
                  <span className="inline-audio-chip">
                    <Volume2 size={13} /> 발음 듣기
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =======================================================
          TAB 2: CVC BLENDING + MAGIC-E + DIGRAPHS
         ======================================================= */}
      {subTab === 'blending' && activeBlend && (
        <section className="stack-lg">
          {/* CVC SOUND BLENDING */}
          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
              <div>
                <span className="pill-tag pill-brand">Step 1 · CVC 3글자 소리 합치기</span>
                <h2 style={{ fontSize: '1.3rem', marginTop: '6px' }}>자음 + 단모음 + 자음 블렌딩 빌더</h2>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {PHONICS_BLENDING_CVC.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`day-switch-chip ${idx === selectedBlendIdx ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedBlendIdx(idx);
                      setBlendMerged(false);
                    }}
                  >
                    {item.word}
                  </button>
                ))}
              </div>
            </div>

            <div className="blending-stage-box">
              <div className={`blending-tiles-row ${blendMerged ? 'merged' : ''}`}>
                {activeBlend.parts.map((part, i) => (
                  <button
                    key={`${activeBlend.id}-${i}`}
                    type="button"
                    className={`blending-tile ${i === 1 ? 'vowel' : ''}`}
                    onClick={() => speakEnglish(part, 0.72)}
                  >
                    {part}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '18px' }}>
                <button
                  id="blend-merge-btn"
                  type="button"
                  className="btn-solid-brand"
                  onClick={() => {
                    setBlendMerged(true);
                    speakEnglish(activeBlend.word, 0.85);
                  }}
                >
                  <Wand2 size={16} /> 소리 합쳐서 읽기! ({activeBlend.word})
                </button>
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => {
                    setBlendMerged(false);
                    speakEnglish(activeBlend.sampleSentenceEn, 0.88);
                  }}
                >
                  <Volume2 size={16} /> 예문 듣기
                </button>
              </div>

              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <div style={{ fontSize: '1.5rem' }}>
                  {activeBlend.emoji}{' '}
                  <strong style={{ fontFamily: 'var(--font-en)' }}>{activeBlend.word}</strong>{' '}
                  <span style={{ color: 'var(--text-sub)', fontSize: '0.96rem' }}>
                    {activeBlend.ipa} · {activeBlend.meaningKo}
                  </span>
                </div>
                <p style={{ marginTop: '8px', fontFamily: 'var(--font-en)', fontWeight: 650 }}>
                  <InteractiveText text={activeBlend.sampleSentenceEn} onLookupWord={onOpenDictionary} />
                </p>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem' }}>{activeBlend.sampleSentenceKo}</p>
              </div>
            </div>
          </div>

          {/* MAGIC-E INTERACTIVE TOGGLE */}
          <div className="surface-card">
            <span className="pill-tag pill-coral">Step 2 · 영어 읽기의 핵심 마법</span>
            <h2 style={{ fontSize: '1.3rem', marginTop: '6px' }}>
              끝에 ‘e’가 붙으면 모음이 알파벳 이름을 불러요! (Magic-E 체험)
            </h2>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', marginTop: '4px', marginBottom: '16px' }}>
              각 카드의 <strong>Magic-E 스위치</strong>를 켜고 끄며 짧은 모음이 긴 모음으로 바뀌는 소리를 직접 귀로 비교해 보세요.
            </p>
            <div className="magic-e-grid">
              {MAGIC_E_PAIRS.map((pair) => {
                const isOn = Boolean(magicEOnMap[pair.id]);
                const shownWord = isOn ? pair.longWord : pair.shortWord;
                const shownIpa = isOn ? pair.longIpa : pair.shortIpa;
                const shownMeaning = isOn ? pair.longMeaningKo : pair.shortMeaningKo;
                return (
                  <div key={pair.id} className={`magic-e-card ${isOn ? 'magic-on' : ''}`}>
                    <div className="section-label-between">
                      <span style={{ fontSize: '0.78rem', fontWeight: 750, color: isOn ? 'var(--coral)' : 'var(--text-sub)' }}>
                        {isOn ? '✨ Magic-E ON (장모음)' : '단모음 (Short)'}
                      </span>
                      <button
                        id={`magic-e-toggle-${pair.id}`}
                        type="button"
                        className={`magic-e-switch-btn ${isOn ? 'on' : ''}`}
                        onClick={() => {
                          const next = !isOn;
                          setMagicEOnMap((prev) => ({ ...prev, [pair.id]: next }));
                          speakEnglish(next ? pair.longWord : pair.shortWord, 0.85);
                        }}
                      >
                        {isOn ? '+e 끄기' : '+e 붙이기'}
                      </button>
                    </div>
                    <button
                      type="button"
                      className="magic-e-word-btn"
                      onClick={() => speakEnglish(shownWord, 0.85)}
                    >
                      <span>{shownWord}</span>
                      <Volume2 size={16} />
                    </button>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-sub)' }}>
                      {shownIpa} · <strong>{shownMeaning}</strong>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', marginTop: '8px' }}>
                      {pair.tipKo}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DIGRAPHS & VOWEL TEAMS */}
          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
              <div>
                <span className="pill-tag pill-amber">Step 3 · 두 글자가 만나 새로운 소리</span>
                <h2 style={{ fontSize: '1.3rem', marginTop: '6px' }}>필수 이중자음 · 이중모음 · R통제모음 12패턴</h2>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {(
                  [
                    ['all', '전체 12'],
                    ['consonant-digraph', '이중자음 (sh/ch/th)'],
                    ['vowel-team', '이중모음 (ee/oo/ai)'],
                    ['r-controlled', 'R-모음 (ar/or)']
                  ] as const
                ).map(([k, label]) => (
                  <button
                    key={k}
                    type="button"
                    className={`day-switch-chip ${digraphFilter === k ? 'active' : ''}`}
                    onClick={() => setDigraphFilter(k)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="digraph-grid">
              {visibleDigraphs.map((dg) => (
                <div key={dg.id} className="digraph-card">
                  <div className="section-label-between">
                    <strong style={{ fontFamily: 'var(--font-en)', fontSize: '1.3rem', color: 'var(--brand)' }}>
                      {dg.pattern}
                    </strong>
                    <span className="pill-tag pill-subtle">{dg.ipa} · {dg.soundCueKo}</span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-sub)', marginTop: '6px' }}>
                    {dg.mouthTipKo}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                    {dg.words.map((w) => (
                      <button
                        key={w.word}
                        type="button"
                        className="digraph-word-pill"
                        onClick={() => speakEnglish(w.word, 0.85)}
                      >
                        <Volume2 size={12} />
                        <strong>{w.word}</strong>
                        <small>{w.meaningKo}</small>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =======================================================
          TAB 3: KOREAN-TRAP MINIMAL PAIRS EAR-TRAINING & MIC GAME
         ======================================================= */}
      {subTab === 'minimal-pairs' && activeMp && (
        <section className="stack-lg">
          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
              <div>
                <span className="pill-tag pill-coral">한국인 발음 완벽 교정 클리닉</span>
                <h2 style={{ fontSize: '1.35rem', marginTop: '6px' }}>
                  미니멀 페어(Minimal Pairs) 귀트임 &amp; 마이크 발음 테스트
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span className="pill-tag pill-brand">현재 연속 정답: {mpStreak}</span>
                <span className="pill-tag pill-amber">최고 기록: {minimalPairBestStreak}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '18px' }}>
              {MINIMAL_PAIRS.map((pair, i) => (
                <button
                  key={pair.id}
                  id={`mp-select-${pair.id}`}
                  type="button"
                  className={`day-switch-chip ${i === mpIndex ? 'active' : ''}`}
                  onClick={() => playMinimalPairPrompt(i)}
                >
                  {pair.wordA} / {pair.wordB}
                </button>
              ))}
            </div>

            <div className="minimal-pair-arena">
              <div style={{ textAlign: 'center', marginBottom: '18px' }}>
                <span className="pill-tag pill-subtle">{activeMp.contrastLabel}</span>
                <h3 style={{ fontSize: '1.2rem', marginTop: '8px' }}>
                  원어민이 읽는 단어를 듣고 A와 B 중 정확한 단어를 고르세요!
                </h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '12px', flexWrap: 'wrap' }}>
                  <button
                    id="mp-play-mystery-btn"
                    type="button"
                    className="btn-solid-brand"
                    onClick={() =>
                      speakEnglish(mpSecretSide === 'A' ? activeMp.wordA : activeMp.wordB, 0.86)
                    }
                  >
                    <Volume2 size={17} /> 문제 소리 듣기 (귀로 구별!)
                  </button>
                  <button
                    id="mp-next-round-btn"
                    type="button"
                    className="btn-outline"
                    onClick={() => playMinimalPairPrompt((mpIndex + 1) % MINIMAL_PAIRS.length)}
                  >
                    <ArrowRight size={16} /> 다음 대립쌍 도전
                  </button>
                </div>
              </div>

              <div className="minimal-pair-cards">
                {(['A', 'B'] as const).map((side) => {
                  const word = side === 'A' ? activeMp.wordA : activeMp.wordB;
                  const ipa = side === 'A' ? activeMp.ipaA : activeMp.ipaB;
                  const meaning = side === 'A' ? activeMp.meaningAKo : activeMp.meaningBKo;
                  const sent = side === 'A' ? activeMp.sentenceA : activeMp.sentenceB;
                  const isCorrectChoice = mpPickedSide !== null && side === mpSecretSide;
                  const isWrongChoice = mpPickedSide === side && side !== mpSecretSide;

                  return (
                    <div
                      key={side}
                      className={`mp-choice-card ${isCorrectChoice ? 'correct' : ''} ${isWrongChoice ? 'wrong' : ''}`}
                    >
                      <button
                        id={`mp-pick-${side}`}
                        type="button"
                        className="mp-pick-main-btn"
                        onClick={() => handlePickMinimalPair(side)}
                      >
                        <span className="pill-tag pill-subtle">선택 {side}</span>
                        <strong style={{ fontSize: '1.75rem', fontFamily: 'var(--font-en)', display: 'block', marginTop: '8px' }}>
                          {word}
                        </strong>
                        <span style={{ color: 'var(--text-sub)', fontSize: '0.92rem' }}>
                          {ipa} · {meaning}
                        </span>
                      </button>

                      <div className="mp-card-tools">
                        <button
                          type="button"
                          className="inline-audio-btn"
                          onClick={() => speakEnglish(word, 0.84)}
                        >
                          <Volume2 size={14} /> 비교 듣기
                        </button>
                        <button
                          type="button"
                          className="inline-audio-btn"
                          disabled={mpListening}
                          onClick={() => handleSpeakMinimalPair(word)}
                        >
                          <Mic size={14} /> 직접 말하기
                        </button>
                      </div>

                      <p style={{ fontSize: '0.86rem', color: 'var(--text-body)', marginTop: '10px', fontFamily: 'var(--font-en)' }}>
                        “<InteractiveText text={sent} onLookupWord={onOpenDictionary} />”
                      </p>
                    </div>
                  );
                })}
              </div>

              {mpPickedSide && (
                <div className={`feedback-banner ${mpPickedSide === mpSecretSide ? 'ok' : 'warn'}`} style={{ marginTop: '16px' }}>
                  <span>
                    {mpPickedSide === mpSecretSide
                      ? `정확합니다! 방금 발음은 "${mpSecretSide === 'A' ? activeMp.wordA : activeMp.wordB}"였습니다.`
                      : `아쉽네요! 정답은 "${mpSecretSide === 'A' ? activeMp.wordA : activeMp.wordB}"였습니다.`}
                  </span>
                </div>
              )}

              {mpMicStatus && (
                <div className="feedback-banner ok" style={{ marginTop: '10px' }}>
                  <span>🎤 {mpMicStatus}</span>
                </div>
              )}

              <div className="coach-callout-box" style={{ marginTop: '16px' }}>
                <strong>💡 한국인 혀 위치 · 발음 핵심 비결</strong>
                <p style={{ marginTop: '4px' }}>{activeMp.koreanTrapTipKo}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =======================================================
          TAB 4: 60 ESSENTIAL SIGHT WORDS + VERIFIED PHONICS VIDEOS
         ======================================================= */}
      {subTab === 'sight-words' && (
        <section className="stack-lg">
          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
              <div>
                <span className="pill-tag pill-brand">영어 동화·교과서의 50%를 차지하는 핵심 단어</span>
                <h2 style={{ fontSize: '1.3rem', marginTop: '6px' }}>유치원·초등 필수 사이트워드(Sight Words) 60선</h2>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {(
                  [
                    ['kinder', '유치원 필수 15'],
                    ['elem-low', '초등 1~2학년 15'],
                    ['elem-mid', '초등 3~4학년 15'],
                    ['elem-high', '초등 5~6학년 15']
                  ] as const
                ).map(([tierKey, label]) => (
                  <button
                    key={tierKey}
                    id={`sight-tier-${tierKey}`}
                    type="button"
                    className={`day-switch-chip ${sightTier === tierKey ? 'active' : ''}`}
                    onClick={() => setSightTier(tierKey)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="sight-word-grid">
              {visibleSightWords.map((sw) => {
                const isMastered = phonicsMasteredIds.includes(sw.id);
                return (
                  <div key={sw.id} className={`sight-word-card ${isMastered ? 'mastered' : ''}`}>
                    <div className="section-label-between">
                      <button
                        type="button"
                        className="sight-word-head-btn"
                        onClick={() => speakEnglish(sw.word, 0.85)}
                      >
                        <strong>{sw.word}</strong>
                        <Volume2 size={14} />
                      </button>
                      <button
                        type="button"
                        className={`tiny-check-btn ${isMastered ? 'done' : ''}`}
                        onClick={() => onTogglePhonicsMastered(sw.id)}
                      >
                        <CheckCircle2 size={14} /> {isMastered ? '암기됨' : '체크'}
                      </button>
                    </div>
                    <div style={{ color: 'var(--brand)', fontWeight: 700, fontSize: '0.9rem', marginTop: '4px' }}>
                      {sw.meaningKo}
                    </div>
                    <p style={{ fontFamily: 'var(--font-en)', fontSize: '0.88rem', marginTop: '8px' }}>
                      <InteractiveText text={sw.sentenceEn} onLookupWord={onOpenDictionary} />
                    </p>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.82rem', marginTop: '2px' }}>
                      {sw.sentenceKo}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* VERIFIED PHONICS & PRONUNCIATION YOUTUBE VIDEOS */}
          <div className="surface-card">
            <span className="pill-tag pill-amber">검증된 원어민·한국인 전문 파닉스 &amp; 발음 유튜브 강의</span>
            <h2 style={{ fontSize: '1.28rem', marginTop: '6px', marginBottom: '14px' }}>
              영상으로 입모양까지 완벽하게 익히기 ({PHONICS_YOUTUBE_VIDEOS.length}편)
            </h2>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {PHONICS_YOUTUBE_VIDEOS.map((vid) => (
                <button
                  key={vid.videoId}
                  type="button"
                  className={`day-switch-chip ${vid.videoId === activeVideo.videoId ? 'active' : ''}`}
                  onClick={() => setActiveVideoId(vid.videoId)}
                >
                  {vid.badgeKo} · {vid.channel.slice(0, 16)}
                </button>
              ))}
            </div>
            {activeVideo && (
              <div className="extra-video-layout">
                <div className="yt-iframe-shell">
                  <iframe
                    key={activeVideo.videoId}
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?rel=0&modestbranding=1`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="extra-video-info">
                  <span className="pill-tag pill-brand">{activeVideo.badgeKo}</span>
                  <h3 style={{ marginTop: '10px', fontSize: '1.12rem' }}>{activeVideo.title}</h3>
                  <p style={{ color: 'var(--text-sub)', fontSize: '0.88rem', marginTop: '4px' }}>
                    채널: {activeVideo.channel}
                  </p>
                  <p style={{ marginTop: '12px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                    {activeVideo.summaryKo}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* =======================================================
          TAB 5: STAGE 1 ELEMENTARY 10-UNIT FOUNDATION + BLOCK BUILDER
         ======================================================= */}
      {subTab === 'elementary-10' && activeUnit && (
        <section className="stack-lg">
          {/* UNIT SELECTOR STRIP */}
          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
              <div>
                <span className="pill-tag pill-brand">Stage 1 · 초등 기초 완성 10강</span>
                <h2 style={{ fontSize: '1.3rem', marginTop: '6px' }}>
                  한국어 어순을 영어 어순으로 뒤집는 초등 필수 10강 (100문장 + 50 어순조립)
                </h2>
              </div>
              <span className="pill-tag pill-amber">
                완료 {foundationCompletedIds.length} / {FOUNDATION_UNITS.length}강
              </span>
            </div>

            <div className="foundation-unit-strip">
              {FOUNDATION_UNITS.map((unit) => {
                const isDone = foundationCompletedIds.includes(unit.id);
                const isActive = unit.id === activeUnit.id;
                return (
                  <button
                    key={unit.id}
                    id={`foundation-unit-btn-${unit.id}`}
                    type="button"
                    className={`foundation-unit-pill ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
                    onClick={() => handleSwitchUnit(unit.id)}
                  >
                    <span>{unit.badge}</span>
                    <small>{unit.titleKo}</small>
                    {isDone && <CheckCircle2 size={13} />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* KOREAN -> ENGLISH WORD ORDER VISUAL BRIDGE */}
          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <span className="pill-tag pill-coral">{activeUnit.badge} · {activeUnit.corePatternEn}</span>
                <h2 style={{ fontSize: '1.35rem', marginTop: '6px' }}>{activeUnit.titleKo}</h2>
                <p style={{ color: 'var(--text-sub)', marginTop: '4px' }}>{activeUnit.subtitleKo}</p>
              </div>
              <button
                id="foundation-mark-complete-btn"
                type="button"
                className={foundationCompletedIds.includes(activeUnit.id) ? 'btn-solid-coral' : 'btn-solid-brand'}
                style={{ padding: '9px 16px', fontSize: '0.88rem' }}
                onClick={() => onCompleteFoundationUnit(activeUnit.id)}
              >
                <CheckCircle2 size={16} />
                {foundationCompletedIds.includes(activeUnit.id) ? '단원 완료됨 ✓' : '이 단원 완료 체크 (+50 XP)'}
              </button>
            </div>

            <div className="order-bridge-grid" style={{ marginTop: '18px' }}>
              <div className="order-bridge-box ko">
                <span className="order-bridge-label">🇰🇷 한국어 머릿속 어순</span>
                <div className="order-chip-row">
                  {activeUnit.koreanOrderDemo.map((chunk, i) => (
                    <span key={i} className="syntax-chip syntax-chip-plain">
                      {chunk}
                    </span>
                  ))}
                </div>
              </div>
              <div className="order-bridge-arrow">→</div>
              <div className="order-bridge-box en">
                <span className="order-bridge-label">🇺🇸 영어 핵심 어순 (주어 → 동사 먼저!)</span>
                <div className="order-chip-row">
                  {activeUnit.englishOrderDemo.map((block, i) => (
                    <span key={i} className={`syntax-chip ${ROLE_CLASS[block.role]}`}>
                      <strong>{block.text}</strong>
                      <small>{block.labelKo}</small>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="coach-callout-box" style={{ marginTop: '14px' }}>
              <strong>🧠 쏙쏙 이해되는 원리 한 줄</strong>
              <p style={{ marginTop: '4px' }}>{activeUnit.koreanBridgeTip}</p>
            </div>
          </div>

          {/* 10 CORE SENTENCES */}
          <div className="surface-card">
            <h3 style={{ fontSize: '1.18rem', marginBottom: '14px' }}>
              {activeUnit.badge} 핵심 필수 10문장 (느리게 0.8x / 보통 1.0x 듣기 · 단어 클릭 사전)
            </h3>
            <div className="foundation-sentence-list">
              {activeUnit.sentences.map((s, idx) => (
                <div key={s.id} className="foundation-sentence-row">
                  <div className="foundation-sentence-num">{String(idx + 1).padStart(2, '0')}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-en)', fontSize: '1.08rem', fontWeight: 750 }}>
                      <InteractiveText text={s.english} onLookupWord={onOpenDictionary} />
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--brand)', marginTop: '3px' }}>
                      직독직해: {s.literalOrderKo}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-sub)', marginTop: '2px' }}>
                      {s.naturalKo}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <button
                      type="button"
                      className="inline-audio-btn"
                      onClick={() => speakEnglish(s.english, 0.78)}
                    >
                      <Volume2 size={13} /> 0.8x
                    </button>
                    <button
                      type="button"
                      className="inline-audio-btn"
                      onClick={() => speakEnglish(s.english, 1.0)}
                    >
                      <Volume2 size={13} /> 1.0x
                    </button>
                    <button
                      type="button"
                      className="inline-audio-btn"
                      disabled={Boolean(addedCardIds[s.id])}
                      onClick={() =>
                        handleSaveFoundationSentence(s.id, s.english, s.naturalKo, s.patternHighlight)
                      }
                    >
                      {addedCardIds[s.id] ? '✓ 저장됨' : '+ 복습함'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INTERACTIVE WORD-BLOCK SENTENCE BUILDER */}
          {activePuzzle && (
            <div className="surface-card">
              <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                <div>
                  <span className="pill-tag pill-coral">실전 어순 블록 조립 퀴즈</span>
                  <h3 style={{ fontSize: '1.2rem', marginTop: '6px' }}>
                    문제 {puzzleIdx + 1} / {activeUnit.builderPuzzles.length} · 우리말을 보고 영어 블록을 순서대로 눌러보세요!
                  </h3>
                </div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {activeUnit.builderPuzzles.map((pz, i) => (
                    <button
                      key={pz.id}
                      type="button"
                      className={`day-switch-chip ${i === puzzleIdx ? 'active' : ''}`}
                      onClick={() => {
                        setPuzzleIdx(i);
                        setPickedBlockIndices([]);
                        setPuzzleFeedback('idle');
                      }}
                    >
                      Q{i + 1} {solvedPuzzleIds[pz.id] ? '✓' : ''}
                    </button>
                  ))}
                </div>
              </div>

              <div className="builder-prompt-box">
                <p style={{ fontSize: '1.15rem', fontWeight: 750 }}>“{activePuzzle.promptKo}”</p>
              </div>

              {/* ASSEMBLED ZONE */}
              <div className={`builder-answer-tray ${puzzleFeedback}`}>
                {pickedBlockIndices.length === 0 ? (
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                    아래 색상 블록(주어 → 동사 → 목적어/수식어)을 순서대로 클릭해 문장을 완성하세요...
                  </span>
                ) : (
                  pickedBlockIndices.map((pos) => {
                    const blk = shuffledPuzzleBlocks[pos];
                    if (!blk) return null;
                    return (
                      <button
                        key={`picked-${pos}`}
                        type="button"
                        className={`syntax-chip ${ROLE_CLASS[blk.role]} clickable`}
                        onClick={() => handleToggleBlock(pos)}
                      >
                        <strong>{blk.text}</strong>
                        <small>{blk.labelKo}</small>
                      </button>
                    );
                  })
                )}
              </div>

              {/* SHUFFLED BLOCK BANK */}
              <div className="builder-bank-row">
                {shuffledPuzzleBlocks.map((blk, pos) => {
                  const used = pickedBlockIndices.includes(pos);
                  return (
                    <button
                      key={`bank-${pos}`}
                      id={`builder-block-${pos}`}
                      type="button"
                      disabled={used}
                      className={`syntax-chip ${ROLE_CLASS[blk.role]} clickable ${used ? 'used' : ''}`}
                      onClick={() => handleToggleBlock(pos)}
                    >
                      <strong>{blk.text}</strong>
                      <small>{blk.labelKo}</small>
                    </button>
                  );
                })}
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '16px' }}>
                <button
                  id="builder-check-btn"
                  type="button"
                  className="btn-solid-brand"
                  disabled={pickedBlockIndices.length === 0}
                  onClick={handleCheckPuzzle}
                >
                  정답 확인하기
                </button>
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => {
                    setPickedBlockIndices([]);
                    setPuzzleFeedback('idle');
                  }}
                >
                  <RotateCcw size={15} /> 다시 조립
                </button>
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => speakEnglish(activePuzzle.targetEn, 0.86)}
                >
                  <Volume2 size={15} /> 정답 소리로 힌트 듣기
                </button>
              </div>

              {puzzleFeedback === 'correct' && (
                <div className="feedback-banner ok" style={{ marginTop: '14px' }}>
                  <CheckCircle2 size={18} />
                  <div>
                    <strong>완벽해요! “{activePuzzle.targetEn}”</strong>
                    <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>{activePuzzle.explanationKo}</p>
                  </div>
                </div>
              )}

              {puzzleFeedback === 'wrong' && (
                <div className="feedback-banner warn" style={{ marginTop: '14px' }}>
                  <div>
                    <strong>어순을 다시 한번 확인해 볼까요?</strong> 영어는 항상 [주어(파랑/초록) → 동사(코랄) → 목적어/수식어] 순서로 시작합니다.
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
