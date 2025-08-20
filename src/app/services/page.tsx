'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import CallToActionSection from '@/components/CallToActionSection';

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

// Service data
const services = [
  {
    id: 'security-advisory',
    title: 'Advanced Security Advisory',
    subtitle: 'Strategic Security Consultation',
    description: 'Comprehensive security assessments and strategic planning tailored to your organizational needs.',
    icon: '🛡️',
    color: 'from-blue-600 to-cyan-600',
    features: [
      'Threat landscape analysis',
      'Vulnerability assessments',
      'Security policy development',
      'Compliance frameworks',
      'Risk management strategies',
      'Incident response planning'
    ],
    deliverables: [
      'Comprehensive security audit report',
      'Custom security framework',
      'Implementation roadmap',
      'Policy documentation'
    ],
    duration: '4-12 weeks',
    price: 'From $15,000'
  },
  {
    id: 'custom-development',
    title: 'Custom Feature Development',
    subtitle: 'Tailored Security Solutions',
    description: 'Bespoke security features and integrations designed specifically for your platform requirements.',
    icon: '⚙️',
    color: 'from-purple-600 to-pink-600',
    features: [
      'Custom API integrations',
      'Platform-specific modules',
      'Third-party connectors',
      'Automated workflows',
      'Advanced analytics',
      'Real-time monitoring'
    ],
    deliverables: [
      'Custom feature modules',
      'Integration documentation',
      'Testing suite',
      'Deployment guide'
    ],
    duration: '6-16 weeks',
    price: 'From $25,000'
  },
  {
    id: 'ai-integration',
    title: 'AI Module Integration',
    subtitle: 'Human First. AI Enhanced',
    description: 'Advanced AI capabilities seamlessly integrated into your existing security infrastructure.',
    icon: '🤖',
    color: 'from-green-600 to-emerald-600',
    features: [
      'Threat pattern recognition',
      'Predictive analytics',
      'Automated response systems',
      'Natural language processing',
      'Behavioral analysis',
      'Machine learning models'
    ],
    deliverables: [
      'AI module implementation',
      'Training data sets',
      'Performance metrics',
      'Continuous learning setup'
    ],
    duration: '8-20 weeks',
    price: 'From $40,000'
  },
  {
    id: 'simulations-drills',
    title: 'Simulations & Drills',
    subtitle: 'Practical Security Training',
    description: 'Realistic security simulations and emergency response drills to test and improve readiness.',
    icon: '🎯',
    color: 'from-orange-600 to-red-600',
    features: [
      'Cyber attack simulations',
      'Emergency response drills',
      'Tabletop exercises',
      'Red team assessments',
      'Crisis management scenarios',
      'Performance evaluation'
    ],
    deliverables: [
      'Simulation reports',
      'Performance analytics',
      'Improvement recommendations',
      'Training materials'
    ],
    duration: '2-8 weeks',
    price: 'From $8,000'
  },
  {
    id: 'executive-training',
    title: 'Executive Training',
    subtitle: 'Leadership Security Awareness',
    description: 'Specialized training programs for executives and senior leadership teams.',
    icon: '🎓',
    color: 'from-indigo-600 to-purple-600',
    features: [
      'Executive briefings',
      'Board-level presentations',
      'Strategic decision making',
      'Crisis leadership',
      'Regulatory compliance',
      'Industry best practices'
    ],
    deliverables: [
      'Training curriculum',
      'Executive playbooks',
      'Decision frameworks',
      'Certification programs'
    ],
    duration: '1-4 weeks',
    price: 'From $12,000'
  }
];

// Service packages
const packages = [
  {
    name: 'Starter',
    price: '$5,000',
    period: '/month',
    description: 'Essential security services for small organizations',
    features: [
      'Basic security assessment',
      'Monthly vulnerability scans',
      'Email support',
      'Standard documentation',
      'Basic training materials'
    ],
    color: 'from-blue-600 to-cyan-600',
    popular: false
  },
  {
    name: 'Professional',
    price: '$15,000',
    period: '/month',
    description: 'Comprehensive security solutions for growing businesses',
    features: [
      'Advanced security advisory',
      'Custom feature development',
      'Priority support',
      'Quarterly reviews',
      'Executive briefings',
      'Compliance assistance'
    ],
    color: 'from-purple-600 to-pink-600',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Full-scale security ecosystem for large organizations',
    features: [
      'Complete platform integration',
      'AI module implementation',
      'Dedicated support team',
      'Custom simulations',
      'Executive training programs',
      '24/7 monitoring'
    ],
    color: 'from-orange-600 to-red-600',
    popular: false
  }
];

