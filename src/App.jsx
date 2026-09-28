import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Intro from './components/Intro.jsx'
import Navbar from './components/Navbar.jsx'
import Menu from './components/Menu.jsx'
import Footer from './components/Footer.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import PageTransition from './components/PageTransition.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Project from './pages/Project.jsx'
import Services from './pages/Services.jsx'
import Service from './pages/Service.jsx'
import Products from './pages/Products.jsx'
import Product from './pages/Product.jsx'
import About from './pages/About.jsx'
import Help from './pages/Help.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // lock scroll while the intro plays
  useEffect(() => {
    document.body.classList.toggle('intro-active', !introDone)
    return () => document.body.classList.remove('intro-active')
  }, [introDone])

  // close the big menu on navigation
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <CustomCursor />
      <Intro onDone={() => setIntroDone(true)} />

      <div className={`site ${introDone ? 'is-ready' : ''}`}>
        <Navbar onMenu={() => setMenuOpen(true)} />
        <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<Project />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<Service />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/servers" element={<Products filter="servers" />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:section" element={<About />} />
            <Route path="/team" element={<About sectionOverride="team" />} />
            <Route path="/testimonials" element={<About sectionOverride="testimonials" />} />
            <Route path="/mission" element={<About sectionOverride="mission" />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>

        <Footer />
      </div>

      <div className="grain" aria-hidden="true" />
    </>
  )
}
