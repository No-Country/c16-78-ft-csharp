import ButtonFill from "./ButtonFill";

const DeleteMenu = ({ item, handleDeleteMenu }) => {

    return (
        <>
            <ButtonFill onClick={() => handleDeleteMenu(item.id)}>Eliminar</ButtonFill>
        </>
    )
}

export default DeleteMenu;