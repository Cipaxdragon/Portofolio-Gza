'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, BookMarked, Layout, Package, Star, Folder, File, FileCode2, Search, Link as LinkIcon, Users, MapPin, GitFork, ArrowLeft, TerminalSquare, MonitorPlay, ExternalLink, Code2, X, CheckCircle2, Server, Database, Wrench, Award, Rocket, Bot } from 'lucide-react'
import { FaGithub, FaReact, FaLaravel, FaDatabase, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaFigma, FaRobot } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiFramer, SiMysql, SiPhp, SiVite, SiBootstrap, SiExpress, SiGoogle } from 'react-icons/si'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import SectionHeader from '@/components/shared/SectionHeader'
import { codingWorks } from '@/data/codingWorks'
import { profile as localProfileData } from '@/data/profile'

const GITHUB_USERNAME = 'cipaxdragon'

const certificates = localProfileData.certificates.filter(cert => cert.issuer.toLowerCase().includes('codepolitan'));

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-5 h-5 text-brand-primary" />,
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-5 h-5 text-[#ff5f56]" />,
      skills: [
        { name: "Laravel", icon: <FaLaravel className="text-[#FF2D20]" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> }
      ]
    },
    {
      title: "Bahasa Dikuasai",
      icon: <TerminalSquare className="w-5 h-5 text-[#27c93f]" />,
      skills: [
        { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> }
      ]
    },
    {
      title: "Tools AI",
      icon: <Bot className="w-5 h-5 text-purple-500" />,
      colSpan: "md:col-span-3",
      skills: [
        { name: "Antigravity", icon: <img src="/images/logos/antigravity.jpg" alt="Antigravity AI" className="w-6 h-6 rounded-md object-cover" /> },
        { name: "Gemini AI", icon: <SiGoogle className="text-[#4285F4]" /> }
      ]
    }
  ]

  return (
    <div className="mb-24 w-full">
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <Code2 className="text-brand-primary w-8 h-8" /> Tech Arsenal
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`bg-[#0d1117] border border-white/10 rounded-2xl p-6 hover:border-brand-primary/30 transition-colors group relative overflow-hidden ${cat.colSpan || ''}`}
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-primary/10 transition-colors" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/10 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h4 className="text-lg font-bold text-white">{cat.title}</h4>
            </div>
            <div className="flex flex-wrap gap-3 relative z-10">
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="flex items-center gap-3 px-4 py-2.5 bg-[#161b22] text-gray-300 border border-white/5 hover:border-brand-primary/50 hover:text-white hover:bg-white/5 rounded-lg text-sm sm:text-base font-semibold transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(0,217,255,0.15)] hover:-translate-y-0.5">
                  <div className="flex items-center justify-center text-[1.4rem]">
                    {skill.icon}
                  </div>
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const CertificationsSection = () => {
  return (
    <div className="mb-24 w-full">
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <Award className="text-brand-primary w-8 h-8" /> Licenses & Certifications
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 overflow-hidden"
          >
             {/* Glow Effect */}
             <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 via-brand-primary/0 to-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="flex items-start justify-between gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 shrink-0 border border-white/20 shadow-lg">
                  <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-base leading-tight mb-1 group-hover:text-brand-primary transition-colors line-clamp-2">{cert.title}</h4>
                  <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-500 text-[10px] font-mono mb-3">Issued {cert.date} · ID: {cert.credentialId}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-white transition-colors">
                    Show Credential <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function CodingShowcase() {
  // FEATURED PROJECTS STATE
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)

  // GITHUB CLONE STATE
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [activeTab, setActiveTab] = useState('repositories')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewState, setViewState] = useState('list') 
  const [currentRepo, setCurrentRepo] = useState(null)
  const [currentPath, setCurrentPath] = useState('')
  const [fileTree, setFileTree] = useState([])
  const [fileContent, setFileContent] = useState(null)
  const [readmeContent, setReadmeContent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isRepoLoading, setIsRepoLoading] = useState(false)

  // Block body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      setActiveMediaIndex(0)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedProject])

  // Fetch GitHub Profile and Repos
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
        ])
        
        if (profileRes.ok) setProfile(await profileRes.json())
        if (reposRes.ok) setRepos(await reposRes.json())
      } catch (error) {
        console.error("Error fetching GitHub data:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchGithubData()
  }, [])

  const handleOpenRepo = async (repo) => {
    setCurrentRepo(repo)
    setViewState('repo')
    setCurrentPath('')
    setReadmeContent(null)
    setIsRepoLoading(true)
    
    try {
      const treeRes = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/contents`)
      if (treeRes.ok) {
        const treeData = await treeRes.json()
        const sortedTree = treeData.sort((a, b) => {
          if (a.type === b.type) return a.name.localeCompare(b.name)
          return a.type === 'dir' ? -1 : 1
        })
        setFileTree(sortedTree)

        const readmeFile = treeData.find(f => f.name.toLowerCase() === 'readme.md')
        if (readmeFile) {
          const readmeRes = await fetch(readmeFile.download_url)
          if (readmeRes.ok) setReadmeContent(await readmeRes.text())
        }
      }
    } catch (error) {
      console.error("Error fetching repo tree:", error)
    } finally {
      setIsRepoLoading(false)
    }
  }

  const handleOpenFile = async (item) => {
    if (item.type === 'dir') {
      setIsRepoLoading(true)
      try {
        const treeRes = await fetch(item.url)
        if (treeRes.ok) {
          const treeData = await treeRes.json()
          const sortedTree = treeData.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name)
            return a.type === 'dir' ? -1 : 1
          })
          setFileTree(sortedTree)
          setCurrentPath(item.path)
        }
      } catch (error) {
        console.error("Error fetching folder:", error)
      } finally {
        setIsRepoLoading(false)
      }
    } else if (item.type === 'file') {
      setIsRepoLoading(true)
      try {
        const fileRes = await fetch(item.download_url)
        if (fileRes.ok) {
          setFileContent({ name: item.name, text: await fileRes.text() })
          setViewState('file')
        }
      } catch (error) {
        console.error("Error fetching file:", error)
      } finally {
        setIsRepoLoading(false)
      }
    }
  }

  const goBack = () => {
    if (viewState === 'file') {
      setViewState('repo')
      setFileContent(null)
    } else if (viewState === 'repo') {
      if (currentPath !== '') {
        handleOpenRepo(currentRepo)
      } else {
        setViewState('list')
        setCurrentRepo(null)
        setFileTree([])
        setReadmeContent(null)
      }
    }
  }

  const filteredRepos = repos.filter(repo => repo.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <section id="coding-showcase" className="relative bg-black min-h-screen pb-24">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* SECTION 1: FEATURED PROJECTS */}
      <div className="relative px-4 sm:px-6 py-12 sm:py-24 mx-auto max-w-6xl z-10">
        <SectionHeader
          title="Programming & Development."
          subtitle="Repositori kode, antarmuka aplikasi, dan proyek pengembangan perangkat lunak sebagai mahasiswa Sistem Informasi."
        />

        <SkillsSection />
        
        <CertificationsSection />

        {/* BENTO GRID UNTUK GITHUB CARDS */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <TerminalSquare className="text-brand-primary w-8 h-8" /> Featured Projects
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {codingWorks.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-purple-500 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-md group-hover:blur-xl" />
              <div className="relative h-full bg-[#0d1117]/90 backdrop-blur-xl border border-white/10 group-hover:border-white/20 rounded-2xl overflow-hidden flex flex-col z-10 transition-colors duration-500">
                <div className="h-10 bg-[#161b22] border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-xs font-mono text-gray-500">
                    bash ~ {work.repoName.split('/')[1]}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-brand-primary/10 rounded-xl border border-brand-primary/20 text-brand-primary group-hover:scale-110 transition-transform">
                        <TerminalSquare className="w-6 h-6" />
                      </div>
                      <a href={work.repoUrl} target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl font-bold text-white hover:text-brand-primary transition-colors line-clamp-1">
                        {work.title}
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {work.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 hover:bg-brand-primary/10 text-gray-300 hover:text-brand-primary border border-white/10 hover:border-brand-primary/30 rounded-md text-xs font-mono transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-4 bg-[#010409]/80 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: work.languageColor, color: work.languageColor }}></span>
                      <span className="text-gray-300">{work.language}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-white transition-colors cursor-help">
                      <Star className="w-4 h-4 text-yellow-500/80" />
                      <span>{work.stars}</span>
                    </div>
                    <a href={work.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                      <GitFork className="w-4 h-4 text-gray-500" />
                      <span>{work.forks}</span>
                    </a>
                  </div>

                  <button onClick={() => setSelectedProject(work)} className="flex items-center gap-2 text-sm font-bold text-black bg-white hover:bg-brand-primary px-4 py-2 rounded-lg transition-colors group/btn">
                    <MonitorPlay className="w-4 h-4" /> 
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION 2: GITHUB CLONE */}
      <div className="w-full bg-[#0d1117] border-t border-white/10 text-[#c9d1d9] font-sans pt-12 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-8">
          
          {/* LEFT SIDEBAR: PROFILE */}
          <div className="w-full md:w-[296px] shrink-0">
            {isLoading ? (
              <div className="animate-pulse flex flex-col gap-4">
                <div className="w-64 h-64 rounded-full bg-[#21262d]" />
                <div className="h-6 w-32 bg-[#21262d] rounded" />
                <div className="h-4 w-48 bg-[#21262d] rounded" />
              </div>
            ) : profile && (
              <div className="flex flex-col">
                <img src={profile.avatar_url} alt="Profile" className="w-full max-w-[296px] rounded-full border border-[#30363d] mb-4 shadow-[0_0_0_1px_rgba(240,246,252,0.1)]" />
                <h1 className="flex flex-col mb-4">
                  <span className="text-2xl font-bold text-[#c9d1d9]">{profile.name}</span>
                  <span className="text-xl text-[#8b949e] font-light">{profile.login}</span>
                </h1>
                <button className="w-full py-1.5 mb-4 bg-[#21262d] hover:bg-[#30363d] border border-[#363b42] rounded-md text-sm font-semibold transition-colors">
                  Follow
                </button>
                <p className="text-[#c9d1d9] mb-4 text-sm">{profile.bio}</p>
                
                <div className="flex items-center gap-1 text-sm text-[#8b949e] mb-4 hover:text-[#58a6ff] transition-colors cursor-pointer">
                  <Users className="w-4 h-4" />
                  <span className="text-[#c9d1d9] font-bold">{profile.followers}</span> followers
                  <span>·</span>
                  <span className="text-[#c9d1d9] font-bold">{profile.following}</span> following
                </div>
                
                <ul className="text-sm text-[#c9d1d9] flex flex-col gap-1.5">
                  {profile.location && <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#8b949e]" /> {profile.location}</li>}
                  {profile.blog && (
                    <li className="flex items-center gap-2">
                      <LinkIcon className="w-4 h-4 text-[#8b949e]" /> 
                      <a href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`} target="_blank" rel="noreferrer" className="hover:text-[#58a6ff] hover:underline">{profile.blog}</a>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT MAIN AREA */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* TABS NAVIGATION */}
            <div className="flex items-center gap-2 border-b border-[#21262d] overflow-x-auto no-scrollbar mb-6">
              <button className="flex items-center gap-2 px-4 py-3 text-sm text-[#8b949e] hover:text-[#c9d1d9] transition-colors whitespace-nowrap border-b-2 border-transparent">
                <BookOpen className="w-4 h-4" /> Overview
              </button>
              <button className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#c9d1d9] border-b-2 border-[#f78166] whitespace-nowrap">
                <BookMarked className="w-4 h-4 text-[#8b949e]" /> Repositories
                <span className="bg-[#161b22] px-2 py-0.5 rounded-full text-xs border border-transparent font-medium">{repos.length}</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-3 text-sm text-[#8b949e] hover:text-[#c9d1d9] transition-colors whitespace-nowrap border-b-2 border-transparent">
                <Layout className="w-4 h-4" /> Projects
              </button>
              <button className="flex items-center gap-2 px-4 py-3 text-sm text-[#8b949e] hover:text-[#c9d1d9] transition-colors whitespace-nowrap border-b-2 border-transparent">
                <Package className="w-4 h-4" /> Packages
              </button>
            </div>

            {/* VIEW 1: REPOSITORIES LIST */}
            {viewState === 'list' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 relative">
                    <input 
                      type="text" 
                      placeholder="Find a repository..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#0d1117] border border-[#30363d] rounded-md py-1.5 px-3 text-sm text-white focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]"
                    />
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <button className="bg-[#21262d] border border-[#363b42] px-3 py-1.5 rounded-md text-sm font-medium hover:bg-[#30363d]">Type</button>
                    <button className="bg-[#21262d] border border-[#363b42] px-3 py-1.5 rounded-md text-sm font-medium hover:bg-[#30363d]">Language</button>
                    <button className="bg-[#21262d] border border-[#363b42] px-3 py-1.5 rounded-md text-sm font-medium hover:bg-[#30363d]">Sort</button>
                  </div>
                </div>

                <div className="flex flex-col border-t border-[#21262d]">
                  {isLoading ? (
                    <div className="py-8 text-center text-[#8b949e]">Loading repositories...</div>
                  ) : filteredRepos.length === 0 ? (
                    <div className="py-8 text-center text-[#8b949e]">0 results for repositories matching "{searchQuery}"</div>
                  ) : (
                    filteredRepos.map(repo => (
                      <div key={repo.id} className="py-6 border-b border-[#21262d] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <button onClick={() => handleOpenRepo(repo)} className="text-[#58a6ff] text-xl font-semibold hover:underline">
                              {repo.name}
                            </button>
                            <span className="border border-[#30363d] text-[#8b949e] text-xs px-2 py-0.5 rounded-full font-medium">Public</span>
                          </div>
                          {repo.description && <p className="text-[#8b949e] text-sm pr-4 line-clamp-2">{repo.description}</p>}
                          <div className="flex items-center gap-4 text-xs text-[#8b949e] mt-2">
                            {repo.language && (
                              <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-brand-primary" />
                                <span>{repo.language}</span>
                              </div>
                            )}
                            {repo.stargazers_count > 0 && <div className="flex items-center gap-1 hover:text-[#58a6ff]"><Star className="w-4 h-4" /> {repo.stargazers_count}</div>}
                            {repo.forks_count > 0 && <div className="flex items-center gap-1 hover:text-[#58a6ff]"><GitFork className="w-4 h-4" /> {repo.forks_count}</div>}
                            <span>Updated on {new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          </div>
                        </div>
                        <div className="hidden sm:block">
                          <img src={`https://ghchart.rshah.org/21262d/${GITHUB_USERNAME}`} alt="chart" className="h-8 opacity-50 sepia hue-rotate-180" />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}

            {/* VIEW 2 & 3: REPOSITORY EXPLORER OR CODE VIEWER */}
            {(viewState === 'repo' || viewState === 'file') && currentRepo && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <button onClick={goBack} className="p-1.5 bg-[#21262d] hover:bg-[#30363d] border border-[#363b42] rounded-md transition-colors text-[#c9d1d9]">
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <div className="text-xl font-semibold flex items-center gap-2 truncate">
                    <a href={profile?.html_url} target="_blank" rel="noreferrer" className="text-[#58a6ff] hover:underline">{GITHUB_USERNAME}</a>
                    <span className="text-[#8b949e]">/</span>
                    <a href={currentRepo.html_url} target="_blank" rel="noreferrer" className="text-[#58a6ff] hover:underline font-bold">{currentRepo.name}</a>
                  </div>
                </div>

                {isRepoLoading ? (
                  <div className="py-20 text-center text-[#8b949e] flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-4 border-[#58a6ff] border-t-transparent rounded-full animate-spin" /> Memuat data...
                  </div>
                ) : (
                  <>
                    {/* FILE EXPLORER */}
                    {viewState === 'repo' && (
                      <div className="flex flex-col gap-6">
                        <div className="border border-[#30363d] rounded-md overflow-hidden bg-[#0d1117]">
                          <div className="bg-[#161b22] px-4 py-3 border-b border-[#30363d] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <img src={profile?.avatar_url} alt="Avatar" className="w-6 h-6 rounded-full" />
                              <span className="text-sm font-semibold text-[#c9d1d9]">{GITHUB_USERNAME}</span>
                            </div>
                          </div>
                          <ul className="flex flex-col">
                            {currentPath !== '' && (
                              <li className="px-4 py-2.5 border-b border-[#21262d] hover:bg-[#161b22] flex items-center gap-3">
                                <button onClick={goBack} className="text-[#58a6ff] hover:underline font-semibold flex items-center gap-3 w-full text-left">
                                  <Folder className="w-4 h-4 text-[#8b949e]" /> ..
                                </button>
                              </li>
                            )}
                            {fileTree.map((item, idx) => (
                              <li key={idx} className="px-4 py-2.5 border-b border-[#21262d] hover:bg-[#161b22] flex items-center gap-3 transition-colors last:border-b-0">
                                <button onClick={() => handleOpenFile(item)} className="flex items-center gap-3 w-full text-left group">
                                  {item.type === 'dir' ? <Folder className="w-4 h-4 text-[#8b949e]" fill="#8b949e" /> : <FileCode2 className="w-4 h-4 text-[#8b949e]" />}
                                  <span className={`text-sm ${item.type === 'dir' ? 'text-[#c9d1d9] font-medium' : 'text-[#c9d1d9]'} group-hover:text-[#58a6ff] group-hover:underline`}>
                                    {item.name}
                                  </span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* README */}
                        {readmeContent && (
                          <div className="border border-[#30363d] rounded-md overflow-hidden bg-[#0d1117] mt-4">
                            <div className="bg-[#161b22] px-4 py-3 border-b border-[#30363d] flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-[#8b949e]" />
                              <span className="text-sm font-semibold text-[#c9d1d9]">README.md</span>
                            </div>
                            <div className="p-6 md:p-8 markdown-body text-[#c9d1d9]">
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>{readmeContent}</ReactMarkdown>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    {/* CODE VIEWER */}
                    {viewState === 'file' && fileContent && (
                      <div className="border border-[#30363d] rounded-md overflow-hidden bg-[#0d1117]">
                        <div className="bg-[#161b22] px-4 py-3 border-b border-[#30363d] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FileCode2 className="w-4 h-4 text-[#8b949e]" />
                            <span className="text-sm font-semibold text-[#c9d1d9]">{fileContent.name}</span>
                          </div>
                        </div>
                        <div className="p-0 text-sm overflow-x-auto">
                          <SyntaxHighlighter 
                            language={fileContent.name.split('.').pop() === 'js' ? 'javascript' : fileContent.name.split('.').pop()} 
                            style={vscDarkPlus}
                            showLineNumbers={true}
                            customStyle={{ margin: 0, padding: '1rem', background: '#0d1117' }}
                            wrapLines={true}
                          >
                            {fileContent.text}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ADVANCED POPUP MODAL (SPLIT SCREEN) FOR FEATURED PROJECTS */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-8 bg-black/80 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl max-h-[95vh] md:h-[85vh] bg-[#0d1117] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              {/* LEFT SIDEBAR: Info & Details */}
              <div className="w-full md:w-[400px] lg:w-[450px] flex-shrink-0 bg-[#0a0a0a] border-r border-white/10 flex flex-col max-h-[50vh] md:max-h-full overflow-y-auto custom-scrollbar relative z-20">
                <div className="p-6 md:p-8 flex flex-col gap-8 h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4 md:hidden">
                      <span className="text-xs font-mono text-brand-primary">Project Detail</span>
                      <button onClick={() => setSelectedProject(null)} className="p-2 bg-white/5 rounded-full text-white">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{selectedProject.title}</h2>
                    <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-primary font-mono transition-colors">
                      <FaGithub className="w-4 h-4" /> {selectedProject.repoName}
                    </a>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.description}</p>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.liveUrl && (
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-brand-primary text-black font-bold text-sm rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                        <ExternalLink className="w-4 h-4" /> Live Preview
                      </a>
                    )}
                    <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 text-white font-bold text-sm rounded-xl hover:bg-white/10 border border-white/10 transition-colors">
                      <FaGithub className="w-5 h-5" /> Source Code
                    </a>
                  </div>

                  <hr className="border-white/10" />

                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Layout className="w-4 h-4 text-brand-primary" /> Core Features
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {selectedProject.features.map((feat, idx) => (
                         <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                           <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                           <span className="leading-snug">{feat}</span>
                         </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-8">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Server className="w-4 h-4 text-brand-primary" /> Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-[#161b22] text-gray-300 border border-white/10 rounded-md text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT MAIN AREA: BROWSER MOCKUP DEMO */}
              <div className="flex-1 bg-[#010409] p-4 sm:p-8 flex items-center justify-center relative overflow-hidden">
                <button onClick={() => setSelectedProject(null)} className="hidden md:flex absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white z-50 border border-white/10 backdrop-blur-md">
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                   <div className="w-[80%] h-[80%] bg-gradient-to-tr from-brand-primary/20 to-purple-600/20 rounded-full blur-[100px]" />
                </div>
                <div className="w-full max-w-4xl flex flex-col items-center gap-6 relative z-10">
                  <div className="w-full rounded-xl overflow-hidden border border-white/20 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="h-10 bg-[#161b22] border-b border-white/10 flex items-center px-4 gap-4">
                      <div className="flex gap-1.5 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="w-full max-w-sm bg-[#010409] border border-white/10 rounded-md text-center text-xs text-gray-400 font-mono py-1 px-4 truncate">
                          {selectedProject.liveUrl ? new URL(selectedProject.liveUrl).hostname : 'localhost:3000'}
                        </div>
                      </div>
                    </div>
                    <div className="relative aspect-video bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeMediaIndex}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full"
                        >
                          {selectedProject.demoMedia[activeMediaIndex].type === 'video' ? (
                            <video src={selectedProject.demoMedia[activeMediaIndex].url} autoPlay loop muted playsInline className="w-full h-full object-contain" />
                          ) : (
                            <img src={selectedProject.demoMedia[activeMediaIndex].url} alt={selectedProject.demoMedia[activeMediaIndex].caption} className="w-full h-full object-cover" />
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 gap-4">
                    <p className="text-gray-400 text-sm italic font-serif flex-1 text-center sm:text-left">
                      "{selectedProject.demoMedia[activeMediaIndex].caption}"
                    </p>
                    {selectedProject.demoMedia.length > 1 && (
                      <div className="flex items-center gap-2 shrink-0">
                        {selectedProject.demoMedia.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveMediaIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              activeMediaIndex === idx ? 'w-6 bg-brand-primary shadow-[0_0_10px_rgba(0,217,255,0.8)]' : 'bg-white/20 hover:bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
