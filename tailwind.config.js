const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      white: colors.white,
      green: colors.green,
      primary: '#ffee00',
      'lava-black': {
        light: '#505050',
        DEFAULT: '#373737',
        dark: '#040204',
      },
      'canary-blue': '#1A75BB',
      'lava-orange': '#FF8200',
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
            color: theme('colors.gray.300'),
            strong: {
              color: theme('colors.gray.200'),
            },
            a: {
              color: theme('colors.gray.100'),
              '&:hover': {
                color: theme('colors.gray.300'),
              },
            },
            h1: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.200'),
            },
            h4: {
              color: theme('colors.gray.300'),
            },
            h5: {
              color: theme('colors.gray.300'),
            },
            h6: {
              color: theme('colors.gray.300'),
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Fira Sans', 'Inter var', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '65ch': '65ch',
        '70ch': '70ch',
        '72ch': '72ch',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
        },
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
