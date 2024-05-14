import Image from "next/image";
import React from "react";
import H2 from "../heading/H2";
import Paragraph from "../paragraph/Paragraph";

const ServiceCard = ({ src, label, desc }) => {
  return (
    <div className="flex md:flex-row items-center md:justify-center gap-5 bg-lightGray rounded-xl py-5 px-5 w-full border-[1px] border-solid border-white/50 hover:cursor-pointer hover:shadow-xl hover:shadow-backgroundPatternRight hover:translate-y-[-5px] ">
      <div className="p-1 flex bg-white rounded-full ">
        <Image
          src={src}
          alt="service logo"
          height={50}
          width={50}
          className="object-contain"
        />
      </div>
      <div>
        <p className="text-white text-lg">{label}</p>
        <Paragraph color="text-white/50" py="0">
          {desc}
        </Paragraph>
      </div>
    </div>
  );
};

export default ServiceCard;
