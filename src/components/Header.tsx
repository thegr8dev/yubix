'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-900 hover:text-blue-800 transition-colors">
              YUBIX
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Products
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Services
            </Link>
            <Link href="/innovation" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Innovation Lab
            </Link>
            <Link href="/resilience" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Resilience Center
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/contact" 
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              Talk to Our Experts
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-3">
              <Link 
                href="/" 
                className="block text-gray-700 hover:text-blue-900 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-700 hover:text-blue-900 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/products" 
                className="block text-gray-700 hover:text-blue-900 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/services" 
                className="block text-gray-700 hover:text-blue-900 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/innovation" 
                className="block text-gray-700 hover:text-blue-900 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Innovation Lab
              </Link>
              <Link 
                href="/resilience" 
                className="block text-gray-700 hover:text-blue-900 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resilience Center
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-700 hover:text-blue-900 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-3">
                <Link 
                  href="/contact" 
                  className="block bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Talk to Our Experts
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}