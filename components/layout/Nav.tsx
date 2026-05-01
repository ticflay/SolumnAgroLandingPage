'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { NAV_LINKS } from '@/lib/constants'

interface NavProps {
  isServicesEnabled?: boolean
}

export default function Nav({ isServicesEnabled = false }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

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
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="no-underline flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Solum Consultoria"
            width={48}
            height={48}
            priority
            className="rounded-full object-cover"
          />
          <span className="flex items-baseline gap-0.5">
            <span
              className={`text-[1.375rem] font-bold tracking-[-0.03em] font-serif transition-colors duration-300 ${
                isScrolled ? 'text-green-900' : 'text-white'
              }`}
            >
              Solum
            </span>
            <span className="text-[1.375rem] font-light text-teal-600 tracking-[-0.03em] font-serif">
              Consultoria
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) =>
            link.subGroups && isServicesEnabled ? (
              <div key={link.href} className="relative group">
                <a
                  href={link.href}
                  className={`flex items-center gap-1 text-sm no-underline font-normal tracking-[0.01em] transition-colors duration-200 ${
                    isScrolled ? 'text-sand-500' : 'text-white/60'
                  }`}
                >
                  {link.label}
                  <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180" />
                </a>

                {/* Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 hidden group-hover:block">
                  <div className="bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-sand-100 p-2 min-w-[240px]">
                    {link.subGroups.map((group, i) => (
                      <div key={group.href}>
                        {i > 0 && <div className="border-t border-sand-100 my-1.5" />}
                        <a
                          href={group.href}
                          className="block px-3 py-2 text-sm font-semibold text-green-950 rounded-lg hover:bg-sand-50 no-underline transition-colors duration-150"
                        >
                          {group.label}
                        </a>
                        {group.items.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-2 px-3 py-1.5 ml-2 text-sm text-sand-500 rounded-lg hover:bg-sand-50 hover:text-sand-700 no-underline transition-colors duration-150"
                          >
                            <ChevronRight size={12} className="text-sand-300 shrink-0" />
                            {item.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.subGroups ? '/#servicos' : link.href}
                className={`text-sm no-underline font-normal tracking-[0.01em] transition-colors duration-200 ${
                  isScrolled ? 'text-sand-500' : 'text-white/60'
                }`}
              >
                {link.label}
              </a>
            )
          )}
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white px-6 py-5 border-b border-sand-200 flex flex-col gap-1 md:hidden">
          {NAV_LINKS.map((link) =>
            link.subGroups && isServicesEnabled ? (
              <div key={link.href}>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between py-2 text-sm text-sand-500 font-normal bg-transparent border-0 cursor-pointer p-0"
                >
                  {link.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-3 pb-2 flex flex-col gap-0.5 border-l-2 border-sand-100 ml-1 mt-1">
                    {link.subGroups.map((group, i) => (
                      <div key={group.href}>
                        {i > 0 && <div className="border-t border-sand-100 my-1.5" />}
                        <a
                          href={group.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-1.5 px-2 text-sm font-semibold text-green-950 no-underline rounded hover:bg-sand-50"
                        >
                          {group.label}
                        </a>
                        {group.items.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 py-1.5 px-2 ml-2 text-sm text-sand-500 no-underline rounded hover:bg-sand-50"
                          >
                            <ChevronRight size={11} className="text-sand-300 shrink-0" />
                            {item.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.href}
                href={link.subGroups ? '/#servicos' : link.href}
                onClick={() => setIsOpen(false)}
                className="py-2 text-sm text-sand-500 no-underline font-normal"
              >
                {link.label}
              </a>
            )
          )}
          <div className="border-t border-sand-100 mt-2 pt-3">
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-white no-underline bg-green-900 px-[22px] py-3 rounded-[7px] text-center block"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
