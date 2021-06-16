module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          '350': '#51dda8',
        },
        gray:{
          primary: '#f2f2f2',
          secondary: '#e6e6e6',
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
          secondary: '#daffce',
        },
        image:  {
          primary: '#081e29',
        }
      },
      fontFamily: {
          'gilroyBold':['"Gilroy Bold", sans-serif'],
          'gilroyHeavy':['"Gilroy Heavy", sans-serif'],
          'gilroyLight':['"Gilroy Light", sans-serif'],
          'gilroyMedium':['"Gilroy Medium", sans-serif'],
          'giloryRegular':['"Gilroy Regular", sans-serif'],
      },
      screens: {
        '1440p': '1440px',
        'xsm':'350px'
      },
      width: {
        '144': '36rem',
        '168': '42rem',
        '120': '30rem',
        'imageWidth': '536px',
        'imageWidthXLScreen' : '546px',
        'partnerImg':'150px',
      },
      height:{
        'imageHeightXLScreen' : '388px',
        'imageHeight': '381px',
        '110': '27.5rem',
        '37_6': '9.4rem',
        'partnerImg':'75px',
        'partnerImgMobile':'50px',
      },
      zIndex: {
        '-10':'-10',
        '-20':'-20',
      },
      padding:{
        '124':'31rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
