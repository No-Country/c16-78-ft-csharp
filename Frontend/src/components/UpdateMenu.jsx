import { useEffect, useState } from "react";
import ButtonFill from "./ButtonFill";
import FormMenu from "./FormMenu";

const UpdateMenu = ({ item, handleUpdateMenu }) => {
  const [showAddMenuPopup, setShowAddMenuPopup] = useState(false);
  const [text, setText] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cookMethodName: "",
    recipeIngredients: [],
    portion: "",
    imgUrl: "",
    cookingMinutes: "",
    id: "",
  });

  useEffect(() => {
    setFormData({
      name: item.name,
      description: item.description,
      cookMethodName: item.cookMethodName,
      recipeIngredients: item.recipeIngredients,
      portion: item.portion,
      imgUrl: item.imgUrl || "",
      cookingMinutes: item.cookingMinutes,
      id: item.id,
    });
  }, [showAddMenuPopup]);

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
      cookMethodName,
      recipeIngredients,
      portion,
      imgUrl,
      cookingMinutes,
      id,
    } = formData;
    if (
      !name.trim() ||
      !description.trim() ||
      !cookMethodName.trim() ||
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
    handleUpdateMenu(formData);
    setFormData({
      name: "",
      description: "",
      cookMethodName: "",
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
      />
    </>
  );
};

export default UpdateMenu;
