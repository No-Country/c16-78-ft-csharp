// HeroSection.js
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import taco from "../assets/taco.png";
import cereza from "../assets/cereza.png";
import frutilla from "../assets/fresa.png";
import uva from "../assets/uva.png";
import sushi from "../assets/sushi.png";
import pasta from "../assets/pasta.png";

const previewItems = [
  {
    title: "taco",
    icon: taco,
  },
  {
    title: "cereza",
    icon: cereza,
  },
  {
    title: "frutilla",
    icon: frutilla,
  },
  {
    title: "uva",
    icon: uva,
  },
  {
    title: "sushi",
    icon: sushi,
  },
  {
    title: "pasta",
    icon: pasta,
  },
];

const HeroSection = () => {
  return (
    <section className="bg-primary flex flex-col md:flex-row md:justify-between max-w-screen-2xl mx-auto px-4 2xl:px-16 my-8 md:my-12 lg:my-16 2xl:my-20">
      {/* Titulo a la izquierda */}
      <article className="md:mt-12 flex flex-col md:w-1/2 text-center md:text-start">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold">
          Crea platillos con los
        </h2>
        <h1 className="text-white text-3xl md:text-6xl lg:text-8xl font-bold mb-8">
          ingredientes de tu nevera
        </h1>
        <a
          href="#cooking-section"
          className="text-secondary font-bold text-lg flex flex-row items-center justify-center md:justify-start gap-2 hover:text-white duration-200 ease-in-out"
        >
          <span className="text-lg mb-1">Comienza a Cocinar</span>
          <span>
            <FaArrowRight />
          </span>
        </a>
      </article>
      {/* Columna de cards a la derecha */}
      <article className="mt-12 md:mt-0 grid grid-cols-6 md:grid-cols-2 gap-2 md:gap-4">
        {previewItems.map((item, index) => {
          return (
            <div key={item.title} className="bg-white rounded-xl shadow-xl">
              <img
                src={item.icon}
                alt={item.title}
                className={`md:w-36 md:h-36 ${index === 5 ? "scale-125" : ""} ${
                  index === 4 ? "scale-150" : ""
                }`}
              />
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default HeroSection;
