import { C, base, addBullets } from "../../lib/helpers.mjs";

export default function slide06(slide, ctx) {
  base(slide, ctx, "결론", "결론 및 향후 계획", { courseLabel: "팀명 | 과목명" });
  addBullets(slide, ctx, 58, 200, [
    "핵심 결론 1",
    "핵심 결론 2",
    "한계점 및 향후 연구 방향",
  ], { size: 22, gap: 48 });
}
