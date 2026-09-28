import { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { services } from '../data/services.js'
import { projects } from '../data/projects.js'

const LOGO = '/assets/logo/content2.png'

const homeSub = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT ASTERIN' },
  { to: '/work', label: 'OUR WORK' },
  { to: '/services', label: 'SERVICES' },
  { to: '/products', label: 'PRODUCTS' },
  { to: '/help', label: 'HELP' },
  { to: '/contact', label: 'CONTACT' }
]

const aboutSub = [
  { to: '/about', label: 'ABOUT ASTERIN', meta: 'OVERVIEW' },
  { to: '/about/mission', label: 'OUR MISSION & GOAL', meta: 'PURPOSE' },
  { to: '/about/team', label: 'OUR TEAM', meta: 'THE SQUAD' },
  { to: '/about/testimonials', label: 'TESTIMONIALS', meta: 'REVIEWS' },
  { to: '/help', label: 'FAQ & HELP', meta: 'SUPPORT' }
]

function NavItem({ label, to, items }) {
  const [open, setOpen] = useState(false)
  const timer = useRef(null)

  const enter = () => {
    if (!items) return
    clearTimeout(timer.current)
    setOpen(true)
  }
  const leave = () => {
    if (!items) return
    timer.current = setTimeout(() => setOpen(false), 160)
  }

  return (
    <div className="nav-item" onMouseEnter={enter} onMouseLeave={leave}>
      <NavLink to={to} className="nav-link" onClick={() => setOpen(false)}>
        {label}
      </NavLink>
      {items && (
        <div className={`nav-sub ${open ? 'open' : ''}`}>
          <div className="nav-sub-inner">
            {items.map((it, i) => (
              <Link key={it.to + it.label} to={it.to} className="nav-sub-link" onClick={() => setOpen(false)}>
                <span className="nav-sub-index">0{i + 1}</span>
                <span className="nav-sub-label">{it.label}</span>
                {it.meta && <span className="nav-sub-meta">{it.meta}</span>}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar({ onMenu }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const workCats = [...new Map(projects.map((p) => [p.cat, p.category])).entries()]

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo" aria-label="ASTERIN home">
        <img src={LOGO} alt="ASTERIN" />
      </Link>

      <nav className="nav-links" aria-label="Primary">
        <NavItem label="HOME" to="/" items={homeSub} />
        <NavItem
          label="WORK"
          to="/work"
          items={[
            { to: '/work', label: 'ALL WORK' },
            ...workCats.map(([cat, label]) => ({ to: `/work?cat=${cat}`, label }))
          ]}
        />
        <NavItem
          label="SERVICES"
          to="/services"
          items={services.map((s) => ({ to: `/services/${s.slug}`, label: s.name }))}
        />
        <NavItem
          label="PRODUCTS"
          to="/products"
          items={[
            { to: '/products', label: 'ALL PRODUCTS' },
            { to: '/products/servers', label: 'SERVERS' },
            { to: '/products/playworld', label: 'PLAYWORLD', meta: 'MINECRAFT' },
            { to: '/products/creator-vps', label: 'CREATOR VPS' },
            { to: '/products/nightgrade-presets', label: 'NIGHTGRADE' },
            { to: '/products/redline-stream-kit', label: 'REDLINE KIT' }
          ]}
        />
        <NavItem label="ABOUT" to="/about" items={aboutSub} />
        <NavItem label="HELP" to="/help" />
        <NavItem label="CONTACT" to="/contact" />
      </nav>
    </header>
  )
}
