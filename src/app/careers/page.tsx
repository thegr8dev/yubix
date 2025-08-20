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

export default function CareersPage() {
  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver({ threshold: 0.2 })
  const { ref: jobsRef, isIntersecting: jobsInView } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Background Effects */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className={`text-center transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-xl px-10 py-5 rounded-2xl border border-white/30 shadow-2xl mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse delay-300"></div>
              </div>
              <span className="text-white/90 text-sm font-bold uppercase tracking-wider">Join Our Team</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-700"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              <span className="block mb-2">Shape the Future of</span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                Cybersecurity
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Join a team of visionaries, innovators, and security experts who are 
              <span className="text-blue-300 font-semibold"> redefining digital protection</span> for organizations worldwide.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              {[
                { number: '200+', label: 'Team Members', icon: '👥', color: 'from-blue-400 to-cyan-400' },
                { number: '15+', label: 'Countries', icon: '🌍', color: 'from-green-400 to-emerald-400' },
                { number: '4.8/5', label: 'Employee Rating', icon: '⭐', color: 'from-yellow-400 to-orange-400' },
                { number: '95%', label: 'Retention Rate', icon: '💎', color: 'from-purple-400 to-pink-400' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a href="#open-positions" className="inline-flex items-center px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span>View Open Positions</span>
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#culture" className="inline-flex items-center px-10 py-5 rounded-2xl border-2 border-white/30 text-white font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <span>Learn About Our Culture</span>
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

      {/* Culture Section */}
      <section id="culture" className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-blue-200/50">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-blue-900 font-bold text-sm uppercase tracking-wider">Our Culture</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">YUBIX?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We&apos;re not just building technology; we&apos;re building the future of digital security with a team that values innovation, collaboration, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "Work on cutting-edge technologies and shape the next generation of cybersecurity solutions",
                icon: "🚀",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Remote-First Culture",
                description: "Flexible work arrangements with a global team of passionate security experts",
                icon: "🌐",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Continuous Learning",
                description: "Annual learning budget, conferences, certifications, and mentorship programs",
                icon: "📚",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Impact at Scale",
                description: "Your work directly protects millions of users and critical infrastructure worldwide",
                icon: "🛡️",
                color: "from-cyan-500 to-cyan-600"
              },
              {
                title: "Competitive Benefits",
                description: "Comprehensive health coverage, equity participation, and generous time off policies",
                icon: "💎",
                color: "from-pink-500 to-pink-600"
              },
              {
                title: "Diverse & Inclusive",
                description: "Building an inclusive environment where everyone can thrive and contribute their best work",
                icon: "🤝",
                color: "from-orange-500 to-orange-600"
              }
            ].map((value, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-2xl`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" ref={jobsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${jobsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/10 to-emerald-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-green-200/50">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span className="text-green-900 font-bold text-sm uppercase tracking-wider">Open Positions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Join Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Growing Team</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore exciting opportunities to work on next-generation security technologies with a world-class team.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Senior Security Engineer",
                department: "Engineering",
                location: "Remote / San Francisco",
                type: "Full-time",
                description: "Lead the development of next-generation threat detection systems and security frameworks.",
                skills: ["Threat Detection", "Security Architecture", "Python", "Kubernetes"]
              },
              {
                title: "Cybersecurity Analyst",
                department: "Security Operations",
                location: "Remote / New York",
                type: "Full-time",
                description: "Monitor, analyze, and respond to security incidents across our global infrastructure.",
                skills: ["SIEM", "Incident Response", "Threat Intelligence", "SOC"]
              },
              {
                title: "Product Manager - Security Platform",
                department: "Product",
                location: "Remote / London",
                type: "Full-time",
                description: "Drive product strategy and roadmap for our flagship security platform products.",
                skills: ["Product Strategy", "Security Domain", "Agile", "Stakeholder Management"]
              },
              {
                title: "DevSecOps Engineer",
                department: "Engineering",
                location: "Remote / Berlin",
                type: "Full-time",
                description: "Build and maintain secure CI/CD pipelines and infrastructure automation.",
                skills: ["DevOps", "Security Automation", "AWS/Azure", "Terraform"]
              },
              {
                title: "Sales Engineer - Enterprise Security",
                department: "Sales",
                location: "Remote / Various",
                type: "Full-time",
                description: "Support enterprise sales with technical expertise and solution demonstrations.",
                skills: ["Technical Sales", "Enterprise Security", "Solution Architecture", "Presentations"]
              }
            ].map((job, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{job.department}</span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">{job.type}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4">{job.description}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Apply Now
                    </button>
                    <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">Don&apos;t see the perfect role? We&apos;re always looking for exceptional talent.</p>
            <a href="mailto:careers@yubix.com" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span>Send Us Your Resume</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-purple-200/50">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <span className="text-purple-900 font-bold text-sm uppercase tracking-wider">Benefits & Perks</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Comprehensive <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Benefits Package</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We believe in taking care of our team members with industry-leading benefits and perks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Health & Wellness",
                benefits: ["100% health insurance coverage", "Mental health support", "Wellness stipend", "Gym membership"],
                icon: "🏥",
                color: "from-green-500 to-emerald-500"
              },
              {
                category: "Financial",
                benefits: ["Competitive salary", "Equity participation", "401(k) matching", "Annual bonuses"],
                icon: "💰",
                color: "from-blue-500 to-cyan-500"
              },
              {
                category: "Time Off",
                benefits: ["Unlimited PTO", "Paid parental leave", "Sabbatical program", "Holiday bonuses"],
                icon: "🏖️",
                color: "from-purple-500 to-pink-500"
              },
              {
                category: "Growth",
                benefits: ["$5K learning budget", "Conference attendance", "Mentorship program", "Career development"],
                icon: "📈",
                color: "from-orange-500 to-red-500"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4 text-xl`}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{benefit.category}</h3>
                <ul className="space-y-2">
                  {benefit.benefits.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToActionSection 
        title="Ready to Join"
        subtitle="Our Mission?"
        description="Be part of a team that's redefining cybersecurity for the digital age. Explore opportunities to grow your career while making a meaningful impact on global security."
        primaryButtonText="View All Positions"
        primaryButtonHref="#open-positions"
        secondaryButtonText="Learn About Culture"
        secondaryButtonHref="#culture"
        stats={[
          { value: "200+", label: "Team Members" },
          { value: "15+", label: "Countries" },
          { value: "4.8/5", label: "Employee Rating" }
        ]}
      />
    </div>
  )
}