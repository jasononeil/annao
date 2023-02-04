const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["_site/**/*.html"],
  safelist: [],
  theme: {
    fontFamily: {
      serif: ["Cinzel", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        change: "transparent",
      },
    },
  },
  plugins: [],
};
