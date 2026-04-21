import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'  
import Hero from '../components/Hero'
import ProgressIndicator from '../components/ProgressIndicator'
import AnimatedCounter from '../components/AnimatedCounter'

const fadeUp = (delay = 0) => ({
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut', delay }
})

const showcaseCards = [
  {
    img: `${import.meta.env.BASE_URL}images/Expedition-Wall.jpg`,
    category: '2025 Navigator/Expedition Launch',
    categoryColor: 'text-info',
    title: '2025 Program Launch',
    kpi1: { value: 98, label: 'FTT Quality', suffix: '%' },
    kpi2: { value: 2025, label: 'Program Launch' },
    desc: 'Managed US plant rotations ensuring 98%+ first-time-through build quality for Navigator & Expedition Job #1.',
    tags: ['Supplier Onboarding', 'On-site Triage', 'Launch Engineering'],
    modalContent: (
      <div className="p-5">
        <h2 className="display-6 fw-bold mb-3">2025 Navigator & Expedition Launch</h2>
        <p className="lead mb-4">My first major global launch as Feature Systems Engineer.</p>
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="kpi-item"><span><AnimatedCounter end={98} suffix="%" /></span><label>First-Time-Through Quality</label></div>
          </div>
          <div className="col-md-6">
            <div className="kpi-item"><span><AnimatedCounter end={2025} /></span><label>Job #1 Launch</label></div>
          </div>
        </div>
        <p className="mb-4">I owned end-to-end supplier onboarding, on-site triage, and launch engineering across three US plants during critical plant rotations.</p>
        <p className="text-muted">This program marked my transition into full Feature Systems Engineering ownership — the foundation for everything that followed.</p>
      </div>
    )
  },
  {
    img: `${import.meta.env.BASE_URL}images/26F150.jpg`,    category: 'Acoustic / Thermal Optimization',
    categoryColor: 'text-warning',
    title: 'Acoustic & Thermal Optimization',
    kpi1: { value: 36, label: 'Noise Reduction', suffix: '%' },
    kpi2: { value: 2, label: 'Saved / Model Year', suffix: 'M' },
    desc: 'Launched NVH lab testing protocol that cut Power Running Board noise 36% and eliminated ≈$2M in hardware cost per model year.',
    tags: ['NVH Analysis', 'Extreme Temp Testing', 'Feature Validation'],
    modalContent: (
      <div className="p-5">
        <h2 className="display-6 fw-bold mb-3">Acoustic & Thermal Optimization</h2>
        <p className="lead mb-4">Power Running Boards — from noisy prototype to premium silence.</p>
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="kpi-item"><span><AnimatedCounter end={36} suffix="%" /></span><label>Noise Reduction</label></div>
          </div>
          <div className="col-md-6">
            <div className="kpi-item"><span><AnimatedCounter end={2} suffix="M" /></span><label>Hardware Saved / Model Year</label></div>
          </div>
        </div>
        <p className="mb-4">I designed and launched the first NVH lab testing protocol for the Power Running Board feature. The result: dramatically quieter operation and massive cost savings without sacrificing performance.</p>
        <p className="text-muted">This project became the benchmark for how we validate acoustic comfort on all future powered features.</p>
      </div>
    )
  },
  {
    img: `${import.meta.env.BASE_URL}images/BMW2021.jpg`,    category: 'ECU Diagnostics Robustness',
    categoryColor: 'text-info',
    title: 'ECU Diagnostics Robustness',
    kpi1: { value: 150, label: 'Requirements', suffix: '+' },
    kpi2: { value: 23, label: 'Noisy DTC Reqs', suffix: '+' },
    desc: 'Built standardized E2E diagnostics framework targeting high-warranty Noisy DTCs across TPMS, Key Fob, and VIN Authentication.',
    tags: ['Requirements Engineering', 'DTC Methodology', 'Gap Analysis'],
    modalContent: (
      <div className="p-5">
        <h2 className="display-6 fw-bold mb-3">E2E ECU Diagnostics Robustness</h2>
        <p className="lead mb-4">Creating the new standard for diagnostics at Ford.</p>
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="kpi-item"><span><AnimatedCounter end={150} suffix="+" /></span><label>Requirements Authored</label></div>
          </div>
          <div className="col-md-6">
            <div className="kpi-item"><span><AnimatedCounter end={23} suffix="+" /></span><label>Noisy DTC Requirements</label></div>
          </div>
        </div>
        <p className="mb-4">I built a complete diagnostic reasoning framework from first principles. It is now the operating standard for the newly formed diagnostics team.</p>
        <p className="text-muted">This is the work I’m most proud of — it will outlive any single program and improve diagnostic quality across the entire organization.</p>
      </div>
    )
  }
]

