'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { hmjProfile, hmjGallery, hmjYoutube, youtubeProfile } from '@/data/organizationWork'
import { Play, Heart, MessageCircle, MoreHorizontal, ChevronDown, Check, Copy, X, ExternalLink, ChevronLeft, ChevronRight, Video } from 'lucide-react'
import { 
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  TbBrandAdobePremiere,
  TbBrandAdobeAfterEffect
} from 'react-icons/tb'
import { SiFigma } from 'react-icons/si'
import SectionHeader from '@/components/shared/SectionHeader'

export default function SocialGallery() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openPost = (post) => {
    setSelectedPost(post);
    setCurrentSlide(0);
  };

  const getToolIcon = (name) => {
    switch (name) {
      case 'Premiere Pro': return <TbBrandAdobePremiere className="w-4 h-4 text-[#9999FF]" />
      case 'After Effects': return <TbBrandAdobeAfterEffect className="w-4 h-4 text-[#9999FF]" />
      case 'Photoshop': return <TbBrandAdobePhotoshop className="w-4 h-4 text-[#31A8FF]" />
      case 'Illustrator': return <TbBrandAdobeIllustrator className="w-4 h-4 text-[#FF9A00]" />
      case 'Figma': return <SiFigma className="w-[14px] h-[14px] text-[#F24E1E]" />
      case 'CapCut': return <img src="https://cdn.simpleicons.org/capcut/FFFFFF" alt="CapCut" className="w-[14px] h-[14px] object-contain" />
      default: return null
    }
  }

  return (
    <section className="py-20 lg:py-32 relative z-10 border-t border-brand-border">
      <div className="container mx-auto px-4 sm:px-6">
        
        <SectionHeader title="Organization Work." align="left" />
        
        {/* Experience Details (LinkedIn Style) */}
        <div className="mb-16 mt-8 max-w-4xl border-l-2 border-brand-primary/30 pl-8 lg:pl-10 ml-6 lg:ml-8">
          {hmjProfile.experiences.map((exp, idx) => (
            <div key={idx} className={`relative ${idx !== 0 ? 'mt-14' : ''}`}>
              
              {/* Timeline Nodes */}
              {idx === 0 ? (
                <div className="absolute -left-[57px] lg:-left-[69px] -top-3 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#111] border-[4px] border-[#0a0a0a] shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-hidden z-10 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image src={hmjProfile.avatarUrl} alt="Logo HMJSI" fill className="object-cover" />
                  </div>
                </div>
              ) : (
                <div className="absolute -left-[40px] lg:-left-[48px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#0a0a0a] border-[4px] border-brand-primary z-10 shadow-[0_0_12px_rgba(var(--brand-primary-rgb),0.8)]"></div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
              <div className="mb-4">
                <p className="text-brand-primary font-medium text-sm lg:text-base">
                  {hmjProfile.name} • {exp.periode}
                </p>
                <p className="text-gray-400 text-sm mt-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                  {exp.duration}
                </p>
              </div>
              
              <p className="text-brand-muted text-lg leading-relaxed mb-6 whitespace-pre-line">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-1.5 bg-[#1a1a1a] border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:border-brand-primary/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Tools & Apps Used */}
              {exp.tools && (
                <div className="flex flex-wrap items-center gap-2 lg:gap-3 mt-5 pt-5 border-t border-white/10">
                  <span className="text-sm font-medium text-gray-400 mr-1 lg:mr-2">Aplikasi:</span>
                  {exp.tools.map((tool, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 px-3.5 py-1.5 bg-black/40 border border-white/5 rounded-full text-xs font-medium text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default"
                      title={tool.name}
                    >
                      <div className="flex items-center justify-center">
                        {getToolIcon(tool.name)}
                      </div>
                      {tool.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- BLOCK 1: INSTAGRAM --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-20">
          
          {/* LEFT: Phone Mockup (Sticky) */}
          <div className="w-full lg:w-[320px] flex-shrink-0 flex justify-center lg:justify-start lg:sticky lg:top-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-[280px] sm:w-[320px] bg-black rounded-[3rem] p-2 sm:p-3 shadow-[0_0_50px_rgba(255,255,255,0.2)] border border-[#111]"
            >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 sm:h-7 bg-black rounded-b-2xl z-20"></div>
              
              {/* Screen Content */}
              <div className="bg-[#000000] rounded-[2.5rem] overflow-hidden relative border border-[#111] h-[550px] sm:h-[600px] flex flex-col">
                {/* Top Bar */}
                <div className="px-5 pt-8 pb-3 flex justify-between items-center bg-black sticky top-0 z-10 border-b border-white/10">
                  <div className="flex items-center gap-2 font-semibold">
                    {hmjProfile.username}
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </div>

                {/* Profile Info */}
                <div className="px-4 py-4 flex items-center justify-between">
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-fuchsia-600 p-[2px]">
                    <div className="w-full h-full bg-black rounded-full p-[2px]">
                      <div className="w-full h-full rounded-full overflow-hidden relative">
                        <Image src={hmjProfile.avatarUrl} alt="Avatar" fill className="object-cover" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 text-center">
                    <div>
                      <div className="font-bold">{hmjProfile.posts}</div>
                      <div className="text-xs text-gray-400">posts</div>
                    </div>
                    <div>
                      <div className="font-bold">{hmjProfile.followers}</div>
                      <div className="text-xs text-gray-400">followers</div>
                    </div>
                    <div>
                      <div className="font-bold">{hmjProfile.following}</div>
                      <div className="text-xs text-gray-400">following</div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="px-4 pb-4">
                  <h2 className="font-bold text-sm mb-1">{hmjProfile.name}</h2>
                  <p className="text-sm whitespace-pre-line text-gray-300">{hmjProfile.bio}</p>
                </div>

                {/* Feed Highlights (Mini Grid in Phone) */}
                <div className="grid grid-cols-3 gap-0.5 mt-auto bg-black">
                  {hmjGallery.slice(0, 9).map((post) => (
                    <a key={post.id} href={post.link || `https://instagram.com/${hmjProfile.username}`} target="_blank" rel="noopener noreferrer" className="aspect-square relative group block">
                      <Image src={post.url} alt="Post" fill className="object-cover" />
                      {post.type === 'video' && (
                        <div className="absolute top-1 right-1">
                          <Play className="w-3 h-3 text-white" fill="white" />
                        </div>
                      )}
                      {post.type === 'carousel' && (
                        <div className="absolute top-1 right-1">
                          <Copy className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" fill="white" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Instagram Grid */}
          <div className="w-full flex-1">
            <div className="mb-6 border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white">Instagram Feed</h3>
              <p className="text-gray-400 text-sm">Visual Design & Content Creation</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
              {hmjGallery.map((post, index) => (
                <motion.div 
                  key={post.id}
                  onClick={() => openPost(post)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-square relative rounded-xl overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all shadow-lg"
                >
                  <Image src={post.url} alt="Gallery item" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                      <Heart className="w-6 h-6" fill="white" />
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                      <MessageCircle className="w-6 h-6" fill="white" />
                      {post.comments}
                    </div>
                  </div>

                  {/* Video Icon Badge */}
                  {post.type === 'video' && (
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-2 rounded-full">
                      <Play className="w-4 h-4 text-white" fill="white" />
                    </div>
                  )}

                  {/* Carousel Icon Badge */}
                  {post.type === 'carousel' && (
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-2 rounded-full">
                      <Copy className="w-4 h-4 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* View More on Instagram Button */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <a 
                href={`https://instagram.com/${hmjProfile.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold text-white transition-all hover:scale-105 group"
              >
                Kunjungi Instagram HMJSI 
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>

          </div>

        </div>


        {/* --- BLOCK 2: YOUTUBE --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* LEFT: YouTube Channel Card (Sticky) */}
          <div className="w-full lg:w-[320px] flex-shrink-0 flex justify-center lg:justify-start lg:sticky lg:top-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-[320px] bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl group hover:border-white/20 transition-all duration-500"
            >
              {/* Banner */}
              <div className="h-28 bg-black relative">
                <div className="absolute inset-0 bg-[url('https://yt3.googleusercontent.com/cxDgNdMImzBElk9gLvTEZJt7NCD8dFX-3e80dnR4D4H0T-R-dOFLj948UWOGSw93uV85mhF-ig=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj')] bg-cover bg-center"></div>
              </div>
              
              {/* Profile Details */}
              <div className="px-6 pb-8 relative -mt-10">
                <div className="relative w-20 h-20 rounded-full border-4 border-[#0f0f0f] overflow-hidden bg-black mb-4 shadow-lg flex items-center justify-center">
                  <Image src={hmjProfile.avatarUrl} alt="Channel Avatar" fill className="object-cover" />
                </div>
                
                <h3 className="text-xl font-bold text-white leading-tight mb-1">
                  {youtubeProfile.channelName}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{youtubeProfile.handle}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <div><strong className="text-white font-semibold">{youtubeProfile.subscribers}</strong> subscribers</div>
                  <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                  <div><strong className="text-white font-semibold">{youtubeProfile.videos}</strong> videos</div>
                </div>

                <a 
                  href={youtubeProfile.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-white hover:bg-gray-200 text-black text-center py-2.5 rounded-full font-bold text-sm transition-colors"
                >
                  Subscribe
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: YouTube Video Grid */}
          <div className="w-full flex-1">
            <div className="mb-6 border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white">YouTube Videos</h3>
              <p className="text-gray-400 text-sm">Video Production & Podcasting</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {hmjYoutube.map((video, index) => (
                <motion.div 
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-video w-full rounded-xl overflow-hidden border border-white/5 shadow-lg bg-black relative group"
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* INSTAGRAM POST MODAL */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Left: Image / Video Area */}
              <div className="relative w-full md:w-3/5 bg-black h-[40vh] md:h-auto min-h-[300px] flex items-center justify-center group">
                
                {selectedPost.type === 'video' ? (
                  selectedPost.videoUrl ? (
                    selectedPost.videoUrl.includes('youtube.com') || selectedPost.videoUrl.includes('youtu.be') ? (
                      <iframe 
                        src={`${selectedPost.videoUrl}${selectedPost.videoUrl.includes('?') ? '&' : '?'}autoplay=1`} 
                        className="w-full h-full min-h-[300px] md:min-h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video 
                        src={selectedPost.videoUrl} 
                        controls 
                        autoPlay 
                        className="w-full h-full object-contain"
                      />
                    )
                  ) : (
                    <Image src={selectedPost.url} alt="Video thumbnail" fill className="object-contain" />
                  )
                ) : selectedPost.type === 'carousel' && selectedPost.slides ? (
                  <>
                    {(selectedPost.slides[currentSlide] || selectedPost.url).endsWith('.mp4') ? (
                      <video 
                        src={selectedPost.slides[currentSlide]} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Image src={selectedPost.slides[currentSlide] || selectedPost.url} alt="Post image" fill className="object-contain" />
                    )}
                    
                    {/* Carousel Controls */}
                    {currentSlide > 0 && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); setCurrentSlide(prev => prev - 1); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    )}
                    {currentSlide < selectedPost.slides.length - 1 && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); setCurrentSlide(prev => prev + 1); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    )}
                    
                    {/* Carousel Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {selectedPost.slides.map((_, i) => (
                        <div key={i} className={`h-1.5 rounded-full transition-all ${currentSlide === i ? 'w-4 bg-brand-primary' : 'w-1.5 bg-white/50'}`}></div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Image src={selectedPost.url} alt="Post image" fill className="object-contain" />
                )}

              </div>

              {/* Right: Content Area */}
              <div className="w-full md:w-2/5 flex flex-col min-h-0 max-h-[50vh] md:max-h-full border-t md:border-t-0 md:border-l border-white/10 bg-[#111]">
                
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden relative">
                      <Image src={hmjProfile.avatarUrl} alt="avatar" fill className="object-cover" />
                    </div>
                    <span className="font-bold text-sm text-white">{hmjProfile.username}</span>
                  </div>
                  <button onClick={() => setSelectedPost(null)} className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                {/* Caption (Scrollable) */}
                <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden relative flex-shrink-0">
                      <Image src={hmjProfile.avatarUrl} alt="avatar" fill className="object-cover" />
                    </div>
                    <div>
                      <span className="font-bold text-sm text-white mr-2">{hmjProfile.username}</span>
                      <span className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
                        {selectedPost.caption || "Dokumentasi kegiatan dan karya desain dari Himpunan Mahasiswa Jurusan Sistem Informasi (HMJSI) UIN Alauddin Makassar. ✨\n\n#HMJSI #SistemInformasi #UINAM #Design"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex items-center gap-4 mb-3">
                    <Heart className="w-6 h-6 text-white" />
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-sm text-white mb-4">
                    {selectedPost.likes} suka
                  </div>
                  <a 
                    href={selectedPost.link || `https://instagram.com/${hmjProfile.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-brand-primary hover:bg-blue-600 text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    Lihat di Instagram <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
