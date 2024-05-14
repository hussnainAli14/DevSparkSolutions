import Founders from "@/app/components/about/founders/Founders";
import AboutHeroSection from "@/app/components/about/heroSection/AboutHeroSection";
import MoreFeatures from "@/app/components/about/morefeatures/MoreFeatures";
import Story from "@/app/components/about/origin/Story";
import Value from "@/app/components/about/values/Value";
import FinalSection from "@/app/components/home/FinalSection";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutHeroSection />
      <Story />
      <Value />
      <MoreFeatures />
      <Founders />
      <div className="px-5">
        <FinalSection />
      </div>
    </div>
  );
};

export default page;
