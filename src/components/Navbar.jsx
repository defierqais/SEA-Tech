import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ChevronDown, Menu, X, Leaf, Zap, Sprout, Shield } from 'lucide-react'
import '../styles/Navbar.css'

// const seaItems = [
//   { label: 'Sustainability',    path: '/sustainability',    icon: Leaf,   desc: 'Circular systems & ESG' },
//   { label: 'Energy',            path: '/energy',            icon: Zap,    desc: 'Bioenergy & sustainable fuels' },
//   { label: 'Agriculture',       path: '/agriculture',       icon: Sprout, desc: 'Climate-smart farming' },
//   { label: 'Strategic Systems', path: '/strategic-systems', icon: Shield, desc: 'Resilient infrastructure' },
// ]
 
export default function Navbar() {
  // const [scrolled,      setScrolled]      = useState(false)
  // const [seaOpen,       setSeaOpen]       = useState(false)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  // const [mobileSeaOpen, setMobileSeaOpen] = useState(false)
  const location  = useLocation()
  const navigate  = useNavigate()
  const dropRef   = useRef(null)
  const isHome    = location.pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const fn = () => {
      const currentY = window.scrollY

      // visible when scrolling up or at top
      if (currentY < lastScrollY.current || currentY < 50) {
        setVisible(true)
      } else {
        setVisible(false)
      }

      // scrolled state for background treatment
      setScrolled(currentY > 50)
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  /* scroll detection */
  // useEffect(() => {
  //   const fn = () => setScrolled(window.scrollY > 50)
  //   window.addEventListener('scroll', fn, { passive: true })
  //   return () => window.removeEventListener('scroll', fn)
  // }, [])

  /* close on route change */
  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  /* click outside dropdown */
  // useEffect(() => {
  //   const fn = (e) => {
  //     if (dropRef.current && !dropRef.current.contains(e.target)) setSeaOpen(false)
  //   }
  //   document.addEventListener('mousedown', fn)
  //   return () => document.removeEventListener('mousedown', fn)
  // }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 320)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

// const scrollTo = (id) => {
//   setMobileOpen(false)
  
//   const target = document.getElementById(id)
//   if (!target) return

//   if (location.pathname !== '/') {
//     navigate('/')
//     setTimeout(() => smoothScroll(id), 600)
//   } else {
//     smoothScroll(id)
//   }
// }

// const smoothScroll = (id) => {
//   const target = document.getElementById(id)
//   if (!target) return

//   const targetY = target.getBoundingClientRect().top + window.scrollY - 70
//   const startY = window.scrollY
//   const distance = targetY - startY
//   const duration = 1000 // ms — increase for slower, decrease for faster

//   let startTime = null

//   const ease = (t) => t 
//   < 0.5
//     ? 4 * t * t * t
//     : 1 - Math.pow(-2 * t + 2, 3) / 2  // ease in-out cubic

//   const step = (timestamp) => {
//     if (!startTime) startTime = timestamp
//     const elapsed = timestamp - startTime
//     const progress = Math.min(elapsed / duration, 1)

//     window.scrollTo(0, startY + distance * ease(progress))

//     if (progress < 1) requestAnimationFrame(step)
//   }

//   requestAnimationFrame(step)
// }

  const transparent = isHome && !scrolled
  const triggerClass = transparent
    ? 'nav-dropdown__trigger nav-dropdown__trigger--light'
    : 'nav-dropdown__trigger nav-dropdown__trigger--dark'

  return (
    <>
      <nav className={`navbar ${transparent ? 'navbar--transparent' : 'navbar--scrolled'} ${visible ? 'navbar--visible' : 'navbar--hidden'} ${mobileOpen ? 'mobile-menu--open' : ''}` }>
        <div className="container" style={{width:"100%", display: "flex", alignItems: "center"}}>
          <div className="navbar__inner">

            {/* Logo */}
            <Link to="/" className="navbar__logo">
              <img src="/assets/SEALogo.png" alt="SEA-Tech Innovations LLP" />
            </Link>

            {/* Desktop Nav */}
            <div className="navbar__desktop">
              <NavBtn className="desk-nav" label="Home"              onClick={() => scrollTo('hero')}     light={transparent}/>
              <NavBtn className="desk-nav" label="Domains"           onClick={()=> scrollTo('domains')}   light={transparent} />
              <NavBtn className="desk-nav" label="Research & Pilots" onClick={() => scrollTo('research')} light={transparent} />
              <NavBtn className="desk-nav" label="Advisors"          onClick={() => scrollTo('advisors')} light={transparent} />
              <NavBtn className="desk-nav" label="Insights"          onClick={() => scrollTo('insights')} light={transparent} />
              <NavBtn className="desk-nav" label="Contact"           onClick={() => scrollTo('contact')}  light={transparent} />
            </div>

            {/* Right actions */}
            <div className="navbar__actions">
              <button onClick={() => scrollTo('contact')} className="btn btn-primary">
                Explore Collaboration
              </button>
              <button className="hamburger" onClick={() => setMobileOpen(v => !v)} aria-label="Toggle menu">
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}>
          <div className="mobile-menu__items">
            <button className="mobile-nav-btn" onClick={() => scrollTo('hero')}>Home</button>
            <button className="mobile-nav-btn" onClick={()=> scrollTo('domains')}>Domains</button>
            <button className="mobile-nav-btn" onClick={()=> scrollTo('research')}>Research &amp; Pilots</button>
            <button className="mobile-nav-btn" onClick={()=> scrollTo('advisors')}>Advisors</button>
            <button className="mobile-nav-btn" onClick={() => scrollTo('insights')}>Insights</button>
            <button className="mobile-nav-btn" onClick={() => scrollTo('contact')}>Contact</button>
            <div className="mobile-menu__cta">
              <button onClick={() => { scrollTo('contact'); setMobileOpen(false) }}
                className="btn btn-collab"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Explore Collaboration
              </button>
            </div>

            <div className="mobile-menu__footer">
              <p>SEA = Sustainability · Energy · Agriculture</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

function NavBtn({ label, onClick, light }) {
  return (
    <button
      onClick={onClick}
      className={`nav-link ${light ? 'nav-link--light' : 'nav-link--dark'}`}
    >
      {label}
    </button>
  )
}
