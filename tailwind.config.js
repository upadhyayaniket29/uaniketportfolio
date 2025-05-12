/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <- IMPORTANT LINE
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
