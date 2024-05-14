import Image from "next/image";
import React from "react";
import Paragraph from "../paragraph/Paragraph";
import Tag from "../tags/Tag";

const FounderCard = ({
  item,
  showTag = true,
  showIndex = false,
  index = null,
  imgWidth = 300,
  imgHeight = 400,
  width = "w-[45%]",
  imgBg = "transparent",
}) => {
  return (
    <div
      className={`flex flex-col gap-5 pt-3 pb-10 px-5 bg-lightGray w-[90%] md:${width} rounded-xl `}
    >
      <div className={` ${imgBg} rounded-lg`}>
        <Image
          src={item.img}
          alt="founder"
          width={imgWidth}
          height={imgHeight}
          className="w-full "
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
      <Paragraph py="1">{item.desc}</Paragraph>
    </div>
  );
};

export default FounderCard;