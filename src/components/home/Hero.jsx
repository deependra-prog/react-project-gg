import { useEffect, useState } from 'react'
import AmbientBackground from '../AmbientBackground.jsx'

const BG_VIDEO = '/assets/video/video.mp4'
const LOGO = '/assets/logo/logo-transparent.png'

// Full-screen cinematic hero: background video (your asset) or
// animated fallback, centered ASTERIN logo + tagline.
export default function Hero() {
  const [bgMode, setBgMode] = useState('loading')

  useEffect(() => {
    fetch(BG_VIDEO, { method: 'HEAD' })
      .then((r) => {
        const type = r.headers.get('content-type') || ''
        setBgMode(r.ok && type.includes('video') ? 'video' : 'fallback')
      })
      .catch(() => setBgMode('fallback'))
  }, [])

  return (
    <section className="hero">
      {bgMode === 'video' && (
        <video className="hero-media" src={BG_VIDEO} autoPlay muted loop playsInline />
      )}
      {bgMode === 'fallback' && (
        <div className="hero-media hero-fallback">
          <AmbientBackground density={110} />
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
        </div>
      )}
      <div className="hero-dim" />

      <div className="hero-center">
        <div className="hero-logo-metallic-wrap">
          <img className="hero-logo hero-logo-metallic" src={LOGO} alt="ASTERIN" />
          <div className="hero-metallic-sheen" aria-hidden="true" />
        </div>
        <p className="hero-tagline">WE BUILD CREATORS &amp; WORLDS</p>
        <p className="hero-sub">
          Creative technology studio for YouTube &amp; Instagram creators —
          and the Minecraft worlds they play in.
        </p>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span />
        SCROLL
      </div>
    </section>
  )
}
