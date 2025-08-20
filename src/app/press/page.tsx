'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import CallToActionSection from '@/components/CallToActionSection'

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options])

  return { ref, isIntersecting }
}

const pressReleases = [
  {
    title: "YUBIX Achieves Record-Breaking $500M in Prevented Security Threats",
    date: "August 15, 2025",
    category: "Company News",
    excerpt: "Advanced AI-powered threat detection systems prevent unprecedented volume of cyber attacks across global infrastructure.",
    link: "#",
    featured: true
  },
  {
    title: "Partnership Announcement: YUBIX and Global Aviation Authority",
    date: "July 28, 2025",
    category: "Partnerships",
    excerpt: "Strategic collaboration to secure 250+ international airports with next-generation threat detection technology.",
    link: "#",
    featured: false
  },
  {
    title: "YUBIX Expands Operations to Asia-Pacific Region",
    date: "June 12, 2025",
    category: "Business Growth",
    excerpt: "Opening new regional headquarters in Singapore and Tokyo to serve growing demand for cybersecurity solutions.",
    link: "#",
    featured: false
  },
  {
    title: "Revolutionary AI Module Predicts Threats 72 Hours in Advance",
    date: "May 20, 2025",
    category: "Innovation",
    excerpt: "Breakthrough in predictive analytics sets new industry standard for proactive cybersecurity measures.",
    link: "#",
    featured: true
  },
  {
    title: "YUBIX Completes SOC 2 Type II Certification Renewal",
    date: "April 8, 2025",
    category: "Compliance",
    excerpt: "Demonstrates continued commitment to the highest standards of security and operational excellence.",
    link: "#",
    featured: false
  },
  {
    title: "Industry Recognition: YUBIX Named 'Cybersecurity Innovator of the Year'",
    date: "March 15, 2025",
    category: "Awards",
    excerpt: "Prestigious award recognizes groundbreaking contributions to enterprise cybersecurity and threat prevention.",
    link: "#",
    featured: false
  }
]

const mediaContacts = [
  {
    name: "Sarah Chen",
    title: "Director of Communications",
    email: "press@yubix.com",
    phone: "+1 (555) 123-4567"
  },
  {
    name: "Michael Rodriguez",
    title: "Public Relations Manager",
    email: "media@yubix.com",
    phone: "+1 (555) 123-4568"
  }
]

const mediaAssets = [
  {
    type: "Company Logo",
    formats: ["PNG", "SVG", "EPS"],
    description: "High-resolution YUBIX logo in various formats"
  },
  {
    type: "Executive Photos",
    formats: ["JPG", "PNG"],
    description: "Professional headshots of key executives and leadership team"
  },
  {
    type: "Product Screenshots",
    formats: ["PNG", "JPG"],
    description: "Screenshots of Vertex Pro, Buzz World, and BYONN platforms"
  },
  {
    type: "Company Fact Sheet",
    formats: ["PDF"],
    description: "Key company statistics, milestones, and achievements"
  }
]

export default function Press() {
  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver({ threshold: 0.2 })
  const { ref: pressRef, isIntersecting: pressInView } = useIntersectionObserver({ threshold: 0.2 })
  const { ref: contactRef, isIntersecting: contactInView } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Background Elements */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-xl px-8 py-4 rounded-2xl border border-white/30 shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-white/90 text-sm font-bold uppercase tracking-wider">Press Center</span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-br from-white via-blue-50 to-blue-200 bg-clip-text text-transparent">
                Media & Press
              </span>
              <br />
              <span className="bg-gradient-to-br from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Stay updated with the latest news, announcements, and insights from YUBIX. 
              Access press releases, media assets, and contact information for journalists and media professionals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#press-releases"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-3"
              >
                Latest News
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#media-contact"
                className="group bg-white/10 backdrop-blur-xl hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center gap-3"
              >
                Media Contact
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section id="press-releases" ref={pressRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${pressInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Latest Press Releases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed about YUBIX developments, partnerships, and industry-leading innovations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Featured Articles */}
              {pressReleases.filter(release => release.featured).map((release, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {release.category}
                      </span>
                      <span className="text-gray-500 text-sm">{release.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {release.excerpt}
                    </p>
                    <Link 
                      href={release.link}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      Read Full Release
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* All Press Releases */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">All Press Releases</h3>
                <div className="space-y-6">
                  {pressReleases.map((release, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-sm text-gray-500">{release.date}</span>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                            {release.category}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{release.title}</h4>
                        <p className="text-gray-600 text-sm">{release.excerpt}</p>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <Link 
                          href={release.link}
                          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                        >
                          Read More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Assets Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Media Assets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download high-quality assets including logos, photos, and company information for your stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaAssets.map((asset, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{asset.type}</h3>
                <p className="text-gray-600 text-sm mb-4">{asset.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {asset.formats.map((format, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {format}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section id="media-contact" ref={contactRef} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Media Contact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                For interviews, press inquiries, or additional information, please contact our media team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {mediaContacts.map((contact, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {contact.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.name}</h3>
                  <p className="text-gray-600 mb-4">{contact.title}</p>
                  <div className="space-y-2">
                    <a 
                      href={`mailto:${contact.email}`}
                      className="block text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {contact.email}
                    </a>
                    <a 
                      href={`tel:${contact.phone}`}
                      className="block text-gray-600 hover:text-gray-700"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Press Kit Download</h3>
                <p className="text-gray-600 mb-6">
                  Download our complete press kit including company overview, executive bios, high-resolution images, and recent press releases.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg">
                  Download Press Kit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToActionSection />
    </div>
  )
}
