import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal.jsx'

const projectTypes = [
  'YouTube Content',
  'Instagram / Influencer',
  'Video Editing',
  'Graphic Design',
  'Minecraft Server Hosting',
  'Server Management',
  'Other'
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="page contact-page">
      <section className="contact-grid">
        <div className="contact-left">
          <ScrollReveal as="span" variant="up" className="kicker">CONTACT ASTERIN</ScrollReveal>
          <ScrollReveal as="h1" variant="clip" className="mega-title left">
            LET’S BUILD <em>SOMETHING.</em>
          </ScrollReveal>
          <ScrollReveal as="p" variant="up" delay={120} className="lead">
            Tell us about your channel, your brand or your world.
            We reply within 48 hours.
          </ScrollReveal>

          <ScrollReveal variant="up" delay={180} className="contact-meta">
            <div className="contact-meta-row">
              <span>EMAIL</span>
              <a href="mailto:hello@asterin.studio">hello@asterin.studio</a>
            </div>
            <div className="contact-meta-row">
              <span>SOCIALS</span>
              <span className="contact-socials">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">YOUTUBE</a>
                <a href="https://discord.com" target="_blank" rel="noreferrer">DISCORD</a>
              </span>
            </div>
            <div className="contact-meta-row">
              <span>BUSINESS</span>
              <p>
                ASTERIN Studio — creative technology &amp; media.
                <br /> Jodhpur, Rajasthan, India.
                <br /> Mon–Sat, 10:00–19:00 IST.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="contact-right">
          {sent ? (
            <div className="contact-success">
              <span className="kicker">MESSAGE RECEIVED</span>
              <h2>WE’LL REPLY WITHIN 48 HOURS.</h2>
              <p>Keep an eye on your inbox — and your spam folder, just in case.</p>
              <button className="btn btn-ghost" onClick={() => setSent(false)}>SEND ANOTHER</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <label>
                <span>NAME</span>
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label>
                <span>EMAIL</span>
                <input type="email" name="email" required placeholder="you@channel.com" />
              </label>
              <label>
                <span>PROJECT TYPE</span>
                <select name="type" defaultValue={projectTypes[0]}>
                  {projectTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>MESSAGE</span>
                <textarea name="message" required rows={5} placeholder="Tell us what you're building…" />
              </label>
              <button type="submit" className="btn btn-large" data-cursor="GO">
                SEND TRANSMISSION
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
