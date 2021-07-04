module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./public/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        bavro: ["bavro"],
        cocogoose: ["cocogoose"],
        cocogoosebold: ["cocogoosebold"],
      },
      colors: {
        render: {
          blue: "#5c4fa1",
          softpink: "#ee798a",
          hotpink: "#ef477a",
          purple: "#7f2e84",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
