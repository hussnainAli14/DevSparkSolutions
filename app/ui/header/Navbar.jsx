import Image from "next/image";
import React from "react";
import NavItems from "./NavItems";
import Button from "../buttons/Button";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center w-3/4 m-auto">
      <div>
        <Image src="/images/logo.jpeg" alt="Logo" width={50} height={50} />
      </div>
      <NavItems />
      <Button type="primary" btnText={"Contact Us"} />
    </nav>
  );
};

export default Navbar;
