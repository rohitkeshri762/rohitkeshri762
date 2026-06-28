"use client"

import { Reveal } from "@/components/reveal"
import { Quote } from "lucide-react"

const TESTIMONIALS = [
  {
    quote:
      "From the first phone call to the final darshan, KedarFly handled every detail. The helicopter coordination saved my elderly parents the trek. Truly a journey of a lifetime.",
    name: "Rajesh Sharma",
    place: "Delhi",
  },
  {
    quote:
      "The hotels were spotless, the drivers patient and kind, and the team genuinely cared about our comfort. I felt looked after at 12,000 feet.",
    name: "Priya Nair",
    place: "Bengaluru",
  },
  {
    quote:
      "We did the full Char Dham with KedarFly. Eleven days of seamless planning and deep devotion. I cannot recommend them enough.",
    name: "Anil & Sunita Verma",
    place: "Jaipur",
  },
]

export function Testimonials() {
  return (
    <section className="relative bg-card py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
              Pilgrim Voices
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Blessings shared by our travellers
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-background p-8">
                <Quote className="h-8 w-8 text-primary/40" />
                <blockquote className="mt-6 flex-1 text-pretty leading-relaxed text-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-5">
                  <p className="font-serif text-lg text-foreground">{t.name}</p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                    {t.place}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
