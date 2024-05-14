import React from "react";
import H1 from "../../ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import WorkItem from "@/app/ui/global/WorkItem";

const Work = () => {
  return (
    <MaxWidthWrapper hasItemsCentered={false}>
      <H1>
        Dive into the <span className="gradient-text">work.</span>
      </H1>
      <Paragraph className="max-w-[25rem]">
        As creatives ourselves, we know that what you really want to see is the
        work we’ve actually put live. Here’s a showcase of some of our recent
        projects, across a range of sectors.
      </Paragraph>
      <WorkItem />
    </MaxWidthWrapper>
  );
};

export default Work;
