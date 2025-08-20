'use client'

import { useEffect, useRef } from 'react'
import CallToActionSection from '@/components/CallToActionSection'

export default function OperationsPage() {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Section tracking removed
        }
      })
    }, observerOptions)

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const setSectionRef = (sectionId: string) => (el: HTMLElement | null) => {
    sectionRefs.current[sectionId] = el
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-secondary)] via-[var(--color-secondary-light)] to-[var(--color-primary)] text-white">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
            `,
            animation: 'gradient-shift 8s ease-in-out infinite'
          }}>
          </div>
        </div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full w-full p-8">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className="border border-white rounded"
                style={{
                  animation: `grid-pulse ${2 + (i % 3)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            {/* Security Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">24/7 Security Operations</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Security
              </span>
              <br />
              <span className="text-white">Operations</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto animate-fade-in-up">
              Round-the-clock protection with rapid response capabilities, advanced threat intelligence, and comprehensive monitoring services.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
              <a
                href="#soc"
                className="group inline-flex items-center gap-2 bg-white text-[var(--color-secondary)] px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explore SOC Services
              </a>
              
              <a
                href="#contact-operations"
                className="group inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Operations
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Floating Security Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-16 h-16 bg-white/5 rounded-full flex items-center justify-center animate-float-particle">
              <svg className="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="absolute top-40 right-20 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center animate-float-particle" style={{ animationDelay: '2s' }}>
              <svg className="w-6 h-6 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/5 rounded-full flex items-center justify-center animate-float-particle" style={{ animationDelay: '4s' }}>
              <svg className="w-10 h-10 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SOC Section */}
      <section 
        id="soc" 
        ref={setSectionRef('soc')}
        className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              24/7 Security Operations Center
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
              Elite <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SOC Services</span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Advanced threat detection and response with elite security analysts working around the clock to protect your infrastructure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">

              <div className="grid gap-6 mb-10">
                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Continuous Monitoring</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">24/7 surveillance of your security infrastructure with advanced behavioral analytics and real-time threat correlation.</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">AI-Powered Detection</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">Machine learning algorithms that identify threats in milliseconds, with continuous improvement through threat intelligence feeds.</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Expert Security Analysts</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">Certified professionals with deep expertise in threat hunting, incident response, and forensic analysis.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Learn More About SOC
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#contact-operations"
                  className="group inline-flex items-center gap-3 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all duration-300 font-semibold text-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact SOC Team
                </a>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">SOC Control Center</h3>
                    <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-700 font-semibold">Live Status</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="group bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-lg font-bold">System Health</div>
                            <div className="text-green-100">All systems operational</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold">99.9%</div>
                          <div className="text-green-100 text-sm">Uptime</div>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-lg font-bold">Events Analyzed</div>
                            <div className="text-blue-100">Last 24 hours</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold">2.4M</div>
                          <div className="text-blue-100 text-sm">Security Events</div>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-lg font-bold">Threats Neutralized</div>
                            <div className="text-orange-100">Today</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold">47</div>
                          <div className="text-orange-100 text-sm">Blocked Attacks</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Response Section */}
      <section 
        id="incident" 
        ref={setSectionRef('incident')}
        className="py-16 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              Critical Incident Response
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
              Rapid <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Response Team</span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              When security incidents occur, our expert response team springs into action with proven methodologies to contain, investigate, and remediate threats.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 animate-slide-in-right">

              <div className="space-y-6 mb-10">
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">Immediate Containment</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">Rapid isolation of affected systems within minutes to prevent lateral movement and minimize business disruption.</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">Forensic Investigation</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">Deep digital forensics analysis to understand attack vectors, timeline, and full scope of the security incident.</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">System Recovery</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">Safe restoration of services with enhanced security measures and continuous monitoring to prevent re-infection.</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">Lessons Learned</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">Comprehensive post-incident analysis with actionable recommendations to strengthen your security posture.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Emergency Response
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 border-2 border-red-600 text-red-600 px-8 py-4 rounded-2xl hover:bg-red-50 transition-all duration-300 font-semibold text-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  View Playbooks
                </a>
              </div>
            </div>

            <div className="lg:order-1 animate-slide-in-left">
              <div className="relative">
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      <span className="font-bold text-sm uppercase tracking-wide">Critical Incident Detected</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Response Timeline</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="group flex items-center gap-6 p-6 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-lg text-white hover:shadow-xl transition-all duration-300">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        0m
                      </div>
                      <div>
                        <div className="text-lg font-bold">Alert Triggered</div>
                        <div className="text-red-100">Automated detection and instant escalation</div>
                      </div>
                    </div>

                    <div className="group flex items-center gap-6 p-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg text-white hover:shadow-xl transition-all duration-300">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        2m
                      </div>
                      <div>
                        <div className="text-lg font-bold">Team Mobilized</div>
                        <div className="text-orange-100">Expert analysts assigned and activated</div>
                      </div>
                    </div>

                    <div className="group flex items-center gap-6 p-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl shadow-lg text-white hover:shadow-xl transition-all duration-300">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        5m
                      </div>
                      <div>
                        <div className="text-lg font-bold">Containment</div>
                        <div className="text-yellow-100">Threat isolated and spread prevented</div>
                      </div>
                    </div>

                    <div className="group flex items-center gap-6 p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg text-white hover:shadow-xl transition-all duration-300">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        15m
                      </div>
                      <div>
                        <div className="text-lg font-bold">Resolution</div>
                        <div className="text-green-100">Systems restored and secured</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl shadow-xl">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold mb-2">&lt; 15 min</div>
                      <div className="text-emerald-100 font-medium">Average Complete Resolution Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section 
        id="emergency" 
        ref={setSectionRef('emergency')}
        className="py-16 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-80 h-80 bg-rose-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              24/7 Emergency Response
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-6">
              Emergency <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">Support</span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-4xl mx-auto leading-relaxed">
              When critical security situations arise, our emergency response team provides immediate support with dedicated hotlines and rapid deployment of security specialists.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/30 text-center hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-slide-in-left">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">24/7 Emergency Hotline</h3>
              <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">Direct access to our security experts at any hour - immediate response guaranteed</p>
              <div className="inline-block">
                <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-2">+1-800-YUBIX-SOC</div>
                <div className="text-sm text-red-600 font-medium">Always Available</div>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/30 text-center hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Rapid On-Site Deployment</h3>
              <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">Expert security specialists dispatched to your location within hours</p>
              <div className="inline-block">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">&lt; 2 Hours</div>
                <div className="text-sm text-orange-600 font-medium">Response Time</div>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/30 text-center hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-slide-in-right">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Complete Crisis Management</h3>
              <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">End-to-end incident coordination and executive communication</p>
              <div className="inline-block">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-2">Full Service</div>
                <div className="text-sm text-amber-600 font-medium">Comprehensive Support</div>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {/* Section Header */}
            <div className="text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-sm">
                <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                Intelligent Response Framework
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                Emergency Response <span className="bg-gradient-to-r from-orange-600 via-red-600 to-rose-600 bg-clip-text text-transparent">Matrix</span>
              </h3>
              <p className="text-xl text-[var(--color-text-secondary)] max-w-4xl mx-auto leading-relaxed">
                AI-powered escalation framework that dynamically assesses incident severity and business impact for optimal resource allocation and response coordination.
              </p>
            </div>

            {/* Response Priority Cards */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Level 1 - Standard Priority */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-in-left">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative">
                  {/* Priority Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">P1</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-[var(--color-text-primary)]">Standard</h4>
                        <p className="text-yellow-600 font-semibold">Non-Critical Incidents</p>
                      </div>
                    </div>
                    <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider">Low Impact</div>
                  </div>
                  
                  <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed text-lg">
                    Routine incidents with minimal business impact, handled through standard operating procedures and scheduled response protocols.
                  </p>
                  
                  {/* Metrics Cards */}
                  <div className="space-y-4 mb-8">
                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200/50 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-yellow-800 text-lg">Response Time</span>
                        <span className="text-yellow-600 font-bold text-xl">4 hours</span>
                      </div>
                      <div className="w-full bg-yellow-200 rounded-full h-3 shadow-inner">
                        <div className="bg-gradient-to-r from-yellow-500 to-amber-600 h-3 rounded-full w-1/4 shadow-sm"></div>
                      </div>
                      <div className="text-yellow-600 text-sm mt-2 font-medium">Standard business hours response</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200/50 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-amber-800 text-lg">Resolution SLA</span>
                        <span className="text-amber-600 font-bold text-xl">24 hours</span>
                      </div>
                      <div className="w-full bg-amber-200 rounded-full h-3 shadow-inner">
                        <div className="bg-gradient-to-r from-amber-500 to-orange-600 h-3 rounded-full w-2/3 shadow-sm"></div>
                      </div>
                      <div className="text-amber-600 text-sm mt-2 font-medium">Next business day completion</div>
                    </div>
                  </div>
                  
                  {/* Support Channels */}
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">📧 Email Support</div>
                    <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">📞 Phone Support</div>
                    <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">🌐 Portal Access</div>
                  </div>
                </div>
              </div>

              {/* Level 2 - High Priority */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative">
                  {/* Priority Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">P2</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-[var(--color-text-primary)]">High Priority</h4>
                        <p className="text-orange-600 font-semibold">Performance Impact</p>
                      </div>
                    </div>
                    <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider">Medium Impact</div>
                  </div>
                  
                  <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed text-lg">
                    Significant incidents affecting system performance, requiring accelerated response with dedicated analyst assignment and priority handling.
                  </p>
                  
                  {/* Metrics Cards */}
                  <div className="space-y-4 mb-8">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200/50 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-orange-800 text-lg">Response Time</span>
                        <span className="text-orange-600 font-bold text-xl">1 hour</span>
                      </div>
                      <div className="w-full bg-orange-200 rounded-full h-3 shadow-inner">
                        <div className="bg-gradient-to-r from-orange-500 to-red-600 h-3 rounded-full w-1/2 shadow-sm"></div>
                      </div>
                      <div className="text-orange-600 text-sm mt-2 font-medium">Immediate analyst assignment</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-6 border border-red-200/50 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-red-800 text-lg">Resolution SLA</span>
                        <span className="text-red-600 font-bold text-xl">8 hours</span>
                      </div>
                      <div className="w-full bg-red-200 rounded-full h-3 shadow-inner">
                        <div className="bg-gradient-to-r from-red-500 to-rose-600 h-3 rounded-full w-3/4 shadow-sm"></div>
                      </div>
                      <div className="text-red-600 text-sm mt-2 font-medium">Same-day resolution target</div>
                    </div>
                  </div>
                  
                  {/* Support Channels */}
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">📞 Priority Phone</div>
                    <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">🚀 Fast Track</div>
                    <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">👨‍💻 Dedicated Analyst</div>
                  </div>
                </div>
              </div>

              {/* Level 3 - Critical Priority */}
              <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-in-right">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/30 to-rose-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
                
                <div className="relative">
                  {/* Priority Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">P3</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-[var(--color-text-primary)]">Critical</h4>
                        <p className="text-red-600 font-semibold">Business Critical</p>
                      </div>
                    </div>
                    <div className="bg-red-100 text-red-800 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider animate-pulse">Critical Impact</div>
                  </div>
                  
                  <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed text-lg">
                    Severe business-critical incidents requiring immediate war room activation, executive notification, and full resource mobilization.
                  </p>
                  
                  {/* Metrics Cards */}
                  <div className="space-y-4 mb-8">
                    <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-6 border border-red-200/50 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-red-800 text-lg">Response Time</span>
                        <span className="text-red-600 font-bold text-xl">15 minutes</span>
                      </div>
                      <div className="w-full bg-red-200 rounded-full h-3 shadow-inner">
                        <div className="bg-gradient-to-r from-red-500 to-rose-600 h-3 rounded-full w-full shadow-sm animate-pulse"></div>
                      </div>
                      <div className="text-red-600 text-sm mt-2 font-medium">Immediate war room activation</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-200/50 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-rose-800 text-lg">Resolution SLA</span>
                        <span className="text-rose-600 font-bold text-xl">2 hours</span>
                      </div>
                      <div className="w-full bg-rose-200 rounded-full h-3 shadow-inner">
                        <div className="bg-gradient-to-r from-rose-500 to-pink-600 h-3 rounded-full w-full shadow-sm animate-pulse"></div>
                      </div>
                      <div className="text-rose-600 text-sm mt-2 font-medium">Maximum priority resolution</div>
                    </div>
                  </div>
                  
                  {/* Support Channels */}
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">🏛️ War Room</div>
                    <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">👔 C-Level Alert</div>
                    <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">🚨 Full Team</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intelligent Response Features - Ultra Modern Design */}
            <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-3xl p-16 border border-white/40 shadow-2xl overflow-hidden animate-fade-in-up">
              {/* Background Elements */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
                <div className="absolute top-20 right-20 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
              </div>

              {/* Animated Grid Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-12 gap-2 h-full w-full p-4">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-blue-300/20 rounded"
                      style={{
                        animation: `grid-pulse ${3 + (i % 4)}s ease-in-out infinite`,
                        animationDelay: `${i * 0.05}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="relative z-10">
                {/* Enhanced Section Header */}
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-800 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
                    <div className="relative">
                      <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                    </div>
                    <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">Advanced AI Automation</span>
                  </div>
                  <h4 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-8">
                    Intelligent Response <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Features</span>
                  </h4>
                  <p className="text-xl text-[var(--color-text-secondary)] max-w-4xl mx-auto leading-relaxed mb-8">
                    Next-generation automation and AI-powered intelligence capabilities built into every response level, delivering unmatched efficiency, accuracy, and strategic insight.
                  </p>
                  
                  {/* Feature Stats */}
                  <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">99.7%</div>
                      <div className="text-sm text-[var(--color-text-secondary)] font-medium">Accuracy Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">&lt; 30s</div>
                      <div className="text-sm text-[var(--color-text-secondary)] font-medium">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">24/7</div>
                      <div className="text-sm text-[var(--color-text-secondary)] font-medium">Availability</div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Feature Cards */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* AI-Powered Triage Card */}
                  <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-slide-in-left">
                    {/* Card Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    
                    <div className="relative">
                      {/* Enhanced Icon Container */}
                      <div className="relative mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          {/* Pulse Ring */}
                          <div className="absolute inset-0 w-20 h-20 bg-blue-400 rounded-3xl animate-ping opacity-20"></div>
                        </div>
                        
                        {/* Feature Badge */}
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          NEW
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <h5 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">AI-Powered Triage</h5>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                          Advanced machine learning algorithms provide intelligent severity assessment with automatic priority assignment based on comprehensive business impact analysis and historical pattern recognition.
                        </p>
                        
                        {/* Feature Highlights */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 bg-blue-50 rounded-xl p-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm font-medium text-blue-800">Natural Language Processing</span>
                          </div>
                          <div className="flex items-center gap-3 bg-indigo-50 rounded-xl p-3">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            <span className="text-sm font-medium text-indigo-800">Predictive Analytics</span>
                          </div>
                          <div className="flex items-center gap-3 bg-purple-50 rounded-xl p-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm font-medium text-purple-800">Pattern Recognition</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Escalation Card */}
                  <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up">
                    {/* Card Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    
                    <div className="relative">
                      {/* Enhanced Icon Container */}
                      <div className="relative mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          {/* Pulse Ring */}
                          <div className="absolute inset-0 w-20 h-20 bg-green-400 rounded-3xl animate-ping opacity-20"></div>
                        </div>
                        
                        {/* Feature Badge */}
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          SMART
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <h5 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Dynamic Escalation</h5>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                          Intelligent real-time escalation engine that dynamically adjusts response protocols based on resolution progress, stakeholder feedback, and evolving business impact metrics.
                        </p>
                        
                        {/* Feature Highlights */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 bg-green-50 rounded-xl p-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium text-green-800">Real-time Adjustment</span>
                          </div>
                          <div className="flex items-center gap-3 bg-emerald-50 rounded-xl p-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span className="text-sm font-medium text-emerald-800">Impact Assessment</span>
                          </div>
                          <div className="flex items-center gap-3 bg-teal-50 rounded-xl p-3">
                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                            <span className="text-sm font-medium text-teal-800">Stakeholder Feedback</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Executive Communication Card */}
                  <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-slide-in-right">
                    {/* Card Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    
                    <div className="relative">
                      {/* Enhanced Icon Container */}
                      <div className="relative mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          {/* Pulse Ring */}
                          <div className="absolute inset-0 w-20 h-20 bg-purple-400 rounded-3xl animate-ping opacity-20"></div>
                        </div>
                        
                        {/* Feature Badge */}
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          AUTO
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <h5 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Executive Communication</h5>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                          Automated stakeholder notification system with intelligent communication routing, customizable reporting frequencies, and executive-level status dashboards with real-time updates.
                        </p>
                        
                        {/* Feature Highlights */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 bg-purple-50 rounded-xl p-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm font-medium text-purple-800">Automated Notifications</span>
                          </div>
                          <div className="flex items-center gap-3 bg-pink-50 rounded-xl p-3">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <span className="text-sm font-medium text-pink-800">Executive Dashboards</span>
                          </div>
                          <div className="flex items-center gap-3 bg-rose-50 rounded-xl p-3">
                            <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                            <span className="text-sm font-medium text-rose-800">Real-time Updates</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Intelligence Section */}
      <section 
        id="intelligence" 
        ref={setSectionRef('intelligence')}
        className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 gap-px h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="border-r border-b border-white/10"
                style={{
                  animation: `grid-pulse ${3 + (i % 5)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.02}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              Advanced Threat Intelligence
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Threat <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Intelligence</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of emerging threats with our comprehensive intelligence platform, providing real-time insights and proactive security recommendations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">

              <div className="grid gap-6 mb-10">
                <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/30 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Global Intelligence Network</h3>
                      <p className="text-blue-100 leading-relaxed">Worldwide threat data collection from 200+ sources with real-time correlation and analysis.</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/30 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Real-time Intelligence Feeds</h3>
                      <p className="text-cyan-100 leading-relaxed">Live threat indicators, IOCs, and TTPs delivered instantly to your security infrastructure.</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-green-400/30 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">AI-Powered Threat Analytics</h3>
                      <p className="text-green-100 leading-relaxed">Machine learning algorithms for advanced pattern recognition and predictive threat modeling.</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-purple-400/30 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Custom Intelligence Reports</h3>
                      <p className="text-purple-100 leading-relaxed">Tailored threat intelligence briefings specific to your industry and threat landscape.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Access Intelligence Platform
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 font-semibold text-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Request Demo
                </a>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 shadow-2xl">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      Live Intelligence Feed
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Global Threat Landscape</h3>
                    <p className="text-blue-200">Real-time threat intelligence dashboard</p>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="group bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                        <div className="text-3xl font-bold text-blue-300 mb-2 group-hover:scale-110 transition-transform duration-300">156</div>
                        <div className="text-sm text-blue-200 font-medium">Active Threats</div>
                        <div className="mt-2 w-full bg-blue-900/30 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-blue-400 to-blue-300 h-1.5 rounded-full w-3/4 animate-pulse"></div>
                        </div>
                      </div>
                      <div className="group bg-gradient-to-br from-red-500/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-red-400/20 hover:border-red-400/40 transition-all duration-300">
                        <div className="text-3xl font-bold text-red-300 mb-2 group-hover:scale-110 transition-transform duration-300">23</div>
                        <div className="text-sm text-red-200 font-medium">Critical Alerts</div>
                        <div className="mt-2 w-full bg-red-900/30 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-red-400 to-red-300 h-1.5 rounded-full w-1/4 animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-lg font-bold text-green-300">Threat Trends</span>
                        <div className="flex items-center gap-2 bg-green-400/20 px-3 py-1 rounded-full">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-200 font-semibold">Live Analysis</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                          <span className="text-sm font-medium text-white">Ransomware</span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-gray-700 rounded-full h-1.5">
                              <div className="bg-red-400 h-1.5 rounded-full w-3/4"></div>
                            </div>
                            <span className="text-sm font-mono text-red-300">↑ 12%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                          <span className="text-sm font-medium text-white">Phishing</span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-gray-700 rounded-full h-1.5">
                              <div className="bg-yellow-400 h-1.5 rounded-full w-2/3"></div>
                            </div>
                            <span className="text-sm font-mono text-green-300">↓ 3%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                          <span className="text-sm font-medium text-white">APT Activity</span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-gray-700 rounded-full h-1.5">
                              <div className="bg-orange-400 h-1.5 rounded-full w-1/2"></div>
                            </div>
                            <span className="text-sm font-mono text-orange-300">↑ 8%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20">
                      <h4 className="text-lg font-bold text-purple-300 mb-4">Recent IOCs</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                          <div className="text-sm font-mono text-purple-200">192.168.1.100</div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                          <div className="text-sm font-mono text-purple-200">malware.example.com</div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                          <div className="text-sm font-mono text-purple-200">SHA256: 7d865e959b...</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <svg className="w-10 h-10 text-white animate-spin" style={{ animationDuration: '4s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Monitoring Section */}
      <section 
        id="monitoring" 
        ref={setSectionRef('monitoring')}
        className="py-16 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              Real-time Security Monitoring
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-6">
              Live <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">Monitoring</span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-4xl mx-auto leading-relaxed">
              Continuous visibility into your security posture with real-time monitoring, intelligent alerting, and comprehensive analytics dashboards.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-white/30 shadow-2xl animate-slide-in-left">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Security Command Center</h3>
                  <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-700 font-bold">Live Monitoring</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  <div className="group bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">99.8%</div>
                    <div className="text-emerald-100 font-medium">System Uptime</div>
                    <div className="mt-3 w-full bg-white/20 rounded-full h-1.5">
                      <div className="bg-white h-1.5 rounded-full w-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="group bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">1.2M</div>
                    <div className="text-blue-100 font-medium">Events/Day</div>
                    <div className="mt-3 w-full bg-white/20 rounded-full h-1.5">
                      <div className="bg-white h-1.5 rounded-full w-4/5 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="group bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">34</div>
                    <div className="text-orange-100 font-medium">Threats Blocked</div>
                    <div className="mt-3 w-full bg-white/20 rounded-full h-1.5">
                      <div className="bg-white h-1.5 rounded-full w-1/3 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="group bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">&lt; 1s</div>
                    <div className="text-purple-100 font-medium">Response Time</div>
                    <div className="mt-3 w-full bg-white/20 rounded-full h-1.5">
                      <div className="bg-white h-1.5 rounded-full w-1/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="group bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-lg font-bold">Network Security</div>
                          <div className="text-emerald-100">All 247 endpoints secured and monitored</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">ACTIVE</div>
                        <div className="text-emerald-100 text-sm mt-1">100% Coverage</div>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-lg font-bold">Application Performance</div>
                          <div className="text-blue-100">Real-time monitoring of 47 services</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">OPTIMAL</div>
                        <div className="text-blue-100 text-sm mt-1">98.2% Efficiency</div>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 10h1m4 0h1m-6 4h.01M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-lg font-bold">Security Alerts</div>
                          <div className="text-amber-100">3 low priority items for review</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">REVIEW</div>
                        <div className="text-amber-100 text-sm mt-1">Non-Critical</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-slide-in-right">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl">
                <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-6">Coverage Analytics</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-base font-medium text-[var(--color-text-primary)]">Network Traffic</span>
                      <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-600 h-3 rounded-full w-full shadow-sm animate-pulse"></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">All network segments monitored</div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-base font-medium text-[var(--color-text-primary)]">Applications</span>
                      <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full w-[95%] shadow-sm"></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">47 of 49 services active</div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-base font-medium text-[var(--color-text-primary)]">Infrastructure</span>
                      <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full w-[98%] shadow-sm"></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Cloud & on-premise systems</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/30">
                <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-6">Advanced Features</h4>
                <div className="space-y-4">
                  <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-emerald-50 transition-all duration-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 10h1m4 0h1m-6 4h.01M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                      </svg>
                    </div>
                    <span className="font-medium text-[var(--color-text-primary)]">Intelligent Real-time Alerting</span>
                  </div>
                  <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="font-medium text-[var(--color-text-primary)]">Customizable Dashboards</span>
                  </div>
                  <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-purple-50 transition-all duration-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="font-medium text-[var(--color-text-primary)]">Automated Response Actions</span>
                  </div>
                  <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-orange-50 transition-all duration-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="font-medium text-[var(--color-text-primary)]">Advanced Analytics & Reporting</span>
                  </div>
                  <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-teal-50 transition-all duration-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-medium text-[var(--color-text-primary)]">Mobile & Multi-platform Access</span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href="/contact"
                    className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Live Dashboard
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-3 border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-2xl hover:bg-emerald-50 transition-all duration-300 font-semibold"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Request Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rapid Response Section */}
      <section 
        id="response" 
        ref={setSectionRef('response')}
        className="py-14 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 animate-slide-in-right">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">Rapid Response</h2>
              </div>
              
              <p className="text-lg text-[var(--color-text-secondary)] mb-8">
                When seconds count, our rapid response team delivers immediate action with pre-configured 
                playbooks and automated containment procedures to minimize damage and restore operations.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-red-800">Automated Detection</h3>
                      <p className="text-red-600">AI-powered threat identification in real-time</p>
                    </div>
                  </div>
                  <div className="text-sm text-red-700">
                    Advanced machine learning algorithms continuously monitor for anomalies and trigger 
                    automated responses within milliseconds of detection.
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-orange-800">Instant Containment</h3>
                      <p className="text-orange-600">Immediate threat isolation and quarantine</p>
                    </div>
                  </div>
                  <div className="text-sm text-orange-700">
                    Automated containment procedures isolate affected systems and prevent lateral 
                    movement while maintaining business continuity.
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-yellow-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-yellow-800">Expert Escalation</h3>
                      <p className="text-yellow-600">Human expertise when needed most</p>
                    </div>
                  </div>
                  <div className="text-sm text-yellow-700">
                    Complex incidents are immediately escalated to our expert security analysts 
                    for advanced threat hunting and remediation.
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 font-semibold"
                >
                  Request Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                </a>
                <a
                  href="#contact-operations"
                  className="inline-flex items-center gap-2 border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition-colors duration-300 font-semibold"
                >
                  Contact Team
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="lg:order-1 animate-slide-in-left">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Response Metrics</h3>
                    <p className="text-[var(--color-text-secondary)]">Real-time performance dashboard</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
                      <div className="text-2xl font-bold text-red-600">&lt; 30s</div>
                      <div className="text-sm text-red-700">Detection Time</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 text-center border border-orange-200">
                      <div className="text-2xl font-bold text-orange-600">&lt; 2min</div>
                      <div className="text-sm text-orange-700">Containment</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-green-800">Automated Response</span>
                      </div>
                      <span className="text-sm text-green-600">Active</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-blue-800">Playbook Execution</span>
                      </div>
                      <span className="text-sm text-blue-600">Ready</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium text-purple-800">Expert Team</span>
                      </div>
                      <span className="text-sm text-purple-600">Standby</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg border border-red-200">
                    <div className="text-center">
                      <div className="font-bold text-red-800 mb-1">Success Rate</div>
                      <div className="text-3xl font-bold text-red-600">99.7%</div>
                      <div className="text-sm text-red-600">Threat Containment</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status Dashboard Section */}
      <section 
        id="status" 
        ref={setSectionRef('status')}
        className="py-14 bg-gradient-to-r from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-[var(--color-text-primary)]">Status Dashboard</h2>
            </div>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Real-time visibility into system health, performance metrics, and security status 
              with customizable dashboards and instant notifications.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 animate-fade-in-up">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">System Status Overview</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">All Systems Operational</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-green-800">Security Services</div>
                          <div className="text-sm text-green-600">SOC, Monitoring, Response</div>
                        </div>
                      </div>
                      <span className="text-green-600 font-medium">Operational</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-blue-800">Infrastructure</div>
                          <div className="text-sm text-blue-600">Servers, Network, Storage</div>
                        </div>
                      </div>
                      <span className="text-blue-600 font-medium">Operational</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-purple-800">Applications</div>
                          <div className="text-sm text-purple-600">Web Apps, APIs, Services</div>
                        </div>
                      </div>
                      <span className="text-purple-600 font-medium">Operational</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-[var(--color-text-primary)] mb-3">Performance Metrics</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Response Time</span>
                          <span className="text-sm font-mono text-green-600">&lt; 100ms</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Uptime</span>
                          <span className="text-sm font-mono text-green-600">99.98%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">CPU Usage</span>
                          <span className="text-sm font-mono text-blue-600">34%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Memory</span>
                          <span className="text-sm font-mono text-blue-600">67%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-3">Recent Activity</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-yellow-700">System backup completed</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-yellow-700">Security patch applied</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-yellow-700">Monitoring rules updated</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">99.98%</div>
                      <div className="text-sm text-gray-600">Uptime (30d)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">847</div>
                      <div className="text-sm text-gray-600">Incidents Resolved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">&lt; 5min</div>
                      <div className="text-sm text-gray-600">Avg Resolution</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">0</div>
                      <div className="text-sm text-gray-600">Critical Issues</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">Service Health</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-green-800">SOC Operations</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-green-800">Threat Detection</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-green-800">Response Team</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-green-800">Monitoring</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600">Online</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 border border-blue-200">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="text-sm font-medium text-blue-800">View Detailed Reports</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200 border border-purple-200">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 10h1m4 0h1m-6 4h.01M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                      </svg>
                      <span className="text-sm font-medium text-purple-800">Export Status Data</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200 border border-green-200">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm font-medium text-green-800">Configure Alerts</span>
                    </div>
                  </button>
                </div>

                <a
                  href="/contact"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-4 py-3 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors duration-300 font-semibold"
                >
                  Access Full Dashboard
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Operations Section */}
      <section 
        id="contact-operations" 
        ref={setSectionRef('contact-operations')}
        className="py-14 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold">Contact Operations</h2>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get direct access to our security operations team for immediate support, 
              consultations, and emergency response coordination.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center border border-red-500/30">
                      <svg className="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Emergency Hotline</h3>
                      <p className="text-blue-200">24/7 critical incident response</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-red-300 mb-2">+1-800-YUBIX-SOC</div>
                  <p className="text-blue-100 text-sm">
                    Direct line to our Security Operations Center for immediate assistance 
                    with security incidents and emergencies.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                      <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Operations Email</h3>
                      <p className="text-blue-200">Non-urgent operational queries</p>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-blue-300 mb-2">operations@yubix.com</div>
                  <p className="text-blue-100 text-sm">
                    For operational questions, service requests, and general inquiries 
                    about our security operations.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                      <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 11v3m-6-3h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Secure Portal</h3>
                      <p className="text-blue-200">Encrypted client communications</p>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-green-300 mb-2">portal.yubix.com/secure</div>
                  <p className="text-blue-100 text-sm">
                    Secure client portal for confidential communications, reports, 
                    and sensitive operational discussions.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Operations Team</h3>
                  <p className="text-blue-200">Available 24/7/365</p>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Operations Director</div>
                      <div className="text-blue-200 text-sm">Strategic oversight & escalation</div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-300">Available</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">B</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">SOC Manager</div>
                      <div className="text-blue-200 text-sm">Operations coordination</div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-300">Available</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">C</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Incident Commander</div>
                      <div className="text-blue-200 text-sm">Emergency response lead</div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-300">On-call</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-500/20 rounded-lg p-4 text-center border border-blue-500/30">
                    <div className="text-2xl font-bold text-blue-300">&lt; 2min</div>
                    <div className="text-sm text-blue-200">Response Time</div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-4 text-center border border-green-500/30">
                    <div className="text-2xl font-bold text-green-300">99.9%</div>
                    <div className="text-sm text-green-200">Availability</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+1-800-YUBIX-SOC"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 font-semibold"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                  <a
                    href="mailto:operations@yubix.com"
                    className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300 font-semibold"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToActionSection />
    </div>
  )
}