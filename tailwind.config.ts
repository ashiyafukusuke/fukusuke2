import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: '#FFFFFF', // ピュアホワイト
        ink: '#1A1A1A',      // より強い黒
        terracotta: '#FF3333', // ビビッドレッド
        olive: '#00CC66',    // フレッシュグリーン
        paper: '#F8F9FA',    // わずかにグレーがかった白（カードなど）
        vitality: '#FFCC00', // ビビッドイエロー
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'sans-serif'],
        serif: ['var(--font-noto-serif)', 'serif'],
      }
    },
  },
  plugins: [],
};
export default config;
