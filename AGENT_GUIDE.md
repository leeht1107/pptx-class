# AGENT_GUIDE — pptx-class LLM Spec

> **설치(최초 1회)**와 **슬라이드 생성(매번)**을 분리해서 AI에게 요청하세요.  
> 설치 프롬프트는 README.md Step A, 슬라이드 생성 시 이 파일 전체를 AI에게 붙여넣으세요.

---

## 슬라이드 모듈 형식

각 슬라이드는 `slide-NN.mjs` 파일 1개입니다 (NN = 01, 02, 03 …).  
파일 개수에 제한 없음 — 주제와 발표 시간에 맞춰 자유롭게 생성.

```js
import { C, base, text, box, pill, addBullets, table, arrow } from "../lib/helpers.mjs";

export default function slideNN(slide, ctx) {
  // 여기에 슬라이드 내용 작성
}
```

> **경로 주의**: `slides/slide-NN.mjs`에서는 `../lib/helpers.mjs` (한 단계 위).  
> `fixtures/` 안의 예시 파일은 두 단계 아래에 있어서 `../../lib/helpers.mjs`를 사용합니다. 헷갈리지 마세요.

## 장수 선택 가이드 (AI가 주제에 맞춰 결정)

발표 시간/유형에 따른 권장 장수:

| 발표 시간 / 유형 | 권장 장수 | 구성 예시 |
|----------------|---------|---------|
| 5분 발표 | 3–4장 | 표지 · 핵심 1–2 · 정리 |
| 10분 발표 | 5–7장 | 표지 · 목차 · 본문 2–4 · 결론 |
| 15–20분 발표 | 8–12장 | 표지 · 목차 · 배경 · 본문 3–6 · 결과 · 결론 · Q&A |
| 팀 프로젝트 | 7–10장 | 표지 · 팀소개 · 문제 · 방법 · 결과 2–3 · 결론 · 참고문헌 |
| 실험 보고서 | 6–8장 | 표지 · 목적 · 방법 · 결과 1–3 · 고찰 · 결론 |

사용자가 장수를 지정하지 않으면 위 표를 기준으로 적절히 판단하고, 결정한 장수와 구성을 먼저 한 줄로 알린 뒤 생성을 시작하세요.

## 캔버스

- 크기: **1280 × 720 px** (16:9)
- 좌표 단위: px
- 원점: 좌상단 (0, 0)

## 색상 팔레트 (C.*)

```js
C.ink     = "#172033"  // 기본 텍스트
C.muted   = "#5A6578"  // 보조 텍스트
C.paper   = "#F7F3EA"  // 배경
C.blue    = "#2F6BFF"  // 강조
C.coral   = "#E4574F"  // 경고/포인트
C.green   = "#2E8B57"  // 긍정
C.amber   = "#B57A13"  // 주의
C.line    = "#D8D2C5"  // 구분선
C.dark    = "#101826"  // 다크 배경
```

## helpers API

### base(slide, ctx, kicker, title, opts)
기본 레이아웃 (배경 + 상단 kicker + 제목 + 하단 푸터).
- `opts.dark`: true → 다크 배경
- `opts.titleSize`: 제목 폰트 크기 (기본 28)
- `opts.courseLabel`: 푸터 왼쪽 텍스트 (기본 "발표자료")

### text(slide, ctx, x, y, w, h, value, opts)
텍스트 박스.
- `opts.size`: 폰트 크기 (기본 22)
- `opts.bold`: true/false
- `opts.color`: 색상 코드 (# 포함)
- `opts.align`: "left" | "center" | "right"
- `opts.valign`: "top" | "middle" | "bottom"

### box(slide, ctx, x, y, w, h, fill, line)
색상 사각형.

### pill(slide, ctx, x, y, w, h, label, fill, color)
라벨이 있는 색상 pill.

### addBullets(slide, ctx, x, y, items, opts)
불릿 목록.
- `items`: 문자열 배열
- `opts.gap`: 항목 간 간격 (기본 44)
- `opts.size`: 폰트 크기 (기본 22)

### table(slide, ctx, x, y, cols, rows, widths, opts)
표.
- `cols`: 헤더 배열
- `rows`: 행 배열 (2차원)
- `widths`: 열 너비 배열

### arrow(slide, ctx, x1, y1, x2, y2, color)
가로 화살표.

---

## 예시 슬라이드

```js
import { C, base, text, addBullets } from "../lib/helpers.mjs";

export default function slide01(slide, ctx) {
  base(slide, ctx, "소개", "AI와 데이터 분석", { courseLabel: "데이터사이언스 | 2026" });

  addBullets(slide, ctx, 58, 200, [
    "AI는 데이터에서 패턴을 학습한다",
    "머신러닝과 딥러닝의 차이",
    "실제 활용 사례",
  ], { size: 22, gap: 52 });

  text(slide, ctx, 800, 200, 380, 300,
    "핵심 요약:\n\n데이터 → 모델 → 예측",
    { size: 20, color: C.muted, align: "center", valign: "middle" }
  );
}
```
