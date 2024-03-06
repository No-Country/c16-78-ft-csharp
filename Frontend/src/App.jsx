import IngredientFilter from "./components/IngredientFilter";
import "./App.css";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import FoodSection from "./components/FoodSection";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  const [ingredientsFilter, setIngredientsFilter] = useState([]);
  const [addMenu, setAddMenu] = useState([]);

  function handleIngredientsFilter(newIngredient) {
    setIngredientsFilter(newIngredient);
  }

  function handleAddMenu(formData) {
    setAddMenu(formData);
  }



  return (
    <main className="bg-primary font-plus-jakarta-sans">
      <Navbar />
      <HeroSection />
      <section
        id="cooking-section"
        className="lg:w-full mx-auto lg:flex lg:flex-row"
      >
        <IngredientFilter handleIngredientsFilter={handleIngredientsFilter} handleAddMenu={handleAddMenu} />
        <FoodSection ingredientsFilter={ingredientsFilter} addMenu={addMenu} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
