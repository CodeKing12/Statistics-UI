// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./sources/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      'colors': {
        'blue': '#396DBA',
        'whitish': '#F6F6F6',
        'darkish': '#787878'
      },
      // screens: {
      //   'xxs': '350px',
      //   'xs': '520px',
      //   ...defaultTheme.screens,
      // }
    },
  },
  plugins: [],
}
