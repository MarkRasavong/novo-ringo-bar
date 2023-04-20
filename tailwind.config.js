/** @type {import('tailwindcss').Config} */
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
    colors: {
      ringoRed: {
        50: '#FFEBEE',
        100: '#FFCDD2',
        200: '#EF9A9A',
        300: '#E57373',
        400: '#EF5350',
        500: '#FF090C',
        600: '#E53935',
        700: '#D32F2F',
        800: '#C62828',
        900: '#B71C1C',
      },
      ringoWhite: {
        DEFAULT: '#FFFFFF',
      },
      ringoBeige: {
        50: '#FDFDFB',
        100: '#FBF8F1',
        200: '#F7F3ED',
        300: '#F2EFE4',
        400: '#EAE5D3',
        500: '#E2DBBF',
        600: '#D9D1AC',
        700: '#B8AD8E',
        800: '#918A6F',
        900: '#716F58',
      },
    },
  },
  plugins: [],
};
