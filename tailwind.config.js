/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'da-black': '##000000',
        'da-white': '#FFFFFF',
        'da-burgundy': '#663333',
        'da-grey': '#999999',
        'da-mauve': '#b39999',
      },
      fontFamily: {
        'sans': ['Proxima Nova'],
      },
    },
  },
  plugins: [],
}
