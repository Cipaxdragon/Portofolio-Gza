'use client'

import React from 'react'
import Image from 'next/image'

export default function HorizontalTimeline({ profiles, onSelect, activeId }) {
  // Define specific experiences and their unique IDs for the tabs
  const tabExperiences = [];
  
  // 1. Kreasi
  const kreasi = profiles[1]?.experiences.find(e => e.orgName && e.orgName.includes("Kreasi"));
  if (kreasi) tabExperiences.push({ ...kreasi, tabId: 'kreasi', orgId: 'kreasi', profileAvatar: profiles[1].avatarUrl, profileName: profiles[1].name });

  // 2. Inaugurasi
  const inaugurasi = profiles[1]?.experiences.find(e => e.orgName && e.orgName.includes("Saintek"));
  if (inaugurasi) tabExperiences.push({ ...inaugurasi, tabId: 'inaugurasi', orgId: 'inaugurasi', profileAvatar: profiles[1].avatarUrl, profileName: profiles[1].name });

  // 3. HMJ 2023 (Anggota)
  const hmj23 = profiles[1]?.experiences.find(e => e.role && e.role.includes("Anggota"));
  if (hmj23) tabExperiences.push({ ...hmj23, tabId: 'hmj23', orgId: 'hmj23', profileAvatar: profiles[1].avatarUrl, profileName: profiles[1].name });

  // 4. HMJ 2024 (Ketua)
  const hmj24 = profiles[1]?.experiences.find(e => e.role && e.role.includes("Ketua"));
  if (hmj24) tabExperiences.push({ ...hmj24, tabId: 'hmj24', orgId: 'hmj24', profileAvatar: profiles[1].avatarUrl, profileName: profiles[1].name });

  // 5. Afilabs
  const afilabs = profiles[0]?.experiences[0];
  if (afilabs) tabExperiences.push({ ...afilabs, tabId: 'afilabs', orgId: 'afilabs', profileAvatar: profiles[0].avatarUrl, profileName: profiles[0].name });

  return (
    <div className="w-full relative mb-4">
      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-8 sm:px-12 py-8 md:py-4 gap-8 md:gap-0">
        
        {/* Continuous Background Line */}
        {/* Desktop Horizontal Line */}
        <div className="hidden md:block absolute left-16 right-16 top-1/2 h-[2px] bg-white/10 -translate-y-1/2 z-0" />
        {/* Mobile Vertical Line */}
        <div className="md:hidden absolute left-[55px] sm:left-[71px] top-12 bottom-12 w-[2px] bg-white/10 z-0" />
        
        {/* Active Line Progress */}
        {(() => {
          const activeIndex = tabExperiences.findIndex(e => e.tabId === activeId);
          const progressPercentage = activeIndex === -1 ? 0 : (activeIndex / (tabExperiences.length - 1)) * 100;
          return (
            <>
              {/* Desktop Active Line */}
              <div 
                className="hidden md:block absolute left-16 top-1/2 h-[2px] bg-white/70 -translate-y-1/2 z-0 transition-all duration-700 shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
                style={{ width: `calc(${progressPercentage}% - ${progressPercentage > 0 ? (activeIndex === tabExperiences.length - 1 ? 64 : 32) : 0}px)` }} 
              />
              {/* Mobile Active Line */}
              <div 
                className="md:hidden absolute left-[55px] sm:left-[71px] top-12 w-[2px] bg-white/70 z-0 transition-all duration-700 shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
                style={{ height: `calc(${progressPercentage}% - ${progressPercentage > 0 ? (activeIndex === tabExperiences.length - 1 ? 48 : 24) : 0}px)` }} 
              />
            </>
          )
        })()}

        {/* Timeline Nodes */}
        {tabExperiences.map((exp, idx) => {
          const isActive = activeId === exp.tabId;
          // Cleanup role and org name
          let shortRole = exp.role;
          let shortOrgName = "HMJ Sistem Informasi"; // default
          
          if (shortRole.includes("Inagurasi") || shortRole.includes("Kreasi") || shortRole.includes("Pubdok")) {
            shortRole = "Panitia Pubdok";
          } else if (shortRole.includes("Ketua Divisi")) {
            shortRole = "Ketua Divisi Kominfo";
          } else if (shortRole.includes("Anggota Divisi")) {
            shortRole = "Anggota Divisi Kominfo";
          } else if (shortRole.includes("Motion Graphics")) {
            shortRole = "Motion Graphics Designer";
          }

          if (exp.tabId === 'kreasi') shortOrgName = "Kreasi 021";
          else if (exp.tabId === 'inaugurasi') shortOrgName = "Inagurasi Saintek";
          else if (exp.tabId === 'hmj23' || exp.tabId === 'hmj24') shortOrgName = "HMJ Sistem Informasi";
          else if (exp.tabId === 'afilabs') shortOrgName = "Afilabs";

          // Cleanup period string
          let shortYear = exp.periode;
          if (shortYear.includes("2024")) shortYear = "2024";
          else if (shortYear.includes("2023")) shortYear = "2023";
          else if (shortYear.includes("2022")) shortYear = "2022";
          else if (shortYear.includes("Probation") || shortYear.includes("Percobaan")) shortYear = "2025";

          return (
            <div 
              key={idx}
              onClick={() => onSelect(exp.tabId)}
              className="relative z-10 flex flex-row md:flex-col items-center justify-start md:justify-center w-full md:w-36 cursor-pointer group gap-6 md:gap-0"
            >
              {/* Desktop Top Text Space (Hidden on mobile) */}
              <div className="hidden md:flex h-24 flex-col items-center justify-end pb-4 w-full transition-all duration-300">
                <h3 className={`text-sm text-center font-bold leading-tight w-40 mb-1 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                  {shortOrgName}
                </h3>
                <p className={`text-xs text-center font-medium leading-tight w-40 ${isActive ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-400'}`}>
                  {shortRole}
                </p>
              </div>
              
              {/* Node Circle (Left on Mobile, Center on Desktop) */}
              <div className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 transition-all duration-500 shrink-0 md:my-0 ${isActive ? 'bg-[#111] border-white shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-110' : 'bg-[#0a0a0a] border-white/20 group-hover:border-white/50 group-hover:scale-105'}`}>
                 <div className={`relative w-full h-full rounded-full overflow-hidden ${exp.tabId === 'afilabs' ? 'bg-white' : 'bg-black p-1.5 md:p-2'}`}>
                   <Image src={exp.avatarUrl || exp.profileAvatar} alt="Logo" fill className={`object-contain ${exp.tabId === 'afilabs' ? 'p-1.5 scale-110' : 'p-2'}`} />
                 </div>
              </div>
              
              {/* Desktop Bottom Text Space (Hidden on mobile) */}
              <div className="hidden md:flex h-20 items-start justify-center pt-4 w-full transition-all duration-300">
                <span className={`inline-block text-xs text-center font-semibold px-3 py-1 rounded-full border ${isActive ? 'bg-white/20 text-white border-white/50' : 'bg-white/5 text-gray-500 border-white/10 group-hover:text-gray-300'}`}>
                  {shortYear}
                </span>
              </div>

              {/* Mobile Text Space (Right of circle) */}
              <div className="flex md:hidden flex-col items-start w-full">
                 <h3 className={`text-base font-bold leading-tight mb-1 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                   {shortOrgName}
                 </h3>
                 <p className={`text-xs font-medium leading-tight mb-2 ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                   {shortRole}
                 </p>
                 <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${isActive ? 'bg-white/20 text-white border-white/50' : 'bg-white/5 text-gray-500 border-white/10'}`}>
                   {shortYear}
                 </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
