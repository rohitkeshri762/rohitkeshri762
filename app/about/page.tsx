import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { FinalCta } from "@/components/final-cta"
import { Compass, Heart, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "KedarFly is a devoted pilgrimage company crafting sacred Himalayan journeys with care, transparency and deep local expertise.",
}

const STATS = [
  { value: "10,000+", label: "Pilgrims guided" },
  { value: "12+", label: "Years of service" },
  { value: "4.9", label: "Average rating" },
  { value: "24x7", label: "On-trip support" },
]

const VALUES = [
  {
    icon: Heart,
    title: "Devotion First",
    desc: "Every journey is shaped around your faith, not just your itinerary.",
  },
  {
    icon: Compass,
    title: "Local Expertise",
    desc: "Born of the mountains, our team knows every sacred bend and shortcut.",
  },
  {
    icon: Users,
    title: "Personal Care",
    desc: "A dedicated coordinator who treats your family like their own.",
  },
  {
    icon: Award,
    title: "Honest Promise",
    desc: "Transparent pricing and no inflated claims — only what we can deliver.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Servants of the sacred path"
        subtitle="KedarFly was born from a simple devotion — to carry pilgrims to the abode of the gods with care, dignity and trust."
        image="/images/about.png"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/journey-rishikesh.png"
                alt="The Himalayan valley"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Who we are
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">
                A journey of faith, guided with heart
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  For over a decade, KedarFly has been guiding seekers through the
                  sacred heights of the Garhwal Himalayas. What began as a small
                  family endeavour in the foothills has grown into a trusted name
                  in spiritual travel — yet our purpose remains unchanged.
                </p>
                <p>
                  We believe a pilgrimage is far more than a trip. It is a
                  transformation. That is why we obsess over the details others
                  overlook: the warmth of your hotel after a long mountain drive,
                  the patience of your driver, the smoothness of your darshan, the
                  reassurance of a coordinator who answers at any hour.
                </p>
                <p>
                  From Kedarnath to the complete Char Dham circuit, we carry the
                  logistics so you can carry only your devotion.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="text-center">
                <p className="font-serif text-4xl text-primary-foreground md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/70">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                What guides us
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-5xl">
                The values we travel by
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-background p-8">
                  <v.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-6 font-serif text-xl text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
