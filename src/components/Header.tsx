'use client'

import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'

interface MenuDropdownLink {
  name: string;
  href: string;
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
  dropdown?: MenuDropdown | null;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const [headerHeight, setHeaderHeight] = useState(64)
  const [lastScrollY, setLastScrollY] = useState(0)
  const headerRef = useRef<HTMLElement>(null)
  const menuItemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const pathname = usePathname()

  // Function to check if a menu item is active
  const isMenuItemActive = (item: MenuItem) => {
    // Direct path match
    if (pathname === item.href) {
      return true
    }
    
    // Check dropdown links for active state
    if (item.dropdown) {
      for (const section of item.dropdown.sections) {
        for (const link of section.links) {
          // Extract the base path from the link (remove anchor)
          const linkPath = link.href.split('#')[0]
          
          // Special handling: Only consider dropdown link matches if this menu item
          // is the primary owner of that path (i.e., its main href matches the linkPath)
          if (linkPath && pathname === linkPath && item.href === linkPath) {
            return true
          }
        }
      }
    }
    
    return false
  }

  // Function to check if a specific dropdown link is active
  const isDropdownLinkActive = (linkHref: string) => {
    if (linkHref.includes('#')) {
      const linkPath = linkHref.split('#')[0]
      return pathname === linkPath
    }
    return pathname === linkHref
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  // Handle smooth scrolling with header offset
  const handleAnchorClick = (href: string) => {
    // Close dropdown/menu first
    setActiveDropdown(null)
    setIsMenuOpen(false)
    
    // If it's an anchor link to the current page or another page
    if (href.includes('#')) {
      const [path, hash] = href.split('#')
      const isCurrentPage = path === '' || path === window.location.pathname
      
      if (isCurrentPage) {
        // Same page - smooth scroll to element
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            const headerOffset = headerHeight + 20 // Add some padding
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerOffset
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
        return false // Prevent default navigation
      }
    }
    return true // Allow default navigation
  }

  const handleMouseEnter = (itemName: string) => {
    // Clear any existing timeout immediately
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    // Always set the dropdown, even if it doesn't have one (will show nothing)
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    // Shorter delay for better UX
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
    setHoverTimeout(timeout)
  }

  const handleDropdownMouseEnter = () => {
    // Clear timeout immediately when entering dropdown
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
  }

  const handleDropdownMouseLeave = () => {
    // Shorter delay for dropdown as well
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
    setHoverTimeout(timeout)
  }

  // Handle scroll to auto-hide dropdowns
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Close dropdown when scrolling
      if (activeDropdown && Math.abs(currentScrollY - lastScrollY) > 5) {
        setActiveDropdown(null)
      }
      
      // Close mobile menu when scrolling
      if (isMenuOpen && Math.abs(currentScrollY - lastScrollY) > 10) {
        setIsMenuOpen(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeDropdown, isMenuOpen, lastScrollY])

  // Clear dropdown state when pathname changes
  useEffect(() => {
    setActiveDropdown(null)
    setIsMenuOpen(false)
  }, [pathname])

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          const headerOffset = headerHeight + 20
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - headerOffset
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 500) // Wait for page to fully load
    }
  }, [headerHeight])

  // Handle click outside and escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
        setIsMenuOpen(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null)
        setIsMenuOpen(false)
      }
    }

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
    }
  }, [hoverTimeout])

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
  }, [])

  const getDropdownPosition = useCallback((itemName: string, isLastTwo: boolean) => {
    const itemRef = menuItemRefs.current[itemName]
    if (!itemRef) return { left: '50%', transform: 'translateX(-50%)' }
    
    const rect = itemRef.getBoundingClientRect()
    if (isLastTwo) {
      return { right: window.innerWidth - rect.right + 'px' }
    } else {
      return { left: rect.left + rect.width / 2 + 'px', transform: 'translateX(-50%)' }
    }
  }, [])

  const setMenuItemRef = useCallback((itemName: string) => (el: HTMLDivElement | null) => {
    menuItemRefs.current[itemName] = el
  }, [])

  const menuItems = [
    {
      name: 'Home',
      href: '/',
      dropdown: null
    },
    {
      name: 'About',
      href: '/about',
      dropdown: {
        sections: [
          {
            title: 'Company',
            links: [
              { name: 'About Us', href: '/about' },
              { name: 'Mission & Vision', href: '/about#mission' },
              { name: 'Leadership Team', href: '/about#leadership' },
              { name: 'Company Timeline', href: '/about#timeline' }
            ]
          },
          {
            title: 'Trust & Security',
            links: [
              { name: 'ISO Certifications', href: '/about#certifications' },
              { name: 'Our Values', href: '/about#mission' },
              { name: 'Global Presence', href: '/about#certifications' },
              { name: 'Contact Us', href: '/contact' }
            ]
          }
        ]
      }
    },
    {
      name: 'Ecosystem',
      href: '/ecosystem',
      dropdown: {
        sections: [
          {
            title: 'Platforms',
            links: [
              { name: 'Vertex Pro', href: '#' },
              { name: 'Buzz World', href: '#' },
              { name: 'BYONN', href: '#' },
              { name: 'Fortalyx', href: '#' },
              { name: 'Security Hub', href: '#' }
            ]
          }
        ]
      }
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: {
        sections: [
          {
            title: 'Our Services',
            links: [
              { name: 'Security Advisory', href: '/services#security-advisory' },
              { name: 'Custom Development', href: '/services#custom-development' },
              { name: 'AI Integration', href: '/services#ai-integration' },
              { name: 'Training & Simulations', href: '/services#simulations-drills' },
              { name: 'All Services', href: '/services#services' }
            ]
          },
          {
            title: 'Resources',
            links: [
              { name: 'Service Packages', href: '/services#packages' },
              { name: 'Case Studies', href: '/services#case-studies' },
              { name: 'Get Quote', href: '/contact' },
              { name: 'Schedule Demo', href: '/contact' }
            ]
          }
        ]
      }
    },
    {
      name: 'Industries',
      href: '/industries',
      dropdown: {
        sections: [
          {
            title: 'Sectors We Serve',
            links: [
              { name: 'Aviation', href: '/industries#aviation' },
              { name: 'Corporate', href: '/industries#corporate' },
              { name: 'Government', href: '/industries#government' },
              { name: 'Healthcare', href: '/industries#healthcare' },
              { name: 'Education', href: '/industries#education' },
              { name: 'Hospitality', href: '/industries#hospitality' }
            ]
          }
        ]
      }
    },
    {
      name: 'Innovation',
      href: '/innovation',
      dropdown: {
        sections: [
          {
            title: 'Research & Development',
            links: [
              { name: 'AI Research', href: '/innovation#ai-research' },
              { name: 'Emerging Threats', href: '/innovation#emerging-threats' },
              { name: 'Future Technologies', href: '/innovation#future-tech' },
              { name: 'Research Papers', href: '/innovation#research-papers' }
            ]
          },
          {
            title: 'Experimental Solutions',
            links: [
              { name: 'Beta Programs', href: '/innovation#beta-programs' },
              { name: 'Proof of Concepts', href: '/innovation#proof-of-concepts' },
              { name: 'Innovation Partners', href: '/innovation#innovation-partners' },
              { name: 'Developer APIs', href: '/innovation#developer-apis' }
            ]
          }
        ]
      }
    },
    {
      name: 'Operations',
      href: '/operations',
      dropdown: {
        sections: [
          {
            title: 'Crisis Response',
            links: [
              { name: '24/7 SOC', href: '/operations#soc' },
              { name: 'Incident Response', href: '/operations#incident' },
              { name: 'Emergency Support', href: '/operations#emergency' },
              { name: 'Threat Intelligence', href: '/operations#intelligence' }
            ]
          },
          {
            title: 'Real-time Support',
            links: [
              { name: 'Live Monitoring', href: '/operations#monitoring' },
              { name: 'Rapid Response', href: '/operations#response' },
              { name: 'Status Dashboard', href: '/operations#status' },
              { name: 'Contact Operations', href: '/operations#contact-operations' }
            ]
          }
        ]
      }
    },
    {
      name: 'Certifications',
      href: '/certifications',
      dropdown: {
        sections: [
          {
            title: 'Certifications',
            links: [
              { name: 'ISO 27001', href: '/certifications#iso-27001' },
              { name: 'SOC 2 Type II', href: '/certifications#soc2' },
              { name: 'GDPR Compliance', href: '/certifications#gdpr' },
              { name: 'Industry Standards', href: '/certifications#standards' }
            ]
          },
          {
            title: 'Funding & Grants',
            links: [
              { name: 'Grant Opportunities', href: '/certifications#grants' },
              { name: 'Funding Programs', href: '/certifications#funding' },
              { name: 'Partnership Benefits', href: '/certifications#benefits' },
              { name: 'Application Process', href: '/certifications#application' }
            ]
          }
        ]
      }
    },
    {
      name: 'Contact',
      href: '/contact',
      dropdown: {
        sections: [
          {
            title: 'Get in Touch',
            links: [
              { name: 'Contact Form', href: '/contact#contact-form' },
              { name: 'Office Locations', href: '/contact#locations' },
              { name: 'Phone & Email', href: '/contact#direct' },
              { name: 'Sales Inquiry', href: '/contact#sales' }
            ]
          },
          {
            title: 'Book Consultation',
            links: [
              { name: 'Free Assessment', href: '/contact#assessment' },
              { name: 'Demo Request', href: '/contact#demo' },
              { name: 'Custom Solution', href: '/contact#custom' },
              { name: 'Enterprise Meeting', href: '/contact#enterprise' }
            ]
          }
        ]
      }
    }
  ]

  return (
    <header ref={headerRef} className="bg-white shadow-md sticky top-0 z-[99999] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
              YUBIX
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5 flex-1 justify-center">
            {menuItems.map((item, index) => {
              // Calculate positioning for the dropdown
              const isLastTwoItems = index >= menuItems.length - 2
              const dropdownPosition = getDropdownPosition(item.name, isLastTwoItems)
              
              return (
                <div
                  key={item.name}
                  className="relative"
                  ref={setMenuItemRef(item.name)}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`
                      px-3 py-2 transition-all duration-200 font-medium rounded-md 
                      flex items-center gap-1 whitespace-nowrap text-sm
                      ${isMenuItemActive(item) 
                        ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10 font-semibold' 
                        : activeDropdown === item.name 
                          ? 'text-[var(--color-primary)] bg-[var(--color-neutral-100)]'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-neutral-100)]'
                      }
                    `}
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div 
                      data-dropdown="mega-menu"
                      className={`fixed ${item.dropdown.sections.length > 1 ? 'w-[560px]' : 'w-[320px]'} bg-white border border-[var(--color-border-light)] rounded-xl shadow-2xl overflow-hidden`}
                      style={{ 
                        top: `${headerHeight + 8}px`,
                        zIndex: 999999,
                        ...dropdownPosition
                      }}
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      {/* Dropdown Header */}
                      <div className="bg-gradient-to-r from-[var(--color-neutral)] to-[var(--color-neutral-100)] px-6 py-4 border-b border-[var(--color-border-light)]">
                        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                          {item.name}
                        </h2>
                        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                          Explore our {item.name.toLowerCase()} offerings
                        </p>
                      </div>
                      
                      {/* Dropdown Content */}
                      <div className="p-6">
                        <div className={`grid gap-6 ${item.dropdown.sections.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                          {item.dropdown.sections.map((section) => (
                            <div key={section.title} className="space-y-3">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></div>
                                <h3 className="font-semibold text-[var(--color-text-primary)] text-sm uppercase tracking-wider">
                                  {section.title}
                                </h3>
                              </div>
                              <ul className="space-y-2 pl-4">
                                {section.links.map((link) => (
                                  <li key={link.name}>
                                    <Link
                                      href={link.href}
                                      className="group/link flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-all duration-200 py-2 px-3 rounded-lg hover:bg-[var(--color-neutral-100)]"
                                      onClick={(e) => {
                                        if (!handleAnchorClick(link.href)) {
                                          e.preventDefault()
                                        }
                                      }}
                                    >
                                      <svg 
                                        className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                      <span className="text-sm font-medium">{link.name}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        {/* Dropdown Footer */}
                        <div className="mt-6 pt-4 border-t border-[var(--color-border-light)]">
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-[var(--color-text-muted)]">
                              Need help? Contact our team
                            </p>
                            <Link
                              href="/contact"
                              className="text-xs font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              Get Support →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Right side items */}
          <div className="flex items-center gap-2">
            {/* CTA Button */}
            <div className="hidden lg:flex">
              <Link 
                href="/contact/assessment" 
                className="relative group inline-flex items-center gap-1.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white px-4 py-2 rounded-md hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 font-medium text-sm"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Get Assessment</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-md transition-opacity duration-200"></div>
              </Link>
            </div>

            {/* Enhanced Mobile menu button with animations */}
            <button
              className="lg:hidden relative p-2 rounded-xl text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-neutral-100)] transition-all duration-200 group overflow-hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {/* Button background hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl" />
              
              {/* Animated hamburger/close icon */}
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <span 
                  className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                    isMenuOpen 
                      ? 'rotate-45 translate-y-0.5' 
                      : 'rotate-0 translate-y-0'
                  }`}
                />
                <span 
                  className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out my-1 ${
                    isMenuOpen 
                      ? 'opacity-0 scale-0' 
                      : 'opacity-100 scale-100'
                  }`}
                />
                <span 
                  className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                    isMenuOpen 
                      ? '-rotate-45 -translate-y-0.5' 
                      : 'rotate-0 translate-y-0'
                  }`}
                />
              </div>
              
              {/* Ripple effect on click */}
              <div className="absolute inset-0 bg-[var(--color-primary)]/20 rounded-xl scale-0 group-active:scale-100 transition-transform duration-150" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Animations */}
        <div 
          className={`lg:hidden fixed left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-out overflow-hidden ${
            isMenuOpen 
              ? 'opacity-100 visible transform translate-y-0' 
              : 'opacity-0 invisible transform -translate-y-full'
          }`}
          style={{ 
            top: `${headerHeight}px`, 
            zIndex: 999999,
            maxHeight: isMenuOpen ? '80vh' : '0'
          }}
        >
          {/* Backdrop overlay with fade animation */}
          <div 
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-20' : 'opacity-0 pointer-events-none'
            }`}
            style={{ top: `${headerHeight}px` }}
            onClick={closeMenu}
          />
          
          {/* Menu content with staggered animations */}
          <div className="relative bg-white border-t border-[var(--color-border-light)]">
            <div className="max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {menuItems.map((item, index) => (
                <div 
                  key={item.name}
                  className={`transform transition-all duration-300 ease-out ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-full opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' 
                  }}
                >
                  <Link 
                    href={item.href}
                    className={`group flex items-center justify-between transition-all duration-200 font-medium py-4 px-6 border-b border-[var(--color-border-light)] relative overflow-hidden ${
                      isMenuItemActive(item)
                        ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10 font-semibold'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-neutral-100)]'
                    }`}
                    onClick={closeMenu}
                  >
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    
                    <span className="relative text-base font-medium group-hover:translate-x-2 transition-transform duration-200">
                      {item.name}
                    </span>
                    
                    {item.dropdown && (
                      <svg 
                        className="w-4 h-4 group-hover:translate-x-1 group-hover:text-[var(--color-primary)] transition-all duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </Link>
                  
                  {/* Mobile Submenu with enhanced animations */}
                  {item.dropdown && (
                    <div 
                      className={`bg-gradient-to-r from-[var(--color-neutral)] to-[var(--color-neutral-100)] border-b border-[var(--color-border-light)] overflow-hidden transition-all duration-300 ${
                        isMenuOpen 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                      style={{ 
                        transitionDelay: isMenuOpen ? `${(index + 1) * 50}ms` : '0ms' 
                      }}
                    >
                      {item.dropdown.sections.map((section, sectionIndex) => (
                        <div 
                          key={section.title} 
                          className={`px-6 py-3 transform transition-all duration-300 ${
                            isMenuOpen 
                              ? 'translate-y-0 opacity-100' 
                              : 'translate-y-4 opacity-0'
                          }`}
                          style={{ 
                            transitionDelay: isMenuOpen ? `${(index + sectionIndex + 2) * 30}ms` : '0ms' 
                          }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse" />
                            <h4 className="font-semibold text-[var(--color-text-primary)] text-sm uppercase tracking-wide">
                              {section.title}
                            </h4>
                          </div>
                          
                          <div className="space-y-1">
                            {section.links.map((link, linkIndex) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className={`group/link block transition-all duration-200 py-2 px-4 rounded-md text-sm relative overflow-hidden transform ${
                                  isMenuOpen 
                                    ? 'translate-x-0 opacity-100' 
                                    : 'translate-x-4 opacity-0'
                                } ${
                                  isDropdownLinkActive(link.href)
                                    ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10 font-semibold'
                                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-white/80'
                                }`}
                                style={{ 
                                  transitionDelay: isMenuOpen ? `${(index + sectionIndex + linkIndex + 3) * 20}ms` : '0ms' 
                                }}
                                onClick={(e) => {
                                  if (!handleAnchorClick(link.href)) {
                                    e.preventDefault()
                                  }
                                }}
                              >
                                {/* Link hover background */}
                                <div className="absolute inset-0 bg-[var(--color-primary)]/5 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-200 origin-left rounded-md" />
                                
                                <div className="relative flex items-center gap-2">
                                  <svg 
                                    className="w-3 h-3 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-200" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                                    {link.name}
                                  </span>
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
              
              {/* Enhanced CTA section with animation */}
              <div 
                className={`p-6 border-t border-[var(--color-border-light)] bg-gradient-to-r from-[var(--color-neutral)] to-white transform transition-all duration-400 ease-out ${
                  isMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${menuItems.length * 50 + 100}ms` : '0ms' 
                }}
              >
                <Link 
                  href="/contact/assessment" 
                  className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white px-6 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-base overflow-hidden transform hover:scale-105"
                  onClick={closeMenu}
                >
                  {/* Button background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  <svg 
                    className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-200">
                    Get Free Assessment
                  </span>
                  
                  {/* Ripple effect on click */}
                  <div className="absolute inset-0 bg-white/30 rounded-xl scale-0 group-active:scale-100 transition-transform duration-150" />
                </Link>
                
                {/* Additional info with fade animation */}
                <p 
                  className={`text-center text-[var(--color-text-muted)] text-sm mt-3 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${menuItems.length * 50 + 200}ms` : '0ms' 
                  }}
                >
                  🚀 No commitment • Expert consultation • Quick response
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}