# pptx-class

학생용 발표 슬라이드 빌더 — AI 코드 생성기(ChatGPT, Claude, Gemini, Copilot 등)를 활용해 PPTX를 만드는 Node.js 도구입니다.

## 시작하기 — 3가지 방법 중 선택

### 🌐 방법 1: GitHub Codespaces (설치 불필요, 권장)

Node.js 설치 없이 브라우저에서 바로 실행합니다.

1. 이 repo 우상단 **"Use this template"** → **"Open in a codespace"** 클릭
2. Codespace가 열리면 터미널에서:
   ```bash
   node scripts/build.mjs --slides-dir ./fixtures/10min-presentation --out ./output.pptx
   ```
3. `output.pptx` 우클릭 → **Download**

> GitHub 계정만 있으면 무료 (월 60시간 제공)

---

### ⚙️ 방법 2: GitHub Actions (push → 자동 빌드)

코드 편집 후 push만 하면 PPTX가 자동으로 만들어집니다.

1. 이 repo를 **Fork** (또는 "Use this template")
2. `slides/` 폴더에 `slide-01.mjs`, `slide-02.mjs` … 파일 추가 후 push
3. repo 상단 **Actions** 탭 → 가장 최근 workflow → **Artifacts** 섹션에서 `presentation-N.zip` 다운로드
4. 압축 해제 → `output.pptx` 열기

수동 실행: **Actions → Build PPTX → Run workflow** → 폴더 지정 가능

---

### 💻 방법 3: 로컬 설치

#### 1단계: Node.js 설치
- **Windows**: https://nodejs.org/ko/ 에서 LTS 버전 다운로드
- **macOS**: `brew install node` 또는 https://nodejs.org/ko/

버전 확인: `node --version` (v18 이상 필요)

#### 2단계: 의존성 설치

```bash
git clone https://github.com/leeht1107/pptx-class.git
cd pptx-class
npm install
```

#### 3단계: 슬라이드 만들기

```bash
# 예시 fixture 사용 (10분 발표 템플릿)
node scripts/build.mjs --slides-dir ./fixtures/10min-presentation --out ./my-presentation.pptx
```

## AI로 슬라이드 만들기

`AGENT_GUIDE.md` 파일을 ChatGPT/Claude/Gemini 등에 붙여넣기하면, AI가 `slide-NN.mjs` 파일을 생성해줍니다.

```
[AGENT_GUIDE.md 내용 복사] + "내 발표 주제는 XXX이고, 5장 슬라이드를 만들어줘"
```

생성된 파일을 `./slides/` 폴더에 저장 후:
```bash
node scripts/build.mjs --slides-dir ./slides --out ./output.pptx
```

## 제공 템플릿 (fixtures/)

| 폴더 | 슬라이드 수 | 용도 |
|------|------------|------|
| `10min-presentation/` | 5장 | 10분 발표 |
| `group-project/` | 7장 | 팀 프로젝트 발표 |
| `lab-report/` | 6장 | 실험 보고서 발표 |

## helpers API 요약

| 함수 | 설명 |
|------|------|
| `base(slide, ctx, kicker, title, opts)` | 기본 레이아웃 (배경 + 제목 + 푸터) |
| `text(slide, ctx, x, y, w, h, value, opts)` | 텍스트 박스 |
| `box(slide, ctx, x, y, w, h, fill, line)` | 색상 박스 |
| `pill(slide, ctx, x, y, w, h, label, fill, color)` | 라벨 pill |
| `addBullets(slide, ctx, x, y, items, opts)` | 불릿 목록 |
| `table(slide, ctx, x, y, cols, rows, widths, opts)` | 표 |
| `arrow(slide, ctx, x1, y1, x2, y2, color)` | 화살표 |

캔버스: **1280 × 720** (px 단위)

## 트러블슈팅

- `Cannot find package 'pptxgenjs'` → `npm install` 재실행
- 슬라이드가 빠짐 → 파일명이 `slide-01.mjs`, `slide-02.mjs` 형식인지 확인
- PPTX가 열리지 않음 → Microsoft PowerPoint 또는 LibreOffice 설치
