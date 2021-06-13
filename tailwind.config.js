module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          '350': '#51dda8',
        },
        groupBanner: {
          primary: '#50f87f',
          secondary: '#b8fc00',
        },
        hero: {
          primary: '#3b8a00',
          secondary: '#46b500',
        },
        page: {
          primary: '#61bb71',
        }
      },
      fontFamily: {
        gilroy: {
          bold:['"Gilroy Bold"'],
          heavy:['"Gilroy Heavy"'],
          light:['"Gilroy Light"'],
          medium:['"Gilroy Medium"'],
          regular:['"Gilroy Regular"'],
        },
      },
      height: {
        '110': '27.5rem',
        '37_6': '9.4rem',

      },
      width: {
        '144': '36rem',
        '168': '42rem',
      },
      zIndex: {
        '-10':'-10',
        '-20':'-20',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
