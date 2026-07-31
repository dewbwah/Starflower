import type { Config } from "tailwindcss";

/**
 * Palette sampled from the two Starflower logo PNGs.
 * - Navy / petal blues come from the blue-on-navy mark (primary palette).
 * - Coral comes from the coral-on-red mark (accent only: CTAs, links, highlights).
 * These read as trustworthy + financial (navy) with a warm, human accent (coral).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0E2E5C",
          900: "#0A2247",
          800: "#0E2E5C",
          700: "#183B6E",
          600: "#22508A",
        },
        petal: {
          50: "#F2F8FD",
          100: "#D7E8F5",
          200: "#B9D6EE",
          300: "#94BFE0",
          400: "#6B9FCF",
          500: "#4A85BE",
          600: "#2F6EA8",
        },
        coral: {
          50: "#FDEEEA",
          100: "#FBD9D1",
          200: "#F7B7A9",
          400: "#F26B54",
          500: "#E8402A",
          600: "#D3341F",
          700: "#B12A19",
        },
        cream: "#FBF9F6",
        ink: "#16233A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(14,46,92,0.04), 0 8px 24px rgba(14,46,92,0.06)",
        lift: "0 2px 4px rgba(14,46,92,0.05), 0 18px 40px rgba(14,46,92,0.10)",
      },
      maxWidth: {
        content: "72rem",
        prose: "44rem",
      },
      keyframes: {
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
