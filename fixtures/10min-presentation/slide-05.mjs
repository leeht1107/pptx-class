import { C, base, text, addBullets } from "../../lib/helpers.mjs";

export default function slide05(slide, ctx) {
  base(slide, ctx, "마무리", "결론 및 Q&A", { courseLabel: "소속 / 과목명" });
  addBullets(slide, ctx, 58, 200, [
    "핵심 내용 요약 1",
    "핵심 내용 요약 2",
    "향후 계획 또는 제언",
  ], { size: 22, gap: 48 });
  text(slide, ctx, 58, 580, 1164, 40,
    "감사합니다 — 질문 받겠습니다",
    { size: 20, color: C.muted, align: "center" }
  );
}
