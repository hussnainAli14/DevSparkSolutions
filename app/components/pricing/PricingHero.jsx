import React from "react";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import HeroTextSection from "@/app/ui/global/HeroTextSection";

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
          <div>Image Section here</div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default PricingHeroSection;
