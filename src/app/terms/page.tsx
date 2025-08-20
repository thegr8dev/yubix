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
  { id: 'acceptance', title: 'Acceptance of Terms' },
  { id: 'services', title: 'Description of Services' },
  { id: 'accounts', title: 'User Accounts' },
  { id: 'acceptable-use', title: 'Acceptable Use Policy' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'payments', title: 'Payments and Billing' },
  { id: 'limitation-liability', title: 'Limitation of Liability' },
  { id: 'governing-law', title: 'Governing Law and Dispute Resolution' },
  { id: 'contact', title: 'Contact Information' },
  { id: 'modifications', title: 'Modifications to Terms' }
]

export default function Terms() {
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
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-white/90 text-sm font-bold uppercase tracking-wider">Legal Terms</span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-br from-white via-blue-50 to-blue-200 bg-clip-text text-transparent">
                Terms of
              </span>
              <br />
              <span className="bg-gradient-to-br from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              These terms govern your use of YUBIX services and platforms. Please read carefully to understand 
              your rights and responsibilities when using our cybersecurity solutions.
            </p>

            {/* Last Updated */}
            <div className="bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/30 inline-block">
              <span className="text-white/90 text-sm font-medium">Effective Date: August 20, 2025</span>
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
                      Welcome to YUBIX. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our cybersecurity 
                      services, platforms, and websites, including Vertex Pro, Buzz World, BYONN, and related services 
                      (collectively, the &quot;Services&quot;).
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                      <p className="text-blue-800 font-medium">
                        <strong>Important:</strong> By accessing or using our Services, you agree to be bound by these Terms. 
                        If you do not agree to these Terms, please do not use our Services.
                      </p>
                    </div>
                  </div>

                  {/* Acceptance of Terms */}
                  <section id="acceptance">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                    
                    <div className="space-y-4 text-gray-700">
                      <p>
                        By creating an account, accessing our platforms, or using any of our Services, you acknowledge that you have read, 
                        understood, and agree to be legally bound by these Terms and our Privacy Policy.
                      </p>
                      <p>
                        These Terms constitute a legally binding agreement between you (&quot;User&quot; or &quot;you&quot;) and YUBIX Corporation (&quot;YUBIX,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                      </p>
                      <p>
                        If you are using our Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
                      </p>
                    </div>
                  </section>

                  {/* Description of Services */}
                  <section id="services">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Description of Services</h2>
                    
                    <p className="text-gray-700 mb-6">
                      YUBIX provides enterprise-grade cybersecurity solutions including but not limited to:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                        <h3 className="text-lg font-semibold text-blue-900 mb-3">Vertex Pro</h3>
                        <p className="text-blue-800 text-sm">
                          Enterprise command center for real-time threat prevention and AI-powered security analytics.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                        <h3 className="text-lg font-semibold text-green-900 mb-3">Buzz World</h3>
                        <p className="text-green-800 text-sm">
                          Secure communication hub for organizational messaging and collaboration.
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                        <h3 className="text-lg font-semibold text-purple-900 mb-3">BYONN</h3>
                        <p className="text-purple-800 text-sm">
                          Community-wide security coordination platform with traffic light protocols.
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700">
                      We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, 
                      with or without notice, though we will make reasonable efforts to provide advance notice of significant changes.
                    </p>
                  </section>

                  {/* User Accounts */}
                  <section id="accounts">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Accounts</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Creation</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                          <li>You must provide accurate, current, and complete information</li>
                          <li>You must be at least 18 years old or have legal capacity to enter contracts</li>
                          <li>One person or entity may maintain only one account unless expressly authorized</li>
                          <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Security</h3>
                        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                          <p className="text-yellow-800">
                            <strong>Security Notice:</strong> You are solely responsible for all activities that occur under your account. 
                            Notify us immediately of any unauthorized use or security breaches. We recommend enabling multi-factor authentication.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Acceptable Use Policy */}
                  <section id="acceptable-use">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Acceptable Use Policy</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Permitted Uses</h3>
                        <p className="text-gray-700 mb-4">You may use our Services for:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                          <li>Legitimate cybersecurity and threat prevention activities</li>
                          <li>Authorized organizational communication and collaboration</li>
                          <li>Compliance with applicable laws and regulations</li>
                          <li>Business operations within the scope of your subscription</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Activities</h3>
                        <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-4">
                          <p className="text-red-800 font-medium mb-4">
                            <strong>Strictly Prohibited:</strong> The following activities will result in immediate account termination:
                          </p>
                          <ul className="list-disc list-inside text-red-700 space-y-2 ml-4 text-sm">
                            <li>Using our Services for illegal activities or to facilitate crimes</li>
                            <li>Attempting to breach, hack, or circumvent our security measures</li>
                            <li>Reverse engineering, decompiling, or attempting to extract source code</li>
                            <li>Distributing malware, viruses, or malicious code through our platforms</li>
                            <li>Unauthorized access to other users&apos; accounts or data</li>
                            <li>Spamming, phishing, or fraudulent communications</li>
                            <li>Violating any applicable laws, regulations, or third-party rights</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Intellectual Property */}
                  <section id="intellectual-property">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Intellectual Property Rights</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">YUBIX Intellectual Property</h3>
                        <p className="text-gray-700 mb-4">
                          All content, features, and functionality of our Services, including but not limited to text, graphics, 
                          logos, icons, images, audio clips, video clips, data compilations, software, and the design, selection, 
                          and arrangement thereof, are owned by YUBIX and are protected by intellectual property laws.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">License Grant</h3>
                        <p className="text-gray-700 mb-4">
                          Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access and use our Services 
                          for your internal business purposes during the term of your subscription.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">User Content</h3>
                        <p className="text-gray-700">
                          You retain ownership of content you submit to our Services. By submitting content, you grant us a worldwide, 
                          royalty-free license to use, modify, and display such content solely for the purpose of providing our Services.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Payments and Billing */}
                  <section id="payments">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Payments and Billing</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Terms</h3>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• Fees are due in advance</li>
                          <li>• All payments are non-refundable except as required by law</li>
                          <li>• Automatic renewal unless cancelled</li>
                          <li>• Price changes with 30 days notice</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Billing Disputes</h3>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• Report disputes within 60 days</li>
                          <li>• Continue service during dispute resolution</li>
                          <li>• Good faith investigation process</li>
                          <li>• Contact billing@yubix.com</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Limitation of Liability */}
                  <section id="limitation-liability">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
                    
                    <div className="bg-gray-100 border border-gray-300 p-8 rounded-xl">
                      <p className="text-gray-800 font-medium mb-4 uppercase tracking-wide">
                        IMPORTANT LEGAL NOTICE
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL YUBIX BE LIABLE FOR ANY INDIRECT, 
                        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER 
                        INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR INABILITY TO USE 
                        THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US FOR THE SERVICES IN THE TWELVE (12) MONTHS PRIOR 
                        TO THE EVENT GIVING RISE TO THE LIABILITY.
                      </p>
                    </div>
                  </section>

                  {/* Governing Law */}
                  <section id="governing-law">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Governing Law and Dispute Resolution</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Applicable Law</h3>
                        <p className="text-gray-700">
                          These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Dispute Resolution</h3>
                        <p className="text-gray-700 mb-4">
                          We encourage resolving disputes through direct communication. For formal disputes:
                        </p>
                        <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                          <li>Attempt informal resolution for 60 days</li>
                          <li>Binding arbitration through American Arbitration Association</li>
                          <li>Individual claims only (no class action)</li>
                          <li>Delaware venue for any court proceedings</li>
                        </ol>
                      </div>
                    </div>
                  </section>

                  {/* Contact Information */}
                  <section id="contact">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Contact Information</h2>
                    
                    <div className="bg-blue-50 p-8 rounded-xl">
                      <p className="text-blue-800 leading-relaxed mb-6">
                        For questions about these Terms of Service, please contact our Legal Team:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-3">Legal Department</h4>
                          <div className="space-y-2 text-blue-800">
                            <p>Email: legal@yubix.com</p>
                            <p>Phone: +1 (555) 123-LEGAL</p>
                            <p>Response Time: Within 5 business days</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-3">Mailing Address</h4>
                          <div className="text-blue-800">
                            <p>YUBIX Legal Department</p>
                            <p>123 Security Boulevard</p>
                            <p>Cyber City, CC 12345</p>
                            <p>United States</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Modifications */}
                  <section id="modifications">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Modifications to Terms</h2>
                    
                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                      <p className="text-yellow-800 leading-relaxed">
                        We may update these Terms from time to time. We will notify you of material changes by email or through our Services 
                        at least 30 days before the changes take effect. Your continued use of the Services after the effective date 
                        constitutes acceptance of the updated Terms.
                      </p>
                    </div>
                  </section>

                  {/* Effective Date */}
                  <div className="border-t border-gray-200 pt-8">
                    <p className="text-gray-500 text-sm text-center">
                      These Terms of Service are effective as of August 20, 2025, and supersede all prior agreements. 
                      Questions? Contact us at legal@yubix.com.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Summary Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Terms Summary
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key points from our Terms of Service for quick reference and better understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Usage</h3>
              <p className="text-gray-600 leading-relaxed">
                Use our cybersecurity services for legitimate business purposes, maintain account security, 
                and follow acceptable use policies for optimal protection.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2-2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Your data is protected by enterprise-grade security. We maintain strict confidentiality 
                and comply with international data protection standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fair Terms</h3>
              <p className="text-gray-600 leading-relaxed">
                Our terms are designed to be fair and transparent. Clear liability limits, 
                dispute resolution processes, and reasonable termination policies.
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Terms?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our legal team is here to answer questions and provide clarification on any aspect of our Terms of Service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a 
                href="mailto:legal@yubix.com"
                className="flex flex-col items-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-blue-900 font-semibold text-center">Legal Questions</span>
                <span className="text-blue-700 text-sm text-center">Get answers from our legal team</span>
              </a>

              <a 
                href="/contact"
                className="flex flex-col items-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <span className="text-green-900 font-semibold text-center">Contact Support</span>
                <span className="text-green-700 text-sm text-center">General inquiries and support</span>
              </a>

              <a 
                href="/privacy"
                className="flex flex-col items-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-700 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-purple-900 font-semibold text-center">Privacy Policy</span>
                <span className="text-purple-700 text-sm text-center">How we protect your data</span>
              </a>

              <a 
                href="#contact"
                className="flex flex-col items-center p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-700 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-orange-900 font-semibold text-center">Response Time</span>
                <span className="text-orange-700 text-sm text-center">Within 5 business days</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToActionSection />
    </div>
  )
}
