import React, { useState, useEffect, useRef } from "react";
import FoodCard from "./FoodCard";
import Pager from "./Pager";
import FoodCardOpen from "./FoodCardOpen";
import { v4 as uuidv4 } from "uuid";
import useFetch from "../hooks/useFetch";

const FoodSection = ({
  ingredientsFilter,
  addMenu,
  handleUpdateMenu,
  updateMenu,
  handleDeleteMenu,
  deleteMenu,
}) => {
  //fetch
  const url = "http://www.saboresdelhogar.somee.com/Api/recipe";
  const { data, loading, error } = useFetch(url);
  const cookMethodsUrl = "https://www.saboresdelhogar.somee.com/Api/CookMethod";
  const {
    data: cookMethodsData,
    isLoading: cookMethodsLoading,
    error: cookMethodsError,
  } = useFetch(cookMethodsUrl);
  const title = useRef(null);
  const [cardOpen, setCardOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [disablePrevious, setDisablePrevious] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [informationSlice, setInformationSlice] = useState([]);
  const [informationLength, setInformationLength] = useState(0);
  const [information, setInformation] = useState([]);
  const [filteredInformationSlice, setFilteredInformationSlice] = useState([]);

  //Obtiene los datos para mostrar
  useEffect(() => {
    setInformation(data?.data || []);
  }, [data]);

  useEffect(() => {
    console.log("solucionar", addMenu);
    if (addMenu && Object.keys(addMenu).length > 0) {
      console.log("mierda", cookMethodsData);
      const selectedCookMethod = cookMethodsData.data.find(
        (method) => method.id === addMenu.cookMethodId
      );

      const formattedAddMenu = {
        id: 0,
        imgUrl: addMenu.imgUrl || "",
        name: addMenu.name || "",
        description: addMenu.description || "",
        cookMethodId: addMenu.cookMethodId || "",
        portion: addMenu.portion || "",
        cookingMinutes: addMenu.cookingMinutes || "",
        recipeIngredients: addMenu.recipeIngredients || [],
      };
      const formattedAddMenuFront = {
        id: 0,
        imgUrl: addMenu.imgUrl || "",
        name: addMenu.name || "",
        description: addMenu.description || "",
        cookMethodName: selectedCookMethod?.name || "",
        portion: addMenu.portion || "",
        cookingMinutes: addMenu.cookingMinutes || "",
        recipeIngredients: addMenu.recipeIngredients || [],
      };

      apiCallPost(formattedAddMenu);
      setInformation((prev) => [...prev, formattedAddMenuFront]);
    }
  }, [addMenu]);

  useEffect(() => {
    const filteredSlice = informationSlice.filter((item) => {
      const recipeIngredientNames = item.recipeIngredients?.map((ingredient) =>
        ingredient.ingredientName?.toLowerCase()
      );

      const ingredientsFilterLower = ingredientsFilter.map((ingredient) =>
        ingredient.toLowerCase()
      );

      return (
        ingredientsFilterLower.length === 0 ||
        ingredientsFilterLower.every((ingredient) =>
          recipeIngredientNames.includes(ingredient)
        )
      );
    });

    setFilteredInformationSlice(filteredSlice);
    setInformationLength(filteredSlice.length);
  }, [ingredientsFilter, informationSlice, addMenu, information, deleteMenu]);

  useEffect(() => {
    const numberOfInformationPages = Math.ceil(information.length / 20);
    setNumberOfPages(numberOfInformationPages);
  }, [information, addMenu, deleteMenu]);

  useEffect(() => {
    if (currentPage <= numberOfPages) {
      const indexLeft = (currentPage - 1) * 20;
      const indexRight = indexLeft + 20;
      const slice = information.slice(indexLeft, indexRight);
      setInformationSlice(slice);
    } else {
      const indexLeft = (currentPage - 1) * 20;
      const slice = information.slice(indexLeft);
      setInformationSlice(slice);
    }
    if (currentPage === 1) {
      setDisablePrevious(true);
      if (numberOfPages > 1) {
        setDisableNext(false);
      } else {
        setDisableNext(true);
      }
    } else if (currentPage > 1 && currentPage < numberOfPages) {
      setDisablePrevious(false);
      setDisableNext(false);
    } else {
      setDisableNext(true);
      setDisablePrevious(false);
    }
  }, [currentPage, numberOfPages, addMenu, information, deleteMenu]);

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
    scrollToTitle();
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
    scrollToTitle();
  };

  const setPage = (page) => {
    setCurrentPage(page);
    scrollToTitle();
  };

  const scrollToTitle = () => {
    title.current.scrollIntoView();
  };

  const openCard = (item) => {
    setCardOpen(true);
    setItemSelected(item);
    document.body.style.overflow = "hidden";
  };

  const closeCard = () => {
    setCardOpen(false);
    setItemSelected({});
    document.body.style.overflow = "auto";
  };

  const apiCallPost = async (formattedAddMenu) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedAddMenu),
      };
      const res = await fetch(`${url}`, requestOptions);
      const data = await res.json();
      console.log(data);
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const apiCallDelete = async (idForDelete) => {
    //Delete Backend
    try {
      const response = await fetch(
        `http://www.saboresdelhogar.somee.com/Api/recipe?id=${idForDelete}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log(`Elemento con ID ${idForDelete} eliminado exitosamente`);
      } else {
        console.error("Error al eliminar el elemento:", response.statusText);
      }
    } catch (error) {
      console.error("Error de red:", error);
      return;
    }

    //UpdDate FrontEnd

    const newElements = information?.filter(
      (element) => element.id !== idForDelete
    );
    setInformation(newElements);
    setCardOpen(false);
    document.body.style.overflow = "auto";
  };

  const apiCallUpdate = async (item) => {
    console.log(item);
    handleUpdateMenu(item);
    try {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      };
      const res = await fetch(
        `http://www.saboresdelhogar.somee.com/Api/recipe?id=${item.id}`,
        requestOptions
      );
      if (!res.ok) {
        throw new Error(`Error de red: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (updateMenu && Object.keys(updateMenu).length > 0) {
      const formattedUpdateMenu = {
        id: updateMenu.id || "",
        imgUrl: updateMenu.imgUrl || "",
        name: updateMenu.name || "",
        description: updateMenu.description || "",
        cookMethodId: updateMenu.cookMethodId || "",
        portion: updateMenu.portion || "",
        cookingMinutes: updateMenu.cookingMinutes || "",
        recipeIngredients: updateMenu.recipeIngredients || [],
      };
      console.log("update", formattedUpdateMenu);

      const updatedElements = information?.map((element) => {
        if (element.id === formattedUpdateMenu.id) {
          return formattedUpdateMenu;
        }
        return element;
      });

      setInformation(updatedElements);
      closeCard();
    }
  }, [updateMenu]);

  return (
    <section className="flex-1 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-start p-4 overflow-hidden lg:rounded-tr-3xl bg-white">
      <h1
        ref={title}
        className="text-base md:text-3xl text-center pb-4 font-medium lg:text-xl lg:text-start"
      >
        Puedes crear {informationLength} platillos
      </h1>
      <div className="flex flex-row flex-wrap gap-4 justify-center lg:flex-col lg:max-w-screen-xl w-full">
        {filteredInformationSlice.map((item, index) => (
          <FoodCard key={index + 1} item={item} openCard={openCard} />
        ))}
        <div className="w-full">
          <Pager
            numberOfPages={numberOfPages}
            currentPage={currentPage}
            disablePrevious={disablePrevious}
            disableNext={disableNext}
            prevPage={prevPage}
            nextPage={nextPage}
            setPage={setPage}
          />
        </div>
      </div>
      <FoodCardOpen
        item={itemSelected}
        cardOpen={cardOpen}
        closeCard={closeCard}
        setInformationSlice={setInformationSlice}
        handleDeleteMenu={handleDeleteMenu}
        apiCallDelete={apiCallDelete}
        apiCallUpdate={apiCallUpdate}
        updateMenu={updateMenu}
      />
    </section>
  );
};

export default FoodSection;
