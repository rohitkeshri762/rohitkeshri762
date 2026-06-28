import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { FaqAccordion } from '@/components/faq-accordion'
import { FinalCta } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'FAQs | KedarFly',
  description:
    'Answers to common questions about Char Dham packages, helicopter assistance, bookings and travel with KedarFly.',
}

export default function FaqsPage() {
  return (
    <>
      <PageHero
        image="/images/gallery-6.png"
        eyebrow="Good to know"
        title="Frequently Asked Questions"
        subtitle="Everything you might want to know before you begin your sacred journey with us."
      />

      <section className="mx-auto max-w-3xl px-5 py-24 lg:px-8 md:py-32">
        <Reveal>
          <FaqAccordion />
        </Reveal>
      </section>

      <FinalCta
        title="Still have a question?"
        subtitle="Our coordinators are here to help. Reach out and we will answer everything before you decide."
      />
    </>
  )
}
