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
      colors: {
        'jb-cyan': '#5FB4A2',
        'jb-dk-blue': '#203a4c',
        'jb-gray-dk-blue': '#33323d',
        'jb-lt-gray-1': '#fafafa',
        'jb-lt-gray-2': '#eaeaeb',
        'jb-red': '#f43030',
      },
    },
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
      serif: ['Ibarra Real Nova', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const text = {
        '.text-h1, .text-h2, .text-h3': {
          fontFamily: theme('fontFamily.serif'),
        },
        '.text-h1': {
          fontSize: '3.125rem',
          fontWeight: '700',
          lineHeight: '1',
          letterSpacing: '-0.45',
        },
        '.text-h2': {
          fontSize: '2.5rem',
          fontWeight: '700',
          lineHeight: '1.05',
          letterSpacing: '-0.36em',
        },
        '.text-h3': {
          fontSize: '2rem',
          lineHeight: '1.125',
          letterSpacing: '-0.29em',
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
      const buttons = {
        '.btn': {
          alignItems: 'center',
          border: `${theme('border.1')} solid`,
          color: `${theme('colors.white')}`,
          display: 'inline-flex',
          justifyContent: 'center',
          padding: `${theme('spacing.3')} ${theme('spacing.8')}`,
          textTransform: 'uppercase',
          transition: 'all .2s ease-in-out',
          whiteSpace: 'nowrap',
        },
        '.btn-secondary': {
          backgroundColor: `${theme('colors.white')}`,
          borderColor: `${theme('colors.jb-gray-dk-blue')}`,
        },
        '.btn-secondary:hover': {
          backgroundColor: `${theme('colors.jb-cyan')}`,
          borderColor: `${theme('colors.jb-cyan')}`,
          color: '#ffffff',
        },
      }
      addComponents(text)
    }),
  ],
}
