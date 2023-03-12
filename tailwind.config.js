/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          'health-red': '#E83151',
          'dark-red': '#820515',
        },
        fontFamily: {
          'sans': ['Proxima Nova'],
        },
      },
    },
    plugins: [],
  }