import { foundersData } from "@/app/lib/data";
import FounderCard from "@/app/ui/cards/FounderCard";
import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import React from "react";

const Founders = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-10 items-center justify-center py-20 ">
        <H1>
          The <span className="gradient-text"> people </span> behind the
          projects.
        </H1>
        <Paragraph className="text-center w-[90%] md:w-1/2" py="0">
          Phunk works because it’s a genuine collaboration between experts —
          equality of ideas, cross-pollination of skills and a healthy obsession
          with quality. Here’s the team that makes it happen.
        </Paragraph>
        <div className="flex flex-row flex-wrap items-center justify-center gap-5">
          {foundersData.map((founder, index) => (
            <FounderCard item={founder} key={index} />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Founders;
