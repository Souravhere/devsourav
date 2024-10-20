"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export function RecentProjectsDemo() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with advanced features.",
      image: "/Hflag-project.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "MongoDB"],
    },
    {
      title: "Social Media Dashboard",
      description: "Comprehensive analytics dashboard for social media management.",
      image: "/Hflag-project.png",
      technologies: ["React", "D3.js", "Node.js", "Express", "PostgreSQL"],
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform mobile app for fitness tracking and workouts.",
      image: "/Hflag-project.png",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
    },
  ];

  return (
    <div className="py-20 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">My Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <PinContainer
                title={project.title}
                onTap={() => setSelectedProject(index)}
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-gray-800 w-[18rem] h-[18rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-gray-900">
                    {project.title}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-gray-600">
                      {project.description}
                    </span>
                  </div>
                  <div className="flex-1 w-full mt-4 relative overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </PinContainer>
              <AnimatePresence>
                {selectedProject === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-0 left-0 right-0 bg-white p-4 rounded-lg shadow-lg z-10"
                  >
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        Close
                      </button>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        View Project
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}