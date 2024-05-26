"use client";
import H2 from "@/app/ui/heading/H2";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import ReviewCardSlider from "@/app/ui/slider/ReviewCardSlider";
import React from "react";

const Review = ({ py, pt }) => {
  return (
    <div className={`${py ? py : "py-36 "} ${pt} `}>
      <H2 isAnimated={true} className="text-center">
        What our clients think of{" "}
        <span className="gradient-text">DevSpark Solutions.</span>
      </H2>
      <Paragraph isAnimated={true} className="text-center">
        We’re honest about our skills and abilities — and we’re delighted that
        our clients agree.
      </Paragraph>
      <ReviewCardSlider />
    </div>
  );
};

export default Review;
