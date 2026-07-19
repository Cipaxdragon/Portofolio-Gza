'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import NeonButton from '@/components/shared/NeonButton'
import CardMotion from '@/components/shared/CardMotion'
import { blogPosts } from '@/data/blog'

const POSTS_PER_PAGE = 6

function BlogCard({ post, index }) {
  return (
    <CardMotion delay={index * 0.08}>
      <a href={`/blog/${post.slug}`} className="block group">
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
          {post.category && (
            <span className="absolute top-3 left-3 rounded-md bg-brand-accent/90 px-2 py-0.5 text-[10px] font-semibold text-black">
              {post.category}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 text-[11px] text-brand-muted/70 mb-2">
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {post.date || 'Unknown Date'}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {post.readTime} min
          </span>
        </div>

        <h3 className="text-base font-semibold text-brand-text line-clamp-2 group-hover:text-brand-accent transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-brand-muted line-clamp-3">{post.excerpt}</p>

        {post.tags && (
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

        <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand-accent group-hover:gap-2 transition-all">
          Read more <ArrowRight size={12} />
        </div>
      </a>
    </CardMotion>
  )
}

export default function BlogPage() {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = blogPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  )

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text">
              Blog
            </h1>
            <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-brand-accent" />
            <p className="mt-4 text-brand-muted max-w-lg mx-auto">
              Thoughts, insights, dan tutorial seputar design, development, dan creative
              process.
            </p>
          </motion.div>

          {/* Posts grid */}
          {paginatedPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedPosts.map((post, i) => (
                  <BlogCard key={post.slug} post={post} index={i} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-4">
                  <NeonButton
                    variant="outline"
                    size="sm"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                  >
                    <ArrowLeft className="mr-1 h-3.5 w-3.5" />
                    Prev
                  </NeonButton>
                  <span className="text-sm text-brand-muted font-mono">
                    {page} / {totalPages}
                  </span>
                  <NeonButton
                    variant="outline"
                    size="sm"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                  >
                    Next
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </NeonButton>
                </div>
              )}
            </>
          ) : (
            <motion.div
              className="flex flex-col items-center justify-center py-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-border bg-brand-card">
                <Sparkles className="h-7 w-7 text-brand-accent/50" />
              </div>
              <p className="text-brand-muted text-sm font-medium">
                Blog posts coming soon ✦
              </p>
              <p className="mt-1 text-brand-muted/50 text-xs max-w-xs">
                Artikel dan tutorial seputar design dan development.
              </p>
              <div className="mt-8">
                <NeonButton variant="outline" href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </NeonButton>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
