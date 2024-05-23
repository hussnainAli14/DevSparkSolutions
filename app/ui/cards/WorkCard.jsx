"use client";

import Image from "next/image";
import React, { useState } from "react";
import Paragraph from "../paragraph/Paragraph";
import Tag from "../tags/Tag";
import MotionDiv from "@/app/components/motionContainers/MotionDiv";
import { fadeInLeftVariant, fadeInRightVariant } from "@/app/lib/variants";
import Link from "next/link";
import { truncate } from "@/app/lib/utils";

const WorkCard = ({
  images,
  tags,
  projectName,
  projectDesc,
  index = 0,
  imgWidth = 300,
  imgHeight = 50,
  width = "w-[45%]",
  imgBg = "transparent",
  id,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 !== 0;
  const imagetoShow = isHovered ? images[1] : images[0];
  const mediumScreenMargin = isEven && "md:my-20";
  return (
    <MotionDiv
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={!isEven ? fadeInLeftVariant : fadeInRightVariant}
      className={`flex flex-col h-fit gap-5 pt-3 pb-10 px-5 bg-lightGray w-[90%] md:${width} rounded-xl ${mediumScreenMargin}  `}

    >
    <Link
      href={{ pathname: "/project-details", query: { id: id } }}
    >
        <div className={` ${imgBg} rounded-lg `}>
          <Image
            src={imagetoShow}
            alt="project"
            width={imgWidth}
            height={imgHeight}
            className={`w-full h-56 transition-all animation ${
              isHovered ? "animation" : ""
            }`}
          />
        </div>
        <div className="flex flex-wrap gap-5 py-5 ">
          {tags.map((tag, index) => (
            <Tag
              tagName={tag}
              key={index}
              borderColor={isHovered ? "border-white " : "border-white/30"}
              textColor={isHovered ? "text-white" : "text-white/30"}
            />
          ))}
        </div>

        <p
          className="text-white text-2xl text-wrap"
          style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
        >
          {projectName}
        </p>
        <Paragraph py="1">{truncate(projectDesc)}</Paragraph>
    </Link>
      </MotionDiv>
  );
};

export default WorkCard;
