import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react' 
import Hero from '../components/Hero'
import ProgressIndicator from '../components/ProgressIndicator'
import AnimatedCounter from '../components/AnimatedCounter'
import SkillStack from '../components/SkillStack'
import ProjectPicker from '../components/ProjectPicker'

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
      'Designing next-gen Enhanced Data Recording methods.',
      'Managed cross-functional alignment between Mexico and US-based teams for global vehicle launches.'
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
const skills = [
  'Requirements Engineering', 'Diagnostics Design', 'DFMEA', 'MBSE',
  'CANalyzer', 'UDS Protocol', 'NVH Analysis', 'Thermal Validation',
  'Cross-functional Leadership', 'Six Sigma', 'Traceability', 'Calibration'
];
function StatsGrid() {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { end: 700, prefix: '', suffix: '+', label: 'Requirements Authored' },
    { end: 3.4, prefix: '≈$', suffix: 'M', label: 'Warranty Cost Reduced' },
    { end: 12, prefix: '', suffix: '', label: 'Innovation Disclosures' },
    { end: 3, prefix: '', suffix: '', label: 'Global OEM Programs' },
  ]

  return (
    <div className="about-stats-grid" ref={ref}>
      {stats.map((s) => (
        <div className="about-stat" key={s.label}>
          <span className="about-stat-number">
            {s.prefix}
            {started ? <AnimatedCounter end={s.end} suffix={s.suffix} /> : '0'}
          </span>
          <span className="about-stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  )
}
export default function Home() {
  const [modalCard, setModalCard] = useState(null)

  // Timeline fill animation - more stable
  useEffect(() => {
    let timeout;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeout = setTimeout(() => {
            const fill = entry.target.querySelector('.timeline-fill');
            if (fill) fill.style.height = 'calc(100% - 2rem)';
          }, 300); // small delay to let Framer Motion finish
        }
      },
      { threshold: 0.6 }
    );

    const track = document.querySelector('.timeline-track');
    if (track) observer.observe(track);

    return () => {
      if (timeout) clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

return (
  <main className="rimac-hero">
{/* === HERO - Bugatti/Rimac Dashboard Style === */}
<section 
  id="hero"
  style={{
    minHeight: '100vh',
    backgroundImage: `url(${import.meta.env.BASE_URL}images/landscape-hero.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    paddingTop: '80px',
    display: 'flex', 
    alignItems: 'center',
    overflow: 'hidden'
  }}
>
  {/* Dark overlay */}
  <div style={{
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(10,12,16,0.85) 0%, rgba(26,31,46,0.92) 100%)',
  }} />

  {/* Subtle performance grid overlay */}
  <div style={{
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    pointerEvents: 'none'
  }} />

  <div className="container" style={{ position: 'relative', zIndex: 2 }}>
    <div className="row align-items-center gy-5">

      <div className="col-md-7">
        <motion.span
          className="section-eyebrow rimac-accent"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          AUTOMOTIVE SYSTEMS ENGINEER
        </motion.span>

        <motion.h1
          className="hero-name rimac-title"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          style={{ 
            fontSize: 'clamp(3.2rem, 8vw, 6.2rem)', 
            lineHeight: 1.05,
            fontWeight: 600 
          }}
        >
          ANGEL VARGAS
          <br></br>
        </motion.h1>

        <motion.p
          className="hero-lead"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ fontSize: '1.35rem', maxWidth: '620px', color: '#e6edf3' }}
        >
          Architecting robust ECU diagnostics for global platforms. 
          Delivering measurable cost savings and system resilience.
        </motion.p>

        {/* Impact Ribbon */}
        <motion.div 
          className="impact-ribbon d-flex flex-wrap gap-4 justify-content-start mt-4 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ 
            background: 'rgba(16,18,24,0.92)', 
            border: '1px solid rgba(0,212,255,0.35)', 
            padding: '1rem 1.5rem', 
            borderRadius: '12px' 
          }}
        >
          {[
            { value: '$3.4M', label: 'Warranty Cost Reduced' },
            { value: '12', label: 'Innovation Disclosures' },
            { value: '700+', label: 'Requirements Authored' },
            { value: '3', label: 'Global OEM Programs' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div style={{ 
                fontSize: '1.45rem', 
                fontWeight: 700, 
                lineHeight: 1, 
                color: '#00D4FF' 
              }}>{stat.value}</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
        
        <motion.div
          className="hero-cta-group"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link to="/projects" className="btn-hero-primary">Explore My Work</Link>
          <a 
            href={`${import.meta.env.BASE_URL}assets/Curriculum Vitae_Id2026.pdf`} 
            className="btn-rimac px-4 py-3 fw-bold" 
            download
          >
            <i className="bi bi-file-earmark-pdf me-2"></i>Download CV
          </a>
        </motion.div>
      </div>

      {/* Glitch Marquee with Pause on Hover */}
      <div className="col-12 mt-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
        >
          <div 
            className="glitch-marquee"
            style={{
              display: 'inline-flex',
              gap: '2.8rem',
              animation: 'marquee 25s linear infinite',
              padding: '0.75rem 0'
            }}
            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            {skills.concat(skills).map((skill, i) => (
              <span key={i}>{skill}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

<ProgressIndicator />
      <div className="container"><div className="section-rule"></div></div>

      {/* CORE PILLARS - FIXED DARK MODE */}
        <div className="container">
          <div className="text-center mb-5">
            <br></br>
            <br></br>
            <br></br>
            <span className="section-eyebrow">Technical Mastery</span>
            <h2 style={{ 
              fontFamily: 'Lora, serif', 
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', 
              fontWeight: 500, 
              color: '#e6edf3',
              letterSpacing: '-0.5px'
            }}>
              Core Pillars of My Expertise
            </h2>
          </div>
          <SkillStack />
        </div>

      <div className="container"><div className="section-rule"></div></div>

      {/* ABOUT PREVIEW */}
      <section id="about" className="container">
        <div className="row align-items-center gy-4">
          <motion.div className="col-md-7" {...fadeUp()}>
            <span className="section-eyebrow">About</span>
            <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 500, lineHeight: 1.2, marginBottom: '1.5rem' }}>
              The engineer.<br />The <em style={{ fontStyle: 'italic', color: '#6c8ec4' }}>human</em> behind it.
            </h2>
            <p>I am Angel Vargas — born in Guerrero, raised across five Mexican cities, trained at IPN, and shaped by every place I've worked and every team I've led. I specialize in <span className="rimac-accent">automotive diagnostics and systems integration</span>, with experience at Ford Motor Company and BMW Group across global vehicle programs.</p>
<p>My work connects the technical depth of <span className="rimac-accent">ECU architecture and requirements governance</span> with the human side of engineering: mentoring, cross-functional leadership, and the belief that what we build should be <span className="rimac-accent">felt, not just measured</span>.</p>
            <Link to="/about" className="btn-read-more mt-3 d-inline-block">The Full Story</Link>
          </motion.div>
          <motion.div className="col-md-5" {...fadeUp(0.15)}>
            <div className="about-visual rounded-4 p-4">
              <StatsGrid />
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

      {/* SUMMARY / SKILL CLOUD */}
      <section id="summary" className="split-summary container mb-5">
        <div className="row align-items-center g-4">
          <motion.div className="col-lg-6" {...fadeUp()}>
            <div className="summary-copy">
              <p className="text-uppercase text-muted mb-3" style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 4 }}>Professional Overview</p>
              <h2>"Systems thinking meets diagnostics design."</h2>
              <p className="mb-3">I build <span className="rimac-accent">automotive diagnostics experiences</span> with a clear focus on resilience, traceability, and measurable system outcomes.</p>
<p className="mb-4">This portfolio is a curated snapshot of <span className="rimac-accent">technical leadership</span>, collaborative program delivery, and the practical engineering mindset that turns requirements into robust, testable solutions.</p>
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

      <div className="container"><div className="section-rule"></div></div>

      {/* INTERACTIVE PROJECT PICKER */}
      <section id="technical-showcase" className="container py-5">
        <ProjectPicker 
          onDeepDive={(proj) => {
            const cardMap = {
              "Power Running Boards": showcaseCards[1],
              "E2E ECU Diagnostics": showcaseCards[2],
              "BMW Quality System": showcaseCards[0]
            };
            const matchedCard = cardMap[proj.title] || showcaseCards[1];
            setModalCard(matchedCard);
          }} 
        />
        
        <div className="text-center mt-4">
          <Link to="/projects" className="btn-read-more">
            View All Projects →
          </Link>
        </div>
      </section>

      <div className="container"><div className="section-rule"></div></div>

{/* CAREER TIMELINE — REFINED WITH BUBBLE ON OPPOSITE SIDE */}
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

        <div className="container">
          <h3 style={{ textAlign: 'center', marginBottom: '3rem', color: '#00D4FF', fontFamily: 'Orbitron, sans-serif', letterSpacing: '4px' }}>
            CERTIFICATIONS &amp; CONTINUOUS LEARNING
          </h3>
          <div className="row g-4 justify-content-center" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {[
              { title: 'Six Sigma Green Belt', org: 'Ford', year: '2023', icon: '🏆' },
              { title: 'Feature/Platform Systems Engineering', org: 'Ford', year: '2023', icon: '🔧' },
              { title: 'VECTOR CAPL Initialization', org: 'Vector', year: '2024', icon: '📟' },
              { title: 'AUTOSAR Architecture', org: 'Udemy', year: '2025', icon: '🛠️' },
              { title: 'Machine Learning A-Z', org: 'Udemy', year: '2025', icon: '🤖' },
              { title: 'Google Project Management', org: 'Coursera', year: '2026', icon: '📋' },
              { title: 'EF SET English C1', org: '', year: '2026', icon: '🌍' }
            ].map((cert, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div style={{
                  background: '#161B22',
                  border: '1px solid rgba(0,212,255,0.35)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  height: '100%',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#00D4FF'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.35)'}
                >
                  <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{cert.icon}</div>
                  <h5 style={{ color: '#e6edf3', marginBottom: '0.4rem' }}>{cert.title}</h5>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>
                    {cert.org} {cert.year && `· ${cert.year}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        <p className="text-center mt-5 text-muted">
          Currently based in México • Open to relocation for Global Senior Roles & MSc opportunities
        </p>

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

      {/* RICHER MODAL */}
      {modalCard && (
        <div className="modal-backdrop show" onClick={() => setModalCard(null)}>
          <div className="modal-content" onClick={e => e.stopImmediatePropagation()} style={{ maxWidth: '920px' }}>
            <div className="d-flex justify-content-end p-3 border-bottom">
              <button className="btn-close" onClick={() => setModalCard(null)}></button>
            </div>
            
            <div className="p-4">
              {modalCard.img && (
                <img 
                  src={modalCard.img} 
                  alt={modalCard.title} 
                  style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem' }} 
                />
              )}
              
              <h2 className="display-6 fw-bold mb-3">{modalCard.title}</h2>
              
              <div className="row g-4 mb-5">
                <div className="col-md-6">
                  <div className="kpi-item"><span><AnimatedCounter end={modalCard.kpi1.value} suffix={modalCard.kpi1.suffix} /></span><label>{modalCard.kpi1.label}</label></div>
                </div>
                <div className="col-md-6">
                  <div className="kpi-item"><span><AnimatedCounter end={modalCard.kpi2.value} suffix={modalCard.kpi2.suffix || ''} /></span><label>{modalCard.kpi2.label}</label></div>
                </div>
              </div>
              
              <p className="lead mb-4">{modalCard.desc}</p>
              
              {modalCard.tags && (
                <div className="tag-row d-flex flex-wrap gap-2 mb-4">
                  {modalCard.tags.map(t => <span className="method-tag" key={t}>{t}</span>)}
                </div>
              )}
              
              <div className="text-center mt-4">
                <Link 
                  to="/projects" 
                  className="btn-hero-primary"
                  onClick={() => setModalCard(null)}
                >
                  Read Full Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="scroll-to-top"
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '2rem',          // changed from right to left
          background: '#6c8ec4',
          border: 'none',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          fontSize: '1.5rem',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          zIndex: 99
        }}
      >
        ↑
      </button>
        {/* Centered Floating Download Resume */}
        <a 
          href={`${import.meta.env.BASE_URL}assets/Curriculum Vitae_Id2026.pdf`} 
          download="Angel-Vargas-CV-2026.pdf"
          style={{
            position: 'fixed',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10006,
            background: '#3B82F6',
            color: 'white',
            padding: '14px 28px',
            borderRadius: '9999px',
            fontSize: '1rem',
            fontWeight: 600,
            boxShadow: '0 12px 30px rgba(59, 130, 246, 0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            whiteSpace: 'nowrap'
          }}
        >
          <i className="bi bi-download"></i> Download Resume
        </a>
    </main>
  )
}

/* ── IMPROVED MOBILE-FRIENDLY TIMELINE CARD ── */
/* ── PREMIUM TIMELINE CARD ── */
function TimelineCard({ ev }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`timeline-event timeline-event-${ev.side}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onClick={() => setOpen(!open)}
      style={{ cursor: 'pointer' }}
    >
      <div 
        className={`timeline-bubble timeline-bubble-${ev.side === 'left' ? 'right' : 'left'}`} 
        style={{ 
          borderColor: '#3B82F6',
          background: 'rgba(22, 27, 34, 0.95)',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.35)',
          borderWidth: '2px'
        }}
      >
        <div className="timeline-dates" style={{ color: '#94a3b8' }}>{ev.dates}</div>
        <div className="timeline-location" style={{ color: '#cbd5e1' }}>{ev.location}</div>
        <div className="timeline-year-badge" style={{ 
          background: '#3B82F6', 
          color: 'white', 
          fontWeight: 700,
          boxShadow: '0 0 12px rgba(59, 130, 246, 0.6)'
        }}>
          {ev.year}
        </div>
      </div>

      <motion.div 
        className="timeline-content card"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{
          borderRadius: '20px',
          border: '1px solid rgba(59, 130, 246, 0.5)',
          background: '#161B22',
          overflow: 'hidden',
          boxShadow: '0 15px 35px rgba(0,0,0,0.5)'
        }}
      >
        <div className="card-body p-5">
          <h3 style={{ color: '#3B82F6', marginBottom: '0.5rem', fontFamily: 'Lora, serif' }}>{ev.title}</h3>
          <p style={{ color: '#60a5fa', fontWeight: 600, marginBottom: '1.2rem' }}>{ev.company}</p>
          <p style={{ color: '#cbd5e1', lineHeight: 1.65 }}>{ev.summary}</p>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            style={{ overflow: 'hidden' }}
          >
            <ul style={{ color: '#e6edf3', paddingLeft: '1.3rem', margin: '1.4rem 0' }}>
              {ev.bullets.map((b, i) => (
                <li key={i} style={{ marginBottom: '0.9rem', position: 'relative' }}>
                  <span style={{ color: '#3B82F6', position: 'absolute', left: '-1.35rem', fontSize: '1.1rem' }}>▸</span> 
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <div style={{ 
            textAlign: 'right', 
            color: open ? '#60a5fa' : '#3B82F6', 
            fontSize: '0.95rem', 
            fontWeight: 600,
            cursor: 'pointer',
            userSelect: 'none'
          }}>
            {open ? '− Hide details' : '+ Show technical details'}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}