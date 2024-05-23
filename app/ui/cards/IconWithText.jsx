import Image from "next/image";
import React from "react";
import Paragraph from "../paragraph/Paragraph";

const IconWithText = ({ icon, heading, desc }) => {
  return (
    <div className="flex flex-row sm:justify-center items-center gap-y-5 gap-x-5">
      <div className="bg-white p-5 rounded-xl ">
        <Image src={icon} alt="Icon" width={70} height={70} />
      </div>
      <div>
        <p className="text-white ">{heading}</p>
        <Paragraph py="py-2">{desc}</Paragraph>
      </div>
    </div>
  );
};

export default IconWithText;
