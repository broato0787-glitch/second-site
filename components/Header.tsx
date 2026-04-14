'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface HeaderProps {
  currentPage?: 'home' | 'about' | 'program' | 'contact'
}

export function Header({ currentPage = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (page: string) => currentPage === page ? 'text-secondary' : 'text-foreground'

  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/swesco.jpg"
              alt="SWESCO MACHINE BOYS Logo"
              width={50}
              height={50}
              className="w-12 h-12 rounded"
            />
            <div className="hidden sm:block">
              <h1 className="font-bold text-primary text-lg">SWESCO MACHINE BOYS</h1>
              <p className="text-sm text-gray-600">23rd Instrumentalist Celebration</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={`font-medium transition ${isActive('home')}`}>
              Home
            </Link>
            <Link href="/about" className={`font-medium transition ${isActive('about')}`}>
              About
            </Link>
            <Link href="/program" className={`font-medium transition ${isActive('program')}`}>
              Program
            </Link>
            <Link href="/contact" className={`font-medium transition ${isActive('contact')}`}>
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-gray-100"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav id="mobile-menu" className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className={`block px-3 py-2 rounded font-medium ${isActive('home')} hover:bg-gray-100`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 rounded font-medium ${isActive('about')} hover:bg-gray-100`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/program"
              className={`block px-3 py-2 rounded font-medium ${isActive('program')} hover:bg-gray-100`}
              onClick={() => setIsMenuOpen(false)}
            >
              Program
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 rounded font-medium ${isActive('contact')} hover:bg-gray-100`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
