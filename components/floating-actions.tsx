'use client'

import Link from 'next/link'
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react'
import { WHATSAPP_LINK, PHONE_TEL } from '@/lib/site'

export function FloatingActions() {
  return (
    <>
      {/* Desktop right-side rail */}
      <div className="fixed right-5 top-1/2 z-[80] hidden -translate-y-1/2 flex-col gap-3 md:flex">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="WhatsApp"
          aria-label="Chat on WhatsApp"
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/90 text-secondary shadow-sm backdrop-blur transition-all hover:w-12 hover:bg-saffron hover:text-primary-foreground"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          data-cursor="Call"
          aria-label="Call us"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/90 text-secondary shadow-sm backdrop-blur transition-all hover:bg-saffron hover:text-primary-foreground"
        >
          <Phone className="h-5 w-5" />
        </a>
        <Link
          href="/contact"
          data-cursor="Book"
          aria-label="Book a package"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-primary text-primary-foreground shadow-sm transition-all hover:bg-saffron"
        >
          <CalendarCheck className="h-5 w-5" />
        </Link>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-[80] grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex flex-col items-center gap-1 py-3 text-foreground"
        >
          <Phone className="h-5 w-5 text-saffron" />
          <span className="font-num text-[11px] uppercase tracking-wider">
            Call
          </span>
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 border-x border-border py-3 text-foreground"
        >
          <MessageCircle className="h-5 w-5 text-saffron" />
          <span className="font-num text-[11px] uppercase tracking-wider">
            WhatsApp
          </span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center gap-1 py-3 text-foreground"
        >
          <CalendarCheck className="h-5 w-5 text-saffron" />
          <span className="font-num text-[11px] uppercase tracking-wider">
            Enquire
          </span>
        </Link>
      </div>
    </>
  )
}
