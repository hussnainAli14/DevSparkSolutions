import React from "react";

const H2 = ({ children, className, color = "text-white" }) => {
  return (
    <h2 className={`${color} text-4xl leading-normal ${className} p-0 m-0 `}>
      {children}
    </h2>
  );
};

export default H2;
