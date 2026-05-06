import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const deepDives = {
  "power-running-boards": {
    id: "power-running-boards",
    title: "Power Running Boards",
    program: "2025 Lincoln Navigator & Ford Expedition Global Launch",
    challenge: "Identified an opportunity to refine the NVH profile during the deploy/retract cycle, proactively securing the premium feel and optimizing warranty profiles on high-volume programs.",
    systemsApproach: `
• Owned full systems engineering scope from requirements to validation
• Designed and implemented the first-ever NVH-specific lab calibration protocol
• Integrated thermal, acoustic, and durability testing across Ford’s anechoic and thermal chambers
• Created traceable requirements linking DFMEA → Calibration → Validation
    `,
    leadership: "Coordinated cross-functional alignment between Mexico-based core team and US plant teams during launch rotations. Mentored junior engineers while maintaining single-point accountability for the feature.",
    results: [
      { metric: "36%", label: "Noise Improvement" },
      { metric: "~$2M", label: "Hardware Cost Saved per Model Year" },
      { metric: "~$1.4M", label: "Warranty Cost Reduction (23MY)" },
      { metric: "98%", label: "First-Time-Through Build Quality" },
      { metric: "0", label: "Open Critical Issues at Launch" },
      { metric: "12", label: "Innovation Disclosures Filed" }
    ],
    quote: "The challenge wasn’t just the engineering — it was holding together the full system picture when architecture, software, ECU, and supplier teams each owned a piece.",
    tags: ["NVH Analysis", "Calibration Design", "Requirements Engineering", "DFMEA", "Supplier Integration", "Global Launch"],
    image: `${import.meta.env.BASE_URL}images/Expedition-Wall.jpg`
  },

  "e2e-ecu-diagnostics": {
    id: "e2e-ecu-diagnostics",
    title: "E2E ECU Diagnostics Robustness",
    program: "New Diagnostics Team Operating Standard – Ford GTBC",
    challenge: "An opportunity to establish a unified diagnostic framework across multiple complex features (TPMS, Key Fob, VIN Authentication) to mitigate high-warranty Noisy DTCs.",
    systemsApproach: `
• Executed 5-phase program: System Audit → Gap Analysis → Requirements Creation → Test Case Definition → Validation Planning
• Built 3-tier diagnostic reasoning taxonomy (Detection Control → Fault Detectability → Diagnostics Requirement)
• Authored 150+ requirements directly traceable to DFMEAs and ECU specifications
    `,
    leadership: "Created the new operating standard for the freshly formed diagnostics team. Bridged Architecture, Software, and Module D&R teams to close coverage gaps.",
    results: [
      { metric: "150+", label: "Requirements Authored" },
      { metric: "23+", label: "Noisy DTC Requirements" },
      { metric: "12", label: "Legacy Gaps Closed" },
      { metric: "New", label: "Team Operating Standard" }
    ],
    quote: "68 requirements from a single function. The power of this framework is what it scales.",
    tags: ["Diagnostics Architecture", "DTC Methodology", "Requirements Engineering", "DFMEA Integration", "Gap Analysis"],
    image: `${import.meta.env.BASE_URL}images/BMW2021.jpg`
  },

  "bmw-quality-system": {
    id: "bmw-quality-system",
    title: "Quality Management System Digital Transformation",
    program: "BMW Group – Plant San Luis Potosí",
    challenge: "Transitioning legacy quality processes into a connected digital ecosystem to proactively ensure compliance during G42 Conformity-of-Production and ISO 9001 audits.",
    systemsApproach: `
• Designed and deployed integrated Power BI dashboards + Power Apps workflow suite
• Enabled real-time issue tracking, escalation, and containment visibility
• Combined technical solution with cultural change ("Quality Mindset" campaign)
    `,
    leadership: "Trained 120+ process leaders. Shifted the organization from reactive to proactive quality culture.",
    results: [
      { metric: "30%", label: "Issue Closure Time Reduced" },
      { metric: "25%", label: "Proactive Defect Containment Increase" },
      { metric: "120+", label: "Process Leaders Trained" },
      { metric: "0", label: "Major Audit Findings" }
    ],
    quote: "The hardest part wasn’t the dashboards — it was the people.",
    tags: ["Power BI", "Power Apps", "ISO 9001", "IATF 16949", "Change Management"],
    image: `${import.meta.env.BASE_URL}images/BMW3.jpg`
  }
};

