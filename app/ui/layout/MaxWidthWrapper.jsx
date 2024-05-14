import React from "react";

const MaxWidthWrapper = ({
  children,
  className,
  hasItemsCentered = true,
  maxWidth = "max-w-screen-lg",
}) => {
  return (
    <div
      className={`flex flex-col ${
        hasItemsCentered && "items-center"
      } ${maxWidth} m-auto ${className} `}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
