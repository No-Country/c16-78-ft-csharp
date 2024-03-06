import React from "react";
import FoodSection from "./FoodSection";
import IngredientFilter from "./IngredientFilter";
import ImageExample from "../assets/platillo-ejemplo.png";

const FoodController = ({ children }) => {
  const foods = ["papa", "lechuga", "Carne-res", "tomate", "aguacate"];

  const information = [
    {
      id: 3,
      imgUrl: ImageExample,
      name: "Ensalada",
      description: "Lavar las verduras, cortarlas y condimentar a gusto",
      cookMethodName: "No requiere cocción",
      portion: 1,
      minutes: "15 - 20 min",
      recipeIngredients: [
        {
          ingredientName: "Tomate",
          isMain: true,
          ingredientQuantity: "1",
        },
        {
          ingredientName: "Aceite de oliva",
          isMain: false,
          ingredientQuantity: "A gusto",
        },
        {
          ingredientName: "Lechuga",
          isMain: true,
          ingredientQuantity: "450gr",
        },
        {
          ingredientName: "Sal",
          isMain: false,
          ingredientQuantity: "A gusto",
        },
        {
          ingredientName: "Pimienta",
          isMain: false,
          ingredientQuantity: "A gusto",
        },
      ],
    },
  ];

  return (
    <section
      id="cooking-section"
      className="lg:w-full mx-auto lg:flex lg:flex-row"
    >
      <IngredientFilter foods={foods} />
      <FoodSection information={information} />
    </section>
  );
};

export default FoodController;
