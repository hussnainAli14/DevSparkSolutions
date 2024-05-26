import FinalSection from "@/app/components/home/FinalSection";
import Expect from "@/app/components/pricing/Expect";
import FeaturesInSubscription from "@/app/components/pricing/FeaturesInSubscription";
import Plan from "@/app/components/pricing/Plan";
import PricingHeroSection from "@/app/components/pricing/PricingHero";
import React from "react";

const page = () => {
  return (
    <div>
      <PricingHeroSection />
      <FeaturesInSubscription />
      <Expect />
      <Plan />
      <FinalSection />
    </div>
  );
};

export default page;
