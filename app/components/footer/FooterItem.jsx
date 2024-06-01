import Link from "next/link";
import React from "react";

const FooterItem = ({ heading, subItems }) => {
  return (
    <div className="flex flex-col md:gap-2">
      {subItems.map((item, index) => (
        <Link
          href={item.path}
          className=" text-darkgrey hover:text-white"
          key={index}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default FooterItem;
