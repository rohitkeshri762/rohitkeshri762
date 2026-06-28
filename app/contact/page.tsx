import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { EnquiryForm } from "@/components/enquiry-form"
import {
  WHATSAPP_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
  PHONE_DISPLAY_2,
  PHONE_TEL_2,
  EMAIL_INFO,
  EMAIL_SALES,
  OFFICE_LOCATION,
} from "@/lib/site"
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with KedarFly to plan your sacred Himalayan pilgrimage. Call, WhatsApp or send us an enquiry and our team will craft your journey.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let us plan your pilgrimage"
        subtitle="Reach out and our coordinators will craft a journey shaped around your faith, your group and your pace."
        image="/images/journey-haridwar.png"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Speak with us
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">
                We are here, every step of the way
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Whether you are planning months ahead or seeking a last-minute
                darshan, our team is ready to help. Choose whichever way feels
                most comfortable.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              <Reveal delay={0.2}>
                <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                      Call us
                    </p>
                    <div className="flex flex-col">
                      <a
                        href={`tel:${PHONE_TEL}`}
                        data-cursor="link"
                        className="font-serif text-lg text-foreground transition-colors hover:text-primary"
                      >
                        {PHONE_DISPLAY}
                      </a>
                      <a
                        href={`tel:${PHONE_TEL_2}`}
                        data-cursor="link"
                        className="font-serif text-lg text-foreground transition-colors hover:text-primary"
                      >
                        {PHONE_DISPLAY_2}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.26}>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                      WhatsApp
                    </p>
                    <p className="font-serif text-lg text-foreground">
                      Chat with us instantly
                    </p>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <div className="flex flex-col">
                      <a
                        href={`mailto:${EMAIL_INFO}`}
                        data-cursor="link"
                        className="font-serif text-lg text-foreground transition-colors hover:text-primary"
                      >
                        {EMAIL_INFO}
                      </a>
                      <a
                        href={`mailto:${EMAIL_SALES}`}
                        data-cursor="link"
                        className="font-serif text-lg text-foreground transition-colors hover:text-primary"
                      >
                        {EMAIL_SALES}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.38}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                        Office
                      </p>
                      <p className="text-sm leading-relaxed text-foreground">
                        {OFFICE_LOCATION}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                        Hours
                      </p>
                      <p className="text-sm leading-relaxed text-foreground">
                        Open all days · 10am – 10pm
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
              <h3 className="font-serif text-2xl text-foreground">
                Send an enquiry
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Fill in your details and we will get back within a few hours.
              </p>
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
