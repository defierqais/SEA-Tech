import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRight, Leaf, Zap, Sprout, Shield,
  Cog, Rocket, Building2, GraduationCap,
  Microscope, Network, CheckCircle2, Phone, Mail, Send,
  FlaskConical, Globe, X
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import '../styles/Home.css'

/* ── Intersection observer hook ── */
function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <HeroSection scrollTo={scrollTo} />
      <FounderMessage />
      {/* <WhoWeAreSection /> */}
      
      <CoreDomainsSection />
      <AdvisorsSection />
      {/* <ResearchDeploySection /> */}
      {/* <SolutionsSection /> */}
      <CollabEcosystem scrollTo={scrollTo} />
      <ProjectsPilots />
      <InsightsSection />
      <ContactSection />
    </main>
  )
}

/* ══════════════════════════════════════
   SECTION 1 — HERO
══════════════════════════════════════ */

function HeroSection({ scrollTo }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])
  return (
    <section id="hero" className={`hero ${loaded ? 'hero--loaded' : ''}`}>

      {/* Background image */}
      <div className="hero__bg-image" />

      {/* Bottom fade overlay for button readability */}

      {/* CTA only */}
      <div className="container">
        <div className="hero__content">
          <div className="hero__cta-row">
            <button onClick={() => scrollTo('contact')} className="btn btn-primary">
              Explore Collaboration <ArrowRight size={15} />
            </button>
            <button onClick={() => scrollTo('domains')} className="btn btn-primary">
              View Innovation Domains
            </button>
            <button onClick={() => scrollTo('domains')} className="btn btn-primary">
              View Innovation Domains
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function FounderMessage() {
  return (
    <section className="section founder">
      <div className="container">
        <FadeUp>
          <div style={{ marginBottom: 52 }}>
            <span className="tag">From the Founder</span>
            <h2 className="section-heading">Founder's Message</h2>
          </div>
        </FadeUp>

        <div className="founder__grid">

          {/* Left — photo + info */}
          <FadeUp delay={0.1}>
            <div className="founder__left">
              <div className="founder__photo-wrap">
                {/* Replace src with actual image path when available */}
                <div className="founder__photo-placeholder">
                  {/* <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7FB069" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg> */}
                  {/* <span>Photo coming soon</span> */}
                  <img src="./public/advisors/DrHena.jpg" alt="Dr. Hena H" className='founder__photo' />
                </div>
                <div className="founder__photo-accent">
                  <Leaf size={28} color="#fff" />
                </div>
              </div>

              <div>
                <div className="founder__name">Dr. Hena H.</div>
                <div className="founder__title">Founder &amp; Director,<br />SEA-Tech Innovations LLP</div>
                <p className="founder__credentials">
                  Young Scientist Awardee with expertise spanning agricultural sciences,
                  sustainable energy systems, and sustainability-driven innovation shaped at
                  PAU Ludhiana, CSIR &amp; ICAR Labs, The Institute of Science (Bhabha Institute,
                  Mumbai) and IISc Bangalore.
                </p>
                <a
                  href="https://www.linkedin.com/in/dr-hena-h-b620901b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="founder__linkedin"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452H17.1v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.763V9h3.204v1.561h.046c.447-.84 1.537-1.727 3.162-1.727 3.382 0 4.007 2.226 4.007 5.121v6.497zM5.337 7.433a1.857 1.857 0 01-1.857-1.857 1.857 1.857 0 011.857-1.857 1.857 1.857 0 011.857 1.857 1.857 1.857 0 01-1.857 1.857zM6.962 20.452H3.71V9h3.252v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Right — message */}
          <FadeUp delay={0.2}>
            <div className="founder__right">

              <div className="founder__quote-block">
                <span className="founder__quote-mark">"</span>
                <p className="founder__quote">
                  The laws of thermodynamics remind us that resources are finite;
                  human creativity determines how wisely we use them.
                </p>
              </div>

              <div className="founder__body">
                <p className="founder__para">
                  Perhaps no challenge defines the 21st century more than our ability to reconcile
                  human progress with planetary boundaries. As populations grow, economies expand,
                  and environmental pressures intensify, the question is no longer whether new
                  solutions are needed, but whether they can create prosperity while respecting the
                  limits of our natural systems.
                </p>
                <p className="founder__para">
                  It is this belief that inspired the establishment of SEA-Tech Innovations LLP.
                </p>
                <p className="founder__para">
                  My journey through research and sustainability-focused disciplines has reinforced
                  a simple conviction: knowledge achieves its greatest value when it is translated
                  into solutions that improve lives, strengthen communities, and contribute
                  positively to the environment. SEA-Tech Innovations is a platform to bridge
                  scientific knowledge, technology, and interdisciplinary expertise with practical
                  pathways for real-world change.
                </p>
                <p className="founder__para">
                  Every challenge in sustainability is ultimately a systems problem, and every
                  systems problem demands interdisciplinary thinking. The environmental, energy,
                  agricultural, and resource challenges of our time are deeply interconnected and
                  cannot be addressed in isolation. Meaningful progress emerges when knowledge from
                  diverse disciplines converges toward a common purpose.
                </p>
                <p className="founder__para">
                  Guided by this philosophy, SEA-Tech Innovations works across a diverse yet
                  interconnected portfolio of domains, including renewable energy, bioenergy and
                  biofuels, biomass valorization, sustainable aviation fuel (SAF), climate-smart
                  agriculture, circular bioeconomy systems, carbon management, environmental
                  sustainability, and emerging green technologies.
                </p>
                <p className="founder__para">
                  Nature offers a profound lesson: the most enduring systems are not those that
                  maximize extraction, but those that maintain balance, adaptability, and
                  resilience. These principles continue to shape our approach and reinforce our
                  belief that long-term progress must be built upon responsible resource
                  utilization, environmental stewardship, scientific excellence, and collaborative
                  action.
                </p>
                <p className="founder__para">
                  The journey toward a sustainable future will not be defined by a single
                  technology, policy, or institution. It will be shaped by collaboration,
                  scientific rigor, and the courage to reimagine how we produce energy, food, and
                  materials. At SEA-Tech Innovations, we are committed to translating innovative
                  ideas into practical solutions that strengthen economies, restore ecosystems, and
                  create lasting value for future generations. We invite researchers, industry
                  partners, policymakers, and innovators to join us in building a more resilient
                  and sustainable world.
                </p>

                <div className="founder__signature">
                  <div className="founder__sig-name">Dr. Hena H.</div>
                  <div className="founder__sig-title">Founder &amp; Director, SEA-Tech Innovations LLP</div>
                </div>
              </div>

            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════
   SECTION 2 — WHO WE ARE
══════════════════════════════════════ */
function WhoWeAreSection() {
  return (
    <section className="section who">
      <div className="who__bg-image" />
      <div className="who__bg-accent" />
      <div className="container">
        <div className="who__grid">
          <FadeUp>
            <div className="who__left-sticky">
              <span className="tag">Who We Are</span>
              <h2 className="section-heading who__heading">
                Building Applied <br />Sustainability<br />Systems
              </h2>
              <div className="who__divider" />
            </div>
          </FadeUp>

          <FadeUp delay={0.14}>
            <div>
              <p className="who__para">
                SEA-Tech Innovations LLP is a sustainability innovation and deployment platform focused on applied R&D, pilot systems, and scalable sustainability technologies.
              </p>
              <p className="who__para">
                We operate at the intersection of sustainability, clean energy, advanced agriculture, industrial ecosystems, and strategic infrastructure through research-driven execution and collaborative innovation.
              </p>
              <p className="who__para">
                Our approach integrates:
              </p>

              <div className="who__checklist">
                {[
                  'Research & Development', 'Systems Design',
                  'Pilot Implementation', 'Commercialization',
                  'Operational Execution', 'Collaborative Innovation',
                ].map(item => (
                  <div key={item} className="who__check-item">
                    <CheckCircle2 size={16} color="#7FB069" style={{ flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════
   SECTION 2.5 — Advisors
══════════════════════════════════════ */
const advisors = [
  {
    id: 'rklal',
    initials: 'RL',
    name: 'Dr. R.K. Lal',
    image: './public/advisors/RK_Lal.jpg',
    role: 'Strategic Advisor — Sustainable Agriculture & Biomass Valorisation',
    bio: 'Senior scientist and plant genetics expert with nearly four decades of experience in medicinal and aromatic plant improvement, mutation breeding, sustainable bioresource systems and agricultural technologies. His work spans crop improvement, biomass systems, translational agricultural research and sustainable bioeconomy applications.',
    linkedin: 'https://www.linkedin.com/in/raj-kishori-lal-35a48a156/',
    expertise: [
      'Medicinal & Aromatic Plants (MAP)',
      'Plant Genetics & Breeding',
      'Mutation Breeding',
      'Sustainable Biomass Systems',
      'Bioenergy Feedstock Development',
      'Climate-Resilient Agriculture',
      'Circular Bioeconomy Systems',
      'Crop Improvement Technologies',
      'Sustainable Agricultural Systems',
      'Translational Agricultural Research',
    ],
    highlights: [
      'Developed and released 67 commercial plant varieties',
      'Led multiple genetic improvement programmes for medicinal and aromatic plants',
      'Contributed to whole genome sequencing initiatives in Holy Basil',
      'Holder/co-holder of multiple U.S. patents',
      'Extensive contributions to sustainable agriculture and industrial bioresource applications',
      'Recognized nationally for scientific innovation and agricultural research contributions',
    ],
    associations: [
      'Former Chief Scientist, CSIR-CIMAP',
      'Nearly 40 years of research and innovation experience',
      'Author of 350+ scientific publications',
      'Associated with multiple national and international scientific initiatives',
      'Recipient of several awards and recognitions in agricultural biotechnology and plant sciences',
    ],
    relevance: [
      'Sustainable agriculture systems',
      'Biomass valorization',
      'Bioenergy feedstock pathways',
      'Climate-resilient agricultural innovation',
      'Circular bioeconomy systems',
      'Translational sustainability technologies',
    ],
  },
  {
  id: 'vdmendhulkar',
  initials: 'VM',
  name: 'Prof. (Dr.) Vijay D. Mendhulkar',
  image: './public/advisors/DrVijay_DM.jpg',
  role: 'Strategic Advisor — Plant Biotechnology, Bioactive Systems & Sustainable Bioeconomy',
  bio: 'Distinguished plant scientist, academic leader and researcher with over three decades of experience in plant sciences, biotechnology, cytogenetics, plant cell culture and nanobiotechnology. Former Professor and Head of the Department of Botany at the Institute of Science, Mumbai, Dr. Mendhulkar has contributed extensively to plant-based innovation, bioactive compounds, sustainable bioresource applications and translational research in agriculture and biotechnology.',
  linkedin: 'https://www.linkedin.com/in/prof-vijay-d-mendhulkar-99083139/',
  expertise: [
    'Plant Biotechnology',
    'Cytogenetics & Plant Genetics',
    'Chemical Mutagenesis',
    'Plant Cell Culture Technologies',
    'Secondary Metabolites & Bioactive Compounds',
    'Nanobiotechnology',
    'In-Vitro Plant Systems',
    'Sustainable Bioresource Applications',
    'Translational Plant Science',
    'Biofuel',
  ],
  highlights: [
    'Former Professor & Head, Department of Botany, Institute of Science, Mumbai',
    'Served as Registrar (Additional Charge), Dr. Homi Bhabha State University',
    'Established advanced research infrastructure and instrumentation capabilities for plant science research',
    'Guided multiple doctoral and postgraduate research programmes in Botany and Biotechnology',
    'Recognized nationally as an academic leader, examiner, reviewer and research mentor',
    'Recipient of several best presentation awards at national and international scientific conferences for research in biotechnology and nanobiotechnology',
  ],
  associations: [
    'PhD in Plant Sciences from Karnataka University, Dharwad',
    'Former Professor & Head, Institute of Science, Mumbai',
    'Former Registrar, Dr. Homi Bhabha State University, Mumbai',
    'Author of 74+ research publications and presenter at 60+ national and international scientific conferences',
    'Research guide for doctoral programmes in Botany and Biotechnology',
    'Associated with editorial boards, academic review panels and university research evaluation committees across India',
  ],
  relevance: [
    'Biotechnology-enabled sustainability solutions',
    'Biomass valorization pathways',
    'Plant-based bioresource systems',
    'Bioactive and high-value agricultural products',
    'Circular bioeconomy initiatives',
    'Translational research linking plant sciences to sustainable industrial applications',
  ],
},
{
  id: 'snmishra',
  initials: 'SM',
  name: 'Group Captain (Prof.) S.N. Mishra',
  image: './public/advisors/SNMishra.jpg',
  role: 'Strategic Advisor — Climate Science, Weather Risk & Sustainability Systems',
  bio: 'Former Director of Climate Sciences & Weather, Indian Air Force and Senior climate science and meteorology expert with over four decades of experience across climate risk assessment, extreme weather systems, sustainability strategy and operational forecasting in India and internationally. His work spans climate resilience, decarbonization pathways, infrastructure risk analysis and sustainability-linked strategic systems.',
  linkedin: 'https://www.linkedin.com/in/sn-mishra/',
  expertise: [
    'Climate Science & Meteorology',
    'Climate Risk Assessment',
    'Extreme Weather Systems',
    'Sustainability & Decarbonization',
    'Net-Zero Pathways',
    'Climate Resilience Planning',
    'Infrastructure Risk Analysis',
    'Environmental Forecasting',
    'Strategic Weather Operations',
    'Climate-linked Sustainability Systems',
  ],
  highlights: [
    'Former Director of Climate Sciences & Weather, Indian Air Force',
    'Contributed to national climate and extreme weather programmes under the Government of India',
    'Associated with climate-related strategic studies in collaboration with national security institutions',
    'Served with United Nations missions and international sustainability initiatives',
    'Climate consultant and risk analyst for institutions including the World Bank and Asian Development Bank',
    'Recognized for operational contributions in high-reliability strategic environments',
  ],
  associations: [
    'PhD in Meteorology with specialization in severe flood forecasting and ensemble modelling',
    'Visiting Professor at TERI School of Advanced Studies',
    'Climate expert associated with Management Development Institute Gurgaon',
    'Published extensively in climate science, meteorology and sustainability domains',
    'Speaker and contributor to policy discussions on climate resilience and sustainability',
  ],
  relevance: [
    'Climate resilience systems',
    'Sustainability strategy',
    'Environmental risk assessment',
    'Decarbonization pathways',
    'Climate-linked infrastructure planning',
    'Resilience-driven sustainability frameworks',
  ],
},
]


function AdvisorsSection() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section className="section advisors">
      <div className="container">
        <FadeUp>
          <div className="advisors__header">
            <span className="tag">Advisory Board</span>
            <h2 className="section-heading">Strategic Advisors</h2>
            <p className="section-sub" style={{ margin: '10px auto 0' }}>
              Domain experts guiding SEA-Tech's innovation across sustainability, energy,
              agriculture, and strategic systems.
            </p>
          </div>
        </FadeUp>

        <div className="advisors__grid">
          {advisors.map((a, i) => (
            <FadeUp key={a.id} delay={i * 0.09}>
              <div className="advisor-card">
                <div className="advisor-card__avatar"><img src={a.image} alt="" /></div>
                <div className="advisor-card__name">{a.name}</div>
                <div className="advisor-card__role">{a.role}</div>
                <p className="advisor-card__bio">{a.bio}</p>
                <button
                  className="advisor-card__btn"
                  onClick={() => setSelected(a)}
                >
                  View Profile <ArrowRight size={12} />
                </button>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      {selected && (
        <div className="advisor-modal-overlay" onClick={() => setSelected(null)}>
          <div className="advisor-modal" onClick={e => e.stopPropagation()}>
            {/* Close button */}
            <div className="advisor-modal__close">
              <button className="advisor-modal__close-btn" onClick={() => setSelected(null)}>
                <X size={16} />
              </button>
            </div>

            {/* Header */}
            <div className="advisor-modal__header">
              <div className="advisor-modal__avatar"><img src={selected.image} alt="loading.." /></div>
              <div>
                <div className="advisor-modal__name">{selected.name}</div>
                <div className="advisor-modal__role">{selected.role}</div>
                {selected.linkedin && (
                  <a
                    href={selected.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      marginTop: 8,
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#0E5C5A',
                      textDecoration: 'none',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452H17.1v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.763V9h3.204v1.561h.046c.447-.84 1.537-1.727 3.162-1.727 3.382 0 4.007 2.226 4.007 5.121v6.497zM5.337 7.433a1.857 1.857 0 01-1.857-1.857 1.857 1.857 0 011.857-1.857 1.857 1.857 0 011.857 1.857 1.857 1.857 0 01-1.857 1.857zM6.962 20.452H3.71V9h3.252v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn Profile
                  </a>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="advisor-modal__body">

              {/* Areas of Expertise */}
              <div>
                <div className="advisor-modal__section-title">Areas of Expertise</div>
                <div className="advisor-modal__tags">
                  {selected.expertise.map(e => (
                    <span key={e} className="advisor-modal__tag">{e}</span>
                  ))}
                </div>
              </div>

              {/* Selected Impact Highlights */}
              <div>
                <div className="advisor-modal__section-title">Selected Impact Highlights</div>
                <div className="advisor-modal__highlights">
                  {selected.highlights.map(h => (
                    <div key={h} className="advisor-modal__highlight-item">
                      <span className="advisor-modal__highlight-dot" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Research & Institutional Associations */}
              <div>
                <div className="advisor-modal__section-title">
                  Research &amp; Institutional Associations
                </div>
                <div className="advisor-modal__highlights">
                  {selected.associations.map(a => (
                    <div key={a} className="advisor-modal__highlight-item">
                      <span className="advisor-modal__highlight-dot" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Relevance */}
              <div>
                <div className="advisor-modal__section-title">
                  Strategic Relevance to SEA-Tech
                </div>
                <div className="advisor-modal__relevance">
                  <div className="advisor-modal__highlights">
                    {selected.relevance.map(r => (
                      <div key={r} className="advisor-modal__highlight-item">
                        <span className="advisor-modal__highlight-dot" />
                        {r}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}


/* ══════════════════════════════════════
   SECTION 3 — CORE DOMAINS
══════════════════════════════════════ */
const domains = [
  {
    id: 'sustainability', label: 'Sustainability', Icon: Leaf, path: '/sustainability',
    color: '#0B3D2E', light: 'rgba(11,61,46,0.08)',
    desc: 'Circular systems, ESG frameworks, carbon management, climate resilience, environmental technologies, and sustainable industrial ecosystems.',
    themes: ['Circular economy', 'Decarbonization', 'ESG systems', 'Climate resilience', 'Sustainable materials', 'Smart sustainability'],
  },
  {
    id: 'energy', label: 'Sustainable Energy', Icon: Zap, path: '/energy',
    color: '#0E5C5A', light: 'rgba(14,92,90,0.08)',
    desc: 'Advanced bioenergy systems, sustainable fuels, waste-to-energy pathways, renewable integration, and future-ready energy ecosystems.',
    themes: ['Sustainable aviation fuel', 'Bioenergy systems', 'Waste-to-energy', 'Green hydrogen', 'Renewable fuels', 'Carbon integration'],
  },
  {
    id: 'agriculture', label: 'Sustainable Agriculture', Icon: Sprout, path: '/agriculture',
    color: '#2d6a4f', light: 'rgba(45,106,79,0.08)',
    desc: 'Climate-smart agriculture systems, regenerative ecosystems, agri-energy integration, soil carbon systems, and resource-efficient cultivation.',
    themes: ['Climate-smart systems', 'Soil carbon', 'Biomass utilization', 'Precision agriculture', 'Controlled environment', 'Circular farm systems'],
  },
  {
    id: 'strategic', label: 'Strategic Systems', Icon: Shield, path: '/strategic-systems',
    color: '#334E68', light: 'rgba(51,78,104,0.08)',
    desc: 'Resilient sustainability systems for energy security, remote infrastructure, circular logistics, resource optimization, and sustainable operational environments.',
    themes: ['Energy security', 'Remote sustainability', 'Resource optimization', 'Sustainable infrastructure', 'Smart monitoring', 'Circular logistics'],
  },
]

function CoreDomainsSection() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="domains" className="section domains">

      <div className="container">
        <div className='domains__bg-image' />
        <FadeUp>
          <div className="domains__header">
            <span className="tag">Innovation Domains</span>
            <h2 className="section-heading">Core Innovation Domains</h2>
            <p className="section-sub" style={{ margin: '10px auto 0' }}>
              Four interconnected pillars driving real-world sustainability systems
            </p>
          </div>
        </FadeUp>

        <div className="domains__grid">
          {domains.map((d, i) => {
            const Icon = d.Icon
            const isHov = hovered === d.id
            return (
              <FadeUp key={d.id} delay={i * 0.09}>
                <Link to={d.path} style={{ display: 'block', textDecoration: 'none' }}>
                  <div
                    className={`domain-card ${isHov ? 'domain-card--hovered' : 'domain-card--default'}`}
                    style={{
                      background: isHov ? d.color : '#fff',
                      borderColor: isHov ? d.color : 'rgba(0,0,0,0.07)',
                    }}
                    onMouseEnter={() => setHovered(d.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div
                      className="domain-card__icon-wrap"
                      style={{ background: isHov ? 'rgba(255,255,255,0.14)' : d.light }}
                    >
                      <Icon size={22} color={isHov ? '#fff' : d.color} />
                    </div>

                    <h3
                      className="domain-card__title"
                      style={{ color: isHov ? '#fff' : d.color }}
                    >
                      {d.label}
                    </h3>

                    <p
                      className="domain-card__desc"
                      style={{ color: isHov ? 'rgba(255,255,255,0.78)' : '#607080' }}
                    >
                      {d.desc}
                    </p>

                    <div className="domain-card__themes">
                      {d.themes.map(t => (
                        <span
                          key={t}
                          className="theme-pill"
                          style={{
                            background: isHov ? 'rgba(255,255,255,0.13)' : d.light,
                            color: isHov ? '#fff' : d.color,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* <div
                      className="domain-card__explore"
                      style={{ color: isHov ? 'rgba(255,255,255,0.85)' : d.color }}
                    >
                      Explore <ArrowRight size={13} />
                    </div> */}
                  </div>
                </Link>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════
   SECTION 4 — RESEARCH TO DEPLOYMENT
══════════════════════════════════════ */
const stages = [
  { label: 'Research', icon: FlaskConical, desc: 'Applied R&D and scientific exploration' },
  { label: 'Design', icon: Cog, desc: 'Systems architecture and technology design' },
  { label: 'Pilot', icon: Microscope, desc: 'Prototype testing and field validation' },
  { label: 'Operate', icon: Network, desc: 'Real-world operational deployment' },
  { label: 'Scale', icon: Rocket, desc: 'Commercialization and scaled impact' },
]


function ResearchDeploySection() {
  const [ref, visible] = useInView(0.1)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % stages.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section pipeline">
      <div className="pipeline__grid-overlay" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <FadeUp>
          <div className="pipeline__header">
            <span className="tag">Our Model</span>
            <h2 className="section-heading light">From Research to Deployment</h2>
            <p className="section-sub light" style={{ margin: '10px auto 0' }}>
              SEA-Tech Innovations LLP bridges the gap between scientific innovation and deployable sustainability systems.
            </p>
          </div>
        </FadeUp>

        <div ref={ref} className="pipeline__stages">
          {stages.map((s, i) => {
            const Icon = s.icon
            const isActive = active === i
            return (
              <div
                key={s.label}
                className="pipeline__stage"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(22px)',
                  transition: `all 0.6s ease ${i * 0.11}s`,
                }}
              >
                <div
                  className={`pipeline__stage-card ${isActive ? 'pipeline__stage-card--active' : ''}`}
                // onMouseEnter={() => setActive(i)}
                // onMouseLeave={() => setActive(null)}
                >
                  <div
                    className="pipeline__stage-icon-wrap"
                    style={{
                      background: isActive
                        ? 'rgba(255,255,255,0.2)'
                        : 'rgba(127,176,105,0.14)',
                    }}
                  >
                    <s.icon size={20} color={isActive ? '#fff' : '#7FB069'} />
                  </div>
                  <div className="pipeline__stage-num">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="pipeline__stage-label">{s.label}</div>
                  <div className="pipeline__stage-desc">{s.desc}</div>
                </div>

              </div>

            )
          })}
        </div>

        {/* <div className="pipeline__flow">
          {stages.map((s, i) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="pipeline__flow-label">{s.label}</span>
              {i < stages.length - 1 && (
                <ArrowRight size={13} color="rgba(127,176,105,0.45)" />
              )}
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}

/* ══════════════════════════════════════
   SECTION 5 — SOLUTIONS
══════════════════════════════════════ */
const solutions = [
  {
    title: 'Agri-Waste to Energy Systems',
    desc: 'Integrated pathways for converting agricultural residues into scalable energy and fuel systems through biomass conversion, gasification, and pyrolysis.',
    tags: ['Biomass', 'Bioenergy', 'Waste Valorization'],
    accent: '#0B3D2E',
  },
  {
    title: 'Sustainable Fuel Ecosystems',
    desc: 'Research-driven systems for sustainable aviation fuel, biofuels, renewable fuel integration, and low-carbon energy pathways for strategic sectors.',
    tags: ['SAF', 'Biofuels', 'Renewable Fuels'],
    accent: '#0E5C5A',
  },
  {
    title: 'Circular Industrial Systems',
    desc: 'Resource optimization, waste valorization, circular logistics, and sustainable industrial systems designed for real-world operational deployment.',
    tags: ['Circular Economy', 'Waste-to-Value', 'Industrial'],
    accent: '#334E68',
  },
  {
    title: 'Climate-Smart Agriculture',
    desc: 'Advanced agriculture systems integrating resilience, resource efficiency, soil health, agri-energy integration, and regenerative farming approaches.',
    tags: ['Climate Resilience', 'Soil Carbon', 'Precision Ag'],
    accent: '#2d6a4f',
  },
  {
    title: 'Strategic Sustainability Systems',
    desc: 'Sustainable infrastructure and resilient systems for advanced operational environments, remote energy security, and resource-efficient strategic operations.',
    tags: ['Energy Security', 'Remote Systems', 'Infrastructure'],
    accent: '#1a4a6e',
  },
]

function SolutionsSection() {
  return (
    <section className="section solutions">
      <div className="container">
        <div className="solutions__bg-image" />
        <FadeUp>
          <div style={{ marginBottom: 52 }}>
            <span className="tag">Applied Solutions</span>
            <h2 className="section-heading">Applied Sustainability Pathways</h2>
            <p className="section-sub">
              Real-world sustainability systems built for deployment, scale, and long-term impact.
            </p>
          </div>
        </FadeUp>

        <div className="solutions__list">
          {solutions.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.07}>
              <div className="solution-card">
                <div
                  className="solution-card__band"
                  style={{
                    background: `linear-gradient(135deg, ${s.accent}, ${s.accent}cc)`,
                  }}
                >
                  <span className="solution-card__num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="solution-card__title">{s.title}</h3>
                </div>
                <div className="solution-card__body">
                  <p className="solution-card__desc">{s.desc}</p>
                  <div className="solution-card__tags">
                    {s.tags.map(t => (
                      <span
                        key={t}
                        className="solution-tag"
                        style={{
                          background: `${s.accent}12`,
                          color: s.accent,
                          border: `1px solid ${s.accent}30`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════
   SECTION 6 — COLLABORATION ECOSYSTEM
══════════════════════════════════════ */
const collabNodes = [
  { label: 'Academia', angle: 0, Icon: GraduationCap },
  { label: 'Research', angle: 60, Icon: Microscope },
  { label: 'Industry', angle: 120, Icon: Building2 },
  { label: 'Pilot Systems', angle: 180, Icon: Cog },
  { label: 'Sustainability Ecosystems', angle: 240, Icon: Globe },
  { label: 'Innovation Networks', angle: 300, Icon: Network },
]

function CollabEcosystem({ scrollTo }) {
  const [ref, visible] = useInView(0.1)
  const R = 130

  return (
    <section className="section collab">
      <div className="container">
        <div className="collab__grid">
          <FadeUp>
            <div className="collab__text">
              <span className="tag">Collaboration Model</span>
              <h2 className="section-heading" style={{ marginBottom: 18 }}>
                Collaboration-Driven Innovation
              </h2>
              <p>
                SEA-Tech Innovations LLP works through collaborative ecosystems involving:
              </p>
              <ul >
                <li>Academic institutions</li>
                <li>Research organizations</li>
                <li>Industry partners</li>
                <li>Pilot collaborations</li>
                <li>Technology ecosystems</li>
                <li>Sustainability stakeholders</li>
              </ul>
              <button onClick={() => scrollTo('contact')} className="btn btn-primary">
                Explore Collaboration Opportunities <ArrowRight size={15} />
              </button>
            </div>
          </FadeUp>

          <div ref={ref} className="collab__diagram">
            <svg viewBox="-220 -220 440 440" className="collab__svg">
              {/* Connection lines */}
              {collabNodes.map((n, i) => {
                const rad = (n.angle * Math.PI) / 180
                return (
                  <line
                    key={i}
                    x1={0} y1={0}
                    x2={Math.cos(rad) * R}
                    y2={Math.sin(rad) * R}
                    stroke="#0B3D2E" strokeWidth="1" strokeDasharray="4 4"
                    opacity={visible ? 0.28 : 0}
                    style={{ transition: `opacity 0.5s ease ${i * 0.09}s` }}
                  />
                )
              })}

              {/* Center node */}
              <circle cx={0} cy={0} r={44} fill="#0B3D2E"
                opacity={visible ? 1 : 0} style={{ transition: 'opacity 0.5s' }} />
              <circle cx={0} cy={0} r={53} fill="none" stroke="#0B3D2E"
                strokeWidth="1" strokeDasharray="3 3"
                opacity={visible ? 0.35 : 0}
                style={{ transition: 'opacity 0.5s', animation: 'spin-slow 22s linear infinite' }}
              />
              <text x={0} y={-6} textAnchor="middle" fill="#fff"
                fontFamily="Manrope" fontWeight="800" fontSize="9">SEA-Tech</text>
              <text x={0} y={8} textAnchor="middle" fill="rgba(255,255,255,0.65)"
                fontFamily="Inter" fontSize="7">Innovations LLP</text>

              {/* Outer nodes */}
              {collabNodes.map((n, i) => {
                const rad = (n.angle * Math.PI) / 180
                const x = Math.cos(rad) * R
                const y = Math.sin(rad) * R
                return (
                  <g
                    key={n.label}
                    opacity={visible ? 1 : 0}
                    style={{ transition: `opacity 0.5s ease ${0.18 + i * 0.09}s` }}
                  >
                    <circle cx={x} cy={y} r={32} fill="#fff" stroke="#0B3D2E" strokeWidth="1.5" />
                    <circle cx={x} cy={y} r={24} fill="rgba(11,61,46,0.06)" />
                    <text x={x} y={y + 4} textAnchor="middle" fill="#0B3D2E"
                      fontFamily="Manrope" fontWeight="700" fontSize="7">
                      {n.label.split(' ')[0]}
                    </text>
                    {n.label.split(' ').length > 1 && (
                      <text x={x} y={y + 13} textAnchor="middle" fill="#0E5C5A"
                        fontFamily="Inter" fontSize="6">
                        {n.label.split(' ').slice(1).join(' ')}
                      </text>
                    )}
                  </g>
                )
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════
   SECTION 7 — PROJECTS & PILOTS
══════════════════════════════════════ */
const projects = [
  { title: 'Agri-Residue Valorization', tag: 'Bioenergy', accent: '#7FB069' },
  { title: 'Sustainable Fuel Pilot Pathways', tag: 'Sustainable Fuels', accent: '#7FB069' },
  { title: 'Climate-Smart Agriculture Systems', tag: 'Smart Agriculture', accent: '#7FB069' },
  { title: 'Circular Industrial Ecosystem Models', tag: 'Circular Systems', accent: '#7FB069' },
  { title: 'Resource Recovery Systems', tag: 'Climate Systems', accent: '#7FB069' },
  { title: 'Sustainable Infrastructure Pilots', tag: 'Infrastructure', accent: '#7FB069' },
]

function ProjectsPilots() {
  return (
    <section id="projects" className="section projects">
      <div className="grid-overlay" style={{ opacity: 0.25 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <FadeUp>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 18, marginBottom: 44 }}>
              <div>
                <span className="tag">Portfolio</span>
                <h2 className="section-heading light">Projects &amp; Pilot Systems</h2>
                <p className="section-sub light">
                  Our work focuses on pilot-ready sustainability systems designed for scalability, operational deployment, and commercialization pathways.                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="projects__scroll-row-container">

          <div className="projects__scroll-row">
            {projects.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.07}>
                <div className="project-card">
                  <div className="project-card__bar" />
                  <h3 className="project-card__title">{p.title}</h3>
                  <span className="project-card__tag">{p.tag}</span>
                  <div className="project-card__status">Pilot-ready · Scalable</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════
   SECTION 8 — INSIGHTS
══════════════════════════════════════ */
const articles = [
  { cat: 'Sustainability', title: 'Circular Economy Systems: From Theory to Deployment', summary: 'How circular economy principles are being operationalized into real industrial sustainability systems.' },
  { cat: 'Energy', title: 'Sustainable Aviation Fuel Pathways and Scalability', summary: 'Research directions and pilot pathways shaping the future of sustainable aviation fuel ecosystems.' },
  { cat: 'Agriculture', title: 'Climate-Smart Agriculture and Soil Carbon Systems', summary: 'Integrating soil regeneration, carbon farming, and agri-energy systems for climate-resilient agriculture.' },
  { cat: 'Circular Systems', title: 'Waste Valorization in Industrial Ecosystems', summary: 'Advanced approaches to transforming industrial waste streams into resource and energy value chains.' },
  { cat: 'Strategic', title: 'Resilient Sustainability Systems for Remote Operations', summary: 'Designing sustainability-driven systems for energy security, resource efficiency, and field deployability.' },
  { cat: 'Energy', title: 'Green Hydrogen and Bioenergy Integration Pathways', summary: 'Convergence of green hydrogen production with bioenergy systems as future energy ecosystem components.' },
]

const catColors = {
  Sustainability: '#0B3D2E',
  Energy: '#0E5C5A',
  Agriculture: '#2d6a4f',
  'Circular Systems': '#334E68',
  Strategic: '#1a4a6e',
}

function InsightsSection() {
  return (
    <section id="insights" className="section insights">
      <div className="container">
        <div className='insights__bg-image' />
        <FadeUp>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 44 }}>
            <div>
              <span className="tag">Thought Leadership</span>
              <h2 className="section-heading">Insights &amp; Perspectives</h2>
              <p className="section-sub">
                Perspectives on sustainability, energy systems, agriculture innovation, circular
                ecosystems, and strategic infrastructure.
              </p>
            </div>
          </div>
        </FadeUp>

        <div className="insights__grid">
          {articles.map((a, i) => {
            const color = catColors[a.cat] || '#0B3D2E'
            return (
              <FadeUp key={a.title} delay={i * 0.06}>
                <div className="insight-card">
                  <div className="insight-card__meta">
                    <span
                      className="insight-card__cat"
                      style={{
                        color,
                        background: `${color}10`,
                        border: `1px solid ${color}25`,
                      }}
                    >
                      {a.cat}
                    </span>
                    <span className="insight-card__type">Perspective</span>
                  </div>
                  <h3 className="insight-card__title">{a.title}</h3>
                  <p className="insight-card__summary">{a.summary}</p>
                  {/* <div className="insight-card__read" style={{ color }}>
                    Read Perspective <ArrowRight size={12} />
                  </div> */}
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════
   SECTION 9 — CONTACT
══════════════════════════════════════ */
function ContactSection() {
  const [form, setForm] = useState({ name: '', org: '', email: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4500)
    setForm({ name: '', org: '', email: '', interest: '', message: '' })
  }

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__grid">

          {/* Left — info */}
          <FadeUp>
            <div>
              <span className="tag">Let's Collaborate</span>
              <h2 className="section-heading light" style={{ marginBottom: 16 }}>
                Explore Collaboration
              </h2>
              <p className="contact__info-para">
                  SEA-Tech Innovations LLP actively engages with academia, research institutions, industry stakeholders and innovation ecosystems to accelerate sustainability-driven solutions and technology translation.
              </p>

              <div className="contact__links">
                <a href="tel:8828208244" className="contact__link">
                  <div className="contact__link-icon">
                    <Phone size={17} color="#7FB069" />
                  </div>
                  <div>
                    <div className="contact__link-label">Call</div>
                    <div className="contact__link-value">8828208244</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/9969608290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                >
                  <div className="contact__link-icon">
                    <FaWhatsapp size={17} color="#7FB069" />
                  </div>
                  <div>
                    <div className="contact__link-label">WhatsApp</div>
                    <div className="contact__link-value">9969608290</div>
                  </div>
                </a>

                <a href="mailto:office@seatech-innovations.com" className="contact__link">
                  <div className="contact__link-icon">
                    <Mail size={17} color="#7FB069" />
                  </div>
                  <div>
                    <div className="contact__link-label">Email</div>
                    <div className="contact__link-value">office@seatech-innovations.com</div>
                  </div>
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Right — form */}
          <FadeUp delay={0.14}>
            <div className="contact__form-wrap">
              {sent ? (
                <div className="contact__success">
                  <CheckCircle2 size={46} color="#7FB069" style={{ margin: '0 auto' }} />
                  <h3 className="contact__success-title">Inquiry Sent!</h3>
                  <p className="contact__success-msg">
                    We'll get back to you shortly to explore collaboration opportunities.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact__form">
                  <h3 className="contact__form-title">Submit Your Collaboration Inquiry</h3>

                  <div className="contact__form-row">
                    <input
                      required
                      placeholder="Name"
                      value={form.name}
                      onChange={set('name')}
                      className="contact__input"
                    />
                    <input
                      required
                      placeholder="Organization"
                      value={form.org}
                      onChange={set('org')}
                      className="contact__input"
                    />
                  </div>

                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={set('email')}
                    className="contact__input"
                  />

                  <select
                    required
                    value={form.interest}
                    onChange={set('interest')}
                    className="contact__select"
                    style={{ color: form.interest ? '#fff' : 'rgba(255,255,255,0.38)' }}
                  >
                    <option value="">Collaboration Interest</option>
                    <option value="sustainability">Sustainability Systems</option>
                    <option value="energy">Energy &amp; Biofuels</option>
                    <option value="agriculture">Agriculture Innovation</option>
                    <option value="strategic">Strategic Systems</option>
                    <option value="research">Research Partnership</option>
                    <option value="pilot">Pilot Collaboration</option>
                    <option value="other">Other</option>
                  </select>

                  <textarea
                    required
                    placeholder="Message — describe your collaboration interest..."
                    value={form.message}
                    onChange={set('message')}
                    rows={4}
                    className="contact__textarea"
                  />

                  <button type="submit" className="btn btn-primary contact__submit">
                    Submit Inquiry <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
