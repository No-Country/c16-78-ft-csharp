import "./App.css";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
      <h1 className="text-2xl text-blue-700">App</h1>
    </>
  );
}

export default App;
