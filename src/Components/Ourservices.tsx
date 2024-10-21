"use client";

import React, { useEffect } from "react";
import { animate, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaFigma, FaPinterest, FaDribbble, FaJs, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineAudit } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
import { IconType } from "react-icons";

interface ServiceCardProps {
  title: string;
  description: string;
  icons: IconType[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icons }) => {
  return (
    <Card>
      <CardSkeletonContainer>
        <IconSkeleton icons={icons} />
      </CardSkeletonContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

const IconSkeleton: React.FC<{ icons: IconType[] }> = ({ icons }) => {
  const sequence = icons.map((_, index) => [
    `.circle-${index + 1}`,
    {
      scale: [1, 1.1, 1],
      transform: ["translateY(0px)", "translateY(-4px)", "translateY(0px)"],
    },
    { duration: 0.8 },
  ]);

  useEffect(() => {
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-wrap justify-center items-center gap-4">
        {icons.map((Icon, index) => (
          <Container key={index} className={`h-16 w-16 circle-${index + 1}`}>
            <Icon className="h-8 w-8 text-gray-600" />
          </Container>
        ))}
      </div>
      <Sparkles />
    </div>
  );
};

const Sparkles: React.FC = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-gray-300"
        ></motion.span>
      ))}
    </div>
  );
};

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full p-8 rounded-xl border border-gray-200 bg-white shadow-lg group my-5 sm:mx-0 mx-3",
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return (
    <h3
      className={cn(
        "text-xl font-semibold text-gray-800 py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-gray-600 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

interface CardSkeletonContainerProps {
  className?: string;
  children: React.ReactNode;
}

const CardSkeletonContainer: React.FC<CardSkeletonContainerProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        "bg-gray-50 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        `rounded-full flex items-center justify-center bg-white
    shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const OurServices: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <ServiceCard
          title="Web Design"
          description="Create stunning, user-friendly designs that captivate your audience."
          icons={[FaFigma, FaPinterest, FaDribbble]}
        />
        <ServiceCard
          title="Web Development"
          description="Build robust, scalable web applications using cutting-edge technologies."
          icons={[FaJs, FaReact, TbBrandNextjs]}
        />
        <ServiceCard
          title="Testing and SEO"
          description="Ensure your website performs flawlessly and ranks high in search results."
          icons={[AiOutlineAudit, SiGoogleanalytics]}
        />
      </div>
    </div>
  );
};