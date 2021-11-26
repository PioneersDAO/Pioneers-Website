const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      purple: {
        light: "#6C16E1",
        dark: "#080028",
        medium: " #170F35",
      },
      yellow: "#FFCF00",
      green: {
        light: "#00E8A7",
        dark: "#00A854",
      },

      white: colors.white,
    },
    borderRadius: {
      none: "0",
      sm: "0.11rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
