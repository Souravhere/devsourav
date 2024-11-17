import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaLaptopCode } from 'react-icons/fa'

export default function Component() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-amber-200 via-rose-200 to-purple-200 p-4 font-sans">
      <div className="w-full max-w-md overflow-hidden bg-white/20 backdrop-blur-lg rounded-lg shadow-lg">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-amber-300 shadow-lg bg-white/50 flex items-center justify-center">
              <FaLaptopCode className="text-6xl text-amber-500" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-800 mb-1">
                Sourav Chhimpa<span className="animate-pulse text-amber-500">_</span>
              </h1>
              <p className="text-lg text-gray-700 mb-2">Frontend Developer</p>
              <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full mb-4">Age: 18</span>
            </div>
          </div>
          <div className="mt-6 space-y-2 text-sm text-gray-700">
            <p className="flex items-center justify-center sm:justify-start">
              <span className="font-semibold mr-2">Email:</span>
              <a href="mailto:souravchhimpa1@gmail.com" className="text-amber-600 hover:text-amber-700 transition-colors">
                souravchhimpa1@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center sm:justify-start">
              <span className="font-semibold mr-2">Address:</span>
              Jaipur, India
            </p>
          </div>
          <div className="mt-6 flex justify-center sm:justify-start space-x-4">
            <a href="https://github.com/Souravhere" aria-label="GitHub" className="text-gray-600 hover:text-gray-800 transition-colors">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/sourav-chhimpa" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-800 transition-colors">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-800 transition-colors">
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}