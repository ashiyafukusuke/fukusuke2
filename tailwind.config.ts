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
        bg: '#FFFBF5',
        ink: '#1C1C1C',
        graytext: '#5C5C5C',
        main: '#D94F3D',
        mainhover: '#C23F2E',
        sub: '#F2A65A',
        divider: '#E8DDD5',
        card: '#FFFFFF',
        cardlight: '#FFF7F0',
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
