import Link from 'next/link'
import CountingNumber from '@/components/CountingNumber'

const featuredPlatforms = [
  {
    name: 'Vertex Pro',
    subtitle: 'Enterprise Command Center',
    description: 'Real-time threat prevention dashboard with AI-powered threat correlation for aviation, infrastructure, and corporate security.',
    icon: '🛡️',
    color: 'from-blue-500 to-blue-700',
    url: 'https://www.vertexpro.org'
  },
  {
    name: 'Buzz World',
    subtitle: 'Secure Communication Hub',
    description: 'Smart social network for secure internal communications with live maps and department-based messaging.',
    icon: '💬',
    color: 'from-green-500 to-green-700',
    url: 'https://www.thebuzzworld.com'
  },
  {
    name: 'BYONN',
    subtitle: 'Security for Everyone',
    description: 'Traffic light system protocols with B2B & B2C versions for community-wide security coordination.',
    icon: '📱',
    color: 'from-purple-500 to-purple-700',
    url: '/ecosystem/byonn'
  }
]

const latestNews = [
  {
    title: 'YUBIX Achieves ISO 27001 Recertification',
    summary: 'Strengthening our commitment to information security management excellence.',
    date: 'August 2025',
    category: 'Certification',
    readTime: '3 min read'
  },
  {
    title: 'New AI Module: Predictive Threat Correlation',
    summary: 'Advanced machine learning algorithms now predict security threats 72 hours in advance.',
    date: 'July 2025',
    category: 'Innovation',
    readTime: '5 min read'
  },
  {
    title: 'Global Expansion: 180+ Sites Secured',
    summary: 'YUBIX ecosystem now protects critical infrastructure across 6 continents.',
    date: 'June 2025',
    category: 'Growth',
    readTime: '4 min read'
  }
]

const clientTestimonials = [
  {
    quote: "YUBIX transformed our airport security operations. Real-time threat detection has prevented 14 incidents in the past 6 months.",
    author: "Sarah Chen",
    title: "Chief Security Officer",
    company: "International Aviation Authority",
    avatar: "SC"
  },
  {
    quote: "The AI-powered threat correlation saved our corporation from a sophisticated cyber attack. ROI achieved within 3 months.",
    author: "Michael Rodriguez",
    title: "CISO",
    company: "Global Financial Services",
    avatar: "MR"
  },
  {
    quote: "Training 500+ security professionals with YUBIX methodology increased our incident response efficiency by 65%.",
    author: "Dr. Emma Thompson",
    title: "Director of Security",
    company: "European Education Consortium",
    avatar: "ET"
  }
]

