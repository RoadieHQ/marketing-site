const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      primary: colors.orange,
      white: '#fff',
    },

    extend: {
      fontFamily: {
        sans: ['Soehne', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
};
