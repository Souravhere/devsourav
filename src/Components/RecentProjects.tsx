"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  gif: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, gif }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4 mx-auto flex items-center justify-center">
      <div
        className={cn(
          "group w-full sm:max-w-[300px] mx-w-[340px] cursor-pointer overflow-hidden relative card sm:h-96 h-[400px] rounded-md shadow-xl flex flex-col justify-end p-4 border text-black",
          "transition-all duration-500"
        )}
      >
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500 group-hover:opacity-0"
        />
        <Image
          src={gif}
          alt={`${title} animation`}
          layout="fill"
          objectFit="cover"
          className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
        <div className="text relative z-10 backdrop-blur- p-3 rounded-l-xl">
          <h2 className="font-bold text-xl md:text-2xl text-black hidden ">{title}</h2>
          <p className="font-normal text-sm md:text-base text-black my-2 hidden">{description}</p>
          <div className="flex items-center">
          <Link href=''
           className="bg-[#f6ff68] px-3 py-1 rounded-full flex items-center justify-center"
          >
            More Info  <MdArrowOutward size={20}/>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export function RecentProjects() {
  const projects: ProjectCardProps[] = [
    {
      title: "Hashpet",
      description: "This project showcases dynamic background overlays with hover effects.",
      image: "/Projects/Hflag-project-card.svg",
      gif: "/backgound.webp",
    },
    {
      title: "Hflag",
      description: "A fully responsive web application built with modern technologies.",
      image: "/Projects/Hashpet-project-card.svg",
      gif: "/backgound.webp",
    },
    {
      title: "Byyte",
      description: "An interactive user interface with smooth animations and transitions.",
      image: "/Projects/Byyte-project-card.svg",
      gif: "/backgound.webp",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Recent Projects</h1>
        <div className="flex w-full items-center justify-center flex-wrap mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}