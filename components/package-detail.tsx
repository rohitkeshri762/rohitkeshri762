"use client"

import Image from "next/image"
import { useState } from "react"
import type { Package } from "@/lib/site"
import { Reveal } from "@/components/reveal"
import { EnquiryForm } from "@/components/enquiry-form"
import { FinalCta } from "@/components/final-cta"
import {
  Check,
  X,
  Clock,
  Mountain,
  CalendarDays,
  Hotel,
  ChevronDown,
  Sparkles,
} from "lucide-react"

export function PackageDetail({ pkg }: { pkg: Package }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
        <Image
          src={pkg.image || "/placeholder.svg"}
          alt={pkg.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              {pkg.short}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-3xl text-balance font-serif text-5xl leading-tight text-foreground md:text-7xl">
              {pkg.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-xl font-serif text-xl italic text-muted-foreground md:text-2xl">
              {pkg.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quick facts bar */}
      <section className="sticky top-0 z-30 border-b border-border bg-card/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex flex-wrap gap-6">
            <Fact icon={Clock} label="Duration" value={`${pkg.duration} / ${pkg.nights}`} />
            <Fact icon={Mountain} label="Elevation" value={pkg.elevation} />
            <Fact icon={CalendarDays} label="Best time" value={pkg.bestTime} />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                From
              </span>
              <p className="font-serif text-xl text-primary">{pkg.price}</p>
            </div>
            <a
              href="#enquire"
              data-cursor="link"
              className="rounded-full bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Enquire
            </a>
          </div>
        </div>
      </section>

      {/* Overview + highlights */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Overview
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">
                {pkg.tagline}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground md:text-lg">
                {pkg.overview}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="font-serif text-xl text-foreground">Highlights</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Day by Day
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-5xl">
              Your itinerary
            </h2>
          </Reveal>

          <div className="mt-14">
            {pkg.itinerary.map((day, i) => (
              <Reveal key={day.day} delay={i * 0.05}>
                <div className="relative grid gap-4 border-l border-border pb-12 pl-8 md:grid-cols-12 md:gap-8 md:pl-12">
                  <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
                  <div className="md:col-span-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-primary">
                      {day.day}
                    </span>
                    <h3 className="mt-1 font-serif text-xl text-foreground">
                      {day.title}
                    </h3>
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                      {day.route}
                    </span>
                  </div>
                  <ul className="space-y-2 md:col-span-9">
                    {day.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions / Exclusions / Hotels */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <h3 className="font-serif text-xl text-foreground">Inclusions</h3>
              <ul className="mt-6 space-y-3">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <h3 className="font-serif text-xl text-foreground">Exclusions</h3>
              <ul className="mt-6 space-y-3">
                {pkg.exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-2">
                <Hotel className="h-5 w-5 text-primary" />
                <h3 className="font-serif text-xl text-foreground">Stays</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {pkg.hotels.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Good to know
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-4xl">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {pkg.faqs.map((faq, i) => (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  data-cursor="link"
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-serif text-lg text-foreground md:text-xl">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="overflow-hidden text-pretty leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquire" className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Begin your journey
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-balance font-serif text-3xl leading-tight text-foreground md:text-5xl">
                Reserve the {pkg.title}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Share a few details and our pilgrimage coordinator will reach out
                with a tailored plan, available dates and the best pricing for
                your group.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <EnquiryForm defaultPackage={pkg.title} />
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  )
}

function Fact({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-primary" />
      <div className="leading-tight">
        <span className="block font-mono text-[0.55rem] uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="text-sm text-foreground">{value}</span>
      </div>
    </div>
  )
}
