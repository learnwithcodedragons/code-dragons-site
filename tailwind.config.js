const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(198, 76%, 52%)',
          default: 'hsl(274, 53%, 37%)',
          darker: 'hsl(60, 90%, 16%)'
        }
      }
    },
    screens: {
      'xs': '386px',
      ...defaultTheme.screens,
    },
  },
  variants: {},
  plugins: []
};
