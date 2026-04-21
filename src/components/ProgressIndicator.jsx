import { useEffect, useState } from 'react'

const sections = [
  { id: 'hero', label: 'Origin' },
  { id: 'about', label: 'The Engineer' },
  { id: 'technical-showcase', label: 'Craft' },
  { id: 'timeline', label: 'Impact' },
  { id: 'contact', label: 'Connect' },
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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="scroll-progress">
      <div className="scroll-progress-fill" style={{ height: `${(active / (sections.length - 1)) * 100}%` }} />
      {sections.map((section, i) => (
        <div
          key={section.id}
          className={`progress-dot ${i === active ? 'active' : ''}`}
          style={{ top: `${(i / (sections.length - 1)) * 100}%` }}
          onClick={() => {
            document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' })
          }}
        />
      ))}
    </div>
  )
}