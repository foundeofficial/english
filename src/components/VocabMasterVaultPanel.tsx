import { useState } from 'react';
import {
  Check,
  Eye,
  EyeOff,
  GitBranch,
  Search,
  Sparkles,
  Volume2,
  Zap
} from 'lucide-react';
import {
  ETYMOLOGY_ROOTS_20,
  THEMATIC_VOCAB_VAULT
} from '../data/vocabMasterVault.ts';
import type { SpacedReviewCard } from '../types/course.ts';
import type { ThematicVocabWord } from '../types/v5.ts';
import { speakEnglish } from '../utils/speech.ts';

interface VocabMasterVaultPanelProps {
  masteredVaultWordIds: string[];
  onToggleVaultWordMastered: (wordId: string) => void;
  onCompleteSpeedBlitz: (correctCount: number) => void;
  onAddReviewCard: (card: SpacedReviewCard) => void;
  onOpenDictionary: (word?: string) => void;
}

type VaultView = 'packs' | 'etymology' | 'blitz';

interface BlitzQuestion {
  target: ThematicVocabWord;
  optionsKo: string[];
}

function buildBlitzQuestions(pool: ThematicVocabWord[]): BlitzQuestion[] {
  const picked = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
  return picked.map((target) => {
    const distractors = pool
      .filter((w) => w.id !== target.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((w) => w.meaningKo);
    const optionsKo = [target.meaningKo, ...distractors].sort(() => Math.random() - 0.5);
    return { target, optionsKo };
  });
}

export function VocabMasterVaultPanel({
  masteredVaultWordIds,
  onToggleVaultWordMastered,
  onCompleteSpeedBlitz,
  onAddReviewCard,
  onOpenDictionary
}: VocabMasterVaultPanelProps) {
  const [view, setView] = useState<VaultView>('packs');
  const [packFilter, setPackFilter] = useState<ThematicVocabWord['pack']>('elem-core');
  const [searchQuery, setSearchQuery] = useState('');
  const [hideMeanings, setHideMeanings] = useState(false);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  // Speed Blitz Quiz
  const [blitzQuestions, setBlitzQuestions] = useState<BlitzQuestion[]>([]);
  const [blitzIdx, setBlitzIdx] = useState(0);
  const [blitzScore, setBlitzScore] = useState(0);
  const [blitzPicked, setBlitzPicked] = useState<string | null>(null);
  const [blitzFinished, setBlitzFinished] = useState(false);

  const packWords = THEMATIC_VOCAB_VAULT.filter((w) => w.pack === packFilter);
  const filteredWords = searchQuery.trim()
    ? packWords.filter(
        (w) =>
          w.word.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
          w.meaningKo.includes(searchQuery.trim())
      )
    : packWords;

  const packMasteredCount = packWords.filter((w) => masteredVaultWordIds.includes(w.id)).length;

  const startBlitz = (targetPack = packFilter) => {
    const pool = THEMATIC_VOCAB_VAULT.filter((w) => w.pack === targetPack);
    const qs = buildBlitzQuestions(pool);
    setBlitzQuestions(qs);
    setBlitzIdx(0);
    setBlitzScore(0);
    setBlitzPicked(null);
    setBlitzFinished(false);
    setView('blitz');
    if (qs[0]) {
      speakEnglish(qs[0].target.word, 0.92);
    }
  };

  const handleAnswerBlitz = (choiceKo: string) => {
    if (blitzPicked !== null) return;
    const current = blitzQuestions[blitzIdx];
    if (!current) return;
    setBlitzPicked(choiceKo);
    const isCorrect = choiceKo === current.target.meaningKo;
    const nextScore = isCorrect ? blitzScore + 1 : blitzScore;
    if (isCorrect) setBlitzScore(nextScore);

    window.setTimeout(() => {
      if (blitzIdx + 1 < blitzQuestions.length) {
        const nextIdx = blitzIdx + 1;
        setBlitzIdx(nextIdx);
        setBlitzPicked(null);
        speakEnglish(blitzQuestions[nextIdx].target.word, 0.92);
      } else {
        setBlitzFinished(true);
        onCompleteSpeedBlitz(nextScore);
      }
    }, 750);
  };

  const handleSaveToReview = (item: ThematicVocabWord) => {
    const today = new Date().toISOString().slice(0, 10);
    onAddReviewCard({
      id: `vault-${item.id}-${packMasteredCount}`,
      promptKo: `${item.meaningKo} (${item.exampleKo})`,
      targetEn: `${item.word} — ${item.exampleEn}`,
      noteKo: item.nuanceTipKo,
      sourceLabel: `필수 영단어 금고 · ${item.pack}`,
      intervalDays: 1,
      dueDate: today,
      reviewCount: 0,
      mastered: false
    });
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
  };

  const packLabels: Record<ThematicVocabWord['pack'], string> = {
    'elem-core': '초등 필수 60',
    'middle-core': '중학 내신 60',
    'high-csat': '고등 수능 60',
    'phrasal-idiom': '구동사·이디엄 60'
  };

  return (
    <section className="stack-lg" aria-label="교육부 필수 영단어 240 & 어원 도감">
      {/* SUB-SWITCHER */}
      <div className="cellophane-bar" style={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            id="vault-mode-packs"
            type="button"
            className={`day-switch-chip ${view === 'packs' ? 'active' : ''}`}
            onClick={() => setView('packs')}
          >
            📚 학년별 필수 240단어 ({masteredVaultWordIds.length}/240)
          </button>
          <button
            id="vault-mode-etymology"
            type="button"
            className={`day-switch-chip ${view === 'etymology' ? 'active' : ''}`}
            onClick={() => setView('etymology')}
          >
            <GitBranch size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
            어원(접두사·어근) 20선 · 80파생어
          </button>
          <button
            id="vault-mode-blitz"
            type="button"
            className={`day-switch-chip ${view === 'blitz' ? 'active' : ''}`}
            onClick={() => startBlitz(packFilter)}
          >
            <Zap size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
            스피드 영단어 10문항 블리츠
          </button>
        </div>

        {view === 'packs' && (
          <button
            type="button"
            className="btn-outline"
            style={{ padding: '6px 12px', fontSize: '0.82rem' }}
            onClick={() => setHideMeanings((v) => !v)}
          >
            {hideMeanings ? <Eye size={14} /> : <EyeOff size={14} />}{' '}
            {hideMeanings ? '뜻 모두 보기' : '뜻 가리기 셀프테스트'}
          </button>
        )}
      </div>

      {/* VIEW 1: 240 THEMATIC ESSENTIAL WORDS */}
      {view === 'packs' && (
        <div className="stack-md">
          <div className="surface-card">
            <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {(['elem-core', 'middle-core', 'high-csat', 'phrasal-idiom'] as const).map((pk) => (
                  <button
                    key={pk}
                    id={`vault-pack-${pk}`}
                    type="button"
                    className={`transform-pill-btn ${packFilter === pk ? 'active' : ''}`}
                    onClick={() => setPackFilter(pk)}
                  >
                    {packLabels[pk]}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input
                  type="text"
                  className="input-clean"
                  style={{ width: '210px', padding: '7px 12px', fontSize: '0.86rem' }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="팩 내 단어·뜻 검색..."
                />
                <span className="pill-tag pill-brand">
                  암기 {packMasteredCount}/{packWords.length}
                </span>
              </div>
            </div>
          </div>

          <div className="vocab-cards-grid">
            {filteredWords.map((item) => {
              const isMastered = masteredVaultWordIds.includes(item.id);
              return (
                <article key={item.id} className={`vocab-item-card ${isMastered ? 'mastered' : ''}`}>
                  <div className="section-label-between">
                    <span className="pill-tag pill-subtle">{item.pos}</span>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <button
                        type="button"
                        className="inline-audio-btn"
                        onClick={() => speakEnglish(item.word, 0.9)}
                      >
                        <Volume2 size={13} />
                      </button>
                      <button
                        type="button"
                        className="inline-audio-btn"
                        onClick={() => onOpenDictionary(item.word)}
                      >
                        <Search size={13} />
                      </button>
                      <button
                        type="button"
                        className={`tiny-check-btn ${isMastered ? 'done' : ''}`}
                        onClick={() => onToggleVaultWordMastered(item.id)}
                      >
                        <Check size={13} /> {isMastered ? '암기' : '체크'}
                      </button>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontFamily: 'var(--font-en)', fontSize: '1.22rem', fontWeight: 800 }}>
                      {item.word}
                    </h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {item.phonetic}
                    </span>
                  </div>

                  <p style={{ fontWeight: 750, color: 'var(--brand)', marginTop: '6px' }}>
                    {hideMeanings ? '•••••• (가려짐)' : item.meaningKo}
                  </p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-sub)', marginTop: '4px' }}>
                    💡 {item.nuanceTipKo}
                  </p>

                  <div className="vocab-example-box" style={{ marginTop: '10px' }}>
                    <p style={{ fontFamily: 'var(--font-en)', fontSize: '0.88rem', fontWeight: 650 }}>
                      “{item.exampleEn}”
                    </p>
                    {!hideMeanings && (
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-sub)', marginTop: '2px' }}>
                        {item.exampleKo}
                      </p>
                    )}
                    <button
                      type="button"
                      className="text-action-btn"
                      style={{ marginTop: '6px', fontSize: '0.78rem' }}
                      disabled={Boolean(addedIds[item.id])}
                      onClick={() => handleSaveToReview(item)}
                    >
                      {addedIds[item.id] ? '✓ SM-2 복습함에 추가됨' : '+ SM-2 복습함에 추가'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 2: 20 ETYMOLOGY ROOTS (80 DERIVATIVES) */}
      {view === 'etymology' && (
        <div className="stack-md">
          <div className="surface-card">
            <span className="pill-tag pill-coral">1개 어근으로 4~10개 수능 단어를 한꺼번에 꿰뚫기</span>
            <h2 style={{ fontSize: '1.3rem', marginTop: '6px' }}>
              라틴·그리스 필수 어원(접두사·어근) 20선 &amp; 80 파생어 도감
            </h2>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginTop: '4px' }}>
              어근의 핵심 이미지를 잡으면 처음 보는 고등·수능 장문 어휘도 뜻을 추론할 수 있습니다. 파생어를 클릭하면 원어민 발음이 재생됩니다.
            </p>
          </div>

          <div className="etymology-grid">
            {ETYMOLOGY_ROOTS_20.map((card) => (
              <div key={card.id} className="surface-card" style={{ padding: '18px' }}>
                <div className="section-label-between" style={{ gap: '8px' }}>
                  <strong style={{ fontFamily: 'var(--font-en)', fontSize: '1.35rem', color: 'var(--brand)' }}>
                    {card.root}
                  </strong>
                  <span className="pill-tag pill-amber">{card.originType}</span>
                </div>
                <div style={{ fontWeight: 750, fontSize: '0.98rem', marginTop: '4px' }}>
                  핵심 뜻: {card.coreMeaningKo}
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-sub)', marginTop: '4px', lineHeight: 1.55 }}>
                  {card.visualStoryKo}
                </p>

                <div className="stack-sm" style={{ marginTop: '12px' }}>
                  {card.derivatives.map((d) => (
                    <button
                      key={d.word}
                      type="button"
                      className="etymology-deriv-row"
                      onClick={() => speakEnglish(`${d.word}. ${d.exampleEn}`, 0.92)}
                    >
                      <div className="section-label-between" style={{ width: '100%' }}>
                        <strong style={{ fontFamily: 'var(--font-en)', color: 'var(--text-strong)' }}>
                          {d.word}
                        </strong>
                        <span style={{ fontSize: '0.78rem', color: 'var(--brand)', fontWeight: 700 }}>
                          {d.meaningKo}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.76rem', color: 'var(--text-sub)' }}>
                        🧩 {d.breakdown}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: 10-QUESTION SPEED VOCAB BLITZ QUIZ */}
      {view === 'blitz' && (
        <div className="sm2-flashcard-stage">
          {!blitzFinished && blitzQuestions[blitzIdx] ? (
            <div className="sm2-card-face">
              <div className="section-label-between" style={{ marginBottom: '12px' }}>
                <span className="pill-tag pill-coral">
                  스피드 블리츠 · {packLabels[packFilter]} · {blitzIdx + 1} / {blitzQuestions.length}
                </span>
                <span className="pill-tag pill-brand">정답 {blitzScore}개</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-en)', fontSize: '2.1rem', fontWeight: 800, marginTop: '12px' }}>
                {blitzQuestions[blitzIdx].target.word}
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '4px' }}>
                {blitzQuestions[blitzIdx].target.phonetic} · {blitzQuestions[blitzIdx].target.pos}
              </p>

              <button
                type="button"
                className="inline-audio-btn"
                style={{ marginTop: '10px' }}
                onClick={() => speakEnglish(blitzQuestions[blitzIdx].target.word, 0.9)}
              >
                <Volume2 size={14} /> 발음 다시 듣기
              </button>

              <div className="quiz-options-grid" style={{ marginTop: '20px' }}>
                {blitzQuestions[blitzIdx].optionsKo.map((opt, idx) => {
                  const isCorrect = opt === blitzQuestions[blitzIdx].target.meaningKo;
                  let cls = 'option-choice-btn';
                  if (blitzPicked !== null) {
                    if (isCorrect) cls += ' correct-ans';
                    else if (opt === blitzPicked && !isCorrect) cls += ' wrong-ans';
                  }
                  return (
                    <button
                      key={opt}
                      id={`blitz-opt-${idx}`}
                      type="button"
                      className={cls}
                      onClick={() => handleAnswerBlitz(opt)}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="sm2-card-face">
              <Sparkles size={32} style={{ color: 'var(--brand)' }} />
              <h3 style={{ fontSize: '1.5rem', marginTop: '10px' }}>
                스피드 영단어 블리츠 완료! ({blitzScore} / {blitzQuestions.length} 정답)
              </h3>
              <p style={{ color: 'var(--text-sub)', marginTop: '6px' }}>
                +{blitzScore * 5} XP가 누적되었습니다! 다른 학년 팩으로도 도전해 보세요.
              </p>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '18px', flexWrap: 'wrap' }}>
                {(['elem-core', 'middle-core', 'high-csat', 'phrasal-idiom'] as const).map((pk) => (
                  <button
                    key={pk}
                    type="button"
                    className="btn-solid-brand"
                    style={{ padding: '8px 14px', fontSize: '0.86rem' }}
                    onClick={() => {
                      setPackFilter(pk);
                      startBlitz(pk);
                    }}
                  >
                    {packLabels[pk]} 재도전
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
