import { C, base, text } from "../../lib/helpers.mjs";

export default function slide04(slide, ctx) {
  base(slide, ctx, "방법론", "연구 방법 및 설계", { courseLabel: "팀명 | 과목명" });
  text(slide, ctx, 58, 190, 1000, 380,
    "사용한 방법론, 도구, 데이터 수집 과정을 설명하세요.",
    { size: 22, color: C.ink }
  );
}
