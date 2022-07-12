/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./galerie.html"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      gridTemplateColumns: {
        menu: "100px 1fr 100px",
      },
      colors: {
        "dauphinri-beige": "#FFE7C3",
        "dauphinri-beige-dark": "#DFC090",
        "dauphinri-blue": "#30393C",
      },
    },
  },
  plugins: [],
};
