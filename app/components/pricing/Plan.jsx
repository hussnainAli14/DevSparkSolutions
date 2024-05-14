import { subscriptionPlans } from "@/app/lib/data";
import PricingCard from "@/app/ui/cards/PricingCard";
import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import React from "react";

const Plan = () => {
  return (
    <MaxWidthWrapper maxWidth="max-w-[1350px]" className="pb-32">
      <H1>
        Pick the perfect <span className="gradient-text">Plan.</span>
      </H1>
      <Paragraph>
        Choose a plan that is right for you — Plans can be paused or cancelled
        at anytime.
      </Paragraph>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-10 px-20">
        {subscriptionPlans.map((plan, index) => (
          <PricingCard
            headingText={plan.headingText}
            planName={plan.planName}
            hasAddons={plan.hasAddOns}
            inclusions={plan.inclusions}
            key={index}
            isPro={plan.isPro}
            addOnPrice={plan.addOnPrice}
            addOnService={plan.addOnService}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Plan;
