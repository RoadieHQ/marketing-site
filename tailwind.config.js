const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Soehne', ...defaultTheme.fontFamily.sans],
        highlight: ['Montserrat', 'Source\\ Sans\\ 3', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        tighter: '0.025em',
        tight: '0.010em',
      },
      colors: {
        gray: colors.neutral,
        primary: colors.orange,
        info: colors.violet,
        green: colors.green,
        white: '#fff',
        blueroadie: '#111827',
        elusivegray: '#FDFDFD',
        tealbackstage: '#00a58c',
        'npm-red': '#cb3837',
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
