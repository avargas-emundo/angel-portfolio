import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  const skills = [
  'Diagnostics Design', 'ECU Architecture', 'Requirements Engineering',
  'DFMEA', 'Systems Integration', 'UDS / ISO 14229', 'Traceability',
  'NVH Analysis', 'Global Launch', 'Six Sigma', 'Calibration Design',
  'Cross-functional Leadership'
]

  return (
    <section 
      id="hero"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${import.meta.env.BASE_URL}images/landscape-hero.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        paddingTop: '80px',     // restored proper top space
        marginTop: '0',
        backgroundColor: 'var(--bg-page)',
        display: 'flex', 
        alignItems: 'center'
      }}
    >
      {/* Dark overlay for readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(13,15,20,0.65) 0%, rgba(13,15,20,0.85) 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-items-center gy-5">

          <div className="col-md-7">
            <motion.span
              className="section-eyebrow"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
            </motion.span>

            <motion.span className="section-eyebrow">Automotive Systems & Diagnostics Engineer</motion.span>

            <motion.h1
              className="hero-name"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              style={{ fontSize: 'clamp(3.2rem, 8vw, 6.2rem)', lineHeight: 1.05 }}
            >
              Angel Vargas
            </motion.h1>

            <motion.p
              className="hero-lead"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ fontSize: '1.35rem', maxWidth: '620px' }}
            >
              Architecting robust ECU diagnostics for global platforms. Delivering measurable cost savings and system resilience.
            </motion.p>

            {/* Impact Ribbon */}
            <motion.div 
              className="impact-ribbon d-flex flex-wrap gap-4 justify-content-start mt-4 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ 
                background: 'rgba(16,18,24,0.8)', 
                border: '1px solid rgba(250,204,21,0.2)', 
                padding: '1rem 1.5rem', 
                borderRadius: '8px' 
              }}
            >
              {[
                { value: '$3.4M', label: 'Warranty Cost Reduced' },
                { value: '12', label: 'Innovation Disclosures' },
                { value: '700+', label: 'Requirements Authored' },
                { value: '3', label: 'Global OEM Programs' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="caution-yellow" style={{ fontSize: '1.45rem', fontWeight: 700, lineHeight: 1 }}>{stat.value}</div>
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
              <a href={`${import.meta.env.BASE_URL}assets/Curriculum Vitae_Id2026.pdf`} 
                className="btn btn-hero-secondary px-4 py-3 fw-bold" 
                download>
                <i className="bi bi-file-earmark-pdf me-2"></i>Download CV
              </a>
            </motion.div>
          </div>

          {/* Improved Mobile Marquee */}
          <div className="col-12 mt-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
            >
              <div 
                style={{
                  display: 'inline-flex',
                  gap: '2.5rem',
                  animation: 'marquee 25s linear infinite',
                  padding: '0.75rem 0'
                }}
                onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
                onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
              >
                {skills.map(skill => (
                  <span key={skill} style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.9)',
                  }}>
                    {skill}
                  </span>
                ))}
                {skills.map(skill => (
                  <span key={skill + '2'} style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.9)',
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}