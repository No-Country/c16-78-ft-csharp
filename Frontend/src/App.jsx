import IngredientFilter from "./components/IngredientFilter";
import "./App.css";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import FoodSection from "./components/FoodSection";
import Footer from "./components/Footer";
import CommentSection from "./components/CommentSection";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="lg:w-full mx-auto lg:flex lg:flex-row">
        <IngredientFilter />
        <FoodSection />
      </div>
      <div className="container mx-auto p-4">
        <CommentSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
