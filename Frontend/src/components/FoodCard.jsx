import React from "react";
import ButtonFill from "./ButtonFill";

const FoodCard = ({ imageSrc, title, description, time }) => {
  return (
    <article className="text-textColor max-w-80 bg-white border border-textHint rounded-3xl overflow-hidden xl:flex xl:max-w-full">
      <figure className="w-full h-48 overflow-hidden flex items-center xl:w-64 xl:h-36 xl:rounded-3xl">
        <img src={imageSrc} alt={title} />
      </figure>
      <div className="p-4 w-full">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-2xl">{title}</h3>
          <p className="text-textHint text-base">{time}</p>
        </div>
        <p className="text-base font-normal overflow-hidden whitespace-nowrap overflow-ellipsis pb-2">
          {description}
        </p>
        <ButtonFill url="https://www.google.com">Revisar Platillo</ButtonFill>
      </div>
    </article>
  );
};

export default FoodCard;
