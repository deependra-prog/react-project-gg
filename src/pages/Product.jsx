import { Link, useParams } from 'react-router-dom'
import { getProduct, relatedProducts } from '../data/products.js'
import ProductCard from '../components/products/ProductCard.jsx'
import PricingPlans from '../components/products/PricingPlans.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import NotFound from './NotFound.jsx'

export default function Product() {
  const { slug } = useParams()
  const product = getProduct(slug)
  if (!product) return <NotFound />

  return (
    <main className="page product-page">
      <section className="product-hero">
        <div className="product-hero-copy">
          <ScrollReveal as="span" variant="up" className="kicker">
            {product.category === 'servers' ? 'SERVER DIVISION' : product.category === 'digital' ? 'DIGITAL PRODUCT' : 'CREATIVE PRODUCT'}
          </ScrollReveal>
          <ScrollReveal as="h1" variant="clip" className="mega-title left">{product.name}</ScrollReveal>
          <ScrollReveal as="p" variant="up" delay={100} className="lead">{product.tagline}</ScrollReveal>
          <ScrollReveal as="p" variant="up" delay={160} className="product-desc">{product.description}</ScrollReveal>
          <ScrollReveal variant="up" delay={220} className="product-hero-cta">
            <a href="#plans" className="btn" data-cursor="BUY">CHOOSE YOUR PLAN</a>
            <Link to="/help" className="btn btn-ghost">DOCUMENTATION</Link>
          </ScrollReveal>
        </div>
        <div className="product-hero-media" data-cursor="BUY">
          <img src={product.image} alt={product.name} />
          {product.category === 'servers' && (
            <span className="product-live big"><i /> NETWORK ONLINE</span>
          )}
        </div>
      </section>

      <section className="product-specs">
        <ScrollReveal as="h2" variant="clip" className="section-title">SPECIFICATIONS</ScrollReveal>
        <div className="specs-grid">
          {product.specs.map((s, i) => (
            <ScrollReveal key={s.label} variant="up" delay={i * 60} className="spec-cell">
              <span>{s.label}</span>
              <strong>{s.value}</strong>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="product-features">
        <ScrollReveal as="h2" variant="clip" className="section-title">FEATURES</ScrollReveal>
        <ul className="feature-list">
          {product.features.map((f, i) => (
            <ScrollReveal as="li" key={f} variant="up" delay={i * 50}>
              <i className="star-dot" aria-hidden="true" /> {f}
            </ScrollReveal>
          ))}
        </ul>
      </section>

      <section className="service-pricing" id="plans">
        <PricingPlans slug={product.slug} />
      </section>

      <section className="related">
        <ScrollReveal as="h3" variant="clip" className="related-title">RELATED PRODUCTS</ScrollReveal>
        <div className="products-grid compact">
          {relatedProducts(product).map((p) => (
            <ScrollReveal key={p.slug} variant="up">
              <ProductCard product={p} />
            </ScrollReveal>
          ))}
        </div>
        <Link to="/products" className="link-arrow back-link" data-cursor="GO">← ALL PRODUCTS</Link>
      </section>
    </main>
  )
}
