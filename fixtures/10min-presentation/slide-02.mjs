import { C, base, addBullets } from "../../lib/helpers.mjs";

export default function slide02(slide, ctx) {
  base(slide, ctx, "목차", "발표 순서", { courseLabel: "소속 / 과목명" });
  addBullets(slide, ctx, 58, 200, [
    "1. 문제 정의",
    "2. 방법론",
    "3. 결과",
    "4. 결론 및 Q&A",
  ], { size: 24, gap: 52 });
}