export default function ProjectDeepDive() {
  const { projectId } = useParams();
  const project = deepDives[projectId];

  if (!project) {
    return (
      <div className="container py-5 text-center">
        <h2>Project not found</h2>
        <Link to="/projects" className="btn-hero-primary mt-4">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <main style={{ background: '#080808', minHeight: '100vh', color: '#EAE8E2' }}>
      <div className="container py-5">
        
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="d-flex align-items-center gap-2 text-decoration-none mb-5" 
          style={{ color: '#4A7A5C', fontSize: '1.1rem' }}
        >
          <i className="bi bi-arrow-left fs-4"></i> Back to All Projects
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Image */}
          <img 
            src={project.image} 
            alt={project.title}
            style={{ 
              width: '100%', 
              height: '420px', 
              objectFit: 'cover', 
              borderRadius: '20px', 
              marginBottom: '3rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
            }}
          />

          <h1 style={{ 
            fontFamily: 'Lora, serif', 
            fontSize: 'clamp(2.8rem, 6.5vw, 4.8rem)', 
            lineHeight: 1.05, 
            marginBottom: '0.8rem',
            color: '#ffffff'
          }}>
            {project.title}
          </h1>
          
          <p style={{ 
            color: '#4A7A5C', 
            marginBottom: '3.5rem',
            fontWeight: 500,
            fontFamily: 'Michroma, monospace',
            letterSpacing: '2px',
            fontSize: '1rem',
            textTransform: 'uppercase'
          }}>
            {project.program}
          </p>

          {/* THE CHALLENGE */}
          <section style={{ marginBottom: '4.5rem' }}>
            <h2 style={{ color: '#C6D840', fontFamily: 'Michroma, monospace', letterSpacing: '2px', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.6rem' }}>
              The Challenge
            </h2>
            <div style={{ 
              background: '#0E100F', 
              padding: '2.75rem', 
              borderRadius: '16px', 
              borderLeft: '3px solid rgba(44,110,68,0.80)' 
            }}>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>{project.challenge}</p>
            </div>
          </section>

          {/* SYSTEMS APPROACH */}
          <section style={{ marginBottom: '4.5rem' }}>
            <h2 style={{ color: '#C6D840', fontFamily: 'Michroma, monospace', letterSpacing: '2px', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.6rem' }}>
              The Systems Approach
            </h2>
            <div style={{ 
              background: '#0E100F', 
              padding: '2.75rem', 
              borderRadius: '16px' 
            }}>
              <pre style={{ 
                whiteSpace: 'pre-wrap', 
                fontFamily: 'JetBrains Mono, monospace', 
                fontSize: '0.97rem', 
                color: '#cbd5e1',
                lineHeight: 1.85,
                background: 'transparent',
                border: 'none',
                padding: 0
              }}>
                {project.systemsApproach}
              </pre>
            </div>
          </section>

          {/* COLLABORATION & LEADERSHIP */}
          <section style={{ marginBottom: '4.5rem' }}>

            {/* Contextual image for PRB — shows the vehicle platform */}
            {project.id === 'power-running-boards' && (
              <div style={{ marginBottom: '3rem' }}>
                <img
                  src={`${import.meta.env.BASE_URL}images/expedition-detail.jpg`}
                  alt="Ford Expedition — Feature Platform"
                  style={{
                    width: '100%',
                    height: '260px',
                    objectFit: 'cover',
                    objectPosition: 'center 40%',
                    borderRadius: '16px',
                    border: '1px solid rgba(28,72,46,0.40)',
                    opacity: 0.88,
                    display: 'block'
                  }}
                />
                <p style={{
                  fontSize: '0.68rem',
                  color: '#4A7A5C',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginTop: '0.6rem',
                  fontFamily: 'Michroma, monospace'
                }}>
                  2025 Ford Expedition — Feature Platform
                </p>
              </div>
            )}
            <h2 style={{ color: '#C6D840', fontFamily: 'Michroma, monospace', letterSpacing: '2px', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.6rem' }}>
              Collaboration & Leadership
            </h2>
            <div style={{ 
              background: '#0E100F', 
              padding: '2.75rem', 
              borderRadius: '16px' 
            }}>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>{project.leadership}</p>
            </div>
          </section>

          {/* SUCCESS CARD */}
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ color: '#C6D840', fontFamily: 'Michroma, monospace', letterSpacing: '2px', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '2rem' }}>
              The Final Result
            </h2>
            
            <div style={{ 
              background: 'linear-gradient(135deg, #0E100F 0%, #080808 100%)', 
              padding: '3.5rem 3rem', 
              borderRadius: '20px',
              border: '1px solid rgba(28,72,46,0.60)'
            }}>
              <div className="row g-5">
                {project.results.map((r, i) => (
                  <div key={i} className="col-md-4 text-center">
                    <div style={{ 
                      fontSize: '3rem', 
                      fontWeight: 900, 
                      color: '#FACC15', 
                      lineHeight: 1,
                      marginBottom: '0.4rem'
                    }}>
                      {r.metric}
                    </div>
                    <div style={{ 
                      color: '#94a3b8', 
                      fontSize: '1.05rem',
                      fontWeight: 500
                    }}>
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              {project.quote && (
                <blockquote style={{ 
                  marginTop: '3.5rem', 
                  fontStyle: 'italic', 
                  color: '#e6edf3', 
                  fontSize: '1.2rem',
                  borderLeft: '3px solid rgba(44,110,68,0.80)',
                  paddingLeft: '2rem',
                  lineHeight: 1.7
                }}>
                  “{project.quote}”
                </blockquote>
              )}
            </div>
          </section>

          {/* Back Button */}
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <Link 
              to="/projects" 
              className="btn-hero-primary px-5 py-3 fs-5"
            >
              ← Back to All Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}