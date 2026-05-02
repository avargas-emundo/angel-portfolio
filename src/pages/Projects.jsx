import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: 'easeOut', delay }
});

const cases = [
  {
    num: '01',
    id: 'power-running-boards',
    eyebrow: 'Ford Motor Company · 2021–2025',
    title: <>Feature Ownership <span style={{color:'#C6D840',fontWeight:600}}>Design to Validation</span></>,
    subtitle: 'Feature Systems Engineer — Full Ownership',
    lead: <>Took <span style={{color:'#C6D840',fontWeight:600}}>full ownership</span> of a feature at the start of its systems engineering journey. Delivered a complete design to the 2025 Navigator & Expedition global launch — including the <span style={{color:'#C6D840',fontWeight:600}}>first-ever calibration framework</span> for the feature.</>,
    img: `${import.meta.env.BASE_URL}images/Expedition-Wall.jpg`,
    imgCaption: '2025 Lincoln Navigator / Ford Expedition — Global Launch Program',
    tags: ['Requirements Engineering','Calibration Design','NVH Analysis','Thermal Testing','DFMEA','Supplier Integration'],
    kpis: [
      { value: 36, label: 'Noise Reduction', suffix: '%' },
      { value: 1.4, label: 'Warranty Savings (23MY)', suffix: 'M' },
      { value: 2, label: 'Hardware Saved / MY', suffix: 'M' },
      { value: 700, label: 'Requirements Authored', suffix: '+' },
      { value: 98, label: 'FTT Build Quality', suffix: '%' },
      { value: 0, label: 'Open Critical Issues at Launch' }
    ],
    story: [
      { label: 'The Situation', text: 'Joined a newly formed Feature Systems Engineering team at an early stage of maturity — requirements were being established, documentation was nascent, and no calibration standard had yet been defined for the feature.' },
      { label: 'The Ownership', text: 'Took full systems engineering ownership: requirements authoring, calibration framework definition, testing execution, and supplier alignment — roles that historically spanned multiple engineers, now consolidated into one accountable point of contact.' },
      { label: 'The Outcome', text: 'Delivered all three features — PRB, OBS/SH, and AVS — to global launch with zero open critical issues. Filed 12 innovation disclosures. Mentored 6 engineers. Still the primary technical contact for the feature across organizational moves.' }
    ],
    methods: [
      { num: '01', title: 'Cycle Time', desc: 'Deploy/retract timing per operational context and user expectation.' },
      { num: '02', title: 'Obstacle Detection', desc: 'Sensitivity thresholds calibrated for safety-critical obstruction response.' },
      { num: '03', title: 'NVH Profile', desc: 'Acoustic signature mapping — resulted in 36% noise reduction without performance trade-off.' },
      { num: '04', title: 'Stressability', desc: 'Structural and fatigue limits defined under repeated load and abuse conditions.' },
      { num: '05', title: 'Temperature', desc: 'Dual calibration: −40°C cold and +50°C hot profiles, validated in Ford\'s anechoic and thermal chambers.' }
    ],
    quote: '"The challenge wasn\'t just the engineering — it was holding together the full system picture when architecture, software, ECU, and supplier teams each owned a piece. The calibration work was mine alone because no one else had defined what that even meant for this feature."'
  },
  {
    num: '02',
    id: 'e2e-ecu-diagnostics',
    eyebrow: 'Ford Motor Company · July 2025–Present',
    title: <>E2E ECU  <span style={{color:'#C6D840',fontWeight:600}}>Diagnostics Robustness</span></>,
    subtitle: 'Diagnostics Design Engineer — Standard Creation',
    lead: <>Built a diagnostic reasoning framework <span style={{color:'#C6D840',fontWeight:600}}>from first principles</span> — not to prevent failures, but to ensure every failure mode can be detected, flagged, and resolved with precision. Now the <span style={{color:'#C6D840',fontWeight:600}}>operating standard</span> for a newly established team.</>,
    img: `${import.meta.env.BASE_URL}images/BMW2021.jpg`,
    imgCaption: 'E2E Diagnostics Robustness — Active Program',
    tags: ['Diagnostics Architecture','Gap Analysis','DFMEA Integration','DTC Methodology','Requirements Engineering','Noisy DTC Investigation'],
    kpis: [
      { value: 150, label: 'Requirements Authored', suffix: '+' },
      { value: 68, label: 'Reqs from 1 Feature Function' },
      { value: 12, label: 'Legacy Gaps Identified' },
      { value: 5, label: 'Program Phases' },
      { value: 23, label: 'Noisy DTC Requirements', suffix: '+' },
      { value: 4, label: 'Features in Scope (Pilot)' }
    ],
    story: [
      { label: 'The Problem', text: 'A newly created diagnostics team with no established standard. Features had DFMEAs accounting for failures — but no structured framework defining how to detect, flag, and diagnose those failures from a diagnostics engineering standpoint.' },
      { label: 'The Approach', text: 'Executed a 5-phase program: system audit, gap analysis across legacy documentation, requirements creation, test case definition, and validation planning. Treated existing DFMEAs as the input — diagnostics requirements as the structured output.' },
      { label: 'The Standard', text: 'The 3-tier taxonomy is now the working methodology for the team. What took months to develop for PRB\'s obstacle detection function — 68 requirements closing 12 gaps — becomes the template for every feature that follows.' }
    ],
    taxonomy: [
      { tier: 'Tier I', title: 'Detection Control', desc: 'Defines the technical conditions under which a failure can occur — the physics and system-state boundaries that make a fault mode active. Sourced directly from feature DFMEA and ECU specifications.' },
      { tier: 'Tier II', title: 'Fault Detectability', desc: 'Defines how the vehicle perceives and flags the failure — what the driver or system experiences, and which DTC must be triggered. Translates engineering failure modes into observable vehicle behavior.' },
      { tier: 'Tier III', title: 'Diagnostics Requirement', desc: 'The engineer- and dealer-facing output: the full diagnostic path combining Tier I + II — specifying which DID to read, which signal to capture, and what the DTC confirms.' }
    ],
    quote: '"68 requirements from a single function of a single feature. The power of this framework isn\'t what it fixed — it\'s what it scales. Every feature in scope will generate its own set, and every gap it closes becomes a permanent improvement to the standard."'
  },
  {
    num: '03',
    id: 'bmw-quality-system',
    eyebrow: 'BMW Group · July 2020–June 2021',
    title: <>Quality <span style={{color:'#C6D840',fontWeight:600}}>Management System</span></>,
    subtitle: 'Quality Management Engineer — Plant San Luis Potosí',
    lead: <>Deployed a <span style={{color:'#C6D840',fontWeight:600}}>digital quality management infrastructure</span> at a global BMW manufacturing plant — transforming manual processes into a connected Power BI/Power Apps ecosystem while achieving <span style={{color:'#C6D840',fontWeight:600}}>zero-finding</span> ISO 9001 compliance.</>,
    img: `${import.meta.env.BASE_URL}images/BMW3.jpg`,
    imgCaption: 'BMW Group — Plant San Luis Potosí, México',
    tags: ['Power BI','Power Apps','ISO 9001','IATF 16949','Change Management','Process Design'],
    kpis: [
      { value: 30, label: 'Issue Closure Time Reduced', suffix: '%' },
      { value: 25, label: 'Proactive Defect Containment ↑', suffix: '%' },
      { value: 120, label: 'Process Leaders Trained', suffix: '+' },
      { value: 0, label: 'Major Audit Findings' },
      { value: 2, label: 'Global Audits Passed' }
    ],
    story: [
      { label: 'The Context', text: 'A global BMW manufacturing plant running quality management on largely manual, siloed processes. Audit cycles were approaching and the Quality Management System needed both a digital transformation and a cultural one.' },
      { label: 'The Delivery', text: 'Designed and deployed an integrated Power BI dashboard and Power Apps workflow suite for the full QMS — enabling real-time issue tracking, escalation routing, and containment visibility across 120+ process leaders.' },
      { label: 'The Culture', text: 'Technical delivery alone wasn\'t enough. Launched a "Quality Mindset" campaign that trained 120+ process leads — shifting defect response from reactive to proactive, with a measurable 25% improvement in containment actions within 6 months.' }
    ],
    quote: '"The hardest part wasn\'t the dashboards — it was the people. Getting 120 process leaders to own quality data, not just report it, required a different kind of engineering: organizational."'
  }
];

