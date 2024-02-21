import React, { useState, useEffect, useRef } from "react";
import FoodCard from "./FoodCard";
import ImageExaple from "../assets/platillo-ejemplo.png";
import Pager from "./Pager";

const FoodSection = () => {
  const title = useRef(null);

  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [disablePrevious, setDisablePrevious] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [informationSlice, setInformationSlice] = useState([]);
  const information = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45,
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

  return (
    <section className=" flex-1 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center p-4 overflow-hidden lg:rounded-tr-3xl bg-white">
      <h1
        ref={title}
        className="text-base md:text-3xl text-center pb-4 text-textColor font-medium lg:text-xl lg:text-start"
      >
        Puedes crear {information.length} platillos
      </h1>
      <div className="flex flex-row flex-wrap gap-4 justify-center lg:flex-col lg:max-w-screen-xl">
        {informationSlice.map((item, index) => {
          return (
            <FoodCard
              key={item}
              imageSrc={ImageExaple}
              title="Avocado toast"
              time="15 - 20 min"
              description={` ${item} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et`}
            />
          );
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
    </section>
  );
};

export default FoodSection;
