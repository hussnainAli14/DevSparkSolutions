import { brandWorkedWith } from "@/app/lib/data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const CompanyMarquee = () => {
  return (
    <Marquee autoFill={true} className="mt-32">
      {brandWorkedWith.map((brand, index) => (
        <Image
          src={brand}
          alt="Brand"
          width="100"
          height={100}
          key={index}
          className="mx-10 "
        />
      ))}
    </Marquee>
  );
};

export default CompanyMarquee;
