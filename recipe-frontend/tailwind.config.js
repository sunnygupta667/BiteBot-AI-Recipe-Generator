/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        custom: ['"Custom Font Name"', 'sans-serif'], // Example for a custom font
      },  
    },
  },
  plugins: [],
}