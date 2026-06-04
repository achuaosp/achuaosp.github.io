import Lenis from 'lenis'

export function initAnimations() {
  const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  const cursor = document.querySelector('.custom-cursor')
  const ring = document.querySelector('.custom-cursor-ring')

  if (window.matchMedia('(hover: hover)').matches && cursor && ring) {
    window.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX - 4 + 'px'
      cursor.style.top = e.clientY - 4 + 'px'
      ring.style.left = e.clientX - 16 + 'px'
      ring.style.top = e.clientY - 16 + 'px'
    })

    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2.5)'
        ring.style.transform = 'scale(1.5)'
        ring.style.borderColor = '#7c3aed'
      })
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)'
        ring.style.transform = 'scale(1)'
        ring.style.borderColor = 'rgba(124,58,237,0.5)'
      })
    })
  }
}
