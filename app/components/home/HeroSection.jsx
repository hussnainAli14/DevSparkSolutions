import React from "react";
import Button from "../../ui/buttons/Button";
import Image from "next/image";
import RoundedImage from "@/app/ui/ImagesComponents/RoundedImage";

const HeroSection = () => {
  return (
    <>
      <div className=" relative bg-heroBgImg bg-cover bg-center py-28 mt-5 flex flex-col gap-16 items-center rounded-lg ">
        <RoundedImage
          src="/images/avatar.webp"
          className="absolute bottom-[-1rem] left-1/2 transform translate-x-[-50%] bg-turquoise"
        />
        <p className="text-white text-sm rounded-full items-center border-solid border-[1px] py-1 px-2 border-turquoise/50 ">
          Introducing DevSpark Solutions
        </p>
        <p className="text-5xl md:text-7xl text-white text-center">
          Your brand, built <span className="gradient-text"> better</span>
        </p>
        <p className="text-md text-white text-center text-wrap max-w-xl text-base ">
          We transform your band vision into tangible web, graphic and video
          experiences that stop prespective clients in their tracks
        </p>
        <Button btnText="Launch a Project" type="primary" href="/contact-us" />
      </div>
    </>
  );
};

export default HeroSection;