// Case studies
const caseStudies = [
  {
    title: 'Global Aviation Security',
    client: 'International Airport Authority',
    challenge: 'Modernize security infrastructure across 180+ facilities',
    solution: 'Implemented Vertex Pro with custom AI modules and integrated training programs',
    results: [
      '99.8% threat detection accuracy',
      '40% reduction in false alarms',
      '$2.5M annual cost savings',
      '100% regulatory compliance'
    ],
    metrics: {
      facilities: '180+',
      uptime: '99.9%',
      response: '<30s'
    },
    industry: 'Aviation',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Smart City Communication',
    client: 'Metropolitan City Government',
    challenge: 'Secure communication platform for 500+ departments',
    solution: 'Deployed Buzz World with custom workflows and executive training',
    results: [
      '500+ departments connected',
      '95% user adoption rate',
      '60% faster emergency response',
      'Zero security incidents'
    ],
    metrics: {
      users: '50K+',
      departments: '500+',
      messages: '1M+'
    },
    industry: 'Government',
    color: 'from-green-600 to-emerald-600'
  },
  {
    title: 'Financial Institution Security',
    client: 'Major Banking Group',
    challenge: 'Advanced threat protection and compliance management',
    solution: 'Full YUBIX ecosystem deployment with AI integration',
    results: [
      '100% regulatory compliance',
      '50% reduction in security incidents',
      '$5M prevented fraud losses',
      'Enhanced customer trust'
    ],
    metrics: {
      branches: '1200+',
      transactions: '50M+',
      compliance: '100%'
    },
    industry: 'Financial',
    color: 'from-purple-600 to-pink-600'
  }
];

