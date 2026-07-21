/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a1410',
        gold: '#D4AF37',
        cream: '#F5F0E6',
        amber: '#C9962E',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