const additionalAchievements = [
  {
    role: "Feature Systems Engineer - Ford",
    icon: "bi-graph-up",
    title: "Feature Usage & Failure-Mode Dashboards",
    impact: "Drove millions in cost savings",
    description: "Built dashboards analyzing in-use data and DFMEA modes that justified OBS/SH deletion on low-spec F-Series and reinforced PRB optimizations."
  },
  {
    role: "Feature Systems Engineer - Ford",
    icon: "bi-gear",
    title: "US Plant Rotations (DTP/KTP)",
    impact: "98%+ First-Time-Through build quality for Job #1",
    description: "Managed on-site launch support, triage, and supplier coordination across multiple U.S. plants."
  },
  {
    role: "Feature Systems Engineer - Ford",
    icon: "bi-people",
    title: "Mentored 6 Onboard Engineers",
    impact: "Successfully integrated into Systems Engineering & Validation",
    description: "Provided hands-on coaching in requirements engineering, validation methodology, and cross-functional collaboration."
  },
  {
    role: "Diagnostics Design Engineer - Ford",
    icon: "bi-lightbulb",
    title: "12 Innovation Disclosures & 1 Patent",
    impact: "Patent application approved and in prosecution",
    description: "Creative contributions in diagnostics robustness, enhanced data recording, and ECU troubleshooting."
  },
  {
    role: "Diagnostics Design Engineer - Ford",
    icon: "bi-shield-check",
    title: "Standardized E2E Diagnostics Framework",
    impact: "Operating standard for the new diagnostics team",
    description: "Developed 3-tier taxonomy with 150+ requirements from DFMEAs and ECU specs."
  },
  {
    role: "Diagnostics Design Engineer - Ford",
    icon: "bi-clock-history",
    title: "Enhanced Data Recording Strategies",
    impact: "Improving remote troubleshooting capability",
    description: "Designing next-gen methods for better field issue resolution and engineering diagnostics."
  },
  {
    role: "Quality Management Engineer - BMW",
    icon: "bi-bar-chart",
    title: "Power BI / Power Apps QMS Deployment",
    impact: "Reduced issue-closure time by 30%",
    description: "Replaced manual processes with a connected quality management suite across the plant."
  },
  {
    role: "Quality Management Engineer - BMW",
    icon: "bi-heart",
    title: "Quality Mindset Campaign",
    impact: "Trained 120+ process leaders • +25% proactive containment",
    description: "Led cultural transformation from reactive to proactive quality culture during G42 and ISO 9001 audits (zero major findings)."
  }
];

