'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import CardMotion from '@/components/shared/CardMotion'
import NeonButton from '@/components/shared/NeonButton'
import { blogPosts } from '@/data/blog'

function BlogCard({ post, index }) {
  return (
    <CardMotion delay={index * 0.1}>
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-brand-bg mb-4">
        {post.thumbnail ? (
          <img
            src={post.thumbnail}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-card to-brand-bg">
            <span className="text-3xl">📝</span>
          </div>
        )}

        {/* Category badge */}
        {post.category && (
          <span className="absolute top-3 left-3 rounded-md bg-brand-accent/90 px-2 py-0.5 text-[10px] font-semibold text-black">
            {post.category}
          </span>
        )}
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 text-[11px] text-brand-muted/70 mb-2">
        <span className="flex items-center gap-1">
          <Calendar size={11} />
          {new Date(post.date).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={11} />
          {post.readTime} min read
        </span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-brand-text line-clamp-2 group-hover:text-brand-accent transition-colors">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="mt-2 text-xs text-brand-muted line-clamp-2">
        {post.excerpt}
      </p>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-brand-border px-2 py-0.5 text-[10px] text-brand-muted"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Read more link */}
      <a
        href={`/blog/${post.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand-accent hover:gap-2 transition-all"
      >
        Read more <ArrowRight size={12} />
      </a>
    </CardMotion>
  )
}

function EmptyBlogState() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-border bg-brand-card">
        <Sparkles className="h-7 w-7 text-brand-accent/50" />
      </div>
      <p className="text-brand-muted text-sm font-medium">Blog coming soon ✦</p>
      <p className="mt-1 text-brand-muted/50 text-xs max-w-xs">
        Artikel dan insight seputar design, development, dan creative process.
      </p>
    </motion.div>
  )
}

export default function Blog() {
  const displayedPosts = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          title="Blog"
          subtitle="Sharing thoughts tentang design, development, dan creative process."
        />

        {displayedPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedPosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>

            {blogPosts.length > 3 && (
              <div className="mt-12 text-center">
                <NeonButton variant="outline" href="/blog">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NeonButton>
              </div>
            )}
          </>
        ) : (
          <EmptyBlogState />
        )}
      </div>
    </section>
  )
}
