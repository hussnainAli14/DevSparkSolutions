import Paragraph from "@/app/ui/paragraph/Paragraph";
import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start ">
      <Image
        src="/Images/logos/logo-transparent.png"
        alt="logo"
        className="py-2"
        width={150}
        height={100}
      />
      <p className="text-white text-4xl p-0 ">
        Your brand, <br /> build <span className="gradient-text">better.</span>
      </p>
      <div>
        <Paragraph py="py-2">Company Number: +92300525887</Paragraph>
      </div>
    </div>
  );
};

export default LeftSection;
