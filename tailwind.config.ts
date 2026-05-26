import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        bg: "#1c1c1a",
        surface: "#242422",
        "text-primary": "#f5f5f4",
        "text-sub": "#a1a1aa",
        accent: "#a7f3d0",
        "accent-dim": "#6ee7b7",
        border: "rgba(245,245,244,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-noto)", "sans-serif"],
        accent: ["var(--font-urbanist)", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "line-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 1.2s ease-out forwards",
        "line-grow": "line-grow 1s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
