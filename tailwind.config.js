/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

    letterSpacing: {
      tightest: '-0.34px',
      tight: '-0.15px',
      normal: '0',
      wide:'0.32px',
      wider: '0.72px',
      widest: '0.96px',
    },

    // screens: {
    //   'xs': { 'max': '480px' },
    //   'sm': { 'min': '481px'},
    //   'md': { 'min': '768px'},
    //   'lg': { 'min': '980px'},
    //   'xl': { 'min': '1025px'},
    //   '2xl': { 'min': '1181px' },
    //   '3xl': { 'min': '1440px' },
    // },

      // container: {
      // center: true,
      // screens: {
      //   xs: '302px',
      //   sm: '462px',
      //   md: '608px',
      //   lg: '90%',
      //   xl: '90%',
      //   '2xl': '90%',
      //   '3xl': '1396px',
      // },
      // },     
     

    fontFamily: {
      popp: ['Poppins', 'sans-serif'],
      osw: ['Oswald', 'sans-serif'],
    },

    extend: {

      colors: {
         'primary': '#262A3B',
        'secondary': '#424242',
        'light-grey': '#F4F2F0',
        'light': '#fff',
        'dark': '#272727',
        'purple': '#A190CC',
        'yellow': '#D6CF1F',
        'green':'#D2E562',
      },
     

      fontSize: {
        '3xl-xl': '34px', //Xl indicatest the device
        '2xl-xl': '26px', //Xl indicatest the device
        'xl-xl': '22px', //Xl indicatest the device
      },

       lineHeight: {
        '6': '1.33em',
      },

      plugins: [],
    }
  }
}
