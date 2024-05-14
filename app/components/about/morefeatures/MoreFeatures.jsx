import { moreFeatures } from "@/app/lib/data";
import ImageTextSlider from "@/app/ui/global/ImageTextSlider";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import React from "react";

const MoreFeatures = () => {
  return (
    <MaxWidthWrapper className="gap-5 py-20 px-5 " maxWidth="max-w-6xl">
      <ImageTextSlider data={moreFeatures} />
    </MaxWidthWrapper>
  );
};

export default MoreFeatures;
