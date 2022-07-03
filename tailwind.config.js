/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "pages/**/*.{js,jsx,ts,tsx}",
    "components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        white: colors.gray["100"],
        gray: colors.gray,
        dark: colors.gray["900"],
      },
      fontSize: {
        "8xl": "6rem",
      },
      maxWidth: {
        "2/5": "40%",
        "2/3": "66.666667%",
      },
      maxHeight: {
        "1/4": "25%",
      },
      minWidth: {
        "1/4": "25%",
        "1/3": "33.333333%",
      },
      minHeight: {
        "1/4": "25%",
        "1/2": "50%",
      },
      zIndex: {
        "-10": "-10",
      },
      animation: {
        "fly-in": "flyIn 0.5s ease-in-out forwards",
      },
      keyframes: {
        "flyIn": {
          "0%": {
            opacity: 0,
            transform: "translateY(-30px)"
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)"
          }
        }
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
