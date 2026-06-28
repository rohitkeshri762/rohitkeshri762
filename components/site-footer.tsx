import Link from 'next/link'
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react'
import {
  WHATSAPP_LINK,
  PHONE_TEL,
  PHONE_DISPLAY,
  PHONE_TEL_2,
  PHONE_DISPLAY_2,
  EMAIL_INFO,
  EMAIL_SALES,
  GST_NO,
  MSME_NO,
  OFFICE_LOCATION,
  PACKAGES,
  SOCIAL_LINKS,
} from '@/lib/site'

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647z" />
    </svg>
  )
}

const footerNav = [
  {
    title: 'Journeys',
    links: PACKAGES.map((p) => ({ label: p.title, href: `/${p.slug}` })),
  },
  {
    title: 'Explore',
    links: [
      { label: 'Temple Tours', href: '/temple-tours' },
      { label: 'Helicopter Assistance', href: '/kedarnath-helicopter-assistance' },
      { label: 'Ritual Services', href: '/ritual-services' },
      { label: 'Blogs', href: '/blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden pb-24 pt-20 md:pb-12"
      style={{ backgroundColor: 'var(--himalaya)' }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="font-display text-2xl font-semibold tracking-[0.25em] text-background">
              KEDARFLY
            </span>
            <p className="mt-5 max-w-sm font-heading text-lg leading-relaxed text-background/70">
              Crafting sacred, once-in-a-lifetime pilgrimage experiences across
              the Himalayas with devotion, comfort and care.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-3 text-sm text-background/80 transition-colors hover:text-saffron"
              >
                <Phone className="h-4 w-4 text-saffron" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`tel:${PHONE_TEL_2}`}
                className="flex items-center gap-3 text-sm text-background/80 transition-colors hover:text-saffron"
              >
                <Phone className="h-4 w-4 text-saffron" />
                {PHONE_DISPLAY_2}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-background/80 transition-colors hover:text-saffron"
              >
                <MessageCircle className="h-4 w-4 text-saffron" />
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL_INFO}`}
                className="flex items-center gap-3 text-sm text-background/80 transition-colors hover:text-saffron"
              >
                <Mail className="h-4 w-4 text-saffron" />
                {EMAIL_INFO}
              </a>
              <a
                href={`mailto:${EMAIL_SALES}`}
                className="flex items-center gap-3 text-sm text-background/80 transition-colors hover:text-saffron"
              >
                <Mail className="h-4 w-4 text-saffron" />
                {EMAIL_SALES}
              </a>
              <span className="flex items-start gap-3 text-sm text-background/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
                <span>{OFFICE_LOCATION}</span>
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow KedarFly on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background/80 transition-colors hover:border-saffron hover:bg-saffron hover:text-primary-foreground"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow KedarFly on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background/80 transition-colors hover:border-saffron hover:bg-saffron hover:text-primary-foreground"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow KedarFly on X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background/80 transition-colors hover:border-saffron hover:bg-saffron hover:text-primary-foreground"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="font-num text-xs uppercase tracking-[0.2em] text-saffron">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-6 border-t border-background/15 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-num text-xs text-background/50">
              © {new Date().getFullYear()} KedarFly. All rights reserved.
            </p>
            <p className="font-heading text-sm italic text-background/50">
              Har Har Mahadev · Jai Badri Vishal
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="font-num text-[10px] uppercase tracking-[0.1em] text-background/60">
              Government Registered & Certified
            </p>
            <p className="font-num text-[10px] text-background/50">
              GST: {GST_NO} | MSME: {MSME_NO}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
