'use client'

import { useState } from 'react'

const skills = [
  { icon: '🎨', name: 'Tailwind CSS', color: 'bg-cyan-500' },
  { icon: '🚀', name: 'JavaScript', color: 'bg-yellow-400' },
  { icon: '⚛️', name: 'React.js', color: 'bg-blue-400' },
  { icon: '⚡', name: 'Vite.js', color: 'bg-purple-500' },
  { icon: '🔍', name: 'SEO', color: 'bg-green-500' },
  { icon: '🎭', name: 'Figma', color: 'bg-pink-500' },
  { icon: '▲', name: 'Next.js', color: 'bg-white text-black' },
]

export default function DevPage() {
  const [activeSkill, setActiveSkill] = useState(null)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 py-20">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl font-bold mb-2 text-gray-100">Sourav Chhimpa</h1>
          <h2 className="text-2xl text-gray-300">Freelance Web Developer</h2>
          <p className="text-lg mt-2 text-gray-400">Rajasthan, India</p>
        </header>

        <div className="mb-8 animate-fade-in-up">
          <div className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">About Me</h3>
            <p className="text-lg leading-relaxed text-gray-300">
              Passionate about crafting exceptional digital experiences, I bring your ideas to life with fully animated and interactive websites. My expertise extends beyond coding to include SEO optimization and intuitive design with Figma, ensuring your website not only looks amazing but also performs flawlessly.
            </p>
          </div>
        </div>

        <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">Skills & Expertise</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                  className={`${skill.color} p-3 rounded-lg flex flex-col items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                >
                  <span className="text-3xl mb-2">{skill.icon}</span>
                  <span className="text-xs text-center">{skill.name}</span>
                </div>
              ))}
            </div>
            {activeSkill && (
              <div className="mt-4 p-4 bg-gray-700 rounded-lg animate-fade-in">
                <p className="text-sm text-gray-200">
                  {`${activeSkill} is one of my core skills. I have extensive experience using it in various projects.`}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">Connect with Me</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/sourav-chhimpa/" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-300 hover:text-gray-100 transition-colors duration-300 transform hover:scale-110 hover:rotate-6">
                <span className="sr-only">LinkedIn</span>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
              </a>
              <a href="https://github.com/Souravhere" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-300 hover:text-gray-100 transition-colors duration-300 transform hover:scale-110 hover:rotate-6">
                <span className="sr-only">GitHub</span>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
              </a>
              <a href="mailto:souravchhimpa1@gmail.com" className="text-4xl text-gray-300 hover:text-gray-100 transition-colors duration-300 transform hover:scale-110 hover:rotate-6">
                <span className="sr-only">Email</span>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <footer className="text-center mt-12 text-gray-400 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <p>&copy; {new Date().getFullYear()} Sourav Chhimpa. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}