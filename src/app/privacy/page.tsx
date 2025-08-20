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

const tocItems = [
  { id: 'information-collection', title: 'Information We Collect' },
  { id: 'information-use', title: 'How We Use Information' },
  { id: 'information-sharing', title: 'Information Sharing' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'contact', title: 'Contact Information' }
]

export default function Privacy() {
  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver({ threshold: 0.2 })

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
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-white/90 text-sm font-bold uppercase tracking-wider">Privacy & Security</span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-br from-white via-blue-50 to-blue-200 bg-clip-text text-transparent">
                Privacy
              </span>
              <br />
              <span className="bg-gradient-to-br from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Your privacy is paramount. Learn how YUBIX protects, processes, and manages your personal information 
              with enterprise-grade security and transparent practices.
            </p>

            {/* Last Updated */}
            <div className="bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/30 inline-block">
              <span className="text-white/90 text-sm font-medium">Last Updated: August 20, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents & Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="opacity-100 translate-y-0">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Table of Contents */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Table of Contents</h3>
                  <nav className="space-y-2">
                    {tocItems.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="block text-gray-600 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 space-y-12">
                  
                  {/* Introduction */}
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      At YUBIX, we are committed to protecting your privacy and ensuring the security of your personal information. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                      services, visit our website, or interact with our platforms including Vertex Pro, Buzz World, and BYONN.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                      <p className="text-blue-800 font-medium">
                        <strong>Your Trust is Our Priority:</strong> As a cybersecurity company, we understand the critical 
                        importance of data protection and apply the same security standards to your personal information 
                        that we provide to our enterprise clients.
                      </p>
                    </div>
                  </div>

                  {/* Information We Collect */}
                  <section id="information-collection">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          We may collect the following types of personal information:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                          <li>Contact information (name, email address, phone number, mailing address)</li>
                          <li>Professional information (job title, company name, industry)</li>
                          <li>Account credentials and authentication data</li>
                          <li>Communication preferences and subscription settings</li>
                          <li>Support and service interaction records</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Information</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                          <li>Device information (IP address, browser type, operating system)</li>
                          <li>Usage data and analytics (pages visited, time spent, click patterns)</li>
                          <li>Cookies and similar tracking technologies</li>
                          <li>Log files and system access records</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* How We Use Information */}
                  <section id="information-use">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• Provide and maintain our cybersecurity services</li>
                          <li>• Process transactions and manage accounts</li>
                          <li>• Deliver customer support and technical assistance</li>
                          <li>• Send service-related communications</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Improvement & Analytics</h3>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• Analyze usage patterns to improve our services</li>
                          <li>• Conduct research and development</li>
                          <li>• Enhance security and prevent fraud</li>
                          <li>• Personalize user experience</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• Send newsletters and security updates</li>
                          <li>• Provide product announcements</li>
                          <li>• Share relevant industry insights</li>
                          <li>• Respond to inquiries and feedback</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Compliance</h3>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• Meet regulatory requirements</li>
                          <li>• Respond to legal requests</li>
                          <li>• Enforce terms of service</li>
                          <li>• Protect rights and safety</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Information Sharing */}
                  <section id="information-sharing">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing</h2>
                    
                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-6">
                      <h3 className="text-lg font-semibold text-yellow-800 mb-2">We Do Not Sell Your Data</h3>
                      <p className="text-yellow-700">
                        YUBIX does not sell, rent, or trade your personal information to third parties for their commercial purposes.
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      We may share your information only in the following limited circumstances:
                    </p>

                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
                        <p className="text-gray-700 text-sm">
                          With trusted third-party vendors who assist in providing our services (cloud hosting, payment processing, customer support) under strict confidentiality agreements.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Transfers</h4>
                        <p className="text-gray-700 text-sm">
                          In connection with mergers, acquisitions, or asset sales, with appropriate protection measures for your data.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-red-500 pl-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
                        <p className="text-gray-700 text-sm">
                          When required by law, court order, or to protect the safety and security of our users and the public.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Data Security */}
                  <section id="data-security">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise-Grade Protection</h3>
                      <p className="text-gray-700 leading-relaxed">
                        As a cybersecurity leader, we implement military-grade security measures to protect your information, 
                        including end-to-end encryption, multi-factor authentication, and continuous security monitoring.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Encryption</h4>
                        <p className="text-gray-600 text-sm">AES-256 encryption for data at rest and TLS 1.3 for data in transit</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Compliance</h4>
                        <p className="text-gray-600 text-sm">ISO 27001, SOC 2 Type II, and GDPR compliant security frameworks</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Monitoring</h4>
                        <p className="text-gray-600 text-sm">24/7 security monitoring and real-time threat detection</p>
                      </div>
                    </div>
                  </section>

                  {/* Your Rights */}
                  <section id="your-rights">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      You have the following rights regarding your personal information:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-3">Access & Portability</h4>
                        <p className="text-gray-700 text-sm">Request a copy of your personal data and transfer it to another service provider.</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-3">Correction</h4>
                        <p className="text-gray-700 text-sm">Update or correct any inaccurate or incomplete personal information.</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-3">Deletion</h4>
                        <p className="text-gray-700 text-sm">Request deletion of your personal data, subject to legal and contractual obligations.</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-3">Opt-Out</h4>
                        <p className="text-gray-700 text-sm">Unsubscribe from marketing communications while maintaining service notifications.</p>
                      </div>
                    </div>

                    <div className="mt-8 bg-blue-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-blue-900 mb-2">Exercise Your Rights</h4>
                      <p className="text-blue-800 text-sm mb-4">
                        To exercise any of these rights, please contact our Privacy Team at privacy@yubix.com or use our secure portal.
                      </p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                        Access Privacy Portal
                      </button>
                    </div>
                  </section>

                  {/* Contact */}
                  <section id="contact">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                    
                    <div className="bg-gray-50 p-8 rounded-xl">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Privacy Officer</h4>
                          <div className="space-y-2 text-gray-700">
                            <p>Email: privacy@yubix.com</p>
                            <p>Phone: +1 (555) 123-PRIVACY</p>
                            <p>Response Time: Within 48 hours</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Mailing Address</h4>
                          <div className="text-gray-700">
                            <p>YUBIX Privacy Team</p>
                            <p>123 Security Boulevard</p>
                            <p>Cyber City, CC 12345</p>
                            <p>United States</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Last Updated */}
                  <div className="border-t border-gray-200 pt-8">
                    <p className="text-gray-500 text-sm text-center">
                      This Privacy Policy was last updated on August 20, 2025. We may update this policy from time to time. 
                      We will notify you of any material changes via email or through our service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Your Privacy, Our Priority
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a cybersecurity leader, we apply the same enterprise-grade protection standards to your personal data that we provide to our clients.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ISO 27001 Certified</h3>
              <p className="text-gray-600 leading-relaxed">
                Internationally recognized standard for information security management systems, ensuring the highest level of data protection.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">End-to-End Encryption</h3>
              <p className="text-gray-600 leading-relaxed">
                AES-256 encryption for data at rest and TLS 1.3 for data in transit, ensuring your information is always protected.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Monitoring</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuous security monitoring and real-time threat detection to protect your personal information around the clock.
              </p>
            </div>
          </div>

          {/* Privacy Rights Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Privacy Rights at a Glance</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Understanding your rights is important. Here&apos;s a quick summary of what you can do with your personal data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-blue-50 rounded-xl text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Access Your Data</h4>
                <p className="text-blue-800 text-sm">Request a copy of all personal information we have about you</p>
              </div>

              <div className="p-6 bg-green-50 rounded-xl text-center">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h4 className="font-bold text-green-900 mb-2">Correct Information</h4>
                <p className="text-green-800 text-sm">Update or fix any incorrect or incomplete personal data</p>
              </div>

              <div className="p-6 bg-purple-50 rounded-xl text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h4 className="font-bold text-purple-900 mb-2">Delete Your Data</h4>
                <p className="text-purple-800 text-sm">Request deletion of your personal information when legally permissible</p>
              </div>

              <div className="p-6 bg-orange-50 rounded-xl text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-bold text-orange-900 mb-2">Control Communications</h4>
                <p className="text-orange-800 text-sm">Manage your communication preferences and opt-out options</p>
              </div>
            </div>
          </div>

          {/* Quick Access to Privacy Tools */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Take Control of Your Privacy</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Use our secure privacy portal to exercise your rights, manage your data, and stay informed about how we protect your information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                Access Privacy Portal
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30">
                Download My Data
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToActionSection />
    </div>
  )
}
