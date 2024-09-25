/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens : {
        'xs': { 'min': '329px','max': '405px' }
      },
      fontFamily : {
        'fendorika' : ['Fredoka','sans-serif']
      }
    },
  },
  plugins: [],
}

