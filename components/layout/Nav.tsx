'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from '@/components/brand/Logo'
import { NAV_LINKS } from '@/lib/constants'

interface NavProps {
  isServicesEnabled?: boolean
  isReviewEnabled?: boolean
}

const linkClass = 'text-[15px] text-ink no-underline transition-colors duration-200 hover:text-forest'

export default function Nav({ isServicesEnabled = false, isReviewEnabled = false }: NavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  const links = NAV_LINKS.filter((link) => !link.requiresReviews || isReviewEnabled)

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-6">
        <a href="/" className="no-underline" aria-label="Solumn Soluções Ambientais, página inicial">
          <Logo clipId="logo-nav" />
        </a>

        {/* Desktop */}
        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {links.map((link) =>
            link.subGroups && isServicesEnabled ? (
              <div key={link.href} className="group relative">
                <a href={link.href} className={`${linkClass} flex items-center gap-1`}>
                  {link.label}
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </a>
                <div className="absolute left-1/2 top-full hidden -translate-x-1/2 pt-3 group-hover:block group-focus-within:block">
                  <div className="min-w-[260px] rounded-lg border border-line bg-sheet p-2 shadow-[0_10px_30px_rgba(19,38,28,0.12)]">
                    {link.subGroups.map((group, i) => (
                      <div key={group.href}>
                        {i > 0 && <div className="my-1.5 border-t border-contour" />}
                        <a
                          href={group.href}
                          className="block rounded px-3 py-2 text-sm font-semibold text-ink no-underline hover:bg-paper"
                        >
                          {group.label}
                        </a>
                        {group.items.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block rounded px-3 py-1.5 pl-5 text-sm text-muted no-underline hover:bg-paper hover:text-ink"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={link.href} href={link.subGroups ? '/#servicos' : link.href} className={linkClass}>
                {link.label}
              </a>
            )
          )}
          <a
            href="/#contato"
            className="rounded bg-forest px-[18px] py-3 text-[15px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-forest-dark"
          >
            Solicitar orçamento
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded border-0 bg-transparent text-ink md:hidden"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile */}
      {isOpen && (
        <nav
          aria-label="Principal"
          className="absolute left-0 right-0 top-[72px] flex flex-col gap-1 border-b border-line bg-paper px-6 py-5 md:hidden"
        >
          {links.map((link) =>
            link.subGroups && isServicesEnabled ? (
              <div key={link.href}>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  aria-expanded={isMobileServicesOpen}
                  className="flex w-full items-center justify-between border-0 bg-transparent p-0 py-3 text-base text-ink"
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="mb-2 ml-1 flex flex-col gap-0.5 border-l-2 border-contour pl-3">
                    {link.subGroups.map((group) => (
                      <div key={group.href}>
                        <a
                          href={group.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-2 py-2 text-sm font-semibold text-ink no-underline"
                        >
                          {group.label}
                        </a>
                        {group.items.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-2 py-1.5 pl-4 text-sm text-muted no-underline"
                          >
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
                className="py-3 text-base text-ink no-underline"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="/#contato"
            onClick={() => setIsOpen(false)}
            className="mt-3 block rounded bg-forest px-5 py-3.5 text-center text-base font-semibold text-white no-underline"
          >
            Solicitar orçamento
          </a>
        </nav>
      )}
    </header>
  )
}
