import { Link } from 'react-router-dom'
import { news } from '../../data/news.js'
import ScrollReveal from '../ScrollReveal.jsx'

export default function HelpPreview() {
  return (
    <section className="news-section">
      <div className="section-head">
        <ScrollReveal as="span" variant="up" className="kicker">TRANSMISSIONS</ScrollReveal>
        <ScrollReveal as="h2" variant="clip" className="display-title">
          LATEST <em>SIGNALS</em>
        </ScrollReveal>
        <Link to="/help" className="link-arrow" data-cursor="GO">HELP CENTER →</Link>
      </div>

      <div className="news-grid">
        {news.map((n, i) => (
          <ScrollReveal key={n.title} variant="up" delay={i * 90} className="news-card">
            <div className="news-card-media">
              <img src={n.image} alt="" loading="lazy" />
            </div>
            <span className="news-date">{n.date}</span>
            <h3 className="news-title">{n.title}</h3>
            <p className="news-excerpt">{n.excerpt}</p>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal variant="up" className="help-strip">
        <p>NEED A HAND WITH A SERVER, A PROJECT, OR AN ORDER?</p>
        <Link to="/help" className="btn btn-ghost" data-cursor="GO">GET SUPPORT</Link>
      </ScrollReveal>
    </section>
  )
}
