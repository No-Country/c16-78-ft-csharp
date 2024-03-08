import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import useFetch from "../hooks/useFetch";

function AddIngredient({ handleAddIngredients, recipeIngredients }) {
  const defaultIngredient = {
    ingredientId: "0",
    ingredientQuantity: "",
  };

  const [ingredients, setIngredients] = useState([defaultIngredient]);

  // Fetch de los ingredientes
  const url = "https://www.saboresdelhogar.somee.com/Api/ingredient";
  const { data: ingredientsData, loading, error } = useFetch(url);

  useEffect(() => {
    if (recipeIngredients?.length > 0) {
      setIngredients(recipeIngredients);
    }
  }, [recipeIngredients]);

  const handleInputChange = (index, key, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = { ...newIngredients[index], [key]: value };
    setIngredients(newIngredients);
  };

  const handleAddRow = (e) => {
    e.preventDefault();
    const lastIngredient = ingredients[ingredients.length - 1];
    if (
      lastIngredient.ingredientId !== "" &&
      lastIngredient.ingredientQuantity !== ""
    ) {
      setIngredients([...ingredients, { ...defaultIngredient }]);
    }
  };

  const handleDeleteRow = (e, index) => {
    e.preventDefault();
    if (index !== 0) {
      const newIngredients = [...ingredients];
      console.log("Deleting Row: ", newIngredients[index]);
      newIngredients.splice(index, 1);
      setIngredients(newIngredients);
    }
  };

  return (
    <div
      className="px-2 py-1 rounded-lg bg-gray-100 w-11/12 text-sm sm:text-base mx-auto h-[450px] overflow-y-auto"
      onMouseLeave={(event) => {
        event.stopPropagation();
        event.preventDefault();
        handleAddIngredients(event, ingredients);
      }}
    >
      <div className="flex justify-center gap-4 items-center mb-2">
        <p>Selecciona los ingredientes</p>
        <button
          className="hover:text-primary duration-150 ease-in-out"
          onClick={handleAddRow}
        >
          <FaPlus />
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="w-1/4 text-center">Ingrediente</th>
            <th className="w-1/4 text-center">Cantidad</th>
            <th className="w-1/4 text-center">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <tr key={index}>
              <td className="w-1/4 text-center">
                <select
                  value={ingredient?.ingredientId}
                  onChange={(e) =>
                    handleInputChange(index, "ingredientId", e.target.value)
                  }
                  className="pl-1"
                >
                  {ingredientsData?.data?.map((ingredientData) => (
                    <option key={ingredientData.id} value={ingredientData.id}>
                      {ingredientData.name}
                    </option>
                  ))}
                </select>
              </td>
              <td className="w-1/4 text-center">
                <input
                  type="text"
                  value={ingredient.ingredientQuantity}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "ingredientQuantity",
                      e.target.value
                    )
                  }
                  className="pl-1"
                />
              </td>
              <td className="w-1/4 text-center">
                {index !== 0 && (
                  <button
                    type="button"
                    className="hover:text-primary duration-150 ease-in-out"
                    onClick={(e) => handleDeleteRow(e, index)}
                  >
                    <FaTrash />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddIngredient;
