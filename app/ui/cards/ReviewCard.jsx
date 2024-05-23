import React from "react";
import Paragraph from "../paragraph/Paragraph";
import H2 from "../heading/H2";
import RoundedImage from "../ImagesComponents/RoundedImage";

const ReviewCard = ({ review }) => {
  return (
    <div className="rounded-lg border-[1px] border-solid border-darkgrey my-10 py-5 px-8 items-center w-full ">
      <div className="flex flex-row justify-between">
        <H2 className="gradient-text p-0 ">{review.customerName}</H2>
        <RoundedImage src={review.profileImage} />
      </div>
      <Paragraph py="py-1" color="text-white">
        {review.companyName}
      </Paragraph>
      <Paragraph py="py-1">{review.review}</Paragraph>
    </div>
  );
};

export default ReviewCard;
