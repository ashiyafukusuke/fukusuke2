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
        offwhite: '#F0F8FF', // アクア（空・水）
        ink: '#2C3E50',      // カズマ（ダークスレート）
        terracotta: '#E63946', // めぐみん（爆裂レッド）
        olive: '#4CAF50',    // カズマ（ジャージグリーン）
        paper: '#E0F7FA',    // アクア（シアンホワイト）
        vitality: '#FFB703', // ダクネス（クルセイダーイエロー）
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
