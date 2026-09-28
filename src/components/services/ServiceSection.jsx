import { Link } from 'react-router-dom'
import ScrollReveal from '../ScrollReveal.jsx'

// One service presentation on /services.
// layout variants: split | split-rev | full | stack
export default function ServiceSection({ service }) {
  const { layout } = service
  return (
    <section className={`svc-section layout-${layout}`}>
      <div className="svc-section-media" data-cursor="EXPLORE">
        <Link to={`/services/${service.slug}`} tabIndex={-1} aria-hidden="true">
          <img src={service.image} alt={service.name} loading="lazy" />
        </Link>
        <span className="svc-section-index">{service.index}</span>
      </div>

      <div className="svc-section-copy">
        <ScrollReveal as="span" variant="up" className="kicker">SERVICE {service.index}</ScrollReveal>
        <ScrollReveal as="h3" variant="clip" className="svc-section-title">{service.name}</ScrollReveal>
        <ScrollReveal as="p" variant="up" className="svc-section-tag">{service.tagline}</ScrollReveal>
        <ScrollReveal as="p" variant="up" delay={80} className="svc-section-desc">{service.description}</ScrollReveal>
        <ScrollReveal variant="up" delay={140}>
          <Link to={`/services/${service.slug}`} className="link-arrow" data-cursor="EXPLORE">
            EXPLORE SERVICE →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
