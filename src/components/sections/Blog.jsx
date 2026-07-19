'use client'

import SectionHeader from '@/components/shared/SectionHeader'
import CardMotion from '@/components/shared/CardMotion'
import { blogPosts } from '@/data/blog'

export default function Blog() {
  if (!blogPosts || blogPosts.length === 0) return null

  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <section id="blog" className="relative px-6 py-24 sm:py-32 bg-brand-bg-2">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Thoughts."
          subtitle="Tulisan dan pemikiran seputar kreativitas dan teknologi."
        />

        {/* Featured */}
        <CardMotion className="mb-8">
          <a
            href={`/blog/${featured.slug}`}
            className="group block relative overflow-hidden rounded-sm"
            data-cursor="hover"
          >
            <div
              className="h-[50vh] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${featured.thumbnail})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-10">
              <p className="text-label text-brand-accent mb-2">
                {featured.category} — {featured.date}
              </p>
              <h3 className="font-sans text-2xl sm:text-4xl font-bold text-white">
                {featured.title}
              </h3>
            </div>
          </a>
        </CardMotion>

        {/* Grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((post, i) => (
              <CardMotion key={post.slug} delay={i * 0.1}>
                <a
                  href={`/blog/${post.slug}`}
                  className="group block border border-brand-border rounded-sm overflow-hidden hover:border-brand-border/50 transition-colors"
                  data-cursor="hover"
                >
                  {post.thumbnail && (
                    <div
                      className="h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${post.thumbnail})` }}
                    />
                  )}
                  <div className="p-5">
                    <p className="text-label mb-2">{post.date}</p>
                    <h3 className="font-sans text-lg font-bold group-hover:text-brand-accent transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </a>
              </CardMotion>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
