import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "Diagnostics & Robustness",
    icon: "bi-bug",
    skills: [
      { name: "ECU Diagnostics Design", tags: ["UDS/ISO 14229", "ODX", "CANalyzer", "Python Automation", "AI Agents"] },
      { name: "UDS / ODX Standards", tags: ["DTC Methodology", "Noisy DTC Reduction", "Gap Analysis"] },
      { name: "DFMEA → Diagnostics Mapping", tags: ["Requirements Traceability", "150+ Reqs Authored"] },
    ]
  },
  {
    category: "Systems & Architecture",
    icon: "bi-diagram-3",
    skills: [
      { name: "MBSE & Requirements Engineering", tags: ["700+ Requirements", "V-Model", "JAMA/MagicDraw"] },
      { name: "Vehicle Network (CAN/LIN)", tags: ["Feature Integration", "ECU Architecture"] },
      { name: "Global Launches & Traceability", tags: ["Cross-Functional Alignment", "US/MX Coordination"] },
    ]
  },
  {
    category: "Quality & Leadership",
    icon: "bi-trophy",
    skills: [
      { name: "Cross-Functional Leadership", tags: ["Six Sigma Green Belt", "Warranty Reduction", "Process Optimization"] },
      { name: "NVH & Environmental Validation", tags: ["Thermal Chambers", "Anechoic Testing", "Durability Testing"] },
      { name: "Cross-functional Mentorship", tags: ["Engineers Onboarded and Trained", "Quality Mindset Campaigns"] },
    ]
  }
];

export default function SkillStack() {
  return (
    <div className="row g-4">
      {skillGroups.map((group, idx) => (
        <motion.div 
          key={idx} 
          className="col-lg-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <div 
            className="glass-showcase-card h-100 p-5" 
            style={{ 
              borderRadius: '16px',
              background: '#10141C', 
              border: '1px solid rgba(0,212,255,0.20)',
              color: '#E8EDF5'
            }}
          >
            <div className="d-flex align-items-center gap-3 mb-4">
              <i className={`bi ${group.icon} fs-3`} style={{ color: '#00D4FF' }}></i>
              <h3 className="h5 mb-0 fw-bold" style={{ fontFamily: 'Lora, serif', fontWeight: 500, color: '#EAE8E2', letterSpacing: 0 }}>{group.category}</h3>
            </div>
            
            {group.skills.map((skill, i) => (
              <div key={i} className="mb-4">
                <div style={{ fontSize: '0.95rem', fontWeight: 500, marginBottom: '0.75rem', color: '#C8D4DC' }}>{skill.name}</div>
                <div className="d-flex flex-wrap gap-2">
                  {skill.tags.map((tag, j) => (
                    <span 
                      key={j} 
                      className="px-3 py-1 rounded"
                      style={{
                        background: 'rgba(0,212,255,0.08)',
                        color: '#00D4FF',
                        fontFamily: 'JetBrains Mono, monospace',
                        border: '1px solid rgba(0,212,255,0.22)',
                        fontSize: '0.76rem',
                        letterSpacing: '0.3px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}