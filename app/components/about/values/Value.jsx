import { valueItems } from "@/app/lib/data";
import ValueCard from "@/app/ui/cards/ValueCard";
import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import React from "react";

const Value = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col justify-center gap-10 items-center pt-20">
        <H1 color="text-white">
          DevSpark Solution <span className="gradient-text">Values.</span>
        </H1>
        <div className="flex flex-row flex-wrap gap-4 justify-center  ">
          {valueItems.map((item, index) => (
            <ValueCard item={item} index={index + 1} key={index} />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Value;
