import React from "react";

const Tag = ({
  tagName,
  className,
  borderColor = "border-royalblue",
  textColor = "text-white",
}) => {
  return (
    <p
      className={`rounded-full py-1 px-2 items-center border-[1px] border-solid ${borderColor} ${textColor}  text-sm w-fit ${className}`}
    >
      {tagName}
    </p>
  );
};

export default Tag;
