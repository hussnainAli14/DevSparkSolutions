import React from "react";
import { MdArrowOutward } from "react-icons/md";

const WorkButton = ({ btnText = "" }) => {
  return (
    <button
      className={`text-white border-b-2 border-b-white pb-2 flex flex-row justify-between items-center w-[10rem] `}
    >
      <p>{btnText}</p>
      <MdArrowOutward />
    </button>
  );
};

export default WorkButton;
