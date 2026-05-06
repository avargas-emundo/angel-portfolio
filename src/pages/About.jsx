import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const fadeUp = (delay = 0) => ({
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: 'easeOut', delay }
})

const cities = [
  { name: 'Ciudad Altamirano', state: 'Guerrero', note: 'Balsas riverbank. My mother\'s family roots. The best food in Mexico.' },
  { name: 'Acapulco', state: 'Guerrero', note: 'Where my brother arrived.' },
  { name: 'Hermosillo', state: 'Sonora', note: 'Desert heat, new faces.' },
  { name: 'Mérida', state: 'Yucatán', note: 'Pyramids, cenotes — and my first tennis racket.' },
  { name: 'Morelia', state: 'Michoacán', note: 'Most of my life. Where I became who I am.' },
  { name: 'Mexico City', state: 'CDMX', note: 'IPN. Where engineering became identity.' },
  { name: 'San Luis Potosí', state: 'SLP', note: 'BMW Group. First role. Zero audit findings.' },
  { name: 'Naucalpan', state: 'Estado de México', note: 'Ford GTBC. Four years. Three features. Global launches.' },
  { name: 'Sweden', state: 'Next Chapter', note: 'Vehicle Engineering MSc. Applications open mid-2025.', active: true },
]

const values = [
  { source: 'From my mother', label: 'Emotional intelligence & logic', desc: 'The pursuit of rationality paired with the capacity to feel it. She taught me that empathy and precision are not opposites.' },
  { source: 'From my father', label: 'Courage & technical curiosity', desc: 'A leader of 7 siblings, always the one who stood up. He gave me the willingness to go first, the bravery to be accountable, and the care to bring others along. His pursuit of growth moved our whole family across the country.' },
  { source: 'From my brother', label: 'Vulnerability & stubbornness', desc: 'The ability to be afraid and go anyway. Some distances between people are temporary — the values they leave behind are not.' },
  { source: 'From the road', label: 'The art of listening', desc: 'Moving city to city as a child, I didn\'t always have the words to make friends quickly. So I learned to listen first — to understand before speaking. Every leadership lesson I\'ve ever given started here.' },
]

const passions = [
  { icon: 'bi-dribbble', title: 'Tennis — The Sport of My Life', text: 'Picked up a racket in Mérida around mid-elementary school and never truly put it down. At its peak, 2–4 hours a day, every day — the only sport I\'ve ever wanted to repeat. I\'ve tried football, basketball, volleyball, athletics, swimming. Tennis is the one I still watch on television even when I don\'t follow the season. I\'ve coached beginner and intermediate players at university.' },
  { icon: 'bi-collection', title: 'Hot Wheels — A Collection', text: 'Started as a child\'s obsession, became a lifelong archive. Each car chosen with intention — every piece a small, precise thing that held meaning before I had words for it. The most honest version of my origin story: I loved cars before I understood them.' },
  { icon: 'bi-egg-fried', title: 'Baking — Canolis & Family Tradition', text: 'My father\'s family carries a tradition of bread-making. When Christmas trips to Ciudad Altamirano ended as my grandparents passed, we started our own family dinner at home. That first year, I made Canolis. I am a critic about bread, which means I hold my own work to the same standard.' },
  { icon: 'bi-airplane', title: 'Travel — A Lifelong Practice', text: 'I didn\'t choose to travel — I was raised doing it. Mexico end to end as a child. Europe before I was a teenager, made possible by my parents\' years of careful effort. Back to Europe two years ago. Multiple visits to the US and Canada for work and pleasure.' },
]

