import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
  { icon: 'bi-collection', title: 'Hot Wheels — A Serious Collection', text: 'Started as a child\'s obsession, became a lifelong archive. Each car chosen with intention — every piece a small, precise thing that held meaning before I had words for it. The most honest version of my origin story: I loved cars before I understood them.' },
  { icon: 'bi-egg-fried', title: 'Baking — Canolis & Family Tradition', text: 'My father\'s family carries a tradition of bread-making. When Christmas trips to Ciudad Altamirano ended as my grandparents passed, we started our own family dinner at home. That first year, I made Canolis. I am a critic about bread, which means I hold my own work to the same standard.' },
  { icon: 'bi-airplane', title: 'Travel — A Lifelong Practice', text: 'I didn\'t choose to travel — I was raised doing it. Mexico end to end as a child. Europe before I was a teenager, made possible by my parents\' years of careful effort. Back to Europe two years ago. Multiple visits to the US and Canada for work and pleasure.' },
]

export default function About() {
  return (
    <main className="container">

      {/* Opening */}
      <section style={{ padding: '7rem 0 5rem', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
          style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', color: '#6c8ec4', marginBottom: '1.5rem', display: 'block' }}>
          The Human Behind the Engineer
        </motion.span>
        <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1 }}
          style={{ fontFamily: 'Lora,serif', fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 400, lineHeight: 1.15, marginBottom: '2rem' }}>
          A life spent<br />in <em style={{ fontStyle: 'italic', color: '#6c8ec4' }}>motion,</em><br />building roots.
        </motion.h1>
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ fontSize: '1.15rem', lineHeight: 1.85, color: '#4a5568', maxWidth: 600 }}>
          Born in Guerrero. Raised across five cities. Shaped by movement, family, and the quiet discipline of showing up — in every new classroom, on every tennis court, and in every engineering challenge that mattered.
        </motion.p>
      </section>

      {/* Pull Quote */}
      <motion.div {...fadeUp()} style={{ padding: '5rem 0', textAlign: 'center' }}>
        <blockquote style={{ fontFamily: 'Lora,serif', fontSize: 'clamp(1.4rem,3vw,2.2rem)', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.5, maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          <span style={{ fontFamily: 'Lora,serif', fontSize: '6rem', color: 'rgba(108,142,196,0.2)', position: 'absolute', top: '-2rem', left: '-1rem', lineHeight: 1 }}>"</span>
          I didn't choose engineering because of a lifelong passion for machines. I chose it, committed to it — and built the passion from the inside out. That's how I do most things.
        </blockquote>
      </motion.div>

      {/* Cities */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <p style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#9ca3af', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          A Life in Motion <span style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.08)' }}></span>
        </p>
        <div style={{ display: 'flex', gap: 0, overflowX: 'auto', paddingBottom: '1rem', scrollbarWidth: 'none' }}>
          {cities.map((c, i) => (
            <motion.div key={c.name} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              style={{ flex: '0 0 auto', minWidth: 160, paddingRight: '2rem', position: 'relative' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#6c8ec4', marginBottom: '0.75rem', boxShadow: c.active ? '0 0 0 3px rgba(108,142,196,0.2)' : 'none' }}></div>
              <div style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>{c.name}</div>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500, marginTop: '0.2rem' }}>{c.state}</div>
              <div style={{ fontSize: '0.78rem', color: '#6c8ec4', fontStyle: 'italic', marginTop: '0.4rem', lineHeight: 1.4 }}>{c.note}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Origin Story */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="row">
          <motion.div className="col-lg-7" {...fadeUp()}>
            <p style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#9ca3af', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              Origin <span style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.08)' }}></span>
            </p>
            <h2 style={{ fontFamily: 'Lora,serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 500, lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Hot Wheels, a collection,<br />and an <em style={{ fontStyle: 'italic', color: '#6c8ec4' }}>honest choice.</em>
            </h2>
            <div style={{ fontSize: '1rem', lineHeight: 1.85, color: '#4a5568' }}>
              <p>I didn't have a childhood story of taking apart televisions or building machines in the garage. My story starts with a collection of Hot Wheels — die-cast cars lined up with the seriousness only a child can give small things. Each one chosen, named, remembered. My parents saw that love and fed it.</p>
              <p style={{ marginTop: '1.25rem' }}>When it came to choosing a career, I was honest with myself: I was good at maths and exact sciences. I chose Automotive Systems Engineering at IPN for practical reasons — the kind of reasons a first-generation professional from a hardworking family understands without needing to explain.</p>
              <p style={{ marginTop: '1.25rem' }}>What happened next is what I'm most proud of: I fell in love with the work. Not because someone told me I would. But because I committed, and passion followed commitment. That sequence — commit first, let the love come — has become a guiding principle.</p>
            </div>
          </motion.div>
          <motion.div className="col-lg-5 mt-4 mt-lg-0" {...fadeUp(0.15)}>
            <div style={{ paddingLeft: '3rem', borderLeft: '1px solid rgba(0,0,0,0.08)' }}>
              {[
                { num: '5', desc: 'Cities before university. Each one added a layer to how I listen, adapt, and connect.' },
                { num: '1', desc: 'Brother. Somewhere in him lives the stubbornness and sensitivity I\'m still learning to carry well.' },
              ].map(s => (
                <div key={s.num} style={{ marginBottom: '2.5rem' }}>
                  <span style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '3rem', fontWeight: 900, color: '#6c8ec4', lineHeight: 1, display: 'block' }}>{s.num}</span>
                  <span style={{ fontSize: '0.85rem', color: '#9ca3af', lineHeight: 1.5, marginTop: '0.4rem', display: 'block' }}>{s.desc}</span>
                </div>
              ))}
              <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                {['IPN — ESIME Zacatenco','Automotive Systems Engineering','Specialty: Thermo-fluids'].map(tag => (
                  <span key={tag} style={{ display: 'inline-block', padding: '0.35rem 0.85rem', border: '1px solid rgba(108,142,196,0.25)', borderRadius: 4, fontSize: '0.72rem', fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase', color: '#6c8ec4', background: 'rgba(108,142,196,0.05)' }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <p style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#9ca3af', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          Foundations <span style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.08)' }}></span>
        </p>
        <h2 style={{ fontFamily: 'Lora,serif', fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 500, marginBottom: '3rem' }}>
          The people who made me <em style={{ fontStyle: 'italic', color: '#6c8ec4' }}>who I am.</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.5rem' }}>
          {values.map((v, i) => (
            <motion.div key={v.source} {...fadeUp(i * 0.1)}
              className="value-card"
              style={{ padding: '2rem', background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 12, transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#6c8ec4', marginBottom: '0.75rem' }}>{v.source}</div>
              <div style={{ fontFamily: 'Lora,serif', fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.5rem' }}>{v.label}</div>
              <div style={{ fontSize: '0.85rem', color: '#9ca3af', lineHeight: 1.6 }}>{v.desc}</div>
            </motion.div>
          ))}
        </div>
        <p style={{ fontFamily: 'Lora,serif', fontStyle: 'italic', fontSize: '0.95rem', color: '#9ca3af', textAlign: 'center', marginTop: '3rem', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
          And to the person who, for ten years, held up a mirror and showed me who I was capable of becoming — thank you. Some chapters end so the next one can begin.
        </p>
      </section>

      {/* Passions */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <p style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#9ca3af', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          Outside the Office <span style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.08)' }}></span>
        </p>
        {passions.map((p, i) => (
          <motion.div key={p.title} {...fadeUp()} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '1.5rem', alignItems: 'start', padding: '2rem 0', borderBottom: i < passions.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
            <div style={{ width: 48, height: 48, background: 'rgba(108,142,196,0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', color: '#6c8ec4', flexShrink: 0 }}>
              <i className={`bi ${p.icon}`}></i>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: '0.5rem' }}>{p.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#4a5568', lineHeight: 1.7, margin: 0 }}>{p.text}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* What Drives Me */}
      <section style={{ padding: '5rem 0' }}>
        <motion.div {...fadeUp()} style={{ background: '#0d0f14', borderRadius: 16, padding: '4rem', color: '#e2e8f0' }}>
          <p style={{ fontFamily: 'Barlow Condensed,sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#6c8ec4', marginBottom: '1.5rem' }}>What Drives Me</p>
          <h2 style={{ fontFamily: 'Lora,serif', fontSize: 'clamp(1.6rem,4vw,2.5rem)', fontWeight: 400, fontStyle: 'italic', color: '#ffffff', lineHeight: 1.3, marginBottom: '2rem' }}>
            "Next-generation vehicles are not about technology. They are about delivering experiences, stories, and life."
          </h2>
          <p style={{ fontSize: '1rem', color: '#8892a4', lineHeight: 1.8, maxWidth: 680, marginBottom: '1.25rem' }}>I work in a field where thousand approvals, backup data, and documentation layers can make you forget why you started. I haven't forgotten. The reason is the person who opens the door, gets in, and drives — and whether what we built gave them something worth feeling.</p>
          <p style={{ fontSize: '1rem', color: '#8892a4', lineHeight: 1.8, maxWidth: 680, marginBottom: '1.25rem' }}>My passion for troubleshooting and issue resolution isn't about closing tickets. It's about the moment a customer stops experiencing a problem they didn't know we caused.</p>
          <p style={{ fontSize: '1rem', color: '#8892a4', lineHeight: 1.8, maxWidth: 680, marginBottom: '1.5rem' }}>The next step is a Master's in Vehicle Engineering in Sweden — not to become more technical in isolation, but to deepen the foundation that connects systems thinking to the future of how people move through the world.</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1.5rem', background: 'rgba(108,142,196,0.12)', border: '1px solid rgba(108,142,196,0.25)', borderRadius: 8, fontSize: '0.85rem', fontWeight: 600, color: '#6c8ec4' }}>
            <i className="bi bi-mortarboard-fill"></i>
            Vehicle Engineering MSc · Sweden · Applications open mid-2025
          </div>
        </motion.div>
      </section>

    </main>
  )
}