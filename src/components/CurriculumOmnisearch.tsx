import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  FileEdit,
  GraduationCap,
  Mic,
  Search,
  Sparkles,
  Volume2,
  X
} from 'lucide-react';
import { CONNECTED_SPEECH_RULES } from '../data/connectedSpeechCourse.ts';
import { COURSE_CATALOG } from '../data/courseCatalog.ts';
import { FOUNDATION_UNITS } from '../data/foundationCourse.ts';
import { GRADED_STORYBOOKS } from '../data/gradedStorybooks.ts';
import { GRAMMAR_UNITS } from '../data/grammarMasterBook.ts';
import { HIGH_SCHOOL_PASSAGES } from '../data/highSchoolPassages.ts';
import { SPEAKING_PROMPTS_16 } from '../data/speakingPrompts.ts';
import { CONFUSABLE_PAIRS_50, IRREGULAR_VERBS_80 } from '../data/verbAndConfusableBank.ts';
import { CONDITIONAL_WRITING_30, ERROR_CORRECTION_30 } from '../data/writingClinicData.ts';
import type { MainRoute } from '../types/course.ts';
import { speakEnglish } from '../utils/speech.ts';
import type { AcademySubTab } from './GrammarAndHighSchoolHub.tsx';
import type { VocabTab } from './VocabAndReviewBook.tsx';
import type { VaultView } from './VocabMasterVaultPanel.tsx';

export interface OmnisearchNavOptions {
  dayNumber?: number;
  lectureTab?: 'youtube' | 'roleplay' | 'storybook';
  roleplaySub?: 'roleplay' | 'speaking' | 'pattern-gym';
  worksheetTab?: 'concept' | 'exam' | 'mock-exam';
  academyTab?: AcademySubTab;
  vocabTab?: VocabTab;
  vaultView?: VaultView;
}

interface SearchHit {
  id: string;
  categoryKo: string;
  title: string;
  subtitle: string;
  speakSample?: string;
  searchBlob: string;
  route: MainRoute;
  opts?: OmnisearchNavOptions;
}

interface CurriculumOmnisearchProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: MainRoute, opts?: OmnisearchNavOptions) => void;
  onOpenDictionary: (word: string) => void;
}

const POPULAR_TAGS = [
  '분사구문',
  '가정법',
  '관계대명사',
  '현재완료',
  'affect',
  'borrow',
  '도치',
  'OPIc',
  '연음',
  '불규칙'
];

