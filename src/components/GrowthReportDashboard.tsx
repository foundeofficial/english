import { useRef, useState } from 'react';
import {
  AlertTriangle,
  Award,
  BarChart3,
  CheckCircle2,
  Clock,
  Copy,
  Download,
  Printer,
  Smartphone,
  Sparkles,
  Upload
} from 'lucide-react';
import { COURSE_CATALOG, COURSE_METADATA, WEEK_THEMES } from '../data/courseCatalog.ts';
import { LEVEL_INFO_MAP, MASTERY_STAGE_MAP } from '../data/levels.ts';
import type { AppPersistState, MainRoute } from '../types/course.ts';
import { computeAchievementBadges } from '../utils/achievements.ts';

interface GrowthReportDashboardProps {
  state: AppPersistState;
  onJumpToDay: (dayNumber: number, route?: MainRoute) => void;
  onImportState: (imported: AppPersistState) => void;
}

const SYNC_PREFIX = 'KB6:';

function encodeStateToSyncCode(state: AppPersistState): string {
  const json = JSON.stringify(state);
  const bytes = new TextEncoder().encode(json);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 1) {
    bin += String.fromCharCode(bytes[i]);
  }
  return `${SYNC_PREFIX}${btoa(bin)}`;
}

function decodeSyncCodeToState(rawCode: string): AppPersistState | null {
  const trimmed = rawCode.trim();
  if (!trimmed) return null;
  const payload = trimmed.startsWith(SYNC_PREFIX) ? trimmed.slice(SYNC_PREFIX.length) : trimmed;
  try {
    const bin = atob(payload);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i += 1) {
      bytes[i] = bin.charCodeAt(i);
    }
    const json = new TextDecoder().decode(bytes);
    const parsed = JSON.parse(json) as AppPersistState;
    if (!parsed || typeof parsed !== 'object' || !parsed.settings) return null;
    return parsed;
  } catch {
    return null;
  }
}

function getLast7DateKeys(): Array<{ key: string; label: string }> {
  const result: Array<{ key: string; label: string }> = [];
  const now = new Date();
  for (let i = 6; i >= 0; i -= 1) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const label = `${d.getMonth() + 1}/${d.getDate()}`;
    result.push({ key, label });
  }
  return result;
}

const TARGET_MIN_BY_PACE: Record<AppPersistState['settings']['studyPace'], number> = {
  light: 10,
  standard: 25,
  intensive: 50
};

