/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease forwards',
        'slide-out': 'slide-out 0.3s ease forwards',
      },
      keyframes: {
        'slide-in': {
          '0%': { maxHeight: '0', opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}