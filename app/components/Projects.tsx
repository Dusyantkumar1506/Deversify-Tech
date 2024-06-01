import React from "react";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <section id="work" className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading_text">Recent Works</p>
        <h1 className=" heading_primary">
          Our Best <span className="text-yellow-300">Projects</span>
        </h1>
      </div>
      {/* projects cards */}
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]  items-center">
        <div
          data-aos="flip-left"
          data-aos-placement="top-center"
          data-aos-delay="200"
        >
          <ProjectCards
            title="E-commerce Website"
            image="/images/cushion guru.png"
            para=""
            link="https://cushionguru.com/"
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-placement="top-center"
          data-aos-delay="300"
        >
          <ProjectCards
            title="E-commerce Website"
            image="/images/baka.png"
            para=""
            link="https://bakastudio.in/"
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-placement="top-center"
          data-aos-delay="400"
        >
          <ProjectCards
            title="Astrology Website"
            image="/images/astralogy.png"
            para=""
            link="https://loverashifal.com/"
          />
        </div>
      </div>

      {/* web design cards */}

      <div className="pt-[3rem] text-center">
        <h1 className=" heading_primary">
          Our <span className="text-yellow-300">Web Designing</span> Projects
        </h1>
      </div>
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]  items-center">
        <div
          data-aos="flip-up"
          data-aos-placement="top-center"
          data-aos-delay="200"
        >
          <ProjectCards
            title="Paradise Website Design"
            image="/images/jungle web design.png"
            para=""
            link=""
          />
        </div>
        <div
          data-aos="flip-up"
          data-aos-placement="top-center"
          data-aos-delay="300"
        >
          <ProjectCards
            title="Footify Website Design"
            image="/images/shoes design.png"
            para=""
            link=""
          />
        </div>
        <div
          data-aos="flip-up"
          data-aos-placement="top-center"
          data-aos-delay="400"
        >
          <ProjectCards
            title="GYM Website Design"
            image="/images/gym design.png"
            para=""
            link=""
          />
        </div>
      </div>

      {/* video editing projects
      <div className="pt-[3rem] text-center">
        <h1 className=" heading_primary">
          Our <span className="text-yellow-300">Video Editing</span> Projects
        </h1>
      </div>
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]  items-center">
        <div
          data-aos="flip-right"
          data-aos-placement="top-center"
          data-aos-delay="200"
        >
          <ProjectCards
            title="E-commerce Website"
            image="/images/deversify.png"
            para=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            dolorem rem, libero quam id perspiciatis molestiae vero iusto
            facilis aperiam necessitatibus veritatis cum similique quidem?"
          />
        </div>
        <div
          data-aos="flip-right"
          data-aos-placement="top-center"
          data-aos-delay="300"
        >
          <ProjectCards
            title="E-commerce Website"
            image="/images/deversify.png"
            para=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            dolorem rem, libero quam id perspiciatis molestiae vero iusto
            facilis aperiam necessitatibus veritatis cum similique quidem?"
          />
        </div>
        <div
          data-aos="flip-right"
          data-aos-placement="top-center"
          data-aos-delay="400"
        >
          <ProjectCards
            title="E-commerce Website"
            image="/images/deversify.png"
            para=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            dolorem rem, libero quam id perspiciatis molestiae vero iusto
            facilis aperiam necessitatibus veritatis cum similique quidem?"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Projects;
