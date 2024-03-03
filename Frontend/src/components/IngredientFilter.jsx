import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import ButtonFill from "./ButtonFill";
import AddMenu from "./AddMenu";

const IngredientFilter = () => {

    const [ingredients, setIngredients] = useState([]);
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

    function handleEnterPress(e) {
        if (e.key === 'Enter' && e.target.value.trim() !== "") {
            setIngredients([...ingredients, e.target.value]);
            e.target.value = "";
        }
    }

    function handleDeleteArray() {
        setIngredients([]);
    }

    function handleDeleteIngredient(e) {
        const ingredientToDelete = e.target.parentElement.textContent.trim();
        setIngredients(ingredients.filter(ingredient => ingredient !== ingredientToDelete));
    }


    return (
        <>
            <div className="py-6 lg:w-1/3 px-8 bg-white lg:bg-gray-100 lg:h-screen lg:sticky lg:top-0 rounded-t-3xl lg:rounded-tr-none">
                <div className="flex flex-col md:flex-row lg:flex-col items-center gap-x-5 gap-y-5 mb-5">
                    <h2 className="flex-shrink-0 text-sm md:text-base font-semibold lg:font-bold">Agrega tus ingredientes para empezar</h2>
                    <div className="flex w-full bg-gray-100 lg:bg-white px-2 py-1 md:py-2 rounded-lg">
                        <FaSearch className="self-center" />
                        <input className="flex-grow bg-gray-100 lg:bg-white px-2 focus:outline-none text-sm md:text-base" type="text" placeholder="Frutas, verduras, lacteos, proteinas..." onKeyPress={handleEnterPress} />
                    </div>
                </div>
                <ul className="flex flex-wrap gap-x-3 gap-y-3 mb-5">
                    {ingredients.map((ingredient, index) => (
                        <li className="flex bg-gray-100 lg:bg-white px-2 rounded-lg gap-x-3 py-1 md:py-2 text-sm md:text-base" key={index}><RxCross2 className="self-center" onClick={handleDeleteIngredient} />{ingredient}</li>
                    ))}
                </ul>
                <ButtonFill type="buttom" addClass="absolute right-8 lg:right-auto text-sm md:text-base" onClick={handleDeleteArray}>Eliminar todos los ingredientes</ButtonFill>
                <AddMenu />
            </div >
            {showAddMenuPopup && <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                <form onSubmit={handleSubmit} className="w-8/12 h-4/6 bg-white absolute rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-4">
                    <button className="bg-gray-100 px-2 py-1 rounded-lg  absolute right-0" onClick={() => {
                        setShowAddMenuPopup(false);
                        setFormData({
                            name: "",
                            description: "",
                            cookMethodName: "",
                            recipeIngredients: "",
                            portion: "",
                            imgUrl: "",
                            minutes: ""
                        })
                    }}>Cerrar</button>
                    <h2 className="text-center text-xl font-bold mt-4">Agrega tu propio menu</h2>
                    <input className="px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto"
                        placeholder="Escribe el nombre del menu"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        minLength={2}
                        required />
                    <textarea className="h-1/2 px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto" placeholder="Descripción breve del menu" onChange={(e) => setFormData({ ...formData, description: e.target.value })} minLength={2} required></textarea>
                    <input className="px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto" placeholder="Metodo de cocción del menu" onChange={(e) => setFormData({ ...formData, cookMethodName: e.target.value })} minLength={2} required />
                    <textarea className="h-1/2 px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto" placeholder="Escribe los ingredientes separados por comas" onBlur={handleIngredientChange} minLength={2} required></textarea>
                    <input className="px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto" placeholder="Total de calorias" onChange={(e) => setFormData({ ...formData, portion: e.target.value })} minLength={2} required />
                    <input className="px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto" placeholder="Tiempo" onChange={(e) => setFormData({ ...formData, minutes: e.target.value })} minLength={1} required />
                    <input className="px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto"
                        placeholder="Escribe la url de la imagen"
                        onBlur={handleUrlChange}
                        onChange={(e) => setFormData({ ...formData, imgUrl: e.target.value })}
                        minLength={2}
                        required />
                    <ButtonFill type="buttom" addClass="mx-auto mb-4">Agregar</ButtonFill>
                </form>
            </div >}
        </>

    )
}

export default IngredientFilter;