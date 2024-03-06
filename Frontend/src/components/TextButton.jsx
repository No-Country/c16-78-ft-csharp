import React from "react";

const TextButton = ({ children, onClick, className, disabled }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default TextButton;
