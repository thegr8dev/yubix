import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-cyan-900/5"></div>
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        ></div>
      </div>
      
      {/* Subtle Glow Orbs */}
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-48 h-32 sm:h-48 bg-blue-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 bg-purple-500/3 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6 lg:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6 text-white">
                YUBIX
              </h3>
              <div className="space-y-3 lg:space-y-4">
                <p className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
                  Humanizing Technology.<br />
                  Fortifying the Future.
                </p>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  Enterprise-grade cybersecurity solutions for the modern digital landscape.
                </p>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                Security Updates
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">Get the latest threat intelligence and security insights.</p>
              <div className="space-y-2 sm:space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                />
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-white text-sm sm:text-base transition-all duration-300 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 pb-2 border-b border-gray-700">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white font-medium transition-colors duration-300 hover:underline decoration-blue-400 underline-offset-4 text-sm sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Ecosystem */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 pb-2 border-b border-gray-700">
              Ecosystem
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { href: "https://www.vertexpro.org", label: "Vertex Pro", external: true },
                { href: "https://www.thebuzzworld.com", label: "Buzz World", external: true },
                { href: "/products#byonn", label: "BYONN", external: false },
                { href: "/innovation", label: "Innovation Lab", external: false }
              ].map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white font-medium transition-colors duration-300 hover:underline decoration-purple-400 underline-offset-4 inline-flex items-center gap-2 text-sm sm:text-base"
                    >
                      {link.label}
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white font-medium transition-colors duration-300 hover:underline decoration-purple-400 underline-offset-4 text-sm sm:text-base"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 pb-2 border-b border-gray-700">
              Resources
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { href: "/careers", label: "Careers" },
                { href: "/investors", label: "Investors" },
                { href: "/press", label: "Press" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white font-medium transition-colors duration-300 hover:underline decoration-cyan-400 underline-offset-4 text-sm sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 my-8 lg:my-12"></div>
        
        {/* Bottom Section */}
        <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center">
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-gray-400 font-medium text-sm sm:text-base">Connect with us:</span>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { 
                  href: "#", 
                  label: "Twitter",
                  icon: (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  )
                },
                { 
                  href: "#", 
                  label: "LinkedIn",
                  icon: (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )
                }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Copyright & Certifications */}
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:gap-6 text-center lg:text-right">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-green-500/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-green-500/20">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400 font-medium">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-blue-500/20">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-blue-400 font-medium">SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-purple-500/20">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-purple-400 font-medium">GDPR Compliant</span>
              </div>
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              <p>&copy; 2025 <span className="text-white font-semibold">YUBIX</span>. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}