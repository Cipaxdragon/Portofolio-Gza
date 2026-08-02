'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { hmjProfile, hmjGallery, hmjReels, hmjYoutube, youtubeProfile } from '@/data/organizationWork'
import { committeeReels } from '@/data/committeeData'
import { Play, Heart, MessageCircle, MoreHorizontal, ChevronDown, Check, Copy, X, ExternalLink, ChevronLeft, ChevronRight, Video, MousePointer2, Monitor, Layers, Film, Crosshair } from 'lucide-react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { 
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  TbBrandAdobePremiere,
  TbBrandAdobeAfterEffect
} from 'react-icons/tb'
import { SiFigma } from 'react-icons/si'
import SectionHeader from '@/components/shared/SectionHeader'

const LiteYouTubeEmbed = ({ videoId, title, onClick }) => {
  return (
    <div 
      className="w-full h-full relative cursor-pointer group"
      onClick={onClick}
    >
      <Image 
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
        alt={title} 
        fill 
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-brand-primary/90 group-hover:border-brand-primary transition-all duration-300">
          <Play className="w-8 h-8 text-white ml-1 group-hover:text-black transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default function SocialGallery() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBtsSlide, setCurrentBtsSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('posts');
  const [activeCommitteeTab, setActiveCommitteeTab] = useState('Kreasi');
  const [showBTS, setShowBTS] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const constraintsRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredGallery = activeTab === 'reels' 
    ? [...hmjReels, ...hmjGallery.filter(post => post.type === 'video')]
    : hmjGallery;

  const openPost = (post) => {
    setSelectedPost(post);
    setCurrentSlide(0);
    setCurrentBtsSlide(0);
    setShowBTS(false);
  };

  const btsGallery = [...hmjGallery, ...hmjReels].filter(post => post.btsUrl || (post.btsSlides && post.btsSlides.length > 0));

  const getToolIcon = (name) => {
    switch (name) {
      case 'Premiere Pro': return <TbBrandAdobePremiere className="w-4 h-4 text-[#9999FF]" />
      case 'After Effects': return <TbBrandAdobeAfterEffect className="w-4 h-4 text-[#9999FF]" />
      case 'Photoshop': return <TbBrandAdobePhotoshop className="w-4 h-4 text-[#31A8FF]" />
      case 'Illustrator': return <TbBrandAdobeIllustrator className="w-4 h-4 text-[#FF9A00]" />
      case 'Figma': return <SiFigma className="w-[14px] h-[14px] text-[#F24E1E]" />
      case 'CapCut': return <Image src="/images/logos/capcut-seeklogo.png" alt="CapCut" className="w-[14px] h-[14px] object-contain" width={14} height={14} />
      default: return null
    }
  }

  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'monitor': return <Monitor className="w-4 h-4 text-brand-primary" />;
      case 'layers': return <Layers className="w-4 h-4 text-brand-primary" />;
      case 'film': return <Film className="w-4 h-4 text-brand-primary" />;
      case 'crosshair': return <Crosshair className="w-4 h-4 text-brand-primary" />;
      case 'video': return <Video className="w-4 h-4 text-brand-primary" />;
      default: return <div className="w-2 h-2 rounded-full bg-brand-primary"></div>;
    }
  }

  return (
    <>
      <section id="works" className="py-20 md:py-32 bg-black min-h-screen relative overflow-hidden" ref={constraintsRef}>
      {/* Menggunakan max-w-4xl untuk membatasi kelebaran */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        <SectionHeader title="Organization Work." align="left" />
        
        <div className="mb-16 mt-8 border-l-2 border-brand-primary/30 pl-8 lg:pl-10 ml-6 sm:ml-8">
          {hmjProfile.experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className={`relative ${idx !== 0 ? 'mt-14' : ''}`}
            >
              
              {/* Timeline Nodes */}
              {(exp.avatarUrl || idx === 0) ? (
                <div className="absolute -left-[57px] lg:-left-[69px] -top-3 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#111] border-[4px] border-[#0a0a0a] shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-hidden z-10 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image src={exp.avatarUrl || hmjProfile.avatarUrl} alt="Logo Organisasi" fill className="object-contain bg-black" />
                  </div>
                </div>
              ) : (
                <div className="absolute -left-[40px] lg:-left-[48px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#0a0a0a] border-[4px] border-brand-primary z-10 shadow-[0_0_12px_rgba(var(--brand-primary-rgb),0.8)]"></div>
              )}
              
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">{exp.role}</h3>
              <div className="mb-4">
                <p className="text-brand-primary font-medium text-xs sm:text-sm md:text-base">
                  {exp.orgName || hmjProfile.name} • {exp.periode}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                  {exp.duration}
                </p>
              </div>
              
              <p className="text-brand-muted text-sm sm:text-base lg:text-lg leading-relaxed mb-6 whitespace-pre-line">
                {exp.description}
              </p>
              
              {/* Inline Media Card (LinkedIn Style) */}
              {exp.proofData && (
                <div 
                  className="mb-6 flex items-center gap-4 cursor-pointer group rounded-xl hover:bg-white/5 p-2 -ml-2 transition-colors w-full sm:w-max pr-6 border border-transparent hover:border-white/10"
                  onClick={() => openPost(exp.proofData)}
                >
                  <div className="relative w-24 h-16 sm:w-32 sm:h-20 rounded-lg overflow-hidden border border-white/10 bg-black flex-shrink-0">
                    <Image src={exp.proofData.url} alt="Proof Thumbnail" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base group-hover:text-brand-primary transition-colors line-clamp-2">
                      {exp.proofData.title || exp.role}
                    </h4>
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 lg:px-4 lg:py-1.5 bg-[#1a1a1a] border border-white/10 rounded-full text-xs lg:text-sm font-medium text-gray-300 hover:text-white hover:border-brand-primary/50 transition-colors cursor-default"
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
        <div className="flex flex-col mb-24">
          
          {/* Instagram Web Header */}
          <div className="w-full max-w-4xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-16">
              
              {/* Profile Picture */}
              <div className="relative w-24 h-24 sm:w-36 sm:h-36 flex-shrink-0 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-fuchsia-600 p-[3px]">
                <div className="w-full h-full bg-black rounded-full p-[3px]">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image src={hmjProfile.avatarUrl} alt="Avatar" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-5">
                  <h2 className="text-xl sm:text-2xl text-white font-semibold">{hmjProfile.username}</h2>
                  <a 
                    href={`https://instagram.com/${hmjProfile.username}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-5 py-1.5 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
                  >
                    View Profile
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                
                <div className="flex gap-6 sm:gap-10 mb-5 text-sm sm:text-base">
                  <div className="text-gray-300"><span className="font-bold text-white">{hmjProfile.posts}</span> posts</div>
                  <div className="text-gray-300"><span className="font-bold text-white">{hmjProfile.followers}</span> followers</div>
                  <div className="text-gray-300"><span className="font-bold text-white">{hmjProfile.following}</span> following</div>
                </div>

                <div className="text-sm">
                  <h3 className="font-bold text-white mb-1">{hmjProfile.name}</h3>
                  <p className="text-gray-300 whitespace-pre-line">{hmjProfile.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Instagram Grid (Now Full Width) */}
          <div className="w-full border-t border-white/10 pt-10 lg:pt-16">
            <div className="mb-8 flex justify-center gap-8 sm:gap-16 text-sm font-bold tracking-widest uppercase">
              <div 
                onClick={() => setActiveTab('posts')}
                className={`inline-flex items-center gap-2 border-t-[3px] pt-3 px-2 -mt-[42px] lg:-mt-[66px] cursor-pointer transition-colors ${activeTab === 'posts' ? 'border-white text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                <span>Posts</span>
              </div>
              <div 
                onClick={() => setActiveTab('reels')}
                className={`inline-flex items-center gap-2 border-t-[3px] pt-3 px-2 -mt-[42px] lg:-mt-[66px] cursor-pointer transition-colors ${activeTab === 'reels' ? 'border-white text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
              >
                <Video className="w-4 h-4" />
                <span>Reels</span>
              </div>
            </div>
            
            {filteredGallery.length > 0 ? (
              <div className="grid grid-cols-3 gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
                {filteredGallery.map((post, index) => (
                <motion.div 
                  key={post.id}
                  onClick={() => openPost(post)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-[4/5] relative rounded-md overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all shadow-lg"
                >
                  <Image src={post.url} alt="Gallery item" fill sizes="33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  
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
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-1.5 sm:p-2 rounded-full">
                      <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="white" />
                    </div>
                  )}

                  {/* Carousel Icon Badge */}
                  {post.type === 'carousel' && (
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-1.5 sm:p-2 rounded-full">
                      <Copy className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
              </div>
            ) : (
              <div className="py-20 text-center text-gray-500 font-medium">
                Belum ada postingan untuk tab ini.
              </div>
            )}

            {/* View More on Instagram Button */}
            <div className="mt-12 flex justify-center">
              <a 
                href={`https://instagram.com/${hmjProfile.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-primary text-black hover:bg-brand-primary/90 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(var(--brand-primary-rgb),0.3)]"
              >
                Kunjungi Instagram HMJSI 
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* --- THE CRAFT (BEHIND THE SCENES) --- */}
        {btsGallery.length > 0 && (
          <div className="mb-24 pt-12 border-t border-white/10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">The Craft & Timelines</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Melihat lebih dekat proses di balik layar. Geser (pan) area kanvas di bawah ini layaknya Figma untuk melihat-lihat layer editing dari karya kami.
              </p>
            </div>
            
            {/* FIGMA-LIKE CANVAS VIEWPORT */}
            <div 
              ref={constraintsRef}
              className="w-full h-[600px] bg-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden relative shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"
              style={{ cursor: 'grab' }}
              onMouseDown={(e) => { e.currentTarget.style.cursor = 'grabbing'; }}
              onMouseUp={(e) => { e.currentTarget.style.cursor = 'grab'; }}
              onMouseLeave={(e) => { e.currentTarget.style.cursor = 'grab'; }}
            >
              
              {/* Canvas Background Grid (Miro/Figma style) */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

              <motion.div 
                drag 
                dragConstraints={constraintsRef} 
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                className="w-[3000px] h-[2000px] relative"
                initial={{ x: -300, y: -200 }} // Start slightly panned
              >
                {btsGallery.map((post, idx) => {
                  // Generate scattered layout positions
                  const scatterPositions = [
                    { top: '15%', left: '10%' },
                    { top: '45%', left: '28%' },
                    { top: '25%', left: '55%' },
                    { top: '65%', left: '15%' },
                    { top: '55%', left: '70%' },
                    { top: '80%', left: '40%' },
                    { top: '30%', left: '80%' },
                    { top: '85%', left: '75%' },
                    { top: '10%', left: '40%' },
                    { top: '90%', left: '20%' },
                  ];
                  const pos = scatterPositions[idx % scatterPositions.length];
                  
                  return (
                    <motion.div 
                      key={`bts-${post.id}-${idx}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                        transition={{ delay: 0.2 + (idx * 0.1) }}
                      className="absolute bg-[#111] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl"
                      style={{ top: pos.top, left: pos.left, width: '400px' }}
                    >
                      <div className="relative aspect-video w-full bg-black">
                        <Image src={post.btsUrl || (post.btsSlides && post.btsSlides[0])} alt="Behind the scenes" fill className="object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button 
                            onClick={(e) => { 
                              e.stopPropagation(); // prevent drag trigger if possible
                              openPost(post); 
                              setShowBTS(true); 
                            }}
                            className="bg-brand-primary text-black font-bold px-6 py-2 rounded-full text-sm hover:scale-105 transition-transform"
                          >
                            Buka Postingan
                          </button>
                        </div>
                      </div>
                      <div className="p-4 border-t border-white/10 bg-black/50 backdrop-blur-sm pointer-events-none">
                        <div className="flex items-center gap-2 mb-1">
                          <Video className="w-4 h-4 text-brand-primary" />
                          <span className="text-xs font-bold text-brand-primary tracking-wider uppercase">Editing Timeline</span>
                        </div>
                        <p className="text-xs text-gray-300 truncate">
                          {post.caption ? post.caption.split('\n')[0] : 'Project Timeline Breakdown'}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        )}

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
                  <LiteYouTubeEmbed 
                    videoId={video.videoId} 
                    title={video.title} 
                    onClick={() => openPost({
                      id: `yt-${video.id}`,
                      type: 'video',
                      videoUrl: `https://www.youtube.com/embed/${video.videoId}`,
                      caption: video.title,
                      link: `https://www.youtube.com/watch?v=${video.videoId}`
                    })}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* --- BLOCK 3: EVENT COMMITTEES --- */}
        <div className="mt-32 pt-16 border-t border-white/10">
          <SectionHeader 
            title="Inauguration Committees" 
            subtitle="Documentation & Event Publications before HMJ" 
          />
          
          <div className="flex justify-center mb-10">
            <div className="flex bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-sm relative overflow-hidden">
              <div 
                className="absolute inset-y-1.5 rounded-full bg-white transition-all duration-300 ease-out shadow-lg"
                style={{
                  left: activeCommitteeTab === 'Kreasi' ? '6px' : '50%',
                  width: 'calc(50% - 6px)'
                }}
              ></div>
              <button
                className={`relative px-8 py-2.5 rounded-full font-bold text-sm transition-colors z-10 w-[180px] ${
                  activeCommitteeTab === 'Kreasi' ? 'text-black' : 'text-white/60 hover:text-white'
                }`}
                onClick={() => setActiveCommitteeTab('Kreasi')}
              >
                Inagurasi Kreasi
              </button>
              <button
                className={`relative px-8 py-2.5 rounded-full font-bold text-sm transition-colors z-10 w-[180px] ${
                  activeCommitteeTab === 'Saintek' ? 'text-black' : 'text-white/60 hover:text-white'
                }`}
                onClick={() => setActiveCommitteeTab('Saintek')}
              >
                Inagurasi Saintek
              </button>
            </div>
          </div>

          {/* Main Full Video (After Movie) */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3 pl-2 border-l-4 border-brand-primary">
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
                  Official After Movie
                </h3>
              </div>
              {activeCommitteeTab === 'Kreasi' && (
                <div className="relative w-12 h-12">
                  <Image src="/images/logos/Logo_kreasi 1.png" alt="Logo Kreasi" fill className="object-contain" />
                </div>
              )}
            </div>
            
            <div 
              className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video cursor-pointer group"
              onClick={() => openPost({
                id: `yt-main-${activeCommitteeTab}`,
                type: 'video',
                videoUrl: `https://www.youtube.com/embed/${activeCommitteeTab === 'Kreasi' ? 'fwiCSi1J5bE' : 'tnSu4-KT4zc'}`,
                caption: activeCommitteeTab === 'Kreasi' ? 'Inagurasi Kreasi 021 - Official After Movie' : 'Inagurasi Fakultas Saintek 2022 - Official After Movie',
                link: `https://www.youtube.com/watch?v=${activeCommitteeTab === 'Kreasi' ? 'fwiCSi1J5bE' : 'tnSu4-KT4zc'}`
              })}
            >
              <LiteYouTubeEmbed 
                videoId={activeCommitteeTab === 'Kreasi' ? 'fwiCSi1J5bE' : 'tnSu4-KT4zc'} 
                title="Official After Movie" 
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {committeeReels.filter(reel => reel.category === activeCommitteeTab).map((reel, index) => (
              <motion.div 
                key={reel.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="aspect-[9/16] w-full bg-[#1a1a1a] rounded-xl overflow-hidden cursor-pointer group relative border border-white/10 shadow-lg"
                onClick={() => openPost(reel)}
              >
                <Image src={reel.url} alt="Thumbnail" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                
                {/* Play Icon Overlay */}
                <div className="absolute top-3 right-3 text-white drop-shadow-md">
                  <Play className="w-5 h-5 fill-white" />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5 text-white font-bold">
                      <Heart className="w-5 h-5 fill-white" /> {reel.likes}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>

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
              layout
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className={`bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl w-full max-h-[90vh] flex flex-col md:flex-row transition-all duration-500 ease-out ${showBTS ? 'max-w-[90vw] md:max-w-[85vw] md:h-[80vh]' : 'max-w-3xl md:h-[480px]'}`}
            >
              {/* Kiri: Media */}
              <div className={`relative bg-black flex items-center justify-center group transition-all duration-500 ease-out ${showBTS ? (selectedPost.canvasNodes ? 'w-full h-[100vh] md:h-full' : 'w-full h-[40vh] md:h-full md:w-3/4') : 'w-full h-[40vh] md:h-full md:w-[55%]'}`}>
                
                {showBTS && (selectedPost.btsUrl || selectedPost.btsSlides || selectedPost.canvasNodes) ? (
                  selectedPost.canvasNodes ? (
                    <div className="w-full h-full relative cursor-grab active:cursor-grabbing bg-[#0a0a0a]">
                      <TransformWrapper
                        initialScale={0.8}
                        minScale={0.2}
                        maxScale={4}
                        centerOnInit
                        wheel={{ step: 0.01, smoothStep: 0.002 }}
                        pinch={{ step: 5 }}
                      >
                        <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
                          <div className="grid grid-cols-2 gap-12 p-12 md:p-24 w-[1200px] md:w-[1800px]">
                            
                            {selectedPost.canvasNodes.map((node, i) => {
                              const isFullWidth = node.fullWidth || ((node.type === 'video' || node.type === 'youtube') && selectedPost.canvasNodes.length > 2);
                              return (
                                <div key={i} className={`flex flex-col gap-5 ${isFullWidth ? 'col-span-2' : ''}`}>
                                  {/* Media Box */}
                                  <div className={`relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black ${isFullWidth ? 'aspect-video w-full max-w-5xl mx-auto' : 'aspect-video'}`}>
                                    {node.type === 'video' ? (
                                      <video 
                                        src={node.src} 
                                        autoPlay loop muted playsInline preload="none"
                                        className="w-full h-full object-contain"
                                      />
                                    ) : node.type === 'youtube' ? (
                                      <iframe 
                                        src={`${node.src}?autoplay=1&mute=1&loop=1`} 
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                      ></iframe>
                                    ) : (
                                    <Image src={node.src} alt={node.title} fill className="object-contain" />
                                  )}
                                  </div>
                                
                                {/* Info Card (Glassmorphism) */}
                                <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl relative overflow-hidden group hover:bg-white/10 transition-colors ${isFullWidth ? 'w-full max-w-5xl mx-auto' : ''}`}>
                                   <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary"></div>
                                   <h4 className="text-white font-bold flex items-center gap-3 mb-3 text-lg">
                                     {renderIcon(node.icon)}
                                     {node.title}
                                   </h4>
                                   <p className="text-white/70 text-sm md:text-base leading-relaxed">
                                     {node.desc}
                                   </p>
                                </div>
                              </div>
                            );
                          })}

                          </div>
                        </TransformComponent>
                      </TransformWrapper>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-5 py-2.5 rounded-full text-white/90 text-xs sm:text-sm flex items-center gap-2 pointer-events-none z-50 shadow-2xl border border-white/10">
                        <MousePointer2 className="w-4 h-4 text-brand-primary" /> Scroll to Zoom, Drag to Pan
                      </div>
                    </div>
                  ) : selectedPost.btsSlides ? (
                    <>
                      {(selectedPost.btsSlides[currentSlide]).endsWith('.mp4') ? (
                        <video 
                          src={selectedPost.btsSlides[currentSlide]} 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          preload="none"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Image src={selectedPost.btsSlides[currentSlide]} alt="Behind the Scenes Timeline" fill className="object-contain" />
                      )}
                      
                      {/* BTS Carousel Controls */}
                      {currentSlide > 0 && (
                        <button 
                          onClick={(e) => { e.stopPropagation(); setCurrentSlide(prev => prev - 1); }}
                          className="absolute left-6 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                      )}
                      {currentSlide < selectedPost.btsSlides.length - 1 && (
                        <button 
                          onClick={(e) => { e.stopPropagation(); setCurrentSlide(prev => prev + 1); }}
                          className="absolute right-6 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      )}
                      
                      {/* BTS Carousel Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                        {selectedPost.btsSlides.map((_, i) => (
                          <div key={i} className={`h-2 rounded-full transition-all ${currentSlide === i ? 'w-6 bg-brand-primary' : 'w-2 bg-white/50'}`}></div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Image src={selectedPost.btsUrl} alt="Behind the Scenes Timeline" fill className="object-contain" />
                  )
                ) : selectedPost.type === 'video' ? (
                  selectedPost.videoUrl ? (
                    selectedPost.videoUrl.includes('youtube.com') || selectedPost.videoUrl.includes('youtu.be') ? (
                      <iframe 
                        src={`${selectedPost.videoUrl}${selectedPost.videoUrl.includes('?') ? '&' : '?'}autoplay=1&modestbranding=1&rel=0`} 
                        className="w-full h-full min-h-[300px] md:min-h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video 
                        src={selectedPost.videoUrl} 
                        controls 
                        autoPlay 
                        preload="none"
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
                        preload="none"
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

                {/* BTS Title Overlay (Removed: Moved to right sidebar) */}
                {/* BTS Close Button (Removed: Moved to right sidebar) */}

                {/* BTS Toggle Overlay Button */}
                {(selectedPost.btsUrl || selectedPost.btsSlides || selectedPost.canvasNodes) && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); setShowBTS(!showBTS); }}
                    className={`absolute top-6 left-6 z-50 transition-all duration-300 flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm shadow-xl backdrop-blur-md border ${
                      showBTS 
                        ? 'bg-white text-black hover:bg-gray-200 border-white/50' 
                        : 'bg-black/70 text-white hover:bg-black border-white/20 hover:border-brand-primary'
                    }`}
                  >
                    <Video className="w-4 h-4" />
                    {showBTS ? "Kembali ke Tampilan Utama" : (selectedPost.btsButtonText || "Lihat Behind The Scenes")}
                  </button>
                )}
              </div>

              {/* Right: Content Area (Dihilangkan sepenuhnya saat mode Canvas aktif agar layar luas) */}
              {(!showBTS || (!selectedPost.canvasNodes && selectedPost.btsType !== 'canvas')) && (
                <div className={`w-full flex flex-col min-h-0 md:h-full max-h-[50vh] md:max-h-full border-t md:border-t-0 md:border-l border-white/10 bg-[#111] transition-all duration-500 ${showBTS ? 'md:w-1/4' : 'md:w-[45%]'}`}>
                
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full overflow-hidden relative flex-shrink-0 flex justify-center items-center ${selectedPost.isProof ? 'bg-brand-primary' : 'bg-brand-primary/20'}`}>
                      {showBTS ? (
                        <Video className="w-4 h-4 text-brand-primary" />
                      ) : selectedPost.isProof ? (
                        <Layers className="w-4 h-4 text-black" />
                      ) : (
                        <Image src={hmjProfile.avatarUrl} alt="avatar" fill className="object-cover" />
                      )}
                    </div>
                    <span className="font-bold text-sm text-white">
                      {showBTS ? "Project Breakdown" : selectedPost.isProof ? "Role Documentation" : hmjProfile.username}
                    </span>
                  </div>
                  <button onClick={() => setSelectedPost(null)} className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                {/* Caption / Description (Scrollable) */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
                  {showBTS ? (
                    <div className="text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap animate-in fade-in duration-300">
                      {selectedPost.btsDescription || "Sebuah cuplikan dari struktur layer dan proses editing di balik layar untuk karya ini."}
                    </div>
                  ) : selectedPost.isProof ? (
                    <div className="flex flex-col animate-in fade-in duration-300 h-full">
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                        {selectedPost.title}
                      </h2>
                      <div className="w-12 h-1 bg-brand-primary mb-6 rounded-full"></div>
                      <div className="text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                        {selectedPost.caption}
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-white/10 mt-auto">
                        <div className="flex items-center gap-2 text-brand-primary font-semibold text-sm">
                          <Check className="w-4 h-4" />
                          <span>Official Structural Documentation</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Bukti sah desain struktural, manajemen tim, dan antarmuka (UI/UX).
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-3 animate-in fade-in duration-300">
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
                  )}
                </div>
                {/* Footer Action (Only for IG Post/Youtube) */}
                {!showBTS && !selectedPost.isProof && (
                  <div className="p-4 border-t border-white/10 animate-in slide-in-from-bottom-2 duration-300">
                    {!(selectedPost.link && selectedPost.link.includes('youtube')) && (
                      <>
                        <div className="flex items-center gap-4 mb-3">
                          <Heart className="w-6 h-6 text-white" />
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="font-bold text-sm text-white mb-4">
                          {selectedPost.likes} suka
                        </div>
                      </>
                    )}
                    <a 
                      href={selectedPost.link || `https://instagram.com/${hmjProfile.username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold transition-colors ${
                        selectedPost.link && selectedPost.link.includes('youtube') 
                          ? 'bg-[#FF0000] hover:bg-[#CC0000] text-white' 
                          : 'bg-white hover:bg-gray-200 text-black'
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {selectedPost.link && selectedPost.link.includes('youtube') ? 'Buka di YouTube' : 'Buka di Instagram'}
                    </a>
                  </div>
                )}
              </div>
            )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
