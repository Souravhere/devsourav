"use client"

import React, { useEffect, useState } from "react"
import { Dock, DockIcon } from "./ui/dock"
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaArrowUp } from "react-icons/fa"

export function DockDemo() {
  const [showDock, setShowDock] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Show dock when scrolled 20% of the page
      setShowDock(scrollPosition > documentHeight * 0.2)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div 
      className={`fixed transition-all duration-300 ease-in-out ${
        showDock ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'
      } md:bottom-8 md:right-8 bottom-4 left-1/2 md:left-auto md:transform-none transform -translate-x-1/2`}
    >
      <Dock magnification={60} distance={100}>
        <DockIcon>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block w-full h-full bg-black/10 dark:bg-white/10 p-3">
            <FaGithub className="w-full h-full text-gray-900 dark:text-white" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block w-full h-full bg-black/10 dark:bg-white/10 p-3">
            <FaLinkedin className="w-full h-full text-[#0077B5]" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block w-full h-full bg-black/10 dark:bg-white/10 p-3">
            <FaTwitter className="w-full h-full text-[#1DA1F2]" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" className="block w-full h-full bg-black/10 dark:bg-white/10 p-3">
            <FaWhatsapp className="w-full h-full text-[#25D366]" />
          </a>
        </DockIcon>
        <DockIcon>
          <button onClick={scrollToTop} className="w-full h-full bg-black/10 dark:bg-white/10 p-3">
            <FaArrowUp className="w-full h-full text-gray-600 dark:text-gray-300" />
          </button>
        </DockIcon>
      </Dock>
    </div>
  )
}