import Link from "next/link";

export function OtherProject() {
  const projects = [
    {
      slug: "https://souravhere.github.io/Veggie-Smart/",
      date: "28th March, 2024",
      title: "Veggie Smart",
      description:
        "Veggie Smart is a comprehensive tool designed to assist shopkeepers and customers in calculating vegetable prices with ease. This web application allows users to input the price per kilogram and the quantity in both kilograms and grams to get the total price.",
      tags: ["chartjs", "babylonjs", "JavaScript", "jspdf"],
    },
    {
      slug: "https://ez-modules.vercel.app/",
      date: "12th April, 2024",
      title: "EZ Modules",
      description:
        "EZ Modules is a versatile and modern React component library developed with the aim of simplifying the web development experience. It offers a diverse range of UI and feature-based components that are both reusable and customizable, making it easier for developers to build high-quality web applications efficiently.",
      tags: ["Reactjs", "vitejs", "npm"],
    },
    {
      slug: "https://funwithsourav.vercel.app/",
      date: "5th May, 2024",
      title: "Fun With Sourav",
      description:
        "Welcome to Fun With Sourav! This project showcases the latest in web technology and animation. Created by Sourav Chhimpa, a passionate web developer from India, this repository aims to provide animated page views complete with source code for anyone interested in learning, exploring, and contributing.",
      tags: ["Gsap", "api", "JavaScript"],
    },
    {
      slug: "https://gemini-ai-gules.vercel.app/",
      date: "20th June, 2024",
      title: "Gemini Ai",
      description:
        "Welcome to Gemini Ai, a React-based clone of Google's Gemini AI, leveraging the Gemini API to offer users an interactive and dynamic AI experience. This project aims to replicate and enhance the functionalities of the original Gemini AI, providing an accessible platform for users to explore and engage with advanced AI capabilities.",
      tags: ["gemini-api", "reactjs", "vitejs"],
    },
  ];

  return (
    <div className="w-full mx-auto">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold py-2 text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600">
        Other Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {projects.map((project, index) => (
          <Link key={index} href={project.slug} passHref>
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100 cursor-pointer">
              <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative"></div>
              <div className="p-4">
                <h2 className="font-bold my-4 text-lg text-zinc-700">
                  {project.title}
                </h2>
                <h2 className="font-normal my-4 text-sm text-zinc-500">
                  {project.description}
                </h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-row justify-between items-center mt-10">
                  <span className="text-sm text-gray-500">{project.date}</span>
                  <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
