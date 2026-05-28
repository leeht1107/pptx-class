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

Claude Code, Cursor, Windsurf 등 **터미널 접근이 가능한 AI 도구**를 사용합니다.  
설치(최초 1회)와 슬라이드 생성(매번)을 **분리해서** AI에게 요청하세요.

---

### Step A — 설치 (최초 1회만)

아래를 AI에게 붙여넣기. `[설치 위치]`만 원하는 경로로 바꾸세요:

```
pptx-class를 설치해줘.

[설치 위치]
~/Documents/pptx-class
(Windows면 C:/Users/나의이름/Documents/pptx-class 같은 식으로 바꿔줘)

할 일:
1. 설치 위치의 상위 폴더로 이동 (예: ~/Documents)
2. git clone https://github.com/leeht1107/pptx-class.git "설치 위치"
3. cd "설치 위치" && npm install
4. 완료되면 "설치 완료. 절대 경로: <실제 절대 경로>" 형식으로 알려줘.
   (이 경로를 Step B에서 사용합니다)
```

---

### Step B — 슬라이드 생성 (매번, 설치 후)

아래를 AI에게 붙여넣기. `[발표 주제]`와 `[설치 경로]`만 바꾸면 됩니다:

```
pptx-class로 발표 슬라이드를 만들어줘.

[설치 경로]
~/pptx-class  (Step A에서 알려준 경로로 바꿔줘)

[발표 주제]
(예: "딥러닝 기초 — 퍼셉트론, 역전파, CNN 3장")

[해야 할 일]
1. 설치 경로로 이동
2. AGENT_GUIDE.md 읽기
3. 주제에 맞는 slide-01.mjs, slide-02.mjs … 를 slides/ 폴더에 생성
   (import 경로는 반드시 "../lib/helpers.mjs")
4. node scripts/build.mjs --slides-dir ./slides --out ./output.pptx
5. 완료되면 output.pptx 경로 알려줘
```

---

> **터미널 없는 AI (ChatGPT 웹 등)**: Step B의 슬라이드 코드(.mjs 파일)만 생성해줍니다.  
> 파일을 `pptx-class/slides/` 폴더에 저장 후 방법 1의 빌드 명령어를 직접 실행하세요.

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
