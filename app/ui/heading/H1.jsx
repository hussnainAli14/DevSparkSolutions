import React from "react";

const H1 = ({ children, className, color = "text-white" }) => {
  return (
    <h1 className={` ${color} text-3xl sm:text-5xl ${className}`}>
      {children}
    </h1>
  );
};

export default H1;
