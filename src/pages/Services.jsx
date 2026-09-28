import { services } from '../data/services.js'
import ServiceHero from '../components/services/ServiceHero.jsx'
import ServiceSection from '../components/services/ServiceSection.jsx'

export default function Services() {
  return (
    <main className="page services-page">
      <ServiceHero
        kicker="ASTERIN SERVICES"
        title="SERVICES"
        tagline="Six disciplines. One system. Built for creators, influencers and the worlds they run."
      />
      <div className="svc-sections">
        {services.map((s) => (
          <ServiceSection key={s.slug} service={s} />
        ))}
      </div>
    </main>
  )
}
