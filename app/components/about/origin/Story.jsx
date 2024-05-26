import ImageWithButton from "@/app/ui/ImagesComponents/ImageWithButton";
import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import React from "react";
import Journey from "./Journey";
import H2 from "@/app/ui/heading/H2";
import HorizontalTextImageCard from "@/app/ui/cards/HorizontalTextImageCard";
import { fadeInLeftVariant } from "@/app/lib/variants";

const Story = () => {
  return (
    <div className="bg-white my-20 py-20 px-5 md:px-0 ">
      <MaxWidthWrapper hasItemsCentered={false}>
        <H1
          isAnimated={true}
          variants={fadeInLeftVariant}
          color="text-black"
          className="text-center md:text-start"
        >
          The origin <span className="gradient-text">story</span>
        </H1>
        <Paragraph
          color="text-black/70"
          className="md:w-1/2 font-semibold text-center md:text-start "
          isAnimated={true}
          variants={fadeInLeftVariant}
        >
          The partnership behind Dev Spark Solutions began a long time before
          the company was officially established. Our founders Raja Hussnain Ali
          and Bilal Rehman first met at college, both studying Computer Science
          as their major courses —never imagining that they would be starting a
          company on their own.
        </Paragraph>
        <ImageWithButton src="/images/storyMain.webp" />

        <Journey />
        <ImageWithButton src="/images/storyMain.webp" />
        <H2
          isAnimated={true}
          variants={fadeInLeftVariant}
          color="text-black"
          className="pt-10"
        >
          Over the years,
        </H2>
        <Paragraph
          isAnimated={true}
          variants={fadeInLeftVariant}
          py="py-1"
          color="text-black/70"
          className="md:w-1/2 w-full font-semibold "
        >
          We always strive to give our best, ensuring that every client is
          satisfied with the results. Our commitment to excellence has been the
          cornerstone of our growth, and we continue to build strong, lasting
          relationships with our clients. Today, we look back with pride at how
          far we have come and look forward to future opportunities to create,
          innovate, and excel.
        </Paragraph>
        <HorizontalTextImageCard />
      </MaxWidthWrapper>
    </div>
  );
};

export default Story;
