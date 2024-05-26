import React from "react";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import HeroTextSection from "@/app/ui/global/HeroTextSection";
import Image from "next/image";
import MotionDiv from "../motionContainers/MotionDiv";
import { fadeInRightVariant } from "@/app/lib/variants";

const PricingHeroSection = () => {
  return (
    <MaxWidthWrapper maxWidth="max-w-screen-[1300px]">
      <div className="px-4 sm:px-10 ">
        <div className="bg-featureGradient w-full m-auto flex flex-col lg:flex-row justify-between items-center px-5 md:px-20 py-12 rounded-lg  ">
          <HeroTextSection
            tagName={"Pricing"}
            heading={
              <>
                Choose a pricing model that works{" "}
                <span className="gradient-text"> for you.</span>
              </>
            }
            para="We offer a choice of subscription plans so you can request quality design work on-demand — or fixed pricing for those one-off projects. It’s your choice."
          />
          <MotionDiv className="hidden sm:block" variants={fadeInRightVariant}>
            <Image
              src="/Images/Pricing.png"
              alt="Pricing Illustration"
              width={300}
              height={100}
              className="w-full"
            />
          </MotionDiv>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default PricingHeroSection;
