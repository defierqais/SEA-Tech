import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRight, Leaf, Zap, Sprout, Shield,
  Cog, Rocket, Building2, GraduationCap,
  Microscope, Network, CheckCircle2, Phone, Mail, Send,
  FlaskConical, Globe, X, Plane, Wheat, RefreshCw, GitBranchPlus
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import '../styles/Home.css'
import TopologyBackground from '../components/TopologyComponent'
import emailjs from '@emailjs/browser'

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
        transition: `opacity 0.4s ease ${delay}s, transform 0.75s ease ${delay}s`,
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
      <div id="topology-zone" style={{ position: 'relative', overflow: 'hidden' }}>
        <TopologyBackground targetId="topology-zone" />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <FounderMessage />
          <WhySeaTech />
          <CoreDomainsSection />
          <ResearchPilots />
          <AdvisorsSection />
          <CollabEcosystem scrollTo={scrollTo} />
          <InsightsPerspectives />
          <ContactSection />
        </div>
      </div>

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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
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
            <button onClick={() => scrollTo('contact')} className={isMobile ? 'btn btn-outline' : 'btn btn-primary'}>
              Explore Collaboration <ArrowRight size={15} />
            </button>
            <button onClick={() => scrollTo('domains')} className={isMobile ? 'btn btn-outline' : 'btn btn-primary'}>
              View Innovation Domains
            </button>
            <button onClick={() => scrollTo('research')} className={isMobile ? 'btn btn-outline' : 'btn btn-primary'}>
              View Research Innovations
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════
   SECTION — FOUNDERS MESSAGE
══════════════════════════════════════ */

