/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0065BD",
          dark: "#004E94",
          light: "#E8F1FB",
        },
        code: {
          bg: "#0F172A",
          text: "#E2E8F0",
          accent: "#38BDF8",
          green: "#86EFAC",
          comment: "#475569",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
