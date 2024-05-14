import React from "react";
import TextImgCard from "../../ui/cards/TextImgCard";
import Button from "../../ui/buttons/Button";
import H1 from "../../ui/heading/H1";
import { features } from "@/app/lib/data";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";

const KeyFeatures = () => {
  const totalItems = features.length;
  return (
    <MaxWidthWrapper className="gap-10">
      <H1 className="text-center">
        <span className="gradient-text"> Laser Focused </span> on 3 <br /> key
        aspects of design.
      </H1>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <TextImgCard
            feature={feature}
            key={index}
            SrNo={index + 1}
            maxItems={totalItems}
          />
        ))}
      </div>
      <div className="flex flex-row gap-4">
        <Button btnText="See our plans" href="/pricing" />
        <Button
          btnText="Unique Project"
          bgColor="bg-white"
          hoverColor="bg-transparent"
          textColor="black"
          href="/contact-us"
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default KeyFeatures;
