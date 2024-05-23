import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Footer = () => {
  return (
    <MaxWidthWrapper className="pt-20 px-4 sm:px-10 ">
      <footer className="flex flex-col  md:flex-row md:gap-20 justify-between items-center md:items-start ">
        <LeftSection />
        <RightSection />
      </footer>
    </MaxWidthWrapper>
  );
};

export default Footer;
