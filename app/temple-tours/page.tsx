import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { FinalCta } from '@/components/final-cta'
import { Compass, Lightbulb, Shield, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Temple Tours | KedarFly',
  description:
    'Guided visits to sacred shrines across the Himalayas — from the ancient temples of Kedarnath and Badrinath to hidden ashrams and lesser-known pilgrimage sites.',
}

const OFFERINGS = [
  {
    icon: Compass,
    title: 'Char Dham Circuit',
    desc: 'All four sacred temples woven into a seamless, spiritually enriching pilgrimage journey.',
  },
  {
    icon: Lightbulb,
    title: 'Spiritual Briefings',
    desc: 'Learn the mythology, legends and significance of each shrine before you arrive.',
  },
  {
    icon: Shield,
    title: 'Expert Coordination',
    desc: 'Darshan timing, priest interactions and rituals arranged with local connections.',
  },
  {
    icon: Clock,
    title: 'Flexible Pacing',
    desc: 'Rest days, meditation sessions and time for personal reflection built into every itinerary.',
  },
]

export default function TempleTourPage() {
  return (
    <>
      <PageHero
        eyebrow='Temple Tours'
        title='The sacred pilgrimage route'
        subtitle='Guided visits to Kedarnath, Badrinath and beyond — each temple tour is crafted to deepen your spiritual connection and create lasting memories.'
        image='/images/temple-tours.png'
      />

      <section className='bg-background py-20 md:py-28'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='max-w-3xl'>
            <Reveal>
              <p className='font-mono text-xs uppercase tracking-[0.3em] text-primary'>
                Our Approach
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className='mt-5 font-serif text-3xl leading-tight text-foreground md:text-5xl'>
                More than a tour, a spiritual awakening
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className='mt-8 text-pretty leading-relaxed text-muted-foreground'>
                Every temple carries centuries of prayer, devotion and divine energy. Our temple tours
                go beyond sightseeing — we pair each visit with spiritual context, local legends and
                meaningful rituals so you experience the temples not as a tourist, but as a pilgrim.
                Whether it's the roar of the Mandakini at Kedarnath or the serene ghats of Badrinath,
                each moment is designed to leave you changed.
              </p>
            </Reveal>
          </div>

          <div className='mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {OFFERINGS.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className='rounded-2xl border border-border bg-card p-8'>
                  <o.icon className='h-7 w-7 text-primary' strokeWidth={1.5} />
                  <h3 className='mt-6 font-serif text-lg text-foreground'>{o.title}</h3>
                  <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>{o.desc}</p>
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
                src='/images/journey-guptkashi.png'
                alt='Mountain temple town'
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className='font-mono text-xs uppercase tracking-[0.3em] text-primary'>
                Why Choose Our Tours
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className='mt-5 text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl'>
                Guided by those who know the mountains
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className='mt-8 space-y-4 text-pretty leading-relaxed text-muted-foreground'>
                <li className='flex gap-4'>
                  <span className='mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm'>
                    ✓
                  </span>
                  <span>Local guides with deep knowledge of temple traditions and rituals</span>
                </li>
                <li className='flex gap-4'>
                  <span className='mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm'>
                    ✓
                  </span>
                  <span>Pre-arranged darshan timings to avoid long queues</span>
                </li>
                <li className='flex gap-4'>
                  <span className='mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm'>
                    ✓
                  </span>
                  <span>Comfortable pacing with rest and reflection time</span>
                </li>
                <li className='flex gap-4'>
                  <span className='mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm'>
                    ✓
                  </span>
                  <span>24x7 support throughout your spiritual journey</span>
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
