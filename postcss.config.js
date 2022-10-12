module.exports = {
  plugins: [
    require("tailwindcss"),
    require('autoprefixer'),
    require("nativewind/postcss")
  ],
  plugins: {
    "nativewind/postcss": {
      output: "nativewind-output.js",
    },
  }
}
