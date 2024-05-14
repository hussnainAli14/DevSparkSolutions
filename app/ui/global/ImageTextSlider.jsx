"use client";

import React, { useState } from "react";
import Button from "../buttons/Button";
import RoundedIconButton from "../buttons/RoundedIconButton";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import Paragraph from "../paragraph/Paragraph";

const ImageTextSlider = ({ data }) => {
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const handleImageNext = () => {
    if (displayedIndex + 1 === data.length) {
      setDisplayedIndex(0);
    } else {
      setDisplayedIndex((index) => index + 1);
    }
  };
  const handleImageBack = () => {
    if (displayedIndex === 0) {
      setDisplayedIndex(data.length - 1);
    } else {
      setDisplayedIndex((index) => index - 1);
    }
  };
  return (
    <div className="bg-featureGradient relative w-full flex flex-col md:flex-row justify-between border-solid border-[1px] px-10 py-10 border-white/10 rounded-3xl">
      <div className="absolute top-5 right-10 flex flex-row  gap-2">
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
      <div className=" flex flex-col gap-5 w-full md:w-1/2  ">
        <p
          className="text-white text-4xl "
          style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
        >
          {data[displayedIndex].label}
        </p>
        <Paragraph color="text-white">
          {data[displayedIndex].description}
        </Paragraph>
        <Button btnText="Learn More" type="primary" width="w-32" />
      </div>
      <div>
        <p className="text-white">Right Image</p>
      </div>
    </div>
  );
};

export default ImageTextSlider;
