'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
// import { useMousePosition } from '@/hooks/use-mouse-position'

const greetings = [
  "Hello", "Bonjour", "Hola", "Ciao", "Konnichiwa",
  "Namaste", "Salaam", "Guten Tag", "Olá",
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
    <div className="relative min-h-screen bg-[#4c6ee2] overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <motion.h1
          className="sm:text-8xl text-5xl font-extrabold mb-4"
          animate={controls}
          initial={{ opacity: 1 }}
        >
          {greetings[currentGreeting]}!
        </motion.h1>
        <h2 className="sm:text-3xl text-2xl mb-2">I&apos;m <span className='font-bold'>Sourav Chhimpa</span></h2>
        <p className="text-xl italic">Web Designer & Developer.</p>
        <motion.div
          className="mt-8"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
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