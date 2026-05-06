import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { id: 'hero',               label: 'Origin'    },
  { id: 'about',              label: 'Profile'   },
  { id: 'technical-showcase', label: 'Craft'     },
  { id: 'timeline',           label: 'Career'    },
  { id: 'contact',            label: 'Connect'   },
]

export default function ProgressIndicator() {
  const [active, setActive]       = useState(0)
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // ── Section detection ──────────────────────────────
      const mid = window.scrollY + window.innerHeight / 2
      let current = 0
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id)
        if (el && mid >= el.getBoundingClientRect().top + window.scrollY) current = i
      })
      setActive(current)

      // ── Raw scroll percentage for the fill bar ─────────
      const docH  = document.documentElement.scrollHeight - window.innerHeight
      setScrollPct(docH > 0 ? Math.min(window.scrollY / docH, 1) : 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {/* ── Thin top bar ────────────────────────────────── */}
      <div style={{
        position:  'fixed',
        top:       0,
        left:      0,
        right:     0,
        height:    '3px',
        background:'rgba(0,212,255,0.10)',
        zIndex:    20000,
        pointerEvents: 'none',
      }}>
        <motion.div
          style={{
            height:     '100%',
            background: 'linear-gradient(90deg, #00D4FF, #3B82F6)',
            transformOrigin: 'left',
            boxShadow:  '0 0 10px rgba(0,212,255,0.6)',
          }}
          animate={{ scaleX: scrollPct }}
          transition={{ duration: 0.1, ease: 'linear' }}
        />
      </div>

      {/* ── Section pill — shows current section name ────── */}
      <div style={{
        position:   'fixed',
        top:        '12px',
        left:       '50%',
        transform:  'translateX(-50%)',
        zIndex:     19999,
        pointerEvents: 'none',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{    opacity: 0, y:  8  }}
            transition={{ duration: 0.25 }}
            style={{
              background:    'rgba(10,12,16,0.88)',
              border:        '1px solid rgba(0,212,255,0.30)',
              borderRadius:  '9999px',
              padding:       '3px 14px',
              fontSize:      '0.62rem',
              fontFamily:    'Michroma, monospace',
              letterSpacing: '2.5px',
              color:         '#00D4FF',
              textTransform: 'uppercase',
              backdropFilter:'blur(12px)',
              whiteSpace:    'nowrap',
            }}
          >
            {sections[active].label}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Dot strip — left side, desktop only ─────────── */}
      <div style={{
        position:  'fixed',
        left:      '1.4rem',
        top:       '50%',
        transform: 'translateY(-50%)',
        zIndex:    19998,
        display:   'flex',
        flexDirection: 'column',
        gap:       '18px',
        alignItems:'center',
      }}
        className="progress-dot-strip"
      >
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            title={s.label}
            style={{
              width:         i === active ? '10px' : '7px',
              height:        i === active ? '10px' : '7px',
              borderRadius:  '50%',
              border:        `1.5px solid ${i === active ? '#00D4FF' : 'rgba(0,212,255,0.35)'}`,
              background:    i === active ? '#00D4FF' : 'transparent',
              cursor:        'pointer',
              padding:       0,
              transition:    'all 0.3s ease',
              boxShadow:     i === active ? '0 0 8px rgba(0,212,255,0.7)' : 'none',
            }}
          />
        ))}
      </div>

      {/* ── Hide dot strip on mobile ─────────────────────── */}
      <style>{`
        @media (max-width: 768px) { .progress-dot-strip { display: none !important; } }
      `}</style>
    </>
  )
}