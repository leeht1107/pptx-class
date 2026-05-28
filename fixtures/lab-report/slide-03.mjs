import { C, base, text } from "../../lib/helpers.mjs";

export default function slide03(slide, ctx) {
  base(slide, ctx, "실험 방법", "실험 절차 및 재료", { courseLabel: "학번 | 이름 | 과목명" });
  text(slide, ctx, 58, 190, 1000, 380,
    "사용한 재료, 장비, 실험 절차를 단계별로 기술하세요.",
    { size: 22, color: C.ink }
  );
}
