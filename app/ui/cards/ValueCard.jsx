import React from "react";
import Paragraph from "../paragraph/Paragraph";
import H2 from "../heading/H2";

const ValueCard = ({ item, index }) => {
  return (
    <div className="bg-lightGray rounded-lg py-10 px-5 w-[90%] md:w-[45%] ">
      <div className="flex flex-row justify-between">
        <H2 className="gradient-text">{item.heading}</H2>
        <p className="tex-white">{index}</p>
      </div>
      <Paragraph color="text-white">{item.desc}</Paragraph>
    </div>
  );
};

export default ValueCard;
