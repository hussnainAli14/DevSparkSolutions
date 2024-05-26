import Image from "next/image";
import Link from "next/link";
import React from "react";
import Paragraph from "../paragraph/Paragraph";

const MobileNavMenuItem = ({ icon, name, path, description, handleClick }) => {
  return (
    <div className="flex flex-row items-center gap-x-10">
      <Image src={icon} alt={name} height={24} width={24} />
      <Link
        href={path}
        onClick={() => {
          handleClick();
        }}
      >
        <p className="font-bold text-lg text-herobackgroundcolor ">{name}</p>
        <Paragraph py="0" color="text-black" className="font-normal">
          {description}
        </Paragraph>
      </Link>
    </div>
  );
};

export default MobileNavMenuItem;
