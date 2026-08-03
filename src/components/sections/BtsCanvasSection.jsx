"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { MousePointer2, Grip } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { allBtsNodes } from '@/data/organizationWork';

export default function BtsCanvasSection() {
  if (!allBtsNodes || allBtsNodes.length === 0) return null;

  return (
    <section className="py-20 md:py-32 bg-black relative border-t border-white/10 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 mb-12">
        <SectionHeader 
          title="Global Behind The Scenes" 
          subtitle="Explore the raw process behind the final outputs" 
          align="center"
        />
        <p className="text-center text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          Scroll to Zoom in and out. Click and drag to Pan across the canvas. 
          Discover all the untold stories, software timelines, and raw footages.
        </p>
      </div>

      <div className="relative w-full h-[70vh] md:h-[80vh] bg-[#050505] border-y border-white/10 overflow-hidden group cursor-grab active:cursor-grabbing">
        
        {/* Instruction Overlay */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full text-white/90 text-sm flex items-center gap-3 pointer-events-none z-50 shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-white/10 opacity-70 group-hover:opacity-100 transition-opacity">
          <MousePointer2 className="w-4 h-4 text-brand-primary" /> 
          <span className="hidden sm:inline">Scroll to Zoom,</span> Drag to Pan
        </div>

        <TransformWrapper
          initialScale={0.5}
          minScale={0.1}
          maxScale={3}
          centerOnInit
          wheel={{ step: 0.02, smoothStep: 0.005 }}
          pinch={{ step: 5 }}
        >
          <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
            
            {/* The massive canvas grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-20 p-24 w-[1600px] md:w-[2800px] lg:w-[3600px]">
              
              {allBtsNodes.map((node, i) => {
                const isFullWidth = node.fullWidth || (node.type === 'video' && i % 4 === 0);
                
                return (
                  <motion.div 
                    key={i} 
                    className={`flex flex-col gap-5 ${isFullWidth ? 'col-span-2' : ''}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "200px" }}
                    transition={{ duration: 0.6, delay: (i % 10) * 0.05 }}
                  >
                    {/* Media Box */}
                    <div className={`relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black ${isFullWidth ? 'aspect-video w-full' : 'aspect-square md:aspect-[4/3] w-full'}`}>
                      {node.type === 'video' ? (
                        <video 
                          src={node.src} 
                          autoPlay loop muted playsInline preload="none"
                          className="w-full h-full object-cover"
                        />
                      ) : node.type === 'youtube' ? (
                        <iframe 
                          src={`${node.src}?autoplay=1&mute=1&loop=1&playlist=${node.src.split('/').pop()}`} 
                          className="w-full h-full object-cover"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        />
                      ) : (
                        <Image src={node.src} alt={node.title || "BTS"} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                      )}
                      
                      {/* Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                    </div>
                    
                    {/* Caption */}
                    {(node.title || node.desc) && (
                      <div className="bg-[#111] border border-white/5 p-6 rounded-xl shadow-lg relative -mt-10 mx-4 z-10">
                        {node.title && (
                          <h4 className="text-white font-bold text-lg md:text-xl flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                            {node.title}
                          </h4>
                        )}
                        {node.desc && (
                          <p className="text-gray-400 text-sm md:text-base mt-2 leading-relaxed">
                            {node.desc}
                          </p>
                        )}
                      </div>
                    )}
                  </motion.div>
                );
              })}

            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </section>
  );
}
