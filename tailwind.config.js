/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        int: ['Inter', 'sans-serif'],
      },
      colors: {
        gray: {
          950: '#1B1C1E',
          900: '#232327',
          800: '#2B2B33',
          700: '#2E2E36',
          600: '#393943',
          500: '#494954',
          400: '#555963',
          300: '#686C74',
          200: '#70747C',
          100: '#A5A9B7',
          50: '#E3E3E3',
        },
        white: {
          950: '#ECF0F6',
          900: '#E1E5EB',
          800: '#D4D7DC',
          700: '#CED1D7',
          600: '#C1C5C9',
          500: '#B6BBBF',
          400: '#9494A4',
          300: '#888899',
        },
        blue: {
          600: '#265EED',
        },
        main: {
          blue: '#265EED',
          purple: '#8029EE',
          pink: '#EE29B7',
          red: '#F4385A',
          yellow: '#EE9329',
          green: '#29EE9B',
        },
      },
    },
  },
  plugins: [],
};
