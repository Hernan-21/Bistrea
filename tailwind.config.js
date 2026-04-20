
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cream: '#FAF4EB',
        espresso: '#986B4B',
        terracotta: '#D4AB65',
        olive: '#634A38',
        sand: '#E3D7C5',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
