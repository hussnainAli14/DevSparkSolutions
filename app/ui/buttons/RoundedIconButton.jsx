import Link from "next/link";
import React from "react";

const RoundedIconButton = ({ children, className, handleClick, href }) => {
  return href ? (
    <Link
      className={` rounded-full bg-white flex items-center cursor-pointer ${className} `}
      href={href}
    >
      {children}
    </Link>
  ) : (
    <div
      className={` rounded-full bg-white flex items-center cursor-pointer ${className} `}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default RoundedIconButton;
