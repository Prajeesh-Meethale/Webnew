'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 22H22L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 10L7 20H17L12 10Z" fill="white"/>
                </svg>
              </div>
              <span className="font-semibold text-xl text-white tracking-tight">ArchDrift</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#how" className="text-[13px] font-medium text-white/80 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#results" className="text-[13px] font-medium text-white/80 hover:text-white transition-colors">
              Results
            </Link>
            <Link href="#case-studies" className="text-[13px] font-medium text-white/80 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link href="#services" className="text-[13px] font-medium text-white/80 hover:text-white transition-colors">
              Services
            </Link>
            <button className="text-[13px] font-medium text-white/80 hover:text-white transition-colors flex items-center gap-1">
              Resources <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>
            <Link href="#agencies" className="text-[13px] font-medium text-white/80 hover:text-white transition-colors">
              For Agencies
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-[13px] font-semibold rounded-md transition-all shadow-[0_0_15px_rgba(75,50,255,0.4)]">
              Request Investigation <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="#how" className="block text-[13px] font-medium text-white/80 hover:text-white transition-colors py-2">
              How It Works
            </Link>
            <Link href="#results" className="block text-[13px] font-medium text-white/80 hover:text-white transition-colors py-2">
              Results
            </Link>
            <Link href="#case-studies" className="block text-[13px] font-medium text-white/80 hover:text-white transition-colors py-2">
              Case Studies
            </Link>
            <Link href="#services" className="block text-[13px] font-medium text-white/80 hover:text-white transition-colors py-2">
              Services
            </Link>
            <button className="block w-full text-left text-[13px] font-medium text-white/80 hover:text-white transition-colors py-2 flex items-center gap-1">
              Resources <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <Link href="#agencies" className="block text-[13px] font-medium text-white/80 hover:text-white transition-colors py-2">
              For Agencies
            </Link>
            <button className="w-full mt-4 flex items-center justify-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-[13px] font-semibold rounded-md transition-all shadow-[0_0_15px_rgba(75,50,255,0.4)]">
              Request Investigation <ArrowRight className="w-4 h-4" />
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
