const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      aspectRatio: {
        20: '20',
        32: '32',
        37: '37',
        75: '75',
        86: '86',
      },
      colors: {
        'jb-cyan': '#5FB4A2',
        'jb-dk-blue': '#203a4c',
        'jb-gray-dk-blue': '#33323d',
        'jb-lt-gray-1': '#fafafa',
        'jb-lt-gray-2': '#eaeaeb',
        'jb-red': '#f43030',
        'jb-form-gray': '#979797',
      },
    },
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
      serif: ['Ibarra Real Nova', 'serif'],
    },
  },
  variants: {
    aspectRatio: ['responsive', 'hover'],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addComponents, theme }) {
      const button = {
        '.btn': {
          alignItems: 'center',
          border: `${theme('colors.jb-gray-dk-blue')} 1px solid`,
          display: 'inline-flex',
          justifyContent: 'center',
          padding: `0 ${theme('spacing.8')}`,
          height: `${theme('spacing.12')}`,
          textTransform: 'uppercase',
          transition: 'all .2s ease-in-out',
          whiteSpace: 'nowrap',
          cursor: 'pointer',
        },
        '.btn-primary': {
          backgroundColor: `${theme('colors.white')}`,
        },
        '.btn-primary:hover, .btn-secondary:hover': {
          backgroundColor: `${theme('colors.jb-cyan')}`,
          borderColor: `${theme('colors.jb-cyan')}`,
          color: '#ffffff',
        },
        '.btn-secondary': {
          backgroundColor: `${theme('colors.jb-gray-dk-blue')}`,
          color: '#ffffff',
        },
      }
      const text = {
        '.text-h1, .text-h2, .text-h3': {
          fontFamily: theme('fontFamily.serif'),
        },
        '.text-h1': {
          fontSize: '3.125rem',
          fontWeight: '700',
          lineHeight: '1',
          letterSpacing: '-0.45px',
        },
        '.text-h2': {
          fontSize: '2.5rem',
          fontWeight: '700',
          lineHeight: '1.05',
          letterSpacing: '-0.36px',
        },
        '.text-h3': {
          fontSize: '2rem',
          lineHeight: '1.125',
          letterSpacing: '-0.29px',
        },
        '.text-body-1': {
          fontSize: '1rem',
          lineHeight: '1.875',
        },
        '.text-body-2': {
          fontSize: '0.9375re2',
          lineHeight: '1',
        },
      }
      addComponents([text, button])
    }),
  ],
}
