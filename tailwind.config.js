module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        groupBanner: {
          primary: '#50f87f',
          secondary: '#b8fc00',
        },
        hero: {
          primary: '#3b8a00',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
