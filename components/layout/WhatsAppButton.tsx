'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/constants'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-[99] h-14 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.35)] no-underline overflow-hidden whitespace-nowrap transition-all duration-300"
      style={{
        width: isHovered ? '168px' : '56px',
        paddingLeft: isHovered ? '18px' : '0',
        paddingRight: isHovered ? '22px' : '0',
        gap: isHovered ? '10px' : '0',
      }}
    >
      <MessageCircle size={22} fill="#fff" className="shrink-0" />
      <span
        className="text-sm font-medium transition-all duration-300 overflow-hidden whitespace-nowrap"
        style={{ opacity: isHovered ? 1 : 0, maxWidth: isHovered ? '120px' : '0px' }}
      >
        Fale conosco
      </span>
    </a>
  )
}
