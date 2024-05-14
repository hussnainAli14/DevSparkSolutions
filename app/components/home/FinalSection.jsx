import RoundedImage from "@/app/ui/ImagesComponents/RoundedImage";
import Button from "@/app/ui/buttons/Button";
import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import React from "react";

const FinalSection = () => {
  return (
    <MaxWidthWrapper className="relative bg-heroBgImg bg-cover bg-center py-28 items-center rounded-lg ">
      <RoundedImage
        src="/images/avatar.webp"
        className="absolute bottom-[-1rem] left-1/2 transform translate-x-[-50%] bg-turquoise"
      />
      <H1 className="text-center">
        Lets get to <span className="gradient-text">work.</span>
      </H1>
      <Paragraph color="text-white" className="text-center">
        We’re ready to get started on your next creative project. All you need
        to do is hit the button below
      </Paragraph>
      <Button
        btnText="Talk to us"
        bgColor="bg-white"
        textColor="black"
        className="mt-5"
        hoverColor="bg-transparent"
        href="/contact-us"
      />
    </MaxWidthWrapper>
  );
};

export default FinalSection;
