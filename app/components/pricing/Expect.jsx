import { expectedFeatures } from "@/app/lib/data";
import IconWithText from "@/app/ui/cards/IconWithText";
import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import React from "react";

const Expect = () => {
  return (
    <MaxWidthWrapper className="py-32 px-10">
      <H1>
        What to expect when you{" "}
        <span className="gradient-text">subscribe.</span>
      </H1>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 pt-20 md:grid-cols-3 gap-5">
        {expectedFeatures.map((el, index) => (
          <IconWithText
            icon={el.icon}
            heading={el.heading}
            desc={el.desc}
            key={index}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Expect;
