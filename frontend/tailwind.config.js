/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'background': '#f0f0ec',
        'primary': '#eff6fe',
        'secondary': '#7c7c7c',
        'accent': '#3da5dc',
        'error': '#FF6E6E',
        'success': '#6EFF78',
        'text': '#393939',
      },
      fontFamily: {
        sans: ['Maven pro', 'sans-serif']
      },
      fontSize: {
        sm: '0.6rem',
        base: '1.0rem',
        xl: '1.2rem',
        '2xl': '1.5rem',
        '3xl': '2.0rem',
        '4xl': '2.5rem',
        '5xl': '3.5rem',
        '6xl': '4.0rem',
        '7xl': '4.5rem',
      }
    },
  },
  plugins: [],
}