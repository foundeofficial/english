import {
  BarChart3,
  BookOpenCheck,
  Flame,
  GraduationCap,
  Home,
  Layers,
  PlayCircle,
  Search,
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';
import { MASTERY_STAGE_MAP } from '../data/levels.ts';
import type { LearnerSettings, MainRoute } from '../types/course.ts';

interface TopNavHeaderProps {
  activeRoute: MainRoute;
  onNavigate: (route: MainRoute) => void;
  streakDays: number;
  reviewDueCount: number;
  settings: LearnerSettings;
  onOpenSettings: () => void;
  onOpenDictionary: (word?: string) => void;
}

export function TopNavHeader({
  activeRoute,
  onNavigate,
  streakDays,
  reviewDueCount,
  settings,
  onOpenSettings,
  onOpenDictionary
}: TopNavHeaderProps) {
  const navItems: Array<{
    id: MainRoute;
    label: string;
    shortLabel: string;
    icon: typeof Home;
    badge?: number;
  }> = [
    { id: 'home', label: '로드맵', shortLabel: '홈', icon: Home },
    { id: 'foundation', label: '파닉스·초등', shortLabel: '파닉스', icon: Sparkles },
    { id: 'academy', label: '문법·고등', shortLabel: '문법·고등', icon: GraduationCap },
    { id: 'lecture', label: '인강·회화', shortLabel: '회화', icon: PlayCircle },
    { id: 'worksheet', label: '시험지', shortLabel: '시험', icon: BookOpenCheck },
    {
      id: 'vocab-review',
      label: '단어·복습',
      shortLabel: '단어',
      icon: Layers,
      badge: reviewDueCount > 0 ? reviewDueCount : undefined
    },
    { id: 'report', label: '리포트', shortLabel: '리포트', icon: BarChart3 }
  ];

  const stageMeta = MASTERY_STAGE_MAP[settings.currentStage ?? 'stage2'];

  return (
    <>
      <header className="top-bar no-print">
        <div className="top-bar-inner top-bar-inner-wide">
          <button
            id="nav-brand-home-btn"
            type="button"
            className="brand-btn"
            onClick={() => onNavigate('home')}
          >
            <span className="brand-logo">KB</span>
            <span>
              <span className="brand-text-main">KoreBridge</span>
            </span>
          </button>

          <nav className="main-nav-tabs main-nav-tabs-v4" aria-label="주요 학습 메뉴">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeRoute === item.id;
              return (
                <button
                  key={item.id}
                  id={`top-nav-${item.id}`}
                  type="button"
                  className={`main-nav-link main-nav-link-compact ${isActive ? 'active' : ''}`}
                  onClick={() => onNavigate(item.id)}
                >
                  <Icon size={15} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && (
                    <span className="nav-count-pill">{item.badge}</span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="header-right-actions">
            <button
              id="open-dictionary-header-btn"
              type="button"
              className="dict-trigger-btn"
              onClick={() => onOpenDictionary('')}
              title="실시간 영한·영영 영어사전 열기 (단축키 /)"
            >
              <Search size={14} />
              <span>사전</span>
              <kbd className="kbd-hint">/</kbd>
            </button>

            <div className="streak-badge" title="연속 학습 스트릭">
              <Flame size={14} />
              <span>{streakDays}일</span>
            </div>

            <button
              id="open-learner-settings-btn"
              type="button"
              className="settings-trigger-btn"
              onClick={onOpenSettings}
              title="학습 단계(Stage 0~4) 및 레벨(Lv.1~6) 변경"
            >
              <SlidersHorizontal size={14} />
              <span>{stageMeta.shortLabel}</span>
            </button>
          </div>
        </div>
      </header>

      <nav className="mobile-tab-bar mobile-tab-bar-v4 no-print" aria-label="모바일 하단 메뉴">
        {navItems.slice(0, 6).map((item) => {
          const Icon = item.icon;
          const isActive = activeRoute === item.id;
          return (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              type="button"
              className={`mobile-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              <Icon size={18} />
              <span>{item.shortLabel}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
