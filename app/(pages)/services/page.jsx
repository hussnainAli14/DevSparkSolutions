import FinalSection from "@/app/components/home/FinalSection";
import Review from "@/app/components/home/Review";
import Pricing from "@/app/components/services/Pricing";
import ServicesHero from "@/app/components/services/ServicesHero";
import React from "react";

const page = () => {
  return (
    <div className="w-full px-10 md:px-20 ">
      <ServicesHero />
      <Pricing />

      <Review />
      <FinalSection />
    </div>
  );
};

export default page;
