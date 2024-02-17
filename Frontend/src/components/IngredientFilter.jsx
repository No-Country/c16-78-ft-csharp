import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const IngredientFilter = () => {

    const [ingredients, setIngredients] = useState([1, 2]);
    return (
        <div className="w-10/12 m-auto relative my-6">
            <div className="flex items-center gap-x-5 mb-3">
                <h2 className="flex-shrink-0">Agrega tus ingredientes para empezar</h2>
                <div className="flex w-full bg-gray-100 px-2 rounded-lg">
                    <FaSearch className="self-center" />
                    <input className="flex-grow bg-gray-100 px-2" type="text" placeholder="Frutas, verduras, lacteos, proteinas..." />
                </div>
            </div>
            <ul className="flex gap-x-5 mb-3">
                {ingredients.map((ingredient, index) => (
                    <li className="flex bg-gray-100 px-2 rounded-lg gap-x-3" key={index}><RxCross2 className="self-center" />{ingredient}</li>
                ))}
            </ul>
            <button className="absolute right-0">Eliminar todos los ingredientes</button>
        </div>
    )
}
export default IngredientFilter;