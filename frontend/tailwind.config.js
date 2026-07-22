/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1a1410',
        gold: '#D4AF37',
        cream: '#F5F0E6',
        amber: '#C9962E',
        silk: '#FBF7EF',
        champagne: '#E7D5A3',
        ink: '#0D0A08',
        border: '#E7D8BE',
        'code-bg': '#FFFDF8',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
