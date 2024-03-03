import React, { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import ButtonFill from "./ButtonFill";
import { TfiClose } from "react-icons/tfi";
import Toster from "../assets/cooking-icons/toaster.png";
import UpdateMenu from "./UpdateMenu";

const FoodCardOpen = ({ item, cardOpen, closeCard }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <section
      className={`fixed top-0 left-0 xsm:p-4 w-full h-svh overflow-scroll xsm:h-full xsm:justify-center xsm:items-center bg-background-modal ${cardOpen ? "flex" : "hidden"
        }`}
    >
      <article className="text-black w-full xsm:w-auto bg-background-card xsm:rounded-3xl overflow-hidden flex flex-col md:flex-row md:w-auto md:max-w-screen-lg">
        <figure className="relative overflow-hidden flex items-center md:rounded-3xl">
          <img
            className="w-full h-80 md:h-96 md:w-96 object-cover"
            src={item.imageSrc}
            alt={item.title}
          />
          <button
            className="text-xl xsm:text-3xl absolute top-1 xsm:top-4 left-1 xsm:left-4 text-white hover:text-red-500 ease-in-out transition-all"
            onClick={closeCard}
          >
            <TfiClose />
          </button>
          <button
            className={`text-2xl xsm:text-4xl absolute top-1 xsm:top-4 right-1 xsm:right-4 ${favorite ? "text-red-600" : "text-white"
              }  hover:text-red-400 ease-in-out transition-all`}
            onClick={() => {
              setFavorite((prev) => !prev);
            }}
          >
            {favorite ? <MdFavorite /> : <MdFavoriteBorder />}
          </button>
        </figure>
        <div className="p-4 flex-1 flex flex-col xsm:max-h-full sm:max-h-none">
          <header className="flex justify-between lg:items-center">
            <div className="lg:flex justify-center items-center">
              <h3 className="font-semibold text-3xl">{item.title}</h3>
              <ul className="flex lg:pl-2 pb-4 md:pb-0 text-xl text-yellow-500">
                <li>
                  <IoStar />
                </li>
                <li>
                  <IoStar />
                </li>
                <li>
                  <IoStar />
                </li>
                <li>
                  <IoStarHalf />
                </li>
                <li>
                  <IoStarOutline />
                </li>
              </ul>
            </div>
            <time className="text-textHint text-base ml-2">{item.time}</time>
          </header>
          <div className="flex flex-col">
            <p className="text-base font-light xsm:line-clamp-2 xl:line-clamp-none">
              {item.description}
            </p>
            <span className="h-0.5 bg-textHint mt-2"></span>
            <div className="flex items-center pt-2">
              <img src={Toster} alt="Metodo de coccion" className="w-10 h-10" />
              <p className="ml-2 text-lg italic">
                Método de coccion: <span className="font-bold">Tostador</span>
              </p>
            </div>
            <h4 className="text-2xl">Ingredientes</h4>
            <ul className="flex flex-col h-44 xsm:h-32 flex-wrap mb-4">
              {item.ingredients?.map((item, index) => {
                return (
                  <li key={index}>
                    <p className="italic font-light">- {item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-around">
            <UpdateMenu item={item} />
            <ButtonFill>Eliminar</ButtonFill>
          </div>
        </div>
      </article>
    </section>
  );
};

export default FoodCardOpen;
