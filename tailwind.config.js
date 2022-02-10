module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./constants/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      xs: "300px",
      sm: "450px",
      md: "768px",
      lg: "1107px",
      // sm: "640px",
      // md: "768px",
      // lg: "1024px",
      // xl: "1280px",
    },
    extend: {
      fontFamily: {
        "dm-sans": ['"DM Sans"'],
      },
    },
  },
  plugins: [],
};
