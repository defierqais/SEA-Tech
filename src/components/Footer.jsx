import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Phone, Mail, MessageCircle, ArrowRight, MapPin } from 'lucide-react'
import '../styles/Footer.css'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 320)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-top-container">

        <div className="footer-top">

          <div className="brand">
            <div className="brand-logo-row">
              <img src="/assets/SEAFooterLogo.png" alt="SEA-Tech" className="footer-logo" />
            </div>
            <p className="brand-tagline">At The Nexus of Sustainability, <span id='footer-energy'>Energy</span>, and Agriculture</p>
          </div>

          <div className="footer-center">
            <span>· Biomass Valorization · Sustainable Fuel Pathways ·<br />· Climate-Smart Agriculture · Soil Carbon Systems ·<br />· Circular Bioeconomy ·</span>
          </div>

          <div className="location">
            <div className="loc">
              <MapPin size={20} color="#7FB069" />
              <div>
                <p className="loc-label">Location</p>
                <p className="loc-value">Bangalore, Karnataka, India</p>
              </div>
            </div>

            {/* LinkedIn icon below location */}
            <a
              href="https://www.linkedin.com/company/sea-tech-innovations-llp/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-linkedin"
            >
              <FaLinkedin size={20} />
              Follow us on LinkedIn
            </a>
          </div>

        </div>

      </div>

      {/* Disclaimer */}
      {/* Bottom bar — disclaimer + copyright together */}
      <div className="footer-bottom">
        <p className="footer-disclaimer">
          The information presented on this website is intended for informational and collaboration
          purposes. Specific project outcomes and technology performance depend on detailed
          technical, commercial and regulatory evaluation.
        </p>
        <span className="footer-copy">© 2025 SEA-Tech Innovations LLP. All rights reserved.</span>
      </div>

    </footer>
  )
}