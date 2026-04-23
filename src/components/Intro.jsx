import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Intro({ onComplete }) {
  const [phase, setPhase] = useState(0)
  // phase 0: black silence
  // phase 1: name reveal
  // phase 2: fade out

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 3800),
      setTimeout(() => onComplete(), 4600),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: '#000', overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Subtle ambient glow */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(108,142,196,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <AnimatePresence>
            {phase >= 1 && (
              <motion.div
                key="name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}
              >
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                    fontWeight: 400,
                    color: '#ffffff',
                    lineHeight: 1,
                    letterSpacing: '-1px',
                  }}
                >
                  Angel
                </motion.div>

                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.55 }}
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    color: '#6c8ec4',
                    lineHeight: 1,
                    letterSpacing: '-1px',
                    marginBottom: '2rem',
                  }}
                >
                  Vargas.
                </motion.div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}
                  style={{
                    height: 1,
                    background: 'rgba(108,142,196,0.4)',
                    maxWidth: 360,
                    margin: '0 auto 2rem',
                    transformOrigin: 'center',
                  }}
                />

                <motion.p
                  initial={{ opacity: 0, letterSpacing: '12px' }}
                  animate={{ opacity: 1, letterSpacing: '4px' }}
                  transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '0.9rem',
                    fontWeight: 700,
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

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 0.35 : 0 }}
            transition={{ delay: 1.5 }}
            onClick={onComplete}
            style={{
              position: 'absolute', bottom: '2rem', right: '2rem',
              background: 'none', border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.4)', padding: '0.4rem 1rem',
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