'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import CallToActionSection from '@/components/CallToActionSection'

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

export default function IndustriesPage() {
  const [visibleSections, setVisibleSections] = useState<number[]>([])
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null)
  
  // Counter animations
  const aviationClients = useCounterAnimation(150)
  const corporateClients = useCounterAnimation(300)
  const governmentClients = useCounterAnimation(75)
  const healthcareClients = useCounterAnimation(200)
  const educationClients = useCounterAnimation(120)
  const hospitalityClients = useCounterAnimation(180)

  useEffect(() => {
    // Add custom CSS for animations
    const style = document.createElement('style')
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-10px) rotate(1deg); }
        66% { transform: translateY(-5px) rotate(-1deg); }
      }
      
      @keyframes gradient-x {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-x 3s ease infinite;
      }
      
      .bg-grid-pattern {
        background-image: 
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        background-size: 50px 50px;
      }
      
      .bg-grid-white\\/\\[0\\.02\\] {
        background-image: 
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
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
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    )

    // Observe section items after component mounts
    setTimeout(() => {
      const sectionItems = document.querySelectorAll('[data-section-item]')
      sectionItems.forEach(item => observer.observe(item))
    }, 100)

    return () => observer.disconnect()
  }, [])

  const industries = [
    {
      id: 'aviation',
      name: 'Aviation',
      subtitle: 'Secure Skies, Safe Journeys',
      description: 'Comprehensive security solutions for airports, airlines, and aviation infrastructure.',
      features: [
        'Airport Terminal Security',
        'Aircraft Security Systems',
        'Passenger Screening Solutions',
        'Cargo Security Management',
        'Air Traffic Control Protection',
        'Aviation Cybersecurity'
      ],
      stats: { clients: aviationClients.count, deployments: '500+', coverage: '24/7' },
      icon: '✈️',
      gradient: 'from-blue-600 via-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50/80 via-cyan-50/60 to-blue-100/40',
      glowColor: 'bg-blue-500/20',
      borderColor: 'border-blue-200/50'
    },
    {
      id: 'corporate',
      name: 'Corporate',
      subtitle: 'Enterprise Security Excellence',
      description: 'Advanced security solutions tailored for corporate environments and business operations.',
      features: [
        'Office Building Security',
        'Executive Protection',
        'Corporate Event Security',
        'Access Control Systems',
        'Video Surveillance',
        'Threat Assessment'
      ],
      stats: { clients: corporateClients.count, deployments: '1000+', coverage: 'Global' },
      icon: '🏢',
      gradient: 'from-slate-600 via-gray-600 to-blue-600',
      bgGradient: 'from-slate-50/80 via-gray-50/60 to-blue-50/40',
      glowColor: 'bg-slate-500/20',
      borderColor: 'border-slate-200/50'
    },
    {
      id: 'government',
      name: 'Government',
      subtitle: 'National Security Solutions',
      description: 'Mission-critical security systems for government facilities and public sector operations.',
      features: [
        'Government Building Security',
        'Public Safety Systems',
        'Critical Infrastructure Protection',
        'Emergency Response Coordination',
        'Classified Information Security',
        'Border Security Solutions'
      ],
      stats: { clients: governmentClients.count, deployments: '250+', coverage: 'National' },
      icon: '🏛️',
      gradient: 'from-red-600 via-rose-600 to-orange-500',
      bgGradient: 'from-red-50/80 via-rose-50/60 to-orange-50/40',
      glowColor: 'bg-red-500/20',
      borderColor: 'border-red-200/50'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      subtitle: 'Protecting Lives and Data',
      description: 'Specialized security solutions for hospitals, clinics, and healthcare facilities.',
      features: [
        'Hospital Security Systems',
        'Patient Data Protection',
        'Medical Equipment Security',
        'Emergency Response Systems',
        'Visitor Management',
        'HIPAA Compliance Solutions'
      ],
      stats: { clients: healthcareClients.count, deployments: '600+', coverage: '365 Days' },
      icon: '🏥',
      gradient: 'from-emerald-600 via-green-600 to-teal-500',
      bgGradient: 'from-emerald-50/80 via-green-50/60 to-teal-50/40',
      glowColor: 'bg-emerald-500/20',
      borderColor: 'border-emerald-200/50'
    },
    {
      id: 'education',
      name: 'Education',
      subtitle: 'Safe Learning Environments',
      description: 'Comprehensive security solutions for schools, universities, and educational institutions.',
      features: [
        'Campus Security Systems',
        'Student Safety Programs',
        'Access Control for Schools',
        'Emergency Alert Systems',
        'Visitor Screening',
        'Cybersecurity Education'
      ],
      stats: { clients: educationClients.count, deployments: '400+', coverage: 'K-12 & Higher Ed' },
      icon: '🎓',
      gradient: 'from-violet-600 via-purple-600 to-indigo-500',
      bgGradient: 'from-violet-50/80 via-purple-50/60 to-indigo-50/40',
      glowColor: 'bg-violet-500/20',
      borderColor: 'border-violet-200/50'
    },
    {
      id: 'hospitality',
      name: 'Hospitality',
      subtitle: 'Guest Safety & Experience',
      description: 'Security solutions that enhance guest experience while maintaining the highest safety standards.',
      features: [
        'Hotel Security Systems',
        'Guest Safety Programs',
        'Event Security Management',
        'Resort Protection',
        'Restaurant Security',
        'Tourism Safety Solutions'
      ],
      stats: { clients: hospitalityClients.count, deployments: '300+', coverage: 'Worldwide' },
      icon: '🏨',
      gradient: 'from-pink-600 via-rose-600 to-fuchsia-500',
      bgGradient: 'from-pink-50/80 via-rose-50/60 to-fuchsia-50/40',
      glowColor: 'bg-pink-500/20',
      borderColor: 'border-pink-200/50'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Floating badge with glassmorphism */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 mb-8 group hover:bg-white/15 hover:scale-105 transition-all duration-500 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="font-bold text-sm uppercase tracking-wider group-hover:text-white transition-colors bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Industry Solutions</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Securing Every
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Industry
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Tailored security solutions designed specifically for your industry&apos;s unique challenges and requirements with cutting-edge technology.
          </p>

          {/* Enhanced Stats Grid with glassmorphism */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              { value: '6', label: 'Industries', icon: '🏭' },
              { value: '1000+', label: 'Deployments', icon: '🚀' },
              { value: '24/7', label: 'Support', icon: '🛡️' },
              { value: '15+', label: 'Years Experience', icon: '⭐' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:scale-105 transition-all duration-500 shadow-xl"
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
              href="#aviation"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 font-semibold text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              <span className="relative z-10">Explore Industries</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-500 font-semibold"
            >
              <span>Get Consultation</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      {industries.map((industry, index) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`relative py-24 bg-gradient-to-br ${industry.bgGradient} overflow-hidden`}
          data-section-item={index}
          onMouseEnter={() => setActiveIndustry(industry.id)}
          onMouseLeave={() => setActiveIndustry(null)}
        >
          {/* Dynamic background effects */}
          <div className="absolute inset-0">
            <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${industry.glowColor} rounded-full blur-3xl opacity-60 transition-all duration-1000 ${activeIndustry === industry.id ? 'scale-150 opacity-80' : 'scale-100'}`}></div>
            <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 ${industry.glowColor} rounded-full blur-3xl opacity-40 transition-all duration-1000 ${activeIndustry === industry.id ? 'scale-125 opacity-60' : 'scale-100'}`}></div>
            
            {/* Floating elements */}
            {activeIndustry === industry.id && (
              <>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 ${industry.glowColor} rounded-full animate-float opacity-60`}
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </>
            )}
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`transform transition-all duration-1000 ${
              visibleSections.includes(index) 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-16 opacity-0'
            }`}>
              {/* Modern Section Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-4 mb-8 group">
                  <div className={`relative p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 group-hover:scale-110 transition-all duration-500`}>
                    <span className="text-5xl">{industry.icon}</span>
                    <div className={`absolute inset-0 ${industry.glowColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 bg-gradient-to-r ${industry.gradient} rounded-full animate-pulse`}></div>
                    <span className="text-slate-700 font-bold text-sm uppercase tracking-wider">{industry.name} Solutions</span>
                  </div>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  <span className={`bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent`}>
                    {industry.subtitle}
                  </span>
                </h2>
                
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                  {industry.description}
                </p>
              </div>

              {/* Enhanced Content Grid */}
              <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                {/* Features with modern cards */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4 mb-10">
                    <div className={`w-1 h-12 bg-gradient-to-b ${industry.gradient} rounded-full`}></div>
                    <h3 className="text-3xl font-bold text-slate-900">Key Features & Services</h3>
                  </div>
                  
                  <div className="grid gap-4">
                    {industry.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className={`group relative flex items-center gap-4 p-6 bg-white/60 backdrop-blur-md rounded-2xl border ${industry.borderColor} shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-500 transform hover:-translate-y-1 ${
                          visibleSections.includes(index) 
                            ? 'translate-x-0 opacity-100' 
                            : 'translate-x-8 opacity-0'
                        }`}
                        style={{ transitionDelay: `${featureIndex * 150}ms` }}
                      >
                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 ${industry.glowColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                        
                        <div className={`relative w-4 h-4 bg-gradient-to-r ${industry.gradient} rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
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
                      className={`group relative inline-flex items-center gap-3 bg-gradient-to-r ${industry.gradient} text-white px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 font-semibold text-lg overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                      <span className="relative z-10">Get {industry.name} Solution</span>
                      <svg className="relative z-10 w-6 h-6 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Modern Stats & Info Card */}
                <div className="relative">
                  <div className={`sticky top-8 bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-2xl border ${industry.borderColor} hover:bg-white/80 transition-all duration-500 group`}>
                    {/* Card glow effect */}
                    <div className={`absolute inset-0 ${industry.glowColor} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    <div className="relative text-center mb-10">
                      <div className={`inline-flex p-6 bg-gradient-to-r ${industry.gradient} rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                        <span className="text-6xl text-white drop-shadow-lg">{industry.icon}</span>
                      </div>
                      <h4 className="text-3xl font-bold text-slate-900 mb-3">{industry.name} Security</h4>
                      <p className="text-slate-600 font-medium">Industry-Leading Protection</p>
                    </div>

                    {/* Enhanced Stats Grid */}
                    <div className="grid gap-6 mb-10">
                      <div className={`text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border ${industry.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 group/stat`}>
                        <div ref={industry.stats.clients === aviationClients.count ? aviationClients.countRef :
                                   industry.stats.clients === corporateClients.count ? corporateClients.countRef :
                                   industry.stats.clients === governmentClients.count ? governmentClients.countRef :
                                   industry.stats.clients === healthcareClients.count ? healthcareClients.countRef :
                                   industry.stats.clients === educationClients.count ? educationClients.countRef :
                                   hospitalityClients.countRef} 
                             className={`text-4xl font-bold mb-3 bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-300`}>
                          {industry.stats.clients}+
                        </div>
                        <div className="text-slate-600 text-sm uppercase tracking-wider font-semibold">Active Clients</div>
                      </div>

                      <div className={`text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border ${industry.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 group/stat`}>
                        <div className={`text-3xl font-bold mb-3 bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-300`}>
                          {industry.stats.deployments}
                        </div>
                        <div className="text-slate-600 text-sm uppercase tracking-wider font-semibold">Deployments</div>
                      </div>

                      <div className={`text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border ${industry.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 group/stat`}>
                        <div className={`text-3xl font-bold mb-3 bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-300`}>
                          {industry.stats.coverage}
                        </div>
                        <div className="text-slate-600 text-sm uppercase tracking-wider font-semibold">Coverage</div>
                      </div>
                    </div>

                    {/* Contact Section */}
                    <div className="pt-6 border-t border-gray-200">
                      <div className="text-center">
                        <p className="text-slate-600 text-sm mb-6 font-medium">Need a custom {industry.name.toLowerCase()} solution?</p>
                        <Link
                          href="/contact"
                          className={`group/link inline-flex items-center gap-2 bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent hover:shadow-lg font-semibold text-lg transition-all duration-300 border-b-2 border-transparent hover:border-current pb-1`}
                        >
                          <span>Schedule Consultation</span>
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

      {/* Why Choose Our Industry Solutions */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Advanced background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '4s' }}></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
          
          {/* Floating particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 mb-8 group hover:bg-white/15 hover:scale-105 transition-all duration-500">
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Why Choose YUBIX</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Industry Expertise That
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                Delivers Results
              </span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed">
              Deep industry knowledge combined with cutting-edge technology to provide security solutions that fit your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry Expertise',
                description: 'Deep understanding of each industry\'s unique security challenges and regulatory requirements.',
                icon: '🎯',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Customized Solutions',
                description: 'Tailored security systems designed specifically for your industry and operational needs.',
                icon: '⚙️',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Regulatory Compliance',
                description: 'Ensure full compliance with industry-specific regulations and security standards.',
                icon: '📋',
                gradient: 'from-green-500 to-teal-500'
              },
              {
                title: 'Proven Track Record',
                description: 'Successfully deployed across thousands of installations in each industry sector.',
                icon: '🏆',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock monitoring and support from industry-specialized security experts.',
                icon: '🛡️',
                gradient: 'from-red-500 to-rose-500'
              },
              {
                title: 'Scalable Platform',
                description: 'Solutions that grow with your business, from single sites to enterprise-wide deployments.',
                icon: '📈',
                gradient: 'from-indigo-500 to-purple-500'
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
                
                {/* Hover arrow */}
                <div className="relative mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-white/70 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-6 items-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 font-semibold text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <span className="relative z-10">Start Your Journey</span>
                <svg className="relative z-10 w-6 h-6 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-500 font-semibold"
              >
                <span>Learn More About Us</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToActionSection />
    </div>
  )
}
