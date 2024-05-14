import Image from "next/image";
import React from "react";
import { MdNavigateNext } from "react-icons/md";
import RoundedIconButton from "../buttons/RoundedIconButton";
import Paragraph from "../paragraph/Paragraph";

const TextImgCard = ({ SrNo, feature, maxItems }) => {
  const isEven = SrNo % 2 === 0;
  const indexNumber = SrNo < 10 ? "0" + SrNo : SrNo;
  const isLastItem = SrNo === maxItems;
  return (
    <div
      className={`bg-darkgrey/20 rounded-lg py-10 px-5 ${
        isLastItem && !isEven
          ? "grid grid-cols-1 md:grid-cols-2 md:col-span-2 "
          : isEven
          ? "flex flex-col-reverse"
          : "flex flex-col "
      } gap-2 `}
    >
      <div>
        <p>{indexNumber}</p>
        <p className="gradient-text text-3xl">{feature.name}</p>
        <Paragraph>{feature.desc}</Paragraph>
      </div>
      <div className="bg-black rounded-lg relative items-center h-64 w-full overflow-hidden">
        <RoundedIconButton
          className="absolute bottom-2 right-5 hover:bg-turquoise "
          onHoverColor=""
        >
          <MdNavigateNext size={30} />
        </RoundedIconButton>
        <Image src={feature.image} alt="feature" width={50} height={50} />
      </div>
    </div>
  );
};

export default TextImgCard;
