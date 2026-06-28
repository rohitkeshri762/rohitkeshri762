"use client"

import Image from "next/image"
import Link from "next/link"
import { PACKAGES, WHATSAPP_LINK } from "@/lib/site"
import { Reveal } from "@/components/reveal"
import { ArrowUpRight, MessageCircle } from "lucide-react"

export function PackagesShowcase() {
  return (
    <section id="packages" className="relative bg-card py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
                Sacred Journeys
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
                Pilgrimages crafted with devotion
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link
              href="/packages"
              data-cursor="link"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:text-primary"
            >
              View all packages
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.slug} delay={i * 0.08}>
              <div className="flex flex-col gap-3">
                <Link
                  href={`/${pkg.slug}`}
                  data-cursor="view"
                  className="group relative block flex-1 overflow-hidden rounded-2xl border border-border bg-background"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute left-5 top-5 flex gap-2">
                      <span className="rounded-full bg-background/80 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-foreground backdrop-blur">
                        {pkg.duration} / {pkg.nights}
                      </span>
                    </div>
                  </div>
                  <div className="relative p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-2xl text-foreground md:text-3xl">
                          {pkg.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {pkg.tagline}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <div className="mt-6 border-t border-border pt-5">
                      <div className="flex items-end justify-between">
                        <div>
                          <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                            Starting from
                          </span>
                          <p className="font-serif text-xl text-primary">{pkg.price}</p>
                        </div>
                        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                          Best: {pkg.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-saffron py-2.5 font-mono text-[0.65rem] uppercase tracking-wider text-primary-foreground transition-colors hover:brightness-110"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Book Journey
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
