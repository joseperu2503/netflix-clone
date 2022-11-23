/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '400': '400ms',
      },
      height: {
        '17': '4.25rem',
      },
      backgroundImage:{
        'gradient-header' : 'linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
