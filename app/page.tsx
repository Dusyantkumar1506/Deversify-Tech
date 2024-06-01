"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";

const Nav = dynamic(() => import("./components/Nav"));
const NavMobile = dynamic(() => import("./components/NavMobile"));
const Hero = dynamic(() => import("./components/Hero"));
const About = dynamic(() => import("./components/About"));
const OurServices = dynamic(() => import("./components/OurServices"));
const Projects = dynamic(() => import("./components/Projects"));
const Contact = dynamic(() => import("./components/Contact"));
const Footer = dynamic(() => import("./components/Footer"));
const Skills = dynamic(() => import("./components/Skills"));

export default function HomePage() {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-hidden ">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />
      {/* hero banner */}
      <Hero />
      {/* about us */}
      <About />
      {/* service page  */}
      <OurServices />
      {/* skill animation */}
      <Skills />
      {/* projects */}
      <Projects />
      {/* contact */}
      <Contact />
      {/* footer */}
      <Footer />
    </div>
  );
}