// Service Card Component
const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      id={service.id}
      ref={ref}
      className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-100/50 overflow-hidden transition-all duration-700 ease-out ${
        isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      } ${isHovered ? 'scale-[1.02] shadow-2xl shadow-gray-900/10 z-10 border-gray-200/60' : 'scale-100 z-0 hover:shadow-xl shadow-gray-900/5'}`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        minHeight: '460px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Modern Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} transition-all duration-700 ${
        isHovered ? 'opacity-8' : 'opacity-0'
      }`} />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)] opacity-60" />
      
      {/* Card Content */}
      <div className="relative h-full flex flex-col p-8">
        {/* Header Section */}
        <div className="flex-shrink-0 mb-6">
          {/* Icon & Badge Row */}
          <div className="flex items-start justify-between mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl shadow-lg transition-transform duration-500 ${
              isHovered ? 'scale-110 rotate-3' : 'scale-100'
            }`}>
              {service.icon}
            </div>
            <div className={`px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r ${service.color} text-white shadow-lg backdrop-blur-sm transition-all duration-500 ${
              isHovered ? 'scale-105 shadow-xl' : 'scale-100'
            }`}>
              {service.duration}
            </div>
          </div>
          
          {/* Title & Subtitle */}
          <div className="space-y-3 mb-4">
            <h3 className="text-2xl font-bold text-gray-900 leading-tight transition-colors duration-300 group-hover:text-gray-800">
              {service.title}
            </h3>
            <p className="text-base font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
              {service.subtitle}
            </p>
          </div>
          
          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-sm transition-colors duration-300 group-hover:text-gray-800">
            {service.description}
          </p>
        </div>

        {/* Features - Modern Expandable Section */}
        <div className={`transition-all duration-500 ease-out overflow-hidden ${
          isHovered ? 'max-h-80 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'
        }`}>
          <div className="border-t border-gray-200/60 pt-6 space-y-6">
            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-6">
              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} shadow-sm`} />
                  Key Features
                </h4>
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 transition-all duration-300 hover:text-gray-900">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0 shadow-sm`} />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Deliverables */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-sm" />
                  Deliverables
                </h4>
                <div className="space-y-2">
                  {service.deliverables.slice(0, 3).map((deliverable, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 transition-all duration-300 hover:text-gray-900">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mt-2 flex-shrink-0 shadow-sm" />
                      <span className="leading-relaxed">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Footer Section */}
        <div className="flex-shrink-0 pt-6 border-t border-gray-100/60">
          <div className="flex items-center justify-between">
            {/* Pricing */}
            <div className="space-y-1">
              <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent transition-all duration-300`}>
                {service.price}
              </div>
              <div className="text-xs text-gray-500 font-medium">Starting price</div>
            </div>
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className={`group/btn relative inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r ${service.color} text-white font-semibold text-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform overflow-hidden`}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-0.5">
                Get Started
              </span>
              <svg className="w-4 h-4 ml-2 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              
              {/* Button Hover Effect */}
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left rounded-2xl" />
              
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Package Card Component
const PackageCard = ({ pkg }: { pkg: typeof packages[0] }) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border ${
      pkg.popular ? 'border-violet-200 shadow-violet-100' : 'border-gray-100'
    } ${pkg.popular ? 'mt-6' : 'mt-0'}`}>
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border-2 border-white">
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span>Most Popular</span>
            </div>
          </div>
        </div>
      )}
      
      <div className={`p-6 ${pkg.popular ? 'pt-12' : 'pt-6'}`}>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{pkg.name}</h3>
          <div className="mb-3">
            <span className={`text-3xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
              {pkg.price}
            </span>
            <span className="text-gray-500 text-sm ml-1">{pkg.period}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{pkg.description}</p>
        </div>
        
        <ul className="space-y-2.5 mb-6">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-gray-600 text-sm">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link
          href="/contact"
          className={`w-full inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gradient-to-r ${pkg.color} text-white font-medium hover:opacity-90 transition-opacity duration-200`}
        >
          Choose Plan
        </Link>
      </div>
    </div>
  );
};

// Case Study Card Component
const CaseStudyCard = ({ study }: { study: typeof caseStudies[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-100/50 overflow-hidden transition-all duration-700 ease-out ${
        isHovered ? 'scale-[1.02] shadow-2xl shadow-gray-900/15 z-10 border-gray-200/60' : 'scale-100 z-0 hover:shadow-xl shadow-gray-900/8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Modern Top Accent with Animation */}
      <div className={`h-1 bg-gradient-to-r ${study.color} transform transition-all duration-500 ${
        isHovered ? 'h-2' : 'h-1'
      }`} />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.05),transparent)] opacity-60" />
      
      <div className="relative p-8">
        {/* Header Section */}
        <div className="space-y-4 mb-6">
          {/* Industry Badge */}
          <div className="flex justify-start">
            <div className={`px-4 py-2 rounded-2xl text-sm font-semibold bg-gradient-to-r ${study.color} text-white shadow-lg transition-all duration-500 ${
              isHovered ? 'scale-105 shadow-xl' : 'scale-100'
            }`}>
              {study.industry}
            </div>
          </div>
          
          {/* Metrics Grid */}
          <div className="flex gap-4 justify-end">
            {Object.entries(study.metrics).map(([key, value]) => (
              <div key={key} className="text-center group-hover:scale-105 transition-transform duration-300">
                <div className={`text-lg font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent transition-all duration-300`}>
                  {value}
                </div>
                <div className="text-xs text-gray-500 font-medium capitalize tracking-wide">{key}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Title & Client */}
        <div className="mb-6 space-y-3">
          <h3 className="text-2xl font-bold text-gray-900 leading-tight transition-colors duration-300 group-hover:text-gray-800">
            {study.title}
          </h3>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${study.color} opacity-60`} />
            <p className="text-gray-600 font-medium transition-colors duration-300 group-hover:text-gray-700">
              {study.client}
            </p>
          </div>
        </div>
        
        {/* Challenge & Solution Grid */}
        <div className="space-y-6 mb-6">
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500" />
              Challenge
            </h4>
            <p className="text-gray-700 leading-relaxed text-sm bg-gray-50/50 p-4 rounded-2xl border border-gray-100/60 transition-all duration-300 group-hover:bg-gray-50/80">
              {study.challenge}
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${study.color}`} />
              Solution
            </h4>
            <p className="text-gray-700 leading-relaxed text-sm bg-gray-50/50 p-4 rounded-2xl border border-gray-100/60 transition-all duration-300 group-hover:bg-gray-50/80">
              {study.solution}
            </p>
          </div>
        </div>
        
        {/* Expandable Results Section */}
        <div className={`transition-all duration-500 ease-out overflow-hidden ${
          isExpanded ? 'max-h-80 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'
        }`}>
          <div className="border-t border-gray-200/60 pt-6">
            <h4 className="font-semibold text-gray-900 mb-4 text-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
              Key Results & Impact
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {study.results.map((result, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-green-50/50 to-emerald-50/50 border border-green-100/40 transition-all duration-300 hover:from-green-50/80 hover:to-emerald-50/80"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mt-2 flex-shrink-0 shadow-sm" />
                  <span className="text-gray-700 text-sm leading-relaxed">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Modern Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`group/btn relative w-full px-6 py-4 rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
            isExpanded
              ? `border-transparent bg-gradient-to-r ${study.color} text-white shadow-lg`
              : `border-gray-200 text-gray-700 hover:border-gray-300 bg-white/80 hover:bg-white backdrop-blur-sm`
          }`}
        >
          <span className="relative z-10 font-semibold text-sm transition-transform duration-300 group-hover/btn:translate-y-0">
            {isExpanded ? 'Hide Results' : 'View Impact & Results'}
          </span>
          
          {/* Button Icon */}
          <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          {/* Hover Effect for Non-Expanded State */}
          {!isExpanded && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left rounded-2xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const { ref: heroRef, isIntersecting: heroInView } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Background Elements */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-0 lg:px-2 py-8 sm:py-12">
          <div className={`text-center transition-all duration-1000 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-xl px-10 py-5 rounded-2xl border border-white/30 shadow-2xl">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-bold uppercase tracking-wider">Professional Services</span>
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              <span className="block text-white mb-3 drop-shadow-2xl">
                Expert
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl pb-2">
                Security Services
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent pb-2">
                Tailored Solutions for Every Need
              </span>
            </h1>

            {/* Enhanced Description */}
            <div className="mb-8">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
                <span className="text-blue-300 font-semibold">Strategic Advisory</span>
                <span className="text-gray-400 mx-3">•</span>
                <span className="text-purple-300 font-semibold">Custom Development</span>
                <span className="text-gray-400 mx-3">•</span>
                <span className="text-cyan-300 font-semibold">Expert Training</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link
                href="#services"
                className="group relative inline-flex items-center px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                <div className="relative flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Explore Services</span>
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </Link>

              <Link
                href="/contact"
                className="group relative inline-flex items-center px-10 py-5 rounded-2xl border-2 border-white/30 text-white font-bold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                <div className="relative flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Schedule Consultation</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-slate-50" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              🛡️ Expert Services
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive security solutions designed to protect, enhance, and optimize your organization&apos;s digital infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
            {services.map((service, index) => (
              <div key={service.id} className="flex">
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="packages" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              💰 Pricing Plans
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Packages & Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect service package that fits your organization&apos;s needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-32 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-1/4 w-72 h-72 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Redesigned Section Header */}
          <div className="text-center mb-20">
            {/* Clean Status Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-700 font-semibold text-sm">Live Results</span>
              </div>
              <div className="w-px h-4 bg-emerald-300" />
              <span className="text-emerald-600 text-sm font-medium">Updated Real-Time</span>
            </div>
            
            {/* Modern Heading */}
            <div className="space-y-4 mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Real Impact,
              </h2>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Proven Results
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover how our expert security services have transformed operations and delivered measurable value 
              for organizations across industries worldwide.
            </p>
            
            {/* Redesigned Metrics Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    100<span className="text-blue-600">+</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
                  <div className="mt-2 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>
              
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    98<span className="text-green-600">%</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                  <div className="mt-2 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" style={{ width: '98%' }} />
                  </div>
                </div>
              </div>
              
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    $50<span className="text-purple-600">M+</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Risk Prevented</div>
                  <div className="mt-2 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ width: '87%' }} />
                  </div>
                </div>
              </div>
              
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    24<span className="text-orange-600">/7</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Support Coverage</div>
                  <div className="mt-2 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={study.title} className="flex" style={{ animationDelay: `${index * 200}ms` }}>
                <CaseStudyCard study={study} />
              </div>
            ))}
          </div>
          
          {/* Modern Bottom CTA */}
          <div className="text-center mt-20">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform overflow-hidden"
              >
                <span className="relative z-10">Start Your Success Story</span>
                <svg className="w-5 h-5 ml-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <div className="text-sm text-gray-500">
                <span className="font-medium">Free consultation</span> • No commitment required
              </div>
            </div>
          </div>
        </div>
      </section>


      <CallToActionSection 
        title="Ready to Enhance"
        subtitle="Your Security Operations?"
        description="From strategic advisory to custom development, our expert services team delivers tailored solutions that strengthen your security posture and accelerate your digital transformation."
        primaryButtonText="Start Your Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View Case Studies"
        secondaryButtonHref="/about"
        stats={[
          { value: "100+", label: "Projects Delivered" },
          { value: "95%", label: "Client Satisfaction" },
          { value: "24/7", label: "Project Support" }
        ]}
      />
    </div>
  );
}