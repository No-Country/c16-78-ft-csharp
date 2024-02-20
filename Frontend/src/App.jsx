import IngredientFilter from "./components/IngredientFilter";
import "./App.css";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import FoodSection from "./components/FoodSection";
import FoodCard from "./components/FoodCard";
import ImageExaple from "./assets/platillo-ejemplo.png";
function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <div className="w-10/12 lg:w-full mx-auto lg:flex lg:flex-row rounded-t-lg">
      <IngredientFilter />
      <FoodSection />
    </div>
      <h1 className="text-2xl text-blue-700">App</h1>
    </>

  
  );
}

export default App;
