import React from "react";
import Button from "../buttons/Button";
import H1 from "../heading/H1";
import H2 from "../heading/H2";
import Image from "next/image";
import MotionDiv from "@/app/components/motionContainers/MotionDiv";
import { fadeInBottomVariant } from "@/app/lib/variants";

const HorizontalTextImageCard = () => {
  return (
    <MotionDiv
      variants={fadeInBottomVariant}
      className="flex flex-col md:flex-row justify-between my-20 items-center bg-horizontalGradient rounded-xl py-5 px-10 md:px-20 "
    >
      <div className="flex flex-col gap-4 w-full">
        <H1>Its been a lot of fun</H1>
        <H2>Now, lets do more</H2>
        <Button
          btnText="Talk to us"
          bgColor="bg-white"
          textColor="text-white"
          href="/contact-us"
        />
      </div>
      <div className="hidden md:block">
        <Image
          src="/Images/Growth.png"
          alt="Slider Image"
          width={300}
          height={100}
          className="w-full"
        />
      </div>
    </MotionDiv>
  );
};

export default HorizontalTextImageCard;
