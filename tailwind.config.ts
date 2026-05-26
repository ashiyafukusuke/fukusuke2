import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto)", "sans-serif"],
        accent: ["var(--font-urbanist)", "sans-serif"],
      },
      colors: {
        cyan: { neon: "#00f0ff" },
        magenta: { neon: "#ff007f" },
        emerald: { neon: "#10b981" },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
