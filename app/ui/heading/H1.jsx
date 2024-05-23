"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInBottomVariant } from "@/app/lib/variants";
const H1 = ({
  children,
  className,
  color = "text-white",
  variants = fadeInBottomVariant,
  initial = "hidden",
  whileInView = "visible",
  isAnimated = false,
}) => {
  return isAnimated ? (
    <motion.h1
      className={` ${color} text-2xl sm:text-5xl ${className}`}
      initial={initial}
      whileInView={whileInView}
      variants={variants}
    >
      {children}
    </motion.h1>
  ) : (
    <h1 className={` ${color} text-2xl sm:text-5xl ${className}`}>
      {children}
    </h1>
  );
};

export default H1;
