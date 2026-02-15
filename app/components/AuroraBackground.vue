<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineProps<{
  class?: string
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationId: number
let particles: Particle[] = []
let connections: Connection[] = []

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

interface Connection {
  from: Particle
  to: Particle
  opacity: number
}

const initParticles = (canvas: HTMLCanvasElement) => {
  const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
  particles = []

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3
    })
  }
}

const updateParticles = (canvas: HTMLCanvasElement) => {
  connections = []
  const connectionDistance = 150

  particles.forEach((particle, i) => {
    particle.x += particle.vx
    particle.y += particle.vy

    // Bounce off edges
    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

    // Keep in bounds
    particle.x = Math.max(0, Math.min(canvas.width, particle.x))
    particle.y = Math.max(0, Math.min(canvas.height, particle.y))

    // Find connections
    for (let j = i + 1; j < particles.length; j++) {
      const other = particles[j]
      if (!other) continue
      const dx = particle.x - other.x
      const dy = particle.y - other.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < connectionDistance) {
        connections.push({
          from: particle,
          to: other,
          opacity: 1 - distance / connectionDistance
        })
      }
    }
  })
}

const draw = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  isDark: boolean
) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Draw connections
  connections.forEach((connection) => {
    ctx.beginPath()
    ctx.moveTo(connection.from.x, connection.from.y)
    ctx.lineTo(connection.to.x, connection.to.y)
    const color = isDark
      ? `rgba(59, 130, 246, ${connection.opacity * 0.3})`
      : `rgba(100, 116, 139, ${connection.opacity * 0.2})`
    ctx.strokeStyle = color
    ctx.lineWidth = 1
    ctx.stroke()
  })

  // Draw particles
  particles.forEach((particle) => {
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    const particleColor = isDark
      ? `rgba(96, 165, 250, ${particle.opacity})`
      : `rgba(71, 85, 105, ${particle.opacity * 0.7})`
    ctx.fillStyle = particleColor
    ctx.fill()

    // Add glow effect for some particles
    if (particle.size > 1.5) {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
      const glowColor = isDark
        ? `rgba(59, 130, 246, ${particle.opacity * 0.2})`
        : `rgba(100, 116, 139, ${particle.opacity * 0.1})`
      ctx.fillStyle = glowColor
      ctx.fill()
    }
  })
}

const animate = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const isDark = document.documentElement.classList.contains('dark')

  updateParticles(canvas)
  draw(ctx, canvas, isDark)

  animationId = requestAnimationFrame(animate)
}

const handleResize = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  initParticles(canvas)
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  initParticles(canvas)
  animate()

  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div
    :class="$props.class"
    class="particle-background"
  >
    <canvas
      ref="canvasRef"
      class="particle-canvas"
    />
    <!-- Gradient overlay for depth -->
    <div class="gradient-overlay" />
    <!-- Grid pattern -->
    <div class="grid-pattern" />
  </div>
</template>

<style scoped>
.particle-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
}

.dark .particle-background {
  background: linear-gradient(180deg, #0a0a0a 0%, #111827 50%, #030712 100%);
}

.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
  pointer-events: none;
}

.dark .gradient-overlay {
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
}

.grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(100, 116, 139, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(100, 116, 139, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
}

.dark .grid-pattern {
  background-image:
    linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
}
</style>
