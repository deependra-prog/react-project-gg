import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal.jsx'
import AmbientBackground from '../components/AmbientBackground.jsx'

const initialTestimonials = [
  {
    id: 't-1',
    quote: 'the servers are very good and the performance is also next level',
    author: 'Kanav gamer',
    role: 'Minecraft Server Host',
    badge: 'KG',
    rating: 5,
    date: 'Verified Client',
    to: '/products/servers',
    catLabel: 'Server Hosting'
  },
  {
    id: 't-2',
    quote: 'very mast server smooth with no lag till now',
    author: 'Srijan & Ray',
    role: 'Minecraft Server Host',
    badge: 'SR',
    rating: 5,
    date: 'Verified Client',
    to: '/products/servers',
    catLabel: 'Performance Hosting'
  },
  {
    id: 't-3',
    quote: 'Extremely helpful support team and the server performance is next level. Zero downtime even during 300+ player events.',
    author: 'Apex Dynasty',
    role: 'SMP Server Host',
    badge: 'AD',
    rating: 5,
    date: 'Verified Host',
    to: '/products/servers',
    catLabel: 'Enterprise SMP'
  },
  {
    id: 't-4',
    quote: 'Turned our raw recording footage into retention-crushing YouTube videos. Best studio partner on the market.',
    author: 'Nova Realm',
    role: 'YouTube Creator (1.2M)',
    badge: 'NV',
    rating: 5,
    date: 'Partner Studio',
    to: '/services/youtube-growth',
    catLabel: 'YouTube Growth'
  }
]

const teamMembers = [
  {
    name: 'Aarav "Apex" Sharma',
    role: 'Founder & Creative Director',
    specialty: 'Brand Architecture & Content Strategy',
    badge: 'AS',
    status: 'Studio Lead',
    bio: 'Directing cinematic visual identities and content workflows for leading gaming creators and esports orgs.',
    tags: ['Creative Dir', 'VFX', 'Strategy'],
    to: '/services/video-production',
    categoryName: 'Video & Creative'
  },
  {
    name: 'Vikramaditya Roy',
    role: 'Chief Infrastructure Architect',
    specialty: 'Multi-Terabit DDoS Mitigation',
    badge: 'VR',
    status: 'Node Lead',
    bio: 'Architect of Asterin edge nodes, bare-metal hypervisors, and custom packet filtering engines with 99.99% uptime.',
    tags: ['Systems', 'Kernel Dev', 'DDoS Shield'],
    to: '/products/servers',
    categoryName: 'Server Infrastructure'
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Motion & VFX',
    specialty: '3D Simulation & Retention Editing',
    badge: 'ER',
    status: 'Rendering',
    bio: 'Pioneering dynamic motion identities and high-retention video pipelines that have generated over 250M+ impressions.',
    tags: ['Motion Graphics', 'Blender', 'Editing'],
    to: '/services/motion-graphics',
    categoryName: 'Motion & VFX'
  },
  {
    name: 'Devansh Patel',
    role: 'Systems & Network Engineer',
    specialty: 'Kernel Tuning & Low-Latency Routing',
    badge: 'DP',
    status: 'Online',
    bio: 'Optimizing low-latency TCP/UDP pipelines and automated server provisioning for zero-downtime gameplay.',
    tags: ['Bare-Metal', 'KVM', 'Automations'],
    to: '/products/creator-vps',
    categoryName: 'Cloud & VPS'
  }
]

const faqs = [
  {
    q: 'How long does it take for my server to activate?',
    a: 'Instant deployment. As soon as your order is confirmed, our automated provisioning system sets up your Minecraft server or VPS within minutes.'
  },
  {
    q: 'Do you offer DDoS Protection?',
    a: 'Yes, enterprise-grade multi-terabit DDoS mitigation is included by default across all Asterin server nodes, ensuring zero downtime during community peaks.'
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Absolutely. You can seamlessly scale RAM, vCPUs, and storage directly from your dashboard with zero data loss and automated server reconfiguration.'
  },
  {
    q: 'Where are your servers located?',
    a: 'Our enterprise nodes are hosted in low-latency tier-4 datacenters strategically positioned across North America, Europe, and Asia-Pacific.'
  },
  {
    q: 'Will I get full access to my server?',
    a: 'Yes, you get full root/SFTP access, web console control, custom JAR support, and automated daily backups for complete peace of mind.'
  }
]

