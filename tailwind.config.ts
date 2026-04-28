import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        cream: "#cccccc",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 8vw, 6rem)", { lineHeight: "1.04", letterSpacing: "0" }],
        "display-lg": ["clamp(2rem, 6vw, 3.75rem)", { lineHeight: "1.04", letterSpacing: "0" }],
        "display-md": ["clamp(1.5rem, 3.5vw, 2rem)", { lineHeight: "1.04", letterSpacing: "0.01em" }],
      },
      letterSpacing: {
        brand: "0.02em",
      },
      maxWidth: {
        site: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
