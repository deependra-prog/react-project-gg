import { Link } from 'react-router-dom'
import { services } from '../../data/services.js'
import ScrollReveal from '../ScrollReveal.jsx'

export default function ServicesPreview() {
  return (
    <section className="svc-preview">
      <div className="section-head">
        <ScrollReveal as="span" variant="up" className="kicker">WHAT WE DO</ScrollReveal>
        <ScrollReveal as="h2" variant="clip" className="display-title">
          SERVICES <em>BUILT TO COMPOUND</em>
        </ScrollReveal>
      </div>

      <div className="svc-rows">
        {services.map((s, i) => (
          <ScrollReveal key={s.slug} variant="up" delay={i * 60}>
            <Link to={`/services/${s.slug}`} className="svc-row" data-cursor="EXPLORE">
              <span className="svc-row-index">{s.index}</span>
              <span className="svc-row-name">{s.name}</span>
              <span className="svc-row-tag">{s.tagline}</span>
              <span className="svc-row-arrow">→</span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
