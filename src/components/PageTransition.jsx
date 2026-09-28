import { useEffect, useRef, useState, cloneElement } from 'react'
import { useLocation } from 'react-router-dom'

// Red/black transition curtain with the ASTERIN mark.
// Covers the screen, swaps the route underneath, then reveals.

export default function PageTransition({ children }) {
  const location = useLocation()
  const [display, setDisplay] = useState(location)
  const [phase, setPhase] = useState('idle') // idle | cover | reveal
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    if (location.pathname === display.pathname) {
      if (location.search !== display.search || location.hash !== display.hash) {
        setDisplay(location)
      }
      return
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setDisplay(location)
      window.scrollTo(0, 0)
      return
    }

    setPhase('cover')
    const t1 = setTimeout(() => {
      setDisplay(location)
      window.scrollTo(0, 0)
      setPhase('reveal')
    }, 480)
    const t2 = setTimeout(() => setPhase('idle'), 1250)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <>
      <div className={`pt-overlay phase-${phase}`} aria-hidden="true">
        <div className="pt-mark">
          <svg viewBox="0 0 100 100" className="pt-star">
            <path d="M50 0 C55 35 65 45 100 50 C65 55 55 65 50 100 C45 65 35 55 0 50 C35 45 45 35 50 0 Z" />
          </svg>
          <span className="pt-word">ASTERIN</span>
        </div>
      </div>
      {cloneElement(children, { location: display })}
    </>
  )
}
