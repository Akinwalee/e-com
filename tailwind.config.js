/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif']
      },
      keyframes: {
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        menuBar: {
          '0%': { transform: 'translateY(-100px)', opacity: 0 },
          '80%': { transform: 'translateY(-50px)', opacity: 0.5 },
          '100%': {transform: 'translateY(0px)',opacity:1 },
        },

      },
      animation: {
        bounceY: 'bounceY 1.5s ease-in-out infinite',
        menuBar: 'menuBar 1s smooth ease-in-out',
      }
    },
  },
  plugins: [],
}

