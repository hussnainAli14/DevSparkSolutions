"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInBottomVariant } from "@/app/lib/variants";

const MotionParagraph = ({
  children,
  className,
  variants = fadeInBottomVariant,
  initial = "hidden",
  whileInView = "visible",
}) => {
  return (
    <motion.p
      initial={initial}
      whileInView={whileInView}
      variants={variants}
      className={className}
    >
      {children}
    </motion.p>
  );
};

export default MotionParagraph;
