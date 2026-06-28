"use client"

import { Reveal } from "@/components/reveal"
import { ShieldCheck, MapPin, HeartHandshake, Clock, Mountain, Sparkles } from "lucide-react"

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Trusted & Transparent",
    desc: "Honest pricing with no hidden charges. What we promise is what you receive.",
  },
  {
    icon: Mountain,
    title: "Himalayan Expertise",
    desc: "Local drivers and guides who know every bend of these sacred mountain roads.",
  },
  {
    icon: HeartHandshake,
    title: "Devotional Care",
    desc: "Temple coordination, ritual assistance and a journey built around your faith.",
  },
  {
    icon: Clock,
    title: "24x7 On-Trip Support",
    desc: "A dedicated coordinator at your side from the first call to the final blessing.",
  },
  {
    icon: MapPin,
    title: "Curated Stays",
    desc: "Handpicked riverside and hill hotels chosen for comfort and serenity.",
  },
  {
    icon: Sparkles,
    title: "Tailored Itineraries",
    desc: "Every journey shaped to your pace, your group and your spiritual goals.",
  },
]

export function WhyUs() {
  return (
    <section className="relative bg-card py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
              Why KedarFly
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
              A pilgrimage partner you can trust
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <div className="group h-full bg-card p-8 transition-colors hover:bg-background">
                <f.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 font-serif text-xl text-foreground">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
