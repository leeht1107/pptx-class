import { C, base, text } from "../../lib/helpers.mjs";

export default function slide07(slide, ctx) {
  base(slide, ctx, "참고문헌", "References", { courseLabel: "팀명 | 과목명" });
  text(slide, ctx, 58, 190, 1100, 440,
    "[1] 저자, 제목, 출처, 연도\n[2] 저자, 제목, 출처, 연도\n[3] 저자, 제목, 출처, 연도",
    { size: 18, color: C.ink }
  );
}
