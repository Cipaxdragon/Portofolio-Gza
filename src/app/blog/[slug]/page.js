'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import NeonButton from '@/components/shared/NeonButton'
import CardMotion from '@/components/shared/CardMotion'
import { blogPosts } from '@/data/blog'

function renderMarkdown(content) {
  // Simple markdown-to-HTML (handles headings, paragraphs, bold, links, lists, code)
  if (!content) return ''
  const lines = content.split('\n')
  let html = ''

  lines.forEach((line) => {
    if (line.startsWith('### ')) {
      html += `<h3 class="text-xl font-semibold text-brand-text mt-8 mb-3">${line.slice(4)}</h3>`
    } else if (line.startsWith('## ')) {
      html += `<h2 class="text-2xl font-bold text-brand-text mt-10 mb-4">${line.slice(3)}</h2>`
    } else if (line.startsWith('# ')) {
      html += `<h1 class="text-3xl font-bold text-brand-text mt-10 mb-4">${line.slice(2)}</h1>`
    } else if (line.startsWith('- ')) {
      html += `<li class="ml-4 text-brand-muted list-disc">${line.slice(2)}</li>`
    } else if (line.startsWith('`') && line.endsWith('`')) {
      html += `<code class="rounded bg-brand-card px-2 py-1 font-mono text-sm text-brand-accent">${line.slice(1, -1)}</code>`
    } else if (line.trim() === '') {
      html += '<br/>'
    } else {
      html += `<p class="text-brand-muted leading-relaxed mb-4">${line}</p>`
    }
  })

  return html
}

export default function BlogPost() {
  const params = useParams()
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-20"
            >
              <h1 className="text-3xl font-bold text-brand-text mb-4">
                Post Not Found
              </h1>
              <p className="text-brand-muted mb-8">
                Blog post yang kamu cari tidak ditemukan.
              </p>
              <NeonButton variant="outline" href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </NeonButton>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Related posts (same category, exclude current)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2)

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-brand-muted hover:text-brand-accent transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </a>
          </motion.div>

          {/* Featured Image */}
          {post.thumbnail && (
            <motion.div
              className="relative aspect-[2/1] w-full overflow-hidden rounded-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={post.thumbnail}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </motion.div>
          )}

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {post.category && (
              <span className="inline-block rounded-md bg-brand-accent/10 px-2.5 py-0.5 text-xs font-medium text-brand-accent mb-4">
                {post.category}
              </span>
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-brand-text leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mt-4 text-sm text-brand-muted">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime} min read
              </span>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-2 mt-4 flex-wrap">
                <Tag size={12} className="text-brand-muted/50" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-border px-2.5 py-0.5 text-[11px] text-brand-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Divider */}
          <div className="my-8 h-[1px] bg-brand-border" />

          {/* Content */}
          <motion.div
            className="prose prose-invert max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <div className="h-[1px] bg-brand-border mb-12" />
              <h3 className="text-xl font-semibold text-brand-text mb-6">
                Related Posts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rp, i) => (
                  <CardMotion key={rp.slug} delay={i * 0.1}>
                    <h4 className="text-sm font-semibold text-brand-text">
                      {rp.title}
                    </h4>
                    <p className="mt-1 text-xs text-brand-muted line-clamp-2">
                      {rp.excerpt}
                    </p>
                    <a
                      href={`/blog/${rp.slug}`}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-accent"
                    >
                      Read more <ArrowLeft size={10} className="rotate-180" />
                    </a>
                  </CardMotion>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  )
}
