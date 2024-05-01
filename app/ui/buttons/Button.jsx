"use client";

import React from "react";

const Button = ({
  btnText,
  handleClick,
  bgColor = "bg-royalblue/90",
  type,
  textColor = 'white',
  width="w-auto"
}) => {
  return (
    <button
      className={`${
        type === "primary" ? " py-2 px-5" : "py-1 px-3.5"
      } ${bgColor} rounded-full border-solid border-[1px] text-center border-white/70 hover:bg-royalblue/70 text-${textColor} ${width} `}
    >
      <p className="text-sm">{btnText}</p>
    </button>
  );
};

export default Button;
