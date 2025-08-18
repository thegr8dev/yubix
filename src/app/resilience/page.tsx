export default function Resilience() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-green-900 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resilience Center
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Empowering citizens and organizations with knowledge, training, and tools for comprehensive preparedness
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Citizen & Organizational Empowerment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Resilience Center serves as a comprehensive resource hub, providing education, training, 
              and tools to build stronger, more prepared communities and organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-20 h-20 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Empowerment</h3>
              <p className="text-lg text-gray-600 mb-6">
                We believe that resilient communities are built through informed, prepared, and connected citizens. 
                Our programs focus on developing individual and collective capacity to respond to various challenges.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Individual Preparedness</h4>
                    <p className="text-gray-600 text-sm">Personal safety and emergency response skills</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Community Networks</h4>
                    <p className="text-gray-600 text-sm">Building strong neighborhood support systems</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Organizational Resilience</h4>
                    <p className="text-gray-600 text-sm">Helping organizations build adaptive capacity</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-lg">
              <div className="aspect-video bg-white rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Community Training Programs</p>
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
              Core Programs & Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive training and resources designed to build resilience at every level
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Behavioral Training</h3>
              <p className="text-gray-600 mb-4">
                Evidence-based behavioral training programs that develop intuitive threat recognition 
                and appropriate response mechanisms for various emergency scenarios.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Threat recognition patterns
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Situational awareness development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  De-escalation techniques
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Crisis communication skills
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Response Simulations</h3>
              <p className="text-gray-600 mb-4">
                Realistic simulation exercises that allow individuals and organizations to practice 
                emergency response procedures in safe, controlled environments.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Emergency evacuation drills
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Crisis scenario exercises
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Tabletop planning sessions
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Performance evaluation
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Protocol Access</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive access to established emergency protocols, standard operating procedures, 
                and best practices for various threat scenarios and organizational contexts.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Emergency response protocols
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Standard operating procedures
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Industry best practices
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Customizable templates
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational Resources</h3>
              <p className="text-gray-600 mb-4">
                Extensive library of educational materials, research papers, case studies, and 
                interactive learning tools to support continuous learning and development.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Interactive learning modules
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Research and case studies
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Video training materials
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Assessment tools
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
              Real-Time Preparedness Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dynamic programs that adapt to current threat landscapes and emerging challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Threat Intelligence Updates</h3>
              <p className="text-gray-600 mb-4">
                Regular briefings on emerging threats, changing risk landscapes, and updated 
                security recommendations based on current intelligence.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Weekly threat assessments</li>
                <li>• Regional risk updates</li>
                <li>• Sector-specific alerts</li>
                <li>• Preventive recommendations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Adaptive Training Programs</h3>
              <p className="text-gray-600 mb-4">
                Training programs that evolve with changing threat patterns and incorporate 
                lessons learned from recent incidents and global developments.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Dynamic curriculum updates</li>
                <li>• Scenario-based learning</li>
                <li>• Real-world case integration</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Networks</h3>
              <p className="text-gray-600 mb-4">
                Building and maintaining resilient community networks that can provide mutual 
                support and coordinated response during emergencies.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Neighborhood watch programs</li>
                <li>• Community response teams</li>
                <li>• Communication networks</li>
                <li>• Resource sharing systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Measuring Resilience
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that resilience can be measured, tracked, and improved through systematic 
                assessment and continuous development programs.
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 font-medium">Individual Preparedness</span>
                    <span className="text-gray-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 font-medium">Community Coordination</span>
                    <span className="text-gray-600">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 font-medium">Organizational Adaptability</span>
                    <span className="text-gray-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-purple-600 h-3 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 font-medium">Response Capability</span>
                    <span className="text-gray-600">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-red-600 h-3 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Assessment Framework</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Baseline Assessment</h4>
                    <p className="text-gray-600 text-sm">Initial evaluation of current preparedness levels</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Targeted Improvement</h4>
                    <p className="text-gray-600 text-sm">Customized programs to address specific gaps</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Progress Monitoring</h4>
                    <p className="text-gray-600 text-sm">Regular tracking and performance evaluation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Continuous Enhancement</h4>
                    <p className="text-gray-600 text-sm">Ongoing improvement and adaptation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build Resilience Today
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Join thousands of individuals and organizations who have strengthened their preparedness 
            and response capabilities through our comprehensive resilience programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Start Your Journey
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors"
            >
              Explore Training Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}