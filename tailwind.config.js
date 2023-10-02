/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'body': "#17171f",
        'seleted-text': "#36d399",
        'theme': "#36d399",
        'nev': "#404053",
        'secondary': "#9191a4",
        'badge': "#3f3f51",
        'input-border': "#565666",
        'input': "#2a2a35",
      },
      fontFamily: {
        poppins: ["'poppins'", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}

