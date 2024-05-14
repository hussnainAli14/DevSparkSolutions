"use client";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Calendar from "./Calendar";

const BookCall = () => {
  const [openCalendar, setOpenCalendar] = useState(false);

  const handleOpenCalendar = () => {
    setOpenCalendar(!openCalendar);
  };

  return (
    <div
      className="py-10 px-2 lg:px-12 bg-formGradient rounded-xl relative border-[1px] border-solid border-white/50 cursor-pointer hover:bg-pricingCardGradient "
      onClick={handleOpenCalendar}
    >
      <div className=" flex flex-row justify-center md:justify-between items-center">
        <Calendar openCalender={openCalendar} />

        <p className="text-white text-3xl text-center">Book a Call</p>
        <p></p>
        {/* <FaPhoneAlt color="white" className="hidden md:block" size={25} /> */}
      </div>
      <Paragraph color="text-white" className="text-2xl text-center">
        Pick a time and date that suits you, and we will setup a video and voice
        call - whichever works best.
      </Paragraph>
    </div>
  );
};

export default BookCall;
