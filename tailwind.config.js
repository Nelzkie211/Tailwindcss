module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A25",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      }
    },
    fontFamily:{
      Poppins: ["Poppins, sans-serif"],
    },
    container:{
      center: true,
      padding: "1rem",
      screen: {
        lg: "1124px",
        xl: "1125px",
        "2xl": "1124px",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
