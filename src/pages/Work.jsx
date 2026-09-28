import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import HorizontalScroll from '../components/HorizontalScroll.jsx'
import ProjectCard from '../components/work/ProjectCard.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'

const categoryIcons = {
  all: (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  commercial: (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  social: (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  editing: (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l9 4.9V17L12 22l-9-4.9V7z" />
    </svg>
  ),
  servers: (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  )
}

export default function Work() {
  const [params, setParams] = useSearchParams()
  const urlCat = params.get('cat') || ''
  const [cat, setCat] = useState(urlCat)

  useEffect(() => {
    setCat(urlCat)
  }, [urlCat])

  const handleSelectCat = (slug) => {
    setCat(slug)
    if (slug) {
      setParams({ cat: slug })
    } else {
      setParams({})
    }
  }

  const cats = [...new Map(projects.map((p) => [p.cat, p.category])).entries()]
  const shown = cat ? projects.filter((p) => p.cat === cat) : projects

  return (
    <main className="page work-page">
      <section className="page-hero">
        <ScrollReveal as="span" variant="up" className="kicker">ASTERIN WORK</ScrollReveal>
        <ScrollReveal as="h1" variant="clip" className="mega-title">
          WORK THAT <em>MOVES</em>
        </ScrollReveal>
        <ScrollReveal as="p" variant="up" delay={120} className="lead">
          Edits, campaigns, identities and networks. Scroll — the work moves sideways.
        </ScrollReveal>

        <div className="work-filters">
          <button
            type="button"
            className={!cat ? 'active' : ''}
            onClick={() => handleSelectCat('')}
          >
            {categoryIcons.all}
            <span>ALL</span>
          </button>
          {cats.map(([slug, label]) => (
            <button
              type="button"
              key={slug}
              className={cat === slug ? 'active' : ''}
              onClick={() => handleSelectCat(slug)}
            >
              {categoryIcons[slug] || null}
              <span>{label}</span>
            </button>
          ))}
        </div>
      </section>

      <HorizontalScroll key={cat || 'all'}>
        {shown.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
        <div className="hscroll-end">
          <p>YOUR PROJECT COULD BE NEXT.</p>
          <Link to="/contact" className="btn" data-cursor="GO">START A PROJECT</Link>
        </div>
      </HorizontalScroll>

      <section className="work-cta">
        <ScrollReveal as="h2" variant="clip" className="display-title">
          EVERY FRAME <em>EARNED.</em>
        </ScrollReveal>
        <ScrollReveal as="p" variant="up" className="lead">
          We take on a limited number of creators and networks each quarter.
        </ScrollReveal>
        <ScrollReveal variant="up" delay={100}>
          <Link to="/contact" className="btn btn-ghost" data-cursor="GO">TALK TO US</Link>
        </ScrollReveal>
      </section>
    </main>
  )
}
