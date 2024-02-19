/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //Agregar o modificar colores personalizados
        primary: "#00FF94",
        textColor: "#000369",
        textHint: "#BDBDC4",
        green: "#00FF94",
      },
    },
  },
  plugins: [],
};
