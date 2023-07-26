/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true
    },
    screens: {
      'sm':'576px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      'desktop': '1440px',
      '2xl': '1536px'
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
      },
      flex: {
        '2': '2 2 0%'
      },
      boxShadow: {
        'bottom': '-1px 4px 4px 0 rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

