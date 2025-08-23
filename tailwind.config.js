/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        beige: {
          // Beige color for the Morgana landing
          50: "#f3efe6",
          100: "#ede7db",
          200: "#e2d9c8",
          300: "#d6cbb9",
          400: "#cfc4b0",
          500: "#c1b39e",
          600: "#b9ad93",
          700: "#a49580",
          800: "#9c8e74",
          900: "#8b7b67",
          950: "#4b4236",
        },
      },
      fontFamily: {
        fantasy: ["Fantasy", "cursive"], //Fantasy font for the landing Web Call
        antonio: ["Antonio"], //Antonio font for the landing WPL
      },
    },
  },
  plugins: [],
};
