import { useEffect, useRef } from 'react'

// Red/black animated particle field used behind hero sections
// and as the intro video fallback. Respects reduced motion.

export default function AmbientBackground({ density = 90, className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h, raf, particles = []
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const seed = () => {
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 0.7 + 0.3,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.6 + 0.4,
        red: Math.random() < 0.4
      }))
    }

    const draw = (step) => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        if (step) {
          p.x += p.vx * p.z
          p.y += p.vy * p.z
          if (p.x < -4) p.x = w + 4
          if (p.x > w + 4) p.x = -4
          if (p.y < -4) p.y = h + 4
          if (p.y > h + 4) p.y = -4
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * p.z, 0, Math.PI * 2)
        ctx.fillStyle = p.red
          ? `rgba(255, 32, 56, ${0.35 * p.z + 0.08})`
          : `rgba(255, 255, 255, ${0.16 * p.z + 0.04})`
        ctx.fill()
      }
    }

    const loop = () => {
      draw(true)
      raf = requestAnimationFrame(loop)
    }

    resize()
    seed()
    if (reduced) draw(false)
    else raf = requestAnimationFrame(loop)

    const onResize = () => {
      resize()
      seed()
      if (reduced) draw(false)
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [density])

  return <canvas ref={canvasRef} className={`ambient ${className}`} aria-hidden="true" />
}
