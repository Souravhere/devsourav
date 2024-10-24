import React from "react";
import { Cover } from "./ui/cover";

export function CoverDemo() {
  return (
    <div className="bg-white -mt-8">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-black via-gray-700 to-gray-600">
        Build amazing websites <br /> with <Cover>sourav</Cover>
      </h1>
    </div>
  );
}