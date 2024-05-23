import React from "react";
import H1 from "../../ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import WorkItem from "@/app/ui/global/WorkItem";
import { projects } from "@/app/lib/data";

const Work = () => {
  return (
    <MaxWidthWrapper hasItemsCentered={false}>
      <H1 isAnimated={true}>
        Dive into the <span className="gradient-text">work.</span>
      </H1>
      <Paragraph isAnimated={true} className="max-w-[25rem]">
        As creatives ourselves, we know that what you really want to see is the
        work we’ve actually put live. Here’s a showcase of some of our recent
        projects, across a range of sectors.
      </Paragraph>
      {projects.map((el, index) => (
        <WorkItem key={index} el={el} index={index} fullDesc={false} />
      ))}
    </MaxWidthWrapper>
  );
};

export default Work;
