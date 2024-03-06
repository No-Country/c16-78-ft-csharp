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
  const [updateMenu, setUpdateMenu] = useState([]);
  const [deleteMenu, setDeleteMenu] = useState([]);

  function handleIngredientsFilter(newIngredient) {
    setIngredientsFilter(newIngredient);
  }

  function handleAddMenu(formData) {
    setAddMenu(formData);
  }

  function handleUpdateMenu(formData) {
    setUpdateMenu(formData);
  }

  function handleDeleteMenu(id) {
    setDeleteMenu(id);
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
        <FoodSection ingredientsFilter={ingredientsFilter}
          addMenu={addMenu}
          handleUpdateMenu={handleUpdateMenu}
          updateMenu={updateMenu}
          handleDeleteMenu={handleDeleteMenu}
          deleteMenu={deleteMenu} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
