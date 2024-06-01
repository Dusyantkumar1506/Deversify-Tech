import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NavMobile = ({ showNav, closeNav }: Props) => {
  const navOpenStyle = showNav ? "translate-x-0" : "-translate-x-full";
  const overlayOpacity = showNav ? "opacity-70" : "opacity-0";

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeNav(); // Close the mobile navigation after clicking on a link
    }
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 transform ${navOpenStyle} transition-transform duration-500 z-[10000] left-0 right-0 bottom-0 bg-black ${overlayOpacity} w-screen h-screen`}
      ></div>
      <ul
        className={`text-white fixed flex items-center flex-col justify-center h-screen transform ${navOpenStyle} transition-transform duration-500 delay-300 w-4/5 bg-red-600 space-y-14 z-[10006]`}
      >
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            href="#home"
            onClick={() => scrollToSection("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            href="#about-us"
            onClick={() => scrollToSection("about-us")}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            href="#services"
            onClick={() => scrollToSection("services")}
          >
            Our Services
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            href="#blog"
            onClick={() => scrollToSection("work")}
          >
            Our Work
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            href="#contact"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </a>
        </li>

        <XMarkIcon
          onClick={closeNav}
          className="absolute top-4 right-4 w-10 h-10 text-white"
        />
      </ul>
    </div>
  );
};

export default NavMobile;
