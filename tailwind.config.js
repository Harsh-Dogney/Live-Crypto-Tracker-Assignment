/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#0052FE',
        },
        green: {
          500: '#00C087',
        },
        red: {
          500: '#FF3B30',
        },
      },
      keyframes: {
        'flash-green': {
          '0%, 100%': { color: 'white' },
          '50%': { color: '#00C087' },
        },
        'flash-red': {
          '0%, 100%': { color: 'white' },
          '50%': { color: '#FF3B30' },
        },
        'pulse-green': {
          '0%, 100%': { backgroundColor: 'rgba(0, 192, 135, 0.1)' },
          '50%': { backgroundColor: 'rgba(0, 192, 135, 0.3)' },
        },
        'pulse-red': {
          '0%, 100%': { backgroundColor: 'rgba(255, 59, 48, 0.1)' },
          '50%': { backgroundColor: 'rgba(255, 59, 48, 0.3)' },
        },
      },
      animation: {
        'flash-green': 'flash-green 1s ease-in-out',
        'flash-red': 'flash-red 1s ease-in-out',
        'pulse-green': 'pulse-green 1s ease-in-out',
        'pulse-red': 'pulse-red 1s ease-in-out',
      },
    },
  },
  plugins: [],
};