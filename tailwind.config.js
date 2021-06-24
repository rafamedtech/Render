module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: (theme) => ({
      gradiente:
        "linear-gradient(135deg, #283acb 0%, #8650c8 50%, #de0a0a 100%)",
    }),
    color: {
      render: "#6C63FF",
    },
    extend: {
      fontFamily: {
        bavro: ["bavro"],
        cocogoose: ["cocogoose"],
        tommy: ["tommy"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
