export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About YUBIX
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of security technology with human-centered solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At YUBIX, we believe in humanizing technology to create a safer, more secure world. 
                Our mission is to provide intelligent security solutions that prevent threats in real-time, 
                while building resilient ecosystems that adapt and evolve with emerging challenges.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We envision a future where security technology seamlessly integrates with human intuition and expertise, 
                creating comprehensive protection that feels natural and empowering rather than restrictive.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Our Core Values</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Human-First Technology Design
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Real-Time Prevention Over Reactive Response
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Operational Excellence and Reliability
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Collaborative Security Ecosystems
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ISO 27001 Certified</h3>
                <p className="text-gray-600">
                  Our commitment to information security excellence is validated by international certification, 
                  ensuring the highest standards in security management systems.
                </p>
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our unique combination of expertise, technology, and approach sets us apart in the security industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proprietary Technology</h3>
              <p className="text-gray-600">
                Our cutting-edge, proprietary technology delivers real-time threat prevention 
                capabilities that go beyond traditional reactive security measures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Leadership</h3>
              <p className="text-gray-600">
                Founded and led by security professionals with over 30 years of combined experience 
                in security and counter-terrorism operations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Pedigree</h3>
              <p className="text-gray-600">
                Our solutions are built on real-world operational experience, ensuring practical 
                and effective security implementations across diverse environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Partnerships & Alliances
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading organizations worldwide to deliver comprehensive security solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Network</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our strategic partnerships span across continents, enabling us to provide 
                localized expertise with global reach. We work closely with government agencies, 
                private organizations, and technology partners to ensure comprehensive coverage.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  International Government Agencies
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Technology Innovation Partners
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Industry-Specific Consultants
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Academic Research Institutions
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Approach</h3>
              <p className="text-gray-600 mb-4">
                We believe that the most effective security solutions emerge from collaboration. 
                Our alliance network enables us to:
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <span className="text-gray-700">Share threat intelligence in real-time</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <span className="text-gray-700">Develop sector-specific solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <span className="text-gray-700">Ensure global compliance standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Timeline & Milestones
            </h2>
            <p className="text-xl text-blue-100">
              Our journey in transforming security technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-900">01</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Foundation</h3>
              <p className="text-blue-100">
                YUBIX founded with vision to humanize security technology, 
                bringing together experts from security and technology sectors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-900">02</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Platform Development</h3>
              <p className="text-blue-100">
                Launch of core platforms: Vertex Pro for enterprise security, 
                Buzz World for internal communications, and BYONN for universal access.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-900">03</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Global Expansion</h3>
              <p className="text-blue-100">
                ISO 27001 certification achieved, strategic partnerships established, 
                and global reach expanded across multiple sectors and regions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}