"use client";
import { fadeInLeftVariant } from "@/app/lib/variants";
import React from "react";
import { motion } from "framer-motion";
const Tag = ({
  tagName,
  className,
  borderColor = "border-royalblue",
  textColor = "text-white",
  isAnimated = false,
  initial = "hidden",
  whileInView = "visible",
  variants = fadeInLeftVariant,
}) => {
  return isAnimated ? (
    <motion.p
      initial={initial}
      whileInView={whileInView}
      variants={variants}
      className={`rounded-full py-1 px-2 items-center border-[1px] border-solid ${borderColor} ${textColor}  text-sm w-fit ${className}`}
    >
      {tagName}
    </motion.p>
  ) : (
    <p
      className={`rounded-full py-1 px-2 items-center border-[1px] border-solid ${borderColor} ${textColor}  text-sm w-fit ${className}`}
    >
      {tagName}
    </p>
  );
};

export default Tag;
