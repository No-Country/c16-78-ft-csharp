import { useState } from "react";
import ButtonFill from "./ButtonFill";
import FormMenu from "./FormMenu";

const AddMenu = ({ handleAddMenu }) => {
  const url = "https://www.saboresdelhogar.somee.com/Api/recipe";
  const [showAddMenuPopup, setShowAddMenuPopup] = useState(false);
  const [text, setText] = useState("agregar");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cookMethodId: "",
    recipeIngredients: [],
    portion: "",
    imgUrl: "",
    cookingMinutes: "",
  });

  function handleOpenAddMenuPopup() {
    setShowAddMenuPopup(true);
    document.body.style.overflow = "hidden";
  }

  function handleUrlChange(e) {
    const urlInput = e.target.value;
    const isValidUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(urlInput);
    if (!isValidUrl) {
      alert("Ingresa una URL válida que comience con 'http://' o 'https://'.");
      return;
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
    const parsedCookMethodId = parseInt(cookMethodId, 10);
    const isValidUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(
      formData.imgUrl
    );
    if (!isValidUrl) {
      alert("Ingresa una URL válida que comience con 'http://' o 'https://'.");
      return;
    }

    const updatedFormData = { ...formData, cookMethodId: parsedCookMethodId };
    apiCallPost(updatedFormData);
    handleAddMenu(updatedFormData);

    setFormData({
      name: "",
      description: "",
      cookMethodId: "",
      recipeIngredients: [],
      portion: "",
      imgUrl: "",
    });
    setShowAddMenuPopup(false);
    document.body.style.overflow = "auto";
  }

  const apiCallPost = async (newItem) => {
    newItem.id = 0;
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      };
      const res = await fetch(`${url}`, requestOptions);
      const data = await res.json();
      console.log(data);
      return;
    } catch (error) {
      console.error(error);
      throw new Error("Error al realizar la solicitud POST");
    }
  };

  return (
    <>
      <ButtonFill
        addClass="mt-20 lg:absolute lg:mt-0 lg:bottom-4"
        onClick={handleOpenAddMenuPopup}
      >
        Agregar tu propio menu
      </ButtonFill>
      <FormMenu
        showAddMenuPopup={showAddMenuPopup}
        setShowAddMenuPopup={setShowAddMenuPopup}
        formData={formData}
        setFormData={setFormData}
        // handleIngredientChange={handleIngredientChange}
        handleUrlChange={handleUrlChange}
        handleSubmit={handleSubmit}
        text={text}
      />
    </>
  );
};

export default AddMenu;
