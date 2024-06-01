import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  title: string;
  para: string;
  link: string;
}

const ProjectCards = ({ image, title, para, link }: Props) => {
  return (
    <div className="pt-[4rem]">
      <Link target="_blank" href={link} passHref>
        <div className="p-4 rounded-xl relative cursor-pointer hover:rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
          <Image
            src={`${image}`}
            alt={title}
            width={300}
            height={300}
            className="object-contain rounded-xl mx-auto shadow-md"
          />
          <div className="pt-[1rem]">
            <h1 className="text-white text-[25px]">{title}</h1>
            <p className="text-white text-[15px] opacity-65 mt-[1rem]">
              {para}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCards;
