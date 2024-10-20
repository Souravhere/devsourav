"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with advanced features.",
    image: "/Hflag-project.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "MongoDB"],
    date: "June 2023",
    client: "TechMart Inc.",
    link: "/projects/ecommerce-platform",
  },
  {
    title: "Social Media Dashboard",
    description: "Comprehensive analytics dashboard for social media management.",
    image: "/Hflag-project.png",
    technologies: ["React", "D3.js", "Node.js", "Express", "PostgreSQL"],
    date: "August 2023",
    client: "SocialBoost LLC",
    link: "/projects/social-media-dashboard",
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform mobile app for fitness tracking and workouts.",
    image: "/Hflag-project.png",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    date: "October 2023",
    client: "FitLife Co.",
    link: "/projects/mobile-fitness-app",
  },
];

export function RecentProjectsWithBackground() {
  return (
    <div className="relative py-20 w-full bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">My Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{project.date}</span>
                  <span>{project.client}</span>
                </div>
                {/* <div className="mt-4">
                  <Link href={project.link}>
                    <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-300">
                      View Project
                    </span>
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
