import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const isServer = product.category === 'servers'
  return (
    <Link
      to={`/products/${product.slug}`}
      className={`product-card ${isServer ? 'is-server' : ''}`}
      data-cursor={isServer ? 'BUY' : 'VIEW'}
    >
      <div className="product-card-media">
        <img src={product.image} alt={product.name} loading="lazy" />
        {isServer && (
          <span className="product-live">
            <i /> ONLINE
          </span>
        )}
      </div>
      <div className="product-card-body">
        <span className="product-card-cat">
          {product.category === 'servers' ? 'SERVER' : product.category === 'digital' ? 'DIGITAL' : 'CREATIVE'}
        </span>
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-tag">{product.tagline}</p>
        <span className="product-card-cta">{isServer ? 'CHOOSE PLAN →' : 'VIEW PRODUCT →'}</span>
      </div>
    </Link>
  )
}