const timelineEvents = [
  {
    side: 'left',
    year: '2025',
    dates: 'July 2025 – Present',
    location: 'Naucalpan de Juárez, México',
    title: 'Diagnostics Design Engineer',
    company: 'Ford Motor Company – GTBC Mx',
    summary: 'Spearheading the E2E ECU Diagnostics Robustness project, delivering 150+ requirements and targeting high-warranty Noisy DTCs across TPMS, Key Fob, and VIN Authentication systems.',
    bullets: [
      'Authored 23+ requirements eliminating false-positive DTC triggers.',
      'Bridging Architecture, SW, and Module D&R teams to close diagnostic coverage gaps.',
      'Designing next-gen Enhanced Data Recording methods.'
    ]
  },
  {
    side: 'right',
    year: '2021',
    dates: 'Sept 2021 – July 2025',
    location: 'Naucalpan de Juárez, México · USA Rotations',
    title: 'Feature Systems Engineer',
    company: 'Ford Motor Company – GTBC Mx',
    summary: 'Led Power Running Boards, Onboard Scales & Smart Hitch, and Automatic Vehicle Shutdown from early concept to global launch — authoring ≈700 requirements and 400+ test cases.',
    bullets: [
      'Launched NVH lab test cutting PRB noise 36% and saving ≈$2M per model year.',
      'Cut PRB warranty spend ≈$1.4M (23MY baseline); zero open critical issues at launch.',
      'Filed 12 innovation disclosures and mentored 6 engineers into the SE organization.'
    ]
  },
  {
    side: 'left',
    year: '2020',
    dates: 'July 2020 – June 2021',
    location: 'San Luis Potosí, México',
    title: 'Quality Management Engineer',
    company: 'BMW Group – Plant San Luis Potosí',
    summary: 'Supported G42 Conformity-of-Production and ISO 9001 audits — both passed with zero major findings — while deploying a Power BI/Power Apps QMS suite.',
    bullets: [
      'Deployed Power BI/Power Apps QMS suite, cutting issue-closure time by 30%.',
      'Launched "Quality Mindset" campaign training 120+ process leaders.'
    ]
  }
]

