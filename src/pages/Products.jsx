import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import ProductCard from '../components/products/ProductCard.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import AmbientBackground from '../components/AmbientBackground.jsx'

export default function Products({ filter }) {
  const shown = filter ? products.filter((p) => p.category === filter) : products
  const servers = shown.filter((p) => p.category === 'servers')
  const rest = shown.filter((p) => p.category !== 'servers')

  return (
    <main className="page products-page">
      <section className="service-hero">
        <div className="service-hero-bg">
          <AmbientBackground density={70} />
          <div className="sh-orb" />
        </div>
        <div className="service-hero-dim" />
        <div className="service-hero-content">
          <ScrollReveal as="span" variant="up" className="kicker">ASTERIN PRODUCTS</ScrollReveal>
          <ScrollReveal as="h1" variant="clip" className="mega-title left">
            PRODUCTS {filter === 'servers' && <em>/ SERVERS</em>}
          </ScrollReveal>
          <ScrollReveal as="p" variant="up" delay={120} className="lead">
            Infrastructure and digital tools we use ourselves — offered to your community.
          </ScrollReveal>
        </div>
      </section>

      {servers.length > 0 && (
        <section className="products-block">
          <div className="section-head">
            <ScrollReveal as="span" variant="up" className="kicker">SERVER DIVISION</ScrollReveal>
            <ScrollReveal as="h2" variant="clip" className="display-title">SERVERS</ScrollReveal>
          </div>
          <div className="products-grid">
            {servers.map((p) => (
              <ScrollReveal key={p.slug} variant="up">
                <ProductCard product={p} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="products-block">
          <div className="section-head">
            <ScrollReveal as="span" variant="up" className="kicker">DIGITAL & CREATIVE</ScrollReveal>
            <ScrollReveal as="h2" variant="clip" className="display-title">TOOLS & PACKS</ScrollReveal>
          </div>
          <div className="products-grid">
            {rest.map((p) => (
              <ScrollReveal key={p.slug} variant="up">
                <ProductCard product={p} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      <section className="work-cta">
        <ScrollReveal as="p" variant="up" className="lead">
          Not sure what your community needs? <Link to="/contact" className="inline-link">Talk to us</Link> — we run networks ourselves.
        </ScrollReveal>
      </section>
    </main>
  )
}
