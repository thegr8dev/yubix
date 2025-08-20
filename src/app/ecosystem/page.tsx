'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import CallToActionSection from '@/components/CallToActionSection';

// Platform data
const platforms = [
  {
    id: 'vertex-pro',
    name: 'Vertex Pro',
    tagline: 'Enterprise Security Platform',
    description: 'Real-time threat prevention dashboard with AI-powered threat correlation for aviation, infrastructure, and corporate sectors.',
    url: 'https://vertexpro.org',
    category: 'Enterprise',
    features: [
      'Real-time threat prevention',
      'Command interface with tactical maps',
      'AI-powered threat correlation',
      'Multi-sector solutions',
      'Crisis response protocols'
    ],
    keyMetrics: {
      sites: '180+',
      sectors: '172',
      uptime: '99.9%'
    },
    targetAudience: 'Security chiefs, CIOs, government officials',
    integrations: ['Buzz World', 'Security Hub', 'BYONN'],
    color: 'from-blue-600 to-cyan-600',
    icon: '🛡️'
  },
  {
    id: 'buzz-world',
    name: 'Buzz World',
    tagline: 'Smart Communication Platform',
    description: 'Secure social network for cities, schools, and corporations with department-based communication and live map integration.',
    url: 'https://thebuzzworld.com',
    category: 'Communication',
    features: [
      'Smart social network interface',
      'Department-based communication',
      'Live map integration',
      'Secure internal networks',
      'Real-time notifications'
    ],
    keyMetrics: {
      users: '50K+',
      departments: '500+',
      messages: '1M+'
    },
    targetAudience: 'Cities, schools, corporations',
    integrations: ['Vertex Pro', 'BYONN', 'Security Hub'],
    color: 'from-green-600 to-emerald-600',
    icon: '🌐'
  },
  {
    id: 'byonn',
    name: 'BYONN',
    tagline: 'Security-for-Everyone',
    description: 'Simple and secure messaging platform with Traffic Light System for small organizations and community groups.',
    url: 'https://byonn.yubix.com',
    category: 'Community',
    features: [
      'Traffic Light System protocols',
      'B2B & B2C versions',
      'Quick user onboarding',
      'Emergency & routine modes',
      'Community-focused design'
    ],
    keyMetrics: {
      communities: '1K+',
      response: '< 30s',
      satisfaction: '98%'
    },
    targetAudience: 'Small organizations, community groups',
    integrations: ['Buzz World', 'Vertex Pro'],
    color: 'from-purple-600 to-pink-600',
    icon: '👥'
  },
  {
    id: 'fortalyx',
    name: 'Fortalyx',
    tagline: 'Elite Training & Advisory',
    description: 'Strategic advisory and counterterrorism training programs with EU training hubs and international alliances.',
    url: 'https://fortalyx.com',
    category: 'Training',
    features: [
      'Counterterrorism programs',
      'Hospitality resilience training',
      'EU training hubs',
      'Strategic consultancy',
      'International alliances'
    ],
    keyMetrics: {
      trainees: '10K+',
      programs: '50+',
      countries: '25+'
    },
    targetAudience: 'Elite training, strategic advisory',
    integrations: ['Security Hub', 'Innovation Lab'],
    color: 'from-orange-600 to-red-600',
    icon: '🎓'
  },
  {
    id: 'security-hub',
    name: 'Security Hub',
    tagline: 'Intelligence & Operations',
    description: 'Early warning systems and threat monitoring with field-based intelligence and prevention-first methodology.',
    url: 'https://securityhub.yubix.com',
    category: 'Intelligence',
    features: [
      'Early warning systems',
      'Threat monitoring',
      'Field-based intelligence',
      'Prevention-first methodology',
      'Expert network access'
    ],
    keyMetrics: {
      threats: '99.8%',
      response: '< 5min',
      coverage: '24/7'
    },
    targetAudience: 'Field operations, tactical insights',
    integrations: ['Vertex Pro', 'Fortalyx', 'Innovation Lab'],
    color: 'from-indigo-600 to-purple-600',
    icon: '🔍'
  },
  {
    id: 'innovation-lab',
    name: 'Innovation Lab',
    tagline: 'AI Research & Development',
    description: 'Human First. AI Enhanced philosophy with custom AI modules and cutting-edge research partnerships.',
    url: '/innovation-lab',
    category: 'Research',
    features: [
      'Custom AI modules',
      'Research and development',
      'AI capabilities demonstration',
      'Innovation projects',
      'Partnership opportunities'
    ],
    keyMetrics: {
      projects: '100+',
      patents: '25+',
      partners: '50+'
    },
    targetAudience: 'Researchers, AI specialists, innovators',
    integrations: ['All Platforms'],
    color: 'from-cyan-600 to-blue-600',
    icon: '🔬'
  }
];

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, isIntersecting };
};

