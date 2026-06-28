"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { WHATSAPP_LINK, PHONE_TEL, PHONE_DISPLAY } from "@/lib/site"
import { MessageCircle, Phone } from "lucide-react"

export function FinalCta({
  title = "Your sacred journey awaits",
  subtitle = "Let us carry the logistics so you can carry the devotion. Reach out and we will craft a pilgrimage made for you.",
}: {
  title?: string
  subtitle?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section ref={ref} className="relative overflow-hidden py-32 md:py-44">
      <motion.div style={{ y }} className="absolute inset-0 -top-[10%] h-[120%]">
        <Image
          src="/images/final-cta.png"
          alt="Temple at twilight"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-balance font-serif text-4xl leading-tight text-foreground md:text-6xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              data-cursor="link"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
