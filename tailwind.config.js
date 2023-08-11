/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./manage-landing-page-master/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Vietnam": [ '"Be Vietnam Pro"', 'sans-serif']
      },
      colors: {
        "Bright-Red": "hsl(12, 88%, 59%)",
        "Dark-Blue": "hsl(228, 39%, 23%)",
        "Dark-Grayish-Blue": "hsl(227, 12%, 61%)",
        "Very-Dark-Blue": "hsl(233, 12%, 13%)",
        "Very-Pale-Red": "hsl(13, 100%, 96%)",
        "Vary-Light-Gray": "hsl(0, 0%, 98%)",
      },

      backgroundImage: {
        "close-menu": "url('images/icon-close.svg')",
        "open-menu": "url('images/icon-hamburger.svg')"
      }
      
    },
  },
  plugins: [],
}

