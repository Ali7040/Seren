/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
],
mode: 'jit',
  theme: {
    extend: {
      colors: {

      },
    boxShadow: {

    },  
  backgroundImage: {
    "hero-bg": "url('/src/assets/hero2.png')",
  }  
    },
  },
  plugins: [],
}

