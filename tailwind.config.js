/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true
    },
    screens: {
      'desktop': '1440px'
    },
    fontFamily: {
      "modern": "modern-no-20-regular",
      "jakartaSans" : "Plus Jakarta Sans",
      "poppins" : "Poppins",
      "inter" : "Inter"
    },
    extend: {
      colors: {
        "primary" : "#025464",
        "secondary": "#E57C23"
      }
    },
  },
  plugins: [],
}

