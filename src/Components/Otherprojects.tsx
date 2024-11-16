import Link from "next/link";

export function OtherProject() {
  const projects = [
    {
      slug: "/project-1",
      date: "28th March, 2024",
      title: "Veggie Smart",
      description:
        "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcss grid and React.",
    },
    {
      slug: "/project-2",
      date: "12th April, 2024",
      title: "Digital Hub",
      description:
        "Digital transformation redefined. Explore our innovative approach to modern business strategies.",
    },
    {
      slug: "/project-3",
      date: "5th May, 2024",
      title: "Eco Trends",
      description:
        "Sustainability meets innovation. Discover our journey towards a greener future.",
    },
    {
      slug: "/project-4",
      date: "20th June, 2024",
      title: "Tech Waves",
      description:
        "Shaping tomorrow's tech today. Dive into our latest cutting-edge projects.",
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
