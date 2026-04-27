'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-white/[0.92] border-black/[0.08] shadow-[0_1px_24px_rgba(0,0,0,0.06)]'
          : 'bg-green-950/40 border-white/[0.06]'
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="no-underline flex items-baseline gap-0.5">
          <span
            className={`text-[1.75rem] font-bold tracking-[-0.03em] font-serif transition-colors duration-300 ${
              isScrolled ? 'text-green-900' : 'text-white'
            }`}
          >
            Solum
          </span>
          <span className="text-[1.75rem] font-light text-teal-600 tracking-[-0.03em] font-serif">
            Agro
          </span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm no-underline font-normal tracking-[0.01em] transition-colors duration-200 ${
                isScrolled ? 'text-sand-500' : 'text-white/60'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-sm font-medium text-white no-underline bg-green-900 px-[22px] py-[9px] rounded-[7px] hover:bg-green-800 transition-colors duration-200"
          >
            Solicitar orçamento
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-transparent border-0 cursor-pointer p-1"
          aria-label="Menu"
        >
          {isOpen ? (
            <X size={22} className={isScrolled ? 'text-sand-900' : 'text-white'} />
          ) : (
            <Menu size={22} className={isScrolled ? 'text-sand-900' : 'text-white'} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white px-6 py-5 border-b border-sand-200 flex flex-col gap-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-sand-500 no-underline font-normal"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-white no-underline bg-green-900 px-[22px] py-3 rounded-[7px] text-center"
          >
            Solicitar orçamento
          </a>
        </div>
      )}
    </nav>
  )
}
