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
        ink: '#111111',
        graytext: '#555555',
        main: '#111111',
        mainhover: '#262626',
        sub: '#111111',
        accent: '#B83B26',
        divider: '#E5E5E5',
        card: '#FFFFFF',
        cardlight: '#FAFAFA',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
