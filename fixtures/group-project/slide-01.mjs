import { C, base, text } from "../../lib/helpers.mjs";

export default function slide01(slide, ctx) {
  base(slide, ctx, "팀 프로젝트", "프로젝트 제목", { courseLabel: "팀명 | 과목명" });
  text(slide, ctx, 58, 220, 800, 40, "팀원: 이름1, 이름2, 이름3  |  제출일: 0000년 00월", {
    size: 20, color: C.muted,
  });
}
