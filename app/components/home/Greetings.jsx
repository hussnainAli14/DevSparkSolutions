import React from "react";
import GradientWrapper from "../../ui/gradientlayout/GradientWrapper";
import Button from "../../ui/buttons/Button";
import Paragraph from "../../ui/paragraph/Paragraph";
import H1 from "../../ui/heading/H1";
import H2 from "../../ui/heading/H2";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import MotionDiv from "../motionContainers/MotionDiv";
import { fadeInLeftVariant, fadeInRightVariant } from "@/app/lib/variants";
import Image from "next/image";

const Greetings = () => {
  return (
    <GradientWrapper>
      <MaxWidthWrapper className="md:flex-row md:justify-between">
        <MotionDiv
          variants={fadeInLeftVariant}
          className="flex flex-col items-left md:w-[60%] "
        >
          <H1>
            We &apos; re{" "}
            <span className="blue-text gradient-text">DevSpark Solutions.</span>
          </H1>
          <H2>Pleased to meet you.</H2>
          <Paragraph>
            Phunk is a full-service digital marketing agency based out of
            Saltaire, in West Yorkshire, UK. Our niche is storytelling — taking
            your raw ideas and vision and translating them into a clear brand
            narrative, expressed through design, video, copy and UX.
          </Paragraph>
          <Paragraph>
            If you’re looking for a forward-thinking team of creatives to build
            a brand identity that stands out from the crowd, then you’re exactly
            where you need to be.
          </Paragraph>
          <Button
            btnText="Hire Us"
            type="primary"
            width="w-[8rem]"
            href="/contact-us"
          />
        </MotionDiv>
        <MotionDiv variants={fadeInRightVariant} className="text-white">
          <Image
            src="/images/MainIllustration.webp"
            alt="Main Illustration"
            height={100}
            width={400}
            className="w-full"
          />
        </MotionDiv>
      </MaxWidthWrapper>
    </GradientWrapper>
  );
};

export default Greetings;
