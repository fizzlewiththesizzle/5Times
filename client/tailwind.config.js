/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '4.5xl' : '2.5rem',
        '7.5xl' : '5rem',
        '10xl' : '10rem',
        '12xl' : '12rem'
      }
    },
    screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }
      'se': {'max': '375px'},
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '2560px',
      // => @media (min-width: 2560px)

      '4xl': '3840px',
      // => @media (min-width: 3840px)
    }
  },
  plugins: [],
}