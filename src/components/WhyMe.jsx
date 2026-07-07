import { useState, useEffect, useRef } from 'react'

function Typewriter({ text, speed = 50, delay = 0 }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) setStarted(true)
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const timeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1))
        i++
        if (i >= text.length) clearInterval(interval)
      }, speed)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [started, text, speed, delay])

  return <span ref={ref} className="typewriter">{displayed}<span className="cursor-blink">|</span></span>
}

const reasons = [
  { icon: 'fas fa-rocket', title: 'Fast & Efficient', desc: 'I deliver high-quality work on time, every time. My workflow is optimized for speed without sacrificing quality.' },
  { icon: 'fas fa-layer-group', title: 'Full-Stack Expertise', desc: 'From mobile apps to web platforms, I handle the entire stack. One developer, complete solutions.' },
  { icon: 'fas fa-lightbulb', title: 'Creative Problem Solver', desc: 'I don\'t just code — I think. Every project gets a unique approach tailored to its specific challenges.' },
  { icon: 'fas fa-handshake', title: 'Reliable Communication', desc: 'Clear, consistent communication throughout the project. You\'ll always know where things stand.' },
  { icon: 'fas fa-graduation-cap', title: 'Always Learning', desc: 'Constantly updating my skills with the latest technologies. Your project gets modern, future-proof solutions.' },
  { icon: 'fas fa-heart', title: 'Passionate About Quality', desc: 'I treat every project like my own. Pixel-perfect designs, clean code, and attention to every detail.' },
]

export default function WhyMe() {
  return (
    <section id="whyme">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Why Choose Me</span>
          <h2 className="section-title">
            <Typewriter text="Why Work With Me?" speed={80} />
          </h2>
          <p className="section-desc">Here's what sets me apart from the rest and why clients keep coming back.</p>
        </div>
        <div className="whyme-grid">
          {reasons.map((r, i) => (
            <div key={i} className={`whyme-card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="wm-icon"><i className={r.icon} /></div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
