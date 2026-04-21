export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(0,0,0,0.07)', marginTop: '2rem' }}>
      <div className="container py-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
          <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>
            &copy; 2026 Angel Vargas. All rights reserved.
          </p>
          <p style={{ color: '#9ca3af', fontSize: '0.78rem', margin: 0, maxWidth: '480px', textAlign: 'right', lineHeight: 1.5 }}>
            <span style={{ color: '#6c8ec4', fontWeight: 600 }}>Built with AI</span> —{' '}
            Designed and built in active collaboration with{' '}
            <a href="https://claude.ai" target="_blank" rel="noreferrer" style={{ color: '#6c8ec4', textDecoration: 'none' }}>
              Claude (Anthropic)
            </a>{' '}
            — from architecture and content strategy to code and copywriting.
            The process itself is part of the work.
          </p>
        </div>
      </div>
    </footer>
  )
}