export default function Projects() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      color: '#e6edf3' 
    }}>
      <div className="container">
        <header style={{ padding: '6rem 0 4rem', borderBottom: '1px solid rgba(28,72,46,0.30)' }}>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
            style={{ 
              fontFamily: 'Barlow Condensed,sans-serif', 
              fontSize: '0.82rem', 
              fontWeight: 700, 
              letterSpacing: 4, 
              textTransform: 'uppercase', 
              color: '#C6D840', 
              marginBottom: '1rem' 
            }}
          >
            Engineering Case Studies
          </motion.p>
          
          <motion.h1 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{ 
              fontFamily: 'Michroma, sans-serif', 
              fontSize: 'clamp(2.8rem, 7vw, 5.2rem)', 
              fontWeight: 400, 
              lineHeight: 1.05, 
              color: '#EAE8E2', 
              textTransform: 'uppercase', 
              letterSpacing: 2 
            }}
          >
            The <span style={{ color: '#C6D840' }}>Work</span><br />Speaks.
          </motion.h1>
        </header>

        {/* Radar Chart */}
        <section style={{ margin: '4rem 0', padding: '3rem', background: 'rgba(14,16,15,0.80)', borderRadius: '20px', border: '1px solid rgba(28,72,46,0.30)' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#C6D840', fontFamily: 'Michroma, sans-serif', letterSpacing: 3, textTransform: 'uppercase' }}>
            Technical Proficiency
          </h3>
          <ResponsiveContainer width="100%" height={360}>
            <RadarChart data={[
              { skill: 'Requirements Engineering', value: 95 },
              { skill: 'Diagnostics Design', value: 92 },
              { skill: 'Cross-functional Leadership', value: 88 },
              { skill: 'NVH / Thermal Validation', value: 82 },
              { skill: 'Mentorship & Coaching', value: 90 },
              { skill: 'Problem Solving', value: 96 }
            ]}>
              <PolarGrid stroke="rgba(28,72,46,0.30)" />
              <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11, fill: '#A3B5A3' }} />
              <PolarRadiusAxis domain={[0, 100]} tick={{ fill: '#6B8A75' }} />
              <Radar dataKey="value" stroke="#C6D840" fill="#C6D840" fillOpacity={0.08} />
            </RadarChart>
          </ResponsiveContainer>
        </section>

        {/* Case Studies */}
        {cases.map((cs) => (
          <CaseStudy key={cs.num} cs={cs} />
        ))}
      </div>
    </main>
  );
}

