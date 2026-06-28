'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 pointer-events-auto transition-all duration-500',
          scrolled
            ? 'border-b border-border/60 bg-background/95 py-3 backdrop-blur-xl'
            : 'bg-transparent py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            data-cursor="Home"
          >
            <BellMark
              className={cn(
                'h-6 w-6 transition-colors',
                scrolled ? 'text-saffron' : 'text-saffron',
              )}
            />
            <span
              className={cn(
                'font-display text-xl font-semibold tracking-[0.18em] transition-colors',
                scrolled ? 'text-primary' : 'text-background',
              )}
            >
              KEDAR<span className="text-saffron">FLY</span>
            </span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-x-5 xl:gap-x-4 2xl:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-num text-xs uppercase tracking-[0.08em] whitespace-nowrap transition-colors hover:text-saffron',
                  scrolled ? 'text-foreground/80' : 'text-background/85',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/contact"
              data-cursor="Book"
              className={cn(
                'hidden rounded-full px-5 py-2.5 font-num text-xs uppercase tracking-[0.12em] whitespace-nowrap transition-all md:inline-flex',
                'bg-saffron text-primary-foreground hover:brightness-110',
              )}
            >
              Book Journey
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors 2xl:hidden',
                scrolled
                  ? 'border-border text-foreground'
                  : 'border-background/30 text-background',
              )}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[110] flex flex-col"
            style={{ backgroundColor: 'var(--himalaya)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="font-display text-xl font-semibold tracking-[0.25em] text-background">
                KEDAR<span className="text-saffron">FLY</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/30 text-background"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block py-2 font-heading text-3xl text-background/90 transition-colors hover:text-saffron"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-6 pb-10">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-saffron px-6 py-4 font-num text-sm uppercase tracking-[0.15em] text-primary-foreground"
              >
                Book Your Journey
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function BellMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 2.5c-1 0-1.7.7-1.7 1.7 0 .3 0 .6.2.9C7.6 6 5.8 8.7 5.8 12v5.4c0 .9-.6 1.5-1.2 2.1-.3.3-.6.6-.6 1.1h16c0-.5-.3-.8-.6-1.1-.6-.6-1.2-1.2-1.2-2.1V12c0-3.3-1.8-6-4.7-6.9.2-.3.2-.6.2-.9 0-1-.7-1.7-1.7-1.7Z"
        fill="currentColor"
      />
      <circle cx="12" cy="21.2" r="1.4" fill="currentColor" />
    </svg>
  )
}
