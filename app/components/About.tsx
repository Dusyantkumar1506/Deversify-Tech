import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const About = () => {
  return (
    <section id="about-us" className="mt-[-3.8rem] bg-black pb-[3rem]">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid  items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <p className="heading_text">About Us</p>
          <h1 className="heading_primary">
            Professional <span className="text-yellow-400">Website</span> for
            your business
          </h1>
          <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
            We are a team of dedicated professionals passionate about crafting
            stunning and effective websites tailored to your business needs.
            With years of experience in the industry, we deliver top-notch
            solutions to help your brand stand out in the digital landscape.
          </p>
          <div className="mt-[2rem] space-y-3">
            <div
              data-aos="fade-right"
              data-aos-placement="top-center"
              data-aos-delay="200"
              className="flex items-center space-x-4"
            >
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Frontend Development</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-placement="top-center"
              data-aos-delay="400"
              className="flex items-center space-x-4"
            >
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Backend Development</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-placement="top-center"
              data-aos-delay="600"
              className="flex items-center space-x-4"
            >
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Web Development</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-placement="top-center"
              data-aos-delay="800"
              className="flex items-center space-x-4"
            >
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">CMS Development</p>
            </div>
          </div>
        </div>

        <div className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
            <div
              data-aos="zoom-in"
              data-aos-placement="top-center"
              data-aos-delay="200"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[30px] text-black font-bold">
                Happy Customers
              </p>
              <p className="text-[18px] text-black  font-medium">
                Clients Delighted
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-placement="top-center"
              data-aos-delay="400"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[30px] text-black font-bold">
                Excited Partners
              </p>
              <p className="text-[18px] text-black  font-medium">
                Joyful Partners
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-placement="top-center"
              data-aos-delay="600"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[30px] text-black font-bold">
                Positive Feedback
              </p>
              <p className="text-[18px] text-black  font-medium">Users Happy</p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-placement="top-center"
              data-aos-delay="800"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[30px] text-black font-bold">
                Pleased Clients
              </p>
              <p className="text-[18px] text-black  font-medium">
                Satisfied Users
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
