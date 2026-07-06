// ===== PROJECT DATA =====
const projects = [
  { title: "Nike Landing Page", desc: "Premium e-commerce landing page concept with bold typography and product showcase.", img: "assets/projects/1.png", cat: "web", tags: ["UI Design", "E-Commerce"] },
  { title: "Style Maven - Fashion Brand", desc: "Dark-themed fashion brand website with futuristic aesthetic and grid-based layout.", img: "assets/projects/2.png", cat: "web", tags: ["Branding", "Web Design"] },
  { title: "Chevrolet Camaro Showcase", desc: "Automotive landing page with dynamic split-screen design and specs display.", img: "assets/projects/3.png", cat: "web", tags: ["Automotive", "UI Design"] },
  { title: "ZAZ 968M - Retro Design", desc: "Minimalist automotive concept with illustration-based design and clean typography.", img: "assets/projects/4.png", cat: "web", tags: ["Illustration", "Minimal"] },
  { title: "Sculptures Gallery", desc: "Dark luxury art gallery website with gold accents and premium feel.", img: "assets/projects/5.png", cat: "web", tags: ["Luxury", "Art Gallery"] },
  { title: "Battlefield Game Landing", desc: "High-impact gaming landing page with cinematic visuals and immersive design.", img: "assets/projects/6.png", cat: "web", tags: ["Gaming", "Cinematic"] },
  { title: "Cryptecho Blockchain", desc: "Blockchain marketing platform with 3D glass elements and futuristic UI.", img: "assets/projects/7.png", cat: "web", tags: ["Blockchain", "3D Design"] },
  { title: "Future AI Technology", desc: "AI/Tech landing page with cyberpunk aesthetics and dark interface design.", img: "assets/projects/8.png", cat: "web", tags: ["AI", "Technology"] },
  { title: "Sonny Fashion Store", desc: "Bold fashion e-commerce with large typography and creative product display.", img: "assets/projects/9.png", cat: "web", tags: ["Fashion", "E-Commerce"] },
  { title: "Atlas ERP Dashboard", desc: "Enterprise resource planning dashboard with comprehensive analytics and modules.", img: "assets/projects/10.png", cat: "dashboard", tags: ["Dashboard", "Enterprise"] },
  { title: "ERP Command Palette", desc: "Workspace command interface for quick module navigation and search.", img: "assets/projects/11.png", cat: "dashboard", tags: ["UX", "Enterprise"] },
  { title: "ERP Mobile - Responsive", desc: "Mobile-responsive version of the ERP dashboard with accessibility features.", img: "assets/projects/12.png", cat: "mobile", tags: ["Mobile", "Responsive"] },
  { title: "ERP Mobile Dashboard", desc: "Mobile dashboard view with financial metrics and quick-access navigation.", img: "assets/projects/13.png", cat: "mobile", tags: ["Mobile", "Dashboard"] },
  { title: "EcoDream Sustainable Living", desc: "Sustainable architecture website with organic design and eco-friendly aesthetics.", img: "assets/projects/14.png", cat: "web", tags: ["Architecture", "Sustainable"] },
  { title: "Nike SNKRS - Product Page", desc: "Sneaker product showcase with clean layout and interactive gallery.", img: "assets/projects/15.png", cat: "web", tags: ["E-Commerce", "Product"] },
  { title: "Purpose-Driven SaaS", desc: "Dark monochrome SaaS landing page with dramatic imagery and trust signals.", img: "assets/projects/16.png", cat: "web", tags: ["SaaS", "Landing Page"] },
  { title: "VR Reality Experience", desc: "Virtual reality platform with immersive blue aesthetic and product categories.", img: "assets/projects/17.png", cat: "web", tags: ["VR", "Technology"] },
  { title: "Porsche 718 Cayman", desc: "Luxury car configurator with diagonal layout and detailed specifications.", img: "assets/projects/18.png", cat: "web", tags: ["Automotive", "Luxury"] },
  { title: "Nike Zoom Product Page", desc: "Detailed product page with size selector, color options, and recommendations.", img: "assets/projects/19.png", cat: "web", tags: ["E-Commerce", "UX"] },
  { title: "Orion Innovation Platform", desc: "Dark green themed technology platform with atmospheric design elements.", img: "assets/projects/20.png", cat: "web", tags: ["Platform", "Dark UI"] },
  { title: "Peugeot Cycles", desc: "Premium bicycle showcase with minimal dark interface and product details.", img: "assets/projects/21.png", cat: "web", tags: ["Product", "Minimal"] },
  { title: "Cannondale SystemSix", desc: "High-end cycling brand page with professional photography and dark theme.", img: "assets/projects/22.png", cat: "web", tags: ["Sports", "Product"] },
  { title: "Gamerlix Gaming Portal", desc: "Anime-style gaming platform with vibrant colors and character showcase.", img: "assets/projects/23.png", cat: "web", tags: ["Gaming", "Anime"] },
  { title: "Japan Travel Landing", desc: "Illustrated travel website with gradient purple theme and cultural elements.", img: "assets/projects/24.png", cat: "web", tags: ["Travel", "Illustration"] },
  { title: "MetaGems NFT Marketplace", desc: "NFT marketplace with dark green theme, stats display, and trending items.", img: "assets/projects/25.png", cat: "web", tags: ["NFT", "Web3"] },
  { title: "Neon Blue - VR Store", desc: "Cyberpunk-styled VR experience platform with neon accents.", img: "assets/projects/729089122_17973626994112781_19960008981942273_n.jpg", cat: "web", tags: ["Cyberpunk", "VR"] },
  { title: "Virtual Reality Hub", desc: "VR content platform with deep blue tones and immersive video layout.", img: "assets/projects/726987400_17973658326112781_2708752936283651560_n.jpg", cat: "web", tags: ["VR", "Immersive"] },
  { title: "Nike ACG Collection", desc: "Clean product landing page with soft purple backdrop and minimal layout.", img: "assets/projects/728951209_17973847833112781_4233925381725689815_n.jpg", cat: "web", tags: ["Fashion", "Minimal"] },
];

// ===== RENDER PORTFOLIO =====
function renderProjects(filter = 'all') {
  const grid = document.getElementById('portfolioGrid');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter);
  grid.innerHTML = '';
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = `project-card reveal ${i % 3 === 1 ? 'reveal-delay-1' : i % 3 === 2 ? 'reveal-delay-2' : ''}`;
    card.setAttribute('data-cat', p.cat);
    card.innerHTML = `
      <div class="project-thumb">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
        <div class="project-overlay"><a href="${p.img}" target="_blank">View Full Size</a></div>
      </div>
      <div class="project-info">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      </div>`;
    grid.appendChild(card);
  });
  observeReveal();
}

// ===== FILTER =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
});

// ===== SCROLL REVEAL =====
function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(counter => {
    const target = +counter.dataset.target;
    const increment = target / 60;
    let current = 0;
    const update = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current) + '+';
        requestAnimationFrame(update);
      } else {
        counter.textContent = target + '+';
      }
    };
    update();
  });
}

// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('cursor');
if (window.innerWidth > 968) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
  });
  document.querySelectorAll('a, button, .project-card, .skill-card, .highlight-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });
} else {
  cursor.style.display = 'none';
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button');
  btn.textContent = 'Message Sent!';
  btn.style.background = '#00d4aa';
  setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; }, 3000);
  this.reset();
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  observeReveal();
  animateCounters();
});
