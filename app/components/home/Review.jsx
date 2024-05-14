"use client";
import ReviewCard from "@/app/ui/cards/ReviewCard";
import H1 from "@/app/ui/heading/H1";
import H2 from "@/app/ui/heading/H2";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import ReviewCardSlider from "@/app/ui/slider/ReviewCardSlider";
import React from "react";

const Review = () => {
  return (
    <div className="py-36">
      <H2 className="text-center">
        What our clients think of{" "}
        <span className="gradient-text">DevSpark Solutions.</span>
      </H2>
      <Paragraph className="text-center">
        We’re honest about our skills and abilities — and we’re delighted that
        our clients agree.
      </Paragraph>
      <ReviewCardSlider />
    </div>
  );
};

export default Review;
