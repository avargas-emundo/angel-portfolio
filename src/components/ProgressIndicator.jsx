import { useEffect, useState } from 'react'

const sections = [
  { id: 'hero', label: 'ORIGIN' },
  { id: 'about', label: 'PROFILE' },
  { id: 'technical-showcase', label: 'CRAFT' },
  { id: 'timeline', label: 'CAREER' },
  { id: 'contact', label: 'CONNECT' },
]

export default function ProgressIndicator() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2
      let current = 0

      sections.forEach((section, index) => {
        const el = document.getElementById(section.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (scrollY >= rect.top + window.scrollY) current = index
        }
      })
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="scroll-progress">
      <div 
        className="scroll-progress-fill" 
        style={{ 
          height: `${(active / (sections.length - 1)) * 100}%`,
          background: 'linear-gradient(180deg, #00D4FF, #3B82F6)'
        }} 
      />

      {sections.map((section, i) => (
        <div
          key={section.id}
          className={`progress-dot ${i === active ? 'active' : ''}`}
          style={{ 
            top: `${(i / (sections.length - 1)) * 100}%`,
            borderColor: i === active ? '#00D4FF' : 'rgba(0, 212, 255, 0.4)'
          }}
          onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="progress-label" style={{ color: i === active ? '#00D4FF' : '#94a3b8' }}>
            {section.label}
          </span>
        </div>
      ))}
    </div>
  )
}