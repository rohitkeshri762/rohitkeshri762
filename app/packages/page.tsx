import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PACKAGES } from "@/lib/site"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { FinalCta } from "@/components/final-cta"
import { ArrowUpRight, Clock, Mountain } from "lucide-react"

export const metadata: Metadata = {
  title: "Pilgrimage Packages",
  description:
    "Explore our curated Char Dham, Kedarnath, Badrinath and Do Dham pilgrimage packages — crafted with premium stays, temple assistance and helicopter options.",
}

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sacred Journeys"
        title="Pilgrimage Packages"
        subtitle="Thoughtfully designed journeys to the holiest shrines of the Garhwal Himalayas — each crafted with comfort, devotion and care."
        image="/images/chardham-package.png"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:gap-10">
            {PACKAGES.map((pkg, i) => (
              <Reveal key={pkg.slug} delay={(i % 2) * 0.08}>
                <Link
                  href={`/${pkg.slug}`}
                  data-cursor="view"
                  className="group grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent md:bg-gradient-to-r" />
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-primary">
                      {pkg.short}
                    </span>
                    <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
                      {pkg.title}
                    </h2>
                    <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                      {pkg.overview}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-5">
                      <span className="inline-flex items-center gap-2 text-sm text-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        {pkg.duration} / {pkg.nights}
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm text-foreground">
                        <Mountain className="h-4 w-4 text-primary" />
                        {pkg.elevation}
                      </span>
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                      <div>
                        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                          Starting from
                        </span>
                        <p className="font-serif text-2xl text-primary">
                          {pkg.price}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-primary">
                        View details
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
