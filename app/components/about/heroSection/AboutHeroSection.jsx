import React from "react";
import HeroTextSection from "../../../ui/global/HeroTextSection";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import MotionDiv from "../../motionContainers/MotionDiv";
import { fadeInRightVariant } from "@/app/lib/variants";
import Image from "next/image";

const AboutHeroSection = () => {
  return (
    <MaxWidthWrapper maxWidth="max-w-screen-[1300px]">
      <div className="px-4 sm:px-10 ">
        <div className="bg-featureGradient w-full m-auto flex flex-col lg:flex-row justify-between items-center px-5 md:px-20 py-12 rounded-lg  ">
          <HeroTextSection
            tagName="Our Story"
            heading={
              <>
                Everything you need to know{" "}
                <span className="gradient-text">about DevCrew.</span>
              </>
            }
            para="Find out more about what makes us tick as a company, why we do what we
        do, and who’s behind the unique work we create. Or, if you prefer, give
        us a call and we’ll tell you ourselves."
          />
          <MotionDiv variants={fadeInRightVariant}>
            <Image
              src="/Images/About.png"
              alt="About Illustration"
              height={100}
              width={300}
              className="w-full"
            />
          </MotionDiv>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default AboutHeroSection;
