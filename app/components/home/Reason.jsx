import React from "react";
import ImageTextSlider from "../../ui/global/ImageTextSlider";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import H1 from "@/app/ui/heading/H1";
import { reasons } from "@/app/lib/data";

const Reason = () => {
  return (
    <MaxWidthWrapper className="gap-5 py-20 " maxWidth="max-w-6xl">
      <H1 className=" py-14">
        Why work <span className="gradient-text">with us?</span>
      </H1>
      <ImageTextSlider data={reasons} />
    </MaxWidthWrapper>
  );
};

export default Reason;
