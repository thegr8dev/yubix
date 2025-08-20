'use client';

import Link from 'next/link';

interface CallToActionSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  trustIndicators?: Array<{
    icon: React.ReactNode;
    title: string;
    subtitle: string;
  }>;
}

export default function CallToActionSection({
  title = "Ready to",
  subtitle = "Secure Your Future?",
  description = "Join organizations worldwide who trust YUBIX for their security needs. From aviation to education, we provide tailored solutions for every sector.",
  primaryButtonText = "Get Started Today",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Learn More About Us",
  secondaryButtonHref = "/about",
  stats = [
    { value: "500+", label: "Organizations Protected" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Expert Support" }
  ],
  trustIndicators = [
    {
      icon: (
        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Trusted Globally",
      subtitle: "Enterprise-grade security"
    },
    {
      icon: (
        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2-2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "SOC 2 Compliant",
      subtitle: "Audited & certified"
    },
    {
      icon: (
        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Customer First",
      subtitle: "Dedicated support team"
    }
  ]
}: CallToActionSectionProps) {
  return (
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
        <div className="absolute w-3 h-3 bg-blue-400/20 rounded-full animate-pulse" style={{left: '10%', top: '20%'}}></div>
        <div className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse" style={{left: '80%', top: '30%', animationDelay: '2s'}}></div>
        <div className="absolute w-4 h-4 bg-purple-400/20 rounded-full animate-pulse" style={{left: '60%', top: '70%', animationDelay: '4s'}}></div>
        <div className="absolute w-2 h-2 bg-blue-300/20 rounded-full animate-pulse" style={{left: '20%', top: '80%', animationDelay: '1s'}}></div>
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
          <span className="block text-white mb-2">{title}</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {subtitle}
          </span>
        </h2>
        
        {/* Enhanced Description */}
        <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
          {description}
        </p>
        
        {/* Optimized Trust Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="group bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Optimized CTA Buttons */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-10">
          <Link 
            href={primaryButtonHref} 
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white px-12 py-5 rounded-2xl font-semibold transition-colors duration-300 shadow-lg"
          >
            <div className="relative flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-lg">{primaryButtonText}</span>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </Link>
          
          <Link 
            href={secondaryButtonHref} 
            className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-semibold transition-colors duration-300 border border-white/30 hover:border-white/50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{secondaryButtonText}</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        {/* Simplified Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="group flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl border border-white/20 hover:border-green-400/50 transition-colors duration-300">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                {indicator.icon}
              </div>
              <div>
                <div className="font-semibold text-white">{indicator.title}</div>
                <div className="text-blue-200 text-xs">{indicator.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}