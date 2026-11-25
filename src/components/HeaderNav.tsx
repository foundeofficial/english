import React from 'react';
import {
  Award,
  BookMarked,
  CalendarDays,
  Compass,
  FileSpreadsheet,
  Flame,
  GraduationCap,
  Layers,
  MessageSquareText,
  Sparkles,
  Zap
} from 'lucide-react';
import { ACADEMY_DIVISIONS } from '../data/academyDivisions';
import type { ActiveTab, UserProgress } from '../types/learning';

interface HeaderNavProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  progress: UserProgress;
  dueReviewCount: number;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeTab,
  onSelectTab,
  progress,
  dueReviewCount
}) => {
  const navItems: Array<{
    id: ActiveTab;
    group: '학습 홈 · 학사일정' | '정규 수업 · 레거시 평가' | 'AI 제작 · 성적 관리';
    label: string;
    shortLabel: string;
    icon: React.ReactNode;
    badge?: number;
  }> = [
    { id: 'today', group: '학습 홈 · 학사일정', label: '투데이 루틴 홈', shortLabel: '홈', icon: <Compass size={16} /> },
    { id: 'syllabus', group: '학습 홈 · 학사일정', label: '90일 학기진도 · 뉴스', shortLabel: '90일진도', icon: <CalendarDays size={16} /> },
    { id: 'vocab-quiz', group: '정규 수업 · 레거시 평가', label: '보카 가림판 · 쪽지시험', shortLabel: '단어시험', icon: <BookMarked size={16} /> },
    { id: 'sprint', group: '정규 수업 · 레거시 평가', label: '5~10분 데일리 스프린트', shortLabel: '스프린트', icon: <Zap size={16} /> },
    { id: 'deep-class', group: '정규 수업 · 레거시 평가', label: '30~60분 인강 · 1:1과외', shortLabel: '인강·과외', icon: <GraduationCap size={16} /> },
    { id: 'workbook', group: '정규 수업 · 레거시 평가', label: '학습지 · 단원평가 · 채점', shortLabel: '학습지', icon: <FileSpreadsheet size={16} /> },
    { id: 'creator-studio', group: 'AI 제작 · 성적 관리', label: 'Gemini · Flow 제작실', shortLabel: 'AI제작실', icon: <Sparkles size={16} /> },
    { id: 'vault', group: 'AI 제작 · 성적 관리', label: '망각곡선 복습금고', shortLabel: '복습장', icon: <Layers size={16} />, badge: dueReviewCount },
    { id: 'report-card', group: 'AI 제작 · 성적 관리', label: '학업성적표 · 반배정', shortLabel: '성적표', icon: <Award size={16} /> }
  ];

  const groups: Array<'학습 홈 · 학사일정' | '정규 수업 · 레거시 평가' | 'AI 제작 · 성적 관리'> = [
    '학습 홈 · 학사일정',
    '정규 수업 · 레거시 평가',
    'AI 제작 · 성적 관리'
  ];

  const divName =
    ACADEMY_DIVISIONS.find((d) => d.id === progress.division)?.nameKo.split(' ')[0] ??
    '정규반';

  return (
    <>
      <header className="top-header mobile-only-header no-print">
        <div className="top-header-inner">
          <button
            id="mobile-brand-home"
            type="button"
            className="brand-mark"
            onClick={() => onSelectTab('today')}
          >
            <span className="brand-symbol">Kb</span>
            <span>
              <span className="brand-name">코어브릿지 AI 어학원</span>
              <span className="brand-sub">
                {progress.learnerName.split(' ')[0]} · {divName} K-Lv.{progress.calibration.baseKLevel}
              </span>
            </span>
          </button>

          <div className="header-metrics">
            <div className="metric-chip warm">
              <Flame size={14} />
              <span>{progress.streakDays}일</span>
            </div>
            <div className="metric-chip">
              <MessageSquareText size={14} />
              <span>{progress.totalOutputSentences}</span>
            </div>
          </div>
        </div>
      </header>

      <aside className="academy-sidebar no-print" aria-label="아카데미 메인 메뉴">
        <button
          id="sidebar-brand-home"
          type="button"
          className="brand-mark"
          style={{ marginBottom: '18px' }}
          onClick={() => onSelectTab('today')}
        >
          <span className="brand-symbol">Kb</span>
          <span>
            <span className="brand-name">코어브릿지 어학원</span>
            <span className="brand-sub">v1.0 Complete Edition</span>
          </span>
        </button>

        <button
          id="sidebar-profile-card"
          type="button"
          className="sidebar-stats-card"
          style={{ textAlign: 'left', width: '100%' }}
          onClick={() => onSelectTab('report-card')}
          title="클릭하여 학습자 전환 또는 학업성적표 확인"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.81rem', fontWeight: 750, width: '100%' }}>
            <span>{progress.learnerName.split(' ')[0]} 수강생</span>
            <span style={{ color: 'var(--accent-primary)' }}>K-Lv.{progress.calibration.baseKLevel}</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--accent-warm)', fontWeight: 650 }}>
            🔥 {progress.streakDays}일 연속 · {divName} 학부
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--ink-secondary)' }}>
            90일 출석 {progress.completedSemesterDays.length}/90 · 문장 {progress.totalOutputSentences}개
          </div>
        </button>

        <nav className="sidebar-nav-groups">
          {groups.map((grp) => (
            <div key={grp} className="sidebar-group">
              <span className="sidebar-group-title">{grp}</span>
              {navItems
                .filter((i) => i.group === grp)
                .map((item) => (
                  <button
                    key={item.id}
                    id={`sidebar-tab-${item.id}`}
                    type="button"
                    className={`sidebar-nav-btn ${activeTab === item.id ? 'active' : ''}`}
                    onClick={() => onSelectTab(item.id)}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px' }}>
                      {item.icon}
                      <span>{item.label}</span>
                    </span>
                    {typeof item.badge === 'number' && item.badge > 0 && (
                      <span className="nav-badge-count">{item.badge}</span>
                    )}
                  </button>
                ))}
            </div>
          ))}
        </nav>
      </aside>

      <nav
        className="mobile-bottom-nav no-print"
        aria-label="모바일 하단 메뉴"
        style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}
      >
        {[
          navItems[0],
          navItems[2],
          navItems[3],
          navItems[4],
          navItems[5],
          navItems[8]
        ].map((item) => (
          <button
            key={item.id}
            id={`mobile-tab-${item.id}`}
            type="button"
            className={`mobile-nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => onSelectTab(item.id)}
          >
            {item.icon}
            <span>{item.shortLabel}</span>
          </button>
        ))}
      </nav>
    </>
  );
};
