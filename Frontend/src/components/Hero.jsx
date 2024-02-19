import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">Crea platillos con los ingredientes de tu nevera</h1>
          <p className="text-gray-600">Descubre recetas deliciosas utilizando los ingredientes que ya tienes en tu nevera. ¡Aprovecha al máximo lo que tienes!          
          </p>
          <a href="#" class="inline-flex items-center justify-center text-2xl text-navy font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                Comienza a Cocinar
            </a>

        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="grid grid-cols-3 gap-4">
            {/* Columna 1 */}
            <div className="bg-white p-4 rounded-md shadow-md">
              {/* Aquí puedes colocar la imagen y cualquier otro contenido que desees */}
              <img src="ruta/de/la/imagen1.jpg" alt="Card 1" className="w-full h-32 object-cover mb-4 rounded-md" />
              <p className="text-gray-800 font-semibold">Card 1</p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md">
              {/* Aquí puedes colocar la imagen y cualquier otro contenido que desees */}
              <img src="ruta/de/la/imagen2.jpg" alt="Card 2" className="w-full h-32 object-cover mb-4 rounded-md" />
              <p className="text-gray-800 font-semibold">Card 2</p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md">
              {/* Aquí puedes colocar la imagen y cualquier otro contenido que desees */}
              <img src="ruta/de/la/imagen3.jpg" alt="Card 3" className="w-full h-32 object-cover mb-4 rounded-md" />
              <p className="text-gray-800 font-semibold">Card 3</p>
            </div>

            {/* Columna 2 */}
            <div className="bg-white p-4 rounded-md shadow-md">
              {/* Aquí puedes colocar la imagen y cualquier otro contenido que desees */}
              <img src="ruta/de/la/imagen4.jpg" alt="Card 4" className="w-full h-32 object-cover mb-4 rounded-md" />
              <p className="text-gray-800 font-semibold">Card 4</p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md">
              {/* Aquí puedes colocar la imagen y cualquier otro contenido que desees */}
              <img src="ruta/de/la/imagen5.jpg" alt="Card 5" className="w-full h-32 object-cover mb-4 rounded-md" />
              <p className="text-gray-800 font-semibold">Card 5</p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md">
              {/* Aquí puedes colocar la imagen y cualquier otro contenido que desees */}
              <img src="ruta/de/la/imagen6.jpg" alt="Card 6" className="w-full h-32 object-cover mb-4 rounded-md" />
              <p className="text-gray-800 font-semibold">Card 6</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
