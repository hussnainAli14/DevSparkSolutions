"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInLeftVariant } from "@/app/lib/variants";
const MotionDiv = ({
  initial = "hidden",
  whileInView = "visible",
  className,
  children,
  variants = fadeInLeftVariant,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      variants={variants}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
