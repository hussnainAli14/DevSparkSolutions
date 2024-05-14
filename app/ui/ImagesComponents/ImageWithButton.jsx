import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";

const ImageWithButton = ({ src }) => {
  return (
    <div className="relative">
      <Image
        src={src}
        alt="story "
        className="rounded-lg w-full "
        width={600}
        height={600}
      />
      <Button
        btnText="Talk to us"
        className="absolute bottom-5 right-10"
        textColor="text-black"
        bgColor="bg-white"
        href="/contact-us"
      />
    </div>
  );
};

export default ImageWithButton;
