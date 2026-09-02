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
        bg: '#FFFFFF',
        ink: '#1a1a1a',
        graytext: '#5C5C5C',
        main: '#D94F3D',
        mainhover: '#C23F2E',
        sub: '#E8833A',
        divider: '#B08D6A',
        card: '#FFFFFF',
        cardlight: '#FFF7F0',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'sans-serif'],
        heading: ['var(--font-dela-gothic)', 'sans-serif'],
        serif: ['var(--font-noto-serif)', 'serif'],
      }
    },
  },
  plugins: [],
};
export default config;
