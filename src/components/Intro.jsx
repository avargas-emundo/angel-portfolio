import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Intro({ onComplete }) {
  const [phase, setPhase] = useState(0)
  // phase 0: black
  // phase 1: car image rush
  // phase 2: dark + name
  // phase 3: fade out

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 3200),
      setTimeout(() => onComplete(), 3900),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: '#000', overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* ── Car rush ── */}
          <AnimatePresence>
            {phase === 1 && (
              <motion.div
                key="car"
                initial={{ x: '-100%', opacity: 0.6, scale: 1.15 }}
                animate={{ x: '100%', opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(${import.meta.env.BASE_URL}images/Mustang-Wall.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(0.6) contrast(1.2)',
                }}
              />
            )}
          </AnimatePresence>

          {/* ── Motion blur streak ── */}
          <AnimatePresence>
            {phase === 1 && (
              <motion.div
                key="streak"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: [0, 0.6, 0] }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                style={{
                  position: 'absolute', top: '48%', left: 0, right: 0,
                  height: 2,
                  background: 'linear-gradient(90deg, transparent, rgba(108,142,196,0.8), transparent)',
                  transformOrigin: 'left',
                }}
              />
            )}
          </AnimatePresence>

          {/* ── Name reveal ── */}
          <AnimatePresence>
            {phase >= 2 && (
              <motion.div
                key="name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}
              >
                {/* First name */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: 'clamp(3rem, 8vw, 7rem)',
                    fontWeight: 400,
                    color: '#ffffff',
                    lineHeight: 1,
                    letterSpacing: '-1px',
                  }}
                >
                  Angel
                </motion.div>

                {/* Last name italic accent */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: 'clamp(3rem, 8vw, 7rem)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    color: '#6c8ec4',
                    lineHeight: 1,
                    letterSpacing: '-1px',
                    marginBottom: '1.5rem',
                  }}
                >
                  Vargas.
                </motion.div>

                {/* Thin divider line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
                  style={{
                    height: 1,
                    background: 'rgba(108,142,196,0.4)',
                    maxWidth: 320,
                    margin: '0 auto 1.5rem',
                    transformOrigin: 'center',
                  }}
                />

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, letterSpacing: '8px' }}
                  animate={{ opacity: 1, letterSpacing: '4px' }}
                  transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    color: '#6c8ec4',
                    margin: 0,
                  }}
                >
                  Automotive Systems Engineer
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Skip hint ── */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 2 ? 0.4 : 0 }}
            transition={{ delay: 1 }}
            onClick={onComplete}
            style={{
              position: 'absolute', bottom: '2rem', right: '2rem',
              background: 'none', border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.5)', padding: '0.4rem 1rem',
              borderRadius: 4, fontSize: '0.7rem', letterSpacing: '2px',
              textTransform: 'uppercase', cursor: 'pointer',
              fontFamily: 'Barlow Condensed, sans-serif',
            }}
          >
            Skip
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}