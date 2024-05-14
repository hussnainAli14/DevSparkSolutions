"use client";

import React from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const PriceOptions = ({
  priceRange,
  index = 0,
  handleOpen,
  isOpen = false,
  onPriceRangeClick,
  selectedPriceRange,
  hasIcon = false,
  isClickable = true,
}) => {
  return (
    <div className="flex flex-row items-center gap-5 md:gap-10 mb-5 ">
      <button
        className={`w-[85%] py-3 border-[1px] border-solid border-white/50 ${
          selectedPriceRange === priceRange ? "text-royalblue" : "text-darkgrey"
        } font-semibold hover:text-white rounded-2xl text-center`}
        onClick={(e) => {
          e.preventDefault();

          if (isClickable) {
            onPriceRangeClick(e, index);
            handleOpen();
          }
        }}
      >
        {priceRange}
      </button>
      {hasIcon && (
        <div className="bg-lightBlack rounded-lg p-2 cursor-pointer ">
          {!isOpen ? (
            <MdOutlineKeyboardArrowDown
              color="white"
              size={30}
              onClick={() => handleOpen()}
            />
          ) : (
            <MdOutlineKeyboardArrowUp
              color="white"
              size={30}
              onClick={() => handleOpen()}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default PriceOptions;
