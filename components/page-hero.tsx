import Image from 'next/image'
import type { ReactNode } from 'react'
import { TextReveal } from '@/components/reveal'

export function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  image: string
  eyebrow?: string
  title: string
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <section className="relative flex min-h-[68vh] items-end overflow-hidden">
      <Image
        src={image || '/placeholder.svg'}
        alt={title}
        fill
        priority
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.45) 45%, rgba(13,27,42,0.55) 100%)',
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-8">
        {eyebrow && (
          <p className="mb-4 font-num text-xs uppercase tracking-[0.3em] text-saffron">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl font-heading text-5xl font-light leading-[1.05] text-background text-balance md:text-7xl">
          <TextReveal text={title} />
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-background/75 md:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
