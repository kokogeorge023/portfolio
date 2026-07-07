export default function Experience() {
  const items = [
    { date: '2024 - 2029', title: 'B.Sc. Electrical Power Engineering', org: 'Fayoum University', desc: 'Currently pursuing a degree in Electrical Power Engineering with a focus on technology and software development.' },
    { date: 'Certified', title: 'DEPI - Digital Egypt Pioneers Initiative', org: 'Technical & Professional Training', desc: 'Completed comprehensive training focused on digital skills and industry readiness.' },
    { date: 'Certified', title: 'ITI - Information Technology Institute', org: 'Programming & Technology', desc: 'Training in core programming concepts and modern development practices.' },
    { date: 'Certified', title: 'NTI - National Telecommunication Institute', org: 'Digital Skills', desc: 'Advanced training in digital skills and telecommunications technology.' },
  ]

  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal"><span className="section-label">Background</span><h2 className="section-title">Education & Certifications</h2></div>
        <div className="timeline reveal">
          {items.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="t-date">{item.date}</div>
              <h3>{item.title}</h3>
              <div className="t-org">{item.org}</div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
