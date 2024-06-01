import React from "react";
import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  x: string | number;
  y: string | number;
}
const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-transparent py-3  px-6 absolute text-white shadow-[#FFFF00]  md:hover:bg-yellow-300  lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 lg:bg-white lg:text-black md:bg-white md:text-black"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      //   viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="pt-[2.5rem] pb-[3rem] bg-[#0b0c13]">
      <h2 className=" heading_primary text-center pb-[4rem] ">
        What <span className="text-yellow-300">Technologies</span> We Used
      </h2>
      <div className="w-full h-[60vh] relative flex items-center justify-center rounded-full bg-circularLight lg:h-[80vh] sm:h-[60vh]">
        <motion.div
          className="flex justify-center items-center rounded-full font-semibold bg-white  p-5  shadow-[#FFFF00] lg:p-6 md:p-4 text-sm"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="-0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Web Design" x="15vw" y="-12vw" />
        <Skill name="Wordpress" x="32vw" y="-5vw" />
        <Skill name="Shopify" x="0vw" y="-18vw" />
        <Skill name="After Effects" x="25vw" y="15vw" />
        <Skill name="NodeJS" x="-25vw" y="15vw" />
      </div>
    </div>
  );
};

export default Skills;
