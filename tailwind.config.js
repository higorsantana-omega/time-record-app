/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      lg: 16,
      xl: 24
    },
    colors: {
      'blue-light': '#81D8F7',
      'white': '#FFFFF',
      'black': '#171717',
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7C7C8A',
      'gray-700': '#27272A',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [nativewind()]
}
