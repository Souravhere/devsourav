import { cn } from "@/lib/utils";
import {
    IconBulb,
    IconChartBar,
    IconPencil,
    IconPalette,
    IconCode,
    IconTools,
    IconBug,
    IconRocket,
  } from "@tabler/icons-react";
  

export function FeaturesSectionDemo() {
  const features = [
    {
        title: "Brainstorming & Ideation",
        description: "Collaborative process to bring your ideas to life and explore creative solutions.",
        icon: <IconBulb />,
      },
      {
        title: "Market Research",
        description: "In-depth research to ensure your product stands out in the market.",
        icon: <IconChartBar />,
      },
      {
        title: "Design & Prototyping",
        description: "Crafting intuitive designs and prototypes for an engaging user experience.",
        icon: <IconPencil />,
      },
      {
        title: "Customizable Designs",
        description: "Tailor-made designs to match your unique vision and brand identity.",
        icon: <IconPalette />,
      },
      {
        title: "Tech Selection",
        description: "Choosing the right stack: Next.js, React, WordPress, Wix, and more.",
        icon: <IconCode />,
      },
      {
        title: "Development",
        description: "Building high-quality, scalable websites with optimized performance.",
        icon: <IconTools />,
      },
      {
        title: "Testing & QA",
        description: "Ensuring everything works smoothly with thorough testing before launch.",
        icon: <IconBug />,
      },
      {
        title: "Launch Ready",
        description: "Your project is tested, polished, and ready to go live.",
        icon: <IconRocket />,
      },
      
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto bg-white">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-black",
        (index === 0 || index === 4) && "lg:border-l border-black",
        index < 4 && "lg:border-b border-black"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#f6ff68] to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#f6ff68] to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-black">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-black group-hover/feature:bg-balck transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-black">
          {title}
        </span>
      </div>
      <p className="text-sm text-black max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};