import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        focus: {
          DEFAULT: "#0A0F1A", // Deep Focus
          raised: "#0F1626",
          card: "#111A2E",
          border: "#1E2A45",
        },
        momentum: {
          DEFAULT: "#2563FF", // Momentum Blue
          dim: "#1D4ED8",
        },
        clarity: {
          DEFAULT: "#7DD3FC", // Clarity Cyan
        },
        elevation: {
          DEFAULT: "#F8FAFC", // Elevation / off-white
          muted: "#94A3B8",
          faint: "#64748B",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(37,99,255,0) 0%, rgba(10,15,26,1) 100%)",
      },
      keyframes: {
        "trail-draw": {
          "0%": { strokeDashoffset: "1200" },
          "100%": { strokeDashoffset: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "trail-draw": "trail-draw 2.4s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
