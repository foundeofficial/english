import { createServer, IncomingMessage, ServerResponse } from 'node:http';
import {
  getLearnerProfileFromDB,
  initializeDatabase,
  listAllUnitsFromDB,
  listDailyArticlesFromDB,
  saveCustomUnitToDB,
  saveDailyArticleToDB,
  saveLearnerProfileToDB
} from './db.ts';
import {
  generateDailyArticlePackage,
  generateFlowAndUnitPackage,
  gradeHandwritingWithGeminiVision
} from './geminiFlowService.ts';
import type { UserProgress } from '../src/types/learning.ts';

initializeDatabase();

const PORT = Number(process.env.API_PORT || 4000);

function sendJson(res: ServerResponse, status: number, data: unknown): void {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(data));
}

async function readBody<T>(req: IncomingMessage): Promise<T> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const raw = Buffer.concat(chunks).toString('utf-8');
  return (raw ? JSON.parse(raw) : {}) as T;
}

const server = createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {});
    return;
  }

  const url = new URL(req.url || '/', `http://localhost:${PORT}`);

  try {
    if (req.method === 'GET' && url.pathname === '/api/health') {
      const units = listAllUnitsFromDB();
      const articles = listDailyArticlesFromDB();
      sendJson(res, 200, {
        status: 'ok',
        dbEngine: 'node:sqlite',
        totalVerifiedUnits: units.length,
        dailyArticlesCount: articles.length
      });
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/units') {
      sendJson(res, 200, { units: listAllUnitsFromDB() });
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/daily-articles') {
      sendJson(res, 200, { articles: listDailyArticlesFromDB() });
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/creator/generate-unit') {
      const body = await readBody<{
        topicKo: string;
        targetKLevel: number;
        apiKey?: string;
      }>(req);

      const pkg = await generateFlowAndUnitPackage({
        topicKo: body.topicKo || '글로벌 실무 협업 커뮤니케이션',
        targetKLevel: Number(body.targetKLevel || 5),
        apiKey: body.apiKey
      });

      if (pkg.qaReport.verified) {
        saveCustomUnitToDB(pkg.unit, pkg.qaReport.overallScore);
      }

      sendJson(res, 200, pkg);
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/daily-articles/generate') {
      const body = await readBody<{ topicKo: string; apiKey?: string }>(req);
      const article = await generateDailyArticlePackage({
        topicKo: body.topicKo || '글로벌 테크 & 커리어 트렌드',
        apiKey: body.apiKey
      });
      saveDailyArticleToDB(article);
      sendJson(res, 200, { article });
      return;
    }

    if (req.method === 'POST' && url.pathname === '/api/vision/grade') {
      const body = await readBody<{
        imageBase64?: string;
        mimeType?: string;
        extractedText: string;
        apiKey?: string;
      }>(req);
      const results = await gradeHandwritingWithGeminiVision(body);
      sendJson(res, 200, { results });
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/progress') {
      sendJson(res, 200, { progress: getLearnerProfileFromDB('default') });
      return;
    }

    if (req.method === 'PUT' && url.pathname === '/api/progress') {
      const body = await readBody<{ progress: UserProgress }>(req);
      if (body.progress) {
        saveLearnerProfileToDB(body.progress, 'default');
      }
      sendJson(res, 200, { saved: true });
      return;
    }

    sendJson(res, 404, { error: 'Not found' });
  } catch (err) {
    sendJson(res, 500, {
      error: err instanceof Error ? err.message : 'Internal server error'
    });
  }
});

server.listen(PORT, () => {
  console.log(`KoreBridge SQLite + Gemini/Flow API Server running on http://localhost:${PORT}`);
});
