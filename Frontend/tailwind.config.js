/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#70a8e4", // Azul principal
        secondary: "#000369", // Azul Obscuro Anterior
        textHint: "#BDBDC4", // Gris
        "background-modal": "#00000090",
        "background-card": "#f5f6f9",
      },
      fontFamily: {
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      },
      screens: {
        xsm: "450px",
      },
    },
  },
  plugins: [],
};
