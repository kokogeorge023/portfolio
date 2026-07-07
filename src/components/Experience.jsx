import { useEffect, useRef } from 'react'

export default function Experience() {
  const timelineRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('animate-in')
      })
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' })

    const items = timelineRef.current?.querySelectorAll('.timeline-item')
    items?.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const items = [
    { date: '2024 - 2029', title: 'B.Sc. Electrical Power Engineering', org: 'Fayoum University', desc: 'Currently pursuing a degree in Electrical Power Engineering with a focus on technology and software development.', icon: 'fas fa-graduation-cap' },
    { date: 'Certified', title: 'DEPI - Digital Egypt Pioneers Initiative', org: 'Technical & Professional Training', desc: 'Completed comprehensive training focused on digital skills and industry readiness.', icon: 'fas fa-certificate' },
    { date: 'Certified', title: 'ITI - Information Technology Institute', org: 'Programming & Technology', desc: 'Training in core programming concepts and modern development practices.', icon: 'fas fa-laptop-code' },
    { date: 'Certified', title: 'NTI - National Telecommunication Institute', org: 'Digital Skills', desc: 'Advanced training in digital skills and telecommunications technology.', icon: 'fas fa-satellite-dish' },
  ]

  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal"><span className="section-label">Background</span><h2 className="section-title">Education & Certifications</h2></div>
        <div className="timeline reveal" ref={timelineRef}>
          {items.map((item, i) => (
            <div key={i} className="timeline-item" style={{ '--delay': `${i * 0.2}s` }}>
              <div className="t-icon"><i className={item.icon} /></div>
              <div className="t-content">
                <div className="t-date">{item.date}</div>
                <h3>{item.title}</h3>
                <div className="t-org">{item.org}</div>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
