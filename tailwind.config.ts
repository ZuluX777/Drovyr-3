import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        focus: "#0A0F1A",
        momentum: "#2563FF",
        elevation: "#F8FAFC",
        operational: "#8A94A6",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "Arial", "sans-serif"],
        body: ["var(--font-inter)", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};
export default config;
