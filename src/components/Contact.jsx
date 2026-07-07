import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header reveal"><span className="section-label">Get In Touch</span><h2 className="section-title">Let's Work Together</h2><p className="section-desc">Have a project in mind? I'd love to hear from you.</p></div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Contact Information</h3>
            <p>Feel free to reach out. I'm always open to new opportunities.</p>
            <div className="contact-links">
              <a href="mailto:kokoalqms@gmail.com" className="contact-link"><div className="cl-icon"><i className="fas fa-envelope"/></div><div><div className="cl-label">Email</div><div className="cl-value">kokoalqms@gmail.com</div></div></a>
              <a href="tel:+201553336793" className="contact-link"><div className="cl-icon"><i className="fas fa-phone"/></div><div><div className="cl-label">Phone</div><div className="cl-value">+20 155 333 6793</div></div></a>
              <a href="https://www.linkedin.com/in/kyrillos-george-260876327" target="_blank" rel="noopener noreferrer" className="contact-link"><div className="cl-icon"><i className="fab fa-linkedin"/></div><div><div className="cl-label">LinkedIn</div><div className="cl-value">Kyrillos George</div></div></a>
              <div className="contact-link"><div className="cl-icon"><i className="fas fa-map-marker-alt"/></div><div><div className="cl-label">Location</div><div className="cl-value">Fayoum, Egypt</div></div></div>
            </div>
          </div>
          <form className="contact-form reveal reveal-delay-2" onSubmit={handleSubmit}>
            <div className="form-group"><input type="text" placeholder="Your Name" required /></div>
            <div className="form-group"><input type="email" placeholder="Your Email" required /></div>
            <div className="form-group"><input type="text" placeholder="Subject" /></div>
            <div className="form-group"><textarea placeholder="Your Message" required /></div>
            <button type="submit" className="btn-primary" style={{width:'100%'}}>{sent ? 'Message Sent!' : 'Send Message'}</button>
          </form>
        </div>
      </div>
    </section>
  )
}
