const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: {
          light: '#2B353B',
          DEFAULT: '#121619',
          dark: '#000000',
        },
        white: {
          DEFAULT: colors.white,
          dark: '#EBEBEB',
        },
        gray: {
          light: '#798CA4',
          DEFAULT: '#6C809A',
          dark: '#5B6E86',
        },
        orange: {
          light: '#F66B3C',
          DEFAULT: '#F55722',
          dark: '#EA430B',
        },
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('@tailwindcss/typography'), require('autoprefixer')],
};