// Platform Card Component
const PlatformCard = ({ platform, index }: { platform: typeof platforms[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 transform ${
        isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${isHovered ? 'scale-105 shadow-2xl z-10' : 'scale-100 z-0'}`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        minHeight: '400px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient - Restored beautiful color effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} transition-opacity duration-500 ${
        isHovered ? 'opacity-15' : 'opacity-0'
      }`} />
      
      {/* Base Card Content */}
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="relative p-8 pb-4 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl">{platform.icon}</div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${platform.color} text-white`}>
              {platform.category}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{platform.name}</h3>
          <p className="text-lg font-medium text-gray-600 mb-4">{platform.tagline}</p>
          <p className="text-gray-700 leading-relaxed">{platform.description}</p>
        </div>

        {/* Features - Smooth expanding section (no lag) */}
        <div className={`relative px-8 transition-all duration-300 ease-out overflow-hidden ${
          isHovered ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gray-200 pt-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              Key Features
            </h4>
            <ul className="space-y-2 mb-4">
              {platform.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Key Metrics */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                Key Metrics
              </h4>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {Object.entries(platform.keyMetrics).map(([key, value]) => (
                  <div key={key} className="text-center p-2 bg-white/60 rounded-lg backdrop-blur-sm">
                    <div className={`text-sm font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                      {value}
                    </div>
                    <div className="text-xs text-gray-600 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Footer */}
        <div className="relative p-8 pt-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Target: {platform.targetAudience.split(',')[0]}...
            </div>
            <Link
              href={platform.url}
              className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${platform.color} text-white font-medium hover:shadow-lg transform transition-all duration-300 hover:scale-105 relative overflow-hidden group text-sm`}
              target={platform.url.startsWith('http') ? '_blank' : '_self'}
              rel={platform.url.startsWith('http') ? 'noopener noreferrer' : ''}
            >
              <span className="relative z-10">Explore</span>
              <svg className="w-4 h-4 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {/* Button hover effect */}
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Integration Matrix Component
const IntegrationMatrix = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Platform Integration Matrix</h3>
      
      <div className="grid grid-cols-7 gap-4">
        {/* Header Row */}
        <div className="font-medium text-gray-600 text-sm p-3"></div>
        {platforms.map((platform) => (
          <div key={`header-${platform.id}`} className="font-medium text-gray-600 text-sm p-3 text-center">
            <div className="text-lg mb-1">{platform.icon}</div>
            <div className="truncate">{platform.name}</div>
          </div>
        ))}

        {/* Matrix Rows */}
        {platforms.map((rowPlatform) => (
          <div key={`row-${rowPlatform.id}`} className="contents">
            <div className="font-medium text-gray-600 text-sm p-3 flex items-center">
              <div className="text-lg mr-2">{rowPlatform.icon}</div>
              <div className="truncate">{rowPlatform.name}</div>
            </div>
            {platforms.map((colPlatform) => {
              const isIntegrated = rowPlatform.integrations.includes(colPlatform.name) || 
                                 rowPlatform.integrations.includes('All Platforms');
              const isSelf = rowPlatform.id === colPlatform.id;
              
              return (
                <div
                  key={`cell-${rowPlatform.id}-${colPlatform.id}`}
                  className={`p-3 text-center rounded-lg transition-all duration-300 cursor-pointer ${
                    isSelf
                      ? 'bg-gray-100'
                      : isIntegrated
                      ? 'bg-green-100 hover:bg-green-200'
                      : 'bg-red-50 hover:bg-red-100'
                  }`}
                >
                  {isSelf ? (
                    <div className="w-6 h-6 mx-auto bg-gray-300 rounded-full"></div>
                  ) : isIntegrated ? (
                    <div className="w-6 h-6 mx-auto bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-6 h-6 mx-auto bg-red-300 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-600">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
          Integrated
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-300 rounded-full mr-2"></div>
          Not Integrated
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
          Self
        </div>
      </div>
    </div>
  );
};

// Enhanced Platform Comparison Table with Optimized Animations
const ComparisonTable = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const comparisonData = [
    { 
      feature: 'Target Audience', 
      values: platforms.map(p => p.targetAudience.split(',')[0]),
      icon: '👥',
      description: 'Primary user groups and organizations served'
    },
    { 
      feature: 'Primary Use Case', 
      values: platforms.map(p => p.tagline),
      icon: '🎯',
      description: 'Main functionality and purpose of each platform'
    },
    { 
      feature: 'Deployment Type', 
      values: ['Enterprise', 'Cloud', 'Community', 'Hybrid', 'On-Premise', 'Research'],
      icon: '☁️',
      description: 'How and where the platform can be deployed'
    },
    { 
      feature: 'Security Level', 
      values: ['Military', 'Corporate', 'Standard', 'Enhanced', 'Intelligence', 'Advanced'],
      icon: '🔒',
      description: 'Level of security protection and features provided'
    },
    { 
      feature: 'User Capacity', 
      values: ['Unlimited', '50K+', '1K+', '10K+', 'Variable', '100+'],
      icon: '👤',
      description: 'Maximum number of users the platform can support'
    },
    { 
      feature: 'Integration APIs', 
      values: ['Full', 'Extensive', 'Basic', 'Limited', 'Advanced', 'Complete'],
      icon: '🔗',
      description: 'Level of API integration capabilities with other systems'
    }
  ];

  return (
    <div className="relative">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl"></div>

      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Optimized Header */}
        <div className="relative p-8 pb-6 bg-gradient-to-r from-slate-900 to-blue-950 text-white">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-4">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span className="text-white/90 font-bold text-sm uppercase tracking-wider">Feature Comparison</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-3 text-white">
              Platform Comparison Matrix
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
              Compare features, capabilities, and target audiences across our entire platform portfolio
            </p>
          </div>
        </div>
        
        {/* Optimized Table Design */}
        <div className="relative overflow-hidden">
          {/* Platform Headers - Optimized */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 border-b border-slate-200">
            <div className="grid grid-cols-7 gap-4">
              {/* Empty cell for feature column */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-slate-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">📊</span>
                </div>
              </div>
              
              {/* Platform Headers - Simplified Animations */}
              {platforms.map((platform) => (
                <div 
                  key={platform.id} 
                  className={`group cursor-pointer transform transition-transform duration-200 ease-out will-change-transform ${
                    selectedPlatform === platform.id ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onMouseEnter={() => setSelectedPlatform(platform.id)}
                  onMouseLeave={() => setSelectedPlatform(null)}
                >
                  <div className={`relative bg-white rounded-2xl p-4 shadow-lg transition-colors duration-200 ease-out ${
                    selectedPlatform === platform.id 
                      ? `bg-gradient-to-br ${platform.color} text-white`
                      : 'hover:shadow-xl'
                  }`}>
                    <div className="text-center">
                      <div className="text-2xl mb-2">
                        {platform.icon}
                      </div>
                      <div className={`font-bold text-sm transition-colors duration-200 ${
                        selectedPlatform === platform.id ? 'text-white' : 'text-slate-900'
                      }`}>
                        {platform.name}
                      </div>
                      <div className={`text-xs mt-1 transition-colors duration-200 ${
                        selectedPlatform === platform.id ? 'text-white/80' : 'text-slate-600'
                      }`}>
                        {platform.category}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Rows - Optimized Performance */}
          <div className="p-6 space-y-4">
            {comparisonData.map((row, rowIndex) => (
              <div
                key={row.feature}
                className={`relative bg-white rounded-2xl border-2 transition-all duration-200 ease-out will-change-transform ${
                  selectedFeature === row.feature 
                    ? 'border-blue-500 shadow-lg transform scale-[1.01] bg-blue-50' 
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
                onMouseEnter={() => setSelectedFeature(row.feature)}
                onMouseLeave={() => setSelectedFeature(null)}
              >
                <div className="grid grid-cols-7 gap-4 p-6">
                  {/* Feature Label - Optimized */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 ease-out ${
                      selectedFeature === row.feature
                        ? 'bg-blue-500 text-white transform scale-105'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      <span className="text-lg">{row.icon}</span>
                    </div>
                    <div>
                      <div className={`font-bold transition-colors duration-200 ${
                        selectedFeature === row.feature ? 'text-blue-900' : 'text-slate-900'
                      }`}>
                        {row.feature}
                      </div>
                      <div className={`text-xs mt-1 transition-colors duration-200 ${
                        selectedFeature === row.feature ? 'text-blue-700' : 'text-slate-600'
                      }`}>
                        {row.description}
                      </div>
                    </div>
                  </div>

                  {/* Platform Values - Simplified Animations */}
                  {row.values.map((value, colIndex) => (
                    <div key={`${rowIndex}-${colIndex}`} className="flex items-center justify-center">
                      <div className={`w-full max-w-[120px] p-3 rounded-xl text-center text-sm font-medium transition-all duration-200 ease-out ${
                        selectedFeature === row.feature 
                          ? `bg-gradient-to-r ${platforms[colIndex].color} text-white shadow-md transform scale-105`
                          : selectedPlatform === platforms[colIndex].id
                          ? `bg-gradient-to-r ${platforms[colIndex].color} text-white`
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Simplified Footer */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 border-t border-slate-200">
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span>Hover over features to highlight</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <span>Click platforms for details</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span>Interactive comparison matrix</span>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                💡 <strong>Pro Tip:</strong> Hover over any feature row or platform column to see detailed comparisons
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function EcosystemPage() {
  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: statsRef, isIntersecting: statsInView } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      {/* Enhanced Hero Section - Modern Design inspired by About page */}
      <section ref={heroRef} className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Enhanced Background Elements */}
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

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 right-32 w-48 h-48 border border-white/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-32 left-32 w-32 h-32 border-2 border-white/20 rotate-45"></div>
          <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-0 lg:px-2 py-8 sm:py-12">
          <div className={`text-center transition-all duration-1000 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Enhanced Badge */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-xl px-10 py-5 rounded-2xl border border-white/30 shadow-2xl hover:border-white/40 transition-all duration-300 group">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse delay-300"></div>
                </div>
                <span className="text-white/90 text-sm font-bold uppercase tracking-wider group-hover:text-white transition-colors">Complete Security Ecosystem</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-700"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              <span className="block text-white mb-3 drop-shadow-2xl relative">
                YUBIX
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-70"></div>
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl relative">
                Ecosystem
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <div className="max-w-6xl mx-auto mb-8">
              <p className="text-xl sm:text-2xl lg:text-3xl text-white/85 leading-relaxed font-light mb-8">
                Six integrated platforms delivering comprehensive security solutions from <span className="font-bold text-cyan-300">enterprise-grade protection</span> 
                to community-focused communication and elite training programs.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">6 Integrated Platforms</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <span className="font-semibold">Enterprise to Community</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-600"></div>
                  <span className="font-semibold">Seamless Integration</span>
                </div>
              </div>

              {/* Enhanced Quick Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto mb-8">
                {[
                  { number: '6', label: 'Integrated Platforms', icon: '🔗', color: 'from-blue-400 to-cyan-400' },
                  { number: '180+', label: 'Secured Sites', icon: '🏢', color: 'from-green-400 to-emerald-400' },
                  { number: '172', label: 'Industry Sectors', icon: '🌐', color: 'from-purple-400 to-pink-400' },
                  { number: '99.9%', label: 'Uptime Record', icon: '⚡', color: 'from-orange-400 to-red-400' }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="relative bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:border-white/40 group cursor-pointer" 
                  >
                    <div className="relative z-10">
                      <div className="text-3xl lg:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {stat.number}
                      </div>
                      <div className="text-sm lg:text-base text-white/70 font-medium group-hover:text-white/90 transition-colors">{stat.label}</div>
                      
                      {/* Bottom accent line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl lg:rounded-b-3xl`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link
                href="/contact"
                className="group relative inline-flex items-center px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                <div className="relative flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Get Started</span>
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>

              <Link
                href="#platforms"
                className="group relative inline-flex items-center px-10 py-5 rounded-2xl border-2 border-white/30 text-white font-bold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-2xl"></div>
                <div className="relative flex items-center">
                  <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Explore Platforms</span>
                </div>
              </Link>
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

      {/* Stats Section */}
      <section ref={statsRef} className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${
            statsInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                6
              </div>
              <div className="text-gray-600">Integrated Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                180+
              </div>
              <div className="text-gray-600">Secured Sites</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                172
              </div>
              <div className="text-gray-600">Industry Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-gray-600">Uptime Record</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section id="platforms" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Platform Portfolio</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Each platform serves a specific security need while seamlessly integrating with the broader YUBIX ecosystem 
              to provide comprehensive protection and communication solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {platforms.map((platform, index) => (
              <div key={platform.id} className="flex">
                <PlatformCard platform={platform} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Matrix */}
      <section className="py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Integration Capabilities</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our platforms are designed to work together seamlessly, creating a unified security ecosystem 
              that adapts to your organization&apos;s specific needs.
            </p>
          </div>
          
          <IntegrationMatrix />
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Platform Comparison</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Compare features, capabilities, and target audiences across our entire platform portfolio 
              to find the perfect solution for your security requirements.
            </p>
          </div>
          
          <ComparisonTable />
        </div>
      </section>

      <CallToActionSection 
        title="Ready to Build"
        subtitle="Your Complete Security Ecosystem?"
        description="Discover how our 6 integrated platforms work together to create a comprehensive security solution tailored to your organization's unique needs."
        primaryButtonText="Explore the Ecosystem"
        primaryButtonHref="/contact"
        secondaryButtonText="View Platform Details"
        secondaryButtonHref="#platforms"
        stats={[
          { value: "180+", label: "Secured Sites" },
          { value: "172", label: "Industry Sectors" },
          { value: "24/7", label: "Expert Support" }
        ]}
      />
    </div>
  );
}
