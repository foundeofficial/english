import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { ALL_90_DAY_UNITS } from '../src/data/full90DayUnits.ts';
import { DAILY_LIVE_ARTICLES } from '../src/data/semester90Days.ts';
import { verifyUnitPedagogicalQuality } from '../src/utils/pedagogicalQA.ts';
import type { CurriculumUnit, DailyLiveArticle, UserProgress } from '../src/types/learning.ts';

const DB_PATH = resolve(process.cwd(), 'data/korebridge.sqlite');
mkdirSync(dirname(DB_PATH), { recursive: true });

export const db = new DatabaseSync(DB_PATH);

export function initializeDatabase(): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS curriculum_units (
      id TEXT PRIMARY KEY,
      day_num INTEGER,
      k_level INTEGER NOT NULL,
      qa_score REAL NOT NULL,
      is_custom INTEGER NOT NULL DEFAULT 0,
      payload_json TEXT NOT NULL,
      created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS daily_live_articles (
      id TEXT PRIMARY KEY,
      topic_ko TEXT NOT NULL,
      published_date TEXT NOT NULL,
      payload_json TEXT NOT NULL,
      created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS learner_profiles (
      profile_id TEXT PRIMARY KEY,
      payload_json TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);

  const countRow = db
    .prepare('SELECT COUNT(*) as cnt FROM curriculum_units WHERE is_custom = 0')
    .get() as { cnt: number };

  if (countRow.cnt < ALL_90_DAY_UNITS.length) {
    const insertStmt = db.prepare(`
      INSERT OR REPLACE INTO curriculum_units (id, day_num, k_level, qa_score, is_custom, payload_json, created_at)
      VALUES (?, ?, ?, ?, 0, ?, ?)
    `);

    const now = new Date().toISOString();
    ALL_90_DAY_UNITS.forEach((unit, idx) => {
      const qa = verifyUnitPedagogicalQuality(unit);
      insertStmt.run(
        unit.id,
        idx + 1,
        unit.kLevelNum,
        qa.overallScore,
        JSON.stringify(unit),
        now
      );
    });
  }

  const articleCount = db
    .prepare('SELECT COUNT(*) as cnt FROM daily_live_articles')
    .get() as { cnt: number };

  if (articleCount.cnt === 0) {
    const insertArticle = db.prepare(`
      INSERT OR REPLACE INTO daily_live_articles (id, topic_ko, published_date, payload_json, created_at)
      VALUES (?, ?, ?, ?, ?)
    `);
    const now = new Date().toISOString();
    for (const art of DAILY_LIVE_ARTICLES) {
      insertArticle.run(art.id, art.topicTitleKo, art.publishedDate, JSON.stringify(art), now);
    }
  }
}

export function listAllUnitsFromDB(): CurriculumUnit[] {
  const rows = db
    .prepare('SELECT payload_json FROM curriculum_units ORDER BY is_custom DESC, day_num ASC')
    .all() as Array<{ payload_json: string }>;
  return rows.map((r) => JSON.parse(r.payload_json) as CurriculumUnit);
}

export function saveCustomUnitToDB(unit: CurriculumUnit, qaScore: number): void {
  db.prepare(
    `INSERT OR REPLACE INTO curriculum_units (id, day_num, k_level, qa_score, is_custom, payload_json, created_at)
     VALUES (?, NULL, ?, ?, 1, ?, ?)`
  ).run(unit.id, unit.kLevelNum, qaScore, JSON.stringify(unit), new Date().toISOString());
}

export function listDailyArticlesFromDB(): DailyLiveArticle[] {
  const rows = db
    .prepare('SELECT payload_json FROM daily_live_articles ORDER BY created_at DESC')
    .all() as Array<{ payload_json: string }>;
  return rows.map((r) => JSON.parse(r.payload_json) as DailyLiveArticle);
}

export function saveDailyArticleToDB(article: DailyLiveArticle): void {
  db.prepare(
    `INSERT OR REPLACE INTO daily_live_articles (id, topic_ko, published_date, payload_json, created_at)
     VALUES (?, ?, ?, ?, ?)`
  ).run(
    article.id,
    article.topicTitleKo,
    article.publishedDate,
    JSON.stringify(article),
    new Date().toISOString()
  );
}

export function getLearnerProfileFromDB(profileId = 'default'): UserProgress | null {
  const row = db
    .prepare('SELECT payload_json FROM learner_profiles WHERE profile_id = ?')
    .get(profileId) as { payload_json: string } | undefined;
  return row ? (JSON.parse(row.payload_json) as UserProgress) : null;
}

export function saveLearnerProfileToDB(progress: UserProgress, profileId = 'default'): void {
  db.prepare(
    `INSERT OR REPLACE INTO learner_profiles (profile_id, payload_json, updated_at)
     VALUES (?, ?, ?)`
  ).run(profileId, JSON.stringify(progress), new Date().toISOString());
}
