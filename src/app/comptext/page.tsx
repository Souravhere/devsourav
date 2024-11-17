'use client'

import { useEffect, useRef } from "react"

export default function Component() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Animation variables
    let animationFrameId: number
    let offset = 0
    const speed = 0.5
    const gridSize = 50
    const perspectiveStart = canvas.height * 0.4
    const perspectiveEnd = canvas.height

    // Draw mesh
    const drawMesh = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Set line style
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'
      ctx.lineWidth = 1

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        const startX = x
        const endX = (x - canvas.width / 2) * 2 + canvas.width / 2
        
        ctx.beginPath()
        ctx.moveTo(startX, perspectiveStart)
        ctx.lineTo(endX, perspectiveEnd)
        ctx.stroke()
      }

      // Draw horizontal lines with movement
      for (let y = 0; y <= (perspectiveEnd - perspectiveStart); y += gridSize) {
        // const progress = y / (perspectiveEnd - perspectiveStart)
        const currentY = y + perspectiveStart + offset
        
        if (currentY >= perspectiveStart && currentY <= perspectiveEnd) {
          const startWidth = canvas.width
        //   const endWidth = canvas.width * (2 - progress)
          const startX = (canvas.width - startWidth) / 2
        //   const endX = (canvas.width - endWidth) / 2
          
          ctx.beginPath()
          ctx.moveTo(startX, currentY)
          ctx.lineTo(startX + startWidth, currentY)
          ctx.stroke()
        }
      }

      // Draw orange beam effect
      const gradient = ctx.createLinearGradient(
        canvas.width / 2,
        perspectiveStart,
        canvas.width / 2,
        perspectiveEnd
      )
      gradient.addColorStop(0, 'rgba(255, 140, 0, 0)')
      gradient.addColorStop(0.5, 'rgba(255, 140, 0, 0.1)')
      gradient.addColorStop(1, 'rgba(255, 140, 0, 0)')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, perspectiveStart, canvas.width, perspectiveEnd - perspectiveStart)

      // Update animation
      offset = (offset + speed) % gridSize
      animationFrameId = requestAnimationFrame(drawMesh)
    }

    drawMesh()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(to bottom, #000000, #1a1a1a)' }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            Hero Section
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Our newest Componet, powered by Sourav Chhimpa
        </p>
        <span
          className="bg-white text-black hover:bg-gray-200 transition-colors px-8 py-3 text-lg rounded-full"
        >
          Subscribe now
        </span>
      </div>
    </div>
  )
}