export default function Home() {
  const [modalCard, setModalCard] = useState(null)

  // ←←← ADD THIS useEffect HERE (right after the state)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const fill = entry.target.querySelector('.timeline-fill')
          if (fill) fill.style.height = 'calc(100% - 2rem)'
        }
      },
      { threshold: 0.6 }
    )

    const track = document.querySelector('.timeline-track')
    if (track) observer.observe(track)

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      {/* ... rest of your return stays exactly the same ... */}
      <Hero />
      <ProgressIndicator />

      <div className="container"><div className="section-rule"></div></div>

      {/* ABOUT PREVIEW */}
      <section id="about" className="container">
        <div className="row align-items-center gy-4">
          <motion.div className="col-md-7" {...fadeUp()}>
            <span className="section-eyebrow">About</span>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 500, lineHeight: 1.2, marginBottom: '1.5rem' }}>
              The engineer.<br />The <em style={{ fontStyle: 'italic', color: '#6c8ec4' }}>human</em> behind it.
            </h2>
            <p>I am Angel Vargas — born in Guerrero, raised across five Mexican cities, trained at IPN, and shaped by every place I've worked and every team I've led. I specialize in automotive diagnostics and systems integration, with experience at Ford Motor Company and BMW Group across global vehicle programs.</p>
            <p>My work connects the technical depth of ECU architecture and requirements governance with the human side of engineering: mentoring, cross-functional leadership, and the belief that what we build should be felt, not just measured.</p>
            <Link to="/about" className="btn-read-more mt-3 d-inline-block">The Full Story</Link>
          </motion.div>
          <motion.div className="col-md-5" {...fadeUp(0.15)}>
            <div className="about-visual rounded-4 p-4">
              <div className="about-stats-grid">
                {[
                  { num: '700+', label: 'Requirements Authored' },
                  { num: '≈$3.4M', label: 'Warranty Cost Reduced' },
                  { num: '12', label: 'Innovation Disclosures' },
                  { num: '3', label: 'Global OEM Programs' }
                ].map((s) => (
                  <div className="about-stat" key={s.label}>
                    <span className="about-stat-number">{s.num}</span>
                    <span className="about-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <div style={{
                  width: '148px',
                  height: '148px',
                  margin: '0 auto',
                  background: 'linear-gradient(135deg, #6c8ec4, #25314a)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  border: '0px solid rgba(108,142,196,0.3)'
                }}>
                  AV
                </div>
                <p className="mt-3 text-muted" style={{ fontSize: '0.82rem' }}>Professional photo coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container"><div className="section-rule"></div></div>

      {/* TECHNICAL SHOWCASE */}
      <section id="technical-showcase" className="technical-showcase container">
        <span className="section-eyebrow">Selected Work</span>
        <h2>Technical Showcase</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          {showcaseCards.map((card, i) => (
            <motion.div className="col" key={card.title} {...fadeUp(i * 0.12)}>
              <article className="glass-showcase-card h-100">
                <div className="project-header-img">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="card-body d-flex flex-column p-4">
                  <span className={`card-category ${card.categoryColor} mb-2`} style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
                    {card.category}
                  </span>
                  <h3 className="mb-2">{card.title}</h3>
                  <div className="kpi-grid mb-3">
                    <div className="kpi-item"><span>{card.kpi1.value}{card.kpi1.suffix}</span><label>{card.kpi1.label}</label></div>
                    <div className="kpi-item"><span>{card.kpi2.value}{card.kpi2.suffix || ''}</span><label>{card.kpi2.label}</label></div>
                  </div>
                  <p className="mb-4">{card.desc}</p>
                  <div className="tag-row d-flex flex-wrap gap-2 mb-4">
                    {card.tags.map(t => <span className="method-tag" key={t}>{t}</span>)}
                  </div>
                  <button className="deep-dive-btn btn btn-sm mt-auto w-100" onClick={() => setModalCard(card)}>
                    Deep Dive →
                  </button>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="container"><div className="section-rule"></div></div>

      {/* CAREER TIMELINE */}
      <section id="timeline" className="experience-timeline container">
        <span className="section-eyebrow">Experience</span>
        <h2>Career Timeline</h2>
        <div className="timeline-track">
          <div className="timeline-fill"></div>
          {timelineEvents.map((ev) => (
            <TimelineCard key={ev.title} ev={ev} />
          ))}
        </div>
      </section>

      <div className="container"><div className="section-rule"></div></div>

      {/* OLD CONTACT SECTION */}
      <section id="contact" className="container">
        <div className="row g-4">
          <motion.div className="col-md-5" {...fadeUp()}>
            <span className="section-eyebrow">Contact</span>
            <h2 style={{ fontFamily: 'Lora,serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 500, marginBottom: '0.5rem' }}>Let's Connect.</h2>
            <p className="text-muted mb-4">Open to engineering collaborations, systems consulting, and graduate program conversations. Based in México — open to relocation.</p>
            <div className="d-flex flex-column gap-3">
              <a href="mailto:avargas.emundo@gmail.com" className="contact-link">
                <i className="bi bi-envelope-fill"></i>avargas.emundo@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/av-m/" target="_blank" rel="noreferrer" className="contact-link">
                <i className="bi bi-linkedin"></i>LinkedIn Profile
              </a>
              <span className="contact-link non-link">
                <i className="bi bi-geo-alt-fill"></i>Naucalpan de Juárez, México · Open to relocation
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container"><div className="section-rule"></div></div>

      {/* SUMMARY / SKILL CLOUD */}
      <section id="summary" className="split-summary container mb-5">
        <div className="row align-items-center g-4">
          <motion.div className="col-lg-6" {...fadeUp()}>
            <div className="summary-copy">
              <p className="text-uppercase text-muted mb-3" style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 4 }}>Professional Overview</p>
              <h2>"Systems thinking meets diagnostics design."</h2>
              <p className="mb-3">I build automotive diagnostics experiences with a clear focus on resilience, traceability, and measurable system outcomes.</p>
              <p className="mb-4">This portfolio is a curated snapshot of technical leadership, collaborative program delivery, and the practical engineering mindset that turns requirements into robust, testable solutions.</p>
              <Link to="/about" className="btn-read-more">Read More</Link>
            </div>
          </motion.div>
          <motion.div className="col-lg-6" {...fadeUp(0.15)}>
            <div className="skill-cloud p-4">
              <div className="cloud-graphic">
                <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" aria-label="Systems architecture diagram">
                  <circle cx="70" cy="70" r="28" fill="#6c8ec4" opacity=".95"/>
                  <circle cx="290" cy="60" r="22" fill="#25314a" opacity=".9"/>
                  <circle cx="190" cy="190" r="32" fill="#6c8ec4" opacity=".88"/>
                  <circle cx="90" cy="210" r="18" fill="#25314a" opacity=".85"/>
                  <circle cx="250" cy="140" r="16" fill="#6c8ec4" opacity=".9"/>
                  <path d="M98 85 C140 60 210 80 250 70" stroke="#25314a" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M80 90 C110 160 130 190 180 170" stroke="#6c8ec4" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M210 180 C230 130 260 120 290 140" stroke="#25314a" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M110 220 C165 205 210 170 250 155" stroke="#6c8ec4" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="skill-cloud-tags">
                {['MBSE','Diagnostics','Traceability','CANalyzer','Python','Leadership'].map(tag => (
                  <span className="skill-cloud-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

            {/* FINAL VISUAL CONTACT PROMPT */}
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <motion.div {...fadeUp()} className="text-center mb-5">
              <span className="section-eyebrow">Next Chapter</span>
              <h2 className="display-5 fw-bold">Let’s Write the Next Chapter Together</h2>
              <p className="lead text-muted">Open to senior diagnostics roles, Vehicle Engineering MSc opportunities in Sweden, or meaningful engineering conversations.</p>
            </motion.div>

            <div className="text-center">
              <a 
                href="mailto:avargas.emundo@gmail.com?subject=Message from Portfolio&body=Hi Angel,%0D%0A%0D%0AI saw your portfolio and would love to connect about..."
                className="btn-hero-primary px-5 py-3 fs-5 text-decoration-none"
              >
                Send me an Email
              </a>
            </div>

            <p className="text-center mt-4 text-muted">
              Or connect instantly on{' '}
              <a href="https://www.linkedin.com/in/av-m/" target="_blank" rel="noreferrer" className="text-decoration-underline">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>

      {/* END OF JOURNEY */}
      <div className="container py-5 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p style={{ fontFamily: 'Lora, serif', fontSize: '1.1rem', color: '#6c8ec4', marginBottom: '0.5rem' }}>
            Thank you for reading my story.
          </p>
          <p className="text-muted">Built with passion in México City • Open to the next adventure</p>
        </motion.div>
      </div>

      {/* MODAL */}
      {modalCard && (
        <div className="modal-backdrop show" onClick={() => setModalCard(null)}>
          <div className="modal-content" onClick={e => e.stopImmediatePropagation()}>
            <div className="d-flex justify-content-end p-3 border-bottom">
              <button className="btn-close" onClick={() => setModalCard(null)}></button>
            </div>
            {modalCard.modalContent}
          </div>
        </div>
      )}
    </main>
  )
}

function TimelineCard({ ev }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className={`timeline-event timeline-event-${ev.side}`}
      initial={{ x: ev.side === 'left' ? -50 : 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      data-year={ev.year}
      onClick={() => setOpen(!open)}
      style={{ cursor: 'pointer' }}
    >
      <div className="timeline-content card">
        <div className="card-body">
          <div className="timeline-metadata">
            <span>{ev.dates}</span> | <span>{ev.location}</span>
          </div>
          <h3 className="h5 fw-bold">{ev.title}</h3>
          <p className="text-primary mb-1">{ev.company}</p>
          <p className="mb-0">{ev.summary}</p>
          {open && (
            <ul className="mt-2 ps-3">
              {ev.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  )
}