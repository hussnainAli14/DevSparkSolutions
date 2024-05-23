import Paragraph from "@/app/ui/paragraph/Paragraph";
import React from "react";

const BookCall = () => {
  return (
    <div className="py-10 px-2 lg:px-12 bg-formGradient rounded-xl relative border-[1px] border-solid border-white/50 hover:bg-pricingCardGradient ">
      <div className=" flex flex-row justify-center items-center">
        <p className="text-white text-3xl text-center">Book a Call</p>
        <p></p>
      </div>
      <Paragraph color="text-white" className="text-2xl text-center">
        Pick a time and date that suits you, and we will setup a video and voice
        call - whichever works best.
      </Paragraph>
    </div>
  );
};

export default BookCall;