function StarRating({ rating = 5 }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={`star-icon ${s <= rating ? 'filled' : 'empty'}`}>
          ★
        </span>
      ))}
      <span className="rating-score">{Number(rating).toFixed(1)}</span>
    </div>
  )
}

function StarInput({ value, onChange, hoverValue, onHover }) {
  return (
    <div className="star-input-group" onMouseLeave={() => onHover(0)}>
      {[1, 2, 3, 4, 5].map((s) => {
        const active = (hoverValue || value) >= s
        return (
          <button
            type="button"
            key={s}
            className={`star-select-btn ${active ? 'active' : ''}`}
            onMouseEnter={() => onHover(s)}
            onClick={() => onChange(s)}
            aria-label={`${s} star`}
          >
            ★
          </button>
        )
      })}
      <span className="star-input-label">{(hoverValue || value)}.0 Stars</span>
    </div>
  )
}

export default function About({ sectionOverride }) {
  const { section: routeSection } = useParams()
  const activeSection = sectionOverride || routeSection
  const [openFaq, setOpenFaq] = useState(null)
  const [reviews, setReviews] = useState(initialTestimonials)
  const [showForm, setShowForm] = useState(false)
  const [autoRoll, setAutoRoll] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [newAuthor, setNewAuthor] = useState('')
  const [newRole, setNewRole] = useState('')
  const [newRating, setNewRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [newQuote, setNewQuote] = useState('')
  const [formError, setFormError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const carouselRef = useRef(null)
  const location = useLocation()

  // Auto-roll horizontal testimonials track
  useEffect(() => {
    if (!autoRoll || isHovered || showForm) return

    const timer = setInterval(() => {
      if (carouselRef.current) {
        const el = carouselRef.current
        const maxScroll = el.scrollWidth - el.clientWidth
        if (maxScroll <= 10) return

        // If at or near the end, roll smoothly back to the beginning
        if (el.scrollLeft >= maxScroll - 25) {
          el.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          // Roll by one card width (390px card + 25.6px gap ≈ 416px)
          el.scrollBy({ left: 416, behavior: 'smooth' })
        }
      }
    }, 3200)

    return () => clearInterval(timer)
  }, [autoRoll, isHovered, showForm, reviews.length])

  // Hash anchor scrolling with retry for intro animation
  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const scrollToTarget = () => {
      const el = document.getElementById(id)
      if (el && !document.body.classList.contains('intro-active')) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return true
      }
      return false
    }

    if (!scrollToTarget()) {
      const interval = setInterval(() => {
        if (scrollToTarget()) {
          clearInterval(interval)
        }
      }, 250)
      const timeout = setTimeout(() => clearInterval(interval), 5500)
      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }
  }, [location.hash])

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -416, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const el = carouselRef.current
      const maxScroll = el.scrollWidth - el.clientWidth
      if (el.scrollLeft >= maxScroll - 25) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: 416, behavior: 'smooth' })
      }
    }
  }

  const handleAddReview = (e) => {
    e.preventDefault()
    if (!newAuthor.trim()) {
      setFormError('Please enter your name or handle.')
      return
    }
    if (!newQuote.trim()) {
      setFormError('Please write your review comment.')
      return
    }

    const words = newAuthor.trim().split(/\s+/)
    const badge = words.length > 1
      ? (words[0][0] + words[1][0]).toUpperCase()
      : words[0].slice(0, 2).toUpperCase()

    const newCard = {
      id: 'rev-' + Date.now(),
      quote: newQuote.trim(),
      author: newAuthor.trim(),
      role: newRole.trim() || 'Community Member',
      badge,
      rating: newRating,
      date: 'Just now',
      isNew: true
    }

    setReviews((prev) => [...prev, newCard])
    setNewAuthor('')
    setNewRole('')
    setNewQuote('')
    setNewRating(5)
    setHoverRating(0)
    setFormError('')
    setShowForm(false)
    setSuccessMsg('Review added! Rolling to your review...')

    // Smoothly roll the horizontal track into the new review
    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollWidth + 600,
          behavior: 'smooth'
        })
      }
    }, 200)

    setTimeout(() => {
      setSuccessMsg('')
    }, 5000)
  }

  const renderSubnav = () => (
    <div className="about-subnav-bar">
      <NavLink
        to="/about"
        end
        className={() => `subnav-pill ${!activeSection ? 'active' : ''}`}
      >
        ALL OVERVIEW
      </NavLink>
      <NavLink
        to="/about/mission"
        className={() => `subnav-pill ${activeSection === 'mission' ? 'active' : ''}`}
      >
        MISSION & GOAL
      </NavLink>
      <NavLink
        to="/about/team"
        className={() => `subnav-pill ${activeSection === 'team' ? 'active' : ''}`}
      >
        OUR TEAM
      </NavLink>
      <NavLink
        to="/about/testimonials"
        className={() => `subnav-pill ${activeSection === 'testimonials' ? 'active' : ''}`}
      >
        TESTIMONIALS & RATINGS
      </NavLink>
      <NavLink to="/help" className="subnav-pill">
        FAQ & HELP ↗
      </NavLink>
    </div>
  )

  return (
    <main className={`page about-page ${activeSection ? `about-view-${activeSection}` : ''}`}>
      {/* Background animated moving red particles matching home page */}
      <AmbientBackground density={100} className="about-ambient" />

      {/* Hero header with category subnav bar */}
      <section className="page-hero about-hero-compact">
        <ScrollReveal as="span" variant="up" className="kicker">
          {activeSection === 'team'
            ? 'THE SQUAD'
            : activeSection === 'mission'
            ? 'OUR PURPOSE'
            : activeSection === 'testimonials'
            ? 'COMMUNITY FEEDBACK'
            : 'ASTERIN OVERVIEW'}
        </ScrollReveal>
        <ScrollReveal as="h1" variant="clip" className="mega-title">
          {activeSection === 'team' ? (
            <>THE MINDS BEHIND <em>ASTERIN.</em></>
          ) : activeSection === 'mission' ? (
            <>BUILT TO EMPOWER <em>CREATORS.</em></>
          ) : activeSection === 'testimonials' ? (
            <>TRUSTED BY <em>HUNDREDS.</em></>
          ) : (
            <>ABOUT <em>ASTERIN.</em></>
          )}
        </ScrollReveal>
        <ScrollReveal as="p" variant="up" delay={120} className="lead">
          {activeSection === 'team'
            ? 'Meet the engineers, directors, and artists designing the future of digital media and servers.'
            : activeSection === 'mission'
            ? 'We forge meaningful long-term partnerships, cutting through the digital noise with unmatched performance.'
            : activeSection === 'testimonials'
            ? 'Real ratings and feedback from server owners and YouTube creators powered by Asterin.'
            : 'A hybrid creative agency and high-concurrency hosting platform built for the next generation.'}
        </ScrollReveal>

        {/* Category Navigation Pills */}
        {renderSubnav()}
      </section>

      {/* ------------------------------------------------------------
          SECTION 1: OUR MISSION, OUR GOAL, OUR APPROACH
          ------------------------------------------------------------ */}
      {(!activeSection || activeSection === 'mission') && (
        <section id="mission" className="about-sylo-section">
          <div className="about-sylo-container">
            <div className="about-sylo-content">
              <ScrollReveal as="div" variant="up" className="about-sylo-block">
                <h2 className="about-sylo-heading">Our Mission</h2>
                <p className="about-sylo-text">
                  Instead of an 'outsourced' relationship, our mission at Asterin is to{' '}
                  <span className="sylo-highlight">forge meaningful partnerships</span> with every creator and brand we work with.
                  Becoming experts in their content, voice, and communities, we aim to be a seamless extension of their existing team.
                </p>
                <div className="about-sylo-action-row">
                  <Link to="/services" className="btn btn-ghost sylo-action-btn" data-cursor="GO">
                    Explore Services →
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal as="div" variant="up" delay={120} className="about-sylo-block">
                <h2 className="about-sylo-heading">Our Goal</h2>
                <p className="about-sylo-text">
                  Through modern and innovative digital production strategies and high-performance server infrastructure, our goal at Asterin is to{' '}
                  <span className="sylo-highlight">empower the creators</span> and server owners we work with, so they can cut through the digital noise.
                </p>
                <div className="about-sylo-action-row">
                  <Link to="/products/servers" className="btn btn-ghost sylo-action-btn" data-cursor="GO">
                    Server Division →
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal as="div" variant="up" delay={240} className="about-sylo-block">
                <h2 className="about-sylo-heading">Our Approach</h2>
                <p className="about-sylo-text">
                  We believe in a holistic approach that combines creativity, data, and technology, to create{' '}
                  <span className="sylo-highlight">impactful digital experiences</span> that foster authentic connections and drive meaningful engagements and long-term community value.
                </p>
                <div className="about-sylo-action-row">
                  <Link to="/work" className="btn btn-ghost sylo-action-btn" data-cursor="GO">
                    View Portfolio →
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------
          SECTION 2: OUR TEAM - THE SQUAD
          ------------------------------------------------------------ */}
      {(!activeSection || activeSection === 'team') && (
        <section id="team" className="about-team-section">
          {!activeSection && (
            <div className="team-header">
              <ScrollReveal as="div" variant="up">
                <span className="capsule-tag">The Squad</span>
              </ScrollReveal>
              <ScrollReveal as="h2" variant="clip" className="team-title">
                The Minds Behind <span className="accent-red">Asterin.</span>
              </ScrollReveal>
              <ScrollReveal as="p" variant="up" delay={100} className="team-subtitle">
                A multidisciplinary collective of infrastructure engineers, motion designers, and system architects building the next generation of creator tech and game server performance.
              </ScrollReveal>
            </div>
          )}

          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <ScrollReveal as="div" variant="up" delay={idx * 100} key={member.name} className="team-card">
                <div className="team-card-top">
                  <div className="team-badge-wrapper">
                    <div className="team-badge">{member.badge}</div>
                    <div className="team-status-indicator">
                      <span className="status-dot"></span>
                      <span className="status-label">{member.status}</span>
                    </div>
                  </div>
                </div>

                <div className="team-card-body">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <span className="team-spec">{member.specialty}</span>
                  <p className="team-bio">{member.bio}</p>
                </div>

                <div className="team-tags">
                  {member.tags.map((t) => (
                    <span key={t} className="team-tag">{t}</span>
                  ))}
                </div>

                <Link to={member.to} className="team-cat-link" data-cursor="VIEW">
                  <span>{member.categoryName}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------
          SECTION 3: TESTIMONIALS - TRUSTED BY HUNDREDS (Horizontal Roll)
          ------------------------------------------------------------ */}
      {(!activeSection || activeSection === 'testimonials') && (
        <section id="testimonials" className="about-testimonials-section">
          {!activeSection && (
            <div className="testimonials-header">
              <ScrollReveal as="div" variant="up">
                <span className="capsule-tag">Community Feedback</span>
              </ScrollReveal>
              <ScrollReveal as="h2" variant="clip" className="testimonials-title">
                Trusted by <span className="accent-red">Hundreds.</span>
              </ScrollReveal>
              <ScrollReveal as="p" variant="up" delay={100} className="testimonials-subtitle">
                Real feedback from server owners, YouTube creators, and gaming networks powered by Asterin.
              </ScrollReveal>
            </div>
          )}

          {/* Action Row: Stats & Horizontal Navigation Controls */}
          <div className="testimonials-action-row">
            <div className="testimonials-count-pill">
              <span className="count-num">{reviews.length}</span> Verified Reviews
              <span className="count-divider">/</span>
              <span className="count-stars">★★★★★ 5.0 Avg</span>
            </div>

            <div className="testimonials-controls">
              <button
                type="button"
                className={`auto-roll-pill ${autoRoll ? 'is-active' : ''}`}
                onClick={() => setAutoRoll((prev) => !prev)}
                title={autoRoll ? 'Click to pause auto-roll' : 'Click to resume auto-roll'}
                aria-label="Toggle auto roll"
              >
                <span className={`pill-status-dot ${autoRoll && !isHovered ? 'pulsing' : ''}`}>●</span>
                <span>{autoRoll ? (isHovered ? 'PAUSED' : 'AUTO-ROLLING') : 'AUTO-ROLL OFF'}</span>
              </button>

              <button
                type="button"
                className="scroll-btn scroll-prev"
                onClick={scrollLeft}
                aria-label="Scroll left"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                className="scroll-btn scroll-next"
                onClick={scrollRight}
                aria-label="Scroll right"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <button
                type="button"
                className={`add-review-btn ${showForm ? 'active' : ''}`}
                onClick={() => {
                  setShowForm(!showForm)
                  setFormError('')
                }}
              >
                {showForm ? '✕ Close Form' : '+ Add Your Review'}
              </button>
            </div>
          </div>

          {successMsg && (
            <div className="review-success-toast">
              <span className="toast-icon">✓</span> {successMsg}
            </div>
          )}

          {/* Add Review Inline Form Drawer */}
          {showForm && (
            <div className="add-review-panel">
              <form onSubmit={handleAddReview} className="add-review-form">
                <div className="review-form-header">
                  <h3>Share Your Experience</h3>
                  <p>Join our community wall with your rating & feedback.</p>
                </div>

                {formError && <p className="review-form-error">{formError}</p>}

                <div className="review-form-grid">
                  <div className="form-group">
                    <label htmlFor="review-name">Your Name / Handle *</label>
                    <input
                      id="review-name"
                      type="text"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="e.g. Apex Dynasty / Ray"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="review-role">Your Role / Community</label>
                    <input
                      id="review-role"
                      type="text"
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      placeholder="e.g. SMP Host (350+ peak)"
                    />
                  </div>
                </div>

                <div className="form-group star-rating-group">
                  <label>Your Rating *</label>
                  <StarInput
                    value={newRating}
                    onChange={setNewRating}
                    hoverValue={hoverRating}
                    onHover={setHoverRating}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="review-quote">Your Review *</label>
                  <textarea
                    id="review-quote"
                    rows={3}
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    placeholder="Share details on server performance, uptime, video editing, or customer support..."
                    required
                  />
                </div>

                <div className="review-form-actions">
                  <button
                    type="button"
                    className="btn btn-secondary review-cancel-btn"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary submit-review-btn">
                    Publish Review ★
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Horizontal Scrollable Rail / Track */}
          <div
            className="testimonials-horizontal-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            <div className="testimonials-horizontal-track" ref={carouselRef}>
              {reviews.map((t, idx) => (
                <div
                  key={t.id || t.author + idx}
                  className={`testimonial-horizontal-card ${t.isNew ? 'is-new' : ''}`}
                >
                  {t.isNew && <div className="new-badge">NEW REVIEW</div>}

                  <div className="card-stars-row">
                    <StarRating rating={t.rating || 5} />
                    <div className="card-meta-tags">
                      <span className="card-verified-tag">{t.date || 'Verified'}</span>
                      {t.to && (
                        <Link to={t.to} className="card-cat-link" data-cursor="VIEW">
                          {t.catLabel || 'Explore'} ↗
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="testimonial-quote">“{t.quote}”</p>

                  <div className="testimonial-author-row">
                    <div className="testimonial-badge">{t.badge}</div>
                    <div className="testimonial-author-meta">
                      <span className="testimonial-name">{t.author}</span>
                      <span className="testimonial-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-hint">
            <span className="hint-dot">●</span>{' '}
            {autoRoll
              ? isHovered
                ? 'Auto-roll paused (hovered) — move mouse away to resume'
                : 'Auto-rolling horizontally — hover to pause or use arrows'
              : 'Auto-roll paused — click AUTO-ROLL button to resume'}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------
          SECTION 4: FREQUENTLY ASKED QUESTIONS (2nd Image)
          ------------------------------------------------------------ */}
      {!activeSection && (
        <section id="faq" className="about-faq-section">
          <div className="faq-header">
            <ScrollReveal as="div" variant="up">
              <span className="capsule-tag">Got Questions?</span>
            </ScrollReveal>
            <ScrollReveal as="h2" variant="clip" className="faq-title">
              Frequently Asked Questions.
            </ScrollReveal>
            <ScrollReveal as="p" variant="up" delay={100} className="faq-subtitle">
              Everything you need to know about our hosting services, billing, and technical specifications.
            </ScrollReveal>
          </div>

          <div className="faq-accordion-container">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={f.q}
                  className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                  onClick={() => toggleFaq(i)}
                >
                  <div className="faq-accordion-header">
                    <span className="faq-accordion-q">{f.q}</span>
                    <svg
                      className={`faq-chevron ${isOpen ? 'rotate' : ''}`}
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  {isOpen && (
                    <div className="faq-accordion-body">
                      <p>{f.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="faq-more-wrap">
            <p>Need deep technical guides, FTP setup, or panel documentation?</p>
            <Link to="/help" className="btn btn-ghost faq-more-btn" data-cursor="GO">
              Visit Full Knowledge Base &amp; FAQ →
            </Link>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------
          CALL TO ACTION BANNER
          ------------------------------------------------------------ */}
      <section className="cta-band">
        <ScrollReveal as="h2" variant="clip" className="display-title">
          LET’S BUILD <em>SOMETHING.</em>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={100}>
          <Link to="/contact" className="btn btn-large" data-cursor="GO">
            CONTACT US
          </Link>
        </ScrollReveal>
      </section>
    </main>
  )
}
