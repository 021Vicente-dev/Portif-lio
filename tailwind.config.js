/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        'lexend-bold': ['Lexend-bold', 'sans-serif'],
        'lexend-black': ['Lexend-black', 'sans-serif'],
        'lexend-extrabold': ['Lexend-extrabold', 'sans-serif'],
        'lexend-extralight': ['Lexend-extralight', 'sans-serif'],
        'lexend-light': ['Lexend-light', 'sans-serif'],
        'lexend-medium': ['Lexend-medium', 'sans-serif'],
        'lexend-regular': ['Lexend-regular', 'sans-serif'],
        'lexend-semibold': ['Lexend-semibold', 'sans-serif'],
        'lexend-thin': ['Lexend-thin', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: "class",
}

