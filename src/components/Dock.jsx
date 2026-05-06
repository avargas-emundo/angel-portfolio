import { useState, useEffect, useRef } from 'react'
import { Link, useLocation }           from 'react-router-dom'
import { motion, AnimatePresence }     from 'framer-motion'

const navItems = [
  { to: '/',        icon: 'bi-house-fill',     label: 'Home'     },
  { to: '/projects',icon: 'bi-briefcase-fill', label: 'Projects' },
  { to: '/about',   icon: 'bi-person-fill',    label: 'About'    },
  { to: '/#contact',icon: 'bi-envelope-fill',  label: 'Contact', isAnchor: true },
]

export default function Dock() {
  const location          = useLocation()
  const [open, setOpen]   = useState(false)
  const [isDark, setIsDark] = useState(false)
  const ref               = useRef(null)

  useEffect(() => {
    setIsDark(localStorage.getItem('theme') === 'dark')
  }, [])

  // Close on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.body.classList.toggle('dark-mode', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <div
      ref={ref}
      style={{
        position:  'fixed',
        right:     '1.5rem',
        bottom:    '1.5rem',
        zIndex:    10005,
        display:   'flex',
        flexDirection: 'column',
        alignItems:'flex-end',
        gap:       '10px',
      }}
    >
      {/* ── Expanded nav items ──────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0,  scale: 1     }}
            exit={{    opacity: 0, y: 16, scale: 0.92  }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{
              background:    'rgba(10,12,16,0.96)',
              border:        '1px solid rgba(0,212,255,0.28)',
              borderRadius:  '20px',
              padding:       '10px 8px',
              display:       'flex',
              flexDirection: 'column',
              gap:           '4px',
              backdropFilter:'blur(24px)',
              boxShadow:     '0 20px 50px rgba(0,0,0,0.6)',
              minWidth:      '160px',
            }}
          >
            {navItems.map((item, i) => {
              const active = !item.isAnchor && isActive(item.to)
              const content = (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0  }}
                  transition={{ delay: i * 0.05, duration: 0.18 }}
                  style={{
                    display:       'flex',
                    alignItems:    'center',
                    gap:           '10px',
                    padding:       '9px 14px',
                    borderRadius:  '12px',
                    cursor:        'pointer',
                    background:    active ? 'rgba(0,212,255,0.12)' : 'transparent',
                    transition:    'background 0.2s',
                    color:         active ? '#00D4FF' : '#C8D4DC',
                    textDecoration:'none',
                    fontSize:      '0.82rem',
                    fontFamily:    'Michroma, monospace',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,212,255,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = active ? 'rgba(0,212,255,0.12)' : 'transparent'}
                >
                  <i className={`bi ${item.icon}`} style={{ fontSize: '1rem', flexShrink: 0 }} />
                  {item.label}
                </motion.div>
              )

              return item.isAnchor
                ? <a key={item.label} href={item.to} onClick={() => setOpen(false)} style={{ textDecoration: 'none' }}>{content}</a>
                : <Link key={item.label} to={item.to} onClick={() => setOpen(false)} style={{ textDecoration: 'none' }}>{content}</Link>
            })}

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(0,212,255,0.12)', margin: '4px 8px' }} />

            {/* Theme toggle */}
            <motion.button
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0  }}
              transition={{ delay: navItems.length * 0.05, duration: 0.18 }}
              onClick={toggleTheme}
              style={{
                display:       'flex',
                alignItems:    'center',
                gap:           '10px',
                padding:       '9px 14px',
                borderRadius:  '12px',
                cursor:        'pointer',
                background:    'transparent',
                border:        'none',
                color:         '#8A96A8',
                fontSize:      '0.82rem',
                fontFamily:    'Michroma, monospace',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                width:         '100%',
                transition:    'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.08)'; e.currentTarget.style.color = '#C8D4DC' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8A96A8' }}
            >
              <i className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-fill'}`} style={{ fontSize: '1rem' }} />
              {isDark ? 'Light' : 'Dark'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toggle button ────────────────────────────── */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{   scale: 0.94 }}
        style={{
          width:         '52px',
          height:        '52px',
          borderRadius:  '50%',
          background:    open ? 'rgba(0,212,255,0.15)' : 'rgba(10,12,16,0.92)',
          border:        `1px solid ${open ? 'rgba(0,212,255,0.60)' : 'rgba(0,212,255,0.35)'}`,
          color:         open ? '#00D4FF' : '#8A96A8',
          fontSize:      '1.25rem',
          cursor:        'pointer',
          display:       'flex',
          alignItems:    'center',
          justifyContent:'center',
          backdropFilter:'blur(24px)',
          boxShadow:     open
            ? '0 0 0 1px rgba(0,212,255,0.25), 0 8px 32px rgba(0,0,0,0.5)'
            : '0 8px 32px rgba(0,0,0,0.5)',
          transition:    'all 0.25s ease',
        }}
        aria-label="Navigation menu"
      >
        <motion.i
          className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.22 }}
        />
      </motion.button>
    </div>
  )
}