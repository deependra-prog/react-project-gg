import AmbientBackground from '../AmbientBackground.jsx'
import ScrollReveal from '../ScrollReveal.jsx'

// Cinematic hero with animated red/black background running BEHIND the text.
export default function ServiceHero({ kicker, title, accent, tagline }) {
  return (
    <section className="service-hero">
      <div className="service-hero-bg">
        <AmbientBackground density={80} />
        <div className="sh-orb" />
        <div className="sh-grid" />
      </div>
      <div className="service-hero-dim" />
      <div className="service-hero-content">
        <ScrollReveal as="span" variant="up" className="kicker">{kicker}</ScrollReveal>
        <ScrollReveal as="h1" variant="clip" className="mega-title left">
          {title} {accent && <em>{accent}</em>}
        </ScrollReveal>
        {tagline && <ScrollReveal as="p" variant="up" delay={120} className="lead">{tagline}</ScrollReveal>}
      </div>
    </section>
  )
}
