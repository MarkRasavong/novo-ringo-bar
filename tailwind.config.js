/** @type {import('tailwindcss').Config} */

const colors = {
  ringoRed: '#ff090c',
  ringoWhite: '#ffffff',
  ringoBeige: '#f7f3ed',
  ringoGray: '#707070',
  ringoGreen: '#2ECC71',
  ringoBlue: '#3498DB',
  ringoPurple: '#9B59B6',
};

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      condensed: ['Roboto Condensed', 'sans-serif'],
    },
    colors: { ...colors, transparent: 'transparent', current: 'currentColor' },
  },
  plugins: [],
};
