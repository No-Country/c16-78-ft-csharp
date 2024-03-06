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
    minutes: "",
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
      minutes: item.minutes,
      id: item.id,
    });
  }, [showAddMenuPopup]);

  function handleOpenAddMenuPopup() {
    setShowAddMenuPopup(true);
    document.body.style.overflow = "hidden";
  }

  // function handleIngredientChange(e) {
  //     const ingredientInput = e.target.value;
  //     if (ingredientInput) {
  //         setFormData({ ...formData, recipeIngredients: ingredientInput });
  //     } else {
  //         setFormData({ ...formData, recipeIngredients: ingredientInput });
  //         alert("Ingresa los ingredientes separados por coma y espacio.");
  //     }
  // }

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
      minutes,
      id,
    } = formData;
    if (
      !name.trim() ||
      !description.trim() ||
      !cookMethodName.trim() ||
      recipeIngredients === "" ||
      !portion ||
      !imgUrl.trim() ||
      !minutes.trim()
    ) {
      alert("Completa todos los campos antes de enviar el formulario.");
      return;
    }
    // const ingredientsValid = /^[^,]+(, [^,]+)*$/.test(formData.recipeIngredients);
    // console.log(formData.recipeIngredients)
    // if (!ingredientsValid) {
    //     alert("Ingresa los ingredientes separados por coma y espacio correctamente.");
    //     e.target.recipeIngredients.focus();
    //     return;
    // }
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
      minutes: "",
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
