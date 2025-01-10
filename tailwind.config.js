/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // For the Inter font
        oxygen: ['Oxygen', 'sans-serif'], // For the Oxygen font
      },
    },
  },
  plugins: [],
}

