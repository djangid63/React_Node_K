/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        leftNav: ["Montserrat", "serif"],
        mainHead: ["Cormorant Garamond", "serif"]
      },
    },
  },
  plugins: [],
}