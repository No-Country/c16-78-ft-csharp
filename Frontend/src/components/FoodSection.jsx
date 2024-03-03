import React, { useState, useEffect, useRef } from "react";
import FoodCard from "./FoodCard";
import ImageExample from "../assets/platillo-ejemplo.png";
import Pager from "./Pager";
import FoodCardOpen from "./FoodCardOpen";

const FoodSection = () => {
  const title = useRef(null);
  const [cardOpen, setCardOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [disablePrevious, setDisablePrevious] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [informationSlice, setInformationSlice] = useState([]);

  const information = [
    {
      foodId: "123kdsafa",
      imageSrc: ImageExample,
      title: "Avocado Toast",
      description:
        "Delicioso pan tostado con puré de aguacate, aderezado con sal, pimienta y un chorrito de aceite de oliva. Perfecto para un desayuno saludable y lleno de sabor.",
      preparationType: "Preparación: Untar",
      time: "15 - 20 min",
      ingredients: [
        "Pan tostado",
        "Aguacate",
        "Sal",
        "Pimienta",
        "Aceite de oliva",
        "Pan tostado",
        "Aguacate",
        "Sal",
        "Pimienta",
        "Aceite de oliva",
      ],
    },
    {
      foodId: "as9d87f",
      imageSrc: ImageExample,
      title: "Egg Benedict",
      description:
        "Clásico desayuno compuesto por un muffin inglés tostado, lonchas de jamón cocido, huevos escalfados y una deliciosa salsa holandesa. Una combinación irresistible para comenzar el día.",
      preparationType: "Preparación: Cocer",
      time: "20 - 25 min",
      ingredients: [
        "Muffin inglés",
        "Jamón cocido",
        "Huevos",
        "Salsa holandesa",
      ],
    },
    {
      foodId: "3i3jfi3",
      imageSrc: ImageExample,
      title: "Pancakes",
      description:
        "Esponjosos panqueques preparados con una mezcla de harina, huevo, leche y un toque de vainilla. Ideales para un desayuno reconfortante y delicioso.",
      preparationType: "Preparación: Batir",
      time: "10 - 15 min",
      ingredients: ["Harina", "Huevo", "Leche", "Vainilla"],
    },
    {
      foodId: "94urjf",
      imageSrc: ImageExample,
      title: "Greek Salad",
      description:
        "Ensalada fresca y saludable compuesta por lechuga, tomate, pepino, cebolla roja, aceitunas y queso feta. Aderezada con aceite de oliva y vinagre balsámico.",
      preparationType: "Preparación: Picar",
      time: "10 min",
      ingredients: [
        "Lechuga",
        "Tomate",
        "Pepino",
        "Cebolla roja",
        "Aceitunas",
        "Queso feta",
        "Aceite de oliva",
        "Vinagre balsámico",
      ],
    },
    // Resto de los objetos con sus respectivos ingredientes
  ];

  useEffect(() => {
    const numberOfInformationPages = Math.ceil(information.length / 20);
    setNumberOfPages(numberOfInformationPages);
  }, [information]);

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
      setDisableNext(false);
    } else if (currentPage > 1 && currentPage < numberOfPages) {
      setDisablePrevious(false);
      setDisableNext(false);
    } else {
      setDisableNext(true);
      setDisablePrevious(false);
    }
  }, [currentPage, numberOfPages]);

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

  return (
    <section className=" flex-1 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-start p-4 overflow-hidden lg:rounded-tr-3xl bg-white">
      <h1
        ref={title}
        className="text-base md:text-3xl text-center pb-4 font-medium lg:text-xl lg:text-start"
      >
        Puedes crear {information.length} platillos
      </h1>
      <div className="flex flex-row flex-wrap gap-4 justify-center lg:flex-col lg:max-w-screen-xl">
        {informationSlice.map((item, index) => {
          return <FoodCard key={index + 1} item={item} openCard={openCard} />;
        })}
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
      />
    </section>
  );
};

export default FoodSection;
