export default function Products() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products & Platforms
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive security solutions designed for every environment and need
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-20 h-20 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Vertex Pro
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our flagship professional B2B platform designed for enterprise-level security operations. 
                Vertex Pro delivers real-time threat prevention through an advanced command interface 
                that integrates seamlessly with existing security infrastructure.
              </p>
              
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-bold text-gray-900">Key Features:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Real-time threat prevention & detection
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Advanced command interface
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Integrated crisis management
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Multi-sector compatibility
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-blue-900 mb-2">Industries Served:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-blue-800">
                  <span>• Aviation Security</span>
                  <span>• Critical Infrastructure</span>
                  <span>• Corporate Security</span>
                  <span>• Education Sector</span>
                </div>
              </div>

              <a 
                href="https://www.vertexpro.org" 
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Visit Vertex Pro
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <div className="aspect-video bg-white rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Vertex Pro Dashboard Interface</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="lg:order-2">
              <div className="w-20 h-20 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Buzz World
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A secure internal communication platform that creates smart social networks for communities. 
                Buzz World features live mapping capabilities and an intuitive interface designed for 
                secure information sharing within organizations.
              </p>
              
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-bold text-gray-900">Platform Features:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Secure internal networks
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Live map integration
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    User-friendly interface
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Real-time information sharing
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-green-900 mb-2">Communication Types:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-green-800">
                  <span>• Hints & Tips</span>
                  <span>• Flash Updates</span>
                  <span>• Quick Messages</span>
                  <span>• Secure Alerts</span>
                </div>
              </div>

              <a 
                href="https://www.thebuzzworld.com" 
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Visit Buzz World
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="lg:order-1 bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <div className="aspect-video bg-white rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Buzz World Live Map Interface</p>
                </div>
              </div>
            </div>
          </div>

          <div id="byonn" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                BYONN
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Security-for-Everyone app designed to democratize access to professional security tools. 
                BYONN offers both B2B and B2C versions, making advanced security features accessible 
                to organizations and individuals alike.
              </p>
              
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-bold text-gray-900">System Features:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Traffic Light System for status indication
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Emergency & Routine Mode switching
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    B2B & B2C platform versions
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Universal security access
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">B2B Version</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Organization dashboards</li>
                    <li>• Admin controls</li>
                    <li>• Team management</li>
                    <li>• Analytics & reporting</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">B2C Version</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Personal security interface</li>
                    <li>• Family protection</li>
                    <li>• Community alerts</li>
                    <li>• Emergency contacts</li>
                  </ul>
                </div>
              </div>

              <button className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Coming Soon
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <div className="aspect-video bg-white rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l6-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm10-9c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">BYONN Traffic Light System</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sectors We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platforms are designed to meet the unique security challenges across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Aviation Security</h3>
              <p className="text-gray-600 text-sm">Comprehensive airport and airline security solutions</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Corporate & Executive</h3>
              <p className="text-gray-600 text-sm">Enterprise security for businesses and executives</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M8 6l4-4 4 4v4H8V6z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Public Sector & Government</h3>
              <p className="text-gray-600 text-sm">Government and public sector security solutions</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Critical Infrastructure</h3>
              <p className="text-gray-600 text-sm">Protection for essential services and infrastructure</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Education & Schools</h3>
              <p className="text-gray-600 text-sm">Educational institution security and safety</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hospitality & Events</h3>
              <p className="text-gray-600 text-sm">Security solutions for venues and events</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}