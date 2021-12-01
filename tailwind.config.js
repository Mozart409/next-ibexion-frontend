const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],

    options: {
      safelist: ['prose'],
    },
  },
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      white: colors.white,
      green: colors.green,
      primary: '#ffee00',
      orange: {
        100: '#ffaa28',
        200: '#ffa01e',
        300: '#ff9614',
        400: '#FF8C0A',
        500: '#FF8200',
      },
      'lava-black': {
        100: '#E6E6E6',
        200: '#CECECE',
        300: '#B5B5B5',
        400: '#9B9B9B',
        500: '#828282',
        600: '#686868',
        700: '#505050',
        800: '#373737',
        900: '#040204',
      },
      'canary-blue': {
        100: '#429de3',
        200: '#3893d9',
        300: '#2e89cf',
        400: '#247fc5',
        500: '#1A75BB',
      },
      'lava-orange': {
        100: '#ffaa28',
        200: '#ffa01e',
        300: '#ff9614',
        400: '#FF8C0A',
        500: '#FF8200',
      },
      'rubber-gray': '#161A1E',
      'colfo-gray': '#272F38',
      'gecko-gray': '#50545E',
      'meta-blue': '#449FDB',

      red: colors.rose,
      yellow: colors.amber,
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.canary-blue.300'),
            strong: {
              color: theme('colors.canary-blue.200'),
            },
            a: {
              color: theme('colors.canary-blue.100'),
              '&:hover': {
                color: theme('colors.canary-blue.300'),
              },
            },
            h1: {
              color: theme('colors.canary-blue.100'),
            },
            h2: {
              color: theme('colors.canary-blue.100'),
            },
            h3: {
              color: theme('colors.canary-blue.200'),
            },
            h4: {
              color: theme('colors.canary-blue.300'),
            },
            h5: {
              color: theme('colors.canary-blue.300'),
            },
            h6: {
              color: theme('colors.canary-blue.300'),
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Fira Sans', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '65ch': '65ch',
        '70ch': '70ch',
        '72ch': '72ch',
      },
      container: {
        center: true,
        /* padding: {
          DEFAULT: '1rem',
          md: '2rem',
        }, */
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
