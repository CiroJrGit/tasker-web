/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        int: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '3xs': '0.863rem',
        '2sm': '0.9375rem',
        '4.5xl': '2.5rem',
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
        slate: {
          800: '#353945',
          700: '#404653',
          600: '#4E5360',
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
      spacing: {
        0.75: '0.1875rem',
        2.25: '0.5625rem',
        4.5: '1.125rem',
      },
      ringWidth: {
        1.5: '1.5px',
      },
      transitionDuration: {
        10: '10ms',
        40: '40ms',
        400: '400ms',
        600: '600ms',
      },
    },
  },
  plugins: [],
};
