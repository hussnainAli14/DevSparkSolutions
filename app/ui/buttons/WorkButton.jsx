import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const WorkButton = ({ btnText = "", path = "/", id }) => {
  return (
    <Link
      className={`text-white border-b-2 border-b-white pb-2 flex flex-row justify-between items-center w-[10rem] `}
      href={{ pathname: path, query: { id: id } }}
    >
      <p>{btnText}</p>
      <MdArrowOutward />
    </Link>
  );
};

export default WorkButton;
