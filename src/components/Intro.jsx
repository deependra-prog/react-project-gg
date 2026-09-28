import { useEffect, useRef, useState } from 'react'

// ------------------------------------------------------------
// ASTERIN / SYLO-STYLE STARTUP EXPERIENCE
//
// Matches the Sylo Media preloader structure:
//   - Circular content2 logo on left
//   - Expanding vertical divider line
//   - Staggered animated headings on right:
//       DYNAMIC
//       DIGITAL
//       MARKETING
// ------------------------------------------------------------

const LOGO_CONTENT2 = '/assets/logo/content2.png'

export default function Intro({ onDone }) {
  const [phase, setPhase] = useState('play') // play -> exit -> gone
  const timers = useRef([])
  const finished = useRef(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const finish = () => {
      if (finished.current) return
      finished.current = true
      setPhase('gone')
      onDone()
    }

    if (reduced) {
      timers.current.push(setTimeout(finish, 300))
    } else {
      timers.current.push(setTimeout(() => setPhase('exit'), 2550))
      timers.current.push(setTimeout(finish, 3100))
    }
    return () => timers.current.forEach(clearTimeout)
  }, [onDone])

  if (phase === 'gone') return null

  return (
    <div className={`sylo-preloader-wrapper phase-${phase}`} aria-label="Startup animation">
      <div className="sylo-preloader-div">
        <div className="sylo-preload-elements">
          {/* Left: content2 logo */}
          <div className="sylo-pre-logo-wrapper">
            <img src={LOGO_CONTENT2} alt="ASTERIN MEDIA" className="sylo-pre-logo" />
          </div>

          {/* Center: vertical divider line */}
          <div className="sylo-pre-divider-line" />

          {/* Right: staggered animated headings */}
          <div className="sylo-pre-text-wrapper">
            <div className="sylo-preload-h1-wrapper">
              <h1 className="sylo-preloader-heading word-1">DYNAMIC</h1>
            </div>
            <div className="sylo-preload-h1-wrapper">
              <h1 className="sylo-preloader-heading word-2">DIGITAL</h1>
            </div>
            <div className="sylo-preload-h1-wrapper">
              <h1 className="sylo-preloader-heading word-3">MARKETING</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
