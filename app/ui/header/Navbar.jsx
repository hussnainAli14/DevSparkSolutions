import Image from "next/image";
import React from "react";
import NavItems from "./NavItems";
import Button from "../buttons/Button";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center w-[80%] m-auto">
      <div>
        <Image src="/images/logo.png" alt="Logo" width={125} height={50} className="w-auto h-auto" />
      </div>
      <NavItems />
      <Button type="primary" btnText={"Contact Us"} />
    </nav>
  );
};

export default Navbar;
