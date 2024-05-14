import FinalSection from "@/app/components/home/FinalSection";
import WorkSection from "@/app/components/work/WorkSection";
import Button from "@/app/ui/buttons/Button";
import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import Tag from "@/app/ui/tags/Tag";
import React from "react";

const page = () => {
  return (
    <>
      <MaxWidthWrapper className=" px-10 md:px-20 py-28 ">
        <div className="flex flex-col items-center justify-center gap-10 text-center">
          <Tag tagName="Our Work" />
          <H1>
            Dive into <span className="gradient-text">the work.</span>{" "}
          </H1>
          <Paragraph color="text-white" py="py-0">
            This is the page we’re most proud of. If you’d like more details on
            a specific project, want to know more about the thinking behind a
            design decision, or just want to tell us we’re awesome, get in
            touch.
          </Paragraph>

          <Button btnText="Launch" type="primary" href="/contact-us" />
        </div>
        <WorkSection />
      </MaxWidthWrapper>
      <div className="w-full px-10 sm:px-20 ">
        <FinalSection />
      </div>
    </>
  );
};

export default page;
