import Paragraph from "@/app/ui/paragraph/Paragraph";
import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start md:gap-5 ">
      <Image
        src="/Images/logo.png"
        alt="logo"
        className="py-2"
        width={300}
        height={300}
      />
      <p className="text-white text-4xl p-0 ">
        Your brand, <br /> build <span className="gradient-text">better.</span>
      </p>
      <div>
        <Paragraph className="py-0">Company Number: 13426455</Paragraph>
        <Paragraph className="py-0">
          Privacy Policy | Terms & Conditions
        </Paragraph>
      </div>
    </div>
  );
};

export default LeftSection;
