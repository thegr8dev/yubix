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

export default function InvestorsPage() {
  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver({ threshold: 0.2 })
  const { ref: financialsRef, isIntersecting: financialsInView } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-green-950 to-emerald-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className={`text-center transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20 backdrop-blur-xl px-10 py-5 rounded-2xl border border-white/30 shadow-2xl mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-pulse delay-300"></div>
              </div>
              <span className="text-white/90 text-sm font-bold uppercase tracking-wider">Investor Relations</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-pulse delay-700"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              <span className="block mb-2">Investing in the</span>
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-2xl">
                Future of Security
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Join us in building the next generation of cybersecurity solutions that protect 
              <span className="text-green-300 font-semibold"> critical infrastructure</span> and 
              <span className="text-emerald-300 font-semibold"> digital assets</span> worldwide.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              {[
                { number: '$2.5B', label: 'Market Opportunity', icon: '📊', color: 'from-green-400 to-emerald-400' },
                { number: '300%', label: 'YoY Growth', icon: '📈', color: 'from-emerald-400 to-teal-400' },
                { number: '500+', label: 'Enterprise Clients', icon: '🏢', color: 'from-teal-400 to-cyan-400' },
                { number: '99.9%', label: 'Uptime SLA', icon: '🛡️', color: 'from-cyan-400 to-blue-400' }
              ].map((metric, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-2">{metric.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.number}</div>
                  <div className="text-sm text-white/70">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a href="#financial-highlights" className="inline-flex items-center px-10 py-5 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span>View Financial Highlights</span>
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#investment-thesis" className="inline-flex items-center px-10 py-5 rounded-2xl border-2 border-white/30 text-white font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <span>Investment Thesis</span>
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

      {/* Investment Thesis Section */}
      <section id="investment-thesis" className="py-16 bg-gradient-to-br from-slate-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/10 to-emerald-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-green-200/50">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span className="text-green-900 font-bold text-sm uppercase tracking-wider">Investment Thesis</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Why <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">YUBIX?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Positioned at the forefront of the cybersecurity revolution with innovative solutions, proven market traction, and exceptional growth potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Market Leadership",
                description: "Leading position in the $150B+ cybersecurity market with proprietary technology and strong competitive moats",
                icon: "👑",
                color: "from-green-500 to-green-600",
                metrics: ["#1 Market Share", "150+ Patents", "98% Customer Retention"]
              },
              {
                title: "Scalable Platform",
                description: "AI-powered security platform with high-margin recurring revenue and exceptional unit economics",
                icon: "🚀",
                color: "from-emerald-500 to-emerald-600",
                metrics: ["85% Gross Margin", "120% Net Revenue Retention", "6-Month Payback Period"]
              },
              {
                title: "Proven Execution",
                description: "Track record of consistent growth, operational excellence, and successful market expansion",
                icon: "🎯",
                color: "from-teal-500 to-teal-600",
                metrics: ["300% YoY Growth", "500+ Enterprise Clients", "99.9% Uptime"]
              }
            ].map((pillar, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-2xl`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{pillar.description}</p>
                <div className="space-y-2">
                  {pillar.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Highlights Section */}
      <section id="financial-highlights" ref={financialsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${financialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-green-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-blue-200/50">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-blue-900 font-bold text-sm uppercase tracking-wider">Financial Performance</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Strong <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Financial Results</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Consistent growth, improving margins, and strong cash generation demonstrate our path to sustainable profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Revenue Growth Chart */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Revenue Growth</h3>
              <div className="space-y-4">
                {[
                  { year: "2022", revenue: "$15M", growth: "+200%" },
                  { year: "2023", revenue: "$45M", growth: "+300%" },
                  { year: "2024", revenue: "$135M", growth: "+300%" },
                  { year: "2025E", revenue: "$400M", growth: "+296%" }
                ].map((data, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <div className="font-semibold text-slate-900">{data.year}</div>
                    <div className="text-2xl font-bold text-green-600">{data.revenue}</div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">{data.growth}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Key Financial Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "ARR", value: "$135M", change: "+300%" },
                    { label: "Gross Margin", value: "85%", change: "+5pp" },
                    { label: "LTV/CAC", value: "12:1", change: "+50%" },
                    { label: "Cash Runway", value: "36 months", change: "Funded" }
                  ].map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-slate-50 rounded-xl">
                      <div className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</div>
                      <div className="text-sm text-slate-600 mb-1">{metric.label}</div>
                      <div className="text-xs text-green-600 font-medium">{metric.change}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Market Position</h4>
                <div className="space-y-3">
                  {[
                    { metric: "Total Addressable Market", value: "$150B" },
                    { metric: "Serviceable Addressable Market", value: "$25B" },
                    { metric: "Current Market Share", value: "0.54%" },
                    { metric: "Growth Opportunity", value: "10x+" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-slate-600">{item.metric}</span>
                      <span className="font-bold text-slate-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-purple-200/50">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <span className="text-purple-900 font-bold text-sm uppercase tracking-wider">Leadership Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Experienced <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our leadership team combines decades of cybersecurity expertise with proven track records of scaling technology companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                title: "Chief Executive Officer",
                background: "Former VP of Security at Google, 15+ years in cybersecurity",
                education: "Stanford MBA, MIT CS",
                achievements: ["Built $1B+ security division", "Led 3 successful exits", "Forbes 40 Under 40"]
              },
              {
                name: "Marcus Rodriguez",
                title: "Chief Technology Officer", 
                background: "Former Principal Engineer at Microsoft, AI/ML security expert",
                education: "PhD Computer Science, Carnegie Mellon",
                achievements: ["50+ patents in security", "DARPA research grants", "IEEE Fellow"]
              },
              {
                name: "Jennifer Park",
                title: "Chief Financial Officer",
                background: "Former CFO at CrowdStrike, IPO and M&A experience",
                education: "Wharton MBA, CPA",
                achievements: ["Led $500M+ IPO", "3x unicorn exits", "CFO of the Year"]
              }
            ].map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-medium">{leader.title}</p>
                </div>
                <p className="text-slate-600 text-sm mb-4">{leader.background}</p>
                <p className="text-slate-500 text-sm mb-4">{leader.education}</p>
                <div className="space-y-1">
                  {leader.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-cyan-200/50">
              <span className="w-2 h-2 bg-cyan-600 rounded-full"></span>
              <span className="text-cyan-900 font-bold text-sm uppercase tracking-wider">Investor Resources</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Resources & <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Reports</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Access the latest financial reports, investor presentations, and company updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Q4 2024 Earnings Report",
                description: "Comprehensive quarterly financial results and business updates",
                type: "Financial Report",
                date: "March 15, 2025",
                icon: "📊",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Investor Presentation",
                description: "Latest company overview and strategic roadmap presentation",
                type: "Presentation",
                date: "February 28, 2025", 
                icon: "📈",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Annual Report 2024",
                description: "Complete annual financial statements and business review",
                type: "Annual Report",
                date: "January 31, 2025",
                icon: "📋",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "SEC Filings",
                description: "All regulatory filings and compliance documents",
                type: "Legal Document",
                date: "Updated Monthly",
                icon: "📄",
                color: "from-cyan-500 to-cyan-600"
              },
              {
                title: "ESG Report",
                description: "Environmental, social, and governance sustainability report",
                type: "ESG Report",
                date: "December 15, 2024",
                icon: "🌱",
                color: "from-emerald-500 to-emerald-600"
              },
              {
                title: "Technology Whitepaper",
                description: "Deep dive into our AI-powered security platform architecture",
                type: "Technical Document",
                date: "November 30, 2024",
                icon: "🔬",
                color: "from-indigo-500 to-indigo-600"
              }
            ].map((resource, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100">
                <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-xl`}>
                  {resource.icon}
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">{resource.type}</span>
                    <span className="text-xs text-slate-500">{resource.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{resource.title}</h3>
                  <p className="text-slate-600 text-sm">{resource.description}</p>
                </div>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 text-sm">
                  Download PDF
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">Questions about our investor relations?</p>
            <a href="mailto:investors@yubix.com" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span>Contact Investor Relations</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToActionSection 
        title="Partner with"
        subtitle="YUBIX"
        description="Join us in building the future of cybersecurity. Explore investment opportunities and become part of our growth story."
        primaryButtonText="Download Investor Deck"
        primaryButtonHref="#financial-highlights"
        secondaryButtonText="Schedule Meeting"
        secondaryButtonHref="mailto:investors@yubix.com"
        stats={[
          { value: "300%", label: "YoY Growth" },
          { value: "500+", label: "Enterprise Clients" },
          { value: "85%", label: "Gross Margin" }
        ]}
      />
    </div>
  )
}