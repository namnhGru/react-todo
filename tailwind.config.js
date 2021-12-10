module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cLightA": "#F1F1F1",
        "cLightB": "#EBEBEB",
        "cLightC": "#E3E3E3",
        "cDarkC": "#1F1F1F",
        "cDarkB": "#121212",
        "cDarkA": "#0D0D0D"
      },
      spacing: {
        "168": "42rem"
      }
    },
    fontSize: {
      "18xl": "18rem"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
