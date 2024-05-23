import React from "react";
import Paragraph from "../paragraph/Paragraph";
import H2 from "../heading/H2";
import MotionDiv from "@/app/components/motionContainers/MotionDiv";
import { fadeInLeftVariant, fadeInRightVariant } from "@/app/lib/variants";

const ValueCard = ({ item, index }) => {
  const isOdd = index % 2 !== 0;
  return (
    <MotionDiv
      variants={!isOdd ? fadeInRightVariant : fadeInLeftVariant}
      className="bg-lightGray rounded-lg py-10 px-5 w-[90%] md:w-[45%] "
    >
      <div className="flex flex-row justify-between">
        <H2 className="gradient-text">{item.heading}</H2>
      </div>
      <Paragraph color="text-white">{item.desc}</Paragraph>
    </MotionDiv>
  );
};

export default ValueCard;
