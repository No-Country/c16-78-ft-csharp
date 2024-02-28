import React from "react";
import ButtonFill from "./ButtonFill";
import { TfiClose } from "react-icons/tfi";

const FoodCardOpen = ({ item, cardOpen, closeCard }) => {
  return (
    <section
      className={`fixed top-0 left-0 p-4 w-full h-svh justify-center items-center bg-background-modal ${
        cardOpen ? "flex" : "hidden"
      }`}
    >
      <article className="text-textColor w-auto bg-white border border-textHint rounded-3xl overflow-hidden lg:flex lg:w-auto lg:max-w-screen-lg">
        <figure className="relative overflow-hidden flex items-center lg:rounded-3xl">
          <img
            className="w-full h-80 sm:h-96 lg:w-96 object-cover"
            src={item.imageSrc}
            alt={item.title}
          />
          <button
            className="text-3xl absolute top-4 left-4 text-white hover:text-red-500 ease-in-out transition-all"
            onClick={closeCard}
          >
            <TfiClose />
          </button>
        </figure>
        <div className="p-4 flex-1 flex flex-col max-h-80 sm:max-h-none overflow-scroll">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-2xl">{item.title}</h3>
            <time className="text-textHint text-base">{item.time}</time>
          </div>
          <div className="w-full justify-start items-center overflow-hidden pb-4">
            <p className="text-base font-normal overflow-hidden whitespace-nowrap overflow-ellipsis lg:line-clamp-1 lg:whitespace-normal">
              {item.description}
            </p>
          </div>

          <ButtonFill onClick={() => {}} addClass="mt-auto">
            Calificar
          </ButtonFill>
        </div>
      </article>
    </section>
  );
};

export default FoodCardOpen;
