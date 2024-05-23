import FinalSection from "@/app/components/home/FinalSection";
import MotionDiv from "@/app/components/motionContainers/MotionDiv";
import WorkSection from "@/app/components/work/WorkSection";
import { fadeInBottomVariant } from "@/app/lib/variants";
import Button from "@/app/ui/buttons/Button";
import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import Tag from "@/app/ui/tags/Tag";
import React from "react";

const page = () => {
  return (
    <>
      <MaxWidthWrapper className="px-0 md:px-20 py-28 ">
        <div className="flex flex-col items-center justify-center gap-10 text-center">
          <Tag
            isAnimated={true}
            variants={fadeInBottomVariant}
            tagName="Our Work"
          />
          <H1 isAnimated={true} className="px-10 sm:px-0 ">
            Dive into <span className="gradient-text">the work.</span>{" "}
          </H1>
          <Paragraph
            isAnimated={true}
            color="text-white"
            className="px-10 sm:px-0 "
            py="py-0"
          >
            This is the page we’re most proud of. If you’d like more details on
            a specific project, want to know more about the thinking behind a
            design decision, or just want to tell us we’re awesome, get in
            touch.
          </Paragraph>
          <MotionDiv variants={fadeInBottomVariant}>
            <Button btnText="Launch" type="primary" href="/contact-us" />
          </MotionDiv>
        </div>
        <WorkSection />
      </MaxWidthWrapper>
      <div className="w-full px-5 sm:px-20 ">
        <FinalSection />
      </div>
    </>
  );
};

export default page;
