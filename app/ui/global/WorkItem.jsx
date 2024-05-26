import Image from "next/image";
import React from "react";
import H1 from "../heading/H1";
import Paragraph from "../paragraph/Paragraph";
import Tag from "../tags/tag";
import WorkButton from "../buttons/WorkButton";
import MotionDiv from "@/app/components/motionContainers/MotionDiv";
import { fadeInLeftVariant, fadeInRightVariant } from "@/app/lib/variants";
import { truncate } from "@/app/lib/utils";

const WorkItem = ({ el, index, hasButton = true, fullDesc = true }) => {
  const isOdd = index % 2 !== 0;
  const imageToShow = el.images[0];
  const desc = fullDesc ? el.projectDesc : truncate(el.projectDesc);
  return (
    <div
      className={`flex flex-col ${
        isOdd ? " md:flex-row-reverse" : " md:flex-row "
      } items-center pb-10 `}
    >
      <MotionDiv
        variants={isOdd ? fadeInRightVariant : fadeInLeftVariant}
        className="w-full md:w-1/2"
      >
        <Image
          src={imageToShow}
          alt="dummy"
          width={400}
          height={100}
          className="pject-contain md:object-cover w-full md:w-[90%] h-[22rem]"
        />
      </MotionDiv>
      <MotionDiv
        variants={isOdd ? fadeInLeftVariant : fadeInRightVariant}
        className="w-full pt-5 md:pt-0 md:w-1/2"
      >
        <div className="flex flex-row flex-wrap gap-5 pb-3">
          {el.tags.map((item, index) => (
            <Tag tagName={item} key={index} />
          ))}
        </div>
        <H1>{el.projectName}</H1>
        <Paragraph className="w-[90%]">{desc}</Paragraph>
        {hasButton && (
          <WorkButton
            id={el.id}
            btnText="See Full Case Study"
            path="project-details"
          />
        )}
      </MotionDiv>
    </div>
  );
};

export default WorkItem;
