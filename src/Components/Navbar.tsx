'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function AnimatedFloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const controls = useAnimation()
  const { scrollY } = useScroll()

  useEffect(() => {
    let lastScrollY = 0
    
    const updateNavbar = () => {
      const currentScrollY = scrollY.get()
      if (currentScrollY > lastScrollY) {
        controls.start({ y: '-100%' })
      } else {
        controls.start({ y: '0%' })
      }
      lastScrollY = currentScrollY
    }

    const unsubscribe = scrollY.on('change', updateNavbar)
    return () => unsubscribe()
  }, [controls, scrollY])

  return (
    <motion.nav
      className="fixed top-4 w-full transform -translate-x-1/2 bg-white shadow-lg rounded-full z-50"
      initial={{ y: 0 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
            </motion.div>
          </div>
          <div className="hidden md:block ml-10">
            <div className="flex items-baseline space-x-4">
              {['About', 'Works', 'Twitter', 'Dribbble', 'LinkedIn'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="hidden md:block ml-6">
            <motion.button
              className="bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pricing ~ it's free
            </motion.button>
          </div>
          <div className="md:hidden ml-auto">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['About', 'Works', 'Twitter', 'Dribbble', 'LinkedIn'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item}
            </a>
          ))}
          <a
            href="#pricing"
            className="bg-yellow-400 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Pricing ~ it's free
          </a>
        </div>
      </motion.div>
    </motion.nav>
  )
}