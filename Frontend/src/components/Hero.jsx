// HeroSection.js
import React from "react";
import taco from '../assets/taco.png'
import cereza from '../assets/cereza.png'
import frutilla from '../assets/fresa.png'
import uva from '../assets/uva.png'
import sushi from '../assets/sushi.png'
import pasta from '../assets/pasta.png'

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-green text-navy p-8">
      {/* Titulo a la izquierda */}
      <div className="md:w-2/3 pl-16 mx-auto my-20">
        <h1 className="text-4xl font-bold mb-4">Crea platillos con los </h1>
        <h1 className="text-4xl font-bold mb-4">ingredientes de tu nevera</h1>
        <p className="text-lg">
          Comienza a Cocinar
        </p>
      </div>

      {/* Columna de cards a la derecha */}
      <div className="md:w-2/5 mt-4 md:mt-0 md:flex md:justify-between pr-6">
        <div className="flex flex-row md:flex-row md:flex-wrap gap-6">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-3xl shadow mb-2 md:w-1/3">
            <img src={taco} alt="Taco" className="w-full h-full object-cover" />
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-3xl shadow mb-2 md:w-1/3">
            <img src={cereza} alt="Cereza" className="w-full h-full object-cover" />
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-3xl shadow mb-2 md:w-1/3">
            <img src={frutilla} alt="Frutilla" className="w-full h-full object-cover" />
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 rounded-3xl shadow mb-2 md:w-1/3">
            <img src={uva} alt="Uva" className="w-full h-full object-cover" />
          </div>

          {/* Card 5 */}
          <div className="bg-white p-4 rounded-3xl shadow mb-2 md:w-1/3">
            <img src={sushi} alt="Sushi" className="w-full h-full object-cover" />
          </div>

          {/* Card 6 */}
          <div className="bg-white p-4 rounded-3xl shadow mb-2 md:w-1/3">
            <img src={pasta} alt="Pasta" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
