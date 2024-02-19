import IngredientFilter from "./components/IngredientFilter";
import "./App.css";
import FoodSection from "./components/FoodSection";
import FoodCard from "./components/FoodCard";
import ImageExaple from "./assets/platillo-ejemplo.png";

function App() {
  return (
    <div className="w-10/12 lg:w-full mx-auto lg:flex lg:flex-row rounded-t-lg">
      <IngredientFilter />
      <FoodSection />
    </div>
  );
}

export default App;
