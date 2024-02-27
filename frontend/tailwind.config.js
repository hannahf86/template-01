/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'color-theme-01': '#edf2f4',
        'color-card-theme-01': '#637df3',
        'color-theme-01-hover': '#edf235',
      },
      borderColor: {
        'color-theme01': '#edf235', 
      }
    },
  },
  plugins: [],
}