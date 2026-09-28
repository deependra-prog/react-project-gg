import { Link } from 'react-router-dom'
import FAQ from '../components/help/FAQ.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'

const docs = [
  {
    title: 'DOCUMENTATION',
    body: 'Panel guides, FTP access, backups, plugin installs and panel API — written for owners, not sysadmins.',
    to: '/help'
  },
  {
    title: 'GETTING STARTED',
    body: 'New to ASTERIN? Start here: deploy your first server or kick off your first content project in three steps.',
    to: '/contact'
  },
  {
    title: 'SUPPORT',
    body: 'Hosting: 24/7 via panel & Discord. Studio work: a dedicated producer on WhatsApp, Discord and email.',
    to: '/contact'
  }
]

export default function Help() {
  return (
    <main className="page help-page">
      <section className="page-hero">
        <ScrollReveal as="span" variant="up" className="kicker">ASTERIN HELP</ScrollReveal>
        <ScrollReveal as="h1" variant="clip" className="mega-title">
          NEED A <em>HAND?</em>
        </ScrollReveal>
        <ScrollReveal as="p" variant="up" delay={120} className="lead">
          Answers, documentation and humans who actually play the game and ship the edits.
        </ScrollReveal>
      </section>

      <section className="help-docs">
        {docs.map((d, i) => (
          <ScrollReveal key={d.title} variant="up" delay={i * 80} className="doc-card">
            <span className="doc-index">0{i + 1}</span>
            <h3>{d.title}</h3>
            <p>{d.body}</p>
            <Link to={d.to} className="link-arrow" data-cursor="GO">OPEN →</Link>
          </ScrollReveal>
        ))}
      </section>

      <section className="help-faq">
        <div className="section-head">
          <ScrollReveal as="span" variant="up" className="kicker">FAQ</ScrollReveal>
          <ScrollReveal as="h2" variant="clip" className="display-title">QUESTIONS, <em>ANSWERED.</em></ScrollReveal>
        </div>
        <FAQ />
      </section>

      <section className="work-cta">
        <ScrollReveal as="h2" variant="clip" className="display-title">STILL STUCK?</ScrollReveal>
        <ScrollReveal variant="up" delay={100}>
          <Link to="/contact" className="btn" data-cursor="GO">CONTACT SUPPORT</Link>
        </ScrollReveal>
      </section>
    </main>
  )
}