export default function About() {
  const [isDarkMap, setIsDarkMap] = useState(false)

  useEffect(() => {
    const checkDark = () => setIsDarkMap(document.body.classList.contains('dark-mode'))
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
    <main className="container">

      {/* Opening — McLaren Papaya Energy */}
      <section style={{ 
        padding: '7rem 0 5rem', 
        borderBottom: '1px solid rgba(255,77,0,0.18)' 
      }}>
        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
            <motion.span 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5 }}
              style={{ 
                fontFamily: 'Barlow Condensed,sans-serif', 
                fontSize: '0.85rem', 
                fontWeight: 700, 
                letterSpacing: 4, 
                textTransform: 'uppercase', 
                color: 'var(--papaya)', 
                marginBottom: '1.5rem', 
                display: 'block' 
              }}
            >
              The Human Behind the Engineer
            </motion.span>

            <motion.h1 
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.9, delay: 0.1 }}
              style={{ 
                fontFamily: 'Lora,serif', 
                fontSize: 'clamp(1.8rem,4.5vw,3.8rem)', 
                fontWeight: 500, 
                lineHeight: 1.05, 
                marginBottom: '2rem',
                color: '#e6edf3'
              }}
            >
              I build systems that move.<br />
              I lead teams that <span className="about-orange-header">deliver.</span>
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ 
                fontSize: '1.22rem', 
                lineHeight: 1.8, 
                color: '#cbd5e1', 
                maxWidth: 720 
              }}
            >
              I am Angel Vargas — an Automotive Systems Engineer who has {' '}
              <strong style={{color: 'var(--papaya)'}}>spearheaded</strong> diagnostic robustness programs, {' '}
              <strong style={{color: 'var(--papaya)'}}>orchestrated</strong> global launches, and {' '}
              <strong style={{color: 'var(--papaya)'}}>standardized</strong> engineering processes across Ford and BMW.
            </motion.p>
          </div>

          {/* Profile photo column */}
          <motion.div
            className="col-lg-5 text-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/myself.jpg`}
              alt="Angel Vargas"
              style={{
                width: '260px',
                height: '260px',
                objectFit: 'cover',
                objectPosition: 'center top',
                borderRadius: '50%',
                border: '2px solid rgba(255,77,0,0.35)',
                boxShadow: '0 0 40px rgba(255,77,0,0.12)',
                display: 'block',
                margin: '0 auto'
              }}
            />
            <p style={{
              marginTop: '1rem',
              fontSize: '0.72rem',
              color: '#6c8ec4',
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '1px'
            }}>
              Angel Vargas · Automotive Systems Engineer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Intro / Summary */}
      <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(255,77,0,0.12)' }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 style={{ fontFamily: 'Lora,serif', fontSize: '2.1rem', lineHeight: 1.3, color: '#e6edf3' }}>
              I turn complex system challenges into measurable, scalable solutions.
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '680px', margin: '1.5rem auto 0' }}>
              Whether <strong style={{color: 'var(--papaya)'}}>neutralizing</strong> noisy DTCs through structured diagnostic frameworks or 
              <strong style={{color: 'var(--papaya)'}}>orchestrating</strong> Power Running Board launches that delivered millions in savings, 
              I deliver with technical rigor and collaborative energy.
            </p>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <motion.div {...fadeUp()} style={{ padding: '5rem 0', textAlign: 'center' }}>
        <blockquote style={{ 
          fontFamily: 'Lora,serif', 
          fontSize: 'clamp(1.4rem,3vw,2.2rem)', 
          fontStyle: 'italic', 
          fontWeight: 400, 
          lineHeight: 1.5, 
          maxWidth: 800, 
          margin: '0 auto', 
          position: 'relative',
          color: '#e6edf3'
        }}>
          <span style={{ fontFamily: 'Lora,serif', fontSize: '6rem', color: 'rgba(255,77,0,0.25)', position: 'absolute', top: '-2rem', left: '-1rem', lineHeight: 1 }}>"</span>
          I didn't choose engineering because of a lifelong passion for machines. I chose it, committed to it — and built the passion from the inside out. That's how I do most things.
          <span style={{ fontFamily: 'Lora,serif', fontSize: '6rem', color: 'rgba(255,77,0,0.25)', position: 'absolute', top: '12rem', left: '48rem', lineHeight: 1 }}>"</span>
        </blockquote>
      </motion.div>

      {/* A Life in Motion - Papaya Timeline */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,77,0,0.15)', borderBottom: '1px solid rgba(255,77,0,0.15)' }}>
        <div className="d-flex align-items-center gap-3 mb-4">
          <p style={{ 
            fontFamily: 'Barlow Condensed,sans-serif', 
            fontSize: '0.88rem', 
            fontWeight: 700, 
            letterSpacing: 4, 
            textTransform: 'uppercase', 
            color: 'var(--papaya)', 
            marginBottom: '0' 
          }}>
            A Life in Motion
          </p>
          <div className="life-in-motion-line flex-grow-1" />
        </div>

        <div style={{ display: 'flex', gap: 0, overflowX: 'auto', paddingBottom: '1.5rem', scrollbarWidth: 'none' }}>
          {cities.map((c, i) => (
            <motion.div 
              key={c.name} 
              initial={{ y: 20, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.05 }}
              style={{ flex: '0 0 auto', minWidth: 175, paddingRight: '2.2rem', position: 'relative' }}
            >
              <div style={{ 
                width: 11, 
                height: 11, 
                borderRadius: '50%', 
                background: 'var(--papaya)', 
                marginBottom: '0.9rem', 
                boxShadow: c.active ? '0 0 0 6px rgba(255,77,0,0.3)' : 'none' 
              }}></div>
              <div style={{ 
                fontFamily: 'Barlow Condensed,sans-serif', 
                fontSize: '1.18rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                letterSpacing: 0.7 
              }}>
                {c.name}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500, marginTop: '0.25rem' }}>{c.state}</div>
              <div style={{ fontSize: '0.82rem', color: '#cbd5e1', fontStyle: 'italic', marginTop: '0.6rem', lineHeight: 1.45 }}>
                {c.note}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Map */}
      <section style={{ padding: '3rem 0' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--papaya)' }}>
          My Journey in Cities – An Interactive Map
        </h3>
        <div style={{ height: '500px', width: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
          <MapContainer
            center={[23.6345, -102.5528]}
            zoom={5}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> | &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
              url={isDarkMap 
                ? "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png"
                : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              }
            />
            {[
              { name: 'Ciudad Altamirano', pos: [18.3544, -100.6626], note: 'Balsas riverbank. My mother\'s family roots.' },
              { name: 'Acapulco', pos: [16.8531, -99.8238], note: 'Where my brother arrived.' },
              { name: 'Hermosillo', pos: [29.0729, -110.9559], note: 'Desert heat, new faces.' },
              { name: 'Mérida', pos: [20.9671, -89.6237], note: 'Pyramids, cenotes — and my first tennis racket.' },
              { name: 'Morelia', pos: [19.7058, -101.1843], note: 'Most of my life. Where I became who I am.' },
              { name: 'Mexico City', pos: [19.4326, -99.1332], note: 'IPN. Where engineering became identity.' },
              { name: 'San Luis Potosí', pos: [22.1565, -100.9855], note: 'BMW Group. First role. Zero audit findings.' },
              { name: 'Naucalpan', pos: [19.4785, -99.2376], note: 'Ford GTBC. Four years. Three features. Global launches.' },
              { name: 'Sweden', pos: [59.3293, 18.0686], note: 'Vehicle Engineering MSc. Applications open mid-2025.', isGoal: true }
            ].map(city => (
              <Marker key={city.name} position={city.pos}>
                <Popup>
                  <strong>{city.name}</strong><br />
                  {city.note}
                  {city.isGoal && <span style={{ color: '#ef4444', fontWeight: 'bold' }}> 🎯 Goal</span>}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <p style={{ fontSize: '0.75rem', textAlign: 'center', marginTop: '1rem', color: '#94a3b8' }}>
          📍 Click any marker to see the story behind each city.
        </p>
      </section>

      {/* Origin Story */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(255,77,0,0.12)' }}>
        <div className="row">
          <motion.div className="col-lg-7" {...fadeUp()}>
            <p style={{ 
              fontFamily: 'Barlow Condensed,sans-serif', 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              letterSpacing: 4, 
              textTransform: 'uppercase', 
              color: 'var(--papaya)', 
              marginBottom: '1.5rem', 
              display: 'block' 
            }}>
              Origin
            </p>
            <h2 style={{ 
              fontFamily: 'Lora,serif', 
              fontSize: 'clamp(1.8rem,4vw,2.8rem)', 
              fontWeight: 500, 
              lineHeight: 1.2, 
              marginBottom: '1.5rem',
              color: '#e6edf3'
            }}>
              The collection,<br />and my <em style={{ fontStyle: 'italic', color: 'var(--papaya)' }}>first approach.</em>
            </h2>
            <div style={{ fontSize: '1rem', lineHeight: 1.85, color: '#cbd5e1' }}>
              <p>I didn't have a childhood story of taking apart televisions or building machines in the garage. My story starts with a collection of Hot Wheels — die-cast cars lined up with the seriousness only a child can give small things...</p>
              <p style={{ marginTop: '1.25rem' }}>When it came to choosing a career, I was honest with myself...</p>
              <p style={{ marginTop: '1.25rem' }}>What happened next is what I'm most proud of...</p>
            </div>
          </motion.div>

          <motion.div className="col-lg-5 mt-4 mt-lg-0" {...fadeUp(0.15)}>
            <div style={{ paddingLeft: '3rem', borderLeft: '1px solid rgba(255,77,0,0.2)' }}>
              {[
                { num: '5', desc: 'Cities before university. Each one added a layer to how I listen, adapt, and connect.' },
                { num: '1', desc: 'The first step in my journey of understanding the world through the lens of design and engineering.' },
              ].map(s => (
                <div key={s.num} style={{ marginBottom: '2.5rem' }}>
                  <span style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '3rem', fontWeight: 900, color: 'var(--papaya)', lineHeight: 1, display: 'block' }}>{s.num}</span>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, marginTop: '0.4rem', display: 'block' }}>{s.desc}</span>
                </div>
              ))}
              <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                {['IPN — ESIME Zacatenco','Automotive Systems Engineering','Specialty: Thermo-fluids'].map(tag => (
                  <span key={tag} style={{ 
                    display: 'inline-block', 
                    padding: '0.35rem 0.85rem', 
                    border: '1px solid rgba(255,77,0,0.3)', 
                    borderRadius: 4, 
                    fontSize: '0.72rem', 
                    fontWeight: 600, 
                    letterSpacing: 0.5, 
                    textTransform: 'uppercase', 
                    color: 'var(--papaya)', 
                    background: 'rgba(255,77,0,0.08)' 
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values — McLaren Papaya Cards */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(255,77,0,0.12)' }}>
        <p style={{ 
          fontFamily: 'Barlow Condensed,sans-serif', 
          fontSize: '0.85rem', 
          fontWeight: 700, 
          letterSpacing: 4, 
          textTransform: 'uppercase', 
          color: 'var(--papaya)', 
          marginBottom: '1.5rem', 
          display: 'block' 
        }}>
          Foundations
        </p>
        
        <h2 style={{ 
          fontFamily: 'Lora,serif', 
          fontSize: 'clamp(1.8rem,4vw,2.5rem)', 
          fontWeight: 500, 
          marginBottom: '3rem',
          color: '#e6edf3'
        }}>
          The people who made me <em style={{ fontStyle: 'italic', color: 'var(--papaya)' }}>who I am.</em>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {values.map((v, i) => (
            <motion.div 
              key={v.source} 
              {...fadeUp(i * 0.1)}
              className="value-card p-4"
              style={{ 
                padding: '2.25rem', 
                background: '#161B22', 
                border: '1px solid rgba(255, 77, 0, 0.35)', 
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{ 
                borderColor: 'var(--papaya)', 
                transform: 'translateY(-6px)',
                boxShadow: '0 20px 40px rgba(255, 77, 0, 0.15)'
              }}
            >
              {/* Subtle top accent bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'var(--papaya)'
              }} />

              <div style={{ 
                fontSize: '0.72rem', 
                fontWeight: 700, 
                letterSpacing: 2, 
                textTransform: 'uppercase', 
                color: 'var(--papaya)', 
                marginBottom: '1rem' 
              }}>
                {v.source}
              </div>

              <div style={{ 
                fontFamily: 'Lora,serif', 
                fontSize: '1.25rem', 
                fontWeight: 500, 
                marginBottom: '0.8rem',
                color: '#ffffff',
                lineHeight: 1.3
              }}>
                {v.label}
              </div>

              <div style={{ 
                fontSize: '0.95rem', 
                color: '#94a3b8', 
                lineHeight: 1.65 
              }}>
                {v.desc}
              </div>
            </motion.div>
          ))}
        </div>

        <p style={{ 
          fontFamily: 'Lora,serif', 
          fontStyle: 'italic', 
          fontSize: '1rem', 
          color: '#94a3b8', 
          textAlign: 'center', 
          marginTop: '3.5rem', 
          maxWidth: 620, 
          marginLeft: 'auto', 
          marginRight: 'auto' 
        }}>
          And to the person who, for ten years, held up a mirror and showed me who I was capable of becoming — thank you. Some chapters end so the next one can begin.
        </p>
      </section>

      {/* Soft Skills Radar */}
      <section style={{ padding: '3rem 0' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--papaya)' }}>
          Soft Skills – What I've learned along the way
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <RadarChart data={[
            { skill: 'Leadership / Mentoring', value: 88 },
            { skill: 'Assertive Communication', value: 85 },
            { skill: 'Conflict Resolution', value: 90 },
            { skill: 'Adaptability', value: 92 },
            { skill: 'Resilience', value: 89 },
            { skill: 'Teamwork', value: 91 }
          ]}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" tick={{ fontSize: 10 }} />
            <PolarRadiusAxis domain={[0, 100]} />
            <Radar dataKey="value" stroke="var(--papaya)" fill="var(--papaya)" fillOpacity={0.4} />
          </RadarChart>
        </ResponsiveContainer>
      </section>

      {/* Passions */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(255,77,0,0.12)' }}>
        <p style={{ 
          fontFamily: 'Barlow Condensed,sans-serif', 
          fontSize: '0.8rem', 
          fontWeight: 700, 
          letterSpacing: 4, 
          textTransform: 'uppercase', 
          color: 'var(--papaya)', 
          marginBottom: '1.5rem' 
        }}>
          Outside the Office
        </p>
        {passions.map((p, i) => (
          <motion.div key={p.title} {...fadeUp()} style={{ 
            display: 'grid', 
            gridTemplateColumns: '48px 1fr', 
            gap: '1.5rem', 
            alignItems: 'start', 
            padding: '2rem 0', 
            borderBottom: i < passions.length - 1 ? '1px solid rgba(255,77,0,0.1)' : 'none' 
          }}>
            <div style={{ 
              width: 48, 
              height: 48, 
              background: 'rgba(255,77,0,0.12)', 
              borderRadius: 12, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '1.25rem', 
              color: 'var(--papaya)', 
              flexShrink: 0 
            }}>
              <i className={`bi ${p.icon}`}></i>
            </div>
            <div>
              <h3 style={{ 
                fontFamily: 'Barlow Condensed,sans-serif', 
                fontSize: '1.2rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                letterSpacing: 1, 
                marginBottom: '0.5rem',
                color: '#e6edf3'
              }}>{p.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.7, margin: 0 }}>{p.text}</p>

              {/* Car show photos — only on the Hot Wheels / automotive passion entry */}
              {p.icon === 'bi-collection' && (
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                  {['carshow-1.jpg', 'carshow-2.jpg', 'carshow-3.jpg'].map((img, idx) => (
                    <img
                      key={idx}
                      src={`${import.meta.env.BASE_URL}images/${img}`}
                      alt={`Car show Michigan 2023 — ${idx + 1}`}
                      style={{
                        width: '160px',
                        height: '110px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                        opacity: 0.88,
                        border: '1px solid rgba(108,142,196,0.15)',
                        flexShrink: 0
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </section>

      {/* What Drives Me */}
      <section style={{ padding: '5rem 0' }}>
        <motion.div {...fadeUp()} style={{ 
          background: '#0d0f14', 
          borderRadius: 16, 
          padding: '4rem', 
          color: '#e2e8f0',
          border: '1px solid rgba(255,77,0,0.2)'
        }}>
          <p style={{ 
            fontFamily: 'Barlow Condensed,sans-serif', 
            fontSize: '0.8rem', 
            fontWeight: 700, 
            letterSpacing: 4, 
            textTransform: 'uppercase', 
            color: 'var(--papaya)', 
            marginBottom: '1.5rem' 
          }}>What Drives Me</p>
          
          <h2 style={{ 
            fontFamily: 'Lora,serif', 
            fontSize: 'clamp(1.6rem,4vw,2.5rem)', 
            fontWeight: 400, 
            fontStyle: 'italic', 
            color: '#ffffff', 
            lineHeight: 1.3, 
            marginBottom: '2rem' 
          }}>
            "Next-generation vehicles are not about technology. They are about delivering experiences, stories, and life."
          </h2>

          <p style={{ fontSize: '1rem', color: '#8892a4', lineHeight: 1.8, maxWidth: 680, marginBottom: '1.25rem' }}>
            I work in a field where thousand approvals... I haven't forgotten.
          </p>
          <p style={{ fontSize: '1rem', color: '#8892a4', lineHeight: 1.8, maxWidth: 680, marginBottom: '1.25rem' }}>
            My passion for troubleshooting...
          </p>
          <p style={{ fontSize: '1rem', color: '#8892a4', lineHeight: 1.8, maxWidth: 680, marginBottom: '1.5rem' }}>
            The next step is a Master's in Vehicle Engineering in Sweden...
          </p>

          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            padding: '0.75rem 1.5rem', 
            background: 'rgba(255,77,0,0.12)', 
            border: '1px solid rgba(255,77,0,0.3)', 
            borderRadius: 8, 
            fontSize: '0.85rem', 
            fontWeight: 600, 
            color: 'var(--papaya)' 
          }}>
            <i className="bi bi-mortarboard-fill"></i>
            Vehicle Engineering MSc · Sweden · Applications open mid-2025
          </div>
        </motion.div>
      </section>

      {/* Scroll to Top + Download Resume + Easter Egg */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="scroll-to-top"
        style={{ background: '#161B22', color: '#94a3b8' }}
      >
        ↑
      </button>

            <a 
        href={`${import.meta.env.BASE_URL}assets/Curriculum Vitae_Id2026.pdf`} 
        download="Angel-Vargas-CV-2026.pdf"
        className="btn-papaya"
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10006,
          padding: '14px 32px',
          borderRadius: '9999px',
          fontSize: '1.02rem',
          fontWeight: 700,
          boxShadow: '0 12px 35px rgba(255, 77, 0, 0.55)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
          whiteSpace: 'nowrap'
        }}
      >
        <i className="bi bi-download"></i> Download Resume
      </a>
      {/* Baking Easter Egg */}
      <div className="baking-easter-egg" title="Canolis & family tradition ❤️">
        🥐
      </div>

    </main>
  )
}