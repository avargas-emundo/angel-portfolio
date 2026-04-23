import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'

const fadeUp = (delay = 0) => ({
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: 'easeOut', delay }
})

const cases = [
  {
    num: '01',
    eyebrow: 'Ford Motor Company · 2021–2025',
    title: 'Power Running\nBoards',
    subtitle: 'Feature Systems Engineer — Full Ownership',
    lead: 'Took full ownership of a feature at the start of its systems engineering journey. Delivered a complete design to the 2025 Navigator & Expedition global launch — including the first-ever calibration framework for the feature.',
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
    eyebrow: 'Ford Motor Company · July 2025–Present',
    title: 'E2E ECU\nDiagnostics\nRobustness',
    subtitle: 'Diagnostics Design Engineer — Standard Creation',
    lead: 'Built a diagnostic reasoning framework from first principles — not to prevent failures, but to ensure every failure mode can be detected, flagged, and resolved with precision. Now the operating standard for a newly established team.',
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
    eyebrow: 'BMW Group · July 2020–June 2021',
    title: 'Quality\nManagement\nSystem',
    subtitle: 'Quality Management Engineer — Plant San Luis Potosí',
    lead: 'Deployed a digital quality management infrastructure at a global BMW manufacturing plant — transforming manual processes into a connected Power BI/Power Apps ecosystem while achieving zero-finding ISO 9001 compliance.',
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
]

export default function Projects() {
  return (
    <main style={{ backgroundColor: 'var(--text-main)', color: '#e8eaf0', minHeight: '100vh' }}>
      <div className="container">
        <header style={{ padding: '6rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.8rem', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: '#6c8ec4', marginBottom: '1rem' }}>
            Engineering Case Studies
          </motion.p>
          <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1 }}
            style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: 'clamp(3rem,8vw,6rem)', fontWeight: 900, lineHeight: 0.95, color: '#ffffff', textTransform: 'uppercase', letterSpacing: -1 }}>
            The <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#6c8ec4' }}>Work</em><br />Speaks.
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ maxWidth: 520, color: '#8892a4', fontSize: '1.05rem', lineHeight: 1.7, marginTop: '1.5rem' }}>
            Three roles. Six years. A trail of measurable outcomes — in warranty savings, quality systems, and diagnostic standards that outlived each program.
          </motion.p>
        </header>

        {cases.map((cs) => (
          <CaseStudy key={cs.num} cs={cs} />
        ))}
      </div>
    </main>
  )
}

