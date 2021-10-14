module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#efefef'
        },
        black: {
          DEFAULT: '#100f0f'
        },
        green: {
          DEFAULT: '#1fc36c',
        },
        grey: {
          DEFAULT: '#2C2828'
        }
      },
      fontFamily: {
        roboto: "'Roboto'",
        akzi: "'AkzidenzGroteskBQ'"
      },
      backgroundImage: {
        'particules': "url('./assets/images/particules.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
