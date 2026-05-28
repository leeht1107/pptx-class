import { C, base, addBullets } from "../../lib/helpers.mjs";

export default function slide02(slide, ctx) {
  base(slide, ctx, "팀 소개", "팀 구성 및 역할", { courseLabel: "팀명 | 과목명" });
  addBullets(slide, ctx, 58, 200, [
    "팀원 1 — 담당 역할",
    "팀원 2 — 담당 역할",
    "팀원 3 — 담당 역할",
  ], { size: 22, gap: 52 });
}
