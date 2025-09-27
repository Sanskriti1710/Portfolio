/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode via the 'class' strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JS, JSX, TS, TSX files in src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['TimesNewRoman', 'TimesNewRoman'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        fadein: 'fadeIn 1s ease-in forwards', // Custom fade-in animation name
      },
      keyframes: {
        fadeIn: {                            // Keyframes for fadeIn animation
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [], // No additional plugins included by default
};
