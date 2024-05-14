import { mobileNavItems } from "@/app/lib/data";
import React from "react";
import MobileNavMenuItem from "./MobileNavMenuItem";
import RoundedIconButton from "../buttons/RoundedIconButton";

const MobileNavMenu = ({ handleClick }) => {
  return (
    <div className="transition absolute top-10 z-10 w-full rounded-lg py-10 px-10 overflow-auto bg-white flex flex-col gap-5 ">
      <RoundedIconButton
        className="absolute right-4 top-[5px] cursor-pointer"
        handleClick={handleClick}
      >
        ✖
      </RoundedIconButton>
      {mobileNavItems.map((item, index) => (
        <MobileNavMenuItem
          key={index}
          path={item.path}
          name={item.name}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default MobileNavMenu;
