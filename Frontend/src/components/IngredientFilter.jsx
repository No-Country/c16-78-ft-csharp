import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const IngredientFilter = () => {

    const [ingredients, setIngredients] = useState([]);

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
        <div className="relative py-6 lg:w-1/3 px-8 lg:bg-gray-100 lg:h-screen">
            <div className="flex lg:flex-col items-center gap-x-5 gap-y-5 mb-5">
                <h2 className="flex-shrink-0">Agrega tus ingredientes para empezar</h2>
                <div className="flex w-full bg-gray-100 lg:bg-white px-2 rounded-lg">
                    <FaSearch className="self-center" />
                    <input className="flex-grow bg-gray-100 lg:bg-white px-2" type="text" placeholder="Frutas, verduras, lacteos, proteinas..." onKeyPress={handleEnterPress} />
                </div>
            </div>
            <ul className="flex flex-wrap gap-x-3 gap-y-3 mb-5">
                {ingredients.map((ingredient, index) => (
                    <li className="flex bg-gray-100 lg:bg-white px-2 rounded-lg gap-x-3" key={index}><RxCross2 className="self-center" onClick={handleDeleteIngredient} />{ingredient}</li>
                ))}
            </ul>
            <button className="absolute right-8 lg:right-auto" onClick={handleDeleteArray}>Eliminar todos los ingredientes</button>
        </div>
    )
}
export default IngredientFilter;