export function GrowthReportDashboard({
  state,
  onJumpToDay,
  onImportState
}: GrowthReportDashboardProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [syncPanelOpen, setSyncPanelOpen] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [pasteSyncInput, setPasteSyncInput] = useState('');
  const [syncCopied, setSyncCopied] = useState(false);
  const [last7Days] = useState(getLast7DateKeys);
  const [reportDateStr] = useState(() => new Date().toISOString().slice(0, 10));

  const records = Object.values(state.dayRecords);
  const completedDays = records.filter(
    (r) => r.sprintCompleted || r.lectureCompleted || r.examScore !== null
  ).length;
  const videosWatched = records.filter((r) => r.videoWatched).length;
  const readingsDone = records.filter((r) => r.readingCompleted).length;
  const sprintsDone = records.filter((r) => r.sprintCompleted).length;
  const lecturesDone = records.filter((r) => r.lectureCompleted).length;

  const examScores = records
    .map((r) => r.examScore)
    .filter((s): s is number => s !== null);
  const avgExam =
    examScores.length > 0
      ? Math.round(examScores.reduce((a, b) => a + b, 0) / examScores.length)
      : 0;

  const shadowingScores = records
    .map((r) => r.shadowingBestAccuracy)
    .filter((s): s is number => typeof s === 'number');
  const avgShadowing =
    shadowingScores.length > 0
      ? Math.round(shadowingScores.reduce((a, b) => a + b, 0) / shadowingScores.length)
      : null;

  const dictationScores = records
    .map((r) => r.dictationBestScore)
    .filter((s): s is number => typeof s === 'number');
  const avgDictation =
    dictationScores.length > 0
      ? Math.round(dictationScores.reduce((a, b) => a + b, 0) / dictationScores.length)
      : null;

  const totalMinutes = Object.values(state.studyMinutesByDate ?? {}).reduce((a, b) => a + b, 0);
  const weeklyMinutes = last7Days.reduce(
    (sum, d) => sum + (state.studyMinutesByDate?.[d.key] ?? 0),
    0
  );
  const targetDailyMin = TARGET_MIN_BY_PACE[state.settings.studyPace];
  const maxBarMin = Math.max(
    targetDailyMin,
    ...last7Days.map((d) => state.studyMinutesByDate?.[d.key] ?? 0)
  );

  const graduatedReviews = state.reviewDeck.filter((c) => c.mastered).length;
  const writingSolvedCount = state.writingClinicSolvedIds?.length ?? 0;
  const irregularDoneCount = state.irregularMasteredIds?.length ?? 0;
  const confusableDoneCount = state.confusableSolvedIds?.length ?? 0;
  const speakingAttempts = state.speakingAttempts ?? [];
  const bestSpeakingWpm =
    speakingAttempts.length > 0
      ? Math.max(...speakingAttempts.map((a) => a.wpm))
      : null;
  const bestSpeakingScore =
    speakingAttempts.length > 0
      ? Math.max(...speakingAttempts.map((a) => a.score))
      : null;
  const guidedDoneCount = state.guidedSessionsCompleted ?? 0;

  // 5-Skill Mastery Scores (0..100)
  const vocabSkill = Math.min(
    100,
    Math.round(
      ((state.masteredVocabIds.length +
        (state.masteredVaultWordIds?.length ?? 0) +
        irregularDoneCount +
        confusableDoneCount +
        state.savedDictionaryWords.length * 2) /
        180) *
        100
    )
  );
  const listenReadSkill = Math.min(
    100,
    Math.round(
      ((videosWatched + readingsDone + (state.completedStorybookIds?.length ?? 0)) / 20) * 65 +
        (avgDictation !== null ? avgDictation * 0.35 : 15)
    )
  );
  const speakingSkill = Math.min(
    100,
    Math.round(
      Math.min(
        1,
        (sprintsDone * 10 +
          state.savedParaphrases.length * 4 +
          speakingAttempts.length * 12 +
          state.totalSentencesSpoken) /
          120
      ) *
        65 +
        (avgShadowing !== null
          ? avgShadowing * 0.35
          : bestSpeakingScore !== null
            ? bestSpeakingScore * 0.35
            : 15)
    )
  );
  const grammarSkill = Math.min(
    100,
    Math.round(
      ((lecturesDone * 3 +
        state.grammarMasteredIds.length * 3 +
        writingSolvedCount * 2 +
        graduatedReviews * 4 +
        examScores.length * 4) /
        65) *
        100
    )
  );
  const examSkill = examScores.length > 0 ? avgExam : Math.min(25, completedDays * 5);

  const skills = [
    {
      label: '어휘 · 불규칙동사 · 혼동어휘 (Vocabulary)',
      score: vocabSkill,
      detail: `암기 ${state.masteredVocabIds.length + (state.masteredVaultWordIds?.length ?? 0)}/${COURSE_METADATA.totalVocabCount + 240} · 불규칙 ${irregularDoneCount}/80 · 혼동어휘 ${confusableDoneCount}/50`
    },
    {
      label: '리스닝 & 원서·영자 독해 (Listening/Reading)',
      score: listenReadSkill,
      detail: `유튜브 ${videosWatched}편 · 원서 ${state.completedStorybookIds?.length ?? 0}/12 · 독해 ${readingsDone}편 · 딕테이션 ${avgDictation !== null ? `${avgDictation}%` : '응시 전'}`
    },
    {
      label: '스피킹 · 1분 챌린지 · 쉐도잉 (Speaking/Fluency)',
      score: speakingSkill,
      detail: `발화 ${state.totalSentencesSpoken}문장 · 1분 스피킹 ${speakingAttempts.length}회${bestSpeakingWpm !== null ? ` (최고 ${bestSpeakingWpm} WPM)` : ''} · 쉐도잉 ${avgShadowing !== null ? `${avgShadowing}%` : '측정 전'}`
    },
    {
      label: '문법 · 내신 서술형 · 어순 체화 (Grammar/Writing)',
      score: grammarSkill,
      detail: `문법 ${state.grammarMasteredIds.length}/20강 · 내신 서술형/오류 ${writingSolvedCount}/60 · 복습 졸업 ${graduatedReviews}건`
    },
    {
      label: '실전 단원평가 & 모의고사 (Exam Mastery)',
      score: examSkill,
      detail: examScores.length > 0 ? `${examScores.length}회 응시 · 평균 ${avgExam}점` : '첫 단원평가 응시 전'
    }
  ];

  // Top weaknesses from real missed grammar tags
  const weaknessEntries = Object.entries(state.weakGrammarTags ?? {})
    .filter(([, count]) => count > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const handleExportBackup = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `korebridge-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result)) as AppPersistState;
        if (!parsed || typeof parsed !== 'object' || !parsed.settings) {
          setImportStatus('올바른 KoreBridge 백업 JSON 파일이 아닙니다.');
          return;
        }
        onImportState(parsed);
        setImportStatus('✓ 학습 기록 백업을 성공적으로 복원했습니다!');
      } catch {
        setImportStatus('파일을 읽는 중 오류가 발생했습니다. JSON 형식을 확인해 주세요.');
      }
    };
    reader.readAsText(file);
  };

  const handleOpenSyncPanel = () => {
    const nextOpen = !syncPanelOpen;
    setSyncPanelOpen(nextOpen);
    if (nextOpen) {
      setGeneratedCode(encodeStateToSyncCode(state));
      setSyncCopied(false);
    }
  };

  const handleCopySyncCode = async () => {
    const code = encodeStateToSyncCode(state);
    setGeneratedCode(code);
    try {
      await navigator.clipboard.writeText(code);
      setSyncCopied(true);
      setImportStatus('✓ 3초 기기 동기화 코드가 클립보드에 복사되었습니다! 모바일/PC에서 붙여넣어 복원하세요.');
    } catch {
      setSyncCopied(true);
      setImportStatus('아래 코드 박스를 전체 선택해 복사해 주세요.');
    }
  };

  const handleRestoreSyncCode = () => {
    const parsed = decodeSyncCodeToState(pasteSyncInput);
    if (!parsed) {
      setImportStatus('유효한 코어브릿지 동기화 코드(KB6:...)가 아닙니다. 코드 전체를 빠짐없이 붙여넣어 주세요.');
      return;
    }
    onImportState(parsed);
    setPasteSyncInput('');
    setImportStatus('✓ 다른 기기의 학습 기록이 3초 만에 완벽하게 동기화되었습니다!');
  };

  const levelMeta = LEVEL_INFO_MAP[state.settings.levelTier];
  const stageMeta = MASTERY_STAGE_MAP[state.settings.currentStage ?? 'stage0'];

  return (
    <main className="page-wrap">
      {/* REPORT HEADER */}
      <div className="studio-header-row">
        <div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span className="pill-tag pill-brand">개인 맞춤형 영어 성장 성적표</span>
            <span className="pill-tag pill-coral">{stageMeta.badge} · {levelMeta.shortLabel}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginTop: '8px' }}>
            {state.settings.learnerName} 님의 통합 영어 성장 리포트 &amp; 취약점 클리닉
          </h1>
          <p style={{ color: 'var(--text-sub)', marginTop: '6px' }}>
            5대 영어 역량 분석, 내신 서술형·1분 스피킹 기록, 3초 기기 간 동기화 코드, 그리고 학부모·교사 확인용 A4 성적표 출력까지 지원합니다.
          </p>
        </div>

        <div className="no-print" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            id="toggle-sync-code-panel-btn"
            type="button"
            className="btn-solid-coral"
            onClick={handleOpenSyncPanel}
          >
            <Smartphone size={15} /> 3초 기기 동기화 (모바일↔PC)
          </button>
          <button
            id="export-study-backup-btn"
            type="button"
            className="btn-outline"
            onClick={handleExportBackup}
          >
            <Download size={15} /> 백업(JSON)
          </button>
          <button
            id="import-study-backup-btn"
            type="button"
            className="btn-outline"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload size={15} /> 파일 복원
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json"
            style={{ display: 'none' }}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleImportFile(f);
            }}
          />
          <button
            id="print-growth-report-btn"
            type="button"
            className="btn-solid-brand"
            onClick={() => window.print()}
          >
            <Printer size={15} /> A4 성적표 · 인증서 인쇄
          </button>
        </div>
      </div>

      {importStatus && (
        <div className="feedback-banner ok no-print" style={{ marginBottom: '18px' }}>
          <CheckCircle2 size={17} />
          <span>{importStatus}</span>
        </div>
      )}

      {/* 3-SECOND MOBILE <-> PC SYNC CODE PANEL */}
      {syncPanelOpen && (
        <section className="sync-code-panel no-print" aria-label="3초 기기 간 학습 기록 동기화">
          <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
            <div>
              <span className="pill-tag pill-brand">로그인·회원가입 없이 3초 기기 전송</span>
              <h2 style={{ fontSize: '1.14rem', marginTop: '6px' }}>
                모바일 ↔ PC 학습 기록 즉시 동기화 코드
              </h2>
            </div>
            <button
              id="copy-sync-code-btn"
              type="button"
              className="btn-solid-brand"
              style={{ padding: '8px 14px', fontSize: '0.86rem' }}
              onClick={() => void handleCopySyncCode()}
            >
              <Copy size={15} /> {syncCopied ? '코드 복사 완료 ✓' : '내 동기화 코드 복사하기'}
            </button>
          </div>

          <div className="sync-code-grid">
            <div>
              <label htmlFor="sync-code-export-box" style={{ fontSize: '0.82rem', fontWeight: 750, color: 'var(--text-sub)', display: 'block', marginBottom: '6px' }}>
                ① 현재 기기의 동기화 코드 (카톡 나에게 보내기 / 메모장 붙여넣기)
              </label>
              <textarea
                id="sync-code-export-box"
                readOnly
                rows={3}
                className="input-clean"
                style={{ width: '100%', fontFamily: 'var(--font-mono)', fontSize: '0.76rem' }}
                value={generatedCode}
                onFocus={(e) => e.currentTarget.select()}
              />
            </div>

            <div>
              <label htmlFor="sync-code-restore-input" style={{ fontSize: '0.82rem', fontWeight: 750, color: 'var(--text-sub)', display: 'block', marginBottom: '6px' }}>
                ② 다른 기기에서 복사한 코드 붙여넣어 불러오기
              </label>
              <textarea
                id="sync-code-restore-input"
                rows={3}
                className="input-clean"
                style={{ width: '100%', fontFamily: 'var(--font-mono)', fontSize: '0.76rem' }}
                value={pasteSyncInput}
                onChange={(e) => setPasteSyncInput(e.target.value)}
                placeholder="KB6:eyJvbmJvYXJkZWQi..."
              />
              <button
                id="apply-sync-code-btn"
                type="button"
                className="btn-solid-coral"
                style={{ marginTop: '8px', width: '100%', padding: '9px 14px', fontSize: '0.86rem' }}
                disabled={!pasteSyncInput.trim()}
                onClick={handleRestoreSyncCode}
              >
                붙여넣은 동기화 코드로 학습 기록 복원하기
              </button>
            </div>
          </div>
        </section>
      )}

      {/* TOP KPI STRIP */}
      <section className="report-kpi-grid" aria-label="핵심 학습 지표">
        <div className="report-kpi-card">
          <span className="mini-stat-label">통합 마스터리 · 자동수업</span>
          <strong>
            Lv.{Math.floor((state.xpPoints ?? 0) / 250) + 1} · {state.xpPoints ?? 0} XP
          </strong>
          <small>연속 {state.streakDays}일 · 15분 자동수업 {guidedDoneCount}회 완주</small>
        </div>
        <div className="report-kpi-card">
          <span className="mini-stat-label">내신 서술형 · 불규칙동사</span>
          <strong>
            {writingSolvedCount}/60 · {irregularDoneCount}/80
          </strong>
          <small>수능 혼동어휘 {confusableDoneCount}/50쌍 · 문법 {state.grammarMasteredIds.length}/20강</small>
        </div>
        <div className="report-kpi-card">
          <span className="mini-stat-label">1분 스피킹 · 영어 원서</span>
          <strong>
            {bestSpeakingWpm !== null ? `${bestSpeakingWpm} WPM` : `${speakingAttempts.length}회`} · {state.completedStorybookIds?.length ?? 0}/12권
          </strong>
          <small>고등독해 {Object.keys(state.highSchoolPassageScores ?? {}).length}/15 · 에세이 {state.savedEssays.length}편 · 롤플레이 {state.completedRoleplayIds.length}/12</small>
        </div>
        <div className="report-kpi-card">
          <span className="mini-stat-label">누적 학습 · 평균 시험</span>
          <strong>
            {totalMinutes}분 · {examScores.length > 0 ? `${avgExam}점` : '응시 전'}
          </strong>
          <small>발화 {state.totalSentencesSpoken}문장 · 이번 주 {weeklyMinutes}분 집중</small>
        </div>
      </section>

      {/* ZERO-TO-MASTERY 5-STAGE MILESTONE TRACKER */}
      <section className="surface-card" style={{ marginBottom: '22px' }} aria-label="유치원~고등·C2 5단계 수료 현황">
        <div className="section-label-between" style={{ marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
          <h2 style={{ fontSize: '1.16rem' }}>
            유치원 파닉스 → 초등 → 중학 → 고등 수능 → 글로벌 C2 완전정복 진도
          </h2>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="day-switch-chip"
              onClick={() => onJumpToDay(state.selectedDay, 'foundation')}
            >
              파닉스·초등 가기 →
            </button>
            <button
              type="button"
              className="day-switch-chip"
              onClick={() => onJumpToDay(state.selectedDay, 'academy')}
            >
              영문법·고등 가기 →
            </button>
          </div>
        </div>
        <div className="report-stage-strip">
          {[
            {
              label: 'Stage 0 · 유치원 파닉스',
              detail: `음가·사이트워드 ${state.phonicsMasteredIds.length}/86 · 귀트임 ${state.minimalPairBestStreak}연속`,
              pct: Math.min(100, Math.round(((state.phonicsMasteredIds.length + state.minimalPairBestStreak * 2) / 86) * 100))
            },
            {
              label: 'Stage 1 · 초등 기초 10강',
              detail: `필수 어순 ${state.foundationCompletedIds.length}/10강 완료`,
              pct: Math.min(100, Math.round((state.foundationCompletedIds.length / 10) * 100))
            },
            {
              label: 'Stage 2 · 중학 문법·일상',
              detail: `초·중 문법 ${state.grammarMasteredIds.filter((id) => Number(id.replace('g', '')) <= 12).length}/12강`,
              pct: Math.min(100, Math.round((state.grammarMasteredIds.filter((id) => Number(id.replace('g', '')) <= 12).length / 12) * 100))
            },
            {
              label: 'Stage 3 · 고등 수능·에세이',
              detail: `고등독해 ${Object.keys(state.highSchoolPassageScores ?? {}).length}/15 · 에세이 ${state.savedEssays.length}편`,
              pct: Math.min(100, Math.round(((Object.keys(state.highSchoolPassageScores ?? {}).length + state.savedEssays.length) / 19) * 100))
            },
            {
              label: 'Stage 4 · 글로벌 C1–C2',
              detail: `원서 ${state.completedStorybookIds?.length ?? 0}/12 · 롤플레이 ${state.completedRoleplayIds.length}/12`,
              pct: Math.min(100, Math.round(((completedDays + state.completedRoleplayIds.length + (state.completedStorybookIds?.length ?? 0)) / 54) * 100))
            }
          ].map((item) => (
            <div key={item.label} className="report-stage-box">
              <div className="section-label-between" style={{ fontSize: '0.8rem', gap: '6px', flexWrap: 'nowrap' }}>
                <strong style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {item.label}
                </strong>
                <span style={{ color: 'var(--brand)', fontWeight: 800, flexShrink: 0 }}>{item.pct}%</span>
              </div>
              <div className="skill-bar-track" style={{ height: '6px', marginTop: '6px' }}>
                <div className="skill-bar-fill" style={{ width: `${Math.max(4, item.pct)}%` }} />
              </div>
              <small style={{ color: 'var(--text-sub)', display: 'block', marginTop: '5px' }}>
                {item.detail}
              </small>
            </div>
          ))}
        </div>
      </section>

      {/* 12 MASTERY ACHIEVEMENT BADGES HALL OF FAME */}
      {(() => {
        const badges = computeAchievementBadges(state);
        const unlockedCount = badges.filter((b) => b.unlocked).length;
        return (
          <section className="surface-card" style={{ marginBottom: '22px' }} aria-label="12개 마스터리 업적 배지관">
            <div className="section-label-between" style={{ marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <h2 style={{ fontSize: '1.18rem' }}>
                  🏆 코어브릿지 마스터리 업적 배지관 ({unlockedCount} / {badges.length} 달성)
                </h2>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', marginTop: '3px' }}>
                  파닉스·연음·초등 어순·비주얼 문법·고등 수능·원서 다독·모의고사까지 전 영역 성취 배지를 모아보세요.
                </p>
              </div>
              {(state.mockExamHistory?.length ?? 0) > 0 && (
                <span className="pill-tag pill-coral">
                  최근 모의고사: {state.mockExamHistory[0].score}점 (수능 {state.mockExamHistory[0].csatGrade}등급)
                </span>
              )}
            </div>
            <div className="achievement-badges-grid">
              {badges.map((b) => (
                <div key={b.id} className={`achievement-badge-card ${b.unlocked ? 'unlocked' : 'locked'}`}>
                  <span className="achievement-emoji">{b.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div className="section-label-between" style={{ gap: '4px' }}>
                      <strong style={{ fontSize: '0.88rem' }}>{b.titleKo}</strong>
                      <span style={{ fontSize: '0.72rem', fontWeight: 750, color: b.unlocked ? 'var(--ok)' : 'var(--text-muted)' }}>
                        {b.unlocked ? '달성 ✓' : b.progressText}
                      </span>
                    </div>
                    <small style={{ color: 'var(--text-sub)', display: 'block', marginTop: '2px' }}>
                      {b.descKo}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })()}

      {/* 2-COL: 5-SKILL MASTERY + 7-DAY STUDY TIMER CHART */}
      <section className="report-two-col">
        <div className="surface-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <BarChart3 size={18} style={{ color: 'var(--brand)' }} />
            <h2 style={{ fontSize: '1.18rem' }}>5대 핵심 영어 역량 밸런스</h2>
          </div>

          <div className="skill-bars-stack">
            {skills.map((sk) => (
              <div key={sk.label} className="skill-bar-row">
                <div className="section-label-between" style={{ marginBottom: '5px' }}>
                  <strong style={{ fontSize: '0.92rem' }}>{sk.label}</strong>
                  <span style={{ fontWeight: 800, color: 'var(--brand)', fontSize: '0.9rem' }}>
                    {sk.score}점
                  </span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" style={{ width: `${Math.max(4, sk.score)}%` }} />
                </div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-sub)' }}>{sk.detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <div className="section-label-between" style={{ marginBottom: '14px' }}>
              <h2 style={{ fontSize: '1.18rem', display: 'flex', alignItems: 'center', gap: '7px' }}>
                <Clock size={18} style={{ color: 'var(--coral)' }} /> 최근 7일 학습 시간 추이
              </h2>
              <span className="pill-tag pill-subtle">목표 {targetDailyMin}분/일</span>
            </div>

            <div className="weekly-bar-chart">
              {last7Days.map((d) => {
                const mins = state.studyMinutesByDate?.[d.key] ?? 0;
                const pct = Math.min(100, Math.round((mins / maxBarMin) * 100));
                const hitGoal = mins >= targetDailyMin;
                return (
                  <div key={d.key} className="chart-col">
                    <span className="chart-val">{mins > 0 ? `${mins}m` : ''}</span>
                    <div className="chart-track">
                      <div
                        className={`chart-fill ${hitGoal ? 'goal-hit' : ''}`}
                        style={{ height: `${Math.max(6, pct)}%` }}
                      />
                    </div>
                    <span className="chart-label">{d.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* WEAKNESS RADAR */}
          <div style={{ paddingTop: '14px', borderTop: '1px solid var(--line-light)' }}>
            <h3 style={{ fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '10px' }}>
              <AlertTriangle size={17} style={{ color: 'var(--coral)' }} /> 자동 감지된 취약 어법·표현 클리닉
            </h3>
            {weaknessEntries.length === 0 ? (
              <p style={{ fontSize: '0.88rem', color: 'var(--text-sub)' }}>
                아직 단원평가 오답 기록이 없습니다. [학습지 · 시험지]에서 단원평가를 채점하면 틀린 문법 태그가 자동으로 이곳에 집계되어 맞춤 복습을 안내합니다.
              </p>
            ) : (
              <div className="weakness-chip-list">
                {weaknessEntries.map(([tag, count]) => (
                  <div key={tag} className="weakness-row">
                    <div>
                      <strong style={{ fontSize: '0.9rem' }}>{tag}</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--danger)', marginLeft: '8px', fontWeight: 700 }}>
                        누적 오답 {count}회
                      </span>
                    </div>
                    <button
                      type="button"
                      className="text-action-btn no-print"
                      onClick={() => onJumpToDay(state.selectedDay, 'vocab-review')}
                    >
                      오답 복습함 가기 →
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 30-DAY MASTERY MATRIX */}
      <section className="surface-card" style={{ marginTop: '24px' }} aria-label="30일 완주 현황표">
        <div className="section-label-between" style={{ marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <h2 style={{ fontSize: '1.22rem', display: 'flex', alignItems: 'center', gap: '7px' }}>
              <Award size={19} style={{ color: 'var(--brand)' }} /> 30일(5주) 전체 단원 마스터리 현황표
            </h2>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', marginTop: '3px' }}>
              원하는 Day 카드를 클릭하면 해당 단원 학습 스튜디오로 즉시 이동합니다.
            </p>
          </div>
          <span className="pill-tag pill-amber">
            <Sparkles size={13} /> {completedDays >= 30 ? '30일 과정 수료 완료!' : `수료까지 ${30 - completedDays}일 남음`}
          </span>
        </div>

        <div className="matrix-weeks-stack">
          {WEEK_THEMES.map((w) => {
            const days = COURSE_CATALOG.filter((d) => d.weekNumber === w.weekNumber);
            return (
              <div key={w.weekNumber} className="matrix-week-row">
                <div className="matrix-week-label">
                  <strong>Week {w.weekNumber}</strong>
                  <span>{w.shortLabel}</span>
                </div>
                <div className="matrix-days-grid">
                  {days.map((d) => {
                    const rec = state.dayRecords[d.dayNumber];
                    const scoreCount =
                      (rec?.videoWatched ? 1 : 0) +
                      (rec?.readingCompleted ? 1 : 0) +
                      (rec?.sprintCompleted ? 1 : 0) +
                      (rec?.examScore !== null && rec?.examScore !== undefined ? 1 : 0);
                    return (
                      <button
                        key={d.dayNumber}
                        type="button"
                        className={`matrix-day-cell ${scoreCount >= 3 ? 'full' : scoreCount > 0 ? 'partial' : ''}`}
                        onClick={() => onJumpToDay(d.dayNumber, 'lecture')}
                      >
                        <div className="section-label-between">
                          <strong>Day {String(d.dayNumber).padStart(2, '0')}</strong>
                          <span className="matrix-cefr">{d.cefrLevel.toUpperCase()}</span>
                        </div>
                        <span className="matrix-day-title">{d.title}</span>
                        <div className="matrix-pips">
                          <span title="유튜브" className={rec?.videoWatched ? 'on' : ''}>영</span>
                          <span title="독해" className={rec?.readingCompleted ? 'on' : ''}>독</span>
                          <span title="스프린트" className={rec?.sprintCompleted ? 'on' : ''}>스</span>
                          <span title="시험" className={rec?.examScore !== null && rec?.examScore !== undefined ? 'on' : ''}>
                            {rec?.examScore !== null && rec?.examScore !== undefined ? `${rec.examScore}` : '시'}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PARENT / TEACHER WEEKLY ACHIEVEMENT CERTIFICATE (A4 PRINTABLE) */}
      <section className="print-cert-box" aria-label="학부모·교사 확인용 주간 성취 인증서">
        <div className="section-label-between" style={{ flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <span className="pill-tag pill-brand">KOREBRIDGE OFFICIAL WEEKLY CERTIFICATE</span>
            <h2 style={{ fontSize: '1.22rem', marginTop: '6px' }}>
              학부모 · 지도교사 확인용 주간 영어 성취 인증서
            </h2>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: 'var(--text-sub)' }}>
            발급일: {reportDateStr}
          </span>
        </div>

        <div className="print-cert-metrics">
          <div>
            <span>학습자</span>
            <strong>{state.settings.learnerName} ({stageMeta.badge})</strong>
          </div>
          <div>
            <span>이번 주 집중 시간</span>
            <strong>{weeklyMinutes}분 (연속 {state.streakDays}일)</strong>
          </div>
          <div>
            <span>15분 자동수업 · 서술형</span>
            <strong>자동수업 {guidedDoneCount}회 · 서술형 {writingSolvedCount}/60</strong>
          </div>
          <div>
            <span>1분 스피킹 · 모의고사</span>
            <strong>
              {bestSpeakingWpm !== null ? `최고 ${bestSpeakingWpm} WPM` : `스피킹 ${speakingAttempts.length}회`} · 모의고사 {state.mockExamHistory?.length ?? 0}회
            </strong>
          </div>
        </div>

        <div className="print-cert-signatures">
          <div className="print-sig-col">
            <span>학부모 확인 (서명)</span>
            <div className="print-sig-line" />
          </div>
          <div className="print-sig-col">
            <span>지도교사 / 튜터 확인 (서명)</span>
            <div className="print-sig-line" />
          </div>
        </div>
      </section>
    </main>
  );
}
