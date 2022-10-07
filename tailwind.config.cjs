/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      spacing: {
        96.5 : '96.5%',
        83.3: '83.3%',
        8.35: '8.35%',
        1.75 : '1.75%',
      },
    },
    fontFamily: {
      roboto: ['Roboto'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'mobile': {'max': '640px'}
    }
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ],
}
