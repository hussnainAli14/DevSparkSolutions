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
            Located in [Your Location], [Your Company] is a dynamic digital
            agency specializing in a spectrum of services tailored to elevate
            your brand presence. With a keen focus on Web Development, Mobile
            App Development, Graphic Design, SEO, Social Media Marketing Agency
            (SMMA), and lead generation, we are dedicated to bringing your
            digital dreams to life.
          </Paragraph>
          <Paragraph py="py-1" className="pb-4">
            If you are ready to take your brand to new heights and make a
            lasting impression on your audience, partner with [Your Company] for
            innovative solutions and unmatched creativity. Let us be the driving
            force behind your digital success story.
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
