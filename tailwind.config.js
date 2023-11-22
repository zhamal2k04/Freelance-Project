/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'custom-height': '700px',
      },
      backgroundColor: {
        'custom-bg': "#040F28;",
      },
      textColor: {
        'p-color': "#C4C4C4",
      },
      width: {
        'custom-w': "477px",
        "p-custom-w": "395px",
        "p-custom2-w": "243px",
        "round-w": "80px",
        "footer-w": "330px",
        "card-w": "300px",
      },
      height: {
        "round-h": "80px",
        "card-h": "450px",
      },
      borderRadius: {
        "50": "50%",
      }
    },
  },
  plugins: [],
}

