import { C, base, text } from "../../lib/helpers.mjs";

export default function slide04(slide, ctx) {
  base(slide, ctx, "본문", "결과 및 분석", { courseLabel: "소속 / 과목명" });
  text(slide, ctx, 58, 190, 1000, 400,
    "주요 발견 사항, 데이터, 분석 결과를 여기에 작성하세요.\n\n그래프나 표가 있다면 이 슬라이드에 추가하세요.",
    { size: 22, color: C.ink }
  );
}
