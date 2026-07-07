import { useEffect, useRef } from 'react'

export default function Particles({ theme }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId, mouse = { x: -999, y: -999 }
    const particles = []
    const COUNT = 80

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 1
      })
    }

    const onMouse = e => { mouse.x = e.clientX; mouse.y = e.clientY }
    window.addEventListener('mousemove', onMouse)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const color = theme === 'dark' ? '108,99,255' : '108,99,255'

      particles.forEach((p, i) => {
        // Move toward mouse gently
        const dx = mouse.x - p.x, dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          p.vx += dx * 0.00005
          p.vy += dy * 0.00005
        }

        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color},${theme === 'dark' ? 0.4 : 0.25})`
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const d = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(${color},${(1 - d / 120) * (theme === 'dark' ? 0.15 : 0.1)})`
            ctx.stroke()
          }
        }
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="particles-canvas" />
}
