import { useState } from 'react'

const BASE = import.meta.env.BASE_URL

const projects = [
  { title:"Nike Landing Page", desc:"Premium e-commerce landing page with bold typography.", img:"1.png", cat:"web", tags:["UI Design","E-Commerce"], slug:"nike" },
  { title:"Style Maven", desc:"Dark-themed fashion brand website with futuristic aesthetic.", img:"2.png", cat:"web", tags:["Branding","Web Design"], slug:"style-maven" },
  { title:"Chevrolet Camaro", desc:"Automotive landing page with dynamic split-screen design.", img:"3.png", cat:"web", tags:["Automotive","UI Design"], slug:"chevrolet" },
  { title:"ZAZ 968M Retro", desc:"Minimalist automotive concept with illustration-based design.", img:"4.png", cat:"web", tags:["Illustration","Minimal"], slug:"zaz" },
  { title:"Sculptures Gallery", desc:"Dark luxury art gallery website with gold accents.", img:"5.png", cat:"web", tags:["Luxury","Art Gallery"], slug:"sculptures" },
  { title:"Battlefield Landing", desc:"High-impact gaming landing page with cinematic visuals.", img:"6.png", cat:"web", tags:["Gaming","Cinematic"], slug:"battlefield" },
  { title:"Cryptecho Blockchain", desc:"Blockchain platform with 3D glass elements.", img:"7.png", cat:"web", tags:["Blockchain","3D Design"], slug:"cryptecho" },
  { title:"Future AI Technology", desc:"AI/Tech landing page with cyberpunk aesthetics.", img:"8.png", cat:"web", tags:["AI","Technology"], slug:"future-ai" },
  { title:"Sonny Fashion Store", desc:"Bold fashion e-commerce with large typography.", img:"9.png", cat:"web", tags:["Fashion","E-Commerce"], slug:"sonny" },
  { title:"Atlas ERP Dashboard", desc:"Enterprise resource planning dashboard with analytics.", img:"10.png", cat:"dashboard", tags:["Dashboard","Enterprise"], slug:"atlas-erp" },
  { title:"ERP Command Palette", desc:"Workspace command interface for quick navigation.", img:"11.png", cat:"dashboard", tags:["UX","Enterprise"], slug:"erp-command" },
  { title:"ERP Mobile", desc:"Mobile-responsive version of the ERP dashboard.", img:"12.png", cat:"mobile", tags:["Mobile","Responsive"], slug:"erp-mobile" },
  { title:"ERP Mobile Dashboard", desc:"Mobile dashboard with financial metrics.", img:"13.png", cat:"mobile", tags:["Mobile","Dashboard"], slug:"erp-mobile-dash" },
  { title:"EcoDream Living", desc:"Sustainable architecture website with organic design.", img:"14.png", cat:"web", tags:["Architecture","Sustainable"], slug:"ecodream" },
  { title:"Nike SNKRS", desc:"Sneaker product showcase with interactive gallery.", img:"15.png", cat:"web", tags:["E-Commerce","Product"], slug:"nike-snkrs" },
  { title:"Purpose SaaS", desc:"Dark monochrome SaaS landing page.", img:"16.png", cat:"web", tags:["SaaS","Landing Page"], slug:"purpose" },
  { title:"VR Reality", desc:"Virtual reality platform with immersive blue aesthetic.", img:"17.png", cat:"web", tags:["VR","Technology"], slug:"vr-reality" },
  { title:"Porsche 718 Cayman", desc:"Luxury car configurator with detailed specs.", img:"18.png", cat:"web", tags:["Automotive","Luxury"], slug:"porsche" },
  { title:"Nike Zoom", desc:"Product page with size selector and color options.", img:"19.png", cat:"web", tags:["E-Commerce","UX"], slug:"nike-zoom" },
  { title:"Orion Platform", desc:"Dark green themed technology platform.", img:"20.png", cat:"web", tags:["Platform","Dark UI"], slug:"orion" },
  { title:"Peugeot Cycles", desc:"Premium bicycle showcase with minimal interface.", img:"21.png", cat:"web", tags:["Product","Minimal"], slug:"peugeot" },
  { title:"Cannondale SystemSix", desc:"High-end cycling brand page.", img:"22.png", cat:"web", tags:["Sports","Product"], slug:"cannondale" },
  { title:"Gamerlix Portal", desc:"Anime-style gaming platform.", img:"23.png", cat:"web", tags:["Gaming","Anime"], slug:"gamerlix" },
  { title:"Japan Travel", desc:"Illustrated travel website with gradient theme.", img:"24.png", cat:"web", tags:["Travel","Illustration"], slug:"japan" },
  { title:"MetaGems NFT", desc:"NFT marketplace with trending items.", img:"25.png", cat:"web", tags:["NFT","Web3"], slug:"metagems" },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter)
  const filters = [['all','All'],['web','Web Design'],['mobile','Mobile'],['dashboard','Dashboard']]

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const xc = rect.width / 2
    const yc = rect.height / 2
    const angle = 12
    const rx = -(y - yc) / yc * angle
    const ry = (x - xc) / xc * angle
    card.style.setProperty('--rx', `${rx}deg`)
    card.style.setProperty('--ry', `${ry}deg`)
  }

  const handleMouseLeave = (e) => {
    const card = e.currentTarget
    card.style.setProperty('--rx', '0deg')
    card.style.setProperty('--ry', '0deg')
  }

  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">A selection of my UI/UX designs, web concepts, and mobile apps.</p>
        </div>
        <div className="portfolio-filter reveal">
          {filters.map(([k,v]) => (
            <button key={k} className={`filter-btn${filter===k?' active':''}`} onClick={() => setFilter(k)}>{v}</button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filtered.map((p, i) => (
            <a 
              key={p.slug} 
              href={`${BASE}projects/${p.slug}/`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`project-card reveal ${i%3===1?'reveal-delay-1':i%3===2?'reveal-delay-2':''}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="project-thumb">
                <img src={`${BASE}assets/projects/${p.img}`} alt={p.title} loading="lazy" />
                <div className="project-overlay">
                  <span className="view-btn">View Live</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
