import MotionParagraph from "@/app/components/motionContainers/MotionParagraph";
import { brandWorkedWith } from "@/app/lib/data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import H1 from "../heading/H1";

const CompanyMarquee = () => {
  return (
    <>
      <H1 isAnimated={true} className="text-white text-center">
        <span className="gradient-text"> Brands that </span> we have worked with
      </H1>
      <Marquee autoFill={true} className="mt-32">
        {brandWorkedWith.map((brand, index) => (
          <Image
            src={brand}
            alt="Brand"
            width="100"
            height={100}
            key={index}
            className="mx-10 "
          />
        ))}
      </Marquee>
    </>
  );
};

export default CompanyMarquee;
