import React from "react";
import H1 from "../heading/H1";
import Paragraph from "../paragraph/Paragraph";
import Button from "../buttons/Button";
import Tag from "../tags/Tag";
import { AiFillCheckCircle } from "react-icons/ai";

const PricingCard = ({
  headingText,
  planName,
  inclusions = [],
  hasAddons,
  price,
  bgColor = "bg-lightGray",
  isPro = false,
  addOnPrice,
  addOnService,
}) => {
  const cardBg = isPro ? "bg-pricingCardGradient" : bgColor;
  return (
    <div
      className={`relative text-white py-5 px-10 border-[1px] border-solid border-white/70 ${cardBg} rounded-xl flex flex-col gap-5 `}
    >
      {isPro && (
        <div className="absolute flex items-center justify-center bg-white text-center text-black rounded-3xl py-2 px-3 top-[-15px] left-[35%] ">
          <p>Most Popular</p>
        </div>
      )}
      <p>{headingText}</p>
      <H1>{planName}</H1>
      <Paragraph py="py-0" color="text-white">
        What is included?
      </Paragraph>
      <ul>
        {inclusions.map((el, index) => (
          <li className="flex flex-row gap-x-3" key={index}>
            <AiFillCheckCircle color="white" size={20} />
            <p>{el}</p>
          </li>
        ))}
      </ul>
      <p className="text-2xl">{price}</p>
      {hasAddons ? (
        <>
          <Button
            btnText="Singup for standard"
            type="primary"
            width="w-full"
            className="w-full align-middle "
          />
          <button
            className={`text-white border-b-2 self-center border-b-white pb-2 px-3 flex flex-row justify-center items-center w-fit `}
          >
            <p>Book a call</p>
          </button>
          <div className="flex flex-col md:flex-row gap-y-5 gap-x-10 items-center">
            <Tag
              tagName="Add On"
              className="justify-center text-center md:w-fit"
            />
            <div>
              <p>{addOnService}</p>
              <p>{addOnPrice}</p>
            </div>
          </div>
        </>
      ) : (
        <div className=" flex flex-col gap-5 py-10 border-t-2 border-solid border-t-white">
          <div className="flex flex-row justify-between items-center">
            <p>hello@phunk.com</p>
            <p>Tel:1234567890</p>
          </div>
          <Button
            btnText="Book a call"
            type="primary"
            bgColor="bg-white"
            textColor="black"
            width="w-full"
          />
          <Button
            btnText="Write a message"
            type="primary"
            bgColor="bg-black"
            width="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default PricingCard;
