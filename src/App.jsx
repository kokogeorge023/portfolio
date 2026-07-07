import { useState, useEffect } from 'react'
import Particles from './components/Particles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyMe from './components/WhyMe'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    const observe = () => document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el))
    observe()
    const interval = setInterval(observe, 1000)
    return () => { clearInterval(interval); observer.disconnect() }
  }, [])

  return (
    <>
      <Particles theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <WhyMe />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
