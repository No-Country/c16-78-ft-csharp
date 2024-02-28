import React from "react";

const ButtonFill = ({ children, addClass, onClick }) => {
  return (
    <button
      className={`bg-primary rounded-md py-2 px-4 hover:brightness-90 w-fit ${addClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonFill;
