export default function Services() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Services
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Expert advisory, training, and operational support for comprehensive security solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Gold Standard Operations Room
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our premier crisis management facility provides real-time support and coordination during 
                critical security events. The Gold Standard Operations Room serves as a central command hub 
                where expert analysts and security professionals provide immediate assistance and strategic oversight.
              </p>
              
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-bold text-gray-900">Core Capabilities:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    24/7 secure crisis room services
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Real-time support from security experts
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Emergency coordination and response
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Strategic oversight interface
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-red-900 mb-3">Operations Room Services:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-red-800">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    Crisis Response Coordination
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    Real-time Threat Assessment
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    Emergency Simulations
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    Strategic Advisory Support
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg">
              <div className="aspect-video bg-white rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Operations Room Command Center</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600 text-sm">Round-the-clock support and monitoring</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Highly trained security professionals</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Secure Environment</h3>
              <p className="text-gray-600 text-sm">Highest security standards maintained</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Rapid Response</h3>
              <p className="text-gray-600 text-sm">Immediate crisis intervention capabilities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Advisory Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive security consulting and customized solutions tailored to your organization&apos;s needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Security Advisory</h3>
              <p className="text-gray-600 mb-4">
                Strategic security consulting services that help organizations develop comprehensive 
                security frameworks tailored to their specific threats and operational requirements.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Risk Assessment & Analysis
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Security Strategy Development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Compliance & Regulatory Guidance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Threat Intelligence Integration
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customized Feature Development</h3>
              <p className="text-gray-600 mb-4">
                Bespoke security feature development that extends our core platforms with 
                organization-specific capabilities and integrations for unique operational requirements.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Custom Module Development
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Third-party System Integration
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Workflow Optimization
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Performance Enhancement
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Module Integration</h3>
              <p className="text-gray-600 mb-4">
                Advanced artificial intelligence integration services that enhance security capabilities 
                with predictive analytics, automated threat detection, and intelligent response systems.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Predictive Threat Analytics
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Automated Response Systems
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Machine Learning Implementation
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Behavioral Pattern Recognition
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Simulations & Drills</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive emergency preparedness through realistic security simulations and 
                training drills that test and improve organizational response capabilities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Crisis Scenario Simulations
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Emergency Response Drills
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Performance Assessment
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Improvement Recommendations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Training & Development
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional education programs designed to enhance security awareness and operational capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Executive & Community Training</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive training programs are designed to enhance security awareness and 
                operational capabilities across all organizational levels, from executive leadership 
                to front-line personnel.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Executive Security Briefings</h4>
                    <p className="text-gray-600 text-sm">Strategic security overview for leadership teams</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Operational Training Programs</h4>
                    <p className="text-gray-600 text-sm">Hands-on training for security personnel</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Community Awareness Workshops</h4>
                    <p className="text-gray-600 text-sm">Security awareness for all staff members</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Continuous Education Programs</h4>
                    <p className="text-gray-600 text-sm">Ongoing security education and updates</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Training Outcomes</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Security Awareness</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Response Capability</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Threat Recognition</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full w-11/12"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Crisis Management</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Enhance Your Security Operations?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Contact our expert team to discuss how our professional services can strengthen 
            your organization&apos;s security posture and operational resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule Consultation
            </a>
            <a 
              href="/products" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Explore Our Platforms
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}