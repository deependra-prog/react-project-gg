import ScrollReveal from '../ScrollReveal.jsx'
import { getPricing } from '../../data/pricing.js'

// Renders plans for a product/service slug from data/pricing.js
export default function PricingPlans({ slug }) {
  const data = getPricing(slug)
  if (!data) return null

  return (
    <div className="plans-block">
      <ScrollReveal as="h3" variant="clip" className="plans-title">CHOOSE YOUR PLAN</ScrollReveal>
      {data.note && <ScrollReveal as="p" variant="up" className="plans-note">{data.note}</ScrollReveal>}
      <div className="plans">
        {data.plans.map((plan, i) => (
          <ScrollReveal
            key={plan.name}
            variant="up"
            delay={i * 90}
            className={`plan ${plan.highlight ? 'highlight' : ''}`}
          >
            {plan.highlight && <span className="plan-flag">RECOMMENDED</span>}
            <h4 className="plan-name">{plan.name}</h4>
            <p className="plan-tagline">{plan.tagline}</p>
            <div className="plan-price">
              <span className="plan-currency">{data.currency}</span>
              <span className="plan-amount">{plan.price}</span>
              <span className="plan-period">{data.period}</span>
            </div>
            <ul className="plan-features">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a href={`mailto:hello@asterin.studio?subject=${encodeURIComponent(plan.name + ' plan')}`} className={`btn ${plan.highlight ? '' : 'btn-ghost'}`} data-cursor="BUY">
              SELECT {plan.name}
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
