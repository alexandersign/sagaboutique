/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'saga-black': '#000000',
        'saga-white': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Inter', 'Montserrat', 'Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
