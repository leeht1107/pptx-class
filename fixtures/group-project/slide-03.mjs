import { C, base, text } from "../../lib/helpers.mjs";

export default function slide03(slide, ctx) {
  base(slide, ctx, "문제 정의", "연구 배경 및 필요성", { courseLabel: "팀명 | 과목명" });
  text(slide, ctx, 58, 190, 1000, 380,
    "프로젝트가 다루는 문제, 배경, 사회적 필요성을 서술하세요.",
    { size: 22, color: C.ink }
  );
}
