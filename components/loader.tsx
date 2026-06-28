'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const BELL_PARTICLES = [
  { left: 22, top: 34, duration: 2.6, delay: 0.2 },
  { left: 38, top: 48, duration: 3.1, delay: 0.9 },
  { left: 51, top: 31, duration: 2.4, delay: 0.4 },
  { left: 64, top: 52, duration: 3.4, delay: 1.1 },
  { left: 73, top: 38, duration: 2.8, delay: 0.6 },
  { left: 29, top: 56, duration: 3.2, delay: 1.3 },
  { left: 46, top: 42, duration: 2.5, delay: 0.3 },
  { left: 58, top: 36, duration: 3.0, delay: 0.8 },
  { left: 35, top: 50, duration: 2.7, delay: 1.0 },
  { left: 68, top: 45, duration: 3.3, delay: 0.5 },
  { left: 25, top: 40, duration: 2.9, delay: 1.2 },
  { left: 80, top: 33, duration: 2.3, delay: 0.7 },
  { left: 43, top: 58, duration: 3.5, delay: 0.1 },
  { left: 55, top: 47, duration: 2.6, delay: 1.4 },
]

export function Loader() {
  const [done, setDone] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Only play the loader once per browser session
    if (sessionStorage.getItem('kf_loaded')) {
      setDone(true)
      return
    }
    setDone(false)
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      setDone(true)
      sessionStorage.setItem('kf_loaded', '1')
      document.body.style.overflow = ''
    }, 2200)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: 'var(--himalaya)' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Sun rising behind mountains */}
          <motion.div
            className="absolute left-1/2 h-72 w-72 -translate-x-1/2 rounded-full"
            style={{
              bottom: '18%',
              background:
                'radial-gradient(circle, rgba(217,118,6,0.55) 0%, rgba(191,161,90,0.15) 45%, transparent 70%)',
            }}
            initial={{ y: 140, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
          />

          {/* Mountain silhouette */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              fill="#091422"
              d="M0,320 L0,180 L220,90 L360,170 L560,60 L760,200 L960,80 L1180,190 L1440,110 L1440,320 Z"
            />
          </svg>

          {/* Bell particles */}
          {BELL_PARTICLES.map((p, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                backgroundColor: 'var(--gold)',
                animation: `float-up ${p.duration}s ease-in ${p.delay}s infinite`,
              }}
            />
          ))}

          {/* Temple bell */}
          <div className="relative mb-8 flex flex-col items-center">
            <div className="h-6 w-px" style={{ backgroundColor: 'var(--gold)' }} />
            <svg
              className="animate-bell"
              width="68"
              height="80"
              viewBox="0 0 68 80"
              fill="none"
              aria-hidden
            >
              <path
                d="M34 6c-3 0-5 2-5 5 0 1 0 2 1 3-9 3-15 12-15 23v18c0 3-2 5-4 7-1 1-2 2-2 4h50c0-2-1-3-2-4-2-2-4-4-4-7V37c0-11-6-20-15-23 1-1 1-2 1-3 0-3-2-5-5-5Z"
                fill="url(#bellGrad)"
                stroke="var(--gold)"
                strokeWidth="1.5"
              />
              <circle cx="34" cy="74" r="4" fill="var(--saffron)" />
              <defs>
                <linearGradient id="bellGrad" x1="34" y1="6" x2="34" y2="70">
                  <stop stopColor="#d6b96a" />
                  <stop offset="1" stopColor="#a8842f" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Brand */}
          <motion.h1
            className="font-display text-3xl font-semibold tracking-[0.35em]"
            style={{ color: 'var(--background)' }}
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={{ opacity: 1, letterSpacing: '0.35em' }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            KEDARFLY
          </motion.h1>
          <motion.p
            className="mt-3 font-heading text-sm italic tracking-wide"
            style={{ color: 'var(--gold)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            Sacred journeys to the Himalayas
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
