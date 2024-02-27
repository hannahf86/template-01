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
        'color-theme-01': '#edf235', 
      },
      textColor: {
        'color-theme-01': '#edf235', 
      }
    },
  },
  safelist: [
    {
      pattern: /text-color-(theme-01)/
    },
    {
      pattern: /bg-color-(theme-01)/
    },
    {
      pattern: /bg-color-card-(theme-01)/
    },
    {
      pattern: /bg-color-card-(theme-01)/,
      variants: ['hover']
    },
    {
      pattern: /border-color-(theme-01)/
    },
  ],
  plugins: [],
}