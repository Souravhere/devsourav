'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
// import { useMousePosition } from '@/hooks/use-mouse-position'

const greetings = [
  "Hello", "Bonjour", "Hola", "Ciao", "Konnichiwa",
  "Namaste", "Salaam", "Guten Tag", "Olá", "Zdravstvuyte"
]

export default function HeroSection() {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const controls = useAnimation()
  const mousePosition = useMousePosition()

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: 0,
        transition: { duration: 0.5 }
      }).then(() => {
        setCurrentGreeting((prev) => (prev + 1) % greetings.length)
        controls.start({
          opacity: 1,
          transition: { duration: 0.5 }
        })
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [controls])

  return (
    <div className="relative min-h-screen bg-blue-600 overflow-hidden">
      <nav className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
        <div className="text-white text-2xl font-bold flex items-center">
          Astrid
          <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="space-x-4 text-white">
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
        </div>
        <button className="bg-lime-300 text-blue-600 px-4 py-2 rounded-full hover:bg-lime-400 transition-colors">
          Contact me 😊
        </button>
      </nav>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <motion.h1
          className="text-8xl font-bold mb-4"
          animate={controls}
          initial={{ opacity: 1 }}
        >
          {greetings[currentGreeting]}!
        </motion.h1>
        <h2 className="text-3xl mb-2">I'm Astrid Mottes</h2>
        <p className="text-xl italic">Graphic Designer & Illustrator.</p>
        <motion.div
          className="mt-8"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>

      {['pink', 'lime', 'black'].map((color, index) => (
        <motion.div
          key={color}
          className={`absolute w-16 h-16 rounded-full bg-${color}-400`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: mousePosition.x * 0.05 * (index + 1),
            y: mousePosition.y * 0.05 * (index + 1),
          }}
        />
      ))}

      {['blue-300', 'blue-400'].map((color, index) => (
        <motion.div
          key={color}
          className={`absolute w-24 h-24 bg-${color}`}
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: mousePosition.x * 0.03 * (index + 1),
            y: mousePosition.y * 0.03 * (index + 1),
            rotate: 360,
          }}
          transition={{ repeat: Infinity, duration: 20 }}
        />
      ))}
    </div>
  )
}

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return mousePosition
}