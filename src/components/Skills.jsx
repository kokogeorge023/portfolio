const skills = [
  { icon: 'fas fa-mobile-alt', title: 'Mobile App Development', desc: 'Building high-performance, cross-platform mobile applications with Flutter and Dart, featuring custom UI, offline caching, and seamless API integration.', tags: ['Flutter','Dart','Firebase','Play Store'] },
  { icon: 'fas fa-laptop-code', title: 'Full-Stack Development', desc: 'Creating end-to-end web solutions with modern frameworks, robust backend APIs, and responsive frontend interfaces.', tags: ['JavaScript','Python','REST APIs','JSON'] },
  { icon: 'fas fa-palette', title: 'UI/UX Design', desc: 'Designing intuitive, accessible interfaces with a focus on modern aesthetics. Creating wireframes, prototypes, and pixel-perfect designs.', tags: ['Figma','Wireframing','Prototyping','Design Systems'] },
  { icon: 'fas fa-robot', title: 'Automation & Scraping', desc: 'Building automated data extraction pipelines from complex websites. REST API integration and structured data processing.', tags: ['BeautifulSoup','Selenium','Python','APIs'] },
  { icon: 'fas fa-shield-alt', title: 'Cybersecurity Basics', desc: 'Understanding of cybersecurity principles, threat awareness, and implementing digital security best practices.', tags: ['Security','Encryption','Auth','Best Practices'] },
  { icon: 'fas fa-users', title: 'Teaching & Coaching', desc: 'Simplifying complex concepts for diverse audiences. Proven track record in mentoring and professional development.', tags: ['Mentoring','Workshops','Leadership','DEPI'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header reveal"><span className="section-label">What I Do</span><h2 className="section-title">My Core Expertise</h2></div>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div key={i} className={`skill-card reveal ${i % 3 === 1 ? 'reveal-delay-1' : i % 3 === 2 ? 'reveal-delay-2' : ''}`}>
              <div className="sk-icon"><i className={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="skill-tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
