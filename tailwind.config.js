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
        jade: '#00a8ff',
        'fb-purple': '#AD1FEA',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
