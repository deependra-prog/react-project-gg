import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero.jsx'
import ServicesPreview from '../components/home/ServicesPreview.jsx'
import ProductsPreview from '../components/home/ProductsPreview.jsx'
import HelpPreview from '../components/home/HelpPreview.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { projects } from '../data/projects.js'

export default function Home() {
  return (
    <main className="page home">
      <Hero />

      {/* Statement + tilted card row */}
      <section className="statement">
        <ScrollReveal as="h2" variant="clip" className="statement-title">
          A STUDIO FOR THE <em>CREATORS</em> AND THE <em>WORLDS</em> THEY BUILD.
        </ScrollReveal>
        <ScrollReveal as="p" variant="up" delay={120} className="lead statement-lead">
          YouTube. Instagram. Minecraft. We produce the content, the identity and the
          infrastructure behind internet-native brands — one coherent system.
        </ScrollReveal>

        <div className="tilt-row" aria-hidden="true">
          {projects.slice(0, 5).map((p, i) => (
            <div className="tilt-card" key={p.slug} style={{ '--r': `${(i - 2) * 3}deg`, '--y': `${Math.abs(i - 2) * 10}px` }}>
              <img src={p.cover} alt="" loading="lazy" />
              <span>{p.category}</span>
            </div>
          ))}
        </div>
      </section>

      <ServicesPreview />
      <ProductsPreview />
      <HelpPreview />

      <section className="cta-band">
        <ScrollReveal as="p" variant="up" className="kicker">READY WHEN YOU ARE</ScrollReveal>
        <ScrollReveal as="h2" variant="clip" className="display-title">
          LET’S BUILD <em>SOMETHING.</em>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={120}>
          <Link to="/contact" className="btn btn-large" data-cursor="GO">START A PROJECT</Link>
        </ScrollReveal>
      </section>
    </main>
  )
}
