import { useEffect, useRef } from 'react'

export default function TopologyBackground({ targetId }) {
  const canvasRef = useRef(null)
  const animRef   = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const syncSize = () => {
      const target = document.getElementById(targetId)
      if (!target) return
      canvas.width  = target.offsetWidth
      canvas.height = target.offsetHeight
    }

    syncSize()

    const W = () => canvas.width
    const H = () => canvas.height

    const NODE_COUNT = 180
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x:  Math.random() * W(),
      y:  Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r:  Math.random() * 2.2 + 1,
    }))

    const handleResize = () => {
      syncSize()
    }

    window.addEventListener('resize', handleResize)

    const draw = () => {
      ctx.clearRect(0, 0, W(), H())

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > W()) n.vx *= -1
        if (n.y < 0 || n.y > H()) n.vy *= -1

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(28, 85, 1, 0.52)'
        ctx.fill()

        for (let j = i + 1; j < nodes.length; j++) {
          const m  = nodes[j]
          const dx = n.x - m.x
          const dy = n.y - m.y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 200) {
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(m.x, m.y)
            ctx.strokeStyle = `rgba(79,163,165,${(1 - d / 200) * 0.55})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [targetId])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top:      0,
        left:     0,
        width:    '100%',
        height:   '100%',
        pointerEvents: 'none',
        zIndex:   0,
      }}
    />
  )
}