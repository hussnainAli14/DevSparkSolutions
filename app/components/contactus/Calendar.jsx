"use client";
import React, { useRef } from "react";
import { PopupButton, PopupModal, PopupWidget } from "react-calendly";

const Calendar = ({ openCalender }) => {
  const rootRef = useRef(null);

  return (
    <div ref={rootRef}>
      <PopupModal
        open={openCalender}
        url="https://calendly.com/hussnainraja768"
        rootElement={rootRef.current}
        text=""
        className="absolute bg-transparent w-full h-full overflow-y-hidden"
      />
    </div>
  );
};

export default Calendar;
