import React, { useState, useEffect } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import Toster from "../assets/cooking-icons/toaster.png";
import UpdateMenu from "./UpdateMenu";
import ButtonFill from "./ButtonFill";
import DeleteMenu from "./DeleteMenu";

const FoodCardOpen = ({
  item,
  cardOpen,
  closeCard,
  setInformationSlice,
  handleDeleteMenu,
  apiCallDelete,
  apiCallUpdate,
}) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <section
      className={`fixed top-0 left-0 lg:p-4 w-full h-svh overflow-scroll xsm:h-full xsm:justify-center xsm:items-center bg-background-modal ${cardOpen ? "flex" : "hidden"
        }`}
    >
      <article className="bg-white w-full h-svh lg:h-auto overflow-scroll flex flex-col max-w-screen-xl lg:flex-row lg:m-4 lg:rounded-3xl lg:overflow-hidden">
        <figure className="relative h-56 xsm:h-64 sm:h-80 md:h-96 lg:h-[32rem] lg:w-[32rem]">
          <img
            className="h-full w-full object-cover lg:rounded-3xl"
            src={item.imgUrl}
            alt={item.name}
          />
          <button
            className="text-2xl xsm:text-3xl absolute top-2 xsm:top-4 left-2 xsm:left-4 text-black bg-slate-100 p-1 rounded-md hover:text-red-500 ease-in-out transition-all"
            onClick={closeCard}
          >
            <TfiClose />
          </button>
          <button
            className={`text-2xl xsm:text-4xl absolute top-1 xsm:top-4 right-1 xsm:right-4 text-black bg-slate-100 p-1 rounded-md ${favorite ? "text-red-600" : "text-black"
              }  hover:text-red-400 ease-in-out transition-all`}
            onClick={() => {
              setFavorite((prev) => !prev);
            }}
          >
            {favorite ? <MdFavorite /> : <MdFavoriteBorder />}
          </button>
        </figure>
        <div className="flex flex-col p-4 md:h-auto flex-1 lg:h-128">
          <header className="flex justify-between lg:items-center">
            <div className="lg:flex justify-center items-center">
              <h3 className="font-semibold text-3xl">{item.name}</h3>
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
                  <IoStar />
                </li>
                <li>
                  <IoStarHalf />
                </li>
              </ul>
            </div>
            <time className="text-textHint text-base ml-2">
              {item.cookingMinutes}
            </time>
          </header>
          <div className="flex flex-col lg:pb-0 flex-1 justify-start">
            <p className="text-base font-light xsm:line-clamp-2 xl:line-clamp-none">
              {item.description}
            </p>
            <span className="h-0.5 bg-textHint mt-2"></span>
            <div className="flex flex-col pt-2">
              <p className="ml-2 text-lg italic">
                Método de coccion:{" "}
                <span className="font-bold">{item.cookMethodId}</span>
              </p>
              <p className="ml-2 text-lg italic">
                Porciones: <span className="font-bold">{item.portion}</span>
              </p>
            </div>
            <h4 className="text-2xl">Ingredientes</h4>
            {cardOpen && <Ingredients list={item.recipeIngredients} />}
          </div>
          <div className="flex justify-around">
            <UpdateMenu item={item} apiCallUpdate={apiCallUpdate} />
            <ButtonFill
              onClick={() => {
                apiCallDelete(item.id);
              }}
            >
              Delete
            </ButtonFill>

            {/* <DeleteMenu
              setInformationSlice={setInformationSlice}
              closeCard={closeCard}
              item={item}
              handleDeleteMenu={handleDeleteMenu}
            /> */}
          </div>
        </div>
      </article>
    </section>
  );
};

const Ingredients = ({ list }) => {
  const [primaries, setPrimaries] = useState([]);
  const [secondaries, setSecondaries] = useState([]);

  useEffect(() => {
    const primaries = list.filter((item) => item.isMain);
    const secondaries = list.filter((item) => !item.isMain);
    setPrimaries(primaries);
    setSecondaries(secondaries);
  }, []);

  return (
    <>
      <p className="text-lg">Principales</p>
      <ul className="flex flex-col max-h-32 lg:max-h-20 flex-wrap mb-4 italic">
        {primaries?.map((ingredient, index) => {
          return (
            <li key={index} className="pl-1">
              - <span>{ingredient.ingredientQuantity}</span>{" "}
              <span className="italic">{ingredient.ingredientName}</span>
            </li>
          );
        })}
      </ul>
      <p className="text-lg">Secundarios</p>
      <ul className="flex flex-col max-h-32 lg:max-h-20 flex-wrap mb-4 italic">
        {secondaries?.map((ingredient, index) => {
          return (
            <li key={index} className="pl-1">
              - <span>{ingredient.ingredientQuantity}</span>{" "}
              <span className="italic">{ingredient.ingredientName}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FoodCardOpen;
