import React, { useState, useEffect, useRef } from "react";
import FoodCard from "./FoodCard";
import ImageExample from "../assets/platillo-ejemplo.png";
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

  const url = "http://www.saboresdelhogar.somee.com/Api/recipe";
  const { data, loading, error } = useFetch(url);
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

  useEffect(() => {
    setInformation(data?.data || []);
  }, [data]);

  useEffect(() => {
    if (addMenu && Object.keys(addMenu).length > 0) {
      const formattedAddMenu = {
        id: 0,
        imgUrl: addMenu.imgUrl || "",
        name: addMenu.name || "",
        description: addMenu.description || "",
        cookMethodName: addMenu.cookMethodName || "",
        portion: addMenu.portion || "",
        cookingMinutes: addMenu.cookingMinutes || "",
        recipeIngredients: addMenu.recipeIngredients || [],
      };

      setInformation((prev) => [...prev, formattedAddMenu]);
      apiCallPost(formattedAddMenu);
    }
  }, [addMenu]);

  useEffect(() => {
    const updateApi = async (updatedMenu) => {
      try {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedMenu),
        };
        const res = await fetch(`${url}/${updatedMenu.id}`, requestOptions);
        if (!res.ok) {
          throw new Error(`Error de red: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    updateApi(updateMenu);
    setInformation((prev) =>
      prev.map((item) => (item.id === updateMenu.id ? updateMenu : item))
    );
    setCardOpen(false);
  }, [updateMenu]);

  useEffect(() => {
    const deleteApi = async (deleteMenu) => {
      console.log(deleteMenu)
      try {
        const requestOptions = {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(deleteMenu),
        };
        const res = await fetch(`${url}/${deleteMenu}`, requestOptions);
        if (!res.ok) {
          throw new Error(`Error de red: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    deleteApi(deleteMenu);
    setInformation((prev) => prev.filter((menu) => menu.id !== deleteMenu));
    setCardOpen(false);
    document.body.style.overflow = "auto";
  }, [deleteMenu]);

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
    console.log(formattedAddMenu);

    const pruebaIngredient = {
      id: 654654,
      imgUrl: "https://www.google.com",
      name: "fsdfsfsf",
      description: "rfegtregre",
      cookMethodId: 1,
      portion: "1",
      cookingMinutes: 10,
      recipeIngredients: [
        {
          ingredientName: "Queso",
          isMain: true,
          ingredientQuantity: "A gusto",
        },
        {
          ingredientName: "Huevo",
          isMain: true,
          ingredientQuantity: "2",
        },
      ],
    };
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedAddMenu),
      };
      const res = await fetch(`${url}/${idToDelete}`, requestOptions);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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
        handleUpdateMenu={handleUpdateMenu}
        handleDeleteMenu={handleDeleteMenu}
      />
    </section>
  );
};

export default FoodSection;
