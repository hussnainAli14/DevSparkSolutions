import MotionDiv from "@/app/components/motionContainers/MotionDiv";
import { fadeInLeftVariant } from "@/app/lib/variants";
import Button from "@/app/ui/buttons/Button";
import H1 from "@/app/ui/heading/H1";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import Tag from "@/app/ui/tags/Tag";
import React from "react";

const HeroTextSection = ({ tagName, heading, para }) => {
  return (
    <MotionDiv
      variants={fadeInLeftVariant}
      className="flex flex-col gap-5 lg:w-1/2"
    >
      <Tag tagName={tagName} />
      <H1>{heading}</H1>
      <Paragraph color="text-white">{para}</Paragraph>
      <Button btnText="Launch" type="primary" href="/contact-us" />
    </MotionDiv>
  );
};

export default HeroTextSection;
