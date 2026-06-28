import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { EnquiryForm } from "@/components/enquiry-form"
import { FinalCta } from "@/components/final-cta"
import { Clock, ShieldAlert, MapPin, Headphones, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Kedarnath Helicopter Assistance",
  description:
    "Dedicated Kedarnath helicopter booking assistance — sector guidance, scheduling support and coordination. Skip the trek and reach darshan with ease.",
}

const SECTORS = [
  { from: "Phata", to: "Kedarnath", time: "~8 min", note: "Most popular sector" },
  { from: "Guptkashi", to: "Kedarnath", time: "~9 min", note: "Scenic valley route" },
  { from: "Sersi", to: "Kedarnath", time: "~7 min", note: "Quick connect" },
]

const STEPS = [
  {
    icon: Headphones,
    title: "Share your dates",
    desc: "Tell us your preferred travel window and group size.",
  },
  {
    icon: MapPin,
    title: "We guide the sector",
    desc: "We advise the best helipad and timing for your darshan.",
  },
  {
    icon: CheckCircle2,
    title: "Coordinated booking",
    desc: "We assist with the booking process and confirmations.",
  },
  {
    icon: Clock,
    title: "On-day support",
    desc: "Our coordinator stays in touch through your flight day.",
  },
]

export default function HelicopterPage() {
  return (
    <>
      <PageHero
        eyebrow="Above the Clouds"
        title="Kedarnath helicopter assistance"
        subtitle="Soar over snow-capped peaks and reach the abode of Shiva without the long trek. We coordinate every detail of your helicopter journey."
        image="/images/helicopter.png"
      />

      {/* Important note */}
      <section className="bg-background py-12">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="flex items-start gap-4 rounded-2xl border border-accent/30 bg-accent/5 p-6">
              <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
              <div>
                <h2 className="font-serif text-lg text-foreground">
                  An honest word on availability
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Helicopter tickets are governed by licensed operators and
                  mountain weather. We provide dedicated booking assistance and
                  guidance — but we never claim guaranteed tickets. Your safety
                  and a transparent experience always come first.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Popular Sectors
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-5xl">
                Routes to the heavens
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SECTORS.map((s, i) => (
              <Reveal key={s.from} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-background p-8">
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                    {s.note}
                  </span>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="font-serif text-2xl text-foreground">
                      {s.from}
                    </span>
                    <span className="text-primary">→</span>
                    <span className="font-serif text-2xl text-foreground">
                      {s.to}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center gap-2 border-t border-border pt-5">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Flight time {s.time}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                How it works
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-5xl">
                Simple, guided, transparent
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-8">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  <step.icon className="mt-4 h-7 w-7 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-5 font-serif text-xl text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/gallery-5.png"
                alt="Himalayan peak"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
              <h3 className="font-serif text-2xl text-foreground">
                Request helicopter assistance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Share your dates and we will guide you through the options.
              </p>
              <div className="mt-8">
                <EnquiryForm defaultPackage="Helicopter Assistance" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
