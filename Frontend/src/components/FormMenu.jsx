import ButtonFill from "./ButtonFill";

const Form = ({ showAddMenuPopup, setShowAddMenuPopup, formData, setFormData, handleIngredientChange, handleUrlChange, handleSubmit }) => {

    return (
        <>
            {showAddMenuPopup && <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                <form onSubmit={handleSubmit} className="w-10/12 h-5/6 md:w-8/12 md:h-4/6 bg-white absolute rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-4">
                    <button className="bg-gray-100 px-2 py-1 rounded-lg  absolute right-0" onClick={() => {
                        setFormData({
                            nombre: "",
                            descripción: "",
                            cocción: "",
                            ingredientes: "",
                            calorias: "",
                            imagen: ""
                        })
                        setShowAddMenuPopup(false);
                    }}>Cerrar</button>
                    <h2 className="text-center text-base md:text-xl font-bold mt-4">{formData.nombre === "" ? "Agrega tu propio menu" : "Actualiza el menu"}</h2>
                    <input className="px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto text-sm sm:text-base"
                        placeholder="Escribe el nombre del menu"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        minLength={2}
                        required />
                    <textarea className="h-1/2 px-2 py-1 rounded-lg bg-gray-100 w-11/12 text-sm sm:text-base mx-auto" placeholder="Descripción breve del menu" value={formData.descripción} onChange={(e) => setFormData({ ...formData, descripción: e.target.value })} minLength={2} required></textarea>
                    <input className="px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto text-sm sm:text-base" placeholder="Metodo de cocción del menu" onChange={(e) => setFormData({ ...formData, cocción: e.target.value })} minLength={2} required />
                    <textarea className="h-1/2 px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto text-sm sm:text-base" placeholder="Escribe los ingredientes separados por comas" value={formData.ingredientes} onChange={handleIngredientChange} minLength={2} required></textarea>
                    <input className="px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto text-sm sm:text-base" placeholder="Total de calorias" onChange={(e) => setFormData({ ...formData, calorias: e.target.value })} minLength={2} required />
                    <input className="px-2 py-1 rounded-lg bg-gray-100 w-11/12 mx-auto text-sm sm:text-base"
                        placeholder="Escribe la url de la imagen"
                        value={formData.imagen || ""}
                        onBlur={handleUrlChange}
                        onChange={(e) => setFormData({ ...formData, imagen: e.target.value })}
                        minLength={2}
                        required />
                    <ButtonFill type="buttom" addClass="mx-auto mb-4">{formData.nombre === "" ? "Agregar" : "Actualizar"}</ButtonFill>
                </form>
            </div >}
        </>
    )
}

export default Form;

