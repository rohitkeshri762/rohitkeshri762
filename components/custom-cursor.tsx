'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')
  const [active, setActive] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return

    document.documentElement.classList.add('custom-cursor-active')

    const pos = { x: -100, y: -100 }
    const ring = { x: -100, y: -100 }
    let frame = 0

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
      setHidden(false)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      }

      const target = (e.target as HTMLElement)?.closest('[data-cursor]')
      if (target) {
        setActive(true)
        setLabel(target.getAttribute('data-cursor') || '')
      } else {
        const interactive = (e.target as HTMLElement)?.closest(
          'a, button, input, textarea, select, [role="button"]',
        )
        setActive(!!interactive)
        setLabel('')
      }
    }

    const onLeave = () => setHidden(true)

    const render = () => {
      ring.x += (pos.x - ring.x) * 0.18
      ring.y += (pos.y - ring.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`
      }
      frame = requestAnimationFrame(render)
    }
    frame = requestAnimationFrame(render)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(frame)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[120] hidden md:block"
      style={{ opacity: hidden ? 0 : 1, transition: 'opacity 0.3s' }}
    >
      <div
        ref={ringRef}
        className="absolute left-0 top-0 flex items-center justify-center rounded-full border transition-[width,height,background-color] duration-300 ease-out"
        style={{
          width: label ? 84 : active ? 56 : 36,
          height: label ? 84 : active ? 56 : 36,
          marginLeft: label ? -42 : active ? -28 : -18,
          marginTop: label ? -42 : active ? -28 : -18,
          borderColor: 'var(--saffron)',
          backgroundColor: label ? 'var(--saffron)' : 'transparent',
        }}
      >
        {label && (
          <span className="font-num text-[10px] font-medium uppercase tracking-[0.15em] text-primary-foreground">
            {label}
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        className="absolute left-0 top-0"
        style={{
          opacity: label ? 0 : 1,
          transition: 'opacity 0.3s',
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            marginLeft: -11,
            marginTop: -13,
            filter: 'drop-shadow(0 0 6px var(--saffron))',
          }}
        >
          {/* flame */}
          <path
            d="M12 1.5c1.4 1.9 2.6 3.6 2.6 5.4a2.6 2.6 0 0 1-5.2 0c0-1.1.5-2.1 1-2.9-.1.9.3 1.7 1 1.9-.2-1.5.2-3 .6-4.4Z"
            fill="var(--saffron)"
          />
          {/* lamp bowl */}
          <path
            d="M3 13.5c0 2.6 4 4.5 9 4.5s9-1.9 9-4.5c0-.7-.6-1-1.2-.8-1.9.7-4.7 1.1-7.8 1.1s-5.9-.4-7.8-1.1C3.6 12.5 3 12.8 3 13.5Z"
            fill="var(--saffron)"
          />
        </svg>
      </div>
    </div>
  )
}
