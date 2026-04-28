import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const projects = [
  { 
    id: "power-running-boards",
    title: "Power Running Boards", 
    kpi: "36% Noise ↓ + $2M Saved", 
    img: `${import.meta.env.BASE_URL}images/Expedition-Wall.jpg`, 
    color: "#3B82F6",
    impact: [
      { point: "Core Challenge", desc: "Excessive NVH in deploy/retract cycle" },
      { point: "Action", desc: "Designed first-ever NVH lab calibration protocol" },
      { point: "Result", desc: "36% noise reduction + ~$2M hardware savings per MY" }
    ]
  },
  { 
    id: "e2e-ecu-diagnostics",
    title: "E2E ECU Diagnostics", 
    kpi: "150+ Requirements • New Standard", 
    img: `${import.meta.env.BASE_URL}images/BMW2021.jpg`, 
    color: "#60a5fa",
    impact: [
      { point: "Core Challenge", desc: "High-warranty Noisy DTCs with no standard" },
      { point: "Action", desc: "Built 3-tier E2E diagnostic reasoning framework" },
      { point: "Result", desc: "150+ requirements + new team operating standard" }
    ]
  },
  { 
    id: "bmw-quality-system",
    title: "BMW Quality System", 
    kpi: "30% Faster Closure • Zero Findings", 
    img: `${import.meta.env.BASE_URL}images/BMW3.jpg`, 
    color: "#3B82F6",
    impact: [
      { point: "Core Challenge", desc: "Manual, siloed quality processes" },
      { point: "Action", desc: "Deployed Power BI + Power Apps QMS suite" },
      { point: "Result", desc: "30% faster closure + zero major audit findings" }
    ]
  },
];

export default function ProjectPicker() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="project-picker py-5">
      <div className="text-center mb-5">
        <span className="section-eyebrow">Selected Work</span>
        <h2 style={{ fontFamily: 'Lora, serif' }}>Pick a Project to Explore</h2>
        <p className="text-muted">Hover or tap any card for technical impact • Click to see full deep dive</p>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {projects.map((proj, i) => (
          <Link 
            key={proj.id}
            to={`/projects/${proj.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <motion.div
              className="glass-showcase-card bubble-card position-relative overflow-hidden"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ delay: i * 0.1 }}
              onHoverStart={() => setHovered(proj.id)}
              onHoverEnd={() => setHovered(null)}
              style={{
                width: '400px',
                cursor: 'pointer',
                border: `1px solid rgba(59, 130, 246, 0.3)`,
                background: 'var(--bg-surface)',
                padding: 0,
                color: 'inherit',
                minHeight: '300px',
              }}
            >
              {/* Image */}
              <div style={{ 
                height: '165px', 
                background: `url(${proj.img}) center/cover no-repeat`, 
                position: 'relative' 
              }}>
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: hovered === proj.id 
                    ? 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.75))' 
                    : 'transparent',
                  transition: 'all 0.4s ease' 
                }} />
              </div>

              {/* Default Content */}
              <div className="p-4 pt-3 text-center" style={{ paddingBottom: '1.25rem' }}>
                <h4 className="fw-bold mb-2" style={{ 
                  color: 'var(--text-main)', 
                  fontSize: '1.22rem', 
                  lineHeight: 1.2,
                  fontFamily: 'Lora, serif'
                }}>
                  {proj.title}
                </h4>
                <p className="small mb-0" style={{ 
                  color: '#3B82F6', 
                  fontWeight: 600, 
                  fontSize: '0.95rem' 
                }}>
                  {proj.kpi}
                </p>
              </div>

              {/* Glassmorphism Technical Impact Overlay */}
              <motion.div
                className="position-absolute d-flex flex-column justify-content-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered === proj.id ? 1 : 0 }}
                style={{
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'rgba(13,15,20,0.92)',
                  backdropFilter: 'blur(14px)',
                  border: '1px solid rgba(59, 130, 246, 0.4)',
                  zIndex: 2,
                  borderRadius: 'inherit',
                }}
              >
                <div className="text-center mb-3">
                  <small style={{ 
                    color: '#3B82F6', 
                    fontWeight: 700, 
                    letterSpacing: '1.5px',
                    fontSize: '0.8rem'
                  }}>
                    TECHNICAL IMPACT
                  </small>
                </div>
                {proj.impact.map((item, idx) => (
                  <div key={idx} className="mb-3" style={{ fontSize: '0.9rem' }}>
                    <div style={{ 
                      color: '#3B82F6', 
                      fontWeight: 600, 
                      fontSize: '0.82rem' 
                    }}>
                      {idx + 1}. {item.point}
                    </div>
                    <div style={{ color: '#cbd5e1', lineHeight: 1.45 }}>{item.desc}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}