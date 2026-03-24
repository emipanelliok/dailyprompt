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
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        glass: "var(--glass)",
        "glass-border": "var(--glass-border)",
        "card-bg": "var(--card-bg)",
        "card-border": "var(--card-border)",
        text: "var(--text)",
        "text-dim": "var(--text-dim)",
        "text-muted": "var(--text-muted)",
        accent: {
          orange: "var(--orange)",
          blue: "var(--blue)",
          green: "var(--green)",
          pink: "var(--pink)",
          yellow: "var(--yellow)",
          purple: "var(--purple)",
        },
      },
      fontFamily: {
        display: ["var(--font-instrument-serif)", "Georgia", "serif"],
        body: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
