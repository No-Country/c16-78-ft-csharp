import ButtonFill from "./ButtonFill";

const DeleteMenu = ({ item, setInformationSlice, closeCard }) => {

    function handleDeleteMenu(item) {
        setInformationSlice((prev) =>
            prev.filter((menu) => menu.foodId !== item.foodId)
        );
        closeCard();
        console.log('borre el elemento con el id:', item.foodId);
    }

    return (
        <>
            <ButtonFill onClick={() => handleDeleteMenu(item)}>Eliminar</ButtonFill>
        </>
    )
}

export default DeleteMenu;