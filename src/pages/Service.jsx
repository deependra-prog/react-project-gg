import { Link, useParams } from 'react-router-dom'
import { getService, relatedServices } from '../data/services.js'
import { getProject } from '../data/projects.js'
import ServiceHero from '../components/services/ServiceHero.jsx'
import ServiceCard from '../components/services/ServiceCard.jsx'
import PricingPlans from '../components/products/PricingPlans.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import NotFound from './NotFound.jsx'

export default function Service() {
  const { slug } = useParams()
  const service = getService(slug)
  if (!service) return <NotFound />

  const exampleProjects = service.examples.map(getProject).filter(Boolean)

  return (
    <main className="page service-page">
      <ServiceHero
        kicker={`SERVICE ${service.index}`}
        title={service.name}
        tagline={service.tagline}
      />

      <section className="service-body">
        <div className="service-copy">
          <ScrollReveal as="h2" variant="clip" className="section-title">THE SERVICE</ScrollReveal>
          <ScrollReveal as="p" variant="up" className="lead">{service.long}</ScrollReveal>
        </div>

        <div className="service-provide">
          <ScrollReveal as="h2" variant="clip" className="section-title">WHAT WE PROVIDE</ScrollReveal>
          <ul className="provide-list">
            {service.provide.map((item, i) => (
              <ScrollReveal as="li" key={item} variant="up" delay={i * 60}>
                <span className="provide-index">0{i + 1}</span> {item}
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {exampleProjects.length > 0 && (
        <section className="service-examples">
          <ScrollReveal as="h2" variant="clip" className="section-title">SELECTED EXAMPLES</ScrollReveal>
          <div className="examples-grid">
            {exampleProjects.map((p) => (
              <ScrollReveal key={p.slug} variant="scale" className="example-tile">
                <Link to={`/work/${p.slug}`} data-cursor="VIEW">
                  <img src={p.cover} alt={p.title} loading="lazy" />
                  <div className="example-info">
                    <span>{p.category}</span>
                    <h4>{p.title}</h4>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      <section className="service-pricing">
        <PricingPlans slug={service.slug} />
        <ScrollReveal variant="up" className="quote-strip">
          <p>Every {service.name.toLowerCase()} engagement is scoped to your channel, community or brand.</p>
          <Link to="/contact" className="btn" data-cursor="GO">GET A QUOTE</Link>
        </ScrollReveal>
      </section>

      <section className="related">
        <ScrollReveal as="h3" variant="clip" className="related-title">RELATED SERVICES</ScrollReveal>
        <div className="related-services">
          {relatedServices(service).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <Link to="/services" className="link-arrow back-link" data-cursor="GO">← ALL SERVICES</Link>
      </section>
    </main>
  )
}
