import Image from "next/image";
import React from "react";

const RoundedImage = ({ src, className }) => {
  return (
    <Image
      src={src !== "" ? src : "/images/avatar.webp"}
      alt="avatar"
      className={`rounded-full w-12 h-12  ${className} `}
      width={30}
      height={30}
    />
  );
};

export default RoundedImage;
