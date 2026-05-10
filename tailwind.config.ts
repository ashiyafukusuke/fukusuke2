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
        background: "#FDFBF7",
        foreground: "#3A3532",
        border: "#EAE4D9",
        input: "#EAE4D9",
        ring: "#A63C44",
        primary: {
          DEFAULT: "#A63C44",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E5D3B3",
          foreground: "#3A3532",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F4F0E6",
          foreground: "#7A736E",
        },
        accent: {
          DEFAULT: "#D8C3A5",
          foreground: "#3A3532",
        },
        popover: {
          DEFAULT: "#FDFBF7",
          foreground: "#3A3532",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#3A3532",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
