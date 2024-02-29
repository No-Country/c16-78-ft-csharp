/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#00FF94",
        navy: "#000369",
        primary: "#00FF94",
        textColor: "#000369",
        textHint: "#BDBDC4",
        green: "#00FF94",
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
