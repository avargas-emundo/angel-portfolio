import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import ProjectDeepDive from './pages/ProjectDeepDive';

import Dock from './components/Dock';
import Footer from './components/Footer';
import Intro from './components/Intro';

import './styles/global.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'   // 'instant' feels snappier for SPA navigation
    });
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:projectId" element={<ProjectDeepDive />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.body.classList.add('dark-mode');

    const seen = sessionStorage.getItem('intro-seen');
    if (!seen) setShowIntro(true);
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('intro-seen', 'true');
    setShowIntro(false);
  };

  return (
    <BrowserRouter basename="/angel-portfolio">
      <AnimatePresence>
        {showIntro && <Intro key="intro" onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {!showIntro && (
        <>
          <ScrollToTop />     {/* ← This fixes the scroll issue */}
          <Dock />
          <AnimatedRoutes />
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;