import React from "react";

const Paragraph = ({
  children,
  color = "text-darkgrey",
  className,
  py = "py-5",
}) => {
  return <p className={`${color} text-base ${py} ${className} `}>{children}</p>;
};

export default Paragraph;
