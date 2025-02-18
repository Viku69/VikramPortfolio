/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'HomeCol': '#D6CFCF',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 2s ease-in-out',
        spin: 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
}