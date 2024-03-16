import { useEffect, useState } from "react";
import ButtonFill from "./ButtonFill";
import FormMenu from "./FormMenu";
import useFetch from "../hooks/useFetch";

const UpdateMenu = ({ item, apiCallUpdate }) => {
  // Fetch de los ingredientes
  const url = "https://www.saboresdelhogar.somee.com/Api/ingredient";
  const {
    data: ingredientsData,
    loading: loadingIngredients,
    error: errorIngredients,
  } = useFetch(url);
  //Fetch de los cookmethods
  const url2 = "https://www.saboresdelhogar.somee.com/Api/CookMethod";
  const {
    data: cookData,
    isLoading: loadingCook,
    error: errorCook,
  } = useFetch(url2);

  const [showAddMenuPopup, setShowAddMenuPopup] = useState(false);
  const [text, setText] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cookMethodId: "",
    recipeIngredients: [],
    portion: "",
    imgUrl: "",
    cookingMinutes: "",
    id: "",
  });

  useEffect(() => {
    if (cookData.data && cookData.data.length > 0) {
      const cookingFull = cookData.data.filter(
        (cookMethod) => cookMethod.name === item.cookMethodName && cookMethod.id
      );

      const ingredientsId = item.recipeIngredients?.map((ingredient) => {
        const foundIngredient = ingredientsData.data?.find(
          (item) => item.name === ingredient.ingredientName
        );
        return {
          ...ingredient,
          ingredientId: foundIngredient ? foundIngredient.id : null,
        };
      });

      setFormData((prevData) => ({
        ...prevData,
        name: item.name,
        description: item.description,
        cookMethodId: cookingFull[0]?.id || "",
        recipeIngredients: ingredientsId || [],
        portion: item.portion,
        imgUrl: item.imgUrl || "",
        cookingMinutes: item.cookingMinutes,
        id: item.id,
      }));
    }
  }, [showAddMenuPopup, ingredientsData, cookData, item]);

  function handleOpenAddMenuPopup() {
    setShowAddMenuPopup(true);
    document.body.style.overflow = "hidden";
  }

  function handleUrlChange(e) {
    const urlInput = e.target.value;
    const isValidUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(urlInput);

    if (isValidUrl) {
      setFormData({ ...formData, imgUrl: urlInput });
    } else {
      setFormData({ ...formData, imgUrl: urlInput });
      alert("Ingresa una URL válida que comience con 'http://' o 'https://'.");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const {
      name,
      description,
      cookMethodId,
      recipeIngredients,
      portion,
      imgUrl,
      cookingMinutes,
      id,
    } = formData;
    if (
      !name.trim() ||
      !description.trim() ||
      recipeIngredients === "" ||
      !portion ||
      !imgUrl.trim() ||
      !cookingMinutes
    ) {
      alert("Completa todos los campos antes de enviar el formulario.");
      return;
    }

    const isValidUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(
      formData.imgUrl
    );
    if (!isValidUrl) {
      alert("Ingresa una URL válida que comience con 'http://' o 'https://'.");
      return;
    }
    apiCallUpdate(formData);
    setFormData({
      name: "",
      description: "",
      cookMethodId: "",
      recipeIngredients: [],
      portion: "",
      imgUrl: "",
      cookingMinutes: "",
      id: "",
    });
    setShowAddMenuPopup(false);
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <ButtonFill onClick={handleOpenAddMenuPopup}>Actualizar</ButtonFill>
      <FormMenu
        showAddMenuPopup={showAddMenuPopup}
        setShowAddMenuPopup={setShowAddMenuPopup}
        formData={formData}
        setFormData={setFormData}
        // handleIngredientChange={handleIngredientChange}
        handleUrlChange={handleUrlChange}
        handleSubmit={handleSubmit}
        item={item}
        text={text}
        apiCallUpdate={apiCallUpdate}
      />
    </>
  );
};

export default UpdateMenu;
