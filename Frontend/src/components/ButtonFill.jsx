import React from "react";

const ButtonFill = ({ children, addClass, onClick }) => {
  return (
    <button
      className={`bg-primary text-white font-semibold rounded-md py-2 px-4 hover:text-black duration-150 ease-in-out w-fit ${addClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonFill;