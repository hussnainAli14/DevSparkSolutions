import React from "react";
import HeroTextSection from "../../../ui/global/HeroTextSection";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";

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
                <span className="gradient-text">about DevSpark Solutions.</span>
              </>
            }
            para="Find out more about what makes us tick as a company, why we do what we
        do, and who’s behind the unique work we create. Or, if you prefer, give
        us a call and we’ll tell you ourselves."
          />
          <div>Image Section here</div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default AboutHeroSection;
