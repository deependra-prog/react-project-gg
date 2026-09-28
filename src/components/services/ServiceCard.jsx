import { Link } from 'react-router-dom'

// Compact related-service card.
export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="service-card" data-cursor="EXPLORE">
      <span className="service-card-index">{service.index}</span>
      <h4 className="service-card-name">{service.name}</h4>
      <p className="service-card-tag">{service.tagline}</p>
      <span className="service-card-arrow">→</span>
    </Link>
  )
}
