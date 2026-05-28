import { C, base, text } from "../../lib/helpers.mjs";

export default function slide05(slide, ctx) {
  base(slide, ctx, "결과", "주요 결과", { courseLabel: "팀명 | 과목명" });
  text(slide, ctx, 58, 190, 1000, 380,
    "분석 결과, 수치, 시각화 자료를 포함하세요.",
    { size: 22, color: C.ink }
  );
}
