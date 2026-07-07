import { useState, useEffect } from 'react'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(sec => {
        const top = sec.offsetTop - 100, h = sec.offsetHeight
        if (window.scrollY + 100 >= top && window.scrollY + 100 < top + h) setActive(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const links = [
    ['hero', 'Home'], ['about', 'About'], ['whyme', 'Why Me'], ['skills', 'Skills'],
    ['portfolio', 'Portfolio'], ['experience', 'Experience'], ['contact', 'Contact']
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="nav-logo" onClick={e => { e.preventDefault(); scrollTo('hero') }}>K<span>.</span>George</a>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map(([id, label]) => (
            <li key={id}><a className={active === id ? 'active' : ''} onClick={() => scrollTo(id)}>{label}</a></li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
          </button>
          <a className="nav-cta" onClick={() => scrollTo('contact')}>Let's Talk</a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
