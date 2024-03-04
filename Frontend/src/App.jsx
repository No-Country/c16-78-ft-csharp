import IngredientFilter from "./components/IngredientFilter";
import "./App.css";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import FoodSection from "./components/FoodSection";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {

  const [ingredientsFilter, setIngredientsFilter] = useState([]);
  console.log(ingredientsFilter);

  function handleIngredientsFilter(newIngredient) {
    setIngredientsFilter(newIngredient);
  }
  return (
    <main className="bg-primary font-plus-jakarta-sans">
      <Navbar />
      <HeroSection />
      <section
        id="cooking-section"
        className="lg:w-full mx-auto lg:flex lg:flex-row"
      >
        <IngredientFilter handleIngredientsFilter={handleIngredientsFilter} />
        <FoodSection ingredientsFilter={ingredientsFilter} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
