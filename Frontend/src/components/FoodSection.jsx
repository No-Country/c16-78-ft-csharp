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
    },
    {
      foodId: "as9d87f",
      imageSrc: ImageExample,
      title: "Egg Benedict",
      description:
        "Clásico desayuno compuesto por un muffin inglés tostado, lonchas de jamón cocido, huevos escalfados y una deliciosa salsa holandesa. Una combinación irresistible para comenzar el día.",
      preparationType: "Preparación: Cocer",
      time: "20 - 25 min",
    },
    {
      foodId: "3i3jfi3",
      imageSrc: ImageExample,
      title: "Pancakes",
      description:
        "Esponjosos panqueques preparados con una mezcla de harina, huevo, leche y un toque de vainilla. Ideales para un desayuno reconfortante y delicioso.",
      preparationType: "Preparación: Batir",
      time: "10 - 15 min",
    },
    {
      foodId: "94urjf",
      imageSrc: ImageExample,
      title: "Greek Salad",
      description:
        "Ensalada fresca y saludable compuesta por lechuga, tomate, pepino, cebolla roja, aceitunas y queso feta. Aderezada con aceite de oliva y vinagre balsámico.",
      preparationType: "Preparación: Picar",
      time: "10 min",
    },
    {
      foodId: "38hgeu",
      imageSrc: ImageExample,
      title: "Chicken Caesar Salad",
      description:
        "Clásica ensalada César con pollo a la parrilla, lechuga romana, crutones de ajo, queso parmesano y aderezo César cremoso. Una opción deliciosa y nutritiva para el almuerzo.",
      preparationType: "Preparación: Picar",
      time: "20 min",
    },
    {
      foodId: "ke3udj",
      imageSrc: ImageExample,
      title: "Caprese Salad",
      description:
        "Ensalada italiana de tomate, mozzarella fresca y hojas de albahaca. Aderezada con aceite de oliva, sal y pimienta. Una opción ligera y deliciosa para acompañar cualquier comida.",
      preparationType: "Preparación: Cortar",
      time: "15 min",
    },
    {
      foodId: "j49kdl",
      imageSrc: ImageExample,
      title: "Spaghetti Carbonara",
      description:
        "Plato de pasta italiano con una cremosa salsa de huevo, panceta, queso parmesano y pimienta negra. Una receta clásica y reconfortante para disfrutar en cualquier momento.",
      preparationType: "Preparación: Cocer",
      time: "25 - 30 min",
    },
    {
      foodId: "3iwjfn",
      imageSrc: ImageExample,
      title: "Margarita Pizza",
      description:
        "Pizza clásica italiana con salsa de tomate, mozzarella fresca y hojas de albahaca. Horneada a la perfección en un horno de piedra para obtener una base crujiente y deliciosa.",
      preparationType: "Preparación: Hornear",
      time: "20 - 25 min",
    },
    {
      foodId: "4j38kd",
      imageSrc: ImageExample,
      title: "Sushi Rolls",
      description:
        "Rollos de sushi frescos y deliciosos, rellenos de arroz, pescado crudo, aguacate y pepino. Acompañados de salsa de soja, wasabi y jengibre encurtido. Una experiencia culinaria japonesa única.",
      preparationType: "Preparación: Rodar",
      time: "30 min",
    },
    {
      foodId: "9fjdi3",
      imageSrc: ImageExample,
      title: "Chicken Tikka Masala",
      description:
        "Plato de origen indio compuesto por pollo marinado en una salsa cremosa de tomate, yogur, especias y hierbas. Servido con arroz basmati y pan naan caliente. Una explosión de sabores exóticos.",
      preparationType: "Preparación: Cocinar",
      time: "40 min",
    },
    {
      foodId: "k3j5uh",
      imageSrc: ImageExample,
      title: "Caesar Wrap",
      description:
        "Wrap relleno de lechuga romana, pollo a la parrilla, crutones de ajo y aderezo César cremoso. Envolto en una tortilla de trigo integral y servido con papas fritas. Una opción rápida y deliciosa para el almuerzo.",
      preparationType: "Preparación: Envolver",
      time: "15 min",
    },
    {
      foodId: "w4uh8f",
      imageSrc: ImageExample,
      title: "Beef Tacos",
      description:
        "Tacos mexicanos con tortillas de maíz rellenas de carne de res sazonada, cebolla, cilantro y salsa picante. Acompañados de guacamole, salsa fresca y limón. Una explosión de sabores y texturas.",
      preparationType: "Preparación: Armar",
      time: "30 min",
    },
    {
      foodId: "58dj3i",
      imageSrc: ImageExample,
      title: "Ratatouille",
      description:
        "Plato francés de verduras asadas, que incluye berenjena, calabacín, tomate, pimiento y cebolla. Cocido lentamente en aceite de oliva y sazonado con hierbas provenzales. Una opción vegetariana saludable y sabrosa.",
      preparationType: "Preparación: Cocinar",
      time: "45 min",
    },
    {
      foodId: "2ki9fa",
      imageSrc: ImageExample,
      title: "Beef Burgers",
      description:
        "Hamburguesas de carne de res a la parrilla, servidas en un panecillo de sésamo con lechuga, tomate, cebolla y una selección de salsas. Acompañadas de papas fritas crujientes. Un clásico de la comida rápida.",
      preparationType: "Preparación: Asar",
      time: "25 min",
    },
    {
      foodId: "7k4h2d",
      imageSrc: ImageExample,
      title: "Vegetable Stir-Fry",
      description:
        "Salteado de verduras mixtas, que incluye brócoli, zanahorias, pimientos, champiñones y cebolla, cocido en una salsa de soja y jengibre. Servido sobre arroz blanco al vapor. Una opción saludable y llena de sabor.",
      preparationType: "Preparación: Saltear",
      time: "20 min",
    },
    {
      foodId: "j7e2kd",
      imageSrc: ImageExample,
      title: "Fruit Salad",
      description:
        "Ensalada de frutas frescas, que incluye fresas, piña, melón, uvas y kiwi, aderezada con un toque de jugo de limón y miel. Una opción refrescante y nutritiva para disfrutar en cualquier momento del día.",
      preparationType: "Preparación: Cortar",
      time: "15 min",
    },
    {
      foodId: "93kgh6",
      imageSrc: ImageExample,
      title: "Grilled Cheese Sandwich",
      description:
        "Sandwich de queso a la parrilla, hecho con dos rebanadas de pan tostado y una capa abundante de queso cheddar derretido en el medio. Una opción reconfortante y clásica para cualquier hora del día.",
      preparationType: "Preparación: Asar",
      time: "10 min",
    },
    {
      foodId: "k3rj0d",
      imageSrc: ImageExample,
      title: "Chocolate Chip Cookies",
      description:
        "Galletas clásicas de chocolate con chispas de chocolate semidulce, hechas con mantequilla, azúcar, huevos, harina y extracto de vainilla. Perfectas para acompañar una taza de leche caliente o simplemente disfrutarlas solas.",
      preparationType: "Preparación: Hornear",
      time: "12 - 15 min",
    },
    {
      foodId: "q83hjs",
      imageSrc: ImageExample,
      title: "Beef Stew",
      description:
        "Estofado de carne de res cocido lentamente con papas, zanahorias, cebollas y apio en una salsa de tomate y caldo de res. Condimentado con hierbas aromáticas y especias. Una comida reconfortante para los días fríos.",
      preparationType: "Preparación: Cocinar",
      time: "2 hrs",
    },
    {
      foodId: "k3rj0d",
      imageSrc: ImageExample,
      title: "Chocolate Chip Cookies",
      description:
        "Galletas clásicas de chocolate con chispas de chocolate semidulce, hechas con mantequilla, azúcar, huevos, harina y extracto de vainilla. Perfectas para acompañar una taza de leche caliente o simplemente disfrutarlas solas.",
      preparationType: "Preparación: Hornear",
      time: "12 - 15 min",
    },
    {
      foodId: "q83hjs",
      imageSrc: ImageExample,
      title: "Beef Stew",
      description:
        "Estofado de carne de res cocido lentamente con papas, zanahorias, cebollas y apio en una salsa de tomate y caldo de res. Condimentado con hierbas aromáticas y especias. Una comida reconfortante para los días fríos.",
      preparationType: "Preparación: Cocinar",
      time: "2 hrs",
    },
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
        className="text-base md:text-3xl text-center pb-4 text-textColor font-medium lg:text-xl lg:text-start"
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
      />
    </section>
  );
};

export default FoodSection;
