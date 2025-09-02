'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import CallToActionSection from '@/components/CallToActionSection'

export default function InnovationPage() {
  const [visibleSections, setVisibleSections] = useState<number[]>([])
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [forceVisible, setForceVisible] = useState(false)

  // Helper function to check if a section should be visible
  const isSectionVisible = (index: number) => {
    return visibleSections.includes(index) || forceVisible
  }

  useEffect(() => {
    // Add custom CSS for animations
    const style = document.createElement('style')
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-15px) rotate(2deg); }
        66% { transform: translateY(-8px) rotate(-1deg); }
      }
      
      @keyframes gradient-x {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
        50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
      }
      
      .animate-float {
        animation: float 8s ease-in-out infinite;
      }
      
      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-x 4s ease infinite;
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 3s ease-in-out infinite;
      }
      
      .bg-circuit-pattern {
        background-image: 
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%);
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  useEffect(() => {
    // Intersection Observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-section-item') || '0')
            setVisibleSections(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    // Observe section items after component mounts
    setTimeout(() => {
      const sectionItems = document.querySelectorAll('[data-section-item]')
      sectionItems.forEach(item => observer.observe(item))
    }, 100)

    return () => observer.disconnect()
  }, [])

  // Handle hash navigation to ensure target section is visible
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        const sectionIndex = innovationSections.findIndex(section => section.id === hash)
        if (sectionIndex !== -1) {
          setVisibleSections(prev => {
            if (!prev.includes(sectionIndex)) {
              return [...prev, sectionIndex]
            }
            return prev
          })
          // Force visibility for direct navigation
          setForceVisible(true)
          // Reset force visibility after animation
          setTimeout(() => setForceVisible(false), 1500)
        }
      }
    }

    // Check hash on mount
    handleHashChange()
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Fallback: Make all sections visible on mobile after initial load
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      const timer = setTimeout(() => {
        setForceVisible(true)
        setVisibleSections(innovationSections.map((_, index) => index))
      }, 500)
      return () => clearTimeout(timer)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const innovationSections = [
    {
      id: 'ai-research',
      title: 'AI Research',
      subtitle: 'Pioneering Intelligent Security',
      description: 'Cutting-edge artificial intelligence research focused on revolutionizing security through machine learning and neural networks.',
      icon: '🧠',
      gradient: 'from-blue-600 via-purple-600 to-indigo-600',
      bgGradient: 'from-blue-50/80 via-purple-50/60 to-indigo-50/40',
      glowColor: 'bg-blue-500/20',
      borderColor: 'border-blue-200/50',
      features: [
        'Machine Learning Threat Detection',
        'Neural Network Pattern Recognition',
        'Predictive Security Analytics',
        'Behavioral Analysis AI',
        'Computer Vision Security',
        'Natural Language Processing'
      ],
      stats: { projects: '25+', accuracy: '99.7%', models: '50+' }
    },
    {
      id: 'emerging-threats',
      title: 'Emerging Threats',
      subtitle: 'Future-Proofing Security',
      description: 'Advanced research into tomorrow\'s security challenges, developing countermeasures before threats become reality.',
      icon: '🔮',
      gradient: 'from-red-600 via-orange-600 to-yellow-500',
      bgGradient: 'from-red-50/80 via-orange-50/60 to-yellow-50/40',
      glowColor: 'bg-red-500/20',
      borderColor: 'border-red-200/50',
      features: [
        'Quantum Computing Threats',
        'IoT Security Vulnerabilities',
        'Deep Fake Detection',
        'Social Engineering Analysis',
        'Cyber-Physical Attack Prevention',
        'Zero-Day Exploit Research'
      ],
      stats: { threats: '500+', prediction: '95%', response: '< 1hr' }
    },
    {
      id: 'future-tech',
      title: 'Future Technologies',
      subtitle: 'Tomorrow\'s Security Today',
      description: 'Experimental technologies that will define the next generation of security solutions.',
      icon: '🚀',
      gradient: 'from-cyan-600 via-teal-600 to-green-600',
      bgGradient: 'from-cyan-50/80 via-teal-50/60 to-green-50/40',
      glowColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-200/50',
      features: [
        'Quantum Encryption Technology',
        'Holographic Security Interfaces',
        'Biometric Evolution Systems',
        'Edge AI Computing',
        'Autonomous Security Drones',
        'Blockchain Security Networks'
      ],
      stats: { prototypes: '30+', patents: '15', timeline: '2-5 years' }
    },
    {
      id: 'research-papers',
      title: 'Research Papers',
      subtitle: 'Knowledge Sharing',
      description: 'Published research contributing to the global security community and advancing industry standards.',
      icon: '📚',
      gradient: 'from-violet-600 via-purple-600 to-pink-600',
      bgGradient: 'from-violet-50/80 via-purple-50/60 to-pink-50/40',
      glowColor: 'bg-violet-500/20',
      borderColor: 'border-violet-200/50',
      features: [
        'Peer-Reviewed Publications',
        'Conference Presentations',
        'White Paper Publications',
        'Technical Documentation',
        'Industry Best Practices',
        'Open Source Contributions'
      ],
      stats: { papers: '150+', citations: '2000+', conferences: '25+' }
    },
    {
      id: 'beta-programs',
      title: 'Beta Programs',
      subtitle: 'Early Access Innovation',
      description: 'Exclusive programs for testing cutting-edge security features before they reach the market.',
      icon: '⚡',
      gradient: 'from-emerald-600 via-green-600 to-teal-600',
      bgGradient: 'from-emerald-50/80 via-green-50/60 to-teal-50/40',
      glowColor: 'bg-emerald-500/20',
      borderColor: 'border-emerald-200/50',
      features: [
        'Early Feature Access',
        'Direct Developer Feedback',
        'Priority Support Channels',
        'Exclusive Training Sessions',
        'Beta Community Network',
        'Performance Analytics'
      ],
      stats: { users: '5K+', features: '100+', feedback: '4.9/5' }
    },
    {
      id: 'proof-of-concepts',
      title: 'Proof of Concepts',
      subtitle: 'Validating Innovation',
      description: 'Rapid prototyping and validation of revolutionary security concepts through practical demonstrations.',
      icon: '🔬',
      gradient: 'from-indigo-600 via-blue-600 to-cyan-600',
      bgGradient: 'from-indigo-50/80 via-blue-50/60 to-cyan-50/40',
      glowColor: 'bg-indigo-500/20',
      borderColor: 'border-indigo-200/50',
      features: [
        'Rapid Prototyping',
        'Concept Validation',
        'Technical Feasibility',
        'Market Research',
        'Performance Testing',
        'Scalability Analysis'
      ],
      stats: { concepts: '75+', success: '85%', timeline: '2-12 weeks' }
    },
    {
      id: 'innovation-partners',
      title: 'Innovation Partners',
      subtitle: 'Collaborative Excellence',
      description: 'Strategic partnerships with leading institutions and organizations to accelerate security innovation.',
      icon: '🤝',
      gradient: 'from-pink-600 via-rose-600 to-red-600',
      bgGradient: 'from-pink-50/80 via-rose-50/60 to-red-50/40',
      glowColor: 'bg-pink-500/20',
      borderColor: 'border-pink-200/50',
      features: [
        'University Collaborations',
        'Industry Partnerships',
        'Government Relations',
        'Startup Incubation',
        'Joint Research Projects',
        'Technology Transfer'
      ],
      stats: { partners: '50+', projects: '200+', countries: '15+' }
    },
    {
      id: 'developer-apis',
      title: 'Developer APIs',
      subtitle: 'Building the Future',
      description: 'Comprehensive APIs and development tools for creating next-generation security applications.',
      icon: '💻',
      gradient: 'from-slate-600 via-gray-600 to-zinc-600',
      bgGradient: 'from-slate-50/80 via-gray-50/60 to-zinc-50/40',
      glowColor: 'bg-slate-500/20',
      borderColor: 'border-slate-200/50',
      features: [
        'RESTful API Architecture',
        'SDK Development Kits',
        'GraphQL Endpoints',
        'Real-time WebSockets',
        'Comprehensive Documentation',
        'Developer Support Portal'
      ],
      stats: { endpoints: '500+', developers: '10K+', uptime: '99.99%' }
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 bg-circuit-pattern"></div>
          
          {/* Floating tech elements with improved distribution */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 25 }).map((_, i) => {
              const seed = i * 137.5;
              const left = ((seed * 9.3) % 100);
              const top = ((seed * 7.7) % 100);
              const delay = ((seed * 0.05) % 5);
              const duration = 4 + ((seed * 0.06) % 6);
              
              return (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-300/30 rounded-full animate-float"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Floating badge with glassmorphism */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 mb-8 group hover:bg-white/15 hover:scale-105 transition-all duration-500 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Innovation Lab</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Future of
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Security Innovation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Pioneering next-generation security solutions through cutting-edge research, AI innovation, and collaborative development.
          </p>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              { value: '25+', label: 'AI Projects', icon: '🧠' },
              { value: '150+', label: 'Research Papers', icon: '📚' },
              { value: '5K+', label: 'Beta Users', icon: '⚡' },
              { value: '50+', label: 'Partners', icon: '🤝' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:scale-105 transition-all duration-500 shadow-xl animate-pulse-glow"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-white/70 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#ai-research"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 font-semibold text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              <span className="relative z-10">Explore Research</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-500 font-semibold"
            >
              <span>Join Innovation</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Innovation Sections */}
      {innovationSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`relative py-24 bg-gradient-to-br ${section.bgGradient} overflow-hidden`}
          data-section-item={index}
          onMouseEnter={() => setActiveSection(section.id)}
          onMouseLeave={() => setActiveSection(null)}
        >
          {/* Dynamic background effects */}
          <div className="absolute inset-0">
            <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${section.glowColor} rounded-full blur-3xl opacity-60 transition-all duration-1000 ${activeSection === section.id ? 'scale-150 opacity-80' : 'scale-100'}`}></div>
            <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 ${section.glowColor} rounded-full blur-3xl opacity-40 transition-all duration-1000 ${activeSection === section.id ? 'scale-125 opacity-60' : 'scale-100'}`}></div>
            
            {/* Floating elements */}
            {activeSection === section.id && (
              <>
                {Array.from({ length: 12 }).map((_, i) => {
                  // Use deterministic values based on index and section to avoid hydration mismatch
                  const seed = (i + section.id.length) * 123.4;
                  const left = 20 + ((seed * 0.6) % 60);
                  const top = 20 + ((seed * 0.7) % 60);
                  const delay = (seed * 0.03) % 3;
                  const duration = 3 + ((seed * 0.02) % 2);
                  
                  return (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 ${section.glowColor} rounded-full animate-float opacity-60`}
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        animationDelay: `${delay}s`,
                        animationDuration: `${duration}s`
                      }}
                    />
                  );
                })}
              </>
            )}
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`transform transition-all duration-1000 ${
              isSectionVisible(index) 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-16 opacity-0'
            }`}>
              {/* Modern Section Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-4 mb-8 group">
                  <div className={`relative p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 group-hover:scale-110 transition-all duration-500`}>
                    <span className="text-5xl">{section.icon}</span>
                    <div className={`absolute inset-0 ${section.glowColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 bg-gradient-to-r ${section.gradient} rounded-full animate-pulse`}></div>
                    <span className="text-slate-700 font-bold text-sm uppercase tracking-wider">{section.title}</span>
                  </div>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  <span className={`bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                    {section.subtitle}
                  </span>
                </h2>
                
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                  {section.description}
                </p>
              </div>

              {/* Enhanced Content Grid */}
              <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                {/* Features with modern cards */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4 mb-10">
                    <div className={`w-1 h-12 bg-gradient-to-b ${section.gradient} rounded-full`}></div>
                    <h3 className="text-3xl font-bold text-slate-900">Key Research Areas</h3>
                  </div>
                  
                  <div className="grid gap-4">
                    {section.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className={`group relative flex items-center gap-4 p-6 bg-white/60 backdrop-blur-md rounded-2xl border ${section.borderColor} shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-500 transform hover:-translate-y-1 ${
                          isSectionVisible(index) 
                            ? 'translate-x-0 opacity-100' 
                            : 'translate-x-8 opacity-0'
                        }`}
                        style={{ transitionDelay: `${featureIndex * 150}ms` }}
                      >
                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 ${section.glowColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                        
                        <div className={`relative w-4 h-4 bg-gradient-to-r ${section.gradient} rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                        <span className="relative text-slate-700 font-medium text-lg group-hover:text-slate-900 transition-colors duration-300">{feature}</span>
                        
                        {/* Animated arrow */}
                        <svg className="relative w-5 h-5 text-slate-400 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced CTA Button */}
                  <div className="pt-8">
                    <Link
                      href="/contact"
                      className={`group relative inline-flex items-center gap-3 bg-gradient-to-r ${section.gradient} text-white px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 font-semibold text-lg overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                      <span className="relative z-10">Join {section.title}</span>
                      <svg className="relative z-10 w-6 h-6 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Modern Stats & Info Card */}
                <div className="relative">
                  <div className={`sticky top-8 bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-2xl border ${section.borderColor} hover:bg-white/80 transition-all duration-500 group`}>
                    {/* Card glow effect */}
                    <div className={`absolute inset-0 ${section.glowColor} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    <div className="relative text-center mb-10">
                      <div className={`inline-flex p-6 bg-gradient-to-r ${section.gradient} rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                        <span className="text-6xl text-white drop-shadow-lg">{section.icon}</span>
                      </div>
                      <h4 className="text-3xl font-bold text-slate-900 mb-3">{section.title}</h4>
                      <p className="text-slate-600 font-medium">Cutting-Edge Innovation</p>
                    </div>

                    {/* Enhanced Stats Grid */}
                    <div className="grid gap-6 mb-10">
                      {Object.entries(section.stats).map(([key, value]) => (
                        <div key={key} className={`text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border ${section.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 group/stat`}>
                          <div className={`text-3xl font-bold mb-3 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-300`}>
                            {value}
                          </div>
                          <div className="text-slate-600 text-sm uppercase tracking-wider font-semibold">
                            {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Contact Section */}
                    <div className="pt-6 border-t border-gray-200">
                      <div className="text-center">
                        <p className="text-slate-600 text-sm mb-6 font-medium">Interested in {section.title.toLowerCase()}?</p>
                        <Link
                          href="/contact"
                          className={`group/link inline-flex items-center gap-2 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent hover:shadow-lg font-semibold text-lg transition-all duration-300 border-b-2 border-transparent hover:border-current pb-1`}
                        >
                          <span>Get Involved</span>
                          <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Innovation Philosophy Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 overflow-hidden">
        {/* Advanced background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '4s' }}></div>
          
          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 bg-circuit-pattern"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 mb-8 group hover:bg-white/15 hover:scale-105 transition-all duration-500">
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Our Philosophy</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Human-Centered
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Innovation
              </span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed">
              We believe the future of security lies not in replacing human expertise, but in amplifying it through intelligent technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Human-First Design',
                description: 'Technology that enhances human capabilities rather than replacing them, ensuring intuitive and accessible security solutions.',
                icon: '👥',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Ethical AI Development',
                description: 'Responsible AI development with transparency, fairness, and privacy at the core of every innovation.',
                icon: '⚖️',
                gradient: 'from-green-500 to-teal-500'
              },
              {
                title: 'Open Collaboration',
                description: 'Sharing knowledge and collaborating with the global community to advance security for everyone.',
                icon: '🌐',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 hover:scale-105 transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Icon with gradient background */}
                <div className={`relative inline-flex p-4 bg-gradient-to-r ${item.gradient} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                  <span className="text-4xl text-white drop-shadow-lg">{item.icon}</span>
                </div>
                
                <h3 className="relative text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">{item.title}</h3>
                <p className="relative text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToActionSection />
    </div>
  )
}
