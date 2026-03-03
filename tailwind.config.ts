import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "card-bg": "var(--card-bg)",
        "card-border": "var(--card-border)",
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      borderRadius: {
        "card": "28px",
        "pill": "18px",
      },
      maxWidth: {
        "container": "1100px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        toggleBounce: {
          "0%": { transform: "translateX(var(--toggle-start))" },
          "50%": { transform: "translateX(var(--toggle-mid)) scale(1.1)" },
          "100%": { transform: "translateX(var(--toggle-end))" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        blink: "blink 1.5s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        fadeUp: "fadeUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
