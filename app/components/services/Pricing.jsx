import Button from "@/app/ui/buttons/Button";
import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import React from "react";
import MotionDiv from "../motionContainers/MotionDiv";
import { fadeInBottomVariant } from "@/app/lib/variants";

const Pricing = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center justify-center">
        <H1 isAnimated={true}>
          <span className="gradient-text">Pricing</span> -made simple
        </H1>
        <Paragraph isAnimated={true} className=" w-full md:w-3/4 text-center">
          Costing a design project can be a nightmare. We’ve made it easy for
          our clients by offering a choice of subscription packages, so you can
          see exactly what you’re getting, and match it to your budget. Or for
          ad-hoc work, we’ll give you a single all-in price so there are no
          surprises later.
        </Paragraph>
        <MotionDiv
          variants={fadeInBottomVariant}
          className="flex flex-col sm:flex-row justify-between items-center gap-5"
        >
          <Button btnText="See our plans" type="primary" href="/pricing" />
          <Button
            btnText="Unique Project"
            bgColor="bg-white"
            textColor="text-white"
            type="primary"
            href="/contact-us"
          />
        </MotionDiv>
      </div>
    </MaxWidthWrapper>
  );
};

export default Pricing;
