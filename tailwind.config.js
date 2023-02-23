/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        darkVio: "hsl(257, 27%, 26%)",
        cyan: "hsl(180, 66%, 49%)",
        red: "hsl(0, 87%, 67%)",
        customGray: "hsl(0, 0%, 75%)",
        grayVio: "hsl(257, 7%, 63%)",
        vDarkBlue: "hsl(255, 11%, 22%)",
        vDarkVio: "hsl(260, 8%, 14%)"
      },
      fontSize: {
        default: "18px"
      },
      fontFamily: {
        pappins: ['Poppins', 'sans-serif']
      },
      backgroundImage:{
        purpleDesktop: "url('/src/images/bg-shorten-desktop.svg')",
        purpleMobile: "url('/src/images/bg-shorten-mobile.svg')",
        boostDesktop: "url('/src/images/bg-boost-desktop.svg')",
        boostMobile: "url('/src/images/bg-boost-mobile.svg')",
      }
    },
  },
  plugins: [],
}



