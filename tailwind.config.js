/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'da-black': '#000000',
        'da-white': '#FFFFFF',
        'da-burgundy': '#663333',
        'da-grey': '#999999',
        'da-mauve': '#b39999',
        'da-yellow': '#FFFF00',
        'da-light-grey': '#D3D3D3',
        'da-light-blue': '#ADD8E6',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
