import { useState } from "react";
import ButtonFill from "./ButtonFill";
import FormMenu from "./FormMenu";

const AddMenu = () => {

    const [showAddMenuPopup, setShowAddMenuPopup] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        descripción: "",
        cocción: "",
        ingredientes: "",
        calorias: "",
        imagen: ""
    })

    function handleOpenAddMenuPopup() {
        setShowAddMenuPopup(true);
    }

    function handleIngredientChange(e) {
        const ingredientInput = e.target.value;
        const isValid = /^[^,]+(, [^,]+)*$/.test(ingredientInput);

        if (isValid) {
            setFormData({ ...formData, ingredientes: ingredientInput });
        } else {
            setFormData({ ...formData, ingredientes: ingredientInput });
            alert("Ingresa los ingredientes separados por coma y espacio.");
        }
    }

    function handleUrlChange(e) {
        const urlInput = e.target.value;
        const isValidUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(urlInput);

        if (isValidUrl) {
            setFormData({ ...formData, imagen: urlInput });
        } else {
            setFormData({ ...formData, imagen: urlInput });
            alert("Ingresa una URL válida que comience con 'http://' o 'https://'.");
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        const { nombre, descripción, cocción, ingredientes, calorias, imagen } = formData;
        if (!nombre.trim() || !descripción.trim() || !cocción.trim() || ingredientes || !calorias.trim() || !imagen.trim()) {
            alert("Completa todos los campos antes de enviar el formulario.");
            return;
        }
        const ingredientsValid = /^[^,]+(, [^,]+)*$/.test(formData.ingredientes);

        if (!ingredientsValid) {
            alert("Ingresa los ingredientes separados por coma y espacio correctamente.");
            e.target.ingredientes.focus();
            return;
        }

        setShowAddMenuPopup(false)
        console.log(formData)
        setFormData({
            nombre: "",
            descripción: "",
            cocción: "",
            ingredientes: "",
            calorias: "",
            imagen: ""

        })
    }

    return (
        <>
            <ButtonFill addClass="absolute bottom-24" onClick={handleOpenAddMenuPopup}>Agregar tu propio menu</ButtonFill>
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