'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle, ChevronDown } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/site'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Mountains slowly zoom + parallax as user scrolls
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
  const y = useTransform(scrollYProgress, [0, 1], [0, 160])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const [particles, setParticles] = useState<
    { left: number; size: number; duration: number; delay: number }[]
  >([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 26 }).map(() => ({
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 8,
      })),
    )
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <Image
          src="/images/hero-kedarnath.png"
          alt="Kedarnath temple against the Himalayan peaks at sunrise"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(13,27,42,0.55) 0%, rgba(13,27,42,0.15) 35%, rgba(13,27,42,0.75) 100%)',
          }}
        />
      </motion.div>

      {/* Drifting clouds */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ x: '-5%' }}
        animate={{ x: '5%' }}
        transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(60% 30% at 20% 25%, rgba(248,245,240,0.18), transparent), radial-gradient(50% 25% at 75% 35%, rgba(248,245,240,0.12), transparent)',
        }}
      />

      {/* Snowfall / bell particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              top: `-5%`,
              width: p.size,
              height: p.size,
              backgroundColor: 'rgba(248,245,240,0.7)',
              animation: `snow-fall ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center lg:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 1 }}
          className="mb-6 font-num text-xs uppercase tracking-[0.4em] text-background"
          style={{ textShadow: '0 1px 8px rgba(13,27,42,0.6)' }}
        >
          Kedarnath · Do Dham · Char Dham
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-semibold tracking-[0.18em] text-background md:text-8xl"
        >
          KEDARFLY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 1 }}
          className="mt-6 max-w-2xl font-heading text-2xl font-light italic leading-snug text-background/90 text-balance md:text-4xl"
        >
          Sacred journeys to the Himalayas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="/packages"
            data-cursor="Explore"
            className="inline-flex items-center justify-center rounded-full bg-saffron px-8 py-4 font-num text-xs uppercase tracking-[0.18em] text-primary-foreground transition-all hover:brightness-110"
          >
            Explore Journeys
          </Link>
          <Link
            href="/contact"
            data-cursor="Book"
            className="inline-flex items-center justify-center rounded-full border border-background/40 px-8 py-4 font-num text-xs uppercase tracking-[0.18em] text-background backdrop-blur-sm transition-colors hover:bg-background/10"
          >
            Book Consultation
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="WhatsApp"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-background/40 px-8 py-4 font-num text-xs uppercase tracking-[0.18em] text-background backdrop-blur-sm transition-colors hover:bg-background/10"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-num text-[10px] uppercase tracking-[0.3em] text-background/70">
          Scroll to Begin Journey
        </span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-background/40 p-1">
          <motion.span
            className="h-2 w-1 rounded-full bg-saffron"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <ChevronDown className="h-4 w-4 text-background/50" />
      </motion.div>

      <style>{`
        @keyframes snow-fall {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.9; }
          100% { transform: translateY(105vh) translateX(40px); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
