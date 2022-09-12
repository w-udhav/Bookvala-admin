/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js, jsx}", "./src/**/*.{js, jsx}"],
  theme: {
    extend: {
      colors: {
        'cus-yellow': '#E2AD03',
      },
    },
  },
  plugins: [],
}