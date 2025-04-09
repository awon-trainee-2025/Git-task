/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#1a365d',
          800: '#0f2444',
          900: '#001233',
        }
      }
    },
  },
  plugins: [],
};