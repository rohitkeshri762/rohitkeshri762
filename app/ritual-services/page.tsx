import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { FinalCta } from '@/components/final-cta'
import { Flame, Users, Zap, Gift } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ritual Services | KedarFly',
  description:
    'Sacred rituals and pujas performed by experienced priests — Pind Daan, Havan, Aarti and more to honor loved ones and seek divine blessings.',
}

const RITUALS = [
  {
    icon: Flame,
    title: 'Pind Daan & Shraddha',
    desc: 'Sacred oblations and prayers for departed souls performed at sacred temples and river confluences.',
  },
  {
    icon: Zap,
    title: 'Havan & Yagna',
    desc: 'Fire rituals performed by priests to seek blessings, purification and divine grace.',
  },
  {
    icon: Users,
    title: 'Temple Pujas',
    desc: 'Dedicated pujas at Kedarnath, Badrinath and other sacred temples on your behalf.',
  },
  {
    icon: Gift,
    title: 'Offerings & Prasad',
    desc: 'Authentic temple donations and receiving blessed prasad in the presence of the deity.',
  },
]

export default function RitualServicesPage() {
  return (
    <>
      <PageHero
        eyebrow='Ritual Services'
        title='Sacred rituals for the soul'
        subtitle='Connect with the divine through time-honoured rituals performed by experienced priests at the holiest temples in the Himalayas.'
        image='/images/ritual.png'
      />

      <section className='bg-background py-20 md:py-28'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='max-w-3xl'>
            <Reveal>
              <p className='font-mono text-xs uppercase tracking-[0.3em] text-primary'>
                Our Rituals
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className='mt-5 font-serif text-3xl leading-tight text-foreground md:text-5xl'>
                Honor, devotion and divine connection
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className='mt-8 text-pretty leading-relaxed text-muted-foreground'>
                Some prayers can only be answered at the holiest of places. Whether it's honoring a
                loved one who has passed, seeking blessings for a new beginning, or performing sacred
                rituals for spiritual purification, we coordinate everything with experienced priests
                and temple authorities so your intentions are honoured with utmost reverence.
              </p>
            </Reveal>
          </div>

          <div className='mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {RITUALS.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className='rounded-2xl border border-border bg-card p-8'>
                  <r.icon className='h-7 w-7 text-primary' strokeWidth={1.5} />
                  <h3 className='mt-6 font-serif text-lg text-foreground'>{r.title}</h3>
                  <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-card py-20 md:py-28'>
        <div className='mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center'>
          <Reveal>
            <div className='relative aspect-[4/5] overflow-hidden rounded-2xl'>
              <Image
                src='/images/gallery-1.png'
                alt='Temple bells and offerings'
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className='font-mono text-xs uppercase tracking-[0.3em] text-primary'>
                Why Trust Us
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className='mt-5 text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl'>
                Rituals conducted with authenticity and care
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className='mt-8 space-y-4 text-pretty leading-relaxed text-muted-foreground'>
                <li className='flex gap-4'>
                  <span className='mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm'>
                    ✓
                  </span>
                  <span>Partnerships with established temples and experienced priests</span>
                </li>
                <li className='flex gap-4'>
                  <span className='mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm'>
                    ✓
                  </span>
                  <span>Transparent pricing with no hidden temple fees</span>
                </li>
                <li className='flex gap-4'>
                  <span className='mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm'>
                    ✓
                  </span>
                  <span>Complete documentation and certificates upon ritual completion</span>
                </li>
                <li className='flex gap-4'>
                  <span className='mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm'>
                    ✓
                  </span>
                  <span>Follow-up support and spiritual guidance after the ritual</span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
