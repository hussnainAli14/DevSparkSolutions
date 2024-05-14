import React from "react";

const RoundedIconButton = ({ children, className, handleClick }) => {
  return (
    <div
      className={` rounded-full bg-white flex items-center cursor-pointer ${className} `}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default RoundedIconButton;