function CaseStudy({ cs }) {
  const [activeTab, setActiveTab] = useState(0)
  const s = { color: '#8892a4', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }

  return (
    <section style={{ padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
      <span style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '8rem', fontWeight: 900, color: 'rgba(255,255,255,0.04)', lineHeight: 1, position: 'absolute', top: '4rem', right: 0, userSelect: 'none', letterSpacing: -4 }}>{cs.num}</span>

      <div className="row gy-5">
        <motion.div className="col-lg-5" {...fadeUp()}>
          <p style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#6c8ec4', marginBottom: '0.75rem' }}>{cs.eyebrow}</p>
          <h2 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff', lineHeight: 1, letterSpacing: -0.5, whiteSpace: 'pre-line' }}>{cs.title}</h2>
          <p style={{ fontSize: '1rem', color: '#6c8ec4', fontWeight: 600, margin: '0.5rem 0 1.5rem' }}>{cs.subtitle}</p>
          <p style={{ fontSize: '1.05rem', color: '#8892a4', lineHeight: 1.75, maxWidth: 540 }}>{cs.lead}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2rem' }}>
            {cs.tags.map(t => (
              <span key={t} style={{ padding: '0.35rem 0.85rem', border: '1px solid rgba(108,142,196,0.25)', borderRadius: 4, fontSize: '0.72rem', fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', color: '#6c8ec4', background: 'rgba(108,142,196,0.05)' }}>{t}</span>
            ))}
          </div>
        </motion.div>
        <motion.div className="col-lg-7" {...fadeUp(0.15)}>
          <img src={cs.img} alt={cs.title} style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 12, filter: 'grayscale(20%) contrast(1.05)', transition: 'filter 0.4s ease', display: 'block' }}
            onMouseEnter={e => e.target.style.filter = 'grayscale(0%) contrast(1.1)'}
            onMouseLeave={e => e.target.style.filter = 'grayscale(20%) contrast(1.05)'} />
          <p style={{ fontSize: '0.7rem', color: '#3a4455', textTransform: 'uppercase', letterSpacing: 1, marginTop: '0.75rem' }}>{cs.imgCaption}</p>
        </motion.div>
      </div>

      {/* ANIMATED KPI STRIP */}
      <motion.div {...fadeUp(0.1)} style={{ display: 'flex', flexWrap: 'wrap', gap: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, overflow: 'hidden', margin: '2.5rem 0' }}>
        {cs.kpis.map((k, i) => (
          <div key={i} style={{ flex: 1, minWidth: 100, padding: '1.5rem 1.25rem', background: '#0d0f14', textAlign: 'center', transition: 'background 0.2s ease', cursor: 'default' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(108,142,196,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background = '#0d0f14'}>
            <span style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '2.2rem', fontWeight: 900, color: '#6c8ec4', lineHeight: 1, display: 'block' }}>
              <AnimatedCounter end={k.value} suffix={k.suffix || ''} />
            </span>
            <span style={{ fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#4a5568', marginTop: '0.4rem', display: 'block' }}>{k.label}</span>
          </div>
        ))}
      </motion.div>

      {/* STORY GRID */}
      <motion.div {...fadeUp(0.1)} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, overflow: 'hidden', marginBottom: '2.5rem' }}>
        {cs.story.map((col, i) => (
          <div key={i} style={{ padding: '2rem 1.75rem', background: '#0d0f14' }}>
            <div style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#4a5568', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ display: 'inline-block', width: 20, height: 1, background: '#6c8ec4' }}></span>{col.label}
            </div>
            <p style={s}>{col.text}</p>
          </div>
        ))}
      </motion.div>

      {/* INTERACTIVE TAXONOMY TABS (E2E Diagnostics only) */}
      {cs.taxonomy && (
        <motion.div {...fadeUp(0.1)}>
          <p style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#4a5568', marginBottom: '1rem' }}>Original Diagnostic Reasoning Taxonomy</p>
          <div className="d-flex gap-2 mb-3">
            {cs.taxonomy.map((t, i) => (
              <button key={i} className={`btn ${activeTab === i ? 'btn-primary' : 'btn-outline-light'}`} onClick={() => setActiveTab(i)}>{t.tier}</button>
            ))}
          </div>
          <div style={{ padding: '2rem', background: '#0d0f14', borderRadius: 12 }}>
            <h4 className="fw-bold text-white">{cs.taxonomy[activeTab].title}</h4>
            <p style={{ color: '#c8d0e0', lineHeight: 1.7 }}>{cs.taxonomy[activeTab].desc}</p>
          </div>
        </motion.div>
      )}

      {/* CALIBRATION FRAMEWORK (Power Running Boards only) */}
      {cs.methods && (
        <motion.div {...fadeUp(0.1)} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#4a5568', marginBottom: '1.5rem' }}>Calibration Framework — Original Design</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '1rem' }}>
            {cs.methods.map(m => (
              <div key={m.num}>
                <span style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '2rem', fontWeight: 900, color: 'rgba(108,142,196,0.3)', lineHeight: 1, display: 'block' }}>{m.num}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#c8d0e0', textTransform: 'uppercase', letterSpacing: 0.5, display: 'block' }}>{m.title}</span>
                <span style={{ fontSize: '0.8rem', color: '#586070', lineHeight: 1.5 }}>{m.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* QUOTE */}
      <motion.blockquote {...fadeUp(0.1)} style={{ borderLeft: '3px solid #6c8ec4', padding: '1.25rem 1.75rem', margin: '2rem 0 0', background: 'rgba(108,142,196,0.04)', borderRadius: '0 8px 8px 0' }}>
        <p style={{ fontStyle: 'italic', color: '#8892a4', lineHeight: 1.7, margin: 0 }}>{cs.quote}</p>
      </motion.blockquote>
    </section>
  )
}