function FounderMessage() {
  return (
    <section className="section founder">
      <div className="container">
        <FadeUp>
          <div style={{ marginBottom: 52 }}>
            <span className="tag">Leading with purpose</span>
            <h2 className="section-heading">From the Founder</h2>
          </div>
        </FadeUp>

        <div className="founder__grid">

          {/* Left — photo + info */}
          <FadeUp delay={0.1}>
            <div className="founder__left">
              <div className="founder__photo-wrap">
                <div className="founder__photo-placeholder">
                  <img src="/advisors/DrHena.jpg" alt="Dr. Hena H" className='founder__photo' />
                </div>
                {/* <div className="founder__photo-accent">
                  <Leaf size={28} color="#fff" />
                </div> */}
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
                    <path d="M20.447 20.452H17.1v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.763V9h3.204v1.561h.046c.447-.84 1.537-1.727 3.162-1.727 3.382 0 4.007 2.226 4.007 5.121v6.497zM5.337 7.433a1.857 1.857 0 01-1.857-1.857 1.857 1.857 0 011.857-1.857 1.857 1.857 0 011.857 1.857 1.857 1.857 0 01-1.857 1.857zM6.962 20.452H3.71V9h3.252v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
   SECTION — WHY SEA-TECH
══════════════════════════════════════ */

const whyCards = [
  {
    title: 'Sustainability-Driven Innovation',
    desc: 'Creating value through sustainability-focused solutions and emerging technologies.',
    bg: '#d4ead9',
  },
  {
    title: 'Systems Thinking',
    desc: 'Addressing complex challenges across agriculture, energy and circular economy ecosystems.',
    bg: '#cde6e5',
  },
  {
    title: 'Research-to-Field Translation',
    desc: 'Bridging scientific research with practical implementation and pilot deployment.',
    bg: '#cddce8',
  },
  {
    title: 'Industry–Academia Collaboration',
    desc: 'Connecting expertise, innovation and stakeholders to accelerate sustainable outcomes.',
    bg: '#d6e8cc',
  },
  {
    title: 'Circular Economy Expertise',
    desc: 'Transforming underutilized resources into productive environmental and economic value.',
    bg: '#ddd4ee',
  },
  {
    title: 'Operational Execution Capability',
    desc: 'Applying disciplined programme leadership and implementation experience to sustainability initiatives.',
    bg: '#cde0e8',
  },
]

function WhySeaTech() {
  return (
    <section className="section why">
      {/* <div className="why__grid-overlay" /> */}
      <div className="container">
        <FadeUp>
          <div className="why__header">
            <span className="tag">Our Differentiators</span>
            <h2 className="section-heading">Why SEA-Tech</h2>
            <p className="section-sub" style={{ margin: '10px auto 0' }}>
              Integrating sustainability, innovation and execution to create practical
              pathways from concept to impact.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="why__list">
            {whyCards.map((c, i) => (
              <div
                key={c.title}
                className="why-card"
              >
                <div
                  className="why-card__left"
                  style={{ background: c.bg }}
                >
                  <div className="why-card__num">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="why-card__title">{c.title}</div>
                </div>
                <div
                  className="why-card__right"
                  style={{ background: `${c.bg}99` }}
                >
                  <p className="why-card__desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
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
        {/* <div className='domains__bg-image' /> */}
        {/* <div className="why__grid-overlay" /> */}

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
                <div style={{ display: 'block', textDecoration: 'none' }}>
                  <div
                    className={`domain-card ${isHov ? 'domain-card--hovered' : 'domain-card--default'}`}
                    style={{
                      background: isHov ? d.color : '#fff',
                      borderColor: isHov ? d.color : 'rgba(0,0,0,0.07)',
                    }}
                  >
                    <div
                      className="domain-card__icon-wrap"
                      style={{ background: isHov ? 'rgba(255,255,255,0.14)' : d.light }}
                    >
                      <Icon size={24} color={isHov ? '#fff' : d.color} className='spin3d' />
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
   SECTION — CURRENT RESEARCH, 
   INNOVATIONS, AND PILOT DEVELOPMENT.
══════════════════════════════════════ */

const researchItems = [
  {
    Icon: Plane,
    title: 'Sustainable Aviation Fuel Pathways',
    challenge: 'Decarbonizing aviation requires sustainable alternatives to conventional jet fuel while maintaining energy security and performance.',
    approach: 'Assessing biomass- and waste-derived pathways for sustainable aviation fuel production through feedstock evaluation, process analysis, sustainability assessment, and pilot development.',
    impact: [
      'Reduced lifecycle greenhouse gas emissions',
      'Enhanced energy security',
      'Support for aviation decarbonization',
    ],
    status: 'Research & Pilot Development',
    statusColor: '#22c55e',
  },
  {
    Icon: Wheat,
    title: 'Biomass Valorization Systems',
    challenge: 'Large quantities of agricultural residues and organic biomass remain underutilized, resulting in resource inefficiencies and environmental impacts.',
    approach: 'Developing integrated pathways that convert biomass into sustainable fuels, bioenergy, and value-added bioproducts through technology assessment and pilot-scale innovation.',
    impact: [
      'Improved biomass utilization',
      'Renewable energy and bioproduct generation',
      'Strengthened circular bioeconomy systems',
    ],
    status: 'Research & Pilot Development',
    statusColor: '#22c55e',
  },
  {
    Icon: Sprout,
    title: 'Climate-Smart Agriculture Solutions',
    challenge: 'Agricultural systems face increasing pressures from climate variability, resource constraints, and the need to sustainably improve productivity.',
    approach: 'Advancing climate-smart agricultural solutions through sustainable farming practices, soil health management, precision agriculture, and resource-efficient technologies.',
    impact: [
      'Improved agricultural resilience',
      'Enhanced resource-use efficiency',
      'Increased productivity and sustainability',
    ],
    status: 'Research & Pilot Development',
    statusColor: '#22c55e',
  },
  {
    Icon: FlaskConical,
    title: 'Algae-Based Circular Bioeconomy',
    challenge: 'The transition toward a low-carbon economy requires innovative biological systems capable of producing renewable fuels, materials, and high-value bioproducts.',
    approach: 'Exploring algae-based platforms for biomass production, carbon utilization, biofuel generation, wastewater valorization, and sustainable bioproduct development.',
    impact: [
      'Carbon utilization and resource recovery',
      'Renewable fuel and bioproduct generation',
      'Advancement of circular bioeconomy systems',
    ],
    status: 'Research & Pilot Development',
    statusColor: '#22c55e',
  },
  {
    Icon: RefreshCw,
    title: 'Carbon & Resource Recovery Systems',
    challenge: 'Growing environmental pressures demand innovative approaches that reduce emissions, recover valuable resources, and improve system-wide sustainability.',
    approach: 'Evaluating pathways for carbon sequestration, biochar production, nutrient recovery, waste valorization, and circular resource management.',
    impact: [
      'Enhanced carbon management',
      'Improved resource efficiency',
      'Reduced environmental impacts',
    ],
    status: 'Research & Pilot Development',
    statusColor: '#22c55e',
  },
  {
    Icon: GitBranchPlus,
    title: 'Technology Translation & Pilot Validation',
    challenge: 'Promising sustainability innovations often struggle to reach field-ready implementation due to gaps in validation, stakeholder alignment and deployment pathways.',
    approach: 'Support technology assessment, pilot design, ecosystem engagement and collaborative validation to bridge the gap between innovation and practical application.',
    impact: [
      'Accelerated adoption of sustainability solutions',
      'Reduced implementation risk',
      'Pathways from research outcomes to impact',
    ],
    status: 'Technology scouting, stakeholder consultations and pilot collaboration under exploration.',
    statusColor: '#2276c5',
  }
]

function ResearchPilots() {
  return (
    <section id='research' className="section research">
      <div className="container">
        <FadeUp>
          <div className="research__header">
            <span className="tag">Active Research</span>
            <h2 className="section-heading">
              Current Research, Innovation &amp; Pilot Development
            </h2>
            <p className="section-sub" style={{ margin: '10px auto 0' }}>
              Advancing science-driven solutions from concept to pilot-scale development
              across sustainability, energy, and agriculture.
            </p>
          </div>
        </FadeUp>

        <div className="research__grid">
          {researchItems.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.08}>
              <div className="research-card">

                <div className="research-card__header">
                  <div
                    className="research-card__icon-wrap"
                    style={{ background: 'rgba(11,61,46,0.08)' }}
                  >
                    <item.Icon size={20} color="#0B3D2E" />
                  </div>
                  <h3 className="research-card__title">{item.title}</h3>
                </div>

                <div className="research-card__block">
                  <div className="research-card__block-label">Challenge</div>
                  <p className="research-card__block-text">{item.challenge}</p>
                </div>

                <div className="research-card__block">
                  <div className="research-card__block-label">Approach</div>
                  <p className="research-card__block-text">{item.approach}</p>
                </div>

                <div className="research-card__block">
                  <div className="research-card__block-label">Expected Impact</div>
                  <div className="research-card__impact">
                    {item.impact.map(pt => (
                      <div key={pt} className="research-card__impact-item">
                        <span className="research-card__impact-dot" />
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="research-card__status">
                  <span
                    className="research-card__status-dot"
                    style={{
                      background: item.statusColor,
                      boxShadow: `0 0 6px ${item.statusColor}80`,
                    }}
                  />
                  <span
                    className="research-card__status-text"
                    style={{ color: item.statusColor }}
                  >
                    {item.status}
                  </span>
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
   SECTION — Advisors
══════════════════════════════════════ */
const advisors = [
  {
    id: 'rklal',
    initials: 'RL',
    name: 'Dr. R.K. Lal',
    image: '/advisors/RK_Lal.jpg',
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
    image: '/advisors/DrVijay_DM.jpg',
    role: 'Strategic Advisor — Plant Biotechnology, Bioactive Systems & Sustainable Bioeconomy',
    bio: 'Distinguished plant scientist, academic leader and researcher with over three decades of experience in plant sciences, biotechnology, cytogenetics, and plant cell culture. Former Professor and HoD Botany at the Institute of Science, Mumbai, Dr. Mendhulkar has contributed extensively to plant-based innovation, sustainable bioresource applications and translational research in plant biotechnology.',
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
    image: '/advisors/SNMishra.jpg',
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
    <section id='advisors' className="section advisors">
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
                      <path d="M20.447 20.452H17.1v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.763V9h3.204v1.561h.046c.447-.84 1.537-1.727 3.162-1.727 3.382 0 4.007 2.226 4.007 5.121v6.497zM5.337 7.433a1.857 1.857 0 01-1.857-1.857 1.857 1.857 0 011.857-1.857 1.857 1.857 0 011.857 1.857 1.857 1.857 0 01-1.857 1.857zM6.962 20.452H3.71V9h3.252v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
  const R = 210

  return (
    <section className="section collab">
      <div className="container">
        <FadeUp>
          <div className="collab__inner">

            <div className="collab__text">
              <span className="tag">Collaboration Model</span>
              <h2 className="section-heading" style={{ marginBottom: 14 }}>
                Collaboration-Driven Innovation
              </h2>
              <p>
                SEA-Tech Innovations LLP works through collaborative ecosystems involving
                academia, industry, research organisations, pilot programs and sustainability
                partnerships to accelerate real-world deployment.
              </p>
            </div>

            <div ref={ref} className="collab__diagram">
              <svg viewBox="-260 -260 520 520" className="collab__svg">
                <defs>
                  <filter id="node-shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#03c55b" floodOpacity="0.5" />
                  </filter>
                  <filter id="center-shadow" x="-40%" y="-40%" width="180%" height="180%">
                    <feDropShadow dx="0" dy="6" stdDeviation="30" floodColor="#00962d" floodOpacity="1" />
                  </filter>
                </defs>
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
                <circle cx={0} cy={0} r={95} fill="#fff" stroke="#0B3D2E" strokeWidth="1.5" filter="url(#node-shadow)" />
                <circle cx={0} cy={0} r={85} fill="rgba(11,61,46,0.06)"
                  filter="url(#center-shadow)"
                  opacity={visible ? 1 : 0}
                  style={{ transition: 'opacity 0.5s' }}
                />
                <circle cx={0} cy={0} r={105} fill="none" stroke="#0B3D2E"
                  strokeWidth="1" strokeDasharray="3 3"
                  opacity={visible ? 0.35 : 0}
                  style={{ transition: 'opacity 0.5s', animation: 'spin-slow 22s linear infinite' }}
                />
                {/* <text x={0} y={0} textAnchor="middle" fill="#fff"
                  fontFamily="Manrope" fontWeight="800" fontSize="22">SEA-Tech</text>
                <text x={0} y={18} textAnchor="middle" fill="rgba(255,255,255,0.65)"
                  fontFamily="Inter" fontSize="13">Innovations LLP</text> */}

                <image
                  href="/assets/SEA-logo.png"
                  x={-83}
                  y={-35}
                  width={170}
                  height={70}
                  opacity={visible ? 1 : 0}
                  style={{ transition: 'opacity 0.5s' }}
                  preserveAspectRatio="xMidYMid meet"
                />

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
                      <circle cx={x} cy={y} r={65} fill="#fff" stroke="#0B3D2E" strokeWidth="1.5" filter="url(#node-shadow)" />
                      <circle cx={x} cy={y} r={55} fill="rgba(11,61,46,0.06)" />
                      <text x={x} y={y + 3} textAnchor="middle" fill="#0B3D2E"
                        fontFamily="Manrope" fontWeight="700" fontSize="13.5">
                        {n.label.split(' ')[0]}
                      </text>
                      {n.label.split(' ').length > 1 && (
                        <text x={x} y={y + 20} textAnchor="middle" fill="#0E5C5A"
                          fontFamily="Inter" fontSize="13.5">
                          {n.label.split(' ').slice(1).join(' ')}
                        </text>
                      )}
                    </g>
                  )
                })}

              </svg>
            </div>

            <div className="collab__btn">
              <button onClick={() => scrollTo('contact')} className="btn btn-primary">
                Explore Collaboration Opportunities <ArrowRight size={15} />
              </button>
            </div>

          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════
   SECTION — INSIGHTS & PERSPECTIVES
══════════════════════════════════════ */

const insightArticles = [
  {
    id: 'resilient-remote',
    tag: 'Sustainability & Strategy',
    title: 'Resilient Sustainability Systems for Remote Operations',
    desc: 'Designing sustainability-driven systems for energy security, resource efficiency and field deployability.',
    content: [
      {
        type: 'highlight',
        text: 'Sustainability should not be viewed only as a mechanism for reducing environmental impact. It can also be understood as a means of reducing operational dependence.',
      },
      {
        type: 'para',
        text: 'Sustainability is often discussed in the context of cities, industrial clusters and large infrastructure networks. Yet some of the most demanding operational environments are found far away from established supply chains, utility networks and logistics support systems.',
      },
      {
        type: 'para',
        text: 'Remote industrial facilities, agricultural regions, mining operations, border infrastructure, island territories and disaster-prone areas all face a common challenge: sustaining critical operations under conditions of uncertainty. In such environments, resilience frequently becomes more important than efficiency alone.',
      },
      {
        type: 'para',
        text: 'Traditionally, sustainability and resilience have been treated as separate objectives. Sustainability focused on environmental performance, while resilience focused on continuity of operations. Increasingly, however, the two are converging.',
      },
      {
        type: 'para',
        text: 'A remote facility dependent on long fuel supply chains is vulnerable to disruptions. A water-intensive operation in a drought-prone region faces operational risk. A community dependent on external resource inputs becomes exposed to economic and environmental shocks. In each case, sustainability measures that improve resource efficiency can simultaneously strengthen resilience.',
      },
      {
        type: 'para',
        text: 'Decentralized energy systems offer a practical example. Hybrid combinations of biomass, bioenergy, solar generation, energy storage and local resource recovery can reduce dependence on distant supply networks. Similarly, water recycling systems and circular resource utilization models can improve operational continuity while reducing environmental burdens.',
      },
      {
        type: 'para',
        text: 'Agricultural systems provide another illustration. Climate variability is increasingly affecting productivity, water availability and resource planning. Farms that integrate biomass utilization, soil carbon enhancement, resource recycling and diversified production systems often demonstrate greater resilience than highly specialized systems dependent on narrow inputs.',
      },
      {
        type: 'para',
        text: 'The same principle applies to industrial ecosystems. Facilities capable of recovering value from waste streams, reusing process resources and developing alternative feedstock pathways are often better positioned to withstand market disruptions and resource constraints.',
      },
      {
        type: 'highlight',
        text: 'Long-term resilience is often built through adaptability. Systems that can utilize multiple resource streams, operate under changing conditions and recover value from existing assets are generally more robust than those optimized for a single set of assumptions.',
      },
      {
        type: 'para',
        text: 'This is where sustainability and systems thinking intersect. The objective is not simply to reduce emissions or improve resource efficiency. It is to create operational architectures capable of functioning effectively despite uncertainty.',
      },
      {
        type: 'para',
        text: 'The future will likely present increasing challenges related to climate variability, resource availability, supply-chain complexity and infrastructure stress. Organizations that design sustainability into their operational foundations may find themselves better prepared for these realities.',
      },
      {
        type: 'para',
        text: 'Viewed through this lens, sustainability is not merely an environmental agenda. It becomes an operational strategy for resilience, continuity and long-term value creation.',
      },
      {
        type: 'para',
        text: 'In many sectors, the most successful sustainability initiatives may ultimately be those that help systems continue functioning when conditions are far from ideal.',
      },
    ],
  },
  {
    id: 'soil-economy',
    tag: 'Agriculture & Climate',
    title: 'Climate-Smart Agriculture and Emerging Soil Economy',
    desc: 'Integrating soil regeneration, carbon farming and agri-energy systems for climate-resilient agriculture.',
    content: [
      {
        type: 'highlight',
        text: 'The future of climate-smart agriculture may depend not only on what is grown above the ground, but also on how effectively we understand, restore and manage what lies beneath it.',
      },
      {
        type: 'para',
        text: 'Agriculture has traditionally been evaluated through a relatively simple lens: productivity. The primary objective was to maximize yield while managing inputs, pests and environmental conditions. Today, however, a broader perspective is beginning to emerge.',
      },
      {
        type: 'para',
        text: 'Agricultural systems are increasingly expected to deliver multiple outcomes simultaneously. In addition to food and fiber production, they are being asked to contribute to climate resilience, carbon management, resource conservation and sustainable rural development.',
      },
      {
        type: 'para',
        text: 'At the center of this transition lies a resource that often receives less attention than it deserves: soil. Healthy soils perform functions that extend far beyond crop production. They influence water retention, nutrient cycling, biological activity and ecosystem resilience. They also play an important role in carbon storage, making them increasingly relevant to discussions on sustainability and climate adaptation.',
      },
      {
        type: 'para',
        text: 'The concept of climate-smart agriculture is therefore evolving beyond precision inputs and digital technologies. It is becoming increasingly connected to soil health, biomass management and long-term ecosystem productivity.',
      },
      {
        type: 'highlight',
        text: 'One of the most promising developments is the growing recognition of agricultural residues and organic biomass as valuable resources rather than waste products.',
      },
      {
        type: 'para',
        text: 'Biochar, composted biomass and other soil-enhancing products are attracting attention not only because of their agronomic benefits, but also because of their potential role in carbon management and resource efficiency. These approaches offer opportunities to improve soil quality while reducing dependence on external inputs.',
      },
      {
        type: 'para',
        text: 'The emerging challenge is to move beyond isolated interventions and toward integrated systems thinking. Agricultural productivity, biomass utilization, energy generation and carbon stewardship are often treated as separate domains despite being closely interconnected.',
      },
      {
        type: 'para',
        text: 'Future agricultural systems may increasingly resemble biological resource ecosystems rather than conventional production units. A farm could simultaneously produce food, generate biomass resources, enhance soil carbon, contribute to decentralized energy systems and support environmental restoration objectives.',
      },
      {
        type: 'para',
        text: 'Such integration creates new opportunities for rural economies. Value can be generated not only from crops but also from residues, byproducts and ecosystem services that historically received limited economic recognition.',
      },
      {
        type: 'para',
        text: 'At the same time, caution is necessary. Sustainable agriculture cannot be achieved through a single technology or practice. Local ecological conditions, water availability, soil characteristics and economic realities must all be considered. Solutions that succeed in one region may not automatically translate to another.',
      },
      {
        type: 'para',
        text: 'The broader lesson is that agricultural sustainability is ultimately about managing biological systems intelligently. Productivity remains important, but long-term resilience increasingly depends on maintaining the health and functionality of the underlying resource base.',
      },
      {
        type: 'para',
        text: 'As agriculture adapts to changing environmental and economic conditions, soil may emerge as one of the most strategically important assets in the sustainability transition.',
      },
    ],
  },
]

function InsightsPerspectives() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <section id='insights' className="section insights-section">
      <div className="container">
        <FadeUp>
          <div className="insights-section__header">
            <span className="tag">Thought Leadership</span>
            <h2 className="section-heading">Insights &amp; Perspectives</h2>
            <p className="section-sub">
              Perspectives on sustainability systems, energy transition, agriculture
              innovation and strategic resilience.
            </p>
          </div>
        </FadeUp>

        <div className="insights-section__grid">
          {insightArticles.map((article, i) => (
            <FadeUp key={article.id} delay={i * 0.1}>
              <div
                className="insight-card"
                onClick={() => setSelected(article)}
              >
                <span className="insight-card__tag">{article.tag}</span>
                <h3 className="insight-card__title">{article.title}</h3>
                <p className="insight-card__desc">{article.desc}</p>
                <div className="insight-card__read">
                  Read Perspective <ArrowRight size={13} />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="insight-modal-overlay"
          onClick={() => setSelected(null)}
        >
          <div
            className="insight-modal"
            onClick={e => e.stopPropagation()}
          >
            <div className="insight-modal__close">
              <button
                className="insight-modal__close-btn"
                onClick={() => setSelected(null)}
              >
                <X size={16} />
              </button>
            </div>

            <div className="insight-modal__header">
              <span className="insight-modal__tag">{selected.tag}</span>
              <h2 className="insight-modal__title">{selected.title}</h2>
              <p className="insight-modal__desc">{selected.desc}</p>
            </div>

            <div className="insight-modal__body">
              {selected.content.map((block, i) => (
                <p
                  key={i}
                  className={
                    block.type === 'highlight'
                      ? 'insight-modal__para--highlight'
                      : 'insight-modal__para'
                  }
                >
                  {block.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

/* ══════════════════════════════════════
   SECTION 9 — CONTACT
══════════════════════════════════════ */
function ContactSection() {
  const [form, setForm] = useState({ name: '', org: '', email: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  // console.log(EMAILJS_PUBLIC_KEY)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          organization: form.org,
          from_email: form.email,
          interest: form.interest,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      setForm({ name: '', org: '', email: '', interest: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    } catch (err) {
      console.error(err)
      setError(true)
    } finally {
      setSending(false)
    }
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
                {/* <a href="tel:7484040228" className="contact__link">
                  <div className="contact__link-icon">
                    <Phone size={17} color="#7FB069" />
                  </div>
                  <div>
                    <div className="contact__link-label">Call</div>
                    <div className="contact__link-value">7484040228</div>
                  </div>
                </a> */}
                <a
                  href="https://wa.me/7484040228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                >
                  <div className="contact__link-icon">
                    <FaWhatsapp size={17} color="#7FB069" />
                  </div>
                  <div className="contact__link-icon">
                    <Phone size={17} color="#7FB069" />
                  </div>
                  <div>
                    {/* <div className="contact__link-label">Call or WhatsApp</div> */}
                    <div className="contact__link-value">+91 74840 40228</div>
                  </div>
                </a>

                <a href="mailto:office@seatech-innovations.com" className="contact__link">
                  <div className="contact__link-icon">
                    <Mail size={17} color="#7FB069" />
                  </div>
                  <div>
                    {/* <div className="contact__link-label">Email</div> */}
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

                  {error && (
                    <p style={{ color: '#f87171', fontSize: 13, marginTop: 4 }}>
                      Something went wrong. Please try again or email us directly at office@seatech-innovations.com
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary contact__submit"
                    disabled={sending}
                    style={{ opacity: sending ? 0.75 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}
                  >
                    {sending ? 'Sending...' : 'Submit Inquiry'} <Send size={14} />
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
