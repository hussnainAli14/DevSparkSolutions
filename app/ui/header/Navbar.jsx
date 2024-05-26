"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavItems from "./NavItems";
import Button from "../buttons/Button";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 800);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {isMobile ? (
        <MobileNavbar />
      ) : (
        !isMobile && (
          <nav
            className={`flex flex-row  items-center w-[95%] lg:w-[85%] m-auto ${
              isScrolled
                ? "fixed top-0 left-0 right-0 z-10 justify-center mt-2 "
                : "justify-between"
            }`}
          >
            {!isScrolled && (
              <Link href="/">
                <Image
                  src="/Images/logo.png"
                  alt="Logo"
                  width={125}
                  height={50}
                  className="w-auto h-auto cursor-pointer "
                />
              </Link>
            )}
            <NavItems />
            {!isScrolled && (
              <Button
                type="primary"
                btnText={"Contact Us"}
                href="/contact-us"
              />
            )}
          </nav>
        )
      )}
    </>
  );
};

export default Navbar;
