import React from "react";
import ServiceCards from "./ServiceCards";

const OurServices = () => {
  return (
    <section id="services" className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="text-center">
        <p className="heading_text">Popular Services</p>
        <h1 className="heading_primary">
          My Special <span className="text-yellow-300">Services </span>For You
        </h1>
      </div>
      {/* service cards */}
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        <div
          data-aos="fade-up"
          data-aos-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCards
            title="React JS / Next JS"
            num="01"
            para="Create fast, responsive web apps with React JS and Next JS technology."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-placement="top-center"
          data-aos-delay="400"
        >
          <ServiceCards
            title="Fullstack Website"
            num="02"
            para="Elevate your digital presence with comprehensive full-stack website solutions."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-placement="top-center"
          data-aos-delay="600"
        >
          <ServiceCards
            title="WordPress Website"
            num="03"
            para="Empower your online presence with customizable WordPress solutions."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-placement="top-center"
          data-aos-delay="800"
        >
          <ServiceCards
            title="Shopify Website"
            num="04"
            para="Craft captivating online experiences with stunning Shopify store designs."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-placement="top-center"
          data-aos-delay="1000"
        >
          <ServiceCards
            title="Web Designing"
            num="05"
            para="Leave a lasting impression with captivating web designs tailored to your brand."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-placement="top-center"
          data-aos-delay="1200"
        >
          <ServiceCards
            title="Video Editing"
            num="06"
            para="Bring your visual content to life with creative video editing services."
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
