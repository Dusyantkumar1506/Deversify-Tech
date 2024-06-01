import React from "react";
import TypeWriter from "./TypeWriter";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg"
    >
      <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
          <div>
            <h1 data-aos="fade-right" className="text-[#c4cfde] mb-[1.3rem]">
              Crafting Your Digital Vision
            </h1>
            <div data-aos="fade-left" data-aos-delay="400">
              <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[3rem] text-white">
                <span className="text-yellow-300">Deversify Tech</span>
              </h1>
              <TypeWriter />
            </div>
            {/* type animation*/}

            <p
              data-aos="fade-up"
              data-aos-delay="800"
              className="mt-[1rem] text-[15px] md:text-[17px] text-[#c4cfde]"
            >
              Unlock your digital identity with Deversify Tech. Elevate your
              brand with innovative solutions.
            </p>
            <div className="mt-6">
              <button
                data-aos="zoom-in"
                data-aos-delay="1200"
                className="relative flex h-[50px] w-40 rounded-lg items-center font-semibold justify-center overflow-hidden bg-red-600 bg-gre text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-yellow-500 before:duration-500 before:ease-out hover:shadow-yellow-300 hover:before:h-56 hover:before:w-56"
                onClick={() => scrollToSection("contact")}
              >
                <span className="relative z-10">Hire Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
