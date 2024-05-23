"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInBottomVariant } from "@/app/lib/variants";
const H2 = ({
  children,
  className,
  color = "text-white",
  isAnimated = false,
  initial = "hidden",
  whileInView = "visible",
  variants = fadeInBottomVariant,
}) => {
  return isAnimated ? (
    <motion.h2
      initial={initial}
      variants={variants}
      whileInView={whileInView}
      className={`${color} text-2xl sm:text-4xl leading-normal ${className} p-0 m-0 `}
    >
      {children}
    </motion.h2>
  ) : (
    <h2
      className={`${color} text-2xl sm:text-4xl leading-normal ${className} p-0 m-0 `}
    >
      {children}
    </h2>
  );
};

export default H2;
