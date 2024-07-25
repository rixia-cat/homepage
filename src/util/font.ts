import { M_PLUS_2, Nunito, Urbanist, Zen_Kurenaido } from "next/font/google";

// 全体用フォント
export const mainFont = M_PLUS_2({
  subsets: ["latin"],
  display: "swap",
});

// 見出し系（スタイリッシュ系、硬め）
export const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

// 見出し系（丸ゴ、柔らかめ）
export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

// 手書き風
export const handwriteLike = Zen_Kurenaido({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
