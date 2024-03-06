import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

function AddIngredient({ handleAddIngredients, recipeIngredients }) {
  const defaultIngredient = {
    ingredientName: "",
    isMain: false,
    ingredientQuantity: "",
  };

  const [ingredients, setIngredients] = useState([defaultIngredient]);

  useEffect(() => {
    if (recipeIngredients?.length > 0) {
      setIngredients(recipeIngredients);
    }
  }, [recipeIngredients]);

  const handleInputChange = (index, key, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][key] = value;
    setIngredients(newIngredients);
  };

  const handleAddRow = (e) => {
    e.preventDefault();
    const lastIngredient = ingredients[ingredients.length - 1];
    if (
      lastIngredient.ingredientName !== "" &&
      lastIngredient.ingredientQuantity !== ""
    ) {
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        { ...defaultIngredient },
      ]);
    }
  };

  const handleDeleteRow = (e, index) => {
    e.preventDefault();
    if (index !== 0) {
      setIngredients((prevIngredients) =>
        prevIngredients.filter((_, i) => i !== index)
      );
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
            <th className="w-1/4 text-center">Principal</th>
            <th className="w-1/4 text-center">Ingrediente</th>
            <th className="w-1/4 text-center">Cantidad</th>
            <th className="w-1/4 text-center">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <tr key={index}>
              <td className="w-1/4 text-center">
                <input
                  type="checkbox"
                  checked={ingredient.isMain}
                  onChange={(e) =>
                    handleInputChange(index, "isMain", e.target.checked)
                  }
                />
              </td>
              <td className="w-1/4 text-center">
                <input
                  type="text"
                  value={ingredient.ingredientName}
                  onChange={(e) =>
                    handleInputChange(index, "ingredientName", e.target.value)
                  }
                  className="pl-1"
                />
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
      {/* <div className="w-full flex justify-center">
        <button
          className="mt-4"
          onClick={(event) => {
            handleAddIngredients(event, ingredients);
          }}
        >
          Aceptar cambios
        </button>
      </div> */}
    </div>
  );
}

export default AddIngredient;
