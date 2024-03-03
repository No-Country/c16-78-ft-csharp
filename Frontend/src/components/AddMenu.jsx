import { useState } from "react";
import ButtonFill from "./ButtonFill";
import FormMenu from "./FormMenu";

const AddMenu = () => {

    const [showAddMenuPopup, setShowAddMenuPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        cookMethodName: "",
        recipeIngredients: "",
        portion: "",
        imgUrl: "",
        minutes: ""
    })

    function handleOpenAddMenuPopup() {
        setShowAddMenuPopup(true);
    }

    function handleIngredientChange(e) {
        const ingredientInput = e.target.value;
        const isValid = /^[^,]+(, [^,]+)*$/.test(ingredientInput);

        if (isValid) {
            setFormData({ ...formData, recipeIngredients: ingredientInput });
        } else {
            setFormData({ ...formData, recipeIngredients: ingredientInput });
            alert("Ingresa los ingredientes separados por coma y espacio.");
        }
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
        e.preventDefault()
        const { name, description, cookMethodName, recipeIngredients, portion, imgUrl, minutes } = formData;
        if (!name.trim() || !description.trim() || !cookMethodName.trim() || recipeIngredients || !portion.trim() || !imgUrl.trim() || !minutes.trim()) {
            alert("Completa todos los campos antes de enviar el formulario.");
            return;
        }
        const ingredientsValid = /^[^,]+(, [^,]+)*$/.test(formData.recipeIngredients);

        if (!ingredientsValid) {
            alert("Ingresa los ingredientes separados por coma y espacio correctamente.");
            e.target.recipeIngredients.focus();
            return;
        }

        setShowAddMenuPopup(false)
        console.log(formData)
        setFormData({
            name: "",
            description: "",
            cookMethodName: "",
            recipeIngredients: "",
            portion: "",
            imgUrl: ""

        })
    }

    return (
        <>
            <ButtonFill addClass="mt-20 lg:absolute lg:bottom-24" onClick={handleOpenAddMenuPopup}>Agregar tu propio menu</ButtonFill>
            <FormMenu showAddMenuPopup={showAddMenuPopup}
                setShowAddMenuPopup={setShowAddMenuPopup}
                formData={formData}
                setFormData={setFormData}
                handleIngredientChange={handleIngredientChange}
                handleUrlChange={handleUrlChange}
                handleSubmit={handleSubmit} />
        </>
    );
}

export default AddMenu;