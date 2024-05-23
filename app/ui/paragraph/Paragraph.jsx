"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInBottomVariant } from "@/app/lib/variants";
const Paragraph = ({
  children,
  color = "text-darkgrey",
  className,
  py = "py-5",
  isAnimated = false,
  initial = "hidden",
  whileInView = "visible",
  variants = fadeInBottomVariant,
}) => {
  return isAnimated ? (
    <motion.p
      initial={initial}
      whileInView={whileInView}
      variants={variants}
      className={`${color} text-base ${py} ${className} `}
    >
      {children}
    </motion.p>
  ) : (
    <p className={`${color} text-base ${py} ${className} `}>{children}</p>
  );
};

export default Paragraph;
