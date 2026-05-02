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
        right: '1.8rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10005,
        backgroundColor: 'rgba(10, 12, 16, 0.92)',
        border: '1px solid rgba(0, 212, 255, 0.35)',
        borderRadius: '9999px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        padding: '16px 12px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(24px)'
      }}
    >
      <Link 
        to="/" 
        className={`dock-link ${isActive('/') ? 'active' : ''}`} 
        title="Home"
        style={{ color: isActive('/') ? '#00D4FF' : '#94a3b8' }}
      >
        <i className="bi bi-house-fill"></i>
      </Link>
      
      <Link 
        to="/projects" 
        className={`dock-link ${isActive('/projects') ? 'active' : ''}`} 
        title="Projects"
        style={{ color: isActive('/projects') ? '#00D4FF' : '#94a3b8' }}
      >
        <i className="bi bi-briefcase-fill"></i>
      </Link>
      
      <Link 
        to="/about" 
        className={`dock-link ${isActive('/about') ? 'active' : ''}`} 
        title="About"
        style={{ color: isActive('/about') ? '#00D4FF' : '#94a3b8' }}
      >
        <i className="bi bi-person-fill"></i>
      </Link>
      
      <a 
        href="/#contact" 
        className="dock-link" 
        title="Contact"
        style={{ color: '#94a3b8' }}
      >
        <i className="bi bi-envelope-fill"></i>
      </a>
      
      <button 
        onClick={toggleTheme} 
        className="dock-link theme-toggle" 
        type="button"
        title="Toggle Theme"
        style={{ color: '#94a3b8' }}
      >
        <i className={isDark ? "bi bi-sun-fill" : "bi bi-moon-fill"}></i>
      </button>
    </motion.nav>
  )
}