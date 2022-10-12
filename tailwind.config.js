/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [nativewind()]
}
