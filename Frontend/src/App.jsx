import IngredientFilter from "./components/IngredientFilter";
import "./App.css";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import FoodSection from "./components/FoodSection";
import FoodCard from "./components/FoodCard";
import ImageExaple from "./assets/platillo-ejemplo.png";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="lg:w-full mx-auto lg:flex lg:flex-row">
        <IngredientFilter />
        <FoodSection />
      </div>
      <Footer />
      <h1 className="text-2xl text-blue-700">App</h1>
    </>


  );
}

export default App;
