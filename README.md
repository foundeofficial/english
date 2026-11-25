# 코어브릿지 (KoreBridge) v1.0 Complete — 한국형 하이브리드 AI 영어 어학원 플랫폼

학교·어학원·인강·구몬식 학습지·단원평가 문제지의 **체계적인 교육 본질**과 모던 AI 웹앱의 **수준×학습능력 초개인화 · 실시간 첨삭 · Google Gemini & Flow 멀티모달 교재·영상 제작 파이프라인**을 결합한 1차 완성본(v1.0 Complete Release)입니다.

## 완성된 9대 핵심 모듈 아키텍처

1. **🏠 투데이 루틴 홈** (`src/components/TodayHub.tsx`)
   - 4대 정규 학부(왕초보 파운데이션 / 중고교 내신·수능 1등급 / 대학생 오픽·면접 / 직장인 글로벌 실무) 필터
   - 가용 시간별 투트랙 런처(`5~10분 데일리 스프린트` vs `30~60분 정규 인강·과외`) 및 1분 즉석 콩글리시 3단 패러프레이징 체커
2. **📅 90일(12주 · 1학기) 학사 진도표 & 데일리 라이브 뉴스** (`src/components/SemesterSyllabusView.tsx`, `src/data/full90DayUnits.ts`)
   - Day 01 ~ Day 90 전 일차 독립 수업·학습지·시험지 및 학부 특강 등 **총 92개 검증 단원(시험·쌍둥이 문항 552개)** 완비
   - 매일 새벽 및 즉석 주제 입력으로 발행되는 3단계 난이도(A2 / B1+ / C1) 멀티레벨 라이브 부교재
3. **📕 셀로판지 보카 가림판 & 1분 등원 쪽지시험** (`src/components/VocabPopQuizView.tsx`)
   - `뜻 가리기(영➔한)` / `영단어 가리기(한➔영)` 인출 암기 시트 및 스펠링 쪽지시험(오답 복습금고 자동 연동)
4. **⚡ 5~10분 데일리 스프린트** (`src/components/SprintSession.tsx`)
   - 어순 청크 블록 조립 · 빈칸 인출 · 발화 드릴 및 **지하철 묵음 모드 ↔ 스피킹 모드** 실시간 전환
5. **🎬 30~60분 Google Flow 시트콤 인강 & 1:1 전담 과외** (`src/components/DeepClassStudio.tsx`)
   - 1교시 캐릭터 일관성 상황극 + 칠판 원리 인강 + 수강 필기 노트 → 2교시 연음 딕테이션 & 영작 워크북 → 3교시 1:1 꼬리질문 문답 & 실시간 3단 첨삭 보드
6. **📝 구몬식 학습지 · 단원평가 · 쌍둥이 오답 · 손글씨 AI 채점** (`src/components/LegacyWorkbookCenter.tsx`)
   - 개념 원리서 + 통문장 쓰기 학습지(`@media print` A4 인쇄/PDF 지원) + 80점 Pass 단원평가 + 쌍둥이 변형 문제지 + 종이 학습지 촬영 Gemini Vision 채점
7. **✨ Gemini · Google Flow 멀티모달 교재·영상 제작실** (`src/components/CreatorFlowStudio.tsx`, `server/geminiFlowService.ts`)
   - 주제·레벨 입력 시 Google Flow(`Ingredients` + `Veo` 프롬프트), `Imagen` 도해 프롬프트, 맞춤 학습지·시험지 패키지 생성 및 4-Gate 검수 후 즉시 편입
8. **🗂 에빙하우스 망각곡선 복습금고** (`src/components/ReviewVaultView.tsx`)
   - `D+1 → D+3 → D+7 → D+14 → Mastered` 간격 반복 인출 복습 및 인강 필기 노트 아카이브
9. **📊 공식 학업성적표(생활통지표) & 학생별 맞춤 반 배정** (`src/components/AcademicReportCardView.tsx`, `src/components/CalibrationBar.tsx`)
   - 3인 학습자 유형(직장인 / 고2 수험생 / 왕초보 입문) 원클릭 전환 테스트, 5대 역량 학점 성적표, 90일 출석 잔디 히트맵, 4대 학습능력 실시간 이퀄라이저

## 실행 및 4-Gate 무결성 검증

```bash
npm install
npm run verify:curriculum   # 92개 전체 단원 & 552개 시험·쌍둥이 문항 4-Gate QA 전수 검증
npm run server              # SQLite + Gemini/Flow 백엔드 API 서버 실행 (port 4000)
npm run dev                 # 프론트엔드 웹앱 실행 (port 5173)
```
