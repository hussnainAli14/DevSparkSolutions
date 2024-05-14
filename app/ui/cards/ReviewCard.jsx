import React from "react";
import Paragraph from "../paragraph/Paragraph";
import H2 from "../heading/H2";
import RoundedImage from "../ImagesComponents/RoundedImage";

const ReviewCard = () => {
  return (
    <div className="rounded-lg border-[1px] border-solid border-darkgrey my-10 py-5 px-8 items-center w-full ">
      <div className="flex flex-row justify-between">
        <H2 className="gradient-text p-0 ">Name</H2>
        <RoundedImage src="/images/avatar.webp" />
      </div>
      <Paragraph py="py-1" color="text-white">
        Breaking Bread
      </Paragraph>
      <Paragraph py="py-1">
        Phunk Creative recently delivered on the branding of our new podcast.
        The team were responsive, professional & a real pleasure to work with.
      </Paragraph>
    </div>
  );
};

export default ReviewCard;
