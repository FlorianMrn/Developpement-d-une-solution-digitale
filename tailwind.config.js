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
        roboto: ['Roboto', 'sans-serif'],
        akzi: ['AkzidenzGroteskBQ', 'sans-serif']
      },
      backgroundImage: {
        'particules': "url('./assets/images/particules.jpg')",
        'coins' : "url('./assets/icons/coins-solid.svg')",
        'search' : "url('./assets/icons/search.svg')",
        'euro' : "url('./assets/icons/euro.svg')",
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
