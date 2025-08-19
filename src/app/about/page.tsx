'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

// Counter Animation Hook
const useCounterAnimation = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const countRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  return { count, countRef }
}

export default function About() {
  const [activeTab, setActiveTab] = useState('mission')
  const [isVisible, setIsVisible] = useState(false)
  const [visibleTimelineItems, setVisibleTimelineItems] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    
    // Intersection Observer for timeline animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleTimelineItems(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.3 }
    )

    // Observe timeline items after component mounts
    const timeoutId = setTimeout(() => {
      const timelineItems = document.querySelectorAll('[data-timeline-item]')
      timelineItems.forEach(item => observer.observe(item))
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [])

  const stats = [
    { number: 30, suffix: '+', label: 'Years Combined Security Expertise', icon: '🛡️' },
    { number: 180, suffix: '+', label: 'Sites Secured Globally', icon: '🌍' },
    { number: 6, suffix: '', label: 'Languages Supported', icon: '💬' },
    { number: 172, suffix: '', label: 'Industries Served', icon: '🏢' }
  ]

  // Counter hooks for each stat
  const counter1 = useCounterAnimation(30, 2000)
  const counter2 = useCounterAnimation(180, 2500)
  const counter3 = useCounterAnimation(6, 1500)
  const counter4 = useCounterAnimation(172, 2200)

  const counters = [counter1, counter2, counter3, counter4]

  const timeline = [
    {
      year: '2018',
      title: 'YUBIX Foundation',
      description: 'Founded with the vision to humanize security technology, bringing together experts from elite security and counter-terrorism backgrounds.',
      highlight: 'Genesis of Innovation'
    },
    {
      year: '2019',
      title: 'Platform Development',
      description: 'Launch of core security platforms: Vertex Pro for enterprise command centers and Buzz World for secure internal communications.',
      highlight: 'Technology Breakthrough'
    },
    {
      year: '2020',
      title: 'AI Integration',
      description: 'Revolutionary AI-powered threat correlation engine deployed, enabling predictive security analytics and real-time prevention.',
      highlight: 'AI Revolution'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'International partnerships established across 6 continents, serving government agencies, corporations, and critical infrastructure.',
      highlight: 'Worldwide Reach'
    },
    {
      year: '2022',
      title: 'ISO 27001 Certification',
      description: 'Achieved international certification for information security management, validating our commitment to excellence.',
      highlight: 'Quality Excellence'
    },
    {
      year: '2024',
      title: 'Ecosystem Completion',
      description: 'Full ecosystem launch with BYONN, Fortalyx, and Security Hub, creating comprehensive security-for-everyone solutions.',
      highlight: 'Complete Ecosystem'
    }
  ]

  const leadership = [
    {
      name: 'Michael Anderson',
      role: 'Founder & CEO',
      expertise: 'Counter-Terrorism & Strategic Security',
      experience: '15+ years in elite security operations',
      background: 'Former security consultant for international governments and Fortune 500 companies',
      image: '👨‍💼'
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI & Security Technology',
      experience: '12+ years in AI and cybersecurity',
      background: 'Former lead architect at major tech companies, specializing in real-time threat detection',
      image: '👩‍💻'
    },
    {
      name: 'David Rodriguez',
      role: 'Head of Global Operations',
      expertise: 'International Security Coordination',
      experience: '18+ years in global security management',
      background: 'Former director of security for international organizations and critical infrastructure',
      image: '👨‍🔧'
    }
  ]

  const values = [
    {
      title: 'Human-First Technology',
      description: 'We design technology that enhances human capabilities rather than replacing them.',
      icon: '🤝',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Proactive Prevention',
      description: 'Real-time threat prevention takes priority over reactive response measures.',
      icon: '🛡️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Operational Excellence',
      description: 'Every solution is built on proven operational experience and field expertise.',
      icon: '⚡',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Collaborative Security',
      description: 'Security ecosystems work best when all stakeholders collaborate effectively.',
      icon: '🌐',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced Modern Design */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 right-32 w-48 h-48 border border-white/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-32 left-32 w-32 h-32 border-2 border-white/20 rotate-45"></div>
          <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Enhanced Mission Badge */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-xl px-10 py-5 rounded-2xl border border-white/30 shadow-2xl hover:border-white/40 transition-all duration-300 group">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse delay-300"></div>
                </div>
                <span className="text-white/90 text-sm font-bold uppercase tracking-wider group-hover:text-white transition-colors">Our Mission</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-700"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Heading with More Sophisticated Typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-10 leading-[1.1] tracking-tight">
              <span className="block text-white mb-6 drop-shadow-2xl relative">
                Empowering Safer
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-70"></div>
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl pb-2 relative">
                Environments Together
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent pb-2">
                30+ Years of Security Excellence
              </span>
            </h1>

            {/* Enhanced Description */}
            <div className="mb-8">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
                <span className="text-blue-300 font-semibold">Security Leadership</span>
                <span className="text-gray-400 mx-3">•</span>
                <span className="text-purple-300 font-semibold">Intelligent Innovation</span>
                <span className="text-gray-400 mx-3">•</span>
                <span className="text-cyan-300 font-semibold">Human-Centered Design</span>
              </p>
            </div>

            {/* Enhanced Subtitle */}
            <div className="max-w-5xl mx-auto mb-14">
              <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-light mb-6">
                Founded on <span className="font-bold text-cyan-300">30+ years</span> of elite security expertise, YUBIX humanizes technology to create 
                intelligent security ecosystems that prevent threats in real-time while building resilient communities.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <span>Enterprise-Grade Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-600"></div>
                  <span>Global Security Leader</span>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => {
                const counter = counters[index]
                return (
                  <div 
                    key={index} 
                    ref={counter.countRef}
                    className={`relative bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:border-white/40 group cursor-pointer`} 
                    style={{animationDelay: `${index * 0.15}s`}}
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="text-4xl lg:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">{stat.icon}</div>
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 relative overflow-hidden">
                        <span className="inline-block transition-all duration-300 group-hover:text-cyan-300">
                          {counter.count}
                          {stat.suffix}
                        </span>
                        {/* Enhanced shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                      <div className="text-sm lg:text-base text-white/70 font-medium group-hover:text-white/90 transition-colors">{stat.label}</div>
                      
                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl lg:rounded-b-3xl"></div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-14 mb-8">
              <Link
                href="#mission"
                className="group relative inline-flex items-center px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                <div className="relative flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Learn Our Story</span>
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </Link>

              <Link
                href="/contact"
                className="group relative inline-flex items-center px-10 py-5 rounded-2xl border-2 border-white/30 text-white font-bold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-2xl"></div>
                <div className="relative flex items-center">
                  <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact Us</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-slate-50" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Mission, Vision & Values - Modern Design */}
      <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-blue-200/50">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-blue-900 font-bold text-sm uppercase tracking-wider">Company Foundation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Our Core <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Identity</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built on decades of security expertise and driven by innovation
            </p>
          </div>

          {/* Modern Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'mission', label: 'Mission', icon: '🎯', color: 'from-blue-500 to-blue-600' },
              { id: 'vision', label: 'Vision', icon: '🔮', color: 'from-purple-500 to-purple-600' },
              { id: 'values', label: 'Values', icon: '⭐', color: 'from-indigo-500 to-indigo-600' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative px-8 py-4 rounded-2xl font-bold transition-all duration-300 overflow-hidden ${
                  activeTab === tab.id
                    ? 'text-white shadow-xl scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white border border-slate-200/50 hover:scale-102'
                }`}
              >
                {activeTab === tab.id && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-2xl`}></div>
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">{tab.icon}</span>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Modern Tab Content */}
          <div className="relative">
            {activeTab === 'mission' && (
              <div className="animate-fade-in">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                      Empowering Safer Environments Together
                    </h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                      Our mission is to revolutionize security through human-centered technology that prevents threats in real-time. 
                      We believe security should feel natural and empowering, not restrictive or overwhelming.
                    </p>
                  </div>
                  
                  {/* Enhanced Mission Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left Side - Core Mission Statement */}
                    <div className="space-y-8">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20"></div>
                        <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                              <span className="text-white text-xl">🎯</span>
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900">Our Core Mission</h4>
                          </div>
                          
                          <div className="space-y-6">
                            {[
                              { 
                                icon: '🛡️', 
                                title: 'Proactive Protection', 
                                desc: 'Real-time threat prevention before incidents occur, utilizing advanced AI and human expertise',
                                color: 'from-blue-500 to-cyan-500'
                              },
                              { 
                                icon: '🤝', 
                                title: 'Human-Centered Design', 
                                desc: 'Technology that enhances human capabilities while maintaining intuitive, user-friendly interfaces',
                                color: 'from-green-500 to-emerald-500'
                              },
                              { 
                                icon: '🌐', 
                                title: 'Global Security Impact', 
                                desc: 'Creating safer communities worldwide through innovative security ecosystems',
                                color: 'from-purple-500 to-pink-500'
                              }
                            ].map((item, index) => (
                              <div key={index} className="group p-6 rounded-2xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-slate-200">
                                <div className="flex items-start gap-4">
                                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="text-xl">{item.icon}</span>
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h5>
                                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">{item.desc}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Mission Impact & Principles */}
                    <div className="space-y-8">
                      {/* Mission Impact */}
                      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
                        
                        <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center">
                              <span className="text-slate-900 text-xl">📈</span>
                            </div>
                            <h4 className="text-2xl font-bold">Mission Impact</h4>
                          </div>

                          <div className="grid grid-cols-2 gap-6 mb-8">
                            {[
                              { number: '30+', label: 'Years Expertise', icon: '🎖️' },
                              { number: '180+', label: 'Sites Protected', icon: '🏢' },
                              { number: '6', label: 'Continents', icon: '🌍' },
                              { number: '24/7', label: 'Real-time Care', icon: '⏰' }
                            ].map((stat, index) => (
                              <div key={index} className="text-center group">
                                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                                <div className="text-2xl font-black text-cyan-300 mb-1">{stat.number}</div>
                                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                              </div>
                            ))}
                          </div>

                          <div className="border-t border-white/20 pt-6">
                            <p className="text-white/80 text-sm leading-relaxed mb-4">
                              &ldquo;We don&apos;t just build security systems - we create intelligent ecosystems that understand, adapt, and protect while empowering human potential.&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                                <span className="text-slate-900 text-xs font-bold">M</span>
                              </div>
                              <span className="text-cyan-300 font-semibold text-sm">Mission Statement</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Core Principles */}
                      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8">
                        <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                          <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm">✨</span>
                          Core Principles
                        </h4>
                        
                        <div className="space-y-4">
                          {[
                            'Security through collaboration, not isolation',
                            'Prevention over reaction in threat management',
                            'Human expertise enhanced by intelligent technology',
                            'Transparent, ethical security practices'
                          ].map((principle, index) => (
                            <div key={index} className="flex items-start gap-3 group">
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-blue-200 transition-colors">
                                <span className="text-blue-600 text-xs font-bold">✓</span>
                              </div>
                              <p className="text-slate-700 group-hover:text-slate-900 transition-colors">{principle}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mission Action Areas */}
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                    <div className="text-center mb-12">
                      <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">How We Deliver Our Mission</h4>
                      <p className="text-slate-600 max-w-2xl mx-auto">Three key areas where we focus our efforts to create meaningful security transformation</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        { 
                          icon: '🧠', 
                          title: 'Intelligent Prevention', 
                          desc: 'AI-powered threat detection and prediction systems that learn and adapt in real-time',
                          color: 'from-blue-500 to-indigo-500',
                          features: ['Predictive Analytics', 'Real-time Monitoring', 'Automated Response']
                        },
                        { 
                          icon: '🤝', 
                          title: 'Human Integration', 
                          desc: 'Seamless collaboration between technology and human expertise for optimal security outcomes',
                          color: 'from-green-500 to-teal-500',
                          features: ['Intuitive Interfaces', 'Expert Augmentation', 'Decision Support']
                        },
                        { 
                          icon: '🌍', 
                          title: 'Global Ecosystem', 
                          desc: 'Connected security networks that share intelligence and coordinate responses worldwide',
                          color: 'from-purple-500 to-pink-500',
                          features: ['Network Security', 'Global Intelligence', 'Coordinated Response']
                        }
                      ].map((area, index) => (
                        <div key={index} className="group">
                          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                            <div className={`w-14 h-14 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                              <span className="text-2xl">{area.icon}</span>
                            </div>
                            <h5 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{area.title}</h5>
                            <p className="text-slate-600 leading-relaxed mb-4">{area.desc}</p>
                            
                            <div className="space-y-2">
                              {area.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2 text-sm">
                                  <div className="w-4 h-4 bg-slate-200 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                    <span className="text-slate-600 text-xs group-hover:text-blue-600">•</span>
                                  </div>
                                  <span className="text-slate-600 group-hover:text-slate-700 transition-colors">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="animate-fade-in">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                      The Future of Intelligent Security
                    </h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                      We envision a world where security technology seamlessly integrates with human intuition and expertise, 
                      creating comprehensive protection ecosystems that adapt and evolve with emerging threats.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                      <h4 className="text-2xl md:text-3xl font-bold mb-8 text-center">By 2030, YUBIX will:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                          'Lead AI-powered security innovation globally',
                          'Protect 1000+ critical infrastructure sites',
                          'Serve communities in 50+ countries',
                          'Prevent threats before they manifest'
                        ].map((goal, index) => (
                          <div key={index} className="flex items-center group">
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <span className="text-slate-900 font-bold text-sm">✓</span>
                            </div>
                            <span className="text-white/90 group-hover:text-white transition-colors">{goal}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="animate-fade-in">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Our Core Values</h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                      These fundamental principles guide every decision we make and every solution we build, 
                      ensuring that our technology serves humanity&apos;s best interests.
                    </p>
                  </div>

                  {/* Enhanced Values Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {values.map((value, index) => (
                      <div key={index} className="group">
                        <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full overflow-hidden">
                          {/* Dynamic gradient overlay on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                          
                          {/* Subtle background pattern */}
                          <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                            <div className={`w-full h-full bg-gradient-to-br ${value.color} rounded-full blur-2xl`}></div>
                          </div>
                          
                          <div className="relative z-10">
                            {/* Enhanced icon container */}
                            <div className="flex items-start justify-between mb-6">
                              <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                                <span className="text-2xl">{value.icon}</span>
                              </div>
                              
                              {/* Value number indicator */}
                              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                                <span className="text-slate-600 text-sm font-bold">{index + 1}</span>
                              </div>
                            </div>

                            <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                              {value.title}
                            </h4>
                            
                            <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300">
                              {value.description}
                            </p>

                            {/* Interactive elements based on value type */}
                            <div className="space-y-3">
                              {index === 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {['Intuitive Design', 'User Empowerment', 'Accessibility'].map((tag, tagIndex) => (
                                    <span key={tagIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium group-hover:bg-blue-100 transition-colors duration-300">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                              
                              {index === 1 && (
                                <div className="flex flex-wrap gap-2">
                                  {['AI Prevention', 'Real-time Response', 'Threat Intelligence'].map((tag, tagIndex) => (
                                    <span key={tagIndex} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium group-hover:bg-green-100 transition-colors duration-300">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                              
                              {index === 2 && (
                                <div className="flex flex-wrap gap-2">
                                  {['Best Practices', 'Continuous Learning', 'Expert Knowledge'].map((tag, tagIndex) => (
                                    <span key={tagIndex} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium group-hover:bg-purple-100 transition-colors duration-300">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                              
                              {index === 3 && (
                                <div className="flex flex-wrap gap-2">
                                  {['Team Integration', 'Shared Intelligence', 'Unified Response'].map((tag, tagIndex) => (
                                    <span key={tagIndex} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium group-hover:bg-orange-100 transition-colors duration-300">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Progress indicator for each value */}
                            <div className="mt-6 pt-4 border-t border-slate-200 group-hover:border-slate-300 transition-colors duration-300">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-500">Implementation</span>
                                <span className="text-sm font-bold text-slate-700">100%</span>
                              </div>
                              <div className="w-full bg-slate-200 rounded-full h-2 mt-2 overflow-hidden">
                                <div 
                                  className={`h-full bg-gradient-to-r ${value.color} rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                                  style={{ width: '100%' }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Values in Action Section */}
                  <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-8">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className="text-center mb-12">
                        <h4 className="text-2xl md:text-3xl font-bold mb-4">Values in Action</h4>
                        <p className="text-white/80 max-w-2xl mx-auto">See how our core values translate into real-world security solutions and customer experiences</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                          { 
                            icon: '👥', 
                            title: 'Human-First', 
                            metric: '95%', 
                            desc: 'User satisfaction rate',
                            color: 'from-blue-400 to-cyan-400' 
                          },
                          { 
                            icon: '⚡', 
                            title: 'Proactive', 
                            metric: '99.7%', 
                            desc: 'Threat prevention success',
                            color: 'from-green-400 to-emerald-400' 
                          },
                          { 
                            icon: '🎯', 
                            title: 'Excellence', 
                            metric: '180+', 
                            desc: 'Sites secured globally',
                            color: 'from-purple-400 to-pink-400' 
                          },
                          { 
                            icon: '🤝', 
                            title: 'Collaborative', 
                            metric: '24/7', 
                            desc: 'Team coordination',
                            color: 'from-orange-400 to-red-400' 
                          }
                        ].map((item, index) => (
                          <div key={index} className="text-center group">
                            <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                              <span className="text-2xl">{item.icon}</span>
                            </div>
                            <div className="text-2xl font-black text-white mb-1 group-hover:text-cyan-300 transition-colors">{item.metric}</div>
                            <div className="text-white/70 text-sm font-medium mb-2">{item.desc}</div>
                            <div className="text-cyan-300 font-semibold text-sm">{item.title}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Values Framework */}
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                      <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Values Framework</h4>
                      <p className="text-slate-600 max-w-2xl mx-auto">How we integrate these values into every aspect of our security solutions and company culture</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {[
                        {
                          category: 'Product Development',
                          principles: [
                            'User-centered design process',
                            'Continuous feedback integration',
                            'Accessibility-first approach',
                            'Intuitive interface design'
                          ],
                          icon: '🛠️',
                          color: 'from-blue-500 to-indigo-500'
                        },
                        {
                          category: 'Customer Relations',
                          principles: [
                            'Transparent communication',
                            'Proactive support services',
                            'Collaborative problem-solving',
                            'Long-term partnerships'
                          ],
                          icon: '🤝',
                          color: 'from-green-500 to-teal-500'
                        },
                        {
                          category: 'Innovation Culture',
                          principles: [
                            'Continuous learning mindset',
                            'Cross-functional collaboration',
                            'Ethical technology practices',
                            'Future-focused solutions'
                          ],
                          icon: '💡',
                          color: 'from-purple-500 to-pink-500'
                        }
                      ].map((framework, index) => (
                        <div key={index} className="group">
                          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                            <div className="flex items-center gap-4 mb-6">
                              <div className={`w-12 h-12 bg-gradient-to-r ${framework.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <span className="text-xl">{framework.icon}</span>
                              </div>
                              <h5 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{framework.category}</h5>
                            </div>
                            
                            <div className="space-y-3">
                              {framework.principles.map((principle, principleIndex) => (
                                <div key={principleIndex} className="flex items-start gap-3 group/item">
                                  <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center mt-0.5 group-hover/item:bg-blue-100 transition-colors">
                                    <span className="text-slate-600 text-xs group-hover/item:text-blue-600">•</span>
                                  </div>
                                  <p className="text-slate-600 text-sm group-hover/item:text-slate-800 transition-colors">{principle}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Leadership Team */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-purple-200/50">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <span className="text-purple-900 font-bold text-sm uppercase tracking-wider">Leadership Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Expert <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              30+ years of combined expertise from elite security and technology backgrounds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 h-full hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                      {leader.image}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{leader.role}</p>
                    <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-slate-600 text-sm font-medium">{leader.experience}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Expertise</h4>
                      <p className="text-slate-600 text-sm">{leader.expertise}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Background</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{leader.background}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Static Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse" style={{left: '10%', top: '20%', animationDelay: '0s'}}></div>
          <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse" style={{left: '85%', top: '15%', animationDelay: '1s'}}></div>
          <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse" style={{left: '25%', top: '80%', animationDelay: '2s'}}></div>
          <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse" style={{left: '70%', top: '70%', animationDelay: '3s'}}></div>
          <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse" style={{left: '50%', top: '30%', animationDelay: '4s'}}></div>
          <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse" style={{left: '90%', top: '60%', animationDelay: '1.5s'}}></div>
          <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse" style={{left: '15%', top: '50%', animationDelay: '2.5s'}}></div>
          <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse" style={{left: '60%', top: '10%', animationDelay: '3.5s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full mb-6 border border-white/20 shadow-xl">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span className="text-white/90 font-bold text-sm uppercase tracking-wider">Our Journey</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Innovation <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Timeline</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              From vision to global impact - our journey in transforming security technology
            </p>
          </div>

          <div className="relative" ref={timelineRef}>
            {/* Enhanced Timeline Line with Gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-cyan-400 to-blue-600 hidden md:block opacity-30"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600 hidden md:block shadow-lg shadow-cyan-400/50"></div>

            {/* Timeline Progress Indicator */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-transparent hidden md:block timeline-progress"></div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-1000 ${
                    visibleTimelineItems.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  data-timeline-item
                  data-index={index}
                  style={{transitionDelay: `${index * 200}ms`}}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-6' : 'md:text-left md:pl-6'}`}>
                    <div className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:border-white/30">
                      <div className="relative z-10">
                        {/* Compact Highlight Badge */}
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3 border border-cyan-400/30">
                          <span className="text-cyan-300 font-semibold text-xs uppercase tracking-wider">{item.highlight}</span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed text-sm group-hover:text-white/90 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Modern Timeline Node - Hexagonal Shape */}
                  <div className="flex-shrink-0 relative my-4 md:my-0">
                    <div className="relative w-20 h-12 bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg border border-white/30">
                      {/* Hexagonal/Diamond shape using clip-path */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600" style={{
                        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                      }}></div>
                      <span className="relative z-10 text-white font-bold text-sm">{item.year}</span>
                    </div>
                  </div>

                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>

            {/* Timeline End Marker */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 backdrop-blur-xl px-8 py-4 rounded-full border border-white/20 shadow-xl">
                <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                <span className="text-white/90 font-bold text-sm uppercase tracking-wider">Continuous Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO Certification & Global Footprint */}
      <section className="py-12 bg-gradient-to-br from-white via-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* ISO Certification */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full mb-8">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span className="text-green-900 font-bold text-sm uppercase tracking-wider">Certified Excellence</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                ISO 27001 <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Certified</span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our commitment to information security excellence is validated by international ISO 27001 certification, 
                ensuring the highest standards in security management systems.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Information Security Management</h4>
                    <p className="text-slate-600">Comprehensive security policies and procedures</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Risk Assessment & Management</h4>
                    <p className="text-slate-600">Systematic approach to identifying and mitigating risks</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Continuous Improvement</h4>
                    <p className="text-slate-600">Regular audits and updates to security practices</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Footprint */}
            <div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-6">Global Footprint</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  YUBIX serves clients across 6 continents, protecting critical infrastructure, 
                  government facilities, and corporate environments worldwide.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-black text-cyan-300 mb-2">180+</div>
                    <div className="text-blue-100 font-medium">Sites Secured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-cyan-300 mb-2">6</div>
                    <div className="text-blue-100 font-medium">Continents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-cyan-300 mb-2">172</div>
                    <div className="text-blue-100 font-medium">Industries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-cyan-300 mb-2">24/7</div>
                    <div className="text-blue-100 font-medium">Support</div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <h4 className="font-bold mb-4">Key Regions</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>North America</div>
                    <div>Europe</div>
                    <div>Asia-Pacific</div>
                    <div>Africa</div>
                    <div>South America</div>
                    <div>Oceania</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action - Modern Design */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white/20 rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full animate-bounce" style={{animationDuration: '4s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Enhanced Badge */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-xl px-12 py-6 rounded-2xl border border-white/30 shadow-2xl hover:border-white/40 transition-all duration-300 group">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse delay-300"></div>
                </div>
                <span className="text-white/90 text-lg font-bold uppercase tracking-wider group-hover:text-white transition-colors">Ready to Get Started?</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-700"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Heading */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-12 leading-[0.9] tracking-tight">
              <span className="block text-white mb-6 drop-shadow-2xl relative">
                Transform Your
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-70"></div>
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl relative">
                Security Today
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
              </span>
            </h2>

            {/* Enhanced Subtitle with Stats */}
            <div className="max-w-6xl mx-auto mb-16">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-white/85 leading-relaxed font-light mb-8">
                Join <span className="font-bold text-cyan-300">180+</span> organizations worldwide who trust YUBIX to protect 
                their critical assets and build resilient communities.
              </p>
              
              {/* Trust Indicators with Enhanced Design */}
              <div className="flex flex-wrap justify-center gap-8 text-base text-white/70 mb-12">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">30+ Years Expertise</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <span className="font-semibold">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-600"></div>
                  <span className="font-semibold">24/7 Global Support</span>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto mb-16">
                {[
                  { number: '99.7%', label: 'Threat Prevention Rate', icon: '🛡️', color: 'from-green-400 to-emerald-400' },
                  { number: '< 30s', label: 'Average Response Time', icon: '⚡', color: 'from-blue-400 to-cyan-400' },
                  { number: '172', label: 'Industries Served', icon: '🏢', color: 'from-purple-400 to-pink-400' },
                  { number: '6', label: 'Continents Protected', icon: '🌍', color: 'from-orange-400 to-red-400' }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:border-white/40 group cursor-pointer" 
                  >
                    <div className="relative z-10">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                      <div className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {stat.number}
                      </div>
                      <div className="text-sm text-white/70 font-medium group-hover:text-white/90 transition-colors">{stat.label}</div>
                      
                      {/* Bottom accent line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Call-to-Action Buttons */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-12">
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center px-12 py-6 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-110 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                <div className="relative flex items-center">
                  <svg className="w-6 h-6 mr-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Schedule Free Consultation</span>
                  <svg className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>

              <Link 
                href="/ecosystem" 
                className="group relative inline-flex items-center px-12 py-6 rounded-2xl border-2 border-white/30 text-white font-bold text-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-2xl"></div>
                <div className="relative flex items-center">
                  <svg className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Explore Security Ecosystem</span>
                  <svg className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Enhanced Contact Information */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white/70 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-medium">24/7 Expert Support</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">Response in 30 seconds</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">Free Security Assessment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>
    </div>
  )
}