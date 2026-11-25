import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import {
  getLearnerStateFromDB,
  initializeDatabase,
  listModulesFromDB,
  saveLearnerStateToDB
} from './db.ts';
import type { AppPersistState } from '../src/types/course.ts';

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
      const modules = listModulesFromDB();
      sendJson(res, 200, {
        status: 'ok',
        dbEngine: 'node:sqlite',
        verifiedModulesCount: modules.length
      });
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/modules') {
      sendJson(res, 200, { modules: listModulesFromDB() });
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/progress') {
      sendJson(res, 200, { state: getLearnerStateFromDB('default') });
      return;
    }

    if (req.method === 'PUT' && url.pathname === '/api/progress') {
      const body = await readBody<{ state?: AppPersistState }>(req);
      if (body.state) {
        saveLearnerStateToDB(body.state, 'default');
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
  console.log(`KoreBridge SQLite API Server running on http://localhost:${PORT}`);
});
