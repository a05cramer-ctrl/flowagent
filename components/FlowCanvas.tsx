'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  alpha: number
  maxAlpha: number
  color: string
  size: number
  trail: { x: number; y: number }[]
}

interface Stream {
  x: number
  y: number
  length: number
  speed: number
  alpha: number
  color: string
  angle: number
}

export default function FlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    const BLUE = '#00d4ff'
    const GOLD = '#ffd700'

    const particles: Particle[] = []
    const streams: Stream[] = []

    const initParticles = () => {
      particles.length = 0
      const count = Math.floor((width * height) / 18000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: Math.random() * 0.6 + 0.2,
          alpha: 0,
          maxAlpha: Math.random() * 0.4 + 0.1,
          color: Math.random() > 0.75 ? GOLD : BLUE,
          size: Math.random() * 1.5 + 0.5,
          trail: [],
        })
      }
    }

    const initStreams = () => {
      streams.length = 0
      const count = Math.floor(width / 80)
      for (let i = 0; i < count; i++) {
        streams.push({
          x: Math.random() * width,
          y: Math.random() * height,
          length: Math.random() * 120 + 60,
          speed: Math.random() * 1.2 + 0.4,
          alpha: Math.random() * 0.25 + 0.05,
          color: Math.random() > 0.8 ? GOLD : BLUE,
          angle: (Math.random() - 0.5) * 0.3 + Math.PI / 2,
        })
      }
    }

    initParticles()
    initStreams()

    let frame = 0

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      frame++

      // Draw streams (flowing data lines)
      streams.forEach((s) => {
        const dx = Math.cos(s.angle) * s.length
        const dy = Math.sin(s.angle) * s.length

        const grad = ctx.createLinearGradient(s.x, s.y - s.length, s.x + dx, s.y + dy)
        grad.addColorStop(0, 'transparent')
        grad.addColorStop(0.5, s.color + Math.floor(s.alpha * 255).toString(16).padStart(2, '0'))
        grad.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.strokeStyle = grad
        ctx.lineWidth = 1
        ctx.moveTo(s.x, s.y - s.length)
        ctx.lineTo(s.x + dx, s.y + dy)
        ctx.stroke()

        s.y += s.speed
        s.x += Math.cos(s.angle) * s.speed * 0.15

        if (s.y - s.length > height || s.x < -50 || s.x > width + 50) {
          s.x = Math.random() * width
          s.y = -s.length
          s.angle = (Math.random() - 0.5) * 0.3 + Math.PI / 2
        }
      })

      // Draw particles
      particles.forEach((p) => {
        p.trail.push({ x: p.x, y: p.y })
        if (p.trail.length > 12) p.trail.shift()

        p.x += p.vx
        p.y += p.vy
        p.alpha = Math.min(p.alpha + 0.008, p.maxAlpha)

        if (p.y > height + 10) {
          p.y = -10
          p.x = Math.random() * width
          p.trail = []
          p.alpha = 0
        }
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10

        // Trail
        if (p.trail.length > 1) {
          ctx.beginPath()
          ctx.moveTo(p.trail[0].x, p.trail[0].y)
          for (let i = 1; i < p.trail.length; i++) {
            ctx.lineTo(p.trail[i].x, p.trail[i].y)
          }
          ctx.strokeStyle = p.color
          ctx.globalAlpha = p.alpha * 0.4
          ctx.lineWidth = p.size * 0.6
          ctx.stroke()
          ctx.globalAlpha = 1
        }

        // Node dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
        ctx.globalAlpha = 1

        // Occasional glow
        if (p.alpha > 0.3 && Math.sin(frame * 0.05 + p.x) > 0.8) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2)
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4)
          glow.addColorStop(0, p.color + '44')
          glow.addColorStop(1, 'transparent')
          ctx.fillStyle = glow
          ctx.globalAlpha = 0.6
          ctx.fill()
          ctx.globalAlpha = 1
        }
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      initParticles()
      initStreams()
    }

    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  )
}
