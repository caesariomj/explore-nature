/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out",
      },
      fontFamily: {
        source: ["Source Sans 3", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f2fbf8",
          100: "#d5f2e9",
          200: "#aae5d4",
          300: "#78d0b8",
          400: "#4bb69c",
          500: "#329a84",
          600: "#267b6b",
          700: "#226357",
          800: "#1f5048",
          900: "#1b3d37",
          950: "#0c2724",
        },

        secondary: {
          50: "#f8f7f4",
          100: "#eeede6",
          200: "#ddd9cc",
          300: "#c7c0aa",
          400: "#afa388",
          500: "#9f8e70",
          600: "#927f64",
          700: "#7a6854",
          800: "#645548",
          900: "#52473c",
          950: "#2b251f",
        },
      },
    },
  },
  plugins: [],
};
