"use client"

import { Reveal } from "@/components/reveal"

export function Intro() {
  return (
    <section className="relative overflow-hidden bg-background py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
            The Call of the Mountains
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 text-balance font-serif text-3xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            Where the air grows thin and the silence grows loud, a different kind
            of journey begins.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
            For centuries, seekers have walked these ancient paths through the
            Garhwal Himalayas — not to conquer the peaks, but to find something
            within. KedarFly carries that legacy forward with care, devotion, and
            an attention to detail worthy of the sacred ground you tread.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
