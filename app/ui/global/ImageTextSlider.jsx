"use client";

import React, { useEffect, useState } from "react";
import RoundedIconButton from "../buttons/RoundedIconButton";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import Paragraph from "../paragraph/Paragraph";
import { motion } from "framer-motion";
import MotionDiv from "@/app/components/motionContainers/MotionDiv";
import { fadeInBottomVariant } from "@/app/lib/variants";
import Image from "next/image";
const ImageTextSlider = ({ data }) => {
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const displayedImage = data[displayedIndex].image;

  const handleImageNext = () => {
    if (displayedIndex + 1 === data.length) {
      setDisplayedIndex(0);
    } else {
      setDisplayedIndex((index) => index + 1);
    }
    setAnimationClass("animation");
  };
  const handleImageBack = () => {
    if (displayedIndex === 0) {
      setDisplayedIndex(data.length - 1);
    } else {
      setDisplayedIndex((index) => index - 1);
    }
    setAnimationClass("animation");
  };
  useEffect(() => {
    if (animationClass) {
      const timeout = setTimeout(() => {
        setAnimationClass("");
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [displayedIndex, animationClass]);

  return (
    <MotionDiv
      variants={fadeInBottomVariant}
      className="bg-featureGradient relative w-full flex flex-col md:flex-row justify-between border-solid border-[1px] px-10 py-10 border-white/10 rounded-3xl"
    >
      <div className="absolute top-5 right-10 flex flex-row gap-2 z-10 ">
        <RoundedIconButton
          onHoverColor="bg-transparent "
          className="hover:bg-turquoise"
        >
          <MdNavigateBefore size={20} onClick={handleImageBack} />
        </RoundedIconButton>
        <RoundedIconButton
          onHoverColor="bg-transparent"
          className="hover:bg-turquoise"
        >
          <MdNavigateNext size={20} onClick={handleImageNext} />
        </RoundedIconButton>
      </div>
      <div className=" flex flex-col gap-5 w-full md:w-1/2   ">
        <p
          className={`text-white text-4xl transition-all ${animationClass}`}
          style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
        >
          {data[displayedIndex].label}
        </p>
        <Paragraph
          color="text-white"
          className={`transition-all ${animationClass}`}
        >
          {data[displayedIndex].description}
        </Paragraph>
      </div>
      <div className="hidden md:block lg:absolute lg:top-[-60px] lg:right-20 lg:items-center ">
        <Image
          src={displayedImage}
          alt="Index Image"
          width={300}
          height={100}
          className={`w-[100%] ${animationClass} `}
        />
      </div>
    </MotionDiv>
  );
};

export default ImageTextSlider;
