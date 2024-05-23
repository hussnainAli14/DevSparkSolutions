import Button from "@/app/ui/buttons/Button";
import H2 from "@/app/ui/heading/H2";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import Image from "next/image";
import React from "react";
import MotionDiv from "../../motionContainers/MotionDiv";
import { fadeInLeftVariant, fadeInRightVariant } from "@/app/lib/variants";

const Journey = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row justify-between items-center py-20 ">
        <MotionDiv
          variants={fadeInLeftVariant}
          className="w-full md:w-1/2 pb-5 md:pb-0 "
        >
          <H2 color="text-black" className="">
            After graduating, the Joes took different paths,
          </H2>
          <Paragraph>
            JM heading into a marketing agency role focused on web design,
            branding and animation, and JC working on print design and web
            advertising for household names like Kelloggs, Fred Perry and
            Axe/Lynx.
          </Paragraph>
          <Paragraph>
            JM heading into a marketing agency role focused on web design,
            branding and animation, and JC working on print design and web
            advertising for household names like Kelloggs, Fred Perry and
            Axe/Lynx.
          </Paragraph>
          <Button btnText="Start a project" type="primary" />
        </MotionDiv>
        <MotionDiv variants={fadeInRightVariant}>
          <Image
            src="/images/journey.webp"
            alt="journey"
            width={400}
            height={300}
            className="md:block hidden"
          />
        </MotionDiv>
      </div>
    </MaxWidthWrapper>
  );
};

export default Journey;
