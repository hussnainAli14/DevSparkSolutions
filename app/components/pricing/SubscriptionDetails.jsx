import { subscriptionDetails } from "@/app/lib/data";
import FounderCard from "@/app/ui/cards/FounderCard";
import TextImgCard from "@/app/ui/cards/TextImgCard";
import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import React from "react";

const SubscriptionDetails = () => {
  return (
    <MaxWidthWrapper className="py-32 px-10">
      <H1>
        Super Simple <span className="gradient-text">Subscriptions.</span>
      </H1>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-5 md:flex-nowrap pt-10 ">
        {subscriptionDetails.map((el, index) => (
          <FounderCard
            index={index + 1}
            showIndex={true}
            showTag={false}
            key={index}
            item={el}
            imgWidth={100}
            imgHeight={80}
            imgBg="bg-black"
            width="w-full"
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default SubscriptionDetails;
