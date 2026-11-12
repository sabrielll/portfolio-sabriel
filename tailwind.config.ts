import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAF8F5",
          100: "#F4F0E8",
          200: "#E8E1D3",
          300: "#DBD1BE",
        },
        forest: {
          50: "#F2F7F4",
          100: "#E6EFE9",
          200: "#C5D9CC",
          500: "#407056",
          600: "#315B44",
          700: "#264B37",
          800: "#1B4332",
          900: "#132A1F",
          950: "#0B1912",
        },
        khaki: {
          50: "#FAF7F2",
          100: "#F2ECE0",
          200: "#E3D9C4",
          300: "#D4C8B0",
          400: "#BCA988",
          500: "#A69473",
          600: "#8F7E5F",
          700: "#736449",
        },
        ink: {
          900: "#16231C",
          700: "#37463E",
          500: "#5C6B63",
          400: "#7E8C84",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
