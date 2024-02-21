import React from "react";
import TextButton from "./TextButton";

const Pager = ({
  numberOfPages,
  currentPage,
  disablePrevious,
  disableNext,
  prevPage,
  nextPage,
  setPage,
}) => {
  return (
    <div className="text-base flex justify-center items-center p-10">
      <TextButton
        className={`${
          disablePrevious
            ? "text-textHint"
            : "hover:underline hover:text-textColor transition-all ease-in-out delay-150"
        } `}
        onClick={prevPage}
        disabled={disablePrevious}
      >
        Anterior
      </TextButton>
      <div className="flex gap-4 mx-4">
        {Array.from({ length: numberOfPages }, (_, index) => index + 1).map(
          (page) => (
            <TextButton
              key={page}
              className={`py-2 px-4 ${
                page === currentPage ? "border border-textColor rounded-lg" : ""
              }`}
              onClick={() => setPage(page)}
            >
              {page}
            </TextButton>
          )
        )}
      </div>
      <TextButton
        className={`${
          disableNext
            ? "text-textHint"
            : "hover:underline hover:text-textColor transition-all ease-in-out delay-150"
        }
        `}
        onClick={nextPage}
        disabled={disableNext}
      >
        Siguiente
      </TextButton>
    </div>
  );
};

export default Pager;
