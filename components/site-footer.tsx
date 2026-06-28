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
} from '@/lib/site'

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
