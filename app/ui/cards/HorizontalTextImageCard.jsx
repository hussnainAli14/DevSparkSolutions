import React from "react";
import Button from "../buttons/Button";
import H1 from "../heading/H1";
import H2 from "../heading/H2";
import Image from "next/image";

const HorizontalTextImageCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between my-20 md:my-40 items-center bg-horizontalGradient rounded-xl py-10 md:py-20 px-20">
      <div className="flex flex-col gap-4">
        <H1>Its been a lot of fun</H1>
        <H2>Now, lets do more</H2>
        <Button
          btnText="Talk to us"
          bgColor="bg-white"
          textColor="text-white"
          href="/contact-us"
        />
      </div>
      <div>Right image</div>
    </div>
  );
};

export default HorizontalTextImageCard;