export default function Home() {
  return (
    <div className="min-h-[80vh]">
      {/* Revolutionary Hero Section - Ultra Modern UI/UX */}
      <section className="min-h-[90vh] relative overflow-hidden bg-black isolate">
        {/* Multi-layered Background System */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-900/20 to-purple-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
        
        {/* Advanced Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-500/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-purple-500/20 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"></div>
        </div>
        
        {/* Dynamic Grid System */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px, 60px 60px, 120px 120px, 120px 120px',
              animation: 'grid-pulse 6s ease-in-out infinite'
            }}
          ></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 backdrop-blur-sm"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${4 + Math.random() * 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Quantum Orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-glow-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-glow-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Advanced Security Visualization */}
        <div className="absolute top-16 right-16 w-40 h-40 opacity-30">
          <div className="absolute inset-0 border-2 border-blue-400/40 rounded-full"></div>
          <div className="absolute inset-2 border border-blue-300/30 rounded-full animate-ping"></div>
          <div className="absolute inset-4 border border-purple-300/20 rounded-full animate-pulse"></div>
          <div className="absolute inset-6 border border-cyan-300/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"></div>
        </div>
        
        {/* Neural Network Visualization */}
        <div className="absolute bottom-16 left-16 w-32 h-32 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <circle cx="20" cy="20" r="3" fill="url(#neuralGrad)" className="animate-pulse" />
            <circle cx="50" cy="30" r="3" fill="url(#neuralGrad)" className="animate-pulse" style={{animationDelay: '0.5s'}} />
            <circle cx="80" cy="25" r="3" fill="url(#neuralGrad)" className="animate-pulse" style={{animationDelay: '1s'}} />
            <circle cx="30" cy="70" r="3" fill="url(#neuralGrad)" className="animate-pulse" style={{animationDelay: '1.5s'}} />
            <circle cx="70" cy="75" r="3" fill="url(#neuralGrad)" className="animate-pulse" style={{animationDelay: '2s'}} />
            <path d="M20 20 L50 30 L80 25 M50 30 L30 70 L70 75" stroke="url(#neuralGrad)" strokeWidth="1" fill="none" opacity="0.5" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-0 lg:px-2 py-8 sm:py-12">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="mb-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-xl px-8 py-4 rounded-full border border-white/20 shadow-2xl">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-bold uppercase tracking-wider">AI-Powered Security Ecosystem</span>
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Revolutionary Title */}
            <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
                <span className="block text-white mb-3 drop-shadow-2xl">
                  Humanizing
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl pb-2">
                  Technology.
                </span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent pb-2">
                  Fortifying the Future.
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
                <span className="text-blue-300 font-semibold">Intelligent Security</span>
                <span className="text-gray-400 mx-3">•</span>
                <span className="text-purple-300 font-semibold">Real-Time Prevention</span>
                <span className="text-gray-400 mx-3">•</span>
                <span className="text-cyan-300 font-semibold">Resilience Ecosystems</span>
              </p>
            </div>
            
            {/* Premium CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Link 
                href="/ecosystem" 
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 hover:scale-110"
              >
                {/* Button Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                <div className="relative flex items-center gap-4">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Explore the Ecosystem</span>
                  <div className="w-3 h-3 bg-white rounded-full group-hover:animate-ping"></div>
                </div>
              </Link>
              
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white px-10 py-6 rounded-2xl font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Talk to Our Experts</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 hover:border-green-400/50 transition-all duration-300">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white">ISO 27001 Certified</div>
                  <div className="text-gray-400 text-xs">Security compliance</div>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white">180+ Sites Secured</div>
                  <div className="text-gray-400 text-xs">Global protection</div>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white">30+ Years Expertise</div>
                  <div className="text-gray-400 text-xs">Industry leadership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Platforms Preview - Enhanced UI/UX */}
      <section className="py-12 bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-pulse 4s ease-in-out infinite'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-800/50 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-blue-400/30">
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
              <span className="text-blue-100 text-sm font-medium uppercase tracking-wider">Security Ecosystem</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-white">
              Secure Your World with Our 
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Integrated Platforms</span>
            </h3>
            <p className="text-blue-100 text-xl max-w-3xl mx-auto leading-relaxed">
              Choose the perfect security solution for your organization from our comprehensive suite of AI-powered platforms.
            </p>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPlatforms.map((platform, index) => (
              <div
                key={platform.name}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm rounded-2xl p-8 border border-blue-400 border-opacity-20 hover:border-opacity-40 transition-all duration-500 cursor-pointer overflow-hidden hover:scale-105 hover:shadow-2xl"
                style={{animationDelay: `${0.5 + index * 0.1}s`}}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{background: 'linear-gradient(45deg, #3b82f6, #06b6d4, #3b82f6)', backgroundSize: '200% 200%', animation: 'gradient-shift 3s ease infinite'}}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with Enhanced Design */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {platform.icon}
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400 font-medium">Active</span>
                    </div>
                  </div>
                  
                  {/* Platform Info */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      {platform.name}
                    </h4>
                    <p className="text-blue-300 text-sm font-semibold mb-3 uppercase tracking-wide">
                      {platform.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
                      {platform.description}
                    </p>
                  </div>
                  
                  {/* Enhanced CTA */}
                  <div className="flex items-center justify-between">
                    <Link 
                      href={platform.url}
                      className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 font-semibold transition-all duration-300 group-hover:translate-x-2"
                    >
                      <span>Explore Platform</span>
                      <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                    
                    {/* Live Demo Badge */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full font-medium">
                        Live Demo
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect Lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
          
          {/* Call-to-Action Section */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <Link 
                href="/ecosystem" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>View Complete Ecosystem</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>All platforms ISO 27001 certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News and Insights Section - Modern UI/UX */}
      <section className="py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, #3b82f6 2px, transparent 2px),
              radial-gradient(circle at 80% 70%, #6366f1 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${5 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-blue-200/50">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 text-sm font-semibold uppercase tracking-wider">Industry Insights</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Latest News &
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay informed about the latest developments in AI-powered security, threat intelligence, 
              and global security innovations from our expert team and industry partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {latestNews.map((article, index) => (
              <article
                key={index}
                className="group relative bg-gradient-to-br from-white/90 to-slate-50/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-200/50 hover:border-blue-300/50 transition-all duration-500 cursor-pointer hover:scale-105"
              >
                {/* Card Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Category and Read Time Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start mb-6 gap-4">
                    <span className={`inline-flex px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 w-fit ${
                      article.category === 'Certification' 
                        ? 'bg-green-100 text-green-800 group-hover:bg-green-200' :
                      article.category === 'Innovation' 
                        ? 'bg-blue-100 text-blue-800 group-hover:bg-blue-200' :
                        'bg-purple-100 text-purple-800 group-hover:bg-purple-200'
                    }`}>
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-sm ml-0 sm:ml-16">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="whitespace-nowrap">{article.readTime}</span>
                    </div>
                  </div>
                  
                  {/* Article Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  
                  {/* Article Summary */}
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {article.summary}
                  </p>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-500">{article.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                      <span>Read Article</span>
                      <div className="w-6 h-6 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center transition-colors">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`h-full rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ${
                      article.category === 'Certification' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                      article.category === 'Innovation' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                      'bg-gradient-to-r from-purple-500 to-pink-500'
                    }`}></div>
                  </div>
                </div>
                
                {/* Floating Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  {article.category === 'Certification' ? (
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ) : article.category === 'Innovation' ? (
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )}
                </div>
              </article>
            ))}
          </div>
          
          {/* Enhanced Bottom CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-slate-50/80 via-white/90 to-blue-50/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-200/50 shadow-xl">
              <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 px-6 py-3 rounded-full mb-6">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-blue-700 text-sm font-semibold uppercase tracking-wider">Stay Updated</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Never Miss an 
                    <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Important Update
                    </span>
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Get the latest security insights, threat intelligence reports, and industry analysis 
                    delivered directly to your inbox.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link 
                    href="/news" 
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <span>View All News & Insights</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  
                  <button className="group inline-flex items-center gap-3 bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Subscribe to Newsletter</span>
                  </button>
                </div>
                
                {/* Newsletter Stats */}
                <div className="flex flex-wrap justify-center items-center gap-8 mt-10 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>10,000+ Subscribers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Weekly Updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2-2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>No Spam Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section - Modern UI/UX */}
      <section className="py-12 bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 30% 20%, #6366f1 2px, transparent 2px),
              radial-gradient(circle at 70% 80%, #3b82f6 2px, transparent 2px)
            `,
            backgroundSize: '70px 70px'
          }}></div>
        </div>
        
        {/* Floating Testimonial Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-blue-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${6 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/10 to-blue-600/10 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-indigo-200/50">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-indigo-700 text-sm font-semibold uppercase tracking-wider">Client Success Stories</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted by 
              <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Global Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Organizations worldwide rely on YUBIX to protect their most critical assets and ensure 
              operational resilience. Hear from our satisfied clients across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {clientTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-sm rounded-3xl p-10 border border-blue-200/30 hover:border-blue-400/50 transition-all duration-500 cursor-pointer hover:scale-105"
              >
                {/* Card Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Quote Icon with Enhanced Design */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial Quote */}
                  <blockquote className="text-lg text-gray-700 mb-8 italic leading-relaxed group-hover:text-gray-800 transition-colors">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  
                  {/* Client Information */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {testimonial.avatar}
                      </div>
                      {/* Online Status Indicator */}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600 font-medium mb-1">
                        {testimonial.title}
                      </div>
                      <div className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                        {testimonial.company}
                      </div>
                    </div>
                    
                    {/* Verified Badge */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                  </div>
                </div>
                
                {/* Industry Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-600 border border-gray-200">
                    {testimonial.company.includes('Aviation') ? 'Aviation' :
                     testimonial.company.includes('Financial') ? 'Finance' :
                     'Education'}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Trust Metrics Section */}
          <div className="mt-12 relative overflow-hidden">
            {/* Background with animated patterns */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 rounded-3xl"></div>
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {/* Floating orbs */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-white/10 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float-particle ${4 + Math.random() * 3}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                ></div>
              ))}
              
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                animation: 'grid-pulse 4s ease-in-out infinite'
              }}></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-12">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-100 text-sm font-semibold uppercase tracking-wider">Global Impact</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Trusted by Organizations 
                  <span className="block bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    Worldwide
                  </span>
                </h3>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
                  Our proven track record speaks for itself. Join thousands of organizations 
                  who rely on YUBIX for their critical security needs.
                </p>
              </div>
              
              {/* Enhanced metrics grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="group relative">
                  {/* Card background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:border-cyan-400/50 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 text-center">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <CountingNumber 
                        end={180} 
                        suffix="+" 
                        className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors"
                        duration={2500}
                      />
                    </div>
                    <div className="text-cyan-100 font-medium">Sites Secured</div>
                    <div className="text-blue-200 text-sm mt-1">Across 6 continents</div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:border-green-400/50 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10 p-6 text-center">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                      </div>
                      <CountingNumber 
                        end={172} 
                        className="text-4xl font-bold text-white mb-2 group-hover:text-green-200 transition-colors"
                        duration={2500}
                      />
                    </div>
                    <div className="text-green-100 font-medium">Industries Served</div>
                    <div className="text-blue-200 text-sm mt-1">Diverse sectors</div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:border-purple-400/50 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10 p-6 text-center">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                      </div>
                      <CountingNumber 
                        end={6} 
                        className="text-4xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors"
                        duration={1500}
                      />
                    </div>
                    <div className="text-purple-100 font-medium">Global Languages</div>
                    <div className="text-blue-200 text-sm mt-1">Multilingual support</div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:border-orange-400/50 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10 p-6 text-center">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <CountingNumber 
                        end={30} 
                        suffix="+" 
                        className="text-4xl font-bold text-white mb-2 group-hover:text-orange-200 transition-colors"
                        duration={2000}
                      />
                    </div>
                    <div className="text-orange-100 font-medium">Years Experience</div>
                    <div className="text-blue-200 text-sm mt-1">Proven expertise</div>
                  </div>
                </div>
              </div>
              
              {/* Bottom section with additional info */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-6 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-200 text-sm font-medium">Real-time monitoring active</span>
                  </div>
                  <div className="w-px h-6 bg-white/20"></div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-blue-200 text-sm font-medium">ISO 27001 Certified</span>
                  </div>
                  <div className="w-px h-6 bg-white/20"></div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-purple-200 text-sm font-medium">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-blue-200/50">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 text-sm font-semibold uppercase tracking-wider">Integrated Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Security 
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              YUBIX provides comprehensive security solutions across multiple platforms, 
              each designed to address specific security challenges in different environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vertex Pro Card - Enhanced Design */}
            <div className="group relative bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200/30 hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{background: 'linear-gradient(45deg, #3b82f6, #06b6d4, #3b82f6)', backgroundSize: '200% 200%', animation: 'gradient-shift 3s ease infinite'}}></div>
              
              <div className="relative z-10">
                {/* Icon with Enhanced Design */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">Live</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Vertex Pro
                  </h3>
                  <div className="text-blue-600 text-sm font-semibold mb-4 uppercase tracking-wide">
                    Enterprise Command Center
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                    Professional B2B platform for real-time threat prevention and command interface. 
                    Serving aviation, critical infrastructure, corporates, and education sectors.
                  </p>
                </div>
                
                {/* Enhanced CTA */}
                <div className="flex items-center justify-between">
                  <a 
                    href="https://www.vertexpro.org" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 group-hover:translate-x-2"
                  >
                    <span>Explore Platform</span>
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full font-medium">
                      Visit Site
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buzz World Card - Enhanced Design */}
            <div className="group relative bg-gradient-to-br from-white/90 to-green-50/80 backdrop-blur-sm p-8 rounded-2xl border border-green-200/30 hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{background: 'linear-gradient(45deg, #22c55e, #10b981, #22c55e)', backgroundSize: '200% 200%', animation: 'gradient-shift 3s ease infinite'}}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">Live</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    Buzz World
                  </h3>
                  <div className="text-green-600 text-sm font-semibold mb-4 uppercase tracking-wide">
                    Secure Communication Hub
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                    Secure internal communication platform with live maps and user-friendly interface. 
                    Perfect for internal networks, hints, flashes, and quickies.
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href="https://www.thebuzzworld.com" 
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-all duration-300 group-hover:translate-x-2"
                  >
                    <span>Explore Platform</span>
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full font-medium">
                      Visit Site
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* BYONN Card - Enhanced Design */}
            <div className="group relative bg-gradient-to-br from-white/90 to-purple-50/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-200/30 hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{background: 'linear-gradient(45deg, #a855f7, #ec4899, #a855f7)', backgroundSize: '200% 200%', animation: 'gradient-shift 3s ease infinite'}}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-orange-600 font-medium">Coming Soon</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    BYONN
                  </h3>
                  <div className="text-purple-600 text-sm font-semibold mb-4 uppercase tracking-wide">
                    Security for Everyone
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                    Security-for-Everyone app with B2B & B2C versions. Features traffic light system, 
                    emergency & routine modes for comprehensive security coverage.
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <Link 
                    href="/products#byonn" 
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-all duration-300 group-hover:translate-x-2"
                  >
                    <span>Learn More</span>
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full font-medium">
                      Preview
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Bottom Section - Modern UI/UX */}
          <div className="mt-20 relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-blue-50/60 to-white/80 backdrop-blur-sm rounded-3xl border border-blue-200/30"></div>
            
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float-particle ${4 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 p-12">
              <div className="max-w-5xl mx-auto text-center">
                {/* Section Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-blue-200/50">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-700 text-sm font-semibold uppercase tracking-wider">Complete Solution</span>
                </div>
                
                {/* Enhanced Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Unified Security 
                  <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Architecture
                  </span>
                </h3>
                
                {/* Enhanced Description */}
                <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto">
                  All platforms work seamlessly together, providing comprehensive coverage across your entire security infrastructure. 
                  From enterprise command centers to community safety apps, we&apos;ve got every scenario covered with AI-powered intelligence.
                </p>
                
                {/* Feature Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50 hover:border-blue-300/50 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      Real-time Sync
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Instant data synchronization across all platforms
                    </p>
                  </div>
                  
                  <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-100/50 hover:border-green-300/50 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      AI-Powered
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Machine learning threat detection and prevention
                    </p>
                  </div>
                  
                  <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100/50 hover:border-purple-300/50 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      Global Scale
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Scalable infrastructure for worldwide deployment
                    </p>
                  </div>
                </div>
                
                {/* Enhanced CTA Section */}
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-10">
                  <Link 
                    href="/ecosystem" 
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white px-10 py-5 rounded-2xl font-semibold transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-110"
                  >
                    {/* Button Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    <div className="relative flex items-center gap-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <span className="text-lg">Explore Complete Ecosystem</span>
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                  
                  <button className="group inline-flex items-center gap-3 bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 px-8 py-5 rounded-2xl font-semibold transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Watch Demo</span>
                  </button>
                </div>
                
                {/* Enhanced Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
                  <div className="group flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2-2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">ISO 27001 Certified</div>
                      <div className="text-gray-500 text-xs">Security compliance</div>
                    </div>
                  </div>
                  
                  <div className="group flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Real-time Protection</div>
                      <div className="text-gray-500 text-xs">24/7 monitoring</div>
                    </div>
                  </div>
                  
                  <div className="group flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-200/50 hover:border-purple-300/50 transition-all duration-300">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">AI Innovation</div>
                      <div className="text-gray-500 text-xs">Cutting-edge technology</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-slate-100 via-gray-50 to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #6366f1 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-indigo-200/50">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-indigo-700 text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The YUBIX 
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Advantage
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what sets us apart in the security industry. Our unique combination of technology, 
              expertise, and global reach delivers unmatched protection for your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Real-Time Prevention */}
            <div className="group relative">
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-sm rounded-3xl border border-blue-200/30 group-hover:border-blue-400/50 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-8 text-center">
                {/* Enhanced Icon */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Real-Time Prevention
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  Proprietary technology for immediate threat detection and response with AI-powered analytics
                </p>
                
                {/* Progress Indicator */}
                <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                </div>
              </div>
            </div>

            {/* ISO 27001 Certified */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-green-50/80 backdrop-blur-sm rounded-3xl border border-green-200/30 group-hover:border-green-400/50 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  ISO 27001 Certified
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  International standard for information security management with continuous compliance monitoring
                </p>
                
                <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                </div>
              </div>
            </div>

            {/* Expert Leadership */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-purple-50/80 backdrop-blur-sm rounded-3xl border border-purple-200/30 group-hover:border-purple-400/50 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Expert Leadership
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  Founded by experts with 30+ years in security and counter-terrorism operations
                </p>
                
                <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                </div>
              </div>
            </div>

            {/* Global Reach */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-orange-50/80 backdrop-blur-sm rounded-3xl border border-orange-200/30 group-hover:border-orange-400/50 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Global Reach
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  Strategic partnerships and alliances worldwide with 24/7 support coverage
                </p>
                
                <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Bottom CTA Section */}
          <div className="relative">
            <div className="bg-gradient-to-r from-slate-50/80 via-white/90 to-blue-50/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-200/50 shadow-xl">
              <div className="text-center max-w-4xl mx-auto">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-6 py-3 rounded-full mb-6">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-blue-700 text-sm font-semibold uppercase tracking-wider">Ready to Get Started?</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Experience the Future of 
                    <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Security Technology
                    </span>
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Join thousands of organizations who trust YUBIX to protect their most valuable assets. 
                    Start your security transformation today.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link 
                    href="/contact" 
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Schedule a Demo</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  
                  <Link 
                    href="/about" 
                    className="group inline-flex items-center gap-3 bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Learn More</span>
                  </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 mt-10 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>No Setup Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2-2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>30-Day Free Trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z" />
                    </svg>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 relative overflow-hidden">
        {/* Optimized Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        
        {/* Simplified Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>
        
        {/* Optimized Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-3 h-3 bg-blue-400/20 rounded-full animate-float-particle" style={{left: '10%', top: '20%'}}></div>
          <div className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float-particle" style={{left: '80%', top: '30%', animationDelay: '2s'}}></div>
          <div className="absolute w-4 h-4 bg-purple-400/20 rounded-full animate-float-particle" style={{left: '60%', top: '70%', animationDelay: '4s'}}></div>
          <div className="absolute w-2 h-2 bg-blue-300/20 rounded-full animate-float-particle" style={{left: '20%', top: '80%', animationDelay: '1s'}}></div>
        </div>
        
        {/* Simplified Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-300 text-sm font-semibold uppercase tracking-wider">Start Your Journey</span>
          </div>
          
          {/* Enhanced Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">Ready to</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Secure Your Future?
            </span>
          </h2>
          
          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Join organizations worldwide who trust YUBIX for their security needs. 
            From aviation to education, we provide tailored solutions for every sector.
          </p>
          
          {/* Optimized Trust Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="group bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-blue-100 font-medium">Organizations Protected</div>
            </div>
            <div className="group bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-blue-100 font-medium">Uptime Guarantee</div>
            </div>
            <div className="group bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-blue-100 font-medium">Expert Support</div>
            </div>
          </div>
          
          {/* Optimized CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-10">
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white px-12 py-5 rounded-2xl font-semibold transition-colors duration-300 shadow-lg"
            >
              <div className="relative flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="text-lg">Get Started Today</span>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </Link>
            
            <Link 
              href="/about" 
              className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-semibold transition-colors duration-300 border border-white/30 hover:border-white/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Learn More About Us</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/about" 
              className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-semibold transition-colors duration-300 border border-white/30 hover:border-white/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Learn More About Us</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {/* Simplified Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="group flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl border border-white/20 hover:border-green-400/50 transition-colors duration-300">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">Trusted Globally</div>
                <div className="text-blue-200 text-xs">Enterprise-grade security</div>
              </div>
            </div>
            
            <div className="group flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl border border-white/20 hover:border-blue-400/50 transition-colors duration-300">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2-2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">SOC 2 Compliant</div>
                <div className="text-blue-200 text-xs">Audited & certified</div>
              </div>
            </div>
            
            <div className="group flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl border border-white/20 hover:border-purple-400/50 transition-colors duration-300">
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">Customer First</div>
                <div className="text-blue-200 text-xs">Dedicated support team</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
