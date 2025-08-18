import Link from 'next/link'
import ImageSlider from '@/components/ImageSlider'

const sliderImages = [
  {
    src: '/hero-security.jpg',
    alt: 'Security Operations Center',
    title: 'Advanced Security Operations',
    description: 'Real-time monitoring and threat prevention with our Gold Standard Operations Room'
  },
  {
    src: '/hero-security.jpg',
    alt: 'AI Technology',
    title: 'AI-Enhanced Security',
    description: 'Cutting-edge artificial intelligence modules for predictive threat analysis'
  },
  {
    src: '/hero-security.jpg',
    alt: 'Global Network',
    title: 'Global Security Network',
    description: 'Worldwide presence with local expertise and international partnerships'
  },
  {
    src: '/hero-security.jpg',
    alt: 'Aviation Security',
    title: 'Aviation & Critical Infrastructure',
    description: 'Specialized security solutions for airports, government, and critical facilities'
  },
  {
    src: '/hero-security.jpg',
    alt: 'Team Training',
    title: 'Professional Training',
    description: 'Comprehensive training programs for security professionals and communities'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-12 sm:py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Humanizing Technology.<br />
              <span className="text-blue-200 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Fortifying the Future.
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Intelligent Security | Real-Time Prevention | Resilience Ecosystems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products" 
                className="bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg text-base sm:text-lg"
              >
                Explore the Ecosystem
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-base sm:text-lg"
              >
                Talk to Our Experts
              </Link>
            </div>
          </div>

          {/* Image Slider */}
          <div className="mt-8 sm:mt-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <ImageSlider key="homepage-slider" images={sliderImages} priority={true} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Ecosystem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              YUBIX provides comprehensive security solutions across multiple platforms, 
              each designed to address specific security challenges in different environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vertex Pro</h3>
                <p className="text-gray-600 mb-4">
                  Professional B2B platform for real-time threat prevention and command interface. 
                  Serving aviation, critical infrastructure, corporates, and education sectors.
                </p>
                <a href="https://www.vertexpro.org" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Buzz World</h3>
                <p className="text-gray-600 mb-4">
                  Secure internal communication platform with live maps and user-friendly interface. 
                  Perfect for internal networks, hints, flashes, and quickies.
                </p>
                <a href="https://www.thebuzzworld.com" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">BYONN</h3>
                <p className="text-gray-600 mb-4">
                  Security-for-Everyone app with B2B & B2C versions. Features traffic light system, 
                  emergency & routine modes for comprehensive security coverage.
                </p>
                <Link href="/products#byonn" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose YUBIX?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Real-Time Prevention</h3>
              <p className="text-gray-600">Proprietary technology for immediate threat detection and response</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ISO 27001 Certified</h3>
              <p className="text-gray-600">International standard for information security management</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Leadership</h3>
              <p className="text-gray-600">Founded by experts with 30+ years in security and counter-terrorism</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">Strategic partnerships and alliances worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join organizations worldwide who trust YUBIX for their security needs. 
            From aviation to education, we provide tailored solutions for every sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
