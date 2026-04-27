import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "Diagnostics & Robustness",
    icon: "bi-bug",
    skills: [
      { name: "ECU Diagnostics Design", tags: ["UDS/ISO 14229", "ODX", "CANalyzer", "Python Automation"] },
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
      { name: "Six Sigma Green Belt", tags: ["Warranty Reduction", "Process Optimization"] },
      { name: "NVH & Environmental Validation", tags: ["Thermal Chambers", "Anechoic Testing"] },
      { name: "Cross-functional Mentorship", tags: ["6 Engineers Onboarded", "Quality Mindset"] },
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
              background: '#161B22', 
              border: '1px solid rgba(59, 130, 246, 0.25)',
              color: '#e6edf3'
            }}
          >
            <div className="d-flex align-items-center gap-3 mb-4">
              <i className={`bi ${group.icon} fs-3`} style={{ color: '#3B82F6' }}></i>
              <h3 className="h5 mb-0 fw-bold">{group.category}</h3>
            </div>
            
            {group.skills.map((skill, i) => (
              <div key={i} className="mb-5">
                <div className="fw-semibold mb-3" style={{ fontSize: '1.05rem' }}>{skill.name}</div>
                <div className="d-flex flex-wrap gap-2">
                  {skill.tags.map((tag, j) => (
                    <span 
                      key={j} 
                      className="px-3 py-1 rounded text-sm"
                      style={{
                        background: 'rgba(59, 130, 246, 0.12)',
                        color: '#60a5fa',
                        fontFamily: 'JetBrains Mono, monospace',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        fontSize: '0.82rem'
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