import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import React from "react";

const FeaturesInSubscription = () => {
  return (
    <>
      <MaxWidthWrapper className="pt-32 ">
        <H1 color="text-white" className="text-center">
          Designs of any size, style or purpose all included in{" "}
          <span className="gradient-text"> your subscription.</span>
        </H1>
        <Paragraph className="text-center sm:text-start">
          We’re honest about our skills and abilities — and we’re delighted that
          our clients agree.
        </Paragraph>
      </MaxWidthWrapper>
    </>
  );
};

export default FeaturesInSubscription;
