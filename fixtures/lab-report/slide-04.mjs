import { C, base, text } from "../../lib/helpers.mjs";

export default function slide04(slide, ctx) {
  base(slide, ctx, "결과", "실험 결과", { courseLabel: "학번 | 이름 | 과목명" });
  text(slide, ctx, 58, 190, 1000, 380,
    "측정값, 관찰 결과, 데이터 표를 포함하세요.",
    { size: 22, color: C.ink }
  );
}
