import { C, base, text } from "../../lib/helpers.mjs";

export default function slide03(slide, ctx) {
  base(slide, ctx, "본문", "문제 정의", { courseLabel: "소속 / 과목명" });
  text(slide, ctx, 58, 190, 1000, 400,
    "해결하려는 문제나 연구 질문을 여기에 작성하세요.\n\n배경 설명, 중요성, 범위를 포함하면 좋습니다.",
    { size: 22, color: C.ink }
  );
}
