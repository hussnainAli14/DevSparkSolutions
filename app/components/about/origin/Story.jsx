import ImageWithButton from "@/app/ui/ImagesComponents/ImageWithButton";
import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import React from "react";
import Journey from "./Journey";
import H2 from "@/app/ui/heading/H2";
import HorizontalTextImageCard from "@/app/ui/cards/HorizontalTextImageCard";

const Story = () => {
  return (
    <div className="bg-white my-20 py-20 px-5 md:px-0 ">
      <MaxWidthWrapper hasItemsCentered={false}>
        <H1 color="text-black" className="text-center md:text-start">
          The origin <span className="gradient-text">story</span>
        </H1>
        <Paragraph
          color="text-black/70"
          className="md:w-1/2 font-semibold text-center md:text-start "
        >
          The partnership behind Dev Spark Solutions began a long time before
          the company was officially established. Our founders Joe Murray and
          Joe Crabtree first met at college, both studying creative and digital
          media courses —never imagining that sharing a first name would make
          their copywriter’s job unnecessarily difficult at some point in the
          future.
        </Paragraph>
        <ImageWithButton src="/images/storyMain.webp" />

        <Journey />
        <ImageWithButton src="/images/storyMain.webp" />
        <H2 color="text-black" className="pt-10">
          A little over 2 years in,
        </H2>
        <Paragraph
          py="py-1"
          color="text-black/70"
          className="md:w-1/2 w-full font-semibold "
        >
          and the business has gone from strength to strength. New team members
          have joined, widening our skillset and bringing more diversity to our
          thinking. Client projects ship regularly, each one bringing unique
          challenges and opportunities to stretch our creativity. And our
          passion for Webflow design has been recognised with an official
          professional partnership.
        </Paragraph>
        <HorizontalTextImageCard />
      </MaxWidthWrapper>
    </div>
  );
};

export default Story;
