import { useState } from 'react'
import { Link } from 'react-router-dom'

const LOGO = '/assets/logo/content2.png'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="arch-footer">
      <div className="arch-footer-container">
        {/* Left Navigation Column */}
        <div className="arch-nav-col left">
          <Link to="/about" className="arch-nav-link">ABOUT US</Link>
          <Link to="/about#mission" className="arch-nav-link">OUR TEAM</Link>
          <Link to="/products" className="arch-nav-link">PACKAGES</Link>
          <Link to="/work" className="arch-nav-link">GALLERY</Link>
          <Link to="/services" className="arch-nav-link">SERVICES</Link>
        </div>

        {/* Center Dome Arch */}
        <div className="arch-dome-center">
          <svg className="arch-dome-svg" viewBox="0 0 600 320" fill="none" preserveAspectRatio="none">
            <path
              d="M 20 320 A 280 260 0 0 1 580 320"
              stroke="rgba(255, 255, 255, 0.16)"
              strokeWidth="1.5"
            />
          </svg>

          <div className="arch-dome-content">
            <Link to="/" className="arch-logo-link" aria-label="ASTERIN home">
              <img src={LOGO} alt="ASTERIN" className="arch-logo" />
            </Link>

            <h3 className="arch-dome-title">SIGN UP FOR ALL THE LATEST NEWS AND OFFERS</h3>

            {subscribed ? (
              <p className="arch-subscribed-msg">✓ Thank you for subscribing to Asterin.</p>
            ) : (
              <form className="arch-signup-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  required
                />
                <button type="submit" aria-label="Subscribe">
                  <span>JOIN</span>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Navigation Column */}
        <div className="arch-nav-col right">
          <Link to="/contact" className="arch-nav-link">BOOKING</Link>
          <Link to="/products" className="arch-nav-link">PRODUCTS</Link>
          <Link to="/work" className="arch-nav-link">RECENT POST</Link>
          <Link to="/help" className="arch-nav-link">LATEST NEWS</Link>
          <Link to="/contact" className="arch-nav-link">CONTACT US</Link>
        </div>
      </div>

      <div className="arch-footer-base">
        <span>© {new Date().getFullYear()} ASTERIN. ALL RIGHTS RESERVED.</span>
        <div className="arch-footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">YOUTUBE</a>
          <a href="https://discord.com" target="_blank" rel="noreferrer">DISCORD</a>
        </div>
      </div>
    </footer>
  )
}
