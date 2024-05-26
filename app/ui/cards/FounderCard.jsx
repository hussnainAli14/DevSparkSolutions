"use client";
import Image from "next/image";
import React from "react";
import Paragraph from "../paragraph/Paragraph";
import Tag from "../tags/Tag";
import MotionDiv from "@/app/components/motionContainers/MotionDiv";
import { fadeInLeftVariant, fadeInRightVariant } from "@/app/lib/variants";
import { truncate } from "@/app/lib/utils";

const FounderCard = ({
  item,
  showTag = true,
  showIndex = false,
  index = null,
  imgWidth = 300,
  imgHeight = 100,
  width = "w-[45%]",
  imgBg = "transparent",
  isExpanded,
  handleToggleExpand,
  hasButton = true,
}) => {
  const isOdd = index % 2 !== 0;
  return (
    <MotionDiv
      className={`flex flex-col gap-5 pt-3 pb-10 px-5 bg-lightGray w-[90%] md:${width} rounded-xl `}
      variants={isOdd ? fadeInRightVariant : fadeInLeftVariant}
    >
      <div>
        <Image
          src={item.img}
          alt="founder"
          width={imgWidth}
          height={imgHeight}
          className="w-full h-64 rounded-xl "
        />
      </div>
      {showIndex && <p className="text-white">{index}</p>}
      <p
        className=" text-white text-2xl text-wrap gradient-text"
        style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
      >
        {item.name}
      </p>
      {showTag && <Tag tagName={item.role} />}
      <Paragraph py="1">
        {isExpanded ? item.desc : truncate(item.desc, 200) + "...."}
      </Paragraph>
      {hasButton && (
        <button
          className={` border-b-2 border-b-white pb-2 pr-2 text-center text-sm hover:translate-y-[-3px]  text-white w-fit `}
          onClick={handleToggleExpand}
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      )}
    </MotionDiv>
  );
};

export default FounderCard;