function CaseStudy({ cs }) {
  const [activeTab, setActiveTab] = useState(0);
  const [modalAchievement, setModalAchievement] = useState(null);
  const s = { color: '#C5D5C5', fontSize: '0.95rem', lineHeight: 1.75, margin: 0 };

  const getRoleKey = (eyebrow) => {
    if (eyebrow.includes("2021–2025") || eyebrow.includes("Feature Systems")) return "Feature Systems Engineer - Ford";
    if (eyebrow.includes("2025–Present") || eyebrow.includes("Diagnostics Design")) return "Diagnostics Design Engineer - Ford";
    if (eyebrow.includes("BMW") || eyebrow.includes("Quality Management")) return "Quality Management Engineer - BMW";
    return "";
  };

  const roleHighlights = additionalAchievements.filter(ach => ach.role === getRoleKey(cs.eyebrow));

return (
    <section style={{ padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
      <span style={{ 
        fontFamily: 'Barlow Condensed,sans-serif', 
        fontSize: '8rem', 
        fontWeight: 900, 
        color: 'rgba(28,72,46,0.12)', 
        position: 'absolute', 
        top: '3rem', 
        right: '2rem', 
        userSelect: 'none' 
      }}>{cs.num}</span>

      <div className="row gy-5">
        <motion.div className="col-lg-5" {...fadeUp()}>
          <p style={{ fontFamily: 'Michroma, monospace', fontSize: '0.70rem', fontWeight: 400, letterSpacing: 3, textTransform: 'uppercase', color: '#4A7A5C', marginBottom: '0.75rem' }}>
            {cs.eyebrow}
          </p>
          <h2 style={{ 
            fontFamily: 'Michroma, sans-serif', 
            fontSize: 'clamp(1.8rem,4.5vw,3rem)', 
            fontWeight: 400, 
            textTransform: 'uppercase', 
            color: '#EAE8E2', 
            lineHeight: 1.15, 
            letterSpacing: 1.5 
          }}>{cs.title}</h2>
          
          <p style={{ fontSize: '0.78rem', color: '#4A7A5C', fontWeight: 700, margin: '0.5rem 0 1.8rem', fontFamily: 'Michroma, monospace', letterSpacing: '2px', textTransform: 'uppercase' }}>{cs.subtitle}</p>
          <p style={{ fontSize: '1.08rem', color: '#A8B8B0', lineHeight: 1.80, maxWidth: 540 }}>{cs.lead}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2.2rem' }}>
            {cs.tags.map(t => (
              <span key={t} style={{ 
                padding: '0.4rem 0.95rem', 
                border: '1px solid rgba(28,72,46,0.55)', 
                borderRadius: 6, 
                fontSize: '0.74rem', 
                fontWeight: 600, 
                letterSpacing: 0.6, 
                textTransform: 'uppercase', 
                color: '#C6D840', 
                background: 'rgba(28,72,46,0.25)' 
              }}>{t}</span>
            ))}
          </div>
        </motion.div>

        <motion.div className="col-lg-7" {...fadeUp(0.15)}>
          <img 
            src={cs.img} 
            alt={cs.title} 
            style={{ 
              width: '100%', 
              height: 320, 
              objectFit: 'cover', 
              borderRadius: 16,
              boxShadow: '0 15px 35px rgba(0,0,0,0.5)'
            }} 
          />
          <p style={{ fontSize: '0.72rem', color: '#8A9E8A', textTransform: 'uppercase', letterSpacing: 1, marginTop: '1rem' }}>
            {cs.imgCaption}
          </p>
          <Link 
            to={`/projects/${cs.id}`} 
            className="btn-amr mt-4 d-inline-flex align-items-center gap-2 px-5 py-3"
          >
            Read Full Deep Dive →
          </Link>
        </motion.div>
      </div>

      {/* KPI Strip - Elegant Green */}
      <motion.div {...fadeUp(0.1)} style={{ display: 'flex', flexWrap: 'wrap', gap: 1, borderRadius: 12, overflow: 'hidden', margin: '2.5rem 0', background: '#0E100F', border: '1px solid rgba(28,72,46,0.40)' }}>
        {cs.kpis.map((k, i) => (
          <div key={i} style={{ flex: 1, minWidth: 100, padding: '1.5rem 1.25rem', background: '#0E100F', textAlign: 'center', transition: 'background 0.2s ease', cursor: 'default' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(15,46,28,0.35)'}
            onMouseLeave={e => e.currentTarget.style.background = '#0E100F'}>
            <span style={{ fontFamily: 'Michroma, monospace', fontSize: '2rem', fontWeight: 400, color: '#C6D840', lineHeight: 1, display: 'block', textShadow: '0 0 6px rgba(198,216,64,0.18)' }}>
              <AnimatedCounter end={k.value} suffix={k.suffix || ''} />
            </span>
            <span style={{ fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#A3CBA3', marginTop: '0.4rem', display: 'block' }}>{k.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Story Grid */}
      <motion.div {...fadeUp(0.1)} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(28,72,46,0.30)', borderRadius: 12, overflow: 'hidden', marginBottom: '2.5rem' }}>
        {cs.story.map((col, i) => (
          <div key={i} style={{ padding: '2rem 1.75rem', background: '#0E100F' }}>
            <div style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#4A7A5C', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ display: 'inline-block', width: 20, height: 1, background: '#C6D840' }}></span>{col.label}
            </div>
            <p style={s}>{col.text}</p>
          </div>
        ))}
      </motion.div>

      {/* Taxonomy / Calibration */}
      {cs.taxonomy && (
        <motion.div {...fadeUp(0.1)}>
          <p style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#4A7A5C', marginBottom: '1rem' }}>Original Diagnostic Reasoning Taxonomy</p>
          <div className="d-flex gap-2 mb-3">
            {cs.taxonomy.map((t, i) => (
              <button key={i} className={`btn ${activeTab === i ? 'btn-primary' : 'btn-outline-light'}`} style={activeTab === i ? { background: 'rgba(15,46,28,0.60)', color: '#C6D840', border: '1px solid rgba(44,110,68,0.85)', letterSpacing: '2px', fontSize: '0.78rem' } : { borderColor: 'rgba(44,90,62,0.50)', color: '#8A9490', background: 'transparent', letterSpacing: '2px', fontSize: '0.78rem' }} onClick={() => setActiveTab(i)}>{t.tier}</button>
            ))}
          </div>
          <div style={{ padding: '2rem', background: '#0E100F', borderRadius: 12, border: '1px solid rgba(28,72,46,0.40)' }}>
            <h4 className="fw-bold" style={{ color: '#C6D840' }}>{cs.taxonomy[activeTab].title}</h4>
            <p style={{ color: '#C5D5C5', lineHeight: 1.7 }}>{cs.taxonomy[activeTab].desc}</p>
          </div>
        </motion.div>
      )}

      {cs.methods && (
        <motion.div {...fadeUp(0.1)} style={{ background: '#0E100F', border: '1px solid rgba(28,72,46,0.40)', borderRadius: 12, padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#4A7A5C', marginBottom: '1.5rem' }}>Calibration Framework — Original Design</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '1rem' }}>
            {cs.methods.map(m => (
              <div key={m.num}>
                <span style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '2rem', fontWeight: 900, color: 'rgba(198,216,64,0.18)', lineHeight: 1, display: 'block' }}>{m.num}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#EAE8E2', textTransform: 'uppercase', letterSpacing: 0.5, display: 'block' }}>{m.title}</span>
                <span style={{ fontSize: '0.8rem', color: '#A3B5A3', lineHeight: 1.5 }}>{m.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.blockquote {...fadeUp(0.1)} style={{ borderLeft: '3px solid #C6D840', padding: '1.25rem 1.75rem', margin: '2rem 0 0', background: 'rgba(15,46,28,0.20)', borderRadius: '0 8px 8px 0' }}>
        <p style={{ fontStyle: 'italic', color: '#C5D5C5', lineHeight: 1.7, margin: 0 }}>{cs.quote}</p>
      </motion.blockquote>

      {/* More Highlights */}
      {roleHighlights.length > 0 && (
        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(44,110,68,0.15)' }}>
          <h4 style={{ color: '#C6D840', marginBottom: '1.5rem', textAlign: 'center', fontFamily: 'Michroma, monospace', fontSize: '0.85rem', letterSpacing: 3, textTransform: 'uppercase' }}>
            More Highlights from this Role
          </h4>
          <div className="row row-cols-1 row-cols-md-2 g-3">
            {roleHighlights.map((ach, i) => (
              <motion.div key={i} className="col" {...fadeUp(i * 0.1)}>
                <div className="glass-showcase-card p-4" style={{ borderRadius: '14px', background: '#0E100F', border: '1px solid rgba(28,72,46,0.45)', minHeight: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', flexShrink: 0, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(44,110,68,0.15)', border: '1px solid rgba(44,110,68,0.18)', fontSize: '1.3rem', color: '#C6D840' }}>
                      <i className={`bi ${ach.icon}`}></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h5 className="fw-bold mb-1" style={{ color: '#EAE8E2', fontSize: '1rem', lineHeight: 1.3 }}>{ach.title}</h5>
                      <p className="mb-0" style={{ color: '#C6D840', fontSize: '0.82rem', fontWeight: 600 }}>{ach.impact}</p>
                    </div>
                  </div>
                  <div style={{ height: '1px', background: 'rgba(255,255,255,0.04)' }} />
                  <p style={{ color: '#A3B5A3', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{ach.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      
      <section style={{ padding: '3rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#4A7A5C', fontFamily: 'Michroma, monospace', fontSize: '0.9rem', letterSpacing: 3, textTransform: 'uppercase' }}>Tools &amp; Technologies</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
          {[
            'CANalyzer / CAPL', 'Diagnostic Engineering Tool', 'MagicDraw / JAMA',
            'Power BI / Tableau', 'VS Code (Python, C++)', 'Minitab', 'Siemens TestLab',
            'Jira (Atlassian)', 'Microsoft 365', 'AUTOSAR (básico)', 'Machine Learning (básico)'
          ].map(tool => (
            <span key={tool} style={{ background: 'rgba(14,16,15,0.80)', border: '1px solid rgba(28,72,46,0.45)', borderRadius: '40px', padding: '0.4rem 1.2rem', fontSize: '0.78rem', fontWeight: 500, color: '#C6D840', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.5px' }}>
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Fixed buttons - refined green / lime */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="scroll-to-top"
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '2rem',
          background: '#0E100F',
          border: '1px solid rgba(44,90,62,0.60)',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          fontSize: '1.5rem',
          color: '#8A9490',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          zIndex: 99,
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C6D840'; e.currentTarget.style.color = '#C6D840'; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(44,90,62,0.60)'; e.currentTarget.style.color = '#8A9490'; }}
      >
        ↑
      </button>

<a 
        href={`${import.meta.env.BASE_URL}assets/Curriculum Vitae_Id2026.pdf`} 
        download="Angel-Vargas-CV-2026.pdf"
        className="amr-resume-btn"
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10006,
          padding: '14px 32px',
          borderRadius: '9999px',
          fontSize: '1.02rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none'
        }}
      >
        <i className="bi bi-download"></i> Download Resume
      </a>
    </section>
  );
}