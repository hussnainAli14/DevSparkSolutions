"use client";

import { foundersData } from "@/app/lib/data";
import FounderCard from "@/app/ui/cards/FounderCard";
import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import React, { useState } from "react";

const Founders = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const handleToggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-10 items-center justify-center py-20 ">
        <H1 isAnimated={true} className="text-center sm:text-start">
          The <span className="gradient-text"> people </span> behind the
          projects.
        </H1>
        <Paragraph
          isAnimated={true}
          className="text-center w-[90%] md:w-1/2"
          py="0"
        >
          Phunk works because it’s a genuine collaboration between experts —
          equality of ideas, cross-pollination of skills and a healthy obsession
          with quality. Here’s the team that makes it happen.
        </Paragraph>
        <div className="flex flex-row flex-wrap items-center md:items-start justify-center gap-5">
          {foundersData.map((founder, index) => (
            <FounderCard
              item={founder}
              key={index}
              index={index}
              isExpanded={expandedCards[index]}
              handleToggleExpand={() => handleToggleExpand(index)}
            />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Founders;
