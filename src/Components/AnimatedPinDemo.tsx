"use client";

import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="py-20 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PinContainer title="Web Development" href="/">
            <div className="flex basis-full flex-col p-4 tracking-tight text-gray-800 w-[18rem] h-[18rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-gray-900">
                Web Development
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-gray-600">
                  Custom websites tailored to your needs using modern technologies.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600" />
            </div>
          </PinContainer>

          <PinContainer title="UI/UX Design" href="/">
            <div className="flex basis-full flex-col p-4 tracking-tight text-gray-800 w-[18rem] h-[18rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-gray-900">
                UI/UX Design
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-gray-600">
                  Intuitive and beautiful interfaces that enhance user experience.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600" />
            </div>
          </PinContainer>

          <PinContainer title="Mobile App Development" href="/">
            <div className="flex basis-full flex-col p-4 tracking-tight text-gray-800 w-[18rem] h-[18rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-gray-900">
                Mobile App Development
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-gray-600">
                  Cross-platform mobile applications for iOS and Android.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-400 via-green-500 to-green-600" />
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}