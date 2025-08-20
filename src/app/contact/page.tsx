'use client'

import { useState, useRef, useEffect } from 'react'
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver({ threshold: 0.2 })
  const { ref: formRef, isIntersecting: formInView } = useIntersectionObserver({ threshold: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: result.message || 'Thank you for your message. We will get back to you soon!' 
        })
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: result.errors ? result.errors.join(', ') : result.error || 'Something went wrong. Please try again.' 
        })
      }
    } catch {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced Modern Design */}
      <section ref={heroRef} className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-0 lg:px-2 py-8 sm:py-12">
          <div className={`text-center transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Enhanced Badge */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-xl px-10 py-5 rounded-2xl border border-white/30 shadow-2xl hover:border-white/40 transition-all duration-300 group">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse delay-300"></div>
                </div>
                <span className="text-white/90 text-sm font-bold uppercase tracking-wider group-hover:text-white transition-colors">Get In Touch</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-700"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              <span className="block text-white mb-3 drop-shadow-2xl relative">
                Connect With
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-70"></div>
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl pb-2 relative">
                Security Experts
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent pb-2">
                Available 24/7 Worldwide
              </span>
            </h1>

            {/* Enhanced Description */}
            <div className="mb-8">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
                <span className="text-blue-300 font-semibold">Expert Consultation</span>
                <span className="text-gray-400 mx-3">•</span>
                <span className="text-purple-300 font-semibold">Demo Requests</span>
                <span className="text-gray-400 mx-3">•</span>
                <span className="text-cyan-300 font-semibold">Partnership Opportunities</span>
              </p>
            </div>

            {/* Enhanced Subtitle */}
            <div className="max-w-5xl mx-auto mb-8">
              <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-light mb-6">
                Ready to enhance your security posture? Our team of experts is here to help you find the right solution for your organization.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>24/7 Emergency Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Response in 30 Seconds</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <span>Global Coverage</span>
                </div>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto mb-8">
                {[
                  { number: '24/7', label: 'Support Available', icon: '🕐', color: 'from-green-400 to-emerald-400' },
                  { number: '30s', label: 'Response Time', icon: '⚡', color: 'from-blue-400 to-cyan-400' },
                  { number: '180+', label: 'Global Clients', icon: '🌍', color: 'from-purple-400 to-pink-400' },
                  { number: '6', label: 'Languages', icon: '💬', color: 'from-orange-400 to-red-400' }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="relative bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:border-white/40 group cursor-pointer" 
                  >
                    <div className="relative z-10">
                      <div className="text-4xl lg:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">{stat.icon}</div>
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 relative overflow-hidden">
                        <span className="inline-block transition-all duration-300 group-hover:text-cyan-300">
                          {stat.number}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                      <div className="text-sm lg:text-base text-white/70 font-medium group-hover:text-white/90 transition-colors">{stat.label}</div>
                      
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl lg:rounded-b-3xl`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a
                href="#contact-form"
                className="group relative inline-flex items-center px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                <div className="relative flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Send us a Message</span>
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              </a>

              <a
                href="tel:+15551234567"
                className="group relative inline-flex items-center px-10 py-5 rounded-2xl border-2 border-white/30 text-white font-bold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-2xl"></div>
                <div className="relative flex items-center">
                  <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Emergency Line</span>
                </div>
              </a>
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

      {/* Contact Form & Information Section */}
      <section id="contact-form" ref={formRef} className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-blue-200/50">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-blue-900 font-bold text-sm uppercase tracking-wider">Contact Information</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Multiple Ways to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Choose your preferred method to reach our security experts. We&apos;re available 24/7 for emergencies and consultations.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    title: "Phone Support",
                    content: "+1 (555) 123-4567",
                    subtitle: "Available 24/7 for emergencies",
                    bgColor: "from-blue-500 to-blue-600",
                    cardBg: "from-blue-50 to-blue-100/50"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: "Email Contact",
                    content: "info@yubix.com",
                    subtitle: "sales@yubix.com",
                    bgColor: "from-green-500 to-green-600",
                    cardBg: "from-green-50 to-green-100/50"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    ),
                    title: "WhatsApp",
                    content: "+1 (555) 123-4567",
                    subtitle: "Quick messaging and support",
                    bgColor: "from-purple-500 to-purple-600",
                    cardBg: "from-purple-50 to-purple-100/50"
                  }
                ].map((contact, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${contact.cardBg} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-start">
                        <div className={`w-12 h-12 bg-gradient-to-r ${contact.bgColor} rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{contact.title}</h3>
                          <p className="text-slate-700 font-semibold mb-1">{contact.content}</p>
                          <p className="text-slate-500 text-sm">{contact.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Support */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-100/50 rounded-2xl blur opacity-50"></div>
                <div className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-6 rounded-2xl border border-red-200/50 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.232 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-red-900">Emergency Support</h3>
                    <div className="flex-1 flex justify-end">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <p className="text-red-800 text-sm mb-3">
                    For immediate security emergencies, contact our 24/7 Gold Standard Operations Room:
                  </p>
                  <p className="text-red-900 font-bold text-lg">Emergency Hotline: +1 (555) 911-HELP</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-blue-100/30 rounded-3xl blur opacity-50"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-slate-200/50 shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Send us a Message</h3>
                  <p className="text-slate-600">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus.type && (
                    <div className={`p-4 rounded-xl border ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 border-green-200 text-green-800' 
                        : 'bg-red-50 border-red-200 text-red-800'
                    }`}>
                      <div className="flex items-center gap-2">
                        {submitStatus.type === 'success' ? (
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        <span className="font-medium">{submitStatus.message}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-slate-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-slate-300"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-slate-300"
                        placeholder="Your organization"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-slate-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-slate-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="demo">Request a Demo</option>
                      <option value="consultation">Security Consultation</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Technical Support</option>
                      <option value="training">Training Programs</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-slate-300 resize-none"
                      placeholder="Tell us about your security needs or how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl"></div>
                    <div className="relative flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phone & Email Direct Contact Section */}
      <section id="direct" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/10 to-emerald-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-green-200/50">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span className="text-green-900 font-bold text-sm uppercase tracking-wider">Direct Contact</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Phone & Email</span> Support
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Connect directly with our team through multiple channels for immediate assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Emergency Hotline",
                contact: "+1 (555) 911-HELP",
                description: "24/7 immediate security response",
                icon: "🚨",
                color: "from-red-500 to-red-600",
                urgent: true
              },
              {
                title: "General Support",
                contact: "+1 (555) 123-4567",
                description: "Business hours support line",
                icon: "📞",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Sales Inquiries",
                contact: "sales@yubix.com",
                description: "Product and pricing information",
                icon: "💼",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Technical Support",
                contact: "support@yubix.com",
                description: "Implementation and integration help",
                icon: "🔧",
                color: "from-purple-500 to-purple-600"
              }
            ].map((contact, index) => (
              <div key={index} className={`group relative ${contact.urgent ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100">
                  {contact.urgent && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  )}
                  <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-2xl`}>
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">{contact.title}</h3>
                  <p className="text-slate-700 font-semibold mb-2">{contact.contact}</p>
                  <p className="text-slate-500 text-sm">{contact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Inquiry Section */}
      <section id="sales" className="py-16 bg-gradient-to-br from-slate-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/10 to-blue-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-green-200/50">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span className="text-green-900 font-bold text-sm uppercase tracking-wider">Sales Inquiries</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Ready to <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Get Started?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Speak with our sales team to find the perfect security solution for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    title: "Custom Pricing",
                    description: "Tailored solutions that fit your budget and requirements",
                    icon: "💰",
                    color: "from-green-500 to-green-600"
                  },
                  {
                    title: "Volume Discounts",
                    description: "Special pricing for enterprise and large-scale deployments",
                    icon: "📊",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    title: "ROI Analysis",
                    description: "Detailed cost-benefit analysis for your security investment",
                    icon: "📈",
                    color: "from-purple-500 to-purple-600"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Request Sales Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <span className="font-semibold text-slate-700">Email Sales Team</span>
                    <a href="mailto:sales@yubix.com" className="text-green-600 font-bold hover:text-green-700 transition-colors">
                      sales@yubix.com →
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <span className="font-semibold text-slate-700">Call Sales Line</span>
                    <a href="tel:+15551234567" className="text-green-600 font-bold hover:text-green-700 transition-colors">
                      +1 (555) 123-4567 →
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <span className="font-semibold text-slate-700">Schedule Meeting</span>
                    <a href="#enterprise" className="text-green-600 font-bold hover:text-green-700 transition-colors">
                      Book Now →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section id="locations" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-indigo-200/50">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              <span className="text-indigo-900 font-bold text-sm uppercase tracking-wider">Global Presence</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Worldwide <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Support Network</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our international presence ensures local expertise and global reach for all your security needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "North America HQ",
                address: ["123 Security Boulevard", "Suite 500", "New York, NY 10001", "United States"],
                serving: "Serving: US, Canada, Mexico",
                color: "from-blue-500 to-blue-600",
                cardBg: "from-blue-50 to-blue-100/50"
              },
              {
                title: "European Operations",
                address: ["45 Innovation Street", "Tech Quarter", "Tallinn 10115", "Estonia"],
                serving: "Serving: EU, UK, Nordic countries",
                color: "from-green-500 to-green-600",
                cardBg: "from-green-50 to-green-100/50"
              },
              {
                title: "Asia-Pacific Hub",
                address: ["88 Security Plaza", "Level 25", "Singapore 068809", "Singapore"],
                serving: "Serving: APAC region",
                color: "from-purple-500 to-purple-600",
                cardBg: "from-purple-50 to-purple-100/50"
              }
            ].map((office, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${office.cardBg} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${office.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{office.title}</h3>
                  <div className="space-y-2 text-slate-600 mb-6">
                    {office.address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 font-medium">{office.serving}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-purple-200/50">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <span className="text-purple-900 font-bold text-sm uppercase tracking-wider">Partnership Opportunities</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Partner with <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">YUBIX</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Join our growing network of partners and integrators to expand security solutions globally
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                ),
                title: "Technology Partners",
                description: "Integrate YUBIX solutions with your existing technology stack and expand your offerings",
                color: "from-blue-500 to-blue-600",
                cardBg: "from-blue-50 to-blue-100/50"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Channel Partners",
                description: "Become a certified YUBIX reseller and bring our solutions to your local market",
                color: "from-green-500 to-green-600",
                cardBg: "from-green-50 to-green-100/50"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Training Partners",
                description: "Deliver YUBIX training programs and certification courses in your region",
                color: "from-purple-500 to-purple-600",
                cardBg: "from-purple-50 to-purple-100/50"
              }
            ].map((partner, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.cardBg} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                <div className="relative text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {partner.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{partner.title}</h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="mailto:partnerships@yubix.com" 
              className="group inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
              <div className="relative flex items-center">
                <span>Explore Partnership Opportunities</span>
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Free Assessment Section */}
      <section id="assessment" className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-blue-200/50">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-blue-900 font-bold text-sm uppercase tracking-wider">Free Assessment</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Security Assessment</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Get a free, no-obligation security assessment to identify vulnerabilities and improvement opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Initial Analysis",
                description: "Complete vulnerability scan and security posture evaluation",
                icon: "🔍",
                items: ["Network Assessment", "Endpoint Analysis", "Policy Review", "Compliance Check"]
              },
              {
                step: "02", 
                title: "Risk Evaluation",
                description: "Detailed risk analysis with prioritized recommendations",
                icon: "⚖️",
                items: ["Threat Modeling", "Impact Analysis", "Risk Scoring", "Mitigation Plans"]
              },
              {
                step: "03",
                title: "Action Plan",
                description: "Customized roadmap with timeline and resource requirements",
                icon: "📋",
                items: ["Implementation Guide", "Timeline Planning", "Budget Estimation", "ROI Projections"]
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-3xl">{phase.icon}</div>
                    <div className="text-4xl font-black text-blue-600/20">{phase.step}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                  <p className="text-slate-600 mb-6">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="mailto:assessment@yubix.com" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span>Request Free Assessment</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Demo Request Section */}
      <section id="demo" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-purple-200/50">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <span className="text-purple-900 font-bold text-sm uppercase tracking-wider">Product Demo</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              See YUBIX in <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Experience our security solutions firsthand with a personalized demonstration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    title: "Live Platform Demo",
                    description: "Interactive walkthrough of our security dashboard and features",
                    icon: "🖥️",
                    color: "from-purple-500 to-purple-600"
                  },
                  {
                    title: "Custom Use Cases",
                    description: "See how YUBIX solves your specific security challenges",
                    icon: "🎯",
                    color: "from-pink-500 to-pink-600"
                  },
                  {
                    title: "Q&A Session",
                    description: "Get answers from our security experts during the demo",
                    icon: "💬",
                    color: "from-indigo-500 to-indigo-600"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Schedule Your Demo</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-purple-600">30 min</div>
                      <div className="text-sm text-slate-600">Duration</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-purple-600">Live</div>
                      <div className="text-sm text-slate-600">Interactive</div>
                    </div>
                  </div>
                  <a href="mailto:demo@yubix.com" className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-center hover:shadow-lg transition-all duration-300">
                    Book Demo Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solution Section */}
      <section id="custom" className="py-16 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-cyan-200/50">
              <span className="w-2 h-2 bg-cyan-600 rounded-full"></span>
              <span className="text-cyan-900 font-bold text-sm uppercase tracking-wider">Custom Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Tailored <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Security Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Work with our experts to design and implement solutions that perfectly match your unique requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Requirements Analysis",
                description: "Deep dive into your specific security needs and constraints",
                icon: "📊",
                color: "from-cyan-500 to-cyan-600"
              },
              {
                title: "Architecture Design",
                description: "Custom security architecture tailored to your environment",
                icon: "🏗️",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Integration Planning",
                description: "Seamless integration with your existing technology stack",
                icon: "🔗",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                title: "Ongoing Support",
                description: "Dedicated support team for your custom implementation",
                icon: "🛟",
                color: "from-purple-500 to-purple-600"
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-2xl`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="mailto:custom@yubix.com" className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span>Discuss Custom Solution</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Enterprise Meeting Section */}
      <section id="enterprise" className="py-16 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="text-white font-bold text-sm uppercase tracking-wider">Enterprise Meeting</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Executive <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Consultation</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Schedule a strategic consultation with our executive team for enterprise-level security initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
                <div className="space-y-4">
                  {[
                    "Strategic security roadmap planning",
                    "Executive-level security briefings", 
                    "Compliance and governance discussion",
                    "Budget and resource planning",
                    "Long-term partnership exploration"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Schedule Enterprise Meeting</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">60 min</div>
                      <div className="text-sm text-slate-600">Duration</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">C-Level</div>
                      <div className="text-sm text-slate-600">Executive</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <a href="mailto:enterprise@yubix.com" className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-center hover:shadow-lg transition-all duration-300">
                      Email Enterprise Team
                    </a>
                    <a href="tel:+15551234567" className="block w-full border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-bold text-center hover:bg-blue-50 transition-all duration-300">
                      Call Executive Line
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToActionSection 
        title="Ready to Start"
        subtitle="Your Security Journey?"
        description="Connect with our experts today for personalized consultation, product demos, or partnership opportunities. We're here to help you build a more secure future."
        primaryButtonText="Schedule Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Solutions"
        secondaryButtonHref="/ecosystem"
        stats={[
          { value: "24/7", label: "Expert Support" },
          { value: "30s", label: "Response Time" },
          { value: "180+", label: "Global Clients" }
        ]}
      />
    </div>
  )
}