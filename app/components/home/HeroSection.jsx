import React from "react";
import Button from "../../ui/buttons/Button";
import RoundedImage from "@/app/ui/ImagesComponents/RoundedImage";
import MotionParagraph from "../motionContainers/MotionParagraph";

const HeroSection = () => {
  return (
    <div className="relative bg-heroBgImg bg-cover bg-center py-28 mt-5 flex flex-col gap-14 items-center rounded-2xl">
      <RoundedImage
        src="/images/avatar.webp"
        className="absolute bottom-[-1rem] left-1/2 transform translate-x-[-50%] bg-turquoise"
      />
      <MotionParagraph className="text-white text-sm rounded-full items-center border-solid border-[1px] py-1 px-2 border-turquoise/50">
        Introducing DevSpark Solutions
      </MotionParagraph>
      <MotionParagraph className="text-5xl md:text-7xl text-white text-center">
        Your brand, built <span className="gradient-text">better</span>
      </MotionParagraph>
      <MotionParagraph className="text-md text-white text-center text-wrap max-w-xl text-base">
        Elevating your brand with innovative digital solutions and impactful
        design. Driving success through creativity and technology
      </MotionParagraph>
      <Button btnText="Launch a Project" type="primary" href="/contact-us" />
    </div>
  );
};

export default HeroSection;
