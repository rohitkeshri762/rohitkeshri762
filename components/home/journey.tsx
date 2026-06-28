"use client"

import { useState } from "react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"

const STOPS = [
  {
    name: "Haridwar",
    desc: "The gateway to the gods, where the Ganga descends to the plains and the evening aarti sets the river aglow.",
    image: "/images/journey-haridwar.png",
    elevation: "314 m",
  },
  {
    name: "Rishikesh",
    desc: "The yoga capital of the world, where suspension bridges sway above the emerald rush of the holy river.",
    image: "/images/journey-rishikesh.png",
    elevation: "372 m",
  },
  {
    name: "Barkot",
    desc: "A tranquil town cradled in deodar forests, the restful base before the climb to Yamunotri.",
    image: "/images/journey-barkot.png",
    elevation: "1,352 m",
  },
  {
    name: "Yamunotri",
    desc: "The sacred source of the Yamuna, where the steaming Tapt Kund springs sit beneath the snowline.",
    image: "/images/journey-yamunotri.png",
    elevation: "3,235 m",
  },
  {
    name: "Uttarkashi",
    desc: "The 'Kashi of the North' on the banks of the Bhagirathi, home to the ancient Vishwanath temple.",
    image: "/images/journey-uttarkashi.png",
    elevation: "1,352 m",
  },
  {
    name: "Gangotri",
    desc: "The origin of the holy Ganga, where the river roars down from glaciers amid towering peaks.",
    image: "/images/journey-gangotri.png",
    elevation: "3,048 m",
  },
  {
    name: "Guptkashi",
    desc: "A serene hill town wrapped in mist, the resting point before the final ascent to Kedarnath.",
    image: "/images/journey-guptkashi.png",
    elevation: "1,319 m",
  },
  {
    name: "Sonprayag",
    desc: "The roaring confluence where the trek to the abode of Shiva truly begins.",
    image: "/images/journey-sonprayag.png",
    elevation: "1,829 m",
  },
  {
    name: "Kedarnath",
    desc: "The abode of Lord Shiva, one of the twelve Jyotirlingas, framed by eternal Himalayan snows.",
    image: "/images/journey-kedarnath.png",
    elevation: "3,584 m",
  },
  {
    name: "Badrinath",
    desc: "The seat of Lord Vishnu beside the warm Tapt Kund, last of the four sacred Dhams.",
    image: "/images/journey-badrinath.png",
    elevation: "3,133 m",
  },
  {
    name: "Mana Village",
    desc: "India's last village before Tibet, steeped in Mahabharata legend and deep Himalayan calm.",
    image: "/images/journey-mana.png",
    elevation: "3,219 m",
  },
]

export function Journey() {
  const [expanded, setExpanded] = useState(false)
  const visibleStops = expanded ? STOPS : STOPS.slice(0, 5)

  return (
    <section className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
              The Ascent
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Every mile carries you closer to the divine
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Follow the ancient pilgrimage trail as it climbs from the sacred
              plains into the heart of the Garhwal Himalayas — each stop a
              chapter in your journey.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                disabled
                className="rounded-lg border border-border/40 px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground/60 transition-colors hover:border-border/60 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Hiking Routes
              </button>
              <button
                disabled
                className="rounded-lg border border-border/40 px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground/60 transition-colors hover:border-border/60 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Weather Updates
              </button>
              <button
                disabled
                className="rounded-lg border border-border/40 px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground/60 transition-colors hover:border-border/60 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Local Guides
              </button>
              <button
                disabled
                className="rounded-lg border border-border/40 px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground/60 transition-colors hover:border-border/60 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Safety Info
              </button>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 space-y-px">
          {visibleStops.map((stop, i) => (
            <Reveal key={stop.name} delay={i * 0.05}>
              <div
                data-cursor="view"
                className="group grid grid-cols-1 items-center gap-6 border-t border-border py-8 md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-sm text-primary md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-3">
                  <h3 className="font-serif text-2xl text-foreground md:text-3xl">
                    {stop.name}
                  </h3>
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                    {stop.elevation}
                  </span>
                </div>
                <p className="text-pretty leading-relaxed text-muted-foreground md:col-span-5">
                  {stop.desc}
                </p>
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl md:col-span-3">
                  <Image
                    src={stop.image || "/placeholder.svg"}
                    alt={stop.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {STOPS.length > 5 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setExpanded((prev) => !prev)}
              data-cursor={expanded ? "less" : "more"}
              className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              {expanded ? "Collapse the Journey ↑" : "Continue the Pilgrimage ↓"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
