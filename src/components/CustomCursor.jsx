import { useEffect, useRef, useState } from 'react'

// Custom cursor: small dot + trailing ring.
// data-cursor="VIEW | EXPLORE | BUY | GO" shows a label inside the ring.
// Disabled automatically on touch devices.

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || reduced.matches) return
    setEnabled(true)
    document.body.classList.add('has-cursor')

    let x = -100, y = -100, rx = -100, ry = -100, raf
    const move = (e) => {
      x = e.clientX
      y = e.clientY
      if (dotRef.current) dotRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    const loop = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    const over = (e) => {
      const labeled = e.target.closest('[data-cursor]')
      const link = e.target.closest('a, button, [data-hover]')
      const ring = ringRef.current
      if (!ring) return
      ring.classList.toggle('is-link', !!link && !labeled)
      ring.classList.toggle('is-label', !!labeled)
      if (labeled && labelRef.current) labelRef.current.textContent = labeled.getAttribute('data-cursor')
    }
    const leave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0'
      if (ringRef.current) ringRef.current.style.opacity = '0'
    }
    const enter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1'
      if (ringRef.current) ringRef.current.style.opacity = '1'
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    document.documentElement.addEventListener('mouseleave', leave)
    document.documentElement.addEventListener('mouseenter', enter)
    raf = requestAnimationFrame(loop)
    return () => {
      document.body.classList.remove('has-cursor')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.documentElement.removeEventListener('mouseleave', leave)
      document.documentElement.removeEventListener('mouseenter', enter)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef}>
        <span className="cursor-label" ref={labelRef} />
      </div>
    </>
  )
}
