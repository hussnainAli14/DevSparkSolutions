import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Button = ({
  btnText,
  bgColor = "bg-buttonGradient",
  hoverColor = "bg-royalblue/70",
  type,
  textColor = "white",
  width = "w-fit",
  className,
  href = "/",
}) => {
  return (
    <Link
      className={`${
        type === "primary" ? " py-2 px-5" : "py-1 px-3.5"
      } ${bgColor} rounded-full border-solid border-[1px] text-center text-sm border-white/70 ${`hover:${hoverColor}`} text-${textColor} ${width} ${className} `}
      href={href}
    >
      {btnText}
    </Link>
  );
};

export default Button;
