import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="row align-items-center gy-5">

          <div className="col-md-7">
            <motion.span
              className="section-eyebrow"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Automotive Systems Engineer
            </motion.span>

            <motion.h1
              className="hero-name"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
            >
              Angel<br /><em>Vargas.</em>
            </motion.h1>

            <motion.p
              className="hero-role"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Diagnostics Design · Systems Integration · Global OEM
            </motion.p>

            <motion.p
              className="hero-lead"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              Building diagnostic systems that matter — from legacy documentation
              to global launch, from requirements to real-world impact. Six years,
              three OEMs, one clear focus: engineering that delivers.
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

            <motion.div
              className="hero-badges"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
            >
              <span className="hero-badge">
                <i className="bi bi-speedometer2"></i>
                6+ Years Automotive
              </span>
              <span className="hero-badge">
                <i className="bi bi-award"></i>
                Six Sigma Green Belt
              </span>
              <span className="hero-badge">
                <i className="bi bi-globe2"></i>
                Global Program Lead
              </span>
            </motion.div>
          </div>

          <motion.div
            className="col-md-5"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="hero-visual rounded-4 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/Mustang-Wall.jpg`}
                alt="Automotive Engineering"
                className="hero-tech-diagram"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}