import { C, base, text, box } from "../../lib/helpers.mjs";

export default function slide01(slide, ctx) {
  base(slide, ctx, "10분 발표", "발표 제목을 여기에 입력하세요", {
    courseLabel: "소속 / 과목명",
  });
  text(slide, ctx, 58, 220, 800, 48, "발표자: 이름  |  날짜: 0000년 00월", {
    size: 20,
    color: C.muted,
  });
}
