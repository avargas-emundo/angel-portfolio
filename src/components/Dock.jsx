import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Dock() {
  const location = useLocation()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    setIsDark(saved === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.body.classList.toggle('dark-mode', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <motion.nav
      className="floating-dock"
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
      style={{
        position: 'fixed',
        right: '1.5rem',
        bottom: '1.5rem',
        zIndex: 10005,           // ABOVE everything
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid rgba(59,130,246,0.25)',
        borderRadius: '9999px',
        display: 'flex',
        gap: '12px',
        padding: '12px 16px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        backdropFilter: 'blur(16px)'
      }}
    >
      <Link to="/" className={`dock-link ${isActive('/') ? 'active' : ''}`}><i className="bi bi-house-fill"></i></Link>
      <Link to="/projects" className={`dock-link ${isActive('/projects') ? 'active' : ''}`}><i className="bi bi-briefcase-fill"></i></Link>
      <Link to="/about" className={`dock-link ${isActive('/about') ? 'active' : ''}`}><i className="bi bi-person-fill"></i></Link>
      <a href="/#contact" className="dock-link"><i className="bi bi-envelope-fill"></i></a>
      <button onClick={toggleTheme} className="dock-link theme-toggle" type="button">
        <i className={isDark ? "bi bi-sun-fill" : "bi bi-moon-fill"}></i>
      </button>
    </motion.nav>
  )
}