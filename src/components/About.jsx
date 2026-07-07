export default function About() {
  const tags = ['Flutter','Dart','Python','Java','C++','JavaScript','HTML/CSS','REST APIs','Firebase','Git','UI/UX','Figma','Web Scraping','Selenium','OOP','State Management','SQL','Cybersecurity']

  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal"><span className="section-label">About Me</span><h2 className="section-title">Turning Vision Into Reality</h2></div>
        <div className="about-grid">
          <div className="about-content reveal">
            <h3>Engineering Student & Full-Stack Developer</h3>
            <p>I'm Kyrillos George, a highly motivated engineering student and versatile Full-Stack developer based in Fayoum, Egypt. With advanced expertise in cross-platform Flutter development and a strong foundation in UI/UX principles, I build digital products that are both beautiful and functional.</p>
            <p>As a passionate educator and freelance coach, I simplify complex technical concepts and empower students with practical skills. My work spans from mobile applications on the Google Play Store to complete web solutions and automated data pipelines.</p>
            <div className="about-highlights">
              <div className="highlight-card"><div className="h-icon"><i className="fas fa-mobile-alt"/></div><h4>Mobile Development</h4><p>Flutter & Cross-Platform</p></div>
              <div className="highlight-card"><div className="h-icon"><i className="fas fa-code"/></div><h4>Full-Stack</h4><p>End-to-End Solutions</p></div>
              <div className="highlight-card"><div className="h-icon"><i className="fas fa-paint-brush"/></div><h4>UI/UX Design</h4><p>Intuitive Interfaces</p></div>
              <div className="highlight-card"><div className="h-icon"><i className="fas fa-chalkboard-teacher"/></div><h4>Teaching</h4><p>Coach & Mentor</p></div>
            </div>
          </div>
          <div className="about-tech-wrapper reveal reveal-delay-2">
            <div className="about-tech">
              {tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
