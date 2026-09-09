import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

interface Point {
  x: number
  y: number
  r: number
  v: number
  a: number
  p: number
}

export function ProjectsParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let width = 0
    let height = 0
    let points: Point[] = []
    const dpr = Math.min(2, window.devicePixelRatio || 1)

    const size = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.round(Math.min(120, Math.max(40, (width * height) / 11000)))
      points = Array.from({ length: n }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.6 + Math.random() * 1.9,
        v: 0.18 + Math.random() * 0.34,
        a: 0.18 + Math.random() * 0.55,
        p: Math.random() * Math.PI * 2,
      }))
    }

    size()
    window.addEventListener('resize', size)

    let raf = 0
    const loop = () => {
      raf = requestAnimationFrame(loop)
      ctx.clearRect(0, 0, width, height)
      for (const point of points) {
        point.x += point.v * 0.72
        point.y -= point.v * 0.72
        point.p += 0.02
        if (point.y < -8) {
          point.y = height + 8
          point.x = Math.random() * width * 0.9 - width * 0.1
        }
        if (point.x > width + 8) {
          point.x = -8
          point.y = Math.random() * height
        }
        const alpha = point.a * (0.6 + 0.4 * Math.sin(point.p))
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(211,203,255,${alpha.toFixed(3)})`
        ctx.fill()
      }
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', size)
    }
  }, [reduced])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
