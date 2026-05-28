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

아래를 AI에게 그대로 붙여넣기:

```
pptx-class를 내 Documents 폴더에 설치해줘.

저장소: https://github.com/leeht1107/pptx-class

아래 순서대로 실행해줘:
1. 내 운영체제에 맞는 방법으로 Documents 폴더 안에 pptx-class 폴더를 만들고 설치
2. npm install 실행
3. 설치가 끝나면 딱 한 줄만 알려줘:
   "설치 완료: [실제로 설치된 폴더 경로]"
   (예시: 설치 완료: /Users/홍길동/Documents/pptx-class)
```

→ AI가 알려준 경로를 어딘가에 메모해 두세요. Step B에서 씁니다.

---

### Step B — 슬라이드 생성 (매번)

아래를 AI에게 붙여넣기. **굵은 글씨 2곳**만 바꾸세요:

```
pptx-class로 발표 슬라이드를 만들어줘.

설치 폴더: [Step A에서 메모한 경로]
발표 주제: [여기에 주제 적기. 예: 딥러닝 기초 — 퍼셉트론, 역전파, CNN 3장]

아래 순서대로 실행해줘:
1. 설치 폴더 안의 AGENT_GUIDE.md 파일 읽기
2. 발표 주제에 맞는 슬라이드 파일들을 설치 폴더/slides/ 안에 생성
3. node scripts/build.mjs --slides-dir ./slides --out ./output.pptx 실행
4. 완료되면 딱 한 줄만 알려줘:
   "완료: [output.pptx의 실제 경로]"
```

---

> **ChatGPT 웹처럼 터미널이 없는 AI**: 슬라이드 코드 파일만 만들어줍니다.  
> AI가 만들어준 파일을 `pptx-class/slides/` 폴더에 저장한 뒤,  
> 방법 1의 빌드 명령어를 직접 실행하세요.

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
