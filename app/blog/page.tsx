import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { BLOG_POSTS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Journal | KedarFly',
  description:
    'Guides, tips and stories from the Himalayan pilgrimage trail — Kedarnath, Badrinath and the Char Dham.',
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        image="/images/journey-rishikesh.png"
        eyebrow="The Journal"
        title="Stories from the trail"
        subtitle="Practical guides and reflections to help you prepare for the mountains and the shrines that await."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 md:py-32">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                data-cursor="Read"
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 font-num text-[10px] uppercase tracking-[0.15em] text-foreground backdrop-blur">
                    {post.category}
                  </div>
                </div>
                <div className="mt-5">
                  <p className="font-num text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    {post.date} · {post.readTime}
                  </p>
                  <h2 className="mt-2 flex items-start gap-2 font-heading text-2xl font-light leading-snug text-foreground">
                    <span className="transition-colors group-hover:text-saffron">
                      {post.title}
                    </span>
                    <ArrowUpRight className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-saffron" />
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
