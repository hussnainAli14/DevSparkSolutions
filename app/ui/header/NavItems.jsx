"use client";

import { navItems } from "@/app/lib/data";
import Link from "next/link";
import React, { useState } from "react";

const NavItems = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  return (
    <ul className="flex flex-row justify-between items-center gap-10 border-solid border-[1px] border-t-darkgrey/20 border-white/30 py-1 px-6 rounded-2xl bg-black ">
      {navItems.map((item) => (
        <li
          key={item.name}
          onMouseEnter={() => {
            handleMouseEnter(item.name);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={item.path}
            className={`${
              hoveredItem
                ? hoveredItem !== item.name
                  ? "text-darkgrey"
                  : "text-white "
                : "text-white "
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
