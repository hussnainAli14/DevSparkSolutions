import Image from "next/image";
import React from "react";
import H1 from "../heading/H1";
import Paragraph from "../paragraph/Paragraph";
import Tag from "../tags/tag";
import WorkButton from "../buttons/WorkButton";

const WorkItem = () => {
  return (
    <div className="flex flex-col md:flex-row items-center ">
      <div className="w-full md:w-1/2">
        <Image
          src="/images/dummy.webp"
          alt="dummy"
          width={400}
          height={100}
          className="object-cover w-full md:w-[90%] h-[22rem]"
        />
      </div>
      <div className="w-full pt-5 md:pt-0 md:w-1/2">
        <div className="flex flex-row flex-wrap gap-5 pb-3">
          <Tag tagName="Web Development" />
          <Tag tagName="Web Development" />
          <Tag tagName="Web Development" />
          <Tag tagName="Web Development" />
          <Tag tagName="Web Development" />
        </div>
        <H1>Haicen</H1>
        <Paragraph>
          HACIEN is a premium tequila brand supplying high-end hospitality and
          retail locations worldwide. They approached Phunk to undertake a
          comprehensive design project comprising web, packaging and marketing
          assets as well as 3D renders of their signature bottles.
        </Paragraph>
        <WorkButton btnText="See full case study" />
      </div>
    </div>
  );
};

export default WorkItem;