export function CurriculumOmnisearch({
  isOpen,
  onClose,
  onNavigate,
  onOpenDictionary
}: CurriculumOmnisearchProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const index = useMemo<SearchHit[]>(() => {
    const items: SearchHit[] = [];

    for (const u of FOUNDATION_UNITS) {
      items.push({
        id: `omni-f-${u.id}`,
        categoryKo: '초등 10강',
        title: `${u.badge} · ${u.titleKo}`,
        subtitle: u.corePatternEn,
        speakSample: u.sentences[0]?.english,
        searchBlob: `${u.badge} ${u.titleKo} ${u.subtitleKo} ${u.corePatternEn} 초등 어순`.toLowerCase(),
        route: 'foundation'
      });
    }

    for (const c of CONNECTED_SPEECH_RULES) {
      items.push({
        id: `omni-cs-${c.id}`,
        categoryKo: '연음·발음',
        title: `${c.writtenEn} → ${c.nativeSoundEn}`,
        subtitle: `${c.titleKo} (${c.koreanPronunciationGuide})`,
        speakSample: c.exampleSentenceEn,
        searchBlob: `${c.writtenEn} ${c.nativeSoundEn} ${c.titleKo} ${c.categoryKo} 연음 발음`.toLowerCase(),
        route: 'foundation'
      });
    }

    for (const g of GRAMMAR_UNITS) {
      items.push({
        id: `omni-g-${g.id}`,
        categoryKo: '비주얼 문법',
        title: `G${String(g.unitNumber).padStart(2, '0')} · ${g.titleKo}`,
        subtitle: `${g.stageLabelKo} · ${g.coreFormula}`,
        speakSample: g.examples[0]?.en,
        searchBlob: `${g.titleKo} ${g.subtitleKo} ${g.coreFormula} ${g.stageLabelKo} 문법`.toLowerCase(),
        route: 'academy',
        opts: { academyTab: 'grammar-units' }
      });
    }

    for (const w of CONDITIONAL_WRITING_30) {
      items.push({
        id: `omni-cw-${w.id}`,
        categoryKo: '내신 조건영작',
        title: `[${w.gradeBadge}] ${w.grammarPointKo}`,
        subtitle: `${w.koreanPrompt} → ${w.answerEn}`,
        speakSample: w.answerEn,
        searchBlob: `${w.gradeBadge} ${w.grammarPointKo} ${w.grammarTag} ${w.koreanPrompt} ${w.answerEn} 서술형 영작`.toLowerCase(),
        route: 'academy',
        opts: { academyTab: 'writing-clinic' }
      });
    }

    for (const e of ERROR_CORRECTION_30) {
      items.push({
        id: `omni-ec-${e.id}`,
        categoryKo: '어법 오류교정',
        title: `[${e.gradeBadge}] ${e.grammarPointKo}`,
        subtitle: `${e.wrongText} → ${e.correctFix} · ${e.koreanMeaning}`,
        searchBlob: `${e.gradeBadge} ${e.grammarPointKo} ${e.grammarTag} ${e.wrongText} ${e.correctFix} 어법 오류`.toLowerCase(),
        route: 'academy',
        opts: { academyTab: 'writing-clinic' }
      });
    }

    for (const p of HIGH_SCHOOL_PASSAGES) {
      items.push({
        id: `omni-hs-${p.id}`,
        categoryKo: '수능 구문독해',
        title: `#${p.number} ${p.titleKo} (${p.topicBadge})`,
        subtitle: p.titleEn,
        speakSample: p.sentences[0]?.english,
        searchBlob: `${p.titleKo} ${p.titleEn} ${p.topicBadge} ${p.csatGradeTag} 수능 독해`.toLowerCase(),
        route: 'academy',
        opts: { academyTab: 'csat-reading' }
      });
    }

    for (const v of IRREGULAR_VERBS_80) {
      items.push({
        id: `omni-iv-${v.id}`,
        categoryKo: '불규칙 동사',
        title: `${v.base} – ${v.past} – ${v.pp} (${v.pattern})`,
        subtitle: `${v.meaningKo} · ${v.exampleEn}`,
        speakSample: `${v.base}, ${v.past}, ${v.pp}`,
        searchBlob: `${v.base} ${v.past} ${v.pp} ${v.meaningKo} ${v.pattern} 불규칙 동사`.toLowerCase(),
        route: 'vocab-review',
        opts: { vocabTab: 'vault', vaultView: 'irregular-confusable' }
      });
    }

    for (const cp of CONFUSABLE_PAIRS_50) {
      items.push({
        id: `omni-cp-${cp.id}`,
        categoryKo: '혼동 어휘',
        title: `${cp.wordA} vs ${cp.wordB}`,
        subtitle: `${cp.meaningAKo} / ${cp.meaningBKo}`,
        speakSample: `${cp.wordA}, ${cp.wordB}`,
        searchBlob: `${cp.wordA} ${cp.wordB} ${cp.meaningAKo} ${cp.meaningBKo} ${cp.contrastTipKo} 혼동 어휘`.toLowerCase(),
        route: 'vocab-review',
        opts: { vocabTab: 'vault', vaultView: 'irregular-confusable' }
      });
    }

    for (const sb of GRADED_STORYBOOKS) {
      items.push({
        id: `omni-sb-${sb.id}`,
        categoryKo: '영어 원서',
        title: `${sb.titleEn} (${sb.titleKo})`,
        subtitle: `${sb.tierLabelKo} · ${sb.genreKo}`,
        searchBlob: `${sb.titleEn} ${sb.titleKo} ${sb.genreKo} ${sb.tierLabelKo} 원서 스토리북`.toLowerCase(),
        route: 'lecture',
        opts: { lectureTab: 'storybook' }
      });
    }

    for (const sp of SPEAKING_PROMPTS_16) {
      items.push({
        id: `omni-sp-${sp.id}`,
        categoryKo: '1분 스피킹',
        title: `${sp.titleKo} (${sp.categoryBadge})`,
        subtitle: sp.promptEn,
        speakSample: sp.promptEn,
        searchBlob: `${sp.titleKo} ${sp.categoryBadge} ${sp.promptEn} ${sp.promptKo} opic 스피킹 수행평가`.toLowerCase(),
        route: 'lecture',
        opts: { lectureTab: 'roleplay', roleplaySub: 'speaking' }
      });
    }

    for (const d of COURSE_CATALOG) {
      items.push({
        id: `omni-day-${d.dayNumber}`,
        categoryKo: `30일 Day ${String(d.dayNumber).padStart(2, '0')}`,
        title: `${d.dayBadge} · ${d.title}`,
        subtitle: `${d.keyExpression} · ${d.subtitle}`,
        speakSample: d.keyExpression,
        searchBlob: `day ${d.dayNumber} ${d.dayBadge} ${d.title} ${d.subtitle} ${d.keyExpression} ${d.categoryLabel}`.toLowerCase(),
        route: 'lecture',
        opts: { dayNumber: d.dayNumber, lectureTab: 'youtube' }
      });
    }

    return items;
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    window.setTimeout(() => inputRef.current?.focus(), 40);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index.slice(0, 10);
    const terms = q.split(/\s+/).filter(Boolean);
    return index
      .filter((item) => terms.every((t) => item.searchBlob.includes(t)))
      .slice(0, 24);
  }, [index, query]);

  if (!isOpen) return null;

  const getCategoryIcon = (cat: string) => {
    if (cat.includes('문법') || cat.includes('독해')) return <GraduationCap size={14} />;
    if (cat.includes('영작') || cat.includes('오류')) return <FileEdit size={14} />;
    if (cat.includes('스피킹')) return <Mic size={14} />;
    if (cat.includes('원서')) return <BookOpen size={14} />;
    return <Sparkles size={14} />;
  };

  return (
    <div
      className="modal-backdrop"
      style={{ zIndex: 1300 }}
      role="dialog"
      aria-modal="true"
      aria-label="전체 커리큘럼 통합 검색 (Ctrl+K)"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-panel omnisearch-panel">
        <div className="omnisearch-input-row">
          <Search size={18} style={{ color: 'var(--brand)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            id="omnisearch-input"
            type="text"
            className="omnisearch-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="문법·내신서술형·불규칙동사·혼동어휘·수능지문·원서·스피킹 통합 검색 (예: 분사구문, affect, OPIc)"
          />
          <button
            id="close-omnisearch-btn"
            type="button"
            className="icon-close-btn"
            onClick={onClose}
            aria-label="검색 닫기"
          >
            <X size={16} />
          </button>
        </div>

        <div className="omnisearch-tags-row">
          <span style={{ fontSize: '0.75rem', fontWeight: 750, color: 'var(--text-muted)' }}>
            빠른 검색:
          </span>
          {POPULAR_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              className="day-switch-chip"
              style={{ padding: '4px 10px', fontSize: '0.76rem' }}
              onClick={() => setQuery(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="omnisearch-results-list">
          {filtered.length === 0 ? (
            <div style={{ padding: '26px 16px', textAlign: 'center', color: 'var(--text-sub)' }}>
              <p style={{ fontWeight: 700 }}>커리큘럼에서 “{query}” 직접 일치 항목이 없습니다.</p>
              <button
                type="button"
                className="btn-solid-brand"
                style={{ marginTop: '12px', padding: '9px 16px', fontSize: '0.86rem' }}
                onClick={() => {
                  const q = query.trim();
                  onClose();
                  onOpenDictionary(q);
                }}
              >
                <Search size={14} /> 실시간 영한사전에서 “{query.trim()}” 검색하기
              </button>
            </div>
          ) : (
            filtered.map((hit) => (
              <div key={hit.id} className="omnisearch-hit-row">
                <button
                  type="button"
                  className="omnisearch-hit-main"
                  onClick={() => {
                    onNavigate(hit.route, hit.opts);
                    onClose();
                  }}
                >
                  <span className="pill-tag pill-subtle" style={{ fontSize: '0.71rem', flexShrink: 0 }}>
                    {getCategoryIcon(hit.categoryKo)} {hit.categoryKo}
                  </span>
                  <div style={{ minWidth: 0, flex: 1, textAlign: 'left' }}>
                    <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-strong)' }}>
                      {hit.title}
                    </strong>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.78rem',
                        color: 'var(--text-sub)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {hit.subtitle}
                    </span>
                  </div>
                  <ArrowRight size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                </button>
                {hit.speakSample && (
                  <button
                    type="button"
                    className="inline-audio-btn"
                    title="발음 듣기"
                    onClick={() => speakEnglish(hit.speakSample!, 0.94)}
                  >
                    <Volume2 size={13} />
                  </button>
                )}
              </div>
            ))
          )}
        </div>

        {query.trim() && filtered.length > 0 && (
          <div className="omnisearch-footer">
            <button
              type="button"
              className="text-action-btn"
              onClick={() => {
                const q = query.trim();
                onClose();
                onOpenDictionary(q);
              }}
            >
              실시간 영한사전에서 “{query.trim()}” 상세 뜻·예문 더 찾아보기 →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
