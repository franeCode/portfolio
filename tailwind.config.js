/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    colors: {
      "main": "#002F41",
      "text": "#B4B8C1",
      "white": "#FFF"
    },
    extend: {},
  },
  plugins: [],
}