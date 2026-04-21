import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  const skills = ['Diagnostics Design', 'Systems Integration', 'Requirements Engineering', 'ECU Architecture', 'NVH Analysis', 'DFMEA', 'Traceability', 'Global Launch', 'Mentorship', 'Six Sigma']

  return (
    <section 
      id="hero" 
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${import.meta.env.BASE_URL}images/landscape-hero.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '0',           
        marginTop: '-80px'
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
              Automotive Systems Engineer
            </motion.span>

            <motion.h1
              className="hero-name"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', lineHeight: 1.05 }}
            >
              Angel<br /><em style={{ color: '#6c8ec4' }}>Vargas.</em>
            </motion.h1>

            <motion.p
              className="hero-lead"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ fontSize: '1.35rem', maxWidth: '620px' }}
            >
              Building diagnostic systems that matter — from legacy documentation to global launch.
            </motion.p>

            <motion.div
              className="hero-cta-group"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link to="/projects" className="btn-hero-primary">Explore My Work</Link>
              <a href="#contact" className="btn-hero-secondary">Get in Touch</a>
            </motion.div>
          </div>

          {/* Scrolling skill marquee - polished */}
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
                  gap: '3rem',
                  animation: 'marquee 30s linear infinite',
                  padding: '0.75rem 0'
                }}
                onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
                onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
              >
                {skills.map(skill => (
                  <span key={skill} style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.85)',
                    textShadow: '0 0 15px rgba(108,142,196,0.4)',
                  }}>
                    {skill}
                  </span>
                ))}
                {/* Duplicate for seamless loop */}
                {skills.map(skill => (
                  <span key={skill + '2'} style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.85)',
                    textShadow: '0 0 15px rgba(108,142,196,0.4)',
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