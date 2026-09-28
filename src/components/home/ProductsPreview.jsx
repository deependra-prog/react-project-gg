import { Link } from 'react-router-dom'
import { getProduct } from '../../data/products.js'
import ScrollReveal from '../ScrollReveal.jsx'

export default function ProductsPreview() {
  const playworld = getProduct('playworld')

  return (
    <section className="prod-preview">
      <div className="prod-preview-media" data-cursor="BUY">
        <Link to="/products/playworld" aria-label="PLAYWORLD hosting">
          <img src={playworld.image} alt="PLAYWORLD Minecraft hosting" loading="lazy" />
          <span className="prod-preview-live">
            <i /> NETWORK ONLINE
          </span>
        </Link>
      </div>

      <div className="prod-preview-copy">
        <ScrollReveal as="span" variant="up" className="kicker">SERVER DIVISION</ScrollReveal>
        <ScrollReveal as="h2" variant="clip" className="display-title">
          PLAYWORLD <em>HOSTING</em>
        </ScrollReveal>
        <ScrollReveal as="p" variant="up" className="lead">
          Minecraft server hosting and management on hardware that never blinks —
          NVMe worlds, DDoS shield, instant deploys, human support.
        </ScrollReveal>
        <ScrollReveal variant="up" className="prod-preview-specs">
          {playworld.specs.slice(0, 4).map((s) => (
            <div key={s.label} className="spec-mini">
              <span>{s.label}</span>
              <strong>{s.value}</strong>
            </div>
          ))}
        </ScrollReveal>
        <ScrollReveal variant="up" delay={120}>
          <Link to="/products/servers" className="btn" data-cursor="BUY">EXPLORE SERVERS</Link>
          <Link to="/products" className="btn btn-ghost">ALL PRODUCTS</Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
