import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { FinalCta } from '@/components/final-cta'
import { BLOG_POSTS, getBlogPost } from '@/lib/site'

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: 'Journal | KedarFly' }
  return { title: `${post.title} | KedarFly`, description: post.excerpt }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  return (
    <>
      <article>
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src={post.image || '/placeholder.svg'}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.3) 60%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl px-5 pb-12 lg:px-8">
            <p className="font-num text-[11px] uppercase tracking-[0.2em] text-saffron">
              {post.category} · {post.readTime}
            </p>
            <h1 className="mt-3 font-heading text-4xl font-light leading-[1.1] text-background text-balance md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-3 font-num text-xs uppercase tracking-[0.15em] text-background/60">
              {post.date}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8 md:py-24">
          <div className="space-y-7">
            {post.body.map((para, i) => (
              <Reveal key={i} delay={0}>
                <p className="font-sans text-lg leading-relaxed text-foreground/85">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <Link
              href="/blog"
              data-cursor="link"
              className="inline-flex items-center gap-2 font-num text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-saffron"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Journal
            </Link>
          </div>
        </div>
      </article>

      <FinalCta />
    </>
  )
}
