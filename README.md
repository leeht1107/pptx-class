# pptx-class

AI 코드 생성기(ChatGPT, Claude, Gemini, Copilot 등)로 발표 슬라이드 `.pptx`를 만드는 도구입니다.

---

## 방법 1: 직접 설치 (Manual)

### 준비물
- **Node.js v18 이상** — https://nodejs.org/ko/ (LTS 다운로드)
- 설치 확인: 터미널에서 `node --version`

### 설치 및 실행

```bash
# 1. 이 저장소 받기
git clone https://github.com/leeht1107/pptx-class.git
cd pptx-class

# (git 없으면: 우상단 Code → Download ZIP → 압축 해제 후 해당 폴더로 이동)

# 2. 의존성 설치
npm install

# 3. 템플릿으로 PPTX 빌드
node scripts/build.mjs --slides-dir ./fixtures/10min-presentation --out ./output.pptx
```

→ `output.pptx` 생성됨. PowerPoint / Keynote / LibreOffice로 열기.

### 내 슬라이드 만들기

1. `slides/` 폴더 만들기
2. `fixtures/10min-presentation/` 파일들을 참고해서 `slide-01.mjs`, `slide-02.mjs` … 작성
3. 빌드:
   ```bash
   node scripts/build.mjs --slides-dir ./slides --out ./my-presentation.pptx
   ```

---

## 방법 2: AI에게 맡기기 (Agentic)

Claude Code, Cursor, Windsurf 등 **터미널 접근이 가능한 AI 도구**가 있으면 설치부터 슬라이드 생성까지 AI가 대신합니다.

### 사용법

아래 내용을 **AI에게 통째로 붙여넣기**하세요. `[발표 주제]` 부분만 바꾸면 됩니다.

---

```
pptx-class를 설치하고 내 발표 슬라이드를 만들어줘.

[저장소]
https://github.com/leeht1107/pptx-class

[내 발표 주제]
(여기에 발표 주제와 내용을 적어줘. 예: "딥러닝 기초 — 퍼셉트론, 역전파, CNN 3장")

[해야 할 일]
1. git clone https://github.com/leeht1107/pptx-class.git 실행
2. cd pptx-class && npm install
3. AGENT_GUIDE.md 읽어서 helpers API 파악
4. 내 주제에 맞는 slide-01.mjs, slide-02.mjs … 파일을 slides/ 폴더에 생성
5. node scripts/build.mjs --slides-dir ./slides --out ./output.pptx 실행
6. 빌드 성공하면 output.pptx 경로 알려줘
```

---

AI가 clone → install → 슬라이드 코드 생성 → build → 결과 확인까지 모두 처리합니다.

> ChatGPT 웹 / 일반 채팅 AI는 터미널 접근이 없어서 슬라이드 코드(.mjs 파일)만 생성해줍니다. 파일을 `slides/` 폴더에 저장 후 방법 1의 빌드 명령어를 직접 실행하세요.

---

## 제공 템플릿

| 폴더 | 슬라이드 수 | 용도 |
|------|-----------|------|
| `fixtures/10min-presentation/` | 5장 | 10분 발표 |
| `fixtures/group-project/` | 7장 | 팀 프로젝트 |
| `fixtures/lab-report/` | 6장 | 실험 보고서 |

## helpers API

| 함수 | 설명 |
|------|------|
| `base(slide, ctx, kicker, title, opts)` | 기본 레이아웃 (배경 + 제목 + 푸터) |
| `text(slide, ctx, x, y, w, h, value, opts)` | 텍스트 박스 |
| `box(slide, ctx, x, y, w, h, fill, line)` | 색상 박스 |
| `pill(slide, ctx, x, y, w, h, label, fill)` | 라벨 pill |
| `addBullets(slide, ctx, x, y, items, opts)` | 불릿 목록 |
| `table(slide, ctx, x, y, cols, rows, widths, opts)` | 표 |
| `arrow(slide, ctx, x1, y1, x2, y2, color)` | 화살표 |

캔버스: **1280 × 720 px** · 자세한 API는 [`AGENT_GUIDE.md`](AGENT_GUIDE.md) 참고

## 트러블슈팅

| 증상 | 해결 |
|------|------|
| `Cannot find package 'pptxgenjs'` | `npm install` 재실행 |
| 슬라이드 순서 이상 | 파일명이 `slide-01.mjs` 형식인지 확인 |
| PPTX 안 열림 | PowerPoint / Keynote / LibreOffice 필요 |
