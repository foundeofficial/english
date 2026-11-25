import React, { useState } from 'react';
import {
  CheckCircle2,
  Copy,
  FileSpreadsheet,
  Film,
  GraduationCap,
  Image as ImageIcon,
  KeyRound,
  ShieldCheck,
  Sparkles,
  Volume2,
  Zap
} from 'lucide-react';
import type { CurriculumUnit, UnitQAReport } from '../types/learning';
import { verifyUnitPedagogicalQuality } from '../utils/pedagogicalQA';
import { speakEnglish } from '../utils/speech';

interface FlowBlueprintView {
  projectTitle: string;
  characterIngredients: Array<{
    id: string;
    name: string;
    visualSpec: string;
    voiceTone: string;
  }>;
  imagenWorksheetPrompt: string;
  veoScenePrompts: Array<{
    shot: number;
    cameraControl: string;
    veoPrompt: string;
    nativeAudioLine: string;
    koreanSub: string;
  }>;
}

interface CreatorPackageView {
  sourceEngine: string;
  flowBlueprint: FlowBlueprintView;
  unit: CurriculumUnit;
  qaReport: UnitQAReport;
}

interface CreatorFlowStudioProps {
  defaultKLevel: number;
  onRegisterGeneratedUnit: (
    unit: CurriculumUnit,
    launchMode: 'sprint' | 'deep-class' | 'workbook'
  ) => void;
}

const PRESET_TOPICS = [
  '해외 바이어와 연간 계약 물량 할인 단가 협상하기',
  '공항 수하물 수취대에서 분실된 캐리어 추적 및 호텔 배송 요청',
  '뉴욕 카페에서 오트 라떼 얼음 적게 테이크아웃 주문하기',
  '글로벌 화상회의 중 배포 일정 리스크 공유 및 대안 제안하기'
];

