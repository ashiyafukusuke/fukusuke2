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
        brand: {
          DEFAULT: '#9b321f',
          hover: '#842a1a',
        },
        night: '#2d2c28',
        paper: '#fbfaf6',
        'paper-alt': '#f4f1ea',
        surface: '#ffffff',
        hairline: '#e5e2da',
        ink: {
          DEFAULT: '#1a1a1a',
          700: '#3d3a34',
          600: '#4f4b44',
          500: '#66625a',
          400: '#9a958b',
          muted: '#5c5c5c',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
      }
    },
  },
  plugins: [],
};
export default config;
