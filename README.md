# pptx-class

AI 코드 생성기(ChatGPT, Claude, Gemini, Copilot 등)로 발표 슬라이드 `.pptx`를 만드는 도구입니다.

---

## 방법 1: 직접 설치 (Manual)

### 준비물
- **Node.js v18 이상** — https://nodejs.org/ko/ (LTS 다운로드)
- 설치 확인: 터미널에서 `node --version`

### 설치 및 실행

**① 설치할 경로를 정하세요** (아래 예시에서 원하는 경로로 바꾸기):

| 운영체제 | 예시 경로 |
|---------|---------|
| Mac | `~/Documents/pptx-class` |
| Windows | `C:\Users\내이름\Documents\pptx-class` |

**② 터미널에서 아래 명령 실행** (`경로` 부분을 위에서 정한 경로로 교체):

```bash
# Mac
git clone https://github.com/leeht1107/pptx-class.git  ~/Documents/pptx-class
cd ~/Documents/pptx-class
npm install
node scripts/build.mjs --slides-dir ./fixtures/10min-presentation --out ./output.pptx
```

```bash
# Windows (PowerShell)
git clone https://github.com/leeht1107/pptx-class.git  C:\Users\내이름\Documents\pptx-class
cd C:\Users\내이름\Documents\pptx-class
npm install
node scripts/build.mjs --slides-dir ./fixtures/10min-presentation --out ./output.pptx
```

> git이 없으면: 우상단 **Code → Download ZIP** → 압축 해제 후 폴더를 원하는 위치로 이동

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

**설치할 경로를 먼저 정하고**, 아래 `___경로___` 부분을 그 경로로 바꿔서 AI에게 붙여넣기:

```
pptx-class를 설치해줘.

설치 경로: ___경로___
           (예 Mac: /Users/홍길동/Documents/pptx-class)
           (예 Windows: C:\Users\홍길동\Documents\pptx-class)

저장소: https://github.com/leeht1107/pptx-class

순서대로 실행해줘:
1. 위 경로에 git clone으로 설치
2. npm install 실행
3. 끝나면 한 줄만 알려줘: "설치 완료: [실제 경로]"
```

→ AI가 알려준 경로를 메모해 두세요. Step B에서 그대로 씁니다.

---

### Step B — 슬라이드 생성 (매번)

`___경로___`, `___주제___`, `___장수___` 세 곳만 바꿔서 AI에게 붙여넣기:

```
pptx-class로 발표 슬라이드를 만들어줘.

설치 폴더: ___경로___   ← Step A에서 메모한 경로
발표 주제: ___주제___   ← 예: 딥러닝 기초 — 퍼셉트론, 역전파, CNN
장수/분량: ___장수___   ← 예: 5장 / 10분 발표 / 알아서 / 길게

순서대로 실행해줘:
1. 설치 폴더 안의 AGENT_GUIDE.md 읽기
2. 발표 주제와 장수에 맞춰 슬라이드 파일을 설치 폴더/slides/ 안에 생성
   (장수 = "알아서"면 AGENT_GUIDE.md의 권장 표 기준으로 판단)
3. node scripts/build.mjs --slides-dir ./slides --out ./output.pptx 실행
4. 끝나면 한 줄만: "완료: [output.pptx 경로], 총 N장"
```

---

> **ChatGPT 웹처럼 터미널이 없는 AI**: 슬라이드 코드 파일만 만들어줍니다.  
> AI가 만들어준 파일을 `pptx-class/slides/` 폴더에 저장한 뒤,  
> 방법 1의 빌드 명령어를 직접 실행하세요.

---

## 제공 템플릿

| 폴더 | 기본 장수 | 용도 |
|------|---------|------|
| `fixtures/10min-presentation/` | 5장 | 10분 발표 |
| `fixtures/group-project/` | 7장 | 팀 프로젝트 |
| `fixtures/lab-report/` | 6장 | 실험 보고서 |

장수는 자유롭게 조정할 수 있습니다.
- **추가**: `slides/` 폴더에 `slide-08.mjs`, `slide-09.mjs` … 파일을 만들면 자동으로 포함됩니다.
- **제거**: 파일을 지우면 빠집니다.
- 파일명은 반드시 `slide-숫자.mjs` 형식이어야 합니다 (`slide-01.mjs`, `slide-02.mjs` …).

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
