import { C, base, text } from "../../lib/helpers.mjs";

export default function slide02(slide, ctx) {
  base(slide, ctx, "실험 목적", "목적 및 이론적 배경", { courseLabel: "학번 | 이름 | 과목명" });
  text(slide, ctx, 58, 190, 1000, 380,
    "이 실험의 목적과 관련 이론을 간략히 서술하세요.",
    { size: 22, color: C.ink }
  );
}
