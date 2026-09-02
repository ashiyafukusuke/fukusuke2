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
        main: '#E60012',
        mainhover: '#B00010',
        sub: '#E60012',
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