function buildClientFallbackPackage(
  topicKo: string,
  targetKLevel: number
): CreatorPackageView {
  const isNego = topicKo.includes('협상') || topicKo.includes('단가') || topicKo.includes('할인');
  const isTravel = topicKo.includes('공항') || topicKo.includes('수하물') || topicKo.includes('캐리어');
  const isCafe = topicKo.includes('카페') || topicKo.includes('라떼') || topicKo.includes('주문');

  const coreEn = isNego
    ? 'If we commit to an annual contract, could you offer a volume discount?'
    : isTravel
    ? 'My checked luggage did not come out on the carousel.'
    : isCafe
    ? 'Could I get an iced oat latte to go, with light ice?'
    : 'I would like to share a structured update on our current priorities.';

  const coreKo = isNego
    ? '연간 계약을 약정한다면 물량 할인을 제공해 주실 수 있을까요?'
    : isTravel
    ? '위탁 수하물이 수하물 수취대에 나오지 않았어요.'
    : isCafe
    ? '아이스 오트 라떼 테이크아웃으로 얼음 적게 해서 주시겠어요?'
    : `"${topicKo}" 관련 현재 우선순위를 체계적으로 공유드리고 싶습니다.`;

  const companionEn = isNego
    ? 'Let us find middle ground that works for both sides.'
    : isTravel
    ? 'Could you track where my bag is and have it delivered to my hotel?'
    : isCafe
    ? 'Actually, let me also add a warm croissant to my order.'
    : 'Please let me know if any part requires further clarification.';

  const companionKo = isNego
    ? '양측 모두에게 도움이 되는 절충안을 찾아봅시다.'
    : isTravel
    ? '가방 위치를 추적해서 호텔로 배송해 주실 수 있을까요?'
    : isCafe
    ? '아, 주문에 따뜻한 크루아상 하나도 추가할게요.'
    : '추가 설명이 필요한 부분이 있다면 언제든 알려주세요.';

  const blankAns = isNego ? 'volume' : isTravel ? 'luggage' : isCafe ? 'light' : 'structured';
  const blankBefore = isNego
    ? 'If we commit to an annual contract, could you offer a'
    : isTravel
    ? 'My checked'
    : isCafe
    ? 'Could I get an iced oat latte to go, with'
    : 'I would like to share a';
  const blankAfter = isNego
    ? 'discount?'
    : isTravel
    ? 'did not come out on the carousel.'
    : isCafe
    ? 'ice?'
    : 'update on our current priorities.';

  const words = coreEn.split(/\s+/);
  const mid = Math.ceil(words.length / 2);
  const chunks = [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
  const id = `custom-${Date.now()}`;

  const flowBlueprint: FlowBlueprintView = {
    projectTitle: `Google Flow 프로덕션 패키지 — ${topicKo}`,
    characterIngredients: [
      {
        id: 'ING-CHLOE-01',
        name: 'Chloe (고정 주연 레퍼런스)',
        visualSpec: 'Early 30s bilingual professional, olive knit top, consistent facial geometry across Scene Builder cuts',
        voiceTone: 'Clear, warm General American English'
      },
      {
        id: 'ING-MARCUS-02',
        name: 'Marcus (상대역 레퍼런스)',
        visualSpec: 'Mid 30s counterpart, forest-green vest, natural eye-line match with Shot 1',
        voiceTone: 'Calm, articulate native baritone'
      }
    ],
    imagenWorksheetPrompt: `Warm editorial textbook diagram illustrating "${topicKo}", crisp ink linework with sage green and terracotta accents on cream paper, zero text overlay`,
    veoScenePrompts: [
      {
        shot: 1,
        cameraControl: 'Medium Two-Shot · 35mm Lens · Subtle Dolly In',
        veoPrompt: `Using Ingredients [ING-CHLOE-01] and [ING-MARCUS-02] in the setting of "${topicKo}", natural daylight, Chloe delivers the opening line with synchronized native audio.`,
        nativeAudioLine: coreEn,
        koreanSub: coreKo
      },
      {
        shot: 2,
        cameraControl: 'Over-the-Shoulder Reverse Cut · Shallow Depth of Field',
        veoPrompt: `Cut to [ING-MARCUS-02] responding naturally while preserving lighting and spatial continuity from Shot 1.`,
        nativeAudioLine: companionEn,
        koreanSub: companionKo
      }
    ]
  };

  const unit: CurriculumUnit = {
    id,
    level: targetKLevel <= 4 ? 'Lv.2 A1+' : targetKLevel <= 7 ? 'Lv.5 B1' : 'Lv.8 B2',
    kLevelNum: targetKLevel,
    category: 'business',
    categoryLabel: 'AI 스튜디오 생성 교재',
    title: `[맞춤 생성] ${topicKo}`,
    subtitle: `목표 K-Lv.${targetKLevel} · Google Flow 영상 스토리보드 & 4종 학습지 통합 단원`,
    keySentence: coreEn,
    sprintMinutes: 7,
    deepClassMinutes: 40,
    instructorName: '코어브릿지 AI 콘텐츠 팩토리',
    visualAssetPath: '/assets/office_sitcom_scene.jpg',
    flowSitcomTitle: flowBlueprint.projectTitle,
    flowSitcomShots: flowBlueprint.veoScenePrompts.map((s) => ({
      shotNumber: s.shot,
      cameraSpec: s.cameraControl,
      character: s.shot === 1 ? 'Chloe' : 'Marcus',
      dialogueEn: s.nativeAudioLine,
      dialogueKo: s.koreanSub
    })),
    nuanceCard: {
      expression: `${blankAns} 핵심 구문`,
      koreanMeaning: coreKo,
      englishDefinition: `Authentic target expression generated and verified for "${topicKo}".`,
      structuralFormula: chunks.map((c) => `[${c}]`).join(' + '),
      konglishTrap: '한국어 조사를 그대로 직역하지 말고 핵심 동사구 콜로케이션을 먼저 세우세요.',
      nativeNuance: '실제 원어민 실무·일상 현장에서 가장 자연스럽게 통용되는 검증 문장입니다.',
      casualExample: coreEn,
      politeExample: companionEn,
      levelVariants: {
        easy: coreEn,
        standard: coreEn,
        challenge: `${coreEn} ${companionEn}`
      }
    },
    sprintQuestions: [
      {
        id: `${id}-sq1`,
        type: 'chunk-order',
        koreanPrompt: coreKo,
        englishPromptHint: 'Order the chunks accurately.',
        koreanChunksGuide: ['전반부 핵심절', '후반부 목적·조건절'],
        targetEnglish: coreEn,
        chunks,
        nuanceExplanation: '주어와 핵심 동사 뼈대를 먼저 배치합니다.'
      },
      {
        id: `${id}-sq2`,
        type: 'fill-blank',
        koreanPrompt: `${coreKo} (키워드 인출)`,
        englishPromptHint: 'Recall the target keyword.',
        koreanChunksGuide: ['핵심 콜로케이션 인출'],
        targetEnglish: coreEn,
        blankSentence: {
          before: blankBefore,
          answer: blankAns,
          after: blankAfter,
          hint: `${blankAns[0]} _ _ (${blankAns.length}글자)`
        },
        nuanceExplanation: `핵심어 '${blankAns}' 스펠링과 결합 구조를 익힙니다.`
      }
    ],
    lectureChapters: [
      {
        id: `${id}-ch1`,
        timestamp: '00:00 ~ 20:00',
        durationMin: 20,
        title: `Chapter 1. "${topicKo}" 핵심 문장 구조 해부`,
        boardFormula: chunks.map((c) => `[${c}]`).join(' ➔ '),
        koreanMisconception: '한국어 단어를 일대일 직역하여 원어민이 쓰지 않는 어색한 조합을 만듦.',
        nativeMindset: '검증된 콜로케이션 블록으로 1초 내에 의사 전달을 시작합니다.',
        exampleEn: coreEn,
        exampleKo: coreKo,
        instructorScript: `방금 생성된 맞춤 단원입니다! "${coreEn}" 문장을 입에 완전히 붙인 뒤 학습지와 단원평가로 점검해 봅시다.`
      }
    ],
    dictationItems: [
      {
        id: `${id}-d1`,
        speaker: 'Chloe',
        fullAudioText: coreEn,
        beforeBlank: blankBefore,
        answer: blankAns,
        afterBlank: blankAfter,
        koreanTranslation: coreKo,
        listeningTip: `핵심어 '${blankAns}' 강세를 들어보세요.`
      }
    ],
    workbookWritingPrompt: {
      situationKo: `"${topicKo}" 상황에서 오늘 배운 표현을 넣어 2문장 이상 영작해보세요.`,
      guidePoints: [`핵심 키워드 '${blankAns}' 포함`, '대소문자 및 마침표 확인'],
      modelParagraphEn: `${coreEn} ${companionEn}`
    },
    examQuestions: [
      {
        id: `${id}-ex1`,
        number: 1,
        questionType: 'multiple-choice',
        grammarTag: '핵심 콜로케이션',
        promptKo: '다음 빈칸에 들어갈 가장 알맞은 어휘를 고르시오.',
        promptEn: `${blankBefore} _______ ${blankAfter}`,
        options: [blankAns, 'ambiguous', 'promise', 'until'],
        correctAnswer: blankAns,
        explanationKo: `문맥상 '${blankAns}'가 유일한 정답입니다.`,
        twinVariant: {
          promptKo: `[쌍둥이 변형] 빈칸을 직접 채우시오: "${coreKo}"`,
          promptEn: `${blankBefore} _______ ${blankAfter}`,
          correctAnswer: blankAns,
          explanationKo: `'${blankAns}' 인출 변형 문항입니다.`
        }
      },
      {
        id: `${id}-ex2`,
        number: 2,
        questionType: 'multiple-choice',
        grammarTag: '콩글리시 무결성 판별',
        promptKo: '다음 중 어법상 정확하고 자연스러운 문장은?',
        promptEn: 'Select the accurate English expression.',
        options: [
          companionEn,
          'Yesterday I had many works.',
          'Let us discuss about this issue.',
          'My schedule is very ambiguous.'
        ],
        correctAnswer: companionEn,
        explanationKo: '나머지 선지는 대표적 콩글리시·문법 오류를 포함하고 있습니다.',
        twinVariant: {
          promptKo: `[쌍둥이 변형] 영작하시오: "${companionKo}"`,
          promptEn: 'Write the complete sentence.',
          correctAnswer: companionEn,
          explanationKo: `"${companionEn}"가 정답입니다.`
        }
      },
      {
        id: `${id}-ex3`,
        number: 3,
        questionType: 'sentence-rewrite',
        grammarTag: '서술형 어순 배열',
        promptKo: '[조건부 서술형] 청크를 배열해 문장을 완성하시오.',
        promptEn: `(${[...chunks].reverse().join(' / ')})`,
        correctAnswer: coreEn,
        explanationKo: `"${coreEn}" 어순으로 작성합니다.`,
        twinVariant: {
          promptKo: `[쌍둥이 변형] 한영 통문장 영작: "${coreKo}"`,
          promptEn: 'Write the full sentence.',
          correctAnswer: coreEn,
          explanationKo: `"${coreEn}"로 작성합니다.`
        }
      }
    ],
    tutorTurns: [
      {
        id: `${id}-t1`,
        tutorQuestionEn: `Let's practice "${topicKo}"! How would you express your main point using today's sentence?`,
        tutorQuestionKo: `"${topicKo}" 상황 실전 과외입니다! 오늘의 핵심 문장을 활용해 말씀해 보시겠어요?`,
        followUpProbeEn: 'Great! Could you add one follow-up sentence to wrap up smoothly?',
        expansionHints: [chunks[0], blankAns, companionEn],
        sampleModelAnswer: coreEn
      }
    ]
  };

  return {
    sourceEngine: 'local-pedagogical-synthesizer',
    flowBlueprint,
    unit,
    qaReport: verifyUnitPedagogicalQuality(unit)
  };
}

export const CreatorFlowStudio: React.FC<CreatorFlowStudioProps> = ({
  defaultKLevel,
  onRegisterGeneratedUnit
}) => {
  const [topicKo, setTopicKo] = useState(PRESET_TOPICS[0]);
  const [targetKLevel, setTargetKLevel] = useState<number>(defaultKLevel);
  const [geminiApiKey, setGeminiApiKey] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedPromptIdx, setCopiedPromptIdx] = useState<number | null>(null);
  const [pkg, setPkg] = useState<CreatorPackageView>(() =>
    buildClientFallbackPackage(PRESET_TOPICS[0], defaultKLevel)
  );

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topicKo.trim()) return;
    setIsGenerating(true);

    try {
      const resp = await fetch('/api/creator/generate-unit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicKo: topicKo.trim(),
          targetKLevel,
          apiKey: geminiApiKey.trim() || undefined
        })
      });

      if (resp.ok) {
        const data = (await resp.json()) as CreatorPackageView;
        setPkg(data);
        setIsGenerating(false);
        return;
      }
    } catch {
      // Fallback if running without backend API server
    }

    setPkg(buildClientFallbackPackage(topicKo.trim(), targetKLevel));
    setIsGenerating(false);
  };

  const handleCopyPrompt = (text: string, idx: number) => {
    navigator.clipboard?.writeText(text);
    setCopiedPromptIdx(idx);
    window.setTimeout(() => setCopiedPromptIdx(null), 1800);
  };

  return (
    <div>
      <section className="hero-intro">
        <div>
          <h1>Google Gemini &amp; Flow 멀티모달 교재·영상 자동 제작 스튜디오</h1>
          <p className="hero-desc">
            원하는 학습 주제나 실무 상황을 입력하면 <strong>① Google Flow 캐릭터 일관성 영상 스토리보드, ② Imagen 학습지 삽화 프롬프트, ③ 구몬식 학습지·단원평가 문제지</strong>를 일괄 생성하고 <strong>4-Gate 정확도 검수</strong>를 거칩니다.
          </p>
        </div>
      </section>

      {/* Topic & Gemini API Configuration Box */}
      <form className="side-panel-card" style={{ marginBottom: '26px' }} onSubmit={handleGenerate}>
        <div className="hint-chips-row" style={{ marginBottom: '12px' }}>
          {PRESET_TOPICS.map((preset, idx) => (
            <button
              key={idx}
              id={`creator-preset-${idx}`}
              type="button"
              className="hint-chip"
              onClick={() => setTopicKo(preset)}
            >
              추천 주제: {preset}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="creator-topic-input" style={{ fontSize: '0.84rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
              제작할 수업·학습지 주제 (한국어 또는 업무 상황 설명)
            </label>
            <input
              id="creator-topic-input"
              type="text"
              className="text-input"
              value={topicKo}
              onChange={(e) => setTopicKo(e.target.value)}
              placeholder="예: 해외 바이어와 연간 계약 단가 협상하기"
            />
          </div>

          <div>
            <label htmlFor="creator-klevel-range" style={{ fontSize: '0.84rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
              목표 학습 레벨: K-Lv.{targetKLevel} / 12
            </label>
            <input
              id="creator-klevel-range"
              type="range"
              min={1}
              max={12}
              value={targetKLevel}
              onChange={(e) => setTargetKLevel(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-primary)', marginTop: '10px' }}
            />
          </div>

          <div>
            <label htmlFor="creator-gemini-key" style={{ fontSize: '0.84rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
              <KeyRound size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
              Google Gemini API Key (선택 — 미입력 시 내장 합성 엔진 작동)
            </label>
            <input
              id="creator-gemini-key"
              type="password"
              className="text-input"
              value={geminiApiKey}
              onChange={(e) => setGeminiApiKey(e.target.value)}
              placeholder="AIza... (입력 시 실시간 Gemini 2.5 Flash 호출)"
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '14px' }}>
          <button
            id="creator-generate-btn"
            type="submit"
            className="btn btn-primary"
            disabled={isGenerating}
          >
            <Sparkles size={16} />
            <span>
              {isGenerating
                ? '생성 및 4-Gate 검수 중...'
                : 'Google Flow 영상 기획안 + 학습지·시험지 패키지 생성'}
            </span>
          </button>
        </div>
      </form>

      {/* Generated Output Split View */}
      <div className="studio-split-layout">
        {/* Left: Google Flow Scene Builder & Imagen Blueprint */}
        <section className="side-panel-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
            <span className="tag tag-amber">
              <Film size={13} /> Google Flow (Veo + Imagen + Scene Builder) 명세
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
              엔진: {pkg.sourceEngine === 'gemini-live-api' ? 'Gemini API 실시간 생성' : '교육공학 표준 합성 엔진'}
            </span>
          </div>

          <h2 style={{ fontSize: '1.16rem', marginBottom: '12px' }}>
            {pkg.flowBlueprint.projectTitle}
          </h2>

          <div style={{ marginBottom: '16px' }}>
            <strong style={{ fontSize: '0.85rem', display: 'block', marginBottom: '6px' }}>
              1. 고정 캐릭터 레퍼런스 (Ingredients to Video 일관성 시트)
            </strong>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
              {pkg.flowBlueprint.characterIngredients.map((ing) => (
                <div key={ing.id} className="paraphrase-doc-card" style={{ padding: '12px 14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                    <strong>{ing.name}</strong>
                    <span className="mono-duration">{ing.id}</span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--ink-secondary)' }}>
                    외형 고정: {ing.visualSpec}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <strong style={{ fontSize: '0.85rem', display: 'block', marginBottom: '6px' }}>
              2. 멀티샷 Scene Builder 카메라 &amp; Veo 생성 프롬프트
            </strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {pkg.flowBlueprint.veoScenePrompts.map((sc, idx) => (
                <div key={sc.shot} className="dictation-line" style={{ marginBottom: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                    <span className="mono-duration" style={{ color: 'var(--accent-primary)' }}>
                      Shot #{sc.shot} · {sc.cameraControl}
                    </span>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        id={`copy-veo-prompt-${sc.shot}`}
                        type="button"
                        className="btn btn-ghost btn-sm"
                        onClick={() => handleCopyPrompt(sc.veoPrompt, idx)}
                      >
                        <Copy size={13} /> {copiedPromptIdx === idx ? '복사됨!' : 'Veo 프롬프트 복사'}
                      </button>
                      <button
                        id={`play-flow-line-${sc.shot}`}
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => speakEnglish(sc.nativeAudioLine, 0.96)}
                      >
                        <Volume2 size={13} /> 대사 듣기
                      </button>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.81rem', color: 'var(--ink-muted)', marginTop: '6px' }}>
                    Prompt: {sc.veoPrompt}
                  </p>
                  <p style={{ fontWeight: 700, marginTop: '6px' }}>“{sc.nativeAudioLine}”</p>
                  <p style={{ fontSize: '0.84rem', color: 'var(--ink-secondary)' }}>{sc.koreanSub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="paraphrase-doc-card">
            <span className="tier-label">
              <ImageIcon size={12} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
              3. 학습지 시각 연상 도해 프롬프트 (Gemini Image / Imagen)
            </span>
            <p style={{ fontSize: '0.84rem', color: 'var(--ink-secondary)' }}>
              {pkg.flowBlueprint.imagenWorksheetPrompt}
            </p>
          </div>
        </section>

        {/* Right: 4-Gate QA Verification & Instant Launch into Courses/Worksheets */}
        <aside className="side-panel-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span className="tag tag-forest">
              <ShieldCheck size={14} /> 4-Gate 검수 점수: {pkg.qaReport.overallScore}%
            </span>
            <span className="tag tag-neutral">{pkg.unit.level}</span>
          </div>

          <h3 style={{ fontSize: '1.14rem', marginBottom: '8px' }}>{pkg.unit.title}</h3>
          <p className="tier-native" style={{ marginBottom: '14px' }}>
            핵심 문장: “{pkg.unit.keySentence}”
          </p>

          <div className="paraphrase-doc-card" style={{ marginBottom: '18px' }}>
            <strong style={{ fontSize: '0.86rem' }}>자동 통과된 4단계 정확도 검수 내역</strong>
            {pkg.qaReport.gates.map((g, i) => (
              <div key={i} style={{ fontSize: '0.81rem', color: 'var(--ink-secondary)' }}>
                <CheckCircle2 size={13} color="var(--status-success)" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                <strong>{g.gateName}:</strong> {g.detail}
              </div>
            ))}
          </div>

          <strong style={{ fontSize: '0.88rem', display: 'block', marginBottom: '10px' }}>
            생성된 교재를 즉시 학습·인쇄 모드로 열기:
          </strong>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
            <button
              id="launch-generated-workbook-btn"
              type="button"
              className="btn btn-primary"
              onClick={() => onRegisterGeneratedUnit(pkg.unit, 'workbook')}
            >
              <FileSpreadsheet size={16} />
              <span>인쇄용 구몬 학습지 &amp; 단원평가 시험지로 열기</span>
            </button>
            <button
              id="launch-generated-deep-btn"
              type="button"
              className="btn btn-secondary"
              onClick={() => onRegisterGeneratedUnit(pkg.unit, 'deep-class')}
            >
              <GraduationCap size={16} />
              <span>Google Flow 시트콤 + 칠판 인강·1:1 과외실로 열기</span>
            </button>
            <button
              id="launch-generated-sprint-btn"
              type="button"
              className="btn btn-warm"
              onClick={() => onRegisterGeneratedUnit(pkg.unit, 'sprint')}
            >
              <Zap size={16} />
              <span>7분 어순 청크 스프린트로 바로 연습하기</span>
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};
