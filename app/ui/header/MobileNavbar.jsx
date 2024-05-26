"use client";
import Image from "next/image";
import Button from "../buttons/Button";
import { useState } from "react";
import MobileNavMenu from "./MobileNavMenu";
import Link from "next/link";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" relative flex flex-row justify-between items-center w-[95%] m-auto">
      {isOpen && <MobileNavMenu handleClick={handleOpen} />}
      <Link href="/">
        <Image
          src="/Images/logo.png"
          alt="Logo"
          width={125}
          height={50}
          className="w-auto h-auto"
        />
      </Link>
      <button
        className="rounded-full border-solid border-[1px] text-center text-white py-2 px-5 text-sm border-white/70"
        onClick={handleOpen}
      >
        Menu
      </button>
    </nav>
  );
};

export default MobileNavbar;
