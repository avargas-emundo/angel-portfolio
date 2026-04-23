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
      aria-label="Quick navigation"
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
      style={{
        position: 'fixed',
        zIndex: 1000,
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
        borderRadius: '30px',
        display: 'flex',
        gap: '15px',
        boxShadow: 'var(--shadow)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <Link to="/" className={`dock-link ${isActive('/') ? 'active' : ''}`}>
        <i className="bi bi-house-fill"></i>
        <span className="dock-tooltip">Home</span>
      </Link>
      <Link to="/projects" className={`dock-link ${isActive('/projects') ? 'active' : ''}`}>
        <i className="bi bi-briefcase-fill"></i>
        <span className="dock-tooltip">Projects</span>
      </Link>
      <Link to="/about" className={`dock-link ${isActive('/about') ? 'active' : ''}`}>
        <i className="bi bi-person-fill"></i>
        <span className="dock-tooltip">About</span>
      </Link>
      <a href="/#contact" className="dock-link">
        <i className="bi bi-envelope-fill"></i>
        <span className="dock-tooltip">Contact</span>
      </a>
      <button onClick={toggleTheme} className="dock-link theme-toggle" type="button" aria-label="Toggle theme">
        <i className={isDark ? "bi bi-sun-fill" : "bi bi-moon-fill"}></i>
        <span className="dock-tooltip">Theme</span>
      </button>
    </motion.nav>
  )
}