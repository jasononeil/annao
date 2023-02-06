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
        "washed-avocado": "#a0b095",
        ghost: "#dddddf",
        kelp: "#394a21",
        "roman-coffee": "#815F51",
        falcon: "#231f1c",
      },
      backgroundImage: {
        "hero-image": "url('/img/anna-o-2.jpg')",
      },
      height: {
        slide: "80vh",
      },
      minHeight: {
        slide: "80vh",
      },
    },
  },
  plugins: [],
};
