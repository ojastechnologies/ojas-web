import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import colors from "tailwindcss/colors";

// Theme-aware colours. "white" is the foreground ink and "ink" the page surfaces;
// both flip between the light default (:root) and `.theme-dark` sections
// (see globals.css). In light mode, translucent foreground alphas are boosted
// slightly so muted text keeps its contrast. "paper" is always real white.
const v = (name: string) => `rgb(var(${name}) / <alpha-value>)`;
const fg = "rgb(var(--c-fg) / min(1, calc(<alpha-value> * var(--a-boost))))";

export default {
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
        white: fg,
        paper: "#ffffff",
        ink: {
          950: v("--c-bg"),
          900: v("--c-bg-900"),
          800: v("--c-bg-800"),
          700: v("--c-bg-700"),
        },
        cyan: {
          ...colors.cyan,
          100: v("--c-cyan-100"),
          200: v("--c-cyan-200"),
          300: v("--c-cyan-300"),
        },
        violet: {
          ...colors.violet,
          200: v("--c-violet-200"),
          300: v("--c-violet-300"),
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "flow-dash": {
          to: { strokeDashoffset: "-24" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "flow-dash": "flow-dash 1.2s linear infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
