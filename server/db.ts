import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { ALL_30_DAY_MODULES } from '../src/data/monthMasterCourse.ts';
import type { AppPersistState, DayLessonModule } from '../src/types/course.ts';
import { validateWeekModule } from '../src/utils/courseQA.ts';

const DB_PATH = resolve(process.cwd(), 'data', 'korebridge.sqlite');
mkdirSync(dirname(DB_PATH), { recursive: true });

const db = new DatabaseSync(DB_PATH);

export function initializeDatabase(): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS week_modules (
      day_number INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      qa_passed INTEGER NOT NULL,
      payload_json TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS learner_state (
      profile_id TEXT PRIMARY KEY,
      state_json TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);

  const upsertStmt = db.prepare(`
    INSERT INTO week_modules (day_number, title, qa_passed, payload_json, updated_at)
    VALUES (?, ?, ?, ?, ?)
    ON CONFLICT(day_number) DO UPDATE SET
      title = excluded.title,
      qa_passed = excluded.qa_passed,
      payload_json = excluded.payload_json,
      updated_at = excluded.updated_at;
  `);

  const now = new Date().toISOString();
  for (const mod of ALL_30_DAY_MODULES) {
    const qa = validateWeekModule(mod);
    upsertStmt.run(
      mod.dayNumber,
      mod.title,
      qa.passed ? 1 : 0,
      JSON.stringify(mod),
      now
    );
  }
}

export function listModulesFromDB(): DayLessonModule[] {
  const rows = db
    .prepare('SELECT payload_json FROM week_modules ORDER BY day_number ASC')
    .all() as Array<{ payload_json: string }>;
  return rows.map((r) => JSON.parse(r.payload_json) as DayLessonModule);
}

export function getLearnerStateFromDB(profileId = 'default'): AppPersistState | null {
  const row = db
    .prepare('SELECT state_json FROM learner_state WHERE profile_id = ?')
    .get(profileId) as { state_json: string } | undefined;
  if (!row) return null;
  return JSON.parse(row.state_json) as AppPersistState;
}

export function saveLearnerStateToDB(state: AppPersistState, profileId = 'default'): void {
  db.prepare(`
    INSERT INTO learner_state (profile_id, state_json, updated_at)
    VALUES (?, ?, ?)
    ON CONFLICT(profile_id) DO UPDATE SET
      state_json = excluded.state_json,
      updated_at = excluded.updated_at;
  `).run(profileId, JSON.stringify(state), new Date().toISOString());
}
