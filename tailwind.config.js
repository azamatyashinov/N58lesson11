/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1320px",
    },
    extend: {},
    fontFamily: {
      roboto: "Roboto",
    }
  },
  plugins: [],
}

