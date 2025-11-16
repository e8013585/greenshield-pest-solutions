/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#2E7D32',
        'dark-black': '#1B1B1B',
        'light-green': '#C8E6C9'
      }
    },
  },
  plugins: [],
}