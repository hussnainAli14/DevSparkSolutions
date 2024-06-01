import Image from "next/image";
import React from "react";

const RoundedImage = ({ src, className }) => {
  return (
    <Image
      src={src !== "" ? src : "/Images/avatar.webp"}
      alt="avatar"
      className={`rounded-full w-12 h-12  ${className} `}
      width={100}
      height={100}
    />
  );
};

export default RoundedImage;
