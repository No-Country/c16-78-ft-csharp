import React from "react";

const ButtonFill = ({ children, url }) => {
  return (
    <button
      className="bg-primary rounded-md py-2 px-4 hover:brightness-90"
      onClick={() => {
        window.location.href = url;
      }}
    >
      {children}
    </button>
  );
};

export default ButtonFill;
