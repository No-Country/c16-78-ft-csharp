/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'green':'#00FF94',
        'navy':'#000369',     
        'primary': "#00FF94",
        'textColor': "#000369",
        'textHint': "#BDBDC4",
        'green': "#00FF94", 
      },
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
    
      
   
  },
  plugins: [],
};
