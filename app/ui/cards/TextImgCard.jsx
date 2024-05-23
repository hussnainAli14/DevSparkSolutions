import Image from "next/image";
import React from "react";
import { MdNavigateNext } from "react-icons/md";
import RoundedIconButton from "../buttons/RoundedIconButton";
import Paragraph from "../paragraph/Paragraph";
import MotionDiv from "@/app/components/motionContainers/MotionDiv";
import {
  fadeInBottomVariant,
  fadeInLeftVariant,
  fadeInRightVariant,
} from "@/app/lib/variants";

const TextImgCard = ({ SrNo, feature, maxItems }) => {
  const isEven = SrNo % 2 === 0;
  const indexNumber = SrNo < 10 ? "0" + SrNo : SrNo;
  const isLastItem = SrNo === maxItems;
  return (
    <MotionDiv
      className={`bg-darkgrey/20 rounded-lg py-10 px-5 ${
        isLastItem && !isEven
          ? "grid grid-cols-1 md:grid-cols-2 md:col-span-2 "
          : isEven
          ? "flex flex-col-reverse"
          : "flex flex-col "
      } gap-2 `}
      variants={
        !isEven && !isLastItem
          ? fadeInLeftVariant
          : isEven && !isLastItem
          ? fadeInRightVariant
          : isLastItem && fadeInBottomVariant
      }
    >
      <div>
        <p className="stroked-text ">{indexNumber}</p>
        <p className="gradient-text text-3xl">{feature.name}</p>
        <Paragraph>{feature.desc}</Paragraph>
      </div>
      <div className="bg-black rounded-lg relative items-center h-[22rem] w-full overflow-hidden ">
        <RoundedIconButton
          className="absolute bottom-10 right-5 hover:bg-turquoise "
          href="services"
        >
          <MdNavigateNext size={30} />
        </RoundedIconButton>
        <Image
          src={feature.image}
          alt="feature"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="w-full h-auto"
        />
      </div>
    </MotionDiv>
  );
};

export default TextImgCard;
