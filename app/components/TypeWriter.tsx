import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  return (
    <TypeAnimation
      sequence={[
        "Web design",
        1000,
        "Development",
        1000,
        "Video editing",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white"
      repeat={Infinity}
    />
  );
};

export default TypeWriter;
