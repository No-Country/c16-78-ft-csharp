import React from "react";
import FoodCard from "./FoodCard";
import ImageExaple from "../assets/platillo-ejemplo.png";

const FoodSection = () => {
  const information = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  return (
    <section className=" flex-1 p-4 overflow-hidden lg:rounded-tr-3xl bg-white">
      <h1 className="text-3xl text-center pb-4 text-textColor font-medium lg:text-xl lg:text-start">
        Puedes crear {information.length} platillos
      </h1>
      <div className="flex flex-row flex-wrap gap-4 justify-center lg:flex-col lg:max-w-screen-xl">
        {information.map((item) => {
          return (
            <FoodCard
              key={item}
              imageSrc={ImageExaple}
              title="Avocado toast"
              time="15 - 20 min"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            />
          );
        })}
      </div>
    </section>
  );
};

export default FoodSection;
