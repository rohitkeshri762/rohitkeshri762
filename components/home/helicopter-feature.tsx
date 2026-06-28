"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { ArrowUpRight } from "lucide-react"

export function HelicopterFeature() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"])

  return (
    <section ref={ref} className="relative h-[90vh] min-h-[600px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-[12%] h-[124%]">
        <Image
          src="/images/helicopter.png"
          alt="Helicopter over the Himalayas"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
              Above the Clouds
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance font-serif text-4xl leading-tight text-foreground md:text-6xl">
              Helicopter assistance to the heavens
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Skip the long trek and soar over snow-capped peaks. We provide
              dedicated coordination for Kedarnath helicopter bookings — guiding
              you through schedules, sectors and the smoothest path to darshan.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              href="/kedarnath-helicopter-assistance"
              data-cursor="link"
              className="group mt-9 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Explore helicopter options
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
