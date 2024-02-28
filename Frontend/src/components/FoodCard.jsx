import React from "react";
import ButtonFill from "./ButtonFill";

const FoodCard = ({ item, openCard }) => {
  return (
    <article className=" text-textColor w-auto sm:w-72 bg-white border border-textHint rounded-3xl overflow-hidden lg:flex lg:w-auto">
      <figure className="w-full h-48 overflow-hidden flex items-center lg:w-64 lg:h-36 lg:rounded-3xl">
        <img
          className="w-full h-full object-cover"
          src={item.imageSrc}
          alt={item.title}
        />
      </figure>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-2xl">{item.title}</h3>
          <time className="text-textHint text-base">{item.time}</time>
        </div>
        <div className="w-full justify-start items-center overflow-hidden pb-4">
          <p className="text-base font-normal overflow-hidden whitespace-nowrap overflow-ellipsis lg:line-clamp-1 lg:whitespace-normal">
            {item.description}
          </p>
        </div>

        <ButtonFill
          onClick={() => {
            openCard(item);
          }}
          addClass="mt-auto"
        >
          Revisar Platillo
        </ButtonFill>
      </div>
    </article>
  );
};

export default FoodCard;
