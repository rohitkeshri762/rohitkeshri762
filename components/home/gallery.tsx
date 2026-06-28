"use client"

import Image from "next/image"
import { Reveal } from "@/components/reveal"

const IMAGES = [
  { src: "/images/gallery-2.png", alt: "Sadhu meditating before the peaks", span: "row-span-2" },
  { src: "/images/gallery-1.png", alt: "Temple bells", span: "" },
  { src: "/images/gallery-3.png", alt: "Marigold offerings", span: "" },
  { src: "/images/gallery-4.png", alt: "Pilgrims on the mountain trail", span: "row-span-2" },
  { src: "/images/gallery-5.png", alt: "Snow peak at sunrise", span: "" },
  { src: "/images/gallery-6.png", alt: "Carved temple doorway", span: "" },
]

export function Gallery() {
  return (
    <section className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
              Moments of Devotion
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Glimpses from the sacred trail
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[260px] md:grid-cols-4">
          {IMAGES.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 0.06}
              className={`relative overflow-hidden rounded-xl ${img.span}`}
            >
              <div data-cursor="view" className="group relative h-full w-full">
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/20" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
