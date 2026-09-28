import { Link } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import ScrollReveal from '../ScrollReveal.jsx'

export default function FeaturedWork() {
  return (
    <section className="work-section work-section-text" id="work">
      <div className="section-head">
        <ScrollReveal as="span" variant="up" className="kicker">SELECTED WORK</ScrollReveal>
        <ScrollReveal as="h2" variant="clip" className="display-title">
          THE WORK <em>SPEAKS</em>
        </ScrollReveal>
        <Link to="/work" className="link-arrow" data-cursor="GO">ALL WORK →</Link>
      </div>

      <div className="work-text-grid">
        {projects.map((p, i) => (
          <ScrollReveal
            key={p.slug}
            as="div"
            variant="up"
            delay={(i % 3) * 70}
            className="work-text-item"
          >
            <Link to={`/work/${p.slug}`} className="work-text-card" data-cursor="VIEW">
              <div className="work-text-top">
                <span className="work-text-index">0{i + 1}</span>
                <span className="work-text-cat">{p.category}</span>
                <span className="work-text-year">{p.year}</span>
              </div>
              <h3 className="work-text-title">{p.title}</h3>
              <p className="work-text-desc">{p.description}</p>
              <div className="work-text-arrow-row">
                <span className="work-text-cta">EXPLORE CASE</span>
                <svg className="work-text-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
