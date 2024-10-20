"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Web Development",
      description: "Custom websites tailored to your needs using modern technologies.",
      longDescription: "Our web development services include full-stack development, responsive design, and integration with various APIs and databases. We use the latest frameworks and technologies to ensure your website is fast, secure, and scalable.",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and beautiful interfaces that enhance user experience.",
      longDescription: "Our UI/UX design process focuses on creating user-centered designs that are both aesthetically pleasing and functional. We conduct user research, create wireframes and prototypes, and iterate based on user feedback to ensure the best possible user experience.",
      gradient: "from-purple-400 via-purple-500 to-purple-600",
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android.",
      longDescription: "We develop native and cross-platform mobile applications that provide seamless experiences across iOS and Android devices. Our mobile app development process includes ideation, design, development, testing, and deployment to app stores.",
      gradient: "from-green-400 via-green-500 to-green-600",
    },
  ];

  return (
    <div className="py-20 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <PinContainer
                title={project.title}
                href="/"
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
                  <div className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${project.gradient}`} />
                </div>
              </PinContainer>
              <AnimatePresence>
                {selectedProject === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="absolute inset-0 bg-white p-4 rounded-lg shadow-lg z-10 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.longDescription}</p>
                    </div>
                    <div className="flex justify-between">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        Close
                      </button>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Learn More
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