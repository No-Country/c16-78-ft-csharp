import ButtonFill from "./ButtonFill";
import { TfiClose } from "react-icons/tfi";
import AddIngredient from "./AddIngredient";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Form = ({
  showAddMenuPopup,
  setShowAddMenuPopup,
  formData,
  setFormData,
  handleIngredientChange,
  handleUrlChange,
  handleSubmit,
  text,
}) => {
  const [cookMethods, setCookMethods] = useState([]);

  const url = "https://www.saboresdelhogar.somee.com/Api/CookMethod";
  const { data, isLoading, error } = useFetch(url);

  useEffect(() => {
    setCookMethods(data);
  }, [data]);

  const handleAddIngredients = (e, ingredients) => {
    e.preventDefault();

    if (ingredients[0].ingredientQuantity === "") {
      console.log("Ingresa al menos un ingrediente");
    } else {
      setFormData((prev) => ({
        ...prev,
        recipeIngredients: ingredients,
      }));
    }
  };

  return (
    <>
      {showAddMenuPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <form
            onSubmit={handleSubmit}
            className="w-10/12 h-5/6 md:w-8/12 bg-white absolute rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-4"
          >
            <button
              className=" px-2 py-1 rounded-lg  absolute right-0"
              onClick={() => {
                setFormData({
                  name: "",
                  description: "",
                  cookMethodId: "",
                  recipeIngredients: "",
                  portion: "",
                  imgUrl: "",
                  cookingMinutes: "",
                });
                setShowAddMenuPopup(false);
                document.body.style.overflow = "auto";
              }}
            >
              <TfiClose />
            </button>
            <h2 className="text-center text-base md:text-xl font-bold mt-4">
              {text === "agregar"
                ? "Agrega tu propio menu"
                : "Actualiza el menu"}
            </h2>
            <input
              className="px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto text-sm sm:text-base"
              placeholder="Escribe el  del menu"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              minLength={2}
              required
            />
            <textarea
              className="h-1/2 px-2 py-1 rounded-lg bg-gray-100 w-11/12 text-sm sm:text-base mx-auto"
              placeholder="Descripción breve del menu"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              minLength={2}
              required
            ></textarea>
            <select
              className="px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto text-sm sm:text-base"
              value={formData.cookMethodId}
              onChange={(e) =>
                setFormData({ ...formData, cookMethodId: e.target.value })
              }
              required
            >
              <option value="">Selecciona un método de cocción</option>
              {cookMethods?.data.map((method) => (
                <option key={method.id} value={method.id}>
                  {method.name}
                </option>
              ))}
            </select>
            <AddIngredient
              handleAddIngredients={handleAddIngredients}
              recipeIngredients={formData.recipeIngredients}
            />
            <input
              className="px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto text-sm sm:text-base"
              placeholder="Porciones"
              value={formData.portion}
              onChange={(e) =>
                setFormData({ ...formData, portion: e.target.value })
              }
              minLength={1}
              required
            />
            <input
              className="px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto text-sm sm:text-base"
              placeholder="Tiempo en minutos"
              value={formData.cookingMinutes}
              onChange={(e) =>
                setFormData({ ...formData, cookingMinutes: e.target.value })
              }
              required
            />
            <input
              className="px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto text-sm sm:text-base"
              placeholder="Escribe la url de la imagen"
              value={formData.imgUrl || ""}
              onBlur={handleUrlChange}
              onChange={(e) =>
                setFormData({ ...formData, imgUrl: e.target.value })
              }
              minLength={2}
              required
            />
            <ButtonFill type="button" addClass="mx-auto mb-4">
              {text === "agregar" ? "Agregar" : "Actualizar"}
            </ButtonFill>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
