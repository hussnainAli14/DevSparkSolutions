"use client";

import React from "react";

const Button = ({
  btnText,
  handleClick,
  bgColor = "bg-royalblue/90",
  type,
}) => {
  return (
    <button
      className={`${
        type === "primary" ? " py-2 px-5" : "pt-2 px-3"
      } ${bgColor} rounded-full border-solid border-[1px] border-white/70 hover:bg-royalblue/70 `}
    >
      <p className="text-sm">{btnText}</p>
    </button>
  );
};

export default Button;
