import { C, base, addBullets } from "../../lib/helpers.mjs";

export default function slide06(slide, ctx) {
  base(slide, ctx, "결론", "결론", { courseLabel: "학번 | 이름 | 과목명" });
  addBullets(slide, ctx, 58, 200, [
    "실험 목적 달성 여부 및 요약",
    "주요 발견 사항",
    "개선점 및 향후 과제",
  ], { size: 22, gap: 48 });
}
