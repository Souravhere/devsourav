'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import CountUp from 'react-countup'

export default function EnhancedAnimatedHeroWithGrid() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const [glitchActive, setGlitchActive] = useState(false)
  const glitchControls = useAnimation()

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      glitchControls.start({
        x: [0, -5, 5, -5, 5, 0],
        transition: { duration: 0.5 }
      }).then(() => setGlitchActive(false))
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [glitchControls])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-black bg-white">
      <SVGBackground y1={y1} y2={y2} />
      <GridAnimation />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block bg-yellow-300 rounded-full px-6 py-2 mb-4 relative overflow-hidden"
        >
          <GlitchText text="Hey, I'm Sourav" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          a web developer with
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center"
        >
          {[
            { value: 15, label: 'Web Design', prefix: '+' },
            { value: 25, label: 'Web Development', prefix: '+' },
            { value: 4, label: 'Open Source Projects',prefix: '+' },
            { value: 5, label: 'Clients', prefix: '+' },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    prefix={stat.prefix || ''}
                  />
                </h3>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

function SVGBackground({ y1, y2 }: { y1: any; y2: any }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0,0 Q50,50 100,0 V100 H0 Z"
        fill="rgba(255,255,255,0.1)"
        style={{ y: y1 }}
      />
      <motion.path
        d="M0,100 Q50,50 100,100 V100 H0 Z"
        fill="rgba(255,255,255,0.1)"
        style={{ y: y2 }}
      />
    </svg>
  )
}

function GridAnimation() {
  const gridSize = 10
  const lines = Array.from({ length: gridSize * 2 + 1 })

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {lines.map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-gray-600"
            initial={{
              opacity: 0.1,
              [index < gridSize + 1 ? 'width' : 'height']: '100%',
              [index < gridSize + 1 ? 'height' : 'width']: '1px',
              [index < gridSize + 1 ? 'top' : 'left']: `${(index % (gridSize + 1)) * (100 / gridSize)}%`,
            }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              [index < gridSize + 1 ? 'top' : 'left']: [
                `${(index % (gridSize + 1)) * (100 / gridSize)}%`,
                `${((index % (gridSize + 1)) * (100 / gridSize) + 5) % 100}%`,
                `${(index % (gridSize + 1)) * (100 / gridSize)}%`,
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 10 + index * 0.5,
              ease: "linear",
            }}
            whileHover={{
              opacity: 0.5,
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
          />
        ))}
      </div>
    </div>
  )
}

function GlitchText({ text }: { text: string }) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className="relative">
      <h1 className="text-2xl font-bold">{text}</h1>
      {isGlitching && (
        <>
          <motion.div
            className="absolute inset-0 text-2xl font-bold text-red-500"
            style={{ clipPath: 'inset(50% 0 0 0)', transform: 'translateX(-2px)' }}
            animate={{ clipPath: ['inset(50% 0 0 0)', 'inset(0% 0 0 0)', 'inset(50% 0 0 0)'] }}
            transition={{ duration: 0.2, repeat: 2, repeatType: 'reverse' }}
          >
            {text}
          </motion.div>
          <motion.div
            className="absolute inset-0 text-2xl font-bold text-blue-500"
            style={{ clipPath: 'inset(0 0 50% 0)', transform: 'translateX(2px)' }}
            animate={{ clipPath: ['inset(0 0 50% 0)', 'inset(0 0 0% 0)', 'inset(0 0 50% 0)'] }}
            transition={{ duration: 0.2, repeat: 2, repeatType: 'reverse' }}
          >
            {text}
          </motion.div>
        </>
      )}
    </div>
  )
}