import { useEffect, useRef, useState } from 'react'

// Sticky horizontal scroll showcase.
// Vertical wheel drives horizontal movement with smooth interpolation.
// On narrow screens it degrades to native horizontal swipe.

export default function HorizontalScroll({ children }) {
  const outerRef = useRef(null)
  const trackRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMq = () => setEnabled(mq.matches && !reduced.matches)
    onMq()
    mq.addEventListener('change', onMq)
    reduced.addEventListener('change', onMq)
    return () => {
      mq.removeEventListener('change', onMq)
      reduced.removeEventListener('change', onMq)
    }
  }, [])

  useEffect(() => {
    const outer = outerRef.current
    const track = trackRef.current
    if (!outer || !track) return

    let raf, current = 0

    const measure = () => {
      if (!enabled) {
        outer.style.height = 'auto'
        track.style.transform = 'none'
        return
      }
      const total = Math.max(track.scrollWidth - window.innerWidth + 80, 0)
      if (total <= 0) {
        outer.style.height = 'auto'
        track.style.transform = 'none'
        return
      }
      outer.style.height = `${total + window.innerHeight}px`
    }

    const loop = () => {
      if (enabled) {
        const total = Math.max(track.scrollWidth - window.innerWidth + 80, 0)
        if (total <= 0) {
          track.style.transform = 'none'
        } else {
          const rect = outer.getBoundingClientRect()
          const range = Math.max(outer.offsetHeight - window.innerHeight, 1)
          const progress = Math.min(Math.max(-rect.top / range, 0), 1)
          const target = progress * total
          current += (target - current) * 0.08
          track.style.transform = `translate3d(${-current}px, 0, 0)`
        }
      }
      raf = requestAnimationFrame(loop)
    }

    measure()
    raf = requestAnimationFrame(loop)
    window.addEventListener('resize', measure)

    const imgs = track.querySelectorAll('img')
    imgs.forEach((img) => img.addEventListener('load', measure))

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', measure)
      imgs.forEach((img) => img.removeEventListener('load', measure))
    }
  }, [enabled, children])

  return (
    <div className={`hscroll ${enabled ? 'is-enabled' : ''}`} ref={outerRef}>
      <div className="hscroll-sticky">
        <div className="hscroll-track" ref={trackRef}>
          {children}
        </div>
      </div>
    </div>
  )
}
