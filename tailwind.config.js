const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.neutral,
      primary: colors.orange,
      info: colors.violet,
      green: colors.green,
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
