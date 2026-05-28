import { C, base, text } from "../../lib/helpers.mjs";

export default function slide01(slide, ctx) {
  base(slide, ctx, "실험 보고서", "실험 제목", { courseLabel: "학번 | 이름 | 과목명" });
  text(slide, ctx, 58, 220, 800, 40, "실험일: 0000년 00월 00일", {
    size: 20, color: C.muted,
  });
}
