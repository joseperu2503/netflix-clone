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
        'gradient-header' : 'linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)',
        'gradient-banner-bottom' : 'linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsla(0,0%,8%,.35) 29%,hsla(0,0%,8%,.58) 44%,#141414 68%,#141414)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
