'use client'

import { useState, useEffect } from 'react'
import CallToActionSection from '@/components/CallToActionSection'

export default function OpsRoomPage() {
  const [visibleSections, setVisibleSections] = useState<number[]>([])
  const [activeJourneyStep, setActiveJourneyStep] = useState(0)

  // Predefined positions for floating dots to avoid hydration mismatch
  const floatingDots = [
    { left: 15.5, top: 25.3, delay: 0.5, duration: 3.2 },
    { left: 78.2, top: 45.7, delay: 1.8, duration: 2.7 },
    { left: 32.1, top: 15.9, delay: 2.3, duration: 3.5 },
    { left: 65.8, top: 78.4, delay: 0.9, duration: 2.9 },
    { left: 5.2, top: 60.1, delay: 2.7, duration: 3.1 },
    { left: 89.7, top: 22.6, delay: 1.2, duration: 2.4 },
    { left: 45.3, top: 85.2, delay: 0.3, duration: 3.8 },
    { left: 72.9, top: 8.7, delay: 2.1, duration: 2.6 },
    { left: 18.6, top: 50.4, delay: 1.5, duration: 3.3 },
    { left: 58.1, top: 35.8, delay: 0.7, duration: 2.8 },
    { left: 25.4, top: 70.2, delay: 2.5, duration: 3.0 },
    { left: 81.3, top: 18.9, delay: 1.1, duration: 2.5 },
    { left: 12.7, top: 42.6, delay: 1.9, duration: 3.4 },
    { left: 67.5, top: 65.1, delay: 0.4, duration: 2.7 },
    { left: 39.8, top: 29.3, delay: 2.8, duration: 3.6 },
    { left: 93.2, top: 55.7, delay: 1.3, duration: 2.3 },
    { left: 21.9, top: 12.4, delay: 0.8, duration: 3.2 },
    { left: 54.6, top: 82.8, delay: 2.2, duration: 2.9 },
    { left: 76.1, top: 38.5, delay: 1.7, duration: 3.1 },
    { left: 8.4, top: 75.9, delay: 0.6, duration: 2.4 }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setVisibleSections([0, 1, 2, 3, 4, 5]), 100)
    return () => clearTimeout(timer)
  }, [])

  // Auto-cycle through client journey steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveJourneyStep((prev) => (prev + 1) % 5)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const coreServices = [
    {
      icon: '🎯',
      title: '24/7 Expert Advisory',
      description: 'Round-the-clock access to cybersecurity experts and incident response specialists',
      features: ['Real-time consultation', 'Crisis escalation paths', 'Expert guidance protocols']
    },
    {
      icon: '⚡',
      title: 'Critical Incident Support',
      description: 'Live crisis guidance with step-by-step operational protocols during active incidents',
      features: ['Immediate response activation', 'Live tactical guidance', 'Coordinated response teams']
    },
    {
      icon: '🧠',
      title: 'AI-Enhanced Risk Intelligence',
      description: 'Global threat monitoring with AI-powered analysis and human expert validation',
      features: ['Predictive threat detection', 'Sector-specific alerts', 'Intelligence briefings']
    },
    {
      icon: '🎮',
      title: 'Scenario Planning & War-Gaming',
      description: 'Advanced simulation exercises and red-team scenarios for preparedness testing',
      features: ['Custom scenario development', 'Live exercise facilitation', 'Performance analytics']
    },
    {
      icon: '📊',
      title: 'After-Action Reviews',
      description: 'Comprehensive incident analysis and resilience improvement recommendations',
      features: ['Detailed incident reports', 'Lessons learned analysis', 'Improvement roadmaps']
    },
    {
      icon: '🎯',
      title: 'Training & Virtual Drills',
      description: 'Immersive training programs and virtual drill exercises for your teams',
      features: ['Interactive simulations', 'Skills assessment', 'Certification programs']
    }
  ]

  const technologyStack = [
    {
      name: 'Vertex Pro',
      description: 'Next-Generation Security Platform',
      features: [
        'Every advisory, alert, or response embedded in Vertex Pro dashboards',
        'Real-time events plus AI-enhanced recommendations',
        'Protocols and tactical playbooks integration',
        'Live operational guidance display'
      ],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Buzz',
      description: 'Intelligent Communication & Engagement',
      features: [
        'Communication flows beyond command level',
        'Emergency alerts and warnings',
        'Staff and community updates',
        'Everyday resilience tips and notifications'
      ],
      color: 'from-green-600 to-emerald-600'
    },
    {
      name: 'AI-Powered Risk Intelligence',
      description: 'Global Threat Monitoring & Analysis',
      features: [
        'Global data streams, social signals, and sector feeds analyzed',
        'Proprietary models detect anomalies and emerging threats',
        'Human experts validate insights before delivery',
        'Predictive threat detection and early warnings'
      ],
      color: 'from-purple-600 to-indigo-600'
    },
    {
      name: 'Dynamic Incident Response',
      description: 'Live Crisis Management System',
      features: [
        'Crisis response for terror attacks, cyber breaches, violent incidents, natural disasters',
        'Live, step-by-step operational guidance delivered directly to client teams',
        'Real-time expert advisory during active incidents',
        'Coordinated response protocols and escalation paths'
      ],
      color: 'from-red-600 to-pink-600'
    },
    {
      name: 'Secure Access',
      description: 'Multi-Factor Authenticated Portal',
      features: [
        'Multi-factor authenticated client portal',
        'Secure video links for real-time expert advisory',
        'Encrypted communication channels',
        'Zero-trust security architecture'
      ],
      color: 'from-orange-600 to-red-600'
    }
  ]

  const clientJourney = [
    {
      stage: 'Routine Operations',
      subtitle: 'Confidence in the Background',
      description: 'Vertex dashboards and Buzz updates keep teams connected while Ops Room monitors global signals quietly.',
      outcome: 'Daily confidence and proactive monitoring',
      icon: '🛡️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      stage: 'Early Warning',
      subtitle: 'Anticipating the Threat',
      description: 'AI detects anomalies and human experts validate threats before delivering alerts through Vertex and Buzz.',
      outcome: 'Advance notice before escalation',
      icon: '⚠️',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      stage: 'Incident Unfolds',
      subtitle: 'Real-Time Guidance',
      description: 'Step-by-step protocols display in Vertex, frontline instructions transmit via Buzz, and experts guide live.',
      outcome: 'Chaos turns into control',
      icon: '🚨',
      color: 'from-red-500 to-pink-500'
    },
    {
      stage: 'Crisis Communication',
      subtitle: 'Keeping Everyone Aligned',
      description: 'Buzz ensures consistent communication flows to staff, communities, and executives simultaneously.',
      outcome: 'No misinformation, no confusion',
      icon: '📢',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      stage: 'Recovery & Learning',
      subtitle: 'Stronger After Every Incident',
      description: 'Post-incident reviews conducted and updated resilience playbooks embedded directly into Vertex.',
      outcome: 'Each crisis strengthens future resilience',
      icon: '📈',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const differentiators = [
    {
      title: 'Anticipates Risks',
      description: 'Before they occur through AI-powered predictive analysis',
      icon: '🔮'
    },
    {
      title: 'Live Crisis Guidance',
      description: 'Real-time expert advisory during active incidents',
      icon: '🎯'
    },
    {
      title: 'Instant Communication',
      description: 'Immediate alerts to teams and communities via Buzz',
      icon: '⚡'
    },
    {
      title: 'Continuous Learning',
      description: 'Adapts and improves after every security event',
      icon: '🧠'
    }
  ]

  const sectorModules = [
    { name: 'Aviation', icon: '✈️', color: 'bg-blue-100 text-blue-700' },
    { name: 'Transport', icon: '🚄', color: 'bg-green-100 text-green-700' },
    { name: 'Education', icon: '🎓', color: 'bg-purple-100 text-purple-700' },
    { name: 'Healthcare', icon: '🏥', color: 'bg-red-100 text-red-700' },
    { name: 'Defense', icon: '🛡️', color: 'bg-gray-100 text-gray-700' },
    { name: 'Events', icon: '🎪', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Corporate', icon: '🏢', color: 'bg-indigo-100 text-indigo-700' },
    { name: 'Hospitality', icon: '🏨', color: 'bg-pink-100 text-pink-700' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Command Center Theme */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingDots.map((dot, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-ping"
              style={{
                left: `${dot.left}%`,
                top: `${dot.top}%`,
                animationDelay: `${dot.delay}s`,
                animationDuration: `${dot.duration}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-0 lg:px-2 py-8 sm:py-12">
          <div className="text-center">
            <div className="mb-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-blue-300 text-sm font-medium">ALWAYS ON • ALWAYS AHEAD</span>
              </div>
            </div>

            <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
                <span className="block text-white mb-3 drop-shadow-2xl">YUBIX</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent drop-shadow-2xl pb-2">
                  OPS ROOM
                </span>
              </h1>
            </div>

            <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                The world&apos;s first intelligent virtual command hub. Where AI-driven intelligence meets expert human advisory 
                to transform security operations from reactive to predictive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <a 
                href="#services" 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative flex items-center gap-2">
                  Explore Command Hub
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a 
                href="#technology" 
                className="group px-8 py-4 border-2 border-blue-400/50 text-blue-300 font-bold rounded-2xl hover:bg-blue-400/10 transition-all duration-300 hover:border-blue-300"
              >
                <span className="flex items-center gap-2">
                  View Technology Stack
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </span>
              </a>
            </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            {[
              { value: '24/7', label: 'Expert Advisory', icon: '👥' },
              { value: '99.9%', label: 'System Uptime', icon: '⚡' },
              { value: '<30s', label: 'Response Time', icon: '⏱️' },
              { value: '150+', label: 'Threat Sources', icon: '🌐' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:scale-105 transition-all duration-500 shadow-xl ${
                  visibleSections.includes(index) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              The World&apos;s First <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Intelligent Command Hub</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Not just a control center, consultancy, or dashboard—it&apos;s all of these combined into one living, breathing command ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="group p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Security and resilience move from being a <span className="font-bold">cost center</span> to a <span className="font-bold">strategic advantage</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Core <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive operational support services powered by AI intelligence and human expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sector Modules */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Sector-Specific Modules</h3>
              <p className="text-lg text-slate-600">Tailored solutions for your industry&apos;s unique challenges</p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              {sectorModules.map((sector) => (
                <div
                  key={sector.name}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full ${sector.color} hover:scale-105 transition-all duration-300 cursor-pointer`}
                >
                  <span className="text-xl">{sector.icon}</span>
                  <span className="font-semibold">{sector.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Integration */}
      <section id="technology" className="py-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Technology <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">&amp; Integration</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Seamlessly integrated ecosystem of cutting-edge platforms working together as one unified command center
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologyStack.map((tech) => (
              <div
                key={tech.name}
                className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-blue-200 mb-6 font-medium">{tech.description}</p>
                  
                  <div className="space-y-3">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-blue-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Journey */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From routine operations to crisis recovery—experience how the Ops Room transforms every stage of your security operations
            </p>
          </div>

          <div className="relative">
            {/* Journey Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
            
            <div className="space-y-12">
              {clientJourney.map((step, index) => (
                <div
                  key={step.stage}
                  className={`relative transition-all duration-1000 ${
                    activeJourneyStep === index ? 'scale-105 opacity-100' : 'opacity-75'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-xl shadow-xl`}>
                      {step.icon}
                    </div>
                  </div>

                  <div className={`lg:flex items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                    <div className="lg:w-1/2 lg:px-8">
                      <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-xl border-l-4 border-blue-500">
                        <div className="flex items-center gap-3 mb-4 lg:hidden">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white`}>
                            {step.icon}
                          </div>
                          <div className="font-bold text-2xl text-slate-900">{index + 1}</div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.stage}</h3>
                        <h4 className="text-lg font-semibold text-slate-600 mb-4">{step.subtitle}</h4>
                        <p className="text-slate-700 mb-6">{step.description}</p>
                        
                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${step.color} text-white rounded-full text-sm font-semibold`}>
                          <span>➡️</span>
                          <span>{step.outcome}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden lg:block lg:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToActionSection />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
