import { useState } from 'react';
import { COURSE_CATALOG, WEEK_THEMES } from '../data/courseCatalog.ts';
import { LEVEL_INFO_MAP } from '../data/levels.ts';
import type { DayCompletionRecord } from '../types/course.ts';

interface DayNavigatorBarProps {
  selectedDay: number;
  dayRecords?: Record<number, DayCompletionRecord>;
  onSelectDay: (dayNumber: number) => void;
  labelPrefix?: string;
}

export function DayNavigatorBar({
  selectedDay,
  dayRecords,
  onSelectDay,
  labelPrefix = 'Day'
}: DayNavigatorBarProps) {
  const activeDayMeta =
    COURSE_CATALOG.find((d) => d.dayNumber === selectedDay) ?? COURSE_CATALOG[0];
  const [viewedWeek, setViewedWeek] = useState<1 | 2 | 3 | 4 | 5>(activeDayMeta.weekNumber);

  const daysInWeek = COURSE_CATALOG.filter((d) => d.weekNumber === viewedWeek);

  return (
    <div className="month-switcher-shell no-print" role="region" aria-label="30일 커리큘럼 주차 및 단원 선택">
      <div className="week-tabs-strip" role="tablist" aria-label="주차 선택">
        {WEEK_THEMES.map((w) => {
          const isCurrentWeek = w.weekNumber === viewedWeek;
          const containsSelectedDay = activeDayMeta.weekNumber === w.weekNumber;
          return (
            <button
              key={w.weekNumber}
              id={`week-tab-${w.weekNumber}`}
              type="button"
              role="tab"
              aria-selected={isCurrentWeek}
              className={`week-tab-pill ${isCurrentWeek ? 'active' : ''}`}
              onClick={() => setViewedWeek(w.weekNumber)}
            >
              <span>Week {w.weekNumber}</span>
              <small>{w.shortLabel}</small>
              {containsSelectedDay && <span className="week-active-dot" aria-hidden="true" />}
            </button>
          );
        })}
      </div>

      <div className="day-pill-switcher" role="tablist" aria-label="단원 선택">
        {daysInWeek.map((d) => {
          const isActive = d.dayNumber === selectedDay;
          const rec = dayRecords?.[d.dayNumber];
          const hasProgress = Boolean(
            rec && (rec.sprintCompleted || rec.lectureCompleted || rec.examScore !== null)
          );
          return (
            <button
              key={d.dayNumber}
              id={`day-switch-${d.dayNumber}`}
              type="button"
              className={`day-switch-chip ${isActive ? 'active' : ''} ${d.isWeeklyReview ? 'review-day' : ''}`}
              onClick={() => onSelectDay(d.dayNumber)}
            >
              <span>
                {labelPrefix} {String(d.dayNumber).padStart(2, '0')}
                {d.isWeeklyReview ? (d.dayNumber === 30 ? ' · 파이널' : ' · 평가') : ''}
              </span>
              <span className="day-chip-cefr">
                {LEVEL_INFO_MAP[d.cefrLevel].cefrCode.replace('CEFR ', '')}
              </span>
              {hasProgress && <span className="day-done-dot" title="학습 기록 있음" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
