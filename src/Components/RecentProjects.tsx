"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  gif: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, gif }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl flex flex-col justify-end p-4 border border-[#f6ff68]",
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
        <div className="text relative z-10">
          <h2 className="font-bold text-xl md:text-2xl text-white">{title}</h2>
          <p className="font-normal text-sm md:text-base text-gray-100 my-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export function RecentProjects() {
  const projects: ProjectCardProps[] = [
    {
      title: "Background Overlays",
      description: "This project showcases dynamic background overlays with hover effects.",
      image: "/Hflag-project.png",
      gif: "/backgound.webp",
    },
    {
      title: "Responsive Design",
      description: "A fully responsive web application built with modern technologies.",
      image: "/Hflag-project-card.png",
      gif: "/backgound.webp",
    },
    {
      title: "Interactive UI",
      description: "An interactive user interface with smooth animations and transitions.",
      image: "/images/project3.jpg",
      gif: "/images/project3.gif",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Recent Projects</h1>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}