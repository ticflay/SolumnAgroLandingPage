import { ArrowRight, MessageCircle, CheckCircle2, ChevronDown } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import { WHATSAPP_NUMBER } from '@/lib/constants'

const TRUST_SIGNALS = [
  'ART em todos os projetos',
  'Atendimento em todo o Brasil',
  'Retorno em até 24h.',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-green-950 min-h-screen flex flex-col justify-center">
      {/* Background image */}
      <div
        className="absolute top-0 right-0 w-full md:w-[55%] h-full bg-cover bg-center pointer-events-none opacity-25 md:opacity-100"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80)',
        }}
      />

      {/* Gradient overlays */}
      <div
        className="absolute top-0 right-0 w-full md:w-[55%] h-full pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, #0a1f04 0%, rgba(10,31,4,0.92) 18%, rgba(10,31,4,0.6) 45%, rgba(10,31,4,0.25) 75%, transparent 100%)',
        }}
      />
      <div
        className="absolute top-0 right-0 w-full md:w-[55%] h-full pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,31,4,0.6) 0%, transparent 25%, transparent 75%, rgba(10,31,4,0.8) 100%)',
        }}
      />

      {/* SVG wave pattern */}
      <svg
        className="absolute top-0 left-0 w-[55%] h-full opacity-[0.12] pointer-events-none"
        viewBox="0 0 700 500"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M0 420 Q100 380 200 400 Q350 430 500 360 Q650 290 700 310" fill="none" stroke="#1D9E75" strokeWidth="1.8" />
        <path d="M0 380 Q120 340 240 360 Q380 390 520 320 Q660 255 700 270" fill="none" stroke="#1D9E75" strokeWidth="1.3" />
        <path d="M0 340 Q130 305 260 325 Q400 350 540 285 Q680 220 700 235" fill="none" stroke="#1D9E75" strokeWidth="1" />
        <path d="M0 300 Q140 265 280 285 Q420 310 560 245 Q700 180 700 195" fill="none" stroke="#1D9E75" strokeWidth="0.8" />
        <path d="M0 260 Q150 225 300 245 Q450 270 590 205 Q700 145 700 155" fill="none" stroke="#1D9E75" strokeWidth="0.6" />
        <path d="M0 220 Q160 185 320 205 Q480 230 620 165 Q700 105 700 115" fill="none" stroke="#1D9E75" strokeWidth="0.45" />
        <path d="M0 180 Q180 145 350 165 Q520 190 660 125 L700 80" fill="none" stroke="#1D9E75" strokeWidth="0.35" />
        <path d="M0 460 Q80 440 180 450 Q320 465 480 400 Q620 340 700 355" fill="none" stroke="#1D9E75" strokeWidth="2" />
      </svg>

      <div className="max-w-[1120px] mx-auto px-6 py-16 md:py-32 relative z-[1] w-full">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-teal-500/[0.12] border border-teal-500/20 rounded-full py-1.5 px-[18px] pl-3 text-sm font-medium text-teal-400 mb-7">
            <span className="w-[7px] h-[7px] rounded-full bg-teal-400 animate-pulse-dot" />
            <span>Atuação em todo o Brasil</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="font-serif font-normal leading-[1.1] tracking-[-0.03em] text-white mb-[22px] max-w-[600px] text-[clamp(2.25rem,5vw,3.5rem)]">
            Consultoria ambiental<br />
            com <em className="text-teal-400 not-italic">excelência técnica</em>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-white/50 max-w-[480px] leading-[1.7] mb-10">
            Laudos agronômicos e projetos ambientais para empresas e construtoras que
            exigem qualidade, conformidade e agilidade.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex gap-3 flex-col sm:flex-row flex-wrap items-stretch sm:items-center">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-teal-500 text-white px-[30px] py-[15px] rounded-lg text-base font-medium no-underline transition-all duration-200 hover:-translate-y-0.5"
            >
              Solicitar orçamento <ArrowRight size={16} />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-[30px] py-[15px] rounded-lg text-base font-medium no-underline transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle size={18} fill="#fff" /> WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 bg-white/[0.06] text-white/75 px-[30px] py-[15px] rounded-lg text-base font-medium no-underline border border-white/[0.12] transition-all duration-200 hover:bg-white/10"
            >
              Conhecer serviços
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-8 md:mt-12 pt-8 md:pt-10 border-t border-white/[0.08] flex flex-wrap gap-x-8 gap-y-3">
            {TRUST_SIGNALS.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/45">
                <CheckCircle2 size={14} className="text-teal-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25 text-xs tracking-widest uppercase animate-bounce hover:text-white/50 transition-colors duration-200 no-underline"
      >
        <span>Role</span>
        <ChevronDown size={14} />
      </a>
    </section>
  )
}
