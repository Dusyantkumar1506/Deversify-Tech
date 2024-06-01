"use client";
import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navSticky, setNavSticky] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      }
      if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const stickyStyle = navSticky
    ? "bg-[#212428] shadow-gray-900 shadow-sm !important"
    : "";

  return (
    <nav
      className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000]`}
    >
      <div className="flex items-center h-[12vh]  justify-between w-[80%] mx-auto">
        <Link href="/" className=" font-logo text-white text-[18px]">
          <span className="text-[30px] md:text-[40px] text-yellow-400">
            Deversify
          </span>
          Tech
        </Link>
        <ul className="md:flex hidden items-center space-x-10">
          <li>
            <a
              className="nav__link"
              href="#home"
              onClick={() => scrollToSection("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#about-us"
              onClick={() => scrollToSection("about-us")}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#services"
              onClick={() => scrollToSection("services")}
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#work"
              onClick={() => scrollToSection("work")}
            >
              Our Work
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="#contact"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </a>
          </li>
        </ul>
        <Bars3CenterLeftIcon
          onClick={openNav}
          className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180"
        />
      </div>
    </nav>
  );
};

export default Nav;
