/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "serif"],
        mainHead: ["Cormorant Garamond", "serif"],
      },
    },
  },
  variants: {
    fill: ['responsive', 'hover', 'focus'], // Ensure fill and stroke are included
    stroke: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
