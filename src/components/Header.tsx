'use client'

import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { 
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  CogIcon,
  RocketLaunchIcon,
  PhoneIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  ChartBarIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  EyeIcon,
  AcademicCapIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  BeakerIcon,
  CpuChipIcon,
  MagnifyingGlassIcon,
  PresentationChartLineIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline'

interface MenuDropdownLink {
  name: string;
  href: string;
  description?: string;
  icon?: React.ElementType;
}

interface MenuDropdownSection {
  title: string;
  links: MenuDropdownLink[];
}

interface MenuDropdown {
  sections: MenuDropdownSection[];
}

interface MenuItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ElementType;
  dropdown?: MenuDropdown | null;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [showMoreMenu, setShowMoreMenu] = useState(false)
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()
  const headerRef = useRef<HTMLElement>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
    setShowMoreMenu(false)
    setExpandedMobileMenu(null)
  }, [pathname])

  // Force clear mobile menu after navigation
  useEffect(() => {
    if (pathname) {
      // Extra safety to ensure mobile menu is closed after any navigation
      const timer = setTimeout(() => {
        setIsMenuOpen(false)
        setExpandedMobileMenu(null)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [pathname])

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
        setShowMoreMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Function to check if a menu item is active
  const isMenuItemActive = (item: MenuItem) => {
    if (item.href === '/' && pathname === '/') return true
    if (item.href !== '/' && pathname.startsWith(item.href)) return true
    
    // Check if any dropdown link is active
    if (item.dropdown) {
      return item.dropdown.sections.some(section =>
        section.links.some(link => 
          link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
        )
      )
    }
    
    return false
  }

  const toggleMobileSubmenu = (itemName: string) => {
    setExpandedMobileMenu(prev => prev === itemName ? null : itemName)
  }

  // Primary navigation items (always visible on desktop)
  const primaryMenuItems = [
    {
      name: 'Home',
      href: '/',
      description: 'Welcome to YUBIX',
      icon: HomeIcon,
      dropdown: null
    },
    {
      name: 'About',
      href: '/about',
      description: 'Learn about our company',
      icon: UserGroupIcon,
      dropdown: {
        sections: [
          {
            title: 'Company',
            links: [
              { name: 'About Us', href: '/about', description: 'Our story and mission', icon: InformationCircleIcon },
              { name: 'Mission & Vision', href: '/about#mission', description: 'Our core values', icon: EyeIcon },
              { name: 'Leadership Team', href: '/about#leadership', description: 'Meet our executives', icon: UserGroupIcon },
              { name: 'Company Timeline', href: '/about#timeline', description: 'Our journey so far', icon: ClockIcon }
            ]
          },
          {
            title: 'Trust & Security',
            links: [
              { name: 'ISO Certifications', href: '/about#certifications', description: 'Industry standards', icon: DocumentTextIcon },
              { name: 'Our Values', href: '/about#mission', description: 'What drives us', icon: ShieldCheckIcon },
              { name: 'Global Presence', href: '/about#certifications', description: 'Worldwide reach', icon: GlobeAltIcon },
              { name: 'Contact Us', href: '/contact', description: 'Get in touch', icon: PhoneIcon }
            ]
          }
        ]
      }
    },
    {
      name: 'Services',
      href: '/services',
      description: 'Professional security services',
      icon: CogIcon,
      dropdown: {
        sections: [
          {
            title: 'Our Services',
            links: [
              { name: 'Cybersecurity Solutions', href: '/services', description: 'Comprehensive security', icon: ShieldCheckIcon },
              { name: 'Risk Assessment', href: '/services#risk-assessment', description: 'Evaluate your risks', icon: ExclamationTriangleIcon },
              { name: 'Compliance Management', href: '/services#compliance', description: 'Meet regulations', icon: DocumentTextIcon },
              { name: 'Security Training', href: '/services#training', description: 'Educate your team', icon: AcademicCapIcon }
            ]
          },
          {
            title: 'Support & Maintenance',
            links: [
              { name: '24/7 Support', href: '/services#support', description: 'Round-the-clock help', icon: ClockIcon },
              { name: 'Managed Services', href: '/services#managed', description: 'Outsourced security', icon: CogIcon },
              { name: 'Emergency Response', href: '/services#emergency', description: 'Incident management', icon: ExclamationTriangleIcon },
              { name: 'System Updates', href: '/services#updates', description: 'Keep systems current', icon: CpuChipIcon }
            ]
          }
        ]
      }
    },
    {
      name: 'Ops-room',
      href: '/ops-room',
      description: 'Operations control center',
      icon: CommandLineIcon,
      dropdown: null
    },
    {
      name: 'Contact',
      href: '/contact',
      description: 'Get in touch with us',
      icon: PhoneIcon,
      dropdown: {
        sections: [
          {
            title: 'Get in Touch',
            links: [
              { name: 'General Inquiry', href: '/contact', description: 'Ask us anything', icon: InformationCircleIcon },
              { name: 'Phone & Email', href: '/contact#direct', description: 'Direct contact', icon: PhoneIcon },
              { name: 'Sales Inquiry', href: '/contact#sales', description: 'Purchase information', icon: ChartBarIcon }
            ]
          },
          {
            title: 'Book Consultation',
            links: [
              { name: 'Free Assessment', href: '/contact#assessment', description: 'Security evaluation', icon: MagnifyingGlassIcon },
              { name: 'Demo Request', href: '/contact#demo', description: 'See our solutions', icon: PresentationChartLineIcon },
              { name: 'Custom Solution', href: '/contact#custom', description: 'Tailored approach', icon: CogIcon },
              { name: 'Enterprise Meeting', href: '/contact#enterprise', description: 'Large-scale solutions', icon: BuildingOfficeIcon }
            ]
          }
        ]
      }
    }
  ]

  // Secondary navigation items (moved to hamburger menu on desktop)
  const secondaryMenuItems = [
    {
      name: 'Ecosystem',
      href: '/ecosystem',
      description: 'Partner network',
      icon: GlobeAltIcon,
      dropdown: {
        sections: [
          {
            title: 'Platforms',
            links: [
              { name: 'Vertex Pro', href: '#', description: 'Advanced security platform', icon: ShieldCheckIcon },
              { name: 'Buzz World', href: '#', description: 'Communication hub', icon: GlobeAltIcon },
              { name: 'BYONN', href: '#', description: 'Network solutions', icon: CpuChipIcon },
              { name: 'Fortalyx', href: '#', description: 'Defense systems', icon: ExclamationTriangleIcon },
              { name: 'Security Hub', href: '#', description: 'Centralized control', icon: CogIcon }
            ]
          }
        ]
      }
    },
    {
      name: 'Operations',
      href: '/operations',
      description: 'Operational excellence',
      icon: CogIcon,
      dropdown: null
    },
    {
      name: 'Industries',
      href: '/industries',
      description: 'Industry solutions',
      icon: BuildingOfficeIcon,
      dropdown: null
    },
    {
      name: 'Products',
      href: '/products',
      description: 'Our product lineup',
      icon: ShieldCheckIcon,
      dropdown: null
    },
    {
      name: 'Resilience',
      href: '/resilience',
      description: 'Business continuity',
      icon: ShieldCheckIcon,
      dropdown: null
    },
    {
      name: 'Innovation',
      href: '/innovation',
      description: 'Cutting-edge technology',
      icon: RocketLaunchIcon,
      dropdown: {
        sections: [
          {
            title: 'Research & Development',
            links: [
              { name: 'AI Research', href: '/innovation#ai-research', description: 'Artificial intelligence', icon: CpuChipIcon },
              { name: 'Emerging Threats', href: '/innovation#emerging-threats', description: 'Future security risks', icon: ExclamationTriangleIcon },
              { name: 'Future Technologies', href: '/innovation#future-tech', description: 'Next-gen solutions', icon: RocketLaunchIcon },
              { name: 'Research Papers', href: '/innovation#research-papers', description: 'Published research', icon: DocumentTextIcon }
            ]
          },
          {
            title: 'Experimental Solutions',
            links: [
              { name: 'Beta Programs', href: '/innovation#beta-programs', description: 'Early access testing', icon: BeakerIcon },
              { name: 'Proof of Concepts', href: '/innovation#proof-of-concepts', description: 'Prototype solutions', icon: PresentationChartLineIcon },
              { name: 'Tech Previews', href: '/innovation#tech-previews', description: 'Coming soon features', icon: EyeIcon },
              { name: 'Innovation Lab', href: '/innovation#innovation-lab', description: 'R&D facility', icon: BuildingOfficeIcon }
            ]
          }
        ]
      }
    },
    {
      name: 'Investors',
      href: '/investors',
      description: 'Investor relations',
      icon: ChartBarIcon,
      dropdown: null
    },
    {
      name: 'Careers',
      href: '/careers',
      description: 'Join our team',
      icon: BriefcaseIcon,
      dropdown: null
    },
    {
      name: 'Certifications',
      href: '/certifications',
      description: 'Industry certifications',
      icon: DocumentTextIcon,
      dropdown: {
        sections: [
          {
            title: 'Our Certifications',
            links: [
              { name: 'ISO 27001', href: '/certifications#iso27001', description: 'Information security standard', icon: DocumentTextIcon },
              { name: 'SOC 2 Type II', href: '/certifications#soc2', description: 'Service organization controls', icon: ShieldCheckIcon },
              { name: 'Industry Standards', href: '/certifications#standards', description: 'Compliance frameworks', icon: ChartBarIcon },
              { name: 'Partnership Benefits', href: '/certifications#benefits', description: 'Partner advantages', icon: UserGroupIcon },
              { name: 'Application Process', href: '/certifications#application', description: 'How to apply', icon: InformationCircleIcon }
            ]
          }
        ]
      }
    }
  ]

  return (
    <header ref={headerRef} className="relative">
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                YUBIX
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Primary Menu Items */}
              {primaryMenuItems.map((item, index) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => {
                      if (item.dropdown) {
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        setShowMoreMenu(false)
                      } else {
                        window.location.href = item.href
                      }
                    }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isMenuItemActive(item)
                        ? 'text-blue-600 bg-blue-50'
                        : `${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'} hover:bg-gray-50`
                    }`}
                  >
                    {item.icon && (
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                        isMenuItemActive(item)
                          ? 'bg-blue-100'
                          : 'bg-gray-100'
                      }`}>
                        {React.createElement(item.icon, { className: "w-3 h-3" })}
                      </div>
                    )}
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {/* Mega Menu Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className={`absolute top-full mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 ${
                      // Automatic positioning based on menu position
                      index >= primaryMenuItems.length - 1 
                        ? 'right-0' 
                        : index === 0 
                        ? 'left-0'
                        : 'left-1/2 transform -translate-x-1/2'
                    }`}>
                      <div className="p-8">
                        {/* Header */}
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                        
                        {/* Sections - Consistent 2-column layout for all menus */}
                        <div className="grid grid-cols-2 gap-8">
                          {item.dropdown.sections.map((section) => (
                            <div key={section.title}>
                              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                                {section.title}
                              </h4>
                              <div className="space-y-3">
                                {section.links.map((link) => (
                                  <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100">
                                      {link.icon && React.createElement(link.icon, { className: "w-4 h-4" })}
                                    </span>
                                    <div>
                                      <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                        {link.name}
                                      </div>
                                      {link.description && (
                                        <div className="text-sm text-gray-500">{link.description}</div>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* More Button */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowMoreMenu(!showMoreMenu)
                    setActiveDropdown(null)
                  }}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    showMoreMenu
                      ? 'text-blue-600 bg-blue-50'
                      : `${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'} hover:bg-gray-50`
                  }`}
                >
                  <span>More</span>
                  <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${
                    showMoreMenu ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* More Menu Dropdown */}
                {showMoreMenu && (
                  <div className="absolute top-full right-0 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                    <div className="p-8">
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">More</h3>
                        <p className="text-gray-600">Additional pages and resources</p>
                      </div>
                      
                      {/* Horizontal grid layout for all items */}
                      <div className="grid grid-cols-3 gap-4">
                        {secondaryMenuItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center space-x-3 p-4 rounded-lg transition-colors duration-200 group ${
                              isMenuItemActive(item)
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                            onClick={() => setShowMoreMenu(false)}
                          >
                            <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                              isMenuItemActive(item)
                                ? 'bg-blue-100'
                                : 'bg-gray-100 group-hover:bg-blue-50'
                            }`}>
                              {item.icon && React.createElement(item.icon, { 
                                className: `w-4 h-4 ${isMenuItemActive(item) ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-600'}` 
                              })}
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className={`font-medium transition-colors duration-200 ${
                                isMenuItemActive(item) ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'
                              }`}>
                                {item.name}
                              </div>
                              {item.description && (
                                <div className="text-sm text-gray-500 mt-1 leading-tight">{item.description}</div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Slider Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                YUBIX
              </h2>
              <p className="text-xs text-gray-500">Security Ecosystem</p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsMenuOpen(false)
              setExpandedMobileMenu(null)
            }}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="overflow-y-auto h-full pb-20">
          <div className="p-4 space-y-2">
            {/* Primary Menu Items */}
            {primaryMenuItems.map((item) => (
              <div key={item.name} className="space-y-1">
                {/* Main Menu Item */}
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className={`flex items-center flex-1 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isMenuItemActive(item)
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 shadow-sm'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMenuOpen(false)
                      setExpandedMobileMenu(null)
                      setTimeout(() => {
                        router.push(item.href)
                      }, 150)
                    }}
                  >
                    <div className="flex items-center flex-1">
                      {item.icon && (
                        <div className={`mr-4 w-8 h-8 rounded-lg flex items-center justify-center ${
                          isMenuItemActive(item)
                            ? 'bg-blue-100'
                            : 'bg-gray-100'
                        }`}>
                          {React.createElement(item.icon, { className: "w-4 h-4" })}
                        </div>
                      )}
                      <div>
                        <div className="font-semibold">{item.name}</div>
                        {item.description && (
                          <div className="text-sm text-gray-500">{item.description}</div>
                        )}
                      </div>
                    </div>
                  </Link>
                  {/* Dropdown Toggle Button */}
                  {item.dropdown && (
                    <button
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="ml-2 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${
                        expandedMobileMenu === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  )}
                </div>

                {/* Collapsible Submenu */}
                {item.dropdown && expandedMobileMenu === item.name && (
                  <div className="ml-4 mt-2 space-y-1 overflow-hidden">
                    {item.dropdown.sections.map((section) => (
                      <div key={section.title} className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2 px-4">{section.title}</h4>
                        <div className="space-y-1">
                          {section.links.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="flex items-center px-4 py-3 ml-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 border-l-2 border-gray-100 hover:border-blue-300"
                              onClick={(e) => {
                                e.preventDefault()
                                setIsMenuOpen(false)
                                setExpandedMobileMenu(null)
                                // Small delay to ensure overlay clears before navigation
                                setTimeout(() => {
                                  router.push(link.href)
                                }, 150)
                              }}
                            >
                              {link.icon && (
                                <div className="mr-3 w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                                  {React.createElement(link.icon, { className: "w-3 h-3" })}
                                </div>
                              )}
                              <div>
                                <div className="font-medium text-gray-900 text-sm">{link.name}</div>
                                {link.description && (
                                  <div className="text-xs text-gray-500">{link.description}</div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Divider */}
            <div className="my-6 border-t border-gray-200"></div>

            {/* Secondary Menu Items */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3 px-4">
                More Resources
              </h3>
              <div className="space-y-1">
                {secondaryMenuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                      isMenuItemActive(item)
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMenuOpen(false)
                      setExpandedMobileMenu(null)
                      setTimeout(() => {
                        router.push(item.href)
                      }, 150)
                    }}
                  >
                    <div className="flex items-center">
                      {item.icon && (
                        <div className={`mr-4 w-8 h-8 rounded-lg flex items-center justify-center ${
                          isMenuItemActive(item)
                            ? 'bg-blue-100'
                            : 'bg-gray-100'
                        }`}>
                          {React.createElement(item.icon, { className: "w-4 h-4" })}
                        </div>
                      )}
                      <div>
                        <div className="font-semibold">{item.name}</div>
                        {item.description && (
                          <div className="text-sm text-gray-500">{item.description}</div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40"
          onClick={() => {
            setIsMenuOpen(false)
            setExpandedMobileMenu(null)
          }}
        />
      )}

      {/* Overlay for desktop dropdowns */}
      {(activeDropdown || showMoreMenu) && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => {
            setActiveDropdown(null)
            setShowMoreMenu(false)
          }}
        />
      )}
    </header>
  )
}
