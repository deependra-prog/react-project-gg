import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LOGO = '/assets/logo/content2.png'

const items = [
  { to: '/', label: 'HOME', img: '/assets/images/work/work-youtube.jpg' },
  { to: '/work', label: 'WORK', img: '/assets/images/work/work-edit.jpg' },
  { to: '/services', label: 'SERVICES', img: '/assets/images/work/work-social.jpg' },
  { to: '/products', label: 'PRODUCTS', img: '/assets/images/work/work-minecraft.jpg' },
  { to: '/about', label: 'ABOUT', img: '/assets/images/about/about-studio.jpg' },
  { to: '/help', label: 'HELP', img: '/assets/images/work/work-design.jpg' },
  { to: '/contact', label: 'CONTACT', img: '/assets/images/work/work-motion.jpg' }
]

// Full-screen cinematic navigation sliding down from the top.
export default function Menu({ open, onClose }) {
  const [preview, setPreview] = useState(items[0].img)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className={`menu ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div className="menu-head">
        <Link to="/" className="menu-logo" onClick={onClose}>
          <img src={LOGO} alt="ASTERIN" />
        </Link>
        <button className="menu-close" onClick={onClose} data-cursor="CLOSE">
          CLOSE
        </button>
      </div>

      <nav className="menu-links" aria-label="Full navigation">
        {items.map((it, i) => (
          <Link
            key={it.to}
            to={it.to}
            className="menu-link"
            style={{ '--i': i }}
            onMouseEnter={() => setPreview(it.img)}
            onClick={onClose}
            tabIndex={open ? 0 : -1}
          >
            <span className="menu-index">0{i + 1}</span>
            <span className="menu-label">{it.label}</span>
            <span className="menu-arrow">→</span>
          </Link>
        ))}
      </nav>

      <div className="menu-preview" aria-hidden="true">
        {items.map((it) => (
          <img
            key={it.img + it.to}
            src={it.img}
            alt=""
            className={preview === it.img ? 'active' : ''}
            loading="lazy"
          />
        ))}
      </div>

      <div className="menu-foot">
        <span>hello@asterin.studio</span>
        <span className="menu-foot-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">YOUTUBE</a>
          <a href="https://discord.com" target="_blank" rel="noreferrer">DISCORD</a>
        </span>
      </div>
    </div>
  )
}
