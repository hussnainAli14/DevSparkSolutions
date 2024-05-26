import React from "react";
import MotionDiv from "../motionContainers/MotionDiv";
import Image from "next/image";
import MotionParagraph from "../motionContainers/MotionParagraph";
import { fadeInLeftVariant, fadeInRightVariant } from "@/app/lib/variants";
const ImageTextLayout = ({ text, image, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } justify-between items-center gap-10`}
    >
      <MotionParagraph
        variants={isEven ? fadeInLeftVariant : fadeInRightVariant}
        className=" w-[90%] text-center md:text-start md:w-1/2 text-darkgrey "
      >
        {text}
      </MotionParagraph>
      <MotionDiv variants={isEven ? fadeInRightVariant : fadeInLeftVariant}>
        <Image
          src={image}
          alt="loading"
          width={300}
          height={100}
          objectFit="center"
          className="w-full"
        />
      </MotionDiv>
    </div>
  );
};
export default ImageTextLayout;
