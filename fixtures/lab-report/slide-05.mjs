import { C, base, text } from "../../lib/helpers.mjs";

export default function slide05(slide, ctx) {
  base(slide, ctx, "고찰", "결과 분석 및 고찰", { courseLabel: "학번 | 이름 | 과목명" });
  text(slide, ctx, 58, 190, 1000, 380,
    "결과의 의미, 오차 원인, 이론과의 비교를 작성하세요.",
    { size: 22, color: C.ink }
  );
}
