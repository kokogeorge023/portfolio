import { useEffect, useRef } from 'react'

export default function Hero() {
  const statsRef = useRef(null)

  useEffect(() => {
    const counters = statsRef.current?.querySelectorAll('.stat-number')
    counters?.forEach(c => {
      const target = +c.dataset.target
      let current = 0
      const inc = target / 60
      const update = () => {
        current += inc
        if (current < target) { c.textContent = Math.floor(current) + '+'; requestAnimationFrame(update) }
        else c.textContent = target + '+'
      }
      update()
    })
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge"><span className="dot" /> Available for Projects</div>
          <h1>Crafting Digital<br /><span className="gradient-text">Experiences</span> That<br />Stand Out</h1>
          <p className="hero-subtitle">Full-Stack Developer and Flutter Expert with a passion for creating stunning, high-performance digital products. Turning complex ideas into elegant solutions.</p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}>View My Work</a>
            <a href="#contact" className="btn-outline" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Get In Touch</a>
          </div>
          <div className="hero-stats" ref={statsRef}>
            <div className="stat-item"><div className="stat-number" data-target="25">0</div><div className="stat-label">Projects</div></div>
            <div className="stat-item"><div className="stat-number" data-target="3">0</div><div className="stat-label">Years Exp.</div></div>
            <div className="stat-item"><div className="stat-number" data-target="15">0</div><div className="stat-label">Happy Clients</div></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src={`${import.meta.env.BASE_URL}assets/profile/kyrillos.png`} alt="Kyrillos George" />
            <div className="floating-card"><div className="fc-icon"><i className="fas fa-code" /></div><div className="fc-text">Flutter & Dart</div></div>
            <div className="floating-card"><div className="fc-icon"><i className="fas fa-palette" /></div><div className="fc-text">UI/UX Design</div></div>
            <div className="floating-card"><div className="fc-value">A+</div><div className="fc-text">Code Quality</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
