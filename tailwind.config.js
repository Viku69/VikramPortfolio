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
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      maxWidth: {
        'screen-xxl': '1400px',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 2s ease-in-out',
        spin: 'spin 1s linear infinite',
        slideInLeft: 'slideInLeft 0.6s ease-out',
        slideInRight: 'slideInRight 0.6s ease-out',
        fadeInUp: 'fadeInUp 0.6s ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}